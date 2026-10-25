---
id: engineering-practice.engineering-cost-estimating
name: Engineering Cost Estimating
description: "Estimates people can check and trust: a clear class and basis, quantities and vendor quotes under control, contingency and escalation argued from evidence, and a cost database that gets better with every project."
category: business
version: 1.0.0
tags: [engineering-practice, engineering-cost-estimating, engineer, cost-estimating, cost-engineering, estimate-classes, contingency, benchmarking]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - vendor
    - purchase-decision
    - meeting-notes
    - development-plan
    - reading-queue
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Engineering Cost Estimating
          description: "Estimating engineering and construction costs: estimate classes, quantities, vendor quotes, contingency, escalation and benchmarking against past projects."
          projects:
            - name: Estimate classes and expected accuracy ranges
              description: |-
                ## Purpose
                Engineers are often asked for a number without anyone saying how good it needs to be, and a concept guess ends up quoted as if it were a firm price. Learning the five-class system used across the process industries, from Class 5 screening to Class 1 check estimates, lets you match the method and the effort to the maturity of the scope and say out loud how wide the range is.

                ## Milestones
                1. The five estimate classes summarised on one page with the typical scope maturity, method and accuracy range for each.
                2. Your organisation's own estimate classification, if it has one, mapped against the five classes.
                3. The class of every estimate you currently own written on its cover sheet.
                4. A one-line accuracy statement drafted that you can use whenever you hand over a number.

                ## Notes
                AACE International publishes the widely used classification recommended practices; ranges at Class 5 can be as wide as minus 50 to plus 100 percent, so never present one as a budget.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page class summary exists and every estimate you own carries a stated class and accuracy range on its cover sheet."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the estimate classification guidance your organisation or client uses"
                - "Summarise the five classes with scope maturity, method and range on one page"
                - "Label each estimate you own with its class and accuracy range"
                - "Draft a standard accuracy sentence for estimate cover sheets"
            - name: Basis of estimate document
              description: |-
                ## Purpose
                Six months after an estimate is issued, nobody remembers which drawings revision it priced, which rates it used or what it left out, and the number is defended from memory. A basis of estimate written alongside the workbook records scope, sources, methods, assumptions, exclusions and allowances, so a reviewer can follow every figure and the next revision starts from facts.

                ## Milestones
                1. A basis of estimate outline agreed with sections for scope, documents priced, methods, pricing sources, assumptions, exclusions, allowances, contingency and escalation.
                2. The document list priced recorded with revision numbers and dates.
                3. Exclusions written so plainly that a client could not read them as included.
                4. The basis issued with the estimate under the same document number and revision.

                ## Notes
                Write the basis while you estimate, not afterwards. A basis drafted at the end describes what you wish you had done.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The current estimate is issued with a basis of estimate that lists documents, methods, sources, assumptions, exclusions, contingency and escalation."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Copy a section outline for a basis of estimate into a new document"
                - "List every drawing and datasheet revision the estimate priced"
                - "Write the exclusions list and read it as a sceptical client would"
                - "Issue the basis under the same revision as the estimate workbook"
            - name: Cost breakdown structure and code of accounts
              description: |-
                ## Purpose
                Estimates that are coded differently from the way the project will collect actuals can never be compared afterwards, and benchmarking becomes guesswork. Setting a code of accounts that splits cost by area, discipline and commodity, and agreeing it with project controls before pricing starts, means the estimate becomes the control budget and closed projects feed the database cleanly.

                ## Milestones
                1. A code of accounts with area, discipline and commodity levels documented.
                2. The structure checked against how project controls and accounts will record actual cost.
                3. Every line in the current estimate assigned a code with no orphans.
                4. The code of accounts stored where the next estimate will find it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented code of accounts is agreed with project controls and every line of the current estimate carries a valid code."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask project controls how actual costs will be coded on this project"
                - "Draft area, discipline and commodity levels for the code of accounts"
                - "Run a filter in the workbook for lines with no cost code"
                - "Save the agreed structure in the shared estimating folder"
            - name: Scope definition check before pricing
              description: |-
                ## Purpose
                Pricing an undefined scope produces a precise number for the wrong job. Running a short definition check before estimating, covering deliverables available, battery limits, tie-ins, site conditions and owner's scope, tells you which class is realistic and which gaps must become stated assumptions rather than hidden guesses.

                ## Milestones
                1. A scope checklist completed showing which deliverables exist and at what maturity.
                2. Battery limits and tie-in points marked on a plot plan or sketch.
                3. Gaps listed with an owner and a decision on whether to wait or assume.
                4. The achievable estimate class agreed with the requester before work starts.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed scope checklist with battery limits marked and the agreed estimate class is filed before pricing begins."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the latest scope documents and note their revisions"
                - "Mark the battery limits and tie-ins on the plot plan"
                - "List every scope gap with the person who can close it"
                - "Agree the achievable estimate class with whoever asked for the number"
            - name: Personal historical cost database
              description: |-
                ## Purpose
                Experienced estimators are quick because they remember what similar things cost, and that memory is really a database. Building your own record of completed and estimated jobs, with quantities, costs, dates, location and normalising notes, gives you benchmarks for sanity checks and parametric work that no published guide can match.

                ## Milestones
                1. A database structure with fields for project type, capacity, quantities, cost by code, date, location and currency.
                2. At least ten past projects or estimates entered with their source documents.
                3. Each entry normalised to a base year and location with the indices used recorded.
                4. A habit in place of adding one job a month.

                ## Notes
                Keep client confidential data out of any personal copy. Store normalised ratios and unit costs, not commercial documents.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cost database holds at least ten normalised projects with sources and indices recorded, and grows by one entry a month."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Set up the database fields in a spreadsheet or simple table"
                - "Enter the three most recent jobs you have actuals or estimates for"
                - "Normalise each entry to a base year and location"
                - "Add one completed job or estimate to the database @recurring(monthly:28)"
            - name: Cost index and location factor reference sheet
              description: |-
                ## Purpose
                Moving a cost from a 2015 job in the Gulf of Mexico to a 2027 job in the Caribbean takes two adjustments, time and place, and each one is often done with whatever number was nearest. A single reference sheet of the indices and location factors you trust, with their sources and dates, makes every adjustment consistent and auditable.

                ## Milestones
                1. One or two published plant cost indices chosen with the reason for each.
                2. Location factors gathered for the regions you work in, with sources.
                3. A worked example converting one historical cost to today's money and location.
                4. The sheet refreshed with a review date written on it.

                ## Notes
                Location factors bundle labour productivity, wage rates, freight and duties; when one of those dominates, adjust it separately rather than trusting a single factor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A reference sheet lists chosen cost indices and location factors with sources, plus one worked conversion, reviewed within the last year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the plant cost index your organisation already subscribes to"
                - "Gather location factors for each country you price work in"
                - "Work one historical cost through time and location adjustments"
                - "Refresh location factors and sources on the reference sheet @recurring(yearly)"
            - name: Controlled estimating workbook template
              description: |-
                ## Purpose
                Most estimates live in spreadsheets, and spreadsheet errors such as a broken sum range or a hard-typed override can move a total by millions without anyone seeing. A controlled template with locked formulas, separate input and rate sheets, a summary that reconciles to the detail and a revision tab cuts those errors before they reach a sanction paper.

                ## Milestones
                1. A workbook template with separate sheets for inputs, rates, detail, summary and revisions.
                2. Formulas locked and input cells coloured consistently.
                3. A reconciliation check that flags any difference between detail and summary totals.
                4. The template tested by rebuilding one past estimate and matching its total.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A locked estimating template rebuilds a past estimate to the same total and flags any summary to detail mismatch automatically."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sketch the sheet structure for inputs, rates, detail and summary"
                - "Build the summary to detail reconciliation check"
                - "Lock formula cells and colour the input cells"
                - "Rebuild a past estimate in the template and compare totals"
            - name: Direct, indirect and owner's cost split
              description: |-
                ## Purpose
                Two estimates for the same plant can differ by thirty percent simply because one included construction indirects, engineering, owner's costs and spares and the other did not. Defining exactly what sits in directs, field indirects, home office costs, owner's costs, contingency and escalation makes your totals comparable with benchmarks and with other people's numbers.

                ## Milestones
                1. Definitions written for direct cost, field indirects, home office, owner's costs, contingency and escalation.
                2. Typical items listed under each heading, such as temporary facilities, commissioning spares and licence fees.
                3. The current estimate summary rearranged under those headings.
                4. Any items you were unsure where to place resolved with the project manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written set of cost category definitions is in use and the current estimate summary is presented under those categories."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-line definition for each cost category"
                - "List ten typical items and place each under its heading"
                - "Rearrange the current estimate summary by category"
                - "Ask the project manager where the disputed items belong"
            - name: Estimate checking and approval route
              description: |-
                ## Purpose
                An estimate that goes straight from the estimator to a funding paper skips the check that would have found the missing pipe rack. Agreeing who checks, who reviews and who approves at each estimate class and value, and recording it on a signature block, means no number leaves the team without a second pair of eyes.

                ## Milestones
                1. Check, review and approval roles defined for each estimate class and value band.
                2. A signature block added to the estimate cover sheet.
                3. A short checker's list covering arithmetic, scope coverage, rates and exclusions.
                4. The next estimate issued through the full route with signatures recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written approval route by class and value is in place and the next estimate carries checker, reviewer and approver signatures."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft check, review and approval roles by estimate class"
                - "Add a signature block to the estimate cover sheet"
                - "Write a one-page checker's list for estimate reviews"
                - "Route the next estimate through all three signatures"
            - name: Vendor quotation register and chasing
              description: |-
                ## Purpose
                Budget quotes arrive late, cover different scopes and expire quietly, and a Class 3 estimate built on stale quotes is weaker than it looks. A register of every request with dates, validity, scope notes and status, chased every week, keeps equipment pricing current and shows at a glance which lines still rest on in-house figures.

                ## Milestones
                1. A quote register with item, vendor, date requested, date received, validity and scope notes.
                2. Every major equipment line in the estimate linked to a register entry or marked as in-house pricing.
                3. Expired quotes flagged and either renewed or escalated.
                4. A weekly chase routine running for outstanding requests.

                ## Notes
                Start from the **Vendor** template for vendors you deal with often. Ask for validity and delivery period on every quote; both drive escalation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every major equipment line is linked to a register entry with validity recorded, and no quote older than its validity is still in use."
                cadence: rolling
              tasks:
                - "Create the quotation register with validity and scope columns"
                - "Link each major equipment line to its quote or mark it in-house"
                - "Chase outstanding quote requests by email or phone @recurring(weekly:tue)"
                - "Flag quotes due to expire within the next month"
            - name: Monthly cost index and escalation watch
              description: |-
                ## Purpose
                Escalation assumptions set at the start of a study are often still in the estimate a year later, after steel, cable and labour have moved sharply. Recording the indices you rely on each month in one log shows when an assumption has drifted far enough to revise, before a reviewer points it out.

                ## Milestones
                1. A metrics log of the chosen indices with a value per month.
                2. The escalation rate used in each open estimate written next to the trend.
                3. A trigger agreed for revising escalation, such as a gap of two points sustained over a quarter.
                4. One revision note issued when the trigger was hit, or a record that it was not.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The index log has an entry for every month since it started and each open estimate's escalation rate is compared against it each quarter."
                cadence: rolling
              tasks:
                - "Set up a log with one column per index you rely on"
                - "Record the latest published index values in the log @recurring(monthly:9)"
                - "Compare each open estimate's escalation rate with the index trend @recurring(quarterly)"
                - "Agree a revision trigger with your lead estimator"
            - name: Closing out actuals into the cost database
              description: |-
                ## Purpose
                Most organisations estimate far more projects than they close out properly, so their database is full of estimates and short of actual costs. Collecting final costs, quantities and lessons from each completed job, coded the same way as the estimate, is the only way to learn whether your rates run high or low.

                ## Milestones
                1. A close-out form covering final cost by code, final quantities, schedule and the main variances.
                2. The last two completed projects closed out against their sanction estimates.
                3. Variances above a set threshold explained in a sentence each.
                4. A quarterly routine pulling newly completed jobs into the database.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each project completed in the last year has a close-out record comparing final cost by code with its sanction estimate and explaining large variances."
                cadence: rolling
              tasks:
                - "Draft a one-page close-out form coded like the estimate"
                - "Request final cost reports for the last two completed projects"
                - "Explain each variance above your threshold in one sentence"
                - "Pull newly completed projects into the cost database @recurring(quarterly)"
            - name: Estimate assumptions and exclusions register
              description: |-
                ## Purpose
                Assumptions made to keep an estimate moving, such as soil good enough for pad footings or no hazardous area upgrade, quietly become facts if nobody tracks them. A live register with an owner, a date and a cost impact for each one shows which assumptions have been confirmed, which have broken, and what that does to the number.

                ## Milestones
                1. Every assumption and exclusion in the current estimate listed with an owner.
                2. A rough cost impact attached to each assumption if it proves wrong.
                3. Confirmed assumptions closed with the evidence that confirmed them.
                4. Broken assumptions carried into the next estimate revision.

                ## Notes
                Start from the **Risk register** template. The largest unconfirmed assumptions are usually the best input to the contingency discussion.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register lists every assumption with an owner and cost impact, and no assumption older than three months is still open without a reason."
                cadence: rolling
              tasks:
                - "Copy every assumption and exclusion from the estimate into the register"
                - "Add an owner and a rough cost impact to each entry"
                - "Review open assumptions with their owners @recurring(weekly:thu)"
                - "Move broken assumptions into the next revision's change list"
            - name: Unit rate library maintenance
              description: |-
                ## Purpose
                Unit rate libraries are only as good as their oldest rate, and they tend to collect rates from projects nobody can name any more. Maintaining it on a schedule, refreshing the most used rates, recording the source and date of every one and retiring those that cannot be traced, keeps detailed estimates honest.

                ## Milestones
                1. Every rate in the library tagged with source, date, location and what it includes.
                2. The twenty most used rates refreshed against recent quotes or actuals.
                3. Rates without a traceable source retired or marked for replacement.
                4. A monthly refresh routine working through the oldest rates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rate in the library has a source and date, and none of the twenty most used rates is more than a year old."
                cadence: rolling
              tasks:
                - "Sort the rate library by date and source"
                - "Refresh the ten oldest rates against quotes or actuals @recurring(monthly:14)"
                - "Retire rates that cannot be traced to a source @recurring(yearly)"
                - "Note what each rate includes, such as supply only or supply and install"
            - name: Estimate revision log and trend reconciliation
              description: |-
                ## Purpose
                When a revised estimate comes in higher, the first question is always why, and a total without a bridge invites suspicion. Logging every revision with the changes behind it, and reconciling old to new by category each month, lets you explain movements in scope, quantity, rate, escalation and contingency separately.

                ## Milestones
                1. A revision log recording date, reason and total for each estimate revision.
                2. A bridge chart template splitting movement into scope, quantity, rate, escalation and contingency.
                3. The latest revision reconciled to the previous one with no unexplained remainder.
                4. The bridge included in the estimate issue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each estimate revision is reconciled to the previous one by category with an unexplained remainder below one percent of the total."
                cadence: rolling
              tasks:
                - "Start a revision log with date, reason and total columns"
                - "Build a bridge template splitting movement into five categories"
                - "Reconcile the latest open estimate revisions to their predecessors @recurring(monthly:26)"
                - "Attach the bridge to the next estimate issue"
            - name: Labour rates and productivity factor tracker
              description: |-
                ## Purpose
                Construction labour is often the most uncertain part of a brownfield estimate, because both the hourly cost and the hours needed change with location, site rules and the state of the market. Tracking craft wage rates and observed productivity against your norms shows when your labour factors are out of date.

                ## Milestones
                1. Current all-in hourly rates recorded for the main crafts, with what they include.
                2. Productivity factors written down for each site type you price, such as greenfield, operating plant and offshore.
                3. Observed productivity from recent jobs compared with the factors used.
                4. Factors updated where recent evidence disagreed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All-in craft rates are no more than a quarter old and productivity factors are checked against recent job data every month."
                cadence: rolling
              tasks:
                - "List all-in hourly rates for the main crafts you price"
                - "Update craft wage rates from contractor schedules or agreements @recurring(quarterly)"
                - "Compare recent observed productivity against your factors @recurring(monthly:18)"
                - "Write down productivity factors for each site type"
            - name: Bulk material price watch
              description: |-
                ## Purpose
                Steel plate, structural sections, copper cable and carbon steel pipe can swing far within a year and drive whole sections of an estimate. A short monthly note of indicative prices from suppliers or published sources shows the direction of travel and stops a bulk rate going stale.

                ## Milestones
                1. Five or six bulk commodities chosen that dominate your typical estimates.
                2. A source agreed for each, such as a supplier price list or a published index.
                3. Twelve months of prices logged with the date of each.
                4. Any commodity that moved past a set threshold flagged to the estimates using it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A price log covers the chosen bulk commodities for twelve consecutive months, with threshold moves flagged to live estimates."
                cadence: rolling
              tasks:
                - "Pick the five bulk commodities that dominate your estimates"
                - "Agree a price source for each commodity"
                - "Note indicative prices for steel, cable and pipe @recurring(monthly:4)"
                - "Flag any large move to the owners of live estimates"
            - name: Monthly estimate peer review circle
              description: |-
                ## Purpose
                Estimators who only see their own work keep their own blind spots. Swapping one estimate a month with a colleague for an informal check, with a short list of what to look for, spreads good practice faster than any course and catches the missing scope before a formal review does.

                ## Milestones
                1. One or two colleagues agreed to swap estimates each month.
                2. A short shared list of what to check, from arithmetic to exclusions.
                3. Findings from each swap logged in a few lines.
                4. Recurring findings turned into a change to the template or the checker's list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten peer swaps are logged in a year and at least two recurring findings have changed the template or checker's list."
                cadence: rolling
              tasks:
                - "Ask one colleague to swap estimates for an informal check"
                - "Share a short list of what each reviewer should look at"
                - "Swap one estimate with a peer for checking @recurring(monthly:12)"
                - "Turn a repeated finding into a template change"
            - name: Quantity take-off from drawings and models
              description: |-
                ## Purpose
                Quantities drive most of the direct cost, and take-offs done in a hurry miss fittings, supports, lighting and the second floor of a structure. Practising a disciplined take-off from P&IDs, layouts and 3D model reports, with growth allowances stated separately, gives you quantities a checker can trace line by line.

                ## Milestones
                1. A take-off sheet format with source document, revision and growth allowance columns.
                2. One complete take-off done by hand for a small area across piping, steel, civil and electrical.
                3. The same area checked against a model report, with differences explained.
                4. Design growth allowances stated by commodity rather than buried in quantities.

                ## Notes
                Keep design allowance (quantities not yet drawn) separate from contingency. Mixing them hides both.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A traceable take-off for one area exists with source revisions, model comparison and growth allowances stated by commodity."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Set up a take-off sheet with source document and revision columns"
                - "Take off piping, steel, civil and electrical for one small area"
                - "Compare the hand take-off with a 3D model quantity report"
                - "Record growth allowances by commodity in the take-off"
            - name: Equipment factored estimates with Lang and Hand factors
              description: |-
                ## Purpose
                At concept and early study stage, the equipment list is often the only solid information, and factoring from equipment cost to installed cost is the standard way to reach a Class 4 number. Learning single Lang factors and the more detailed Hand or discipline factors, and where each breaks down, lets you produce a quick estimate you can defend.

                ## Milestones
                1. The difference between overall Lang factors and equipment-specific Hand factors explained in your own notes.
                2. A factored estimate built for a small process unit from its equipment list.
                3. The result compared with a detailed estimate or actual for a similar unit.
                4. Situations where factoring misleads, such as alloy equipment or very small units, written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A factored estimate for one unit is compared with a detailed figure for a similar unit and the gap explained in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a standard text section on Lang and Hand factors"
                - "Build a factored estimate from one equipment list"
                - "Compare the factored total with a detailed estimate for a similar unit"
                - "Note where factoring breaks down, such as for alloy equipment"
            - name: Capacity factored estimates and the six-tenths rule
              description: |-
                ## Purpose
                Scaling the cost of a known plant to a new capacity is the fastest screening method, and also the easiest to misuse outside its range. Practising capacity factoring with sensible exponents, the six-tenths default and its limits, gives you a Class 5 number in an hour and the judgement to know when it is too far from the reference.

                ## Milestones
                1. The capacity scaling formula and typical exponents for common plant types noted.
                2. Three scaled estimates produced from reference plants in your database.
                3. Each result adjusted for time and location using your reference sheet.
                4. A rule of thumb written for the capacity ratio beyond which you stop trusting the method.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three capacity factored estimates are documented with exponents, reference plants, time and location adjustments and a stated validity range."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note the capacity scaling formula and typical exponents"
                - "Pick three reference plants from your cost database"
                - "Scale each to a new capacity and adjust for time and location"
                - "Write the capacity ratio limit you will respect"
            - name: Building a parametric cost model
              description: |-
                ## Purpose
                Organisations that repeat similar work, such as tank farms, substations or wellhead platforms, can estimate faster and more consistently with a parametric model built from their own data. Building one from regression on past jobs, with its range of validity stated, turns a cost database into a working tool.

                ## Milestones
                1. One repeatable asset type chosen with at least eight comparable data points.
                2. Cost drivers tested and two or three chosen on evidence, such as capacity and pressure rating.
                3. A model fitted with its error against the data points reported.
                4. A validity range and user note written so others do not apply it outside the data.

                ## Notes
                A model fitted to eight points is fragile. Report the spread of errors, not just the fit statistic, and update it as new actuals arrive.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A parametric model for one asset type is documented with its drivers, error against at least eight data points and a stated validity range."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one asset type your organisation builds repeatedly"
                - "Gather at least eight normalised data points for it"
                - "Test candidate cost drivers and keep the two or three that explain most"
                - "Write the model's validity range and a short user note"
            - name: Estimating engineering hours by deliverable
              description: |-
                ## Purpose
                Engineering and design costs are often estimated as a percentage of construction cost, which hides scope and fails on small or complex brownfield jobs. Building engineering hours from a deliverables list, with norms per drawing, datasheet and calculation, gives a figure that can be checked and later used to measure progress.

                ## Milestones
                1. A deliverables list by discipline for one real or sample project.
                2. Hour norms per deliverable type gathered from past jobs or senior engineers.
                3. A bottom-up hours estimate compared with the percentage method.
                4. Allowances for management, checking, site visits and revisions stated separately.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A bottom-up engineering hours estimate for one project is built from deliverable norms and compared with a percentage method in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the deliverables by discipline for one project"
                - "Ask two senior engineers for hour norms per deliverable type"
                - "Build the bottom-up hours and compare with the percentage method"
                - "Add separate allowances for checking, management and site visits"
            - name: Construction labour hours and crew build-up
              description: |-
                ## Purpose
                Installed cost depends on how many hours a crew really needs, and published norms assume conditions that rarely exist in an operating plant. Learning to build crew rates, apply productivity factors for site conditions and add supervision and indirect labour explicitly makes labour lines traceable instead of a single lump.

                ## Milestones
                1. A crew build-up for two typical activities, such as pipe erection and cable pulling.
                2. Base norms and the productivity factor applied written next to each.
                3. Supervision, scaffolding and indirect labour added as separate lines.
                4. The result checked with a construction supervisor or contractor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two crew build-ups are documented with base norms, productivity factors and indirect labour lines, and reviewed by someone with site experience."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick two common installation activities to build crews for"
                - "Write the base norm and productivity factor for each"
                - "Add supervision, scaffolding and indirect labour lines"
                - "Walk a construction supervisor through the build-up"
            - name: Normalising vendor quotes on a bid tab
              description: |-
                ## Purpose
                Three budget quotes for a compressor rarely cover the same scope: one includes the lube oil skid and spares, another excludes freight and testing. Normalising quotes on a bid tabulation, adding what is missing and taking out what is extra, gives a like-for-like figure and stops the cheapest headline from becoming the estimate.

                ## Milestones
                1. A bid tab template with scope lines for supply, options, spares, testing, freight, documentation and site support.
                2. One set of real quotes normalised to the same scope.
                3. Adjustments for missing items shown and sourced.
                4. The normalised figure, not the headline price, used in the estimate.

                ## Notes
                This is the estimator's comparison for pricing, not a procurement award. Keep commercial negotiation out of it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bid tab shows at least three quotes normalised to one scope, with every adjustment sourced, and the normalised value carried into the estimate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build a bid tab with standard scope lines"
                - "Enter three quotes for one equipment item"
                - "Price the missing scope in each quote from a stated source"
                - "Carry the normalised figure into the estimate line"
            - name: Escalation calculation over the spend curve
              description: |-
                ## Purpose
                Applying one escalation rate to the whole estimate overstates some costs and understates others, because equipment, bulks and labour are spent at different times and move at different rates. Calculating escalation by cost category against a spend curve gives a figure that reflects when money is actually committed.

                ## Milestones
                1. A base date for the estimate stated in the basis.
                2. A spend or commitment curve by cost category drawn from the schedule.
                3. Escalation rates chosen per category with sources.
                4. Escalation calculated period by period and shown separately from contingency.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The estimate shows escalation calculated by category against a spend curve from a stated base date, separate from contingency."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the estimate base date into the basis of estimate"
                - "Draw a commitment curve by category from the schedule"
                - "Choose and source an escalation rate for each category"
                - "Calculate escalation by period and show it as its own line"
            - name: Contingency, allowances and management reserve
              description: |-
                ## Purpose
                Contingency is regularly treated as a slush fund, padded by each reviewer, or cut to make a business case work, and none of those is a method. Learning what contingency is meant to cover, how it differs from design allowances and management reserve, and how to argue a figure from the estimate's risks, gives you a defensible position when someone asks you to cut it.

                ## Milestones
                1. Definitions of design allowance, contingency, management reserve and escalation written in your notes.
                2. The current estimate checked for allowances double counted in contingency.
                3. A contingency figure argued from the assumptions register and estimate class.
                4. A one-paragraph explanation of the figure ready for a sponsor.

                ## Notes
                Contingency covers uncertainty within the defined scope. Scope changes, force majeure and currency swings are usually outside it and should be said so.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The current estimate separates design allowance, contingency and reserve, with a written rationale for the contingency figure tied to named risks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write definitions of allowance, contingency, reserve and escalation"
                - "Check the current estimate for allowances counted twice"
                - "Tie the contingency figure to the largest open assumptions"
                - "Draft a paragraph explaining contingency for the sponsor"
            - name: Choosing estimating software or staying with spreadsheets
              description: |-
                ## Purpose
                Estimating software with built-in libraries and model links can speed up detailed estimates, but it costs licences, training and data migration, and a small team may do better with a well controlled workbook. Comparing two or three options against your real estimate volume and types turns the debate into a recorded decision.

                ## Milestones
                1. Requirements listed, from estimate volume and types to model links and reporting.
                2. Two or three options, including the current workbook, scored against them.
                3. A trial estimate run in the leading option.
                4. A decision recorded with cost, training needs and data migration plan.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares at least two tools and the current workbook against written requirements, with a trial estimate result."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Count the estimates your team produced last year by type"
                - "List the requirements a tool must meet"
                - "Score two tools and the current workbook against the list"
                - "Run one trial estimate in the leading option"
            - name: Benchmarking an estimate against completed projects
              description: |-
                ## Purpose
                An estimate can be internally consistent and still far from what similar projects actually cost. Benchmarking key ratios, such as cost per tonne of steel, cost per installed kilowatt, indirects as a share of directs and engineering hours per piece of equipment, against completed jobs shows whether your number sits in a credible band.

                ## Milestones
                1. Five or six ratios chosen that suit the asset type.
                2. Comparable completed projects normalised for time, location and scope.
                3. The estimate's ratios plotted against the benchmark band.
                4. Every ratio outside the band explained or corrected.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A benchmark sheet compares at least five ratios from the estimate with normalised completed projects and explains every outlier."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose five ratios that suit this asset type"
                - "Pull comparable completed projects from the database"
                - "Plot the estimate ratios against the benchmark range"
                - "Write a note for every ratio outside the range"
            - name: Local fabrication versus imported module cost comparison
              description: |-
                ## Purpose
                For island and remote sites, building skids and modules abroad and shipping them can beat local stick-built work on cost and schedule, or lose badly once freight, duties, heavy lifts and rework are counted. A side-by-side estimate of both routes, with every logistics cost explicit, gives the project a sound basis for the choice.

                ## Milestones
                1. Both routes scoped to the same battery limits and deliverables.
                2. Freight, insurance, port handling, duties, heavy lift and site hook-up priced for the import route.
                3. Local labour, productivity, material supply and supervision priced for the local route.
                4. A comparison with the main sensitivities and a recommendation recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded comparison of the local and imported routes on one scope shows logistics, duties and labour separately with a recommendation."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Define one scope both routes must deliver"
                - "Price freight, port handling, duties and heavy lifts for import"
                - "Price local labour, supervision and materials for site build"
                - "Test how the answer changes with freight and productivity"
            - name: Foreign currency content and exchange rate basis
              description: |-
                ## Purpose
                In smaller economies a large share of project cost is priced in US dollars, euros or sterling, and a change in the exchange rate can wipe out the contingency. Splitting the estimate by currency of origin and stating the rates used makes the exposure visible to whoever owns the funding decision.

                ## Milestones
                1. Each estimate line tagged with its currency of origin.
                2. The exchange rates used stated in the basis with source and date.
                3. Totals shown by currency and in the reporting currency.
                4. A sensitivity showing the effect of a ten percent rate move.

                ## Notes
                Hedging decisions belong to the treasury or finance team. The estimator's job is to show the exposure clearly, not to forecast rates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The estimate shows totals by currency of origin, the exchange rates used with source and date, and a ten percent sensitivity."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add a currency of origin column to the estimate detail"
                - "State the exchange rates and their source in the basis"
                - "Record the exchange rates used in live estimates @recurring(monthly:2)"
                - "Show the effect of a ten percent rate move on the total"
            - name: Costing design alternatives for an options study
              description: |-
                ## Purpose
                Options studies often compare a fully priced base case against alternatives estimated in a rush, which biases the result toward whatever was priced first. Estimating each option to the same class, the same basis and the same exclusions makes the cost difference real, so the decision rests on engineering rather than estimating effort.

                ## Milestones
                1. Each option defined well enough to estimate at the same class.
                2. One common basis of estimate applied to all options.
                3. Only the differences between options priced in detail where the scopes overlap.
                4. A comparison table with cost differences and their accuracy range.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An options cost comparison is issued where all options share one basis and class and the differences are shown with their accuracy range."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree with the study lead which options need pricing"
                - "Write one basis of estimate covering all options"
                - "Price the scope differences between options in detail"
                - "Issue a table of cost differences with accuracy ranges"
            - name: Life cycle cost comparison of two equipment options
              description: |-
                ## Purpose
                The cheaper pump, motor or coating system to buy is often the dearer one to own once energy, maintenance, spares and downtime are counted. Building a life cycle cost comparison for one real choice teaches you to present capital and operating costs together, on a present value basis your finance colleagues accept.

                ## Milestones
                1. Two options chosen for one real equipment decision.
                2. Capital, energy, maintenance, spares and expected downtime costs estimated for each over a stated life.
                3. A discount rate obtained from finance and both options brought to present value.
                4. A result with its sensitivity to energy price and life recorded.

                ## Notes
                Get the discount rate and evaluation period from your finance team rather than choosing them yourself.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A life cycle cost comparison for one real decision shows both options at present value with a finance supplied discount rate and two sensitivities."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one live equipment choice with two credible options"
                - "Ask finance for the discount rate and evaluation period"
                - "Estimate capital, energy, maintenance and downtime costs for each"
                - "Run sensitivities on energy price and equipment life"
            - name: Optimism bias check using reference class forecasting
              description: |-
                ## Purpose
                Large projects overrun far more often than they underrun, and the estimate team usually believes its project is the exception. Checking your estimate against the overrun history of a reference class of similar projects, and stating the adjustment the evidence suggests, puts an outside view beside the inside one before sanction.

                ## Milestones
                1. A reference class of at least ten similar completed projects identified.
                2. The distribution of final cost against sanction estimate drawn for that class.
                3. Your estimate placed on that distribution with the implied uplift at a chosen confidence level.
                4. The outside view presented beside your own contingency analysis.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note compares the estimate's contingency with the overrun distribution of a reference class of at least ten completed projects."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a reference class of similar completed projects"
                - "Plot final cost against sanction estimate for the class"
                - "Read off the uplift at the confidence level your sponsor uses"
                - "Write a short note setting the outside view beside your contingency"
            - name: Class 5 screening estimate for a new concept
              description: |-
                ## Purpose
                New ideas need a first number fast, often within days, to decide whether they deserve study money. Producing a screening estimate by capacity factoring or analogy, with a wide range stated plainly and a two-page basis, gives management what it needs without pretending to more accuracy than exists.

                ## Milestones
                1. The concept described in a paragraph with capacity, location and key assumptions.
                2. Two independent methods used, such as capacity factoring and an analogy project.
                3. A range, not a point, reported with the class stated.
                4. A two-page basis of estimate issued with the number.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A Class 5 estimate is issued as a range from two methods, with the class stated and a two-page basis attached."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-paragraph description of the concept and its capacity"
                - "Find two reference projects or plants to scale from"
                - "Produce the estimate by two methods and compare"
                - "Issue the range with a short basis of estimate"
            - name: Class 3 budget estimate for project sanction
              description: |-
                ## Purpose
                The estimate behind a sanction or final investment decision becomes the budget the project is judged against for years. Preparing a Class 3 estimate from FEED quantities, current vendor quotes, a labour build-up, escalation by category and analysed contingency, through the full check and approval route, is the most consequential estimating work most engineers do.

                ## Milestones
                1. Quantities taken off from the FEED documents with revisions recorded.
                2. Major equipment priced on current normalised vendor quotes.
                3. Labour, indirects, escalation and contingency built up separately.
                4. The estimate benchmarked against completed projects.
                5. The estimate and its basis approved through the full route and issued for the sanction paper.

                ## Notes
                Freeze the document set you are pricing early and record late changes as known exclusions, or the estimate never closes.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved Class 3 estimate with basis, benchmarks, escalation and contingency analysis is issued in time for the sanction paper."
                cadence: phased
                effort_hours_estimate: "160"
              tasks:
                - "Agree the frozen document set to be priced"
                - "Issue quote requests for all major equipment"
                - "Build labour, indirects and escalation as separate sections"
                - "Benchmark the draft total against completed projects"
                - "Route the estimate and basis for approval"
            - name: Estimate review workshop before sanction
              description: |-
                ## Purpose
                Discipline leads, construction, operations and the sponsor, reviewing together, find missing scope and questionable assumptions while there is still time to fix them. Running a workshop that walks the estimate by area and code, rather than staring at the total, gets the estimate challenged by people who know the plant.

                ## Milestones
                1. Attendees confirmed from each discipline, construction, operations and the sponsor.
                2. An agenda walking the estimate by area, then by assumptions and contingency.
                3. Comments recorded with an owner and a due date.
                4. Every comment closed or carried as a stated exclusion before issue.

                ## Notes
                Start from the **Meeting notes** template. Send the basis of estimate a week ahead; reviewers who read it first ask better questions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The workshop is held with all key disciplines present and every comment is closed or recorded as an exclusion before the estimate is issued."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book the review with discipline, construction and operations leads"
                - "Send the basis of estimate a week before the workshop"
                - "Walk the estimate by area and record every comment with an owner"
                - "Close or exclude each comment before issuing the estimate"
            - name: Independent estimate review by a third party
              description: |-
                ## Purpose
                Lenders, boards and partners on large projects often require an independent review of the estimate, and teams that wait to be asked lose weeks gathering evidence. Preparing a review pack and working through the reviewer's findings gives the estimate an outside challenge and a credibility it cannot give itself.

                ## Milestones
                1. The review's terms of reference agreed, including scope and depth.
                2. A pack prepared with the estimate, basis, benchmarks, quotes and contingency analysis.
                3. Reviewer queries answered in a tracked log.
                4. Findings accepted or rebutted in writing and the estimate revised where needed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An independent review report is received and every finding has a written response, with resulting changes logged in the estimate revision."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the terms of reference for the independent review"
                - "Assemble the review pack with basis, quotes and benchmarks"
                - "Answer reviewer queries in a tracked log"
                - "Respond to each finding in writing"
            - name: Control estimate handover to project controls
              description: |-
                ## Purpose
                Once a project is sanctioned, the estimate has to become a control budget the cost engineers can track against, and a poor handover leaves them unable to tell what was in the number. A formal handover of the coded estimate, basis, quantities and contingency logic means variances can be explained from day one.

                ## Milestones
                1. The approved estimate converted into control budgets by code of accounts.
                2. Quantities and unit rates handed over so the team can track quantity and rate variances separately.
                3. Contingency ownership and drawdown rules agreed.
                4. A handover meeting held and the receiving cost engineer's sign-off recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Project controls has signed for a coded control budget with quantities, rates and contingency rules within sixty days of sanction."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Convert the approved estimate into control budgets by code"
                - "Export quantities and unit rates for variance tracking"
                - "Agree contingency ownership and drawdown rules"
                - "Hold the handover meeting and record the sign-off"
            - name: Pricing a change order on a live project
              description: |-
                ## Purpose
                Change orders are priced under time pressure with both sides watching, and a rushed figure sets a precedent for every change that follows. Pricing a change from the original estimate's rates and productivity, with any disruption and schedule effects shown separately, gives a figure the project manager can negotiate from.

                ## Milestones
                1. The change scope described against the original scope with the drawings affected.
                2. Direct cost priced from the original estimate rates where they apply.
                3. Disruption, standby and schedule effects priced as separate lines with their basis.
                4. The priced change issued with assumptions to the project manager.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A priced change is issued showing direct cost from original rates and disruption costs as separate lines, each with its stated basis."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark up the drawings affected by the change"
                - "Price the direct scope from the original estimate rates"
                - "Price disruption and standby as separate lines"
                - "Send the priced change and its assumptions to the project manager"
            - name: Your first estimate as a graduate engineer
              description: |-
                ## Purpose
                Graduates are often handed a small estimate, such as a pump replacement or a pipe rack extension, with little guidance and a short deadline. Working through one estimate end to end with a named checker, from scope check to approved basis, builds the habits that later estimates depend on and gives you a worked example to keep.

                ## Milestones
                1. A checker named and a short briefing held on scope and expectations.
                2. The scope check, take-off and pricing done using the team template.
                3. A basis of estimate written and every assumption listed.
                4. Checker comments resolved and a short note kept of what you learned.

                ## Notes
                Start from the **Development plan** template. Ask early which rates library and indices your team uses; graduates lose days rebuilding rates that already exist.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A checked and approved estimate with a basis of estimate is issued, with a written list of lessons kept in your development plan."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your lead to name a checker for your first estimate"
                - "Find the team template, rate library and indices"
                - "Write the basis of estimate as you price"
                - "Record what the checker's comments taught you"
            - name: Discipline input to the estimating team
              description: |-
                ## Purpose
                Mechanical, electrical, civil and instrument engineers supply the quantities and equipment lists estimators price, and vague input becomes guesswork in the number. Providing take-offs, equipment data and growth allowances in the format estimators need, with maturity marked on each item, makes your discipline's part of the estimate traceable.

                ## Milestones
                1. The estimating team's input format and deadline confirmed.
                2. Quantities and equipment lists delivered with source revisions.
                3. Each item marked as calculated, scaled from similar work or allowance.
                4. Estimator queries on your input answered within the agreed time.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your discipline's estimate input is delivered on time in the agreed format, with source revisions and maturity marked on every item."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the estimating lead for the input format and deadline"
                - "Compile your discipline's quantities with source revisions"
                - "Mark each item as calculated, scaled or allowance"
                - "Answer estimator queries on your input"
            - name: Moving from site work into cost estimating
              description: |-
                ## Purpose
                Engineers who have supervised construction or maintenance bring something estimators lack, a sense of how long work really takes, but they need the methods and the paperwork discipline. A planned move with a mentor, a few shadowed estimates and a short list of skills to learn makes the change in six months rather than two years.

                ## Milestones
                1. A development plan with target skills and a mentor in the estimating team.
                2. Two estimates shadowed from scope check to issue.
                3. One estimate produced under supervision.
                4. Site productivity knowledge written into notes the team can use.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within six months you have shadowed two estimates and produced one under supervision, recorded in a development plan agreed with a mentor."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask the estimating lead for a mentor and a shadowing slot"
                - "Write a development plan with the skills you need"
                - "Spend an hour reviewing work with your mentor @recurring(weekly:fri)"
                - "Write up site productivity lessons for the team"
            - name: Owner's cost engineer reviewing contractor estimates
              description: |-
                ## Purpose
                On owner's teams, the job is often to test a contractor's estimate or price rather than build one, and to do it without seeing the contractor's full rates. Reviewing against your own independent check estimate, benchmarks and the contract's pricing structure lets you challenge with evidence and agree a fair number.

                ## Milestones
                1. An independent check estimate prepared at a suitable class.
                2. The contractor's estimate compared line by code with the check.
                3. Differences above a threshold raised as written queries.
                4. A review memo recording agreed, open and disputed items.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A review memo compares the contractor's estimate with an independent check by code and records each difference as agreed, open or disputed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Prepare a check estimate at a class suited to the review"
                - "Compare the contractor's estimate with the check by code"
                - "Raise written queries on differences above the threshold"
                - "Issue a review memo with agreed and disputed items"
            - name: Island project cost factors for imports and freight
              description: |-
                ## Purpose
                On Caribbean and other island projects, almost every pipe, cable drum and transformer arrives by sea, and freight, port charges, customs duties, storage and hurricane season delays can add a large share to material cost. Building a set of island cost factors from recent shipments gives every estimate a consistent, current logistics allowance.

                ## Milestones
                1. Recent shipments analysed for freight, insurance, port, customs broker and duty costs as a share of material value.
                2. Duty and tax treatment for project imports checked with a customs broker or the tax authority.
                3. A hurricane season allowance for schedule and storage agreed with the project team.
                4. Island factors written into the location factor reference sheet.

                ## Notes
                Duty exemptions and concessions vary by country and project type; confirm them with a licensed customs broker rather than assuming them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A set of island logistics factors drawn from recent shipments, with duty treatment confirmed by a broker, is recorded in the location factor sheet."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect landed cost records for recent imported shipments"
                - "Ask a customs broker how project imports are treated for duty"
                - "Agree a hurricane season allowance with the project team"
                - "Check freight rates and port charges for your usual routes @recurring(quarterly)"
            - name: Preparing for a cost engineering certification
              description: |-
                ## Purpose
                A recognised credential, such as AACE International's certified cost professional or estimating professional, or chartered routes in quantity surveying, is often the step from engineer who estimates to recognised estimator. Preparing over a year with a study plan, practice questions and the required written paper makes the attempt realistic alongside a full workload.

                ## Milestones
                1. The credential chosen and its current eligibility, format and fees checked on the awarding body's website.
                2. A study plan across the body of knowledge with a target exam window.
                3. Any required technical paper drafted and reviewed by a colleague.
                4. The exam booked and sat.

                ## Notes
                Start from the **Reading queue** template for the reference texts. Check requirements on the awarding body's website; they change between editions.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "The chosen exam is sat within a year, with a study plan followed and any required technical paper submitted."
                cadence: phased
                effort_hours_estimate: "150"
              tasks:
                - "Check the current eligibility rules and exam format on the body's website"
                - "Draft a study plan across the body of knowledge"
                - "Work ten practice questions and review the misses @recurring(weekly:sat)"
                - "Book the exam once the plan is on track"
            - name: Monte Carlo range estimate for contingency
              description: |-
                ## Purpose
                A probabilistic range estimate replaces an arbitrary percentage with a distribution of outcomes, so sponsors can choose a confidence level knowingly. Building one from ranged key cost lines and named risks, with correlations handled sensibly, gives P50 and P90 values and shows which uncertainties drive the spread.

                ## Milestones
                1. The critical cost lines and top risks chosen, not every line in the estimate.
                2. Ranges agreed in a workshop with discipline leads and recorded with their reasoning.
                3. A simulation run with correlations between related lines handled.
                4. P50, P90 and a tornado chart of the main drivers reported.
                5. The contingency recommendation written against the sponsor's chosen confidence level.

                ## Notes
                Start from the **Risk register** template for the named risks. Ranging every line independently makes the result look falsely narrow; focus on the few lines and risks that matter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A range estimate reports P50 and P90 values with a driver chart, built from workshop ranges on critical lines and named risks."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the critical cost lines and top ten risks"
                - "Run a ranging workshop with discipline leads"
                - "Build and run the simulation with correlations handled"
                - "Report P50, P90 and the main drivers to the sponsor"
            - name: Integrated cost and schedule risk analysis
              description: |-
                ## Purpose
                Delays cost money through extended indirects, standby and escalation, so a cost risk analysis that ignores the schedule understates the spread. Linking the risked schedule to time-dependent costs gives a combined view of cost and completion date that sponsors increasingly expect on large projects.

                ## Milestones
                1. A summary schedule of fifty to two hundred activities agreed with the planner.
                2. Time-dependent costs identified, such as indirects, rentals and supervision.
                3. Risks mapped to both activities and cost lines.
                4. Joint cost and date outcomes reported at the sponsor's confidence levels.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A combined cost and schedule risk model reports cost and completion date at the sponsor's confidence levels from a shared risk register."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree a summary schedule with the planner"
                - "Split time-dependent from fixed costs in the estimate"
                - "Map each risk to activities and cost lines"
                - "Report joint cost and date outcomes"
            - name: Brownfield and shutdown work estimating factors
              description: |-
                ## Purpose
                Work inside an operating plant or during a turnaround costs far more per unit than greenfield work because of permits, gas tests, restricted access, standby and shift patterns. Developing brownfield factors from your own past jobs, rather than a generic uplift, keeps tie-ins and revamp estimates from being badly short.

                ## Milestones
                1. Past brownfield jobs analysed for hours per unit against greenfield norms.
                2. Productivity loss separated by cause, such as permit waiting, access and shift working.
                3. Factors written for operating plant, shutdown window and offshore conditions.
                4. Tie-in and hot work allowances defined per tie-in rather than as a percentage.

                ## Notes
                Permit to work, isolation and gas testing time is real and safety critical; estimate it in full rather than squeezing it to make a number fit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Brownfield productivity factors for at least three conditions are documented from past job data, with tie-in allowances defined per tie-in."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Gather hours and quantities from three past brownfield jobs"
                - "Compare them with greenfield norms and note the causes"
                - "Write factors for operating plant, shutdown and offshore work"
                - "Define an allowance per tie-in including permits and gas tests"
            - name: Decommissioning and abandonment cost estimate
              description: |-
                ## Purpose
                Ageing offshore platforms, onshore wells and retired plants carry decommissioning liabilities that regulators, auditors and buyers want estimated, often decades before the work. Estimating removal, plugging, disposal and site restoration with the regulator's requirements and the uncertainty stated gives a number that can sit in accounts and be revisited.

                ## Milestones
                1. The decommissioning scope defined against the applicable regulatory requirements.
                2. Activities priced, including well plugging, removal, transport, disposal and restoration.
                3. Market factors such as vessel availability and scrap value treated with ranges.
                4. A basis of estimate and review date recorded for the liability.

                ## Notes
                Regulatory requirements for abandonment differ by country and change; confirm them with the regulator or legal adviser, and leave accounting treatment to finance.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A decommissioning estimate with scope tied to stated regulatory requirements, ranged market factors and a review date is issued."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the assets and wells in the decommissioning scope"
                - "Confirm the current regulatory requirements with the regulator"
                - "Price plugging, removal, disposal and restoration activities"
                - "Range vessel rates and scrap values and set a review date"
---

# Engineering Cost Estimating

Engineering cost estimating is where a sketch, a scope or a FEED package becomes a number that someone will fund, and most estimates that go wrong do so because nobody wrote down what the number assumed. These projects start with the foundations (estimate classes, the basis of estimate, the code of accounts, scope checks, a cost database and a controlled workbook), move through the machinery that keeps rates, quotes and indices current, then the core methods from take-off to factored and parametric estimates, the decisions on tools, benchmarks and options, the dated estimates from screening to sanction, the different seats an engineer sits in, and specialist work on probabilistic contingency, brownfield factors and decommissioning.

The rhythm is weekly for quote chasing and the assumptions register, monthly for cost indices, bulk material prices, exchange rates, unit rate upkeep, peer checks and trend reconciliation, and quarterly or yearly for wage rates, freight, location factors and folding actuals back into the database. The Risk register, Metrics log, Purchase decision, Meeting notes and Development plan templates pair with the projects that keep a standing record or need a structured choice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
