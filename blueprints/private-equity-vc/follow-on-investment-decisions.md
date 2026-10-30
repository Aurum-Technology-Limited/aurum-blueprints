---
id: private-equity-vc.follow-on-investment-decisions
name: Follow-On Investment Decisions
description: "A written follow-on policy, a live reserves ledger, pro rata rights on file, a scorecard and rationale for every later-round cheque, and honest hindsight reviews."
category: business
version: 1.0.0
tags: [private-equity-vc, follow-on-investment-decisions, knowledge-worker, venture-capital, reserves, pro-rata, follow-on, portfolio-management]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - reading-queue
    - risk-register
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Follow-On Investment Decisions
          description: "Deciding whether to back portfolio companies in later rounds: reserves, pro rata rights, insider-led rounds, signalling and a written follow-on rationale."
          projects:
            - name: Written follow-on policy for the fund
              description: |-
                ## Purpose
                Without a written policy, follow-on cheques drift towards whichever founder calls loudest or whichever round closes first. A two-page policy that states when you take pro rata, when you go above it, when you pass and who decides turns every later-round conversation into an application of rules agreed in calm conditions.

                ## Milestones
                1. A two-page policy covering default pro rata, super pro rata, bridges, insider rounds and passes.
                2. Decision thresholds stated in terms of evidence, ownership and remaining reserves, not gut feel.
                3. The approval path for each type of follow-on named, with the people who must sign off.
                4. The policy agreed by every partner and dated, with a review date one year out.

                ## Notes
                Keep the policy consistent with the fund's documents. If the LPA limits follow-ons into companies other funds of the manager hold, or caps concentration, quote those limits rather than paraphrasing them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, partner-approved follow-on policy of no more than two pages is filed with the fund's operating documents."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the last ten follow-on decisions and the reason each was made"
                - "Draft the default rule for pro rata, super pro rata and passing"
                - "Check the LPA for concentration limits and cross-fund restrictions"
                - "Circulate the draft to partners and collect objections in one round"
                - "Record the agreed policy with a review date a year from now"
            - name: Reserves ledger by portfolio company
              description: |-
                ## Purpose
                Reserves set at the first cheque are a guess, and most funds lose track of how much is still earmarked for each company once two or three rounds have passed. A single ledger showing original reserve, amount deployed, amount still held and the current expectation for each company tells you at a glance whether the fund can afford the follow-ons it is implicitly promising.

                ## Milestones
                1. Every active portfolio company listed with initial cheque, reserve set at entry and reserve deployed to date.
                2. Remaining reserve per company reconciled to the fund's uncalled capital and recycling capacity.
                3. A column for the expected next round size and timing, sourced from the latest founder update.
                4. Unallocated reserves shown as one figure at the bottom, agreed with the finance lead.

                ## Notes
                Start from the **Metrics log** template. The ledger reports reserves against companies already held; the sizing of reserves for new investments belongs in portfolio construction.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A reserves ledger covering every active company reconciles to the fund's uncalled capital within one percent and is updated monthly."
                cadence: rolling
              tasks:
                - "Pull the initial cheque and entry reserve for each company from the IC memos"
                - "Add every follow-on cheque from the capital call records"
                - "Reconcile total remaining reserves with the fund administrator's uncalled figure"
                - "Update the ledger after each portfolio round closes @recurring(monthly:12)"
            - name: Pro rata and participation rights inventory
              description: |-
                ## Purpose
                Pro rata rights sit in side letters, investor rights agreements and SAFE side letters, and they differ in thresholds, notice periods and whether they survive the next round. Building one inventory of what each company owes you before a round is announced avoids discovering in a ten-day notice window that your right lapsed at the Series A or only applies to major investors.

                ## Milestones
                1. Every company's governing documents checked for pro rata, preemption and right of first refusal terms.
                2. Notice periods, major investor thresholds and expiry conditions recorded per company.
                3. Rights that have lapsed or were never obtained marked clearly.
                4. Fund counsel's view recorded on any clause whose meaning is unclear.

                ## Notes
                Read the actual clause. Major investor definitions often require holding a minimum number of shares, and a small seed cheque can fall below it after a large round.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory lists, for every active company, the pro rata right held, its threshold, notice period and expiry, with lapsed rights flagged."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the investor rights agreement and side letters for each company"
                - "Record notice period and major investor threshold for each right"
                - "Flag rights that expire at the next priced round"
                - "Send unclear clauses to fund counsel in a single list"
                - "Re-check the inventory against new round documents @recurring(yearly)"
            - name: Follow-on decision scorecard
              description: |-
                ## Purpose
                Two partners looking at the same company often argue past each other because one is scoring momentum and the other is scoring price. A scorecard with six or seven fixed questions, such as progress against the original thesis, quality of the new lead, entry valuation versus progress and ownership after the round, makes disagreements specific and keeps the reasons comparable across companies and years.

                ## Milestones
                1. Six to eight scoring questions agreed, each with a definition of a low, middle and high score.
                2. The scorecard tested on three past follow-on decisions to check it separates them sensibly.
                3. A rule for what scores trigger a default yes, a default no and a full discussion.
                4. The scorecard attached to the follow-on policy as an appendix.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scorecard of six to eight defined questions has been back-tested on three past decisions and adopted in the follow-on policy."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the questions partners actually argued about in recent follow-ons"
                - "Define what a low, middle and high score means for each question"
                - "Score three past decisions blind and compare the results with what happened"
                - "Agree the trigger scores for a default yes, a default no and full discussion"
            - name: Written follow-on rationale template
              description: |-
                ## Purpose
                Twelve months after a follow-on, nobody remembers why the cheque was written, so hindsight reviews collapse into stories. A one-page rationale filed with every yes and every pass, stating what you believed, what would prove it wrong and what you expected the next round to look like, is the raw material for learning which follow-on instincts are worth trusting.

                ## Milestones
                1. A one-page template with sections for the thesis update, scorecard, price view, ownership impact and kill criteria.
                2. A worked example completed for a recent follow-on.
                3. A rule that passes need a rationale just as yeses do.
                4. A shared folder where every rationale is filed by company and date.

                ## Notes
                The most useful line is the one stating what would have to be true at the next round for this cheque to have been right. Write it as a number where you can.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page rationale template exists with one completed example, and the policy requires it for every follow-on yes and pass."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a one-page rationale template from the scorecard questions"
                - "Fill in the template for the most recent follow-on decision"
                - "Set up a folder for rationales named by company and round"
                - "Add the rationale requirement to the follow-on policy"
            - name: Ownership and dilution baseline per company
              description: |-
                ## Purpose
                Follow-on choices are really ownership choices, yet many investors cannot quote their fully diluted stake in each company without opening a cap table. A baseline showing current fully diluted ownership, the expected dilution from the next round and option pool top-up, and the cheque needed to hold ownership, lets you see the cost of each decision before the round arrives.

                ## Milestones
                1. Fully diluted ownership confirmed from each company's latest cap table.
                2. Expected dilution from the next round and any option pool increase estimated.
                3. The cheque needed to maintain ownership calculated for each company.
                4. Discrepancies between your records and the company's cap table resolved.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each active company has a confirmed fully diluted ownership figure and a calculated cheque size to maintain it through the next round."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request the latest fully diluted cap table from each company"
                - "Compare each cap table with your own ownership records"
                - "Estimate dilution from the next round and option pool top-up"
                - "Refresh ownership figures after cap table updates @recurring(quarterly)"
            - name: Information rights and reporting gaps map
              description: |-
                ## Purpose
                Follow-on decisions are only as good as the data behind them, and the companies most likely to ask for a bridge are often the ones reporting least. Mapping which companies send monthly figures, which send quarterly and which have gone quiet shows where you will be deciding blind and gives you a reason to ask for data well before the money is needed.

                ## Milestones
                1. Each company's information rights compared with what it actually sends.
                2. A list of companies that have missed two or more reporting periods.
                3. A minimum data request for follow-on decisions agreed: cash, burn, runway, revenue and key metric.
                4. Each late-reporting founder contacted with the minimum request.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A map shows reporting frequency against information rights for every company, and every company more than two periods late has been contacted."
                cadence: rolling
              tasks:
                - "List the information rights each company granted at your entry"
                - "Mark the date of the last update received from each company"
                - "Send the minimum follow-on data request to late reporters"
                - "Check which companies are behind on reporting @recurring(quarterly)"
            - name: Approval path for follow-on cheques
              description: |-
                ## Purpose
                Some funds let the deal partner approve pro rata alone, others take every follow-on to the full investment committee, and many have never decided. Agreeing who can approve which size and type of follow-on, and how quickly, matters most when a hot round gives you seventy-two hours to confirm an allocation.

                ## Milestones
                1. Approval levels set by cheque size and type: pro rata, super pro rata, bridge and new lead.
                2. A fast-track route for short notice periods, with who can approve by message.
                3. Conflict rules stated for partners who sit on the company's board.
                4. The approval path written into the follow-on policy and shared with the operations lead.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written approval matrix covers each follow-on type and size, including a fast-track route and board conflict rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down how the last five follow-ons were actually approved"
                - "Propose approval levels by cheque size and follow-on type"
                - "Agree a fast-track route for notice periods under five days"
                - "Add the approval matrix to the policy and share it with operations"
            - name: Expected financing calendar for the portfolio
              description: |-
                ## Purpose
                Rounds rarely arrive as a surprise if you track runway, yet funds are routinely caught with three companies raising in the same quarter. A calendar of when each company expects to raise, built from runway and founder plans, lets you see clusters early and plan which follow-ons get prepared first.

                ## Milestones
                1. An expected raise quarter recorded for every active company.
                2. Each estimate sourced from runway figures or the founder's stated plan.
                3. Quarters with three or more expected raises highlighted.
                4. The calendar shared with partners alongside the reserves ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A financing calendar lists the expected raise quarter and source for every active company and flags crowded quarters."
                cadence: rolling
              tasks:
                - "Estimate each company's raise date from runway in the latest update"
                - "Confirm the expected timing with each founder at the next check-in"
                - "Highlight quarters where three or more companies expect to raise"
                - "Roll the calendar forward with new runway figures @recurring(monthly:3)"
            - name: Quarterly reserves reforecast
              description: |-
                ## Purpose
                Reserves set at entry assumed a path that rarely happens: breakouts need more, stalled companies need less or a bridge. Reforecasting each quarter, company by company, keeps the fund from promising more follow-on capital than it holds and frees reserves from companies that no longer justify them.

                ## Milestones
                1. Every company's reserve reset to the current best estimate of what it will need.
                2. Released reserves moved to an unallocated pool with the reason recorded.
                3. The total reforecast compared with remaining uncalled capital and any recycling.
                4. A one-paragraph summary of changes sent to partners.

                ## Notes
                Release reserves in the ledger only; telling a founder their reserve has been cut is a separate conversation to have deliberately, not by accident in a board meeting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reforecast of every company's reserve is completed each quarter, with total reserves at or below available capital and a written summary of changes."
                cadence: cyclic
              tasks:
                - "Reset each company's reserve to its current expected need"
                - "Compare the reforecast total with uncalled capital and recycling"
                - "Write a short summary of reserve changes for partners"
                - "Run the full reserves reforecast with the finance lead @recurring(quarterly)"
            - name: Monthly runway and cash watchlist
              description: |-
                ## Purpose
                Most bad follow-on decisions are rushed ones, made when a company with five weeks of cash asks for a bridge. A monthly watchlist of every company with under twelve months of runway, with the date cash runs out and the plan to raise, gives you four to six months to think rather than four to six days.

                ## Milestones
                1. Months of runway recorded for every company from its latest cash and burn.
                2. Companies under twelve months flagged, and those under six months marked urgent.
                3. Each flagged company's raise plan and fallback noted from the founder.
                4. The watchlist reviewed at the monthly partner meeting.

                ## Notes
                Start from the **Metrics log** template. Use net burn after any committed revenue, and ask the founder for their own runway figure; the two often disagree.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A runway watchlist covering every active company is updated monthly, and every company under six months has a written raise plan."
                cadence: rolling
              tasks:
                - "Calculate months of runway for each company from its latest update"
                - "Flag every company with under twelve months of cash"
                - "Ask each flagged founder for their raise plan and fallback"
                - "Update the runway watchlist from new monthly reports @recurring(monthly:9)"
            - name: Pre-round founder check-ins
              description: |-
                ## Purpose
                Founders form a view of whether you will follow on long before they send a term sheet, and other investors read that view. A structured conversation three to six months before each expected raise, covering milestones, round size, target investors and what the founder hopes you will do, lets both sides avoid surprises and gives you time to do the work.

                ## Milestones
                1. A short agenda for pre-round conversations covering milestones, round size, lead targets and insider expectations.
                2. A check-in held with each company expected to raise in the next two quarters.
                3. Notes from each check-in filed with the company's follow-on record.
                4. Any expectation gap, such as a founder assuming you will lead, raised with partners.

                ## Notes
                Start from the **Meeting notes** template. Do not promise a follow-on in these meetings. Say what evidence you will be looking at and when you will decide.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every company expected to raise within two quarters has a filed pre-round check-in note with founder expectations recorded."
                cadence: rolling
              tasks:
                - "Write a five-question agenda for pre-round founder conversations"
                - "Book check-ins with companies expected to raise in the next six months"
                - "File notes and founder expectations with each company's follow-on record"
                - "Schedule the next pre-round check-in from the financing calendar @recurring(monthly:20)"
            - name: Follow-on pipeline slot at the partner meeting
              description: |-
                ## Purpose
                New deals crowd out portfolio decisions at most partner meetings, so follow-ons get discussed only when they are urgent. A standing fifteen-minute slot each month for the follow-on pipeline, covering upcoming rounds, term sheets received and decisions due, keeps reserve decisions on the same footing as new investments.

                ## Milestones
                1. A standing monthly agenda slot agreed with the managing partner.
                2. A one-page pipeline view listing companies raising, stage and decision due date.
                3. Decisions taken in the slot recorded in the decision log.
                4. Three consecutive months run with the slot held.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The follow-on pipeline is reviewed at the partner meeting every month, with a one-page view circulated in advance."
                cadence: rolling
              tasks:
                - "Ask the managing partner for a standing follow-on slot each month"
                - "Build a one-page view of companies raising and decisions due"
                - "Circulate the pipeline view two days before the meeting @recurring(monthly:14)"
                - "Log each decision taken in the slot"
            - name: Portfolio round terms tracker
              description: |-
                ## Purpose
                When several companies raise at once, terms from different rounds blur together, and it becomes hard to compare a proposed step-up against what similar companies achieved. A tracker of each portfolio round's lead, pre-money valuation, size, preference terms and your allocation builds the comparison set you need when the next term sheet lands.

                ## Milestones
                1. Every portfolio round of the last three years entered with lead, valuation, size and key terms.
                2. Your allocation offered, taken and declined recorded for each round.
                3. Step-up multiples calculated from the previous round.
                4. New rounds added within a week of closing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker holds lead, valuation, size, key terms and your allocation for every portfolio round of the last three years, updated within a week of each close."
                cadence: rolling
              tasks:
                - "Enter the last three years of portfolio rounds from closing documents"
                - "Record allocation offered, taken and declined for each round"
                - "Calculate the step-up from the previous round for each entry"
                - "Add newly closed portfolio rounds to the tracker @recurring(monthly:25)"
            - name: Annual follow-on hindsight review
              description: |-
                ## Purpose
                Follow-on calls take years to resolve, so without a deliberate review a fund repeats the same mistakes across three vintages. Once a year, setting every follow-on and every pass from two or more years ago beside what happened since, using the written rationales, shows whether the fund tends to back winners too late, prop up losers too long or price well.

                ## Milestones
                1. Every follow-on and pass from two or more years ago listed with its rationale.
                2. Outcomes recorded: current mark, later rounds, write-down or exit.
                3. Patterns written up, such as passes that became leaders or bridges that did not reach a next round.
                4. One or two policy changes proposed from the findings.

                ## Notes
                Judge the decision on what was knowable at the time, not on the outcome alone. A good call can lose and a poor one can win.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly written review covers every follow-on decision from two or more years ago and ends with at least one proposed policy change."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Gather the rationales for follow-ons and passes from two years ago"
                - "Record what happened to each company since the decision"
                - "Write up the patterns and one or two proposed policy changes"
                - "Book the hindsight review with partners @recurring(yearly)"
            - name: Co-investor and new lead relationship log
              description: |-
                ## Purpose
                Whether a new lead respects insiders, prices fairly and supports companies through bad patches shapes how willing you should be to follow on behind them. A log of how each later-stage fund behaved in rounds you have shared, kept factually and privately, gives you a better read on a term sheet than its headline valuation.

                ## Milestones
                1. Each later-stage fund that has led a portfolio round listed with the companies and rounds shared.
                2. Factual notes on behaviour: pro rata treatment, terms, board conduct and support in down periods.
                3. Contacts at each fund recorded with the last conversation date.
                4. The log consulted and cited in at least one follow-on rationale.

                ## Notes
                Keep entries factual and professional. Assume anything written could one day be read by the people it describes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A log lists every later-stage lead from shared rounds with factual behaviour notes and is cited in at least one follow-on rationale."
                cadence: rolling
              tasks:
                - "List every later-stage fund that has led a round in your portfolio"
                - "Note how each treated insiders and pro rata allocations"
                - "Record contacts and the date of your last conversation"
                - "Add notes from recent rounds to the lead investor log @recurring(quarterly)"
            - name: Follow-on decision log and audit trail
              description: |-
                ## Purpose
                LPs, auditors and your own successors will eventually ask why the fund put more money into one company and not another. A log recording each decision, its date, approvers, amount, price and a link to the rationale gives a clean audit trail and makes the hindsight review a matter of filtering rather than archaeology.

                ## Milestones
                1. A log with fields for company, round, decision, amount, price, approvers, date and rationale link.
                2. All follow-on decisions from the current fund entered.
                3. Gaps where no rationale exists marked and back-filled where memory allows.
                4. Every new decision logged within a week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision log holds every follow-on decision of the current fund with approvers and a linked rationale, and new decisions are logged within a week."
                cadence: rolling
              tasks:
                - "Create the decision log with the agreed fields"
                - "Enter every follow-on decision made in the current fund"
                - "Mark decisions with no written rationale"
                - "Check the log against capital calls and recent decisions @recurring(monthly:28)"
            - name: Quarterly portfolio triage tiers
              description: |-
                ## Purpose
                Reserves are spread too thin when every company is treated as a potential follow-on. Sorting the portfolio each quarter into tiers, for example concentrate, maintain, hold and no further capital, with a sentence of evidence for each placement, gives founders consistent treatment and partners a shared view of where the next money should go.

                ## Milestones
                1. Tier definitions agreed with the evidence required for each.
                2. Every company placed in a tier with a one-sentence reason.
                3. Movements between tiers since last quarter listed and explained.
                4. The tier list reconciled with the reserves reforecast.

                ## Notes
                Tiers are internal working labels. Founders should hear a clear, considered answer when they ask about follow-on support, not a label.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every active company is placed in a defined tier each quarter with a written reason, and the tiers agree with the reserves reforecast."
                cadence: cyclic
              tasks:
                - "Agree three or four tier definitions with partners"
                - "Place each company in a tier with one sentence of evidence"
                - "Explain every tier movement since the last quarter"
                - "Re-run the portfolio triage with partners @recurring(quarterly)"
            - name: Reading a later-stage term sheet as an insider
              description: |-
                ## Purpose
                Later rounds carry terms that matter more to insiders than to the new lead: senior or participating preferences, pay-to-play clauses, pro rata cut-backs and changes to protective provisions. Learning to read a Series A or B term sheet for what it does to your existing shares, not only the new money, is the skill that separates a considered follow-on from a reflexive one.

                ## Milestones
                1. Three real later-stage term sheets annotated for their effect on existing holders.
                2. A one-page checklist of insider-relevant clauses to look for.
                3. Each annotated term sheet discussed with a more experienced partner or counsel.
                4. The checklist added to the follow-on policy appendix.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three later-stage term sheets are annotated for insider impact and an insider clause checklist is filed with the policy."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick three recent later-stage term sheets from portfolio rounds"
                - "Mark every clause that changes the position of existing shareholders"
                - "Walk a partner or counsel through your annotations"
                - "Turn the annotations into a one-page insider clause checklist"
            - name: Pro rata maths on a fully diluted basis
              description: |-
                ## Purpose
                Pro rata is often calculated on issued shares when the right is defined on a fully diluted basis, or the reverse, and option pool increases in the new round change the answer. Working through the arithmetic for a real round, including pool top-ups and notes converting, means you can check an allocation letter yourself rather than taking the company's figure on trust.

                ## Milestones
                1. The pro rata definition in one company's documents identified precisely.
                2. Pro rata calculated for a real round including pool top-up and conversions.
                3. Your figure compared with the company's allocation letter and any gap explained.
                4. A reusable calculation sheet saved for future rounds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reusable pro rata calculation sheet exists and has been checked against one real allocation letter with any difference explained."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the exact pro rata definition in one company's rights agreement"
                - "Build the calculation including pool top-up and note conversions"
                - "Compare your result with the company's allocation letter"
                - "Save the calculation as a reusable sheet"
            - name: Signalling risk when an insider declines
              description: |-
                ## Purpose
                When a well-known seed fund declines its pro rata, it can scare off a new lead, while a fund that always follows on sends no signal at all. Studying how signalling actually works, how leads interpret insider behaviour and how funds communicate a pass without sinking the round helps you decide when to take a small cheque purely to avoid a damaging signal, and when not to.

                ## Milestones
                1. Three or four later-stage investors asked how they read insider participation.
                2. A short note on when a pass damages a round and when it does not.
                3. A standard way of communicating a pass to founders and new leads drafted.
                4. The note discussed at a partner meeting.

                ## Notes
                A token cheque to avoid a signal still uses reserves and still needs a rationale. Record it as such rather than dressing it up as conviction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on signalling, informed by at least three later-stage investors, and a standard pass communication are agreed with partners."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask three later-stage investors how they read an insider passing"
                - "Write a one-page note on when passing hurts a round"
                - "Draft standard wording for telling a founder and lead you are passing"
                - "Discuss the signalling note at the next partner meeting"
            - name: Entry price discipline on later rounds
              description: |-
                ## Purpose
                Insiders tend to accept whatever price the new lead sets, yet the same fund would never pay that multiple for a new investment at the same stage. Learning to compare a follow-on price with progress since the last round, and with what an outside investor would pay, keeps the fund honest about whether it is buying more of a winner or just paying up for familiarity.

                ## Milestones
                1. Progress since the last round summarised in three or four numbers per company.
                2. The proposed step-up compared with that progress and with peer rounds in the tracker.
                3. A rule of thumb agreed for when a step-up needs extra justification.
                4. The comparison included in each follow-on rationale.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every follow-on rationale includes a step-up versus progress comparison, and partners have agreed when a step-up needs extra justification."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick three or four progress measures for each stage of company"
                - "Compare a recent step-up with progress since the last round"
                - "Benchmark the step-up against similar rounds in the terms tracker"
                - "Propose when a step-up needs extra justification"
            - name: Expected value of the next cheque
              description: |-
                ## Purpose
                The question is not whether the company is good, but whether the next dollar into it beats the next dollar into anything else the fund could do. Building a simple scenario model with three or four outcomes, their rough probabilities and the return each cheque size produces turns a vague conviction into an explicit trade-off against new investments.

                ## Milestones
                1. A scenario sheet with three or four outcomes and rough probabilities for one company.
                2. The return on the follow-on cheque calculated under each scenario, after preferences.
                3. The result compared with the fund's expected return on a new investment.
                4. The method written up so others can reuse it.

                ## Notes
                Probabilities will be rough. The value is in making the assumptions visible so partners can argue with them, not in the precision of the answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reusable scenario sheet compares the follow-on return with the fund's expected return on a new investment for at least one live decision."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a live follow-on decision to model"
                - "Set three or four exit scenarios with rough probabilities"
                - "Calculate the follow-on cheque's return in each scenario after preferences"
                - "Compare the result with the fund's expected return on a new deal"
            - name: Liquidation preference stack across rounds
              description: |-
                ## Purpose
                By the Series C, a company can carry several layers of preference, and in a modest exit a later-round cheque can be worth far more or far less than its percentage suggests. Mapping the preference stack for each company and running exit values through it shows what each follow-on cheque really buys in the outcomes that are most likely.

                ## Milestones
                1. The preference stack documented for every company with two or more priced rounds.
                2. A waterfall run at three exit values for each of those companies.
                3. The proceeds of each of your share classes shown separately.
                4. Findings noted in the next follow-on rationale for each company.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each company with two or more priced rounds has a documented preference stack and an exit waterfall at three values."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every preferred share class and its terms for one company"
                - "Build an exit waterfall at low, middle and high values"
                - "Show proceeds for each of your share classes separately"
                - "Repeat the waterfall for the other later-stage companies"
            - name: Bridges, SAFEs and extensions as follow-on instruments
              description: |-
                ## Purpose
                Many follow-on asks arrive not as priced rounds but as convertible notes, SAFEs or extensions of the last round, each with its own cap, discount and conversion mechanics. Understanding how these convert, what they do to your existing position and which terms to push on means a bridge is a priced decision rather than an act of faith.

                ## Milestones
                1. The conversion mechanics of notes, SAFEs and round extensions summarised on one page.
                2. A recent bridge in the portfolio worked through to see its effect at the next round.
                3. A list of terms to negotiate in insider bridges, such as cap, discount and maturity.
                4. Counsel's comments recorded on the summary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of bridge instruments and negotiable terms has been reviewed by counsel and applied to one real portfolio bridge."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise how notes, SAFEs and extensions convert on one page"
                - "Work through a recent portfolio bridge to its next round"
                - "List the terms worth negotiating in an insider bridge"
                - "Ask fund counsel to review the summary"
            - name: Research reading on follow-on outcomes
              description: |-
                ## Purpose
                There is a growing body of published analysis on follow-on returns, reserve ratios and whether insiders pick winners, much of it from data providers, LPs and academic papers. A short, deliberate reading programme gives you outside evidence to set against your own fund's habits, and stops policy being built on anecdote.

                ## Milestones
                1. A reading list of eight to ten sources on follow-on returns and reserve use.
                2. A one-paragraph summary of each source read, with its data and limits.
                3. Three findings that challenge current fund practice noted.
                4. The findings shared with partners at a meeting.

                ## Notes
                Start from the **Reading queue** template. Check what sample each study uses; results from one market or vintage may not carry over.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight sources on follow-on outcomes are summarised with their limits, and three challenging findings have been presented to partners."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect eight to ten sources on follow-on returns and reserves"
                - "Write a paragraph on each source with its data and limits"
                - "Pick three findings that challenge how the fund follows on"
                - "Read and summarise one source from the list @recurring(monthly:17)"
            - name: Pricing an insider-led round
              description: |-
                ## Purpose
                When no outside lead appears, existing investors must set the price themselves, and every choice upsets someone: a high price helps the founders but overpays, a low price punishes holders who cannot follow. Running a structured pricing process with independent reference points makes the insider round defensible to LPs and to the shareholders who sit it out.

                ## Milestones
                1. Reasons no outside lead emerged written down from the founder's process.
                2. Reference points gathered: recent comparable rounds, progress since the last round and any outside indications.
                3. A proposed price and structure agreed among participating insiders.
                4. The basis for the price documented in the follow-on rationale.

                ## Notes
                Insider rounds can raise conflicts, especially where your fund sits on the board or holds positions across several funds. Take counsel's advice on process and disclosures.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An insider round price is agreed with a documented basis drawn from at least two independent reference points."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the founder which outside investors passed and why"
                - "Gather comparable rounds and any outside price indications"
                - "Agree a proposed price and structure with other insiders"
                - "Record the pricing basis in the follow-on rationale"
            - name: Taking or passing on pro rata in a hot round
              description: |-
                ## Purpose
                Oversubscribed rounds come with short notice, high prices and pressure from the new lead to give up allocation. Deciding in advance how to handle a hot round for a breakout company, including whether to take full pro rata, part of it or none, and what to do if the lead asks for a cut-back, avoids giving away the ownership the fund was built to earn.

                ## Milestones
                1. The company's current and expected ownership calculated with and without full pro rata.
                2. The scorecard and expected value sheet completed for the round.
                3. A position agreed on cut-back requests from the lead.
                4. The decision and allocation confirmed in writing within the notice period.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pro rata decision for a hot round is recorded with scorecard, expected value sheet and a written position on cut-backs, within the notice period."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate ownership after the round with and without full pro rata"
                - "Complete the scorecard and expected value sheet for the round"
                - "Agree how far the fund will accept a pro rata cut-back"
                - "Confirm the allocation to the company in writing"
            - name: Bridge request from a company short of runway
              description: |-
                ## Purpose
                Founders asking insiders for a bridge are usually asking for time to hit a milestone that will open the way to a priced round. Testing whether that milestone is specific, reachable within the bridge's runway and likely to change outside investors' minds, before agreeing terms, is the difference between a bridge and a slow write-off.

                ## Milestones
                1. The milestone the bridge is meant to reach stated as a number and a date.
                2. Runway under the bridge calculated, with a cost-cutting case alongside.
                3. Outside investors' reasons for passing so far gathered from the founder.
                4. A decision recorded: bridge on stated terms, bridge with conditions, or decline.

                ## Notes
                Ask what the company would do without a bridge. A credible plan B often reveals whether the bridge is needed at all, and on what scale.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bridge decision is recorded with the target milestone, runway under the bridge and the reasons outside investors have passed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the founder for the milestone the bridge is meant to reach"
                - "Calculate runway under the bridge and under a cost-cutting case"
                - "Collect the reasons outside investors have given for passing"
                - "Write the bridge rationale with any conditions attached"
            - name: Offering excess allocation to an SPV
              description: |-
                ## Purpose
                Sometimes the fund's pro rata in a breakout round is larger than its reserves or concentration limits allow. Offering the excess to LPs or co-investors through a special purpose vehicle can keep the allocation in friendly hands, but it raises allocation, fee and conflict questions that need settling before the offer goes out.

                ## Milestones
                1. The amount of allocation the fund cannot take calculated against limits and reserves.
                2. The fund documents checked for co-investment and conflict provisions.
                3. SPV terms, eligible investors and timeline agreed with counsel.
                4. A decision recorded on whether to offer the allocation and to whom.

                ## Notes
                Fee, carry and allocation rules for SPVs are regulated in many places and governed by your LPA. This project is about preparing the decision; counsel sets the terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on offering excess allocation, with counsel-approved SPV terms or a written reason for not offering it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Calculate the allocation the fund cannot take within its limits"
                - "Check the LPA for co-investment and conflict provisions"
                - "Ask counsel for SPV structure, terms and timing"
                - "Record whether and to whom the allocation will be offered"
            - name: Pay-to-play and recapitalisation participation
              description: |-
                ## Purpose
                Under a pay-to-play round, the company converts non-participating holders to common or strips their rights, so the choice to sit out carries a real cost beyond dilution. Working out what the fund keeps in each scenario, participating fully, partly or not at all, turns a pressured decision into a comparison of numbers.

                ## Milestones
                1. The pay-to-play or recap mechanics summarised from the term sheet.
                2. Your position after the round modelled under full, partial and no participation.
                3. The expected value of each option compared using the scenario sheet.
                4. A decision and rationale recorded before the participation deadline.

                ## Notes
                Recaps often come with board and legal process. Your board representative and counsel should be involved, and conflicts between your fund's interests and your board duties handled separately.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A participation decision for a pay-to-play or recap round is recorded with your position modelled under three participation levels."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Summarise the pay-to-play mechanics from the term sheet"
                - "Model your position under full, partial and no participation"
                - "Compare the expected value of each participation option"
                - "Record the participation decision before the deadline"
            - name: Releasing reserves from a fading company
              description: |-
                ## Purpose
                Keeping reserves earmarked for a company that has missed its plan twice quietly starves the companies that are working. Making a deliberate decision to release some or all of a company's reserve, with the evidence and a plan for how to tell the founder, recovers capital for better uses without leaving the relationship to chance.

                ## Milestones
                1. The company's progress against its last two plans summarised with numbers.
                2. A proposal to release all or part of the reserve agreed with partners.
                3. A conversation with the founder held and noted, with the fund's position stated plainly.
                4. The ledger updated and the released amount moved to the unallocated pool.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A reserve release decision is recorded with evidence, communicated to the founder and reflected in the reserves ledger."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the company's results against its last two plans"
                - "Propose the reserve release to partners with the evidence"
                - "Tell the founder the fund's position and note the conversation"
                - "Move the released amount to the unallocated pool in the ledger"
            - name: Down round participation decision
              description: |-
                ## Purpose
                Participating in a down round can protect ownership at an attractive price or send good money after bad, and insiders are rarely neutral judges. Separating the price question from the sunk cost of earlier cheques, and judging the company as if seeing it fresh at the new valuation, is the discipline this decision needs.

                ## Milestones
                1. The company assessed as a fresh investment at the new price using the scorecard.
                2. The effect of anti-dilution and preference changes on existing holdings calculated.
                3. The follow-on rationale written without reference to the amount already invested.
                4. A decision recorded and communicated to the company.

                ## Notes
                Board and governance duties in a down round sit with whoever holds the board seat. Keep the fund's investment decision and any board role clearly separated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A down round participation decision is recorded with a fresh-investment scorecard and the anti-dilution effect on existing holdings."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Score the company as a new investment at the down round price"
                - "Calculate anti-dilution and preference effects on existing shares"
                - "Write the rationale without citing money already invested"
                - "Communicate the participation decision to the company"
            - name: Buying secondary shares alongside a round
              description: |-
                ## Purpose
                Early employees or angels sometimes sell shares alongside a round when primary allocation is tight, offering a way to raise ownership in a company you know well. Assessing the price, the share class on offer, the company's consent rights and the founder's view keeps a secondary purchase from creating friction or buying the wrong instrument.

                ## Milestones
                1. The shares available identified by class, quantity and seller.
                2. Transfer restrictions, rights of first refusal and company consent checked.
                3. The secondary price compared with the primary round price and the class's preference position.
                4. A decision recorded with the founder's view noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A secondary purchase decision is recorded with share class, transfer restrictions checked and price compared with the primary round."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the class and quantity of shares on offer"
                - "Check transfer restrictions and company consent requirements"
                - "Compare the secondary price with the primary round price"
                - "Ask the founder for their view before deciding"
            - name: Series A follow-on decision for a seed company
              description: |-
                ## Purpose
                The step from seed to Series A is where most seed funds face their largest follow-on choices and their greatest information advantage. Preparing the decision ahead of the round, with the original thesis checked, the new lead assessed and ownership modelled, means the fund can commit quickly when the term sheet arrives.

                ## Milestones
                1. The original seed thesis compared with what the company has shown since.
                2. The likely Series A lead and terms assessed from the founder's process.
                3. Ownership after the round modelled at pro rata, above and below.
                4. A follow-on rationale approved before the term sheet is signed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A Series A follow-on rationale with ownership scenarios is approved before the company signs its term sheet."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Reread the seed investment memo and list its key assumptions"
                - "Check each assumption against the company's results since"
                - "Model ownership after the round at three participation levels"
                - "Take the follow-on rationale through the approval path"
            - name: Answering a ten-day pro rata notice
              description: |-
                ## Purpose
                Pro rata notices often arrive with ten business days or fewer to respond, and missing the window can forfeit the right for good. Treating each notice as a short project, with the rights inventory checked, the decision made and the paperwork, wire and confirmation tracked, protects rights the fund paid for.

                ## Milestones
                1. The notice date, deadline and amount offered recorded on receipt.
                2. The right confirmed against the rights inventory.
                3. A decision taken through the approval path with a rationale filed.
                4. The election signed and returned, and funding scheduled with the administrator.

                ## Notes
                Put the response deadline in the calendar the day the notice arrives. If a decision cannot be reached in time, ask the company for an extension in writing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pro rata election is returned before the notice deadline with an approved rationale and funding scheduled."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Record the notice deadline and amount offered in the calendar"
                - "Confirm the right and amount against the rights inventory"
                - "Take the decision through the fast-track or full approval path"
                - "Return the signed election and schedule funding with the administrator"
            - name: Presenting a follow-on to the investment committee
              description: |-
                ## Purpose
                Committees reading a follow-on paper are not reading a new investment memo: they want to know what has changed since entry, why this price and this amount, and what happens if the fund says no. A short, structured presentation built around those questions gets better decisions and shorter meetings.

                ## Milestones
                1. A three to five page follow-on paper covering changes since entry, price, amount and the alternative of passing.
                2. The scorecard, ownership model and expected value sheet attached.
                3. The five hardest questions anticipated with written answers.
                4. The committee's decision and any conditions recorded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A follow-on paper of no more than five pages with scorecard and ownership model is presented and the committee's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Outline the paper around changes since entry, price, amount and passing"
                - "Attach the scorecard, ownership model and expected value sheet"
                - "Write answers to the five hardest likely questions"
                - "Record the committee decision and any conditions"
            - name: Final follow-ons before the investment period ends
              description: |-
                ## Purpose
                Many funds can only make follow-on investments after the investment period within specific limits set in the LPA, and those limits are easy to misread. Planning the last round of follow-ons in the year before the investment period closes, with the rules confirmed and every company's likely need mapped, avoids being unable to support a winner later.

                ## Milestones
                1. The LPA rules on post-investment-period follow-ons confirmed with counsel.
                2. Every company's likely need after the investment period estimated.
                3. Reserves held back for post-period follow-ons agreed.
                4. A plan for companies the fund cannot support, such as an SPV or a later fund, noted.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written plan, based on counsel-confirmed LPA rules, sets the reserves held for follow-ons after the investment period ends."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel to confirm the LPA rules on post-period follow-ons"
                - "Estimate each company's capital need after the investment period"
                - "Agree the reserves held back for post-period follow-ons"
                - "Note alternatives for companies the fund cannot support"
            - name: Year-end mark review after follow-on rounds
              description: |-
                ## Purpose
                Every follow-on round creates a new price that feeds the fund's valuations, and insider-led or structured rounds may not be a fair reference for the whole position. Reviewing at year end how each round affected the marks, and whether the valuation policy treats insider rounds consistently, keeps LP reporting honest and avoids awkward questions at audit.

                ## Milestones
                1. Every round of the year listed with its effect on the fund's marks.
                2. Insider-led and structured rounds flagged for valuation policy treatment.
                3. Questions for the valuation committee or auditor written up.
                4. Agreed treatment recorded for each flagged round.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each follow-on round of the year has a recorded valuation treatment, with insider-led rounds reviewed against the valuation policy."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "List each portfolio round of the year with its effect on marks"
                - "Flag insider-led and structured rounds for policy review"
                - "Send valuation questions to the valuation committee or auditor"
                - "Record the agreed treatment for each flagged round"
            - name: Associate's first follow-on recommendation
              description: |-
                ## Purpose
                Associates are often handed a follow-on paper because it looks smaller than a new deal, then discover it needs more judgement, not less. Working through a first recommendation with a clear structure and a partner reviewing each stage builds the habit of taking a view, rather than summarising the company's update.

                ## Milestones
                1. The company's original memo and all updates since read and summarised in a page.
                2. A recommendation drafted with a clear yes, no or partial and the amount.
                3. The draft reviewed by the deal partner with comments addressed.
                4. Lessons from the review noted for the next recommendation.

                ## Notes
                State your recommendation in the first line. Partners would rather argue with a view than reconstruct one.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A follow-on recommendation with a stated position and amount is reviewed by the deal partner and lessons recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the original memo and every company update since entry"
                - "Draft a recommendation that states a position in its first line"
                - "Book a review of the draft with the deal partner"
                - "Write down three lessons from the partner's comments"
            - name: Angel pro rata decisions with personal money
              description: |-
                ## Purpose
                Angels often hold pro rata rights they cannot afford to use in full, and personal cash limits make every follow-on a choice between companies. A simple personal follow-on budget, set once a year, with a rule for which companies get it, stops the loudest founder or the latest round from deciding where your own money goes.

                ## Milestones
                1. A yearly personal follow-on budget set, separate from new angel cheques.
                2. Rights held in each company listed with expected rounds.
                3. A rule for prioritising follow-ons when the budget will not cover every right.
                4. Each follow-on or pass recorded with a short reason.

                ## Notes
                This is a budgeting and record-keeping project, not investment advice. Speak to a tax adviser about how follow-on investments are treated where you live.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A personal follow-on budget and prioritisation rule are written down, and every follow-on or pass in the year is recorded with a reason."
                cadence: cyclic
              tasks:
                - "Set this year's personal follow-on budget separately from new cheques"
                - "List the pro rata rights you hold and expected round timing"
                - "Write a rule for choosing between companies when money is short"
                - "Review personal follow-on spend against budget @recurring(quarterly)"
            - name: Solo GP follow-on decisions without a partnership
              description: |-
                ## Purpose
                Solo GPs have no partner to challenge a follow-on, which makes it easy to back the founders you like most. Building in outside challenge, such as an advisory group, an LP adviser or a peer GP who reads each follow-on rationale, replaces the partnership debate with something you can explain to LPs.

                ## Milestones
                1. Two or three trusted people agreed to review follow-on rationales on request.
                2. A rule for which follow-ons need an outside read, by size or type.
                3. Each reviewer's comments filed with the rationale.
                4. The process described in the next LP update.

                ## Notes
                Be careful what confidential company information you share with outside reviewers. Check confidentiality terms with the company and your counsel before sending anything.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every follow-on above the agreed size has an outside reviewer's written comments filed with its rationale."
                cadence: rolling
              tasks:
                - "Ask two or three trusted peers to review follow-on rationales"
                - "Set the size and type of follow-on that needs an outside read"
                - "File each reviewer's comments with the rationale"
                - "Review open follow-on decisions with an outside reader @recurring(monthly:6)"
            - name: Follow-ons from a fund late in its life
              description: |-
                ## Purpose
                By year seven or eight, a fund may have little reserve left, a short horizon and LPs waiting for distributions, while companies still need money. Deciding how to treat follow-on requests late in a fund's life, including when to step back, when to use recycled capital and when to bring in a newer fund, needs its own rules.

                ## Milestones
                1. Remaining reserves, recycling capacity and fund term confirmed.
                2. Every company likely to ask for more capital before the fund ends listed.
                3. A late-life follow-on rule agreed with partners.
                4. Risks to LPs and to companies recorded with mitigations.

                ## Notes
                Start from the **Risk register** template. Any plan to have a later fund invest needs conflict handling and, often, LP advisory committee consent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A late-life follow-on rule is agreed and a risk register lists every company likely to need capital before the fund term ends."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm remaining reserves, recycling capacity and fund term"
                - "List companies likely to raise before the fund ends"
                - "Agree a late-life follow-on rule with partners"
                - "Review the late-life risk register with partners @recurring(quarterly)"
            - name: Follow-ons when you hold the board seat
              description: |-
                ## Purpose
                Board seats create a particular trap: the partner on the board helps design the round and then asks their own fund to invest in it, which creates a real conflict between board duties and fund interests. Agreeing in advance how a board member steps back from the fund's follow-on decision, and who leads it instead, protects both the company and the fund.

                ## Milestones
                1. Each company where a partner holds a board seat listed.
                2. A rule agreed for who leads the follow-on decision in those companies.
                3. Disclosure steps for the board and other shareholders confirmed with counsel.
                4. The rule applied and documented in at least one decision.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule names who leads follow-on decisions where a partner holds a board seat, and it has been applied in one documented decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the companies where a partner holds a board seat"
                - "Agree who leads the follow-on decision in those companies"
                - "Confirm disclosure steps with counsel"
                - "Apply the rule to the next follow-on in a board-seat company"
            - name: Inheriting follow-on calls for an existing portfolio
              description: |-
                ## Purpose
                Joining a fund mid-life, or taking over companies from a departing partner, means making follow-on calls on companies you did not choose and founders you barely know. A structured handover, with each company's history, rights, reserves and the departing partner's private view captured, gets you to a sound decision faster than reading every board pack.

                ## Milestones
                1. A handover note for each inherited company covering thesis, rights, reserves and open questions.
                2. An introductory call held with each founder.
                3. The departing or previous partner's candid view recorded where available.
                4. A first view on each company's follow-on tier shared with partners.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each inherited company has a handover note, a founder call held and a proposed follow-on tier shared with partners within thirty days."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the agent to summarise each inherited company's memos into a handover note"
                - "Book introductory calls with every inherited founder"
                - "Record the previous partner's candid view of each company"
                - "Propose a follow-on tier for each company to partners"
            - name: Case for an opportunity fund for breakouts
              description: |-
                ## Purpose
                If the core fund cannot hold its ownership in its best companies through later rounds, some managers raise a separate opportunity vehicle to concentrate into them. Building the case, including how many breakouts the portfolio actually has, the capital they will need and the conflicts it creates, shows whether such a vehicle is justified before any LP conversation starts.

                ## Milestones
                1. The number of companies likely to need more capital than core reserves allow estimated.
                2. Capital needed over the next three years summed with rough timing.
                3. Conflicts between the core fund and an opportunity vehicle listed with counsel's initial view.
                4. A go or no-go recommendation written for partners.

                ## Notes
                Raising a new vehicle brings regulatory, legal and LP consent questions. Counsel and your LP advisory committee should be involved early.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation on an opportunity vehicle includes the estimated breakout count, capital need and counsel's view on conflicts."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Count companies likely to outgrow the core fund's reserves"
                - "Estimate the capital they will need over three years"
                - "Ask counsel for an initial view on conflicts and consents"
                - "Write a go or no-go recommendation for partners"
            - name: Cross-fund investing in an earlier fund's company
              description: |-
                ## Purpose
                Cross-fund deals, where a newer fund invests in a company held by an earlier fund of the same manager, can look like propping up old marks with new money. Running a cross-fund follow-on with a clear conflict process, independent price reference and LP advisory committee involvement where the documents require it is the only way to make it defensible.

                ## Milestones
                1. LPA provisions for both funds on cross-fund investments identified.
                2. An independent price reference, such as an outside lead, obtained or its absence explained.
                3. LP advisory committee consent sought where required.
                4. The decision and process documented for both funds' records.

                ## Notes
                Treat this as a conflict first and an investment second. Counsel should review the process before any commitment.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cross-fund follow-on is documented with LPA provisions checked, an independent price reference and any required advisory committee consent."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the cross-fund provisions in both funds' LPAs"
                - "Obtain an independent price reference or explain its absence"
                - "Prepare the LP advisory committee consent request if required"
                - "File the decision record in both funds' documents"
            - name: Calibrating the follow-on scorecard against outcomes
              description: |-
                ## Purpose
                Scorecards built on judgement may weight the wrong things: momentum might predict outcomes far better than founder quality ratings, or the reverse. After three or more years of scored decisions, comparing scores with outcomes shows which questions earn their place and which should be dropped or reweighted.

                ## Milestones
                1. All scored follow-on decisions with at least two years of outcome data collected.
                2. Each scorecard question compared with outcomes to see which separate winners from the rest.
                3. Proposed reweighting or new questions written up.
                4. A revised scorecard adopted with the change recorded in the policy.

                ## Notes
                Small samples mislead. With twenty or thirty decisions, look for large and consistent differences only, and treat the result as a prompt for discussion.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written calibration compares each scorecard question with outcomes for all decisions over two years old, and any revision is recorded in the policy."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Collect scored decisions with at least two years of outcomes"
                - "Compare each question's scores with what happened"
                - "Write up proposed changes to the scorecard"
                - "Run the scorecard calibration with partners @recurring(yearly)"
            - name: Structured follow-on terms and tranches
              description: |-
                ## Purpose
                Insiders sometimes offer capital in tranches tied to milestones, or ask for warrants or a senior preference as the price of supporting a struggling company. Knowing when structure genuinely protects the fund and when it simply pushes problems into the next round, and how it lands with founders and future leads, is specialist ground worth preparing for.

                ## Milestones
                1. The structures seen in recent portfolio rounds catalogued with their effects.
                2. For one live decision, a structured and an unstructured option compared.
                3. Founder and future lead reactions to each option considered and noted.
                4. Counsel's view recorded on the chosen structure.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A catalogue of follow-on structures exists and one live decision has a documented comparison of structured and unstructured options reviewed by counsel."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Catalogue the structures used in recent portfolio rounds"
                - "Compare a structured and an unstructured option for one decision"
                - "Note how founders and future leads may react to each"
                - "Ask counsel to review the preferred structure"
            - name: Negotiating super pro rata in a breakout company
              description: |-
                ## Purpose
                Taking more than pro rata in a company that is clearly working is how early funds return capital, but leads and founders rarely give allocation away. Building the case for a larger allocation, from what the fund has done for the company to what it can offer the new lead, and agreeing the walk-away position first, gives the negotiation a chance.

                ## Milestones
                1. The target allocation and the minimum acceptable allocation agreed internally.
                2. A short case written on what the fund brings to the round and the company.
                3. The ask made to the founder and lead with the case.
                4. The outcome recorded, including any allocation offered elsewhere such as an SPV.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A super pro rata request is made with a written case and agreed minimum, and the allocation outcome is recorded in the decision log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the target and minimum allocation with partners"
                - "Write a short case for the larger allocation"
                - "Make the ask to the founder and new lead"
                - "Record the allocation outcome in the decision log"
---

# Follow-On Investment Decisions

Follow-on decisions are where a venture portfolio is really made: the first cheque buys an option, and the later cheques decide how much of the winners you actually own. This area is for the investor who has to say yes, no or partly to a portfolio company's next round, starting with the policy, reserves ledger, rights inventory and scorecard, then the operating rhythm, the skills behind pro rata and pricing, the hard calls on bridges and insider rounds, the dated round events, situations from associate to solo GP, and specialist work such as opportunity funds and cross-fund conflicts.

The rhythm is a monthly runway watchlist and decision log, founder check-ins ahead of each expected raise, a quarterly reserves reforecast and triage of the portfolio, and a yearly hindsight review of every follow-on made or passed. The Metrics log, Meeting notes, Reading queue and Risk register templates pair with the ledger, founder check-ins, research reading and late-life fund work. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
