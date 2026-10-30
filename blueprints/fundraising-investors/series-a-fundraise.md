---
id: fundraising-investors.series-a-fundraise
name: Series A Fundraise
description: "A Series A run on purpose: readiness metrics, a raise sized to milestones, a tiered investor pipeline, diligence that moves quickly and a lead partner chosen with the board."
category: business
version: 1.0.0
tags: [fundraising-investors, series-a-fundraise, founder, manager, venture-capital, metrics, diligence, lead-investor]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - board-meeting
    - metrics-log
    - meeting-notes
    - feedback-themes
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Series A Fundraise
          description: "Preparing for and running a Series A process with metrics, narrative and a competitive investor process, for startups scaling past product-market fit."
          projects:
            - name: Series A readiness scorecard
              description: |-
                ## Purpose
                Series A investors are buying evidence of a repeatable growth engine, not just a product people like, and founders who launch too early burn their best introductions on firms that say come back in six months. Scoring the company honestly against current expectations for revenue, growth, retention and sales efficiency tells you whether to raise now, in two quarters, or to fix one thing first.

                ## Milestones
                1. A one-page scorecard covering revenue run rate, growth rate, net revenue retention, gross margin and sales efficiency, each with this quarter's actual figure.
                2. Each line marked green, amber or red against a range taken from at least two recent benchmark reports or investor conversations.
                3. A written go, wait or fix verdict agreed between the founders.
                4. The scorecard challenged by one experienced investor or adviser, with their comments noted.

                ## Notes
                Benchmarks move with the market and differ widely by sector. Treat published ranges as a starting point, then test them with two or three investors who lead Series A rounds in your space.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated readiness scorecard with five scored metrics and a written go, wait or fix verdict agreed by the founders."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the five metrics Series A investors in your sector ask about first"
                - "Pull this quarter's actual figure for each metric from the finance system"
                - "Mark each metric green, amber or red against two recent benchmark sources"
                - "Write the go, wait or fix verdict in one paragraph"
                - "Rescore the company against the readiness scorecard @recurring(quarterly)"
            - name: Series A raise amount tied to milestones
              description: |-
                ## Purpose
                Asking for too little leaves the company short of its Series B milestones, while asking for too much invites extra dilution and a harder process. Working backwards from what the next round will need to see, plus a buffer, gives an amount you can defend line by line in every meeting.

                ## Milestones
                1. The three to five milestones the company must reach before a Series B written down, each with a target date.
                2. A hiring and spend plan that reaches those milestones, costed month by month.
                3. A raise amount equal to that plan plus a stated buffer in months of runway.
                4. A low and a high version of the ask, with what each one funds.
                5. The final number agreed with the board.

                ## Notes
                Many founders plan for 18 to 24 months of runway from a Series A, but the milestones should drive the number, not the other way round. Ask your finance lead to stress test the plan at 70 percent of forecast revenue.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board-approved raise amount, with a low and high case each linked to written milestones and months of runway."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the milestones a Series B investor would need to see from you"
                - "Cost the hires and spend needed to reach each milestone"
                - "Add a runway buffer and calculate the low and high ask"
                - "Present the raise amount to the board for agreement"
            - name: Backwards fundraise timeline from cash runway
              description: |-
                ## Purpose
                A Series A often takes three to six months from first meetings to money in the bank, and starting with too little cash hands negotiating power to investors who can see the date. Planning backwards from the month cash would run out shows the latest safe launch date and the preparation that has to finish before it.

                ## Milestones
                1. The cash-out month calculated from the latest burn forecast.
                2. A launch date set that leaves at least six months of runway in hand.
                3. Preparation work on metrics, materials and legal clean-up dated backwards from the launch.
                4. The timeline shared with co-founders and the board.

                ## Notes
                Avoid launching into weeks when partners are commonly away, such as late summer and the end of the year in many markets.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated fundraise timeline showing the cash-out month, a launch date with at least six months of runway, and dated preparation steps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the cash-out month from this month's burn forecast"
                - "Mark the latest launch date that still keeps six months of runway"
                - "Date each preparation step backwards from the launch"
                - "Share the timeline with co-founders and the board"
            - name: Series A metrics definitions sheet
              description: |-
                ## Purpose
                Investors lose trust quickly when ARR on the deck differs from ARR in the data room, or when churn is calculated three ways by three people. One sheet that defines every headline metric, its formula, its source system and its owner keeps the numbers consistent from first meeting to diligence.

                ## Milestones
                1. Definitions written for ARR, net and gross revenue retention, logo churn, gross margin, burn multiple and CAC payback.
                2. Each definition linked to its source report and a named owner.
                3. The deck, model and dashboard reconciled to the same figures for the same quarter.
                4. The sheet reviewed and signed off by your finance lead or outside accountant.

                ## Notes
                Keep one-off fees, pilots and unsigned renewals out of recurring revenue unless they are clearly labelled. Diligence teams will find them anyway.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off definitions sheet covering at least eight metrics, with the deck and model reconciled to it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every metric that appears on the deck and the dashboard"
                - "Write the formula and source system beside each metric"
                - "Reconcile the deck, model and dashboard to the same quarter"
                - "Ask the finance lead to sign off the definitions"
                - "Check the definitions still match how the business bills @recurring(quarterly)"
            - name: Cohort retention analysis for the raise
              description: |-
                ## Purpose
                Partners want to know whether customers who joined a year ago are spending more or less today, because that answers the scale question better than any growth chart. Building revenue cohorts by start quarter turns a vague retention claim into a table that survives scrutiny.

                ## Milestones
                1. Customer revenue grouped into cohorts by the quarter each customer started.
                2. Net revenue retention and logo retention calculated for every cohort.
                3. A cohort chart and table ready for the deck and the data room.
                4. Three plain sentences explaining what the cohorts show, including any weak cohort.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cohort table and chart covering every customer start quarter, with net and logo retention calculated and explained in three sentences."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export revenue by customer by month from the billing system"
                - "Group customers into cohorts by their starting quarter"
                - "Calculate net and logo retention for each cohort"
                - "Write three sentences on what the cohorts show"
                - "Refresh the cohort chart with the latest closed month @recurring(monthly:10)"
            - name: Fundraise roles between founders and team
              description: |-
                ## Purpose
                A Series A can take half of the chief executive's time for three months, and companies that pull the whole leadership team into the process often miss their numbers mid-raise, which is the worst possible signal. Deciding who pitches, who owns the data and who runs the company keeps the business growing while the round happens.

                ## Milestones
                1. The chief executive named as the single owner of investor relationships.
                2. A process manager named for the pipeline, materials and data requests, often the finance or operations lead.
                3. A named leader running weekly operations while the founders are out pitching.
                4. The wider team told what to expect and what not to discuss with investors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written roles note naming the investor lead, the process manager and the operations lead, shared with the leadership team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide who will lead every investor relationship"
                - "Name the process manager for the pipeline and data requests"
                - "Agree who runs weekly operations while the founders pitch"
                - "Brief the leadership team on their part in the raise"
            - name: Choosing venture counsel for the Series A
              description: |-
                ## Purpose
                Series A documents are longer and more negotiated than seed paperwork, and a lawyer who closes venture rounds every month knows what is normal and what is not. Appointing counsel before any term sheet means advice on the first draft, not a rushed review after the headline terms are already agreed.

                ## Milestones
                1. Two or three venture law firms shortlisted from founder recommendations.
                2. Each firm's fee estimate and the partner who would lead the work recorded.
                3. One firm engaged under a signed engagement letter with a fee estimate or cap.
                4. Counsel briefed on the company's structure, past rounds and likely timeline.

                ## Notes
                Start from the **Vendor** template. Ask each firm how many Series A rounds it completed on the company side in the past year.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A venture law firm engaged under a signed engagement letter with a fee estimate, before the first investor meeting of the process."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask three recently funded founders which lawyers they used"
                - "Request fee estimates and the lead partner's name from two firms"
                - "Sign an engagement letter with the firm you choose"
                - "Brief counsel on past rounds and the planned timeline"
            - name: Seed-era housekeeping before Series A
              description: |-
                ## Purpose
                Missing IP assignments, undocumented board consents, unclear convertible terms and option grants without board approval are the issues that delay Series A completions by weeks. Finding and fixing them before launch costs far less than fixing them under a term sheet deadline with an investor's lawyers watching.

                ## Milestones
                1. Every founder, employee and contractor IP assignment located or re-signed.
                2. Board approvals for all past option grants and share issues checked.
                3. Outstanding SAFEs or notes summarised with counsel, including how they are expected to convert.
                4. A fix list completed and signed off by counsel.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A counsel-reviewed fix list showing every IP assignment, past board approval and convertible instrument checked and resolved."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List everyone who has written code or produced designs for the company"
                - "Check each person has a signed IP assignment on file"
                - "Ask counsel to review the approvals behind every past option grant"
                - "Summarise outstanding SAFEs and notes with their conversion terms"
            - name: Board and existing investor alignment on the raise
              description: |-
                ## Purpose
                New investors ask early whether existing investors will take up their pro rata, and a hesitant answer reads as doubt from the people who know the company best. Agreeing the plan, amount and insider participation with the board before launch removes that doubt and turns existing investors into willing references.

                ## Milestones
                1. The raise plan presented at a board meeting with the amount, timeline and target firms.
                2. Each existing investor's pro rata intention recorded.
                3. Board members' connections to partners at target firms listed.
                4. Board approval to begin the process minuted.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Board minutes record approval of the raise plan, and each existing investor's pro rata intention is written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the board a two-page raise plan a week before the meeting"
                - "Ask each existing investor about their pro rata intentions"
                - "List which board members know partners at your target firms"
                - "Record board approval to start the process in the minutes"
            - name: Weekly Series A pipeline review
              description: |-
                ## Purpose
                Once outreach starts, a Series A pipeline can hold 40 to 60 firms at different stages, and losing track of who is waiting for a follow-up is how warm leads go cold. A Monday review of every firm's stage, next step and owner keeps momentum visible and shows which firms are moving towards a partner meeting.

                ## Milestones
                1. A pipeline tracker with stages from first contact to term sheet.
                2. Every active firm in the tracker with a dated next step.
                3. A Monday review held every week of the process.
                4. Stalled firms flagged after ten days without a reply.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline tracker reviewed every Monday for the length of the process, with no active firm lacking a dated next step."
                cadence: rolling
              tasks:
                - "Set up a tracker with stages from first contact to term sheet"
                - "Review every firm's stage, next step and owner @recurring(weekly:mon)"
                - "Flag firms with no reply for ten days and choose a nudge"
                - "Move firms that passed to a closed list with their stated reason"
            - name: Monthly Series A metrics pack
              description: |-
                ## Purpose
                Investors who met you in month one will ask in month three what has changed, and a fresh, consistent pack lets you answer with numbers rather than adjectives. Refreshing the same one-page pack on a fixed day each month also builds the trend line diligence teams expect.

                ## Milestones
                1. A one-page pack with the defined headline metrics and a three-month trend.
                2. The pack refreshed by the fourth day of each month.
                3. Each notable change against last month explained in one line.
                4. The latest pack ready to send within a day of any request.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly metrics packs produced on schedule, each using the agreed definitions sheet."
                cadence: rolling
              tasks:
                - "Create the one-page pack layout from the metrics log template"
                - "Refresh the pack with last month's closed numbers @recurring(monthly:4)"
                - "Write one line explaining each notable change"
                - "Save each month's pack in a dated folder"
            - name: Pre-raise relationships with Series A partners
              description: |-
                ## Purpose
                Partners prefer to back founders they have watched hit targets over time, and a first meeting six to twelve months before the raise turns the later pitch into a progress report. A light, regular rhythm of short notes and the occasional coffee builds that history without starting the process early.

                ## Milestones
                1. Ten to fifteen target partners met once before the formal process.
                2. Each partner's interests and questions recorded.
                3. A short progress note sent to the group on a fixed rhythm.
                4. Three or more partners who have asked to hear when the raise opens.

                ## Notes
                Keep these conversations about the business, not the round. If a partner pushes for a term sheet early, use the pre-emptive offer decision rule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten target partners met before launch, each with a recorded note and at least three progress notes received."
                cadence: rolling
              tasks:
                - "Pick ten partners you want to know before the raise opens"
                - "Send a short progress note to your target partners @recurring(monthly:18)"
                - "Meet two target partners for coffee or a call @recurring(quarterly)"
                - "Record each partner's questions and interests after every conversation"
            - name: Investor meeting notes and follow-up log
              description: |-
                ## Purpose
                After fifteen meetings in a week, founders forget which partner asked about mid-market churn and who promised an introduction. Writing up each meeting the same day, with questions, concerns and the promised next step, means follow-ups go out within a day and patterns in investor concerns across firms become visible.

                ## Milestones
                1. A notes format with attendees, questions, concerns, signs of interest and next step.
                2. Every investor meeting written up on the day it happens.
                3. Follow-up emails sent within 24 hours of each meeting.
                4. A weekly summary of questions asked by more than two firms shared with the founders.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every investor meeting in the process has same-day notes and a follow-up sent within 24 hours."
                cadence: rolling
              tasks:
                - "Set up a meeting notes page for each firm from the template"
                - "Write up each investor meeting before the end of the day"
                - "Send every follow-up promised in meetings that week @recurring(weekly:fri)"
                - "Summarise the questions that came up from more than two firms"
            - name: Keeping the business on plan during the raise
              description: |-
                ## Purpose
                A company that misses its monthly target in the middle of a Series A gives every investor a reason to wait one more month. A protected weekly operating meeting, run by the leader who is not fundraising, keeps sales, product and hiring moving and gives the founders one clear view of the numbers.

                ## Milestones
                1. A weekly operating meeting run by the named operations lead.
                2. Sales pipeline, product delivery and hiring reviewed at every meeting.
                3. A short written summary sent to the founders after each meeting.
                4. The monthly plan for the raise period met, or each gap explained in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly operating meetings held throughout the raise, with monthly targets met or each miss explained in writing."
                cadence: rolling
              tasks:
                - "Book a weekly operating meeting the founders can skip"
                - "Review pipeline, delivery and hiring against plan @recurring(weekly:tue)"
                - "Send the founders a five-line summary after each meeting"
                - "Escalate any likely miss of monthly targets to the founders the same day"
            - name: Diligence question tracker
              description: |-
                ## Purpose
                Lead investors send long lists of diligence questions, often repeating ones already answered, and slow or inconsistent answers stretch the timeline and erode confidence. One tracker holding every question, its owner, the answer given and where the evidence sits keeps answers consistent across firms and makes the second firm's diligence quicker than the first.

                ## Milestones
                1. A tracker with question, firm, owner, due date, answer and evidence location.
                2. Every question answered within the agreed turnaround, usually two working days.
                3. Repeated questions answered once and the approved answer reused.
                4. Answers involving figures checked by the finance lead before they go out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every diligence question from every firm logged, with at least 90 percent answered within two working days."
                cadence: rolling
              tasks:
                - "Set up the question tracker with owner and due date columns"
                - "Assign each new diligence question an owner the day it arrives"
                - "Review open diligence questions and chase late answers @recurring(weekly:thu)"
                - "Reuse approved answers when another firm repeats a question"
            - name: Runway check during the fundraise
              description: |-
                ## Purpose
                Fundraises run long more often than short, and burn tends to creep up during a raise as hiring gets ahead of the money. A monthly runway re-forecast with a trigger point for a cost plan means the board knows weeks in advance if the process needs a fallback.

                ## Milestones
                1. Runway recalculated every month from actual burn.
                2. A trigger agreed, such as four months of runway left, for activating a cost plan.
                3. A written cost plan ready to use if the trigger is reached.
                4. The runway figure reported to the board every month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Runway recalculated from actual burn every month of the process, with a written trigger and cost plan agreed by the board."
                cadence: rolling
              tasks:
                - "Recalculate runway from last month's actual burn @recurring(monthly:25)"
                - "Agree the runway trigger point with the board"
                - "Write the cost plan to use if the trigger is reached"
                - "Report the runway figure in every board update"
            - name: Deal team stand-up during the launch window
              description: |-
                ## Purpose
                The first two to three weeks after launch decide whether a Series A becomes competitive, and in that window a day lost to an unsent follow-up matters. A fifteen-minute stand-up each morning between the chief executive and the process manager covers today's meetings, open follow-ups and any firm moving faster than the rest.

                ## Milestones
                1. A fifteen-minute slot booked each working morning of the launch window.
                2. Today's meetings, follow-ups and data requests reviewed in each slot.
                3. Firms heading to partner meetings flagged so others can be accelerated.
                4. The stand-up stopped once term sheets are in.

                ## Notes
                This is the only daily routine in the area. Drop it the week the live window ends.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily stand-up held every working day of the launch window, with no follow-up left unsent for more than one day."
                cadence: rolling
              tasks:
                - "Book a fifteen-minute slot each morning for the launch window"
                - "Review today's meetings and unsent follow-ups @recurring(daily)"
                - "Flag any firm moving faster so the others can be sped up"
                - "Cancel the stand-up the week term sheets arrive"
            - name: Existing investor briefings during the process
              description: |-
                ## Purpose
                Existing investors are often called by new firms for back-channel references, and an insider who is out of date can undermine a round without meaning to. A short weekly briefing during the live process keeps them consistent with your story and lets them help by nudging partners they know.

                ## Milestones
                1. Existing investors told when the process launches and how they can help.
                2. A weekly email sent with pipeline stage counts and specific asks.
                3. Each insider warned which firms may call them for a reference.
                4. Insiders thanked and updated when the round closes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly briefing sent to existing investors throughout the process, with reference calls flagged before they happen."
                cadence: rolling
              tasks:
                - "Tell existing investors the launch date and how they can help"
                - "Send a short pipeline briefing to existing investors @recurring(weekly:wed)"
                - "Warn each insider before a new firm calls them for a reference"
                - "Thank every insider who helped once the round closes"
            - name: How Series A partnerships make decisions
              description: |-
                ## Purpose
                At most venture firms a deal needs a partner champion who will argue for it at the partner meeting, so a first call that goes well with an associate can still go nowhere. Learning how each target firm moves from first meeting to final approval helps you spend time with the people who decide and give your champion what they need.

                ## Milestones
                1. The usual stages at a venture firm written down, from first call to final approval.
                2. The partner most likely to champion you identified at each of your top ten firms.
                3. Three founders asked how decisions were made at the firms they raised from.
                4. A short note for each top-ten firm on its decision steps and typical timing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each of the top ten firms naming the likely champion and the steps from first meeting to approval."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask three funded founders how their lead firm reached its decision"
                - "Note each target firm's steps from first meeting to approval"
                - "Identify the partner most likely to champion you at each firm"
                - "Listen to two partner interviews about how their firm decides"
            - name: Reading the current Series A market
              description: |-
                ## Purpose
                Round sizes, valuations and the metrics expected at Series A shift with interest rates and investor sentiment, and founders anchored on last year's headlines misjudge their position. Reading fresh benchmark reports and talking to recent raisers each quarter keeps expectations grounded in what is happening now.

                ## Milestones
                1. Two Series A benchmark reports from the last six months read and summarised.
                2. Typical round sizes and metric ranges for your sector noted with their sources.
                3. Three founders who closed a Series A in the past six months spoken to.
                4. A one-page market note kept current each quarter.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A quarterly market note citing at least two dated benchmark sources and three recent founder conversations."
                cadence: cyclic
              tasks:
                - "Find two Series A benchmark reports published in the last six months"
                - "Note typical round sizes and metric ranges for your sector"
                - "Ask three recently funded founders what investors focused on"
                - "Update the market note with the latest benchmark data @recurring(quarterly)"
            - name: Unit economics fluency for the chief executive
              description: |-
                ## Purpose
                Partners test a founder's grip on the business by asking for CAC payback, gross margin by segment or burn multiple without warning, and hesitating or reaching for notes costs credibility. Drilling the core unit economics until you can state each one, its trend and its driver turns those questions into a chance to impress.

                ## Milestones
                1. Eight core unit economics written on one card with current values.
                2. Each figure explained aloud in under thirty seconds, with its main driver.
                3. A surprise mock grilling by the finance lead or an adviser passed without notes.
                4. The card refreshed each month as the figures change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The chief executive answers eight unit economics questions without notes in a recorded mock session."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the eight core unit economics on one card with current values"
                - "Practise explaining each figure and its driver in thirty seconds"
                - "Ask the finance lead to run an unannounced mock grilling"
                - "Re-drill the card using the latest month's figures @recurring(monthly:14)"
            - name: Bottom-up market sizing for partner meetings
              description: |-
                ## Purpose
                Top-down market sizes quoted from analyst reports rarely survive a partner who asks how many customers could actually buy at your price. A bottom-up model built from counted target customers, real price points and realistic adoption gives a market size you can defend and shows you understand the path to a large company.

                ## Milestones
                1. Target customers in each segment counted from a cited source.
                2. Price points per segment taken from signed contracts.
                3. A bottom-up market size calculated with every assumption shown.
                4. The model challenged by one investor or adviser and revised.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A bottom-up market size with sourced customer counts and contract-based pricing, reviewed by one investor or adviser."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count target customers in each segment from a cited source"
                - "Take price points for each segment from signed contracts"
                - "Calculate the market size with every assumption visible"
                - "Ask an adviser to challenge the weakest assumption"
            - name: Series A narrative memo
              description: |-
                ## Purpose
                Many Series A partners read a written memo before or after the deck, and writing one forces the argument into full sentences: why this market, why now, why this team and what the money buys. Founders who can write the case clearly usually pitch it more clearly too.

                ## Milestones
                1. A memo of four to six pages covering problem, market, product, traction, team and plan.
                2. Every claim in the memo tied to a metric from the definitions sheet.
                3. The memo read by two outsiders who can summarise the argument back accurately.
                4. A final version ready to send after first meetings.

                ## Notes
                The deck tells the story; the memo makes the case. Keep the ask and the use of funds identical in both.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A four to six page memo, consistent with the deck and metrics sheet, that two outside readers summarise accurately."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-paragraph answer to why this market and why now"
                - "Ask the agent to draft a memo outline from the deck and metrics sheet"
                - "Tie every claim in the memo to a defined metric"
                - "Give the memo to two outsiders and ask them to summarise it"
            - name: Hard questions bank for Series A partners
              description: |-
                ## Purpose
                Every Series A company has an awkward fact: one customer making up a third of revenue, a churned cohort, a well-funded competitor. Writing honest, evidence-backed answers to the ten questions you least want to hear, before anyone asks, stops a weak answer from becoming the reason a partner meeting fails.

                ## Milestones
                1. The ten hardest questions listed with input from the board.
                2. A short answer for each, backed by a figure or document.
                3. Answers rehearsed aloud with a co-founder playing a sceptical partner.
                4. The bank updated after any meeting that raises a new concern.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written, evidence-backed answers to ten hard questions, rehearsed aloud at least twice before launch."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the board for the three questions they fear most"
                - "List the ten hardest questions you expect from partners"
                - "Write a short answer to each with its supporting figure"
                - "Rehearse the answers with a co-founder playing the sceptic"
            - name: Process lessons from founders who raised recently
              description: |-
                ## Purpose
                Founders who closed a Series A in the last year know which firms moved fast, how long diligence really took and which parts of their preparation were wasted. Five structured conversations cost a few hours and often save weeks of avoidable mistakes in your own process.

                ## Milestones
                1. Five founders who closed a Series A in the past twelve months identified.
                2. A conversation held with each using the same six questions on process and timing.
                3. Their advice summarised into a do and avoid list.
                4. Two changes made to your raise plan as a result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five founder conversations summarised into a written do and avoid list, with two changes made to the raise plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List five founders who closed a Series A in the past year"
                - "Write six questions about process, timing and diligence"
                - "Hold a thirty-minute call with each founder"
                - "Summarise their advice into a do and avoid list"
            - name: Criteria for the right Series A lead
              description: |-
                ## Purpose
                The lead investor's partner usually sits on your board for years, so the choice matters more than a small difference in price. Writing down what you need from a lead before meetings start, such as sector knowledge, board style, fund reserves and help with senior hiring, lets you compare firms on more than valuation when offers arrive.

                ## Milestones
                1. Five to seven lead criteria agreed between the founders.
                2. Each criterion weighted by importance.
                3. The top ten target firms scored against the criteria.
                4. The criteria shared with the board before launch.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A weighted list of lead criteria agreed by the founders, with the top ten target firms scored against it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write what you need from a board partner over five years"
                - "Agree five to seven lead criteria with your co-founders"
                - "Weight each criterion and score your top ten firms"
                - "Share the criteria with the board before launch"
            - name: Lead capacity check on Series A firms
              description: |-
                ## Purpose
                Investing from the tail end of an old fund, a firm may have little left to support you in later rounds, while a very large fund may need an outcome far bigger than your plan. Checking whether each firm actually leads Series A rounds, takes board seats and reserves for follow-ons keeps you from spending weeks on firms that will only ever follow.

                ## Milestones
                1. Fund size and year of the latest fund noted for each target firm.
                2. Whether each firm led a Series A and took a board seat in the past year confirmed.
                3. Reserves for follow-on rounds asked about directly in first meetings.
                4. Firms unlikely to lead moved to a follow-on list.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each target firm marked as a likely lead or follow-on, based on fund vintage, recent leads and reserves."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note each target firm's latest fund size and year"
                - "Check whether each firm has led a Series A in the past year"
                - "Ask partners directly how they reserve for follow-on rounds"
                - "Move firms unlikely to lead onto a follow-on list"
            - name: Dilution limits and walk-away point
              description: |-
                ## Purpose
                Founders who reach a term sheet conversation without a written range tend to anchor on the first number they hear. Agreeing in advance the dilution the founders and board can accept, the minimum raise that still works and what you would trade for a better partner keeps decisions calm when offers arrive.

                ## Milestones
                1. Founder ownership after the round modelled at three dilution levels on the current cap table.
                2. A walk-away point agreed by the founders and recorded.
                3. Trade-offs written down, such as a lower price for a preferred partner.
                4. The limits reviewed with counsel and one experienced board member.

                ## Notes
                This is a decision framework, not a valuation. Ask counsel and an experienced board member to sense check the range against the current market.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written dilution range and walk-away point agreed by the founders and reviewed with counsel before the first term sheet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Model founder ownership after the round at three dilution levels"
                - "Agree a walk-away point with your co-founders"
                - "Write down what you would trade for a preferred lead"
                - "Review the limits with counsel and one board member"
            - name: Pre-emptive offer decision rule
              description: |-
                ## Purpose
                Investors who have watched the company sometimes offer a term sheet before the formal process, usually with a short deadline. Deciding in advance what kind of pre-emptive offer you would accept, and how you would test it against the market, stops a flattering early offer from cutting the process short at a poor price or with the wrong partner.

                ## Milestones
                1. The conditions for accepting a pre-emptive offer written down.
                2. A plan to test any pre-empt quickly with two or three other firms.
                3. Counsel and the board briefed on the rule.
                4. Any pre-emptive offer received compared against the rule in writing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written pre-empt rule agreed with the board, and any early offer assessed against it in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the price, terms and partner you would need to accept a pre-empt"
                - "List two or three firms you would call to test a pre-empt"
                - "Brief the board and counsel on the pre-empt rule"
                - "Record how any early offer compares with the rule"
            - name: Fixing the weakest metric before launch
              description: |-
                ## Purpose
                Readiness scoring usually shows one metric well behind the rest, such as net retention below what investors expect or gross margin dragged down by services work. A focused 90-day plan on that single number, with an owner and a weekly check, can move it from amber to green and change the whole conversation.

                ## Milestones
                1. The weakest metric chosen from the readiness scorecard with a target value.
                2. Three actions with owners expected to move it within 90 days.
                3. Weekly progress tracked against the target.
                4. The metric's value at day 90 recorded beside its starting value.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 90-day plan for one metric completed, with the before and after values recorded on the scorecard."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the weakest metric from the readiness scorecard"
                - "Agree three actions and an owner for each"
                - "Check progress on the weakest metric against its target @recurring(weekly:thu)"
                - "Record the metric's value at the end of 90 days"
            - name: Recurring revenue quality review
              description: |-
                ## Purpose
                Diligence teams strip out pilots, one-off implementation fees, expiring discounts and contracts with easy exit clauses, and the ARR left afterwards is the number they price on. Reviewing your own revenue contract by contract first means the figure you pitch is the figure that survives.

                ## Milestones
                1. Every contract counted in ARR checked for term, renewal date and exit clauses.
                2. Pilots, one-off fees and expiring discounts separated from recurring revenue.
                3. A restated ARR figure, if the review changes it, used in all materials.
                4. The review signed off by the finance lead or accountant.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A contract-by-contract ARR review signed off by the finance lead, with the pitched ARR matching the reviewed figure."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export every live contract with its term and renewal date"
                - "Mark pilots, one-off fees and expiring discounts"
                - "Restate ARR in every document if the review changes the figure"
                - "Ask the finance lead to sign off the reviewed ARR"
            - name: Customer reference pool for investor calls
              description: |-
                ## Purpose
                Series A leads almost always call customers before signing, and an unprepared customer who calls the product fine can do more damage than a missing reference. Choosing five or six happy, articulate customers across segments and asking their permission early means references are ready the day the lead asks.

                ## Milestones
                1. Five or six reference customers chosen across segments and sizes.
                2. Each customer's permission obtained and preferred contact noted.
                3. Each reference told what investors tend to ask, without scripting them.
                4. Reference calls logged so no customer is called too often.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five consenting reference customers listed and briefed, with calls logged so none is called more than three times."
                cadence: rolling
              tasks:
                - "Choose five reference customers across segments and sizes"
                - "Ask each customer's permission to be called by investors"
                - "Brief references on the kind of questions investors ask"
                - "Thank reference customers and update them on the raise @recurring(monthly:21)"
            - name: Series A launch fortnight
              description: |-
                ## Purpose
                Compressing first meetings into two weeks creates the competitive tension that produces multiple term sheets, while a slow trickle of meetings lets each firm wait to see what others do. Planning the launch in tiers, with introductions timed to land on the same few days, gives the round its best chance.

                ## Milestones
                1. Target firms grouped into a practice tier and two main tiers.
                2. Introduction requests sent so first meetings fall within a fourteen-day window.
                3. Thirty or more first meetings held within that window.
                4. Each firm's next step recorded by the end of the fortnight.

                ## Notes
                Put two or three firms you would be glad to work with, but are not your first choice, in the first few days, so the pitch is sharp before your top tier.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least thirty first meetings held within a fourteen-day window, each with a recorded next step."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Group target firms into a practice tier and two main tiers"
                - "Ask introducers to send their introductions on the same two days"
                - "Schedule first meetings into the fourteen-day window"
                - "Record every firm's next step by the end of week two"
            - name: Partner meeting preparation
              description: |-
                ## Purpose
                The partner meeting is where your champion asks the whole partnership to back you, and the questions are sharper than in any first meeting. Preparing with the champion, knowing who will be in the room and which concerns they already hold, turns the meeting into confirming a case rather than building it from scratch.

                ## Milestones
                1. The champion asked who will attend and what concerns they have heard internally.
                2. The opening of the pitch adjusted to answer those concerns in the first ten minutes.
                3. A full run-through with a co-founder and one adviser completed.
                4. A follow-up note sent the same day addressing every open question.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every partner meeting preceded by a call with the champion and followed by a same-day written follow-up."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your champion who will attend and what worries them"
                - "Adjust the opening slides to answer those concerns"
                - "Run a full rehearsal with a co-founder and an adviser"
                - "Send a same-day follow-up covering every open question"
            - name: Lead investor working session at the company
              description: |-
                ## Purpose
                Before issuing a term sheet, many leads spend a day with the team: meeting functional leaders, seeing the product live and testing pipeline and hiring plans. Planning the day like a major customer visit, with an agenda, the right people and prepared answers, shows the depth of the team behind the founders.

                ## Milestones
                1. An agenda agreed with the lead investor a week ahead.
                2. Each functional leader prepared with a fifteen-minute section.
                3. Live product and pipeline reviews ready to run without slides.
                4. Questions raised on the day logged in the diligence tracker.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A working session held to an agreed agenda, with every question raised logged and answered within two working days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the session agenda with the lead a week ahead"
                - "Prepare each functional leader with a fifteen-minute section"
                - "Rehearse the live product and pipeline walkthroughs"
                - "Log every question raised on the day in the tracker"
            - name: Choosing the lead from competing offers
              description: |-
                ## Purpose
                With two or more term sheets in hand, founders usually have a few days to weigh price, partner and firm before offers expire. Comparing the offers against the lead criteria written earlier, with counsel summarising the terms and the board consulted, makes the choice quick and defensible.

                ## Milestones
                1. All term sheets summarised side by side by counsel.
                2. Each lead partner scored against the written lead criteria.
                3. Two founders backed by each lead partner spoken to.
                4. A decision made with board input and recorded, and other firms told promptly and courteously.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A lead chosen within the offer deadline, recorded with criteria scores and board input, and every other firm told within two days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel for a side-by-side summary of every term sheet"
                - "Score each lead partner against your written lead criteria"
                - "Call two founders backed by each lead partner"
                - "Tell the firms you did not choose within two days"
            - name: Confirmatory diligence after the term sheet
              description: |-
                ## Purpose
                Signing a term sheet starts confirmatory diligence, usually financial, legal, commercial and technical, and delays here push completion back and leave room for terms to be reopened. Running it as a project with a timetable, owners and a short list of open items keeps the deal on track to close.

                ## Milestones
                1. A diligence timetable agreed with the lead and counsel.
                2. An owner named for each workstream.
                3. Open items tracked and closed within the agreed turnaround.
                4. Diligence signed off by the lead with no change to the agreed terms.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Confirmatory diligence completed within the agreed timetable, with the lead's written sign-off and no reopened terms."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the diligence timetable and workstreams with the lead"
                - "Name owners for financial, legal, commercial and technical diligence"
                - "Send the lead a list of open items every two days"
                - "Confirm in writing when the lead signs off diligence"
            - name: Announcing the Series A
              description: |-
                ## Purpose
                Funding announcements are one of the few moments when candidates, customers and the press all pay attention at once, and they are often wasted on a single press release. Planning the news around hiring, customer reassurance and partnership goals makes it work for the next eighteen months.

                ## Milestones
                1. An announcement date agreed with the lead investor for after the funds arrive.
                2. A short release, a founder post and a customer email drafted and approved.
                3. Open roles live on the careers page before the announcement.
                4. Inbound candidates and enquiries tracked for the week after.

                ## Notes
                Never announce before the money is in the bank and every document is signed.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An announcement released after funds arrive, with open roles live and inbound candidates and enquiries tracked for one week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree an announcement date with the lead investor"
                - "Draft the release, founder post and customer email"
                - "Publish the open roles before the announcement goes out"
                - "Track inbound candidates and enquiries for a week afterwards"
            - name: First-time chief executive raising a Series A
              description: |-
                ## Purpose
                Founders raising their first institutional round often carry seed habits into it: rolling meetings, loose metrics and decisions made alone at midnight. Pairing with a mentor who has led a Series A, and naming in advance where you need help, shortens the learning curve when every week counts.

                ## Milestones
                1. A mentor who has led a Series A agreed to meet fortnightly through the raise.
                2. The three areas where you most need help written down.
                3. The mentor's review of the plan, materials and pipeline completed before launch.
                4. A debrief held with the mentor after the first five investor meetings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Series A mentor met at least six times through the process, with their review of the plan completed before launch."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask two founders who led a Series A to mentor you"
                - "Write the three areas where you most need help"
                - "Send your mentor the plan and materials before launch"
                - "Debrief with your mentor after the first five meetings"
            - name: Finance lead running the Series A process
              description: |-
                ## Purpose
                When a finance, operations or chief of staff lead runs the process, they become every investor's daily contact for data and diligence while the chief executive owns the relationships. Agreeing what they can answer alone, what needs the founder and how the two hand over keeps the process quick without confusing investors.

                ## Milestones
                1. A written split of responsibilities between the chief executive and the process lead.
                2. An approved list of figures and documents the process lead can share without checking.
                3. A daily handover note between the two during the launch window.
                4. Every investor told who to contact for data requests.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written responsibility split and sharing list agreed by the chief executive and process lead before launch."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down which investor questions the process lead can answer alone"
                - "Agree the list of figures and documents cleared for sharing"
                - "Set up a daily handover note between the two of you"
                - "Tell each investor who to contact for data requests"
            - name: Raising a Series A from outside the main venture hubs
              description: |-
                ## Purpose
                Companies based in the Caribbean, Africa, smaller European cities and other places with few local Series A funds often raise from firms several time zones away that rarely invest outside their home market. Planning travel, understanding the corporate structure some investors ask about and making a credible case for why your location helps gets those firms to take the meeting seriously.

                ## Milestones
                1. Firms that have backed companies from your region listed.
                2. Two trips to the main hub planned around clusters of meetings.
                3. Counsel's advice taken on whether investors are likely to ask for a holding company elsewhere, before anything is agreed.
                4. A one-slide answer on why the location helps the business.

                ## Notes
                Changing where the parent company is incorporated has tax and legal consequences for founders and staff. Take advice from counsel and a tax adviser in each country involved before agreeing to it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of regionally experienced firms, two planned meeting trips and counsel's written advice on structure obtained before launch."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List firms that have backed companies from your region"
                - "Plan two trips that cluster meetings into three days each"
                - "Ask counsel whether investors are likely to require a new holding company"
                - "Write one slide on why your location helps the business"
            - name: Series A with a gap in the leadership team
              description: |-
                ## Purpose
                Every Series A partner looks for the team that will scale the company, and a missing sales leader or technology head will come up in every partner meeting. A clear hiring plan, interim cover and ideally a candidate in process turn the gap into part of the use-of-funds story rather than a reason to wait.

                ## Milestones
                1. The leadership gap named and its effect on the plan written down.
                2. Interim cover in place, such as an adviser or fractional leader.
                3. A recruitment brief written and a shortlist under way.
                4. A one-line answer on the gap ready for every meeting.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recruitment brief, interim cover and a meeting-ready answer for the leadership gap in place before launch."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Name the leadership role investors will expect to see filled"
                - "Arrange interim cover from an adviser or fractional leader"
                - "Start a search with a recruitment brief and shortlist"
                - "Write a one-line answer explaining the gap and the plan"
            - name: Deep-tech or hardware Series A
              description: |-
                ## Purpose
                Hardware, biotech and other deep-tech companies raise their Series A on technical milestones, pilots and supply chain readiness as much as revenue, and many generalist firms will not invest at all. Mapping the milestones that specialist investors in your field expect, with evidence for each, makes the raise credible to the firms that can actually lead it.

                ## Milestones
                1. The technical and commercial milestones specialist investors expect listed.
                2. Evidence gathered for each milestone, such as test results or pilot agreements.
                3. Specialist and sector funds separated from generalists in the target list.
                4. Non-dilutive funding received or applied for noted alongside the round.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A milestone map with evidence for each milestone, and a target list split into specialist and generalist funds."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the milestones specialist investors in your field expect"
                - "Gather test results, pilot agreements and supplier letters as evidence"
                - "Separate specialist funds from generalists on the target list"
                - "Note any grants received or applied for alongside the round"
            - name: Regrouping when the Series A stalls
              description: |-
                ## Purpose
                If eight weeks after launch no partner meeting is in sight, pitching the same story to new firms rarely changes the result. Pausing to collect the reasons firms gave for passing, deciding whether the issue is metrics, story, market or fit, and setting a new plan protects both runway and reputation.

                ## Milestones
                1. Every pass reason collected and grouped by theme.
                2. A diagnosis agreed: metrics, story, market or fit with the firms approached.
                3. A decision recorded to relaunch later, raise from insiders or cut burn.
                4. Firms that passed thanked and asked whether you may keep them updated.

                ## Notes
                Start from the **Feedback themes** template. Investors are often polite rather than precise when they pass, so ask what they would need to see to invest next time.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Pass reasons from every firm grouped into themes and a written regroup decision recorded with the board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the stated reason from every firm that passed"
                - "Group the reasons into themes using the feedback template"
                - "Agree a diagnosis and next move with the board"
                - "Ask firms that passed whether you may send them updates"
            - name: Founder wellbeing through the raise
              description: |-
                ## Purpose
                Thirty or more investor meetings, late-night diligence and steady rejection land on top of running a company, and founders with young children or caring duties feel it most. Telling the people at home what the next three months look like and keeping one evening a week free make it more likely you finish the raise in good shape.

                ## Milestones
                1. Partner or family told the expected length and busiest weeks of the raise.
                2. One protected evening a week kept free of investor work.
                3. Exercise and sleep basics kept in the calendar.
                4. A trusted peer founder agreed as someone to talk to after hard weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One protected evening a week kept free of fundraising work for the full length of the process."
                cadence: rolling
              tasks:
                - "Tell the people at home how long the raise is likely to run"
                - "Keep one evening free of investor work @recurring(weekly:sat)"
                - "Book exercise and sleep into the calendar for the raise months"
                - "Agree with a peer founder to talk after hard weeks"
            - name: Sequencing firms for a competitive process
              description: |-
                ## Purpose
                Multiple term sheets arrive in the same week only when firms move through first meetings, partner meetings and diligence at a similar pace. Managing that sequencing, by giving fast firms more to do and offering slow ones earlier slots, is the specialist skill that most changes Series A outcomes.

                ## Milestones
                1. Each firm's stage plotted on a shared timeline every week.
                2. Firms ahead of the pack given extra data and meetings to keep them engaged.
                3. Firms behind offered earlier partner meeting dates or quicker data access.
                4. Two or more firms reaching a term sheet decision within the same ten-day window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "At least two firms reach a term sheet decision within the same ten-day window."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Plot each firm's stage on a shared timeline"
                - "Give fast-moving firms more data and team meetings"
                - "Offer slower firms earlier partner meeting slots"
                - "Tell every firm when you expect to make a decision"
            - name: Insider-led versus external Series A
              description: |-
                ## Purpose
                When existing investors offer to lead the Series A, it can save months but may raise questions from later investors about why no outside firm set the price. Weighing an insider-led round against an external process, with counsel and independent board members, avoids a decision made purely for speed.

                ## Milestones
                1. Any insider offer summarised by counsel.
                2. The case for each route written down, including how later investors may read it.
                3. Independent board members' views recorded, given the insiders' conflict.
                4. A decision minuted by the board.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A minuted board decision on an insider-led versus external round, with independent directors' views recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel to summarise any insider offer"
                - "Write the case for an insider-led round and for an external one"
                - "Ask independent board members for their view in writing"
                - "Record the decision in the board minutes"
            - name: Allocating the round between lead, insiders and angels
              description: |-
                ## Purpose
                Lead investors at Series A usually want a set ownership stake, existing investors want their pro rata, and valued angels or a strategic investor may want in too, yet the round can only be so big. Working out the allocation early and agreeing it with the lead before documents are drafted avoids last-minute friction that delays completion.

                ## Milestones
                1. Each party's requested allocation listed.
                2. Total round size and the lead's ownership target reconciled with counsel.
                3. Any cutbacks agreed with the investors affected.
                4. The final allocation confirmed in writing by the lead.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A final allocation table, confirmed in writing by the lead, covering every investor in the round."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every party's requested allocation"
                - "Reconcile allocations with the round size and the lead's target"
                - "Agree any cutbacks with the investors affected"
                - "Get the lead's written confirmation of the final allocation"
            - name: Use of Series A funds and Series B milestone plan
              description: |-
                ## Purpose
                Money from a Series A buys eighteen months or more to hit the milestones the next round will demand, and companies that spend to plan without tracking milestones often arrive at Series B too early or too late. Turning the pitch's use of funds into a quarterly milestone plan, reviewed with the board, keeps the next raise in view from day one.

                ## Milestones
                1. The use of funds broken into a quarterly spend and hiring plan.
                2. Each Series B milestone assigned an owner and a target quarter.
                3. Progress against milestones reviewed with the board each quarter.
                4. A date set for starting Series B preparation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly milestone plan reviewed with the board at least four times in the year after closing."
                cadence: cyclic
              tasks:
                - "Turn the use of funds into a quarterly spend and hiring plan"
                - "Assign each Series B milestone an owner and target quarter"
                - "Review progress against Series B milestones with the board @recurring(quarterly)"
                - "Set the date to start Series B preparation"
            - name: Series A process retrospective and archive
              description: |-
                ## Purpose
                One month after closing, the details of which firms moved fast, which introductions worked and which questions came up most are still fresh, and they will be gone by the next round. A short retrospective and a tidy archive of the pipeline, notes and materials give the next raise a head start.

                ## Milestones
                1. A retrospective held with the deal team.
                2. The timeline, stage conversion rates and top five lessons written down.
                3. Pipeline, meeting notes and materials archived in one folder.
                4. Firms that passed flagged for occasional updates before the next round.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retrospective with stage conversion rates and five lessons, plus an archived process folder, completed within six weeks of closing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a one-hour retrospective with the deal team"
                - "Calculate conversion rates from first meeting to term sheet"
                - "Ask the agent to summarise the meeting notes into five lessons"
                - "Archive the pipeline, notes and materials in one folder"
---

# Series A Fundraise

This area is for founders, and the finance or operations leads beside them, who are taking a company past product-market fit and into its first institutional round. It starts with the foundations (a readiness scorecard, a raise sized to milestones, one set of metric definitions, counsel and a board that backs the plan), then the operating rhythm of a live process, the knowledge that makes partner meetings go well, the decisions on price, lead and revenue quality, the dated events from launch fortnight to announcement, the situations that change the playbook, and finally the specialist work of running a genuinely competitive round.

What repeats is a Monday pipeline review, a monthly metrics pack and runway check, weekly briefings to existing investors while the process is live, a quarterly readiness rescore and steady contact with target partners, plus a daily stand-up only during the launch window. The Vendor, Board meeting, Metrics log, Meeting notes and Feedback themes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
