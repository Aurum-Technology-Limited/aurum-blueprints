---
id: sales-revenue.sales-territory-planning
name: Sales Territory Planning
description: "Fair, data-backed sales territories: an account universe and potential scores, balance and coverage routines, clear ownership rules, and planned redesigns that move accounts without losing deals or sellers."
category: business
version: 1.0.0
tags: [sales-revenue, sales-territory-planning, manager, enterprise, team, territory-design, account-assignment, coverage]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - one-on-one
    - risk-register
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Territory Planning
          description: "Dividing markets, regions or account lists fairly between reps, balancing opportunity and workload, and revisiting territories as the team grows."
          projects:
            - name: Territory planning objectives and design principles
              description: |-
                ## Purpose
                Before anyone draws a line on a map, the leadership team needs to agree what the territories are for: faster coverage of new logos, deeper penetration of existing customers, lower travel cost or fairer earning opportunity. Writing three to five ranked objectives and a handful of design principles, such as how much customer continuity matters, gives every later trade-off a tiebreaker and stops the plan becoming a negotiation won by the loudest reps.

                ## Milestones
                1. Three to five territory objectives written and ranked by the sales leader.
                2. Five to eight design principles agreed, including how much account continuity matters.
                3. The objectives checked against the company's revenue plan for the year.
                4. A one-page summary shared with the people who will approve the final design.

                ## Notes
                Fairness and maximum revenue sometimes pull in different directions. Decide in advance which one wins when they clash, and write it down.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page document with ranked territory objectives and agreed design principles, signed off by the sales leader."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the three biggest problems with the current territories in one line each"
                - "Draft three to five ranked objectives for the new territory design"
                - "List the design principles, including how much account continuity matters"
                - "Review the draft with the sales leader and finance partner and record sign-off"
            - name: Current account ownership inventory
              description: |-
                ## Purpose
                Most teams discover during a territory change that nobody can say with certainty who owns what. Exporting every account, its owner, its open pipeline and its last twelve months of revenue into one sheet shows the real starting position, including the accounts nobody owns and the reps holding far more than they can work.

                ## Milestones
                1. Every account exported with owner, segment, region, revenue and open pipeline.
                2. Accounts with no owner, or owned by someone who has left, flagged.
                3. A count of accounts and total revenue per current owner.
                4. Informal ownership agreements collected from managers and noted against the accounts.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A single sheet lists every account with its current owner, revenue and open pipeline, with unowned and departed-owner accounts flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export all accounts with owner, region, segment and revenue from the CRM"
                - "Add open pipeline value and last activity date to each account row"
                - "Flag accounts with no owner or an owner who has left the company"
                - "Ask each manager for ownership agreements that were never recorded in the CRM"
            - name: Addressable account universe for the territories
              description: |-
                ## Purpose
                Territories built only from accounts already in the CRM reward whoever happened to log the most companies. Building a list of every company that fits your agreed customer profile in your markets, customers and non-customers alike, gives each territory a true measure of opportunity rather than a measure of past data entry.

                ## Milestones
                1. The agreed customer profile translated into filters such as industry, size and location.
                2. A universe list built from a company data provider or public business registers, with duplicates removed.
                3. Existing CRM accounts matched to the universe so customers and prospects sit in one list.
                4. A count of universe accounts per region and segment.

                ## Notes
                Use the ideal customer profile your team has already agreed. This project applies it to territories; it does not redefine who you sell to.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A deduplicated account universe of customers and prospects in your markets exists, with counts per region and segment."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down the profile filters you will use, taken from the agreed customer profile"
                - "Pull a candidate company list from your data source using those filters"
                - "Match the list against CRM accounts and merge the duplicates"
                - "Count universe accounts by region and segment in a summary tab"
                - "Refresh the account universe from the data source @recurring(yearly)"
            - name: Choosing the territory building block
              description: |-
                ## Purpose
                Territories can be built from postcodes, states, counties, named account lists, industries or company size bands, and the choice shapes everything after it. Comparing two or three options against your objectives, the quality of your data and how buyers actually purchase settles the unit before anyone starts allocating accounts.

                ## Milestones
                1. Two or three candidate building blocks described, with an example territory for each.
                2. Each option scored against the territory objectives and the data available.
                3. The chosen unit recorded with the reasons and the options rejected.
                4. A rule written for companies with sites in several regions.

                ## Notes
                Buyers with many sites need one clear rule: assign by headquarters, by the site that signs contracts, or by the largest site. Pick one and apply it everywhere.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the territory building block, with scores for the alternatives and a rule for multi-site companies."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Describe two or three ways your territories could be built, with an example for each"
                - "Score each option against your ranked territory objectives"
                - "Decide how companies with sites in several regions will be assigned"
                - "Record the chosen building block and the reasons in the planning document"
            - name: Account potential scoring model
              description: |-
                ## Purpose
                Balancing territories on account counts alone puts a thousand tiny prospects against fifty large ones and calls it fair. A simple potential score built from three to five signals, such as employee count, industry fit, current spend with you and growth, lets you compare territories by what they could actually produce.

                ## Milestones
                1. Three to five scoring signals chosen, each with a reason and a data source.
                2. Weights set and tested on twenty accounts the team knows well.
                3. Every account in the universe scored and placed in a potential tier.
                4. The scoring logic written up in plain words so reps can follow it.

                ## Notes
                If experienced reps look at the top twenty scored accounts and disagree with most of them, fix the model before you use it to move anyone's accounts.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account in the universe carries a potential score and tier, with the scoring logic documented on one page."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose three to five signals that your best customers had in common"
                - "Score twenty accounts the team knows well and compare with their instinct"
                - "Adjust the weights until the ranking looks right to experienced reps"
                - "Apply the score to every account in the universe and assign tiers"
            - name: Workload estimate by account tier
              description: |-
                ## Purpose
                Two territories with equal potential can need very different effort if one is full of large accounts with many buyers and the other holds hundreds of small ones. Estimating the hours a rep needs per account each year, by tier, turns territory size into a workload number you can set against the hours a seller really has.

                ## Milestones
                1. Annual hours per account estimated for each tier from calendar and activity data.
                2. Selling hours available per rep per year worked out after meetings, admin and travel.
                3. A workload total calculated for each current territory.
                4. Territories above and below available capacity listed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of annual hours per account by tier and a workload total for every territory, compared with available selling hours."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull last year's meeting and call activity for a sample of accounts in each tier"
                - "Estimate annual hours per account for each potential tier"
                - "Work out realistic selling hours per rep after admin, internal meetings and travel"
                - "Compare each territory's workload total with available selling hours"
            - name: Account ownership rules of engagement
              description: |-
                ## Purpose
                Most territory fights are not about the map, they are about edge cases: a subsidiary in another region, a lead that came through a partner, a customer that moves its head office. Written rules of engagement settle who owns what in those cases before the next commission dispute forces a rushed decision.

                ## Milestones
                1. Rules written for parent and subsidiary companies, relocations and multi-site buyers.
                2. Rules written for partner-sourced deals and accounts worked by two reps.
                3. An escalation route and a named decision-maker for anything the rules miss.
                4. The rules published where every rep and manager can find them.

                ## Notes
                Keep it to two pages. If the rules need a lawyer to read them, reps will ignore them and argue anyway.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rules of engagement document of two pages or less, covering parents, subsidiaries, relocations and shared accounts, is published to the whole team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the last ten ownership arguments and how each was settled"
                - "Write a rule for each type of disagreement on the list"
                - "Name the person who decides cases the rules do not cover"
                - "Walk the team through the published rules in a team meeting"
                - "Review the rules of engagement against the year's disputes @recurring(yearly)"
            - name: Single territory assignment table
              description: |-
                ## Purpose
                When territory assignments live in a manager's spreadsheet, a slide and the CRM owner field, they drift apart within weeks and every report becomes guesswork. One assignment table, mapping each region or named account to a territory and each territory to a rep, becomes the record that the CRM, reports and commission all read from.

                ## Milestones
                1. A table mapping every postcode, region or named account to a territory ID.
                2. A second table mapping territory IDs to the current rep and manager.
                3. CRM account ownership matching the table for every account.
                4. One person named as the owner of changes to the table.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One assignment table maps every unit to a territory and every territory to a rep, and CRM ownership matches it for all accounts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a short territory ID for every current territory"
                - "Map every region or named account to exactly one territory ID"
                - "Map each territory ID to its rep and manager in a separate tab"
                - "Reconcile CRM account owners against the assignment table @recurring(monthly:3)"
            - name: Current territory balance baseline
              description: |-
                ## Purpose
                Leaders often sense that territories are unfair without knowing by how much. Measuring potential, workload, open pipeline and last year's revenue per territory, and the spread between the largest and the smallest, gives a baseline to judge any redesign against and hard evidence for the conversation with reps.

                ## Milestones
                1. Potential, workload, open pipeline and revenue totalled for every territory.
                2. Each territory expressed as an index against the team average of 100.
                3. Territories more than 20 percent above or below average named.
                4. A short summary of the main imbalances written for the leadership team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A balance table shows every territory indexed to the team average on potential, workload and revenue, with outliers named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total potential score, workload hours and revenue for each territory"
                - "Index each territory against the team average of 100"
                - "Highlight territories more than 20 percent above or below average"
                - "Ask the agent to draft a one-page summary of the main imbalances"
            - name: Territory planning calendar and change freeze
              description: |-
                ## Purpose
                Changing territories in the last month of a quarter costs deals and goodwill. Fixing when plans are drafted, approved, announced and switched on, and when changes are frozen, lets reps plan their pipeline with confidence and lets managers decline mid-quarter requests with a reason everyone already knows.

                ## Milestones
                1. Dates set for drafting, review, approval, announcement and go-live each year.
                2. A change freeze window agreed around quarter and year end.
                3. Criteria written for the rare changes allowed during a freeze.
                4. The calendar shared with sales, finance and operations.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated territory planning calendar with a freeze window and exception criteria is shared with sales, finance and operations."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the fiscal year start and each quarter end on a planning calendar"
                - "Work back from go-live to set draft, review and approval dates"
                - "Agree the change freeze window around quarter end with the sales leader"
                - "Write the short list of reasons a change is allowed during a freeze"
            - name: Monthly territory balance review
              description: |-
                ## Purpose
                Territories drift out of balance quietly as accounts grow, churn or get acquired, and every rep who leaves or joins shifts the load. A thirty-minute monthly look at the balance indices catches a territory sliding more than 20 percent off average while there is still time to act at the next planned window.

                ## Milestones
                1. A balance dashboard showing potential, pipeline and workload index by territory.
                2. A monthly review held, with notes on any territory outside the agreed range.
                3. Each out-of-range territory given an owner and a decision date.
                4. A running record of balance indices kept for comparing trends.

                ## Notes
                Start from the **Metrics log** template. Do not move accounts every month because of what you see; collect the evidence and act at the planned window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Balance indices are reviewed every month for twelve months, with every territory outside the agreed range logged and given a decision date."
                cadence: rolling
              tasks:
                - "Build a dashboard with the balance index for each territory"
                - "Set the acceptable range, such as 80 to 120 against the team average"
                - "Review territory balance indices and note the outliers @recurring(monthly:9)"
                - "Log any out-of-range territory with an owner and a decision date"
            - name: Quarterly territory health check
              description: |-
                ## Purpose
                Once a quarter the questions go beyond balance: are reps covering their accounts, are new logos coming from every territory, and has any region gone silent? A check against a fixed list of questions turns a vague feeling about a territory into a short list of fixes for the next planning window.

                ## Milestones
                1. A fixed list of eight to ten health questions written.
                2. Every territory answered against the list each quarter.
                3. Territories with three or more warning signs discussed with their manager.
                4. Agreed fixes recorded and carried into the next planning window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every territory has a completed health check each quarter, with warning signs and agreed fixes recorded."
                cadence: cyclic
              tasks:
                - "Write eight to ten health questions covering coverage, pipeline and new logos"
                - "Answer the health questions for every territory @recurring(quarterly)"
                - "Discuss territories with three or more warning signs with their manager"
                - "Carry agreed fixes into the territory change log"
            - name: Account reassignment request process
              description: |-
                ## Purpose
                Reps will always ask to move accounts, and when requests are handled informally they go to whoever has the manager's ear. A simple request form, a weekly decision slot and a published log make reassignments consistent, quick and visible to everyone affected.

                ## Milestones
                1. A request form capturing the account, current owner, requested owner and reason.
                2. Decision criteria tied to the rules of engagement.
                3. Every request decided within five working days.
                4. A log of decisions and reasons visible to the whole team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reassignment request is logged and decided within five working days, with the decision and reason visible to the team."
                cadence: rolling
              tasks:
                - "Create a short request form for moving an account between reps"
                - "Write the criteria used to approve or decline a request"
                - "Decide waiting reassignment requests in a short weekly slot @recurring(weekly:wed)"
                - "Publish each decision and its reason in the reassignment log"
            - name: Unowned and orphan account sweep
              description: |-
                ## Purpose
                Accounts belonging to reps who have left, or created without an owner, sit untouched while competitors work them. A monthly sweep finds them, assigns them from the territory table and stops valuable customers going months without a call from anyone.

                ## Milestones
                1. A saved report listing accounts with no owner or an inactive owner.
                2. Each orphan account assigned to the right territory rep within the month.
                3. Customers among the orphans given a contact plan, not just a new owner.
                4. The orphan count falling month on month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The orphan account report shows no customer accounts without an active owner at month end for six months in a row."
                cadence: rolling
              tasks:
                - "Build a report of accounts with no owner or an inactive owner"
                - "Sweep and reassign orphan accounts using the territory table @recurring(monthly:22)"
                - "Ask the new owner of any orphaned customer to call within two weeks"
                - "Record the orphan count each month next to the balance indices"
            - name: New account territory mapping rules
              description: |-
                ## Purpose
                Every new company that enters the CRM, from a trade show list, an inbound form or a rep's own research, needs to land in the right territory without a manager sorting it by hand. Clear mapping rules based on your building block mean new accounts arrive owned rather than piling up in a queue nobody checks.

                ## Milestones
                1. Mapping rules written for each building block, including cases with missing data.
                2. Automatic assignment set up in the CRM, or a manual fallback agreed.
                3. A test of twenty new accounts showing each landed in the correct territory.
                4. An exceptions queue checked so mismapped accounts get corrected.

                ## Notes
                This is about which territory owns a company. How fast an individual inbound lead gets a reply is a separate routing question.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty test accounts all map to the correct territory, and mapping exceptions are reviewed every quarter."
                cadence: rolling
              tasks:
                - "Write the mapping rule for each territory building block"
                - "Decide where accounts with missing location or size data should go"
                - "Test the rules with twenty recently created accounts"
                - "Review mapping exceptions and adjust the rules @recurring(quarterly)"
            - name: Annual territory design cycle
              description: |-
                ## Purpose
                Territory design works best as a planned yearly cycle tied to the fiscal year, not a scramble whenever someone complains. Running the same sequence each year, from data refresh and analysis to proposals, approval and launch, means reps know when changes come and leaders know what evidence they will have in hand.

                ## Milestones
                1. A yearly sequence of steps written with owners and target weeks.
                2. Data refresh and balance analysis finished before draft proposals.
                3. Draft territories reviewed with front-line managers before approval.
                4. The final design approved and launched on the planned date.

                ## Notes
                Start from the **Operational checklist** template. Most teams need about three months from data refresh to go-live; start earlier the first time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The annual territory cycle runs from data refresh to launch on the planned dates, with each step signed off by its owner."
                cadence: cyclic
              tasks:
                - "Write the yearly territory cycle as a checklist with owners and target weeks"
                - "Start the annual territory design cycle with a data refresh @recurring(yearly)"
                - "Book review sessions with front-line managers before approval"
                - "Record lessons from this cycle within a month of the launch"
            - name: Territory coverage and penetration tracking
              description: |-
                ## Purpose
                A territory full of high-potential accounts is worth little if the rep only works the twenty they already know. Tracking the share of top-tier accounts touched in the last ninety days, and customer penetration per territory, shows whether the design is being used or quietly ignored.

                ## Milestones
                1. Coverage defined, such as a logged conversation in the last ninety days.
                2. A report showing coverage of top-tier accounts by territory.
                3. Penetration measured as customers divided by universe accounts in each territory.
                4. Territories below the agreed coverage level discussed in one-to-ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly coverage and penetration figures are published per territory, and every territory below the coverage target has an agreed plan."
                cadence: rolling
              tasks:
                - "Define what counts as a covered account for your sales motion"
                - "Build a report of top-tier account coverage by territory"
                - "Publish coverage and penetration figures to managers @recurring(monthly:14)"
                - "Agree a coverage plan with any rep below the target"
            - name: Quarterly account data refresh for scoring
              description: |-
                ## Purpose
                Company data decays quickly: firms move, merge, grow, shrink and close. Refreshing the fields that drive the potential score every quarter keeps the scores honest, so the next territory decision rests on this year's companies rather than last year's.

                ## Milestones
                1. The fields that feed the potential score listed with their data sources.
                2. A quarterly refresh that updates those fields and flags closed companies.
                3. Accounts whose tier changed listed for the territory owner.
                4. A data quality figure recorded, such as the share of accounts with complete scoring fields.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Scoring fields are refreshed every quarter and at least 90 percent of universe accounts have complete scoring data."
                cadence: cyclic
              tasks:
                - "List the fields that drive the potential score and where each comes from"
                - "Refresh scoring fields and flag closed or merged companies @recurring(quarterly)"
                - "Send each rep the list of their accounts whose tier changed"
                - "Record the share of accounts with complete scoring data"
            - name: Territory dispute log
              description: |-
                ## Purpose
                Disputes over who owns a deal or account are inevitable, and when they are settled in corridors the same arguments return every quarter. A log of each dispute, the rule applied and the outcome builds case law for the team and shows exactly where the rules of engagement need rewriting.

                ## Milestones
                1. A dispute log with date, accounts, people involved, rule applied and outcome.
                2. Every dispute closed within ten working days.
                3. Repeat dispute types highlighted for the next rules update.
                4. Disputes per quarter counted and used as a health measure for the design.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every territory dispute is logged and closed within ten working days, and repeat types feed the yearly rules review."
                cadence: rolling
              tasks:
                - "Set up a dispute log with the fields both parties will need to see"
                - "Ask both reps for a short written account before deciding"
                - "Review open and repeat disputes in the log @recurring(monthly:27)"
                - "Send repeat dispute types to the rules of engagement review"
            - name: Rep territory plan check-ins
              description: |-
                ## Purpose
                A territory only works if the rep runs it like a small business, with priorities, target accounts and a coverage plan. A quarterly check-in on each rep's territory plan, kept separate from deal reviews, holds attention on the whole territory rather than this month's three biggest opportunities.

                ## Milestones
                1. A standard territory plan format that every rep keeps current.
                2. A quarterly check-in with each rep focused on the territory, not individual deals.
                3. Agreed changes to target accounts and coverage recorded.
                4. Territory change requests captured for the next planning window.

                ## Notes
                Start from the **1:1** template. Keep deal inspection for the pipeline meeting so this conversation stays on the territory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rep has a recorded quarterly territory plan check-in, with agreed priority accounts and any change requests noted."
                cadence: cyclic
              tasks:
                - "Share the territory plan format with each rep"
                - "Hold a territory plan check-in with each rep @recurring(quarterly)"
                - "Record agreed priority accounts and coverage changes after each check-in"
                - "Collect territory change requests for the next planning window"
            - name: Territory design methods compared
              description: |-
                ## Purpose
                Geographic, named account, vertical, product and hybrid territories each suit different sales motions, and teams often inherit one without knowing the alternatives. Studying the main methods, with an example of each from a company of similar size, gives a manager the vocabulary and judgement to choose deliberately.

                ## Milestones
                1. Notes on five territory design methods with strengths and weaknesses.
                2. One example of each method from a company with a similar sales motion.
                3. The method that suits each of your segments noted with a reason.
                4. A short briefing written for fellow managers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover five territory design methods, each with a real example and a judgement on which suits each of your segments."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two practitioner guides on sales territory design"
                - "Write a half-page note on each of five territory design methods"
                - "Find one example of each method in a company like yours"
                - "Match each of your segments to the method that suits it best"
            - name: Mapping tools for territory work
              description: |-
                ## Purpose
                Spreadsheets hide the obvious problems a map makes visible: a rep crossing a mountain range, a cluster of customers split in two, a region with nobody nearby. Learning the basics of a mapping tool, from plotting accounts to drawing boundaries and shading by potential, makes geographic design faster and far easier to explain.

                ## Milestones
                1. A mapping tool chosen, such as a CRM add-on, a business mapping service or a free GIS package.
                2. All universe accounts plotted from their addresses.
                3. Current territory boundaries drawn and shaded by potential index.
                4. A map exported that a rep can read in under a minute.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All universe accounts are plotted on a map with current boundaries shaded by potential index, exported as a shareable image."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one mapping tool to learn, such as a CRM add-on or a free GIS package"
                - "Geocode the account universe from addresses or postcodes"
                - "Draw the current territory boundaries on the map"
                - "Shade territories by their potential index and export the map"
            - name: Spreadsheet territory balance model
              description: |-
                ## Purpose
                Most territory decisions end up in a spreadsheet, and a model that is hard to change means fewer options get tested. Building a reusable model where you move an account or region and instantly see each territory's potential, workload and revenue index turns scenario testing into minutes rather than days.

                ## Milestones
                1. A model with an accounts tab, a territory assignment column and a summary tab.
                2. Indices for potential, workload and revenue recalculating whenever an assignment changes.
                3. Three saved scenarios compared side by side.
                4. Instructions written so another manager can use the model.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A spreadsheet model recalculates territory indices when assignments change, with three scenarios compared and usage notes written."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up an accounts tab with potential, workload and revenue columns"
                - "Add a territory assignment column and a summary tab with indices"
                - "Test the model by moving ten accounts and checking the totals"
                - "Save three alternative scenarios and compare them side by side"
            - name: Measuring territory balance and fairness
              description: |-
                ## Purpose
                Saying territories are fair needs a measure that leaders and reps both accept. Learning a few simple statistics, such as the index against average, the coefficient of variation and the ratio of the largest to the smallest territory, lets you set a target spread and show progress rather than argue about it.

                ## Milestones
                1. The index, coefficient of variation and largest to smallest ratio understood through a worked example.
                2. Each measure calculated for the current territories.
                3. A target spread agreed, such as every territory within 15 percent of average potential.
                4. A one-paragraph explanation of the measures written for reps.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three balance measures are calculated for current territories and a target spread is agreed and written in the planning document."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work through the coefficient of variation with a small worked example"
                - "Calculate the three balance measures for the current territories"
                - "Propose a target spread to the sales leader with the reasoning"
                - "Write a short explanation of the measures for the sales team"
            - name: Bottom-up territory market sizing
              description: |-
                ## Purpose
                Top-down market figures from analyst reports rarely say anything useful about one region or one rep's patch. Sizing each territory from the bottom up, accounts multiplied by realistic annual spend per tier, gives an opportunity figure tied to named companies a rep can actually call.

                ## Milestones
                1. Typical annual spend per account estimated for each tier from customer data.
                2. Bottom-up opportunity totalled for each territory.
                3. Current revenue compared with opportunity to show share of wallet by territory.
                4. Assumptions listed so finance can challenge them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each territory has a bottom-up opportunity figure built from named accounts and tier spend, with the assumptions documented."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Estimate typical annual spend per account for each potential tier"
                - "Multiply account counts by tier spend to size each territory"
                - "Compare current revenue with opportunity for each territory"
                - "List the assumptions behind the sizing for finance to review"
            - name: Communicating territory changes to sellers
              description: |-
                ## Purpose
                Losing an account you have nurtured for two years feels personal, and territory changes are a common trigger for good reps to resign. Learning how to explain changes, from the reasons and data to what is protected and how earnings are affected, turns a likely grievance into an understood decision.

                ## Milestones
                1. A short reading list on change communication worked through, with notes.
                2. Talking points drafted for reps gaining, losing and keeping accounts.
                3. Answers prepared for the ten hardest questions reps are likely to ask.
                4. A rehearsal held with a fellow manager playing an unhappy rep.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Talking points for three rep situations and answers to ten hard questions are written and rehearsed before the next territory announcement."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read two articles on communicating organisational change to sales teams"
                - "Draft talking points for reps gaining, losing and keeping accounts"
                - "Ask the agent to draft answers to the ten hardest questions you expect"
                - "Rehearse the conversation with a fellow manager playing an unhappy rep"
            - name: Retrospective on the last territory change
              description: |-
                ## Purpose
                Each territory change leaves evidence about what worked: revenue in moved accounts, rep attrition, disputes and customer complaints. Looking back at the last change six to twelve months on, before designing the next one, stops the team repeating mistakes it has already paid for.

                ## Milestones
                1. Revenue and pipeline in moved accounts compared with similar accounts that stayed put.
                2. Rep departures and disputes in the six months after the change counted.
                3. Three to five reps and managers interviewed about what they would do differently.
                4. Lessons written into the next cycle's design principles.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written retrospective compares moved and unmoved accounts, with at least three lessons carried into the next design principles."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull revenue and pipeline for accounts moved in the last change"
                - "Compare them with similar accounts that kept the same owner"
                - "Interview three to five reps and managers about the last change"
                - "Add the lessons to the territory design principles"
            - name: Generalist versus industry vertical territories
              description: |-
                ## Purpose
                Selling to hospitals and selling to manufacturers can need different language, references and buying processes, which argues for vertical territories, while geography keeps travel low and coverage simple. Comparing the two for your market, with win rates by industry as evidence, settles whether specialising is worth the extra complexity.

                ## Milestones
                1. Win rate, deal size and cycle length compared for reps who often and rarely sell into each industry.
                2. Industries where specialists clearly outperform generalists identified.
                3. The travel and coverage cost of a vertical model estimated.
                4. A decision recorded on which segments, if any, move to vertical territories.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on vertical versus geographic territories for each segment, backed by win rate and cycle data by industry."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull win rate, deal size and cycle length by industry for the last two years"
                - "Compare reps who sell often into an industry with those who rarely do"
                - "Estimate the extra travel and coverage cost of vertical territories"
                - "Record the decision for each segment with the evidence behind it"
            - name: Named accounts versus geography for large customers
              description: |-
                ## Purpose
                Your largest customers and prospects often buy centrally across many sites, which a geographic map splits awkwardly between several reps. Setting a threshold above which accounts become named, held by one owner regardless of location, protects the biggest relationships without breaking the geographic model for everyone else.

                ## Milestones
                1. A threshold set for named account status, using revenue, potential score or site count.
                2. The accounts above the threshold listed and checked with managers.
                3. Named account owners chosen and the geographic reps told what is carved out.
                4. Rules written for how named status is gained or lost each year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named account threshold is agreed, every named account has an owner, and rules for gaining or losing named status are written."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Propose a threshold for named account status using the potential score"
                - "List the accounts above the threshold and check them with managers"
                - "Choose an owner for each named account"
                - "Write the rules for accounts entering or leaving named status"
            - name: Splitting an overloaded territory
              description: |-
                ## Purpose
                A territory carrying 150 percent of average potential usually means unworked accounts and a rep who cherry-picks. Splitting it cleanly, with boundaries that keep customer relationships together and a plan for who keeps which open deals, turns a symptom of growth into two workable patches.

                ## Milestones
                1. The overload confirmed with potential, workload and coverage data.
                2. Two or three split options modelled and indexed.
                3. The chosen split reviewed with the current rep before it is announced.
                4. Both resulting territories within the agreed balance range.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The overloaded territory is split into two territories that each sit within the agreed balance range, with the current rep consulted first."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the overload with potential, workload and coverage figures"
                - "Model two or three ways to split the territory in the balance model"
                - "Review the preferred split with the current rep before announcing it"
                - "Update the assignment table once the split is approved"
            - name: Absorbing a vacant territory
              description: |-
                ## Purpose
                When a rep leaves and the role will not be backfilled for months, the territory's customers need owners straight away. Deciding whether to spread the accounts across neighbours, hold them with the manager or cover them from a team pool, and doing it within two weeks, keeps customers from noticing the gap.

                ## Milestones
                1. Customers and open deals in the vacant territory listed with value and urgency.
                2. A decision on spreading, holding or pooling the accounts recorded.
                3. Every customer and open deal assigned within two weeks of the departure.
                4. A review date set for backfilling or redrawing permanently.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every customer and open deal in the vacant territory has a named owner within two weeks, and a backfill review date is set."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List customers and open deals in the vacant territory by value"
                - "Decide whether to spread, hold or pool the vacant accounts"
                - "Assign every customer and open deal to an interim owner"
                - "Set a date to decide on a backfill or a permanent redraw"
            - name: Reassigned account handover plan
              description: |-
                ## Purpose
                Customers notice when a new rep calls knowing nothing about them, and a careless handover after a territory change can cost renewals. A standard handover, with a written account summary, a joint introduction call for key customers and a ninety-day check, protects the relationship while ownership moves.

                ## Milestones
                1. A one-page handover summary format for each moving account.
                2. Joint introduction calls held for every top-tier customer that changes owner.
                3. All other moving customers sent an introduction from the outgoing rep.
                4. A ninety-day check on revenue and sentiment in moved accounts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every top-tier customer that changes owner has a joint introduction call and a handover summary, with a ninety-day check recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page handover summary format for moving accounts"
                - "Ask outgoing reps to complete summaries for their moving customers"
                - "Book joint introduction calls for every top-tier customer that changes owner"
                - "Check revenue and sentiment in moved accounts after ninety days"
            - name: Carving a territory for a new hire
              description: |-
                ## Purpose
                New reps given scraps from everyone else's patch take longer to ramp and often leave within a year. Carving a territory with genuine potential, a few warm customers and a manageable account count, before the start date, gives the hire a fair chance and keeps the rest of the team in balance.

                ## Milestones
                1. Accounts for the new territory chosen from the balance model, not by asking reps to give some up.
                2. The new territory's potential within the agreed range of the team average.
                3. A small set of existing customers included so the new rep has warm conversations.
                4. Affected reps told about the change before the new hire starts.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new territory within the agreed balance range, including some existing customers, is assigned and communicated before the hire's start date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Model the new territory in the balance model from the account universe"
                - "Include a handful of existing customers for early warm conversations"
                - "Tell the reps losing accounts before the new hire's start date"
                - "Load the new territory into the assignment table and the CRM"
            - name: Open pipeline protection during reassignment
              description: |-
                ## Purpose
                The fastest way to make reps resent a territory change is to take a deal they have worked for six months and hand it to someone else at signature. Clear rules on which open deals stay with the original rep, for how long and how credit is split, remove the biggest source of anger before it starts.

                ## Milestones
                1. A rule for which open deals stay with the current rep, such as a stage or a close date window.
                2. A time limit after which protected deals move to the new owner.
                3. Credit split rules agreed with whoever runs commission.
                4. A list of protected deals published at each territory change.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written pipeline protection rules covering stage, time limit and credit split are agreed with finance and applied at the next territory change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Propose which open deal stages stay with the current rep after a change"
                - "Set a time limit after which protected deals transfer"
                - "Agree credit split rules with whoever calculates commission"
                - "Publish the protected deal list alongside each territory change"
            - name: Territory potential and quota alignment check
              description: |-
                ## Purpose
                Quotas set without looking at territory potential give one rep an easy year and another an impossible one. Checking that each rep's share of the team quota roughly matches their territory's share of potential, and explaining any deliberate exceptions, keeps targets defensible when reps compare notes.

                ## Milestones
                1. Each territory's share of total potential calculated.
                2. Each rep's share of the team quota set beside it.
                3. Gaps larger than an agreed tolerance explained or corrected with the quota owner.
                4. The comparison shared with the sales leader before quotas are published.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every rep's quota share sits within the agreed tolerance of their territory's potential share, or has a written reason, before quotas are published."
                cadence: cyclic
              tasks:
                - "Calculate each territory's share of total potential"
                - "Set each rep's share of the team quota beside it"
                - "Discuss gaps beyond the tolerance with whoever sets quotas"
                - "Run the potential and quota alignment check before quotas are set @recurring(yearly)"
            - name: White space analysis of underserved regions
              description: |-
                ## Purpose
                Some regions sit outside every territory, or inside one so large that the rep never gets there. Mapping universe accounts against coverage shows the clusters of high-potential companies nobody is calling, which is often the cheapest growth the team has.

                ## Milestones
                1. Universe accounts with no activity in the last year mapped by region.
                2. Clusters of high-potential, untouched accounts identified.
                3. A recommendation for each cluster: assign it, create a territory or cover it remotely.
                4. The largest cluster assigned with a coverage target.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The three largest clusters of untouched high-potential accounts are identified and each has a recorded coverage decision."
                cadence: cyclic
              tasks:
                - "Map universe accounts with no logged activity in the last year"
                - "Identify clusters of high-potential accounts nobody is calling"
                - "Recommend assigning, carving a territory or remote cover for each cluster"
                - "Repeat the white space map before annual planning @recurring(yearly)"
            - name: New fiscal year territory launch
              description: |-
                ## Purpose
                Go-live day for new territories is when CRM ownership, reports, commission credit and customer handovers all have to switch together. Treating the launch as a dated event with a checklist avoids the classic first week where reps cannot see their accounts and pipeline reports show nonsense.

                ## Milestones
                1. CRM ownership updated from the assignment table on the agreed date.
                2. Reports and dashboards checked against the new territory structure.
                3. Commission and finance systems confirmed as using the new assignments.
                4. Every rep confirming in the first week that they can see their accounts.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New territories are live in the CRM, reports and commission systems on launch day, and every rep confirms access to their accounts in week one."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the go-live date with sales operations and finance"
                - "Load the final assignment table into a CRM test environment first"
                - "Check every territory report and dashboard after the switch"
                - "Ask every rep to confirm they can see all of their accounts"
            - name: Territory announcement session for the team
              description: |-
                ## Purpose
                How territories are announced shapes how they are received far more than the map itself. A planned session that explains the objectives and data, shows each rep their territory and is followed within days by written answers gives the design a fair hearing, especially when the hardest conversations happen privately beforehand.

                ## Milestones
                1. Private conversations held beforehand with reps losing significant accounts.
                2. A session agenda covering objectives, method, balance data and timeline.
                3. Each rep handed a territory pack with accounts, potential and protected deals.
                4. Questions collected and answered in writing within a week.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The announcement session is held after private pre-briefs, every rep receives a territory pack, and written answers go out within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Brief reps losing significant accounts privately before the session"
                - "Build the agenda around objectives, method, balance data and timeline"
                - "Prepare a territory pack for each rep with accounts and protected deals"
                - "Send written answers to all questions within a week of the session"
            - name: Mid-year territory rebalance
              description: |-
                ## Purpose
                Six months in, hiring, departures and a few large account moves can push territories well outside the agreed range. A planned mid-year rebalance, limited to the territories most out of line and announced well before the second half starts, fixes the worst problems without reopening the whole design.

                ## Milestones
                1. Territories outside the agreed range at mid-year identified from the monthly reviews.
                2. Changes limited to those territories and modelled in the balance model.
                3. Pipeline protection rules applied to every moving deal.
                4. Changes announced at least three weeks before they take effect.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Territories outside the agreed range are rebalanced at mid-year, with changes announced three weeks ahead and pipeline protection applied."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List territories outside the agreed range from the monthly reviews"
                - "Model the smallest set of changes that brings them back in range"
                - "Apply the pipeline protection rules to every deal that moves"
                - "Announce the mid-year changes three weeks before they take effect"
            - name: Territory integration after an acquisition
              description: |-
                ## Purpose
                When two companies combine, two sales teams can suddenly be calling the same customers with different products, prices and stories. Integrating territories in a planned sequence, with a temporary rule for overlapping accounts, spares customers the confusion while the long-term design is worked out.

                ## Milestones
                1. Overlapping accounts between the two teams identified and counted.
                2. A temporary ownership rule for overlapping accounts announced in week one.
                3. A combined territory design drafted within the agreed integration window.
                4. Customers in overlapping accounts told who their contact is.

                ## Notes
                Start from the **Risk register** template to track revenue, people and customer risks during the integration. Expect the acquired team's best sellers to be approached by competitors in the first month.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Overlapping accounts each have a single named owner, a temporary rule is in place from week one, and a combined territory design is approved."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Match the two account lists to find overlapping customers and prospects"
                - "Announce a temporary ownership rule for overlapping accounts"
                - "Draft a combined territory design for leadership approval"
                - "Agree with each overlapping customer who their contact will be"
            - name: Single-region territory pilot
              description: |-
                ## Purpose
                Rolling out a big redesign to every region at once leaves no room to learn. Piloting the new model in one region for a quarter, with a matched region left as it was, shows whether coverage and pipeline actually improve before the whole team is asked to change.

                ## Milestones
                1. A pilot region and a comparison region chosen with similar starting numbers.
                2. The new design live in the pilot region for one full quarter.
                3. Coverage, pipeline creation and rep feedback compared between the two regions.
                4. A recommendation recorded on whether to roll out, adjust or drop the design.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A one-quarter pilot comparing a redesigned region with a matched unchanged region ends with a recorded roll-out decision."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a pilot region and a comparable region to leave unchanged"
                - "Record starting coverage and pipeline figures in both regions"
                - "Gather rep feedback in the pilot region at the end of each month"
                - "Compare results after a quarter and record the roll-out decision"
            - name: First territory plan as a new sales manager
              description: |-
                ## Purpose
                New front-line managers usually inherit territories they did not design and a team that expects them to fix the unfair bits immediately. Spending the first sixty days understanding the current map, the history behind it and the real imbalances, before promising anything, earns credibility and leads to better changes.

                ## Milestones
                1. Each rep interviewed about their territory, its history and its problems.
                2. The current balance measured with data rather than opinion.
                3. Three problems ranked by impact and ease of fixing.
                4. A change proposal for the next planning window agreed with your own manager.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Within sixty days a new manager has interviewed every rep, measured territory balance and agreed a ranked change proposal with their own manager."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book a territory conversation with each rep in your first two weeks"
                - "Measure current territory balance with the data you have"
                - "Rank the three biggest territory problems by impact and ease"
                - "Agree a change proposal with your own manager for the next window"
            - name: Seller territory business plan
              description: |-
                ## Purpose
                Reps who receive a territory and simply start calling familiar names leave most of its value untouched. A seller's own territory business plan, with tier priorities, target accounts, a coverage rhythm and a revenue path, turns a list of accounts into a year of deliberate selling and gives the rep something concrete to bring to their manager.

                ## Milestones
                1. Territory accounts sorted into tiers with the top twenty-five named.
                2. A revenue path showing where this year's number will come from.
                3. A coverage rhythm set for each tier, such as monthly contact for the top tier.
                4. The plan reviewed with the manager and updated each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written territory business plan with named top accounts, a revenue path and a coverage rhythm is reviewed with the manager each quarter."
                cadence: cyclic
              tasks:
                - "Sort your territory accounts into tiers and name the top twenty-five"
                - "Write the revenue path showing where this year's number comes from"
                - "Set a contact rhythm for each tier of accounts"
                - "Update your territory business plan before the manager check-in @recurring(quarterly)"
            - name: Enterprise, mid-market and small business segment layers
              description: |-
                ## Purpose
                Larger sales organisations rarely use one territory model for every customer size: enterprise reps hold a few dozen named accounts, mid-market reps a region and small business reps a high-volume pool. Designing the segment layers, the thresholds between them and how accounts move up or down keeps each sales motion matched to the right buyers.

                ## Milestones
                1. Segment thresholds agreed using employee count, revenue or potential score.
                2. A territory model chosen for each segment, with account count ranges.
                3. Rules written for accounts moving between segments, with timing.
                4. Every account in the universe assigned to exactly one segment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every universe account belongs to exactly one segment, each segment has a territory model, and movement rules between segments are written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Propose thresholds between enterprise, mid-market and small business"
                - "Choose a territory model and account count range for each segment"
                - "Write rules for when accounts move between segments"
                - "Assign every universe account to one segment and check the counts"
            - name: Territory plan for a team doubling in size
              description: |-
                ## Purpose
                Growing from six to twelve reps in a year means redrawing territories more than once, and doing it badly unsettles the reps who built the business. Planning the growth sequence in advance, with territories designed to split cleanly as each hire arrives, avoids a fresh fight every time someone joins.

                ## Milestones
                1. The hiring plan lined up with dates when new territories will be needed.
                2. Current territories marked with natural split lines for future hires.
                3. Rules agreed with current reps on how growth splits will be handled.
                4. Each planned split modelled before the hire is made.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A growth territory plan shows when and where each new territory will be carved, with split rules agreed with current reps."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Line up the hiring plan with dates when new territories are needed"
                - "Mark natural split lines in each current territory"
                - "Agree with current reps how growth splits will work and what is protected"
                - "Model each planned split in the balance model before the hire is approved"
            - name: Inheriting a territory from a departing colleague
              description: |-
                ## Purpose
                Taking over a territory mid-year means picking up customers who liked the last rep, deals at uncertain stages and notes of varying quality. A structured first thirty days, with the top accounts called, every open deal verified and the gaps in the record written down, turns an inherited patch into your own quickly.

                ## Milestones
                1. Every open deal verified with the buyer, with stage and close date corrected.
                2. The top twenty customers contacted with an introduction.
                3. Gaps in account records listed and filled where possible.
                4. A ninety-day plan for the territory shared with your manager.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within thirty days every inherited open deal is verified with the buyer, the top twenty customers are contacted and a ninety-day plan is agreed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Get the departing rep's notes and a handover call if still possible"
                - "Verify every open deal's stage and close date with the buyer"
                - "Introduce yourself to the top twenty customers by call or email"
                - "Write a ninety-day territory plan and agree it with your manager"
            - name: Overlay and specialist coverage mapping
              description: |-
                ## Purpose
                Solution engineers, partner managers and product specialists rarely map one to one onto sales territories, so some reps get constant support and others none. Mapping each overlay role to the territories it serves, with a fair share of capacity, makes specialist time a planned resource rather than a favour.

                ## Milestones
                1. Every overlay role listed with headcount and available hours.
                2. Each overlay person mapped to the territories they support.
                3. Overlay capacity per territory compared with demand from pipeline.
                4. Rules for requesting overlay help outside the mapping written and shared.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every overlay specialist is mapped to named territories with capacity matched to pipeline demand, and the mapping is refreshed each year."
                cadence: cyclic
              tasks:
                - "List each overlay role with headcount and available hours"
                - "Map each overlay person to the territories they support"
                - "Compare overlay capacity per territory with pipeline demand"
                - "Refresh the overlay mapping alongside the annual territory design @recurring(yearly)"
            - name: Drive-time territory boundary optimisation
              description: |-
                ## Purpose
                For field teams, the same number of accounts can mean three hours or thirty hours of driving a week depending on where the lines fall. Using drive-time analysis to test boundaries, so each rep's accounts sit within a sensible distance of home base, recovers selling time without changing who the customers are.

                ## Milestones
                1. Each rep's home base and accounts plotted using drive times rather than straight-line distance.
                2. Average drive time to top-tier accounts calculated per territory.
                3. Boundary changes modelled that cut the worst drive times without breaking balance.
                4. Selected changes taken into the next planning window.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Drive time to top-tier accounts is measured per territory, and the boundary changes chosen keep every territory within the balance range."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Plot each rep's home base and accounts in a tool that measures drive time"
                - "Calculate average drive time to top-tier accounts per territory"
                - "Model boundary changes that reduce the longest drive times"
                - "Check that each change keeps territories within the balance range"
            - name: Historical win data potential model
              description: |-
                ## Purpose
                Once a team has a few years of closed deals, a simple statistical model can predict account potential better than hand-set weights. Fitting won revenue against firmographic signals, and testing it on a year the model has not seen, shows which signals really matter and whether the territory scores deserve trust.

                ## Milestones
                1. Three or more years of won and lost deals joined to account firmographics.
                2. A regression or similar model fitted, with signals ranked by importance.
                3. The model tested on a held-back year and its accuracy recorded.
                4. Scoring weights updated only where the model beats the current approach.

                ## Notes
                Ask an analyst to check the work if statistics are not your strength. A model that only you understand will not survive the first rep who challenges their territory.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A model fitted on past deals is tested on a held-back year, its accuracy recorded, and scoring weights changed only where it outperforms."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Join three years of won and lost deals to account firmographic data"
                - "Fit a simple model of won revenue against the scoring signals"
                - "Test the model on a year it has not seen and record its accuracy"
                - "Refit the potential model with the latest year of deals @recurring(yearly)"
            - name: Channel partner and direct territory overlap rules
              description: |-
                ## Purpose
                Where resellers, distributors or referral partners sell into the same regions as your direct reps, unclear lines lead to two quotes reaching the same customer and partners losing faith. Agreeing which accounts or segments belong to partners, how deal registration works and how direct reps are credited protects both channels.

                ## Milestones
                1. Accounts and segments reserved for partners listed by territory.
                2. A deal registration rule agreed, with a time limit and a dispute route.
                3. Direct rep credit for partner deals in their territory decided.
                4. The rules shared with partners and the direct team at the same time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Partner and direct territory rules covering reserved accounts, deal registration and rep credit are sent to partners and reps on the same day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the accounts and segments where partners and direct reps overlap"
                - "Agree a deal registration rule with a time limit and a dispute route"
                - "Decide how direct reps are credited for partner deals in their territory"
                - "Send the rules to partners and the direct team on the same day"
---

# Sales Territory Planning

This area is for sales leaders, front-line managers and revenue operations teams who divide markets, regions or account lists between sellers, and for the reps who then have to make a territory pay. It starts with the foundations (objectives, an ownership inventory, the account universe, a potential score, workload estimates and rules of engagement), then the operating routines that keep territories balanced, the analysis skills worth learning, the redesign decisions and account moves, the dated launches and rebalances, situations for new managers, sellers and growing or enterprise teams, and finally specialist work on drive times, statistical potential models and partner overlap.

What repeats is a weekly slot for reassignment requests, monthly checks on balance, coverage, orphan accounts, CRM ownership and disputes, quarterly health checks, data refreshes and territory plan check-ins, and a yearly design cycle with rules, quota alignment and white space reviews. The Metrics log, Operational checklist, 1:1 and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
