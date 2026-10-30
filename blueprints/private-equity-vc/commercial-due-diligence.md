---
id: private-equity-vc.commercial-due-diligence
name: Commercial Due Diligence
description: "Key diligence questions, a scoped adviser, a customer call programme, market sizing you can defend and a findings log that feeds the model, so the commercial case you take to committee is tested, not assumed."
category: business
version: 1.0.0
tags: [private-equity-vc, commercial-due-diligence, knowledge-worker, cdd, customer-calls, market-sizing, competitor-review, expert-networks]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - meeting-notes
    - risk-register
    - metrics-log
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Commercial Due Diligence
          description: "Testing the market and the company's position before buying: customer calls, market sizing, competitor review, adviser scoping and turning findings into the model."
          projects:
            - name: Key commercial questions for the deal
              description: |-
                ## Purpose
                Diligence without a written question list drifts into a tour of the market that never answers what the price depends on. Writing the five to eight commercial questions that would change your bid, each tied to a line in the model, keeps every call, survey and adviser hour pointed at something that matters.

                ## Milestones
                1. Five to eight commercial questions written, each phrased so it can be answered yes, no or with a number.
                2. Each question linked to the model line it would move, such as volume growth, price or churn.
                3. The questions ranked by how much the answer would change value.
                4. The list agreed with the deal lead and shared with the adviser before kick-off.

                ## Notes
                A good question names a threshold: "Can the core segment keep growing above 6 percent for five years?" beats "How attractive is the market?"
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked list of at least five commercial questions, each tied to a model line, agreed with the deal lead before diligence starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the investment thesis and list every claim the price depends on"
                - "Turn the claims into five to eight answerable commercial questions"
                - "Tag each question with the model line it would move"
                - "Review the ranked list with the deal lead and agree the top three"
            - name: Issue tree from thesis to evidence
              description: |-
                ## Purpose
                Breaking each key question into the sub-questions and evidence needed to answer it shows where the work really lies, and where one customer call or one dataset could settle a point. The tree also stops two workstreams chasing the same answer while a third question goes untouched.

                ## Milestones
                1. Each key question broken into two to four sub-questions with no overlap between branches.
                2. Every sub-question paired with the evidence that would answer it: calls, data, survey or desk research.
                3. An owner named for each branch, whether the deal team or the adviser.
                4. Gaps marked where no evidence source exists yet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issue tree covering every key question, with an evidence source and owner on each branch and gaps flagged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the first level of the tree from the key questions list"
                - "Split each branch into sub-questions that do not overlap"
                - "Write the evidence source beside each sub-question"
                - "Assign an owner to every branch and mark the gaps"
            - name: Commercial diligence scope and budget
              description: |-
                ## Purpose
                Outside commercial work can cost anything from a few days of your own time to a large adviser fee, and the right answer depends on deal size, how contested the process is and how much is already known. Agreeing scope and a budget ceiling with the partner before anyone is engaged avoids paying for a full study on a deal you may lose in round one.

                ## Milestones
                1. A scope note listing what is in and out, by question and by phase.
                2. A budget ceiling for each phase, with the split between red flag and confirmatory work.
                3. A decision on what the deal team does in house and what goes to an adviser.
                4. Partner sign-off on the scope and the budget recorded.

                ## Notes
                Ask early whether lenders will want to rely on the report, because that changes the adviser's terms and the timetable.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off scope note with a phase-by-phase budget ceiling and a clear in-house versus adviser split."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page scope note from the key questions"
                - "Estimate days and cost for a red flag and a confirmatory phase"
                - "Mark which questions the deal team will answer itself"
                - "Get the partner's sign-off on scope and budget ceiling"
            - name: Choosing a commercial diligence adviser
              description: |-
                ## Purpose
                Strategy firms, specialist sector boutiques and independent experts differ widely in sector depth, team seniority and willingness to give a view. Running a short, fair selection with two or three firms, judged on the same proposal brief, gets you a team that knows the market and a fee you can defend.

                ## Milestones
                1. A proposal brief sent to two or three advisers with the key questions, timetable and budget range.
                2. Proposals scored against the same criteria: sector credentials, named team, approach, fee and conflicts.
                3. References taken on the preferred team from people who have used them on a live deal.
                4. An engagement letter agreed covering scope, fee, phases, reliance and confidentiality.

                ## Notes
                Start from the **Vendor** template. Ask who will actually run the calls and write the report, not just who presents the pitch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One adviser chosen from at least two scored proposals, with references taken and an engagement letter signed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a two-page proposal brief from the scope note"
                - "Send the brief to two or three advisers with a reply date"
                - "Score each proposal on the same five criteria"
                - "Call two past clients of the preferred team"
                - "Agree the engagement letter terms with counsel's input"
            - name: Commercial data request list
              description: |-
                ## Purpose
                The data room rarely holds what commercial work needs, and a vague request gets a vague reply. A specific list covering customer revenue by year, cohort retention, pricing history, pipeline and lost deals, sent early and tracked, means the analysis starts in week one instead of week three.

                ## Milestones
                1. A request list of 20 to 40 items, each with the period, granularity and format wanted.
                2. Items ranked as must-have or nice-to-have so the seller knows what to send first.
                3. The list cross-checked with the financial diligence team to avoid duplicate requests.
                4. A tracker showing each item as requested, received, partial or refused.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked commercial data request list sent to the seller, with a tracker updated on every item's status."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the data each key question needs, by period and granularity"
                - "Mark every item as must-have or nice-to-have"
                - "Compare the list with the financial diligence request to remove overlaps"
                - "Send the list through the banker and start the status tracker"
            - name: Customer call programme design
              description: |-
                ## Purpose
                Customer calls are the most persuasive evidence in a commercial case and the easiest to get wrong, through a sample picked by management, leading questions or calls held too late to matter. Designing the programme up front, with a sample across size, tenure and churned accounts, gives you findings a sceptical committee will believe.

                ## Milestones
                1. A target sample of 15 to 40 customers covering large, small, new, long-standing and lost accounts.
                2. Agreement with the seller on how customers are contacted and what may be disclosed.
                3. A standard question guide with the same core questions for every call.
                4. A call schedule that finishes before the model is locked.

                ## Notes
                Ask for at least a few customers you choose from the revenue list, not only the ones management offers. Calls arranged only by the seller tend to reach the happiest accounts.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written call plan with a mixed sample of at least 15 customers, an agreed contact protocol and a schedule ending before model lock."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the customer revenue list and mark segments by size and tenure"
                - "Pick a sample that includes lost and shrinking accounts"
                - "Agree the contact and disclosure protocol with the seller's adviser"
                - "Write the core question guide used on every call"
            - name: Clean team rules for competitor data
              description: |-
                ## Purpose
                When the buyer competes with the target or owns a business that does, sharing pricing, margins or customer terms can raise competition law problems. Setting clean team rules with counsel before sensitive data is opened protects the deal and the people working on it.

                ## Milestones
                1. Counsel's view obtained on whether a clean team is needed for this deal.
                2. Named clean team members and the data categories only they may see.
                3. A written protocol for how clean team findings are summarised for the wider deal team.
                4. Each member's acknowledgement of the protocol on file.

                ## Notes
                This is a question for competition counsel, not a judgement call for the deal team. Raise it at kick-off, not when the pricing file arrives.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Counsel's advice on a clean team is recorded and, where needed, a named team and written protocol are in place before sensitive data is opened."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List any overlaps between the buyer's portfolio and the target"
                - "Ask competition counsel whether a clean team is needed"
                - "Name the clean team and the data categories it alone may see"
                - "Collect each member's signed acknowledgement of the protocol"
            - name: Diligence workplan against the bid timetable
              description: |-
                ## Purpose
                Sale processes run to the seller's timetable, and commercial findings that land after the bid date are worth nothing. Laying every workstream against the process dates, working back from model lock and committee, shows early which calls and analyses must start this week.

                ## Milestones
                1. The process timetable written down with bid dates, management meetings and exclusivity end.
                2. Each workstream placed on the timeline with start, interim and final dates.
                3. A model lock date set at least three working days before committee papers are due.
                4. Critical path items flagged and reviewed with the deal lead.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated workplan showing every commercial workstream ending before model lock, reviewed with the deal lead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the process letter dates into one timeline"
                - "Set the model lock date working back from committee"
                - "Place each workstream with start and finish dates"
                - "Flag the three items most likely to run late"
            - name: Findings log tied to model assumptions
              description: |-
                ## Purpose
                Findings scattered across call notes, adviser slides and emails never make it into the numbers. One log where every finding carries its source, its confidence and the model assumption it supports or challenges is what lets you show committee exactly why the diligence case differs from management's.

                ## Milestones
                1. A log with columns for finding, source, date, confidence and linked model assumption.
                2. Every finding from calls, data and adviser work entered within two days.
                3. Each model assumption marked as supported, challenged or untested.
                4. The log reviewed against the model before each committee paper.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A findings log where every operating case assumption is marked supported, challenged or untested, with sources."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up the findings log with source and confidence columns"
                - "List every operating case assumption down one side"
                - "Enter the findings gathered so far and link each to an assumption"
                - "Mark each assumption as supported, challenged or untested"
            - name: Diligence stand-up during exclusivity
              description: |-
                ## Purpose
                Exclusivity is short, and commercial issues found on day 20 that could have surfaced on day 5 weakened your hand on price. A fifteen-minute stand-up three mornings a week, run from the findings log and the workplan, keeps the team, the adviser and the deal lead looking at the same open questions.

                ## Milestones
                1. A standing slot agreed with the deal team and the adviser lead.
                2. A fixed agenda: new findings, blocked data requests, calls this week, decisions needed.
                3. Actions from each stand-up recorded with an owner and a date.
                4. Open items reviewed at the next stand-up before new business.

                ## Notes
                Start from the **Meeting notes** template. Keep it to fifteen minutes; anything longer becomes its own meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Stand-ups held three times a week through exclusivity, each with recorded actions and owners."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute slot with the deal team and adviser"
                - "Run the stand-up from the findings log and workplan @recurring(weekly:mon,wed,fri)"
                - "Record actions with owners and dates after each stand-up"
                - "Close or reassign every action older than a week @recurring(weekly:fri)"
            - name: Weekly adviser check-in and interim read-outs
              description: |-
                ## Purpose
                Advisers who report only at the end deliver surprises at the worst moment. A weekly check-in where they share emerging findings, call coverage and anything that contradicts the thesis lets you redirect effort while there is still time and budget to do so.

                ## Milestones
                1. A weekly call agreed in the engagement letter or kick-off note.
                2. A short written interim read-out received before each check-in.
                3. Scope changes and budget burn reviewed on every call.
                4. Any finding that challenges the thesis escalated to the deal lead the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly adviser check-in held through the engagement, each preceded by a written interim read-out and a budget update."
                cadence: rolling
              tasks:
                - "Agree the weekly check-in format with the adviser lead"
                - "Hold the adviser check-in and review budget burn @recurring(weekly:tue)"
                - "Ask for a one-page interim read-out the day before each call"
                - "Send thesis-challenging findings to the deal lead the same day"
            - name: Customer call tracker and coverage view
              description: |-
                ## Purpose
                Partway through a call programme it is easy to lose track of which segments are covered and which are not, and to finish with twenty calls from the same type of customer. A tracker showing calls booked, held and written up against the planned sample tells you where to aim the remaining calls.

                ## Milestones
                1. A tracker listing every target customer with segment, status and interviewer.
                2. Coverage shown as calls held against the plan for each segment.
                3. Gaps in coverage turned into new requests to the seller or adviser.
                4. The tracker shared with the deal lead twice a week during the programme.

                ## Notes
                Start from the **Metrics log** template for the coverage counts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A call tracker showing coverage by segment against the plan, updated twice a week until the programme ends."
                cadence: rolling
              tasks:
                - "Build the tracker from the planned call sample"
                - "Update call status and segment coverage @recurring(weekly:tue,fri)"
                - "Request extra contacts for any segment below plan"
                - "Share the coverage view with the deal lead @recurring(weekly:mon)"
            - name: Same-day call write-ups
              description: |-
                ## Purpose
                Notes written two days after a call lose the exact words that make a finding credible in committee. Writing each call up the same day in a standard format, with direct quotes, a score on each core question and any surprise flagged, builds a body of evidence you can count and cite.

                ## Milestones
                1. A one-page write-up format with core question scores, quotes and surprises.
                2. Every call written up within the same working day.
                3. Each write-up's key findings copied into the findings log.
                4. Quotes stored without personal details beyond role and company type where the protocol requires it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every customer and expert call written up in the standard format on the day it happened, with findings logged."
                cadence: rolling
              tasks:
                - "Create the one-page write-up format with scored core questions"
                - "Write up each call before the end of the working day"
                - "Copy the top findings from each write-up into the findings log"
                - "Check the week's write-ups for missing scores or quotes @recurring(weekly:fri)"
            - name: Expert network calls and compliance
              description: |-
                ## Purpose
                Expert calls are quick and useful, but each one costs money and carries a risk of receiving confidential information from a current employee of the target or a competitor. A short routine for choosing experts, screening them and logging spend keeps the calls useful and inside your firm's compliance policy.

                ## Milestones
                1. Your firm's expert network policy read and its rules noted at the top of your call log.
                2. A screening question set used before every call to exclude current employees and conflicted experts.
                3. A spend log showing calls and cost against the diligence budget.
                4. A monthly review of which experts gave useful insight, kept for future deals.

                ## Notes
                If an expert starts sharing what sounds like confidential information, stop the call and tell compliance. Do not use what was said.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every expert call screened against the firm's policy and logged with its cost, with a monthly spend and usefulness review."
                cadence: rolling
              tasks:
                - "Read the firm's expert network policy and note the hard rules"
                - "Write a screening question set for every expert request"
                - "Log each expert call with cost and usefulness"
                - "Review expert spend against budget @recurring(monthly:12)"
                - "Audit the week's expert calls against the compliance rules @recurring(weekly:wed)"
            - name: Monthly market data refresh for your sectors
              description: |-
                ## Purpose
                New commercial work goes faster when you already hold a current view of your two or three core sectors before a deal arrives. A monthly hour on industry statistics, listed peer results and trade press keeps a sector fact base ready, so a new process starts from evidence rather than from the seller's market chapter.

                ## Milestones
                1. A sector fact base for each core sector with size, growth, main players and recent deals.
                2. Sources listed for each figure with the date it was last checked.
                3. Listed peer results and trading updates summarised each reporting season.
                4. The fact base used in at least one live deal's market section.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated, sourced fact base for each core sector, refreshed monthly for six months in a row."
                cadence: rolling
              tasks:
                - "Set up a fact base page for each of your core sectors"
                - "Refresh sector statistics and peer results @recurring(monthly:5)"
                - "Note the source and date beside every figure"
                - "Clip one useful trade press item per sector @recurring(monthly:19)"
            - name: Commercial red flag escalation routine
              description: |-
                ## Purpose
                Some findings cannot wait for the weekly read-out: a top customer planning to dual-source, a new entrant pricing well below the target, a contract ending next year. A clear rule for what counts as a red flag and who hears about it within a day means the deal lead decides with the facts, not after them.

                ## Milestones
                1. A written definition of a commercial red flag with five or six examples.
                2. An escalation path naming who is told, how and by when.
                3. A red flag register with the finding, source, impact estimate and response.
                4. Every red flag closed with a recorded decision: accepted, priced, protected or deal stopped.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A red flag register where every flag was escalated within one working day and closed with a recorded decision."
                cadence: rolling
              tasks:
                - "Write the red flag definition with concrete examples"
                - "Agree the escalation path with the deal lead"
                - "Enter each red flag in the register with an impact estimate"
                - "Review open red flags and their responses @recurring(weekly:thu)"
                - "Report the count of open red flags to the partner @recurring(monthly:8)"
            - name: Library of past commercial diligence work
              description: |-
                ## Purpose
                Firms often pay twice for the same market work because last year's report sits in a closed deal folder nobody searches. A simple index of past reports, market models and call guides by sector, kept within your firm's document rules, turns old diligence into a head start.

                ## Milestones
                1. An index of past commercial reports by sector, date, adviser and deal outcome.
                2. Reusable market models and call guides tagged and stored in the firm's approved system.
                3. Restrictions on reuse noted for each item, such as NDA limits or adviser terms.
                4. New reports added within a month of each deal closing or ending.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An index covering every commercial report from the last three years, with reuse limits noted, kept current each month."
                cadence: rolling
              tasks:
                - "List the commercial reports you can find from the last three years"
                - "Record the sector, adviser, date and reuse limits for each"
                - "Store reusable models and call guides in the approved system"
                - "Add newly finished reports to the index @recurring(monthly:24)"
                - "Remove reports that are past their reuse or retention limits @recurring(yearly)"
            - name: Quarterly adviser and expert panel review
              description: |-
                ## Purpose
                Without a review, the same adviser gets every job by habit and the best sector experts are forgotten between deals. Scoring advisers and experts each quarter on insight, accuracy and responsiveness gives you a panel you can choose from quickly when the next process lands.

                ## Milestones
                1. A panel list of advisers and experts by sector.
                2. Each engagement scored on insight, accuracy against outcomes, timeliness and value for fee.
                3. One or two new advisers or experts added each year to keep the panel honest.
                4. Panel notes shared with colleagues who run commercial work.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scored adviser and expert panel reviewed every quarter for a year, with at least one new name added."
                cadence: cyclic
              tasks:
                - "List the advisers and experts used in the last two years"
                - "Score each engagement on the same four criteria"
                - "Review the panel and add or drop names @recurring(quarterly)"
                - "Share the panel notes with colleagues running diligence"
            - name: Top-down and bottom-up market sizing
              description: |-
                ## Purpose
                Seller market chapters often quote a large headline market that the target could never serve. Learning to build a top-down estimate from published data and a bottom-up one from customer counts and spend per customer, then reconciling the two, gives you a serviceable market figure you can defend line by line.

                ## Milestones
                1. One top-down estimate built from at least two independent sources.
                2. One bottom-up estimate from customer numbers, adoption and spend per customer.
                3. The gap between the two explained in writing.
                4. A serviceable market figure for the target's actual segments, geographies and price points.

                ## Notes
                State the definition of the market before any number. Most sizing disagreements are really definition disagreements.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice sizing with top-down and bottom-up estimates reconciled within a stated range and the serviceable market defined."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-sentence market definition for a practice target"
                - "Build a top-down estimate from two published sources"
                - "Build a bottom-up estimate from customer counts and spend"
                - "Explain the gap between the two estimates in a short note"
            - name: Running a customer reference call well
              description: |-
                ## Purpose
                Good customer calls sound like conversations and still collect comparable answers on why they buy, what they would switch for and how spend will change. Practising open questions, silence and follow-ups on mock calls before the live programme lifts the quality of every call that follows.

                ## Milestones
                1. A call opening that explains who you are within the agreed disclosure protocol.
                2. Two practice calls run with a colleague playing a customer, then reviewed.
                3. A habit of asking for numbers: share of wallet, contract length, price rises accepted.
                4. Your own checklist of the follow-up questions that worked best.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two recorded practice calls reviewed with a colleague and a personal follow-up question checklist written."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a thirty-second call opening that fits the disclosure protocol"
                - "Run two practice calls with a colleague playing the customer"
                - "Note where you led the witness or missed a follow-up"
                - "Write a checklist of the follow-up questions that drew numbers"
            - name: Reading cohort and retention data
              description: |-
                ## Purpose
                Revenue growth can hide shrinking customers if new logos are filling a leaky bucket. Learning to read cohort tables, gross and net revenue retention and logo churn from raw customer data shows whether the base is getting stronger or simply being replaced.

                ## Milestones
                1. A cohort table built from a customer revenue file by year of first purchase.
                2. Gross and net revenue retention calculated and defined in writing.
                3. Logo churn separated from downsell and price effects.
                4. A short note on what the cohorts say about the durability of revenue.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cohort analysis built from raw customer data with retention metrics defined and a written conclusion on revenue durability."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a sample customer revenue file to practise on"
                - "Build a cohort table by year of first purchase"
                - "Calculate gross and net revenue retention with written definitions"
                - "Write three sentences on what the cohorts show"
            - name: Competitor benchmarking from public sources
              description: |-
                ## Purpose
                Sellers describe competitors in the most flattering terms for the target. Building your own benchmark from filed accounts, listed peer reports, pricing pages, product reviews and job postings gives an independent view of who is winning and why.

                ## Milestones
                1. A list of the five to ten competitors that matter, agreed with the deal lead.
                2. A benchmark table of size, growth, margin where available, pricing and positioning.
                3. Sources and dates recorded for every figure.
                4. A one-page view of where the target is stronger, level or weaker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sourced benchmark of at least five competitors with a one-page relative position view."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the competitors customers mention, not just those in the CIM"
                - "Pull filed accounts or results for each where available"
                - "Compare pricing and positioning from public material"
                - "Write a one-page relative strengths and weaknesses view"
            - name: Assessing pricing power
              description: |-
                ## Purpose
                Many buyout cases assume price rises above inflation, and the evidence is often thin. Learning to test pricing power through price history, customer reactions to past rises, switching costs and the share of the customer's budget the product takes gives committee a grounded view of what price can contribute.

                ## Milestones
                1. Price history for the main products over at least three years.
                2. Customer churn or downsell after past price rises measured.
                3. Switching costs and the product's share of customer spend described.
                4. A written view on realistic annual price growth, with the evidence for it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written pricing power view backed by price history, post-rise churn and switching cost evidence."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Request three years of list and realised price history"
                - "Compare churn in the months after each price rise"
                - "Ask customers on calls how they reacted to the last rise"
                - "Write a short pricing power conclusion with evidence"
            - name: Customer survey design and sample bias
              description: |-
                ## Purpose
                Surveying a few hundred customers can give numbers calls cannot, but only if the sample and questions are sound. Learning to write neutral questions, choose a fair sample and spot response bias stops a survey from confirming what the seller hoped.

                ## Milestones
                1. A survey of no more than fifteen questions with neutral wording.
                2. A sampling plan that reaches lost and small customers as well as large ones.
                3. A response rate target and a check for differences between responders and non-responders.
                4. Results presented with sample size and margin of error stated.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice survey reviewed for neutral wording and a sampling plan that includes lost customers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft fifteen survey questions for a practice target"
                - "Rewrite any question that suggests the answer"
                - "Write a sampling plan including lost customers"
                - "List the bias checks you would run on the responses"
            - name: Channel checks with distributors and suppliers
              description: |-
                ## Purpose
                Distributors, resellers and suppliers see the target's volumes and reputation from angles customers do not. Learning to run short, compliant channel checks gives early warning of lost shelf space, slipping orders or a competitor gaining ground.

                ## Milestones
                1. A map of the target's channels and the main partners in each.
                2. A short question guide for distributors and suppliers.
                3. Three to five channel conversations held within the agreed protocol.
                4. Findings compared with what customers and management said.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three channel checks held and their findings compared with customer and management views in the findings log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map the target's sales channels and main partners"
                - "Write a five-question guide for channel partners"
                - "Agree with the deal lead which partners may be contacted"
                - "Compare channel findings with customer call results"
            - name: Reading an adviser's commercial report critically
              description: |-
                ## Purpose
                Commercial reports are long, polished and sometimes softer than the evidence underneath. Learning to trace each headline back to calls, data and sources, and to spot where the adviser hedges, tells you how much weight each conclusion can bear in committee.

                ## Milestones
                1. Every executive summary claim traced to its supporting page and source.
                2. Hedged language and unsupported claims marked.
                3. Call counts and sample mix checked behind each customer finding.
                4. A list of challenge questions sent to the adviser before the final version.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A marked-up adviser report with each headline traced to evidence and a written list of challenge questions sent back."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick a past commercial report you are allowed to read"
                - "Trace each executive summary claim to its evidence"
                - "Mark claims that rest on fewer than five calls"
                - "Write the challenge questions you would send the adviser"
            - name: Turning findings into the diligence operating case
              description: |-
                ## Purpose
                Commercial diligence matters only when it changes the numbers. Building a diligence case beside management's, with each revenue driver reset from evidence in the findings log, shows committee exactly how much of the seller's growth you believe and why.

                ## Milestones
                1. Revenue drivers split into volume, price, mix, new customers and churn.
                2. Each driver set from evidence with a source reference to the findings log.
                3. A bridge from management's revenue to the diligence case revenue by driver.
                4. The diligence case agreed with the deal lead and fed into the returns model.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A diligence operating case with every revenue driver sourced and a bridge to management's case by driver."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Split management's revenue forecast into its drivers"
                - "Reset each driver using the findings log"
                - "Build the revenue bridge from management case to diligence case"
                - "Walk the deal lead through the bridge before model lock"
            - name: Downside commercial case and sensitivities
              description: |-
                ## Purpose
                Committee will ask what happens if the biggest customer leaves or the market grows at half the rate. A downside case built from the specific commercial risks you found, rather than a flat haircut, shows which risk hurts returns most and what protection is worth negotiating.

                ## Milestones
                1. Three to five named commercial risks, each with a quantified effect on revenue or margin.
                2. A downside case combining the realistic risks, with assumptions stated.
                3. Sensitivity tables for the two drivers that move value most.
                4. The downside case reviewed by someone outside the deal team.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A downside case built from at least three named commercial risks, with sensitivities on the two biggest value drivers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the three to five commercial risks with the largest effect"
                - "Quantify each risk's effect on revenue or margin"
                - "Combine them into a downside case with stated assumptions"
                - "Ask a colleague outside the deal to challenge the downside"
            - name: Walk away, reprice or protect decision on a finding
              description: |-
                ## Purpose
                Any serious commercial finding forces a choice: walk away, lower the price, change the structure or seek protection in the documents. Writing the options down with their cost and likelihood, before negotiating, stops the decision being made in the heat of a call with the banker.

                ## Milestones
                1. The finding described with its evidence and quantified effect.
                2. Options listed: walk away, reprice, earn-out or deferred payment, contract protections, accept.
                3. Each option's cost and chance of acceptance by the seller estimated.
                4. A recommendation agreed with the deal lead and recorded, with legal points sent to counsel.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written options note for the finding, with a recorded decision and any legal protection points passed to counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the finding and its value effect in one paragraph"
                - "List every response option with its cost"
                - "Estimate how the seller is likely to react to each"
                - "Record the agreed response and send legal points to counsel"
            - name: Customer concentration assessment
              description: |-
                ## Purpose
                When the top ten customers make up half of revenue, the deal rests on a few relationships and contracts. Testing contract terms, renewal dates, relationship depth and each large customer's own plans tells you whether concentration is a manageable risk or a reason to change the price.

                ## Milestones
                1. Revenue share of the top one, five and ten customers over three years.
                2. Contract length, renewal date and termination terms summarised for each top customer.
                3. Calls held with as many top customers as the protocol allows.
                4. A concentration risk view with the revenue at risk in the next 24 months.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A concentration analysis showing top customer revenue shares, contract terms and revenue at risk over 24 months."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate top one, five and ten customer shares by year"
                - "Summarise contract terms for each top customer"
                - "Add top customers to the call programme where allowed"
                - "Estimate revenue at risk from renewals in the next 24 months"
            - name: Win and loss analysis of the target's sales
              description: |-
                ## Purpose
                How often the target wins competitive bids, and against whom, says more about its position than any market share chart. Analysing the CRM pipeline and talking to a few lost prospects shows whether the target wins on product, price or relationships, and which competitor is gaining.

                ## Milestones
                1. Two years of pipeline data showing won, lost and abandoned opportunities.
                2. Win rates by segment, deal size and named competitor.
                3. Three to five lost prospects interviewed about why they chose someone else.
                4. A short conclusion on the basis of the target's wins and its weak spots.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Win rates by segment and competitor calculated from pipeline data and tested with at least three lost prospect interviews."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request two years of pipeline data with outcomes and competitors"
                - "Calculate win rates by segment and named competitor"
                - "Ask the seller to arrange calls with three lost prospects"
                - "Write the conclusion on why the target wins and loses"
            - name: Market growth drivers and headwinds stress test
              description: |-
                ## Purpose
                Market growth forecasts are usually a single number borrowed from a research firm. Breaking growth into its real drivers, such as regulation, adoption, replacement cycles or demographics, and testing each against what customers and experts expect, shows how fragile the headline rate is.

                ## Milestones
                1. The three to five drivers behind market growth named and described.
                2. Each driver's expected contribution estimated with sources.
                3. Headwinds listed, including substitutes, price deflation and customer insourcing.
                4. A growth range with low, base and high cases replacing the single forecast.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A market growth range with low, base and high cases, each tied to named drivers and headwinds with sources."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the drivers behind the seller's market growth figure"
                - "Find a source or expert view for each driver"
                - "Write down the headwinds the CIM does not mention"
                - "Build low, base and high growth cases"
            - name: Digital signals on the target and competitors
              description: |-
                ## Purpose
                Web traffic, app downloads, review scores, search interest and job postings are cheap and independent of the seller. Pulling these signals for the target and its main competitors gives a quick cross-check on momentum that calls and data room files may not show.

                ## Milestones
                1. A list of the digital signals that matter for this business model.
                2. Two to three years of each signal for the target and three competitors.
                3. Trends compared with the target's reported revenue and customer numbers.
                4. Any mismatch between signals and the seller's story raised as a question.

                ## Notes
                Treat these as directional. Panel-based traffic and download estimates can be far from actual figures for smaller businesses.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of at least three digital signals for the target and three competitors, with mismatches logged as questions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the digital signals that fit this business model"
                - "Pull two to three years of each signal for the target and peers"
                - "Compare signal trends with reported revenue"
                - "Ask the agent to summarise review themes from public review sites"
            - name: In-house versus adviser commercial work rules
              description: |-
                ## Purpose
                Some funds hire an adviser on every deal, others never do, and neither habit fits every situation. Writing simple rules for when the deal team runs commercial work itself and when it engages an adviser, by deal size, sector familiarity and lender needs, saves money on easy deals and avoids under-doing hard ones.

                ## Milestones
                1. A list of the last five to ten deals with how commercial work was done and what it cost.
                2. Criteria for using an adviser: deal size, sector knowledge, lender reliance, time available.
                3. A short rule sheet agreed with a partner.
                4. The rules applied and checked on the next live deal.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A partner-approved rule sheet stating when to use an adviser, tested on one live deal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List recent deals with how commercial work was resourced"
                - "Note the cost and usefulness of each approach"
                - "Draft criteria for engaging an adviser"
                - "Agree the rule sheet with a partner"
            - name: Red flag commercial review before a first-round bid
              description: |-
                ## Purpose
                In a competitive auction you may have two or three weeks and limited data before the first bid. A focused red flag review, covering the three questions most likely to kill the deal, decides whether the bid goes in and at what range without spending the full diligence budget.

                ## Milestones
                1. The three questions most likely to stop the deal chosen from the key questions list.
                2. Desk research, five to ten expert or customer calls and data room analysis done on those questions.
                3. A two-page red flag note with a clear go or no-go view.
                4. The note discussed with the deal lead before the bid range is set.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-page red flag note with a go or no-go view, delivered before the first-round bid range is set."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Pick the three questions most likely to stop the deal"
                - "Book five to ten expert or customer calls this week"
                - "Draft the two-page red flag note with a clear view"
                - "Review the note with the deal lead before the bid range is set"
            - name: Confirmatory commercial work in exclusivity
              description: |-
                ## Purpose
                Once exclusive, the questions become narrower and the data richer, and committee expects the commercial case to be settled. Running confirmatory work against the open items from the red flag phase, with full customer access and complete data, closes the gaps before final approval.

                ## Milestones
                1. Open items from the red flag phase listed with what is needed to close each.
                2. Full customer call programme and data analysis completed on those items.
                3. Every open item closed, accepted as a known risk or escalated.
                4. The final commercial section of the committee paper drafted.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every red flag phase open item closed, accepted or escalated, with the final commercial section of the committee paper drafted."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List the open items carried over from the red flag phase"
                - "Agree the confirmatory scope and timetable with the adviser"
                - "Close or escalate each open item as evidence arrives"
                - "Draft the final commercial section for the committee paper"
            - name: Commercial read-out to investment committee
              description: |-
                ## Purpose
                Committee members will each have one commercial worry, and a read-out that buries the answer in thirty slides loses the room. Preparing a short read-out that answers the key questions directly, shows the diligence case bridge and names the residual risks gives committee what it needs to decide.

                ## Milestones
                1. A read-out of no more than eight pages answering each key question in its heading.
                2. The bridge from management case to diligence case on one page.
                3. Residual commercial risks listed with their mitigants.
                4. Likely committee questions rehearsed with the deal lead and answers prepared.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An eight-page commercial read-out delivered at committee, with prepared answers to the ten most likely questions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write each key question's answer as a page heading"
                - "Put the revenue bridge on a single page"
                - "List the ten questions committee is most likely to ask"
                - "Rehearse the read-out with the deal lead"
            - name: Commercial findings for lenders
              description: |-
                ## Purpose
                Lenders often want the commercial report too, sometimes with a reliance letter from the adviser, and they read it for downside rather than upside. Preparing what lenders need early, and agreeing reliance terms with the adviser, avoids a delay to financing in the final weeks.

                ## Milestones
                1. Lender requirements on commercial diligence confirmed with the debt adviser or arranger.
                2. Reliance terms agreed between the adviser and lenders, with counsel involved.
                3. A lender version of the findings focusing on downside and cash flow durability.
                4. Lender questions on the commercial case answered and logged.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Reliance terms agreed and a lender version of the commercial findings delivered, with lender questions answered in a log."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the arranger what commercial work lenders will require"
                - "Raise reliance terms with the adviser and counsel"
                - "Prepare a lender version focused on downside cases"
                - "Log and answer each lender question on the commercial case"
            - name: Commercial questions for the management presentation
              description: |-
                ## Purpose
                The management presentation is often the only time you hear the team explain the market and their position in their own words. Preparing commercial questions in advance, ordered from open to pointed, tests whether management understand their customers and competitors as well as the CIM suggests.

                ## Milestones
                1. Ten to fifteen commercial questions drawn from the key questions and early findings.
                2. Questions ordered from open market questions to specific challenges.
                3. Roles agreed in the deal team for who asks and who takes notes.
                4. Answers written up and compared with evidence within a day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A prepared question list used at the management presentation, with answers written up and compared with evidence within a day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft fifteen commercial questions from the findings log"
                - "Order them from open to pointed"
                - "Agree who asks and who takes notes"
                - "Compare management's answers with evidence the next day"
            - name: Site visit focused on customers and operations
              description: |-
                ## Purpose
                A visit to a branch, plant or store shows customer traffic, service quality and capacity in a way slides cannot. Planning the visit around commercial questions, with a short observation list, turns a polite tour into evidence.

                ## Milestones
                1. Two or three sites chosen, including at least one that management did not suggest where possible.
                2. An observation list tied to the key questions, such as capacity use and customer mix.
                3. Short conversations with front-line staff where the seller allows.
                4. Observations written up the same day and added to the findings log.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A site visit completed with a written observation list, findings logged the same day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the seller for the site list and pick two or three"
                - "Write an observation list tied to the key questions"
                - "Note capacity, customer mix and service quality during the visit"
                - "Add the site observations to the findings log"
            - name: Commercial diligence on a B2B software target
              description: |-
                ## Purpose
                Software deals rest on recurring revenue quality: retention, expansion, pipeline conversion and the cost of winning customers. Tailoring the work to these measures, and testing product stickiness with users as well as buyers, answers what a software committee actually asks.

                ## Milestones
                1. ARR bridge reviewed for new, expansion, contraction and churn by quarter.
                2. Net revenue retention tested by cohort and customer size.
                3. Customer calls with both economic buyers and daily users.
                4. Competitive threats from adjacent platforms assessed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A software-specific commercial view covering ARR bridge, cohort retention, user and buyer calls and platform threats."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Request the quarterly ARR bridge for three years"
                - "Test net revenue retention by cohort and size"
                - "Add daily users as well as buyers to the call sample"
                - "List adjacent platforms that could bundle the product"
            - name: Commercial diligence on a consumer brand
              description: |-
                ## Purpose
                Consumer brands live or die on repeat purchase, channel relationships and how fast tastes move. Adapting the work to retail sell-through, repeat rates, brand awareness and retailer views tells you whether growth comes from loyal buyers or from one-off distribution gains.

                ## Milestones
                1. Sell-through data by channel and retailer reviewed, not just sell-in.
                2. Repeat purchase and customer acquisition cost trends analysed.
                3. Retailer or buyer conversations held on ranging and promotion.
                4. A consumer survey or panel data used to test awareness and loyalty.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A consumer brand commercial view covering sell-through, repeat rates, retailer views and consumer awareness evidence."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Request sell-through data by channel and retailer"
                - "Analyse repeat purchase rates and acquisition cost trends"
                - "Arrange two or three retailer buyer conversations"
                - "Scope a consumer survey or panel data purchase"
            - name: Commercial diligence on industrial and services businesses
              description: |-
                ## Purpose
                Industrial and business services targets often depend on end-market cycles, framework contracts and local density. Shaping the work around end-market exposure, contract structure and route density shows how earnings would behave in a downturn and where growth can realistically come from.

                ## Milestones
                1. Revenue split by end market with each market's cycle history.
                2. Contract types, renewal rates and price indexation terms summarised.
                3. Local density and share mapped in the main regions.
                4. A downturn scenario based on the last cycle's effect on similar businesses.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A commercial view covering end-market exposure, contract terms, local share and a downturn scenario based on the last cycle."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Split revenue by end market and note each market's cycle"
                - "Summarise contract types and price indexation terms"
                - "Map share and density in the main regions"
                - "Build a downturn scenario from the last cycle"
            - name: Commercial diligence on a carve-out
              description: |-
                ## Purpose
                A business carved out of a larger group may lose shared sales teams, bundled contracts and the parent's brand on day one. Testing which customers buy because of the parent, and which contracts need consent to transfer, shows what the standalone business really keeps.

                ## Milestones
                1. Customers that also buy from the parent identified and their revenue measured.
                2. Contracts needing consent or renegotiation on transfer flagged, with counsel's input.
                3. Shared sales and marketing resources listed with a standalone plan.
                4. Standalone revenue risk quantified in the diligence case.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A standalone commercial view quantifying revenue at risk from shared customers, consent contracts and lost parent resources."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the seller which customers also buy from the parent"
                - "Flag contracts that need consent to transfer for counsel"
                - "List shared sales and marketing resources"
                - "Quantify standalone revenue risk in the diligence case"
            - name: Light-touch commercial check on an add-on
              description: |-
                ## Purpose
                Add-ons are smaller and often bought bilaterally, so a full commercial study rarely makes sense. A light-touch check using the platform company's own sales team, customer overlap and a handful of calls answers the two questions that matter: will customers stay, and does the add-on fit the platform's market.

                ## Milestones
                1. Customer overlap between platform and add-on measured.
                2. Platform sales leaders' view of the add-on's reputation recorded.
                3. Five to eight customer calls held on retention after a change of owner.
                4. A one-page commercial note ready for the add-on approval.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A one-page commercial note for the add-on with customer overlap, platform sales view and at least five customer calls."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare the add-on's customer list with the platform's"
                - "Interview two platform sales leaders about the add-on"
                - "Hold five to eight customer calls on retention"
                - "Write the one-page commercial note for approval"
            - name: Commercial diligence where market data is thin
              description: |-
                ## Purpose
                In smaller or emerging markets, including much of the Caribbean, there may be no published market size, few listed peers and limited industry data. Building the view from import statistics, trade associations, distributor interviews and customer counts produces a defensible answer where desk research alone fails.

                ## Milestones
                1. The data gaps listed and alternative sources identified for each.
                2. Official trade, customs or statistics office data gathered where available.
                3. Interviews held with distributors, trade bodies or local experts.
                4. A market estimate built bottom-up with its uncertainty stated.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A bottom-up market estimate for a thin-data market, built from at least three alternative sources with uncertainty stated."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the data you would normally use and which is missing"
                - "Find customs, trade or statistics office data for the market"
                - "Arrange interviews with distributors and trade bodies"
                - "Build a bottom-up estimate with a stated range"
            - name: Regulatory and policy exposure in the market view
              description: |-
                ## Purpose
                A change in reimbursement, licensing, tariffs or environmental rules can reshape a market faster than any competitor. Mapping the rules and policy debates that drive demand, and taking the legal reading to counsel, makes sure the market view does not assume a regime that may change.

                ## Milestones
                1. The rules and policies that drive demand or pricing listed.
                2. Pending or proposed changes identified from public consultations and press.
                3. Counsel or a regulatory adviser asked to confirm the legal reading.
                4. Policy scenarios reflected in the growth range.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of demand-driving rules and pending changes, reviewed by counsel or a regulatory adviser and reflected in the growth range."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the rules and policies that drive demand or price"
                - "Search public consultations for pending changes"
                - "Send the list to counsel or a regulatory adviser"
                - "Add policy scenarios to the growth range"
            - name: Sustainability-driven demand shifts
              description: |-
                ## Purpose
                Customer procurement rules, emissions targets and consumer preferences are moving demand in many markets, sometimes towards the target and sometimes away. Testing how sustainability requirements affect the target's customers' buying decisions gives a view on both risk and opportunity grounded in what customers say.

                ## Milestones
                1. Sustainability requirements in the target's main customer segments listed.
                2. Customer calls include questions on how these requirements affect supplier choice.
                3. Substitutes or competitors gaining from the shift identified.
                4. The effect, positive or negative, reflected in the diligence case.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note on how sustainability requirements affect demand, based on customer calls, with the effect reflected in the diligence case."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List sustainability requirements in the main customer segments"
                - "Add two sustainability questions to the call guide"
                - "Identify competitors or substitutes gaining from the shift"
                - "Reflect the effect in the diligence case"
            - name: Back-testing commercial diligence after closing
              description: |-
                ## Purpose
                Few investors check whether their commercial diligence was right, so the same blind spots repeat deal after deal. Comparing the diligence case with actual results one and two years after closing shows which assumptions held, which methods worked and which advisers were closest.

                ## Milestones
                1. The diligence case for each deal closed in the last three years retrieved.
                2. Actual revenue drivers compared with diligence and management cases.
                3. The biggest misses explained by cause: market, competition, execution or method.
                4. Lessons written up and added to the key questions guidance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A back-test of at least two closed deals comparing diligence case and actuals, with written lessons for future work."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Retrieve the diligence case for two deals closed two years ago"
                - "Compare each revenue driver with actual results"
                - "Explain the largest misses by cause"
                - "Run the back-test on newly eligible deals @recurring(yearly)"
            - name: Agent-assisted call synthesis within NDA limits
              description: |-
                ## Purpose
                Forty call write-ups are hard to read as a set, and patterns across segments get missed. Using the agent to tally scores and group themes across write-ups, inside the tools your firm approves and without customer names, speeds synthesis while you keep the judgement.

                ## Milestones
                1. Firm rules on which tools may process deal material confirmed.
                2. Write-ups stripped of names and identifiers before any processing.
                3. Themes and scores grouped by segment, then checked against the source write-ups.
                4. A synthesis page ready for the commercial read-out.

                ## Notes
                Check every theme against at least two source write-ups before it goes in a committee paper. Summaries can merge or overstate views.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checked call synthesis by segment, produced within the firm's approved tools and verified against the source write-ups."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm which tools your firm allows for deal material"
                - "Remove names and identifiers from the call write-ups"
                - "Ask the agent to group themes and tally scores by segment"
                - "Check each theme against two source write-ups"
---

# Commercial Due Diligence

This area is for the associate, VP or principal who has to stand up in committee and say the market and the company's position are what the seller claims, or explain why they are not. It starts with the foundations (key questions, scope and budget, adviser selection, the data request and the customer call programme), then the routines that run during a live process, the skills behind good sizing, calls and benchmarking, the decisions that turn findings into the model and the price, the dated moments such as red flag reports and the committee read-out, variants for software, consumer, industrial, carve-out and add-on targets, and finally the specialist work of back-testing your diligence against what happened after closing.

What repeats is a stand-up three mornings a week in exclusivity, a weekly adviser check-in, call tracking and same-day call write-ups, monthly market data and expert spend reviews, and a quarterly look at your adviser panel and past reports. The Vendor, Meeting notes, Risk register and Metrics log templates pair with the projects that name them. Everything here works on your own notes and your own judgement: keep confidential deal material inside the systems your firm and each NDA allow, and take legal, antitrust and regulatory questions to counsel. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
