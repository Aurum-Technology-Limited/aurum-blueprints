---
id: fundraising-investors.down-round-recapitalisation
name: Down Round & Recapitalisation
description: "A clear cash-out date, the preference stack and anti-dilution exposure mapped, a fair process with counsel, and plans that keep the team, the investors and the company together through a down round or recap."
category: business
version: 1.0.0
tags: [fundraising-investors, down-round-recapitalisation, founder, manager, down-round, recapitalisation, anti-dilution, pay-to-play, option-repricing]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - board-meeting
    - operational-checklist
    - one-on-one
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Down Round & Recapitalisation
          description: "Handling a down round or recapitalisation, protecting the team, renegotiating terms and keeping investors aligned through a hard period."
          projects:
            - name: Cash-out date and runway reality check
              description: |-
                ## Purpose
                Every decision in a down round depends on one date: the week the company can no longer pay salaries and suppliers without new money. Working it out from the bank balance, committed costs and realistic collections, not the budget, tells the board how much time there is to run a process and how weak the negotiating position really is.

                ## Milestones
                1. A cash-out date calculated from actual bank balances, payroll, rent, debt service and expected receipts.
                2. A second date showing the effect of cuts that could be made within 30 days.
                3. The minimum cash buffer the board will not go below agreed and written down.
                4. Both dates and the buffer presented to the board in a single page.

                ## Notes
                Use receipts you have evidence for, not the sales pipeline. Founders almost always overestimate collections in the month a raise is failing.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The board has a one-page note giving the cash-out date, a cut-adjusted date and the agreed minimum buffer, built from bank data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export current bank balances and the next 90 days of committed payments"
                - "List receipts expected in the next 13 weeks with evidence for each"
                - "Calculate the cash-out date with and without 30-day cuts"
                - "Agree the minimum cash buffer with the board chair"
            - name: Down round alternatives paper for the board
              description: |-
                ## Purpose
                A down round is one option among several: an insider bridge, a structured flat round, a sale, a merger, deep cost cuts or an orderly wind-down. Directors who have seen all of them compared on one page make a defensible choice, and the record that they did so matters later if any shareholder challenges the outcome.

                ## Milestones
                1. Five or six alternatives described in a paragraph each, with likely cash, timing and dilution.
                2. Each alternative scored on runway gained, effect on common holders, execution risk and time to close.
                3. Counsel's comments on process and approval requirements added for the preferred options.
                4. A board resolution recording which path the company will pursue first, and the fallback.

                ## Notes
                Include wind-down honestly. Boards that never priced it tend to accept worse terms because the comparison is missing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Board minutes record a chosen path and a fallback after reviewing a written comparison of at least five alternatives."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write one paragraph on each alternative the company could realistically take"
                - "Estimate cash raised, months gained and dilution for each alternative"
                - "Ask counsel which approvals each option would need"
                - "Circulate the paper to directors a week before the decision meeting"
            - name: Liquidation preference waterfall at today's value
              description: |-
                ## Purpose
                Founders often learn in the middle of a negotiation that, at the new price, the preference stack swallows every exit below a certain value and common shares receive nothing. Modelling the waterfall at a range of exit values before talks start shows who is in the money, who is not, and why each class will behave the way it does at the table.

                ## Milestones
                1. Every share class listed with its preference amount, multiple, seniority and participation rights.
                2. A waterfall showing payouts by class at five exit values from distressed to optimistic.
                3. The exit value below which common holders and option holders receive nothing clearly marked.
                4. The model checked by counsel or the finance lead against the articles or charter.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed waterfall model shows payouts by class at five exit values and names the break point for common holders."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull preference terms for each class from the current articles or charter"
                - "Build payouts by class at five exit values in one spreadsheet"
                - "Mark the exit value where common and options start to receive money"
                - "Refresh the waterfall with the latest terms on the table @recurring(quarterly)"
            - name: Map of investor rights a down round triggers
              description: |-
                ## Purpose
                A lower price sets off rights that sit quietly in earlier documents: anti-dilution adjustments, pre-emption, consent rights over new senior shares, most favoured nation clauses in side letters and SAFEs. Listing them before terms are agreed prevents the unpleasant discovery, at signing, that one small investor can block the round or that the adjustment doubles the dilution everyone modelled.

                ## Milestones
                1. Every shareholder agreement, side letter, SAFE, note and warrant read for down round triggers.
                2. A table of each right, who holds it, what triggers it and what it does.
                3. Holders with blocking or consent rights identified by name with their thresholds.
                4. The table reviewed by counsel and attached to the board paper.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A counsel-reviewed table lists each down round trigger, its holder and its effect, including every blocking consent."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather every investor agreement, side letter and convertible instrument in one folder"
                - "List each anti-dilution, consent and pre-emption right with its trigger"
                - "Ask the agent to summarise the side letters into the same table format"
                - "Send the finished table to counsel for review"
            - name: Recapitalisation adviser line-up
              description: |-
                ## Purpose
                Down rounds go wrong when the company's usual counsel also acts for the lead investor, or when nobody independent has looked at the price. Choosing company counsel with distressed financing experience, and deciding early whether an independent financial adviser or fairness view is needed, gives the board a process it can defend.

                ## Milestones
                1. Company counsel confirmed, with any conflicts with investors disclosed in writing.
                2. A decision recorded on whether to appoint an independent financial adviser.
                3. Engagement letters signed with scope, fee caps and who instructs each adviser.
                4. A single contact list for advisers, the board and the lead investor's counsel.

                ## Notes
                Ask candidate counsel how many insider-led or recapitalisation rounds they have handled in the last two years, and on which side.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Signed engagement letters exist for company counsel and any independent adviser, with conflicts disclosed in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the current counsel to disclose any relationship with the likely lead investor"
                - "Interview two firms with recent recapitalisation experience"
                - "Decide with the board whether an independent valuation or fairness view is needed"
                - "Sign engagement letters with fee caps and a named instructing director"
            - name: Independent committee and conflict map
              description: |-
                ## Purpose
                When existing investors with board seats are also the ones setting the new price, their interests and those of common holders split. Setting up a committee of disinterested directors to negotiate, with a written conflict map of who sits on which side, is the single strongest protection for the fairness of the process.

                ## Milestones
                1. Each director's and major shareholder's interest in the new round written in a conflict map.
                2. A committee of directors without a financial interest in the new money appointed by resolution.
                3. The committee's mandate, authority and access to advisers written down.
                4. Conflicted directors' recusal from relevant votes recorded in minutes.

                ## Notes
                If the board has no truly independent director, counsel may suggest adding one for the process. Ask early, because appointments take weeks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board resolution appoints a committee of disinterested directors with a written mandate, and a conflict map is on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every director and major holder with their stake in the proposed round"
                - "Ask counsel which directors count as disinterested for this round"
                - "Draft the committee mandate and authority for board approval"
                - "Record recusals in the minutes of every vote on the round"
            - name: Directors and officers insurance check before the vote
              description: |-
                ## Purpose
                Shareholders who lose most in a recapitalisation sometimes sue the directors who approved it, and many small company policies have low limits or exclusions for insider transactions. Checking the policy before the board votes gives directors time to raise the limit or buy run-off cover if they need it.

                ## Milestones
                1. The current directors and officers policy, limit, retention and exclusions summarised in a page.
                2. The broker asked in writing whether an insider-led recapitalisation is covered.
                3. A decision recorded on whether to increase the limit or add cover.
                4. Indemnity agreements for each director located and confirmed as signed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has the broker's written answer on cover for the recapitalisation and a recorded decision on the policy limit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the current directors and officers policy and schedule"
                - "Ask the broker in writing whether the planned recapitalisation is covered"
                - "Confirm each director has a signed indemnity agreement on file"
                - "Review the policy limit and exclusions before each renewal @recurring(yearly)"
            - name: Confidentiality and leak plan for the process
              description: |-
                ## Purpose
                News of a down round reaches staff, customers and competitors faster than founders expect, usually through a recruiter or an investor's associate. Deciding who knows what, and when, with a holding statement ready for the day it leaks, keeps the company in charge of its own story.

                ## Milestones
                1. A list of everyone inside and outside the company who knows about the process.
                2. Confidentiality reminders sent to advisers and any prospective investors.
                3. A short holding statement for staff, customers and press approved by counsel.
                4. A named person who handles any outside enquiry while talks continue.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An insider list and a counsel-approved holding statement exist, and one named person handles outside enquiries."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the list of people who currently know about the process"
                - "Confirm prospective investors have signed or accepted confidentiality terms"
                - "Draft a three-sentence holding statement for staff and customers"
                - "Name one person to answer any press or customer question"
            - name: Recapitalisation risk register
              description: |-
                ## Purpose
                Recaps have more ways to fail than ordinary rounds: a holdout with a consent right, a lender who will not waive, a key engineer who resigns, a customer who hears the news first. Keeping those risks in one register with an owner and a next step stops them being discussed once and then forgotten.

                ## Milestones
                1. A register holding at least ten risks across legal, investor, lender, team, customer and cash.
                2. Each risk rated for likelihood and impact with a named owner.
                3. A mitigation and a trigger point written for every high risk.
                4. The register reviewed by the committee at each steering meeting.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register of at least ten rated risks with owners and mitigations is reviewed at every steering meeting until closing."
                cadence: rolling
              tasks:
                - "Create the register from the risk register template"
                - "Add ten risks covering investors, lenders, team, customers and cash"
                - "Assign an owner and a trigger point to each high risk"
                - "Re-rate every open risk and close the ones that have passed @recurring(monthly:12)"
            - name: Weekly 13-week cash forecast during the recap
              description: |-
                ## Purpose
                While terms are argued over, the cash-out date moves every week, and the side that knows it best negotiates best. A 13-week forecast rolled forward every Monday, with actuals against the prior forecast, tells the board when to accept terms and when it can afford to push back.

                ## Milestones
                1. A 13-week receipts and payments forecast in a fixed format.
                2. Actuals compared with last week's forecast and differences explained.
                3. The forecast shared with the committee every Monday.
                4. A pre-agreed trigger that calls an emergency board meeting if cash falls below the buffer.

                ## Notes
                Keep the history in the **Metrics log** template so the trend in forecast accuracy is visible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A 13-week forecast with actual versus forecast is sent to the committee every Monday until the round closes."
                cadence: rolling
              tasks:
                - "Set up the 13-week forecast with receipts and payments by week"
                - "Roll the forecast forward and compare with actuals @recurring(weekly:mon)"
                - "Write the emergency trigger and who calls the board meeting"
                - "Log forecast accuracy for the month in the metrics log @recurring(monthly:2)"
            - name: Weekly recap steering call
              description: |-
                ## Purpose
                Recapitalisations stall in the gaps between counsel, the committee, the lead investor and the finance team, each waiting for someone else. A 30-minute weekly call with a fixed agenda of open terms, consents outstanding, documents and cash keeps every party moving and puts the delays on the record.

                ## Milestones
                1. A standing weekly call with the committee chair, company counsel and the finance lead.
                2. A fixed agenda covering terms, consents, documents, cash and risks.
                3. Actions from each call sent out in writing the same day.
                4. The call stood down only after closing filings are confirmed.

                ## Notes
                Keep the lead investor's counsel to a separate slot. The committee needs time to talk without the other side present.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written actions exist for a weekly steering call held every week from the alternatives decision to closing."
                cadence: rolling
              tasks:
                - "Book a 30-minute recurring slot with the committee chair and counsel"
                - "Write the five-item fixed agenda and share it"
                - "Run the call and send written actions the same day @recurring(weekly:tue)"
                - "Agree the condition for standing the call down after closing"
            - name: Investor alignment tracker
              description: |-
                ## Purpose
                Existing investors split in a down round: some fund their pro rata, some cannot, some want to be bought out, a few will fight. Knowing where each one stands, and what would move them, decides whether the round needs a rights offering, a pay-to-play or a simple majority vote.

                ## Milestones
                1. Every investor holding more than one percent listed with their likely position.
                2. Each investor's reserves, fund life and constraints noted where known.
                3. A named partner contact and the date of last conversation for each.
                4. Majority and class vote thresholds shown against confirmed support.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows each significant investor's position and contact date, with confirmed support counted against every vote threshold."
                cadence: rolling
              tasks:
                - "List every investor above one percent with their current partner contact"
                - "Ask each lead partner directly whether they will fund their pro rata"
                - "Count confirmed support against each class vote threshold"
                - "Call every significant investor whose position is unclear @recurring(monthly:8)"
            - name: Lender consents and covenant watch
              description: |-
                ## Purpose
                Existing loan agreements usually restrict new senior equity, changes of control and preference resets, and a breached covenant in the middle of a recap hands the lender the deciding vote. Watching covenants monthly and asking for the needed consents early keeps the lender a party to the plan, not an obstacle.

                ## Milestones
                1. Every loan, facility and warrant agreement checked for clauses the recap touches.
                2. Covenant headroom calculated for each test date over the next six months.
                3. Consents or waivers needed for the recap requested in writing.
                4. Signed lender consents filed with the closing documents.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly covenant headroom is recorded and every lender consent the recap needs is signed before closing."
                cadence: rolling
              tasks:
                - "List the clauses in each loan agreement that the recap would touch"
                - "Calculate covenant headroom for the next six test dates"
                - "Send the lender a written request for the consents the recap needs"
                - "Recalculate covenant headroom from the latest management accounts @recurring(monthly:20)"
            - name: Key people retention watch list
              description: |-
                ## Purpose
                When the new price puts everyone's options under water, the people with the best outside offers leave first, often within weeks of the announcement. A short list of the people the company cannot lose, with a named manager responsible for each, makes retention a managed task instead of a series of resignation surprises.

                ## Milestones
                1. Fifteen or fewer critical people named, with the reason each one matters.
                2. Each person's vested and unvested equity value at the new price calculated.
                3. A manager assigned to each person with a conversation completed.
                4. Flight risk rated and reviewed each month until the round settles.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of no more than fifteen critical people, each with an owner and a monthly flight-risk rating, is kept for a year after the round."
                cadence: rolling
              tasks:
                - "Name the people whose departure would most damage the company"
                - "Calculate each person's equity value at the proposed new price"
                - "Re-rate flight risk with each owning manager @recurring(monthly:3)"
                - "Report regretted departures and near misses to the board @recurring(quarterly)"
            - name: Monthly all-hands through the hard period
              description: |-
                ## Purpose
                Staff fill silence with rumour, and the rumour is always worse than the truth. A monthly all-hands with the real runway, what is being done about it and what employees can and cannot be told yet keeps trust intact long enough for the round to close.

                ## Milestones
                1. A monthly all-hands slot with founders and the finance lead present.
                2. A standard slide covering runway, progress on funding and what changes for staff.
                3. Anonymous questions collected beforehand and answered, or the reason they cannot be.
                4. Counsel's guidance on what may be disclosed checked before each session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly all-hands is held with a runway update and answered anonymous questions for every month until six months after closing."
                cadence: rolling
              tasks:
                - "Set up an anonymous question form for staff"
                - "Check with counsel what can be shared before each session"
                - "Hold the all-hands with the runway and funding update @recurring(monthly:16)"
                - "Post written answers to the questions not covered live"
            - name: Shareholder questions and complaints log
              description: |-
                ## Purpose
                Angels, former employees and small holders will ask why their shares are being diluted, and some will threaten to complain. Logging every question with the date, the answer given and who gave it creates a consistent message and a record counsel will want if any complaint becomes formal.

                ## Milestones
                1. A single log for shareholder questions with date, holder, question, answer and responder.
                2. Standard answers to the ten most likely questions approved by counsel.
                3. Every entry answered within an agreed number of working days.
                4. Formal complaints passed to counsel the same day they arrive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every shareholder question since the process began is logged with its answer, and formal complaints show a same-day referral to counsel."
                cadence: rolling
              tasks:
                - "Create the log with date, holder, question, answer and responder columns"
                - "Ask the agent to draft standard answers to the ten likeliest questions for counsel review"
                - "Clear the log and chase anything unanswered @recurring(weekly:fri)"
                - "Forward any formal complaint to counsel on the day it arrives"
            - name: Customer and supplier confidence check-ins
              description: |-
                ## Purpose
                Large customers and critical suppliers read a down round as a risk to the company's survival, and some will quietly start a replacement search. Speaking to the top accounts before they hear it elsewhere, with a clear account of runway after the round, keeps renewals and credit terms in place.

                ## Milestones
                1. The top ten customers and five critical suppliers listed with an owner each.
                2. A short approved script for explaining the round and the runway it buys.
                3. A conversation held with each listed account within two weeks of announcement.
                4. Any change in renewal intent or credit terms recorded and escalated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every top-ten customer and critical supplier has had a recorded conversation within two weeks of the announcement, with concerns escalated."
                cadence: rolling
              tasks:
                - "List the top ten customers and five critical suppliers with an owner each"
                - "Write a short script on what the round means for them"
                - "Review renewal and credit-term signals from each listed account @recurring(monthly:24)"
                - "Escalate any account signalling it may leave to the founders"
            - name: Spend control rules while the recap runs
              description: |-
                ## Purpose
                Every pound or dollar spent during a recap shortens the time available to negotiate. Temporary approval rules, with a lower threshold for founder sign-off and a freeze on new commitments over a set length, show investors the company is serious about cash and buy weeks of runway.

                ## Milestones
                1. A written spending threshold above which a founder must approve.
                2. A freeze on new contracts longer than an agreed term without board consent.
                3. Hiring paused except for named replacement roles.
                4. Monthly spend against the cut plan reviewed by the committee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written temporary spend rules are in force and monthly spend against the cut plan is reported to the committee."
                cadence: rolling
              tasks:
                - "Set the temporary founder approval threshold and announce it to budget holders"
                - "List every contract up for renewal in the next six months"
                - "Pause open hiring except named replacement roles"
                - "Compare actual spend against the cut plan and report variances @recurring(monthly:27)"
            - name: Anti-dilution formulas worked through by hand
              description: |-
                ## Purpose
                Broad-based weighted average and full ratchet protection can produce very different results from the same new price, and founders who cannot calculate them rely on the other side's spreadsheet. Working both formulas by hand on your own numbers takes an afternoon and changes how you negotiate.

                ## Milestones
                1. The anti-dilution clause in each class's terms read and the formula type identified.
                2. The new conversion price calculated by hand for each class under the proposed price.
                3. The extra shares each class would receive shown in fully diluted terms.
                4. The calculation checked against counsel's or the investor's model, with any difference explained.

                ## Notes
                Check carefully which shares count in the base for a broad-based formula. Small definitional differences move the result.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand calculation of the anti-dilution adjustment for each class reconciles to counsel's model within a rounding difference."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the anti-dilution clause for each preferred class"
                - "Work the weighted average formula on the proposed price by hand"
                - "Work a full ratchet on the same price for comparison"
                - "Reconcile your result with counsel's model"
            - name: Pay-to-play mechanics explained
              description: |-
                ## Purpose
                Pay-to-play provisions convert the preferred shares of investors who do not fund their share of the new round into common or a weaker class. Understanding the variants, and who in your investor base each one would hit, tells you whether proposing one will bring the money in or start a fight.

                ## Milestones
                1. The main pay-to-play variants written up in plain language with an example each.
                2. Each existing investor's likely treatment under two variants set out.
                3. The approvals a pay-to-play would need under your documents confirmed with counsel.
                4. A view on whether to propose one, with reasons, ready for the committee.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The committee has a written note on two pay-to-play variants, their effect on each investor and the approvals they need."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read two published explanations of pay-to-play from law firm guides"
                - "Apply two variants to your own investor list"
                - "Ask counsel which votes a pay-to-play needs under your documents"
                - "Write a one-page view for the committee"
            - name: Cram-down and preference reset structures
              description: |-
                ## Purpose
                Once the stack is so large that new money will not invest on top of it, recaps often reset preferences, convert old classes to common or issue a senior class with a multiple. Learning how these structures move value between old investors, new investors and staff lets you recognise which one is on the table and what it costs each group.

                ## Milestones
                1. Three common recap structures written up with a simple numerical example each.
                2. Each structure modelled on your own stack at a realistic exit value.
                3. The winners and losers of each structure shown in a single table.
                4. Questions for counsel and the lead investor drafted from the comparison.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table compares three recap structures on your own stack and shows the payout change for each holder group."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a short example of a preference reset, a conversion to common and a senior multiple"
                - "Model each structure on your own waterfall"
                - "Put the payout changes for each holder group in one table"
                - "List the questions the comparison raises for counsel"
            - name: Directors' duties briefing for a distressed round
              description: |-
                ## Purpose
                Directors approving a financing when cash is short owe duties that can shift towards creditors and that require extra care where insiders benefit. A briefing from counsel on how those duties apply in your jurisdiction, recorded in the minutes, means every director votes knowing what is expected of them.

                ## Milestones
                1. A session with counsel on directors' duties in an insider or distressed financing.
                2. A written summary of the duties and the process steps counsel recommends.
                3. The point at which creditor interests become relevant explained for your situation.
                4. The briefing and attendance recorded in board minutes.

                ## Notes
                This is a briefing to organise, not legal advice from a blueprint. The duties differ by jurisdiction and company form.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Board minutes record a counsel briefing on directors' duties for this round, with a written summary circulated to every director."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel for a 45-minute duties briefing before the decision meeting"
                - "Send directors three questions to think about in advance"
                - "Ask counsel for a one-page written summary afterwards"
                - "Record the briefing and attendance in the minutes"
            - name: Accounting for option repricing with the accountant
              description: |-
                ## Purpose
                Repricing or exchanging underwater options is usually treated as a modification under the accounting standard the company reports under, with an extra share-based payment charge. Learning how the charge is calculated before the board decides avoids a surprise in the next set of accounts and an awkward conversation with the auditor.

                ## Milestones
                1. The accountant's explanation of modification accounting for your reporting standard written up.
                2. An estimate of the incremental charge for two repricing options.
                3. The effect on reported results for the year shown in a short note.
                4. The auditor told of the planned treatment before the board approves it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The board paper on repricing includes the accountant's estimate of the incremental charge for each option considered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the accountant how option modifications are treated under your standard"
                - "Request an estimated charge for a straight repricing and an exchange"
                - "Add the estimate to the repricing board paper"
                - "Let the auditor know the planned treatment in writing"
            - name: Reading a recap term sheet clause by clause
              description: |-
                ## Purpose
                Recapitalisation term sheets carry clauses ordinary rounds rarely have: conversions of existing classes, pay-to-play, waivers of anti-dilution, preference resets and new board control. Reading one clause by clause with a list of what each does to your own holders turns a dense document into a short list of points to negotiate.

                ## Milestones
                1. Each clause of the draft term sheet summarised in a sentence of plain language.
                2. The effect of each clause on founders, staff, old investors and new money noted.
                3. Clauses that need a class vote or individual consent flagged.
                4. A ranked list of the five clauses most worth negotiating sent to counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A clause-by-clause summary of the recap term sheet exists, with a ranked list of five negotiating points agreed with counsel."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-sentence plain summary beside each clause"
                - "Note who gains and who loses from each clause"
                - "Flag clauses that need a class vote or individual consent"
                - "Send the five most important negotiating points to counsel"
            - name: Option repricing or exchange decision
              description: |-
                ## Purpose
                Options with an exercise price far above the new share value retain nobody. Choosing between a straight repricing, a value-for-value exchange, new grants on top or doing nothing, with tax, accounting and approval consequences set out, gives staff a reason to stay and the board a clear record of why.

                ## Milestones
                1. The number and value of underwater options at the new price calculated.
                2. Four approaches compared on cost, dilution, retention effect and approvals needed.
                3. Tax adviser and counsel comments obtained on the preferred approach.
                4. A board resolution adopting one approach, with eligibility rules.

                ## Notes
                Repricing often needs a new valuation for the exercise price, and some plans need shareholder approval. Check both before promising anything to staff.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has adopted one repricing or exchange approach by resolution, with eligibility rules and adviser comments on file."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count underwater options by holder at the proposed new price"
                - "Compare repricing, exchange, top-up grants and no action in one table"
                - "Ask the tax adviser about the effect on each holder group"
                - "Put the preferred approach to the board for resolution"
            - name: Management carve-out plan under an underwater stack
              description: |-
                ## Purpose
                If the preference stack means management would receive nothing in any likely sale, a carve-out sets aside a share of exit proceeds for the team regardless of the waterfall. Designing one alongside the recap, rather than in the middle of a sale later, keeps the people who will build the value motivated to build it.

                ## Milestones
                1. The size of the carve-out pool as a share of proceeds proposed with reasons.
                2. Eligibility, allocation and leaver rules drafted.
                3. Interaction with the waterfall and any repriced options modelled.
                4. Terms agreed with the lead investor and adopted by the board.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A carve-out plan with pool size, allocation and leaver rules is adopted by the board and modelled in the waterfall."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Model what management receives at three exit values today"
                - "Propose a pool size and the exit values where it matters"
                - "Draft eligibility, allocation and leaver rules with counsel"
                - "Agree the carve-out with the lead investor before signing"
            - name: Retention grants for the people who must stay
              description: |-
                ## Purpose
                Repricing helps everyone a little; targeted grants keep the few people the plan depends on. A retention pool sized from the watch list, with vesting that starts at the recap and a clear rationale for each award, spends dilution where it does most good.

                ## Milestones
                1. A retention pool size agreed with the lead investor as part of the round.
                2. Awards proposed for each person on the watch list with a short rationale.
                3. Vesting start dates and cliffs set to run from the recap closing.
                4. Grant letters delivered personally by each person's manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every person on the retention watch list has received a grant letter, or a recorded reason for none, within 30 days of closing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Propose a retention pool size from the watch list"
                - "Draft an award and rationale for each person on the list"
                - "Brief each manager before they hand over the grant letter"
                - "Check grant coverage against current flight-risk ratings @recurring(quarterly)"
            - name: Rights offering to every existing shareholder
              description: |-
                ## Purpose
                Offering the new shares to all existing holders on the same terms, not only to the insiders leading the round, is one of the strongest answers to a later fairness complaint. Deciding whether to run one, and how to make it practical for small holders, should happen before terms are final.

                ## Milestones
                1. Counsel's view on whether a rights offering suits the round and the holder base.
                2. The minimum subscription, timetable and paperwork for small holders set out.
                3. The cost and delay of the offering compared with the protection it gives.
                4. A recorded decision, with the offering documents prepared if adopted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The committee has recorded a decision on a rights offering, with counsel's view and, if adopted, approved offering documents."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel whether a rights offering fits this round"
                - "List small holders and what they would need to take part"
                - "Compare the delay and cost against the protection it gives"
                - "Record the committee's decision and reasons"
            - name: SAFEs, notes and warrants in the recap
              description: |-
                ## Purpose
                Outstanding SAFEs and convertible notes can convert at a cap well above the new price or carry discounts that interact badly with a reset, and warrants may adjust automatically. Working out how each instrument behaves, and which holders need to agree to a different treatment, prevents a recap that closes with an unexpected block of new shares.

                ## Milestones
                1. Every SAFE, note and warrant listed with its cap, discount, maturity and adjustment terms.
                2. The conversion result of each instrument under the proposed recap calculated.
                3. Instruments that need holder consent for a different treatment identified.
                4. An agreed treatment for each instrument written into the closing plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A schedule shows the agreed recap treatment of every SAFE, note and warrant, with holder consents obtained where needed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every SAFE, note and warrant with its key terms"
                - "Calculate how each converts under the proposed recap"
                - "Identify holders whose consent is needed for a different treatment"
                - "Agree each instrument's treatment with counsel for the closing plan"
            - name: Cost restructuring to fit the new runway
              description: |-
                ## Purpose
                New investors in a down round expect the money to last longer than the last round did, often 24 months or more. Rebuilding the cost base to fit that runway, with redundancies handled fairly and lawfully, is usually a condition of the round and the hardest part of it.

                ## Milestones
                1. A target monthly burn agreed with the lead investor.
                2. A restructuring plan by team showing costs removed and the work that stops.
                3. Employment counsel's advice on consultation and notice obtained before any announcement.
                4. Affected staff told individually, with written terms and support, on one planned day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A restructuring plan reaching the agreed burn target is approved by the board and delivered in line with employment counsel's advice."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the target monthly burn with the lead investor"
                - "Draft a plan by team showing costs removed and work stopped"
                - "Take employment counsel's advice on consultation and notice"
                - "Plan the day affected staff are told, with a manager for each"
            - name: Founder vesting reset negotiation
              description: |-
                ## Purpose
                New money often asks founders to put part of their vested shares back under vesting, or offers new founder grants to restore ownership lost to the reset. Preparing a position on what is fair, with the numbers on both sides, keeps the discussion about incentives and not about blame.

                ## Milestones
                1. Each founder's ownership before and after the recap calculated.
                2. The investor's proposal on re-vesting or new grants written out precisely.
                3. A counter-proposal with acceleration and leaver terms prepared with counsel.
                4. Agreed founder terms recorded in the closing documents.

                ## Notes
                Founders should take their own advice on personal terms. Company counsel acts for the company, not for any one founder.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Founder vesting and grant terms are agreed in writing, with each founder confirming they took independent advice."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate each founder's ownership before and after the recap"
                - "Write out the investor's re-vesting proposal exactly"
                - "Take independent advice on personal terms"
                - "Prepare a counter-proposal with acceleration and leaver terms"
            - name: Price-reset story for investors and staff
              description: |-
                ## Purpose
                Lowering the price needs an honest explanation: what the last valuation assumed, what changed in the market or the business, and what the new money will achieve. One agreed story, told the same way to investors, staff and customers, stops each audience inventing its own reason for the cut.

                ## Milestones
                1. A one-page explanation of the old valuation's assumptions and what changed.
                2. The plan the new money funds, with three milestones and a runway date.
                3. Versions of the story for investors, staff and customers drafted from the same page.
                4. The story reviewed by counsel and approved by the committee.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One committee-approved page explains the price reset and the plan, with three audience versions drawn from it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what the last valuation assumed"
                - "List what changed in the market and in the business"
                - "Ask the agent to draft staff, investor and customer versions from the master page"
                - "Send the master page to counsel and the committee for approval"
            - name: Board meeting to approve the recapitalisation
              description: |-
                ## Purpose
                The approval meeting is where the process becomes a matter of record. Preparing the papers, the conflict declarations, the committee's recommendation and every resolution in advance, so the meeting itself is short and orderly, protects the directors and the company.

                ## Milestones
                1. Board papers with the committee recommendation, adviser views and final terms sent in advance.
                2. Conflict declarations taken and recusals recorded at the start of the meeting.
                3. Every resolution needed for the round passed or deferred with reasons.
                4. Draft minutes circulated to directors within a week.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The approval meeting has passed the required resolutions with conflicts recorded, and draft minutes reached directors within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel for the list of resolutions the round needs"
                - "Send papers to directors at least five working days ahead"
                - "Take conflict declarations at the start of the meeting"
                - "Circulate draft minutes within a week"
            - name: Shareholder consent and written resolutions campaign
              description: |-
                ## Purpose
                Most recaps need shareholder approval, often by class, and the signatures come slowly from angels on holiday and funds with committee sign-off. Running consents as a campaign with a tracker, a deadline and a personal call for every late holder closes the round weeks sooner.

                ## Milestones
                1. The required votes by class and threshold confirmed by counsel.
                2. A consent pack with a plain summary, the resolutions and signing instructions sent to every holder.
                3. A tracker showing signatures received against each threshold.
                4. Every required threshold met and the signed resolutions filed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Signed consents meet every class and overall threshold, with the resolutions filed, by the target closing date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the votes needed by class with counsel"
                - "Send the consent pack with a plain summary to every holder"
                - "Track signatures against each threshold daily during the campaign"
                - "Call every holder who has not signed three days before the deadline"
            - name: Announcement day for the down round
              description: |-
                ## Purpose
                Staff, investors and customers will remember how they heard the news more than the terms. A scripted day, with leadership briefed first, an all-hands, individual conversations with key people and outside messages sent in the right order, keeps the story straight and the questions answerable.

                ## Milestones
                1. A run sheet for the day with times, speakers and audiences in order.
                2. Leadership briefed the day before with a written question-and-answer sheet.
                3. The all-hands, key-person conversations and investor email delivered as planned.
                4. Follow-up questions from the day collected and answered within a week.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The announcement followed a written run sheet, and every question raised that day was answered in writing within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a run sheet for the day with times and audiences"
                - "Brief the leadership team the day before with a Q&A sheet"
                - "Book individual conversations with everyone on the retention list"
                - "Answer the questions collected on the day within a week"
            - name: Recap closing checklist
              description: |-
                ## Purpose
                Closing a recapitalisation involves more moving parts than an ordinary round: charter or articles amendments, class conversions, a reverse split perhaps, anti-dilution waivers, lender consents and option changes. A checklist that ties each item to an owner and a filing stops the round closing with one conversion or filing missed.

                ## Milestones
                1. Every closing item listed with its owner, document and filing requirement.
                2. Charter or articles amendments and class conversions completed and filed.
                3. Waivers, lender consents and option changes signed and on file.
                4. The updated register and cap table reconciled to the closing documents.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every recap closing item is signed and filed, and the cap table reconciles to the closing documents within 30 days of closing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel for the full list of recap closing documents"
                - "Build the checklist from the operational checklist template"
                - "Assign an owner and a filing deadline to each item"
                - "Reconcile the cap table to the closing documents"
            - name: Letter to former employees and small holders
              description: |-
                ## Purpose
                Former employees with exercised shares and small angels are the holders least likely to understand a recap and most likely to feel wronged by it. A clear, respectful letter explaining what happened, what it means for their shares and whom to ask avoids a stream of angry emails and a few formal complaints.

                ## Milestones
                1. A list of every former employee and small holder with current contact details.
                2. A plain letter explaining the recap, their position and their options, approved by counsel.
                3. The letter sent and delivery confirmed for each holder.
                4. Replies logged and answered through the shareholder questions log.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every former employee and small holder has been sent a counsel-approved letter, with replies logged and answered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Update contact details for former employees and small holders"
                - "Draft a plain letter on what the recap means for their shares"
                - "Get counsel's approval before sending"
                - "Log every reply in the shareholder questions log"
            - name: First-time founder through a first down round
              description: |-
                ## Purpose
                A first down round feels like a public verdict on the founder, and that feeling leads to bad calls: accepting the first terms, hiding the news, or fighting the wrong investor. A personal plan with a trusted adviser, a peer who has been through one and a clear view of your own position keeps judgement steady.

                ## Milestones
                1. One experienced founder who has been through a down round agreed as a sounding board.
                2. Your personal ownership and economics before and after the round written down.
                3. Your own independent adviser engaged for personal terms.
                4. A short note of what you will and will not accept, written before the final negotiation.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written personal position, an independent adviser and a peer sounding board are in place before the final negotiation."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your network for a founder who has closed a down round"
                - "Write your ownership and economics before and after the round"
                - "Engage your own adviser for personal terms"
                - "Write your walk-away points before the final negotiation"
            - name: Finance lead running the recap mechanics
              description: |-
                ## Purpose
                The finance manager in a recap holds the numbers every party relies on: the cap table, the waterfall, the conversion schedule and the cash forecast. Organising those workpapers as one controlled set, with versions and a single source for each number, stops three advisers working from three different spreadsheets.

                ## Milestones
                1. One controlled folder holding the cap table, waterfall, conversion schedule and forecast.
                2. Version naming and a change log agreed with counsel and the investor's team.
                3. Each number in the term sheet traced to a source workpaper.
                4. The post-closing cap table reconciled monthly until the register is updated.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every number in the final documents traces to a versioned workpaper in one controlled folder, with a change log."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set up one controlled folder for recap workpapers with version rules"
                - "Trace every figure in the term sheet to a workpaper"
                - "Keep a change log that advisers can read"
                - "Reconcile the cap table with the share register @recurring(monthly:5)"
            - name: Team manager leading people through the down round
              description: |-
                ## Purpose
                Line managers carry most of the conversations after a down round and are usually told last. A plan for weekly one-to-ones, honest answers on what the round means for the team and a way to escalate flight risks gives managers something to say on the worst days.

                ## Milestones
                1. Managers briefed on what can and cannot be said about the round.
                2. Weekly one-to-ones held with every direct report for the first two months.
                3. Concerns and flight risks escalated through the retention watch list.
                4. Team priorities reset to match the new plan and written down.

                ## Notes
                Keep notes of each conversation in the **1:1** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every direct report has a weekly one-to-one for two months after the announcement, with flight risks passed to the watch list."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the founders what you may and may not say about the round"
                - "Hold a one-to-one with each direct report @recurring(weekly:thu)"
                - "Pass any flight risk to the retention watch list owner"
                - "Rewrite the team's priorities to match the new plan"
            - name: Co-founder leaving during the recap
              description: |-
                ## Purpose
                Co-founders sometimes decide to leave in the middle of a recap, and new investors then want their equity reduced or put under vesting. Handling the departure with clear terms, an agreed announcement and a handover plan stops it becoming the issue that derails the round.

                ## Milestones
                1. The departing co-founder's equity position and leaver terms confirmed from the documents.
                2. Proposed exit terms agreed between the founders, with each taking separate advice.
                3. The new investor's requirements on the departing founder's equity settled.
                4. A handover plan and a joint announcement agreed.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written exit terms for the departing co-founder are signed and accepted by the new investor before closing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check the leaver terms in the founder agreements"
                - "Agree that each founder takes separate advice"
                - "Ask the new investor what they need on the departing founder's shares"
                - "Write a handover plan and a joint announcement"
            - name: Insider-led rescue round with no outside lead
              description: |-
                ## Purpose
                When no new investor will price the round, existing investors may fund it themselves, setting a price with no outside test. That is exactly the situation that draws fairness challenges, so the process needs extra steps: a market check, an independent committee and an offer to all holders.

                ## Milestones
                1. A documented market check showing outside investors were approached and declined.
                2. The independent committee negotiating terms with the insiders.
                3. An independent valuation or fairness view obtained where counsel recommends one.
                4. The round offered to all eligible holders on the same terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The insider round closes with a documented market check, committee negotiation and an offer to every eligible holder on file."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Record every outside investor approached and their response"
                - "Have the committee negotiate directly with the insiders"
                - "Ask counsel whether an independent valuation is needed"
                - "Offer participation to all eligible holders on the same terms"
            - name: Down round led by a new outside investor
              description: |-
                ## Purpose
                New investors setting a lower price bring a real market test but also full diligence, a cleaner stack demand and often board changes. Preparing for their questions about why the last round failed, and agreeing early which existing investors will follow, keeps a fragile term sheet from falling away.

                ## Milestones
                1. A diligence pack answering why the last plan missed and what is different now.
                2. Existing investors' follow-on commitments confirmed before the term sheet is signed.
                3. The new investor's conditions on the stack, board and team listed and costed.
                4. A signed term sheet with conditions the company can realistically meet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed term sheet from a new lead exists, with existing investor follow-on commitments confirmed in writing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write an honest account of why the last plan missed"
                - "Confirm each existing investor's follow-on amount in writing"
                - "List the new investor's conditions and what each would cost"
                - "Check every closing condition is one the company can meet"
            - name: Hundred-day plan after the recapitalisation
              description: |-
                ## Purpose
                Once the recap closes, the new board will judge management on the first quarter. A hundred-day plan with the milestones the new money was raised for, monthly reporting against them and a clear view of the next cash-out date turns a rescue into a credible restart.

                ## Milestones
                1. A hundred-day plan with five milestones agreed with the board.
                2. A monthly report against those milestones sent to all investors.
                3. The new cash-out date and the buffer it leaves recalculated and shared.
                4. A day-100 review held and the next plan agreed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Five agreed milestones are reported on monthly and a day-100 review with the board is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft five milestones the new money is meant to reach"
                - "Agree the milestones with the board"
                - "Report progress against the milestones to investors @recurring(monthly:10)"
                - "Hold the day-100 review and record the next plan"
            - name: Fairness process record with counsel
              description: |-
                ## Purpose
                If a shareholder challenges the round months later, the company's best defence is evidence of a careful process: the alternatives considered, the market check, the committee's independence and the advice taken. Assembling that record while memories are fresh costs a few hours now and could save a great deal later.

                ## Milestones
                1. A chronology of the process from the first alternatives paper to closing.
                2. Copies of board papers, minutes, committee notes and adviser views gathered in one place.
                3. Counsel's review of the record and any gaps noted.
                4. The record stored securely with retention rules agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A counsel-reviewed chronology and document set covering the whole recap process is stored with agreed retention rules."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a dated chronology of the process"
                - "Gather papers, minutes and adviser views into one secure folder"
                - "Ask counsel to review the record for gaps"
                - "Agree how long the record will be kept"
            - name: Enforcing pay-to-play on non-participating investors
              description: |-
                ## Purpose
                Adopting a pay-to-play is one step; applying it to investors who chose not to fund is another, with notices, conversions and some unhappy calls. Managing the enforcement carefully and consistently keeps it within the documents and avoids giving a converted investor grounds to complain.

                ## Milestones
                1. Each investor's participation decision confirmed in writing by the deadline.
                2. Notices sent to non-participating investors in the form the documents require.
                3. Conversions processed and reflected in the register and cap table.
                4. A call held with each converted investor explaining what has happened.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every non-participating investor has received a compliant notice and their conversion is recorded in the register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm each investor's participation decision in writing"
                - "Ask counsel for the required form of notice"
                - "Process conversions and update the register"
                - "Call each converted investor to explain the outcome"
            - name: Collapsing several preferred classes into one
              description: |-
                ## Purpose
                Years of rounds can leave five or six preferred classes with different preferences, seniorities and votes, which new investors will not underwrite. Converting or merging them into a single class, or into common with a new senior class on top, makes the company financeable again but needs every class's agreement.

                ## Milestones
                1. The current classes and their rights set out side by side.
                2. Two simplification structures modelled on the waterfall.
                3. Each class's vote and the likely holdouts identified.
                4. The chosen structure agreed and written into the amended articles or charter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The amended articles or charter reflect a simplified class structure approved by every required class vote."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set every preferred class's rights out in one table"
                - "Model two simplification structures on the waterfall"
                - "Identify each class's likely holdouts"
                - "Ask counsel to draft the amendments for the chosen structure"
            - name: Cross-border recap with holders in several countries
              description: |-
                ## Purpose
                Holders spread across jurisdictions, or a holding company in one country with operations in another, mean different consent rules, securities exemptions and filings for the same recap. Mapping them early stops a closing delayed by one country's filing nobody knew about.

                ## Milestones
                1. Every holder's country and the company entities involved listed.
                2. Local counsel's view on consents, offering exemptions and filings for each jurisdiction.
                3. A timetable for each filing built into the closing checklist.
                4. Evidence of every filing kept with the closing documents.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A jurisdiction table with local counsel's requirements exists and every listed filing is evidenced in the closing documents."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every holder's country and each company entity involved"
                - "Ask company counsel which jurisdictions need local advice"
                - "Add each local filing and its deadline to the closing checklist"
                - "File evidence of each filing with the closing documents"
            - name: Reverse split and share count clean-up
              description: |-
                ## Purpose
                After a deep down round the share count can run into hundreds of millions, with a price per share in fractions of a cent that confuses staff and future investors. A reverse split alongside the recap, with fractional shares handled fairly, gives a share count people can read.

                ## Milestones
                1. The post-recap share count and price per share modelled.
                2. A split ratio proposed with treatment of fractional shares and options.
                3. Approvals and filings for the split confirmed with counsel.
                4. Holders told the new share count in a plain notice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a reverse split exists and, if adopted, every holder has a notice of their new share count."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Model the share count and price after the recap"
                - "Propose a split ratio and fractional share treatment"
                - "Confirm approvals and filings with counsel"
                - "Send each holder a plain notice of their new share count"
            - name: Recapitalisation lessons review a year on
              description: |-
                ## Purpose
                Twelve months after closing, the board can see whether the price, the structure and the retention measures worked. A written review of what held, what was missed and what the company would do differently is the best preparation for the next round, priced up or down.

                ## Milestones
                1. Runway, milestones and retention a year on compared with the plan.
                2. Founders, the committee and two key staff asked what they would change.
                3. A two-page lessons note agreed by the board.
                4. Changes to governance or reporting adopted from the lessons.
              priority: low
              deadlineOffsetDays: 400
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page lessons note on the recap is agreed by the board within 14 months of closing, with at least one change adopted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare runway, milestones and retention with the plan"
                - "Interview founders, the committee and two key staff"
                - "Write a two-page lessons note for the board"
                - "Adopt at least one governance or reporting change"
---

# Down Round & Recapitalisation

This area is for founders and the managers beside them when the next round has to be priced below the last one, or when the capital structure has to be rebuilt so the company can raise at all. It runs from the foundations (a real cash-out date, the alternatives on one page, the preference stack and the investor rights a down round triggers, advisers and an independent process), through the operating rhythm that holds things together while terms are worked out, the mechanics worth understanding properly, the decisions on repricing, carve-outs and retention, the approval and announcement events, the situations founders and managers actually face, and finally the specialist work of pay-to-play, class collapses and a cross-border recap.

What repeats is a weekly cash forecast and steering call, a weekly log of shareholder questions, monthly investor alignment, lender, retention, all-hands, customer and spend reviews, and a quarterly refresh of the waterfall. The Risk register, Metrics log, Board meeting, Operational checklist and 1:1 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
