---
id: wealth-investing.lost-pension-tracing
name: Lost Pension Tracing
description: "A work and address timeline, free official tracing searches, a log of every lead chased to an answer, and a register of found pensions and accounts kept current so nothing goes missing again."
category: personal
version: 1.0.0
tags: [wealth-investing, lost-pension-tracing, everyone, pension-tracing, unclaimed-assets, old-employers, executor]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - operational-checklist
    - person
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Lost Pension Tracing
          description: "Tracking down forgotten pensions and investment accounts from old jobs, previous addresses and closed providers."
          projects:
            - name: Work and address history timeline
              description: |-
                ## Purpose
                Every lost pension starts as a gap in memory: a summer job, a two-year contract, a flat you rented for eighteen months. A single timeline of every employer and every address since you first worked gives each tracing request the dates and postcodes providers ask for, and shows at a glance where a pension might be hiding.

                ## Milestones
                1. Every employer listed with approximate start and end dates, job title and site address.
                2. Every home address since leaving school listed with the years you lived there.
                3. Each job marked as likely, possible or unlikely to have had a pension or savings plan.
                4. Gaps longer than three months flagged for checking against tax records.

                ## Notes
                Rough dates are fine to start. Providers search by name, date of birth and identity number first; dates only narrow the match.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timeline covering every job and home address from first employment to today, with each job rated for pension likelihood."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every employer you can remember in date order, rough years are fine"
                - "Add every home address since leaving school beside the jobs"
                - "Mark each job as likely, possible or unlikely to have had a pension"
                - "Add any new job or home address to the timeline @recurring(yearly)"
            - name: Identity numbers and former names sheet
              description: |-
                ## Purpose
                Pension providers match records on your national insurance, social security or tax number, your date of birth and the name you used at the time. Having every number and former name on one sheet stops a search failing because a record sits under a maiden name or an old tax reference.

                ## Milestones
                1. Your national identity or social security number for each country you worked in written down.
                2. Every name you have used, with the dates you used it, listed.
                3. Old staff or payroll numbers you can find recorded beside the employer.
                4. The sheet stored in the tracing folder, not in an email draft or an unlocked file.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One sheet holding every identity number, former name and known staff number, stored securely in the tracing folder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down your national insurance, social security or tax number"
                - "List every name you have used with the years you used it"
                - "Add any staff or payroll numbers from old payslips or contracts"
                - "Store the sheet in the locked part of your tracing folder"
            - name: Loft and filing cabinet sweep for pension clues
              description: |-
                ## Purpose
                Old welcome packs, annual benefit statements, year-end tax certificates and leaving letters often carry the one detail a tracing service needs: a scheme name, a policy number or a provider logo. A single focused afternoon with the boxes in the loft usually turns up more leads than a month of online searching.

                ## Milestones
                1. Every box, drawer and folder of old financial paper opened and sorted.
                2. All documents mentioning a pension, plan, policy, fund or share scheme set aside.
                3. Scheme names, policy numbers and provider names copied into the tracing log.
                4. Originals kept in the tracing folder and the rest of the pile shredded or refiled.

                ## Notes
                Keep the original of anything with a policy or member number, even if it looks out of date. Providers often ask for a copy.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "All old financial paperwork searched, with every scheme name or policy number found entered as a lead in the tracing log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather every box and folder of old financial paperwork in one room"
                - "Pull out anything mentioning a pension, plan, policy, fund or shares"
                - "Copy each scheme name and policy number into the tracing log"
                - "File the originals in the tracing folder"
            - name: Old bank statement search for savings direct debits
              description: |-
                ## Purpose
                Personal pensions, savings plans and endowments were usually paid by direct debit, and the payee name on a bank statement is often the only surviving record. Searching old statements, and asking your bank for archived ones, turns forgotten monthly payments into named providers you can write to.

                ## Milestones
                1. Online banking searched as far back as it goes for regular payments to insurers, fund managers and pension firms.
                2. Archived statements requested from the bank for any years you cannot see online.
                3. Each payee that looks like a savings or pension plan added to the tracing log.
                4. Payment start and end dates noted for every lead.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Statements for every bank account you have held checked for regular payments to providers, with each lead in the log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search online banking for regular payments to insurers and fund firms"
                - "Ask each bank how far back it can supply archived statements"
                - "Add each likely provider payee to the tracing log with dates"
                - "List the bank accounts you have closed so they can be checked too"
            - name: Employment history request from the tax authority
              description: |-
                ## Purpose
                Memory leaves out short jobs, agency spells and employers that paid you under a trading name. Your tax authority or social security agency holds a record of who paid you each year, and requesting that list fills the gaps in your timeline with names that came from payroll, not recollection.

                ## Milestones
                1. The right way to request your employment or earnings history found on the official website.
                2. The request made through your online tax account or in writing.
                3. The returned list compared line by line with your timeline.
                4. Every employer missing from your timeline added as a new lead.

                ## Notes
                In the UK this is the employment history in your personal tax account; in the US an earnings statement from the Social Security Administration lists employers. Use the official site only; there is no fee.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An official employment or earnings history received and reconciled with your timeline, with every missing employer added as a lead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find how to request your employment history on the tax authority site"
                - "Sign in to your online tax account or post the written request"
                - "Compare the returned list with your work timeline line by line"
                - "Add every employer you had forgotten to the tracing log"
            - name: Lost pension tracing log
              description: |-
                ## Purpose
                Tracing involves dozens of letters, emails and phone calls that each take weeks to answer, and without a log the same lead gets chased twice while another quietly dies. One row per lead, with the date asked, the reference given and the next step, keeps the whole search moving and shows which answers are overdue.

                ## Milestones
                1. A log with columns for lead, source, contact, date asked, reference, reply and next step.
                2. Every lead from the timeline, paperwork sweep and bank search entered.
                3. Each lead given a status of open, waiting, found or closed with no record.
                4. The log saved where you will open it every week.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracing log holding every known lead with a status, a contact and a next step for each open one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a spreadsheet with lead, contact, date asked, reference and status"
                - "Enter every lead from your timeline and paperwork sweep"
                - "Give each lead a status of open, waiting, found or closed"
                - "Write a next step for every lead that is still open"
            - name: Search of the national pension tracing service
              description: |-
                ## Purpose
                Most countries with workplace pensions run a free official service that turns an employer or scheme name into current contact details for whoever runs it now. Running every employer on your timeline through it is the single fastest way to turn old names into addresses you can write to.

                ## Milestones
                1. The official tracing service for each country you worked in identified.
                2. Every employer and scheme name from the log searched.
                3. Contact details returned for each match copied into the log.
                4. Employers with no match flagged for company record searches.

                ## Notes
                Examples are the UK Pension Tracing Service and the US Department of Labor's Retirement Savings Lost and Found database. These services give contact details only; they do not tell you whether you are a member.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every employer and scheme on the timeline searched on the official tracing service, with results or no-match recorded in the log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the official free pension tracing service for your country"
                - "Search each employer name, including former and trading names"
                - "Copy the scheme contact details returned into the tracing log"
                - "Flag employers with no match for a company records search"
            - name: Unclaimed assets and dormant accounts search
              description: |-
                ## Purpose
                Pensions are not the only money that goes missing. Dormant bank and building society accounts, savings bonds, unit trusts and brokerage accounts can be passed to an official unclaimed assets scheme after years of silence. A search under every name and old address takes an evening and occasionally finds money nobody remembered.

                ## Milestones
                1. The official unclaimed assets or dormant accounts schemes for each country and region you lived in identified.
                2. A search run under every name and old address on your timeline.
                3. Every possible match claimed or logged with its claim reference.
                4. National savings bonds or premium bonds from childhood checked with the issuing body.

                ## Notes
                Use only the official schemes and registers, such as state unclaimed property programmes in the US or the bank account tracing service in the UK. Searching is free.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Official unclaimed asset registers searched under every name and old address, with each match claimed or logged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the official unclaimed asset schemes for each place you lived"
                - "Search each scheme under every name and old address"
                - "Start a claim for any match and note the claim reference"
                - "Check old government savings bonds with the issuing body"
            - name: Secure folder for tracing evidence
              description: |-
                ## Purpose
                Tracing gathers copies of passports, birth and marriage certificates, payslips and provider letters, which is exactly the bundle a fraudster wants. One folder, part paper and part encrypted digital, keeps the evidence together for claims and away from shared drives and email attachments.

                ## Milestones
                1. A paper folder with sections for identity, each employer and each provider.
                2. A matching encrypted or password-protected digital folder.
                3. Scans of identity documents and key letters filed in both.
                4. Someone you trust told where the folder is.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A paper and encrypted digital folder exist holding identity documents and every tracing letter, sorted by employer or provider."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a paper folder with a section for each employer and provider"
                - "Create a matching encrypted folder for scans"
                - "Scan identity documents and the most important provider letters"
                - "File new tracing letters and replies in both folders @recurring(monthly:26)"
            - name: Standard tracing letter to providers and employers
              description: |-
                ## Purpose
                Providers can only search when they have your full name, former names, date of birth, identity number, addresses and dates of employment, and a letter missing any of them comes back asking for more. A standard letter with every field ready cuts each request to ten minutes and halves the back and forth.

                ## Milestones
                1. A letter and email version listing every detail a provider searches on.
                2. A clear request: confirm membership, current value or benefit, and the scheme's current address for you.
                3. A line asking for the reply in writing with a reference number.
                4. The letter used for the first three open leads.

                ## Notes
                Never send a full copy of your passport with a first enquiry. Send identity documents only when a provider you have verified asks for them.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable tracing letter covering every identifying detail, sent to at least three open leads."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a tracing letter from your identity sheet and timeline"
                - "Add a request for written confirmation and a reference number"
                - "Save a letter version and an email version in the tracing folder"
                - "Send the letter to the first three open leads in the log"
            - name: Weekly chase-up of open tracing requests
              description: |-
                ## Purpose
                Pension administrators often take four to eight weeks to answer and sometimes lose a request entirely. A short weekly pass through the open rows of the log, chasing anything past its expected reply date, is what turns a pile of letters into confirmed answers within a few months.

                ## Milestones
                1. Every open lead given an expected reply date.
                2. A weekly fifteen-minute check of the log running for at least two months.
                3. Each overdue request chased once by phone or email and the chase recorded.
                4. No request left more than eight weeks without a chase.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open request in the log has a reply or a chase dated within the last eight weeks."
                cadence: rolling
              tasks:
                - "Add an expected reply date to every open lead in the log"
                - "Check the log for overdue replies @recurring(weekly:tue)"
                - "Send a second request for anything unanswered after 30 days @recurring(monthly:3)"
                - "Record the date and method of every chase in the log"
            - name: Provider call notes with reference numbers
              description: |-
                ## Purpose
                Phone calls to pension administrators produce promises that vanish unless written down: a reference number, the name of the person, the date a letter will be sent. Keeping a short note of every call means the next call starts from where the last one ended instead of from security questions and a fresh queue.

                ## Milestones
                1. A call note layout with date, number called, person, reference and agreed next step.
                2. Every tracing call since the search began noted.
                3. Each agreed next step copied into the tracing log.
                4. A note made for every call within the same day.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every call to a provider or employer has a dated note with a reference number and next step, mirrored in the tracing log."
                cadence: rolling
              tasks:
                - "Set up a call note page from the meeting notes template"
                - "Write down the reference and the name of the person on every call"
                - "Copy the week's call outcomes into the tracing log @recurring(weekly:fri)"
                - "Ask for every promise made on a call to be confirmed in writing"
            - name: Monthly hour on new tracing leads
              description: |-
                ## Purpose
                Chasing open requests is not the same as opening new ones, and the slow leads, a company that changed its name twice or a scheme abroad, only move if someone sets aside time for them. One protected hour a month to start the next two or three leads keeps the search advancing without taking over evenings.

                ## Milestones
                1. A monthly hour booked in the calendar.
                2. The next two or three leads chosen at the end of each session.
                3. At least one new request sent in each session.
                4. Leads with no further routes marked closed with a reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A new tracing request is sent at least once a month until every lead in the log is found or closed with a reason."
                cadence: rolling
              tasks:
                - "Book a recurring hour in your calendar for tracing work"
                - "Work on the next new lead in the tracing log @recurring(monthly:12)"
                - "Pick the following session's leads before closing the log"
                - "Close any lead with no remaining routes and write the reason"
            - name: Register of every found pension and account
              description: |-
                ## Purpose
                Once a pension is found it needs to stay found. A register listing each account with provider, member number, type, rough value, contact details and the date of the last statement becomes the record your partner or executor will use, and the place you notice when one goes quiet again.

                ## Milestones
                1. A register row for every pension and investment account you now know about.
                2. Provider phone numbers, website and member numbers recorded for each.
                3. The date of the latest statement noted against each account.
                4. A copy of the register shared with your partner, executor or attorney.

                ## Notes
                Keep passwords out of the register. Note only where they are stored.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every known pension and investment account with member number, contact and last statement date, and a named person has a copy."
                cadence: rolling
              tasks:
                - "Create a register row for each pension and account found so far"
                - "Add member numbers, phone numbers and websites for each"
                - "Check every row still has a statement dated within the last year @recurring(quarterly)"
                - "Give a copy to your partner, executor or attorney"
            - name: Annual statement arrival check
              description: |-
                ## Purpose
                Most pensions go missing quietly: the yearly statement stops arriving and nobody notices for a decade. Ticking off each provider's statement as it comes in, and calling the same month any that do not, catches a lost address or a scheme transfer while it is still a five-minute fix.

                ## Milestones
                1. The usual statement month noted for every account in the register.
                2. A checklist of expected statements for the coming year.
                3. Each missing statement chased within a month of its usual date.
                4. A full year with every expected statement received or chased.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every account in the register has a statement received or chased within one month of its usual arrival date for a full year."
                cadence: cyclic
              tasks:
                - "Note the usual statement month for each account in the register"
                - "List the statements you expect over the next twelve months"
                - "Chase any statement more than a month late"
                - "Review the year's statement checklist and start the next one @recurring(yearly)"
            - name: Yearly re-search of tracing services and registers
              description: |-
                ## Purpose
                Tracing databases and unclaimed asset registers are updated as schemes merge, wind up or pass money over, so a search that found nothing last year may find something now. A yearly repeat of the official searches under every name takes an hour and is the cheapest insurance in this area.

                ## Milestones
                1. A yearly date set for repeating the searches.
                2. The national tracing service searched again for every unresolved employer.
                3. Unclaimed asset registers searched again under every name and old address.
                4. Any new result added to the log as a lead.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The official tracing service and unclaimed asset registers are searched again each year, with the date and result logged."
                cadence: cyclic
              tasks:
                - "Pick a yearly date and put it in your calendar"
                - "Search the tracing service again for unresolved employers @recurring(yearly)"
                - "Search unclaimed asset registers again under every name @recurring(yearly)"
                - "Add any new result to the tracing log as an open lead"
            - name: Online access set up for each found account
              description: |-
                ## Purpose
                Providers increasingly send statements by email or only post them to an online account, which means a pension found today can go quiet again if nobody logs in. Registering for each provider's portal, with the login kept in a password manager, makes every account checkable in minutes.

                ## Milestones
                1. Online registration completed for every provider that offers it.
                2. Logins stored in a password manager, with the register noting where.
                3. Paper statements kept for any provider without online access.
                4. Contact preferences set so statement emails reach an address you read.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every found account with an online service has a working login stored in a password manager and checked each quarter."
                cadence: rolling
              tasks:
                - "Register for the online service of each provider in the register"
                - "Save each login in your password manager"
                - "Set statement and email preferences to an inbox you read"
                - "Log in to each provider portal and check details are current @recurring(quarterly)"
            - name: Post redirection from old addresses
              description: |-
                ## Purpose
                Providers you have not yet told about a move keep writing to the old address, and those letters are exactly how pensions become lost. Redirecting post for a year after a move, and asking current occupants of a recent address to forward anything addressed to you, catches the stragglers.

                ## Milestones
                1. Post redirection in place from your last address for at least twelve months.
                2. A forwarding note or arrangement with the current occupants of your previous address.
                3. Every redirected financial letter traced to a provider and logged.
                4. Each sender of redirected financial post given your new address.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Post redirection runs for at least a year after a move and every redirected financial letter leads to an address update."
                cadence: rolling
              tasks:
                - "Set up post redirection from your last address with the postal service"
                - "Leave a stamped forwarding envelope with the new occupants"
                - "Log each redirected financial letter and update the sender"
                - "Decide whether to renew the redirection before it expires @recurring(yearly)"
            - name: How pensions go missing after mergers and buy-outs
              description: |-
                ## Purpose
                Few lost pensions were lost by their owner. The employer was bought, the scheme was handed to an insurer, the insurer was taken over, and each step renamed the plan. Understanding the usual chain of events tells you which questions to ask when an old name leads nowhere.

                ## Milestones
                1. The difference between an employer, a scheme, its trustees and its administrator understood.
                2. The common routes a scheme takes when an employer is sold or closes written in a short note.
                3. Each dead-end lead in your log checked against those routes.
                4. One new line of enquiry opened from what you learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of how schemes change hands, used to reopen at least one dead-end lead in the log."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your pension regulator's guide to schemes when employers change"
                - "Write a short note on what happens to a scheme in a takeover or closure"
                - "Check each dead-end lead against the routes in your note"
                - "Open one new enquiry based on what you found"
            - name: Reading an old pension statement or scheme booklet
              description: |-
                ## Purpose
                Decades-old statements use terms like deferred benefit, accrued pension, preserved pension, transfer value and normal retirement date, and the meaning decides what you are owed and when. Learning to read one properly means the found pension is understood before anyone suggests doing anything with it.

                ## Milestones
                1. A glossary of the terms on your oldest statement in your own words.
                2. Each found pension labelled as salary-linked or pot-based from its paperwork.
                3. The scheme's normal pension age noted for every found pension.
                4. Questions you cannot answer from the paperwork listed for the provider.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every found pension is labelled by type and pension age from its paperwork, with open questions written down for the provider."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick the oldest statement or scheme booklet in your tracing folder"
                - "Write a plain-language glossary of every unfamiliar term on it"
                - "Label each found pension as salary-linked or pot-based"
                - "List the questions the paperwork leaves unanswered"
            - name: Following a former employer through company records
              description: |-
                ## Purpose
                When the tracing service returns nothing, the answer is usually in the company register: a name change, a takeover, a liquidation or a parent company that took on the staff. Searching the official company register and its filing history can turn a vanished employer into the business that now holds the pension.

                ## Milestones
                1. The official company register for the employer's country searched by name and old address.
                2. Name changes, mergers and the date of any dissolution or liquidation noted.
                3. The successor company or liquidator identified where one exists.
                4. A tracing request sent to the successor, the liquidator or the scheme they name.

                ## Notes
                Annual accounts filed before a company closed sometimes name the pension scheme and its trustees in the notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each employer with no tracing service match is followed through the company register to a successor, liquidator or recorded dead end."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Search the official company register for each unmatched employer"
                - "Note name changes, takeovers and dissolution dates from the filing history"
                - "Read the last filed accounts for any named pension scheme"
                - "Send a tracing request to the successor company or liquidator"
            - name: Pension scheme register and regulator searches
              description: |-
                ## Purpose
                Pension regulators keep registers of schemes, often searchable by name or registration number, and they can tell you whether a scheme has wound up and who bought out its members. Knowing how to use those registers, and how to ask the regulator directly, closes leads that company records leave open.

                ## Milestones
                1. The pension regulator and its scheme register identified for each country you worked in.
                2. Each scheme name from your paperwork searched on the register.
                3. Scheme status, administrator and wind-up details recorded in the log.
                4. A written enquiry sent to the regulator for any scheme you still cannot place.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every named scheme in the log is checked against the regulator's register, with status and administrator recorded or an enquiry sent."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the scheme register published by your pension regulator"
                - "Search each scheme name and registration number from your paperwork"
                - "Record status, administrator and any wind-up date in the log"
                - "Write to the regulator about schemes you still cannot place"
            - name: Recognising recovery-fee scams and fake tracing firms
              description: |-
                ## Purpose
                Cold calls and adverts promising to find lost pensions for a percentage, or claiming a pension has already been found and needs a fee to release, are a common route into pension fraud. Knowing the warning signs before you start tracing protects both the money and the identity documents you are about to collect.

                ## Milestones
                1. The regulator's published warning signs for pension scams read and noted.
                2. A household rule written: no unsolicited caller, email or advert gets details or documents.
                3. The official scam warning list checked before contacting any firm not found through official channels.
                4. Everyone in the household told the rule.

                ## Notes
                A genuine provider never asks for a fee to release your own pension. Check any firm on the financial regulator's register before replying.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written household rule on unsolicited tracing offers, based on the regulator's warning signs, shared with everyone at home."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your financial regulator's guide to pension scam warning signs"
                - "Write a one-line household rule on unsolicited tracing offers"
                - "Bookmark the regulator's firm register and scam warning list"
                - "Tell everyone in the household about the rule"
            - name: Subject access requests for your pension records
              description: |-
                ## Purpose
                Where data protection law gives you a right of access, a former employer, payroll provider or pension administrator must give you copies of the personal data they hold about you, usually within a set period. A clear access request can produce membership records, contribution histories and old addresses when ordinary enquiries stall.

                ## Milestones
                1. Your data access rights under the law where each organisation is based understood.
                2. A short access request letter naming the records you want.
                3. Requests sent to organisations that have not answered an ordinary enquiry.
                4. Each response deadline recorded and any refusal or silence logged.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Access requests sent to every organisation that ignored an ordinary enquiry, each with its legal response deadline logged."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the data protection authority's guide to access requests"
                - "Draft a request naming pension, payroll and contribution records"
                - "Send it to each organisation that ignored your first enquiry"
                - "Log the legal response deadline for every request"
            - name: Forgotten endowments and savings-linked life policies
              description: |-
                ## Purpose
                Mortgage endowments, with-profits bonds, savings plans sold with life cover and children's savings policies were sold in their millions and many have matured or lapsed without their owners noticing. Learning how these products work and who now runs the old insurers' books helps you trace the ones in your paperwork.

                ## Milestones
                1. Every insurance-linked savings product in your paperwork listed.
                2. The current owner of each original insurer identified.
                3. A tracing request sent for each policy with a policy number or provider name.
                4. Each policy's status recorded as in force, matured, paid out or lapsed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every insurance-linked savings policy in your paperwork has a current owner identified and a recorded status."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every endowment, savings plan or bond found in your paperwork"
                - "Find which company now runs each original insurer's policies"
                - "Send a tracing request with the policy number where you have one"
                - "Record each policy's status in the tracing log"
            - name: Old share certificates and unclaimed dividends
              description: |-
                ## Purpose
                Shares from privatisations, demutualised building societies and employee schemes often sit with a share registrar long after the holder has moved, piling up uncashed dividends. Learning how registrars and unclaimed dividend searches work lets you check every company name on an old certificate in one sitting.

                ## Milestones
                1. Every share certificate, demutualisation letter and dividend slip in your paperwork listed.
                2. The current registrar for each company identified.
                3. Each holding confirmed or ruled out with the registrar.
                4. Unclaimed dividends claimed where they exist.

                ## Notes
                Holdings in companies that have since been taken over usually passed to the buyer's registrar or were paid out in cash that may still be unclaimed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every old share holding in your paperwork is confirmed or ruled out with its current registrar, with unclaimed dividends claimed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every share certificate and dividend slip in your paperwork"
                - "Find the current share registrar for each company"
                - "Ask each registrar to confirm any holding under your names"
                - "Search each registrar's unclaimed dividend service @recurring(yearly)"
            - name: Free tracing routes versus paid tracing firms
              description: |-
                ## Purpose
                Paid tracing firms and online finders often charge a fee or a percentage of what they find for searches you can run yourself for free. Deciding in advance which routes you will use, and the narrow cases where you would pay for help, stops you signing up in a moment of frustration.

                ## Milestones
                1. The free official routes listed: tracing service, tax records, registers and direct requests.
                2. The fees and terms of any paid service you are considering written down.
                3. The cases where paid help would be worth it, if any, written down.
                4. A decision recorded on whether to use a paid service and at what price.

                ## Notes
                If you do use a paid firm, check it on the financial regulator's register and never sign over a percentage of a pension.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on paid tracing, with fees compared against the free routes already tried."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the free tracing routes you have already used"
                - "Write down the fees and terms of any paid service you are considering"
                - "Check any paid firm on the financial regulator's register"
                - "Record your decision and the reasons in the tracing log"
            - name: Proving entitlement with little or no paperwork
              description: |-
                ## Purpose
                Some schemes find a member record but ask for proof before they pay, and some find nothing at all because their records were incomplete. Building an evidence pack from payslips, tax records, contracts and statements from former colleagues gives the administrator something to act on.

                ## Milestones
                1. Every piece of evidence of employment and pension deductions gathered for the disputed lead.
                2. Tax or earnings records for the relevant years obtained.
                3. Written statements from one or two former colleagues who were in the same scheme, where possible.
                4. An evidence pack sent to the administrator with a request for a written decision.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An evidence pack for each disputed or unmatched membership is with the administrator and a written decision has been requested."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather payslips, contracts and letters showing pension deductions"
                - "Request earnings records for the years in question"
                - "Ask former colleagues from the same scheme for a short written statement"
                - "Send the evidence pack and ask for a written decision"
            - name: Certified evidence for each change of name
              description: |-
                ## Purpose
                Name changes break matches: a pension started under a maiden name, a previous married name or a different spelling will not match until the provider sees the link between the names. Having certified copies of each marriage, divorce or deed poll document ready means a name match is settled in one letter, not three.

                ## Milestones
                1. Every document linking one of your names to the next identified.
                2. Certified copies obtained from the issuing office or a certifier the provider accepts.
                3. A one-page name chain listing each name with its linking document.
                4. The name chain sent with every request where the pension predates a name change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Certified copies of every name-change document and a one-page name chain are in the tracing folder and used in relevant requests."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each name change and the document that records it"
                - "Order certified copies of any you do not hold"
                - "Write a one-page chain from your first name to your current one"
                - "Send the chain with requests for pensions taken out under earlier names"
            - name: Bringing each found account up to date
              description: |-
                ## Purpose
                Finding a pension is only half the work; it stays at risk until the provider holds your current name, address, email and phone number and has verified who you are. Updating every found account at once closes the gap that lost it in the first place.

                ## Milestones
                1. Current name, address, email and phone confirmed with each found provider.
                2. Identity verification completed where the provider asks for it.
                3. Written confirmation of the updated details received from each provider.
                4. The register updated with each provider's confirmation date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every found account has written confirmation of your current contact details, dated in the register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send your current contact details to each found provider"
                - "Complete any identity checks the provider requests"
                - "Ask each provider for written confirmation of the change"
                - "Record the confirmation date in the register"
            - name: Payslip deductions checked against pension records
              description: |-
                ## Purpose
                Occasionally a pension goes missing before it is ever lost: an employer takes contributions from pay but never passes them on, or sends them to the wrong member record. Comparing payslip deductions with what the provider shows, for past and current jobs, catches the gap while evidence still exists.

                ## Milestones
                1. Payslip pension deductions totalled for a sample year at each employer you hold payslips for.
                2. Provider contribution history for the same periods obtained.
                3. Any difference raised in writing with the employer and the provider.
                4. A monthly comparison running for your current job.

                ## Notes
                If an employer has failed to pay contributions, the pension regulator usually has a route for reporting it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Payslip deductions match provider contribution records for every period checked, or each difference is raised in writing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Total the pension deductions on one year of payslips for each job"
                - "Request the contribution history for the same period from the provider"
                - "Raise any difference in writing with employer and provider"
                - "Compare this month's payslip deduction with the provider record @recurring(monthly:28)"
            - name: Refund or deferred pension check for short jobs
              description: |-
                ## Purpose
                Leaving a scheme after a short time could mean a refund of contributions, a small deferred pension or a transfer elsewhere, depending on the rules then. Asking each short-service scheme which happened stops you chasing a pension that was refunded and stops a deferred one being written off.

                ## Milestones
                1. Every job under two years with possible pension membership listed.
                2. Each scheme asked whether a refund, transfer or deferred benefit applied.
                3. Refunds confirmed with date and amount where they happened.
                4. Deferred benefits added to the register.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each short-service membership is recorded as refunded, transferred or deferred, with written confirmation from the scheme."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every job shorter than two years that may have had a pension"
                - "Ask each scheme whether you received a refund or kept a deferred pension"
                - "Record refund dates and amounts from the replies"
                - "Add any deferred benefit to the register"
            - name: Complaint and ombudsman route for silent providers
              description: |-
                ## Purpose
                A provider that ignores three requests, loses your documents or refuses to search without a clear reason is not the end of the road. A formal complaint, and if that fails a free referral to the pensions or financial ombudsman, usually produces an answer and sometimes compensation for the delay.

                ## Milestones
                1. The provider's formal complaints procedure found.
                2. A written complaint sent listing dates, references and the outcome you want.
                3. The deadline for the provider's final response noted.
                4. An ombudsman referral made if the response is late or unsatisfactory.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every provider that left a request unanswered for three months has a formal complaint on file and, if needed, an ombudsman referral."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the provider's formal complaints procedure"
                - "Write a complaint listing every request date and reference"
                - "Note the date the provider must give a final response by"
                - "Refer the case to the pensions or financial ombudsman if needed"
            - name: Found pension summary for later decisions
              description: |-
                ## Purpose
                Freshly found pensions invite quick decisions, often from someone selling a transfer. A one-page summary of each, with type, value or promised income, pension age, any guarantees mentioned and the charges, lets you take the decisions later and calmly with the right guidance, rather than on the day the letter arrives.

                ## Milestones
                1. A summary line for each found pension with type, value or income, and pension age.
                2. Any guarantees, protected benefits or penalties the paperwork mentions noted.
                3. A rule written: no transfer or withdrawal until guidance or regulated advice has been taken.
                4. The summary filed with the register.

                ## Notes
                This project records facts. Decisions about combining, transferring or drawing pensions belong to your wider retirement planning, with guidance or regulated advice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page summary of every found pension, with guarantees noted and a written no-quick-decisions rule, is filed with the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to summarise each found pension's latest statement on one page"
                - "Note any guarantees, protected benefits or exit penalties mentioned"
                - "Write your no-quick-decisions rule at the top of the summary"
                - "Update the summary with new statement values @recurring(yearly)"
            - name: Moving house checklist for pensions and investments
              description: |-
                ## Purpose
                Moving house is the single biggest cause of lost pensions, because one provider out of twelve gets forgotten in the change-of-address rush. A checklist built from your register, worked through in the fortnight around moving day, makes sure every pension, savings plan and share registrar hears about it.

                ## Milestones
                1. A checklist with every provider and registrar from the register.
                2. Each provider told the new address, in writing or online, within two weeks of moving.
                3. Written confirmation received from each.
                4. Post redirection in place from the old address.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every provider and registrar in the register confirms the new address in writing within a month of moving."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Build a moving checklist from every provider in the register"
                - "Send the new address to each provider in the two weeks around the move"
                - "Tick off each written confirmation as it arrives"
                - "Set up post redirection from the old address"
            - name: Leaving a job with a pension record in hand
              description: |-
                ## Purpose
                The day you leave is the last day the payroll and HR team will answer quickly, and the leaving letter is the document every future trace depends on. Collecting the scheme name, member number, provider contact and a final statement before you go makes this pension impossible to lose.

                ## Milestones
                1. Scheme name, member number and provider contact written down before your last day.
                2. Your personal email and home address added to the scheme record.
                3. The leaving statement or deferred benefit letter received and filed.
                4. A register row added for the pension.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within two months of leaving, the scheme holds your personal contact details and a leaving statement is filed with a register row."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask HR for the scheme name, member number and provider contact"
                - "Change the scheme's contact email from your work address to a personal one"
                - "File the leaving statement when it arrives"
                - "Add the pension to your register"
            - name: Full trace ten years before planned retirement
              description: |-
                ## Purpose
                Pensions found at 66 leave no time to fix gaps, dispute records or plan around them; pensions found at 55 do. A complete trace a decade before you plan to stop working, covering every job, address and name, means retirement planning starts from a full list.

                ## Milestones
                1. The timeline, identity sheet and log checked as complete.
                2. Every employer searched through the tracing service and company records.
                3. Every lead found or closed with a reason.
                4. A full register handed to whoever helps with your retirement planning.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every lead in the tracing log is found or closed with a reason at least ten years before your planned retirement date."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check the timeline covers every job and address since school"
                - "Run any unsearched employer through the tracing service"
                - "Close or resolve every open lead in the log"
                - "Share the completed register with your partner or planner"
            - name: Claim packs for deferred pensions near scheme pension age
              description: |-
                ## Purpose
                Old salary-linked schemes do not always pay automatically at their pension age; many wait for the member to claim, and some have a pension age different from your state pension age. Requesting the claim pack a few months before each scheme's date avoids months of missed payments.

                ## Milestones
                1. The scheme pension age for every deferred pension in the register confirmed.
                2. A claim pack requested three to six months before each date.
                3. Claim forms returned with identity and bank evidence.
                4. First payment date confirmed in writing for each pension.

                ## Notes
                If a scheme pension age has already passed, ask the scheme about arrears. Choices about lump sums or early payment are for guidance or advice.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every deferred pension within a year of its scheme pension age has a claim pack requested and a first payment date confirmed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the scheme pension age for each deferred pension"
                - "Request claim packs three to six months before each date"
                - "Return claim forms with the identity and bank evidence asked for"
                - "Ask about arrears for any pension age already passed"
            - name: Provider takeover letter follow-through
              description: |-
                ## Purpose
                Takeover letters saying your plan is moving to a new provider are easy to file unread, yet they mark the moment records, logins and contact numbers change. Following each one through to a confirmed account at the new firm keeps one of your found pensions from becoming lost again.

                ## Milestones
                1. The new provider's name, contact details and transfer date noted in the register.
                2. Your account confirmed at the new provider after the move.
                3. New online access set up and old logins removed.
                4. The first statement from the new provider checked against the last from the old one.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "After any provider takeover, your account is confirmed at the new firm and its first statement is checked against the last old one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the new provider and transfer date from the letter in the register"
                - "Call the new provider after the date to confirm your account"
                - "Set up online access with the new provider"
                - "Check the first new statement against the last old one"
            - name: Tracing a late parent's pensions as executor
              description: |-
                ## Purpose
                Executors often find that a parent's pensions, life policies and old share holdings are scattered and unrecorded, and that some carry death benefits for a spouse or other beneficiary. Tracing them methodically from the papers in the house, the bank statements and the tax authority makes sure nothing is left unclaimed and every scheme is told of the death.

                ## Milestones
                1. The parent's work history and addresses reconstructed from papers and family memory.
                2. Each provider, scheme and registrar notified of the death with a certified death certificate.
                3. Death benefits and any pension owed to a surviving spouse or dependant identified.
                4. A list of every pension and account found handed to the estate's solicitor or kept with the estate accounts.

                ## Notes
                Many countries offer a single tell-the-authorities service for deaths. Death benefits are often paid at the trustees' discretion, so record what each scheme says in writing. Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every pension, policy and holding of the late parent is traced, each provider notified of the death, and a full list filed with the estate records."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Collect your parent's old payslips, statements and bank records in one box"
                - "Order several certified copies of the death certificate"
                - "Notify each provider and scheme of the death in writing"
                - "Ask each scheme about death benefits or a surviving spouse's pension"
                - "File the full list with the estate's accounts"
            - name: Helping an older relative find their pensions
              description: |-
                ## Purpose
                Older relatives often worked for many employers that no longer exist and may struggle with phone queues and online forms. Running the trace with them, with their written consent or a registered power of attorney, lets you do the legwork while they stay in charge of every decision.

                ## Milestones
                1. Written consent or a registered power of attorney in place for you to speak to providers.
                2. Their work and address history written down with them over one or two visits.
                3. A tracing log run on their behalf with every request copied to them.
                4. Every found pension confirmed and contact details set so post reaches them or you.

                ## Notes
                Start from the **Person** template. Providers usually need a signed letter of authority before they discuss an account with you.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your relative's work history is traced with their written authority, every lead resolved and each found pension confirmed to them in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up a person page for your relative from the person template"
                - "Ask them to sign a letter of authority for each provider"
                - "Write down their work and address history over one or two visits"
                - "Go through any post from providers with them @recurring(monthly:8)"
            - name: Pensions left behind from years working abroad
              description: |-
                ## Purpose
                A few years working in another country often left a workplace pension, a compulsory savings account or social security credits that nobody reminded you about when you left. Each country has its own tracing routes, identity numbers and language, so tracing abroad needs its own list and patience.

                ## Milestones
                1. Every country you worked in listed with dates, employers and your identity number there.
                2. The official tracing or lost-savings service for each country identified.
                3. A request made to each scheme or service, in its own language where needed.
                4. Every overseas pension found or closed with a reason, and the register updated.

                ## Notes
                Australia's lost superannuation search through the tax office is one example of an official overseas route. Questions about moving money between countries belong with a cross-border specialist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every country you worked in has been searched through its official route, with each overseas pension found or closed with a reason."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every country you worked in with employers and dates"
                - "Find your identity or tax number from each country"
                - "Contact the official lost-savings service in each country"
                - "Check each overseas statement arrives and note its value @recurring(yearly)"
            - name: Agency, temp and seasonal work pension search
              description: |-
                ## Purpose
                Automatic enrolment rules mean many agency, temp and seasonal workers were put into a pension for a few weeks or months without ever noticing the letters. These small pots are the easiest to lose and the hardest to remember, so they deserve a dedicated sweep using payslips and tax records rather than memory.

                ## Milestones
                1. Every agency, umbrella company and seasonal employer listed from tax records.
                2. Payslips checked for pension deductions or enrolment letters.
                3. The default pension provider of each agency identified and contacted.
                4. Each small pot recorded in the register or ruled out.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every agency, umbrella or seasonal employer from your tax records is checked with its pension provider and recorded as found or ruled out."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List agency and seasonal employers from your tax employment history"
                - "Check those payslips for pension deductions"
                - "Ask each agency which pension provider it enrolled staff into"
                - "Record each small pot found in the register"
            - name: Pension disclosure for a separation or divorce
              description: |-
                ## Purpose
                Financial disclosure on separation usually requires every pension and investment to be listed with a current value, and a forgotten pot found later can reopen arrangements. A full trace before disclosure, with valuation statements requested in good time, gives your solicitor or mediator a complete and defensible list.

                ## Milestones
                1. A full trace completed for every job and address before the disclosure deadline.
                2. A current valuation or cash equivalent statement requested from each scheme.
                3. Every pension and account listed with value and statement date.
                4. The list and statements handed to your solicitor or mediator.

                ## Notes
                Some schemes take weeks to produce valuations and may charge for more than one a year. Ask your solicitor which valuation each scheme should provide.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every pension and investment account is listed with a dated valuation and handed to your solicitor or mediator before the disclosure deadline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your solicitor or mediator which valuation each scheme should provide"
                - "Run the full trace for any employer not yet checked"
                - "Request a valuation statement from every scheme"
                - "Hand the completed list and statements to your solicitor or mediator"
            - name: Old personal plans from self-employed years
              description: |-
                ## Purpose
                Spells of self-employment often left a personal pension, retirement annuity contract or stakeholder plan sold by an adviser who has since retired, paid by direct debit until money got tight. With no employer to trace through, these plans are found through old bank records, adviser names and insurer histories.

                ## Milestones
                1. Every period of self-employment listed with any adviser or broker you used.
                2. Bank statements for those years searched for insurer and fund payments.
                3. The current owner of each original insurer contacted.
                4. Each plan found and added to the register, or ruled out.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every self-employed period is searched through bank records and insurer histories, with each personal plan found or ruled out."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each self-employed period and any adviser you used"
                - "Search bank statements from those years for insurer payments"
                - "Contact the firm that now runs each original insurer's plans"
                - "Add each plan you find to the register"
            - name: Public service and armed forces pension records
              description: |-
                ## Purpose
                Short spells in teaching, health services, local government, the civil service or the armed forces often carry a deferred pension that is easy to forget because the employer still exists under a different name. Each public scheme has its own administrator and its own way of proving service, so it pays to trace them directly.

                ## Milestones
                1. Every public sector or forces job listed with dates, employer and service number.
                2. The current administrator of each public scheme identified.
                3. A service record or benefit statement requested from each.
                4. Each deferred benefit added to the register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each public sector or forces job has a benefit statement or written confirmation of no entitlement from the scheme administrator."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every public sector or forces job with your service or staff number"
                - "Find the current administrator for each public scheme"
                - "Request a service record or benefit statement from each"
                - "Add each deferred benefit to the register"
            - name: Insolvent former employer and the lifeboat fund
              description: |-
                ## Purpose
                When an employer went bust with a salary-linked scheme, the scheme may have gone into an assessment period and passed to a national lifeboat fund, such as the Pension Protection Fund in the UK or the PBGC in the US. Members still have a benefit there, but only if the fund can match and contact them.

                ## Milestones
                1. The insolvency date and the scheme's fate confirmed from company and regulator records.
                2. The lifeboat fund contacted with your identity details and employment dates.
                3. Membership confirmed and the compensation or benefit level received in writing.
                4. The benefit added to the register with the fund's contact details.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For each insolvent former employer, the lifeboat fund has confirmed in writing whether you are a member and what benefit applies."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the insolvency date from the company register"
                - "Search the lifeboat fund's list of schemes it has taken on"
                - "Send your identity details and employment dates to the fund"
                - "Read the fund's yearly statement and check details are current @recurring(yearly)"
            - name: Lost employee share plan holdings from old jobs
              description: |-
                ## Purpose
                Save-as-you-earn schemes, share incentive plans, employee stock purchase plans and vested restricted shares often stay with a plan administrator after you leave, and the shares or cash can sit unclaimed for years. Tracing them takes the plan name, your old employee number and the administrator, which changes more often than the employer.

                ## Milestones
                1. Every employer that offered a share plan listed with the plan type.
                2. The plan administrator for each identified, past and present.
                3. Any remaining shares, cash or matured savings confirmed in writing.
                4. Each holding added to the register with the administrator's portal details.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every former employer share plan is checked with its administrator, with each remaining holding confirmed in writing and registered."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every old employer that offered a share or savings plan"
                - "Find the current plan administrator for each"
                - "Ask each administrator to confirm any shares or cash held for you"
                - "Log in to each share plan portal and confirm your address @recurring(yearly)"
            - name: Reclaiming accounts handed to an unclaimed property fund
              description: |-
                ## Purpose
                Brokerage accounts, uncashed pension cheques and dormant savings are sometimes handed to a state or national unclaimed property fund after a set period of no contact, and in some places shares are sold on transfer. Reclaiming them follows a formal process with its own evidence rules, and the sooner it is done the less is lost to fees or forced sales.

                ## Milestones
                1. Each matched record on an unclaimed property register reviewed for name, address and amount.
                2. The fund's claim evidence requirements listed.
                3. A complete claim submitted with identity and address history evidence.
                4. The payment or reinstated holding confirmed and recorded.

                ## Notes
                Claims through the official fund are free. A firm offering to claim for a percentage is doing what you can do yourself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every matched unclaimed property record has a complete claim submitted and an outcome recorded in the tracing log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Review each matched register entry against your names and old addresses"
                - "List the evidence the fund asks for with each claim"
                - "Submit each claim with identity and address history evidence"
                - "Record the outcome and any amount received in the log"
            - name: Director's and executive pension plans from a closed company
              description: |-
                ## Purpose
                Founders and directors of small companies often set up an executive pension plan or a small self-administered scheme, sometimes as a trustee, and when the company closed the plan was left without anyone running it. Tracing these means working through the insurer, the scheme's professional trustee or administrator, and the tax authority's scheme records.

                ## Milestones
                1. Each company you directed listed with any pension arrangement it set up.
                2. Your role in each arrangement confirmed: member, trustee or both.
                3. The current insurer, administrator or professional trustee identified.
                4. Each plan's status confirmed in writing and trustee duties handed over or closed properly.

                ## Notes
                If you were a trustee, you may still have legal duties. Speak to a pensions lawyer or the scheme's administrator before assuming the scheme is closed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every pension arrangement set up by a company you directed has its status, your role and its current administrator confirmed in writing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each company you directed and any pension plan it set up"
                - "Check the company's filed accounts for pension scheme details"
                - "Confirm with the insurer or administrator whether you are a trustee"
                - "Get written confirmation of each plan's current status"
---

# Lost Pension Tracing

This area is for anyone who has changed jobs, moved house, changed name or worked abroad and suspects a pension or investment account is sitting somewhere with the wrong address on it. It starts with the foundations (a work and address timeline, your identity numbers, a sweep of old paperwork, the official tracing service and a log for every lead), then the routines that chase requests to an answer and keep found accounts visible, the knowledge that makes old schemes and company histories readable, the decisions about paid tracers, proof and complaints, the dated moments such as moving or leaving a job, situations such as tracing for a late parent or years spent overseas, and finally specialist cases like insolvent employers and lost share plans.

What repeats is a weekly chase of open requests, a monthly hour on new leads, a quarterly look at the register of found accounts, and a yearly round of statement checks and fresh searches of the tracing services and unclaimed asset registers. The Meeting notes, Operational checklist and Person templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
