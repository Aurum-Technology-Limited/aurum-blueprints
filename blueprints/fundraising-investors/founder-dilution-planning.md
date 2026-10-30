---
id: fundraising-investors.founder-dilution-planning
name: Founder Dilution Planning
description: "Founder ownership modelled across every future round, grant and conversion, with written goals, checks before signing and scenarios that show the long-term cost of each deal."
category: business
version: 1.0.0
tags: [fundraising-investors, founder-dilution-planning, founder, ownership, dilution, equity-modelling, scenario-planning]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - risk-register
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Founder Dilution Planning
          description: "Modelling founder ownership across future rounds and option grants so founders understand the long-term effect of each deal."
          projects:
            - name: Founder ownership snapshot on a fully diluted basis
              description: |-
                ## Purpose
                Many founders still quote the percentage from incorporation day and have never recalculated it after advisers, SAFEs and option grants. Working out your ownership today on both an issued and a fully diluted basis gives every later scenario a true starting point, and it often comes in several points lower than expected.

                ## Milestones
                1. Total issued shares and your own holding taken from the latest share register or cap table export.
                2. Every option, warrant, SAFE and note added to reach a fully diluted share count.
                3. Your percentage recorded on both bases, with the date and the source documents named.
                4. Each co-founder's percentage calculated the same way and shared with them.

                ## Notes
                Use the legal share register as the source, not memory or an old pitch deck. Unconverted SAFEs have no share count yet, so list them separately with their cap until you have learned the conversion maths.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page snapshot shows each founder's issued and fully diluted percentage, tied to named source documents."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the latest share register or cap table export"
                - "List every option, warrant, SAFE and convertible note outstanding"
                - "Calculate your issued and fully diluted percentages side by side"
                - "Share the snapshot with each co-founder and agree the numbers"
            - name: Inventory of everything that can dilute you
              description: |-
                ## Purpose
                Dilution rarely comes from one big round alone; it leaks in through an adviser promised one percent over coffee, a SAFE signed in a hurry, a warrant inside a bank facility or an offer letter that mentions options. Listing every signed and unsigned commitment in one place is the only way to stop surprises appearing in a lawyer's pro forma at closing.

                ## Milestones
                1. Signed instruments listed: SAFEs, notes, warrants, option grants and share issues.
                2. Unsigned promises listed: offer letters, adviser emails and verbal agreements with early staff.
                3. Each item given an estimated share count or percentage and a document reference.
                4. Ambiguous promises flagged for a conversation or a written clarification.

                ## Notes
                Search your email and messaging apps for words like equity, options, percent and shares. Verbal promises are where the worst disputes start.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One list covers every signed instrument and unsigned equity promise, each with an estimated share count and a document reference or a flag."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search email and chat history for equity, options, shares and percent"
                - "List every signed SAFE, note, warrant and grant with its key terms"
                - "Write down each verbal or informal equity promise you remember"
                - "Flag every unclear promise and decide who to clarify it with"
            - name: Founder dilution model spreadsheet
              description: |-
                ## Purpose
                Cap table software records what has already happened; a dilution model shows what could happen next. A spreadsheet with a current position tab, a round assumptions tab and a scenarios tab lets you test any raise, grant or conversion in minutes instead of waiting days for a lawyer's pro forma.

                ## Milestones
                1. A current position tab that matches the fully diluted snapshot to the share.
                2. An assumptions tab with round size, pre-money valuation, pool top-up and conversions as inputs.
                3. A scenarios tab showing each founder's percentage after every modelled round.
                4. Formulas checked by recreating one past round and matching its real result.
                5. A locked, dated copy saved before each major change.

                ## Notes
                Keep inputs in one colour and formulas in another, and never overwrite a formula with a typed number. Many cap table platforms include a modelling feature; use it to cross-check your sheet.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dilution model reproduces your last actual round to within a fraction of a percent and shows founder ownership after at least three future rounds."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create a spreadsheet with current position, assumptions and scenario tabs"
                - "Enter the fully diluted snapshot as the starting position"
                - "Build formulas for new shares issued at a given pre-money valuation"
                - "Recreate your last real round and check the model matches it"
            - name: Authorised shares and share class check
              description: |-
                ## Purpose
                Before modelling future rounds you need to know how many shares the company may issue and which classes already exist, because a raise or a pool top-up can need a shareholder vote just to create the shares. Checking the constitutional documents now avoids building scenarios the company cannot carry out without extra legal steps.

                ## Milestones
                1. The authorised share limit, or its equivalent in your jurisdiction, confirmed from the articles or constitution.
                2. Existing share classes and their main rights summarised in plain words.
                3. Headroom between authorised and fully diluted shares calculated.
                4. Any amendment needed for the next round noted for your lawyer.

                ## Notes
                Some jurisdictions have no authorised capital limit at all; your lawyer can confirm what applies to your company.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The authorised share limit, existing classes and remaining headroom are written in the model, with any needed amendment flagged for the lawyer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the current articles or constitution in the company records"
                - "Note the authorised share limit and each existing share class"
                - "Calculate headroom against the fully diluted share count"
                - "Ask your lawyer whether the next round needs an amendment"
            - name: Founder ownership floor and control goals
              description: |-
                ## Purpose
                Without written goals, each round gets judged on its own and founders can drift below a level they would have refused if asked up front. Deciding the ownership you want at a likely exit, the voting position you want to keep and the point at which you would change course gives every later term sheet a yardstick.

                ## Milestones
                1. A target founder ownership range at a likely exit written down, with the reasoning.
                2. A minimum percentage below which you would rethink the funding plan.
                3. The control position that matters to you named: board majority, a veto on a sale, or neither.
                4. Co-founders' goals compared with yours and the differences discussed.

                ## Notes
                These are personal goals, not promises from investors. They will move as the company grows; the value lies in deciding them deliberately rather than by default.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written ownership and control goals, agreed between co-founders, sit at the top of the dilution model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the ownership range you would be content with at an exit"
                - "Name the lowest percentage you would accept before rethinking the plan"
                - "Decide which control rights matter to you and which do not"
                - "Compare goals with each co-founder in one meeting"
                - "Revisit the ownership floor after each closed round"
            - name: Founder vesting and acceleration terms on record
              description: |-
                ## Purpose
                Founder shares are often subject to vesting or repurchase rights, and new investors frequently ask founders to re-vest part of their holding at a priced round. Knowing exactly how many of your shares are vested, what happens on a sale or a dismissal, and what re-vesting would mean protects ownership you assumed was already yours.

                ## Milestones
                1. Your vesting schedule, cliff and vested share count confirmed from the signed documents.
                2. Single or double trigger acceleration terms summarised in one sentence.
                3. The company's repurchase rights over unvested shares understood.
                4. A position on re-vesting before the next priced round prepared with your lawyer.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your vested and unvested share counts, acceleration terms and a position on re-vesting are recorded and checked by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your signed founder share or vesting agreement"
                - "Write down vested and unvested share counts as of today"
                - "Summarise the acceleration terms in one sentence"
                - "Ask your lawyer which re-vesting requests are common at your next stage"
            - name: Dilution model tied out to the share register
              description: |-
                ## Purpose
                A model that drifts from the legal record will mislead you at the worst possible moment, usually in front of an investor. Reconciling every line against the share register and the cap table platform, and fixing the differences with your lawyer, means the numbers you present are the numbers that will appear at closing.

                ## Milestones
                1. Every holder and share count in the model matched against the share register.
                2. Differences listed with the reason for each, such as an unrecorded exercise or a lapsed option.
                3. Corrections made in the right place: the model, the platform or the legal records.
                4. A quarterly reconciliation fixed in the calendar.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The dilution model and the official share register agree line by line, with every past difference explained and resolved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the share register and the cap table platform holdings"
                - "Match each holder line by line against the model"
                - "List every difference and its likely cause"
                - "Send corrections that need legal records to your lawyer"
                - "Reconcile the dilution model to the share register @recurring(quarterly)"
            - name: Base case funding path assumptions
              description: |-
                ## Purpose
                Projecting dilution means assuming how many rounds you will raise, how large they will be and at what valuations, and most founders carry those assumptions only in their heads. Writing down a base case path, checked against a recent published benchmark of round sizes and dilution at your stage, makes the model honest and easy for others to challenge.

                ## Milestones
                1. A base case written: each planned round with timing, amount and a pre-money valuation range.
                2. Assumptions compared with at least one recent published dataset on round dilution for your sector and region.
                3. A pool top-up assumption added for each round.
                4. Each assumption given a one-line reason and a dated source.

                ## Notes
                Benchmarks move with the funding market, so date every figure you take from a report. Treat them as a sense check, never a forecast.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated base case lists every planned round with amount, valuation range, pool top-up and the source behind each assumption."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your planned rounds with rough timing and amounts"
                - "Find a recent published benchmark of round sizes and dilution for your stage"
                - "Add a pool top-up assumption to each round"
                - "Note the source and date beside every assumption"
                - "Check the base case against the latest benchmark data @recurring(quarterly)"
            - name: Choosing who checks your dilution model
              description: |-
                ## Purpose
                A spreadsheet built alone late at night will contain at least one error, and the people best placed to find it are a startup lawyer, a fractional finance lead or a founder who has been through several priced rounds. Picking one named reviewer now, before a term sheet arrives, means a second pair of eyes is a message away when timing is tight.

                ## Milestones
                1. Two or three possible reviewers listed with their experience of priced rounds.
                2. One reviewer agreed, with how they charge or what they would like in return.
                3. The model sent for a first review and the corrections made.
                4. The reviewer's contact and usual turnaround written in the model's notes tab.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named reviewer has checked the dilution model at least once and their corrections are recorded in it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List founders, lawyers and finance leads who have modelled priced rounds"
                - "Ask one of them to review the model and agree terms"
                - "Send the model with a short note on what to check"
                - "Send the updated model to your reviewer for a full check @recurring(yearly)"
            - name: Monthly dilution model refresh
              description: |-
                ## Purpose
                Hires, adviser agreements, option exercises and new SAFEs change the fully diluted count almost every month in a growing company. A fixed monthly refresh of about twenty minutes keeps the model current, so you never have to rebuild it from scratch under deadline pressure.

                ## Milestones
                1. A fixed day each month set aside for the refresh.
                2. Every new grant, exercise, lapse or instrument from the month entered.
                3. Founder fully diluted percentages updated and the change since last month noted.
                4. Six consecutive monthly refreshes completed.

                ## Notes
                Start from the **Metrics log** template to record each month's founder percentage with the date and the reason it moved.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly refreshes are logged, each with founder percentages and the reason for any change."
                cadence: rolling
              tasks:
                - "Create a metrics log for monthly founder ownership figures"
                - "Ask whoever approves grants to copy you on every new equity document"
                - "Enter the month's grants, exercises and new instruments in the model @recurring(monthly:12)"
                - "Record each founder's fully diluted percentage and the change"
            - name: Quarterly ownership scenario review
              description: |-
                ## Purpose
                Plans change: a round slips, a metric jumps, a competitor raises a large round. Rerunning low, base and high scenarios each quarter with the latest runway and traction shows whether your ownership goals still look reachable, and which lever among timing, amount and valuation matters most right now.

                ## Milestones
                1. Low, base and high scenarios defined, with the inputs that differ between them.
                2. Scenarios rerun each quarter with updated runway and metrics.
                3. Founder ownership at exit compared with your written goals in each scenario.
                4. One decision or open question carried forward from each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews are completed in a year, each recording ownership at exit under three scenarios against written goals."
                cadence: rolling
              tasks:
                - "Define what changes between your low, base and high scenarios"
                - "Rerun all three scenarios with current runway and metrics @recurring(quarterly)"
                - "Write one decision or question that came out of the review"
            - name: Equity promise log
              description: |-
                ## Purpose
                Founders under hiring pressure promise equity in interviews, adviser chats and partner negotiations, and these promises add up long before anyone drafts a grant. A running log of every equity offer, with who agreed it and when it became a document, keeps promised dilution visible and stops two people promising the same slice.

                ## Milestones
                1. A log with columns for person, amount, date promised, who promised it and document status.
                2. Every co-founder and hiring manager using the log before offering equity.
                3. Each promise turned into a signed document or withdrawn in writing.
                4. Promised but unsigned equity included as a line in the dilution model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every equity offer made in the last six months appears in the log, and none older than sixty days is still undocumented."
                cadence: rolling
              tasks:
                - "Create the equity promise log with person, amount and status columns"
                - "Ask each co-founder and manager to log offers before making them"
                - "Chase any promise still undocumented after sixty days @recurring(monthly:20)"
            - name: Option grant tracking against the hiring plan
              description: |-
                ## Purpose
                The option pool is sized from a hiring plan, but real grants drift: a senior hire negotiates more, a role gets filled early, a key person needs a top-up to stay. Comparing actual grants each quarter with what the plan assumed shows how fast the pool, and with it your future dilution, is being used up.

                ## Milestones
                1. The hiring plan's grant assumptions listed role by role.
                2. Actual grants matched against those assumptions each quarter.
                3. The month the pool is projected to run out estimated.
                4. Any overrun raised early with co-founders or the board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly comparison of planned and actual grants exists for the last year, with a projected pool run-out month."
                cadence: rolling
              tasks:
                - "List the grant size the hiring plan assumed for each role"
                - "Compare actual grants with the plan and update the run-out month @recurring(quarterly)"
                - "Raise any overrun at the next co-founder or board meeting"
            - name: Pre-signing dilution check routine
              description: |-
                ## Purpose
                Most dilution surprises come from documents signed quickly: a SAFE side letter with a most favoured nation clause, a debt facility with warrants, an adviser agreement with no vesting. A short checklist you run before signing anything that touches shares catches the effect while it can still be negotiated.

                ## Milestones
                1. A one-page checklist covering share count, conversion terms, vesting, warrants and side letters.
                2. The checklist agreed between co-founders as a standing rule.
                3. Every equity-related document signed in the last quarter run through it as a test.
                4. Each new document's dilution effect entered in the model before signature.

                ## Notes
                Keep it short enough to use on a phone between meetings. Ten questions is plenty.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every equity-related document signed in the last six months has a completed checklist and a model entry dated before signature."
                cadence: rolling
              tasks:
                - "Write a ten-question pre-signing checklist for any equity document"
                - "Agree with co-founders that nothing touching shares is signed without it"
                - "Run the last three signed documents through the checklist as a test"
                - "Update the checklist for any new kind of instrument you have met @recurring(yearly)"
            - name: Adviser equity budget and yearly review
              description: |-
                ## Purpose
                Adviser grants look small one at a time, yet five advisers at half a percent each is a meaningful slice before the first priced round. Setting a total adviser budget, a standard vesting schedule and a yearly look at who is still adding value keeps this kind of dilution deliberate.

                ## Milestones
                1. A total adviser equity budget set as a percentage of fully diluted shares.
                2. A standard adviser grant size and vesting schedule written down.
                3. Every current adviser's grant, vesting and contribution listed.
                4. A yearly decision recorded for each adviser: continue, end vesting or adjust.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All adviser grants fit inside a written budget, and each adviser has a recorded yearly continue or end decision."
                cadence: cyclic
              tasks:
                - "Set the total adviser equity budget as a share of fully diluted shares"
                - "Write a standard adviser grant size and vesting schedule"
                - "Review each adviser's contribution and vesting status @recurring(yearly)"
            - name: Annual founder ownership report
              description: |-
                ## Purpose
                Once a year it is worth stepping back from monthly figures and writing a short report for yourself and your co-founders: where ownership started, where it stands, what drove each change and where the base case says it will end. The written record exposes patterns, like adviser creep or repeated small SAFEs, that monthly numbers hide.

                ## Milestones
                1. A two-page report with opening and closing ownership for each founder.
                2. Every dilutive event of the year listed with its effect.
                3. This year's projected exit ownership compared with last year's projection.
                4. The report discussed at a co-founder meeting and filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly ownership report exists for each of the last two years, each discussed with co-founders and filed with the model."
                cadence: cyclic
              tasks:
                - "Pull the year's monthly ownership log into one table"
                - "Ask the agent to draft a two-page summary of what drove each change"
                - "Compare this year's exit projection with last year's"
                - "Finish and file the founder ownership report @recurring(yearly)"
            - name: Runway and raise timing tracker
              description: |-
                ## Purpose
                Dilution depends heavily on when you raise: a company with three months of cash left negotiates from weakness and usually gives away more. Tracking runway monthly against the point where a raise must begin shows when to start, and whether a cost change or a small bridge would protect ownership.

                ## Milestones
                1. Monthly runway in months recorded from the latest cash and burn figures.
                2. A start-raise trigger agreed, such as nine months of runway remaining.
                3. The projected trigger month kept visible in the dilution model.
                4. Any early warning discussed with co-founders before it becomes urgent.

                ## Notes
                Raises usually take longer than planned. Build that delay into the trigger rather than hoping for a quick close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly runway figures are recorded, with a projected start-raise month that every co-founder has seen."
                cadence: rolling
              tasks:
                - "Agree the runway level at which a raise must start"
                - "Record runway in months from the latest cash and burn @recurring(monthly:5)"
                - "Move the projected start-raise month in the model when runway changes"
            - name: Yearly co-founder ownership conversation
              description: |-
                ## Purpose
                Ownership tension between co-founders tends to build quietly, especially when roles shift or one founder carries more of the load. A planned yearly conversation about contributions, vesting, goals and the latest projections gives space to raise it calmly, not in the middle of a term sheet.

                ## Milestones
                1. A yearly date in every co-founder's calendar, away from fundraising weeks.
                2. A shared agenda: current ownership, projections, roles and any concerns.
                3. Notes written and agreed by everyone present.
                4. Any agreed change handed to the lawyer with a target date.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A yearly co-founder ownership conversation has written, agreed notes for each of the last two years."
                cadence: cyclic
              tasks:
                - "Agree a yearly date with your co-founders outside any raise"
                - "Share the agenda and latest projections a week before"
                - "Hold the yearly co-founder ownership conversation @recurring(yearly)"
                - "Write up agreed notes and actions in the meeting notes template"
            - name: Refresh grant forecast for the team
              description: |-
                ## Purpose
                Early employees' options often finish vesting after four years, and companies that want to keep those people grant refreshes, which dilute everyone including founders. Forecasting refresh grants a year ahead puts this cost into the model before it surprises you in a board meeting.

                ## Milestones
                1. Employees whose grants fully vest in the next eighteen months listed.
                2. A refresh assumption per person or per level agreed with co-founders.
                3. The total refresh cost added to the model as a yearly line.
                4. Last year's forecast compared with the refresh grants actually made.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A refresh grant forecast for the next eighteen months is in the model, and last year's forecast has been compared with actual grants."
                cadence: cyclic
              tasks:
                - "List employees whose grants finish vesting in the next eighteen months"
                - "Agree a refresh assumption for each level with co-founders"
                - "Update the refresh forecast in the dilution model @recurring(yearly)"
            - name: Dilution vocabulary with worked examples
              description: |-
                ## Purpose
                Investors and lawyers use pre-money, post-money, fully diluted, pro rata and pool top-up as if everyone knows them, and founders tend to nod along. Building your own one-page glossary, with a worked number beside each term, means you can follow a term sheet conversation in real time and spot a figure that does not add up.

                ## Milestones
                1. Twelve core terms defined in your own words.
                2. A small numeric example beside each definition.
                3. The glossary checked by your model reviewer.
                4. The glossary kept in the dilution model's notes tab.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of twelve dilution terms, each with a worked example, has been checked by your reviewer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the dilution terms you have heard but could not explain"
                - "Write each term in your own words with a numeric example"
                - "Ask your model reviewer to correct any mistakes"
                - "Save the glossary in the model's notes tab"
            - name: Pre-money and post-money maths practice
              description: |-
                ## Purpose
                Price per share, new shares issued and the investor's percentage all follow from a few lines of arithmetic, and fluency with them is what lets you sanity check an offer on the spot. Working ten practice rounds by hand, then checking each in the model, builds that fluency in a couple of evenings.

                ## Milestones
                1. The formulas for price per share, new shares and post-money ownership written out.
                2. Ten practice rounds worked by hand with different sizes and valuations.
                3. Each answer checked against the dilution model.
                4. Two real rounds, your own or published examples, recalculated from scratch.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten hand-worked practice rounds match the model's results, and you can explain each step to a co-founder."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write out the formulas for price per share and post-money ownership"
                - "Work ten practice rounds by hand on paper"
                - "Check each answer against the dilution model"
                - "Explain one worked round to a co-founder without notes"
            - name: How SAFEs and notes convert into your ownership
              description: |-
                ## Purpose
                Pre-money and post-money SAFEs, caps, discounts and note interest all change how many shares early investors receive at the next priced round, and founders absorb most of that effect. Learning the conversion mechanics with your own instruments as the examples shows what the stack of early money will really cost you.

                ## Milestones
                1. The difference between pre-money and post-money SAFE conversion understood through an example.
                2. Cap, discount and interest effects worked through for one SAFE or note.
                3. Every outstanding instrument converted in the model at three possible priced-round valuations.
                4. Founder ownership after conversion compared across the three valuations.

                ## Notes
                Instrument wording varies by country and template version, so convert using the exact terms in your signed documents and ask your lawyer about anything unclear.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every outstanding SAFE or note is converted in the model at three valuations, with founder ownership shown for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the conversion clause in each signed SAFE or note"
                - "Work one conversion by hand with its cap and discount"
                - "Convert every instrument in the model at three valuations"
                - "Ask your reviewer to check the conversion formulas"
            - name: Option pool shuffle and the founder cost
              description: |-
                ## Purpose
                When investors ask for the pool to be created or topped up before their money comes in, the new options dilute existing holders only, mostly founders, and the headline valuation hides that cost. Understanding the effect, and calculating an effective pre-money valuation, lets you discuss pool size with numbers in hand.

                ## Milestones
                1. The difference between a pre-money and a post-money pool top-up shown with an example.
                2. The effective pre-money valuation formula written in the glossary.
                3. Your next round modelled with three pool sizes.
                4. The founder ownership cost of each extra point of pool recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your next round is modelled with three pool sizes, showing founder ownership and effective pre-money valuation for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work a pool top-up example inside and outside the pre-money"
                - "Add the effective pre-money valuation formula to the glossary"
                - "Model the next round with three pool sizes"
                - "Note the founder cost of each extra point of pool"
            - name: Founder proceeds under liquidation preferences
              description: |-
                ## Purpose
                Percentage ownership tells only half the story; preferences decide who is paid first when the company is sold. Learning how non-participating, participating and stacked preferences play out at different exit values shows what founder shares are worth in a modest sale, not only in a spectacular one.

                ## Milestones
                1. Non-participating, participating and capped participation preferences explained in your own words.
                2. A simple waterfall tab built for the current cap table.
                3. Founder proceeds calculated at five exit values, from low to high.
                4. The exit value above which preferences stop mattering identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A waterfall shows founder proceeds at five exit values for the current cap table, with the preference breakpoint identified."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the preference terms in your current investor documents"
                - "Build a simple waterfall tab in the dilution model"
                - "Calculate founder proceeds at five exit values"
                - "Mark the exit value where preferences stop mattering"
            - name: Anti-dilution clauses and what they cost founders
              description: |-
                ## Purpose
                Broad-based weighted average and full ratchet clauses protect investors if a later round is priced lower, and the extra shares they create come mostly out of founder and employee ownership. Working through both formulas on a hypothetical lower-priced round makes the cost concrete before you agree to either.

                ## Milestones
                1. Broad-based weighted average, narrow-based and full ratchet each explained in a sentence.
                2. The anti-dilution terms in your existing documents identified.
                3. A hypothetical lower-priced round modelled under each method.
                4. Founder ownership after each adjustment recorded side by side.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side model shows founder ownership after a hypothetical lower-priced round under weighted average and full ratchet adjustments."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the anti-dilution clause in your current investment documents"
                - "Write a one-sentence explanation of each anti-dilution method"
                - "Model a hypothetical lower-priced round under each method"
                - "Compare founder ownership across the methods"
            - name: Investor pro rata rights in future rounds
              description: |-
                ## Purpose
                Pro rata and super pro rata rights let existing investors keep or grow their stake in later rounds, which shapes how much room is left for new investors and how a round gets priced. Knowing who holds these rights, and how much they are likely to take up, makes the later rounds in your model realistic.

                ## Milestones
                1. Every investor with pro rata or super pro rata rights listed with any ownership thresholds.
                2. The share of each future round those rights could claim calculated.
                3. A take-up assumption agreed for the base case.
                4. The effect on new investor allocation and founder ownership noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The model lists every pro rata right with its potential claim on the next two rounds and an agreed take-up assumption."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the investors whose documents grant pro rata rights"
                - "Calculate how much of the next round those rights could claim"
                - "Agree a take-up assumption for the base case"
                - "Ask your lead investor how they usually use their pro rata"
            - name: Bigger-pie test of ownership versus outcome
              description: |-
                ## Purpose
                Holding on to percentage can cost more than it saves if it means raising too little to win the market. Comparing founder proceeds under a lean path and a well-funded path, each with honest exit assumptions, helps you judge dilution by outcome rather than by percentage alone.

                ## Milestones
                1. Two paths defined: raise less and grow slower, or raise more and grow faster.
                2. A plausible exit range for each path written with its reasoning.
                3. Founder proceeds after preferences calculated for both paths.
                4. A paragraph written on which path fits your goals and why.

                ## Notes
                Exit values are guesses, so test a range and look at the shape of the answer rather than a single number.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Founder proceeds under a lean and a well-funded path are compared across an exit range, with a written conclusion."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define a lean path and a well-funded path in the model"
                - "Write a plausible exit range for each path"
                - "Compare founder proceeds after preferences on both paths"
                - "Write a paragraph on which path fits your goals"
            - name: Raise size decision across three amounts
              description: |-
                ## Purpose
                Raising more buys runway and options but costs ownership, while raising too little can force a weak bridge later. Modelling three raise sizes, each with the milestones it funds and the dilution it causes, gives you a reasoned ask instead of a round number lifted from a pitch deck example.

                ## Milestones
                1. Three raise amounts chosen, each tied to a runway length and a milestone.
                2. Founder ownership after each amount modelled, including any pool top-up.
                3. The risk of a follow-on bridge noted for the smallest amount.
                4. One amount chosen, with reasons written down and shared with co-founders.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written raise size decision compares three amounts by runway, milestone and founder ownership, agreed by co-founders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose three raise amounts tied to different milestones"
                - "Model founder ownership after each amount"
                - "Write the runway and milestone each amount buys"
                - "Agree the chosen amount and reasons with co-founders"
            - name: Ranking competing offers by founder outcome
              description: |-
                ## Purpose
                A higher headline valuation can carry a bigger pool, a participating preference or warrants that leave founders worse off than a lower, cleaner offer. Running every offer through the same model and comparing founder ownership and proceeds at several exit values shows which deal is better for you, not just which sounds better.

                ## Milestones
                1. Each offer's valuation, amount, pool, preference and extras entered as a separate scenario.
                2. Founder fully diluted ownership after each offer calculated.
                3. Founder proceeds at three exit values compared across offers.
                4. A ranked comparison shared with your lawyer and co-founders.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table ranks every live offer by founder ownership and proceeds at three exit values, reviewed by your lawyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Enter each offer as its own scenario in the model"
                - "Calculate founder ownership after each offer"
                - "Compare founder proceeds at low, middle and high exits"
                - "Send the ranked comparison to your lawyer and co-founders"
            - name: Non-dilutive capital versus equity comparison
              description: |-
                ## Purpose
                Grants, revenue-based financing and venture debt cost money or effort but leave the cap table alone, while equity costs ownership but needs no repayment. Comparing the true cost of each option for your next funding need, in cash and in founder ownership, shows whether part of the raise could come from a source that does not dilute you.

                ## Milestones
                1. The next funding need described with amount and timing.
                2. Two or three non-dilutive options identified with their indicative cost and conditions.
                3. Founder ownership modelled with and without each option.
                4. A decision on the funding mix recorded, with any specialist advice noted.

                ## Notes
                Debt and revenue-based finance must be repaid whatever happens, so test the repayments against a cautious forecast and take advice before signing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the next funding mix compares equity with at least two non-dilutive options by cash cost and founder ownership."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the next funding need with amount and timing"
                - "List two or three non-dilutive options that could cover part of it"
                - "Model founder ownership with and without each option"
                - "Record the funding mix decision and who advised on it"
            - name: Raise now or after the next milestone
              description: |-
                ## Purpose
                Waiting for a milestone such as a revenue level or a product launch can lift the valuation and cut dilution, but only if the cash lasts and the milestone actually lands. Modelling both timings, including the risk of a slip, turns a gut call into a decision you can explain to co-founders and existing investors.

                ## Milestones
                1. The milestone and its likely effect on valuation described with evidence.
                2. Runway checked for the wait, with a buffer for delay.
                3. Founder ownership modelled for raising now and raising after the milestone.
                4. A decision and a fallback start date written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on raise timing compares founder ownership now and after the milestone, with a fallback date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the milestone and why it should lift the valuation"
                - "Check runway lasts until the milestone plus a three-month buffer"
                - "Model founder ownership for both timings"
                - "Set a fallback date for starting the raise regardless"
            - name: SAFE stack review before taking more
              description: |-
                ## Purpose
                Small SAFEs signed one at a time at different caps can stack into a large conversion that lands on founders all at once at the first priced round. Reviewing the full stack before accepting another, and setting a limit, keeps early money from quietly costing more than a priced round would have.

                ## Milestones
                1. Every SAFE and note listed with amount, cap, discount and type.
                2. The whole stack converted at a likely priced-round valuation.
                3. A limit on further SAFE money set, as an amount or a founder ownership floor.
                4. The decision to continue on SAFEs or move to a priced round recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The full SAFE stack is converted at a likely valuation and a written limit on further SAFE money is agreed by co-founders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every SAFE and note with amount, cap, discount and type"
                - "Convert the whole stack at a likely priced-round valuation"
                - "Set a limit on further SAFE money"
                - "Decide whether the next money comes on a SAFE or a priced round"
            - name: Rebalancing founder splits before the next round
              description: |-
                ## Purpose
                Splits agreed at incorporation sometimes stop matching reality when a co-founder steps back, goes part time or takes on far more. Raising it before a priced round, while shares are easier to adjust and before investors ask anyone to re-vest, gives the fairest and least public route to a new split.

                ## Milestones
                1. Each founder's role, time commitment and contribution since founding written down honestly.
                2. A proposed new split, or a decision to keep the current one, discussed openly.
                3. Any change documented by a lawyer through vesting, transfer or repurchase.
                4. The model and cap table updated to match the signed documents.

                ## Notes
                If the conversation stalls, a neutral experienced founder or a mediator can help. Never change shares informally; every adjustment needs proper documents.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Co-founders have agreed in writing to keep or change the split, and any change appears in signed documents and the cap table."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write each founder's role and time commitment since founding"
                - "Book an unhurried co-founder meeting about the split"
                - "Ask your lawyer how any agreed change should be documented"
                - "Update the model once the documents are signed"
            - name: Founder voting control options with your lawyer
              description: |-
                ## Purpose
                Economic dilution and loss of control are different problems: you can own 20 percent and still control the board, or own 40 percent and control nothing. Exploring founder board seats, voting agreements or dual-class shares with a lawyer, early, tells you which protections are realistic at your stage and which would cost goodwill with investors.

                ## Milestones
                1. Your current voting position mapped: board seats, votes and consent rights.
                2. Three or four control mechanisms researched, with how common each is at your stage.
                3. A lawyer's view obtained on what is realistic in your jurisdiction.
                4. A decision recorded on which, if any, to ask for in the next round.

                ## Notes
                Dual-class structures are uncommon at early stages in many markets and can put some investors off. Treat this as a question for your lawyer, not a template to copy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lawyer-reviewed note sets out your current voting position and which control mechanism, if any, you will seek next round."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Map who holds board seats, votes and consent rights today"
                - "Research founder board seats, voting agreements and dual-class shares"
                - "Ask your lawyer which options suit your jurisdiction and stage"
                - "Record which protections you will ask for in the next round"
            - name: Walk-away numbers before a raise begins
              description: |-
                ## Purpose
                Once term sheet talks start, momentum and fatigue make it easy to accept whatever is on the table. Setting your target and walk-away founder ownership, plus the valuation and pool combinations that meet them, before the first investor meeting gives you a line that does not move with the mood of the week.

                ## Milestones
                1. A target and a walk-away founder ownership after the round agreed between co-founders.
                2. A grid of valuation and pool combinations showing which meet each line.
                3. The grid checked by your model reviewer.
                4. The numbers kept private between founders and advisers.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A co-founder-agreed target and walk-away ownership, with a checked grid of acceptable terms, exists before the first investor meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree target and walk-away founder ownership with co-founders"
                - "Build a grid of valuation and pool combinations in the model"
                - "Ask your reviewer to check the grid"
                - "Keep the grid out of anything shared with investors"
            - name: Term sheet pro forma rebuilt within 48 hours
              description: |-
                ## Purpose
                Term sheets often arrive with a pro forma cap table prepared by the investor, and it reflects their reading of the pool, conversions and share counts. Rebuilding it yourself within two days, from your own model, catches differences while there is still time to raise them in the negotiation.

                ## Milestones
                1. The term sheet's economics entered as a new scenario.
                2. Your pro forma compared line by line with the investor's.
                3. Every difference listed with the clause that causes it.
                4. Questions on the differences sent to your lawyer before you respond.
              priority: high
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "Within two days of receiving a term sheet, your own pro forma is compared with the investor's and every difference is listed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Enter the term sheet economics as a new model scenario"
                - "Compare your pro forma with the investor's line by line"
                - "List each difference and the clause behind it"
                - "Send the differences to your lawyer before replying"
            - name: Closing pro forma sign-off
              description: |-
                ## Purpose
                The final cap table at closing is drafted by lawyers from the signed documents, and small errors in conversions or pool size become permanent once shares are issued. Checking the closing pro forma against your model before signing, and asking about every gap, is the last chance to get the numbers right.

                ## Milestones
                1. The lawyer's closing pro forma received before signature pages are released.
                2. Each holder's post-round shares compared with the model.
                3. Every difference explained or corrected in writing.
                4. The agreed pro forma saved as the new starting point in the model.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The closing pro forma matches your model, or every difference is explained in writing, before signature pages are released."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your lawyer for the closing pro forma before signing"
                - "Compare each holder's post-round shares with your model"
                - "Get every difference explained or corrected in writing"
                - "Save the agreed pro forma as the model's new starting point"
            - name: Post-round dilution debrief
              description: |-
                ## Purpose
                Comparing what you expected to give away with what you actually gave away is the fastest way to get better at the next round. A short debrief within a month of closing, covering the pool, conversions, valuation and any late changes, sharpens every assumption in the model.

                ## Milestones
                1. Expected and actual founder ownership after the round set side by side.
                2. Each cause of the gap identified: pool, conversions, valuation or late terms.
                3. The base case funding path updated with what you learned.
                4. Three lessons written down for the next raise.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written debrief compares expected and actual founder ownership, names each cause of the gap and lists three lessons."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put expected and actual founder ownership side by side"
                - "Identify what caused each part of the gap"
                - "Update the base case funding path with the new figures"
                - "Write three lessons for the next raise"
            - name: Founder take-home from an acquisition offer
              description: |-
                ## Purpose
                When an acquirer makes an approach, the headline price says little about what founders will receive after preferences, the option pool, transaction costs and any earn-out or retention terms. Running the offer through your waterfall within days lets you respond knowing your real number.

                ## Milestones
                1. The offer's price, structure and conditions summarised from the letter.
                2. Founder proceeds calculated through the waterfall, after preferences and costs.
                3. Cash at completion separated from deferred or conditional amounts.
                4. The result reviewed with your lawyer before any reply.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Founder proceeds from the offer, split into cash at completion and deferred amounts, are calculated and reviewed with a lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the offer's price, structure and conditions on one page"
                - "Run the offer through the waterfall to get founder proceeds"
                - "Separate cash at completion from earn-out and retention amounts"
                - "Review the result with your lawyer before replying"
            - name: Solo founder dilution plan
              description: |-
                ## Purpose
                Solo founders start with a bigger stake but often hand large grants to early executives or a late co-founder to fill the gaps, and investors may push for exactly that. Planning the equity you would offer a first key hire, and what it does to your path, means you can say yes quickly to the right person without overpaying.

                ## Milestones
                1. The roles you most need filled by someone with meaningful equity named.
                2. A grant range for each role modelled against your ownership goals.
                3. The effect of a late co-founder on your base case shown.
                4. A vesting and cliff standard written for any large early grant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written equity plan for your first key hires shows grant ranges and their effect on your ownership path."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the roles you would fill with a significant equity grant"
                - "Model a grant range for each role"
                - "Show how a late co-founder changes your base case"
                - "Write the vesting standard you would offer for large grants"
            - name: Bringing in a late co-founder
              description: |-
                ## Purpose
                Someone who joins as a co-founder after the company has customers or money is taking less risk than the original founders, and their stake should reflect that without making them feel like an employee. Modelling a fair range and its effect on everyone's path, before the offer conversation, avoids an awkward renegotiation later.

                ## Milestones
                1. The candidate's role, start date and expected contribution written down.
                2. Three possible stakes modelled, with each founder's ownership after each.
                3. Vesting, cliff and any acceleration terms proposed.
                4. The offer agreed in principle and passed to a lawyer for documents.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A late co-founder's stake is chosen from three modelled options and documented by a lawyer with vesting terms."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the late co-founder's role and expected contribution"
                - "Model three stake sizes and each founder's ownership after"
                - "Propose vesting and cliff terms"
                - "Pass the agreed terms to your lawyer for documents"
            - name: Remaining founders' stakes after a co-founder leaves
              description: |-
                ## Purpose
                When a co-founder leaves, what happens to their vested and unvested shares decides whether the remaining team keeps enough equity to attract a replacement and reassure investors. Working through the repurchase, the new fully diluted count and any grant for a successor turns a painful moment into a clear plan.

                ## Milestones
                1. The departing founder's vested and unvested shares confirmed from the documents.
                2. Repurchase or cancellation of unvested shares handled through the lawyer.
                3. The remaining founders' new percentages calculated.
                4. Equity for a successor, or extra grants for those who stay, modelled and agreed.

                ## Notes
                Keep the conversation separate from the paperwork: generous in tone, exact in documents. Take legal advice before any share is repurchased.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "After a co-founder departure, unvested shares are dealt with in signed documents and the remaining founders' new ownership is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the departing founder's vested and unvested shares"
                - "Ask your lawyer how the unvested shares should be handled"
                - "Recalculate the remaining founders' ownership"
                - "Model equity for a successor or for those who stay"
            - name: Bootstrapped company weighing its first raise
              description: |-
                ## Purpose
                Founders who have grown on revenue own close to everything, and a first raise is often the biggest single drop in ownership they will ever take. Modelling what the raise funds against what growing on revenue alone would deliver shows whether outside money is worth the stake, and how much to raise if it is.

                ## Milestones
                1. A revenue-only growth path written with honest assumptions.
                2. A funded growth path written for the proposed raise.
                3. Founder ownership and likely proceeds compared across both paths.
                4. A decision recorded: raise, wait, or use non-dilutive funding.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a first raise compares revenue-only and funded paths by founder ownership and proceeds."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a revenue-only growth path for the next three years"
                - "Write a funded growth path for the proposed raise"
                - "Compare founder ownership and proceeds on both paths"
                - "Record the decision and the reasons behind it"
            - name: Linking ownership to personal financial plans
              description: |-
                ## Purpose
                With a mortgage, children or a parent to support, a founder may care more about a solid outcome in five years than a long shot in ten. Connecting the dilution model to your personal financial picture, with an independent financial planner, makes ownership decisions match the life they are meant to fund.

                ## Milestones
                1. Your personal financial needs and timelines written down.
                2. The founder proceeds needed to meet them estimated across a range of exits.
                3. The estimate discussed with an independent financial planner.
                4. A yearly review of personal goals against the model in the calendar.

                ## Notes
                This is planning, not advice: an independent planner should check any personal financial decision you make from it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Personal financial goals are linked to modelled founder proceeds and have been reviewed with an independent planner."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your personal financial needs for the next ten years"
                - "Estimate the founder proceeds needed across a range of exits"
                - "Book a session with an independent financial planner"
                - "Review personal goals against the dilution model @recurring(yearly)"
            - name: Capital-intensive path with five or more rounds
              description: |-
                ## Purpose
                Hardware, life sciences and climate companies can need five or more rounds before meaningful revenue, and founders who model only the next raise are shocked by where they end up. Projecting the full path, with longer gaps and larger rounds, sets realistic expectations and shows where grants or partnerships could replace a round.

                ## Milestones
                1. A path of five or more rounds drawn, with the technical milestone each one funds.
                2. Founder ownership projected after every round in the path.
                3. Points where grants, partnerships or debt could replace equity identified.
                4. The projection shared with co-founders and updated when milestones move.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A path of five or more rounds shows founder ownership after each one and names where non-dilutive funding could replace equity."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw the funding path with the milestone each round funds"
                - "Project founder ownership after every round"
                - "Mark where grants or partnerships could replace equity"
                - "Share the projection with co-founders and one trusted investor"
            - name: Down round stress test for founder ownership
              description: |-
                ## Purpose
                Flat or down rounds trigger anti-dilution adjustments, often a pool top-up and sometimes pay-to-play terms, and the combined hit to founders can be severe. Stress testing your cap table at a 30 percent and a 50 percent lower price, before you ever need to, shows the exposure and what you would need to negotiate.

                ## Milestones
                1. Two down round scenarios modelled at lower prices.
                2. Anti-dilution adjustments applied using your actual documents.
                3. Founder and employee ownership after each scenario recorded.
                4. The biggest exposures added to a risk register with possible responses.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two down round scenarios show founder ownership after anti-dilution adjustments, with exposures recorded in a risk register."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Model rounds at a 30 percent and a 50 percent lower price"
                - "Apply the anti-dilution terms from your documents to each"
                - "Record founder and employee ownership after each scenario"
                - "Add the biggest exposures to a risk register"
            - name: Range-based dilution modelling
              description: |-
                ## Purpose
                Single-number scenarios give a false sense of precision. Modelling each round's valuation, size and pool as ranges, and running many combinations, shows the spread of founder outcomes and the assumptions that move them most, which is how experienced finance leads present dilution to a board.

                ## Milestones
                1. A low and high value set for valuation, round size and pool top-up in each round.
                2. Many combinations run with a data table or a simple simulation.
                3. The spread of founder ownership at exit shown as percentiles.
                4. The two inputs with the biggest effect identified.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A range-based model shows founder ownership at exit as percentiles and names the two inputs that move it most."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set a low and high value for each round's inputs"
                - "Run combinations with a data table or simple simulation"
                - "Chart founder ownership at exit as percentiles"
                - "Rerun the range model with the latest assumptions @recurring(quarterly)"
            - name: Founder control timeline across future rounds
              description: |-
                ## Purpose
                Board seats, consent rights and voting thresholds shift with every round, and founders can lose effective control well before they lose a majority of the shares. Mapping who controls the board, which decisions need investor consent and how each projected round changes that shows when control will move and what is worth negotiating.

                ## Milestones
                1. The current board, voting thresholds and investor consent rights mapped on one page.
                2. The likely board after each future round projected.
                3. The round at which founders lose board control identified.
                4. Negotiating priorities for the next round written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page control timeline shows the board and consent rights after each projected round, with the round where founder control shifts identified."
                cadence: cyclic
              tasks:
                - "Map the current board, voting thresholds and consent rights"
                - "Project the board after each future round"
                - "Mark the round where founders lose board control"
                - "Update the control timeline from the latest documents @recurring(yearly)"
            - name: Founder refresh grant case for the board
              description: |-
                ## Purpose
                At later stages founders can end up with single-digit ownership, and boards sometimes agree a founder refresh grant to keep them committed for the long run. Preparing an evidence-based case, with benchmarks and the dilution it would cause every other holder, gives the board something to decide on rather than a request to react to.

                ## Milestones
                1. Current founder ownership compared with published later-stage benchmarks.
                2. A proposed grant size and vesting schedule, with its dilution to other holders.
                3. The case written as a short paper for the board's compensation discussion.
                4. The board's decision and any conditions recorded.

                ## Notes
                Expect independent directors to take their own advice, and leave the room when your own grant is discussed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A board paper on a founder refresh grant, with benchmarks and dilution to other holders, is submitted and the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather published later-stage benchmarks on founder ownership"
                - "Model the proposed grant's dilution to every other holder"
                - "Ask the agent to draft a two-page board paper from the model"
                - "Record the board's decision and any conditions"
            - name: Founder percentages through a holding company flip
              description: |-
                ## Purpose
                Founders outside the main venture markets are often asked to move the company under a new holding company in another jurisdiction before a round, and the share exchange can change share counts, classes and vesting. Modelling the flip with your lawyer and tax adviser before agreeing to it makes sure founder percentages come through as intended and any tax cost is understood.

                ## Milestones
                1. The proposed structure and share exchange ratio written down from the lawyer's outline.
                2. Founder holdings before and after the flip compared to the share.
                3. Vesting and existing instruments confirmed as carrying over.
                4. Tax questions answered by an adviser in each relevant country.

                ## Notes
                This is a legal and tax process, not a spreadsheet exercise. The model's job is to confirm the numbers come out as agreed.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Founder percentages are shown to be unchanged after the proposed flip, with tax questions answered by advisers in each country."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your lawyer for the proposed structure and exchange ratio"
                - "Compare founder holdings before and after the flip"
                - "Confirm vesting and existing SAFEs carry over unchanged"
                - "Book tax advice in each country involved"
---

# Founder Dilution Planning

This area is for founders who want to know what they will own after the next round and the three after it, not only today. It starts with the foundations (an honest fully diluted snapshot, an inventory of every dilutive promise, a working model and written ownership goals), then the routines that keep the model current, the skills behind the maths, the decisions on raise size, timing and instruments, the events around a term sheet, a closing and an offer, the situations solo founders, late co-founders and bootstrappers face, and finally the specialist work of stress tests, range models and control timelines.

What repeats is a monthly model refresh, equity promise check and runway figure, quarterly scenario reviews and reconciliations to the share register, and a yearly round of adviser, refresh grant and co-founder conversations. The Metrics log, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
