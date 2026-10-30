---
id: finance-accounting.fixed-asset-register-depreciation
name: Fixed Asset Register & Depreciation
description: "A fixed asset register that agrees to the ledger, a written capitalisation policy, monthly depreciation, yearly counts and disposals handled properly, from one van to a multi-site estate."
category: business
version: 1.0.0
tags: [finance-accounting, fixed-asset-register-depreciation, small-business, manager, enterprise, depreciation, capitalisation, asset-register]
author: Aurum Technology
starter_structure:
  templates:
    - month-end-close
    - operational-checklist
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Fixed Asset Register & Depreciation
          description: "Keeping a fixed asset register, capitalising purchases correctly, running depreciation and handling disposals for businesses that own equipment, vehicles or property."
          projects:
            - name: Capitalisation policy and threshold
              description: |-
                ## Purpose
                Without a written threshold, one person expenses a new laptop while another capitalises a desk chair, and the register fills with items nobody will ever count. A one-page policy setting the capitalisation threshold, the costs that go into an asset's value and the treatment of grouped purchases gives every coder and approver the same rule. Agree it with your accountant before the next year end so the accounts and the tax computation both start from it.

                ## Milestones
                1. A capitalisation threshold set in your reporting currency and agreed with your accountant or auditor.
                2. The costs that form part of an asset's value listed: purchase price, delivery, installation, non-recoverable taxes and testing.
                3. A rule written for bulk purchases of small items, such as twenty desks bought for one office.
                4. The policy signed and dated by the owner or finance director.
                5. The policy saved where bookkeepers and budget holders can find it.

                ## Notes
                Pick a threshold high enough that the register stays manageable. Local practice and tax rules vary, so ask your accountant what businesses of your size usually use.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed capitalisation policy stating the threshold, the costs included in an asset's value and the bulk purchase rule is saved in the finance folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last twelve months of purchases above a few hundred in value"
                - "Draft the threshold and the list of costs that can be capitalised"
                - "Ask your accountant whether the threshold suits your size and tax rules"
                - "Get the policy signed and dated by the owner or finance director"
                - "Check the threshold still fits the business at each year end @recurring(yearly)"
            - name: Asset classes and useful lives schedule
              description: |-
                ## Purpose
                Depreciation is only as sensible as the useful lives behind it, and a register where identical vans run over three, five and seven years tells the reader nothing. A schedule of asset classes, each with a default useful life and residual value assumption, turns every new addition into a lookup rather than a debate.

                ## Milestones
                1. Six to twelve asset classes defined, such as land, buildings, plant and machinery, vehicles, fixtures and fittings, and computer equipment.
                2. A default useful life and residual value assumption for each class, with the reasoning in one line.
                3. Classes that are not depreciated, such as freehold land, marked clearly.
                4. The schedule agreed with your accountant and attached to the capitalisation policy.

                ## Notes
                Base lives on how long the business actually keeps each kind of asset, not on tax allowance rates. Tax depreciation is a separate calculation.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A schedule listing every asset class with its default useful life and residual value assumption has been agreed with your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every type of asset the business owns today"
                - "Group the types into no more than twelve classes"
                - "Note how long you actually keep each class before replacing it"
                - "Set a default useful life and residual value for each class"
                - "Send the draft schedule to your accountant for comment"
            - name: Depreciation method for each asset class
              description: |-
                ## Purpose
                Straight line suits most office equipment and buildings, reducing balance can better match vehicles that lose value fastest in their early years, and units of production fits a machine whose wear follows its running hours. Choosing the method per class once, and writing down why, keeps the accounts consistent from year to year and gives an auditor a clear answer.

                ## Milestones
                1. Each asset class assigned straight line, reducing balance or units of production.
                2. A one-line reason recorded for any class not on straight line.
                3. A rule fixed for the first month, such as a full month's charge from the month an asset is ready for use.
                4. The methods and the first-month rule written into the useful lives schedule.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every asset class has a recorded depreciation method and a first-month rule, written into the useful lives schedule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which depreciation methods your accounting software supports"
                - "Pick a method for each class and note the reason"
                - "Decide when depreciation starts in the month an asset comes into use"
                - "Add the methods and the start rule to the useful lives schedule"
            - name: Cost and accumulated depreciation accounts by class
              description: |-
                ## Purpose
                When every asset sits in one equipment account, the balance sheet cannot show cost and accumulated depreciation by class and the register can never be reconciled line by line. A cost account, an accumulated depreciation account and a depreciation expense line for each class, plus accounts for disposal gains and losses and assets under construction, give the register something exact to agree to.

                ## Milestones
                1. A cost account and an accumulated depreciation account set up for every asset class.
                2. Depreciation expense accounts mapped to the right lines of the profit and loss.
                3. A disposal gain or loss account and an assets under construction account created.
                4. Old catch-all balances moved into the new accounts with a dated journal.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every asset class has its own cost and accumulated depreciation account, and no balance remains in a catch-all equipment account."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the balance sheet accounts that currently hold fixed assets"
                - "List the cost and accumulated depreciation accounts each class needs"
                - "Create the new accounts with your bookkeeper or accountant"
                - "Post a dated journal moving old balances into the new accounts"
            - name: Register columns and data standard
              description: |-
                ## Purpose
                A register missing serial numbers, locations or in-use dates fails the first time someone tries to count, insure or sell an asset. Fixing the column list before entering a single line means every record says what the asset is, where it is, who answers for it, what it cost and how it is being depreciated.

                ## Milestones
                1. A column list agreed: asset number, description, class, supplier, invoice reference, purchase date, in-use date, cost, useful life, method, residual value, location, custodian, serial number and status.
                2. Mandatory and optional fields marked.
                3. Allowed values for class, location and status written down so entries stay consistent.
                4. A blank register built with those columns and drop-down lists.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A blank register with a fixed column list, mandatory fields marked and drop-down lists for class, location and status is saved as the master copy."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write out the columns the register needs"
                - "Mark which fields must be filled before an asset is added"
                - "Create drop-down lists for class, location and status"
                - "Save the blank register as the master copy in the finance folder"
            - name: First fixed asset register built from the ledger
              description: |-
                ## Purpose
                Many businesses have years of equipment, vehicle and fit-out spend sitting in balance sheet accounts with no list behind it. Rebuilding the register from purchase invoices and ledger postings, asset by asset, is the base for every depreciation charge, insurance schedule and disposal that follows.

                ## Milestones
                1. Every fixed asset ledger posting for the period you can evidence listed with its invoice.
                2. Each item entered as a register line with cost, in-use date, class and useful life.
                3. Accumulated depreciation to date calculated for each line.
                4. Postings that cannot be traced to an invoice listed separately for review.

                ## Notes
                Check every draft line against the invoice yourself, however the first draft was produced. A register built from guesses fails its first count.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The register holds a line for every asset in the fixed asset accounts, with cost, in-use date, class and accumulated depreciation filled in."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the transaction detail for every fixed asset account"
                - "Ask the agent to turn the ledger export into draft register lines"
                - "Match each line to its purchase invoice and correct the details"
                - "Calculate accumulated depreciation to date for every line"
                - "List postings with no invoice for the accountant to review"
            - name: Opening register agreed to the balance sheet
              description: |-
                ## Purpose
                A register that does not total to the balance sheet is a list, not a control. Agreeing cost and accumulated depreciation by class to the ledger at one fixed date, and clearing or journalling every difference, gives a clean opening position that each month's reconciliation can start from.

                ## Milestones
                1. A cut-off date chosen, usually the last year end or a recent month end.
                2. Register totals for cost and accumulated depreciation by class set against the ledger.
                3. Every difference explained and either corrected in the register or journalled with accountant approval.
                4. A signed reconciliation showing a zero difference by class at the cut-off date.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed reconciliation shows register cost and accumulated depreciation agreeing to the ledger for every class at one dated cut-off."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the cut-off date for the opening reconciliation"
                - "Total register cost and accumulated depreciation by class at that date"
                - "List every difference against the ledger with its likely cause"
                - "Agree correcting journals with your accountant before posting"
                - "Sign and file the zero-difference reconciliation"
            - name: Asset numbering and tag labels
              description: |-
                ## Purpose
                If the machine on the workshop floor cannot be matched to a line in the register, a physical count turns into guesswork. A numbering scheme, and durable labels fixed where they survive cleaning and daily use, links every item to its record in seconds.

                ## Milestones
                1. A numbering format chosen, for example a class prefix and a running number.
                2. Labels or tags ordered that suit the setting, such as metal tags for workshop machinery.
                3. Labels fixed to every asset worth tagging, with the number entered in the register.
                4. Assets that cannot take a label, such as buildings or vehicles, linked by address or registration instead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every taggable asset carries a label whose number appears on its register line, and every untaggable asset has an alternative identifier recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a numbering format with a prefix for each asset class"
                - "Order labels that suit offices, vehicles or workshop conditions"
                - "Tag each asset and write its number in the register"
                - "Record registrations or addresses for assets that cannot take a label"
            - name: Asset evidence folder for invoices and titles
              description: |-
                ## Purpose
                Auditors, insurers, tax inspectors and buyers all ask the same thing: prove what this cost and that the business owns it. Keeping the invoice, proof of payment, warranty, finance agreement and any title document under each asset number makes those questions a two-minute search.

                ## Milestones
                1. A folder structure organised by asset number.
                2. Invoice and proof of payment saved for every asset on the register.
                3. Warranties, service contracts and vehicle or property title documents filed with the asset they relate to.
                4. Missing evidence listed and requested from suppliers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every asset on the register has a filed invoice and proof of payment under its asset number, and any gaps are listed with a request sent."
                cadence: rolling
              tasks:
                - "Create a folder for each asset number in the shared drive"
                - "Save the invoice and proof of payment for each existing asset"
                - "Request copies of missing invoices from suppliers"
                - "File the month's new asset invoices and warranties by asset number @recurring(monthly:12)"
            - name: Capital purchase request and coding form
              description: |-
                ## Purpose
                Finance usually learns about a new machine when the invoice arrives, too late to check the class, the location or who will look after it. A short form the buyer completes before ordering anything above the threshold gives finance the register details up front and an expected in-use date to plan depreciation from.

                ## Milestones
                1. A form covering description, supplier, cost, asset class, location, custodian and expected in-use date.
                2. Purchase orders above the threshold requiring a completed form.
                3. Completed forms filed in each asset's evidence folder.
                4. Three months of additions entered from forms rather than invoices alone.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capital purchase request form is in use and every addition in the last three months has a completed form on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the form fields finance needs for a new register line"
                - "Agree with purchasing that orders over the threshold need the form"
                - "Share the form with everyone who orders equipment"
                - "Check that next month's additions all arrived with a form"
            - name: Monthly depreciation run and journal
              description: |-
                ## Purpose
                Depreciation posted once a year leaves eleven months of management accounts overstating profit and turns year end into a shock. Running the charge every month from the register, with one journal per class, keeps the profit and loss honest and the register in step with the ledger.

                ## Milestones
                1. The month's additions and disposals entered in the register before the run.
                2. Depreciation calculated for every live asset by class.
                3. One journal posted per class, referenced to the register report.
                4. The run completed by the third working day for twelve months in a row.

                ## Notes
                Start from the **Month-end close** template. Run depreciation only after the month's additions are capitalised, or new assets miss their first charge.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Depreciation has been posted from the register in each of the last twelve months, every journal referenced to a register report."
                cadence: rolling
              tasks:
                - "Confirm the month's additions and disposals are in the register"
                - "Run the depreciation calculation and post the journal by class @recurring(monthly:3)"
                - "Attach the register depreciation report to the journal"
                - "Explain any month where the charge moves by more than a set amount"
            - name: Monthly register to ledger reconciliation
              description: |-
                ## Purpose
                Small differences between the register and the ledger compound: a disposal posted to the ledger but left live in the register keeps depreciating for years. Reconciling cost and accumulated depreciation by class every month catches each one while the paperwork is still on the desk.

                ## Milestones
                1. A reconciliation sheet showing register and ledger totals by class.
                2. Differences investigated and cleared within the month.
                3. The reconciliation reviewed and signed by someone other than the preparer.
                4. Twelve consecutive monthly reconciliations with no unexplained difference.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly reconciliations, each signed by a reviewer, show no unexplained difference between register and ledger by class."
                cadence: rolling
              tasks:
                - "Build a reconciliation sheet with register and ledger totals by class"
                - "Reconcile register cost and accumulated depreciation to the ledger @recurring(monthly:5)"
                - "Clear any difference before the month is closed"
                - "Pass the signed reconciliation to a reviewer"
            - name: Repairs account sweep for missed capital items
              description: |-
                ## Purpose
                Capital purchases often slip into repairs, office costs or software subscriptions because whoever coded them never saw the policy. A monthly sweep of those expense accounts for anything above the threshold, paired with an equally firm look at whether additions are really repairs, keeps both the register and the profit and loss right.

                ## Milestones
                1. The expense accounts most likely to hide capital items listed.
                2. Lines above the capitalisation threshold reviewed against the policy each month.
                3. Qualifying items reclassified with a journal and added to the register.
                4. Repeat miscoding traced back to its source and corrected.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The repairs, office and software expense accounts are reviewed each month for items over the threshold, with every reclassification journalled and added to the register."
                cadence: rolling
              tasks:
                - "List the expense accounts where capital purchases tend to land"
                - "Filter those accounts for lines above the capitalisation threshold @recurring(monthly:8)"
                - "Reclassify qualifying items and add them to the register"
                - "Tell the person coding purchases about any repeat miscoding"
            - name: Assets under construction tracking
              description: |-
                ## Purpose
                A new production line, warehouse racking or a software build can run for months before it is ready for use, and costs dropped straight into finished assets start depreciating too early. Holding them in an assets under construction account with a project list behind it, and transferring each one on the day it comes into use, gets both the cost and the start date right.

                ## Milestones
                1. An assets under construction account with a supporting list by project.
                2. Each month's costs coded to the right project.
                3. A ready-for-use date and a transfer journal recorded for every finished project.
                4. No project left in construction more than a month after it came into use.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every assets under construction balance is supported by a project list, and each completed project moved to the register within a month of coming into use."
                cadence: rolling
              tasks:
                - "Set up a project list behind the assets under construction account"
                - "Code this month's construction costs to the right project"
                - "Ask project owners whether anything came into use this month @recurring(monthly:20)"
                - "Transfer finished projects to the register with their in-use date"
            - name: Annual physical verification of assets
              description: |-
                ## Purpose
                Over a year, laptops leave with staff, tools go missing from vans and old machines are scrapped without anyone telling finance. Walking every site once a year with the register, checking each asset exists, works and sits where the record says, is the only way to know the balance sheet describes real things.

                ## Milestones
                1. A count plan with sites, counters and dates agreed.
                2. Every register line marked found, moved, damaged or missing.
                3. Assets found that are not on the register listed for adding.
                4. Missing and scrapped assets written off with approval and a journal.
                5. A signed count summary filed with the year-end papers.

                ## Notes
                Start from the **Operational checklist** template. Count high-value and portable assets every year; low-value fixed items can be sampled.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A physical verification covering every site has been completed in the last twelve months, with each register line marked and write-offs approved."
                cadence: cyclic
              tasks:
                - "Export the register by location for the counters"
                - "Run the physical verification across every site @recurring(yearly)"
                - "Mark each line found, moved, damaged or missing"
                - "Get approval to write off missing assets and post the journal"
            - name: Disposal and scrapping procedure
              description: |-
                ## Purpose
                Assets sold, scrapped, traded in or given away often vanish physically but stay in the books, depreciating forever and inflating the balance sheet. A short procedure with a disposal form, an approver and a journal that removes cost and accumulated depreciation and records the gain or loss closes each one properly.

                ## Milestones
                1. A disposal form capturing asset number, date, reason, proceeds and approver.
                2. Approval limits for disposals written down.
                3. Each disposal journal removing cost and accumulated depreciation and posting the gain or loss.
                4. A data-wiping certificate on file for every disposed computer or phone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every disposal in the last year has an approved form, a journal posting the gain or loss and, for IT equipment, a data-wiping certificate."
                cadence: rolling
              tasks:
                - "Draft a one-page disposal form with the fields finance needs"
                - "Agree who can approve disposals at each value"
                - "Ask managers for any assets sold, scrapped or lost this quarter @recurring(quarterly)"
                - "Post each disposal journal and mark the register line disposed"
            - name: Annual useful life and residual value review
              description: |-
                ## Purpose
                Accounting standards generally expect useful lives and residual values to be reviewed at least at each year end, and a business that now keeps its vans for eight years instead of five is still charging them off too fast. A yearly review by class, with any change applied from then on, keeps depreciation tied to how the business really uses its assets.

                ## Milestones
                1. Actual holding periods for disposed assets compared with the lives in the schedule.
                2. Residual values compared with recent sale prices.
                3. Changes agreed with your accountant and recorded with reasons.
                4. Revised estimates applied from the agreed date, without restating past years.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated review memo for the latest year end records each class's useful life and residual value, with any change and its reason."
                cadence: cyclic
              tasks:
                - "Pull the purchase and disposal dates for assets sold in the past year"
                - "Compare actual holding periods with the lives in the schedule"
                - "Review useful lives and residual values by class at year end @recurring(yearly)"
                - "Write a short memo on any change and when it takes effect"
            - name: Asset transfers between sites and cost centres
              description: |-
                ## Purpose
                When a forklift moves from one depot to another, or a team's laptops follow it into a new department, depreciation keeps landing on the old cost centre and the next count looks for the asset in the wrong place. A one-line transfer note and a quarterly sweep with site managers keep locations, custodians and cost centres current.

                ## Milestones
                1. A transfer note capturing asset number, from, to, date and who authorised it.
                2. Register location, custodian and cost centre updated for each transfer.
                3. Depreciation charged to the new cost centre from the month of transfer.
                4. Four quarterly sweeps completed with site or department managers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every asset move in the last year has a transfer note, and the register shows each asset's current location, custodian and cost centre."
                cadence: rolling
              tasks:
                - "Create a one-line transfer note managers can fill in"
                - "Update location, custodian and cost centre for each transfer received"
                - "Ask site managers to confirm any asset moves this quarter @recurring(quarterly)"
            - name: Fully depreciated assets still in use
              description: |-
                ## Purpose
                Nil book value assets that are still working hard suggest the useful lives were too short, while nil value lines for items scrapped years ago suggest disposals are being missed. Reviewing the fully depreciated list each year sorts the two and feeds the useful life review.

                ## Milestones
                1. A report of every asset at nil book value with its original cost.
                2. Each item confirmed as still in use or gone.
                3. Items no longer held removed from cost and accumulated depreciation.
                4. Classes with many working nil value assets flagged for the useful life review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The yearly fully depreciated list has each line marked in use or gone, with departed items removed and classes needing a life review flagged."
                cadence: cyclic
              tasks:
                - "Run a report of every asset at nil book value"
                - "Ask custodians whether each nil value item is still in use @recurring(yearly)"
                - "Remove items no longer held from the register and the ledger"
                - "Flag classes with many working nil value assets for the life review"
            - name: Capital versus revenue expenditure in practice
              description: |-
                ## Purpose
                The hardest daily judgement in this area is whether a cost creates or improves an asset or simply keeps it running. Working through real cases, such as a replacement engine for a van, repainting a warehouse, an extended warranty or a server upgrade, builds the judgement to code them consistently and defend the call.

                ## Milestones
                1. The recognition criteria in your accounting standard read and summarised in five lines.
                2. Ten real invoices from your own ledger classified with reasons.
                3. Borderline cases discussed with your accountant and their view noted.
                4. A short list of house examples added to the capitalisation policy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten real invoices are classified as capital or revenue with reasons, checked by your accountant and added to the policy as worked examples."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the recognition criteria in the standard you report under"
                - "Pick ten borderline invoices from the last year"
                - "Classify each as capital or revenue and write the reason"
                - "Ask your accountant to check the borderline calls"
                - "Add the agreed examples to the capitalisation policy"
            - name: Depreciation methods worked by hand
              description: |-
                ## Purpose
                Software calculates depreciation, but someone still has to spot when it is wrong. Working one asset through straight line, reducing balance and units of production by hand, including a mid-year purchase and a residual value, gives you the feel to check any register report at a glance.

                ## Milestones
                1. One asset worked through five years of straight line with a residual value.
                2. The same asset worked on reducing balance at a chosen rate.
                3. A units of production example built from running hours.
                4. Your hand figures agreed to what your software produces for the same inputs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worksheet shows one asset depreciated by three methods, with the results matched to your software's output."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick one real asset with a known cost and in-use date"
                - "Work five years of straight line depreciation in a spreadsheet"
                - "Repeat the calculation on reducing balance and on running hours"
                - "Enter the same asset in your software and compare the figures"
            - name: Accounting for disposals, part exchanges and trade-ins
              description: |-
                ## Purpose
                Selling a vehicle above its book value, part exchanging an old machine against a new one, or scrapping equipment for nothing each produce a different set of entries. Practising them before the first real case avoids the common mistake of netting the trade-in allowance against the new asset's cost and losing the gain or loss.

                ## Milestones
                1. Journals written out for a sale at a profit, a sale at a loss and a scrapping for nil proceeds.
                2. A part exchange worked through with the new asset at full price and the old asset's allowance as proceeds.
                3. The sales tax treatment of asset sales checked with your accountant.
                4. A worked example sheet saved beside the disposal procedure.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example sheet with journals for a sale, a scrapping and a part exchange has been checked by your accountant."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the journals for selling an asset above and below book value"
                - "Work through a part exchange with the trade-in shown as proceeds"
                - "Ask your accountant how sales tax applies when you sell an asset"
                - "Save the examples beside the disposal procedure"
            - name: Spotting impairment indicators
              description: |-
                ## Purpose
                An asset can be worth far less than its book value long before it is fully depreciated: a machine idled by a lost contract, a fit-out in a branch you plan to close, specialist kit made obsolete by newer technology. Learning the indicators your standard lists helps you raise the question with your accountant at the right time, rather than at audit.

                ## Milestones
                1. The impairment indicators in your accounting standard read and listed in plain words.
                2. Your own assets checked against the list once.
                3. Any asset showing an indicator noted with the reason.
                4. The list taken to your accountant with a request for their view.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page indicator checklist and a list of any assets that meet an indicator have been shared with your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the impairment indicator list in the standard you report under"
                - "Rewrite the indicators as a one-page checklist"
                - "Walk the register and note any asset that matches an indicator"
                - "Send the list to your accountant and ask for their view"
            - name: Reading the property, plant and equipment standard
              description: |-
                ## Purpose
                Most questions about recognition, cost, depreciation and derecognition are answered in one standard, whether that is IAS 16 under IFRS, section 17 of FRS 102 in the UK, ASC 360 under US GAAP or a local equivalent. Reading it once with your own register beside you turns policy arguments into references.

                ## Milestones
                1. The standard that applies to your accounts confirmed with your accountant.
                2. Its sections on recognition, measurement, depreciation and derecognition read.
                3. Five points where your current practice differs or is unclear listed.
                4. Each point resolved or added to the next accountant meeting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of five points comparing your practice with the standard exists, each resolved or on the agenda for your accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm with your accountant which standard your accounts follow"
                - "Read the sections on recognition, cost and depreciation"
                - "Note five places where your practice differs or is unclear"
                - "Take the open points to your next accountant meeting"
            - name: Tax depreciation versus book depreciation
              description: |-
                ## Purpose
                Most tax systems ignore accounting depreciation and give their own allowances or deductions on qualifying assets, at their own rates and timing. Understanding that the register drives the book figures while tax runs on a parallel schedule, and holding the fields your adviser needs, saves a scramble when the return is prepared.

                ## Milestones
                1. How your tax system treats asset purchases explained to you by your accountant or tax adviser.
                2. The extra register fields the adviser needs agreed, such as tax category and qualifying cost.
                3. Those fields filled for every addition in the current year.
                4. Additions and disposals in the register agreed with the adviser's tax schedule at year end.

                ## Notes
                This project organises information. The tax treatment and any claims are your tax adviser's call.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The tax fields your adviser asked for are in the register and filled for every addition in the current year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your tax adviser how asset purchases are treated for tax"
                - "Agree which tax fields they need added to the register"
                - "Fill the tax fields for every addition this year"
                - "Send the year's additions and disposals list to the adviser"
            - name: Software, websites and other intangible assets
              description: |-
                ## Purpose
                Purchased software licences, a custom-built ordering system and a new website raise different questions from a van: is it an asset at all, which costs qualify and over what period. Learning the rules for development costs, subscriptions and configuration work keeps the register from filling with cloud subscription fees that were never assets.

                ## Milestones
                1. The rules for intangible assets in your standard read and summarised.
                2. Two years of software and website spend sorted into licences, subscriptions, development and maintenance.
                3. Items wrongly capitalised or expensed listed for your accountant.
                4. An intangibles class with its own useful life added to the schedule if needed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two years of software and website spend are sorted by type, with misclassified items listed and agreed with your accountant."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pull two years of software and website spend from the ledger"
                - "Sort it into licences, subscriptions, development and maintenance"
                - "Read your standard's rules on development and cloud computing costs"
                - "List items you think are misclassified for the accountant to review"
            - name: Choosing a fixed asset module or software
              description: |-
                ## Purpose
                Spreadsheet registers work for thirty assets and fail at three hundred, when formulas break, disposals are deleted rather than recorded and nobody can show who changed what. Comparing your accounting system's asset module, a dedicated tool and a well-built spreadsheet on the same criteria gives a choice you can stand behind and a clean migration.

                ## Milestones
                1. Criteria agreed: asset count, methods supported, ledger integration, audit trail, multi-site and multiple depreciation books, and cost.
                2. Three options scored against the criteria.
                3. A decision recorded with the reason.
                4. The register migrated, with totals agreed to the old register before it is retired.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on register software exists, and the register has been migrated with totals agreed to the old version before it was retired."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Count your assets and estimate how many you add each year"
                - "Write the criteria the register tool must meet"
                - "Score three options, including your current system's asset module"
                - "Migrate the register and agree totals to the old version"
            - name: Ghost asset and duplicate line clean-up
              description: |-
                ## Purpose
                Ghost assets are register lines for things that no longer exist, and together with duplicates from double-posted invoices they make the balance sheet look stronger than it is. A focused clean-up that removes ghosts, duplicates and repairs wrongly capitalised resets the register to what the business really owns.

                ## Milestones
                1. Lines with no location, no custodian or no count result for two years listed.
                2. Duplicate lines from double-posted invoices identified.
                3. Each candidate confirmed as missing, duplicated or real.
                4. Approved write-offs journalled and a clean-up memo filed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A clean-up memo lists every ghost and duplicate line found, each approved and removed with a journal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Filter the register for lines with no location or custodian"
                - "Search for duplicate invoice numbers and identical costs"
                - "Confirm each candidate with the site or department manager"
                - "Get the write-offs approved and post the journal"
            - name: Spare parts and standby equipment classification
              description: |-
                ## Purpose
                Spare gearboxes kept for a key machine, a standby generator and boxes of replacement parts may belong in the register, in stock or in expenses, depending on how long they last and whether they serve one asset. Deciding the rule once with your accountant stops each storeroom being treated differently.

                ## Milestones
                1. Spares and standby items above the threshold listed by location.
                2. A rule agreed for when spares are fixed assets and when they are stock or expense.
                3. Qualifying items added to the register, with depreciation starting when your standard says.
                4. The rule added to the capitalisation policy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule for classifying spares and standby equipment is agreed with your accountant and applied to every item over the threshold."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List spare parts and standby equipment worth more than the threshold"
                - "Ask your accountant how your standard treats major spares"
                - "Write the agreed rule into the capitalisation policy"
                - "Move qualifying spares onto the register"
            - name: Low-value items pooling decision
              description: |-
                ## Purpose
                Fifty office chairs, a hundred hand tools or a run of shop shelving can each sit under the threshold yet add up to real money. Deciding whether to expense them, pool each batch as one register line or capitalise them individually keeps the register short without hiding material spend.

                ## Milestones
                1. Last year's bulk purchases of low-value items listed with totals.
                2. Three treatments compared: expense, pooled line or individual lines.
                3. A decision recorded with the batch value at which pooling applies.
                4. The decision added to the capitalisation policy with an example.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on low-value bulk purchases, including the batch value that triggers pooling, is written into the capitalisation policy."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List last year's bulk purchases of items each below the threshold"
                - "Compare expensing, pooling and individual lines for each batch"
                - "Record the decision and the batch value that triggers pooling"
                - "Add a worked pooling example to the capitalisation policy"
            - name: Insured values agreed to the register
              description: |-
                ## Purpose
                Insurers usually want replacement values, the register holds cost less depreciation, and the gap between them is where under-insurance hides. Comparing the insurance schedule with the register each year, class by class, shows items still insured that no longer exist and new assets nobody added to the policy.

                ## Milestones
                1. The current insurance schedule set beside the register by class and location.
                2. Assets on the register but missing from the policy listed.
                3. Insured items no longer owned listed for removal.
                4. Changes sent to your broker before renewal.

                ## Notes
                Replacement values come from suppliers, valuers or your broker, not from the register's book values.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A comparison of insurance schedule and register is completed before each renewal, with additions and removals sent to the broker."
                cadence: cyclic
              tasks:
                - "Get the latest insurance schedule from your broker"
                - "Compare insured items with the register by class and location"
                - "List assets to add to and remove from the policy"
                - "Send the changes to your broker a month before renewal @recurring(yearly)"
            - name: Fixed asset accounting policy note
              description: |-
                ## Purpose
                Annual accounts usually carry a short note describing how fixed assets are measured and depreciated, and lenders and investors read it. Writing it from your actual policy and schedule, rather than copying last year's wording, makes sure the note says what the register really does.

                ## Milestones
                1. Last year's policy note compared with the current capitalisation policy and useful lives schedule.
                2. Differences listed and the note redrafted.
                3. The draft reviewed by your accountant or auditor.
                4. The agreed note filed for the next set of accounts.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A redrafted policy note that matches the current capitalisation policy and useful lives schedule has been agreed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the fixed asset policy note in last year's accounts"
                - "Ask the agent to compare the note with your policy and lives schedule"
                - "Redraft the note wherever it differs from practice"
                - "Send the redraft to your accountant for review"
            - name: Year-end fixed asset roll-forward
              description: |-
                ## Purpose
                Year-end accounts and auditors expect a movement schedule for each class: opening cost, additions, disposals, transfers and closing cost, with the same for accumulated depreciation. Building it from the register straight after the final depreciation run, rather than reconstructing it weeks later, makes the fixed asset note and audit testing far quicker.

                ## Milestones
                1. The final month's additions, disposals and depreciation posted.
                2. A roll-forward by class from opening to closing cost and depreciation.
                3. Closing figures agreed to the trial balance.
                4. The schedule sent to your accountant or auditor with supporting lists.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A roll-forward schedule by class for the latest year end agrees to the trial balance and has been sent to the accountant or auditor."
                cadence: cyclic
              tasks:
                - "Block time in the calendar straight after the year-end depreciation run"
                - "Build the roll-forward by class from the register @recurring(yearly)"
                - "Agree closing cost and depreciation to the trial balance"
                - "Send the schedule with the additions and disposals lists"
            - name: Auditor fixed asset request pack
              description: |-
                ## Purpose
                Auditors typically trace a sample of additions to invoices, test disposals, recalculate depreciation and ask to see a few assets in person. Having the pack ready before fieldwork, with evidence indexed by asset number, saves days of back and forth and the extra fees that come with them.

                ## Milestones
                1. Last year's fixed asset queries from the auditor reviewed.
                2. Additions and disposals lists with invoice and proceeds evidence indexed.
                3. Depreciation report and useful lives schedule included.
                4. Physical verification results and write-off approvals in the pack.
                5. Every fixed asset query closed before fieldwork ends.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A fixed asset pack with indexed evidence for additions, disposals, depreciation and the count was handed to the auditors before fieldwork began."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read last year's auditor queries on fixed assets"
                - "Index additions and disposals evidence by asset number"
                - "Add the depreciation report, lives schedule and count summary"
                - "Hand the pack to the audit team before fieldwork starts"
            - name: Office or factory fit-out capitalisation
              description: |-
                ## Purpose
                Fit-outs produce dozens of invoices mixing partitions, wiring, furniture, IT, design fees, removal costs and redecoration, some capital and some not. Splitting them by class as they arrive, and fixing the in-use date on the day the space opens, avoids a year-end tangle and puts each part on the right useful life.

                ## Milestones
                1. A cost code list for the fit-out by asset class and expense.
                2. Every fit-out invoice coded on arrival.
                3. Costs held in assets under construction until the space is in use.
                4. The fit-out transferred to the register by class on the opening date.

                ## Notes
                Improvements to leased premises are usually depreciated over the shorter of their life and the remaining lease term. Confirm with your accountant.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every fit-out invoice is coded by class or expense and the fit-out sits on the register with the opening date as its in-use date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up cost codes for the fit-out by asset class and expense"
                - "Code each fit-out invoice as it arrives"
                - "Hold the costs in assets under construction until the space opens"
                - "Transfer the fit-out to the register by class on opening day"
            - name: Selling a vehicle or major machine
              description: |-
                ## Purpose
                Selling a company vehicle or a large machine touches the register, the ledger, sales tax, any finance agreement still secured on it and the insurance policy. A checklist for the sale, from settling finance to posting the gain or loss, makes sure nothing is left hanging after the buyer drives off.

                ## Milestones
                1. Book value at the sale date calculated from the register.
                2. Any outstanding finance settled and title confirmed clear.
                3. A sales invoice raised with the tax treatment your accountant confirms.
                4. The disposal journal posted with the gain or loss and the register line closed.
                5. The asset removed from the insurance policy.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The sale has a sales invoice, a disposal journal posting the gain or loss, a closed register line and an updated insurance policy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the book value at the planned sale date"
                - "Check whether any finance is still secured on the asset"
                - "Raise the sales invoice with the tax treatment your accountant confirms"
                - "Post the sale journal and close the register line"
                - "Ask your broker to take the asset off the policy"
            - name: Insurance claim for lost or damaged assets
              description: |-
                ## Purpose
                After a theft, fire or flood, finance has to write off what was lost, support the claim with costs and dates, and account for the payout, often in a later period. Working from the register and the evidence folders speeds up the claim and keeps the write-off and the insurance receipt properly separate.

                ## Milestones
                1. Affected assets listed from the register with cost, book value and evidence.
                2. The claim submitted with invoices and photographs.
                3. Write-offs journalled in the period of the loss.
                4. Insurance proceeds recorded when the claim is agreed, and replacements added as new assets.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Lost assets are written off in the period of loss, the claim is supported by register evidence and the payout is recorded separately."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the affected assets from the register with cost and book value"
                - "Pull invoices and photographs from the evidence folders"
                - "Post write-off journals in the period of the loss"
                - "Record the insurance proceeds once the claim is agreed"
            - name: Premises move asset reconciliation
              description: |-
                ## Purpose
                Moving premises is the moment assets get scrapped, lost, left behind or given away, and the moment improvements at the old site stop having any use. Treating the move as a count, before and after, keeps the register accurate and catches the write-offs in the right year.

                ## Milestones
                1. A pre-move list of what is moving, staying, being sold or scrapped.
                2. Remaining improvements at the old site identified for write-off or faster depreciation.
                3. A post-move count at the new site against the register.
                4. Locations updated and disposals journalled.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Pre-move and post-move asset lists are reconciled to the register, with old-site improvements and disposals accounted for."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Mark every register line as moving, staying, sold or scrapped"
                - "List improvements at the old site and ask your accountant about write-off"
                - "Count the assets at the new site against the register"
                - "Update locations and post the disposal journals"
            - name: Simple register for a van, tools and laptops
              description: |-
                ## Purpose
                Owner-run businesses often own a van, a few laptops and some tools, and have only ever handed the accountant a pile of receipts at year end. A one-sheet register kept through the year, with cost, date and a photo of each item, cuts the accountant's time and fee, and means you know exactly what you own if the van is broken into.

                ## Milestones
                1. Every item over the threshold listed with cost, purchase date and serial number.
                2. A photo of each item saved with its receipt.
                3. The sheet updated whenever something is bought, sold or scrapped.
                4. The sheet sent to your accountant with the year-end records.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-sheet register listing every item over the threshold with cost, date, serial number and photo has gone to your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the van, tools and computers the business owns with their costs"
                - "Photograph each item and its serial number"
                - "Save the receipts and photos together in one folder"
                - "Send the sheet to your accountant with the year-end records"
            - name: Moving personal assets into a new company
              description: |-
                ## Purpose
                Sole traders who incorporate usually bring along a vehicle, computers and equipment bought personally, and the company needs a value, a date and paperwork for each. Agreeing the transfer values and how they are paid or credited with an accountant, and recording them properly, gives the company an opening register and avoids tax surprises later.

                ## Milestones
                1. A list of personal assets intended for the company, with original costs and current condition.
                2. Transfer values and settlement method agreed with your accountant.
                3. A dated transfer document or bill of sale for each asset.
                4. The assets entered in the company register at the agreed values.

                ## Notes
                The tax and legal treatment of a transfer varies by country. Take your accountant's advice before signing anything.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every transferred asset has a dated transfer document and a company register line at the value agreed with your accountant."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the personal assets you plan to move into the company"
                - "Ask your accountant how transfer values should be set"
                - "Prepare a dated transfer document for each asset"
                - "Enter the assets in the company register at the agreed values"
            - name: Taking over a neglected asset register
              description: |-
                ## Purpose
                Inheriting a register that has not been reconciled in years means unknown differences, missing disposals and assets nobody can find. A remediation plan that triages the problems, fixes the largest balances first and sets a date for a clean reconciliation is far easier to defend to a finance director or board than a promise to tidy up.

                ## Milestones
                1. The difference between register and ledger measured for each class.
                2. Problems ranked by value and audit risk.
                3. A dated remediation plan with owners agreed with the finance director.
                4. A clean reconciliation achieved by the agreed date.

                ## Notes
                Start from the **Remediation plan** template.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dated remediation plan is agreed, and the register reconciles to the ledger by class on or before the plan's target date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure the register to ledger difference for each class"
                - "Rank the problems by value and audit risk"
                - "Write the remediation plan with owners and dates"
                - "Report progress on the plan to the finance director @recurring(monthly:25)"
            - name: Multi-site register with site custodians
              description: |-
                ## Purpose
                In a group with depots, branches or plants in several places, finance cannot see every asset, so each site needs a named custodian who answers for what is there. Giving custodians a site extract, a quarterly confirmation and a simple way to report moves and disposals spreads the work without losing the control.

                ## Milestones
                1. A named custodian for every site.
                2. Site extracts of the register shared with each custodian.
                3. A quarterly confirmation from every custodian of additions, moves and disposals.
                4. Late or missing confirmations escalated to site leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every site has a named custodian, and four quarterly confirmations have been received from each in the past year."
                cadence: rolling
              tasks:
                - "Name a custodian for every site"
                - "Send each custodian their site's extract of the register"
                - "Collect quarterly confirmations of additions, moves and disposals @recurring(quarterly)"
                - "Escalate missing confirmations to the site's leadership"
            - name: Acquired business assets onto the register
              description: |-
                ## Purpose
                When a business is bought, its assets usually come onto the group's books at fair value at the acquisition date rather than at the seller's book values, and their remaining lives need reassessing. Building the acquired register carefully, with your accountants and any valuer, keeps depreciation right from day one and gives the audit a clear trail.

                ## Milestones
                1. The acquired company's register and ledger obtained at the completion date.
                2. Fair values for material assets provided by a valuer or the deal accountants.
                3. Remaining useful lives set under your own policy.
                4. Acquired assets loaded with new asset numbers and agreed to the acquisition balance sheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Acquired assets are on the register at the fair values agreed for the acquisition balance sheet, with remaining lives set under your policy."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Request the acquired company's register and ledger at completion"
                - "Ask the deal accountants for the fair values of material assets"
                - "Set remaining useful lives under your own policy"
                - "Load the assets and agree totals to the acquisition balance sheet"
            - name: Grant-funded equipment records
              description: |-
                ## Purpose
                Equipment bought with a government or development grant often comes with conditions: keep it for a set number of years, use it for the funded purpose, or repay part of the grant on early sale. Recording those conditions on the register line, and the grant accounting your accountant recommends, prevents an accidental breach when the asset is later sold or moved.

                ## Milestones
                1. Grant-funded assets flagged on the register with the grant reference.
                2. Retention period, use restrictions and repayment terms recorded for each.
                3. The accounting treatment of the grant agreed with your accountant.
                4. A grant check added to the disposal procedure for flagged assets.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every grant-funded asset is flagged with its conditions, and the disposal procedure requires a grant check before sale."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the grant agreements that funded any equipment"
                - "Flag each funded asset on the register with the grant reference"
                - "Record retention periods and repayment terms on each line"
                - "Add a grant condition check to the disposal procedure"
                - "Review grant retention dates against planned disposals @recurring(yearly)"
            - name: Laptops and equipment issued to remote staff
              description: |-
                ## Purpose
                Home-working staff keep laptops, monitors and phones in dozens of houses, and the kit leaves the business quietly when people do. Recording who holds what, collecting a yearly confirmation and tying returns to the leaver process keeps these portable assets on the books and in the business.

                ## Milestones
                1. Every remote-issued item on the register with the employee as custodian.
                2. A signed equipment acknowledgement for each employee.
                3. Returns built into the leaver checklist, with finance notified.
                4. A yearly confirmation from every remote employee of what they hold.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every remote employee has confirmed their equipment in the last year, and every leaver's kit was returned or written off with approval."
                cadence: rolling
              tasks:
                - "Export the list of equipment issued to remote staff"
                - "Set each employee as custodian on their register lines"
                - "Add equipment returns to the leaver checklist with HR"
                - "Ask every remote employee to confirm the equipment they hold @recurring(yearly)"
            - name: Annual impairment review with a written memo
              description: |-
                ## Purpose
                Where indicators exist, the standards expect the asset or group of assets to be tested by comparing book value with its recoverable amount. A written memo each year end, stating the indicators considered, the conclusions and any test performed with your accountant, is what an auditor will ask to see.

                ## Milestones
                1. Indicators assessed for every class and site at year end.
                2. Assets with indicators grouped into the units your standard requires for testing.
                3. Recoverable amounts estimated with your accountant for any group tested.
                4. Any impairment journalled and the memo signed.

                ## Notes
                Recoverable amount estimates rest on forecasts and discount rates. Agree the assumptions with your accountant or auditor before posting anything.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed year-end memo records the indicators assessed, the groups tested and any impairment posted."
                cadence: cyclic
              tasks:
                - "Run the indicator checklist across every class and site @recurring(yearly)"
                - "Group any affected assets with your accountant"
                - "Agree the recoverable amount estimates and their assumptions"
                - "Sign the memo and post any impairment journal"
            - name: Revaluation of land and buildings
              description: |-
                ## Purpose
                Some businesses carry land and buildings at revalued amounts rather than cost, which shows a truer balance sheet but commits them to regular valuations and extra accounting. Deciding whether to adopt the model, appointing a qualified valuer and keeping the revaluation reserve and revised depreciation straight is specialist work worth planning.

                ## Milestones
                1. The cost and revaluation models compared with your accountant.
                2. A qualified valuer appointed with a clear brief.
                3. Revaluation entries and the revised depreciation base calculated.
                4. A cycle for future valuations agreed and recorded.

                ## Notes
                Under most frameworks, once the revaluation model is chosen it applies to the whole class, and valuations must be kept current.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the revaluation model exists and, if adopted, a valuer's report with the entries and revised depreciation posted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Discuss the cost and revaluation models with your accountant"
                - "Brief a qualified valuer on the properties and the valuation basis"
                - "Calculate the revaluation entries and the new depreciation base"
                - "Ask the valuer for a desktop update between full valuations @recurring(yearly)"
            - name: Componentising a building or major plant
              description: |-
                ## Purpose
                Roofs, lifts, heating and structure wear out at very different speeds, and a single fifty-year life understates depreciation on the parts replaced every fifteen. Splitting significant assets into components, each with its own life, gives a truer charge and makes replacements far simpler to account for.

                ## Milestones
                1. Assets large enough to componentise identified.
                2. Significant components and their share of cost agreed, using surveyor or supplier information.
                3. Each component set up with its own useful life.
                4. The treatment for replacing a component written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each significant building or plant asset is split into components on the register, with a life per component and the cost split documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List buildings and plant large enough to split into components"
                - "Get cost breakdowns from surveyor reports or supplier quotes"
                - "Set up each component as a register line with its own life"
                - "Write down how a replaced component will be removed and added"
            - name: Capitalising own labour on self-built assets
              description: |-
                ## Purpose
                Businesses that build their own machinery, install their own systems or construct their own premises can usually capitalise the directly attributable staff time and materials, but not general overheads or wasted effort. Setting up time codes and rules before the project starts is far easier than reconstructing hours for an auditor afterwards.

                ## Milestones
                1. Rules for which labour and costs are directly attributable written down.
                2. Project time codes set up in the timesheet or payroll system.
                3. Capitalised labour calculated monthly from timesheets and journalled to assets under construction.
                4. Abnormal costs and idle time excluded and documented.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Capitalised labour on each self-built asset is supported by timesheet records and a written rule on what is directly attributable."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the rule for which staff time can be capitalised"
                - "Set up project time codes in the timesheet system"
                - "Calculate capitalised labour from timesheets and post the journal"
                - "Exclude idle time and rework and note why"
            - name: Dismantling and site restoration costs
              description: |-
                ## Purpose
                Some assets come with an obligation to remove them and restore the site at the end, such as a mast on rented land, underground fuel tanks or leased premises that must be handed back stripped. The estimated cost can belong in the asset's value with a matching provision, and missing it understates both.

                ## Milestones
                1. Leases and contracts checked for removal or restoration obligations.
                2. Obligations listed with an estimated cost and timing from a contractor or surveyor.
                3. The accounting treatment agreed with your accountant.
                4. Estimates reviewed and updated at each year end.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every asset with a removal or restoration obligation is listed with an estimated cost, and the treatment is agreed with your accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Search leases and contracts for removal or restoration clauses"
                - "Get cost estimates from a contractor or surveyor"
                - "Agree the accounting treatment with your accountant"
                - "Update the restoration estimates at year end @recurring(yearly)"
---

# Fixed Asset Register & Depreciation

This area is for anyone who owns or looks after the equipment, vehicles, fit-outs and property on a business balance sheet, from the owner with one van to the finance team running a register across several sites. It starts with the foundations (a capitalisation policy, asset classes and useful lives, the ledger accounts and a register agreed to the balance sheet), then the monthly and yearly routines, the technical skills behind capital and revenue calls, the decisions that tidy the register, the events that test it, the situations particular to small firms, managers and larger groups, and finally impairment, revaluation and other specialist work.

What repeats is the monthly depreciation run, the register to ledger reconciliation and the sweep for missed capital items, quarterly checks on disposals, transfers and site confirmations, and a yearly physical verification, useful life review, insurance comparison and year-end roll-forward. The Month-end close, Operational checklist, Purchase decision and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
