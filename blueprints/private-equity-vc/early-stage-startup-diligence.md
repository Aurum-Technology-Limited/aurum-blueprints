---
id: private-equity-vc.early-stage-startup-diligence
name: Early-Stage Startup Diligence
description: "A repeatable way to diligence seed and Series A companies: founder references, customer calls, product and tech review, cap table checks, and a written rule for when you know enough to decide."
category: business
version: 1.0.0
tags: [private-equity-vc, early-stage-startup-diligence, knowledge-worker, venture-capital, seed, series-a, references, cap-table]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - meeting-notes
    - metrics-log
    - vendor
    - reading-queue
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Early-Stage Startup Diligence
          description: "Doing diligence on seed and Series A companies: founder references, customer calls, product and tech review, cap table checks and knowing when diligence is enough."
          projects:
            - name: Seed and Series A diligence scope one-pager
              description: |-
                ## Purpose
                Early-stage diligence fails in two directions: weeks spent on a pre-revenue company that a single founder call should have settled, or a Series A cheque written after a demo and two friendly references. A one-page scope that says what you check at seed, what you add at Series A and what you deliberately skip at each stage keeps the effort matched to the cheque and the evidence available.

                ## Milestones
                1. A one-page scope listing the checks you run at seed and the extra checks at Series A.
                2. A short list of checks you deliberately skip at each stage, with one reason for each.
                3. A rough hours budget per stage, such as 15 hours at seed and 40 at Series A.
                4. The page reviewed with your partner or investment lead and saved where the team works deals.

                ## Notes
                Write the skip list honestly. Saying you will not model five-year revenue at seed is a decision, not a gap.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off scope page exists naming the checks run and skipped at seed and Series A, with an hours budget for each stage."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the diligence steps you ran on the last five early-stage deals you saw"
                - "Sort each step into seed, Series A or skip"
                - "Write an hours budget for each stage"
                - "Review the draft scope with your investment lead and agree changes"
            - name: Standard early-stage diligence checklist
              description: |-
                ## Purpose
                Without a checklist, diligence depends on who happens to be running the deal, and the same gaps recur: nobody pulled the cap table, nobody spoke to a customer who left. A single checklist grouped into team, market, product, traction, legal and round terms gives every deal the same floor and makes it obvious which boxes were left open on purpose.

                ## Milestones
                1. A checklist grouped into team, market, product and tech, traction, legal and cap table, and round terms.
                2. Each line marked as required, optional or Series A only.
                3. An owner column so a shared deal shows who is doing what.
                4. The checklist used on one live or recent deal and adjusted after that use.

                ## Notes
                Start from the **Operational checklist** template. Keep it under 40 lines or nobody will finish it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist of no more than 40 lines, grouped into six sections with required and optional flags, has been used on at least one deal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the six section headings for the checklist tonight"
                - "Fill each section with the checks from your scope one-pager"
                - "Mark each line as required, optional or Series A only"
                - "Run the checklist against one recent deal and note what was missing"
            - name: Founder diligence request list
              description: |-
                ## Purpose
                Founders raising a seed round are also running the company, and a sprawling request for documents signals that you have not thought about what matters. A short, staged request list, with a first ask of five items and a second ask only after a positive partner discussion, gets you what you need without burning goodwill.

                ## Milestones
                1. A first-stage request of no more than five items, such as the deck, cap table, monthly metrics and product access.
                2. A second-stage request for after a positive partner meeting, covering contracts, incorporation documents and option plan.
                3. A covering note template that explains why each item is asked for.
                4. The list sent on one real deal and the founder's feedback noted.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-stage request list and covering note exist, with the first stage capped at five items, and have been used once."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five items you most need before a first partner discussion"
                - "List the second-stage documents and why each one matters"
                - "Ask the agent to draft a short covering note explaining each request"
                - "Ask one founder you have backed whether the list would have annoyed them"
            - name: Diligence workspace and file naming
              description: |-
                ## Purpose
                Notes scattered across email, chat and a notebook make it impossible to find what a reference said six months later when the company raises again. One folder per company, with a fixed set of sub-folders and a naming rule for call notes, means anyone on the team can pick up a deal in minutes and nothing sensitive sits in a personal inbox.

                ## Milestones
                1. A standard folder structure per company inside your firm's approved system.
                2. A naming rule for call notes, such as date, call type and person's role.
                3. A findings page at the top of each folder that links to the supporting notes.
                4. Your three most recent deals moved into the new structure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three recent deals are filed in the standard structure with named call notes and a findings page in each folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the sub-folders every company folder should have"
                - "Write the call note naming rule on one line"
                - "Move notes for your three most recent deals into the structure"
                - "Delete personal copies of founder documents once they are filed"
            - name: Founder reference call script
              description: |-
                ## Purpose
                At seed the founders are most of what you are buying, and the default reference call (a friendly former manager saying they are brilliant) tells you almost nothing. A script built around specific behaviours, such as how they handled a hire that failed or a missed target, and a closing question that invites the honest answer, turns references into evidence.

                ## Milestones
                1. A script of eight to ten questions focused on observed behaviour, not adjectives.
                2. A standard opener that explains the call is confidential and why you are asking.
                3. A closing question such as whether they would work for or invest in this person again.
                4. A one-line scoring note after each call: strong, mixed or concerning, with the reason.

                ## Notes
                Ask for examples, then ask what happened next. The second answer is usually the useful one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference script of eight to ten behavioural questions with a closing question and scoring note has been used on at least two calls."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write ten questions that ask for a specific example"
                - "Draft the confidential opener you will read at the start of each call"
                - "Use the script on two founder references this month"
                - "Cut or rewrite the two questions that produced the vaguest answers"
            - name: Customer call question bank
              description: |-
                ## Purpose
                Founders introduce their happiest customers, so customer calls need questions that work even with a friendly audience. A bank of questions on the problem before the product, what they would do if it disappeared, who signs the cheque and whether the budget is permanent separates real pull from politeness.

                ## Milestones
                1. A question bank of 12 to 15 questions grouped into problem, usage, buying process and alternatives.
                2. A short version of six questions for 15-minute calls.
                3. A rule for asking the founder for one customer they did not choose, such as a recent churn or a stalled pilot.
                4. The bank used on three calls and the weakest questions replaced.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A grouped customer question bank with a six-question short form has been used on at least three customer calls."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five questions about the problem before the product existed"
                - "Add questions on who pays, how they decided and the renewal plan"
                - "Cut the bank to six questions for a 15-minute call"
                - "Ask the founder for one customer they would rather you did not call"
            - name: Two-week seed diligence timeline
              description: |-
                ## Purpose
                Seed rounds often close within two or three weeks of the first meeting, and a firm that cannot run its checks in that window either loses the deal or skips the work. A day-by-day template for a two-week process, with references, customer calls, product review and partner check-ins slotted in, shows what can run in parallel and where the real bottleneck sits.

                ## Milestones
                1. A ten working day template showing every diligence step and its owner.
                2. The steps that can run in parallel grouped on the same days.
                3. A fixed point for the go or no-go partner discussion.
                4. The template tested against one recent deal to see where it would have slipped.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-day timeline template with owners and a fixed decision point exists and has been checked against one past deal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Lay out ten working days in a simple table"
                - "Slot each checklist section into a day and give it an owner"
                - "Mark the day of the partner go or no-go discussion"
                - "Replay one recent deal against the timeline and note where it slipped"
            - name: Handling founder data and confidentiality
              description: |-
                ## Purpose
                Many venture firms decline to sign NDAs at first meeting, yet founders still share cap tables, customer names and financials, and a careless forward can damage trust across a whole founder community. A written personal practice on what you store, where, who sees it and when you delete it from passed deals protects the founders and your reputation.

                ## Milestones
                1. Your firm's policy on NDAs and confidential information read and summarised in a few lines.
                2. A personal rule on where founder documents are stored and who may see them.
                3. A deletion or archive rule for passed deals, agreed with your firm's compliance contact.
                4. Customer names from calls kept out of any notes shared outside the deal team.

                ## Notes
                Your firm's policy and fund counsel decide the rules. This project is about following them consistently.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written personal data-handling practice, consistent with firm policy and checked with compliance, is in place with a yearly purge of passed-deal files."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find and read your firm's confidentiality and NDA policy"
                - "Write your storage and sharing rules in five lines"
                - "Agree the archive rule for passed deals with your compliance contact"
                - "Archive or delete founder files from deals passed over a year ago @recurring(yearly)"
            - name: Early-stage red flags register
              description: |-
                ## Purpose
                The same warning signs turn up across failed seed investments: a cap table where the founders already own less than half, a co-founder who left last quarter with no explanation, metrics that change definition between decks. A register of red flags, each with what it usually means and the question that tests it, means you raise them in week one rather than discover them at closing.

                ## Milestones
                1. A register of at least 20 red flags across team, cap table, traction, product and legal.
                2. Each flag paired with the question or document that tests it.
                3. Each flag marked as a deal stopper or a topic for discussion.
                4. The register checked against two past deals that went badly.

                ## Notes
                Start from the **Risk register** template. A red flag is a prompt for a question, not an automatic no.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register of at least 20 red flags, each with a testing question and a severity, has been checked against two past deals."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down every warning sign you remember from deals that went wrong"
                - "Ask two experienced colleagues for their three most reliable red flags"
                - "Pair each flag with the question or document that tests it"
                - "Add red flags from the past year's deals and debriefs @recurring(yearly)"
            - name: Monday diligence pipeline review
              description: |-
                ## Purpose
                Several companies are usually in diligence at once, and without a weekly look each one drifts: a reference never booked, a customer call still waiting for an introduction. Fifteen minutes every Monday on what is open, what is blocked and which deal needs a decision this week keeps every process inside its timeline.

                ## Milestones
                1. A single list of every company in active diligence with stage, owner and next step.
                2. Blocked items marked with who you are waiting on.
                3. A decision date written against every company.
                4. Four consecutive Monday reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every company in active diligence shows an owner, next step and decision date, reviewed every Monday for at least four weeks."
                cadence: rolling
              tasks:
                - "Build a one-page list of every company currently in diligence"
                - "Review open diligence items, blockers and decision dates @recurring(weekly:mon)"
                - "Chase every item that has been blocked for more than five days"
                - "Close out files for deals decided last month @recurring(monthly:2)"
            - name: Reference call log across deals
              description: |-
                ## Purpose
                References you speak to on one deal often know founders on the next, and an engineer who gave a sharp reference last year may be the best back-channel for a new company. A running log of who you spoke to, about whom and how reliable their judgement proved to be builds a reference network that compounds over years.

                ## Milestones
                1. A log with columns for reference name, role, company referenced, date and reliability.
                2. Past reference calls from the last year entered from your notes.
                3. A reliability note added when a referenced founder's later performance becomes known.
                4. The log searched before every new deal for people who know the founders.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reference log with at least 20 entries and reliability notes is searched at the start of every new diligence."
                cadence: rolling
              tasks:
                - "Create the reference log with name, role, company and reliability columns"
                - "Enter the reference calls you made over the past year"
                - "File this month's reference calls into the log @recurring(monthly:9)"
                - "Search the log for overlaps whenever a new deal enters diligence"
            - name: Customer call notes library
              description: |-
                ## Purpose
                Customer calls across several companies in the same sector add up to a picture no single deal gives you: which budgets are real, which buyers keep switching vendors, what price points stick. A library of call notes in one format, tagged by sector and buyer type, turns each call into lasting market knowledge.

                ## Milestones
                1. A standard note format with problem, usage, buyer, alternatives and verdict.
                2. Every call note tagged by sector and buyer role.
                3. At least 15 customer calls filed in the library.
                4. One sector summary written from the patterns across calls.

                ## Notes
                Start from the **Meeting notes** template. Keep customer names inside your firm's system and use roles in any summary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 15 tagged customer call notes sit in one library and one cross-deal sector summary has been written from them."
                cadence: rolling
              tasks:
                - "Set up a call note format from the meeting notes template"
                - "Tag your last five customer calls by sector and buyer role"
                - "File and tag this month's customer calls @recurring(monthly:16)"
                - "Write one sector summary once a sector has five calls"
            - name: Expert and technical adviser bench
              description: |-
                ## Purpose
                One seed deal in battery chemistry or payments infrastructure can turn on one question only a practitioner can answer, and finding that person in the middle of a two-week process is too late. A bench of ten to twenty trusted experts across your sectors, with how to reach them and what they charge, means a knowledgeable view is a day away.

                ## Milestones
                1. A list of at least ten experts, each with sector, speciality and contact route.
                2. Terms noted for each, from a favour to a paid hourly rate or an expert network.
                3. Conflict notes recorded, such as experts who advise competitors.
                4. At least two experts used on live deals and their usefulness rated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bench of at least ten experts with terms and conflict notes exists and two have been used and rated on live deals."
                cadence: rolling
              tasks:
                - "List the sectors where you most often lack an expert view"
                - "Ask three portfolio founders for the sharpest technical person they know"
                - "Record each expert's terms and any known conflicts"
                - "Review the bench and fill gaps in your current sectors @recurring(quarterly)"
            - name: Diligence hours tracking
              description: |-
                ## Purpose
                Most investors guess how long diligence takes, and the guesses are usually low for deals they pass on and high for deals they win. Tracking hours per deal and per checklist section for a few months shows where time goes, which steps actually changed decisions and whether your scope budget is realistic.

                ## Milestones
                1. A simple log of hours per deal, split by checklist section.
                2. Three months of data covering at least five deals.
                3. The hours set against your scope budget for seed and Series A.
                4. One change to the scope or checklist made from what the data shows.

                ## Notes
                Start from the **Metrics log** template. Rough half-hour blocks are enough.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of hours data across at least five deals has been compared with the scope budget and one change made."
                cadence: rolling
              tasks:
                - "Create an hours log with a column per checklist section"
                - "Log hours at the end of each diligence day in half-hour blocks"
                - "Total the month's hours by deal and section @recurring(monthly:28)"
                - "Compare the totals with your scope budget after three months"
            - name: Post-decision diligence debrief
              description: |-
                ## Purpose
                Every invest or pass decision is a small experiment, but without a record of what you believed at the time you cannot learn from it. A short monthly debrief on decisions made, noting what diligence found, what was assumed and what you would check next time, builds the feedback loop that early-stage investing otherwise lacks for years.

                ## Milestones
                1. A debrief format of five lines: decision, key finding, key assumption, open question, next-time change.
                2. A debrief written for every decision made in the month.
                3. A yearly look back at old debriefs against what the companies went on to do.
                4. At least two checklist or script changes traced to debriefs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-line debrief exists for every diligence decision over six months, with at least two process changes traced to them."
                cadence: cyclic
              tasks:
                - "Write the five-line debrief format"
                - "Debrief the decisions you made in the past month"
                - "Write debriefs for the month's invest and pass decisions @recurring(monthly:5)"
                - "Compare year-old debriefs with what each company actually did"
            - name: Quarterly diligence checklist refresh
              description: |-
                ## Purpose
                Checklists written once go stale as sectors change, rounds get faster and new risks appear, such as data rights in AI companies. A quarterly review that folds in debrief lessons, drops checks that never changed a decision and adds the ones you wished you had run keeps the checklist earning its place.

                ## Milestones
                1. A change log attached to the checklist showing what was added or removed and why.
                2. Lessons from the quarter's debriefs reviewed.
                3. Any check that never affected a decision in a year removed or made optional.
                4. The updated checklist shared with everyone who runs diligence.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The checklist carries a dated change log with at least one reviewed update per quarter, shared with the deal team."
                cadence: cyclic
              tasks:
                - "Add a change log section to the bottom of your checklist"
                - "Review the checklist against the quarter's debriefs @recurring(quarterly)"
                - "Remove or downgrade checks that never changed a decision"
                - "Share the updated checklist with the deal team"
            - name: Back-channel reference network
              description: |-
                ## Purpose
                Founder-supplied references are chosen to be positive, so the most revealing calls come from people the founder did not name: former colleagues, early employees, investors who passed. Building a network you can ask, through portfolio founders, operators and other investors, makes back-channel references routine rather than a scramble.

                ## Milestones
                1. A list of 30 or more operators and investors willing to make a quiet introduction.
                2. A note for each on the companies and sectors they know well.
                3. A clear personal rule on telling founders that back-channel calls are part of your process.
                4. At least one back-channel reference completed on every deal reaching partner discussion.

                ## Notes
                Tell founders up front that you run back-channel references. Doing it in secret damages trust if they find out, and they usually do.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deal reaching partner discussion in the last quarter had at least one back-channel reference sourced from your network list."
                cadence: rolling
              tasks:
                - "List 30 operators and investors who could make a quiet introduction"
                - "Note the companies and sectors each person knows well"
                - "Thank and update people who helped with a reference @recurring(monthly:21)"
                - "Add a line about back-channel references to your founder process note"
            - name: One-page diligence findings summary
              description: |-
                ## Purpose
                Partners rarely read call notes; they read the page that says what diligence found. A fixed one-page format, with confirmed facts, open questions, red flags and your view of the founders, gives the memo writer and the partner meeting a clean input and stops diligence findings from being lost in a long document.

                ## Milestones
                1. A one-page format with sections for confirmed, unconfirmed, red flags and team view.
                2. Each finding linked to the call note or document behind it.
                3. A confidence level on each finding: confirmed, likely or unverified.
                4. The format used on two deals and adjusted after partner feedback.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page findings format with sourced, confidence-rated findings has been used on two deals and revised after partner feedback."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the four sections of the findings page"
                - "Fill it in for your most recent deal with links to sources"
                - "Rate each finding as confirmed, likely or unverified"
                - "Ask a partner which section they read first and reorder accordingly"
            - name: Running back-channel references well
              description: |-
                ## Purpose
                Back-channel calls go wrong in predictable ways: leading questions, reading too much into one bitter former colleague, or a careless remark that gets back to the founder. Practising how to open, how to ask for specifics and how to weigh conflicting accounts makes these calls the most valuable hour of seed diligence instead of the riskiest.

                ## Milestones
                1. Notes on two or three published guides or talks on reference checking.
                2. A short checklist on weighing conflicting references, including motive and recency.
                3. Five back-channel calls completed and self-reviewed against the checklist.
                4. Feedback from a senior colleague on one of your call notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five back-channel calls have been run and self-reviewed against a written weighing checklist, with senior feedback on one."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one guide on executive reference checking and note three techniques"
                - "Write a checklist for weighing conflicting accounts"
                - "Run five back-channel calls and review each against the checklist"
                - "Ask a senior colleague to critique one of your call notes"
            - name: Reading a seed-stage cap table
              description: |-
                ## Purpose
                Early cap tables hide problems that only surface at the next round: founders already diluted below a workable stake, an option pool that is mostly allocated, a large holder who left, or advisers with oversized grants. Learning to read a cap table in twenty minutes and list the questions it raises protects both the fund and the founders.

                ## Milestones
                1. A list of the ten cap table questions you always ask, from founder ownership to unallocated pool.
                2. Three real or sample cap tables reviewed and annotated.
                3. A simple way to show fully diluted ownership before and after the round.
                4. Questions you cannot answer flagged for fund counsel rather than guessed.

                ## Notes
                Ownership calculations here are for your understanding. Fund counsel confirms the legal position before closing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three cap tables have been annotated against a ten-question list, with a pre and post-round fully diluted view for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the ten questions you want answered by every cap table"
                - "Annotate one sample cap table against the questions"
                - "Build a pre and post-round fully diluted view in a spreadsheet"
                - "Review two live or recent cap tables and log open questions for counsel"
            - name: SAFE and convertible note conversion maths
              description: |-
                ## Purpose
                Stacks of SAFEs and notes with different caps, discounts and pre or post-money terms can change who owns what at a priced round by several points, and founders are often surprised by it. Working through the conversion maths by hand on a few examples lets you spot an overhang early and have an honest conversation about it.

                ## Milestones
                1. The common instrument types and their key terms summarised on one page.
                2. A spreadsheet that converts a stack of instruments at a priced round.
                3. Three worked examples, including one with both pre-money and post-money instruments.
                4. Results checked against a published calculator or a colleague's model.

                ## Notes
                Instrument wording varies by jurisdiction and template version. Treat your model as a check and let counsel confirm the final numbers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A conversion spreadsheet produces matching results to an independent check on three worked examples."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise caps, discounts and pre or post-money terms on one page"
                - "Build a conversion spreadsheet for a stack of three instruments"
                - "Work through three examples, one mixing pre and post-money terms"
                - "Check your results against a published calculator"
            - name: Traction metrics that hold up at seed
              description: |-
                ## Purpose
                Seed decks are full of numbers that are true but misleading: cumulative signups, annualised run rate from one good month, pilots counted as customers. Knowing which metrics to recompute from raw data, and how to read early cohort retention from a handful of months, is what separates a traction check from reading the deck back.

                ## Milestones
                1. A list of common flattering metrics with the honest version of each.
                2. A template that recomputes monthly revenue, retention and active usage from raw exports.
                3. Two companies' metrics recomputed and differences from the deck noted.
                4. A rule for what counts as revenue versus pilot or letter of intent.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two companies' traction has been recomputed from raw data, with differences from the deck recorded against a written list of flattering metrics."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List ten flattering metrics and their honest equivalents"
                - "Build a template that recomputes revenue and retention from raw exports"
                - "Recompute traction for two companies and note gaps with the deck"
                - "Write your rule for separating paid revenue from pilots"
            - name: Runway and use of funds check
              description: |-
                ## Purpose
                Even a round that looks generous can still run out before the milestones the next investors will need, once hiring plans, salary rises and slower sales cycles are counted. Rebuilding the founder's monthly burn from the hiring plan and testing how many months the raise really buys tells you whether the company is raising enough, and whether the plan is honest.

                ## Milestones
                1. The founder's hiring plan turned into a monthly headcount and cost line.
                2. Burn and runway rebuilt from that plan, with one slower revenue case.
                3. The milestones the next round will require written beside the runway.
                4. Gaps between runway and milestones raised with the founders and their answer recorded.

                ## Notes
                A quick spreadsheet is enough. The aim is a question for the founders, not a full operating model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A rebuilt monthly burn and runway, with a slower revenue case and next-round milestones, has been discussed with the founders of one company."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the founders for their hiring plan by month and role"
                - "Turn the hiring plan into a monthly cost line"
                - "Rebuild runway with the founders' plan and one slower revenue case"
                - "Ask the founders which milestones the raise is meant to reach"
            - name: Hands-on product review routine
              description: |-
                ## Purpose
                A founder-led demo shows the product on its best day. Signing up yourself, completing the core task, trying it on a phone and reading the public reviews or support forum takes an hour and often reveals more about product quality and velocity than the whole pitch.

                ## Milestones
                1. A product review checklist covering sign-up, core task, mobile, speed and support.
                2. The product used as a real user for at least one session without the founder present.
                3. Public reviews, app store comments or community forums read and summarised.
                4. Release notes or changelog checked to see how fast the product actually ships.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A product review checklist exists and has been completed for two companies, including unassisted use and a check of shipping pace."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a ten-line product review checklist"
                - "Sign up for one company's product and complete the core task alone"
                - "Read the public reviews and support forum for that product"
                - "Count the releases in the last three months from the changelog"
            - name: Technical diligence for non-engineers
              description: |-
                ## Purpose
                Most early-stage investors cannot read the codebase, yet technical risk decides many seed outcomes: a system that cannot scale, a single engineer who holds everything, security that will fail the first enterprise review. Learning the right questions on architecture, team, security and technical debt lets you run a credible first pass and know when to call in an expert.

                ## Milestones
                1. A question list covering architecture, deployment, security, technical debt and key-person risk.
                2. One conversation with an experienced CTO about what they would ask.
                3. The question list used with two technical founders and answers recorded.
                4. A clear rule for when to bring in an outside technical reviewer.

                ## Notes
                Start from the **Reading queue** template to collect the engineering articles and talks worth working through.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A technical question list has been used with two technical founders and a written threshold for outside technical review exists."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask an experienced CTO for the five questions they would ask a seed team"
                - "Write a question list across architecture, security and key-person risk"
                - "Use the list with two technical founders and record their answers"
                - "Read one engineering post-mortem from your reading queue @recurring(monthly:12)"
            - name: Bottom-up market sizing sanity check
              description: |-
                ## Purpose
                Top-down market figures in the tens of billions appear in most seed decks and say nothing about whether this company can build a large business. A quick bottom-up count of how many buyers exist, what each could pay and how many the company could realistically reach turns the market slide into a number you can argue about.

                ## Milestones
                1. A bottom-up template: number of target buyers, price per buyer, realistic reach.
                2. Sources noted for every input, even where the source is an assumption.
                3. Two companies sized bottom up and compared with their deck figures.
                4. A note on which input would change the answer most.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two bottom-up market estimates with sourced inputs and a named sensitive input have been compared with the companies' deck figures."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a three-input bottom-up sizing template"
                - "Size one company bottom up and note the source of each input"
                - "Compare your figure with the deck and write down the gap"
                - "Identify which input moves the answer most"
            - name: Calling churned and lost customers
              description: |-
                ## Purpose
                Happy customers explain why the product works; customers who left, or prospects who chose a competitor, explain where it breaks. Asking founders for two or three of these calls, and running them carefully, is one of the strongest signals you can get at Series A and is often skipped because it feels awkward.

                ## Milestones
                1. A short script for churned customers and lost prospects that avoids blaming the company.
                2. A standard way to ask founders for these introductions.
                3. At least two churned or lost customer calls completed on a Series A deal.
                4. Findings compared with the founder's own explanation of churn.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two churned or lost customer calls on a Series A deal are recorded and compared with the founder's account."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write six neutral questions for a customer who has left"
                - "Draft how you will ask founders for churned customer introductions"
                - "Complete two churned or lost customer calls on your next Series A deal"
                - "Compare what they said with the founder's churn explanation"
            - name: Assessing founder and market fit
              description: |-
                ## Purpose
                At seed the strongest predictor many investors use is why these founders, for this problem, now: lived experience of the pain, an unfair route to early customers, or technical insight others lack. Writing an explicit founder and market fit view, with evidence for each claim, replaces a vague good-feeling score with something you can test in references.

                ## Milestones
                1. A short framework covering insight, access to customers, technical edge and commitment.
                2. Evidence listed for each point, from references, history or traction.
                3. Weak points turned into specific reference or customer questions.
                4. The framework applied to three companies and compared with partner views.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A founder and market fit view with evidence for each point has been written for three companies and compared with partner views."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write four questions that define founder and market fit for you"
                - "Apply them to a company you backed and one you passed on"
                - "Turn each weak point into a reference question"
                - "Compare your view with a partner's on a third company"
            - name: Deciding when diligence is enough
              description: |-
                ## Purpose
                Early-stage diligence never removes uncertainty, and more calls past a certain point mostly delay a decision the evidence already supports. A written stopping rule, naming the few questions that must be answered and accepting that the rest stay open, helps you decide on time and explain to partners why one more week would not change the answer.

                ## Milestones
                1. A list of three to five questions that must be answered before any decision.
                2. A list of questions that are acceptable to leave open at seed and at Series A.
                3. A rule for when additional diligence is likely to change the decision.
                4. The rule applied on one deal and the outcome written in the debrief.

                ## Notes
                Ask of every proposed extra check: if the answer comes back bad, would we walk away? If not, skip it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written stopping rule listing must-answer and acceptable-open questions has been applied to one deal and reviewed in its debrief."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the questions that, answered badly, would stop any deal"
                - "Write the questions you accept leaving open at each stage"
                - "Agree the stopping rule with your investment lead"
                - "Apply the rule on your next deal and note the result in its debrief"
            - name: Pre-term-sheet versus confirmatory diligence split
              description: |-
                ## Purpose
                Work done before a term sheet decides whether to invest; work done after confirms nothing has been misstated. Mixing the two leads either to slow term sheets that lose competitive rounds or to issues found after signing that are awkward to raise. Splitting your checklist into the two phases makes both faster.

                ## Milestones
                1. Each checklist item assigned to pre-term-sheet or confirmatory.
                2. A list of findings in confirmatory diligence that would justify revisiting terms.
                3. The split discussed with fund counsel for the legal items.
                4. The split used on one deal with timings recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every checklist item is assigned to a phase, counsel has reviewed the legal split, and it has been used on one deal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each checklist item as pre-term-sheet or confirmatory"
                - "Write the confirmatory findings that would reopen terms"
                - "Review the legal items in the split with fund counsel"
                - "Record how long each phase took on your next deal"
            - name: Choosing outside technical and specialist reviewers
              description: |-
                ## Purpose
                Some deals need a paid outside view: a code and security review at Series A, a scientific review for a biotech seed, a regulatory read for fintech. Choosing two or three trusted reviewers in advance, with agreed scope, turnaround and fees, means you can commission one on a two-week timeline without improvising.

                ## Milestones
                1. The deal types where outside review is warranted written down.
                2. Two or three reviewers shortlisted per type, with references checked.
                3. A standard scope, turnaround and fee range agreed with at least one reviewer.
                4. One review commissioned and its usefulness rated.

                ## Notes
                Start from the **Vendor** template for each reviewer you keep on file.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least one outside reviewer per deal type has an agreed scope, turnaround and fee range on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the deal types that warrant an outside review"
                - "Ask two other investors which reviewers they trust"
                - "Agree a standard scope and turnaround with your first-choice reviewer"
                - "Review reviewer terms and quality ratings @recurring(yearly)"
            - name: Diligence depth when leading versus following
              description: |-
                ## Purpose
                A lead investor sets the terms and is expected to do the core work; a follower can rely on parts of it but carries its own duty to its LPs. Deciding in advance what you will always do yourself, what you will accept from a lead and what you will ask to see, prevents both duplicated effort and lazy reliance on someone else's conviction.

                ## Milestones
                1. A list of checks you always run yourself whatever your position in the round.
                2. A list of lead diligence materials you will ask to see when following.
                3. A rule for when following a strong lead is not enough on its own.
                4. The approach agreed with your partners and applied on one round.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written lead versus follow diligence policy, agreed with partners, has been applied on at least one round."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the checks you always run yourself"
                - "List the lead's materials you will ask for when following"
                - "Agree the policy with your partners"
                - "Ask the lead on your next follow-on round for their diligence summary"
            - name: Founder background check policy
              description: |-
                ## Purpose
                Formal background checks on founders can uncover litigation, regulatory history or claims that do not match the CV, but they also need consent and must comply with local law. Agreeing with your firm when checks are run, which provider is used and how founders are told keeps the process lawful and consistent rather than ad hoc.

                ## Milestones
                1. Your firm's existing practice on background checks found and written down.
                2. A threshold for when checks are run, such as above a cheque size or at Series A.
                3. The consent wording and provider confirmed with fund counsel or compliance.
                4. A standard note to founders explaining the step.

                ## Notes
                Background check rules differ by country. Fund counsel or compliance decides what is lawful; this project records and follows their answer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written background check policy with threshold, provider and counsel-approved consent wording is on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask compliance what your firm currently does on founder background checks"
                - "Propose a threshold for when checks are run"
                - "Confirm consent wording and provider with fund counsel"
                - "Write the note to founders explaining the step"
            - name: Founder experience of your diligence
              description: |-
                ## Purpose
                Word travels fast among founders, and a process seen as slow, intrusive or one-sided will cost you deals long after the round closes. Asking founders you backed and founders you passed on how the diligence felt, and acting on what they say, turns your process into a reason to choose you.

                ## Milestones
                1. Three short questions for founders on clarity, burden and speed.
                2. Feedback collected from at least five founders, including some you passed on.
                3. Two changes made to the request list or timeline from the feedback.
                4. A clear written explanation of your process ready to send at first meeting.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Feedback from at least five founders has led to two recorded process changes and a written process note for first meetings."
                cadence: rolling
              tasks:
                - "Write three short feedback questions for founders"
                - "Ask five recent founders, including two you passed on, for feedback"
                - "Change two parts of the process based on what they said"
                - "Ask the quarter's founders how the diligence felt @recurring(quarterly)"
            - name: Live seed diligence sprint
              description: |-
                ## Purpose
                Running the full method on a real deal, end to end, is the test that shows whether the scope, checklist, scripts and timeline actually work under a competitive clock. Treating your next seed process as a deliberate sprint, with each step logged, gives you one clean example to learn from and share.

                ## Milestones
                1. The two-week timeline set up for the deal with owners and dates.
                2. References, customer calls and product review completed on schedule.
                3. A findings summary delivered before the partner discussion.
                4. A debrief written within a week of the decision.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seed deal has been diligenced on the two-week timeline with a findings summary before partner discussion and a debrief within a week."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Pick the next seed deal and copy the timeline template for it"
                - "Book the founder references and customer calls in the first three days"
                - "Deliver the findings summary before the partner discussion"
                - "Write the debrief within a week of the decision"
            - name: Series A diligence on a competitive clock
              description: |-
                ## Purpose
                Hot Series A rounds can move from first meeting to term sheet in under two weeks, with several funds diligencing at once and founders reluctant to grant more customer calls. Planning which checks you can run before first meeting, from public data, product use and back-channels, keeps your standard intact when the clock is short.

                ## Milestones
                1. A list of checks you can complete before the first meeting from public sources.
                2. Back-channel references lined up within 48 hours of first contact.
                3. A clear ask to the founder for the three items you cannot do without.
                4. The decision made inside the founder's timeline with the debrief written.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A competitive Series A has been diligenced inside the founder's timeline, with pre-meeting checks done and a written debrief."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "List the checks you can finish before a first meeting from public data"
                - "Prepare back-channel contacts for your current sectors"
                - "Write the three-item ask you will send a founder on day one"
                - "Debrief what you dropped and whether it mattered"
            - name: Diligence readout for the partner meeting
              description: |-
                ## Purpose
                Diligence only counts if the partners understand it in the ten minutes before they discuss the deal. Preparing a short spoken readout, leading with what changed your view and what is still unknown, and rehearsing the answers to the likely hard questions, makes the findings land.

                ## Milestones
                1. A three-minute readout structured as what we confirmed, what worried us and what is unknown.
                2. The five hardest questions a partner could ask written down with answers.
                3. Supporting notes ready to share if asked, not attached by default.
                4. Partner questions from the meeting recorded and fed into the debrief.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A three-minute readout and five prepared answers were delivered at a partner meeting and the questions asked were logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a three-minute readout from your findings summary"
                - "Write the five hardest questions a partner could ask"
                - "Rehearse the readout once out loud"
                - "Log the questions partners actually asked after the meeting"
            - name: Confirmatory legal diligence with fund counsel
              description: |-
                ## Purpose
                Before closing, fund counsel reviews incorporation, IP assignment, the option plan, material contracts and prior financing documents, and their questions often need founders to dig out paperwork. Preparing the founder for counsel's list, tracking open items and getting a clear sign-off avoids a last-minute delay or an issue found after the money moves.

                ## Milestones
                1. Counsel's confirmatory request list shared with the founder with a target date.
                2. An open items tracker with owner and status for each request.
                3. Every IP assignment and founder vesting document confirmed by counsel.
                4. Counsel's written sign-off or list of accepted exceptions on file before closing.

                ## Notes
                Counsel gives the legal view. Your job is to make sure every question is answered and nothing is waved through to meet a date.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Counsel's sign-off or accepted exceptions list is on file before closing, with every open item in the tracker closed or accepted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask fund counsel for their confirmatory request list"
                - "Send the list to the founder with a target date"
                - "Track each open item with owner and status"
                - "Confirm counsel has signed off before agreeing a closing date"
            - name: Office visit and team day
              description: |-
                ## Purpose
                Spending a few hours where the team works, or on their remote calls, shows things no deck or call reveals: how the founders treat junior staff, whether the engineers know the customer, how decisions get made. A planned visit with specific things to observe makes it diligence rather than a social call.

                ## Milestones
                1. The visit agreed with the founders and scheduled.
                2. A list of five things to observe, such as a stand-up, a customer call or a product review.
                3. Short conversations held with at least two team members beyond the founders.
                4. Observations written up the same day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A team visit with at least two non-founder conversations has been completed and written up the same day."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the founders to host a half-day visit or a remote team session"
                - "Write five things you want to observe"
                - "Speak with two team members who are not founders"
                - "Write up what you saw before the end of the day"
            - name: First diligence as a new venture analyst
              description: |-
                ## Purpose
                New analysts are often handed a deal and told to do the diligence with little sense of what good looks like or how much is enough. Planning your first two or three processes with a senior colleague, shadowing one, running one with review and running one alone, builds judgement fast and avoids embarrassing gaps.

                ## Milestones
                1. One diligence shadowed end to end with notes on what the senior person did.
                2. One diligence run with weekly review from a senior colleague.
                3. One diligence run independently, with the findings summary reviewed afterwards.
                4. Three lessons written up and shared with your manager.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three diligences completed in sequence, shadowed, reviewed and independent, with written lessons shared with your manager."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your manager which current deal you can shadow"
                - "Book a weekly diligence review with a senior colleague @recurring(weekly:fri)"
                - "Run your second diligence with that colleague reviewing"
                - "Write three lessons after your first independent diligence"
            - name: Moving from buyout diligence to early stage
              description: |-
                ## Purpose
                Investors arriving from private equity bring strong financial habits that misfire at seed: asking for three years of audited accounts, building detailed models on six months of data, or treating a missing finance function as a red flag. Recalibrating what evidence matters at early stage, and what to stop asking for, makes you useful faster.

                ## Milestones
                1. A list of buyout diligence habits that do and do not carry over.
                2. Conversations with two venture investors who made the same move.
                3. A personal note on what replaces financial evidence at seed: team, pull and speed of learning.
                4. One early-stage diligence run with the new approach and reviewed by a venture colleague.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written carry-over list and one reviewed early-stage diligence show the shift from buyout to venture evidence."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List your buyout diligence habits and mark which apply at seed"
                - "Talk to two venture investors who came from buyouts"
                - "Write what replaces financial evidence in your seed diligence"
                - "Ask a venture colleague to review your first early-stage findings"
            - name: Diligence as a solo GP or two-person team
              description: |-
                ## Purpose
                Without associates, a solo GP doing ten to twenty seed deals a year has to cut diligence to what one person can do well. A lean version of the process, with a small set of non-negotiable checks, trusted outside help for the rest and a fixed weekly block, keeps standards up without consuming the time needed for sourcing and founders.

                ## Milestones
                1. A lean checklist of no more than 15 non-negotiable checks.
                2. Outside help lined up for tasks you cannot do yourself, such as a technical reviewer or a part-time analyst.
                3. A fixed weekly diligence block in your calendar.
                4. Hours per deal tracked for a quarter against the lean budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A 15-check lean process with outside help and a weekly diligence block has been run for a quarter with hours tracked."
                cadence: rolling
              tasks:
                - "Cut your checklist to 15 non-negotiable checks"
                - "Line up one outside reviewer you can call at short notice"
                - "Hold a protected diligence block in your calendar @recurring(weekly:wed)"
                - "Compare a quarter of hours per deal with the lean budget"
            - name: Diligence for a personal angel cheque
              description: |-
                ## Purpose
                Angels writing their own cheques often skip diligence because the amount feels small, then discover a messy cap table or that the lead never checked references. A short personal routine of an hour or two, covering the founders, the round terms, the lead's work and your own reasons, makes each angel cheque a deliberate decision.

                ## Milestones
                1. A personal one-page checklist for angel cheques.
                2. A rule on how much of the lead's diligence you will rely on.
                3. A limit on total angel exposure agreed with yourself and any adviser.
                4. The checklist used on your next angel investment and the decision recorded.

                ## Notes
                Angel investing carries a high risk of losing the whole cheque. Speak to a financial adviser about how much of your money belongs in it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page angel checklist and written exposure limit exist and have been used on one angel decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page checklist for your own angel cheques"
                - "Decide how much of the lead's work you will rely on"
                - "Set a written limit on total angel exposure"
                - "Use the checklist on your next angel opportunity"
            - name: Deep tech and hardware startup diligence
              description: |-
                ## Purpose
                Deep tech and hardware seed companies carry risks software investors are not used to: whether the science works outside the lab, manufacturing cost at scale, supply chains and long certification timelines. Adding a technical feasibility review, a path-to-production check and a realistic capital requirement to your process prevents backing a great team into an impossible plan.

                ## Milestones
                1. A deep tech add-on to the checklist covering feasibility, production and certification.
                2. At least one scientific or engineering expert on the bench for each deep tech sector you see.
                3. A capital requirement estimate to the next major technical milestone for one company.
                4. One deep tech diligence completed with the add-on.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A deep tech checklist add-on has been used on one company, with an expert review and a capital-to-milestone estimate."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the deep tech add-on to your checklist"
                - "Find one scientific reviewer for your main deep tech sector"
                - "Estimate capital needed to the next technical milestone for one company"
                - "Ask a hardware founder what investors usually miss"
            - name: Regulated startup diligence in fintech and health
              description: |-
                ## Purpose
                Fintech and health startups can have strong traction and still fail on a licence, a partner bank relationship or a data protection issue. Knowing which regulatory questions to ask, which documents to see and when to bring in specialist counsel lets you spot the risk without pretending to give a legal view.

                ## Milestones
                1. A regulatory question list for fintech and one for health.
                2. A list of documents to request, such as licences, partner agreements and data protection assessments.
                3. Specialist counsel or advisers identified for each sector.
                4. One regulated company diligenced with specialist input.

                ## Notes
                Regulatory conclusions belong to specialist counsel. Your role is to ask, record and make sure the question is answered.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Sector question lists and document requests exist for fintech and health, and one regulated company has been diligenced with specialist input."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write ten regulatory questions for fintech startups"
                - "Write ten for health and medical startups"
                - "Identify a specialist adviser for each sector"
                - "Check for regulatory changes in both sectors with your adviser @recurring(yearly)"
            - name: AI startup diligence on models, data and compute
              description: |-
                ## Purpose
                AI startups raise questions older checklists miss: whether the product is a thin layer on a third-party model, who owns the training data, what inference costs do to gross margin and how quickly a model provider could copy the feature. A specific add-on for AI companies helps you separate durable products from demos.

                ## Milestones
                1. An AI add-on covering model dependence, data rights, compute cost and defensibility.
                2. Gross margin recomputed with inference costs for one company.
                3. Data licence or consent position checked with the founders and flagged to counsel where unclear.
                4. One AI company diligenced with the add-on and the debrief written.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An AI diligence add-on has been used on one company, including a margin with inference costs and a recorded data rights position."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the AI add-on questions on models, data, compute and defensibility"
                - "Recompute one AI company's gross margin with inference costs"
                - "Ask the founders to explain the source and licence of their training data"
                - "Ask the agent to summarise the quarter's model pricing and capability changes @recurring(quarterly)"
            - name: IP ownership and open source checks
              description: |-
                ## Purpose
                A surprising number of early companies have code written by a founder before incorporation, by contractors without assignment, or built on open source licences that clash with the business model. Checking IP chain of title and open source use early, with counsel confirming, avoids a nasty finding during confirmatory diligence or at the next round.

                ## Milestones
                1. A list of IP questions: pre-incorporation work, contractor assignments, university links.
                2. A request for an open source licence scan or list from the technical team.
                3. Gaps flagged to fund counsel with a fix agreed before closing.
                4. The checks completed on one live deal.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "IP and open source checks are complete on one deal, with any gaps confirmed by counsel and a fix agreed before closing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the IP questions for every technical company"
                - "Ask the CTO for a list of open source licences in the product"
                - "Send any gaps to fund counsel for a view"
                - "Track the agreed fixes through to closing"
            - name: Repeat founders and university spinouts
              description: |-
                ## Purpose
                Second-time founders and university spinouts need different diligence: for a repeat founder, what really happened last time and who will tell you honestly; for a spinout, the licence terms, the university's stake and whether the academics are leaving their posts. Specific questions for each stop a strong story from hiding a structural problem.

                ## Milestones
                1. A repeat founder question list covering the last company's outcome and their role in it.
                2. A spinout question list covering licence terms, university equity and founder time commitment.
                3. References from the previous company's investors for one repeat founder.
                4. One spinout's licence terms reviewed with counsel.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Question lists for repeat founders and spinouts exist, with one repeat founder referenced through past investors and one spinout licence reviewed by counsel."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write six questions for a founder's previous company"
                - "Write six questions on spinout licences and university equity"
                - "Call one investor from a repeat founder's last company"
                - "Send one spinout licence to counsel for review"
            - name: Fraud and misrepresentation warning signs
              description: |-
                ## Purpose
                Outright fraud is rare at seed but costly when it happens, and the signs are often visible early: bank statements that never arrive, customers who cannot be reached directly, revenue that does not match the payment processor. A short set of verification steps for every deal past a certain size makes misrepresentation much harder to sustain.

                ## Milestones
                1. A list of verification steps, such as bank or processor data viewed directly and customers called independently.
                2. A threshold for when the full verification set applies.
                3. A note of how you would escalate a suspicion inside the firm.
                4. The verification steps applied on one deal above the threshold.

                ## Notes
                If something does not reconcile, escalate to your partners and counsel. Do not confront the founder alone.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A verification step list with a size threshold and an escalation note has been applied on one qualifying deal."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the documents you will verify directly rather than via the founder"
                - "Set the cheque size at which full verification applies"
                - "Write how you would escalate a suspicion inside the firm"
                - "Read one published case of startup fraud and add its warning signs @recurring(yearly)"
            - name: Cross-border startups and holding structures
              description: |-
                ## Purpose
                In emerging markets, including the Caribbean, Latin America and Africa, founders often hold their operating company through an offshore parent, or plan to flip into one at Series A. Knowing what to ask about the structure, local entity ownership and currency controls, and when to bring in local counsel, avoids discovering at closing that the shares you bought do not own the business.

                ## Milestones
                1. A structure diagram for one cross-border company showing every entity and owner.
                2. A question list on intercompany agreements, IP location and local ownership rules.
                3. Local counsel identified for the jurisdictions you see most.
                4. Any planned flip and its timing recorded with counsel's comments.

                ## Notes
                Tax and corporate structure questions belong to counsel and tax advisers in each jurisdiction. Record what they say; do not settle it yourself.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One cross-border company has a full entity diagram, answered question list and local counsel comments on file."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw the entity structure for one cross-border company"
                - "Write questions on intercompany agreements and where IP sits"
                - "Find local counsel for your two most common jurisdictions"
                - "Record counsel's comments on any planned flip"
---

# Early-Stage Startup Diligence

This area is for the venture investor who has to decide on a seed or Series A company with thin data and a short clock, from the analyst running their first reference calls to the partner deciding whether one more week of work would change anything. It starts with foundations (a scope page, a checklist, a request list, reference and customer scripts, a timeline and a red flags register), moves into the operating rhythm of pipeline reviews, call libraries, an expert bench and post-decision debriefs, then the skills of back-channel referencing, cap tables, SAFE conversion, traction quality and technical review, the decisions about depth and timing, the dated sprints and readouts, situations for new analysts, buyout converts, solo GPs and angels, and finally specialist work on AI, deep tech, regulated sectors, IP and fraud signals.

What repeats is a Monday diligence pipeline review, monthly reference and customer call filing, a monthly debrief on decisions made, quarterly checklist and expert bench refreshes, and yearly checks on red flags, data handling and outside reviewers. The Operational checklist, Risk register, Meeting notes, Metrics log, Vendor and Reading queue templates pair with the projects that name them. Keep company data and live terms inside your firm's systems; these projects hold your own working method, and legal, tax and regulatory conclusions belong to fund counsel and the right advisers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
