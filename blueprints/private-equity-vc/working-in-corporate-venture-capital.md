---
id: private-equity-vc.working-in-corporate-venture-capital
name: Working in Corporate Venture Capital
description: "A working system for investing from inside a corporate venture arm: a clear mandate, a mapped approval path, business unit sponsors, clean information walls, strategic value you can show the parent, and a career plan of your own."
category: business
version: 1.0.0
tags: [private-equity-vc, working-in-corporate-venture-capital, knowledge-worker, enterprise, corporate-venture-capital, strategic-investing, business-units, governance]
author: Aurum Technology
starter_structure:
  templates:
    - onboarding-30-60-90
    - risk-register
    - metrics-log
    - board-meeting
    - development-plan
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Working in Corporate Venture Capital
          description: "Investing from inside a corporate venture arm: strategic and financial goals, approvals through the parent, deal terms and links between portfolio and business units."
          projects:
            - name: Corporate venture mandate on one page
              description: |-
                ## Purpose
                Most corporate venture units fail in the second or third year, usually when a new executive asks what the unit is for and nobody can answer in a sentence. Writing the mandate on one page, with the sectors, stages, cheque sizes, geographies and the strategic question each investment should answer, gives you something to point at when priorities shift above you.

                ## Milestones
                1. A one-page mandate naming target sectors, stages, cheque range and geographies.
                2. The two or three strategic questions the portfolio exists to answer, written in the parent's language.
                3. What the unit will not do written down, such as leading seed rounds or investing in suppliers.
                4. The mandate signed off by your executive sponsor and dated.

                ## Notes
                If a mandate already exists, rewrite it on one page anyway. Long mandates written at launch tend to say yes to everything.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page mandate covering sectors, stages, cheque range, exclusions and strategic questions is signed off by the executive sponsor with a date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect every existing document that describes what the venture unit is for"
                - "Draft the sectors, stages, cheque range and geographies on one page"
                - "List three things the unit will not invest in and why"
                - "Book thirty minutes with your executive sponsor to sign off the mandate"
            - name: Strategic and financial goal weighting
              description: |-
                ## Purpose
                Corporate investors live between two scorecards: the business units want strategic insight and partnerships, while group finance wants the money back with a return. Agreeing an explicit weighting, for example a financial floor every deal must clear plus a strategic test, stops each investment becoming a fresh argument about which scorecard counts.

                ## Milestones
                1. The strategic and financial expectations of the sponsor, the CFO and two business unit heads recorded separately.
                2. A written rule for how the two goals combine, such as a financial floor plus a strategic test.
                3. Two past or pipeline deals run through the rule as a check.
                4. The weighting agreed in writing by the sponsor and group finance.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule for combining strategic and financial goals is agreed by the sponsor and group finance, tested on two real deals."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the CFO's office what return they expect from venture spending"
                - "Interview two business unit heads on what strategic value means to them"
                - "Write a one-paragraph rule that combines both goals"
                - "Test the rule on two recent deals and note where it gave an odd answer"
            - name: Map of the parent's approval chain
              description: |-
                ## Purpose
                Startup rounds close in three to six weeks, while a corporate approval can quietly take three months if one signature is missing. Mapping every approval an investment needs, from legal and tax review to the business unit letter and the final committee, shows where deals stall and lets you start the slow ones on day one.

                ## Milestones
                1. Every approval step listed with the person or committee, typical lead time and what they need to see.
                2. Steps that can run in parallel separated from those that must run in order.
                3. The longest realistic path from term sheet to signature measured in days.
                4. The map shared with legal, finance and your sponsor for correction.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written approval map lists every step, owner and lead time for a typical investment, with the critical path measured in days and checked by legal and finance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the approval trail from the last two investments the unit closed"
                - "List each sign-off with its owner and how long it took"
                - "Mark which steps could have started earlier or run in parallel"
                - "Recheck the approval map against current delegations each year @recurring(yearly)"
            - name: Choosing the venture unit's structure
              description: |-
                ## Purpose
                Investing straight off the balance sheet, through a dedicated fund vehicle with its own committee, or as a limited partner in outside funds each changes speed, accounting, staff incentives and how founders see you. Comparing the options against your mandate, even if the structure is already fixed, tells you which constraints are permanent and which could be argued for.

                ## Milestones
                1. Balance sheet, dedicated fund and limited partner models described side by side.
                2. Each model scored on speed, governance, accounting impact, team pay and founder perception.
                3. The current structure's main constraint named, with what it would take to change it.
                4. A recommendation, or a decision to keep the current structure, recorded with reasons.

                ## Notes
                Structure changes need the parent's legal, tax and finance teams. Treat this as preparing the question for them, not answering it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of three structures, scored on five criteria, ends in a recorded recommendation reviewed by group finance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a half-page description of how the unit is structured today"
                - "Talk to two peers at other corporate venture units about their structures"
                - "Score the three models against the same five criteria"
                - "Send the comparison to group finance and legal for their view"
            - name: Business unit sponsor map
              description: |-
                ## Purpose
                Strategic value only reaches the parent through people in the business units who will run a pilot, sign a supply agreement or take a founder's call. A map of who those people are, what they care about this year and how warm each relationship is shows where the portfolio can land and where it will sit unused.

                ## Milestones
                1. Every business unit relevant to the mandate listed with a named sponsor.
                2. Each sponsor's current priorities and budget authority noted.
                3. Relationship strength marked for each sponsor, with gaps flagged.
                4. A plan to fill the two most important gaps within the quarter.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sponsor map names a contact, their priorities and relationship strength for every relevant business unit, refreshed each quarter."
                cadence: rolling
              tasks:
                - "List the business units the mandate is meant to serve"
                - "Name one sponsor in each unit and note their budget authority"
                - "Ask your sponsor which business unit leaders are sceptical of the unit"
                - "Refresh the sponsor map after each round of reorganisations @recurring(quarterly)"
            - name: First 90 days in a corporate venture role
              description: |-
                ## Purpose
                New joiners to a corporate venture team inherit a portfolio, a pipeline and a set of internal politics nobody wrote down. A structured first ninety days, spent learning the parent before trying to impress the market, means your first investment proposal arrives with sponsors already on side.

                ## Milestones
                1. Thirty meetings held across the venture team, business units, legal and group finance.
                2. Every existing portfolio company understood well enough to describe in two sentences.
                3. A list of three early wins agreed with your manager.
                4. A written view of what is working and what is not, shared at day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By day ninety you have met at least thirty internal stakeholders, summarised every portfolio company and shared a written assessment with your manager."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your manager for the ten people you must meet in the first month"
                - "Read the investment papers for every current portfolio company"
                - "Agree three early wins with your manager by the end of month one"
                - "Write your day-ninety assessment and book time to present it"
            - name: Delegated authority and investment policy
              description: |-
                ## Purpose
                Without a written policy, every cheque goes to the top of the company and the unit moves at the pace of the busiest executive. A short investment policy that sets who can approve what size of deal, follow-on rules, concentration limits and when the board must be told gives the team room to move inside agreed limits.

                ## Milestones
                1. Approval thresholds written for new deals, follow-ons and exits.
                2. Concentration limits per company, sector and year set down.
                3. Reporting duties to the executive committee and board stated.
                4. The policy approved through the parent's governance process.

                ## Notes
                Group legal and the company secretary will know how delegations are recorded in your company. Draft the business content and let them set the form.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An investment policy with approval thresholds, concentration limits and reporting duties is approved through the parent's governance process."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find the parent's current delegation of authority schedule"
                - "Draft thresholds for new deals, follow-ons and exits"
                - "Ask the company secretary how the policy should be approved"
                - "Review the policy limits against the year's activity @recurring(yearly)"
            - name: Information wall between startups and business units
              description: |-
                ## Purpose
                Founders worry that what they show a corporate investor will reach a competing product team, and they are right to ask. A written protocol that says what startup information stays inside the venture team, what can be shared with which business unit and on what terms, protects founders, protects the parent from claims and keeps your reputation in the market intact.

                ## Milestones
                1. Categories of startup information defined, from public to restricted.
                2. Rules written for who inside the parent may see each category.
                3. A standard line agreed for explaining the wall to founders.
                4. Every member of the venture team briefed and the briefing recorded.

                ## Notes
                Agree the protocol with group legal. The test is simple: could you explain it to a founder without embarrassment?
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written information protocol with categories, access rules and a founder explanation is agreed with legal and every team member has been briefed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the kinds of startup data the team receives during diligence and after closing"
                - "Draft access rules for each category with group legal"
                - "Write the two sentences you will use to explain the wall to founders"
                - "Run a short refresher on the wall for the whole team @recurring(yearly)"
            - name: Conflicts register for the venture team
              description: |-
                ## Purpose
                Overlaps are common: a corporate investor can hold a stake in a startup that is also bidding for a contract with the parent, competing with a business unit, or negotiating a licence. Keeping a register of these overlaps, and of team members' personal interests, means conflicts are declared and handled before they surface in a committee or a dispute.

                ## Milestones
                1. Every portfolio company checked for supplier, customer, competitor or licensing links to the parent.
                2. Team members' personal investments and advisory roles declared.
                3. Each conflict given an owner and a handling rule.
                4. The register reviewed with legal or compliance.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A conflicts register covers every portfolio company and team member, each entry with an owner and handling rule, reviewed with compliance each quarter."
                cadence: rolling
              tasks:
                - "Check each portfolio company against the parent's supplier and customer lists"
                - "Ask each team member to declare personal investments and advisory roles"
                - "Agree a handling rule for each conflict with compliance"
                - "Review the conflicts register with compliance @recurring(quarterly)"
            - name: Accounting treatment briefing with group finance
              description: |-
                ## Purpose
                Group finance decides whether a stake is held at fair value, under the equity method or at cost, and that choice decides whether a startup's down round lands on the parent's quarterly results. Understanding the treatment for each holding, and the thresholds that change it, lets you warn finance before a round rather than after.

                ## Milestones
                1. The accounting treatment for every holding confirmed with group finance.
                2. The ownership and influence thresholds that would change a treatment listed.
                3. The effect of a hypothetical down round on group results worked through once.
                4. A short note filed explaining the treatments in plain words for the team.

                ## Notes
                This is for understanding, not for making accounting calls. Group finance and the auditors decide treatment.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-words note records the accounting treatment of every holding and the thresholds that would change it, confirmed by group finance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book an hour with the group finance contact who handles venture holdings"
                - "List each holding with its treatment and ownership percentage"
                - "Work through how one down round would show in the group results"
                - "Recheck treatments with group finance after the year-end audit @recurring(yearly)"
            - name: Monthly readout to the executive sponsor
              description: |-
                ## Purpose
                Sponsors who hear from the venture team only when money is needed start to see it as a cost centre. A short monthly readout covering pipeline, portfolio news, strategic wins and the one decision you need keeps the sponsor informed enough to defend the unit when budgets are cut.

                ## Milestones
                1. A one-page readout format agreed with the sponsor.
                2. Readouts sent on the same day each month for three months.
                3. Every readout ending with one clear ask or decision.
                4. Sponsor feedback on the format collected after the third month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly readouts are sent in a year on a fixed day, each ending with one named ask or decision."
                cadence: rolling
              tasks:
                - "Agree the one-page readout headings with your sponsor"
                - "Ask the agent to draft the monthly readout from your pipeline and portfolio notes"
                - "Send the sponsor readout with one clear ask @recurring(monthly:9)"
                - "Ask the sponsor after three readouts what they would cut or add"
            - name: Quarterly strategic value scorecard
              description: |-
                ## Purpose
                Strategic value is easy to claim and hard to prove: a pilot that went nowhere and a supply deal worth millions both get called a partnership. A scorecard that counts pilots started, pilots converted to contracts, revenue or savings attributed and insights adopted gives the parent numbers, not anecdotes.

                ## Milestones
                1. Five to eight strategic measures defined with clear counting rules.
                2. A baseline quarter recorded for each measure.
                3. Attributed revenue and savings confirmed by the business unit, not estimated by the venture team.
                4. The scorecard presented alongside financial returns each quarter.

                ## Notes
                Start from the **Metrics log** template. Count only what a business unit will sign off; inflated strategic numbers are found out at the first budget review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A quarterly scorecard with five to eight measures, each with business unit sign-off on attributed value, is presented for four consecutive quarters."
                cadence: cyclic
              tasks:
                - "Draft five to eight strategic measures with counting rules"
                - "Ask each business unit to confirm the value attributed to portfolio work"
                - "Update the strategic value scorecard and circulate it @recurring(quarterly)"
                - "Drop any measure nobody looked at after two quarters"
            - name: Business unit problem intake
              description: |-
                ## Purpose
                The best corporate deals start from a problem a business unit already owns and has budget for, not from a startup the venture team liked. A monthly intake of problem statements from business units, each with an owner and a sense of budget, turns sourcing from guesswork into a search with a buyer waiting.

                ## Milestones
                1. A short problem statement form agreed with two business units.
                2. Problem statements collected from at least four units.
                3. Each problem matched to a sourcing search or parked with a reason.
                4. At least one pipeline company traced back to an intake problem.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Problem statements from at least four business units are logged, each matched to a search or parked, with one pipeline company sourced from them."
                cadence: rolling
              tasks:
                - "Write a five-question problem statement form"
                - "Send the form to the sponsors in two business units"
                - "Collect and triage new business unit problem statements @recurring(monthly:16)"
                - "Tell each business unit what happened to the problems they submitted"
            - name: Lead VC relationship cadence
              description: |-
                ## Purpose
                Few corporate investors lead rounds, so the quality of your deal flow depends on whether independent VCs think you are a helpful co-investor or a slow one. Regular calls with a short list of lead investors, where you share what the parent is looking for and how fast you can move, earns the early call on rounds that fit.

                ## Milestones
                1. Fifteen to twenty lead investors chosen who back companies in the mandate.
                2. Each investor told plainly what you invest in and your realistic timeline.
                3. Every referral logged with its source.
                4. The list pruned after six months to the investors who actually send deals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of fifteen to twenty lead investors is contacted on a monthly rotation, with every referral logged by source and the list pruned after six months."
                cadence: rolling
              tasks:
                - "List fifteen to twenty funds that lead rounds in the mandate sectors"
                - "Write a two-line description of what the parent looks for and how fast you close"
                - "Call three lead investors on the rotation @recurring(monthly:23)"
                - "Prune the list to investors who sent a deal in the last six months"
            - name: Annual venture budget request
              description: |-
                ## Purpose
                Each year the venture unit competes for capital with factories, product lines and acquisitions, usually through a planning cycle built for none of them. A budget request that sets out reserves for follow-ons, new deal capacity, running costs and the strategic and financial results to date gives the CFO a reason to keep the programme funded through a weak year.

                ## Milestones
                1. Follow-on reserves estimated company by company for the coming year.
                2. New deal capacity sized against the mandate's target number of investments.
                3. Running costs of the team and advisers set out separately.
                4. The request submitted on time in the parent's planning format.

                ## Notes
                Ask for reserves explicitly. A unit that cannot follow on loses its pro rata and its standing with lead investors.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A budget request with company-level reserves, new deal capacity and running costs is submitted on time in the parent's planning format each year."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Find the parent's planning calendar and the budget template deadline"
                - "Estimate follow-on reserves for each portfolio company"
                - "Prepare and submit the annual venture budget request @recurring(yearly)"
                - "Brief your sponsor on the request before it reaches the CFO"
            - name: Quarterly portfolio valuation submission
              description: |-
                ## Purpose
                Group finance needs a defensible value for each holding at every quarter end, and auditors will ask how you got there. A routine that collects the latest round prices, company updates and impairment signals, and sends finance a documented mark per company, keeps the quarter-end close from becoming a scramble.

                ## Milestones
                1. A valuation template agreed with group finance listing method and evidence per holding.
                2. Latest round, recent results and any impairment signal recorded per company.
                3. The submission sent before finance's internal deadline.
                4. Auditor questions answered from the file without new work.

                ## Notes
                Group finance and the auditors own the final values. Your job is the evidence and early warning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly valuation files are submitted before finance's deadline in a year, each with method and evidence per holding."
                cadence: cyclic
              tasks:
                - "Agree the valuation template and deadline with group finance"
                - "Ask each portfolio company for quarter-end figures two weeks before the deadline"
                - "Send the documented quarterly valuation file to group finance @recurring(quarterly)"
                - "File auditor questions and answers with the valuation papers"
            - name: Pilot and proof of concept tracker
              description: |-
                ## Purpose
                Startups often join a corporate investor hoping for a commercial deal, then spend nine months in a pilot that no business unit owns. Tracking every pilot with its sponsor, success measure, end date and decision forces a yes or no at the agreed time and stops portfolio companies burning cash on goodwill.

                ## Milestones
                1. Every live pilot logged with sponsor, success measure and end date.
                2. Pilots past their end date without a decision flagged to the sponsor.
                3. Each finished pilot closed as a contract, an extension with new terms or a stop.
                4. A conversion rate from pilot to contract calculated for the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pilot has a sponsor, measure and end date in the tracker, and each finished pilot is closed as contract, extension or stop within thirty days of its end date."
                cadence: rolling
              tasks:
                - "List every pilot running between portfolio companies and business units"
                - "Add a sponsor, success measure and end date to each pilot"
                - "Review overdue pilots and chase sponsors for a decision @recurring(monthly:12)"
                - "Calculate the pilot to contract conversion rate at year end"
            - name: Observer seat routine under confidentiality limits
              description: |-
                ## Purpose
                Observer seats, rather than directorships, are the usual arrangement for corporate investors, often with a side letter that excludes them from sessions touching the parent's competitive interests. A routine that prepares for each meeting, respects recusals and sends a sanitised internal note afterwards keeps the seat useful without breaching the terms.

                ## Milestones
                1. The observer rights and exclusion terms for each seat summarised.
                2. A standard internal note format that excludes restricted information.
                3. Recusal points identified before each meeting.
                4. A note filed after every meeting attended.

                ## Notes
                If you also hold a full board seat, the duties are different and heavier. Take that question to counsel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every observer meeting is preceded by a recusal check and followed by a sanitised internal note filed within three days."
                cadence: rolling
              tasks:
                - "Summarise the observer rights and exclusions in each side letter"
                - "Draft a standard internal note format that leaves out restricted material"
                - "Check the month's portfolio meeting calendar and flag recusal points @recurring(monthly:4)"
                - "File a sanitised note within three days of each meeting"
            - name: Corporate investment committee rhythm
              description: |-
                ## Purpose
                Deals in a corporate venture unit often die waiting for a committee slot that is booked around executives' travel. A fixed monthly committee date, a paper deadline a week earlier and a standing format for decisions lets founders and lead investors plan around your timetable instead of guessing at it.

                ## Milestones
                1. A monthly committee date fixed for the year with the members.
                2. A paper deadline and format agreed.
                3. A written decision note sent to the deal team within two days of each committee.
                4. An emergency approval route agreed for rounds that close between meetings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Committee dates are fixed for twelve months, papers arrive a week before, and decision notes go out within two days of each meeting."
                cadence: rolling
              tasks:
                - "Book twelve monthly committee dates with the members' assistants"
                - "Agree a paper deadline one week before each meeting"
                - "Circulate the committee agenda and papers @recurring(monthly:27)"
                - "Agree an emergency approval route for fast rounds"
            - name: Quarterly steering committee with executive sponsors
              description: |-
                ## Purpose
                Beyond the investment committee, a corporate venture unit needs a forum where business unit leaders see the portfolio together and commit people and budget to it. A quarterly steering committee with a set agenda, attended by the sponsors who own pilots, keeps strategic links alive between deals.

                ## Milestones
                1. Steering committee membership agreed with your sponsor.
                2. A standing agenda covering portfolio news, pilots, asks and decisions.
                3. Actions from each meeting logged with owners.
                4. Attendance and actions reviewed after a year to decide whether the forum earns its time.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four steering committees run in a year with a standing agenda, and every action is logged with an owner and followed up by the next meeting."
                cadence: cyclic
              tasks:
                - "Propose steering committee members to your sponsor"
                - "Write the standing agenda and circulate it"
                - "Run the steering committee and log actions with owners @recurring(quarterly)"
                - "Review a year of attendance and actions with your sponsor"
            - name: How independent VCs judge corporate investors
              description: |-
                ## Purpose
                Many independent VCs have a story about a corporate investor that changed strategy mid-round or used board access to pressure a founder. Learning how lead investors and founders rate corporate investors, what they welcome and what they avoid, helps you build a reputation that gets you into the rounds you want.

                ## Milestones
                1. Five conversations with lead investors and founders about their experience of corporate investors.
                2. A written list of the behaviours they valued and the ones that cost a corporate a seat at the table.
                3. Two changes to your own practice chosen from the list.
                4. The findings shared with the venture team.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five interviews produce a written list of valued and disliked corporate behaviours, and two practice changes are adopted by the team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask three lead investors for twenty minutes on working with corporate investors"
                - "Ask two portfolio founders what they would change about the parent as an investor"
                - "Write up the behaviours they valued and the ones they avoided"
                - "Pick two changes to adopt and present them at the next team meeting"
            - name: Strategic terms founders push back on
              description: |-
                ## Purpose
                Rights of first refusal on an acquisition, rights of first negotiation, exclusivity and most favoured customer clauses can scare off other buyers and investors, and experienced founders and their lawyers resist them. Knowing what each term does to a startup's later options, and which lighter versions are commonly accepted, lets you ask for what the parent needs without sinking the round.

                ## Milestones
                1. A one-page explainer for each strategic term, including how it affects other buyers.
                2. Lighter alternatives listed, such as notice rights instead of a right of first refusal.
                3. The parent's minimum requirements agreed with business unit sponsors and legal.
                4. A negotiation position recorded for the next term sheet.

                ## Notes
                Your legal team or outside counsel drafts and advises on the terms. This project is about understanding them well enough to brief and negotiate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Explainers for at least four strategic terms with lighter alternatives exist, and the parent's minimum position is agreed with legal."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the strategic terms the parent has asked for in past deals"
                - "Write a one-page explainer for each with its effect on later buyers"
                - "Ask counsel which lighter alternatives are common in current deals"
                - "Agree the parent's minimum position with sponsors and legal"
            - name: Strategic rationale paper for internal approval
              description: |-
                ## Purpose
                Inside a corporation, the investment memo has a second audience: executives who care less about the startup's returns than about what it means for their business. A separate two-page strategic rationale, naming the business unit, the problem, the expected link and who will own it, gets the approvals that a standard venture memo alone does not.

                ## Milestones
                1. A two-page strategic rationale format agreed with your sponsor.
                2. The format used on one live deal.
                3. The business unit owner named and confirmed in writing in the paper.
                4. Feedback from committee members used to tighten the format.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page strategic rationale format is agreed, used on a live deal with a confirmed business unit owner, and revised after committee feedback."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the headings for a two-page strategic rationale"
                - "Ask the business unit owner on a live deal to confirm their role in writing"
                - "Write the rationale for that deal and attach it to the committee papers"
                - "Collect committee members' comments and revise the format"
            - name: Separating the commercial deal from the investment
              description: |-
                ## Purpose
                When a corporate invests and signs a supply, licence or distribution agreement at the same time, the two negotiations can bleed into each other, and founders end up trading equity terms for contract terms. Running them on separate tracks with separate negotiators, and documenting the arm's length basis, protects both sides and the parent's governance.

                ## Milestones
                1. Separate negotiators named for the investment and the commercial agreement.
                2. A written note on how the commercial terms were set at arm's length.
                3. Legal review of any terms linking the two agreements.
                4. Both agreements signed with the link, if any, disclosed to the committee.

                ## Notes
                Linked commercial and equity terms can raise accounting, tax and competition questions. Involve legal and finance from the start.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "For the next deal with a commercial agreement, separate negotiators are named and a written arm's length note is filed with the committee papers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Identify pipeline deals that come with a commercial agreement"
                - "Name a separate negotiator for each commercial track"
                - "Write an arm's length note describing how commercial terms were set"
                - "Ask legal to review any clause that links the two agreements"
            - name: Competition law and gun-jumping awareness
              description: |-
                ## Purpose
                Taking a stake in a startup that competes with, supplies or buys from the parent can trigger merger control filings, and information shared too early can breach competition rules before any deal closes. Knowing when to call competition counsel, and what not to share before clearance, keeps a minority stake from becoming a regulatory problem.

                ## Milestones
                1. A briefing from competition counsel on when minority stakes and board rights need review.
                2. A checklist of trigger questions added to the deal process.
                3. Rules on sharing competitively sensitive information before clearance written down.
                4. The checklist used on every new deal from the next one onward.

                ## Notes
                Rules differ by country and change. Competition counsel decides; your job is to ask early.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A competition trigger checklist agreed with counsel is part of the deal process and appears completed in the file of every new investment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a briefing with competition counsel for the venture team"
                - "Write the trigger questions counsel gives you into a checklist"
                - "Add the checklist to the deal file template"
                - "Note the rules on sharing sensitive information before clearance"
            - name: Foreign investment and export control questions
              description: |-
                ## Purpose
                Investing across borders from a large company can bring national security screening, export control limits on technology access and sanctions checks into a small minority deal. Learning which questions the parent's trade and legal teams need answered, and at what stage, avoids a closing delayed by a filing nobody saw coming.

                ## Milestones
                1. The parent's trade compliance contact identified and briefed on the venture process.
                2. Screening questions on sector, technology and investor nationality listed.
                3. The point in the deal process where screening happens agreed.
                4. One past or live deal run through the questions.

                ## Notes
                Screening regimes vary widely by country and sector. Treat this as a list of questions for counsel, not answers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A screening question list is agreed with the trade compliance team and placed at a fixed stage of the deal process."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the parent's trade compliance or export control contact"
                - "Ask them which startup sectors and technologies need screening"
                - "Write the screening questions into the deal process"
                - "Run one live deal through the questions as a test"
            - name: Translating venture metrics for corporate executives
              description: |-
                ## Purpose
                Executives who run billion-pound businesses on margin and cash flow can find burn multiples, net revenue retention and paper markups baffling or alarming. A short glossary and a standard way to show portfolio numbers next to familiar corporate measures makes your updates read as business information rather than jargon.

                ## Milestones
                1. A one-page glossary of the ten venture terms that appear in your updates.
                2. Each term paired with the nearest corporate measure.
                3. A standard portfolio page that shows cash, runway and revenue in corporate terms.
                4. Two executives' feedback on the page recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page glossary and a standard portfolio page in corporate terms are in use, with feedback from two executives recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ten venture terms that appear most in your updates"
                - "Write a plain-words definition and corporate equivalent for each"
                - "Redesign one portfolio page using the corporate terms"
                - "Ask two executives which page they find easier to read"
            - name: IP and data boundaries in portfolio pilots
              description: |-
                ## Purpose
                Pilots between a startup and a business unit raise questions about who owns improvements, what parent data the startup can train on and what happens to both if the pilot ends. Learning the parent's standard positions, and where startups commonly need flexibility, lets you prepare both sides before the first data file changes hands.

                ## Milestones
                1. The parent's standard pilot terms on IP, data use and confidentiality collected.
                2. The three terms startups most often dispute identified from past pilots.
                3. A short pilot terms summary written for founders.
                4. A fallback position on each disputed term agreed with legal.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A founder-facing pilot terms summary exists, with an agreed fallback for each of the three most disputed terms."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask procurement or legal for the standard pilot agreement"
                - "Find the three clauses startups argued about in past pilots"
                - "Write a one-page summary of the pilot terms for founders"
                - "Agree fallback positions on disputed clauses with legal"
            - name: Direct deals versus fund commitments
              description: |-
                ## Purpose
                Some parents learn more and spend less by committing to a few independent venture funds as a limited partner, while others need direct stakes to get board access and commercial links. Comparing the two for your mandate, with the costs, the information each gives and the team each needs, settles a question that otherwise comes up every budget cycle.

                ## Milestones
                1. The strategic insight and financial exposure from each route described.
                2. Team, cost and governance needs of each route estimated.
                3. Two or three candidate funds identified if fund commitments are in scope.
                4. A recorded decision on the split between direct and fund investing.

                ## Notes
                This is a decision for the parent with its finance and legal advisers. No fund or company is recommended here.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of direct and fund routes ends in a recorded decision on the split, approved by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write what the parent wants to learn that it cannot learn today"
                - "Compare direct stakes and fund commitments on insight, cost and team"
                - "Speak to one corporate that invests as a limited partner"
                - "Record the decision on the split with your sponsor"
            - name: When the corporate should lead a round
              description: |-
                ## Purpose
                Leading a round means setting the price, carrying the heaviest diligence and possibly signalling to other buyers that the startup is already spoken for. Writing down the narrow conditions under which the unit would lead, and when it should follow a lead VC, saves the team from drifting into the role by accident.

                ## Milestones
                1. The risks of corporate-led rounds for the startup and the parent listed.
                2. Conditions for leading written down, such as a spin-out or a sector with few venture leads.
                3. A default co-investor role defined for every other case.
                4. The rule approved by the committee.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A committee-approved rule states when the unit leads and when it follows, with conditions written for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List rounds the unit led and what happened afterwards"
                - "Write the conditions under which leading makes sense"
                - "Define the default role as co-investor for all other deals"
                - "Put the rule to the committee for approval"
            - name: Pay and incentives for the corporate venture team
              description: |-
                ## Purpose
                Corporate venture staff are usually paid on the parent's salary and bonus scale while their counterparts in independent funds earn carry, and good people leave for that reason. Building the case for a better incentive, whether a phantom carry plan, a deal bonus or a co-investment right, is a decision for HR and the board, but someone has to prepare it with real market data.

                ## Milestones
                1. Current pay and bonus for each role compared with market data for independent funds.
                2. Two or three incentive designs described with cost and retention effects.
                3. Tax, legal and HR questions for each design listed for the right advisers.
                4. A proposal submitted to HR and your sponsor.

                ## Notes
                Incentive design touches tax, employment law and the parent's remuneration policy. Prepare the business case; HR and advisers settle the form.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A proposal comparing at least two incentive designs against market pay data is submitted to HR and the sponsor, with adviser questions listed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather a market pay survey covering venture investment roles"
                - "Compare team pay with the survey role by role"
                - "Describe two incentive designs with their cost to the parent"
                - "Send the proposal to HR and your sponsor"
            - name: Fast track for startups through procurement
              description: |-
                ## Purpose
                Becoming an approved supplier can take a startup months of filling the same security and insurance forms meant for multinationals. Agreeing a lighter onboarding path with procurement for portfolio companies and pilot partners, with set limits on contract size and data access, gets pilots started while the startup still has runway.

                ## Milestones
                1. The current supplier onboarding steps and their typical duration mapped.
                2. A lighter path agreed with procurement for contracts under a set value.
                3. A named procurement contact for venture-introduced suppliers.
                4. Onboarding time for the next three startups measured.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written fast-track onboarding path with value and data limits is agreed with procurement and used for the next three startups, with times recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask procurement for the standard supplier onboarding checklist"
                - "Time how long the last startup took to become an approved supplier"
                - "Propose a lighter path for contracts under a set value"
                - "Check onboarding times for startups in the fast track @recurring(monthly:19)"
            - name: Cutting the approval path down
              description: |-
                ## Purpose
                Once the approval chain is mapped, most corporate venture teams find steps that exist because of one bad deal years ago, or reviews that duplicate each other. Proposing a shorter path, with which signatures can be merged, delegated or run in parallel, can halve the time from term sheet to signature.

                ## Milestones
                1. Every approval step tagged as needed, mergeable, delegable or parallel.
                2. A proposed shorter path with the expected days saved.
                3. Each step owner consulted on the change.
                4. The shorter path approved and used on the next deal.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A shorter approval path is approved and the next deal closes through it, with the days saved recorded against the old map."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Tag each step on the approval map as needed, mergeable, delegable or parallel"
                - "Estimate the days the shorter path would save"
                - "Meet each step owner to agree the change"
                - "Record the actual time on the first deal through the new path"
            - name: Portfolio triage after a change in parent strategy
              description: |-
                ## Purpose
                New CEOs, divestments and strategy resets can leave half the portfolio outside the parent's new priorities. Sorting each holding into keep and support, hold passively or prepare to sell, with founders told honestly, protects their rounds from the signal of a corporate investor walking away in silence.

                ## Milestones
                1. Every holding scored against the new strategy.
                2. Each company placed in keep, hold or sell with a short reason.
                3. A communication plan for founders and co-investors agreed.
                4. The triage approved by the sponsor and group finance.

                ## Notes
                Founders hear about strategy changes quickly. Tell them before they read it in the press.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every holding is placed in keep, hold or sell with a reason, approved by the sponsor, and every affected founder is contacted."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the new strategy's priorities as five scoring questions"
                - "Score every holding against the questions"
                - "Place each company in keep, hold or sell with a reason"
                - "Plan who calls each founder and what they will say"
            - name: Handoff to corporate development for acquisitions
              description: |-
                ## Purpose
                When a business unit wants to buy a portfolio company, the venture team holds the relationship and the information, but corporate development runs the deal, and confidentiality duties to the startup still apply. A written handoff protocol, covering who tells the founder, what information can move and how the conflict is managed, keeps the acquisition clean.

                ## Milestones
                1. Roles of the venture team, corporate development and the business unit written down.
                2. Rules for what venture-held information may pass to the deal team.
                3. A conflict handling step agreed for the venture team's board or observer role.
                4. The protocol approved by legal and corporate development.

                ## Notes
                Your duties to the startup and its other shareholders do not stop because the parent wants to buy. Take legal advice before any approach.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A handoff protocol covering roles, information rules and conflict handling is approved by legal and corporate development."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Meet the head of corporate development to discuss portfolio acquisitions"
                - "Write the roles of each team in an acquisition of a portfolio company"
                - "Draft the rules on information that may move to the deal team"
                - "Send the protocol to legal and corporate development for approval"
            - name: Venture client trial alongside equity investing
              description: |-
                ## Purpose
                Some corporates find that buying a startup's product as a paying customer, the venture client model, delivers more strategic value than taking equity. Running a time-boxed trial where the unit helps business units buy from three startups without investing tests whether the parent needs equity at all for some of its goals.

                ## Milestones
                1. Three startups chosen with business units willing to pay for a product.
                2. Purchase terms and success measures agreed for each.
                3. Results compared with the strategic value of equity holdings.
                4. A decision recorded on whether the venture client route continues.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three paid venture client purchases are completed and compared with equity holdings, ending in a recorded decision on the route."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask business unit sponsors which problems they would pay a startup to solve"
                - "Choose three startups for a paid trial"
                - "Agree purchase terms and success measures with each business unit"
                - "Compare trial results with the strategic scorecard for equity holdings"
            - name: Annual review with the group executive committee
              description: |-
                ## Purpose
                Once a year the venture unit usually has to justify itself to the full executive committee, often in a twenty-minute slot between larger items. Preparing a short, honest review of money invested, value marked, strategic results and the plan for next year, with the sponsor rehearsed, makes the most of the one meeting that decides the unit's future.

                ## Milestones
                1. A ten-slide review covering capital, value, strategic results and next year's plan.
                2. The sponsor briefed and rehearsed on likely questions.
                3. Business unit heads who benefited lined up to speak briefly.
                4. Decisions and actions from the meeting recorded and sent round.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ten-slide review is presented to the executive committee and the decisions taken are recorded and circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the date and slot length of the executive committee review"
                - "Ask the agent to draft a ten-slide outline from the year's scorecard and valuations"
                - "Rehearse the hardest five questions with your sponsor"
                - "Book the executive committee review slot for next year @recurring(yearly)"
            - name: Startup day for business units
              description: |-
                ## Purpose
                Business unit staff rarely meet startups unless someone puts them in a room, and a well-run startup day can generate more pilots in an afternoon than a quarter of emails. Choosing six to eight startups against problems the units have already named, and setting up follow-up meetings on the day, turns an event into pipeline.

                ## Milestones
                1. Six to eight startups chosen to match named business unit problems.
                2. Business unit attendees confirmed with authority to start a pilot.
                3. Follow-up meetings booked on the day.
                4. Pilots or next steps from the day counted after sixty days.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A startup day with six to eight matched startups is held and at least five follow-up meetings are booked on the day."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Pick a date with two business unit sponsors"
                - "Shortlist startups that match problems from the intake log"
                - "Confirm attendees who can approve a pilot"
                - "Count pilots started sixty days after the event"
            - name: Portfolio summit for founders and the parent
              description: |-
                ## Purpose
                Portfolio founders often know the venture team but nobody else in the parent, and they rarely meet each other. A yearly summit that pairs founders with business unit leaders and with one another builds the relationships that make the portfolio worth more to both sides.

                ## Milestones
                1. A date, venue and budget agreed.
                2. Every founder invited with a named business unit host.
                3. An agenda balancing parent sessions with founder-only time.
                4. Feedback collected and next year's changes listed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A summit is held with at least two thirds of portfolio founders attending, each with a business unit host, and written feedback is collected."
                cadence: cyclic
                effort_hours_estimate: "40"
              tasks:
                - "Set a date and budget for the summit with your sponsor"
                - "Match each founder with a business unit host"
                - "Send founders a short feedback form after the summit"
                - "Plan the next portfolio summit date and budget @recurring(yearly)"
            - name: Briefing a new CEO or CFO on the venture unit
              description: |-
                ## Purpose
                Leadership changes at the parent are the most dangerous moment for a corporate venture unit, because the new executive did not choose it. A short briefing pack and a meeting in the first sixty days, showing the mandate, results, costs and the decision you need, gives the newcomer a reason to keep the unit before someone else gives them a reason to close it.

                ## Milestones
                1. A five-page briefing pack ready within two weeks of the appointment.
                2. A meeting with the new executive held within sixty days.
                3. The executive's priorities recorded and compared with the mandate.
                4. Any change to the mandate agreed or scheduled for review.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-page briefing pack is delivered and a meeting with the new executive takes place within sixty days of their arrival."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask your sponsor how the new executive likes to receive information"
                - "Write a five-page briefing on mandate, results, costs and asks"
                - "Request a meeting through the executive's office"
                - "Record the executive's priorities and compare them with the mandate"
            - name: Closing a first strategic investment
              description: |-
                ## Purpose
                Your first deal at a corporate venture unit tests every process at once: the approval map, the legal review, the business unit letter and the funds transfer from treasury. Running it as a dated plan with each internal deadline set back from the round's closing date shows the founders and lead investor that the parent can keep a promise.

                ## Milestones
                1. A closing timeline set back from the round's target date.
                2. Every internal approval received before the lead investor's deadline.
                3. Funds sent by treasury on the closing date.
                4. A short lessons note filed for the next deal.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first investment closes on the round's closing date with every internal approval on file and a lessons note written within a week."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Write the closing timeline backwards from the round's target date"
                - "Tell treasury the expected funding date and amount early"
                - "Chase each approval owner a week before their deadline"
                - "Write a one-page lessons note after closing"
            - name: Moving from a business unit into the venture team
              description: |-
                ## Purpose
                People who join the venture team from inside the company bring the network and credibility that outside hires lack, but usually not the venture vocabulary or the habit of saying no forty times a week. A plan for the first six months, covering term sheets, cap tables, startup finance and how VCs think, closes the gap quickly.

                ## Milestones
                1. A reading and course list covering term sheets, cap tables and startup finance completed.
                2. Ten startup pitches seen and written up with a pass or proceed view.
                3. A mentor from an independent fund met monthly.
                4. Your internal network mapped as an asset for the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within six months you have finished a set reading list, written up ten pitches and met an external mentor at least four times."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Choose three books or courses on venture terms and startup finance"
                - "Sit in on five pitch meetings with an experienced team member"
                - "Write a pass or proceed note on each pitch you see"
                - "Ask a partner at an independent fund to mentor you"
            - name: Moving from an independent VC firm to a corporate
              description: |-
                ## Purpose
                Investors who cross from an independent fund find that the deals are similar but the job is not: approvals, budgets and internal selling take as much time as sourcing. Planning the move with a clear view of the parent's business, your sponsors and how your performance will be judged avoids the frustration that sends many back within two years.

                ## Milestones
                1. The parent's main business units, products and strategic priorities learned.
                2. Your performance measures agreed in writing with your manager.
                3. Your external network told what you can and cannot invest in now.
                4. A review at six months of what is harder or easier than expected.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written performance measures are agreed in the first month and a six-month review of the move is completed with your manager."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the parent's last two annual reports and strategy presentations"
                - "Agree in writing how your performance will be judged"
                - "Email your network a short note on the new mandate"
                - "Book a six-month review with your manager"
            - name: Running a one-person venture function
              description: |-
                ## Purpose
                Mid-sized companies often ask one person, frequently from strategy or finance, to start investing in startups alongside their day job. A minimum workable set-up, with a mandate, a short approval route, one external fund relationship and a few hours a month ring-fenced, lets that person make a handful of good investments without a team.

                ## Milestones
                1. A protected time allocation agreed with your manager.
                2. A two-step approval route agreed for small cheques.
                3. One independent fund chosen as a regular co-investment partner.
                4. Two or three investments made or a clear decision taken to pause.

                ## Notes
                One person cannot do everything a full unit does. Co-invest behind experienced leads rather than leading rounds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A protected monthly time block, a two-step approval route and one co-investment partner are in place, with a monthly pipeline review held."
                cadence: rolling
              tasks:
                - "Agree with your manager how many hours a month the role gets"
                - "Propose a two-step approval route for small investments"
                - "Meet two independent funds about co-investing alongside them"
                - "Hold your monthly pipeline and portfolio review @recurring(monthly:2)"
            - name: Corporate venture in a Caribbean or emerging-market group
              description: |-
                ## Purpose
                Conglomerates in the Caribbean and other emerging markets, often family-controlled and spread across banking, retail, energy and distribution, are starting to invest in regional and diaspora startups. Their venture work faces thin local deal flow, currency and exit constraints and close family governance, so the set-up needs to fit those facts rather than copy a large multinational's model.

                ## Milestones
                1. The group's decision-makers and family governance on investments mapped.
                2. Regional deal flow sources listed, including accelerators, angel networks and diaspora founders.
                3. Currency, foreign exchange access and exit constraints written down with finance.
                4. A small first programme agreed, such as co-investing behind regional or international funds.

                ## Notes
                Exchange controls and investment rules differ by country. Check each with the group's finance team and local counsel.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written programme for the group covers decision-makers, deal sources and currency constraints, and is approved by the board or family council."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map who in the group and family approves investments"
                - "List regional accelerators, angel networks and funds that see startup deals"
                - "Ask group finance about foreign exchange access and repatriation limits"
                - "Draft a small first programme for the board or family council"
            - name: Career options after corporate venture
              description: |-
                ## Purpose
                Most corporate venture postings last three to five years, and the people who do well plan their next step before a reorganisation chooses it for them. Laying out the real options, from partner at an independent fund to corporate development, a business unit leadership role or founding a startup, and the evidence each needs, lets you build that evidence while still in the seat.

                ## Milestones
                1. Three realistic next roles written down with what each requires.
                2. Gaps in your record for each role identified.
                3. A plan to close the two biggest gaps within a year.
                4. Conversations held with two people who made each move.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A development plan names three next roles, their requirements and your gaps, with conversations held with at least two people per route."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down three roles you could move into after this one"
                - "List what each role would want to see on your record"
                - "Find two people who made each move and ask for a call"
                - "Pick the two biggest gaps and plan how to close them this year"
            - name: Spinning the venture unit out as an independent fund
              description: |-
                ## Purpose
                Some mature corporate venture teams move out of the parent to raise an independent fund with the parent as anchor investor, gaining speed and carry while keeping the strategic link. Studying how that has been done, and what the parent, the team and outside investors each need, prepares a proposal that can survive group legal, finance and the board.

                ## Milestones
                1. Three examples of corporate units that spun out studied and summarised.
                2. The parent's likely conditions as anchor investor listed.
                3. The team's track record documented in a form outside investors could check.
                4. A proposal outline ready for the sponsor, with advisers identified.

                ## Notes
                A spin-out involves fund formation, regulation and tax. Fund counsel and the parent's advisers must lead the structuring.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A proposal outline based on three studied examples, with the parent's conditions and a verifiable team record, is ready for the sponsor."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find three corporate venture units that became independent funds"
                - "Summarise how each handled the parent's anchor commitment"
                - "Document the team's deals in a form outside investors could verify"
                - "Identify fund counsel the team would need"
            - name: Orderly exit when the parent pulls back
              description: |-
                ## Purpose
                When a parent decides to stop venture investing, the worst outcome is a frozen portfolio with no reserves and founders guessing about their investor. Planning an orderly exit, with options from a portfolio sale to a secondary buyer to a managed run-off, protects value and the parent's reputation among the founders and funds it may need again.

                ## Milestones
                1. Each holding's follow-on needs and likely exit timing listed.
                2. Options set out: managed run-off, sale of the portfolio or sale company by company.
                3. Advisers chosen if a portfolio sale is pursued.
                4. Founders and co-investors told the plan in a single coordinated round.

                ## Notes
                Portfolio sales involve consent rights, transfer restrictions and pricing advice. Work through them with legal and the chosen adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written exit plan with a chosen route and timeline is approved by the parent, and every founder and co-investor is told within one week."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List each holding with follow-on needs and expected exit timing"
                - "Check transfer restrictions and consent rights in each company's documents"
                - "Compare run-off and portfolio sale options with group finance"
                - "Plan the order and script for telling founders and co-investors"
            - name: Internal venture spun out with outside investors
              description: |-
                ## Purpose
                Sometimes the most strategic deal is a product or team inside the parent that would grow faster as a separate startup with outside venture money. Working out the carve-out, what IP and people move, what the parent keeps, and how to make the new company attractive to independent investors needs the venture team's view of what founders and VCs will accept.

                ## Milestones
                1. The candidate team, product and IP described with the business case for a spin-out.
                2. The parent's retained stake and rights proposed in a way outside investors could accept.
                3. Two independent VCs' reactions to the structure gathered.
                4. A decision on whether to proceed taken by the sponsor and business unit.

                ## Notes
                Carve-outs raise employment, IP, tax and transfer pricing questions. Legal and finance own those; the venture team brings the market view.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A spin-out proposal with a retained stake, IP plan and feedback from two outside VCs ends in a recorded go or no-go decision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the business case for running the product as a separate company"
                - "List the IP, staff and contracts that would move"
                - "Propose a retained stake and rights that outside investors could accept"
                - "Ask two independent VCs for an honest reaction to the structure"
            - name: Five-year review of the venture programme
              description: |-
                ## Purpose
                Five years is roughly the shortest period over which a venture portfolio shows any real pattern, and boards tend to ask the question then. A review of capital deployed, realised and unrealised value, strategic results confirmed by business units, and what the unit would do differently gives the board a fair basis to expand, change or close the programme.

                ## Milestones
                1. Capital invested, returned and held reconciled with group finance.
                2. Strategic outcomes listed with business unit confirmation.
                3. Comparison with the original mandate's goals written honestly.
                4. Recommendations for the next five years presented to the board.

                ## Notes
                Present the numbers group finance agrees, gross and net of team costs. Avoid comparisons with outside funds that cannot be checked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A five-year review with finance-reconciled figures and business-unit-confirmed strategic outcomes is presented to the board with recommendations."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Reconcile capital invested, returned and held with group finance"
                - "Ask each business unit to confirm the strategic outcomes credited to the unit"
                - "Compare results with the original mandate's goals"
                - "Draft recommendations for the board on the next five years"
---

# Working in Corporate Venture Capital

This area is for the investor who writes cheques on behalf of a corporation: someone newly moved into the venture team, an experienced VC who has crossed to the corporate side, or the one person a mid-sized company has asked to start investing in startups. It begins with foundations (the mandate on one page, the weighting of strategic and financial goals, the approval chain through the parent, business unit sponsors, delegated authority and the information wall), moves through the operating routines that keep the parent and the portfolio connected, the skills that are particular to corporate investing such as strategic terms, commercial agreements and competition law awareness, then decisions about structure, approvals and acquisitions, dated events, the situations different people arrive in, and finally the specialist work of spinning out, winding down or reviewing a programme over five years.

What repeats is a monthly readout to your sponsor, monthly intake of business unit problems, monthly lead VC calls and pilot reviews, a monthly committee rhythm, quarterly valuations, scorecards and steering committees, and a yearly budget request, policy review and executive review. The Onboarding 30/60/90, Risk register, Metrics log, Board meeting and Development plan templates pair with the projects that name them. Everything here is organisational: legal, competition, tax, accounting and securities questions go to the parent's legal and finance teams or outside counsel, and startup information stays behind the wall you agree. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
