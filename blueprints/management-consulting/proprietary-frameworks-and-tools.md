---
id: management-consulting.proprietary-frameworks-and-tools
name: Proprietary Frameworks and Tools
description: "Turn the work you repeat into firm IP: an inventory of repeats, ownership checked in contracts, diagnostics, benchmarks and playbooks built and versioned, protection in place, and tools used in proposals, pilots and licences."
category: business
version: 1.0.0
tags: [management-consulting, proprietary-frameworks-and-tools, founder, small-business, freelancer, intellectual-property, diagnostics, methods]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - purchase-decision
    - product-spec
    - training-program
    - risk-register
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Proprietary Frameworks and Tools
          description: "Turning repeated work into firm IP: diagnostic tools, benchmarks, templates and methods, documentation, protection and using them in proposals."
          projects:
            - name: Inventory of repeated work across past engagements
              description: |-
                ## Purpose
                Most small firms rebuild the same three or four things on every engagement: a diagnostic interview guide, a current-state scorecard, a cost baseline model, a roadmap template. Listing what you have built more than twice across your last ten engagements, with the hours spent each time, shows where firm IP already exists in rough form and which piece would pay back first.

                ## Milestones
                1. A list of your last ten engagements with the main work products from each.
                2. Every work product built on three or more engagements flagged as a repeat.
                3. Rough hours spent rebuilding each repeat estimated from timesheets or memory.
                4. A ranked shortlist of five candidates for turning into firm IP.

                ## Notes
                Count the interview guides, scoring sheets and Excel tabs, not just the final decks. The humble working files are usually where the reusable method lives.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of at least five repeated work products, each with the engagements it appeared in and estimated rebuild hours."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List your last ten engagements and the main files each produced"
                - "Flag every work product that appears on three or more engagements"
                - "Estimate hours spent rebuilding each repeat from timesheets"
                - "Rank the repeats by hours saved if they were reusable"
            - name: Choosing the first method to productise
              description: |-
                ## Purpose
                Trying to turn everything into IP at once produces a folder of half-finished templates nobody uses. Picking one candidate, scored on how often it recurs, how clearly it sets you apart and how easily a buyer would understand it, gives the next three months a single focus.

                ## Milestones
                1. Five shortlisted candidates scored on frequency, differentiation, explainability and build effort.
                2. One method chosen, with the reason written in two sentences.
                3. The two runners-up parked in a backlog with notes on why they wait.
                4. A target date for a first usable version agreed with any partners.

                ## Notes
                Favour the method clients already ask about, even informally. Demand you can hear beats elegance you have to explain.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One method chosen from a scored shortlist of five, with the rationale and a first-version date written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Score each shortlisted repeat on four criteria from one to five"
                - "Ask two past clients which part of your work they would buy again"
                - "Record the chosen method and the reason in two sentences"
                - "Park the runners-up in an IP backlog with notes"
            - name: IP ownership clauses in your client contracts
              description: |-
                ## Purpose
                Whether you can reuse a tool depends on what your contracts said about ownership, and many standard client terms hand over everything produced during the engagement, sometimes including the methods behind it. Reading your current terms with a lawyer and separating background IP, which you keep, from deliverables, which the client may own, protects the work you are about to invest in.

                ## Milestones
                1. Every active client contract and your standard terms gathered in one folder.
                2. Each contract's ownership, licence and confidentiality clauses summarised in a table.
                3. A lawyer's review of your standard terms completed.
                4. Revised standard wording on background IP ready for the next proposal.

                ## Notes
                This is organisational preparation, not legal advice. The position differs by country and by contract, so have a qualified lawyer confirm the wording before you rely on it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table summarising the IP and confidentiality clauses of every active client contract, plus revised standard terms reviewed by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect every signed client contract and your standard terms of business"
                - "Copy the ownership, licence and confidentiality clauses into one table"
                - "Book a contract review with a lawyer who handles services agreements"
                - "Update your standard terms with the wording the lawyer recommends"
            - name: Client data rights register for pooled datasets
              description: |-
                ## Purpose
                Benchmarks and diagnostic norms only become proprietary if you are allowed to keep and pool the client data behind them. A register showing, for each past client, whether the contract permits anonymised aggregate use tells you which data points you can build on and which must be removed or left out.

                ## Milestones
                1. Each client dataset you hold listed with source, date and the contract it came under.
                2. Permission status marked for every dataset: permitted, consent needed or not permitted.
                3. Consent requests drafted for clients whose data is valuable but unclear.
                4. Datasets you have no right to keep removed under your data retention routine.

                ## Notes
                Data protection law may apply wherever personal data is involved, including individual survey responses. Check your obligations with a privacy adviser before pooling anything.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register covering every client dataset held, each marked permitted, consent needed or not permitted, with consent requests sent where needed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every client dataset stored on your drives and laptops"
                - "Mark each one permitted, consent needed or not permitted for pooled use"
                - "Draft a short consent request for the most valuable unclear datasets"
                - "Remove datasets you have no right to keep, and log the removal"
            - name: One-page definition of the chosen method
              description: |-
                ## Purpose
                A framework that cannot be explained on a page usually cannot be sold or taught either. Writing the name, the problem it solves, the steps, the outputs and who it is for on one sheet forces the decisions that every later template, slide and training session depends on.

                ## Milestones
                1. A working name for the method that is short, plain and not already common in the field.
                2. The problem it solves stated in one sentence in the client's words.
                3. Between three and seven named steps, each with its output.
                4. The page tested on two people outside the firm, who could explain it back.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page method definition with name, problem statement, steps and outputs, explained back correctly by two outside readers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the problem the method solves in one sentence"
                - "Name each step and the output it produces"
                - "Draft the one-page definition with a simple diagram"
                - "Ask two people outside the firm to explain the page back to you"
            - name: IP library structure and version control
              description: |-
                ## Purpose
                Tools that live in email attachments and personal desktops drift into five slightly different versions within a year. One library with a fixed folder structure, a version number in every file name and a single owner per tool means consultants always start from the current copy.

                ## Milestones
                1. A shared library created with folders for methods, diagnostics, templates, data and archive.
                2. A naming rule with tool name, version and date applied to every file.
                3. An owner named for each tool on a short index page.
                4. Old copies moved to the archive so only current versions sit in the main library.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared IP library with an index naming an owner and current version for every tool, and no duplicate live copies."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create library folders for methods, diagnostics, templates, data and archive"
                - "Write the file naming rule with tool, version and date"
                - "Move every current tool into the library and rename it"
                - "Write the index page with owner and version for each tool"
            - name: Background IP schedule for statements of work
              description: |-
                ## Purpose
                Listing your pre-existing tools in a schedule attached to each statement of work makes it plain, before any work starts, that the client gets a licence to use them and you keep ownership. Small firms that skip this can find their best diagnostic quietly claimed under a broad deliverables clause.

                ## Milestones
                1. A schedule listing each pre-existing tool, a one-line description and its creation date.
                2. Wording agreed with your lawyer on the licence the client receives.
                3. The schedule attached to every new statement of work from now on.
                4. A dated evidence file showing when each tool was first created.

                ## Notes
                Keep earlier versions with their dates. They are your evidence that a tool existed before the engagement began.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A background IP schedule reviewed by a lawyer is attached to every statement of work signed after its completion."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each pre-existing tool with a one-line description and creation date"
                - "Ask your lawyer to approve the licence wording for the schedule"
                - "Add the schedule to your statement of work template"
                - "Update the schedule as new tools are added @recurring(quarterly)"
            - name: Baseline of hours lost to rebuilding work
              description: |-
                ## Purpose
                Before investing in tools, measure what their absence costs. Tagging time on the next two engagements as new thinking, client-specific adaptation or rebuilding something done before gives a real number to compare against later, and the rebuild share is often larger than anyone expects.

                ## Milestones
                1. Three time categories added to your timesheet or tracking tool.
                2. Two engagements tracked with every delivery hour tagged.
                3. The share of hours spent rebuilding calculated for each engagement.
                4. The baseline figure recorded in your metrics log for later comparison.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Rebuild hours as a percentage of total delivery hours, calculated across two tracked engagements and recorded with the date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add new, adapted and rebuilt categories to your time tracking"
                - "Tag every delivery hour on the next two engagements"
                - "Calculate the rebuild share for each engagement"
                - "Record the baseline percentage in the metrics log"
            - name: Clearance search on a framework name
              description: |-
                ## Purpose
                Building a brand around a framework name that another firm already uses invites a dispute just when the method starts to sell. A basic search of trade mark registers, company names and the web, followed by a view from a trade mark attorney, tells you whether the name is safe to invest in.

                ## Milestones
                1. Three candidate names for the method listed in order of preference.
                2. Searches run on the trade mark registers in your main markets and on the web.
                3. Any close matches noted with owner, class and country.
                4. A trade mark attorney's view obtained on the preferred name.

                ## Notes
                Register searches are a first screen only. An attorney can judge similarity and the right classes, which a database search cannot.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preferred framework name cleared by register and web searches and an attorney's opinion, with the results filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three candidate names for the method"
                - "Search the trade mark register in each main market for each name"
                - "Search the web and company registers for firms using similar names"
                - "Send the shortlist and results to a trade mark attorney for a view"
            - name: Monthly IP harvest from closed engagements
              description: |-
                ## Purpose
                Reusable material is easiest to capture in the weeks after an engagement closes, while the team still remembers which model tab took three days and which interview question changed the conversation. A fixed monthly session to pull, clean and file those pieces keeps the library growing from real work rather than occasional bursts of good intention.

                ## Milestones
                1. A harvest checklist covering models, guides, slides, data and lessons.
                2. A monthly session booked and held for three months running.
                3. At least one item from each closed engagement cleaned and filed in the library.
                4. A harvest log showing what was added and by whom.

                ## Notes
                Start from the **Operational checklist** template. Strip client names, logos and figures before anything enters the library.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly harvest sessions held, each adding at least one cleaned item from every engagement closed that month."
                cadence: rolling
              tasks:
                - "Write the harvest checklist for models, guides, slides, data and lessons"
                - "Hold the monthly IP harvest session @recurring(monthly:12)"
                - "Strip client names and figures from each harvested item before filing"
                - "Log each item added with its source engagement and owner"
            - name: Tool release notes and changelog routine
              description: |-
                ## Purpose
                Once more than one person uses a tool, unannounced changes break trust fast: a scoring weight moves and last quarter's client results no longer compare. A short changelog and a monthly release, even when only one tool changes, gives everyone a known current version and a record of why it changed.

                ## Milestones
                1. A changelog page in each tool's folder with version, date, change and reason.
                2. A monthly release date fixed and shared with everyone who uses the tools.
                3. A short release note sent with each new version.
                4. Old scoring versions kept so earlier client results can be reproduced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tool in the library has a changelog, and monthly release notes have gone out for three consecutive months."
                cadence: rolling
              tasks:
                - "Create a changelog page in each tool's folder"
                - "Publish the monthly tool release and its note @recurring(monthly:20)"
                - "Keep the prior scoring version in the archive with its date"
                - "Ask users to report problems against a version number"
            - name: Quarterly IP portfolio review
              description: |-
                ## Purpose
                Every quarter, look at the whole set of tools as a portfolio: which ones were used, which helped win work, which are stale and which deserve investment. Without this, effort flows to the tool its author enjoys rather than the one clients actually want.

                ## Milestones
                1. A portfolio table listing each tool with uses, proposals it appeared in and last update.
                2. Each tool marked invest, maintain, merge or retire.
                3. The next quarter's development priorities written as no more than three items.
                4. Decisions recorded with the date for comparison next quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated quarterly portfolio table with every tool marked invest, maintain, merge or retire, and no more than three priorities for the next quarter."
                cadence: cyclic
              tasks:
                - "Pull usage and proposal counts for each tool from the metrics log"
                - "Hold the quarterly IP portfolio review @recurring(quarterly)"
                - "Mark each tool invest, maintain, merge or retire"
                - "Write the next quarter's top three development priorities"
            - name: Proprietary benchmark database refresh cycle
              description: |-
                ## Purpose
                A proprietary benchmark is only worth quoting if it is current and large enough. Adding permitted data points every month and re-running the normalisation each quarter keeps medians honest and lets you tell a prospect exactly how many organisations sit behind each figure.

                ## Milestones
                1. A data entry routine that adds new permitted data points within a month of collection.
                2. Each data point tagged with sector, size band, region and year.
                3. Medians and quartiles recalculated each quarter with sample sizes shown.
                4. Data points older than your cut-off year flagged or removed from live figures.

                ## Notes
                This is the firm's own asset, separate from any benchmarking engagement, and built only from data your rights register marks as permitted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The benchmark dataset shows a refresh date within the last quarter and a sample size beside every published figure."
                cadence: rolling
              tasks:
                - "Agree the tags every benchmark data point must carry"
                - "Add newly permitted data points to the benchmark @recurring(monthly:8)"
                - "Recalculate medians and quartiles with sample sizes @recurring(quarterly)"
                - "Set a cut-off year after which old data leaves live figures"
            - name: Field feedback log on tool use
              description: |-
                ## Purpose
                Consultants using a diagnostic in front of clients notice the confusing question, the slow tab and the chart nobody reads, then forget by the following week. A simple log triaged every Friday turns those observations into the next version's fixes.

                ## Milestones
                1. A shared feedback log with tool, version, issue and suggested fix columns.
                2. Everyone using the tools told where the log is and asked to add to it.
                3. A weekly triage sorting new entries into fix, consider or decline.
                4. Fixes linked to the release notes in which they shipped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A feedback log with entries triaged every week, and at least five logged issues closed in published releases."
                cadence: rolling
              tasks:
                - "Set up the feedback log with tool, version, issue and fix columns"
                - "Show the team where the log lives and what to record"
                - "Triage new tool feedback entries @recurring(weekly:fri)"
                - "Link each fixed entry to the release that contains it"
            - name: Template library upkeep
              description: |-
                ## Purpose
                Proposal shells, interview guides, workplan formats and report templates age quietly: an old logo, a retired service line, a font the brand no longer uses. A monthly pass through the most used templates keeps them current so nobody reformats a deck at midnight before a client meeting.

                ## Milestones
                1. The twenty most used templates identified from file history.
                2. Each template checked for brand, wording, links and current service descriptions.
                3. Outdated templates corrected or moved to the archive.
                4. The last check date of each template shown in the library index.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The twenty most used templates each show a check date within the last four months in the library index."
                cadence: rolling
              tasks:
                - "Identify the twenty most used templates from file history"
                - "Check five templates for brand, wording and links @recurring(monthly:26)"
                - "Move templates for retired services into the archive"
                - "Record the check date beside each template in the index"
            - name: Usage tracking for each firm tool
              description: |-
                ## Purpose
                Without numbers, nobody can tell whether the diagnostic everyone praises is used on one engagement in ten or nine in ten. Logging uses, proposals that featured each tool and work won with it every month gives the portfolio review real evidence and shows a buyer or investor that the IP is alive.

                ## Milestones
                1. A metrics log with columns for tool, engagement, proposal, outcome and hours saved.
                2. A monthly entry for each tool, even when the count is zero.
                3. Six months of usage data collected.
                4. A simple chart of use and wins per tool shared with partners.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of usage entries for every tool, including proposals featured and engagements won."
                cadence: rolling
              tasks:
                - "Set up the usage log with tool, engagement, proposal and outcome columns"
                - "Record last month's tool usage and wins @recurring(monthly:3)"
                - "Ask engagement leads to flag every use of a firm tool"
                - "Share a six-month chart of use and wins with partners"
            - name: Annual IP protection calendar
              description: |-
                ## Purpose
                Trade mark renewals, domain names, software subscriptions for hosted tools and client licence terms all fall due on different dates, and a lapsed registration can cost far more to recover than to keep. One calendar with every renewal and review date, checked in full once a year, prevents the expensive surprise.

                ## Milestones
                1. Every registration, domain, licence and contract renewal date listed in one calendar.
                2. An owner assigned to each renewal.
                3. Reminders set well ahead of each deadline.
                4. An annual full check completed and dated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar listing every IP renewal date with an owner, and an annual check completed with no lapsed registrations."
                cadence: cyclic
              tasks:
                - "List every trade mark, domain, software licence and client licence renewal"
                - "Assign an owner and a reminder date to each renewal"
                - "Run the full annual IP protection check @recurring(yearly)"
                - "Confirm renewal fees with your attorney or registrar before each deadline"
            - name: Weekly method improvement half hour
              description: |-
                ## Purpose
                Methods get sharper through small, steady edits rather than grand rewrites twice a year. Thirty protected minutes each Wednesday to fix one thing in the playbook, a template or the scoring model adds up to dozens of improvements a year without competing with client delivery.

                ## Milestones
                1. A recurring half hour blocked in your calendar.
                2. A short list of pending improvements kept beside the playbook.
                3. One improvement completed each week for eight weeks.
                4. Completed improvements fed into the monthly release notes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks with one logged improvement to a method, template or scoring model."
                cadence: rolling
              tasks:
                - "Block a protected half hour each Wednesday in your calendar"
                - "Keep a short list of pending method fixes beside the playbook"
                - "Make one method improvement and log it @recurring(weekly:wed)"
                - "Pass completed improvements to the next release note"
            - name: Copyright, trade marks and trade secrets for consultants
              description: |-
                ## Purpose
                Consulting IP is protected by a mix of tools: copyright in written materials and software, trade marks for names and logos, confidentiality for methods and data kept private, and contracts for everything else. Understanding which applies to which asset, at the level needed to brief a lawyer well, saves fees and avoids false confidence.

                ## Milestones
                1. Notes on what copyright, trade marks, trade secrets and patents each protect and do not protect.
                2. Each tool in your library mapped to the protections that might apply.
                3. A list of questions to take to an IP lawyer.
                4. Your notes checked by the lawyer for accuracy in your country.

                ## Notes
                Ideas and methods as such are generally hard to protect. The written expression, the name and the secrecy around them are where protection usually sits, but confirm the position where you work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A protection map for every tool in the library, with lawyer questions written and the notes checked by a lawyer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an IP office's plain-language guide to copyright and trade marks"
                - "Map each library tool to the protections that might apply"
                - "Write the questions you need an IP lawyer to answer"
                - "Book a session with the lawyer to check your notes"
            - name: Designing a scored diagnostic questionnaire
              description: |-
                ## Purpose
                Diagnostics are the most common piece of consulting IP: a structured set of questions that scores a client against a model and points to where the problems sit. Learning to write unambiguous questions, choose a scale, weight dimensions and test the result on real respondents is what separates a credible diagnostic from a long survey.

                ## Milestones
                1. The dimensions of the diagnostic defined, each with a clear description.
                2. Between four and eight questions per dimension written on a consistent scale.
                3. A scoring and weighting rule written down and applied in a spreadsheet.
                4. The questionnaire piloted with at least ten respondents and confusing questions rewritten.

                ## Notes
                Questions that ask two things at once produce scores nobody can interpret. Keep the scale identical across every dimension so results can be compared.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A diagnostic with defined dimensions, a written scoring rule and pilot results from at least ten respondents."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write a one-line definition for each diagnostic dimension"
                - "Draft four to eight questions per dimension on one scale"
                - "Ask the agent to flag draft questions that ask two things at once"
                - "Pilot the questionnaire with ten respondents and revise"
            - name: Writing a method playbook others can follow
              description: |-
                ## Purpose
                If the method only works when the founder runs it, it is a personal skill, not firm IP. A playbook that walks a capable consultant through each step, with inputs, outputs, worked examples and common mistakes, is the test of whether the method can be delegated, sold or licensed.

                ## Milestones
                1. A playbook outline matching the steps in the one-page definition.
                2. Each step written with purpose, inputs, activities, outputs and a worked example.
                3. Common mistakes and judgement calls noted for each step.
                4. A colleague who has never used the method runs one step from the playbook alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A complete playbook used by a colleague, unaided, to deliver at least one step of the method on a live or practice engagement."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Outline the playbook using the steps from your one-page definition"
                - "Write the first step in full with a worked example"
                - "Add common mistakes and judgement calls to each step"
                - "Ask a colleague to run one step using only the playbook"
            - name: Building a maturity model that holds up
              description: |-
                ## Purpose
                Maturity models, the five-level grids that place a client somewhere from basic to leading, are easy to draw and hard to defend. Learning to define each level by observable evidence rather than adjectives makes the model survive a sceptical client's questions and gives consistent scores across consultants.

                ## Milestones
                1. Dimensions and levels drafted for your area of expertise.
                2. Each cell described by evidence an assessor could observe or ask for.
                3. Two consultants scoring the same case independently and comparing results.
                4. Cell descriptions revised wherever the two scores differed by more than one level.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A maturity model where two consultants scoring the same case independently land within one level on every dimension."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft the dimensions and levels for your maturity model"
                - "Rewrite each cell as evidence an assessor can check"
                - "Have two consultants score the same past case independently"
                - "Revise cells where the scores differed by more than a level"
            - name: Productising a spreadsheet tool for repeat use
              description: |-
                ## Purpose
                Models built for one client usually have that client's assumptions hard-coded in a dozen places. Rebuilding one with a settings sheet, clean input tabs, a version stamp and a copyright notice turns it into a tool that can be set up for the next client in an hour instead of a week.

                ## Milestones
                1. Every client-specific assumption moved to one settings sheet.
                2. Input, calculation and output tabs separated and colour-coded.
                3. A version stamp, copyright notice and instructions tab added.
                4. The tool set up for a dummy client in under an hour as a test.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet tool with one settings sheet, a version stamp and instructions, configured for a test client in under an hour."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every client-specific assumption in the current model"
                - "Move all assumptions onto a single settings sheet"
                - "Add a version stamp, copyright notice and instructions tab"
                - "Time yourself setting the tool up for a dummy client"
            - name: Anonymisation rules for pooled client data
              description: |-
                ## Purpose
                Pooling data across clients is what makes a benchmark proprietary, and it is also how one client's confidential figure leaks to a competitor. Written rules on minimum group sizes, rounding, removing identifiers and who can see raw data protect both the clients and the firm's reputation.

                ## Milestones
                1. A minimum group size set below which no figure is shown.
                2. Rules for removing names, rounding values and suppressing outliers written down.
                3. Access to raw data limited to named people.
                4. The rules tested by trying to identify a known client from published figures.

                ## Notes
                Many firms refuse to show any figure drawn from fewer than five organisations. Agree your own threshold with partners and, where personal data is involved, a privacy adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Written anonymisation rules covering group sizes, identifiers and access, tested against an attempt to identify a known client."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set a minimum group size for any published figure"
                - "Write rules for removing identifiers and rounding values"
                - "Restrict raw data access to named people"
                - "Try to identify a known client from your own published figures"
            - name: Framework diagrams that clients remember
              description: |-
                ## Purpose
                Clients retell a method in their own meetings through its picture: the house, the wheel, the two-by-two. Learning a few principles of simple diagram design, then testing three versions on people who have not seen the method, gives the framework a visual that travels without you in the room.

                ## Milestones
                1. Three alternative diagrams of the method sketched.
                2. Each diagram shown to five people for ten seconds and their recall noted.
                3. The clearest version redrawn cleanly in brand colours.
                4. The final diagram used consistently across playbook, slides and proposals.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One method diagram chosen by a recall test with at least five people and used identically across playbook, slides and proposals."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sketch three different diagrams of the method"
                - "Show each sketch to five people for ten seconds and note recall"
                - "Redraw the winning diagram cleanly in brand colours"
                - "Replace older versions of the diagram across all materials"
            - name: Free, gated or paid release of each tool
              description: |-
                ## Purpose
                Some tools should be given away to start conversations, some shared only after a meeting, and some kept for paid work. Deciding the release level for each tool in advance stops the common drift where the best diagnostic ends up as a free download that competitors study at leisure.

                ## Milestones
                1. Each tool assessed on how much of your method it reveals.
                2. A release level set for each tool: open, shared after a meeting, or paid only.
                3. Lighter public versions defined for any tool released openly.
                4. The decisions noted in the library index.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A release level recorded for every tool in the library index, with lighter public versions defined where a tool is open."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rate each tool on how much of the method it reveals"
                - "Assign each tool open, shared after a meeting or paid only"
                - "Define a lighter public version of any open tool"
                - "Record the release level in the library index"
            - name: Licensing a tool to a client after the engagement
              description: |-
                ## Purpose
                Clients often want to keep running a diagnostic or model after you leave, which can become a recurring fee or a costly giveaway depending on the terms. Deciding your standard licence offer, covering scope, users, updates, support and term, lets you answer the request on the spot rather than negotiate from scratch.

                ## Milestones
                1. Options compared: included in the fee, annual licence or per-use licence.
                2. A standard licence offer drafted covering scope, users, updates, support and term.
                3. The licence wording reviewed by a lawyer.
                4. The offer put to at least one real client request.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A lawyer-reviewed standard licence offer for post-engagement tool use, put to at least one client."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List which tools clients have asked to keep after an engagement"
                - "Compare included, annual and per-use licence options"
                - "Draft the standard licence offer with scope, users and support"
                - "Send the draft licence to your lawyer for review"
            - name: Build or buy platform for an online diagnostic
              description: |-
                ## Purpose
                Moving a diagnostic from a spreadsheet to an online form changes what it can do: respondents fill it in without a consultant present, results arrive scored and comparisons grow automatically. Comparing survey platforms, no-code app builders and a custom build on cost, data location, branding and export makes the choice once and properly.

                ## Milestones
                1. Requirements written covering respondents, scoring, reporting, data location and branding.
                2. Three options compared, including at least one survey platform and one custom build quote.
                3. The data protection and export terms of each option checked.
                4. A choice made and recorded with the expected annual cost.

                ## Notes
                Start from the **Purchase decision** template. Check that you can export every response and score if you ever leave the platform.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform chosen from three compared options on written requirements, with data terms checked and annual cost recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write requirements for respondents, scoring, reporting and data location"
                - "Shortlist a survey platform, a no-code builder and a custom option"
                - "Check each option's data protection and export terms"
                - "Record the decision and expected annual cost"
            - name: Converting a spreadsheet tool into a web app
              description: |-
                ## Purpose
                When a spreadsheet tool is used every week by people outside the firm, the copies multiply and the formulas get broken. A small web app with logins, a fixed calculation engine and exportable results protects the logic and gives clients a better experience, but only if the specification is clear before any developer starts.

                ## Milestones
                1. A product spec covering users, screens, calculations, data and security.
                2. Fixed-price quotes from at least two developers or agencies.
                3. A first version built and tested against the spreadsheet's results on three cases.
                4. Hosting, backups and ownership of the code confirmed in writing.

                ## Notes
                Start from the **Product spec** template. Make sure the development contract assigns the code and any designs to your firm.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A web version of the tool matching the spreadsheet's results on three test cases, with code ownership assigned to the firm in writing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the product spec for users, screens and calculations"
                - "Get fixed-price quotes from two developers"
                - "Test the first version against the spreadsheet on three cases"
                - "Confirm in writing that the firm owns the code"
            - name: Packaging a diagnostic as a fixed-scope entry offer
              description: |-
                ## Purpose
                Fixed-scope diagnostics lasting two or three weeks are one of the easiest ways for a small firm to win a first engagement with a new client. Packaging your tool into that offer, with defined inputs, a standard report and a natural next step, lets the IP do part of the selling.

                ## Milestones
                1. Scope written: duration, client inputs, interviews, survey and outputs.
                2. A standard report template built around the diagnostic results.
                3. The natural follow-on engagement described in one paragraph.
                4. The offer described on one page, ready for sales conversations.

                ## Notes
                Keep the fee decision in your pricing work. This project defines what the client gets and how long it takes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page fixed-scope diagnostic offer with a standard report template and a described follow-on engagement."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Define the duration, client inputs and outputs of the diagnostic"
                - "Build the standard report template around the results"
                - "Describe the follow-on engagement in one paragraph"
                - "Write the one-page offer for sales conversations"
            - name: Merging or retiring overlapping tools
              description: |-
                ## Purpose
                Small firms often end up with two interview guides for the same topic and three versions of a roadmap template, each championed by a different consultant. Choosing one, merging the best parts and retiring the rest cuts confusion and the maintenance load at the same time.

                ## Milestones
                1. Overlapping tools identified from the library index.
                2. Each overlap compared side by side by the people who use the tools.
                3. One version chosen or a merged version built.
                4. Retired versions archived with a note pointing to the replacement.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every identified overlap resolved to a single live tool, with retired versions archived and pointing to the replacement."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find overlapping tools in the library index"
                - "Compare each overlap side by side with the people who use them"
                - "Choose or build one merged version of each"
                - "Archive retired versions with a pointer to the replacement"
            - name: Trade mark filing decision for the flagship method
              description: |-
                ## Purpose
                Registering the method's name gives you a clearer right to stop others selling a lookalike under it, but filing costs money in each country and class. Deciding where and whether to file, with an attorney's advice and a realistic view of where you actually sell, keeps the spend proportionate.

                ## Milestones
                1. Markets where you sell or plan to sell within three years listed.
                2. An attorney's estimate of filing costs and classes for each market received.
                3. A decision recorded for each market: file now, file later or do not file.
                4. The application filed, or the reasons for waiting written down with a review date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on filing for the method name in each main market, based on an attorney's cost estimate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the markets where you sell or will sell within three years"
                - "Ask your attorney for filing cost and class estimates"
                - "Decide to file now, later or not at all for each market"
                - "File the application or set a review date for the decision"
            - name: Pilot of the diagnostic with a friendly client
              description: |-
                ## Purpose
                Running a new tool for the first time on a paying engagement under deadline pressure is a poor way to discover its flaws. Offering a trusted client a pilot at reduced scope, with written agreement that you may learn from it, tests the tool in real conditions and produces your first case study.

                ## Milestones
                1. A friendly client signed up to the pilot with scope and terms in writing.
                2. Permission to use anonymised results and a quote included in the agreement.
                3. The pilot delivered and the client's feedback collected in a debrief.
                4. Changes from the pilot listed and scheduled for the next version.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot completed with a client, written feedback collected and permission to use anonymised results secured."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List three clients who might agree to pilot the diagnostic"
                - "Agree pilot scope and use of anonymised results in writing"
                - "Run a debrief with the client after the pilot"
                - "Turn pilot findings into a list of changes for version two"
            - name: First proposal built around the method
              description: |-
                ## Purpose
                Proposals that show a named method with a clear diagram, a step-by-step plan and evidence from past use read very differently from ones describing generic phases. Writing your next proposal around the method tests whether it helps win work and leaves you a reusable proposal module.

                ## Milestones
                1. A proposal section introducing the method, its diagram and its outputs.
                2. Evidence from the pilot or past engagements included, with permission.
                3. The proposal submitted to a real prospect.
                4. The prospect's reaction to the method recorded, win or lose.

                ## Notes
                Leave confidential scoring logic out of proposals. Show the steps and outputs, never the weights.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A proposal featuring the method submitted to a real prospect, with the prospect's reaction to it recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a two-page proposal module on the method"
                - "Add pilot evidence the client agreed you could use"
                - "Submit the proposal to the next suitable prospect"
                - "Record what the prospect said about the method"
            - name: Version two release of the diagnostic
              description: |-
                ## Purpose
                After the pilot and a handful of uses, the first version will have known gaps: questions that confuse, a dimension that never separates clients, a report nobody reads past page three. A planned version two, released on a set date with notes, fixes them together instead of in a stream of quiet edits.

                ## Milestones
                1. Every logged issue and pilot finding sorted into include or defer.
                2. Version two built and tested on two past datasets.
                3. Scoring changes documented so old and new results can be compared.
                4. Version two released to all users with a release note and short training.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Version two released on a planned date with release notes, scoring changes documented and tests on two past datasets passed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Sort every logged issue into include or defer for version two"
                - "Test version two on two past datasets"
                - "Document the scoring changes between versions"
                - "Run a short training session for all users at release"
            - name: Method certification day for your consultants
              description: |-
                ## Purpose
                Once a method is written down, the firm needs consultants who can deliver it to the same standard. A one-day internal certification, with a practice case, a scored assessment and a register of who is approved to lead each step, protects quality as the firm grows.

                ## Milestones
                1. A one-day agenda with a practice case and an assessment.
                2. Assessment criteria written for each step of the method.
                3. The day run with every consultant who will use the method.
                4. A register of who is certified to lead which steps.

                ## Notes
                Start from the **Training program** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A certification day held and a register kept showing which consultants are approved to lead each step of the method."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the agenda and practice case for the certification day"
                - "Set assessment criteria for each step of the method"
                - "Run the certification day with every consultant using the method"
                - "Publish the register of certified consultants and steps"
            - name: First report from the pooled benchmark
              description: |-
                ## Purpose
                When the pooled dataset reaches a size that supports credible figures, a short report shows clients and prospects what the asset is worth. Sending it to contributing clients first rewards the organisations that shared data and encourages more to join.

                ## Milestones
                1. Every planned figure checked against your minimum group size rule.
                2. A short report of key findings with sample sizes shown.
                3. The report sent to contributing clients before wider release.
                4. Requests for individual comparisons logged as sales leads.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A benchmark report released to contributing clients first, every figure meeting the minimum group size, with follow-up requests logged."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Check every planned figure against your minimum group size rule"
                - "Draft the report of key findings with sample sizes"
                - "Send the report to contributing clients before wider release"
                - "Log every request for an individual comparison as a lead"
            - name: Signature offer for a solo consultant
              description: |-
                ## Purpose
                Freelancers selling hours compete on rate, while a freelancer with a named method competes on the method. Turning your strongest repeated approach into a signature offer, with a name, a fixed set of steps and a standard output, makes it easier for clients to buy and for referrers to describe what you do.

                ## Milestones
                1. The repeated approach chosen and named.
                2. Steps, duration and outputs written on one page.
                3. The offer shown on your profile and in your introduction email.
                4. Three conversations held in which you described the offer, with reactions noted.

                ## Notes
                Keep it small enough to deliver alone. A method that needs a team of four is not a solo offer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A named signature offer with steps and outputs on one page, published on your profile and described in three client conversations."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the approach clients thank you for most often"
                - "Write the steps, duration and outputs on one page"
                - "Add the offer to your profile and introduction email"
                - "Review reactions to the offer from recent conversations @recurring(monthly:15)"
            - name: Founder's method book before the first hires
              description: |-
                ## Purpose
                In a firm of one or two, the method lives in the founder's head and shows up as instinct. Writing it down before the first hires join means new consultants learn the firm's way from day one, and it is far harder to write once the founder is busy reviewing everyone else's work.

                ## Milestones
                1. A list of the five or six things the founder does on every engagement.
                2. Each written up as a short chapter with an example.
                3. The book reviewed by a trusted peer outside the firm.
                4. The book ready for the first hire's first week.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A method book of at least five chapters, peer reviewed, ready before the first consultant hire starts."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the five or six things you do on every engagement"
                - "Write one chapter a fortnight with a worked example"
                - "Ask a trusted peer outside the firm to review the draft"
                - "Put the book in the onboarding pack for the first hire"
            - name: IP assignment for staff and contractors
              description: |-
                ## Purpose
                Tools built by employees and contractors do not always belong to the firm automatically, and contractors are the usual gap. Checking that every agreement includes IP assignment and confidentiality wording, with a lawyer's help, means the firm owns what it pays people to build.

                ## Milestones
                1. Every employment and contractor agreement checked for IP assignment and confidentiality wording.
                2. Gaps listed with the person, contract date and tools they contributed to.
                3. Updated wording agreed with a lawyer.
                4. Signed assignments or amendments filed for everyone who contributed to firm tools.

                ## Notes
                Rules on who owns work made by employees and contractors differ by country. A lawyer can tell you what is needed where you operate.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Signed IP assignment and confidentiality wording on file for every employee and contractor who has contributed to firm tools."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather every employment and contractor agreement"
                - "List contributors whose agreements lack IP assignment wording"
                - "Ask your lawyer for updated assignment and confidentiality wording"
                - "Check every new contributor has signed an assignment @recurring(yearly)"
            - name: Associates using your tools under licence
              description: |-
                ## Purpose
                Small firms often deliver with a bench of associates, independent consultants who join for particular engagements. Giving them the toolkit under a written licence, with limits on use outside your engagements and return of materials at the end, adds capacity without giving the method away.

                ## Milestones
                1. A short associate licence covering permitted use, confidentiality and return of materials.
                2. The licence reviewed by a lawyer.
                3. Every current associate signed up before receiving any tools.
                4. Access removed for associates who have not worked with you for a year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every associate with toolkit access has a signed licence, and access has been removed for anyone inactive for twelve months."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draft the associate licence covering use, confidentiality and return"
                - "Have the licence reviewed by your lawyer"
                - "Collect signed licences before sharing any tools"
                - "Review associate access and remove inactive users @recurring(yearly)"
            - name: Separating your know-how from a former firm's IP
              description: |-
                ## Purpose
                Consultants leaving a large firm to start their own often carry templates and frameworks home on a laptop, and that can bring a legal claim just as the new business starts. Sorting your general skill and knowledge from material that belongs to the former firm, and rebuilding from scratch where needed, gives the new firm a clean starting point.

                ## Milestones
                1. Your employment contract and leaving agreement reread for IP and confidentiality terms.
                2. Any former firm files on personal devices returned or removed as the agreement requires.
                3. A list of methods you will rebuild from your own knowledge, without copying.
                4. Dated drafts of rebuilt tools kept as evidence of independent creation.

                ## Notes
                If any doubt remains about a particular tool, ask an employment or IP lawyer before using it with a client.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No former firm files held, the post-employment terms reviewed, and dated drafts of each rebuilt tool kept on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Reread your contract and leaving agreement for IP terms"
                - "Return or remove former firm files as the agreement requires"
                - "List the methods you will rebuild from your own knowledge"
                - "Keep dated drafts of each tool as you rebuild it"
            - name: Co-developing a tool with a client
              description: |-
                ## Purpose
                Some of the best tools come from building alongside a client who has the data and the problem. Agreeing at the start who owns the result, who can use it with whom and how the client is credited avoids a dispute when you later want to use the tool elsewhere.

                ## Milestones
                1. Ownership options set out: firm owns with a client licence, client owns with a firm licence, or joint.
                2. The agreed position written into the statement of work and reviewed by a lawyer.
                3. The client's data and contributions kept separate from the general tool.
                4. Credit or exclusivity terms recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A statement of work clause, reviewed by a lawyer, setting ownership, use rights and credit for a co-developed tool."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set out the three ownership options for the client team"
                - "Agree ownership and use rights before work starts"
                - "Separate client data from the general tool as it is built"
                - "Record any credit or exclusivity terms in the contract"
            - name: Documenting IP for a firm sale or investment
              description: |-
                ## Purpose
                Buyers and investors in a consulting firm pay for client relationships, people and repeatable methods, and the methods are the part that has to be evidenced. A data room section showing each tool, its ownership chain, its usage and the contracts behind it supports the valuation and shortens due diligence.

                ## Milestones
                1. An IP schedule listing each tool with its creator, creation date and owner.
                2. Assignment documents and licences filed against each tool.
                3. Usage and revenue linked to each tool for the last two or three years.
                4. The section reviewed by your corporate lawyer and adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A data room IP section with ownership evidence, licences and usage history for every tool, reviewed by a lawyer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List each tool with creator, creation date and owner"
                - "File assignment documents and licences against each tool"
                - "Link usage and revenue to each tool from the metrics log"
                - "Ask your corporate lawyer to review the IP section"
            - name: Licensing programme for other consultancies
              description: |-
                ## Purpose
                Proven methods can earn fees from firms in other regions or sectors, which turns IP into income that does not depend on your own hours. A licensing programme needs a licence agreement, a certification route, brand rules, a fee model and a way to check quality.

                ## Milestones
                1. Licence terms drafted with a lawyer covering territory, fees, brand use and termination.
                2. A certification route designed for licensee consultants.
                3. Quality checks defined, such as sample review of licensee reports.
                4. A first licensee signed and its consultants certified.

                ## Notes
                Licensing programmes more often fail on quality than on demand. One poor licensee can damage the name everywhere it is used.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed licence with a first licensee whose consultants have completed certification, with quarterly reporting in place."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft licence terms with your lawyer covering territory and fees"
                - "Design the certification route for licensee consultants"
                - "Collect the licensee usage and fee report @recurring(quarterly)"
                - "Review licensee certifications and quality samples @recurring(yearly)"
            - name: Subscription version of the diagnostic
              description: |-
                ## Purpose
                Running the diagnostic as a subscription, where clients reassess every quarter and see their progress against the benchmark, creates recurring revenue and a growing dataset. It also brings software duties around uptime, support, security and data protection, which need planning before the first subscriber.

                ## Milestones
                1. The subscription defined: what is included, how often clients reassess and what support they get.
                2. Security and data protection requirements checked with an adviser.
                3. Five clients on the subscription for at least two cycles.
                4. Monthly figures tracked for active clients, renewals and support load.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Five paying subscribers through two reassessment cycles, with monthly figures on renewals and support load."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Define what the subscription includes and how often clients reassess"
                - "Check security and data protection duties with an adviser"
                - "Review subscriber numbers, renewals and support load @recurring(monthly:5)"
                - "Interview two subscribers after their second cycle"
            - name: AI assistant built on your method library
              description: |-
                ## Purpose
                A private AI assistant that answers questions from your playbooks, templates and anonymised case summaries can help associates apply the method consistently. Doing it safely means keeping client confidential data out, choosing a tool whose terms stop the provider training on your material, and testing answers against the playbook.

                ## Milestones
                1. Source content chosen: playbooks, templates and anonymised summaries only.
                2. A tool chosen whose terms keep your data private and out of model training.
                3. Twenty test questions answered and checked against the playbook.
                4. Usage rules for consultants written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A private assistant answering twenty test questions in line with the playbook, using no client confidential data, with written usage rules."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose which documents the assistant may draw on"
                - "Check each candidate tool's data and training terms"
                - "Ask the agent to draft twenty test questions from the playbook"
                - "Write usage rules for consultants using the assistant"
            - name: Trade secret controls for scoring logic
              description: |-
                ## Purpose
                Scoring weights, benchmark datasets and calculation engines are often protected only by staying secret, and secrecy has to be shown, not assumed. Access limits, confidentiality markings, locked files and a quarterly access review show that you took reasonable steps if a dispute ever arises.

                ## Milestones
                1. The assets treated as trade secrets listed in a risk register.
                2. Access to each limited to named people.
                3. Confidentiality markings and file protection applied.
                4. A quarterly access review held and recorded.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of secret assets with named access, markings applied, and quarterly access reviews recorded."
                cadence: rolling
              tasks:
                - "List the assets you treat as trade secrets in the risk register"
                - "Limit access to each secret asset to named people"
                - "Mark files confidential and lock calculation sheets"
                - "Review who has access to secret assets @recurring(quarterly)"
            - name: Responding to copying of your framework
              description: |-
                ## Purpose
                Successful frameworks get copied, sometimes by former staff and sometimes by competitors who saw a proposal. An evidence file and a calm response plan, agreed with a lawyer before you need it, avoids both overreacting to fair imitation and missing a real infringement.

                ## Milestones
                1. An evidence file with dated versions, registrations and proof of first use for each flagship tool.
                2. A monthly search for your framework names and distinctive phrases.
                3. A response ladder agreed with a lawyer, from a polite note to formal action.
                4. Every suspected copy logged with date, source and action taken.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An evidence file for each flagship tool, monthly searches logged, and a lawyer-agreed response ladder on file."
                cadence: rolling
              tasks:
                - "Build an evidence file of dated versions for each flagship tool"
                - "Search the web for your framework names and phrases @recurring(monthly:17)"
                - "Agree a response ladder with your lawyer"
                - "Log each suspected copy with date, source and action"
            - name: Annual IP value review for the owners
              description: |-
                ## Purpose
                Owners of a small firm rarely know how much of their revenue rests on proprietary tools. Reviewing each year the share of fees from engagements that used firm IP, the hours saved and the work won through it gives a defensible view of what the IP is worth and where to invest next.

                ## Milestones
                1. Fees from engagements using each tool totalled for the year.
                2. Hours saved estimated against the original rebuild baseline.
                3. Proposals won where the method was a stated reason recorded.
                4. A two-page annual IP review shared with partners or the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page annual review showing fees, hours saved and wins linked to each tool, shared with partners."
                cadence: cyclic
              tasks:
                - "Total the year's fees from engagements that used each tool"
                - "Compare hours saved against your original rebuild baseline"
                - "Prepare the annual IP value review @recurring(yearly)"
                - "Present the review to partners with investment recommendations"
---

# Proprietary Frameworks and Tools

This area is for founders of small consulting firms and independent consultants who keep rebuilding the same diagnostic, model or roadmap and want to turn it into something the firm owns. It starts with foundations (an inventory of repeated work, the first method to productise, ownership clauses and data rights, a name that is safe to use), then the routines that keep a tool library alive, the skills of writing diagnostics, playbooks and maturity models, decisions on release, licensing and platforms, dated pilots and releases, situations for solo consultants, founders and firms with associates, and finally specialist work such as licensing programmes, subscriptions and trade secret controls.

What repeats is a Wednesday half hour on the method, a Friday triage of field feedback, monthly harvests, releases, usage entries and benchmark updates on varied days, a quarterly portfolio review and access check, and a yearly protection calendar and value review. The Metrics log, Operational checklist, Purchase decision, Product spec, Training program and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
