---
id: finance-accounting.corporate-income-tax-returns
name: Corporate Income Tax Returns
description: "A corporate tax calendar and computation file, quarterly liability estimates and instalments, allowances, losses and elections tracked, and a calm yearly filing week with director approval and payment on time."
category: business
version: 1.0.0
tags: [finance-accounting, corporate-income-tax-returns, small-business, founder, enterprise, corporate-tax, tax-computation, instalments]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - operational-checklist
    - purchase-decision
    - meeting-notes
    - risk-register
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Corporate Income Tax Returns
          description: "Preparing and filing company income tax returns, computing adjustments and allowances, and paying instalments on time for limited companies and corporations."
          projects:
            - name: Corporate tax obligations map for the company
              description: |-
                ## Purpose
                Before anyone can prepare a return, someone has to know exactly what the company owes and when: which tax authority it is registered with, its accounting period, the return form, the filing deadline and whether it must pay in instalments. Many owners discover a missed obligation only when a penalty letter arrives. A one-page map, checked against the tax authority's own guidance, turns that unknown into a short list.

                ## Milestones
                1. The company's tax reference, registration date and responsible tax office written down.
                2. The accounting period and the tax period it maps to confirmed.
                3. The return form, filing deadline and payment deadline recorded from official guidance.
                4. Whether instalment or estimated payments apply confirmed with your accountant or the tax authority.
                5. Any other corporate income tax filings, such as state, provincial or local returns, listed.

                ## Notes
                The return goes by different names, for example a CT600 in the UK, Form 1120 in the US or a T2 in Canada. Use your own tax authority's guidance as the source, not a forum post or last year's habit.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page obligations map lists the tax reference, accounting period, return form, filing and payment deadlines and instalment status, checked against official guidance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the company's corporate tax reference on a past letter or return"
                - "Look up the return form and filing deadline on the tax authority's website"
                - "Confirm whether the company must pay tax in instalments"
                - "List any regional or local corporate tax returns the company also files"
            - name: Tax authority online account and agent authorisation
              description: |-
                ## Purpose
                Most tax authorities now expect company returns to be filed and tax paid online, and notices increasingly arrive only in the online account. Setting up the company's account, recording who holds the login and formally authorising your accountant as agent means nothing sits unread and your adviser can see what the tax authority sees.

                ## Milestones
                1. The company's online tax account active, with at least two named people able to access it.
                2. Login and recovery details stored in the company password manager, not a personal inbox.
                3. Your accountant or tax agent authorised through the tax authority's official process.
                4. Notification settings checked so new notices reach an address more than one person reads.

                ## Notes
                Never share a director's personal login with an adviser. Agent authorisation exists so access can be granted and withdrawn cleanly when advisers change.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The company online tax account is accessible to two named people and the agent authorisation is confirmed in writing by the tax authority or the adviser."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether the company already has an online tax account and who set it up"
                - "Store the account login and recovery details in the company password manager"
                - "Start the agent authorisation for your accountant through the official route"
                - "Set notices to go to an inbox that more than one person reads"
            - name: Corporate tax deadlines calendar
              description: |-
                ## Purpose
                Corporate tax deadlines rarely fall on the same day as the accounts deadline, and in many countries payment is due months before the return. Putting every filing, payment and instalment date into a shared calendar, each with a reminder well ahead and a named owner, means deadlines are planned for rather than discovered.

                ## Milestones
                1. Every filing, balancing payment and instalment date for the next two years in a shared calendar.
                2. A reminder set four weeks before each date, assigned to a named person.
                3. Your accountant's own cut-off date for receiving the year-end records added.
                4. The calendar checked against the obligations map and the online tax account.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar holds every corporate tax filing and payment date for two years, each with a named owner and a four-week reminder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the filing and payment dates from the obligations map into a shared calendar"
                - "Add a four-week reminder and a named owner to each date"
                - "Ask your accountant for the date they need your year-end records by"
                - "Roll the tax calendar forward a year and recheck every date @recurring(yearly)"
            - name: Prior three years of returns and computations gathered
              description: |-
                ## Purpose
                Last year's computation is the best starting point for this year's, and tax authorities can usually reopen several past years. Collecting the last three filed returns, their computations, assessments and any correspondence into one place shows what was claimed, what was carried forward and what the company has already told the tax authority.

                ## Milestones
                1. Filed returns for the last three periods saved, each with its submission receipt.
                2. The tax computations and supporting schedules behind each return saved alongside.
                3. Assessments, refunds and tax authority letters for those years filed by period.
                4. Gaps listed and requested from the previous accountant or the online account.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds the last three filed returns with computations, submission receipts and assessments, and every missing item has been requested."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the last three filed returns from the online tax account"
                - "Ask your accountant for the computations and working papers behind each return"
                - "File assessments and tax authority letters by period"
                - "Write down anything missing and who is likely to hold it"
            - name: Permanent tax file for the company
              description: |-
                ## Purpose
                Some tax facts barely change from year to year: who owns the company, how the group is structured, which elections it has made, any rulings or agreements with the tax authority and the basis of past positions. Keeping them in one permanent file saves your adviser rediscovering them every year and protects the company when the person who knew them leaves.

                ## Milestones
                1. Incorporation documents, share register and a group structure chart in the file.
                2. Every ruling, clearance or agreement with the tax authority listed with its date.
                3. Significant past tax positions summarised in a sentence each, with the adviser who agreed them.
                4. A named owner who updates the file whenever ownership or structure changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A permanent tax file holds ownership, structure, rulings and past positions, and has been reviewed within the last twelve months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a permanent tax file folder separate from the yearly return folders"
                - "Add the share register and a simple group structure chart"
                - "Add rulings, clearances and agreements with the tax authority, with references"
                - "Review the permanent tax file once each return is filed @recurring(yearly)"
            - name: Ledger account to tax treatment mapping
              description: |-
                ## Purpose
                Most adjustments in a tax computation come from the same few ledger accounts every year: entertaining, fines, donations, depreciation, provisions and capital items. Tagging each account in the trial balance with its usual tax treatment makes the computation faster and keeps the adjustments consistent from one year to the next.

                ## Milestones
                1. Every profit and loss account in the trial balance tagged as deductible, disallowed, capital or timing difference.
                2. Accounts that mix deductible and non-deductible items flagged for separate coding.
                3. The mapping reviewed and agreed with your accountant or tax adviser.
                4. The mapping used to prepare one full year's computation.

                ## Notes
                Tax treatment depends on your country's rules and on the facts. The mapping records what your adviser has agreed; it does not decide it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mapping of every profit and loss account to its tax treatment exists, agreed with an adviser and used for at least one computation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the trial balance with every profit and loss account"
                - "Tag each account with its usual tax treatment"
                - "Flag the accounts that mix deductible and non-deductible items"
                - "Send the mapping to your adviser for comment"
            - name: Tax records retention rules and evidence standard
              description: |-
                ## Purpose
                Tax authorities can ask for the records behind a return for several years after it is filed, and the required period differs by country and by whether a year is still open. Writing down how long the company keeps what, in which system, and what evidence each adjustment needs means a question years from now can be answered from the archive.

                ## Milestones
                1. The official retention period for company tax records confirmed from tax authority guidance.
                2. A list of record types, where each is kept and for how long.
                3. An evidence standard stating which supporting document each kind of adjustment needs.
                4. Closed years' tax records archived in a read-only location.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retention schedule and evidence standard exist, and every filed year's tax records sit in a read-only archive."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the official retention period for company tax records"
                - "List each record type, its system and how long it is kept"
                - "Write what evidence each type of tax adjustment needs"
                - "Move closed years' tax records into a read-only archive"
            - name: Return preparation route decision
              description: |-
                ## Purpose
                A small company can prepare its own return with filing software, pay an accountant to prepare it, or do the groundwork in-house and have an adviser review and file. The right answer depends on the complexity of the computation, the cost of an error and how much time the owners really have. Deciding deliberately, with the costs written down, beats renewing last year's arrangement by default.

                ## Milestones
                1. The company's tax complexity summarised: losses, capital items, related companies, foreign income, elections.
                2. Three routes costed: in-house with software, adviser review, full preparation by an adviser.
                3. A route chosen with the reasons recorded.
                4. Responsibilities for the chosen route written down: who prepares, who reviews, who files.

                ## Notes
                If you choose an adviser, agree the scope for the return in writing, including which records you supply and by what date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how the corporate return is prepared, with the cost of three routes and a named preparer, reviewer and filer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what makes this company's return complex or simple"
                - "Get one quote for adviser review and one for full preparation"
                - "Estimate the hours an in-house preparation would take"
                - "Record the chosen route and who prepares, reviews and files"
            - name: Accounting profit to taxable profit bridge
              description: |-
                ## Purpose
                Taxable profit is rarely the profit in the accounts: some costs are never deductible, depreciation is swapped for tax allowances, and some income or provisions fall into a different year. Learning the shape of that bridge, using your own company's last computation, shortens every conversation with your adviser and lets you spot a missing adjustment before filing.

                ## Milestones
                1. The main adjustment categories understood: disallowed costs, capital items, allowances, timing differences and losses.
                2. Last year's computation traced from accounting profit to taxable profit line by line.
                3. Each adjustment explained in your own words in a one-page note.
                4. Questions you could not answer taken to your adviser and the answers recorded.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains every line between accounting profit and taxable profit in last year's computation, with open questions answered by the adviser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your adviser for last year's full tax computation"
                - "Trace each adjustment back to the ledger account it came from"
                - "Write a one-line explanation beside every adjustment"
                - "Take the lines you cannot explain to your adviser"
            - name: Quarterly corporate tax liability estimate
              description: |-
                ## Purpose
                A tax bill that appears at year end is a cash problem; one estimated every quarter is just a planned payment. Running year-to-date profit through the agreed tax mapping each quarter gives a working estimate of the year's liability, feeds instalment decisions and lets the directors see the tax line coming.

                ## Milestones
                1. A simple estimate sheet built on the tax mapping and the latest management accounts.
                2. Each quarter's estimate saved with the profit figure and assumptions used.
                3. Estimates compared with instalments paid and the cash reserve held.
                4. The year's last estimate compared with the filed liability and the gap explained.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly tax estimates are saved in a year, each compared with instalments paid, and the last one reconciled to the filed liability."
                cadence: rolling
              tasks:
                - "Build an estimate sheet from the tax mapping and year-to-date profit"
                - "Update the year's tax estimate from the latest management accounts @recurring(quarterly)"
                - "Send each quarter's estimate to whoever manages cash and instalments"
                - "Compare the final estimate with the filed liability and note the gap"
            - name: Instalment and estimated tax payment routine
              description: |-
                ## Purpose
                Larger companies in many countries, and most companies in some, must pay corporate tax in instalments during the year, with interest or penalties if they underpay. A routine that confirms each instalment from the latest estimate, pays it through the official channel and keeps the receipt makes sure instalments are neither missed nor badly wrong.

                ## Milestones
                1. The instalment rules that apply to the company, and their dates, confirmed with your adviser.
                2. Each instalment calculated from the latest estimate and approved before payment.
                3. Payments made through the tax authority's official channel with the correct reference.
                4. Every payment receipt saved and matched to the online tax account.

                ## Notes
                Check payment details on the tax authority's own website each time, never from an email or text message. Fake tax payment requests are a common scam.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every instalment for a full year is paid on or before its due date with the correct reference, each with a saved receipt matched to the tax account."
                cadence: rolling
              tasks:
                - "Confirm with your adviser which instalment rules apply and on what dates"
                - "Approve the next instalment amount against the latest estimate @recurring(quarterly)"
                - "Check the payment reference format on the tax authority's website"
                - "Save each instalment receipt in the year's tax folder"
            - name: Monthly non-deductible expense coding review
              description: |-
                ## Purpose
                Client entertaining, fines, political donations, some gifts and private costs are often not deductible, yet they hide inside general expense accounts and get untangled at year end from memory. A short monthly review that recodes them into their own accounts while the receipts are fresh turns the year-end adjustment into a total rather than a hunt.

                ## Milestones
                1. Separate ledger accounts in place for the costs your adviser treats as non-deductible.
                2. A monthly review of general expense accounts for items that belong in them.
                3. Recoded items carrying a short note of what they were.
                4. A year end where the computation finds no non-deductible items left in general accounts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reviews are completed in a year, and the year-end computation finds no non-deductible items still sitting in general accounts."
                cadence: rolling
              tasks:
                - "Ask your adviser which cost types the company should treat as non-deductible"
                - "Create a ledger account for each of those cost types"
                - "Scan general expense accounts and recode non-deductible items @recurring(monthly:12)"
            - name: Fixed asset additions tax classification review
              description: |-
                ## Purpose
                Whether a purchase is a capital asset, which allowance pool it falls into, or whether it is a repair the company can deduct straight away changes the tax bill, and the answer depends on what the invoice actually describes. Reviewing additions each quarter, while invoices and project notes are easy to find, gives the computation a clean list of qualifying spending.

                ## Milestones
                1. A list of additions each quarter with invoice, description, cost and date brought into use.
                2. Each addition tagged with its likely tax category, agreed with your adviser where unclear.
                3. Repairs wrongly capitalised, or capital items wrongly expensed, flagged.
                4. A year-end schedule of qualifying expenditure ready for the computation.

                ## Notes
                This is the tax view of assets. The accounting register and the depreciation run stay with the finance team's asset records; this project only borrows their list of additions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A year-end schedule of qualifying capital expenditure, built from four quarterly reviews, is handed to the preparer with invoices attached."
                cadence: rolling
              tasks:
                - "Export the quarter's fixed asset additions with links to the invoices"
                - "Tag each new addition with its likely tax category @recurring(quarterly)"
                - "List the additions where the treatment is unclear for your adviser"
                - "Check repairs accounts for large items that may be capital"
            - name: Tax notices and correspondence log
              description: |-
                ## Purpose
                Tax authority letters often carry their own short deadlines, and a notice sitting in a director's personal post or an unread online inbox can become a penalty or an estimated assessment. A weekly check of every channel the tax authority uses, with each item logged and given an owner, means nothing waits more than a few days.

                ## Milestones
                1. Every channel listed: online account inbox, registered post address, adviser forwarding.
                2. A log with date received, reference, what it asks, deadline and owner.
                3. Each item acknowledged or answered before its deadline.
                4. Three months of weekly checks with no missed deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A correspondence log in which every tax notice for twelve months has a recorded owner and was dealt with before its deadline."
                cadence: rolling
              tasks:
                - "List every place tax authority mail can arrive for the company"
                - "Create a log with date, reference, request, deadline and owner columns"
                - "Check the online tax inbox and post for new notices @recurring(weekly:mon)"
                - "Forward each new notice to your adviser on the day it is logged"
            - name: Tax authority account statement reconciliation
              description: |-
                ## Purpose
                The tax authority keeps its own ledger for the company, and it does not always agree with yours: payments land on the wrong period, interest is added, or a refund is set against another tax. Reconciling its statement to the corporate tax balance in your books each month catches misallocated payments while they are still easy to fix.

                ## Milestones
                1. The tax authority statement downloaded and saved each month.
                2. Each charge, payment, interest item and refund matched to the corporate tax balance in the ledger.
                3. Misallocated payments raised with the tax authority or your adviser.
                4. A reconciled balance agreed at the year end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tax authority's statement and the ledger's corporate tax balance agree at each month end, or every difference is listed with an action."
                cadence: rolling
              tasks:
                - "Download the company's statement from the online tax account"
                - "Match the tax authority statement to the ledger tax balance @recurring(monthly:18)"
                - "Raise any misallocated payment with your adviser the same week"
            - name: Year-end tax workpaper binder
              description: |-
                ## Purpose
                Every return rests on a set of schedules: the trial balance, the computation, the allowances workings, loss memos and the evidence behind each adjustment. Building the same indexed binder every year, in the same order, makes review faster, makes next year easier and gives a ready answer if the tax authority asks how a figure was reached.

                ## Milestones
                1. A standard index: trial balance, computation, allowances, losses, adjustments, payments, approvals.
                2. Every schedule tied to the final accounts and the filed return.
                3. Evidence attached for each adjustment above your agreed size threshold.
                4. The binder locked as read-only once the return is filed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A complete indexed workpaper binder for the year is tied to the filed return and locked read-only within a month of filing."
                cadence: cyclic
              tasks:
                - "Write the standard binder index and save it as a template folder"
                - "Create this year's binder from the template folder @recurring(yearly)"
                - "Tie each schedule to the final accounts before review"
                - "Lock the binder as read-only once the return is filed"
            - name: Return timetable counted back from the filing deadline
              description: |-
                ## Purpose
                Returns go wrong when the accounts finish late, the adviser gets the records in the final fortnight and nobody has time to review. Working backwards from the filing deadline to set dates for final accounts, records to the adviser, draft computation, review and approval puts the slack where it is needed.

                ## Milestones
                1. Backward dates set for final accounts, records handover, draft computation, review, approval and filing.
                2. Every date agreed with the adviser and the directors who approve.
                3. Progress checked against the timetable each month in the run-up.
                4. The return filed at least two weeks before the deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated return timetable is agreed with the adviser and directors, and the return is filed at least two weeks before the statutory deadline."
                cadence: cyclic
              tasks:
                - "Write the steps from final accounts to submission in order"
                - "Set this year's return dates backwards from the filing deadline @recurring(yearly)"
                - "Share the timetable with your adviser and the approving directors"
                - "Check progress against the timetable at each monthly finance meeting"
            - name: Tax losses and carried-forward amounts register
              description: |-
                ## Purpose
                Trading losses, unused allowances, excess interest, capital losses and tax credits carried forward are valuable, but only if someone can prove their amount and origin when they are used. A register recording each amount, the year it arose, any expiry and how much has been used keeps them claimable for as long as the rules allow.

                ## Milestones
                1. Every carried-forward amount listed by type and year of origin.
                2. Expiry dates or use restrictions noted where the rules impose them.
                3. Each year's usage recorded and tied to the return that used it.
                4. The register agreed with the figures in the latest filed return.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register shows every carried-forward tax amount by year of origin and agrees with the latest filed return."
                cadence: rolling
              tasks:
                - "List every carried-forward amount shown in the last three returns"
                - "Record the year each amount arose and any expiry or restriction"
                - "Update the register with amounts used or added from the filed return @recurring(yearly)"
            - name: Tax rule change watch for the company
              description: |-
                ## Purpose
                Corporate tax rates, allowance rules and filing requirements change with each budget or finance law, often from a date in the middle of your financial year. A quarterly look at official announcements, filtered to what touches your company, means changes reach the estimate and the instalments before they surprise anyone.

                ## Milestones
                1. Two or three official or professional sources chosen for corporate tax updates.
                2. A quarterly note of changes that might affect the company.
                3. Each relevant change confirmed with your adviser and its effective date recorded.
                4. The tax estimate and deadlines calendar updated for confirmed changes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly change notes are written in a year, and each relevant change is confirmed with the adviser and reflected in the tax estimate."
                cadence: rolling
              tasks:
                - "Subscribe to the tax authority's updates and one adviser newsletter"
                - "Ask the agent to summarise the quarter's corporate tax announcements @recurring(quarterly)"
                - "Ask your adviser to confirm the effect of each relevant change"
            - name: Capital allowances and tax depreciation basics
              description: |-
                ## Purpose
                Most tax systems ignore the depreciation in your accounts and give their own allowances instead, with different pools, rates, first-year reliefs and rules on disposal. Understanding how your country's system works, at the level of which pools exist and what happens when an asset is sold, helps you buy, record and dispose of assets with the tax effect in view.

                ## Milestones
                1. The main allowance categories in your country listed from official guidance.
                2. The company's last allowances schedule read and each pool understood.
                3. What happens on the sale or scrapping of an asset written in a short note.
                4. Three questions about planned purchases answered by your adviser.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note covers the allowance categories, the company's own pools and the disposal rules, with three purchase questions answered by the adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the tax authority's guidance on allowances for business assets"
                - "Go through the company's last allowances schedule pool by pool"
                - "Write down what happens to allowances when an asset is sold"
                - "List three planned purchases and ask your adviser how each is treated"
            - name: Reading a notice of assessment line by line
              description: |-
                ## Purpose
                After a return is filed, many tax authorities issue an assessment or statement that confirms, corrects or adds to the figures. It can differ from the return because of a processing change, a penalty or a payment applied elsewhere, and the window to object is often short. Knowing how to read one means differences are spotted the week it arrives.

                ## Milestones
                1. Each section of the company's latest assessment explained on an annotated copy.
                2. Differences from the filed return identified and listed.
                3. The deadline to object or request a correction recorded.
                4. Any difference raised with your adviser and the outcome noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An annotated copy of the latest assessment exists, with every difference from the filed return listed and the objection deadline recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the latest assessment or statement from the online account"
                - "Annotate each line of the assessment with what it means"
                - "Compare the assessed figures with the filed return"
                - "Note the objection deadline and raise any difference with your adviser"
            - name: Current and deferred tax in the company accounts
              description: |-
                ## Purpose
                Founders and managers often see two tax lines in the accounts and cannot say why the charge differs from the cash paid. Current tax is this year's bill; deferred tax reflects differences that reverse in later years, such as allowances claimed faster than depreciation. Understanding the difference makes the tax line in board packs and investor questions easy to explain.

                ## Milestones
                1. Current tax and deferred tax explained in two plain sentences.
                2. The tax note in the last accounts read and its rate reconciliation understood.
                3. The main temporary differences for the company listed.
                4. A short explanation ready for the board of why the tax charge differs from tax paid.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page explanation of the company's current and deferred tax, using its own figures, has been checked by the adviser or finance lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the tax note in the company's last annual accounts"
                - "Work through the reconciliation from profit to the tax charge"
                - "List the main differences that create deferred tax"
                - "Write a half-page explanation for the board and get it checked"
            - name: Late filing and late payment penalty rules
              description: |-
                ## Purpose
                Penalties for late corporate returns often step up the longer the delay, interest runs on late tax from the due date, and repeated failures can bring higher charges or closer attention. Knowing your own country's rules turns deadlines from vague dates into known costs and helps decide what comes first in a crowded month.

                ## Milestones
                1. The late filing penalty steps for your country's corporate return noted from official guidance.
                2. How interest on late or underpaid tax is charged written down.
                3. Any penalty or interest the company paid in the last three years listed with its cause.
                4. The appeal route for a penalty noted in case it is ever needed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the company's exposure to late filing penalties and late payment interest exists, with past penalties and their causes listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the official guidance on penalties for late corporate returns"
                - "Note how interest is charged on late and underpaid tax"
                - "Search the online account for penalties charged in the last three years"
                - "Write down the cause of each past penalty and what fixes it"
            - name: Associated and related company rules
              description: |-
                ## Purpose
                Common ownership often matters for corporate tax: companies controlled by the same people may have to share small company thresholds, instalment limits or allowances, and some regimes treat related companies almost as one. Founders who own several companies, or invest alongside family, can trip over these rules without knowing they exist.

                ## Milestones
                1. Every company the owners, their close family or the group control listed.
                2. Your country's definition of associated or related companies read from official guidance.
                3. Which thresholds and limits are shared among them confirmed with your adviser.
                4. The list rechecked whenever a company is formed, bought or closed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of related companies and the thresholds they share is confirmed by the adviser and kept in the permanent tax file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every company the shareholders and their close family control"
                - "Read the official definition of associated or related companies"
                - "Ask your adviser which thresholds the companies must share"
                - "Add the related companies list to the permanent tax file"
            - name: Director and shareholder transactions in the return
              description: |-
                ## Purpose
                Loans to directors, personal costs paid by the company, benefits and balances owed to shareholders can all carry corporate tax consequences, and some must be reported on the return itself. Owner-managers mix personal and company money more often than they realise. Learning which transactions matter, and keeping the director's loan account clean, avoids surprises at filing.

                ## Milestones
                1. The director's loan and shareholder accounts reconciled to the year end.
                2. Transactions with tax consequences for the company listed from official guidance.
                3. Personal costs paid by the company identified and their treatment agreed with your adviser.
                4. Any disclosure the return requires prepared before filing.

                ## Notes
                How owners take money out in future is a separate decision. This project is about how what already happened shows up in the company's return.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Director and shareholder balances are reconciled at the year end, and every transaction affecting the corporate return is listed and agreed with the adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Reconcile the director's loan account to the year end"
                - "List personal costs the company paid during the year"
                - "Ask your adviser which of these affect the corporate return"
                - "Prepare any director loan disclosure the return requires"
            - name: Corporate tax filing software selection
              description: |-
                ## Purpose
                If the company prepares its own return, the software decides how much is automated, whether your return type and schedules are supported and whether it files directly with the tax authority. Comparing two or three products against the same criteria, using last year's return as a test case, avoids finding a gap in the week of the deadline.

                ## Milestones
                1. Criteria written: return types and schedules supported, direct filing, ledger import, multi-year history, cost.
                2. Two or three products shortlisted, from the tax authority's list of recognised software where one exists.
                3. Last year's return re-created in a trial of each shortlisted product.
                4. A product chosen and the reasons recorded.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A software choice is recorded against written criteria after last year's return was re-created in trials of at least two products."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the criteria the filing software must meet"
                - "Check whether the tax authority publishes a list of recognised filing software"
                - "Re-create last year's return in a trial of each shortlisted product"
                - "Record the choice and cancel the unused trials"
            - name: Unclaimed allowances and reliefs review
              description: |-
                ## Purpose
                Small and growing companies often miss reliefs simply because nobody asked: enhanced allowances for certain assets, incentives for particular kinds of investment or hiring, and credits that only need a claim on the return. A structured review with your adviser, against the reliefs that exist in your country, finds what the company is entitled to and could still claim.

                ## Milestones
                1. A list of reliefs and incentives open to companies like yours, from official guidance or your adviser.
                2. Each one marked as claimed, not relevant, or possibly missed.
                3. Possibly missed items estimated and checked against their claim time limits.
                4. Agreed claims added to this year's return or an amendment.

                ## Notes
                Research and development credits have their own process and evidence demands; treat them as a separate claim rather than a line in this review.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every relief on a list agreed with the adviser is marked claimed, not relevant or to be claimed, and agreed claims are entered in a return."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your adviser for a list of reliefs companies like yours commonly claim"
                - "Mark each relief as claimed, not relevant or possibly missed"
                - "Check the time limit for claiming each possibly missed relief"
                - "Ask the agent to draft a one-page summary of the reliefs reviewed"
            - name: Carry back or carry forward decision for a tax loss
              description: |-
                ## Purpose
                When a company makes a tax loss, many systems let it carry the loss back against earlier profits for a refund, set it against other income of the same year, or carry it forward, each with its own time limits and restrictions. The choice trades cash now against tax saved later, so it deserves a written comparison rather than a default.

                ## Milestones
                1. The loss amount for the year confirmed from the draft computation.
                2. The relief options available in your country listed with their time limits.
                3. Each option's cash and tax effect estimated by your adviser.
                4. The decision recorded and the claim made in the right return.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the loss relief options with an adviser estimate for each exists, and the chosen claim is made within its time limit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the year's tax loss from the draft computation"
                - "Ask your adviser which loss relief options and time limits apply"
                - "Compare the cash effect of each option on one page"
                - "Record the decision and make the claim in the return"
            - name: Elections and claims register with time limits
              description: |-
                ## Purpose
                Many tax outcomes depend on elections and claims that must be made in writing, often within a fixed number of years, and some cannot be reversed once made. A register of every election available, made or pending, each with its deadline, stops the company losing an option because the window closed while nobody was watching.

                ## Milestones
                1. Every election and claim the company has made listed with date and reference.
                2. Pending options identified with your adviser and each given a deadline.
                3. Deadlines added to the tax calendar with a named owner.
                4. Each new election copied into the permanent tax file once made.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of past and pending elections and claims exists, with each pending item's deadline in the tax calendar under a named owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the elections and claims shown in the last three returns"
                - "Ask your adviser which elections are open to the company and their time limits"
                - "Add each pending election deadline to the tax calendar with an owner"
            - name: Correcting a filed return through an amendment
              description: |-
                ## Purpose
                Errors turn up after filing: a missed invoice, a wrongly treated asset, an allowance nobody claimed. Most tax authorities allow amendments within a set window, and correcting promptly and voluntarily usually costs far less than waiting to be asked. A clear process for deciding, preparing and recording an amendment makes it a routine fix rather than a crisis.

                ## Milestones
                1. The error described, quantified and its cause recorded.
                2. The amendment window for that return confirmed.
                3. The amended return or correction prepared and reviewed by your adviser.
                4. The amendment submitted, any extra tax paid and the cause fixed for next year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An amendment is submitted within the permitted window, with the error, its cause and the prevention step recorded in the workpaper binder."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the error, the return it affects and its estimated tax effect"
                - "Confirm the deadline for amending that return"
                - "Ask your adviser to prepare or review the amendment"
                - "Fix the cause in the process so it does not repeat next year"
            - name: Monthly tax reserve for the year's liability
              description: |-
                ## Purpose
                Small companies often spend cash that really belongs to the tax authority, then borrow or stretch suppliers to pay the bill. Moving a set amount, based on the latest estimate, into a separate reserve account each month makes the payment a transfer rather than a scramble, and the reserve doubles as a check on whether the estimate looks right.

                ## Milestones
                1. A separate reserve account opened for corporate tax.
                2. A monthly transfer amount set from the latest tax estimate.
                3. The reserve balance compared with the estimate each quarter and the transfer adjusted.
                4. A full year's instalments and balancing payment paid from the reserve.

                ## Notes
                Start from the **Savings goal** template, with the year's estimated liability as the goal and the payment dates as milestones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dedicated tax reserve is funded every month for twelve months and holds enough to pay the year's liability on its due dates."
                cadence: rolling
              tasks:
                - "Open a separate reserve account for corporate tax"
                - "Set the monthly transfer amount from the latest tax estimate"
                - "Move this month's corporate tax reserve transfer @recurring(monthly:28)"
                - "Adjust the transfer whenever the quarterly estimate changes"
            - name: Pre-filing review checklist for the computation
              description: |-
                ## Purpose
                Return errors are usually simple: a profit figure that does not agree to the accounts, last year's losses keyed wrongly, an allowance pool not rolled forward. A short checklist run by someone other than the preparer, before anything goes to the directors, catches those in an hour.

                ## Milestones
                1. Tie-out checks written: profit to accounts, opening balances to last year, losses to the register, payments to the tax account.
                2. Reasonableness checks written: effective rate, large movements, new adjustments.
                3. The checklist completed and signed by a reviewer for this year's return.
                4. Review points cleared and the signed checklist saved in the binder.

                ## Notes
                Start from the **Operational checklist** template. Add a check every time an error slips through, so the list learns from each year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed review checklist, signed by someone other than the preparer, is saved in the binder before the return is approved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the tie-out and reasonableness checks from last year's review points"
                - "Agree who reviews the computation if they did not prepare it"
                - "Run the checklist on this year's draft computation"
                - "Save the signed checklist in the workpaper binder"
            - name: Annual return filing and submission week
              description: |-
                ## Purpose
                The final week before submission should be about approvals and checks, not finding figures. Planning it as a short event, with the final computation, director approval, submission and receipt each on a set day and the deadline still weeks away, gives a calm filing every year.

                ## Milestones
                1. A filing week chosen at least two weeks before the deadline.
                2. Final computation and return draft ready on day one.
                3. Director approval obtained and recorded.
                4. Return submitted and the submission receipt saved in the binder.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The return is submitted during the planned filing week, at least two weeks before the deadline, with the approval and receipt saved."
                cadence: cyclic
              tasks:
                - "Block the filing week in the calendars of preparer, reviewer and approver @recurring(yearly)"
                - "Confirm the final draft and supporting schedules are ready on day one"
                - "Submit the return and download the submission receipt"
                - "Tell the directors the return is filed and what is payable"
            - name: Balancing tax payment by the due date
              description: |-
                ## Purpose
                In many systems the final balance of corporate tax is due before, sometimes long before, the return itself, so a company can file on time and still pay late. Treating the balancing payment as its own dated event, funded from the reserve and released by two people, removes that trap.

                ## Milestones
                1. The balancing payment amount confirmed from the near-final computation.
                2. Funds available in the reserve or operating account a week before the due date.
                3. Payment approved by two people and made with the correct reference.
                4. The payment visible on the tax authority statement.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The balancing payment is made on or before its due date for two years running, with two approvals and the receipt saved."
                cadence: cyclic
              tasks:
                - "Confirm the balancing payment amount with your adviser @recurring(yearly)"
                - "Move funds from the tax reserve a week before the due date"
                - "Get a second approver to release the payment"
                - "Check the payment shows on the tax authority statement"
            - name: Director approval pack for the return
              description: |-
                ## Purpose
                Directors who sign or approve a corporate return are usually responsible for its accuracy, yet many approve it after a glance at the final figure. A short pack explaining the taxable profit, the main adjustments, any judgement calls and the amount payable lets them approve with understanding and leaves a record that they did.

                ## Milestones
                1. A one or two page summary: profit to taxable profit, tax payable, changes from last year.
                2. Judgement areas and uncertain items explained in plain words.
                3. Questions from directors answered in writing.
                4. Approval minuted or recorded by email and saved in the binder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A director approval pack is issued before filing each year, and the approval is recorded and saved with the return."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to turn the computation into a plain-words summary for directors"
                - "Explain each judgement area in one short paragraph"
                - "Send the pack to the directors with a reply-by date"
                - "Save the recorded approval in the workpaper binder"
            - name: Pre-year-end tax planning meeting with the adviser
              description: |-
                ## Purpose
                Once the year end passes, the tax result is mostly fixed; two or three months before it, there is still time to time purchases, make elections and tidy the balance sheet. A planned meeting with your adviser, with the latest estimate and a list of questions, turns year-end tax from a surprise into a set of choices made in time.

                ## Milestones
                1. The meeting booked two to three months before the year end.
                2. The latest tax estimate, planned purchases and known issues sent in advance.
                3. Options discussed and actions agreed, each with an owner and date.
                4. Agreed actions completed before the year end.

                ## Notes
                Start from the **Meeting notes** template. Ask for the reasoning behind each suggestion, and act only on what you understand and the directors have agreed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planning meeting is held at least two months before each year end, with agreed actions recorded and completed before the year closes."
                cadence: cyclic
              tasks:
                - "Book the year-end planning meeting with your adviser @recurring(yearly)"
                - "Send the latest estimate and planned purchases a week before"
                - "Record each agreed action with an owner and a date"
                - "Check every agreed action is done before the year end"
            - name: Overpaid tax refund claim follow-through
              description: |-
                ## Purpose
                Overpaid instalments, carried-back losses and corrected assessments can all leave the company owed money, and refunds often sit unclaimed or are set against other taxes without much notice. Following each refund from claim to cash, with the expected amount and date written down, gets the money back and catches offsets you would otherwise miss.

                ## Milestones
                1. Each expected refund listed with its source, amount and claim reference.
                2. Any claim the tax authority needs submitted through the official route.
                3. Refunds received matched to the expected amount, with offsets explained.
                4. Any repayment interest recorded correctly in the ledger.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every expected refund in the year is either received and matched or has a recorded reason and a follow-up date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each refund the company expects with its amount and source"
                - "Submit any claim the refund needs through the online account"
                - "Match refunds received to the expected amounts"
                - "Chase any refund outstanding beyond the stated processing time"
            - name: Final return when closing a company
              description: |-
                ## Purpose
                A company being wound up or struck off still has to file its final corporate return, pay or recover its last tax and, in some countries, obtain clearance before it can be dissolved. Missing these steps can stall the closure or leave former directors answering notices for years. Planning the tax side of closure alongside the legal steps keeps it clean.

                ## Milestones
                1. The final accounting period and the date trading stopped confirmed with your adviser.
                2. The final return prepared, approved and filed.
                3. Final tax paid or refunds received, and the tax account showing nil.
                4. Any confirmation or clearance from the tax authority saved with the closure records.

                ## Notes
                Closure has legal steps as well as tax ones. Take advice before distributing any remaining funds to shareholders.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final corporate return is filed and the tax account shows nil before the company is dissolved, with the confirmation saved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your adviser what tax steps closing a company requires in your country"
                - "Confirm the final accounting period and the date trading stopped"
                - "File the final return and settle the last payment or refund"
                - "Save the tax authority's confirmation with the closure records"
            - name: First return for a newly incorporated company
              description: |-
                ## Purpose
                Founders are often surprised that a company's first tax period may not match its first accounts period, that registering with the tax authority can be a separate step, and that a return is due even if little happened. Planning the first return from incorporation day means the first filing sets good habits rather than a penalty record.

                ## Milestones
                1. The company registered for corporate tax, or confirmed as registered automatically.
                2. The first tax period or periods confirmed, including any short first period.
                3. Records kept from day one in a ledger separate from the founders' personal finances.
                4. The first return filed and any tax paid on time.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The company's first corporate return is filed and any tax paid by the deadline, with the first period dates confirmed in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check whether the company must register for corporate tax separately"
                - "Confirm the dates of the first tax period with your accountant"
                - "Keep all company spending in the business bank account from day one"
                - "Put the first filing and payment deadlines in the tax calendar"
            - name: First-year tax checks after incorporating a sole trade
              description: |-
                ## Purpose
                When a sole trader or partnership moves into a company, assets, stock, contracts and any losses transfer at values and dates that matter for tax, and income around the switch can easily be reported twice or not at all. Checking those points in the company's first year keeps the personal and company returns consistent with each other.

                ## Milestones
                1. The transfer date and the assets, stock and liabilities moved into the company listed with their values.
                2. The tax treatment of the transfer agreed with your adviser.
                3. Income and costs either side of the switch allocated to the right taxpayer.
                4. The company's first return and the owner's last sole trader return using consistent figures.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of the transfer date, assets moved and their values is agreed with the adviser and consistent across the first company and last personal returns."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the assets, stock and contracts moved into the company with dates"
                - "Ask your adviser how the transfer is treated for tax"
                - "Split income and costs around the transfer date"
                - "Check the company and personal returns use the same transfer figures"
            - name: Small company rates and simplified rules eligibility
              description: |-
                ## Purpose
                Many tax systems give smaller companies lower rates, simpler instalment rules or lighter filing, but the thresholds depend on profit, turnover, related companies and sometimes the length of the period. Checking eligibility each year, rather than assuming last year's status, avoids both missing a relief and claiming one the company has outgrown.

                ## Milestones
                1. The small company thresholds in your country listed from official guidance.
                2. This year's figures compared with each threshold, counting related companies.
                3. The company's status confirmed with your adviser.
                4. The status and the figures behind it noted in the workpaper binder.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The company's small company status is confirmed each year from that year's figures and recorded in the workpaper binder."
                cadence: cyclic
              tasks:
                - "Look up the small company thresholds for corporate tax in your country"
                - "Compare this year's figures with each small company threshold @recurring(yearly)"
                - "Ask your adviser to confirm the company's status for the year"
            - name: Filing on time while the startup makes losses
              description: |-
                ## Purpose
                Loss-making startups are tempted to treat the corporate return as a formality, but a return filed late or not at all can cost penalties and, in some countries, the right to use the losses later. Filing accurately and on time, with each year's loss clearly computed and recorded, is how a founder protects one of the company's few tax assets.

                ## Milestones
                1. Each year's return filed on time even when no tax is due.
                2. Losses for each year computed and agreed with your adviser.
                3. The losses register updated from each filed return.
                4. Investor questions on accumulated losses answerable from the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every return during the loss-making years is filed on time, and the accumulated losses agree to the losses register."
                cadence: cyclic
              tasks:
                - "Check that every past return was filed, including years with no profit"
                - "Ask your adviser to confirm the loss computed for each year"
                - "Note any rules that could restrict losses after a funding round"
                - "Keep a one-line summary of accumulated losses for investor questions"
            - name: Dormant or non-trading company obligations
              description: |-
                ## Purpose
                Stopping trading does not always stop the filing: a company that has ceased, or never started, may still have to file returns until the tax authority accepts it is dormant, and bank interest alone can make it active again. Confirming the status in writing and knowing what would change it avoids penalties for returns nobody thought were needed.

                ## Milestones
                1. The company's trading status for tax confirmed with the tax authority or your adviser.
                2. Any notice to file still outstanding identified and dealt with.
                3. Activities that would end dormancy, such as bank interest or a single sale, written down.
                4. The status reported through the official route where the tax authority requires it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The company's dormant or non-trading status is confirmed in writing, with no outstanding notice to file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the online account for any outstanding notice to file"
                - "Ask your adviser whether the company counts as dormant for tax"
                - "Write down the activities that would make the company active again"
                - "Report the dormant status through the official route if required"
            - name: Multi-entity corporate tax calendar for a group
              description: |-
                ## Purpose
                Groups with companies in several countries, states or provinces can face dozens of returns, instalments and extensions a year, each handled by a different local adviser. One calendar listing every entity's obligations, with an owner and a status, is how a group finance or tax team proves nothing is missed and sees the busy months coming.

                ## Milestones
                1. Every entity listed with its jurisdictions, return types and year ends.
                2. All filing, instalment and extension dates for the year in one calendar with owners.
                3. Local advisers confirming their dates and status each quarter.
                4. A year closed with every return and payment logged as done on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A group tax calendar lists every entity's returns and payments with owners, and the year closes with each one logged as done on time."
                cadence: rolling
              tasks:
                - "List every entity with its tax jurisdictions and year end"
                - "Collect each entity's filing, instalment and extension dates"
                - "Update the status of every open group tax obligation @recurring(monthly:5)"
                - "Ask local advisers to confirm their upcoming dates each quarter"
            - name: Tax history pack for a sale or funding round
              description: |-
                ## Purpose
                Buyers and investors ask for the company's tax history: filed returns, computations, open years, losses, disputes and payments. A pack prepared before the data room opens shows a well-run tax position, speeds up due diligence and keeps awkward findings from surfacing for the first time in a negotiation.

                ## Milestones
                1. Returns, computations and assessments for every open year collected.
                2. A summary of open years, losses, elections and correspondence with the tax authority.
                3. Known issues identified with your adviser and explained in writing.
                4. The pack reviewed by your adviser before it is shared.

                ## Notes
                Share only through the agreed data room and under a signed confidentiality agreement.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A tax history pack covers every open year, with a written summary and known issues explained, and was reviewed by the adviser before sharing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every tax year still open to enquiry or amendment"
                - "Collect the returns, computations and assessments for those years"
                - "Write a one-page summary of losses, elections and open matters"
                - "Ask your adviser to review the pack before it goes in the data room"
            - name: Ownership change and loss restriction checks
              description: |-
                ## Purpose
                Many tax systems restrict or cancel carried-forward losses after a change in ownership, especially when it comes with a change in the business. Before shares change hands through a sale, a funding round or a restructure, checking how the rules apply protects losses that may be worth more than anyone at the table realises.

                ## Milestones
                1. The proposed ownership change described with dates and percentages.
                2. Your country's loss restriction rules summarised by your adviser.
                3. The effect on the company's losses estimated in writing.
                4. Steps to protect the losses considered before the change completes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written adviser view on how a planned ownership change affects the company's losses is obtained before the change completes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Describe the planned ownership change with dates and shareholdings"
                - "Ask your adviser how loss restriction rules apply to the change"
                - "Record the estimated effect in the losses register"
            - name: Uncertain tax positions register
              description: |-
                ## Purpose
                Larger companies and groups take positions where the law is unclear: a deduction that could be challenged, the timing of income, a classification. Accounting standards and auditors expect these to be identified and assessed, and some tax authorities require disclosure. A register with each position, its amount, the basis and the adviser's view keeps judgement visible and consistent.

                ## Milestones
                1. Each uncertain position listed with amount, years affected and technical basis.
                2. The adviser's view and the likely outcome recorded for each.
                3. Provisions or disclosures agreed with the finance lead and auditors.
                4. The register reviewed every quarter and whenever a new position is taken.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An uncertain tax positions register holds an adviser view on each item, is reviewed quarterly and is agreed with the auditors at year end."
                cadence: rolling
              tasks:
                - "List positions in recent returns where the treatment could be challenged"
                - "Record the amount, years affected and basis for each position"
                - "Review the uncertain positions register with the finance lead @recurring(quarterly)"
                - "Share the register with the auditors before year-end fieldwork"
            - name: Foreign income and double tax relief records
              description: |-
                ## Purpose
                Companies that earn abroad often suffer withholding tax on fees, royalties, interest or dividends, and relief for it in the home return usually depends on certificates and exact amounts. Collecting those documents as payments arrive, rather than asking overseas customers a year later, is often the difference between claiming relief and paying twice.

                ## Milestones
                1. Every foreign income stream listed with the country and type of income.
                2. Withholding tax certificates or statements collected for each payment.
                3. Treaty and relief questions for each country confirmed with your adviser.
                4. A schedule of foreign tax suffered ready for the computation.

                ## Notes
                Pricing between related companies in different countries is a separate documentation exercise and is not covered here.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A schedule of foreign income and tax suffered for the year exists, with a certificate or statement for every amount claimed."
                cadence: rolling
              tasks:
                - "List every source of foreign income and the country it comes from"
                - "Ask each overseas payer how they issue withholding tax certificates"
                - "Chase missing withholding tax certificates from overseas payers @recurring(quarterly)"
                - "Ask your adviser which treaty relief applies to each country"
            - name: Group relief or consolidated return elections
              description: |-
                ## Purpose
                Groups in many countries can share losses between companies or file a single consolidated return, but only if ownership tests are met and claims or elections are made in time. Mapping which companies qualify and what each claim costs or saves lets the group finance lead make the choice every year rather than inherit it.

                ## Milestones
                1. The group structure mapped with ownership percentages for each company.
                2. Which companies qualify for group relief or consolidation confirmed by your adviser.
                3. Losses and profits across the group modelled for the year's claims.
                4. Claims, surrenders or elections made within their time limits and copied to the permanent file.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The year's group relief or consolidation claims are modelled, approved and made within their time limits, with the workings saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Update the group structure chart with ownership percentages"
                - "Ask your adviser which companies qualify for group relief or consolidation"
                - "Model the year's losses and profits across the qualifying companies"
                - "Make the agreed claims before their time limits"
            - name: Global minimum tax readiness for a large group
              description: |-
                ## Purpose
                Large multinational groups now face rules in many countries that top up tax wherever their effective rate falls below an agreed minimum, with new data requirements and returns of their own. Groups near or above the revenue threshold need to know which entities are in scope, which data is missing from the ledger and who will prepare each filing.

                ## Milestones
                1. Whether the group is in scope confirmed with your adviser from consolidated revenue.
                2. Each country's adoption status and filing dates listed.
                3. Data needed per entity compared with what the ledgers and consolidation already hold.
                4. Ownership of each calculation and filing agreed, internally or with advisers.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written scope assessment, data gap list and named owner for each global minimum tax filing are agreed with the group's adviser."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your adviser whether the group is within scope of the minimum tax rules"
                - "List each country where the group operates and its adoption status"
                - "Compare the data required with what the consolidation already holds"
                - "Agree who will prepare and file each minimum tax return"
---

# Corporate Income Tax Returns

This area is for anyone responsible for a company's income tax return: a founder filing the first one, an owner-manager working alongside an accountant, or a group finance team juggling returns across several countries. It starts with the foundations (an obligations map, online access, a deadlines calendar, past returns and a ledger-to-tax mapping), then the routines that keep the tax position current, the skills behind the computation, decisions on software, reliefs, losses and amendments, the dated events of planning, filing and paying, situations for new, dormant, loss-making and closing companies, and finally specialist group work on uncertain positions, foreign tax, group relief and the global minimum tax.

What repeats is a quarterly liability estimate and instalment check, a monthly coding review, reserve transfer and tax account reconciliation, a weekly look for new notices, and a yearly cycle of planning meeting, workpaper binder, filing week and balancing payment. The Savings goal, Operational checklist, Purchase decision, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
