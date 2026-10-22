---
id: sales-revenue.deal-qualification-meddicc-bant
name: Deal Qualification (MEDDICC, BANT)
description: "A shared qualification framework, an evidence-based scorecard, written walk-away rules and steady weekly and monthly checks that keep sellers on deals that can close and let the rest go early."
category: business
version: 1.0.0
tags: [sales-revenue, deal-qualification-meddicc-bant, team, manager, enterprise, meddicc, bant, pipeline-hygiene]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - course
    - metrics-log
    - one-on-one
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Deal Qualification (MEDDICC, BANT)
          description: "Applying a qualification framework consistently so reps spend time on deals that can close and disqualify the rest early and politely."
          projects:
            - name: Choosing between BANT, MEDDICC and lighter frameworks
              description: |-
                ## Purpose
                BANT was built for deals where one person held the budget and the timeline, while MEDDICC and MEDDPICC were built for six-month purchases with a buying committee and a procurement step. Picking the framework that matches your average deal size, cycle length and number of buyers decides whether reps fill in a scorecard that predicts anything or one they resent. Making the choice once, in writing, ends the habit of every rep qualifying in their own way.

                ## Milestones
                1. Average deal size, cycle length and typical number of buyers written down from the last twenty closed deals.
                2. BANT, MEDDICC, MEDDPICC and one lighter option such as CHAMP compared on one page against those facts.
                3. A chosen framework, or a two-tier split by deal size, recorded with the reason.
                4. The decision signed off by the sales leader and shared with the team.

                ## Notes
                The best framework is the one reps will fill in honestly. A four-letter check applied to every deal beats a seven-letter acronym applied to a third of them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written framework decision, based on the last twenty closed deals and signed off by the sales leader, is shared with every seller."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last twenty won and lost deals with size, cycle length and contact count"
                - "Write a one-page comparison of BANT, MEDDICC, MEDDPICC and CHAMP against those numbers"
                - "Decide on one framework or a split by deal size and write down why"
                - "Get the sales leader to sign off the choice before telling the team"
            - name: House definitions for each MEDDICC element
              description: |-
                ## Purpose
                Ask five reps what counts as an identified economic buyer and you will get five answers, from a name found online to a meeting held with the finance director. A one-page definition of each element, written in your market's language with an example of strong and weak evidence, is what makes two reps' scores comparable. Without it, a qualification score is an opinion with a number attached.

                ## Milestones
                1. Each of the seven elements defined in one or two plain sentences for your market.
                2. A strong and a weak evidence example written under every element.
                3. The definitions tested by three reps scoring the same deal independently.
                4. Disagreements resolved and the final page published where reps work.

                ## Notes
                If you chose BANT, do the same for its four letters. Budget needs the clearest definition, because a budget that exists is not the same as a budget allocated to you.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page definition of every element with strong and weak evidence examples, tested on a real deal by three reps and published to the team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-sentence definition for each element of your chosen framework"
                - "Write a strong and a weak evidence example under every element"
                - "Ask three reps to score the same open deal using only the draft page"
                - "Rewrite any definition the three reps read differently"
                - "Revisit the definitions against the last year of won and lost deals @recurring(yearly)"
            - name: Qualified opportunity entry bar
              description: |-
                ## Purpose
                Pipeline inflates when every first meeting becomes an opportunity, and managers then forecast from deals nobody has qualified. A short entry bar, for example a confirmed pain, a named sponsor and a plausible timeline, decides what may be opened as an opportunity and what stays a lead. It is the single rule that most improves the honesty of every pipeline number downstream.

                ## Milestones
                1. Three or four minimum conditions for opening an opportunity written in plain words.
                2. The conditions checked against ten recently created opportunities, with the share that would have failed noted.
                3. A clear place for meetings that fall short, such as a lead or early-stage status.
                4. The bar agreed with sales development and marketing so handoffs use the same test.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written entry bar of three or four conditions, agreed with sales development and marketing, with ten recent opportunities checked against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the last ten opportunities created and what was known about each at creation"
                - "Draft three or four conditions an opportunity must meet to be opened"
                - "Count how many of the ten would have failed the new bar"
                - "Agree the bar with the sales development and marketing leads"
            - name: Disqualification rules and walk-away signals
              description: |-
                ## Purpose
                Sellers rarely lose time on deals they lose quickly; they lose it on deals that limp for months without a buyer ever saying no. Writing down the signals that end a pursuit, such as no access to the economic buyer after three requests, no funded pain or a decision date that has slipped twice, gives reps permission to stop. Disqualifying early is a skill the best sellers practise, not a failure to hide.

                ## Milestones
                1. Six to eight walk-away signals written, each tied to a framework element.
                2. A rule for how many signals end a pursuit outright and how many trigger a manager conversation.
                3. Three current deals reviewed against the signals, with a decision recorded for each.
                4. Disqualification treated as a respected outcome in team meetings, not a mark against the rep.

                ## Notes
                Disqualified is not lost. Keep a separate close reason so reports show the deals you chose to leave apart from the deals a competitor won.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A list of six to eight walk-away signals with a decision rule, applied to three live deals with the outcomes recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down why your last five long-stalled deals never closed"
                - "Turn those reasons into six to eight walk-away signals"
                - "Set a rule for when signals end a pursuit or go to the manager"
                - "Add a disqualified close reason that is separate from lost"
            - name: Qualification scorecard with evidence levels
              description: |-
                ## Purpose
                A scorecard that asks reps to tick yes or no for each element invites optimism, because a name typed into the CRM looks the same as a confirmed meeting. Scoring each element on evidence, from 0 for unknown, 1 for assumed and 2 for stated by the buyer to 3 for verified in writing or by action, turns qualification into a record a manager can check. The total then shows how much of a deal is known and how much is hope.

                ## Milestones
                1. A scorecard with one row per element and four evidence levels defined.
                2. A rule for what counts as verified on each element, such as the economic buyer attending a meeting.
                3. The scorecard used on five open deals, with an evidence note behind every score of 2 or 3.
                4. A minimum total proposed for each pipeline stage.

                ## Notes
                Start from the **Operational checklist** template. Keep the scale short: four levels are enough, and reps stop reading a ten-point scale.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scorecard with four defined evidence levels per element, filled in with evidence notes on five open deals."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up the scorecard from the operational checklist template with one row per element"
                - "Define what 0, 1, 2 and 3 mean for each element"
                - "Score your five largest open deals and add an evidence note to every 2 or 3"
                - "Propose a minimum total for each pipeline stage"
            - name: Baseline qualification audit of open pipeline
              description: |-
                ## Purpose
                Before changing how the team qualifies, it helps to know how qualified today's pipeline really is. Scoring every open deal above a set size against the new scorecard, in one sitting with each rep, often shows that a third or more of pipeline value rests on deals with no economic buyer or no measured pain. That baseline is the number every later change is judged against.

                ## Milestones
                1. Every open deal above the agreed size scored with its owning rep.
                2. Total pipeline value split into well, partly and poorly qualified bands.
                3. The three most common missing elements across the pipeline named.
                4. The baseline saved so it can be compared with the next quarter.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every open deal above the agreed size scored, with pipeline value split into three qualification bands and the baseline saved."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the deal size above which every open deal will be audited"
                - "Book a forty-five minute scoring session with each rep"
                - "Split pipeline value into well, partly and poorly qualified bands"
                - "Name the three elements most often missing and share them with the team"
            - name: Qualification question bank by element
              description: |-
                ## Purpose
                Reps who know they need the decision process often ask for it bluntly and get a vague answer. A shared bank of tested questions for each element, phrased the way your best sellers actually ask them, gives newer reps words that work on a live call. It also keeps qualification conversational instead of sounding like an interrogation.

                ## Milestones
                1. Four to six questions written for each element of the framework.
                2. Questions sourced from the team's top performers and from recorded calls.
                3. Each question tagged with the deal stage where it fits best.
                4. The bank stored where reps can open it during a call.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bank of at least four tested questions per element, tagged by deal stage and open to every rep."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your three strongest sellers for the questions they use on each element"
                - "Pull two good questions per element from recorded calls"
                - "Tag each question with the deal stage where it fits"
                - "Add one new question that worked on a real call to the bank @recurring(monthly:26)"
            - name: Qualification fields and evidence notes in the CRM
              description: |-
                ## Purpose
                If qualification lives in reps' notebooks, nobody can inspect it and it disappears when a rep leaves. A small set of CRM fields, one per element plus a free-text evidence note and a last-reviewed date, puts the scorecard where the deal already lives. Keep it to what reps will fill in: every extra required field is another reason to type something meaningless.

                ## Milestones
                1. One field per element using the agreed evidence levels.
                2. An evidence note field and a last-reviewed date on every opportunity.
                3. A pipeline view showing qualification scores beside value and stage.
                4. Fields filled in on all open deals above the audit threshold.

                ## Notes
                Ask your CRM administrator to build the fields. This project defines what qualification needs from the CRM; the wider CRM set-up belongs elsewhere.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open deal above the audit threshold shows a score per element, an evidence note and a last-reviewed date in the CRM."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the qualification fields and their allowed values on one page"
                - "Ask the CRM administrator to add the fields and a pipeline view"
                - "Fill in the fields on your own open deals as a test"
                - "Remove any field reps still leave blank after a month"
            - name: Polite disqualification scripts for calls and email
              description: |-
                ## Purpose
                Many reps keep dead deals open because they do not know how to end them without sounding rude or burning a future opportunity. Short, honest scripts that name the gap, such as no budget this year or no access to the decision maker, and offer a specific reason to reconnect, let a seller close the file and keep the relationship. Buyers often respect the candour, and some come back sooner because of it.

                ## Milestones
                1. A short email for closing a deal with no funded need.
                2. A call script for when the buyer cannot or will not involve the decision maker.
                3. A message for a deal whose timeline has slipped beyond the planning horizon.
                4. Each script used on a real deal and adjusted after the response.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three disqualification scripts written, each used at least once on a real deal and revised after the buyer's reply."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a short email that closes a deal with no funded need"
                - "Draft a call script for when the decision maker stays out of reach"
                - "Write a message for a timeline that has moved past your planning horizon"
                - "Send one of the scripts to a real stalled deal this month"
            - name: Weekly qualification check on new opportunities
              description: |-
                ## Purpose
                New opportunities are cheapest to disqualify in their first fortnight, before demos, proposals and hope have piled up. A fifteen-minute weekly check of every opportunity created in the last seven days, against the entry bar and the scorecard, catches the meeting that should have stayed a lead. Over a quarter it changes what reps bother to create.

                ## Milestones
                1. A weekly fifteen-minute slot with a list of the opportunities created that week.
                2. Each new opportunity confirmed against the entry bar or moved back to lead.
                3. A first scorecard filled in on every opportunity that stays.
                4. Twelve consecutive weekly checks completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly checks completed, each recording which new opportunities stayed and which went back to lead."
                cadence: rolling
              tasks:
                - "Save a CRM view of opportunities created in the last seven days"
                - "Check each new opportunity against the entry bar and record the outcome @recurring(weekly:tue)"
                - "Move any opportunity that fails the bar back to lead with a note"
                - "Count how many new opportunities were sent back this month"
            - name: Pre-call qualification gap list
              description: |-
                ## Purpose
                Every buyer conversation is a chance to close a qualification gap, but only if the rep walks in knowing which one. Spending five minutes before each call on the two weakest elements of that deal, and writing one question for each, turns routine check-ins into qualifying calls. Done every Monday for the week's meetings, it raises scores without adding a single extra call.

                ## Milestones
                1. The two weakest elements identified for every deal with a meeting this week.
                2. One planned question written for each gap before the call.
                3. Answers logged into the scorecard straight after the call.
                4. A month of meetings prepared this way, with the score changes visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks in which every scheduled buyer meeting had two named gaps and planned questions recorded beforehand."
                cadence: rolling
              tasks:
                - "List this week's deals with buyer meetings and their two weakest elements @recurring(weekly:mon)"
                - "Write one question for each gap in the meeting invite notes"
                - "Update the scorecard within an hour of each call"
            - name: Monthly pipeline disqualification sweep
              description: |-
                ## Purpose
                Deals that should be closed out rarely close themselves: they roll from month to month with a fresh close date and the same missing economic buyer. A monthly sweep that applies the walk-away signals to every open deal, and asks each rep to produce new evidence or close the deal, keeps the pipeline honest. Teams that do this often see coverage drop while conversion rises.

                ## Milestones
                1. A monthly sweep date fixed in the team calendar.
                2. Every open deal checked against the walk-away signals.
                3. Each flagged deal given new evidence within a week or closed as disqualified.
                4. Six monthly sweeps completed, with the value closed out recorded each time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly sweeps completed, each with flagged deals resolved within a week and the value closed out recorded."
                cadence: rolling
              tasks:
                - "Run the walk-away signals against every open deal @recurring(monthly:12)"
                - "Send each rep their flagged deals with a one-week deadline for new evidence"
                - "Close out flagged deals with no new evidence as disqualified"
                - "Record the number and value of deals closed out in each sweep"
            - name: Score refresh at every stage change
              description: |-
                ## Purpose
                A qualification score taken in week one says little about the deal in month four, yet many teams never update it. Tying a refresh to each stage change, so a deal cannot move forward without its scorecard being reviewed, keeps the score current exactly when it matters. A Friday check catches the deals that moved without one.

                ## Milestones
                1. A rule that every stage change needs a reviewed scorecard and a new evidence note.
                2. A report listing the week's stage changes with each deal's last scorecard date.
                3. Deals moved without a refresh sent back to the rep the same week.
                4. Ninety percent of stage changes in a quarter accompanied by a refreshed score.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ninety percent of stage changes in one quarter have a scorecard reviewed on or after the change date."
                cadence: rolling
              tasks:
                - "Write the rule that a stage change needs a reviewed scorecard"
                - "Build a report of stage changes with the last scorecard date beside each"
                - "Check the week's stage changes for missing refreshes @recurring(weekly:fri)"
                - "Work out the share of stage changes with a refreshed score at quarter end"
            - name: Economic buyer verification log
              description: |-
                ## Purpose
                The economic buyer is the element reps most often claim and least often prove: the contact says the director will sign, and the director has never heard of the vendor. A log of how the economic buyer was verified on each deal, such as attending a meeting, replying in writing or approving the budget line, separates real access from second-hand reassurance. Reviewing it monthly shows which deals carry the biggest hidden risk.

                ## Milestones
                1. A verification method recorded for the economic buyer on every deal above the audit threshold.
                2. Deals where the economic buyer is named but unverified flagged.
                3. A plan for first contact with the economic buyer on each flagged deal.
                4. Unverified economic buyer value falling quarter on quarter.

                ## Notes
                This log records whether the economic buyer is real. Mapping the wider committee and planning how to win each person belongs with stakeholder mapping.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deal above the audit threshold records how the economic buyer was verified, with unverified deals flagged and a contact plan for each."
                cadence: rolling
              tasks:
                - "Add a how-verified note to the economic buyer field on your largest deals"
                - "Flag every deal where the economic buyer is named but unverified"
                - "Review flagged deals and agree a first-contact plan for each @recurring(monthly:19)"
            - name: Champion tests in the qualification record
              description: |-
                ## Purpose
                Reps call anyone friendly a champion, but a coach who likes you is not the same as someone with power who sells for you when you are not in the room. Recording three tests on every deal, whether the champion has influence over the decision, has a personal stake in the outcome and has done something hard for you, turns champion from a feeling into evidence. Deals with an untested champion are the ones that go quiet in the last month.

                ## Milestones
                1. The three champion tests written into the scorecard with a pass or fail for each.
                2. Every deal above the audit threshold tested, with evidence behind each pass.
                3. Contacts who are coaches rather than champions labelled honestly.
                4. A champion development action agreed on every deal that fails a test.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deal above the audit threshold records three champion tests with evidence, and each failing deal has an agreed development action."
                cadence: rolling
              tasks:
                - "Add influence, personal stake and action taken as champion tests in the scorecard"
                - "Test the champion on each of your top five deals and note the evidence"
                - "Relabel contacts who fail the tests as coaches"
                - "Retest champions on every late-stage deal @recurring(monthly:22)"
            - name: Quarterly qualification calibration between managers
              description: |-
                ## Purpose
                Two managers with the same scorecard can still score the same deal very differently, and reps quickly learn which one is lenient. A quarterly session where managers score three anonymised deals separately, then compare and settle the differences, keeps the bar level across teams and regions. It is also where the definitions get sharpened.

                ## Milestones
                1. Three real deals chosen and anonymised for each session.
                2. Each manager's independent scores collected before discussion.
                3. Every disagreement of more than one level discussed and settled.
                4. Changes to definitions or the scorecard recorded and shared.

                ## Notes
                Start from the **Meeting notes** template so the decisions from every session are kept in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly calibration sessions held in a year, each with independent scores, settled disagreements and recorded definition changes."
                cadence: cyclic
              tasks:
                - "Choose and anonymise three open deals for the next session"
                - "Collect each manager's independent scores before the meeting"
                - "Hold the calibration session and settle every gap of more than one level @recurring(quarterly)"
                - "Publish any definition changes to the team the same week"
            - name: Nurture list for parked and disqualified deals
              description: |-
                ## Purpose
                Disqualifying a deal today does not mean it will never be a deal: budgets get set next year, a new leader arrives, the pain gets worse. A short list of parked deals, each with the reason it stalled and the trigger that would reopen it, lets reps walk away without losing the account. A monthly look keeps the list alive without turning it back into pipeline.

                ## Milestones
                1. Every deal disqualified in the last six months on the list with its reason.
                2. A reopening trigger written for each, such as a new budget year or a leadership change.
                3. A light-touch contact date set for each parked account.
                4. At least one parked deal reopened on new evidence within a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A nurture list holding every disqualified deal from the last six months, each with a reason, a reopening trigger and a next contact date."
                cadence: rolling
              tasks:
                - "List every deal closed as disqualified in the last six months"
                - "Write the trigger that would make each one worth reopening"
                - "Check the parked list for triggers that have happened @recurring(monthly:8)"
                - "Reopen a parked deal only when it passes the entry bar again"
            - name: Meeting acceptance criteria for sales development handoffs
              description: |-
                ## Purpose
                When sales development reps are paid on meetings booked and account executives on deals won, the two sides quietly disagree about what a good meeting is. Written acceptance criteria, usually a light BANT or CHAMP check, and a weekly review of accepted and rejected meetings settle the argument with evidence. The rejection reasons also show where prospecting needs to change.

                ## Milestones
                1. Three or four acceptance criteria agreed by the sales development and closing managers.
                2. A rejection reason recorded on every declined meeting.
                3. A weekly review of accepted and rejected meetings held by both managers.
                4. The rejection rate tracked for a quarter and discussed at the quarterly review.

                ## Notes
                Keep these criteria lighter than full qualification. A sales development rep can confirm a need and a sponsor; the account executive's discovery does the rest.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written meeting acceptance criteria, a rejection reason on every declined meeting and a quarter of weekly accepted versus rejected reviews."
                cadence: rolling
              tasks:
                - "Draft three or four acceptance criteria with both managers in one meeting"
                - "Add a rejection reason field for every declined meeting"
                - "Review the week's accepted and rejected meetings with both managers @recurring(weekly:thu)"
            - name: Learning MEDDICC element by element
              description: |-
                ## Purpose
                Most sellers can recite what the letters stand for and still struggle to apply them on a call. Working through one element a week for seven weeks, reading a short explanation, applying it to one live deal and writing down what was learned, builds the judgement a one-day workshop cannot. By the end the scorecard reads as a set of questions you know how to answer.

                ## Milestones
                1. A seven-week study plan with one element per week.
                2. A short written explanation of each element in your own words.
                3. Each element applied to one live deal, with the finding noted.
                4. A final confidence self-score on every element, with the weakest named for practice.

                ## Notes
                Start from the **Course** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Seven weekly study notes, each applying one element to a live deal, plus a final confidence self-score on all seven."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up a seven-week plan from the course template with one element per week"
                - "Read a short guide to this week's element and summarise it in your own words"
                - "Apply the element to one live deal and note what you found"
                - "Score your confidence on all seven elements at the end"
            - name: Where BANT works and where it breaks
              description: |-
                ## Purpose
                BANT still works well for fast, single-buyer deals, but it misleads in committee purchases where budget is created after the need is proven and authority is spread across five people. Understanding its blind spots, and the question each letter is really asking, helps reps use it without being fooled by it. It is also the quickest framework to teach a new sales development rep.

                ## Milestones
                1. The four BANT letters rewritten as the question each one is really trying to answer.
                2. Three deal types listed where BANT predicts outcomes well in your business.
                3. Three situations listed where BANT gives a false pass or a false fail.
                4. A one-page guide for using BANT on small deals shared with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to BANT in your business, covering where it works, where it misleads and the real question behind each letter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rewrite budget, authority, need and timeline as the question each really asks"
                - "List three recent deals where BANT would have predicted the outcome"
                - "List three where it would have passed a deal that later stalled"
                - "Write a one-page BANT guide for small deals"
            - name: Turning buyer pain into agreed metrics
              description: |-
                ## Purpose
                Metrics comes first in MEDDICC because a deal without a number attached competes with every other priority on the buyer's list. Learning to move a buyer from a complaint that reporting is slow to a statement that month-end close takes four days and ties up two finance staff gives both sides a measure the economic buyer cares about. The number has to come from the buyer, not from your slide deck.

                ## Milestones
                1. Five questions practised that turn a complaint into a measured cost or delay.
                2. Metrics written in the buyer's own words on three live deals.
                3. Each metric confirmed back to the buyer in a follow-up email.
                4. The metrics carried into the proposal or business case unchanged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Buyer-confirmed metrics recorded in the buyer's own words on three live deals, each confirmed in a follow-up email."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five questions that turn a complaint into a measured cost or delay"
                - "Use the questions on your next three buyer follow-up calls"
                - "Email each buyer the metric in their words and ask them to correct it"
                - "Check the metric appears unchanged in the proposal"
            - name: Decision criteria versus decision process
              description: |-
                ## Purpose
                Plenty of reps mix the two: decision criteria are what the buyer will judge vendors on, while the decision process is the sequence of steps and people that turns a preference into a signed order. Drawing both separately for a live deal, criteria as a ranked list and process as a dated sequence, shows quickly which one you know and which you are guessing. The process is usually the one with gaps.

                ## Milestones
                1. The difference between criteria and process explained in two sentences in your own words.
                2. Decision criteria for one live deal written as a ranked list confirmed by the buyer.
                3. The decision process for the same deal drawn as a dated sequence of steps and approvers.
                4. Gaps in each marked, with a question planned to close them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For one live deal, a buyer-confirmed list of decision criteria and a dated decision process, with gaps marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write two sentences explaining criteria versus process in your own words"
                - "List the buyer's decision criteria for one live deal and ask them to rank it"
                - "Draw the decision process as dated steps from today to signature"
                - "Mark every step you have assumed rather than heard from the buyer"
            - name: Uncovering the paper process early
              description: |-
                ## Purpose
                The paper process, everything between a verbal yes and a countersigned contract, is where forecast deals go to slip a quarter. Learning to ask about legal review, procurement, security questionnaires and signatories in the first few meetings, rather than at the end, turns surprises into known steps. It is the P that MEDDPICC adds, and the one that most improves close-date accuracy.

                ## Milestones
                1. Six paper process questions written and ready for early meetings.
                2. The paper process recorded on three live deals before the proposal stage.
                3. Typical durations for legal, procurement and security noted from past deals.
                4. Close dates on those deals adjusted to reflect the real paper process.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The paper process, with approvers and expected durations, recorded on three live deals before they reach the proposal stage."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write six questions about legal, procurement, security and signatories"
                - "Ask them on three deals before the proposal stage and record the answers"
                - "Note how long each step took on your last three closed deals"
                - "Adjust close dates where the paper process will not fit"
            - name: Telling funded pain from interesting problems
              description: |-
                ## Purpose
                Buyers will happily talk about problems nobody will ever spend money fixing. Learning to test whether pain is funded, by asking what it costs, who owns it, what has been tried and what happens if nothing changes this year, separates a live deal from a pleasant conversation. A deal whose pain has no owner and no cost is a research call, not an opportunity.

                ## Milestones
                1. Four tests for funded pain written down.
                2. Each test applied to your five largest open deals.
                3. Deals with unowned or uncosted pain marked as at risk.
                4. A follow-up question planned for every at-risk deal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four funded pain tests applied to the five largest open deals, with at-risk deals marked and a follow-up question planned for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write four tests for whether a buyer's pain is funded"
                - "Apply the tests to your five largest open deals"
                - "Mark deals where the pain has no owner or no cost"
                - "Plan one follow-up question for each marked deal"
            - name: Asking about budget without flinching
              description: |-
                ## Purpose
                Budget is the question reps most often skip, only to discover at proposal stage that the buyer had a fifth of the price in mind. Practising a few direct, unembarrassed ways to ask, including ranges, how similar purchases were funded and who approves spend above a threshold, makes the question routine. Asking early costs nothing; asking late can cost the deal.

                ## Milestones
                1. Three budget questions written in your own voice.
                2. Each practised aloud in a role-play with a colleague.
                3. Budget asked on every new deal for a month, with the answers recorded.
                4. A note on which phrasing produced the most useful answers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Budget asked and the answer recorded on every new deal for one month, with the most useful phrasing noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write three ways to ask about budget that sound like you"
                - "Practise them aloud with a colleague playing a guarded buyer"
                - "Ask about budget on every new deal this month and record the answer"
                - "Note which phrasing got the clearest answer"
            - name: Spotting happy ears and false positives
              description: |-
                ## Purpose
                Happy ears means hearing a buyer's politeness as commitment: they loved the demo, so the deal must be real. Learning the common false positives, such as enthusiasm without a next step, a champion who cannot name the approvers or a timeline with no event driving it, protects reps from their own optimism. Reviewing two lost deals for these signs is the fastest way to learn them.

                ## Milestones
                1. A list of eight common false positive signals written for your market.
                2. Two lost deals reviewed for signals that were present but ignored.
                3. Your own open deals checked against the list.
                4. At least one deal re-scored downward where a false positive had counted as evidence.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of eight false positive signals, two lost deals reviewed against it and at least one open deal re-scored on the findings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write eight signals that look like buying intent but are not"
                - "Review two lost deals for signals that were there and ignored"
                - "Check your own open deals against the list"
                - "Re-score any deal where a false positive was counted as evidence"
            - name: Monthly qualification role-play practice
              description: |-
                ## Purpose
                Qualifying questions feel awkward on a live call until they have been said out loud a dozen times. A monthly half-hour role-play, with one rep playing a buyer briefed on a real deal's hidden gap and another trying to find it, builds the instinct safely. Rotating the hidden gap, the economic buyer one month and the paper process the next, covers the whole framework within a year.

                ## Milestones
                1. A pool of buyer briefs, each with one hidden qualification gap.
                2. A monthly thirty-minute role-play slot in the team calendar.
                3. Every rep has played both seller and buyer at least twice.
                4. Gaps found and missed recorded to show which elements the team handles worst.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Six monthly role-plays held, with every rep having played both parts twice and found and missed gaps recorded."
                cadence: rolling
              tasks:
                - "Write five buyer briefs, each hiding one qualification gap"
                - "Book a thirty-minute monthly role-play slot for the team"
                - "Run the role-play and record which gaps were found @recurring(monthly:15)"
                - "Rotate the hidden gap so every element is covered within a year"
            - name: Qualification exit criteria for each pipeline stage
              description: |-
                ## Purpose
                Stages that move on activity, such as demo done or proposal sent, let a deal reach the final stage with no economic buyer at all. Adding qualification exit criteria to each stage, for example pain and metrics confirmed before a demo, economic buyer met before a proposal and paper process known before commit, makes stage a measure of what is known. It is the change that gives stage probabilities their meaning.

                ## Milestones
                1. Qualification exit criteria written for every pipeline stage.
                2. The criteria agreed with the sales leader and the owner of the sales playbook.
                3. The criteria tested on ten open deals, with mismatched stages noted.
                4. Deals in the wrong stage moved back with the rep's agreement.

                ## Notes
                Keep each stage to two or three qualification checks. Activity steps can stay in the playbook alongside them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every pipeline stage has two or three written qualification exit criteria, tested on ten open deals with mismatches corrected."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what must be known about the buyer before a deal leaves each stage"
                - "Cut each stage to its two or three most important checks"
                - "Test the criteria against ten open deals and note mismatches"
                - "Agree the criteria with the sales leader and the playbook owner"
            - name: Qualification depth by deal size
              description: |-
                ## Purpose
                Asking reps to complete a full MEDDPICC scorecard for a two-week, single-buyer purchase wastes their time and teaches them to fill it in carelessly everywhere. Setting tiers, for example a four-field check below one size, the full scorecard above it and an extra review for the largest deals, matches effort to stakes. The thresholds should come from your own deal data, not a round number.

                ## Milestones
                1. The deal size distribution for the last year pulled and charted.
                2. Two or three tiers set, with a threshold for each.
                3. The qualification required at each tier written down.
                4. The tiers applied to the current pipeline and reps told which applies to each deal.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three qualification tiers with thresholds drawn from last year's deal sizes, applied to every open deal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull last year's closed deals by size and cycle length"
                - "Set two or three size thresholds where buying behaviour clearly changes"
                - "Write what qualification each tier requires"
                - "Tag every open deal with its tier"
            - name: Adding paper process to MEDDICC
              description: |-
                ## Purpose
                Teams selling into larger organisations often find deals reaching commit and then stalling for six weeks in procurement. Deciding whether to adopt MEDDPICC, with paper process as a scored element, depends on how often late-stage slips trace back to legal, security or purchasing. A quick look at the last two quarters' slipped deals answers it.

                ## Milestones
                1. Slipped deals from the last two quarters listed with the cause of each slip.
                2. The share caused by legal, security or procurement worked out.
                3. A decision to add paper process as a scored element or not, with the reason.
                4. The scorecard and definitions updated if it is adopted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on adding paper process as a scored element, based on the causes of two quarters of slipped deals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the deals that slipped in the last two quarters and why"
                - "Work out the share that slipped in legal, security or procurement"
                - "Decide whether paper process becomes a scored element"
                - "Update the scorecard and definitions page if it does"
            - name: Qualification score versus win rate analysis
              description: |-
                ## Purpose
                Keeping a scorecard is only worth the effort if higher scores really win more often. Comparing qualification scores at the proposal stage with eventual outcomes, across at least thirty closed deals, shows whether the score predicts anything and which elements matter most in your business. Repeating it each quarter keeps the scorecard tuned to how your buyers actually buy.

                ## Milestones
                1. Proposal-stage scores collected for at least thirty closed deals.
                2. Win rate charted by total score band.
                3. Each element's link to winning compared, with the strongest and weakest named.
                4. One scorecard change proposed from the findings.

                ## Notes
                Start from the **Metrics log** template to keep each quarter's results side by side.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Win rate by score band and by element calculated for at least thirty closed deals, with one scorecard change proposed."
                cadence: cyclic
              tasks:
                - "Export proposal-stage scores and outcomes for at least thirty closed deals"
                - "Chart win rate by total score band"
                - "Compare how each element relates to winning"
                - "Rerun the analysis and log the results in the metrics log @recurring(quarterly)"
            - name: Qualification rule for the commit forecast category
              description: |-
                ## Purpose
                Commit should mean a rep would stake their reputation on the deal, yet deals reach commit with an unmet economic buyer and an unknown paper process. A minimum qualification rule for commit, such as economic buyer verified, decision process dated and paper process known, gives the forecast call an objective test. Checking commit deals against it each week removes the arguments.

                ## Milestones
                1. A written qualification minimum for commit and for best case.
                2. Current commit deals checked against the minimum.
                3. Deals that fail moved to best case with the gap noted.
                4. Commit accuracy tracked for two quarters after the change.

                ## Notes
                This sets the qualification test only. How the forecast is built and rolled up is separate work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written qualification minimum for commit and best case, applied to commit deals every week for a full quarter."
                cadence: rolling
              tasks:
                - "Write the qualification minimum for commit and for best case"
                - "Move current commit deals that fail the minimum to best case with the gap noted"
                - "Test commit deals against the rule before the forecast call @recurring(weekly:wed)"
                - "Compare commit accuracy for the two quarters after the change"
            - name: Shortening time to disqualify
              description: |-
                ## Purpose
                Most of the cost of a bad deal is the weeks spent on it before it is closed out. Measuring the average days from creation to disqualification, and setting a target to cut it, moves the hard conversations earlier, where they belong. Once a month, look at the slowest disqualifications and ask what could have been known sooner.

                ## Milestones
                1. Average days from creation to disqualification worked out for the last six months.
                2. A target set, for example half the current average.
                3. The five slowest disqualifications reviewed for the signal that was missed.
                4. The average tracked monthly for two quarters.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Average days to disqualify measured monthly for two quarters against a written target, with missed signals turned into rules."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out the average days from creation to disqualification over six months"
                - "Set a target for how much earlier deals should be closed out"
                - "Review the slowest disqualifications for the missed signal @recurring(monthly:3)"
                - "Turn the earliest missed signal into a new walk-away rule"
            - name: Agent-drafted qualification summaries from call notes
              description: |-
                ## Purpose
                Updating the scorecard after calls is the step reps skip, because it means rereading notes and translating them into fields. Having the agent draft an element-by-element summary from call notes or a transcript, which the rep then corrects, cuts the update to a few minutes and keeps evidence quotes attached. The rep stays responsible for every score; the draft only removes the typing.

                ## Milestones
                1. A prompt that asks for evidence per element, quoting the buyer's own words.
                2. Summaries drafted for five recent calls and checked by the rep.
                3. Errors in the drafts noted and the prompt adjusted.
                4. A decision on whether drafted summaries become standard.

                ## Notes
                Never let a drafted summary raise a score on its own. A score changes only when the rep confirms the evidence.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Five agent-drafted qualification summaries checked by reps, with errors noted and a recorded decision on standard use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft an element-by-element summary from one call's notes"
                - "Check the draft against your memory of the call and correct it"
                - "Repeat on four more calls and note the mistakes it makes"
                - "Decide whether drafted summaries join the post-call routine"
            - name: Qualification framework rollout workshop
              description: |-
                ## Purpose
                Sending a new scorecard by email changes nothing; reps need to see it applied to their own deals. A half-day workshop that walks through the definitions, scores two real deals together and ends with every rep scoring their own top three gives the framework a starting line. Set the date and the follow-up before announcing it.

                ## Milestones
                1. A date and a room or call booked with the whole team.
                2. An agenda covering definitions, two worked deals and individual scoring.
                3. Every rep leaving with their top three deals scored.
                4. A follow-up check booked for two weeks later.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rollout workshop held with every rep attending, each leaving with their three largest deals scored and a follow-up date booked."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book a half-day slot with the whole team"
                - "Choose two real deals to score together in the session"
                - "Prepare the agenda, definitions page and scorecard handouts"
                - "Book the two-week follow-up check before the workshop ends"
            - name: Quarter-start pipeline qualification scrub
              description: |-
                ## Purpose
                Reps are most willing to let go of deals in the first week of a quarter, when the old number is closed and the new one still feels far away. A scrub in that week, where every rep re-scores their pipeline and closes what fails the entry bar, gives the quarter an honest starting coverage figure. Repeating it every quarter keeps the habit from depending on one keen manager.

                ## Milestones
                1. A scrub session booked in the first week of each quarter.
                2. Every rep's pipeline re-scored against the current scorecard.
                3. Deals failing the entry bar closed out or moved back to lead.
                4. Starting coverage before and after the scrub recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A scrub held in the first week of the quarter, with every pipeline re-scored and coverage before and after recorded."
                cadence: cyclic
              tasks:
                - "Book the scrub session for the first week of the quarter @recurring(quarterly)"
                - "Ask every rep to re-score their pipeline before the session"
                - "Close out or move back every deal that fails the entry bar"
                - "Record pipeline coverage before and after the scrub"
            - name: Qualification gate before a proof of concept
              description: |-
                ## Purpose
                Proofs of concept can tie up a solutions engineer for three weeks, and buyers sometimes request one to educate themselves or to give an incumbent a benchmark. Requiring a short qualification check first, covering written success criteria, a committed economic buyer and an agreed decision if the proof succeeds, protects scarce presales time. Run it whenever a buyer asks for a trial or pilot.

                ## Milestones
                1. Four conditions written that a deal must meet before a proof of concept.
                2. The conditions agreed with the head of solutions engineering.
                3. The next proof of concept request run through the gate, with the outcome recorded.
                4. Proof of concept win rate compared before and after the gate after two quarters.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Written proof of concept entry conditions, agreed with presales, applied to the next request with the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write four conditions a deal must meet before a proof of concept"
                - "Agree the conditions with the head of solutions engineering"
                - "Run the next proof of concept request through the gate"
                - "Compare proof of concept win rates two quarters after the gate starts"
            - name: Large-deal qualification review board
              description: |-
                ## Purpose
                Deals above a certain size deserve a second pair of eyes before a proposal goes out, because weak qualification there costs weeks of senior time. A monthly board where reps present deals above the threshold against the scorecard, and leave with a pass, a fix list or a walk-away, catches gaps the rep is too close to see. Keep it short: ten minutes per deal, scorecard on screen.

                ## Milestones
                1. A deal size threshold and a monthly board date agreed.
                2. A one-page presentation format built on the scorecard.
                3. Every deal above the threshold presented before its proposal is sent.
                4. Outcomes of pass, fix list or walk-away recorded and revisited the next month.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every deal above the threshold presented to the board before its proposal for two quarters, each with a recorded outcome."
                cadence: cyclic
              tasks:
                - "Agree the deal size that triggers a board review"
                - "Write a one-page board format built on the scorecard"
                - "Hold the review board for every deal above the threshold @recurring(monthly:10)"
                - "Revisit last month's fix lists at the start of each board"
            - name: Ninety-day framework adoption checkpoint
              description: |-
                ## Purpose
                Ninety days after rollout is when a framework either becomes how the team works or quietly fades into a field nobody updates. A dated checkpoint that measures scorecard completion, evidence quality and disqualification rates, and compares them with the baseline audit, shows which it is. It is also the moment to cut what reps are ignoring.

                ## Milestones
                1. Scorecard completion rate on open deals measured.
                2. Ten scorecards sampled for real evidence notes rather than placeholder text.
                3. Pipeline qualification bands compared with the baseline audit.
                4. A short list of changes agreed, including anything to drop.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ninety-day checkpoint report comparing completion, evidence quality and pipeline bands with the baseline, with agreed changes listed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Measure the share of open deals with a complete scorecard"
                - "Sample ten scorecards and check the evidence notes are real"
                - "Compare pipeline qualification bands with the baseline audit"
                - "Agree what to change or drop with the sales leader"
            - name: Qualifying in your first quarter as a new rep
              description: |-
                ## Purpose
                New sellers get the same scorecard as everyone else but none of the instinct for when a buyer is stringing them along. A first-quarter plan, scoring every deal with a manager or buddy for the first month and then alone with weekly spot checks, builds judgement before bad habits set. New reps also gain most from disqualifying early, because their pipeline is small and their time is the one thing they control.

                ## Milestones
                1. Definitions and the question bank read in the first week.
                2. Every deal in the first month scored jointly with the manager or a buddy.
                3. From month two, deals scored alone and spot-checked weekly.
                4. At least one deal disqualified on evidence in the first quarter.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deal in the first quarter scored, jointly in month one and spot-checked after, with at least one evidence-based disqualification."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the definitions page and question bank in your first week"
                - "Book a weekly scoring session with your manager or buddy for month one"
                - "Score your deals alone from month two and send them for spot checks"
                - "Disqualify at least one deal on evidence and talk it through with your manager"
            - name: Qualification inspection in manager one-to-ones
              description: |-
                ## Purpose
                Managers who ask how a deal is going get a story; managers who ask what the economic buyer said last week get evidence. Building two or three qualification questions into every one-to-one, and picking one deal a month for a full evidence audit, makes the scorecard part of how the team is led rather than an admin chore. Reps fill in what managers actually look at.

                ## Milestones
                1. Two or three standard qualification questions added to the one-to-one agenda.
                2. The questions asked in every one-to-one for a month.
                3. One deal per rep audited in full each month, with evidence checked against the CRM.
                4. Patterns from the audits shared with the team without naming individuals.

                ## Notes
                Start from the **1:1** template and add the qualification questions as a fixed section.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Qualification questions asked in every one-to-one for a quarter, with one full evidence audit per rep each month."
                cadence: rolling
              tasks:
                - "Add two or three qualification questions to your one-to-one agenda"
                - "Ask what evidence supports the score on each rep's largest deal"
                - "Audit one deal per rep in full against the CRM @recurring(monthly:17)"
                - "Share the common gaps with the team without naming anyone"
            - name: Qualifying deals with a large buying committee
              description: |-
                ## Purpose
                Enterprise purchases often involve six to ten people, and a deal can score well on one contact's word while the rest of the committee has never been asked. Qualifying across the committee means confirming the decision criteria and process with more than one person, and checking that the economic buyer and champion describe the same problem. Disagreement inside the buyer is a qualification finding, not a detail.

                ## Milestones
                1. Decision criteria confirmed with at least three members of the committee.
                2. The decision process confirmed with someone other than the champion.
                3. Differences in how committee members describe the problem written down.
                4. The scorecard lowered wherever single-source evidence was overstated.

                ## Notes
                Who sits on the committee and how to win each of them is stakeholder mapping. Here the only question is whether what you were told is confirmed by more than one voice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "On one enterprise deal, criteria confirmed by three committee members, the process confirmed beyond the champion and single-source scores corrected."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Mark which scorecard elements on your largest deal rest on one contact"
                - "Confirm the decision criteria with two more committee members"
                - "Check the decision process with someone other than your champion"
                - "Lower any score that rested on a single voice"
            - name: Qualifying partner-sourced and referral deals
              description: |-
                ## Purpose
                Referred deals arrive feeling pre-qualified, so reps skip steps they would never skip on a cold lead. An introduction tells you the pain may be real, not that budget, authority or timing exist. A short briefing call with the referring partner, plus the same scorecard within two weeks, keeps warm deals from turning into long, polite stalls.

                ## Milestones
                1. A short list of questions to ask the referring partner before the first meeting.
                2. Referred deals scored on the standard scorecard within two weeks of creation.
                3. Referred and cold deals compared on score and win rate after two quarters.
                4. Feedback sent to each partner on the deals they referred.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Partner briefing questions written and every referred deal scored within two weeks, with referred and cold deals compared after two quarters."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five questions to ask the referring partner before the first meeting"
                - "Score every referred deal within two weeks of creation"
                - "Compare referred and cold deals on score and win rate after two quarters"
                - "Tell each partner how their referred deals scored and why"
            - name: Qualifying expansion and renewal opportunities
              description: |-
                ## Purpose
                Selling more to an existing customer feels safe, but expansion deals stall for the same reasons new ones do: a new budget holder, a different decision process or no pain in the new department. Applying the framework to expansions with fresh evidence, rather than assumptions carried over from the original sale, stops account plans filling with deals that never close. It also shows when an upsell is really a new sale to a new buyer.

                ## Milestones
                1. The scorecard adapted for expansions, noting which elements carry over and which never do.
                2. Every open expansion deal scored with fresh evidence.
                3. Expansions with a new economic buyer treated as new sales.
                4. Expansion win rate by score reviewed after two quarters.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An expansion version of the scorecard in use, with every open expansion deal scored on fresh evidence."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List which elements can carry over from the original sale and which cannot"
                - "Score every open expansion deal using fresh evidence only"
                - "Flag expansions where the economic buyer is new to you"
                - "Review expansion win rate by score after two quarters"
            - name: Re-qualifying an inherited pipeline
              description: |-
                ## Purpose
                Inheriting a territory or a departed colleague's accounts usually means inheriting their optimism too: close dates, stages and champion names that were never tested. Re-qualifying every inherited deal in the first month, with a call to each main contact, tells you which deals are real before you build a forecast on them. Buyers expect a new rep to ask basic questions, so this is the cheapest moment to ask.

                ## Milestones
                1. Every inherited deal listed with its recorded stage, value and close date.
                2. A re-introduction call held with the main contact on each deal.
                3. Each deal re-scored on what the buyer said, not what the CRM said.
                4. Failing deals closed out or moved back before your first forecast.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every inherited deal re-scored after a call with its main contact, with failing deals closed before your first forecast."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every inherited deal with its stage, value and close date"
                - "Book a re-introduction call with the main contact on each"
                - "Re-score each deal on what the buyer said on the call"
                - "Close or move back failing deals before your first forecast"
            - name: Qualifying the competition and the do-nothing option
              description: |-
                ## Purpose
                Scorecards usually fill the competition element with a rival's name, while the strongest competitor in many deals is the buyer doing nothing or building it themselves. Qualifying competition properly means knowing which alternatives the buyer is weighing, how each scores on their decision criteria and what would make staying put attractive. Experienced sellers ask the buyer directly what happens if they choose none of the options.

                ## Milestones
                1. Every alternative the buyer is considering listed, including doing nothing and building in-house.
                2. Each alternative scored against the buyer's stated decision criteria.
                3. The buyer's answer to what happens if they choose nothing recorded.
                4. The competition score on the deal updated with this evidence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "On three live deals, every alternative including doing nothing scored against the buyer's criteria, with the buyer's own view recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every alternative the buyer is weighing, including doing nothing"
                - "Score each alternative against the buyer's decision criteria"
                - "Ask the buyer what happens if they choose none of the options"
                - "Update the competition score on three live deals"
            - name: Scorecard tailoring for multi-product sales
              description: |-
                ## Purpose
                Companies selling several products into the same account find one scorecard fits none of them well: the economic buyer for a security add-on is rarely the one for the core platform. Tailoring definitions and evidence examples per product line, while keeping the elements and scale identical, keeps reporting comparable and qualification accurate. Do it only once a single scorecard has been in use for at least two quarters.

                ## Milestones
                1. Product lines listed where the buyer, criteria or paper process differ materially.
                2. Product-specific evidence examples written for each differing element.
                3. The core elements and scoring scale kept identical across products.
                4. Win rate by score checked per product after two quarters.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Product-specific evidence examples written for each product line that differs, with the scoring scale unchanged and win rate checked per product."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List product lines where buyer, criteria or paper process differ"
                - "Write product-specific evidence examples for each differing element"
                - "Confirm the scoring scale stays identical across every product"
                - "Check win rate by score per product after two quarters"
            - name: Qualifying usage-based and consumption deals
              description: |-
                ## Purpose
                When revenue depends on how much a customer uses rather than what they sign, a deal can close on time and still produce almost nothing. Qualifying consumption deals adds questions a seat-based scorecard misses: who will drive adoption, which workloads will move and when, and what usage estimate the buyer will stand behind. Getting those answers before signature protects both the forecast and the customer's first year.

                ## Milestones
                1. Three to five consumption-specific questions added to the scorecard.
                2. A buyer-confirmed usage estimate recorded on every consumption deal above the threshold.
                3. The named owner of adoption on the buyer's side recorded.
                4. Actual first-quarter usage compared with the estimate on closed deals.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Consumption questions in the scorecard and a buyer-confirmed usage estimate on every large consumption deal, compared with actual usage after the first quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write three to five questions about adoption owners and usage timing"
                - "Add them to the scorecard for consumption deals"
                - "Record a buyer-confirmed usage estimate on each large consumption deal"
                - "Compare first-quarter usage with the estimate on closed deals"
            - name: Qualification certification for every seller
              description: |-
                ## Purpose
                Once the framework is established, a light certification proves each seller can apply it, not just name the letters. A short assessment, scoring a written case deal against the definitions and defending the scores to a manager, makes qualification a skill with a standard. Recertifying yearly with a fresh case keeps the bar from drifting as the team grows.

                ## Milestones
                1. A written case deal with a known correct score for each element.
                2. A pass standard agreed, such as six of seven elements within one level.
                3. Every current seller assessed and the results recorded.
                4. New hires certified within their first sixty days.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every seller certified against a written case deal, with new hires certified within sixty days and a yearly recertification scheduled."
                cadence: cyclic
              tasks:
                - "Write a case deal with a known correct score for every element"
                - "Agree the pass standard with the other managers"
                - "Assess every current seller and record the results"
                - "Run recertification with a fresh case deal @recurring(yearly)"
            - name: Writing your own house qualification framework
              description: |-
                ## Purpose
                Mature sales teams often end up with a framework that is recognisably MEDDICC underneath but uses their own words, elements and evidence standards, shaped by years of win and loss data. Writing it down as a short internal standard, with the reasoning behind each element and the data that supports it, means it survives leadership changes and new hires. Only attempt it after at least four quarters of scored deals.

                ## Milestones
                1. Four quarters of score and outcome data summarised by element.
                2. Elements kept, renamed, merged or dropped, each with the evidence for the change.
                3. A short written standard covering elements, evidence levels and stage thresholds.
                4. The standard approved by sales leadership and revenue operations.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written house qualification standard, backed by four quarters of score and outcome data, approved by sales leadership and revenue operations."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Summarise four quarters of scores and outcomes by element"
                - "Decide which elements to keep, rename, merge or drop and note the evidence"
                - "Write the standard with elements, evidence levels and stage thresholds"
                - "Get sign-off from sales leadership and revenue operations"
---

# Deal Qualification (MEDDICC, BANT)

This area is for sellers, their managers and enterprise deal teams who want qualification to be a shared standard rather than each rep's private hunch. It starts with the foundations (choosing between BANT and MEDDICC, house definitions, an entry bar for opportunities, walk-away rules, an evidence-based scorecard and a baseline audit), then the weekly and monthly checks that keep scores honest, the skills behind each element, the changes and decisions that sharpen the system, the dated moments worth preparing for, the situations new reps, managers and committee deals bring, and finally specialist work for teams that have run a framework for a year or more.

What repeats is a Monday gap list before calls, a Tuesday check of new opportunities, a Wednesday commit test, a Thursday handoff review and a Friday stage-change check, monthly sweeps, verification logs, review boards and role-plays spread across the month, and a quarterly scrub, calibration session and win rate analysis. The Operational checklist, Meeting notes, Course, Metrics log and 1:1 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
