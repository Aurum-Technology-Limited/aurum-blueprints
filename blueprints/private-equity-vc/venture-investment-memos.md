---
id: private-equity-vc.venture-investment-memos
name: Venture Investment Memos
description: "A working system for venture investment memos: your fund's standard, tight team, market, traction and why-now sections, honest risks, clear round terms and a follow-on view partners can read in ten minutes."
category: business
version: 1.0.0
tags: [private-equity-vc, venture-investment-memos, knowledge-worker, venture-capital, investment-memo, partner-meeting, startups]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - development-plan
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Venture Investment Memos
          description: "Writing up a venture investment: team, market, product and traction, why now, risks, round terms and the follow-on view, short enough to read before the partner meeting."
          projects:
            - name: Your fund's venture memo standard written down
              description: |-
                ## Purpose
                Most funds have a memo standard that lives in the senior partner's head: which sections are required, how long it should be, and which questions always come up. Writing it down before your next deal means your drafts stop getting sent back for missing a section nobody told you about, and new analysts can produce a usable memo in their first month.

                ## Milestones
                1. The required sections listed in order, with a one-line description of what each must answer.
                2. A target length and reading time agreed with at least one partner.
                3. The three questions partners ask on almost every deal written at the top of the standard.
                4. The standard saved where the whole investment team can find it, with a version date.

                ## Notes
                If your fund already has a template, the standard is the unwritten layer on top of it: what a good answer in each box looks like.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page memo standard listing required sections, target length and recurring partner questions, reviewed by a partner."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the section headings used in the last five memos the fund approved"
                - "Ask two partners which sections they read first and which they skip"
                - "Write the target length and reading time into the draft standard"
                - "Send the standard to a partner for a fifteen-minute review"
            - name: Annotated library of past invested and passed memos
              description: |-
                ## Purpose
                Reading ten real memos teaches more than any template, especially when half are deals the fund passed on. A small annotated library shows you what the partners found convincing, where memos overreached, and how a pass is written, so your next draft starts from evidence rather than guesswork.

                ## Milestones
                1. At least ten past memos collected, roughly half invested and half passed.
                2. Each memo tagged with stage, sector, outcome so far and decision.
                3. A short margin note on each memo naming its strongest and weakest section.
                4. A one-page summary of patterns that separated approved memos from declined ones.

                ## Notes
                Keep the library inside the fund's own systems. Memos contain confidential founder information and never leave the firm's drive.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A library of at least ten tagged past memos with margin notes and a one-page patterns summary stored on the fund's drive."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the partner or platform lead for access to past memo folders"
                - "Pick five invested and five passed memos across different stages"
                - "Note the strongest and weakest section of each in the margin"
                - "Add each newly approved or declined memo to the library @recurring(monthly:7)"
            - name: Partner meeting process map for a new deal
              description: |-
                ## Purpose
                Knowing how a deal travels from first call to final vote decides when your memo needs to exist and who must have seen it. Mapping the stages, the gates and the people at each one stops the common failure of a memo arriving the night before a partner meeting it was never scheduled for.

                ## Milestones
                1. Each stage from first meeting to wire written down, with who decides at each gate.
                2. The point at which a written memo becomes mandatory identified.
                3. The deadline for pre-reads before the weekly partner meeting confirmed.
                4. Any separate approval for large cheques or new sectors noted.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of the fund's deal stages showing gates, decision makers and the memo and pre-read deadlines."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the operations lead how a deal moves from first call to wire"
                - "Write the stages and gates as a numbered list"
                - "Confirm the pre-read deadline for the weekly partner meeting"
                - "Share the map with the analyst and associate team for corrections"
            - name: One-paragraph investment thesis for the company
              description: |-
                ## Purpose
                Partners decide in the first paragraph whether a memo is worth their full attention. A thesis that says what the company becomes if it works, why this team, and why the round is priced to matter to the fund forces you to know your own argument before writing the supporting sections.

                ## Milestones
                1. A thesis paragraph of no more than 120 words for the current live deal.
                2. The single biggest assumption behind the thesis named in one sentence.
                3. The paragraph tested on a colleague who has not met the founders.
                4. A final version placed as the opening of the memo.

                ## Notes
                If the thesis still needs the word 'potentially' three times, the argument is not ready yet.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A thesis paragraph under 120 words, with its key assumption named, that a colleague can restate after one reading."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write what the company looks like in seven years if everything works"
                - "Add one sentence on why this team and one on why this round"
                - "Read it to a colleague and ask them to repeat the argument back"
                - "Rewrite until it fits in 120 words"
            - name: Memo skeleton for seed and Series A rounds
              description: |-
                ## Purpose
                Seed memos and Series A memos ask different questions: at seed the team and the insight carry most of the weight, by Series A partners want retention curves and a repeatable sales motion. A ready skeleton for each stage, with prompts under every heading, cuts the first draft from a weekend to an afternoon.

                ## Milestones
                1. A seed skeleton with headings for team, insight, market, early signal, risks, terms and follow-on view.
                2. A Series A skeleton adding cohorts, unit economics and go-to-market evidence.
                3. Two or three prompt questions under each heading.
                4. Both skeletons saved beside the memo standard.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two saved memo skeletons, one for seed and one for Series A, each with prompt questions under every heading."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the section list from the memo standard into a new document"
                - "Write two prompt questions under each seed heading"
                - "Duplicate it and add cohort, unit economics and sales motion sections"
                - "Save both skeletons in the shared memo folder"
            - name: Source trail for every founder-supplied number
              description: |-
                ## Purpose
                Venture memos lean on numbers the founder supplied: ARR, growth, pipeline, retention. Partners trust a memo more when every figure carries its source and date, and you avoid the painful moment when the deck's ARR turns out to be bookings or annualised from one good month.

                ## Milestones
                1. Every number in the live memo tagged with source document and date.
                2. Figures from the deck checked against the data room or a founder's spreadsheet.
                3. Any number that could not be confirmed marked as unverified in the text.
                4. Definitions of ARR, revenue and active users confirmed in writing with the founder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each figure in the memo has a recorded source and date, and unverified figures are labelled as such in the text."
                cadence: phased
              tasks:
                - "Highlight every number in the current draft"
                - "Add a source and date note beside each highlighted number"
                - "Ask the founder in writing how they define ARR and active users"
                - "Spot-check five figures in a recent memo against source files @recurring(monthly:12)"
            - name: Memo timeline from first meeting to partner vote
              description: |-
                ## Purpose
                Hot rounds can go from first call to term sheet in ten days, and a memo written in a panic on the last night is a memo full of gaps. Counting back from the likely partner meeting date sets when the team section, the customer calls and the terms summary each need to be done.

                ## Milestones
                1. The likely partner meeting date written down for the live deal.
                2. Dated slots for first draft, partner redline and pre-read.
                3. Founder data requests and reference calls placed on the same timeline.
                4. A fallback plan noted if the round moves faster than expected.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated timeline for the live deal showing draft, redline, pre-read and data request dates counted back from the partner meeting."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the sponsoring partner which meeting the deal should reach"
                - "Count back and date the draft, redline and pre-read milestones"
                - "Put reference and customer calls into the same calendar"
                - "Agree with the partner what to cut if the round accelerates"
            - name: Venture metric definitions sheet
              description: |-
                ## Purpose
                ARR, net revenue retention, burn multiple, CAC payback and gross margin mean slightly different things in every founder's deck. A single sheet of the fund's definitions lets every memo compare companies on the same basis and lets partners spot when a number has been flattered.

                ## Milestones
                1. Written definitions for at least ten core metrics, with formulas.
                2. Notes on the common ways each metric is stretched in founder decks.
                3. Definitions agreed with at least one partner.
                4. The sheet linked from the memo standard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sheet defining at least ten venture metrics with formulas and common distortions, linked from the memo standard."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ten metrics that appear most often in the fund's memos"
                - "Write a formula and plain definition for each"
                - "Add one line on how each one is most often inflated"
                - "Review the definitions with the investment team @recurring(yearly)"
            - name: Memo length rule and reading-time budget
              description: |-
                ## Purpose
                Memos that partners cannot finish before the meeting get discussed from memory. Deciding a firm reading-time budget, often ten to fifteen minutes for the main body with appendices behind it, gives every writer a limit to cut against and keeps the discussion on the argument.

                ## Milestones
                1. Current average memo length measured from the last ten memos.
                2. A reading-time target agreed for the body and for appendices.
                3. A rule written for what moves to the appendix.
                4. The rule added to the memo standard.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written length and reading-time rule for memo bodies and appendices, agreed with the partners and added to the standard."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the pages or words in the last ten memos"
                - "Ask partners how long they actually spend on a pre-read"
                - "Draft a rule for what belongs in the body and what in appendices"
                - "Add the agreed rule to the memo standard"
            - name: Weekly memo writing block during an active round
              description: |-
                ## Purpose
                Memos get written between founder calls, portfolio requests and inbound, which is why so many are finished at midnight. A protected weekly writing block while a round is live means the draft grows steadily and the partner sees a version early enough to redirect it.

                ## Milestones
                1. A two-hour block in the calendar each week a memo is live.
                2. Each block ending with a dated draft version saved.
                3. No live memo going more than seven days without an update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During every live round, the memo shows a new dated version at least once a week."
                cadence: rolling
              tasks:
                - "Put a recurring two-hour writing block in the calendar"
                - "Write in the memo during the block with notifications off @recurring(weekly:tue)"
                - "Save a dated version at the end of each block"
                - "Tell the sponsoring partner which section changed this week"
            - name: Founder data request and follow-up tracker
              description: |-
                ## Purpose
                Half the gaps in a venture memo come from data the founder promised and never sent: the cohort table, the pipeline export, the cap table. A simple tracker of what was asked, when, and what arrived keeps requests polite and specific, and shows the partner exactly what is still missing.

                ## Milestones
                1. One tracker per live deal listing each request, date asked and date received.
                2. Requests grouped so founders get one combined message, not ten.
                3. Outstanding items visible to the sponsoring partner before each pre-read.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live deal has a tracker showing every data request, its date and status, reviewed before each pre-read."
                cadence: rolling
              tasks:
                - "Create a tracker with request, date asked, owner and status columns"
                - "Combine open requests into a single short message to the founder"
                - "Chase outstanding founder data requests @recurring(weekly:thu)"
                - "Mark what remains missing in the memo's open questions"
            - name: Pre-read circulation routine for partner meetings
              description: |-
                ## Purpose
                Partners read pre-reads on the weekend or the train, and a memo that lands after the cut-off is often not read at all. A fixed routine for when the memo goes out, in what format and with what cover note means the discussion starts from the memo rather than from your verbal summary.

                ## Milestones
                1. A fixed day and time for sending pre-reads each week.
                2. A short cover note format naming the ask and the three key questions.
                3. Pre-reads sent on time for every deal reaching the partner meeting for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive partner meetings, every memo went out by the agreed pre-read time with a cover note."
                cadence: phased
              tasks:
                - "Confirm the pre-read cut-off with the operations lead"
                - "Write a three-line cover note format for pre-reads"
                - "Send the week's memos with cover notes before the cut-off @recurring(weekly:fri)"
                - "Note any pre-read that went late and why"
            - name: Open questions log for live memos
              description: |-
                ## Purpose
                Every venture memo carries questions nobody can answer yet: will the second product land, will the enterprise pilots convert, is the founder able to hire a sales leader. Logging them openly, with who owns each and what would settle it, stops them being buried in a paragraph and lets partners see what diligence is still buying.

                ## Milestones
                1. A log for each live deal listing open questions, owner and the evidence that would settle each.
                2. The top three open questions shown on the memo's first page.
                3. Each question marked answered, partly answered or open before the vote.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live memo has a questions log with owners and status, and its top three open questions appear on the first page."
                cadence: rolling
              tasks:
                - "Start a questions log with owner and evidence columns"
                - "Review the open questions log with the deal team @recurring(weekly:wed)"
                - "Move the top three unanswered questions to the memo's first page"
                - "Close or archive questions on finished deals @recurring(monthly:21)"
            - name: Partner meeting decision record
              description: |-
                ## Purpose
                Months later nobody remembers why the fund passed, or which condition the partners attached to a yes. A short record of each memo's discussion, the decision and the reasons gives the fund a memory, and becomes the raw material for every later look-back.

                ## Milestones
                1. A record for each memo discussed, with date, attendees, decision and reasons.
                2. Conditions attached to a yes written as checkable items.
                3. Records filed beside the memo they relate to.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every memo discussed at a partner meeting has a filed record of decision, reasons and conditions within two working days."
                cadence: rolling
              tasks:
                - "Write the decision and three main reasons straight after the meeting"
                - "List any conditions as items someone can tick off"
                - "File the record beside the memo in the deal folder"
                - "Check that last month's records are complete and filed @recurring(monthly:3)"
            - name: Exhibit bank of market maps and cohort charts
              description: |-
                ## Purpose
                The same few exhibits appear in almost every venture memo: a market map, a cohort retention chart, a burn and runway chart, a cap table summary. Keeping clean, reusable versions of each saves hours per memo and makes memos easier to compare side by side.

                ## Milestones
                1. Reusable chart formats for cohorts, revenue growth, burn and runway, and cap table.
                2. At least three sector market maps kept current.
                3. Each exhibit labelled with source and date conventions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared folder holding reusable cohort, growth, burn and cap table exhibits plus three current sector market maps."
                cadence: rolling
              tasks:
                - "Collect the best exhibits from the memo library into one folder"
                - "Rebuild the cohort and burn charts as blank reusable formats"
                - "Add any strong new exhibit from this month's memos @recurring(monthly:18)"
                - "Date and source-label every market map"
            - name: Quarterly look-back at memo predictions
              description: |-
                ## Purpose
                Behind every memo sits a set of predictions: this team will hire well, this market will open, this metric will double. Comparing a handful of memos each quarter with what actually happened shows which sections you get right and which you consistently overstate, which is the only real feedback a venture writer gets before exits arrive.

                ## Milestones
                1. Three to five memos from at least a year ago reviewed each quarter.
                2. Each key prediction marked right, wrong or too early to tell.
                3. A running note of patterns in what you overstate or miss.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each quarter, at least three older memos are scored prediction by prediction and the patterns note is updated."
                cadence: cyclic
              tasks:
                - "Pick three memos written at least a year ago"
                - "Score each memo's key predictions against current company data @recurring(quarterly)"
                - "Add what you learned to the running patterns note"
                - "Share one lesson with the team at a monthly meeting"
            - name: Passed-deal tracker with the reasons recorded
              description: |-
                ## Purpose
                Every fund's anti-portfolio teaches something, but only if the reason for passing was written down at the time. Tracking passed companies alongside the memo's stated reasons tells you whether you pass for good reasons or for reasons that keep turning out wrong.

                ## Milestones
                1. Every passed deal from the last year listed with stage, date and stated reason.
                2. Later funding rounds or shutdowns noted for each.
                3. Reasons grouped into themes such as team, market, price or timing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker of passed deals with original reasons and later outcomes, refreshed each quarter and grouped by reason theme."
                cadence: rolling
              tasks:
                - "List last year's passed deals with the reason from each decision record"
                - "Check public funding news on passed companies @recurring(quarterly)"
                - "Group reasons for passing into four or five themes"
                - "Flag any theme where outcomes keep contradicting the reason"
            - name: Yearly refresh of the memo template
              description: |-
                ## Purpose
                Templates drift: sections partners never read stay in, and questions that now matter, such as AI defensibility or capital efficiency, never get added. A yearly refresh using the look-back notes keeps the template matched to how the fund actually decides.

                ## Milestones
                1. Sections partners consistently skip identified and removed or moved to appendix.
                2. New sections or prompts added from the year's look-back notes.
                3. A new template version published with a change note.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A new dated template version with a written change note is published once a year."
                cadence: cyclic
              tasks:
                - "Ask each partner which section they would cut and which they would add"
                - "Read the year's look-back and passed-deal notes for gaps"
                - "Publish the revised template with a change note @recurring(yearly)"
                - "Archive the old version so past memos still make sense"
            - name: Writing the team section about founders, not CVs
              description: |-
                ## Purpose
                At seed, the team section often decides the vote, yet many memos just list degrees and former employers. A strong team section explains why these founders in particular will find the answer, what they have done under pressure, and where the gaps are, using evidence from references and your own meetings.

                ## Milestones
                1. A team section draft that names a specific earned insight for each founder.
                2. At least two concrete examples of founder behaviour drawn from meetings or references.
                3. Gaps in the team stated plainly with the hire that would close each.
                4. A partner's feedback on the section recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team section for a real or past deal that names insight, behaviour examples and gaps, with partner feedback recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Reread the team sections of three approved seed memos"
                - "Write down two moments from founder meetings that showed judgement"
                - "Name the most important missing hire and why it matters"
                - "Ask a partner to mark what convinced them and what did not"
            - name: Bottom-up market sizing section
              description: |-
                ## Purpose
                Experienced investors discount any market slide that starts with a top-down billion-dollar figure from a research report. A bottom-up section that counts buyers, prices and realistic penetration gives a number you can defend in the meeting and shows whether the company can become big enough to matter to the fund.

                ## Milestones
                1. A count of target customers with the source for each figure.
                2. A realistic price per customer drawn from the company's actual contracts.
                3. A serviceable market figure and the share the company needs to reach its plan.
                4. The method shown in a single exhibit the reader can follow.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A market section for a live or practice deal built from customer counts and real prices, shown in one followable exhibit."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a credible count of the company's target customers"
                - "Take the average contract value from the company's own data"
                - "Work out the share needed to reach the founder's five-year plan"
                - "Build one exhibit showing the steps from count to market size"
            - name: Why-now section built on evidence
              description: |-
                ## Purpose
                Almost every venture idea has been tried before, so partners want to know what has changed: a cost curve, a regulation, a platform shift, a change in buyer behaviour. A why-now section with dated evidence turns a vague claim of timing into an argument a sceptic has to engage with.

                ## Milestones
                1. The specific change that makes the company possible now named in one sentence.
                2. Two or three pieces of dated evidence for that change.
                3. Earlier attempts at the same idea listed with why they failed.
                4. A sentence on what would happen to the company if the change reversed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A why-now section naming one change, with dated evidence and a list of earlier failed attempts, drafted for a real deal."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the one change that makes this company possible now"
                - "Find two dated sources showing the change is real"
                - "Search for earlier companies that tried the same idea"
                - "Note why each earlier attempt failed or stalled"
            - name: Product and traction section that shows the real curve
              description: |-
                ## Purpose
                Rising revenue charts can hide a single large customer, a discount spree or heavy churn. Showing the traction honestly, with cohorts, concentration and the quality of revenue alongside growth, builds partner trust and saves the deal from being reopened after a bad customer call.

                ## Milestones
                1. Monthly revenue or usage shown alongside customer count.
                2. Cohort retention or repeat usage shown where data allows.
                3. Concentration in the top three customers stated as a percentage.
                4. A plain statement of what traction does and does not prove yet.

                ## Notes
                At pre-seed and early seed, swap revenue for engagement signals and design partner commitments, and say so in the text.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A traction section showing growth, retention and customer concentration, with a sentence stating what the data does not yet prove."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the founder for monthly revenue by customer"
                - "Build a cohort or repeat usage table from the data"
                - "Calculate the share of revenue from the top three customers"
                - "Write one sentence on what the traction does not yet prove"
            - name: Competition section beyond the two-by-two
              description: |-
                ## Purpose
                Nobody is convinced by a positioning grid with the company alone in the top right corner. A good competition section names the incumbents, the funded startups and the do-nothing option, explains why customers in your calls chose this company, and admits where a rival is stronger.

                ## Milestones
                1. Incumbents, funded startups and the status quo option each listed.
                2. Funding and stage of the closest three rivals noted from public sources.
                3. Customer quotes on why they chose the company over alternatives.
                4. One area where a rival is ahead stated honestly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A competition section covering incumbents, startups and the status quo, with customer evidence and at least one honest rival strength."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the incumbents, startups and status quo options customers mention"
                - "Look up funding and stage of the three closest startups"
                - "Pull two customer quotes on why they chose this company"
                - "Write where the strongest rival is ahead today"
            - name: Risks section ranked by what could end the company
              description: |-
                ## Purpose
                Long lists of generic risks, such as competition, execution and macro, tell partners nothing. Ranking the three or four risks that could actually end the company, with what the founders are doing about each and what milestone would retire it, makes the risk section the most useful page in the memo.

                ## Milestones
                1. No more than five risks, ranked by how likely they are to end the company.
                2. For each risk, the founders' current mitigation written in a sentence.
                3. For each risk, the milestone or evidence that would retire it.
                4. The top risk repeated in the memo's opening summary.

                ## Notes
                Start from the **Risk register** template, then cut it down to the handful that matter for the memo.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ranked risks section of at most five company-ending risks, each with mitigation and a retiring milestone, in a live memo."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every risk raised in founder, customer and partner conversations"
                - "Cut the list to the five that could end the company"
                - "Write the mitigation and retiring milestone for each"
                - "Put the top risk into the opening summary"
            - name: Round terms summary partners can read at a glance
              description: |-
                ## Purpose
                One table should hold the whole round: amount raised, pre-money valuation, the fund's cheque and ownership, the option pool, liquidation preference, pro rata and board rights. Getting this table right, and flagging anything off-market for counsel, prevents surprises when the term sheet arrives.

                ## Milestones
                1. A one-table terms summary with round size, valuation, cheque and post-money ownership.
                2. Option pool, liquidation preference, board seat and pro rata rights listed.
                3. Fully diluted ownership checked against the cap table.
                4. Anything unusual flagged for review by fund counsel.

                ## Notes
                The memo records terms for the partners; legal judgement on any clause belongs with fund counsel.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A terms table for a live round showing valuation, cheque, ownership and key rights, with unusual terms flagged for counsel."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Collect round size, valuation and lead investor from the founder"
                - "Calculate post-money ownership on a fully diluted basis"
                - "List preference, pool, board and pro rata terms in the table"
                - "Send any off-market term to fund counsel for review"
            - name: What this company must become to matter to the fund
              description: |-
                ## Purpose
                Venture funds need a few companies to return a large share of the fund, so every memo should say what this one would have to become for that to happen. A short paragraph with the exit value needed at your ownership, after expected dilution, keeps the discussion honest about whether the outcome is plausible.

                ## Milestones
                1. Expected ownership at exit estimated after future rounds.
                2. The exit value needed for the position to return a set share of the fund calculated.
                3. Comparable outcomes in the sector named to show whether that value is plausible.
                4. The paragraph placed beside the terms summary.

                ## Notes
                Use the fund's own construction targets from the partners; this paragraph applies them to one company, it does not redesign the portfolio.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A paragraph stating the exit value needed at diluted ownership to return the fund's target share, with sector comparables."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a partner for the fund's return target per core position"
                - "Estimate dilution across the next two or three rounds"
                - "Work out the exit value needed at the diluted ownership"
                - "Name two or three sector exits of similar size"
            - name: Follow-on view section in the first memo
              description: |-
                ## Purpose
                Partners want to know at entry how much more the fund expects to put in and what would earn it. Writing the follow-on view in the first memo, with the milestones that would justify reserves, makes the later follow-on decision a test against a written plan rather than a fresh debate.

                ## Milestones
                1. Expected reserve amount for the company written down.
                2. Two or three milestones that would justify using those reserves.
                3. Signals that would mean holding back named.
                4. The section saved so the follow-on decision can refer to it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A follow-on view in the entry memo naming expected reserves, the milestones that would earn them and the signals to hold back."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the partner what reserve ratio the fund plans for this stage"
                - "Write the milestones that would justify the next cheque"
                - "Write the signals that would mean holding back"
                - "Tag the section so it is easy to find at the next round"
            - name: Choosing between a memo document, deck or one-pager
              description: |-
                ## Purpose
                Some partnerships read long-form documents, others decide from slides, and some seed funds want a single page. Choosing a format on purpose, and testing it on a real deal, ends the habit of turning a memo into a deck the night before because nobody agreed what the meeting expects.

                ## Milestones
                1. Three format options described with their trade-offs for reading and discussion.
                2. One live deal written up in the preferred format.
                3. Partner feedback on the trial collected.
                4. A format decision recorded in the memo standard.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on memo format, made after one live trial and partner feedback, added to the memo standard."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each partner how they prefer to read a deal"
                - "Write the trade-offs of document, deck and one-pager formats"
                - "Trial the leading option on the next live deal"
                - "Record the decision in the memo standard"
            - name: Pre-mortem paragraph before the partner vote
              description: |-
                ## Purpose
                Imagining the company has failed three years from now and writing the most likely reason is a quick way to surface the risk the memo is quietly avoiding. A short pre-mortem paragraph often changes what diligence you do in the final week.

                ## Milestones
                1. A paragraph written as if the company failed, naming the single most likely cause.
                2. That cause checked against the risks section.
                3. Any new diligence step added to the timeline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pre-mortem paragraph is included in the memo and any new risk it surfaced appears in the risks section."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three sentences on why the company failed by year three"
                - "Compare the cause with the ranked risks section"
                - "Add any missing diligence step to the deal timeline"
            - name: Bear case written by a colleague
              description: |-
                ## Purpose
                You will have spent hours with the founders and will like them, which makes your own bear case gentle. Asking a colleague with no stake in the deal to write the strongest case against, and answering it in the memo, gives partners the debate before the meeting rather than during it.

                ## Milestones
                1. A colleague briefed with the draft memo and asked for the strongest case against.
                2. Their bear case received in writing.
                3. A reply to each point added to the memo or the open questions log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written bear case from a colleague is attached to the memo with a reply to each point."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a colleague outside the deal team to write the case against"
                - "Send them the draft memo and the data room summary"
                - "Reply to each bear case point in writing"
                - "Attach the bear case and replies as an appendix"
            - name: Key questions box at the top of the memo
              description: |-
                ## Purpose
                Partner meetings drift when nobody knows which question the vote really turns on. A box at the top listing the two or three questions that decide the deal, with your current answer to each, focuses the discussion and makes it obvious what further work would change minds.

                ## Milestones
                1. Two or three deciding questions written at the top of the memo.
                2. Your current answer and confidence beside each.
                3. The partner meeting discussion recorded against those questions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The memo opens with a box of no more than three deciding questions and answers, and the decision record refers to them."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the three questions the vote will turn on"
                - "Add your current answer and a confidence level to each"
                - "Check the decision record against those questions afterwards"
            - name: Cutting a twelve-page memo to four
              description: |-
                ## Purpose
                Long memos usually mean the writer has not yet decided what matters. Practising a hard cut on one of your own memos, keeping the thesis, the deciding evidence and the risks and moving the rest to appendices, teaches the edit that every later memo needs.

                ## Milestones
                1. One of your past or live memos chosen for the edit.
                2. A four-page body version with appendices behind it.
                3. A partner's view on whether anything essential was lost.
                4. Three personal cutting rules written down for future memos.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A memo cut to a four-page body with appendices, reviewed by a partner, plus three written cutting rules."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose your longest recent memo for the exercise"
                - "Mark every paragraph as essential, supporting or appendix"
                - "Rewrite the body to four pages"
                - "Write three cutting rules from what you removed"
            - name: Fund mandate and concentration check for the memo
              description: |-
                ## Purpose
                A great company can still be the wrong deal if it breaks the fund's stage, geography or sector limits, or makes the portfolio lopsided. A short mandate check in each memo shows partners the fit has been tested, not assumed.

                ## Milestones
                1. The fund's mandate limits on stage, geography, sector and cheque size listed.
                2. The deal checked against each limit.
                3. Current exposure to the same sector or theme stated.
                4. Any exception flagged for partner approval.

                ## Notes
                Limits and exceptions come from the fund's documents and partners; the memo only reports the check.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each memo contains a mandate check against stage, geography, sector and cheque limits, with exposure stated and exceptions flagged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask operations for the fund's written mandate limits"
                - "Check the deal against stage, geography, sector and cheque size"
                - "Update sector exposure figures for memo use @recurring(monthly:15)"
                - "Flag any exception in the memo's opening summary"
            - name: Agent-drafted first pass from call notes
              description: |-
                ## Purpose
                Turning a stack of founder, customer and reference call notes into a first draft is slow, and the blank page delays the real thinking. Letting the agent produce a structured first pass from your notes, then rewriting every section in your own judgement, can halve the time to a reviewable draft without outsourcing the opinion.

                ## Milestones
                1. Call notes for a live deal collected in one document.
                2. A first-pass draft produced against the fund's skeleton.
                3. Every claim in the draft checked against the notes and source trail.
                4. The thesis, risks and recommendation rewritten entirely by you.

                ## Notes
                Keep confidential founder data inside the tools the fund has approved for it. The recommendation is always yours.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A memo draft built from an agent first pass, with every claim checked against notes and the thesis and risks rewritten by the writer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect all call notes for the deal into one document"
                - "Ask the agent to draft a first pass against the memo skeleton"
                - "Check every claim in the draft against the original notes"
                - "Rewrite the thesis, risks and recommendation yourself"
            - name: Pass note to founders after a no
              description: |-
                ## Purpose
                Founders remember how a fund said no long after they forget the meeting. Turning the memo's pass reasons into a short, specific and kind note keeps the relationship open for the next round and reflects well on the fund in founder communities.

                ## Milestones
                1. A pass note format with a specific reason, one useful observation and an open door.
                2. The note checked so it reveals nothing confidential from other deals.
                3. Pass notes sent within a week of the decision for every memo that reached partners.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every founder whose memo reached the partner meeting and was declined receives a specific pass note within seven days."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Take the main pass reason from the decision record"
                - "Draft a three-sentence note with one useful observation"
                - "Ask the sponsoring partner to approve the wording"
                - "Send the note and log the date in the passed-deal tracker"
            - name: First full memo for a live seed deal
              description: |-
                ## Purpose
                The first time you carry a memo from founder meeting to partner vote, every part of the system gets tested at once. Setting it up as a dated project, with the skeleton, timeline and source trail in place from day one, gives you the best chance of a memo the partners can decide on.

                ## Milestones
                1. The memo timeline agreed with the sponsoring partner.
                2. A complete first draft covering every required section.
                3. Partner redline received and addressed.
                4. The final memo sent as a pre-read on time.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete seed memo reaches the partner meeting as an on-time pre-read with partner redline addressed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the target partner meeting with the sponsoring partner"
                - "Open the seed skeleton and fill the thesis paragraph first"
                - "Send the first full draft for partner redline"
                - "Circulate the final version before the pre-read cut-off"
            - name: Presenting the memo at the partner meeting
              description: |-
                ## Purpose
                The memo gets you into the room; the discussion decides the deal. Preparing a two-minute opening, the answers to the questions you expect, and a clear ask means you lead the meeting instead of reacting to it.

                ## Milestones
                1. A two-minute spoken opening that states the thesis, the ask and the key risk.
                2. Answers prepared for the ten questions most likely to come up.
                3. The meeting held and the decision recorded the same day.

                ## Notes
                Start from the **Meeting notes** template for the decision and follow-ups.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The memo is presented at a partner meeting with a prepared opening and question list, and a decision is recorded that day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write and time a two-minute spoken opening"
                - "List the ten hardest questions and draft short answers"
                - "Rehearse the opening with a colleague the day before"
                - "Record the decision and follow-ups straight after the meeting"
            - name: Memo update after a call changes the view
              description: |-
                ## Purpose
                A reference call or customer conversation sometimes moves the view after the memo has gone out. Updating the memo openly, with a dated change note at the top, keeps the partners deciding on current facts and protects your credibility far more than hoping nobody notices.

                ## Milestones
                1. The new information written up with its source and date.
                2. Affected sections of the memo revised.
                3. A change note at the top saying what changed and why.
                4. The updated memo sent to everyone who received the original.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An updated memo with a dated change note reaches every original recipient before the decision is taken."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write up the new information with source and date"
                - "Revise every section the new information touches"
                - "Add a change note to the top of the memo"
                - "Resend to everyone who had the original version"
            - name: Term sheet stage memo addendum
              description: |-
                ## Purpose
                Between the partner vote and the signed term sheet, the terms often move: the valuation rises, the pool grows, another investor joins. A short addendum recording the final terms against what partners approved keeps the approval valid and flags anything that needs a second look.

                ## Milestones
                1. Final proposed terms set beside the terms partners approved.
                2. Every change and its effect on ownership listed.
                3. Partner sign-off on any material change recorded.
                4. The addendum filed with the original memo.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A filed addendum compares final and approved terms, lists every change and records partner sign-off on material ones."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the approved terms and the latest term sheet side by side"
                - "Recalculate ownership for any change in valuation or pool"
                - "Ask the sponsoring partner to sign off material changes"
                - "File the addendum with the original memo"
            - name: Memo for a round decided in 72 hours
              description: |-
                ## Purpose
                Some rounds close in days, and the fund has to choose between a short memo and no deal. Having a compressed format ready, covering thesis, team, the one metric that matters, top risk and terms, lets you meet the timeline while still leaving a written record of why the fund said yes.

                ## Milestones
                1. A two-page compressed memo format agreed with the partners.
                2. A list of the minimum checks that must happen even on a fast round.
                3. One fast round written up in the format with a full memo completed afterwards.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A two-page fast-round format and minimum check list exist, and one fast deal has been written up in it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a two-page format with thesis, team, metric, risk and terms"
                - "Agree the minimum checks with the partners"
                - "Use the format on the next fast round"
                - "Complete the full memo within two weeks of closing"
            - name: Closing file for the approved memo
              description: |-
                ## Purpose
                Once the money is wired the memo becomes the reference point for every board meeting and follow-on discussion. A clean closing file, with the final memo, addendum, decision record and conditions, saves hours when someone asks a year later what the fund expected.

                ## Milestones
                1. Final memo, addendum and decision record stored in one folder.
                2. Post-closing conditions listed with owners.
                3. The board member or portfolio lead told where the file sits.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Within two weeks of closing, one folder holds the final memo, addendum, decision record and owned conditions list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Move the final memo, addendum and decision record into one folder"
                - "List any post-closing conditions with an owner each"
                - "Send the folder link to the board member or portfolio lead"
            - name: First memo as a venture analyst
              description: |-
                ## Purpose
                New analysts are often handed a memo with a week's notice and no feedback loop. Treating your first three memos as a learning plan, with a named reviewer and written feedback after each, turns them into the fastest way to learn how the partners think.

                ## Milestones
                1. A reviewer agreed for your first three memos.
                2. Written feedback collected after each memo.
                3. A personal list of recurring corrections kept and checked before each new draft.
                4. A noticeable reduction in redline between the first and third memo.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three memos written with a named reviewer, written feedback on each and a personal corrections list in use."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask a senior colleague to review your first three memos"
                - "Start a list of every correction they make"
                - "Check the list before sending each new draft"
                - "Ask for written feedback on your memos @recurring(monthly:26)"
            - name: Sponsoring partner duties on a memo
              description: |-
                ## Purpose
                When a partner sponsors a deal, the memo carries their name and their judgement even if an analyst wrote it. Being clear about what the sponsor reviews, when, and which sections they write themselves keeps the memo sharp and gives the junior writer real coaching rather than last-minute rewrites.

                ## Milestones
                1. A short list of what the sponsor reviews and when for each live memo.
                2. The sponsor writing or rewriting the thesis and recommendation personally.
                3. Feedback to the writer given within two working days of each draft.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each sponsored memo has a written review plan, sponsor-written thesis and recommendation, and feedback within two working days."
                cadence: rolling
              tasks:
                - "Agree the review points with the writer at the start of each deal"
                - "Review analyst drafts on live deals @recurring(weekly:mon)"
                - "Write the recommendation paragraph yourself"
                - "Give the writer one thing to keep and one to change"
            - name: Reading memos as a voting partner
              description: |-
                ## Purpose
                Voting partners shape memo quality more than any template, through what they read, question and reward. A steady routine for reading pre-reads, noting questions in advance and sending feedback to writers raises the standard across the whole team.

                ## Milestones
                1. Every pre-read read before the partner meeting.
                2. Two or three written questions prepared per memo.
                3. Brief feedback sent to writers after each meeting.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "For each partner meeting, every pre-read has been read with written questions, and writers receive feedback afterwards."
                cadence: rolling
              tasks:
                - "Read the week's pre-reads and note questions @recurring(weekly:sun)"
                - "Send questions to the writer before the meeting"
                - "Give each writer one line of feedback after the meeting"
                - "Note which memos you voted on and your view @recurring(monthly:28)"
            - name: Memo for a corporate venture approval committee
              description: |-
                ## Purpose
                A corporate venture memo has two audiences: investors who care about returns and business unit leaders who care about strategic fit. Writing a variant that adds the strategic case, the business unit sponsor and any commercial agreement keeps the parent's approval process from stalling the round.

                ## Milestones
                1. A strategic fit section naming the business unit and the benefit to it.
                2. The business unit sponsor's written support attached.
                3. Any commercial agreement or information rights described separately from the investment terms.
                4. Approval steps and dates mapped against the round timeline.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A corporate venture memo with a strategic fit section, sponsor support and approval timeline reaches the committee before the round closes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name the business unit and write the strategic benefit in two sentences"
                - "Ask the business unit sponsor for written support"
                - "Separate any commercial deal from the investment terms in the memo"
                - "Map the approval steps against the founder's closing date"
            - name: Memo records for a solo GP's LP diligence
              description: |-
                ## Purpose
                Solo GPs and small funds often decide in their heads, then struggle when LPs ask to see how decisions were made. Keeping a short memo for every investment, even when you are the only voter, gives LPs evidence of process and gives you a record to learn from.

                ## Milestones
                1. A short memo format for a one-person decision.
                2. A memo filed for every investment made in the current fund.
                3. Memos organised so a sample can be shared with LPs under confidentiality.

                ## Notes
                Check with fund counsel what may be shared with LPs and under which confidentiality terms.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every investment in the current fund has a filed short memo, organised so a sample can be shared with LPs."
                cadence: rolling
              tasks:
                - "Write a two-page memo format for solo decisions"
                - "Back-fill memos for investments already made this fund"
                - "File each new memo to the LP-ready folder @recurring(monthly:9)"
                - "Ask fund counsel what may be shared with prospective LPs"
            - name: Pre-seed memo when there is no traction yet
              description: |-
                ## Purpose
                At pre-seed there may be no product, no revenue and sometimes no full team, so the usual sections are empty. A pre-seed variant built around the founders' insight, the evidence of a real problem and the first experiments they will run gives partners something concrete to vote on.

                ## Milestones
                1. A pre-seed format replacing traction with problem evidence and planned experiments.
                2. The founders' earned insight described with specific examples.
                3. The milestones the round must reach to raise the next one listed.
                4. One pre-seed deal written up in the format.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pre-seed memo format exists with problem evidence and next-round milestones, and one real deal is written up in it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Replace the traction heading with problem evidence and experiments"
                - "Write what the founders know that others do not"
                - "List what the round must achieve before the next raise"
                - "Use the format on the next pre-seed deal"
            - name: Science and hardware risk memo variant
              description: |-
                ## Purpose
                Deep tech, biotech and hardware deals carry technical risk that a software memo template barely mentions. A variant that separates scientific, engineering, regulatory and manufacturing risk, with the expert view on each and the funding needed to retire it, lets non-specialist partners vote with their eyes open.

                ## Milestones
                1. Technical risk split into science, engineering, regulatory and manufacturing.
                2. An independent expert's view summarised for the largest technical risk.
                3. The capital and time needed to reach each technical milestone estimated.
                4. A plain-language glossary for partners outside the field.

                ## Notes
                Expert reviewers must sign whatever confidentiality agreement the founder and fund require before seeing data.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A memo variant separating four kinds of technical risk, with an expert summary, capital per milestone and a glossary."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Split the technical risks into four headed groups"
                - "Arrange a call with an independent expert on the largest risk"
                - "Estimate capital and time to each technical milestone"
                - "Write a short glossary for partners outside the field"
            - name: Series B memo built on unit economics
              description: |-
                ## Purpose
                By Series B partners expect the memo to prove a repeatable engine, not a promising start. A variant centred on cohort economics, payback, sales efficiency and burn multiple, with the plan for the round's capital, holds a growth-stage company to growth-stage evidence.

                ## Milestones
                1. Cohort revenue and gross margin shown for at least eight quarters where available.
                2. CAC payback, sales efficiency and burn multiple calculated on the fund's definitions.
                3. The use of the round's capital tied to specific growth targets.
                4. Comparable companies at the same stage used to test the valuation.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A Series B memo with eight quarters of cohorts, payback and burn multiple on fund definitions, and comparables beside the valuation."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request quarterly cohort revenue and gross margin from the company"
                - "Calculate payback, sales efficiency and burn multiple"
                - "Link each use of funds to a growth target"
                - "Pick four comparable companies at the same stage"
            - name: Five-year memo calibration study
              description: |-
                ## Purpose
                Over a fund cycle, your memos form a record of how good your judgement really is. A structured study of every memo you wrote in the last five years, scored against outcomes, shows where your conviction was earned and where it was not, and becomes the strongest evidence of judgement you can show partners or future LPs.

                ## Milestones
                1. Every memo you wrote or sponsored in five years listed with decision and outcome so far.
                2. Each memo's thesis and top risk scored against what happened.
                3. Patterns in your hits and misses written up in two pages.
                4. Three changes to your memo practice agreed from the findings.

                ## Notes
                Outcomes in venture take a decade; label anything under five years old as early evidence, not proof.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page calibration study scoring five years of memos against outcomes, with three agreed changes to memo practice."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every memo you wrote or sponsored in the last five years"
                - "Record the decision and current outcome for each"
                - "Score each thesis and top risk against what happened"
                - "Write up the patterns and three changes to your practice"
---

# Venture Investment Memos

This area is for venture investors who write, sponsor or vote on investment memos, from the analyst turning a first founder meeting into a write-up to the partner deciding whether to put the fund's name on a round. It starts with the foundations (your fund's memo standard, a library of past memos, the partner meeting process, the thesis paragraph and a source trail for founder numbers), then the routines that keep live memos moving, the writing skills each section needs, the choices about format and length, the dated moments of a round, variants for analysts, sponsoring partners, voting partners and corporate or solo investors, and finally the specialist memos for pre-seed, science-heavy and later rounds plus a calibration study of your own judgement.

What repeats is a weekly writing block, data chasing, open-question review and pre-read circulation while a round is live, monthly upkeep of the memo library, exhibit bank and decision record, a quarterly look-back at passed and backed companies, and a yearly refresh of the memo template and metric definitions. The Meeting notes, Risk register and Development plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
