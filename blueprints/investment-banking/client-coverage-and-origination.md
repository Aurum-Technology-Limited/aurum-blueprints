---
id: investment-banking.client-coverage-and-origination
name: Client Coverage and Origination
description: "A coverage book you can run: tiered clients, relationship maps, coverage plans, a weekly pipeline, idea meetings on a rhythm, a won and lost log and the habits that turn ideas into signed mandates."
category: business
version: 1.0.0
tags: [investment-banking, client-coverage-and-origination, knowledge-worker, vice-president, managing-director, origination, client-relationships, mandates]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - meeting-notes
    - metrics-log
    - feedback-themes
    - development-plan
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Client Coverage and Origination
          description: "Building senior client relationships: coverage plans, regular idea meetings, tracking mandates won and lost, and turning ideas into paid work."
          projects:
            - name: Coverage list of your top 25 client relationships
              description: |-
                ## Purpose
                Most bankers say they cover sixty companies and genuinely know eight of them. Writing down the 25 relationships you actually hold, with the senior contact who would take your call this week, is the honest starting point for every coverage decision that follows.

                ## Milestones
                1. A list of 25 companies or sponsors where you hold a working relationship, each with one named senior contact.
                2. The date of your last substantive conversation with each contact recorded.
                3. Every client on the list checked against the firm's official coverage assignments.
                4. Gaps marked where the firm covers a client officially but nobody has spoken to them in six months.

                ## Notes
                Count only people who would return your call within two days. Names from a conference list are prospects, not relationships, and belong in a separate column.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of 25 named client relationships with a senior contact and last-contact date for each, reconciled to the firm's coverage assignments."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every company where a senior person would take your call this week"
                - "Add the named contact and the date you last spoke properly"
                - "Pull the firm's official coverage assignments for your group"
                - "Mark clients the firm covers that nobody has spoken to in six months"
            - name: Tiering clients by fee potential and access
              description: |-
                ## Purpose
                Time is the only thing a coverage banker spends, and treating all 25 clients the same means the three most likely to transact get a fraction of the attention they need. Scoring each client on likely fee events over three years and on how close you are to the decision makers sorts the book into tiers you can plan around.

                ## Milestones
                1. Each client scored on likely transaction events over the next three years.
                2. Each client scored on access: who you know, how senior, and how recently you met.
                3. Clients placed into three tiers, with no more than eight in tier one.
                4. The tiering reviewed with your group head and any disagreements noted.

                ## Notes
                High fee potential with weak access is the most valuable square on the grid: those are the relationships to build, not the ones to drop.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every client on the coverage list sits in one of three tiers, with the scoring and the group head's comments recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Score each client from one to five on likely deal events in three years"
                - "Score each client from one to five on access to the decision makers"
                - "Place clients into three tiers with eight or fewer in tier one"
                - "Walk your group head through the tiers and note where they disagree"
            - name: Relationship map for each tier one client
              description: |-
                ## Purpose
                Deals at a large company are decided by four or five people, and a banker who knows only the CFO is one resignation away from losing the client. A relationship map of the chair, chief executive, finance director, head of corporate development, treasurer and key board members shows who knows whom at your bank and where the gaps are.

                ## Milestones
                1. A map for each tier one client naming the five to eight people who shape transaction decisions.
                2. Each person tagged with the colleague at your bank who knows them best.
                3. The strength of each relationship rated as strong, working or none.
                4. One gap per client chosen to close in the next six months.

                ## Notes
                Start from the **Person** template for each key contact. Record only professional facts and what they have told you; keep personal remarks out of shared systems.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier one client has a relationship map naming its decision makers, the bank's best link to each and one gap to close."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the first tier one client and list its five to eight decision makers"
                - "Ask colleagues in other product groups who they know at that client"
                - "Rate each relationship as strong, working or none"
                - "Choose one relationship gap per client to close this half year"
            - name: One-page coverage plan per priority client
              description: |-
                ## Purpose
                Writing a coverage plan forces you to say what the client is likely to do, what the bank can offer and what you will do about it before a competitor gets there first. One page per tier one client, covering strategic situation, likely transactions, the relationship map summary and the next three actions, is enough to steer a year of meetings.

                ## Milestones
                1. A one-page plan for each tier one client with the same five headings.
                2. Likely transactions listed for each client with a rough timing window.
                3. The next three dated actions written for every plan.
                4. Plans shared with the product partners who would execute the likely deals.

                ## Notes
                A plan that runs to three pages will not be reread. If a heading needs more than four lines, the thinking is not finished yet.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each tier one client has a one-page coverage plan with likely transactions, timing and three dated next actions, shared with product partners."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree five fixed headings for every coverage plan"
                - "Draft the plan for the client most likely to transact this year"
                - "Ask the agent to turn your meeting notes into a first draft of the next plan"
                - "Send each finished plan to the product partners named in it"
            - name: Share of wallet estimate for priority clients
              description: |-
                ## Purpose
                Knowing what a client paid all banks in advisory and underwriting fees over five years, and what share came to yours, tells you whether a relationship is growing or quietly shrinking. Fee estimates from deal databases and the client's own disclosures turn a vague sense of being close to a client into a number the group can discuss.

                ## Milestones
                1. Five years of disclosed deals for each tier one client listed with the advisers and underwriters named.
                2. Estimated total fees per client from the firm's fee data or a recognised estimate source.
                3. Your bank's share of those fees calculated for each client.
                4. Clients where the share has fallen flagged for discussion.

                ## Notes
                Fee estimates are approximate. Use them to compare clients and trends, not to quote figures to the client.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A five-year fee and share of wallet estimate for every tier one client, with falling shares flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull five years of each tier one client's deals from the deal database"
                - "Note the advisers and underwriters named on each deal"
                - "Estimate your bank's share of fees per client"
                - "Refresh the share of wallet figures before planning season @recurring(yearly)"
            - name: Client contact log in the firm CRM
              description: |-
                ## Purpose
                When contact history lives in your inbox, nobody else in the bank can see that you met the CFO last week, and two colleagues end up calling the same person on the same day. A short entry in the firm's CRM after every meaningful contact protects the relationship and is often what counts when origination credit is discussed.

                ## Milestones
                1. Your CRM access confirmed and the fields your group expects understood.
                2. Every client meeting from the last month logged with date, attendees and the one-line outcome.
                3. A personal rule set for logging within two working days.
                4. Duplicate or out-of-date contact records for your clients cleaned up.

                ## Notes
                Write CRM entries as if the client might one day read them. Facts, topics and next steps only, no confidential deal names unless your firm's rules allow it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every client meeting in the last month is logged in the CRM, and new contacts are logged within two working days from now on."
                cadence: rolling
              tasks:
                - "Ask your group's CRM owner which fields they expect for a client contact"
                - "Log every client meeting from the past month"
                - "Merge or correct duplicate records for your covered clients"
                - "Check the CRM against your calendar for unlogged meetings @recurring(monthly:8)"
            - name: Conflict check and new business clearance route
              description: |-
                ## Purpose
                An idea that excites a client is wasted if the bank is already advising the other side, and a mandate accepted before clearance can embarrass everyone. Learning exactly how your firm's conflict check and new business approval work, who decides and how long it takes, lets you raise ideas confidently and avoid promising what the bank cannot do.

                ## Milestones
                1. The firm's conflict clearance and new business approval steps written out in order.
                2. The typical turnaround time for each step confirmed with the conflicts team.
                3. The point in a client conversation where clearance must be sought noted.
                4. One recent example walked through with a senior colleague.

                ## Notes
                The conflicts and legal teams decide what can be accepted. Your job is to raise the request early and describe the situation accurately.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary of the firm's conflict and new business clearance steps with turnaround times, confirmed by the conflicts team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the firm's procedure for conflict checks and new business approval"
                - "Ask the conflicts team how long a typical clearance takes"
                - "Write down when in a client conversation clearance must be requested"
                - "Walk through a recent cleared mandate with a senior colleague"
            - name: Personal origination targets agreed with your group head
              description: |-
                ## Purpose
                Origination expectations rise sharply from vice president upwards, and they are often unspoken until the year-end review. Agreeing explicit targets with your group head, such as the number of tier one clients you lead, idea meetings a quarter and mandates you are named on, makes the year's work measurable and gives the review a fair basis.

                ## Milestones
                1. Your group head's expectations for your level written down in their own words.
                2. Three to five measurable origination targets agreed for the year.
                3. The way origination credit is recorded at your bank confirmed.
                4. A mid-year check-in booked to review progress against the targets.

                ## Notes
                Targets you control, such as meetings held and ideas presented, belong beside the fee number you only partly control.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five written origination targets agreed with your group head, with a mid-year review booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your group head what origination looks like at your level"
                - "Draft three to five measurable targets for the year"
                - "Confirm how origination credit is recorded at the bank"
                - "Score yourself against the targets before each quarter ends @recurring(quarterly)"
            - name: Mandate pipeline stages from idea to engagement letter
              description: |-
                ## Purpose
                Pipelines are only useful if everyone means the same thing by their stages, and many groups mix up a client who once said it was interesting with a client about to sign. Defining stages from idea through dialogue, active discussion, pitched and engagement letter signed, with a test for each, makes forecasts believable and shows where ideas stall.

                ## Milestones
                1. Five pipeline stages defined, each with a one-line test for entry.
                2. Every current idea and live discussion placed into a stage.
                3. The stages agreed with the colleagues who share your pipeline.
                4. A rough probability attached to each stage for fee forecasting.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of five pipeline stages with entry tests, used to classify every open idea and discussion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five pipeline stages with a one-line entry test for each"
                - "Place every open idea and discussion into a stage"
                - "Agree the stage definitions with your co-coverage colleagues"
                - "Attach a rough probability to each stage"
            - name: Monday pipeline review of ideas and live mandates
              description: |-
                ## Purpose
                Ideas die quietly when nobody looks at them for a month. Twenty minutes each Monday moving every idea and live discussion to its right stage, noting the next action and the owner, keeps the pipeline honest and gives you a ready answer when the group head asks what is coming.

                ## Milestones
                1. A single pipeline sheet or CRM view holding every idea and live discussion.
                2. A Monday review held for four weeks in a row.
                3. Every line carrying a next action, an owner and a date.
                4. Ideas with no movement in 60 days closed or revived deliberately.

                ## Notes
                Start from the **Metrics log** template to keep a weekly count of ideas by stage, so the trend over a quarter is visible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pipeline is reviewed every Monday, with each line showing a next action, owner and date, for at least twelve consecutive weeks."
                cadence: rolling
              tasks:
                - "Build one pipeline view holding every idea and live discussion"
                - "Review every pipeline line and set its next action @recurring(weekly:mon)"
                - "Close or revive any idea with no movement in 60 days"
                - "Record the count of ideas at each stage in the metrics log"
            - name: Touch plan for tier one clients
              description: |-
                ## Purpose
                Senior clients notice when the only call they get from a bank comes with a pitch attached. A planned rhythm of useful contact for each tier one client, such as a note on a peer's deal, a market read before results or an introduction to a specialist, keeps you in mind between transactions without wasting their time.

                ## Milestones
                1. A target contact frequency set for each tier one client.
                2. A list of useful reasons to get in touch that do not involve a pitch.
                3. A month where every tier one client received at least one useful contact.
                4. Contacts tracked so no client goes more than six weeks without one.

                ## Notes
                Useful beats frequent. One relevant note on a competitor's refinancing is worth more than three generic market updates.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tier one client receives at least one useful, non-pitch contact a month, tracked for three months."
                cadence: rolling
              tasks:
                - "Set a target contact frequency for each tier one client"
                - "Write ten reasons to contact a client that are not a pitch"
                - "Plan the month's touches for every tier one client @recurring(monthly:4)"
                - "Flag any tier one client who has gone six weeks without contact"
            - name: Quarterly idea meetings with priority clients
              description: |-
                ## Purpose
                Mandates usually begin in a meeting where a banker brought something specific: a buyer who would pay, a financing window, an asset a competitor might sell. Booking a substantive idea meeting with each tier one client every quarter, with one or two ideas prepared and agreed internally, is the core machinery of origination.

                ## Milestones
                1. A quarterly idea meeting booked with every tier one client.
                2. One or two ideas prepared and cleared internally before each meeting.
                3. Notes and agreed next steps sent within two working days of each meeting.
                4. A record of which ideas the client asked to pursue.

                ## Notes
                Start from the **Meeting notes** template. Agree with product partners before the meeting who will present what, so the client sees one bank, not three.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each tier one client has had an idea meeting in the quarter, with ideas cleared beforehand and next steps recorded."
                cadence: cyclic
              tasks:
                - "Book the next idea meeting with each tier one client @recurring(quarterly)"
                - "Choose one or two ideas per client and clear them with product partners"
                - "Send meeting notes and next steps within two working days"
                - "Record which ideas each client asked to pursue"
            - name: Mandates won and lost log
              description: |-
                ## Purpose
                Without a record, a lost mandate becomes a story about price or bad luck, and the same mistake repeats a year later. Logging every mandate pitched, with who won, the fee if known, the client's stated reason and your own honest reason, builds the evidence for better choices about where to spend effort.

                ## Milestones
                1. A log with columns for client, mandate, competitors, outcome, fee and reasons.
                2. Every mandate pitched in the past year entered.
                3. The client's stated reason for each decision captured where known.
                4. A monthly entry routine running for at least six months.

                ## Notes
                Ask the client for feedback within two weeks of a decision, while they still remember the detail and are willing to share it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A won and lost log covering every mandate pitched in the past year, updated monthly for six months."
                cadence: rolling
              tasks:
                - "Set up a log with client, mandate, competitors, outcome, fee and reasons"
                - "Enter every mandate pitched in the last twelve months"
                - "Ask each client for feedback within two weeks of their decision"
                - "Add the month's pitched mandates and outcomes to the log @recurring(monthly:12)"
            - name: Friday follow-up sweep after client meetings
              description: |-
                ## Purpose
                Small promises made in a client meeting, such as sending a set of comparables or an introduction, are the simplest test of whether the bank is reliable. A Friday sweep of the week's meetings, checking every promised follow-up has gone out, keeps you from being the banker who said they would send something and never did.

                ## Milestones
                1. A running list of every follow-up promised in client meetings.
                2. A Friday sweep held for four weeks in a row.
                3. No promised follow-up older than five working days.
                4. Follow-ups handed to juniors tracked to completion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every promise made in a client meeting is fulfilled within five working days, checked by a weekly sweep for three months."
                cadence: rolling
              tasks:
                - "List every follow-up promised in this week's client meetings"
                - "Check each promised follow-up has been sent @recurring(weekly:fri)"
                - "Chase juniors on any follow-up delegated to them"
                - "Note any promise you could not keep and tell the client why"
            - name: Trigger event watchlist for covered clients
              description: |-
                ## Purpose
                Mandates follow events: a new chief executive, a missed guidance figure, an activist stake, a rating watch, a maturing bond, a competitor's sale. A watchlist of these triggers for each client, checked weekly, means you call about the thing the board is already discussing instead of hearing about it from the press.

                ## Milestones
                1. A list of trigger events that matter for your clients written down.
                2. News alerts or data provider alerts set for every tier one and tier two client.
                3. A weekly scan held, with each relevant trigger noted against the client.
                4. At least one client call made each month because of a trigger.

                ## Notes
                Debt maturities and lock-up expiries are dated in advance: put them on the calendar the day you find them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Alerts are set for every tier one and tier two client and a weekly trigger scan has led to at least one client call a month."
                cadence: rolling
              tasks:
                - "Write the list of trigger events that matter for your clients"
                - "Set news and data alerts for every tier one and tier two client"
                - "Scan the week's triggers and note them against each client @recurring(weekly:thu)"
                - "Add known debt maturities and lock-up expiries to your calendar"
            - name: Monthly fee pipeline forecast for the group head
              description: |-
                ## Purpose
                Group heads plan staffing and budgets on expected fees, and a banker whose forecasts are reliable gets trusted with more. A short monthly forecast of likely mandates and fee timing, weighted by stage, also shows you early when the pipeline is too thin to carry next year.

                ## Milestones
                1. A forecast format agreed with your group head.
                2. Expected fees by mandate, weighted by pipeline stage, for the next four quarters.
                3. The forecast sent on the same day each month.
                4. Last quarter's forecast compared with what actually happened.

                ## Notes
                Fee timing slips more often than fee size. Forecast closings conservatively and say so.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A stage-weighted fee forecast for the next four quarters is sent to the group head each month, with a quarterly check of accuracy."
                cadence: rolling
              tasks:
                - "Agree the forecast format with your group head"
                - "Weight each pipeline line by stage probability"
                - "Send the monthly fee forecast to the group head @recurring(monthly:25)"
                - "Compare last quarter's forecast with actual fees @recurring(quarterly)"
            - name: Annual account plan refresh for every client
              description: |-
                ## Purpose
                Coverage plans written in January are stale by September: management changes, deals close and strategies shift. A yearly refresh of every tier one and tier two plan, done before the bank's planning season, resets priorities and gives the group head an accurate view of where next year's fees should come from.

                ## Milestones
                1. Every coverage plan reread against the year's events.
                2. Tiers revised, with any client moved up or down explained.
                3. New likely transactions and next actions written for each client.
                4. The refreshed plans presented at the group's planning meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "All tier one and tier two coverage plans are refreshed and presented at the group's annual planning meeting."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Book time to refresh every coverage plan before planning season @recurring(yearly)"
                - "Reread each plan against this year's client events"
                - "Move clients between tiers and note the reason"
                - "Present the refreshed plans at the group planning meeting"
            - name: Cross-product referral log with other desks
              description: |-
                ## Purpose
                Some of a coverage banker's best ideas come from colleagues in debt markets, equity markets, corporate lending or foreign exchange who see a client's needs first. A simple log of referrals given and received, reviewed monthly, makes those partnerships visible and shows who to bring into the next client conversation.

                ## Milestones
                1. A list of named partners in each product group who touch your clients.
                2. A log of referrals given and received, with outcomes.
                3. A monthly check that every referral received has been acted on.
                4. At least one joint client meeting held with a product partner each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A referral log is kept for six months, every referral received is acted on, and a joint client meeting is held each quarter."
                cadence: rolling
              tasks:
                - "Name one partner in each product group who touches your clients"
                - "Start a log of referrals given and received"
                - "Check the referral log and act on anything outstanding @recurring(monthly:18)"
                - "Plan a joint client meeting with a product partner this quarter"
            - name: Board and results calendar for each client
              description: |-
                ## Purpose
                Boards approve deals at set meetings, finance teams go quiet before results, and strategy days are where options are framed. A calendar of each client's results dates, board meetings, annual general meeting and strategy days tells you when an idea can be heard and when a call will only irritate.

                ## Milestones
                1. Results dates, AGM dates and known strategy days collected for every tier one client.
                2. Board meeting timing estimated where it is not public.
                3. The calendar used to time the next idea meeting for each client.
                4. Closed periods around results noted so contact is timed sensibly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A calendar of results, AGM and board timing exists for every tier one client and has been used to time each idea meeting."
                cadence: cyclic
              tasks:
                - "Collect results and AGM dates for every tier one client"
                - "Ask each CFO's office when the board usually meets"
                - "Time each client's next idea meeting around their calendar"
                - "Update every client's results and board dates @recurring(quarterly)"
            - name: Reading a client's priorities from its own words
              description: |-
                ## Purpose
                Results calls, annual report letters and capital markets day presentations often say plainly what keeps a chief executive awake: a portfolio that is too wide, debt that is too high, a market they cannot win. Learning to read these documents for the client's agenda, not for the numbers, is the basis of every idea that lands.

                ## Milestones
                1. The last two results call transcripts and the latest annual report read for one tier one client.
                2. Five statements of priority or concern quoted with their source.
                3. Each statement linked to a possible transaction or service.
                4. The same exercise repeated for two more clients.

                ## Notes
                Watch for what management stops mentioning. A division that disappears from the narrative is often heading for sale.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Priority readouts for three tier one clients, each with five sourced statements linked to possible transactions."
                cadence: phased
                effort_hours_estimate: "9"
              tasks:
                - "Read the last two results call transcripts for one tier one client"
                - "Quote five statements of priority or concern with their source"
                - "Link each statement to a possible transaction or service"
                - "Repeat the exercise for two more clients"
            - name: Writing a one-page client idea
              description: |-
                ## Purpose
                Senior clients rarely read a forty-page deck they did not ask for, but they will read one page that says what the idea is, why now, what it is worth to them and what happens next. Practising the one-page idea, rewritten until a non-banker could follow it, sharpens thinking and gives clients something they can forward to their chair.

                ## Milestones
                1. A one-page format with four parts: the idea, why now, value to the client and next step.
                2. Three ideas written in that format for real clients.
                3. Each page reviewed by a senior colleague and rewritten once.
                4. At least one page sent to or discussed with a client.

                ## Notes
                If the value to the client is only a fee to the bank, it is not an idea yet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three one-page client ideas written, reviewed by a senior colleague and rewritten, with at least one discussed with a client."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the four-part format on a blank page"
                - "Draft one idea for your most active client in that format"
                - "Ask a senior colleague to mark up the page"
                - "Rewrite the page so a non-banker could follow it"
            - name: Running an idea meeting without a deck
              description: |-
                ## Purpose
                The best coverage meetings are conversations, and a banker who can only talk through slides struggles when the client pushes the book aside. Practising a 30-minute meeting led from a few notes, with questions as much as content, builds the confidence to follow the client's agenda rather than your own.

                ## Milestones
                1. A meeting outline of five points and five questions, fitting on one card.
                2. One rehearsal with a colleague playing a sceptical CFO.
                3. Two real client meetings run from the card alone.
                4. A short note after each on what the client talked about most.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two real client meetings run from a one-card outline, each followed by a note of what the client focused on."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write five points and five questions for your next client meeting"
                - "Rehearse once with a colleague playing a sceptical CFO"
                - "Run the real meeting with only the card in front of you"
                - "Note afterwards which topic the client spent the most time on"
            - name: Discovery questions that surface the next transaction
              description: |-
                ## Purpose
                Clients will often tell you about their next deal if asked the right question at the right moment, and almost never if the banker does all the talking. Building and practising a set of open questions about capital, portfolio, competitors and shareholders turns meetings into early warning of mandates.

                ## Milestones
                1. A bank of twenty open questions grouped under capital, portfolio, competition and shareholders.
                2. Three questions chosen and used in each of five client meetings.
                3. Notes recording which questions produced useful answers.
                4. The question bank trimmed to the ten that work best.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested bank of ten discovery questions, refined from use in five client meetings with notes on what each surfaced."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write twenty open questions under capital, portfolio, competition and shareholders"
                - "Choose three to use in your next client meeting"
                - "Note which questions produced useful answers"
                - "Trim the bank to the ten questions that worked best"
            - name: Fee proposals and engagement letter terms
              description: |-
                ## Purpose
                Turning an idea into paid work ends in a fee conversation, and bankers who have never seen how terms are built either give away value or lose the mandate on price. Studying how your firm structures retainers, success fees, minimum fees and expense terms, and practising the conversation, prepares you for the moment the client asks what it will cost.

                ## Milestones
                1. Three recent engagement letters from your group read for structure, with legal's guidance on what may be shared.
                2. The firm's fee approval process and who signs off on exceptions written down.
                3. A practice fee conversation held with a senior banker.
                4. Your first fee proposal drafted and approved internally.

                ## Notes
                Engagement letter terms are settled with the bank's legal team and the client's lawyers. Your role is to understand the commercial levers and follow the approval route.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The firm's fee structures and approval route are written down and a first fee proposal has been drafted and approved internally."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask legal which past engagement letters you may study"
                - "List the fee elements used: retainer, success fee, minimum fee and expenses"
                - "Write down who approves fee exceptions"
                - "Practise a fee conversation with a senior banker"
            - name: Keeping the door open after a client says no
              description: |-
                ## Purpose
                Most ideas are declined, and how a banker handles the no often decides whether the client calls back when the timing is right. Practising a short, gracious response that asks what would change their mind, and then following up months later, turns rejections into relationships.

                ## Milestones
                1. A short response written for a declined idea that thanks, asks and offers.
                2. The last three declined ideas listed with the reason given.
                3. A follow-up note planned for each, timed to when the reason might change.
                4. At least one declined idea revisited with the client.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three declined ideas have dated follow-up plans and at least one has been revisited with the client."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List your last three declined ideas and the reason each client gave"
                - "Write a short reply that thanks, asks what would change, and offers help"
                - "Set a follow-up date for each declined idea"
                - "Revisit one declined idea with the client when the reason has shifted"
            - name: Relationships with chairs and non-executive directors
              description: |-
                ## Purpose
                Large deals are approved by boards, and chairs and senior independent directors often decide which advisers the company trusts. Building appropriate relationships with a few board members, through governance events, sector dinners and introductions from the executive team, gives you a view of the company that the finance department alone cannot.

                ## Milestones
                1. Board members of each tier one client listed with any existing link to your bank.
                2. The executive team's view sought on whether contact with the board is welcome.
                3. Two board members met in an appropriate setting.
                4. A rule agreed with yourself for keeping board and executive conversations consistent.

                ## Notes
                Never go around the executive team. Board contact should be known to the chief executive or CFO, or it will cost you the relationship.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two board members of tier one clients met in appropriate settings, with the executive team aware of the contact."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the board members of each tier one client"
                - "Check with colleagues who already knows any of them"
                - "Ask the CFO whether an introduction to the chair would be welcome"
                - "Review board contacts and planned introductions @recurring(quarterly)"
            - name: Covering private equity firms as clients
              description: |-
                ## Purpose
                Financial sponsors buy, refinance and sell companies on a cycle, which makes a good sponsor relationship one of the most repeatable sources of mandates. Learning how sponsor coverage differs from corporate coverage, with fund vintages, deal partners, portfolio holding periods and a habit of rewarding bankers who bring proprietary deals, prepares you to cover them well.

                ## Milestones
                1. The structure of three sponsors you cover mapped: funds, vintages, deal partners and sector teams.
                2. Each sponsor's portfolio listed with acquisition dates and likely exit windows.
                3. The deal partners who matter for your sector identified.
                4. One idea presented to a sponsor about a portfolio company or a target.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sponsors mapped by funds, partners and portfolio exit windows, with one idea presented to a sponsor."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map one sponsor's funds, vintages and deal partners"
                - "List its portfolio companies with acquisition dates"
                - "Estimate which holdings are approaching a likely exit window"
                - "Present one idea to a deal partner at that sponsor"
            - name: Win and loss review of your last ten pitched mandates
              description: |-
                ## Purpose
                Ten pitched mandates are enough to see a pattern: losing on fee, losing to a bank with a balance sheet, losing because the relationship was with the wrong person. A structured review of the last ten, with the client feedback you could gather, gives you two or three changes to make rather than a general resolve to try harder.

                ## Milestones
                1. The last ten pitched mandates pulled from the won and lost log.
                2. Each outcome tagged with its main cause from a short fixed list.
                3. The two or three most common causes identified.
                4. One change in approach agreed for each common cause.

                ## Notes
                Start from the **Feedback themes** template to group causes. Be as honest about wins as losses: some were won on luck.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Ten pitched mandates reviewed and tagged by cause, with one agreed change for each of the two or three most common causes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the last ten pitched mandates from your log"
                - "Tag each outcome with its main cause from a fixed list"
                - "Ask the agent to group the client feedback into themes"
                - "Write one change in approach for each common cause"
            - name: Pruning the coverage list to what you can serve
              description: |-
                ## Purpose
                Coverage lists that grow every year but never shrink spread attention until no client gets enough. Deciding once a year which clients to hand to a colleague, move to lighter coverage or drop, based on the tiering and the won and lost record, frees time for the relationships most likely to pay.

                ## Milestones
                1. Clients with no meaningful contact or idea in the last year listed.
                2. Each one assigned a decision: keep, hand over, lighter coverage or drop.
                3. Handovers agreed with receiving colleagues and the group head.
                4. Each client handed over introduced personally to the new coverage banker.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every client without meaningful activity in a year has a recorded decision, with handovers introduced personally."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List clients with no meaningful contact or idea in the last year"
                - "Decide for each one: keep, hand over, lighter coverage or drop"
                - "Agree handovers with colleagues and the group head"
                - "Prune the coverage list after the annual plan refresh @recurring(yearly)"
            - name: Repairing a relationship after a lost mandate
              description: |-
                ## Purpose
                Losing a mandate to a competitor hurts most when the client was a long relationship, and the instinct to go quiet makes the next loss more likely. A deliberate repair, with a thank you, a request for honest feedback, help on the deal where appropriate and a new idea a few months later, often wins the following mandate.

                ## Milestones
                1. A thank you sent within a week of the decision.
                2. A feedback conversation held with the decision maker.
                3. Any useful help offered that does not conflict with the winning adviser.
                4. A new idea taken to the client within four months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "After a lost mandate, a feedback conversation is held and a new idea is taken to the client within four months."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send a short thank you within a week of the decision"
                - "Ask the decision maker for a frank feedback conversation"
                - "Note what the client said and share it with your team"
                - "Book a new idea meeting for three or four months later"
            - name: Agreeing credit on shared coverage clients
              description: |-
                ## Purpose
                Many clients are covered by two or three bankers across sector, country and product groups, and arguments over who originated a fee sour working relationships at exactly the wrong moment. Agreeing roles and credit splits for each shared client in advance, in writing, lets everyone work the client together.

                ## Milestones
                1. Every client you share with another banker listed with the co-coverage names.
                2. Roles agreed for each shared client: relationship lead, sector lead, product lead.
                3. Credit split principles confirmed in line with the firm's policy.
                4. The agreement noted where the group head can see it.

                ## Notes
                Settle this before a mandate arrives. Once a fee is on the table, every conversation about credit is harder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every shared client has written roles and credit principles agreed with co-coverage bankers and visible to the group head."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each client you cover jointly and the other bankers involved"
                - "Read the firm's policy on origination credit"
                - "Agree roles for each shared client with your co-coverage bankers"
                - "Record the agreed roles where the group head can see them"
            - name: Client entertainment spend against relationship return
              description: |-
                ## Purpose
                Dinners, events and travel cost real money and evenings, and some of them produce nothing but a pleasant night. Comparing a year of entertainment and travel spend per client with meetings secured and mandates won shows where that budget builds relationships and where it only fills the diary, within the firm's gifts and entertainment rules.

                ## Milestones
                1. A year of entertainment and client travel spend grouped by client.
                2. Each client's spend set beside meetings secured and mandates won.
                3. The firm's gifts and entertainment policy reread and any limits noted.
                4. Next year's entertainment plan cut or redirected based on the comparison.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A per-client comparison of entertainment spend against meetings and mandates, with next year's plan adjusted and within policy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export a year of your entertainment and travel expenses"
                - "Group the spend by client"
                - "Set each client's spend beside meetings and mandates won"
                - "Reread the firm's gifts and entertainment limits before planning next year"
            - name: Warm introduction paths to uncovered targets
              description: |-
                ## Purpose
                Cold emails to a chief executive rarely get a reply, but an introduction from a shared board member, an adviser or a former colleague usually does. Mapping a route of warm introductions to the five companies you most want to cover, through alumni, lawyers, accountants and existing clients, turns a wish list into a set of meetings.

                ## Milestones
                1. Five target companies chosen where the bank has no working relationship.
                2. Possible introducers found for each through your network and colleagues.
                3. Introductions requested for at least three targets.
                4. A first meeting held with at least two.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Introductions requested to three uncovered targets, with first meetings held with at least two."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose five companies you want to cover but have no link to"
                - "Search your network for shared directors, advisers and alumni"
                - "Ask three introducers for a short introduction"
                - "Review progress on introductions to uncovered targets @recurring(monthly:15)"
            - name: Turning a lending relationship into advisory work
              description: |-
                ## Purpose
                At banks with a balance sheet, corporate lending teams often know a client's treasurer far better than the advisory side does, and the revolving credit facility opens doors. Working with the relationship lender to understand the client's plans, without trading on credit decisions, can lead to advisory and capital markets mandates.

                ## Milestones
                1. The corporate lending relationships for your tier one and tier two clients listed.
                2. A meeting with each relevant lender to share coverage plans.
                3. A joint client meeting held with at least one lender.
                4. The firm's rules on linking lending and advisory understood and followed.

                ## Notes
                Many jurisdictions restrict tying credit to other services. Ask compliance before any conversation that links the two.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Coverage plans shared with relevant lenders and one joint client meeting held, within the firm's rules on tying."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find which corporate lenders cover your tier one and tier two clients"
                - "Ask compliance what the firm's rules are on linking lending and advisory"
                - "Meet each relevant lender to share your coverage plan"
                - "Plan one joint client meeting with a lender"
            - name: First meeting with a newly appointed CFO
              description: |-
                ## Purpose
                New finance directors review every adviser relationship in their first six months, which makes the change both the biggest risk and the biggest opening in coverage. Asking for an early meeting, arriving with a short, useful read of the company's capital position and listening more than pitching sets up the next five years.

                ## Milestones
                1. A meeting requested within four weeks of the appointment being announced.
                2. A short briefing prepared on the company's capital structure, recent deals and peer moves.
                3. The meeting held, with the CFO's priorities for the first year noted.
                4. A follow-up sent within two days with one thing the CFO asked for.

                ## Notes
                Bring something the CFO can use in their first board meeting, such as a peer comparison of debt levels, not a list of the bank's credentials.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first meeting held with a newly appointed CFO within four weeks, priorities recorded and a useful follow-up sent within two days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the CFO's office for an introductory meeting"
                - "Prepare a one-page read of the capital structure and peer moves"
                - "Note the CFO's priorities for the first year"
                - "Send one useful follow-up within two days"
            - name: Strategy session for a client's board
              description: |-
                ## Purpose
                Being invited to present to a client's board on strategic options is a sign of trust, and doing it well can define the relationship for years. Preparing a balanced view of alternatives, agreeing the scope with the chief executive beforehand and handling directors' questions without pitching makes the bank the natural adviser when the board acts.

                ## Milestones
                1. The scope, audience and time slot agreed with the chief executive.
                2. A short set of options prepared and reviewed internally, including the option to do nothing.
                3. A rehearsal held with the senior team presenting.
                4. The session delivered and directors' questions recorded for follow-up.

                ## Notes
                Directors trust balance. A session that recommends only the option that pays the bank a fee is noticed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A board strategy session delivered to an agreed scope, with directors' questions recorded and followed up within a week."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree scope, audience and timing with the chief executive"
                - "Draft the options including doing nothing"
                - "Rehearse with the senior team who will present"
                - "Record every director's question and send answers within a week"
            - name: Hosting a client roundtable dinner
              description: |-
                ## Purpose
                Small dinners of eight to twelve finance directors or chief executives discussing a shared problem, such as refinancing in a high-rate market or succession at family firms, build relationships among peers and put the bank at the centre. Getting the guest list, the topic and the follow-up right is what makes them come next time.

                ## Milestones
                1. A topic chosen that guests would discuss even without the bank present.
                2. A guest list of eight to twelve agreed and invitations sent.
                3. The dinner held under clear confidentiality rules.
                4. A personal follow-up sent to every guest within a week.

                ## Notes
                Check the firm's entertainment policy and any rules for public sector guests before inviting.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A roundtable dinner held with at least eight senior guests, each followed up personally within a week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose a topic your clients would discuss without the bank present"
                - "Draft a guest list of eight to twelve and check it with colleagues"
                - "Send invitations at least six weeks ahead"
                - "Send each guest a personal note within a week of the dinner"
            - name: Positioning before a competitive mandate tender
              description: |-
                ## Purpose
                When a client invites several banks to pitch, the outcome is often shaped in the weeks before the presentation: who you spoke to, what you learnt about the criteria and whether the decision makers already trust the team. Planning the pre-calls and positioning with the same care as the pitch itself raises the odds far more than an extra appendix.

                ## Milestones
                1. The decision makers and their selection criteria identified.
                2. Pre-calls held with at least two people involved in the decision.
                3. The team chosen to match what the client says it values.
                4. A note after the decision on what moved it, whatever the outcome.

                ## Notes
                Respect any rules the client sets for contact during the tender. Breaking them is a quick way to be excluded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Pre-calls held with two decision makers before a tender presentation, and the reasons for the outcome recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the people who will decide and what each cares about"
                - "Hold pre-calls with at least two of them"
                - "Choose the pitch team to match the client's stated priorities"
                - "Record what decided the tender once the result is known"
            - name: Handover from origination to the execution team
              description: |-
                ## Purpose
                Once the engagement letter is signed, the relationship banker who won the mandate can disappear into the next pitch, leaving the client wondering why the senior person vanished. A clean handover to the execution team, with the client's sensitivities, promises made and decision makers briefed, plus a planned senior presence through the deal, protects the relationship and the next mandate.

                ## Milestones
                1. A handover note covering the client's priorities, sensitivities and every promise made in the pitch.
                2. A kick-off meeting held with the client and the full execution team.
                3. Senior touchpoints planned for key stages of the deal.
                4. A check-in with the client one month in on how the team is working.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written handover note exists for the mandate, a kick-off is held and a senior check-in with the client takes place one month in."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a handover note with priorities, sensitivities and promises made"
                - "Brief the execution team before the kick-off meeting"
                - "Put senior touchpoints in the diary for each deal stage"
                - "Call the client one month in to ask how the team is working"
            - name: Annual client feedback on the bank's coverage
              description: |-
                ## Purpose
                Clients seldom volunteer that the bank's ideas have grown stale or that juniors keep sending wrong numbers, but they will often say so if asked in a dedicated conversation. A yearly feedback meeting with each tier one client, focused on the bank's service rather than the next deal, surfaces problems before a competitor does.

                ## Milestones
                1. Five feedback questions agreed for every tier one client.
                2. A feedback meeting held with each tier one client in the year.
                3. Answers grouped into themes and shared with the coverage team.
                4. One change made in response to each client's main comment.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every tier one client has had a feedback meeting in the year, with themes shared and one change made for each."
                cadence: cyclic
              tasks:
                - "Write five feedback questions about the bank's coverage"
                - "Book a feedback meeting with each tier one client @recurring(yearly)"
                - "Group the answers into themes for the coverage team"
                - "Make and report back one change for each client's main comment"
            - name: First origination credit as a vice president
              description: |-
                ## Purpose
                Vice presidents are judged more and more on whether clients call them directly, and the first mandate you can genuinely say you originated changes how the group sees you. Choosing two or three mid-sized clients where the senior bankers are thin, and building those relationships deliberately for a year, is the most reliable route to that first credit.

                ## Milestones
                1. Two or three clients agreed with your managing director where you can take the lead.
                2. A coverage plan and relationship map built for each.
                3. Quarterly meetings held with each client where you lead the conversation.
                4. An idea from one of them turned into a pitch or mandate with your name on it.

                ## Notes
                Agree openly with your managing director which clients you are leading, so the credit question is settled before the mandate arrives.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within a year, a pitch or mandate from a client you lead is recorded with you as originating banker."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask your MD which two or three clients you could lead"
                - "Build a coverage plan for each agreed client"
                - "Book the first meeting you will lead with each client"
                - "Log every idea from your clients in the pipeline"
            - name: Building a book as a newly promoted managing director
              description: |-
                ## Purpose
                Promotion to managing director turns origination from a bonus into the job, and many new MDs spend the first year still running deals instead of building a book. A planned first eighteen months, with a target client list, a weekly time budget for coverage and the habits of a senior relationship banker, makes the change in role real.

                ## Milestones
                1. A target client list for the first eighteen months agreed with the group head.
                2. A weekly time budget set aside for coverage, separate from execution.
                3. Execution responsibilities handed to vice presidents where possible.
                4. Progress reviewed at six and twelve months against the agreed targets.

                ## Notes
                Start from the **Development plan** template. Protect the coverage hours first; execution will always fill whatever time is left.
              priority: medium
              deadlineOffsetDays: 540
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written eighteen-month book-building plan with target clients and weekly coverage hours, reviewed at six and twelve months."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a target client list for your first eighteen months"
                - "Block fixed weekly hours for coverage in your diary"
                - "Hand one execution role to a vice president this month"
                - "Book six and twelve month reviews with your group head"
            - name: Rebuilding coverage after a lateral move
              description: |-
                ## Purpose
                Bankers who move to a new firm are hired for relationships, but restrictive covenants, garden leave and the new firm's existing coverage all shape which clients can be approached and when. A careful plan for the first year, cleared with lawyers and the new group head, rebuilds the book without legal trouble or internal turf fights.

                ## Milestones
                1. The restrictive terms in your old and new contracts reviewed with an employment lawyer.
                2. Your target clients checked against the new firm's existing coverage.
                3. A dated plan of when each client can be approached.
                4. First meetings held with clients as permitted.

                ## Notes
                Do not take client lists, files or contact exports from the old firm. Rebuild from public information and memory, as your lawyer advises.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A lawyer-reviewed, dated approach plan for target clients agreed with the new group head, with first permitted meetings held."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book a review of your contract restrictions with an employment lawyer"
                - "Check your target clients against the new firm's coverage"
                - "Draft a dated approach plan with the new group head"
                - "Hold first meetings with clients once restrictions allow"
            - name: Inheriting a client from a departing senior banker
              description: |-
                ## Purpose
                When a senior banker retires or leaves, their clients are briefly in play, and a competitor will call within days. Taking over the relationship well means a personal introduction where possible, a fast read of the history, an early meeting with something useful and honesty about what continues.

                ## Milestones
                1. A handover meeting held with the departing banker, or their notes and CRM history reviewed.
                2. The client contacted within a week of the change being announced.
                3. A first meeting held with a useful idea or read of the market.
                4. A coverage plan written for the client under your name.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The inherited client is contacted within a week, met within a month and has a coverage plan under your name."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the departing banker for a handover meeting"
                - "Read the client's CRM history and past mandates"
                - "Call the client within a week of the announcement"
                - "Write a coverage plan for the inherited client"
            - name: Supporting a managing director's coverage as an associate
              description: |-
                ## Purpose
                Associates and analysts who help a managing director with coverage, preparing briefings, tracking follow-ups and drafting ideas, learn origination years before they are asked to do it. Making this support systematic, with a standard client briefing pack and a share of the follow-up list, makes you visible to clients and indispensable to the MD.

                ## Milestones
                1. A standard pre-meeting briefing format agreed with the MD.
                2. Briefings prepared for each of the MD's client meetings for a quarter.
                3. The MD's follow-up list shared and kept current by you.
                4. At least one idea you drafted taken to a client by the MD.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A quarter of client meetings supported with standard briefings and an idea you drafted presented to a client."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree a one-page briefing format with the MD"
                - "Prepare a briefing for the MD's next client meeting"
                - "Offer to keep the MD's client follow-up list"
                - "Draft one client idea and ask the MD for comments"
            - name: Coverage at a boutique without a balance sheet
              description: |-
                ## Purpose
                Independent advisory firms cannot offer lending or underwriting, so they win on senior attention, sector depth and freedom from conflicts. Building a coverage approach around those strengths, and being clear with clients about how you work with their lending banks, turns the missing balance sheet into a selling point.

                ## Milestones
                1. The firm's three strongest arguments against large banks written down with evidence.
                2. A list of clients where independence or senior time matters most.
                3. A way of working alongside clients' lending banks described for clients.
                4. Two client conversations held using that positioning.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written boutique coverage positioning with evidence, used in two client conversations."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the firm's three strongest arguments against large banks"
                - "Find one past deal that proves each argument"
                - "List clients where independence or senior time matters most"
                - "Use the positioning in your next two client conversations"
            - name: Covering founder-led and family-owned companies
              description: |-
                ## Purpose
                Founders and family shareholders decide on timescales of decades, care about legacy and employees and often distrust bankers who arrive with a sale pitch. Coverage that starts with succession, governance and long-term options, built patiently over years with the family's other advisers, is how mandates from these companies are eventually won.

                ## Milestones
                1. Five founder-led or family-owned companies identified in your coverage.
                2. The family's other trusted advisers, such as lawyers, accountants and family office staff, mapped.
                3. A first conversation held about long-term goals, not transactions.
                4. A two-year contact plan for each company.

                ## Notes
                Family decisions often involve several generations. Know who actually holds the shares and who has a say before suggesting anything.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Five founder-led or family companies each have a mapped adviser network, a first long-term conversation and a two-year contact plan."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List five founder-led or family-owned companies in your coverage"
                - "Map each family's lawyers, accountants and family office contacts"
                - "Hold a conversation about long-term goals with one founder"
                - "Write a two-year contact plan for each company"
            - name: Multi-year dialogue with a serial acquirer
              description: |-
                ## Purpose
                Companies that buy several businesses a year are worth more as a standing relationship than as a string of pitches. Building a structured, multi-year dialogue, with an agreed target screen, regular target reviews and early sight of the client's criteria, positions the bank to bring proprietary opportunities rather than compete in auctions.

                ## Milestones
                1. The client's acquisition criteria written down and confirmed with its corporate development team.
                2. A target screen built and refreshed on an agreed cycle.
                3. Regular target review meetings held with the client.
                4. At least one target the client had not seen brought forward.

                ## Notes
                Respect any exclusivity or confidentiality the client expects about its targets, and clear conflicts before discussing any target the bank may advise.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A confirmed acquisition criteria note, a refreshed target screen and regular review meetings with one serial acquirer for a year."
                cadence: rolling
              tasks:
                - "Write the client's acquisition criteria and confirm them with corporate development"
                - "Build a first target screen against those criteria"
                - "Hold a target review meeting with the client @recurring(quarterly)"
                - "Clear conflicts before raising any target with the client"
            - name: Idea to mandate conversion analysis over three years
              description: |-
                ## Purpose
                Experienced coverage bankers know roughly how many ideas it takes to produce one mandate, and which kinds of idea convert. Analysing three years of pipeline data by client tier, idea type and source shows where origination effort actually pays and makes the case for how the group should spend its senior time.

                ## Milestones
                1. Three years of pipeline entries cleaned and classified by idea type and source.
                2. Conversion rates calculated from idea to pitch and from pitch to mandate.
                3. Differences by client tier and idea type identified.
                4. Findings presented to the group head with two recommendations.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Idea to pitch and pitch to mandate conversion rates by tier and idea type, presented to the group head with two recommendations."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export three years of pipeline entries from the CRM"
                - "Classify each idea by type and source"
                - "Calculate conversion from idea to pitch and pitch to mandate"
                - "Ask the agent to summarise the findings into two recommendations"
            - name: Succession plan for your client book
              description: |-
                ## Purpose
                Senior bankers who leave, retire or move groups often take a decade of relationships with them simply because nobody else in the bank knew the clients. Pairing each tier one client with a named successor, introducing them early and sharing the history makes the book belong to the bank and gives juniors a real path into coverage.

                ## Milestones
                1. A named successor chosen for each tier one client.
                2. Each successor introduced to the client in a working context.
                3. Relationship history and coverage plans shared with each successor.
                4. The plan reviewed every year with the group head.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every tier one client has a named successor who has met the client and holds the coverage plan, reviewed yearly."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Choose a successor for each tier one client"
                - "Bring each successor to a working meeting with the client"
                - "Share the relationship history and coverage plan with each successor"
                - "Review the succession plan with the group head @recurring(yearly)"
---

# Client Coverage and Origination

Client coverage is the part of banking that decides whether there is any work to execute: knowing a short list of companies and their decision makers well enough that you are the first call when a deal becomes real. This area starts with foundations (a tiered coverage list, relationship maps, one-page coverage plans, origination targets and clear pipeline stages), then the operating routines that keep relationships warm, the client skills of idea writing, discovery and fee negotiation, the improvements and decisions that sharpen a book, the meetings and handovers that matter most, variants for vice presidents, new and lateral managing directors, associates and boutique bankers, and specialist work such as multi-year dialogue with serial acquirers and succession for a client book.

What repeats is a Monday pipeline review, a Thursday trigger event scan and a Friday follow-up sweep, with monthly touch plans, mandate logs, fee forecasts and referral checks, quarterly idea meetings and an annual refresh of every account plan. The **Person**, **Meeting notes**, **Metrics log**, **Feedback themes** and **Development plan** templates pair with the relationship maps, idea meetings, pipeline numbers, win and loss reviews and the step into a senior role. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
