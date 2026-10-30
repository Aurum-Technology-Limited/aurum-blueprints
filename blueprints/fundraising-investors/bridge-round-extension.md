---
id: fundraising-investors.bridge-round-extension
name: Bridge Round & Extension
description: "A real cash-out date, a milestone the money must buy, insider asks run in the right order, clean bridge terms and a closing that leaves the next round's lead nothing to worry about."
category: business
version: 1.0.0
tags: [fundraising-investors, bridge-round-extension, founder, bridge-financing, round-extension, insider-round, runway]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - meeting-notes
    - board-meeting
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Bridge Round & Extension
          description: "Raising a bridge or round extension from existing investors to reach the next milestone, with terms that do not spook new investors."
          projects:
            - name: Runway recount and cash-out date
              description: |-
                ## Purpose
                Founders considering a bridge often quote runway from the last board deck, which assumed hires and revenue that never arrived. Rebuilding the cash forecast from the bank balance, committed costs and signed revenue only gives the real date the money runs out, and every later decision in a bridge counts back from that date.

                ## Milestones
                1. Current cash taken from bank statements for every account, not from the accounting system.
                2. Monthly committed costs listed, including payroll, rent, contracts with notice periods and loan repayments.
                3. Revenue in the forecast limited to signed contracts and the existing recurring base.
                4. A minimum-cash date and a zero-cash date written down, with the last board runway figure beside them.

                ## Notes
                Count to the date cash falls below what you need to pay salaries and close down properly, not the date it hits zero. Your accountant can estimate what an orderly wind-down would cost where the company is registered.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cash-out date based on the actual bank balance, committed costs and signed revenue only, shared with the co-founders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the latest statements for every company bank account"
                - "List every committed monthly cost and its notice period"
                - "Strip unsigned revenue out of the cash forecast"
                - "Write down the minimum-cash date and the zero-cash date"
            - name: Defining the milestone the bridge must buy
              description: |-
                ## Purpose
                A bridge only makes sense if it reaches a point where the company is clearly more fundable than today: a revenue run rate, a pilot converted to a paid contract, a regulatory approval. Naming that milestone in one sentence, with the number new investors would want to see, stops the bridge from becoming money that simply delays the same conversation.

                ## Milestones
                1. Likely next-round leads asked, or researched, for the metric they would need to see.
                2. One milestone written as a measurable number with a target date.
                3. The months and spend needed to reach it estimated from the current plan.
                4. Co-founders and the board chair agreeing the milestone in writing.

                ## Notes
                If you cannot name a milestone that changes the next investor's answer, the bridge is buying time, not progress. Say so plainly in the decision memo.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A single measurable milestone with a target date, agreed in writing by the founders and the board chair."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the metric you think the next lead will ask about first"
                - "Ask two investors who passed last time what would change their answer"
                - "Estimate the months and spend needed to reach the milestone"
                - "Get the board chair to confirm the milestone in writing"
            - name: Bridge or alternatives decision memo
              description: |-
                ## Purpose
                Bridging is one of several ways to reach the next milestone, alongside cutting burn, raising the next round early on current numbers, debt or revenue-based finance, or a sale. A two-page memo comparing them on cost, dilution, speed and risk lets the board see why the bridge is the right call, or catches the case where it is not.

                ## Milestones
                1. At least four options listed, including cutting costs and doing nothing.
                2. Each option scored on cash raised, dilution, time to close and effect on the next round.
                3. A recommendation written with its reasons and its main risk.
                4. The memo sent to the board before any insider conversation starts.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A memo comparing at least four funding options with a recommendation, circulated to the board before any insider ask."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every funding option realistically open to the company this quarter"
                - "Score each option on dilution, speed, cost and signalling"
                - "Ask the agent to draft the memo from your scoring table"
                - "Send the memo to the board with a request for comments"
            - name: Sizing the bridge with a safety margin
              description: |-
                ## Purpose
                Bridges are usually sized to the milestone, then the milestone slips and the company is short again at the worst moment. Sizing the amount to reach the milestone plus the months a next round takes, with a stated margin for delay, avoids a second request that tells everyone the plan failed.

                ## Milestones
                1. Spend to reach the milestone calculated month by month.
                2. Months needed to run the next fundraise added on top.
                3. A delay margin chosen and written as a number of months.
                4. A minimum and a target bridge amount stated, with what each pays for.

                ## Notes
                Next rounds often take several months from first meeting to money in the bank. Ask founders who raised recently in your sector how long theirs took, and use their answer rather than your hope.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A minimum and target bridge amount, each tied to a month-by-month spend plan that includes the next fundraise and a delay margin."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total the monthly spend from today to the milestone date"
                - "Add the months a next round typically takes in your sector"
                - "Choose a delay margin and write the reason beside it"
                - "Set a minimum and a target amount for the bridge"
            - name: Insider reserves and appetite map
              description: |-
                ## Purpose
                Existing investors are the natural source of a bridge, but their ability to write a cheque depends on reserves held for the company, the age of their fund and their partnership's view. Mapping each insider's likely capacity and stance before asking means the conversations happen in the right order and a polite no comes as no surprise.

                ## Milestones
                1. Every existing investor listed with their holding and any pro rata or pre-emption right.
                2. Each fund's vintage and likely follow-on reserves noted from public information or past conversations.
                3. Each insider marked as likely lead, likely participant, unlikely or unknown.
                4. A proposed order for the asks, starting with the most likely lead.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of every existing investor with capacity, likely stance and ask order, reviewed by a co-founder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every investor on the cap table with their holding"
                - "Note each fund's vintage year and known follow-on policy"
                - "Mark each insider's likely stance on a bridge"
                - "Set the order in which you will approach them"
            - name: Pre-emption and consent check with counsel
              description: |-
                ## Purpose
                Shareholders' agreements and articles often give existing holders pre-emption rights on new shares and require investor consent before new securities or debt are issued. Checking these with company counsel before term talks start avoids promising a new angel an allocation the documents do not allow, or closing a note that needed a consent nobody gave.

                ## Milestones
                1. The current articles, shareholders' agreement and any side letters sent to counsel.
                2. A list from counsel of every consent, waiver and pre-emption step the bridge would trigger.
                3. The investors who make up each required majority identified by name.
                4. Any pre-emption notice period added to the bridge timeline.

                ## Notes
                This is a question for your lawyer. The project is about gathering the documents and getting a clear written answer, not interpreting the clauses yourself.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note from company counsel listing every consent, waiver and pre-emption step the bridge needs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send counsel the articles, shareholders' agreement and side letters"
                - "Ask counsel which consents and waivers a bridge would need"
                - "Name the investors whose signatures make up each majority"
                - "Add any pre-emption notice period to the bridge timeline"
            - name: Bridge timeline counted back from cash-out
              description: |-
                ## Purpose
                Insider bridges feel quick but rarely are: partnership approvals, documents, consents and wires can each take weeks. Building the timeline backwards from the minimum-cash date shows the latest day the first ask can go out, and usually reveals the process should have started last month.

                ## Milestones
                1. The minimum-cash date placed at the end of the timeline.
                2. Every step listed with a realistic duration: board briefing, insider asks, partnership approvals, documents, consents and funding.
                3. The latest start date for insider conversations calculated.
                4. The timeline shared with the board and counsel.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated bridge timeline running back from the minimum-cash date, showing the latest start for insider asks, shared with the board."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the minimum-cash date at the end of a blank timeline"
                - "Estimate each step's duration with counsel and one friendly insider"
                - "Work out the latest date the first ask can happen"
                - "Share the timeline with the board and company counsel"
            - name: Bridge-period operating budget
              description: |-
                ## Purpose
                Insiders who fund a bridge want to see the money going only towards the milestone, not towards the plan that needed bridging. A lean budget for the bridge period, showing what is paused, what is protected and what each month should cost, makes the ask more credible and gives the team a clear spending rule.

                ## Milestones
                1. Every cost line marked as essential to the milestone, deferrable or stoppable.
                2. A monthly budget for the bridge period with headcount fixed.
                3. Hiring frozen except for named roles tied to the milestone.
                4. The budget approved by the board alongside the bridge amount.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month-by-month bridge-period budget with every cost line classed and a written hiring rule, approved by the board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark each cost line as essential, deferrable or stoppable"
                - "Build a monthly budget covering the bridge period only"
                - "Write the hiring rule for the bridge period in one sentence"
                - "Present the budget with the bridge amount at the board"
            - name: Board briefing before any insider ask
              description: |-
                ## Purpose
                Investor directors will hear about a bridge either from the founder or from their own partners, and the first is far better. A short private briefing with each board member before the formal ask lets them raise concerns early, shows who will champion the bridge inside their fund, and avoids a board meeting where the plan is debated cold.

                ## Milestones
                1. A one-page bridge summary covering runway, milestone, amount and options considered.
                2. A one-to-one call held with each board member.
                3. Each director's concerns and likely position noted.
                4. The summary revised to answer concerns raised more than once.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each board member briefed individually on a one-page bridge summary, with their positions recorded before the formal ask."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page summary of runway, milestone and amount"
                - "Book a one-to-one call with each board member"
                - "Record each director's concerns straight after the call"
                - "Revise the summary to answer the repeated concerns"
            - name: Weekly cash and runway check through the bridge
              description: |-
                ## Purpose
                During a bridge the margin for error is small, and one late customer payment or unplanned cost can move the cash-out date by weeks. A fifteen-minute weekly check of cash, committed outflows and runway keeps the founder ahead of surprises and gives insiders a current answer whenever they ask.

                ## Milestones
                1. A one-line weekly entry with cash balance, net burn and runway in weeks.
                2. Any runway change of more than two weeks flagged to the co-founders the same day.
                3. Thirteen weeks of entries building a visible cash trend.

                ## Notes
                Start from the **Metrics log** template. Use the bank balance on the day, not the month-end accounts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly cash entry recorded for every week of the bridge period, with any runway change over two weeks flagged within a day."
                cadence: rolling
              tasks:
                - "Set up a one-line weekly cash log with balance, burn and runway"
                - "Record cash balance and weeks of runway @recurring(weekly:fri)"
                - "Flag any runway change over two weeks to the co-founders"
                - "Review the last four weeks of cash entries for a trend @recurring(monthly:2)"
            - name: Bridge commitment tracker
              description: |-
                ## Purpose
                Commitments in a bridge come soft and firm, and a cheerful yes on a call is not money until documents are signed and funds land. One tracker of every investor's stage, amount and next step, updated each Monday while the bridge is open, shows the real total and who needs a nudge.

                ## Milestones
                1. Every investor approached listed with a stage: asked, soft yes, partnership approved, signed, funded.
                2. Committed and funded totals shown separately.
                3. A next step and date against every open line.
                4. The tracker reconciled to bank receipts at close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker showing stage, amount and next step for every investor approached, updated weekly until close and reconciled to funds received."
                cadence: rolling
              tasks:
                - "Create the tracker with a column for each commitment stage"
                - "Update each investor's stage and next step @recurring(weekly:mon)"
                - "Send a nudge on any line with no movement in ten days"
                - "Reconcile funded amounts in the tracker to bank receipts"
            - name: Monthly milestone scoreboard for bridge investors
              description: |-
                ## Purpose
                Insiders who bridged the company are watching one question: is the milestone getting closer? A short monthly scoreboard with the milestone metric, the plan line, cash and runway answers it at a glance, and builds the record the next lead will read in diligence.

                ## Milestones
                1. Scoreboard columns agreed with the lead insider: milestone metric, plan, actual, cash, runway.
                2. The first scoreboard sent within a month of the bridge closing.
                3. Each month that missed plan explained in two sentences with the response.

                ## Notes
                Send it on its own or as the first section of your usual investor update. Start from the **Metrics log** template to keep the monthly numbers in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scoreboard of milestone progress against plan, cash and runway, sent to bridge investors every month after close."
                cadence: rolling
              tasks:
                - "Agree the scoreboard columns with the lead insider"
                - "Send the milestone scoreboard to bridge investors @recurring(monthly:5)"
                - "Write two sentences on any month that missed plan"
                - "Ask the lead insider whether the scoreboard still answers their questions @recurring(quarterly)"
            - name: Monthly burn versus bridge plan review
              description: |-
                ## Purpose
                Bridge budgets drift through small approvals: a contractor here, a software seat there. Comparing actual spend with the bridge budget each month, line by line, catches drift while it is small and keeps the promise made to insiders about where their money goes.

                ## Milestones
                1. Actual monthly spend compared with the bridge budget for every line.
                2. Any line more than ten percent over budget explained and given an owner.
                3. Savings or overspends rolled into an updated runway date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly variance check of actual spend against the bridge budget, with every line over ten percent explained and owned."
                cadence: rolling
              tasks:
                - "Export last month's actual spend by cost line"
                - "Compare actual spend with the bridge budget @recurring(monthly:12)"
                - "Assign an owner to each line running over budget"
                - "Update the runway date with the month's variance"
            - name: Next-round lead warm-up during the bridge
              description: |-
                ## Purpose
                Every month a bridge buys is a chance to build relationships with the investors likely to lead the next round, and the best-prepared founders start straight away. One short update or coffee a month with a handful of likely leads means that when the milestone lands, they have watched the progress instead of hearing the story for the first time.

                ## Milestones
                1. Eight to twelve likely next-round leads named.
                2. Each one sent a short note on the milestone the company is working towards.
                3. A touchpoint log showing who heard what and when.
                4. At least three investors asking to be told when the round opens.

                ## Notes
                Building the full target list is its own job. Here the point is keeping a short list warm while the bridge does its work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A short list of likely next-round leads, each touched at least monthly during the bridge, with at least three asking to hear when the round opens."
                cadence: rolling
              tasks:
                - "Name eight to twelve investors likely to lead the next round"
                - "Send each one a short note on the milestone you are chasing"
                - "Make one next-round investor touchpoint and log it @recurring(monthly:18)"
                - "Record who asked to hear when the round opens"
            - name: Monthly stop-and-switch trigger review
              description: |-
                ## Purpose
                Founders in a bridge tend to keep going on hope when the numbers say a different plan is needed. Writing down in advance the triggers that force a change, such as runway under a set number of months with the milestone behind, and checking them monthly turns a painful judgement into a scheduled decision.

                ## Milestones
                1. Three to five triggers written as numbers covering runway, milestone progress and pipeline.
                2. The action tied to each trigger agreed with the board: deeper cuts, a sale process, raising now.
                3. A monthly check showing each trigger as clear or tripped.
                4. Any tripped trigger taken to the board within a week.

                ## Notes
                Start from the **Risk register** template, with one row per trigger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of triggers with agreed actions, checked every month, with any tripped trigger raised at the board within a week."
                cadence: rolling
              tasks:
                - "Write three to five triggers that would force a change of plan"
                - "Agree the action for each trigger with the board"
                - "Check every trigger against the latest numbers @recurring(monthly:27)"
            - name: Note maturity and conversion date watch
              description: |-
                ## Purpose
                Bridge notes carry a maturity date, interest that accrues and conversion terms that bite at the next round or at a sale. Keeping those dates and figures in one register, and checking them each quarter, means nobody discovers at a board meeting that a note is about to fall due.

                ## Milestones
                1. Every outstanding bridge note listed with principal, interest rate, maturity date and conversion terms.
                2. Accrued interest calculated to date.
                3. Maturity dates added to the board calendar with a ninety-day warning.
                4. A note from counsel on what happens at maturity if no round has closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of every bridge note with accrued interest, maturity date and counsel's maturity treatment, refreshed every quarter."
                cadence: rolling
              tasks:
                - "List every outstanding note with principal, rate and maturity"
                - "Add each maturity date to the board calendar with a ninety-day alert"
                - "Recalculate accrued interest on each bridge note @recurring(quarterly)"
                - "Ask counsel what happens at maturity if no round closes"
            - name: Quarterly next-raise scenario refresh
              description: |-
                ## Purpose
                The next round's size and price depend on where the milestone lands, and conversion of the bridge shifts everyone's ownership. Refreshing three scenarios each quarter, milestone hit, late or missed, with the likely raise, a valuation range and ownership after conversion keeps founders and board looking at the same picture.

                ## Milestones
                1. Three scenarios defined by milestone outcome.
                2. Each scenario showing raise amount, timing and ownership after the bridge converts.
                3. The scenarios included in the board pack each quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three next-raise scenarios showing ownership after bridge conversion, updated and shown to the board every quarter."
                cadence: cyclic
              tasks:
                - "Define the hit, late and missed milestone scenarios"
                - "Model ownership after bridge conversion in each scenario"
                - "Refresh the three scenarios for the board pack @recurring(quarterly)"
            - name: Bridge question log for the next diligence
              description: |-
                ## Purpose
                Every next-round investor will ask why the company bridged, what the money bought and what changed. Logging honest answers and evidence as the bridge period goes on, rather than reconstructing them later, produces a calm, documented account for the data room and the first partner meeting.

                ## Milestones
                1. A log of the questions a new lead is likely to ask about the bridge.
                2. Each question with a short answer and a pointer to evidence.
                3. The log updated monthly with new evidence.
                4. A one-page bridge history ready for the next data room.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A maintained bridge question log with evidence links, and a one-page bridge history ready before the next round opens."
                cadence: rolling
              tasks:
                - "List the ten questions a new lead will ask about the bridge"
                - "Draft a short, honest answer to each question"
                - "Add new evidence to the bridge question log @recurring(monthly:22)"
                - "Ask the agent to turn the log into a one-page bridge history"
            - name: How new investors read a bridge
              description: |-
                ## Purpose
                Prospective leads can read a bridge as insider conviction or as a sign the company could not raise, and the difference lies mostly in its structure and how it is explained. Learning how prospective leads interpret insider participation, amount, terms and timing helps the founder design a bridge that strengthens the next round.

                ## Milestones
                1. Three to five pieces by investors on bridge rounds read and summarised.
                2. Two founders who bridged and then raised asked what new investors questioned.
                3. Reassuring and worrying signals written as two lists in your own words.
                4. Both lists applied to your own bridge plan, with red flags noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written lists of reassuring and worrying bridge signals, applied to the company's plan with red flags noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read three investor pieces on how they view bridge rounds"
                - "Ask two founders who bridged what new investors questioned"
                - "Write the reassuring and worrying signals as two lists"
                - "Mark which signals your current plan sends"
            - name: Bridge instrument options compared
              description: |-
                ## Purpose
                Bridges are written as convertible notes, SAFEs or a priced extension of the last round, and each treats interest, maturity, price and investor rights differently. Knowing the trade-offs before talking to insiders lets the founder discuss structure with confidence and know which questions belong with counsel.

                ## Milestones
                1. A one-page comparison of note, SAFE and priced extension on cost, speed, rights and legal work.
                2. The last round's documents reread for any extension provisions.
                3. Questions for counsel listed.
                4. A provisional preference and its reasons noted, pending advice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of three bridge instruments and a list of questions for counsel, with a provisional preference recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Build a comparison table for note, SAFE and priced extension"
                - "Reread the last round's documents for extension provisions"
                - "List the instrument questions to take to counsel"
                - "Write a provisional preference and the reasons for it"
            - name: Modelling how the bridge stacks on earlier SAFEs and notes
              description: |-
                ## Purpose
                Companies that bridge often already carry SAFEs or notes from earlier rounds, and the new money converts alongside them, sometimes at very different prices. Modelling the whole conversion stack at a few next-round valuations shows what the bridge really costs and whether the resulting cap table will put off a new lead.

                ## Milestones
                1. Every outstanding convertible listed with its cap, discount and any interest.
                2. The bridge's proposed terms added to the list.
                3. Ownership after conversion modelled at three next-round valuations.
                4. The model checked by the finance lead or counsel.

                ## Notes
                Watch for most favoured nation clauses in earlier instruments: better terms in the bridge can flow back to them. Counsel can confirm which ones apply.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A conversion model of all outstanding convertibles plus the bridge at three valuations, reviewed by counsel or the finance lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every outstanding SAFE and note with cap, discount and interest"
                - "Add the bridge's proposed terms to the conversion model"
                - "Run conversions at three next-round valuations"
                - "Ask counsel to check earlier instruments for MFN clauses"
            - name: Pro rata entitlements in an extension
              description: |-
                ## Purpose
                When insiders extend a round, each holder's right to keep their percentage decides who can invest and how much room is left for new money. Working out every holder's entitlement at the target size lets the founder plan allocations, instead of finding out at the last minute that a small holder is owed a slice.

                ## Milestones
                1. The pro rata and pre-emption clauses read alongside counsel's consent note.
                2. Each holder's entitlement at the target bridge size calculated.
                3. Holders likely to take up, waive or exceed their entitlement noted.
                4. The room left for new investors shown after insider entitlements.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of every holder's pro rata entitlement in the target bridge, with the room left for new investors."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the pro rata clauses in your shareholders' agreement"
                - "Calculate each holder's entitlement at the target bridge size"
                - "Note which holders are likely to waive or exceed their share"
                - "Work out how much room is left for new investors"
            - name: Insider pricing and conflict of interest basics
              description: |-
                ## Purpose
                When the investors setting the bridge terms also sit on the board approving them, the price is open to challenge by other shareholders later. Understanding why boards use independent approvals, shareholder votes or offers to all holders for insider-led rounds helps the founder protect the process and the people on both sides of it.

                ## Milestones
                1. The conflict in an insider-priced bridge explained in your own words.
                2. Governance steps commonly used listed: independent director approval, shareholder vote, offering to all holders.
                3. Counsel asked which steps fit the company's documents and jurisdiction.
                4. The chosen steps added to the bridge timeline.

                ## Notes
                This is a legal question with real consequences for directors. Treat the project as preparation for the conversation with counsel, not a substitute for it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Counsel's recommended governance steps for an insider-priced bridge recorded and placed on the bridge timeline."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain-language guide to conflicts in insider-led rounds"
                - "List the governance steps boards commonly use for insider rounds"
                - "Ask counsel which governance steps fit your documents"
                - "Add the agreed governance steps to the bridge timeline"
            - name: Sixty-second bridge story practice
              description: |-
                ## Purpose
                Founders asking for a bridge, and later explaining it to new investors, are tempted either to apologise or to oversell. Practising a sixty-second account of why the company needs the bridge, what it buys and what happens next, until it sounds factual and calm, makes every insider conversation and future pitch meeting easier.

                ## Milestones
                1. A written sixty-second story covering situation, milestone, amount and next step.
                2. The story told to three people outside the company who gave honest feedback.
                3. One version for insiders and one for future leads.
                4. Both versions delivered without notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two rehearsed sixty-second bridge stories, one for insiders and one for future leads, each tested on three listeners."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the bridge story in under 150 words"
                - "Tell it to three people outside the company and note their questions"
                - "Write a separate version for future lead investors"
                - "Record yourself telling both versions without notes"
            - name: Bridge terms that worry the next lead
              description: |-
                ## Purpose
                Some bridge terms solve today's problem and create a bigger one: heavy warrant coverage, multiple liquidation preferences, very low caps or control rights for one insider can each make a new lead walk away. Learning to spot these in a draft before signing lets the founder push back with a clear reason that serves every shareholder.

                ## Milestones
                1. A checklist of bridge terms that commonly worry new lead investors.
                2. Each term on the checklist explained in one sentence.
                3. The current draft, or a sample, reviewed against the checklist.
                4. Any flagged term discussed with counsel and the lead insider.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A checklist of risky bridge terms, with the company's draft reviewed against it and flagged terms raised with counsel."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a checklist of bridge terms that worry new leads"
                - "Explain each checklist term in one plain sentence"
                - "Review the draft bridge terms against the checklist"
                - "Raise each flagged term with counsel and the lead insider"
            - name: Flat extension versus discounted note decision
              description: |-
                ## Purpose
                A flat extension sells more of the last round's shares at the same price, while a note defers the price to the next round, usually with a discount or cap. The choice changes how the bridge looks to new investors, how much legal work it needs and what insiders receive for the risk, so it deserves a recorded decision rather than whatever the first insider suggests.

                ## Milestones
                1. Both structures modelled for the target amount.
                2. Each insider's preference gathered with their reason.
                3. Counsel's estimate of time and cost for each structure.
                4. A decision recorded with its reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between a priced extension and a note, with modelled outcomes, insider preferences and counsel's cost estimate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Model the target amount as a priced extension and as a note"
                - "Ask the lead insider which structure they prefer and why"
                - "Get counsel's time and cost estimate for each structure"
                - "Record the structure decision and reasons in the board file"
            - name: Setting the bridge cap and discount with advisers
              description: |-
                ## Purpose
                If the bridge is a note or SAFE, its cap and discount decide how much of the company bridge investors receive at conversion, and insiders sitting on both sides of the table need a fair way to set them. Gathering comparable terms, modelling outcomes and agreeing numbers with advisers produces terms that can be explained to every shareholder.

                ## Milestones
                1. Comparable bridge terms gathered from counsel, advisers and recent founders.
                2. Two or three cap and discount combinations modelled on ownership.
                3. A proposal agreed with the lead insider and reviewed by counsel.
                4. The rationale written in a short note for the board file.

                ## Notes
                Do not treat any published range as a recommendation. Terms move with the funding climate, and your counsel and advisers know what is current for your stage and sector.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Bridge cap and discount agreed with the lead insider, modelled on ownership and reviewed by counsel, with a written rationale."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel and two advisers what bridge terms they see now"
                - "Model ownership under three cap and discount combinations"
                - "Agree a cap and discount proposal with the lead insider"
                - "Write the pricing rationale for the board file"
            - name: Opening the bridge to new investors decision
              description: |-
                ## Purpose
                Adding a new investor to a bridge can validate the price and bring fresh money, but it takes longer, needs fuller disclosure and invites the question of why insiders are not covering it. Deciding deliberately whether to open the bridge, and to whom, keeps the round from being slowed by outsiders it did not need.

                ## Milestones
                1. Insider capacity totalled against the target amount.
                2. Benefits and costs of a new investor written down.
                3. If opening, a short list of three to five new investors who already know the company.
                4. A decision recorded and shared with the lead insider.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on including new investors in the bridge, with insider capacity totalled and a short list if opening."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total insider capacity against the target bridge amount"
                - "Write the case for and against including a new investor"
                - "Shortlist three to five new investors who already know you"
                - "Share the new-investor decision with the lead insider"
            - name: Burn cuts that shrink the bridge ask
              description: |-
                ## Purpose
                Every month of burn removed is money that never needs raising, and insiders notice when founders cut before they ask. Reviewing contracts, tools, contractors and planned hires for savings that do not slow the milestone usually shrinks the ask and strengthens the case.

                ## Milestones
                1. Every recurring cost above a set monthly threshold reviewed.
                2. Savings identified with the monthly amount and the date each takes effect.
                3. Approved cuts actioned, with notice given where contracts require it.
                4. The bridge size recalculated with the savings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A list of approved savings with monthly amounts and effective dates, and a recalculated bridge size."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every recurring cost above a set monthly threshold"
                - "Mark the cuts that do not slow the milestone"
                - "Give notice on approved cuts and record the effective dates"
                - "Confirm each approved cut shows in the accounts @recurring(monthly:9)"
                - "Recalculate the bridge size with the savings included"
            - name: Warrants and sweeteners decision
              description: |-
                ## Purpose
                Insiders taking extra risk sometimes ask for warrants, a higher interest rate, a repayment multiple or a board seat. Each sweetener has a cost that shows up later in the cap table or the next term sheet, so weighing them openly and agreeing only what is needed keeps the bridge clean.

                ## Milestones
                1. Each requested sweetener listed with its effect on ownership or the next round.
                2. An alternative prepared where a sweetener is costly.
                3. Counsel's view on each sweetener recorded.
                4. A final position agreed with the lead insider.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each requested sweetener costed and decided, with counsel's view and the final agreed position recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every sweetener insiders have raised so far"
                - "Estimate each sweetener's effect on ownership at the next round"
                - "Prepare an alternative for each costly sweetener"
                - "Record the final agreed position with the lead insider"
            - name: Bridge document set with company counsel
              description: |-
                ## Purpose
                Even a small insider bridge needs a full paper trail: the instrument, board and shareholder approvals, waivers and consents, and updated registers. Agreeing the document list and a short drafting timetable with counsel, and using standard forms where investors accept them, keeps legal cost in proportion to the amount raised.

                ## Milestones
                1. A document list agreed with counsel.
                2. A fee estimate or cap agreed before drafting starts.
                3. Drafts circulated to the lead insider for comment.
                4. Final documents ready for signature with a signing list.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete, agreed set of bridge documents ready for signature, within the fee estimate agreed with counsel."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel for the full document list for the bridge"
                - "Agree a fee estimate or cap before drafting starts"
                - "Send the drafts to the lead insider for comment"
                - "Prepare a signing list naming who signs which document"
            - name: Allocation plan for an oversubscribed bridge
              description: |-
                ## Purpose
                Good bridges can attract more money than planned, and taking all of it adds dilution and can annoy a prospective lead who wanted room. Setting allocation rules in advance, by entitlement, strategic value and timing, makes cutbacks fair and easy to explain.

                ## Milestones
                1. A maximum bridge size agreed with the board.
                2. Allocation rules written: entitlements first, then strategic value, then order of commitment.
                3. Each investor's allocation calculated and confirmed.
                4. Investors who were cut back told personally with the reason.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written allocation rules applied to every commitment, with final allocations confirmed and each cutback explained personally."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the maximum bridge size with the board"
                - "Write the allocation rules in priority order"
                - "Calculate each investor's allocation under the rules"
                - "Call every investor whose allocation was cut back"
            - name: Plan B if insiders decline the bridge
              description: |-
                ## Purpose
                Existing investors sometimes say no for reasons unrelated to the company, such as a fund near the end of its life or a partnership policy. A worked-out plan B, whether deep cost cuts, venture debt, revenue-based finance, a strategic partner or an orderly sale, means a refusal triggers action rather than panic.

                ## Milestones
                1. Three alternatives to an insider bridge written up with time needed and likely amount.
                2. First conversations held for the most realistic alternative.
                3. The date or insider response that starts plan B written down.
                4. The board aware of plan B before insider asks begin.

                ## Notes
                Start from the **Risk register** template. Debt and sale options have their own blueprints; this plan only needs enough detail to start one of them quickly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written plan B with three alternatives, a start trigger and first conversations held, shared with the board."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write up three alternatives to an insider bridge"
                - "Hold a first conversation for the most realistic alternative"
                - "Set the date or insider response that starts plan B"
                - "Brief the board on plan B before the asks begin"
            - name: Insider ask conversations window
              description: |-
                ## Purpose
                Asks are best made in a short, concentrated window, starting with the likely lead, so every insider hears the same story and knows others are being asked at the same time. Preparing each meeting, holding them within two weeks and writing up each response the same day gives a clear read on the bridge quickly.

                ## Milestones
                1. Every insider meeting booked within a two-week window, lead first.
                2. A short note prepared on each insider's history and likely concerns.
                3. Each response written up the same day: amount, conditions, timing.
                4. A summary sent to the co-founders at the end of the window.

                ## Notes
                Start from the **Meeting notes** template for the write-ups, one page per insider.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every insider asked within a two-week window, with each response recorded the same day and a summary sent to the co-founders."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book every insider meeting within a two-week window, lead first"
                - "Prepare a short note on each insider's history and concerns"
                - "Write up each insider response the same day it is given"
                - "Send the co-founders a summary at the end of the window"
            - name: Anchor commitment from the lead insider
              description: |-
                ## Purpose
                Most bridges move only once one insider commits a meaningful amount and agrees to set or accept the terms, after which others follow. Securing that anchor in writing, with the partnership approval it needs, is the single step that turns a bridge from an idea into a round.

                ## Milestones
                1. The likely lead confirmed from the appetite map.
                2. A specific ask made with amount, structure and timing.
                3. Partnership or investment committee approval confirmed in writing.
                4. An email or term summary from the lead stating amount and terms.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written commitment from the lead insider stating amount and terms, with their partnership approval confirmed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Make a specific ask to the likely lead with amount and structure"
                - "Ask what their partnership needs to approve the bridge"
                - "Send the materials their partnership asked for within two days"
                - "Get the commitment and terms confirmed by email"
            - name: Board meeting to approve the bridge
              description: |-
                ## Purpose
                The bridge needs a formal, minuted board decision, with conflicted directors handled the way counsel advised. Preparing the board pack, resolutions and conflict steps in advance makes the meeting a short approval rather than a long debate.

                ## Milestones
                1. A board pack with the decision memo, budget, amount, terms and timeline circulated in advance.
                2. Draft resolutions prepared by counsel.
                3. Conflicted directors' declarations and abstentions handled as advised.
                4. Signed minutes filed with the bridge documents.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Board resolutions approving the bridge passed and minuted, with conflicts declared as counsel advised."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Circulate the board pack at least five working days ahead"
                - "Ask counsel to draft the resolutions approving the bridge"
                - "Confirm with counsel how conflicted directors will vote"
                - "File the signed minutes with the bridge documents"
            - name: Bridge close and funds received
              description: |-
                ## Purpose
                Nothing is closed until every document is signed, every consent is in and the money is in the company's account. Running the close against a checklist, with payment details confirmed by phone and registers updated afterwards, avoids the half-closed bridge where some investors have paid and others are still reviewing.

                ## Milestones
                1. All signatures collected against the signing list.
                2. Payment details confirmed with each investor by phone before any money moves.
                3. Every investor's funds matched to their allocation in the bank.
                4. Registers, filings and the cap table updated within the deadlines counsel gave.

                ## Notes
                Closings attract payment fraud. Send bank details only through a channel agreed in advance, and ask each investor to confirm them by phone with a known contact before paying.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All bridge funds received and matched to allocations, with documents signed and registers and filings updated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect every signature on the signing list"
                - "Ask each investor to confirm payment details by phone before paying"
                - "Match each bank receipt to its investor allocation"
                - "Ask counsel to file the issue and update the registers"
            - name: Telling the team about the extension
              description: |-
                ## Purpose
                Employees hear rumours when a company raises without a press release, and a bridge can sound like good news or like trouble. A short, honest all-hands covering the amount, what it pays for, the milestone and what changes for them keeps people focused and stops the best ones quietly interviewing.

                ## Milestones
                1. A five-minute explanation drafted and checked with the lead insider.
                2. Managers briefed on likely questions beforehand.
                3. The all-hands held with time for questions.
                4. Questions not answered on the day answered in writing within a week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An all-hands on the bridge held, with open questions answered in writing within a week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a five-minute explanation of the bridge for the team"
                - "Brief managers on likely questions before the all-hands"
                - "Hold the all-hands and collect every question asked"
                - "Answer the open questions in writing within a week"
            - name: Milestone reached and next-round kickoff
              description: |-
                ## Purpose
                The day the milestone is hit is the day the bridge has done its job, and the next round should start while the news is fresh. Confirming the milestone with evidence, telling insiders and the warm next-round list, and setting a fundraise start date turns the result into momentum.

                ## Milestones
                1. The milestone confirmed with evidence a diligence team would accept.
                2. Bridge investors told first, with the numbers.
                3. The warm next-round list contacted with the result.
                4. A start date for the next round agreed with the board.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Milestone evidence filed, insiders and the warm list told, and a next-round start date agreed with the board."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the evidence that proves the milestone was reached"
                - "Tell bridge investors first, with the numbers"
                - "Send the result to every investor on the warm next-round list"
                - "Agree a next-round start date with the board"
            - name: Ninety days before note maturity
              description: |-
                ## Purpose
                When a bridge note is three months from maturity and the next round has not closed, the company needs a plan before noteholders' repayment or conversion rights come into play. Preparing options with counsel and the noteholders while there is still time to negotiate keeps a deadline from becoming a crisis.

                ## Milestones
                1. Counsel's summary of what happens at maturity under the note.
                2. Options listed: maturity extension, conversion on agreed terms, repayment, new funding.
                3. Each noteholder's preference gathered.
                4. An agreed path signed off by the required noteholders before maturity.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An agreed path for the maturing notes, signed off by the required noteholders before the maturity date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel for a summary of noteholder rights at maturity"
                - "List the options for the maturing notes"
                - "Ask each noteholder which option they would support"
                - "Collect the sign-offs needed before the maturity date"
            - name: First-time founder's first bridge
              description: |-
                ## Purpose
                First-time founders often take a bridge request personally, then either delay it too long or accept the first terms offered. A guided route, with a mentor who has bridged before, a written list of questions and a regular check-in, helps them run the process like any other raise.

                ## Milestones
                1. A founder who has raised a bridge agreed to advise.
                2. Questions for counsel, the board and the mentor written before the first insider ask.
                3. A check-in with the mentor held at least monthly until the bridge closes.
                4. A short lessons note filed for the next raise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A mentor engaged, a written question list prepared before the first ask, and a lessons note filed after the bridge closes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a founder who has bridged to advise you through the process"
                - "Write your questions for counsel, the board and the mentor"
                - "Hold a progress call with your bridge mentor @recurring(monthly:14)"
                - "Write a short lessons note when the bridge closes"
            - name: Seed extension towards Series A metrics
              description: |-
                ## Purpose
                Many companies raise a seed extension because their traction is real but short of what Series A investors expect. Framing the extension around the specific metrics a Series A lead in your sector looks for, and showing how the bridge period closes the gap, makes it a planned step rather than a sign of trouble.

                ## Milestones
                1. The Series A bar in your sector researched from recent rounds and investor conversations.
                2. The gap between today's metrics and that bar written as numbers.
                3. An extension plan showing month by month how the gap closes.
                4. Seed investors briefed on the plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A seed extension plan stating the Series A metric gap in numbers and how the bridge closes it, shared with seed investors."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find three recent Series A rounds in your sector and their metrics"
                - "Write the gap between your metrics and that bar"
                - "Show month by month how the extension closes the gap"
                - "Brief your seed investors on the extension plan"
            - name: Series A extension after a slow year
              description: |-
                ## Purpose
                Series A companies that missed plan face a harder conversation, because insiders have more money in and a sharper view of what went wrong. An extension that is candid about the miss, shows what has changed and ties the money to a narrower goal is more likely to win support than one that pretends the year went well.

                ## Milestones
                1. A candid one-page write-up of what missed and why.
                2. Changes already made to the plan, team or cost base listed.
                3. A narrower goal for the extension agreed with the lead insider.
                4. The extension pitch tested on one friendly insider before the wider ask.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A candid miss review, a list of changes made and a narrower extension goal agreed with the lead insider."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write one page on what missed last year and why"
                - "List the changes already made to plan, team or costs"
                - "Agree a narrower goal for the extension with the lead insider"
                - "Test the extension pitch on one friendly insider first"
            - name: Bridging when the lead fund cannot follow on
              description: |-
                ## Purpose
                Sometimes the investor who led the last round has run out of reserves or is near the end of its fund, and cannot take part however much it likes the company. Getting that investor's open support and introductions, while others fund the bridge, prevents their absence being read as a vote against.

                ## Milestones
                1. The last lead's position and reason confirmed in a direct conversation.
                2. A sentence agreed with them explaining their non-participation.
                3. Introductions from them to two or three potential bridge investors.
                4. Other insiders and new investors briefed using the agreed sentence.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An agreed sentence from the last lead explaining their non-participation, plus at least two introductions to potential bridge investors."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the last lead directly whether they can take part"
                - "Agree a sentence explaining why they are not investing"
                - "Ask them for introductions to two or three bridge investors"
                - "Check in with the last lead partner on reserves and support @recurring(quarterly)"
            - name: Bridge through a regulatory or certification wait
              description: |-
                ## Purpose
                Hardware, medical, financial services and other regulated companies can reach a point where the next round depends on an approval whose date the company does not control. A bridge sized to the regulator's realistic timeline, with a weekly log of correspondence and a plan for slippage, shows insiders the wait is being managed.

                ## Milestones
                1. The regulator's or certifier's published timelines and your submission dates recorded.
                2. A bridge size based on the realistic decision date plus a slip margin.
                3. A weekly log of correspondence and open questions kept.
                4. A plan for a slip of three months or more agreed with the board.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bridge sized to the regulator's realistic timeline, a weekly correspondence log and a slip plan agreed by the board."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record the regulator's published timelines and your submission dates"
                - "Size the bridge to the realistic decision date plus a slip margin"
                - "Log regulator correspondence and open questions @recurring(weekly:wed)"
                - "Agree with the board what happens if the decision slips"
            - name: Bridge with an angel-only cap table
              description: |-
                ## Purpose
                Companies backed only by angels have no fund with reserves and no partner whose job is to lead a bridge, and many angels invest once and stop. A bridge here means finding one or two angels willing to anchor and agree terms, keeping the paperwork simple and making it easy for small holders to join or waive.

                ## Milestones
                1. Angels ranked by capacity and past willingness to follow on.
                2. One or two angels agreed to anchor and set terms.
                3. A simple standard bridge document chosen with counsel.
                4. Every angel sent the offer with a clear deadline to join or waive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An angel-led bridge with one or two anchors, a standard document and every existing angel offered the chance to join by a set date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Rank your angels by capacity and past follow-on behaviour"
                - "Ask the top two angels to anchor the bridge"
                - "Choose a simple standard bridge document with counsel"
                - "Send every angel the offer with a deadline to join or waive"
            - name: Rights offering to all shareholders
              description: |-
                ## Purpose
                Offering every existing shareholder the chance to invest on the same terms is a common way to show fairness when insiders set the bridge price, and it reduces later disputes. A rights offering needs a clear offer document, a fixed acceptance window and careful handling of holders who cannot or will not take part.

                ## Milestones
                1. Counsel's confirmation that a rights offering fits the bridge and the jurisdiction.
                2. An offer document stating terms, amounts and the acceptance window.
                3. Every eligible holder sent the offer through the channel counsel advised.
                4. Acceptances recorded and allocations finalised after the window closes.

                ## Notes
                Securities rules can limit who may be offered shares, especially across borders. Eligibility is counsel's call, not the founder's.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A rights offering sent to every eligible shareholder, with acceptances recorded and allocations finalised after the window."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel whether a rights offering fits this bridge"
                - "Prepare the offer document with terms and acceptance window"
                - "Send the offer to every eligible holder as counsel advises"
                - "Record acceptances and finalise allocations after the window"
            - name: Multi-tranche bridge tied to milestones
              description: |-
                ## Purpose
                Some insiders unsure about the whole amount agree to fund in tranches, releasing later money when a defined milestone is reached. Structuring tranches so triggers are objective, timing matches cash needs and a missed trigger has a clear outcome protects the company from being held hostage by a vague condition.

                ## Milestones
                1. Tranche amounts and timing matched to the monthly cash plan.
                2. Each trigger written as an objective, measurable condition.
                3. The outcome of a missed trigger set out in the documents.
                4. Progress against the next trigger reviewed every month.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A tranche plan with objective triggers, a missed-trigger outcome in the documents and monthly progress checks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Match tranche amounts and dates to the monthly cash plan"
                - "Write each trigger as an objective, measurable condition"
                - "Ask counsel to set out what happens if a trigger is missed"
                - "Check progress against the next tranche trigger @recurring(monthly:20)"
            - name: Lender consent for a bridge alongside venture debt
              description: |-
                ## Purpose
                Companies with venture debt often need the lender's consent before issuing new notes or other debt, and the lender may tie that consent to the bridge closing on terms it accepts. Opening the conversation early, with the bridge plan and its effect on covenants, avoids a default triggered by the very fundraise meant to protect the company.

                ## Milestones
                1. Loan agreement clauses on new debt, subordination and covenants identified with counsel.
                2. The lender briefed on the bridge plan before insider terms are final.
                3. Covenant headroom calculated before and after the bridge.
                4. Written consent or a subordination agreement in place before closing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written lender consent or a subordination agreement in place before the bridge closes, with covenant headroom calculated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel which loan clauses the bridge would touch"
                - "Brief the lender on the bridge plan before terms are final"
                - "Calculate covenant headroom before and after the bridge"
                - "Get written consent or a subordination agreement before closing"
            - name: Second bridge decision and the stop rule
              description: |-
                ## Purpose
                A second bridge is sometimes right, but a run of bridges without progress, often called a bridge to nowhere, burns insider goodwill and years of the founders' lives. Writing a stop rule before the first bridge closes, and testing any second request against it honestly, protects everyone from drift.

                ## Milestones
                1. A stop rule written: the conditions under which the company will not seek another bridge.
                2. The rule agreed with the board and the lead insider.
                3. Any second bridge request tested against the rule in a written memo.
                4. If the rule is met, a decision on a sale, a wind-down or a restart taken with the board and professional advice.

                ## Notes
                Directors can have specific legal duties when a company nears insolvency. Take advice from counsel early, not in the final month of cash.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written stop rule agreed by the board, with any second bridge request assessed against it in a memo."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the conditions under which you will not seek another bridge"
                - "Agree the stop rule with the board and lead insider"
                - "Review the stop rule against current numbers with the board @recurring(quarterly)"
                - "Test any second bridge request against the rule in writing"
---

# Bridge Round & Extension

This area is for founders who need money from existing investors to reach the next milestone, and want the bridge or extension to read as conviction rather than as a warning. It starts with the foundations (a real cash-out date, the milestone the bridge must buy, the amount, the insiders' appetite, consents and the board), then the routines that run through the bridge period, the knowledge behind instruments, conversion and conflicts, the structural decisions, the dated events from the first insider ask to the next-round kickoff, variants for seed extensions, slow Series A years, angel-only cap tables and regulatory waits, and finally specialist work such as rights offerings, tranches, lender consent and the stop rule.

What repeats is a Friday cash and runway check, a Monday commitment tracker while the bridge is open, monthly milestone scoreboards, burn reviews, trigger checks and next-round warm-up touches, and quarterly checks on note maturity, scenarios and the stop rule. The Metrics log, Risk register, Meeting notes and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
