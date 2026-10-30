---
id: finance-accounting.payment-fraud-prevention
name: Payment Fraud Prevention
description: "Callback checks for changed bank details, locked-down banking access, staff who recognise invoice and impersonation scams, routines that catch bad payees before release, and a plan for the first hour after money goes."
category: business
version: 1.0.0
tags: [finance-accounting, payment-fraud-prevention, small-business, manager, enterprise, invoice-fraud, business-email-compromise, payment-verification]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - purchase-decision
    - remediation-plan
    - meeting-notes
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Payment Fraud Prevention
          description: "Protecting the business from invoice fraud, fake supplier changes and payment scams through verification checks, controls and staff awareness."
          projects:
            - name: Map of every route money leaves the business
              description: |-
                ## Purpose
                Before any control can be designed you need to know every way cash goes out: bank transfers, card payments, direct debits, cheques, payroll, the payment processor's refund button and the owner's own banking app. A one-page map of each route, who can start it, who can release it and what the limit is shows where a single email could move money with nobody else noticing.

                ## Milestones
                1. Every bank account, card and payment platform the business uses listed with its purpose.
                2. Each payment route marked with who can set up a payee, who can approve and who can release.
                3. Daily and per-payment limits recorded for each route.
                4. Routes where one person can act alone highlighted for the risk register.

                ## Notes
                Include the small things people forget: a petty cash card, a marketing team's ad account card and the refund function in the online shop are all payment routes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map lists every payment route with its initiator, approver, releaser and limit, and single-person routes are highlighted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every bank account, company card and payment platform in use"
                - "Write down who can add a payee and who can release a payment on each"
                - "Look up the daily and single-payment limits in each banking platform"
                - "Highlight every route where one person can pay without a second check"
            - name: Payment fraud risk register
              description: |-
                ## Purpose
                Fraudsters rarely break in; they persuade someone with the right access to pay. A register of the realistic scenarios for this business, such as a supplier's hacked email sending new bank details, a fake director asking for an urgent transfer or a payroll change request from a spoofed address, scored for likelihood and impact, turns a vague worry into a ranked list of controls to put in place.

                ## Milestones
                1. At least eight fraud scenarios written in plain language, each with the payment route it uses.
                2. Each scenario scored for likelihood and financial impact.
                3. The existing control, or the lack of one, named against each scenario.
                4. A named owner and target date set for the three highest-scoring gaps.

                ## Notes
                Start from the **Risk register** template. Use near misses your own team has seen as the first scenarios; they are the most convincing to everyone else.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scored register of at least eight payment fraud scenarios exists, with a control or a dated action and owner against each of the top three."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the finance team which suspicious payment requests they have seen this year"
                - "Write each scenario as one sentence naming the payment route it would use"
                - "Score each scenario for likelihood and impact on a simple scale"
                - "Assign an owner and date to the three highest-scoring gaps"
                - "Rescore the register against the latest attempts and incidents @recurring(quarterly)"
            - name: Bank detail change callback procedure
              description: |-
                ## Purpose
                Changed bank details are the single most common route for invoice fraud: a supplier's real email account is hacked, or a near-identical address is used, and a polite letter asks you to pay a new account. A written rule that every change is confirmed by phoning the supplier on a number you already held, never one in the request, closes most of that risk for the cost of a five-minute call.

                ## Milestones
                1. A written procedure stating that bank detail changes are never accepted on the strength of an email, letter or invoice alone.
                2. A callback step using only a number from the supplier file, contract or website found independently.
                3. A record of each change showing who called, who they spoke to, the date and the details confirmed.
                4. A second person checking the record before the new details are used for a payment.

                ## Notes
                Start from the **Operational checklist** template. Ask the supplier contact to read the new account details to you, rather than reading them out yourself and asking for a yes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off callback procedure is in use, and every bank detail change in the last month has a completed callback record checked by a second person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the rule that no bank detail change is accepted from an email or letter alone"
                - "Define where the callback number must come from and where it must never come from"
                - "Create a change record with caller, contact name, date and confirmed details"
                - "Walk the payments team through the procedure using last month's changes"
            - name: Independently sourced supplier contact directory
              description: |-
                ## Purpose
                A callback is only as good as the number dialled, and a number taken from the suspicious email leads straight back to the fraudster. A directory of phone numbers and named contacts for your regular suppliers, collected from contracts, past calls and their public websites, gives the team a trusted place to call from before anyone needs it.

                ## Milestones
                1. The top 30 suppliers by annual spend listed with a named finance contact.
                2. A phone number for each, recorded with where it was sourced from.
                3. The directory kept separate from the email inbox and editable by only two people.
                4. Numbers for the top 20 suppliers re-confirmed within the last year.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A directory covers the top 30 suppliers by spend, each with a named contact, a phone number and its recorded source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the top 30 suppliers by spend from the accounting system"
                - "Find a phone number for each from the contract or the supplier's public website"
                - "Record the source of every number next to it in the directory"
                - "Restrict editing of the directory to two named people"
                - "Re-confirm the contact numbers for the top 20 suppliers @recurring(yearly)"
            - name: Online banking user rights and limits lockdown
              description: |-
                ## Purpose
                Online banking platforms often still carry a former bookkeeper's login, a shared token in a drawer or a single user who can both add a payee and release the payment. Rebuilding the users, roles and limits so that adding payees and releasing payments need two different people, with sensible daily limits, removes the easiest path to a large loss.

                ## Milestones
                1. Every banking user listed with their role, token or device, and the date they last logged in.
                2. Leavers, shared logins and unused accounts removed.
                3. Payee creation and payment release split between at least two users, or dual authorisation switched on.
                4. Daily and single-payment limits set to what normal trading actually needs.

                ## Notes
                Keep the bank's administrator role with someone senior who does not process payments day to day. Ask the bank what its dual authorisation options are; most business platforms have them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No banking platform has a shared login or former employee, and every platform needs two different people to add a payee and release a payment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the user list from each online banking platform"
                - "Remove former staff, shared logins and users who have not logged in for 90 days"
                - "Ask the bank to switch on dual authorisation for new payees and payments"
                - "Reset daily payment limits to the largest normal payment plus a margin"
            - name: One-page payment fraud rules for all staff
              description: |-
                ## Purpose
                Staff outside finance, such as a personal assistant, an office manager or a project lead, are often the ones a fraudster contacts first. Five or six plain rules on one page, for example that bank details are never changed by email and that no urgent payment request from a senior person skips the normal approval, give everyone permission to say no and a clear person to ask.

                ## Milestones
                1. No more than six rules written in plain language on one page.
                2. A named person and a phone number for reporting a suspicious request.
                3. The page approved by the owner or finance director and signed off in writing.
                4. Every member of staff who handles invoices, payments or senior diaries has read and acknowledged it.

                ## Notes
                Include a sentence from the most senior person saying they will never ask anyone to bypass these rules. It is the line that makes junior staff confident enough to refuse.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of payment fraud rules is approved by leadership and acknowledged in writing by everyone who handles payments or senior diaries."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft six plain payment fraud rules from the risk register"
                - "Add the name and number of the person to call about a suspicious request"
                - "Get the owner or finance director to approve the page in writing"
                - "Collect a read-and-understood acknowledgement from each relevant staff member"
            - name: Bank fraud protection services switched on
              description: |-
                ## Purpose
                Most business banks offer protections that sit unused: payee name checking, alerts for new payees and large payments, debit blocks on accounts that should never be debited, and positive pay for cheques. Asking the bank for a full list and switching on the ones that fit the business adds a layer that works even when a person is fooled.

                ## Milestones
                1. A written list of every fraud service the bank offers, with any fees.
                2. Payee name checking in use where the bank supports it, such as Confirmation of Payee in the UK.
                3. Alerts for new payees and payments above a set amount going to two people.
                4. A decision recorded on debit blocks and positive pay for each account.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each bank account has a recorded decision on every fraud service the bank offers, with alerts and payee checking active where available."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the relationship manager for a list of fraud protection services and fees"
                - "Switch on alerts for new payees and payments above an agreed amount"
                - "Decide whether each account needs a debit block or positive pay"
                - "Record the services chosen and the reasons in the fraud risk register"
            - name: Email spoofing protection for the company domain
              description: |-
                ## Purpose
                Anyone can send an email that appears to come from your domain unless the domain publishes the records that tell receiving servers to reject forgeries. Agreeing with whoever runs your email to set up SPF, DKIM and a DMARC policy that moves to reject over a few weeks stops criminals posing as your directors to your staff and as your accounts team to your customers.

                ## Milestones
                1. The current SPF, DKIM and DMARC status of the domain checked and written down.
                2. Every legitimate service that sends email for the business, such as the accounting system and the newsletter tool, listed.
                3. A DMARC policy published and reports reviewed for at least two weeks.
                4. The policy moved to reject once legitimate senders all pass.

                ## Notes
                This is a job for your IT provider; finance's role is to ask for it, list the systems that send invoices and check it is finished. Moving straight to reject without the review can block your own invoices.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The company domain publishes SPF, DKIM and a DMARC policy at reject, and invoice emails from the accounting system still arrive."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Run the company domain through a free DMARC checker and save the result"
                - "List every system that sends email in the company's name"
                - "Ask the IT provider to publish DMARC with reporting and a plan to reach reject"
                - "Confirm a test invoice from the accounting system still arrives after the change"
            - name: First hour emergency card for a fraudulent payment
              description: |-
                ## Purpose
                When a payment turns out to be fraudulent, the chance of getting money back falls sharply with every hour, because criminals move it on quickly. A card by every payments desk with the bank's fraud line, the account numbers to quote, who to tell and what not to do means the recall request goes in within minutes rather than after a search for the right phone number.

                ## Milestones
                1. The bank's 24-hour business fraud number confirmed directly with the bank for every account.
                2. A card listing the first five actions in order, with the people to call.
                3. The card printed at each payments desk and saved where remote staff can reach it.
                4. Every person who releases payments able to say where the card is.

                ## Notes
                The first action is always to call the bank and ask for a recall of the payment, not to email the supplier. Also note how to report the crime to the police or national fraud reporting service in your country.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An emergency card with verified fraud line numbers and five ordered actions is at every payments desk and known to everyone who releases payments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Phone each bank to confirm its business fraud line and opening hours"
                - "Write the first five actions in order with names and numbers"
                - "Print the card for each payments desk and save a copy in the shared drive"
                - "Ask each payment releaser to show you where the card is kept"
            - name: Payroll bank detail change verification
              description: |-
                ## Purpose
                Payroll diversion is a quieter cousin of invoice fraud: an email that looks like it comes from an employee asks HR or payroll to change the account their salary goes to, and the real employee only notices when pay does not arrive. A rule that changes come only through a self-service portal or a verified conversation, plus a check before each pay run, protects people as well as the business.

                ## Milestones
                1. A rule that salary bank changes are never made from an email request alone.
                2. A verification step agreed with HR, using the employee's known phone number or an in-person check.
                3. A confirmation message sent to the employee's previous contact details after any change.
                4. Bank changes compared with signed requests before every pay run.

                ## Notes
                Agree this with whoever runs payroll, in-house or outsourced. The confirmation to the old contact details is the step that catches a takeover of the employee's own email.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written payroll bank change rule is in place and the last two pay runs each have every bank change matched to a verified request."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask payroll how employee bank details are changed today"
                - "Agree the verification step for salary bank changes with HR"
                - "Set up a confirmation message to the employee's previous contact details"
                - "Compare payroll bank detail changes with verified requests before each pay run @recurring(monthly:22)"
            - name: Weekly review of changed supplier bank details
              description: |-
                ## Purpose
                Every change to a supplier's bank account in the accounting system is a moment where fraud could slip in, whether the change came by email, a supplier portal or a well-meaning colleague. A short weekly report of all changes, checked against the callback records, catches the change that skipped the procedure before its first payment goes out.

                ## Milestones
                1. A saved report in the accounting system listing supplier bank detail changes for the week.
                2. Every change matched to a completed callback record.
                3. Unmatched changes blocked from payment until verified.
                4. Twelve consecutive weekly reviews completed and signed off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews are recorded, with every bank detail change either matched to a callback record or blocked."
                cadence: rolling
              tasks:
                - "Find or build an audit trail report of supplier bank detail changes"
                - "Save the report so it runs for the last seven days in one click"
                - "Match each change in the report to a callback record @recurring(weekly:tue)"
                - "Put any unmatched supplier on payment hold until it is verified"
            - name: Pre-release check of new and changed payees
              description: |-
                ## Purpose
                The payment run is the last point where a fraudulent payee can be stopped cheaply. Before anyone releases a batch, a second person scans it for payees paid for the first time, payees whose details changed recently and amounts far above that supplier's usual size, and asks for the evidence behind each one.

                ## Milestones
                1. A short list of the three flags to check: first payment, recent bank change and unusual amount.
                2. A releaser who is not the person who prepared the run.
                3. Each flagged line in a run initialled with the evidence seen.
                4. Two months of payment runs released with the check recorded every time.

                ## Notes
                Most accounting and banking systems can show a payee's previous payments; ask your bank or software provider how to see first-time payees in a batch.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payment run for two months has a recorded pre-release check by someone other than the preparer, with each flagged line evidenced."
                cadence: rolling
              tasks:
                - "Write the three red flags the releaser must check on every run"
                - "Confirm the person releasing runs is not the person who prepares them"
                - "Scan the payment run for first payments, recent changes and unusual amounts @recurring(weekly:thu)"
                - "Hold any flagged payment until its evidence is attached to the run"
            - name: Daily scan of bank alerts and unexpected debits
              description: |-
                ## Purpose
                Spotting a fraudulent debit, a payment you did not authorise or an alert for a new payee on the same day gives the bank a real chance to stop or recall it. Five minutes each morning on the previous day's transactions and alerts is one of the few daily habits worth keeping in finance.

                ## Milestones
                1. Bank alerts for new payees, large payments and failed logins arriving to a named person.
                2. A morning slot set aside to look at yesterday's debits and alerts.
                3. A cover person named for holidays and sick days.
                4. Anything unexpected queried with the bank the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bank alerts and the previous day's debits are reviewed every working day, with a cover person and any queries raised the same day."
                cadence: rolling
              tasks:
                - "Check that bank alerts reach a named person and a deputy"
                - "Name a cover person for days when the usual reviewer is away"
                - "Look through yesterday's bank debits and alerts for anything unexpected @recurring(daily)"
            - name: Monthly banking user and token review
              description: |-
                ## Purpose
                Banking access drifts: someone changes role, a temporary user is never removed, a token goes missing in a move. A monthly look at who can log in, who can approve and which devices are registered keeps the lockdown done in the foundations from quietly unravelling.

                ## Milestones
                1. A list of banking users and their rights compared with the current staff list each month.
                2. Leavers removed on or before their last day.
                3. Lost or unused tokens and devices cancelled.
                4. Six monthly reviews recorded with any changes made.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews of banking users and devices are recorded, with no former employee holding access at any review."
                cadence: rolling
              tasks:
                - "Ask HR to tell finance about every leaver before their last day"
                - "Compare banking users and devices with the current staff list @recurring(monthly:9)"
                - "Cancel any lost token or device with the bank the same day it is reported"
            - name: Quarterly fraud awareness briefing for payment staff
              description: |-
                ## Purpose
                People forget a one-off training session within months, and the scams change. A 20-minute briefing each quarter for everyone who touches invoices, payments or senior diaries, built around a real attempt seen recently, keeps suspicion fresh without turning it into a lecture.

                ## Milestones
                1. A list of everyone who should attend, including assistants and office managers.
                2. Each briefing built around one real or recent example.
                3. Attendance recorded and missed attendees given the slides or a short call.
                4. Four briefings delivered in a year.

                ## Notes
                Use your own suspicious request log for examples. A real attempt on your own business is far more memorable than a generic case study.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly briefings are delivered in twelve months, each with recorded attendance and a real example."
                cadence: rolling
              tasks:
                - "List everyone who handles invoices, payments or senior diaries"
                - "Pick one recent attempt from the suspicious request log as the example"
                - "Run a 20-minute fraud awareness briefing and record who attended @recurring(quarterly)"
                - "Send the slides and a two-line summary to anyone who missed it"
            - name: Monthly lookalike domain and spoofed email watch
              description: |-
                ## Purpose
                Criminals register domains one letter away from yours or a big supplier's, then use them to send invoices and change requests that pass a quick glance. A monthly check of DMARC reports and a domain monitoring alert, run by IT and read by finance, shows when someone is building a trap with your name on it.

                ## Milestones
                1. A domain monitoring service or alert set up for your main domain and common misspellings.
                2. DMARC aggregate reports summarised for finance once a month.
                3. Any lookalike domain reported to the registrar and staff warned about it.
                4. The top five suppliers' domains added to the watch where the tool allows.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly summary of DMARC reports and lookalike domain alerts is produced for six months, with each lookalike either reported or recorded."
                cadence: rolling
              tasks:
                - "Ask IT whether a domain monitoring alert is in place for the company domain"
                - "Add common misspellings of the domain to the watch list"
                - "Read the monthly summary of spoofing reports and lookalike domains @recurring(monthly:17)"
                - "Warn the payments team about any new lookalike domain by name"
            - name: Suspicious payment request log
              description: |-
                ## Purpose
                Attempts that fail are the best intelligence a business has, yet most are deleted and forgotten. A simple log of every suspicious invoice, change request or urgent payment demand, with the date, the route and what gave it away, shows patterns, feeds the briefings and proves to insurers that controls work.

                ## Milestones
                1. A shared log with date, sender, route, amount asked, red flags and outcome.
                2. A single address or channel where staff forward suspicious requests.
                3. Every attempt in the last month logged.
                4. A monthly summary of attempts and patterns sent to the owner or finance director.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A suspicious request log is kept for six months, with a monthly summary of attempts and patterns sent to leadership."
                cadence: rolling
              tasks:
                - "Set up a shared log with date, sender, route, amount, red flags and outcome"
                - "Tell staff where to forward suspicious payment requests"
                - "Summarise the month's attempts and any patterns for leadership @recurring(monthly:24)"
            - name: Annual payment fraud control review
              description: |-
                ## Purpose
                Controls set up in a burst of worry after a near miss tend to fade, and the business changes around them: new banks, new staff, new systems. A yearly review that tests each control against the risk register, with a sample of real changes and payments, shows which ones still work and which have quietly stopped.

                ## Milestones
                1. Each control in the register tested with a sample of at least five real items.
                2. Controls that failed or were skipped listed with the reason.
                3. The risk register rescored for the year ahead.
                4. A short report with actions and owners approved by leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly report tests every payment fraud control against real samples and lists dated actions approved by leadership."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Pick five bank detail changes and five payment runs from the year to test"
                - "Check each sample against the control that should have applied"
                - "Run the annual payment fraud control review and report to leadership @recurring(yearly)"
                - "Rescore the risk register using the year's attempts and test results"
            - name: Cheque register and positive pay check
              description: |-
                ## Purpose
                Cheques are still among the easiest instruments to steal, wash and alter, and businesses that write only a few a month often keep the least control over them. Locking up the cheque stock, logging every cheque issued and sending the log to the bank's positive pay service where it exists means an altered cheque is rejected at the counter.

                ## Milestones
                1. Unused cheque stock counted and stored under lock with a named key holder.
                2. A register of every cheque issued with number, payee, amount and date.
                3. The register matched to the bank's positive pay file or to cleared cheques each month.
                4. A decision recorded on whether cheques can be phased out altogether.

                ## Notes
                If you write almost no cheques, the best control is to stop writing them and ask the bank about a debit block on cheque presentment.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cheque stock is locked and counted, and every cleared cheque for six months matches the register."
                cadence: rolling
              tasks:
                - "Count the unused cheque stock and lock it away"
                - "Start a register of cheques issued with number, payee, amount and date"
                - "Match cleared cheques to the register and investigate gaps @recurring(monthly:3)"
                - "Decide whether the business can stop writing cheques"
            - name: Recognising invoice redirection fraud
              description: |-
                ## Purpose
                Invoice redirection usually arrives inside a genuine email thread, because the supplier's mailbox has been taken over, so the usual advice to check the sender address is not enough. Learning the real signs, such as a new account in a different country or name, a sudden reason like an audit or a bank change, and pressure on timing, lets payment staff stop the request in the moment.

                ## Milestones
                1. Three published case summaries of invoice redirection read and discussed.
                2. A list of ten warning signs written in your own words.
                3. The list pinned beside the payment run checklist.
                4. Each payments team member able to name five of the signs.

                ## Notes
                Good sources include your bank's fraud pages and the national fraud or cyber security agency in your country.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The payments team has a written list of ten invoice redirection warning signs and each member can name five without notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read three case summaries of invoice redirection from your bank or fraud agency"
                - "Write ten warning signs of invoice redirection in your own words"
                - "Pin the warning signs beside the payment run checklist"
                - "Quiz the payments team on the signs at the next team meeting"
            - name: Executive impersonation and urgent transfer scams
              description: |-
                ## Purpose
                An email or message that appears to come from the owner or chief executive, asking for a confidential urgent payment for an acquisition, a late tax bill or a supplier emergency, works because staff want to help a senior person. Understanding how these requests are staged, often timed for when the executive is travelling, makes the correct response automatic: verify through a known channel, every time.

                ## Milestones
                1. The common patterns of executive impersonation written down: secrecy, urgency, a new payee and a reason not to call.
                2. The executive team's agreed channel for verifying any payment request.
                3. A practice scenario run with assistants and the payments team.
                4. Each participant able to describe the verification step without prompting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Assistants and payment staff have completed a practice scenario and can each describe the agreed verification channel for senior payment requests."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the patterns that mark an executive impersonation request"
                - "Agree with the leadership team how any payment request from them will be verified"
                - "Run a practice scenario with assistants and payment staff"
                - "Record who took part and what they would do differently"
            - name: Spotting altered and fake invoices
              description: |-
                ## Purpose
                Fake invoices range from crude demands for directory listings and domain renewals to near-perfect copies of a real supplier's invoice with only the bank details edited. Learning what to compare, such as the invoice number sequence, the account details against the supplier file, the logo and layout against a past invoice, and whether a purchase order exists, makes the edited one stand out.

                ## Milestones
                1. A side-by-side comparison of a genuine invoice and a known fake used as a teaching example.
                2. A five-point invoice check written for anyone processing bills.
                3. Common fake invoice types, such as listings, renewals and unsolicited services, listed.
                4. The check used on a month of invoices with any oddities recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-point invoice authenticity check is written and has been applied to one month of incoming bills with findings recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect one known fake invoice and one genuine invoice from the same supplier type"
                - "Write a five-point check covering numbering, bank details, layout, order and sender"
                - "List the fake invoice types the business has received before"
                - "Apply the check to a month of invoices and note anything odd"
            - name: Overpayment, refund and fake remittance scams
              description: |-
                ## Purpose
                Overpayment scams target the money coming in: a customer pays too much, often by a payment that will later bounce or be reversed, then asks for the difference back to a different account. Knowing how these scams and fake remittance emails work stops the team sending real money back against funds that were never really there.

                ## Milestones
                1. The main inbound scam patterns written down: overpayment, refund to a new account and fake remittance advice.
                2. A rule that refunds go only to the original payment method or a verified account.
                3. A rule that no refund is made until the original payment has cleared and cannot be reversed.
                4. The customer service and finance teams briefed on both rules.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written refund rules covering original payment method and cleared funds are in place and both finance and customer service have been briefed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a short description of overpayment and fake remittance scams"
                - "Set the rule that refunds go only to the original payment method"
                - "Set the rule that no refund is made before the original payment has cleared"
                - "Brief customer service and finance on the two refund rules"
            - name: How payment recall and fraud reporting work
              description: |-
                ## Purpose
                Speed matters after a fraudulent payment, but so does knowing what the bank can and cannot do: how recall requests travel between banks, what information they need, how long they take and when the police or a national reporting service should be told. Learning this before an incident means the team asks the right questions under pressure.

                ## Milestones
                1. Notes from a conversation with the bank's fraud team on how they handle a recall.
                2. The information a recall needs listed: amount, date, receiving account and reference.
                3. The national route for reporting payment fraud in your country noted.
                4. The emergency card updated with anything learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes explain the bank's recall process and the national reporting route, and the emergency card reflects them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the bank's fraud team to explain how they handle a business payment recall"
                - "List the details a recall request needs"
                - "Find the national service for reporting business payment fraud"
                - "Update the emergency card with what you learned"
            - name: Phone pretexting against finance staff
              description: |-
                ## Purpose
                Not every attack starts by email. A friendly caller claiming to be from the bank, an auditor or a supplier's credit control can collect payment dates, supplier lists, the names of approvers or even a one-time code, then use them in a far more convincing email next week. Learning the common scripts and a polite refusal protects information that seems harmless.

                ## Milestones
                1. Three common pretext call scripts written down with the information they seek.
                2. A list of information that is never given out by phone, including codes and supplier bank details.
                3. A polite refusal and call-back line agreed for the team.
                4. A role-play run with everyone who answers the finance phone.

                ## Notes
                Banks will never ask for a one-time passcode on a call they started. If someone does, it is fraud.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Everyone who answers the finance phone has done a pretext role-play and can recite the never-share list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down three pretext call scripts the team might hear"
                - "Agree the list of information never given out by phone"
                - "Agree a polite refusal and call-back line"
                - "Role-play two pretext calls with the people who answer the finance phone"
            - name: Screening online orders for stolen card fraud
              description: |-
                ## Purpose
                Orders placed with stolen cards look like sales until the chargeback arrives weeks later, taking the goods, the money and a fee. For a business selling online, learning the warning signs, such as mismatched billing and delivery countries, many cards tried in a row and rush delivery of resaleable goods, and using the payment provider's fraud tools, cuts losses before goods are shipped.

                ## Milestones
                1. The payment provider's fraud screening settings reviewed and written down.
                2. A list of warning signs for manual review of high-risk orders.
                3. A rule for which orders are held for review before dispatch.
                4. A month of held orders recorded with the outcome of each.

                ## Notes
                Ask your payment provider which fraud rules are already on by default. Many offer address and security code checks that need only switching on.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Payment provider fraud settings are documented, a hold-for-review rule is in use and a month of held orders has recorded outcomes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Open the payment provider's fraud settings and note what is switched on"
                - "Write the warning signs that send an order for manual review"
                - "Agree which orders are held before dispatch"
                - "Record the outcome of every held order for a month"
            - name: Choosing a payee account verification service
              description: |-
                ## Purpose
                Checking that an account belongs to the named supplier, before paying it, is the strongest technical defence against redirected payments. Services that do this range from the bank's own payee name check to account validation tools built into payment platforms, and comparing two or three against cost, coverage of the countries you pay and fit with your accounting system leads to a sound choice.

                ## Milestones
                1. The countries and currencies you pay suppliers in listed.
                2. Two or three verification options shortlisted, including what your bank already provides.
                3. Each option scored on coverage, cost, ease of use and fit with your systems.
                4. A decision recorded, with the start date or the reason for not buying.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on payee account verification compares at least two options against coverage, cost and system fit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the countries and currencies the business pays suppliers in"
                - "Ask the bank what payee verification it already includes"
                - "Shortlist two other account verification services and request pricing"
                - "Score the options and record the decision"
            - name: Crime and social engineering insurance decision
              description: |-
                ## Purpose
                Standard business and cyber policies often exclude a payment the business itself authorised after being tricked, which is exactly how most payment fraud happens. Finding out what current policies cover, what a crime or social engineering extension would add and what controls the insurer requires lets the owner decide with real numbers rather than assumptions.

                ## Milestones
                1. Current policy wording checked for cover of authorised push payment and social engineering losses.
                2. A quote obtained for crime or social engineering cover through the broker.
                3. The insurer's required controls, such as callback verification, compared with what you do.
                4. A decision recorded with the limit chosen or the reason for declining.

                ## Notes
                Insurers often refuse claims where the required callback was not done, so the callback record is part of the cover.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on crime or social engineering cover is recorded, based on current policy wording and at least one quote."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the broker whether current policies cover payments made after being tricked"
                - "Request a quote for crime or social engineering cover"
                - "Compare the insurer's required controls with your current procedure"
                - "Record the decision and any cover limit chosen"
            - name: Telling customers how to verify your bank details
              description: |-
                ## Purpose
                Your customers can be targeted too: a fraudster who has taken over your mailbox, or registered a lookalike domain, can send them your invoice with new bank details. A clear standing statement on every invoice and statement that your bank details will never change by email, and a number to call to check, protects their money and your receivables.

                ## Milestones
                1. A one-sentence bank details warning agreed for invoices, statements and email signatures.
                2. The warning added to every invoice template and to the payment page on your website.
                3. A named person and phone number for customers to check details.
                4. A process for warning customers quickly if your mailbox is ever compromised.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every invoice template and statement carries a bank details warning with a verification number, and a customer alert process is written."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-sentence warning that your bank details never change by email"
                - "Add the warning to every invoice and statement template"
                - "Name the person customers can phone to check your details"
                - "Repeat the bank details warning in a yearly letter to customers @recurring(yearly)"
            - name: Taking payment approvals out of email and chat
              description: |-
                ## Purpose
                Approvals that live in email threads and chat messages are exactly what a fraudster can fake, forward or insert. Moving payment approvals into the accounting system, the banking platform or a workflow tool where the approver logs in and the trail cannot be edited removes a whole class of forged authority.

                ## Milestones
                1. Every place payments are currently approved listed, including email and messaging apps.
                2. A single approval route chosen inside a system that needs a personal login.
                3. Approval in email or chat formally withdrawn as valid authority.
                4. A month of payments approved only through the chosen route.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "For a full month, every payment approval is recorded in a system requiring personal login, with no approvals by email or chat."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every channel where payments are approved today"
                - "Choose the system where all approvals will be recorded"
                - "Announce that approvals by email or chat are no longer valid"
                - "Check a month of payments for any approval outside the chosen system"
            - name: Finance mailbox takeover protection
              description: |-
                ## Purpose
                Finance mailboxes are prime targets because whoever controls one can read live supplier threads and reply inside them. Multi-factor sign-in, alerts for new forwarding and inbox rules, and a ban on sharing mailbox passwords make it far harder for a criminal to sit silently in your accounts inbox for weeks.

                ## Milestones
                1. Multi-factor sign-in confirmed on every finance and accounts mailbox, including shared ones.
                2. Alerts set for new forwarding rules and sign-ins from unusual locations.
                3. Existing inbox rules on finance mailboxes reviewed and unexplained ones removed.
                4. A monthly check of forwarding and inbox rules running.

                ## Notes
                Hidden rules that move emails containing words like invoice or payment to an obscure folder are a classic sign of takeover. Ask IT to show you what to look for.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every finance mailbox has multi-factor sign-in and forwarding alerts, and six monthly rule checks are recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask IT to confirm multi-factor sign-in on every finance mailbox"
                - "Review existing inbox and forwarding rules on finance mailboxes with IT"
                - "Ask IT to alert finance to new forwarding rules on accounts mailboxes"
                - "Check finance mailboxes for new forwarding and inbox rules @recurring(monthly:20)"
            - name: Cooling-off period for new and changed payees
              description: |-
                ## Purpose
                New payees and newly changed bank details carry most of the risk, and fraud depends on urgency. A rule that the first payment to a new or changed account waits a set period, perhaps 48 hours, or is limited to a small test amount confirmed by the supplier, takes away the pressure fraudsters rely on.

                ## Milestones
                1. A cooling-off period or test payment rule chosen and written down.
                2. Exceptions defined, with who can approve them and what evidence they need.
                3. The rule configured in the banking platform where it supports payee delays.
                4. Key suppliers told about the rule so it does not surprise them.

                ## Notes
                A small test payment proves the account accepts money, not who owns it. Only use it alongside the callback, never instead of it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cooling-off or test payment rule is in force with defined exceptions, and the last three new payees followed it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide between a waiting period and a confirmed test payment for new payees"
                - "Define who may approve an exception and what evidence they need"
                - "Ask the bank whether the platform can delay payments to new payees"
                - "Tell the ten largest suppliers about the rule"
            - name: Ban on gift card, crypto and voucher payments
              description: |-
                ## Purpose
                Gift cards, cryptocurrency and prepaid vouchers are the favourite payment method of scammers because they are fast and almost impossible to reverse. A short policy that the business never pays anyone this way, with a narrow process for any genuine exception, gives staff a simple reason to refuse the classic boss-needs-gift-cards request.

                ## Milestones
                1. A policy line stating the business never pays by gift card, crypto or voucher.
                2. A named exception process for genuine staff rewards bought through normal purchasing.
                3. Company cards restricted from gift card and crypto merchants where the card provider allows.
                4. The rule added to the one-page payment fraud rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written ban on gift card, crypto and voucher payments is in the staff rules and company card restrictions are applied where available."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a policy line banning payment by gift card, crypto or voucher"
                - "Define how genuine staff reward vouchers are bought instead"
                - "Ask the card provider to block gift card and crypto merchants"
                - "Add the ban to the one-page staff fraud rules"
            - name: Verifying tax authority and official payment demands
              description: |-
                ## Purpose
                Tax and regulatory bodies are popular disguises: a letter, email or call demands immediate payment of a fine or arrears to an unfamiliar account under threat of legal action. Knowing how your real tax authority and regulators contact you, and checking every demand through their official portal or published number, means real liabilities are paid and fake ones are reported.

                ## Milestones
                1. The official channels each tax authority and regulator uses written down.
                2. Every official payment account the business pays recorded from the authority's own website.
                3. A rule that any demand is checked through the official portal or published number before paying.
                4. Fake demands received forwarded to the authority's reporting address.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of official payment channels and accounts is held for every tax authority and regulator, and every demand in the last six months was checked against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every tax authority and regulator the business pays"
                - "Record each one's official payment account from its own website"
                - "Write the rule for checking any demand through the official portal"
                - "Find each authority's address for reporting fake demands"
            - name: Tabletop exercise on a paid fake bank change
              description: |-
                ## Purpose
                Procedures on paper often fail on contact: nobody knows who has authority to call the bank at 6pm, or the fraud line number is out of date. A 90-minute tabletop exercise where the team walks through a realistic scenario, a large supplier payment sent to a fraudster's account two hours ago, finds those gaps when they cost nothing.

                ## Milestones
                1. A realistic scenario written with three twists, such as the payment going out on a Friday evening.
                2. The exercise held with finance, the owner or a director, IT and whoever handles communications.
                3. Gaps in the emergency card, contacts and authority listed during the session.
                4. Each gap assigned an owner and date afterwards.

                ## Notes
                Start from the **Meeting notes** template to capture the decisions and gaps as they come up.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop exercise has been held with finance, leadership and IT, and every gap it found has a named owner and date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a fake bank change scenario with three twists"
                - "Book 90 minutes with finance, a director, IT and communications"
                - "Run the exercise and record each gap as it appears"
                - "Assign an owner and date to every gap found"
            - name: Holiday period fraud alert
              description: |-
                ## Purpose
                Holidays and year-end are when fraudsters strike, because approvers are away, cover staff are unfamiliar with suppliers and everyone wants to clear the backlog before the break. A short alert to the team before each major holiday, with cover named and the rules restated, closes the window criminals are waiting for.

                ## Milestones
                1. Cover for approvers, releasers and the daily bank check named before each break.
                2. Cover staff walked through the callback procedure and the emergency card.
                3. A reminder sent to the team restating that no rules are relaxed over the holiday.
                4. Payment runs either side of the break scheduled and published.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each major holiday, named cover is briefed and a reminder of the payment fraud rules has gone to the whole team."
                cadence: cyclic
              tasks:
                - "Name cover for each approver and releaser over the next holiday"
                - "Walk the cover staff through the callback procedure"
                - "Send the pre-holiday payment fraud reminder to the team @recurring(yearly)"
                - "Publish the payment run dates either side of the break"
            - name: First 72 hours after a fraudulent payment
              description: |-
                ## Purpose
                Money paid to a fraudster can sometimes be frozen and returned, but only if the bank, the receiving bank and the police are told quickly and the evidence is kept intact. A worked plan for the first 72 hours, from the recall call to preserving emails and telling the real supplier, keeps the response orderly when people are shocked and embarrassed.

                ## Milestones
                1. A recall request logged with the bank, with the reference and time recorded.
                2. The fraud reported to the police or national fraud service, with a crime reference.
                3. The emails, invoices and logs preserved without being deleted or forwarded around.
                4. The real supplier contacted on a verified number and the true debt confirmed.
                5. Insurers and, where needed, the board or owners informed in writing.

                ## Notes
                Do not reply to the fraudster or warn them. Leave the compromised thread untouched for IT and investigators.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written 72-hour response plan exists, and any incident handled under it has a recall reference, a crime reference and preserved evidence."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the 72-hour response plan in time order with named owners"
                - "List the evidence to preserve and who keeps it"
                - "Add the insurer's claim notification number to the plan"
                - "Share the plan with everyone named in it"
            - name: Post-incident review and control fixes
              description: |-
                ## Purpose
                After a fraud or a near miss, the useful question is not who was fooled but which control was missing, skipped or too easy to get round. A blameless review within two weeks, leading to a short list of fixed controls with owners, makes sure the same trick does not work twice.

                ## Milestones
                1. A timeline of the incident from first contact to discovery written within two weeks.
                2. The control that should have stopped it identified, and why it did not.
                3. No more than five fixes agreed, each with an owner and date.
                4. Every fix confirmed in place within three months.

                ## Notes
                Start from the **Remediation plan** template. Keep the review blameless: staff who fear blame hide the next near miss.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A blameless post-incident review with a timeline and up to five dated fixes is written, and every fix is confirmed in place within three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the incident timeline from first contact to discovery"
                - "Identify the control that should have stopped it and why it did not"
                - "Agree up to five fixes with owners and dates"
                - "Confirm each fix is in place and close the plan"
            - name: Handling a supplier who reports a hacked mailbox
              description: |-
                ## Purpose
                Suppliers increasingly warn customers that their email was compromised, often after fraudulent invoices have already gone out. Treating that warning as an event, by freezing their payee record, checking recent invoices and changes and confirming the true balance by phone, stops a second wave of fake requests reaching your payment run.

                ## Milestones
                1. The supplier's payee record put on hold the day the warning arrives.
                2. All invoices and bank detail changes from that supplier in the last 90 days checked.
                3. The true outstanding balance and bank details confirmed on a verified number.
                4. The payee hold lifted only after a second person reviews the checks.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "For any supplier reporting a compromise, a hold, a 90-day check and a verified balance confirmation are recorded before payments resume."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put the supplier's payee record on hold in the accounting system"
                - "Pull every invoice and bank change from that supplier in the last 90 days"
                - "Call the supplier on a verified number to confirm the balance and bank details"
                - "Have a second person review the checks before lifting the hold"
            - name: Fraud safeguards during a change of bank or system
              description: |-
                ## Purpose
                Switching bank, moving to a new accounting system or changing payment provider creates confusion that fraudsters exploit, because a letter saying we have changed bank is suddenly plausible in both directions. Planning the safeguards for the switch, including how you announce your own new details and how you migrate supplier bank data intact, keeps the change from becoming an opening.

                ## Milestones
                1. Supplier bank details exported, migrated and reconciled line by line to the old system.
                2. Banking users, limits and dual authorisation rebuilt on the new platform before go-live.
                3. Customers told about your new details through a verified channel with a call-back number.
                4. The weekly bank change review run on the new system from its first week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Supplier bank data is reconciled after migration, controls are live on the new platform at go-live, and customers were told of new details through a verified channel."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export supplier bank details before the migration and keep a locked copy"
                - "Reconcile migrated supplier bank details to the locked copy line by line"
                - "Rebuild banking users, limits and dual authorisation before go-live"
                - "Announce your new bank details with a verification phone number"
            - name: Fraud defences for an owner and one bookkeeper
              description: |-
                ## Purpose
                Owner-run businesses with a part-time bookkeeper rarely have enough people for textbook segregation of duties, and they are targeted precisely because of it. A pared-back set of defences, where the bookkeeper prepares, the owner releases from the banking app after a callback for any new payee, and the owner reads the bank statement every month, covers most of the risk in an hour a week.

                ## Milestones
                1. The bookkeeper set up to prepare payments and the owner to release them.
                2. A rule that the owner calls any new or changed payee before releasing.
                3. Bank alerts for new payees going to the owner's phone.
                4. The owner reading every line of the monthly bank statement for three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The bookkeeper prepares and the owner releases every payment, and three monthly statement reviews by the owner are recorded."
                cadence: rolling
              tasks:
                - "Ask the bank to give the bookkeeper prepare-only access"
                - "Turn on new payee alerts to the owner's phone"
                - "Read every line of the month's bank statement and query anything unfamiliar @recurring(monthly:28)"
            - name: Verification rules for a remote finance team
              description: |-
                ## Purpose
                Remote and hybrid teams cannot lean across a desk to ask whether the finance director really sent that message, and fraudsters know it. Agreeing a verification channel that does not depend on email, such as a call to a known number or a message in a separate authenticated tool, and a code word for genuinely urgent requests, gives a distributed team the same instinctive check an office has.

                ## Milestones
                1. A verification channel for payment requests agreed that is separate from email.
                2. A rule that any request to change the verification channel is itself verified in person or by video.
                3. The rules added to onboarding for every new remote finance team member.
                4. A spot test of the verification rule run with the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written verification rule for remote payment requests is in onboarding and a spot test shows every team member used it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the separate channel used to verify any payment request"
                - "Decide how a change of verification channel is itself confirmed"
                - "Add the verification rules to remote finance onboarding"
                - "Run a spot test with a harmless request and see who verifies it"
            - name: Payment rules while the owner or CEO is away
              description: |-
                ## Purpose
                Impersonating a senior person works best when they are on a plane, at a conference or on holiday and cannot be reached to deny the request. Agreeing before each trip who approves what in their absence, and telling the team that the traveller will never ask for an unscheduled payment, removes the scenario fraudsters build their story around.

                ## Milestones
                1. A standing rule that travelling executives do not request unscheduled payments.
                2. A named deputy approver with limits for each senior person's absence.
                3. Out-of-office messages that do not reveal travel details or return dates to outsiders.
                4. The team told who the deputy is before each trip.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written absence rule with named deputies is in place, and the team was told the deputy before each senior trip in the last quarter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree with leadership that no unscheduled payment is requested while travelling"
                - "Name a deputy approver and limits for each senior person"
                - "Rewrite out-of-office messages so they do not reveal travel or return dates"
                - "Tell the payments team who the deputy is before each trip"
            - name: Fraud controls with an outsourced bookkeeper or bureau
              description: |-
                ## Purpose
                Handing payments to an outside bookkeeper or payment bureau moves the work but not the loss, which still lands on your business. Agreeing in writing how the provider verifies bank changes, who releases payments and how quickly they report a suspicious request, and reviewing their payment log monthly, keeps the controls yours even when the clicks are theirs.

                ## Milestones
                1. The provider's bank change verification process written into the engagement.
                2. Payment release kept with the business or a named second approver.
                3. A reporting time agreed for any suspicious request the provider receives.
                4. A monthly review of the provider's payment and bank change log.

                ## Notes
                Ask who carries the loss if the provider pays a fraudster after skipping its own procedure, and get the answer in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The engagement letter sets out the provider's verification and reporting duties, and six monthly log reviews are recorded."
                cadence: rolling
              tasks:
                - "Ask the provider to describe how they verify supplier bank changes"
                - "Write their verification and reporting duties into the engagement"
                - "Agree who releases payments and who is the second approver"
                - "Review the provider's payment and bank change log @recurring(monthly:6)"
            - name: New finance manager's first 30 days on fraud exposure
              description: |-
                ## Purpose
                Joining as a finance manager or controller means inheriting payment controls you did not design and cannot yet vouch for. A focused first month, mapping payment routes, checking who has banking access, reading the last six months of bank changes and asking about past incidents, gives you a fact-based view to present before anything goes wrong on your watch.

                ## Milestones
                1. The payment route map and banking user list reviewed or created.
                2. Six months of supplier bank changes sampled against callback evidence.
                3. Past incidents and near misses gathered from the team and the bank.
                4. A one-page findings note with the top three actions shared with your manager.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Within 30 days of starting, a one-page fraud exposure note with three prioritised actions is shared with your manager."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask for the banking user list and payment limits in your first week"
                - "Sample ten supplier bank changes from the last six months for callback evidence"
                - "Ask the team and the bank about past incidents and near misses"
                - "Write a one-page note with the top three actions for your manager"
            - name: Group payment fraud standard across entities
              description: |-
                ## Purpose
                Groups with several companies, regions or a shared service centre often find each entity runs its own version of the callback rule, or none at all. A short group standard with minimum controls for bank changes, release, banking access and incident reporting, and a quarterly attestation from each entity, gives the group finance director an honest picture of where the gaps are.

                ## Milestones
                1. A group standard of no more than ten minimum controls approved by group finance.
                2. Each entity's current practice compared against the standard.
                3. Entity gaps listed with owners and dates.
                4. Quarterly attestations from every entity collected and summarised.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A group payment fraud standard is approved and every entity has submitted at least two quarterly attestations against it."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the agent to draft ten minimum payment fraud controls for group review"
                - "Compare each entity's practice against the draft standard"
                - "Agree owners and dates for each entity's gaps"
                - "Collect and summarise entity payment fraud attestations @recurring(quarterly)"
            - name: Beneficiary anomaly rules on payment data
              description: |-
                ## Purpose
                Rules run over payment and master data catch what a busy reviewer misses: the same bank account on two suppliers, a supplier account that matches an employee's, a payee changed and paid within a day, or a payment just under an approval limit. A small set of monthly queries, tuned to keep false alarms low, gives larger finance teams an early warning on both external and insider fraud.

                ## Milestones
                1. Five anomaly rules defined with the data fields each needs.
                2. The rules run on twelve months of historic data and every hit explained.
                3. Thresholds tuned so the monthly hit list is short enough to clear.
                4. A monthly run with each hit cleared or escalated.

                ## Notes
                Comparing supplier and employee bank accounts needs care with personal data; agree access and retention with HR and your data protection lead first.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five anomaly rules run monthly on payment and master data, and every hit for three months is recorded as cleared or escalated."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write five anomaly rules with the data fields each one needs"
                - "Run the rules on twelve months of payment data and explain every hit"
                - "Tune the thresholds so the monthly hit list stays short"
                - "Run the beneficiary anomaly rules and clear or escalate each hit @recurring(monthly:12)"
            - name: Payment file integrity from ERP to bank
              description: |-
                ## Purpose
                Payment files exported from an ERP and uploaded to the bank can be edited in the gap between the two, by an insider or by malware on the uploader's computer. Automated host-to-host transfer, or at least file hashing and a total check between the approved run and what the bank received, closes a gap that manual controls never see.

                ## Milestones
                1. The current path of payment files from approval to the bank drawn, with every point a person or folder touches them.
                2. Manual editing points removed or protected by restricted access.
                3. A control comparing approved run totals and line counts with the bank's confirmation.
                4. A decision recorded on host-to-host connection or file signing with the bank.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The payment file path is documented, a total and count check runs on every file, and a decision on host-to-host or signing is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw how payment files travel from approval to the bank"
                - "Restrict access to the folders where payment files sit"
                - "Compare approved run totals and line counts with the bank's confirmation"
                - "Ask the bank about host-to-host transfer or file signing options"
            - name: Deepfake voice and video request protocol
              description: |-
                ## Purpose
                Cloned voices and live video deepfakes of executives have already been used to talk finance staff into very large transfers, and a familiar voice on the phone is no longer proof of anything. A protocol that treats voice and video as unverified for payment purposes, with call-back to a known number and a pre-agreed challenge, keeps the callback rule from being defeated by technology.

                ## Milestones
                1. A written rule that a voice or video call alone never authorises a new payment.
                2. A challenge method agreed with executives, such as a call-back on a known number or a shared question.
                3. Payment staff shown a short example of a voice deepfake so the risk feels real.
                4. The protocol added to the one-page fraud rules and the next briefing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A deepfake protocol with a challenge method is written into the fraud rules and every payment releaser has been briefed on it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the rule that voice or video alone never authorises a new payment"
                - "Agree a challenge method with each executive who could be impersonated"
                - "Show the payments team a short example of a cloned voice"
                - "Add the protocol to the one-page staff fraud rules"
            - name: Phishing simulation programme for payment staff
              description: |-
                ## Purpose
                Phishing simulations show who would click, reply or pay before a real criminal finds out. A programme aimed at finance and assistants, using fake supplier bank changes and fake executive requests rather than generic password lures, measures how well the controls hold up in practice and where coaching is needed.

                ## Milestones
                1. Simulation scenarios written around payment fraud, agreed with IT and HR.
                2. A baseline simulation sent and the report, reply and click rates recorded.
                3. Short coaching given to anyone who fell for it, without public naming.
                4. A quarterly simulation run with rates tracked over a year.

                ## Notes
                Agree the rules with HR first so simulations are used for coaching, not discipline; otherwise reporting rates fall.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly payment-themed simulations are run in a year, with report and reply rates tracked against the baseline."
                cadence: rolling
              tasks:
                - "Agree with IT and HR how payment phishing simulations will be used"
                - "Write two scenarios using a fake bank change and a fake executive request"
                - "Send a payment-themed phishing simulation and record the report rate @recurring(quarterly)"
                - "Give private coaching to anyone who replied or clicked"
---

# Payment Fraud Prevention

This area is for owners, finance managers and payment teams who move money out of the business and want to stop it going to criminals instead of suppliers. It starts with the foundations (a map of how money leaves, a fraud risk register, a callback procedure for changed bank details, locked-down banking access and an emergency card for the first hour), then the routines that catch bad payees before release, the skills to recognise invoice redirection, executive impersonation and altered documents, a set of improvements and decisions, dated events from a tabletop exercise to a live incident, variants for an owner-run business, a remote team or a group, and finally specialist work on payment analytics, file integrity and deepfake requests.

What repeats is a weekly look at changed bank details and new payees before each payment run, a daily glance at bank alerts, monthly checks of banking users, mailbox rules and lookalike domains, quarterly staff briefings and phishing tests, and a yearly review of the whole set of controls. The Risk register, Operational checklist, Purchase decision, Meeting notes and Remediation plan templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
