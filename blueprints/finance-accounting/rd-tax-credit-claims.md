---
id: finance-accounting.rd-tax-credit-claims
name: R&D Tax Credit Claims
description: "Eligibility confirmed, evidence and staff time captured as the work happens, cost schedules mapped from the ledger, clear technical narratives, and a calm yearly claim cycle from interviews to submission and any enquiry."
category: business
version: 1.0.0
tags: [finance-accounting, rd-tax-credit-claims, founder, small-business, engineer, rd-tax-credit, technical-evidence, innovation-relief]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - risk-register
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: R&D Tax Credit Claims
          description: "Identifying qualifying research and development work, gathering evidence and preparing tax credit or relief claims for technology and innovative companies."
          projects:
            - name: R&D scheme eligibility check for the company
              description: |-
                ## Purpose
                Before anyone gathers timesheets, find out which R&D regime the company can actually use and on what terms. Eligibility turns on company type, size, profitability, connected companies and where the work is done, and the rules differ sharply between countries, for example the UK's merged scheme, the US research credit or Canada's SR&ED programme. A written eligibility note, checked against the tax authority's current guidance, stops a claim being built on the wrong scheme.

                ## Milestones
                1. The countries where the company pays corporate tax and runs technical work listed.
                2. The R&D scheme or schemes available in each one named from official guidance.
                3. Size, ownership, connected company and profitability tests answered with evidence.
                4. A one-page eligibility note confirmed by your accountant or adviser.

                ## Notes
                Rates, thresholds and scheme names change often. Date the note and record the guidance page you relied on.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated eligibility note names the scheme the company will claim under and the tests it meets, confirmed by the accountant or adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every country where the company pays corporate tax or has technical staff"
                - "Find the tax authority's current R&D guidance page for each country"
                - "Answer the size, ownership and connected company questions in writing"
                - "Send the eligibility note to your accountant and ask them to confirm it"
            - name: R&D claim deadlines and notification calendar
              description: |-
                ## Purpose
                Missing a window is the most expensive mistake in R&D relief, because the work and the evidence still exist but the claim is lost. Several regimes add steps beyond the tax return deadline, such as an advance claim notification, a registration of activities or an additional information form, and some cut off amendments sooner than people expect. Putting every date for the current and next period in one calendar removes the guesswork.

                ## Milestones
                1. The company's accounting period end date confirmed.
                2. Every claim, notification, registration and amendment deadline for the period written in one calendar.
                3. Each deadline linked to the official page that sets it.
                4. Reminders set for two people, at least six weeks before each date.

                ## Notes
                For example, the UK can require some companies to notify an intention to claim, and Australia asks for activities to be registered before the claim is made. Check whether anything like this applies to you.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One shared calendar shows every R&D claim, notification, registration and amendment deadline for two periods, each linked to its official source."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the accounting period end date from the last filed accounts"
                - "List every R&D filing step and deadline from the tax authority's guidance"
                - "Put each deadline in the shared finance calendar with a six-week reminder"
                - "Check the claim calendar against the tax authority's current deadlines @recurring(yearly)"
            - name: Candidate R&D project inventory for the current year
              description: |-
                ## Purpose
                Most first claims miss qualifying work because nobody listed it, or include routine work because nobody challenged it. A single inventory of every technical project in the period, with a one-line description of what was hard about it, gives finance and engineering a shared starting point before any costs are counted.

                ## Milestones
                1. Every technical project, product feature and process change in the period listed.
                2. Each entry with an owner, rough dates and the main technical problem in a sentence.
                3. Projects marked likely, possible or unlikely to qualify.
                4. The inventory reviewed by the technical lead and a founder or director.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory lists every technical project in the period with owner, dates, main technical problem and a qualifying likelihood, reviewed by the technical lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the year's roadmap, epics and project list into one sheet"
                - "Ask each team lead for the hardest technical problem they worked on"
                - "Mark each project likely, possible or unlikely to qualify"
                - "Walk the inventory with the technical lead in a one-hour session"
            - name: Named technical lead for the R&D claim
              description: |-
                ## Purpose
                Tax authorities expect the scientific or technological judgement in a claim to come from someone competent in the field, not from the finance team. Naming that person early, usually the CTO, head of engineering or a senior scientist, and agreeing the hours they will give, means the narratives are written by someone who can defend them in an enquiry.

                ## Milestones
                1. One technical lead named, with a backup for leave or departure.
                2. Their qualifications and experience summarised in a short paragraph for the claim file.
                3. Hours for interviews, narrative review and sign-off agreed for the claim season.
                4. The technical lead's role written into the claim timetable.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named technical lead and backup are recorded in the claim file with a paragraph on their expertise and agreed hours for claim season."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the person best able to explain the technical advances sought"
                - "Write a paragraph on their qualifications and relevant experience"
                - "Agree the hours they will give during claim season"
                - "Name a backup technical lead in case of leave or departure"
            - name: Grants, subsidies and funded work check
              description: |-
                ## Purpose
                Grant funding, government innovation programmes, customer-funded development and other subsidies can all change what the company can claim, and in some regimes they move a project into a less generous scheme or out altogether. Listing every source of funding that touched R&D in the period, with its terms, is a short exercise that prevents one of the most common claim errors.

                ## Milestones
                1. Every grant, innovation award, subsidy and funded contract in the period listed with amount and dates.
                2. The projects each one paid for identified.
                3. Terms on who owns the results and who bears the cost of failure noted.
                4. Your adviser's view on how each funding source affects the claim recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A funding list covers every grant, subsidy and funded contract in the period, mapped to projects, with the adviser's view on its effect recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the bank and ledger for grant receipts and funding body names"
                - "Pull the award letters and contracts for each funded project"
                - "Note who owns the results and who carries the cost of failure"
                - "Ask your adviser how each funding source affects the claim"
            - name: Ledger to qualifying cost category map
              description: |-
                ## Purpose
                R&D relief is built from a handful of cost categories, typically staff, externally provided workers, subcontractors, consumables, software and in some regimes data or cloud costs, but the ledger groups spend its own way. Mapping each relevant nominal code to a claim category once, and noting which codes need splitting, turns the cost side of every future claim from a hunt into a lookup.

                ## Milestones
                1. Every nominal code that may hold R&D spend listed.
                2. Each code mapped to a claim category or marked as excluded.
                3. Codes that mix qualifying and routine spend flagged for splitting.
                4. The map agreed with your accountant and saved in the claim file.

                ## Notes
                Category names and what qualifies differ between regimes. Use the categories in your own tax authority's guidance, not a generic list from a claim firm's website.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cost map links every relevant nominal code to a claim category or exclusion, with mixed codes flagged, and is agreed with the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the trial balance for the claim period"
                - "Mark each nominal code that could hold R&D spend"
                - "Map each marked code to a claim cost category"
                - "Flag codes that mix R&D and routine spend for later splitting"
            - name: Prior claims, correspondence and records archive
              description: |-
                ## Purpose
                When an enquiry letter arrives two years after a claim, the people who wrote it may have left and the spreadsheet may sit on a laptop nobody can find. One archive holding every submitted claim, its workings, the technical narratives, the adviser's report and all tax authority letters, kept for as long as your rules require, lets the company answer quickly and consistently.

                ## Milestones
                1. One shared folder per claim period with submitted forms, workings and narratives.
                2. All tax authority letters and acknowledgements filed with their dates.
                3. The record retention period for R&D claims confirmed and noted on the folder.
                4. Access granted to the founder, finance lead and technical lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared archive holds every past claim's forms, workings, narratives and correspondence in one folder per period, with the retention period noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather past claim forms, workings and narratives from email and the adviser"
                - "Create one folder per claim period with a standard structure"
                - "Confirm how long the tax authority expects R&D records to be kept"
                - "File the year's submitted claim and correspondence in the archive @recurring(yearly)"
            - name: Choosing who prepares the R&D claim
              description: |-
                ## Purpose
                Founders are approached constantly by R&D claim firms, and the choice between doing it in-house, asking the existing accountant or hiring a specialist decides both the cost and the risk. Comparing at least three options on fee model, technical depth, who writes the narratives and what support they give in an enquiry protects the company from inflated claims and contingency fees that outlast their value.

                ## Milestones
                1. In-house, existing accountant and at least two specialist firms compared.
                2. Each option scored on fee model, technical depth, enquiry support and references.
                3. Contract terms checked for contingency percentages, minimum fees and exit clauses.
                4. A decision recorded with the reasons and an engagement letter signed.

                ## Notes
                Start from the **Vendor** template. Be wary of anyone promising an amount before seeing the work, or offering to claim for every developer by default.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three preparers on fees, technical depth and enquiry support ends in a recorded decision and a signed engagement letter."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the in-house, accountant and specialist options you could use"
                - "Ask each specialist how they would handle an enquiry and who would attend"
                - "Compare fee models, minimum fees and exit clauses side by side"
                - "Take up two references from companies of a similar size"
            - name: R&D screening at project kick-off
              description: |-
                ## Purpose
                Evidence is cheapest to capture on the day a project starts, when the team can still say what they do not know how to do. A two-minute screening question set added to the kick-off template, asking what the technical uncertainty is and where existing knowledge falls short, flags likely R&D early and starts the record before memories fade.

                ## Milestones
                1. Three screening questions added to the kick-off or epic template.
                2. Projects that pass the screen tagged as candidate R&D from day one.
                3. The technical lead reviewing new candidates each month.
                4. Every candidate project in the year with a kick-off note on file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every project started in the last twelve months has answered the screening questions, and each candidate R&D project has a dated kick-off note."
                cadence: rolling
              tasks:
                - "Write three R&D screening questions for the project kick-off template"
                - "Add the questions to the epic or project template in the tracker"
                - "Review new projects opened this month for R&D potential @recurring(monthly:20)"
                - "Tag projects that pass the screen as candidate R&D"
            - name: Monthly R&D evidence snapshot from engineering tools
              description: |-
                ## Purpose
                Contemporaneous records carry far more weight than a narrative written a year later, and engineering teams already produce them in tickets, design documents, pull requests and test results. A monthly export of the R&D-tagged items into the claim folder costs half an hour and gives the claim, and any enquiry, a dated trail of what was tried and what failed.

                ## Milestones
                1. A folder for each month of the claim period in the evidence archive.
                2. A saved filter that finds R&D-tagged tickets, design documents and pull requests.
                3. Twelve monthly snapshots in place by the period end.
                4. Failed experiments and abandoned approaches included, not just finished work.

                ## Notes
                Exports should be read-only copies. Keep secrets, credentials and customer data out of the evidence folder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The evidence archive holds twelve dated monthly snapshots for the claim period, including records of failed approaches."
                cadence: rolling
              tasks:
                - "Build a saved filter that finds R&D-tagged tickets and pull requests"
                - "Export the month's R&D tagged tickets and design notes to the evidence folder @recurring(monthly:12)"
                - "Include test results and notes on approaches that failed"
                - "Strip credentials and customer data from anything exported"
            - name: Staff time allocation records for R&D work
              description: |-
                ## Purpose
                Staff costs are usually the biggest part of an R&D claim and the part most often challenged, because the share of each person's time spent on qualifying work is often guessed at year end. A monthly time split by person and project, signed off by the team lead, replaces the guess with a record you can show.

                ## Milestones
                1. A time split sheet listing each technical employee, project and percentage.
                2. Team leads signing off their team's split each month.
                3. Directors, testers and part-time contributors included where they did qualifying work.
                4. A full year of signed monthly splits ready for the claim.

                ## Notes
                Start from the **Metrics log** template. Light records kept monthly beat detailed timesheets that nobody fills in.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly time splits, each signed off by the relevant team lead, cover every person whose costs are in the claim."
                cadence: rolling
              tasks:
                - "Create a time split sheet with a row per technical employee"
                - "Agree with team leads how they will estimate each person's R&D share"
                - "Collect and sign off the month's R&D time split from each team lead @recurring(monthly:5)"
                - "Note leavers, joiners and role changes against the month they happened"
            - name: Monthly R&D cost tagging in the ledger
              description: |-
                ## Purpose
                Consumables, prototype materials, test equipment hire, cloud bills and contractor invoices are easy to identify at the time and hard to find a year later. Tagging R&D spend with a tracking category or project code during the monthly bookkeeping means the cost schedule for the claim becomes a report rather than a forensic exercise.

                ## Milestones
                1. An R&D tracking category or project code set up in the accounting software.
                2. Bookkeeping instructions updated so R&D spend is tagged as it is coded.
                3. A month-end check that the tagged spend looks complete.
                4. A tagged R&D cost report available for every month of the period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tagged R&D cost report can be run for every month of the claim period, with each month checked for completeness at close."
                cadence: rolling
              tasks:
                - "Set up an R&D tracking category in the accounting software"
                - "Brief the bookkeeper on which suppliers and costs to tag"
                - "Tag the month's R&D costs before the books close @recurring(monthly:8)"
                - "Run the tagged cost report and query anything that looks missing"
            - name: Quarterly technical uncertainty log review
              description: |-
                ## Purpose
                A claim stands or falls on the uncertainties the team faced, and those are easiest to describe while they are still open. A short quarterly review with the technical lead, updating a log of each uncertainty, the approaches tried and whether it was resolved, gives the narrative its spine and shows which projects have stopped being R&D.

                ## Milestones
                1. An uncertainty log with project, uncertainty, approaches tried, outcome and date.
                2. Four quarterly reviews held with the technical lead each year.
                3. Resolved uncertainties dated so project end points are clear.
                4. New uncertainties added as projects change direction.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews in a year leave an uncertainty log with dated entries, approaches tried and outcomes for every claimed project."
                cadence: rolling
              tasks:
                - "Set up an uncertainty log with columns for approaches tried and outcome"
                - "Review and update the uncertainty log with the technical lead @recurring(quarterly)"
                - "Date each uncertainty when it is resolved or abandoned"
                - "Link each log entry to the tickets that show the work"
            - name: Subcontractor and externally provided worker file
              description: |-
                ## Purpose
                Contractors, agencies and outsourced development partners are treated differently from employees in most R&D regimes, and the treatment can depend on the contract wording, who controls the work and where it is done. Keeping a file for each one, with the agreement, a description of the work, invoices and location, means each cost lands in the right category and nothing excluded slips in.

                ## Milestones
                1. Every contractor, agency and outsourced partner on R&D work listed.
                2. Signed agreements filed, with result ownership and work location noted.
                3. Each arrangement classified into the right claim category with your adviser.
                4. Invoices for the period matched to the R&D work they cover.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each contractor or agency in the claim has a file with its agreement, work location, claim category and matched invoices."
                cadence: rolling
              tasks:
                - "List every contractor and agency that worked on candidate R&D projects"
                - "File each signed agreement and note where the work is carried out"
                - "Ask your adviser which claim category each arrangement falls into"
                - "Check new contractor agreements for R&D terms and work location @recurring(quarterly)"
            - name: Cloud, data and software cost apportionment
              description: |-
                ## Purpose
                Hosting, compute, data sets and software licences often support both R&D and the live product, and claiming the whole bill is a classic overclaim. Agreeing a fair basis for splitting each bill, such as separate accounts for experimental environments or usage tags, and applying it every quarter, gives a defensible number and documents how it was reached.

                ## Milestones
                1. Every cloud, data and software supplier that supports R&D listed.
                2. An apportionment basis agreed for each one and written down.
                3. Experimental and production environments separated or tagged where possible.
                4. Quarterly apportioned costs recorded with the calculation.

                ## Notes
                Whether cloud and data costs qualify at all depends on your regime and period. Confirm with your adviser before relying on them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each cloud, data and software bill in the claim has a written apportionment basis and four quarterly calculations on file."
                cadence: rolling
              tasks:
                - "List cloud, data and software bills that support R&D environments"
                - "Agree a written basis for splitting each bill between R&D and production"
                - "Ask engineering to tag or separate experimental environments"
                - "Apportion the quarter's cloud and software bills on the agreed basis @recurring(quarterly)"
            - name: R&D credit receivable accrual and receipt tracking
              description: |-
                ## Purpose
                A credit worth a meaningful share of R&D spend is often left out of management accounts and cash planning until the money lands, or counted twice by an optimistic founder. Recording a prudent estimate of the expected benefit, updating it each quarter and tracking the claim through to repayment or offset gives the board an honest view of what is coming and when.

                ## Milestones
                1. A prudent estimate of the year's expected benefit, with its basis, agreed with the accountant.
                2. The estimate shown in the management accounts or board pack each quarter.
                3. The submitted claim amount and expected payment or offset date recorded.
                4. The receipt or offset matched to the claim and the receivable cleared.

                ## Notes
                The accounting treatment varies with the scheme and the accounting framework. Agree it with your accountant rather than choosing one yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The expected credit appears in four consecutive quarterly board packs, and the final receipt or offset is matched to the submitted claim."
                cadence: rolling
              tasks:
                - "Ask your accountant how the expected credit should appear in the accounts"
                - "Update the expected R&D credit estimate in the management accounts @recurring(quarterly)"
                - "Record the submitted amount and the expected payment date"
                - "Match the payment or offset to the claim when it arrives"
            - name: R&D claim risk register
              description: |-
                ## Purpose
                Every claim carries judgement calls: a borderline project, a time split based on estimates, a contractor whose status is unclear. Writing those risks down with a likelihood, the evidence behind each and who owns it lets directors approve the claim knowing where it is weakest, and gives the company a ready answer if the tax authority asks.

                ## Milestones
                1. A register listing each judgement call in the current claim.
                2. Each risk with a likelihood, potential adjustment, evidence held and owner.
                3. High risks either backed by more evidence or removed from the claim.
                4. The register reviewed by directors before sign-off.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk register covering every judgement call in the claim is rescored each quarter and reviewed by directors before approval."
                cadence: rolling
              tasks:
                - "Start a risk register with one row per judgement call in the claim"
                - "Score each risk for likelihood and potential adjustment"
                - "Add evidence or remove the item for each high risk"
                - "Review and rescore the R&D claim risk register @recurring(quarterly)"
            - name: Annual R&D claim cycle timetable
              description: |-
                ## Purpose
                Claims prepared in a rush in the last fortnight before the deadline are the ones with thin narratives and guessed numbers. A fixed yearly timetable, working back from the filing and notification dates through cost close, technical interviews, drafting, review and approval, spreads the work and protects engineering time.

                ## Milestones
                1. Each stage of the claim given a start date and owner, working back from the deadline.
                2. Technical interview and review slots booked in engineers' calendars.
                3. Adviser and accountant deadlines agreed in writing.
                4. One full cycle completed to timetable, with the claim filed early.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated claim timetable with an owner for every stage is set each year, and the claim is filed before its deadline."
                cadence: cyclic
              tasks:
                - "Work back from the filing deadline to set a date for each stage"
                - "Book interview and review slots in the technical team's calendars"
                - "Agree adviser and accountant deadlines in writing"
                - "Set the dates for this year's R&D claim cycle @recurring(yearly)"
            - name: Advance, uncertainty and baseline concepts
              description: |-
                ## Purpose
                Almost every R&D regime asks the same underlying questions: what was known at the start, what advance were you seeking, what was uncertain to a competent professional, and how did you try to resolve it. Learning these ideas properly from your country's official guidance, for example the UK's government guidelines on the meaning of R&D, the US four-part test or Canada's SR&ED criteria, is what lets founders and engineers recognise R&D rather than describe innovation.

                ## Milestones
                1. The official definition of R&D for your regime read in full.
                2. Advance, uncertainty, baseline and competent professional explained in your own words.
                3. Three of your own projects tested against the definition in writing.
                4. Questions you could not answer listed for your adviser.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explanation of the core R&D concepts exists in your own words, with three company projects tested against the official definition."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the official R&D definition and guidance for your regime"
                - "Write a one-paragraph explanation of each core concept in plain words"
                - "Test three of your own projects against the definition"
                - "List the questions the guidance did not answer for your adviser"
            - name: Where software development stops being R&D
              description: |-
                ## Purpose
                Software is the most claimed and most challenged area of R&D, because building a product, even a clever one, is not the same as resolving a technological uncertainty. Studying the guidance and worked examples on software, especially the line between applying known techniques and creating new ones, helps engineering leads put the boundary in the right place before the claim is drafted.

                ## Milestones
                1. The tax authority's guidance and examples on software R&D read.
                2. A list of team activities that usually do not qualify, such as routine integration, interface work and bug fixing.
                3. Two of your software projects split into qualifying and routine parts.
                4. The split reviewed with your adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two company software projects are split in writing into qualifying and routine parts, and the split has been challenged by the adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the tax authority's guidance and examples on software R&D"
                - "List the routine software work that usually falls outside the definition"
                - "Split two of your own software projects into qualifying and routine parts"
                - "Ask your adviser to challenge the split before drafting begins"
            - name: Qualifying costs and the common exclusions
              description: |-
                ## Purpose
                Knowing what counts is half of an accurate claim. Some costs that look like R&D, such as capital equipment, rent, patent fees or general overheads, are often excluded, while others, such as employer pension contributions or materials destroyed in testing, are often missed. A short study of the cost rules for your regime, ending in a list of what you will and will not include, keeps both overclaims and underclaims out.

                ## Milestones
                1. The cost rules for your regime read, including any caps or restrictions.
                2. A list of included and excluded cost types written for your company.
                3. Borderline items, such as prototypes later sold, noted with your adviser's view.
                4. The list saved in the claim file.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of included and excluded cost types, with the adviser's view on borderline items, is saved in the claim file."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the qualifying expenditure section of your regime's guidance"
                - "Write a list of cost types you will include and exclude"
                - "Ask your adviser about prototypes, software licences and pension costs"
                - "Save the included and excluded list in the claim file"
            - name: Writing a technical narrative an inspector can follow
              description: |-
                ## Purpose
                The technical narrative is read by someone who may not be an expert in your field and who has limited time, so jargon, marketing language and vague claims of innovation all work against you. Practising a clear structure of baseline, advance sought, uncertainties, work done and outcome, with dates and evidence references, produces narratives that stand up on a first read.

                ## Milestones
                1. A narrative structure agreed for every project in the claim.
                2. One sample narrative drafted and reviewed by someone outside the team.
                3. Marketing language and unexplained jargon removed.
                4. Each statement in the narrative linked to a piece of evidence.

                ## Notes
                Write about what was uncertain and how you tried to resolve it, not about how successful the product is.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A sample narrative in the agreed structure has been read by an outsider, with every technical statement linked to evidence."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree a fixed narrative structure for every claimed project"
                - "Draft a sample narrative for your strongest project"
                - "Ask the agent to flag marketing language and unexplained jargon in the draft"
                - "Have someone outside the team read it and say what they did not follow"
            - name: Running technical interviews with engineers
              description: |-
                ## Purpose
                Engineers rarely describe their work in terms of uncertainty unless asked the right questions, and a good interview can turn a vague feature list into a clear account of what was unknown and what was tried. Learning a standard question set, recording each session and turning the notes into narrative points is a skill finance leads and advisers both need.

                ## Milestones
                1. A standard question set covering baseline, uncertainty, approaches and outcome.
                2. One practice interview held and its notes reviewed.
                3. Notes from each interview stored with the project's evidence.
                4. Interviewees asked to confirm their notes are accurate.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written interview question set has been used in at least one practice interview, with notes confirmed by the engineer interviewed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write ten interview questions on baseline, uncertainty and approaches tried"
                - "Run a practice interview with one engineer on a recent project"
                - "Store the notes with that project's evidence"
                - "Send the notes back to the engineer to confirm they are accurate"
            - name: How R&D relief flows through accounts and the return
              description: |-
                ## Purpose
                Depending on the regime, R&D relief can appear as an extra deduction, a taxable credit above the line, a payable cash credit or an offset against payroll taxes, and each lands differently in the profit and loss, the balance sheet and the tax return. Understanding the mechanics for your company helps founders read the numbers and ask the accountant sensible questions.

                ## Milestones
                1. The form your regime's relief takes written in one paragraph.
                2. Where the benefit appears in the accounts and tax computation shown on a simple example.
                3. The effect on taxable profit, losses and cash for your company explained.
                4. Your accountant's confirmation of the example recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example using the company's own figures shows where the relief lands in the accounts and return, confirmed by the accountant."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read how your regime delivers the relief, as a deduction, credit or offset"
                - "Ask your accountant for a worked example using last year's figures"
                - "Note where the benefit shows in the accounts and the tax computation"
                - "Write down how the relief affects losses and cash"
            - name: Lessons from published R&D compliance findings
              description: |-
                ## Purpose
                Several tax authorities publish statistics, compliance reports and lists of common errors in R&D claims, and these show exactly where inspectors look. Reading the latest edition and checking your own claim against the most common failures, such as unsupported staff percentages, ineligible companies and routine work described as R&D, is a cheap form of self-review.

                ## Milestones
                1. The latest official R&D statistics or compliance publication for your regime found.
                2. The five most common errors it highlights listed.
                3. Your current claim checked against each one.
                4. Fixes for any weakness added to the claim risk register.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The current claim has been checked against the five most common errors in the latest official publication, with any fixes logged."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the tax authority's latest R&D statistics or compliance publication"
                - "List the five most common errors it highlights"
                - "Check your current claim against each error"
                - "Read the tax authority's newest R&D compliance publication @recurring(yearly)"
            - name: Which projects make the claim and which do not
              description: |-
                ## Purpose
                Including a weak project can put the whole claim under scrutiny, while leaving out a strong one wastes real money. Scoring each candidate project against the definition, the strength of its evidence and the cost involved, then recording the decision for each, gives directors a claim they can defend line by line.

                ## Milestones
                1. Each candidate project scored on fit, evidence strength and cost.
                2. A decision recorded for each: include, include in part or exclude.
                3. Reasons for every exclusion written down for future years.
                4. The final list approved by the technical lead and a director.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every candidate project has a recorded include, part include or exclude decision with reasons, approved by the technical lead and a director."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Score each candidate project for fit, evidence and cost"
                - "Decide include, part include or exclude for each project"
                - "Write one sentence explaining every exclusion"
                - "Get the technical lead and a director to approve the final list"
            - name: Start and end points for each R&D project
              description: |-
                ## Purpose
                R&D usually begins when work to resolve the uncertainty starts and ends when the uncertainty is resolved or the work is abandoned, which is often well before the product ships. Fixing those points for each project, with evidence, stops the claim swallowing commercial rollout, routine testing and maintenance.

                ## Milestones
                1. A start date and end date proposed for each claimed project.
                2. Each date backed by a ticket, document or recorded decision.
                3. Activities after the end date, such as rollout and support, excluded.
                4. The boundaries agreed with the technical lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every claimed project has an evidenced start and end date agreed with the technical lead, with post-end activity excluded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Propose a start and end date for each claimed project"
                - "Find the ticket or document that marks each date"
                - "Mark rollout, support and maintenance after the end date as excluded"
                - "Confirm the project boundaries with the technical lead"
            - name: Staff time apportionment method decision
              description: |-
                ## Purpose
                Companies use full timesheets, monthly percentage estimates, ticket-based allocation or a mix, and each has a different admin cost and a different weight as evidence. Comparing the options against the size of your team and the scale of the claim, then choosing one and applying it consistently, matters more than which method you pick.

                ## Milestones
                1. Timesheets, monthly estimates and ticket-based allocation compared on effort and evidence value.
                2. One method chosen and documented with its rules.
                3. The method explained to every team lead.
                4. The method applied consistently for a full claim period.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note records the chosen time apportionment method and its rules, and every team lead has been briefed on it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare timesheets, monthly estimates and ticket-based allocation"
                - "Ask your adviser which methods inspectors challenge most"
                - "Write the chosen method and its rules on one page"
                - "Explain the method to every team lead"
            - name: Payable credit or offset against tax liability
              description: |-
                ## Purpose
                Loss-making and profitable companies often face a choice, depending on the regime, between taking a cash credit, carrying the benefit forward, surrendering losses or offsetting against payroll taxes. The right answer depends on runway, expected profits and the rules, so the work here is laying out the options with your accountant, not picking one from a forum thread.

                ## Milestones
                1. The options open to the company under its regime listed.
                2. Each option's cash amount and timing modelled by your accountant.
                3. The effect on future losses and tax noted.
                4. A decision recorded by the directors with the accountant's advice attached.

                ## Notes
                For example, qualifying small businesses in the US may be able to apply part of the research credit against payroll taxes. Whether any option suits you is a question for your adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A directors' decision on how to take the R&D benefit is recorded, with the accountant's model of each option's cash and timing attached."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant which ways of taking the benefit are open to you"
                - "Get the cash amount and timing of each option modelled"
                - "Note how each option affects future losses"
                - "Record the directors' decision with the advice attached"
            - name: Issue tracker labels and repository conventions for R&D
              description: |-
                ## Purpose
                Tickets, pull requests and design notes are only useful as evidence if they can be found later, and most engineering teams already have the tools to make R&D work searchable. Agreeing a small set of labels, an epic naming rule and a short design note template, then checking a sample each month, makes the tracker and repository the claim's best source.

                ## Milestones
                1. An R&D label and project field agreed and added to the tracker.
                2. An epic naming rule and a one-page design note template in use.
                3. Engineers briefed at a team meeting.
                4. A monthly sample showing most R&D tickets correctly labelled.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "R&D labels and a design note template are live in the tracker and repository, and a monthly sample shows at least eight in ten R&D tickets labelled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree an R&D label and project field with the engineering leads"
                - "Add a one-page design note template to the repository"
                - "Brief engineers on the labels at the next team meeting"
                - "Check a sample of ten tickets for correct R&D labels @recurring(monthly:24)"
            - name: Adviser fee model review at renewal
              description: |-
                ## Purpose
                Contingency fees that made sense for a first claim can become expensive once the company has its own records and process, and some engagement letters renew automatically. Reviewing the adviser's fee, scope and enquiry support before each renewal, and comparing it with a fixed fee or in-house option, keeps the cost proportionate to the work.

                ## Milestones
                1. The current engagement terms, fee and renewal date recorded.
                2. Last year's fee shown as a share of the claim benefit.
                3. At least one alternative quote or in-house cost estimate obtained.
                4. A renew, renegotiate or switch decision recorded before the renewal date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Before each renewal date, a decision to renew, renegotiate or switch is recorded alongside last year's fee and one alternative quote."
                cadence: cyclic
              tasks:
                - "Find the renewal date and notice period in the engagement letter"
                - "Work out last year's fee as a share of the claim benefit"
                - "Get one alternative quote or an in-house cost estimate"
                - "Review the R&D adviser's fee and scope before renewal @recurring(yearly)"
            - name: Prior-year claim amendment assessment
              description: |-
                ## Purpose
                Sometimes a company finds it missed qualifying work in an earlier year, or realises a past claim included something it should not have. Assessing with your adviser whether an amendment is still possible, what it would be worth or cost and how to make it properly is far better than leaving a known error or a missed claim alone.

                ## Milestones
                1. The earlier periods affected and their amendment windows confirmed.
                2. The likely change in benefit estimated, upward or downward.
                3. Your adviser's recommendation on whether and how to amend recorded.
                4. Any amendment made, or the decision not to amend documented.

                ## Notes
                If a past claim overstated relief, take professional advice promptly. A voluntary correction is usually treated very differently from an error the tax authority finds.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each period suspected of an over or under claim has a recorded decision on amendment, with the adviser's recommendation and any filing reference."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the earlier periods you think were over or under claimed"
                - "Check whether the amendment window for each period is still open"
                - "Ask your adviser to estimate the effect of amending"
                - "Record the decision and file any amendment through the official route"
            - name: Year-end R&D technical interview week
              description: |-
                ## Purpose
                One focused week after the period ends, with every project owner interviewed for forty-five minutes, gathers the technical content for the whole claim while it is still fresh. Booking it in advance and sending each engineer the questions and their project's evidence beforehand keeps the sessions short and productive.

                ## Milestones
                1. Interview slots booked with every claimed project's owner.
                2. Questions and the project's evidence pack sent a week ahead.
                3. Every interview held and its notes filed.
                4. Gaps in evidence listed with owners and dates.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every claimed project owner has been interviewed within the planned week, with notes filed and evidence gaps assigned."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the year-end R&D interview week in engineers' calendars @recurring(yearly)"
                - "Send each owner the questions and their evidence pack a week ahead"
                - "Hold each interview and file the notes the same day"
                - "List evidence gaps with an owner and a date to close each one"
            - name: R&D claim pack assembly and internal review
              description: |-
                ## Purpose
                Before submission, the narratives, cost schedules, apportionment workings, eligibility note and supporting evidence need to come together in one pack a reviewer can check. A structured internal review, where someone who did not prepare the claim ties numbers back to the ledger and statements back to evidence, catches the errors that trigger enquiries.

                ## Milestones
                1. One pack holding narratives, cost schedules, workings and the eligibility note.
                2. Every cost total agreed to the ledger and payroll records.
                3. Every technical statement in a narrative linked to evidence.
                4. Review points raised and cleared, with the reviewer's sign-off.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete claim pack has been reviewed by someone who did not prepare it, with every cost tied to the ledger and every review point cleared."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Assemble narratives, cost schedules and workings in one claim pack"
                - "Agree every cost total back to the ledger and payroll reports"
                - "Ask someone who did not prepare the claim to review it"
                - "Clear every review point before the pack goes to directors"
            - name: Director approval of the R&D claim
              description: |-
                ## Purpose
                Directors are responsible for what the company claims, and some regimes now ask for a named senior officer on the claim. A short approval meeting, with the claim pack, the risk register and the adviser's report in front of the board, makes sure the people accountable have understood and accepted what is being filed.

                ## Milestones
                1. The claim pack, risk register and adviser report circulated a week before the meeting.
                2. Questions from directors answered in writing.
                3. Approval minuted, with the named senior officer recorded where required.
                4. The minute filed with the claim.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A board minute approving the claim, naming any required senior officer, is filed with the claim pack before submission."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Circulate the claim pack and risk register to directors a week ahead"
                - "Answer directors' questions in writing before the meeting"
                - "Minute the approval and name the senior officer where required"
                - "File the signed minute with the claim"
            - name: R&D claim submission and acknowledgement
              description: |-
                ## Purpose
                Submission often involves more than one step: the return or claim form itself, a separate project description or additional information form, and sometimes a registration, and each must be accepted for the claim to stand. Tracking each element through to an acknowledgement and saving the receipts closes the cycle cleanly.

                ## Milestones
                1. Every form the claim needs listed for this period.
                2. Claim figures in the return checked against the approved pack.
                3. Each form submitted through the official channel.
                4. Acknowledgements or reference numbers saved for every submission.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every form the claim requires has been submitted and acknowledged, with reference numbers saved in the archive."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every form and registration this claim needs"
                - "Check the figures in the return against the approved claim pack"
                - "Submit each form through the official channel"
                - "Save each acknowledgement and reference number in the archive"
            - name: Responding to an R&D enquiry letter
              description: |-
                ## Purpose
                An enquiry into an R&D claim asks focused technical and cost questions, often with a tight response date, and a calm, organised reply usually resolves it faster than a defensive one. Logging the questions, assigning each to the technical lead or finance, answering from the evidence archive and agreeing the response with your adviser keeps the reply accurate and consistent with the original claim.

                ## Milestones
                1. The enquiry letter logged with its response deadline and every question numbered.
                2. Each question assigned to an owner with the evidence they need.
                3. A draft response reviewed by your adviser and the technical lead.
                4. The reply sent on time and any follow-up meeting prepared for.

                ## Notes
                Ask for more time early if you need it, and never send material that contradicts the original claim without your adviser's view. Broader tax investigations sit in their own area.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every question in the enquiry letter has an evidenced answer, reviewed by the adviser and technical lead and sent before the deadline."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Log the enquiry letter, its deadline and each numbered question"
                - "Assign each question to the technical lead or finance with the evidence needed"
                - "Ask the agent to draft a response index linking each answer to its evidence"
                - "Send the draft reply to your adviser for review well before the deadline"
            - name: Post-claim debrief and next-year fixes
              description: |-
                ## Purpose
                The weeks after a claim goes in are the best time to fix what made it painful, because the gaps are still obvious. A one-hour debrief with finance, the technical lead and the adviser, ending with three changes for next year, is how claims get faster and stronger with each cycle.

                ## Milestones
                1. A one-hour debrief held within a month of submission.
                2. What took longest and where evidence was thin listed.
                3. Three changes for next year agreed, each with an owner.
                4. The changes built into next year's claim timetable.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A debrief held within a month of submission records three owned changes, each added to next year's claim timetable."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a one-hour debrief within a month of submitting"
                - "List what took longest and where evidence was weakest"
                - "Agree three changes for next year and give each an owner"
                - "Add the changes to next year's claim timetable"
            - name: First R&D claim for a pre-revenue startup
              description: |-
                ## Purpose
                For a startup burning cash, an R&D credit can be one of the largest receipts of the year, yet founders often have no finance team, patchy records and claim firms calling every week. A phased plan for the first claim, starting with eligibility and evidence from what already exists and ending in a modest, well-supported claim, sets a pattern the company can repeat.

                ## Milestones
                1. Eligibility confirmed and a preparer chosen.
                2. Evidence rebuilt from the repository, tickets, payroll records and dated design notes.
                3. A conservative first claim limited to projects with strong evidence.
                4. The claim filed, with monthly routines running for the next period.

                ## Notes
                Investor updates and pitch decks describe ambition, not technical uncertainty. Use them to confirm dates, not as narrative wording.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first claim limited to well-evidenced projects is filed, and evidence and time routines are running for the following period."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down what the product needed that nobody knew how to build"
                - "Gather payroll, contractor invoices and repository history for the period"
                - "Limit the first claim to projects with dated evidence"
                - "Start the monthly evidence and time routines before the next period begins"
            - name: Prototype and process R&D in a small manufacturer
              description: |-
                ## Purpose
                Engineering firms and manufacturers often do qualifying work without calling it R&D: a new process that kept failing, a prototype that took six iterations, tooling that had to be invented. Recognising that work, recording trials and scrap, and separating production runs from development runs lets a small firm claim for what genuinely qualifies.

                ## Milestones
                1. Process changes, prototypes and trials in the period listed with dates.
                2. Trial records, scrap and materials consumed in testing documented.
                3. Development runs separated from commercial production runs.
                4. A claim scope agreed with your adviser.

                ## Notes
                Prototypes that are later sold, and materials that end up in saleable products, are often treated differently. Flag them for your adviser.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated list of trials and prototypes, with scrap and material records and development runs separated from production, supports an adviser-agreed claim scope."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List new processes, prototypes and trials from the past year"
                - "Pull trial logs, scrap records and test reports for each one"
                - "Separate development runs from production runs in the costings"
                - "Walk the shop floor with your adviser to agree the claim scope"
            - name: Engineer's contribution to the company R&D claim
              description: |-
                ## Purpose
                Engineers are the source of every technical statement the company makes in a claim, yet most are asked about R&D only once a year, under pressure. Knowing what to record as you work, a short note on what you are unsure about, what you tried and why it failed, makes the annual interview quick and the claim accurate without extra admin.

                ## Milestones
                1. The R&D definition understood well enough to spot uncertainty in your own work.
                2. Approaches tried and abandoned recorded in tickets or design notes.
                3. A weekly note on open technical problems kept through the period.
                4. Notes about your projects confirmed accurate before the claim is filed.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Weekly notes on open technical problems cover the claim period, and the engineer has confirmed the interview notes on their projects."
                cadence: rolling
              tasks:
                - "Read the one-page R&D definition your finance team uses"
                - "Record failed approaches and why they failed in the ticket"
                - "Write a short note on what did not work this week and why @recurring(weekly:fri)"
                - "Check the interview notes on your projects before the claim is filed"
            - name: Client-funded and contract R&D ownership check
              description: |-
                ## Purpose
                Agencies, consultancies and development studios often do technically hard work for clients, but whether they or the client can claim depends on who bears the risk, who owns the results and how the contract is written. Reviewing each client contract for those points prevents a claim the company is not entitled to make, or reveals one it is.

                ## Milestones
                1. Every client contract involving technically uncertain work listed.
                2. Each contract reviewed for result ownership, payment basis and who bears the risk.
                3. Your adviser's view on who can claim for each one recorded.
                4. Future contract templates updated with clear R&D terms where appropriate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each client contract involving uncertain technical work has a recorded view, from the adviser, on whether the company or the client may claim."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List client contracts where your team solved uncertain technical problems"
                - "Note who owns the results and who pays if the work fails"
                - "Ask your adviser who is entitled to claim for each contract"
                - "Ask your lawyer whether contract templates need clearer R&D terms"
            - name: Group, connected company and acquisition changes
              description: |-
                ## Purpose
                Investment rounds, acquisitions, new subsidiaries and changes of control can alter which scheme a company can use, how its size is measured and which entity should make the claim. Reviewing the group position whenever ownership changes stops a claim being filed by the wrong company or under the wrong rules.

                ## Milestones
                1. The current group structure and ownership drawn on one page.
                2. Linked, partner and connected companies identified for size tests.
                3. The entity that employs the R&D staff and pays the costs confirmed.
                4. Your adviser's view on the effect of the change recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page group chart, the entities counted for size tests and the claiming entity are recorded with the adviser's view after each ownership change."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draw the current group structure and shareholdings on one page"
                - "Note any investor or parent that could count for size tests"
                - "Confirm which entity employs the R&D staff and pays the costs"
                - "Ask your adviser how the ownership change affects the claim"
            - name: Handing the R&D claim from founder to finance hire
              description: |-
                ## Purpose
                In many startups the founder has run the R&D claim from memory, and that knowledge fades as the company grows and their attention moves elsewhere. A planned handover to the first finance hire, covering the archive, the adviser relationship, the routines and the judgement calls made so far, keeps the claim consistent through the change.

                ## Milestones
                1. A handover note covering past claims, judgement calls and open risks.
                2. The finance hire introduced to the adviser and the technical lead.
                3. Ownership of each monthly and yearly routine transferred.
                4. The next claim prepared by the finance hire with the founder reviewing.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written handover note exists, every recurring R&D routine has a new owner, and the next claim is prepared by the finance hire."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a handover note on past claims, key judgements and open risks"
                - "Introduce the finance hire to the adviser and the technical lead"
                - "Transfer ownership of each recurring R&D routine"
                - "Ask the agent to summarise past claim correspondence into a dated timeline"
            - name: Adjusting the claim after an R&D scheme rule change
              description: |-
                ## Purpose
                Regimes change often: schemes merge, rates move, new forms appear, cost categories widen or narrow and overseas work gets restricted. Checking the official guidance each quarter and, when something changes, working out what it means for the next claim avoids filing under last year's rules.

                ## Milestones
                1. The official R&D guidance and policy update pages bookmarked.
                2. Each rule change summarised with the period it applies from.
                3. The effect on the next claim estimated with your adviser.
                4. Routines, templates and the timetable updated for the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated log records each R&D rule change found in quarterly checks, its effective period and the adviser's view of its effect."
                cadence: rolling
              tasks:
                - "Bookmark the tax authority's R&D guidance and policy update pages"
                - "Check the R&D guidance pages for rule changes @recurring(quarterly)"
                - "Summarise any change and the period it applies from"
                - "Update routines and templates when a change affects the next claim"
            - name: Overseas R&D spend and cross-border teams
              description: |-
                ## Purpose
                Distributed teams, offshore development partners and overseas contractors are common, but several regimes restrict or exclude R&D work carried out abroad. Mapping where each person and supplier actually works, and checking the rules for each location, is essential before any of those costs go into a claim.

                ## Milestones
                1. Every R&D contributor and supplier mapped to the country where they work.
                2. The rules on overseas work in your regime summarised.
                3. Any exception your adviser thinks may apply recorded with its basis.
                4. Overseas costs included or excluded with the reason noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every overseas R&D cost is mapped to a location and marked included or excluded with a written reason agreed with the adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Map each R&D contributor and supplier to the country where they work"
                - "Summarise your regime's rules on R&D done abroad"
                - "Ask your adviser whether any exception could apply"
                - "Mark each overseas cost included or excluded with a reason"
            - name: Tax treatment of research costs beyond the credit
              description: |-
                ## Purpose
                In some countries the same costs that earn an R&D credit must also be capitalised and spread over several years in the tax computation, and these rules have changed more than once, for example under the US rules for research expenditure. Understanding with your accountant how the claim interacts with that treatment prevents surprises in taxable profit.

                ## Milestones
                1. The treatment of research costs in the tax computation confirmed for the current period.
                2. The interaction with the credit explained by your accountant.
                3. Any capitalised amounts and their write-off periods recorded.
                4. The R&D cost schedule and the tax computation reconciled.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The R&D cost schedule reconciles to the research cost figures in the tax computation, with any capitalised amounts and write-off periods recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your accountant how research costs are treated in the tax computation"
                - "Get the current period's capitalised or deducted amounts in writing"
                - "Record any amounts being written off over future years"
                - "Reconcile the R&D cost schedule with the tax computation"
            - name: R&D-intensive and enhanced rate eligibility checks
              description: |-
                ## Purpose
                Some regimes give extra support to small, young or R&D-intensive companies, for example the UK's support for loss-making R&D-intensive companies, and qualifying depends on precise ratios measured over set periods. Running the test each year with the workings kept shows whether the company qualifies and how close it sits to the line.

                ## Milestones
                1. The intensity or size tests in your regime written out.
                2. The test calculated from this period's figures with workings saved.
                3. Movement since last year and the margin above or below the line noted.
                4. The result confirmed by your adviser before the claim is prepared.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An intensity or size test calculation with workings is saved for each period and confirmed by the adviser before the claim is drafted."
                cadence: cyclic
              tasks:
                - "Write out the intensity or size tests your regime uses"
                - "Calculate the test from this period's draft figures"
                - "Note how close the company is to the threshold"
                - "Rerun the intensity test when the year's draft accounts are ready @recurring(yearly)"
            - name: Multi-year R&D programme narrative
              description: |-
                ## Purpose
                Deep technical work rarely fits neatly into one accounting period, and a claim that describes the same project differently each year invites questions. A running programme narrative for long projects, updated after each claim with what was resolved, what remains uncertain and what changed, keeps every year's account consistent.

                ## Milestones
                1. Long-running projects that span claim periods identified.
                2. A programme narrative for each, with the original baseline and uncertainties.
                3. Each year's progress and remaining uncertainties added after the claim.
                4. Each year's narratives checked for consistency with the programme record.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every claimed project spanning more than one period has a programme narrative updated after each claim and consistent with earlier years."
                cadence: rolling
              tasks:
                - "Identify claimed projects that span more than one period"
                - "Write the original baseline and uncertainties for each long project"
                - "Update each programme narrative after the claim is filed @recurring(yearly)"
                - "Check this year's narratives against earlier years' wording"
            - name: Patent and IP regimes alongside R&D credits
              description: |-
                ## Purpose
                Companies that turn R&D into patents or other qualifying intellectual property may also be able to use a reduced tax rate on related profits, such as a patent box, and the two regimes often rely on the same cost tracking. Finding out whether such a regime exists in your country, what it requires and how it uses R&D records helps you decide, with an adviser, whether it is worth pursuing.

                ## Milestones
                1. Whether an IP regime exists in your country and its main conditions noted.
                2. The company's granted patents and pending applications listed.
                3. The record keeping the regime would need compared with your R&D records.
                4. A pursue or not yet decision recorded with your adviser's view.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded pursue or not yet decision on any available IP regime, with the patent list and the adviser's view attached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether your country has a patent box or similar IP regime"
                - "List the company's granted and pending patents"
                - "Compare the regime's tracking needs with your R&D cost records"
                - "Record a pursue or not yet decision with your adviser"
---

# R&D Tax Credit Claims

This area is for founders, small technical businesses and the engineers whose work goes into an R&D tax credit or relief claim, whichever country's scheme you use. It starts with foundations (eligibility, deadlines, a project inventory, a technical lead, funding checks, a cost map, an archive and the choice of preparer), then the routines that capture evidence, time and costs as the work happens, the concepts and writing skills behind a good claim, decisions on scope, boundaries, method and how to take the benefit, the dated events of interviews, review, approval, submission and enquiries, situations for startups, manufacturers, engineers, agencies and changing groups, and finally specialist work on overseas teams, cost capitalisation, intensity tests, long programmes and IP regimes.

What repeats is a monthly evidence export, time split sign-off, cost tagging, project screening and label check, quarterly reviews of uncertainties, contractors, cloud costs, the expected credit, claim risks and rule changes, a Friday note for engineers, and a yearly cycle of timetable, interview week, archive, adviser renewal, intensity test and programme narrative. The Vendor, Metrics log, Risk register, Meeting notes and Operational checklist templates pair with the projects that name them, and everything here organises the claim while eligibility and amounts stay with your accountant or R&D adviser to confirm. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
