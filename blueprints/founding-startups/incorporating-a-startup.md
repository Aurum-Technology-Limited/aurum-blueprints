---
id: founding-startups.incorporating-a-startup
name: Incorporating a Startup
description: "A company formed in the right place and shape: jurisdiction and entity chosen with a lawyer, founder shares and IP in the company, a bank account, clean registers and a compliance calendar that keeps it in good standing."
category: business
version: 1.0.0
tags: [founding-startups, incorporating-a-startup, founder, incorporation, company-formation, cap-table, founder-agreements, corporate-compliance]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - compliance-control
    - month-end-close
    - vendor
    - board-meeting
    - remediation-plan
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Incorporating a Startup
          description: "Choosing where and how to incorporate, setting up the company, bank account and founder agreements, and avoiding early structural mistakes."
          projects:
            - name: Deciding when to incorporate the company
              description: |-
                ## Purpose
                Forming a company too late leaves founders personally liable and IP floating between people, while forming it too early can mean a year of filing fees for an idea that dies. Writing down the triggers that make incorporation necessary now, such as taking money, signing a customer, hiring or a co-founder joining, turns a vague worry into a dated decision.

                ## Milestones
                1. A list of the events in the next six months that would require a company to exist.
                2. The personal risks of trading without a company written in plain words.
                3. The likely formation and first-year running costs estimated from official fee pages.
                4. A recorded decision to incorporate now or on a named trigger, agreed by all founders.

                ## Notes
                Taking any outside money, even from friends, is almost always the point at which a company should already exist.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision with a date or trigger for incorporation, agreed by every founder and filed in the company folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every deal, hire or payment expected in the next six months"
                - "Note which of those would need a company to sign or receive money"
                - "Look up formation and annual filing fees on the official registry website"
                - "Record the incorporate-now or incorporate-on-trigger decision with all founders"
            - name: Incorporation jurisdiction shortlist and choice
              description: |-
                ## Purpose
                Where the company is formed decides which law governs the shares, how easily foreign investors can put money in, which taxes apply and how much a later move would cost. Founders who raise venture money often end up in a well-known investor jurisdiction, such as Delaware, England and Wales or Singapore, but the right answer depends on where the founders live, sell and plan to raise.

                ## Milestones
                1. Founder residence, customer locations and likely investor locations written on one page.
                2. Two or three candidate jurisdictions compared on tax, investor familiarity, cost and admin load.
                3. Questions for a lawyer and an accountant answered in writing for the front-runner.
                4. A jurisdiction chosen and the reasoning recorded for future investors.

                ## Notes
                This is a legal and tax question with long consequences. Use the comparison to brief your lawyer and accountant, not to replace them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen jurisdiction with a one-page comparison of at least two alternatives and written input from a lawyer or accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down where each founder lives, pays tax and plans to work"
                - "List the countries your first customers and investors are likely to be in"
                - "Compare two or three jurisdictions on tax, investor familiarity and annual cost"
                - "Send the comparison to a lawyer and an accountant with your open questions"
                - "Record the chosen jurisdiction and the reasons in the company folder"
            - name: Entity type decision for a venture-scale company
              description: |-
                ## Purpose
                Investors usually expect a company limited by shares or a corporation that can issue different share classes and options, while a partnership or pass-through LLC can suit a profitable small business but complicate fundraising. Choosing the entity with the funding plan in mind avoids a costly conversion just before the first round.

                ## Milestones
                1. The funding plan for the next two years summarised: bootstrapped, angels or venture.
                2. The available entity types in the chosen jurisdiction listed with their tax treatment.
                3. Each type checked for share classes, option plans and investor acceptance.
                4. An entity type chosen and confirmed with your lawyer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An entity type chosen for a stated funding plan, confirmed in writing by your lawyer before filing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the funding plan for the next two years in three sentences"
                - "List the entity types available in the chosen jurisdiction"
                - "Check which types can issue preferred shares and an option plan"
                - "Ask your lawyer to confirm the entity type before anything is filed"
            - name: Choosing a startup lawyer or formation service
              description: |-
                ## Purpose
                Online formation services are cheap and fast for a standard company, but they rarely draft founder share agreements, IP assignments or a founders' agreement that holds up in a funding round. Comparing a startup-focused law firm, a fixed-fee formation package and a self-filed route on the same criteria tells you what you are really paying for.

                ## Milestones
                1. A list of the documents the company needs at formation, not just the registration.
                2. Three options scored on price, documents included, startup experience and turnaround.
                3. References checked with at least one founder who used the front-runner.
                4. An engagement letter signed with a fixed fee or capped estimate.

                ## Notes
                Start from the **Purchase decision** template. Many startup law firms offer deferred or fixed-fee formation packages; ask what happens to the fee if the company never raises.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed engagement with a lawyer or formation service, chosen against two alternatives on written criteria."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the list of documents the company needs at formation"
                - "Get quotes from a startup law firm, a fixed-fee package and a formation service"
                - "Ask another founder who used your front-runner how it went"
                - "Sign an engagement letter with a fixed fee or a capped estimate"
            - name: Formation information pack for every founder
              description: |-
                ## Purpose
                Registries and banks ask for the same facts again and again: legal names, dates of birth, residential and service addresses, nationality, identity documents and tax numbers. Gathering them once, accurately and securely, stops formation stalling for a week while a co-founder hunts for a utility bill.

                ## Milestones
                1. Each founder's legal name, addresses, nationality and tax number recorded in one secure file.
                2. Certified or scanned identity documents and proofs of address collected for each founder.
                3. The registered office address and company contact email agreed.
                4. The proposed company name checked as available on the registry search.

                ## Notes
                Store this pack in an encrypted folder with limited access. It holds exactly the data identity thieves want.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete, access-restricted formation pack holding every founder's details and documents, ready to send to the lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create an encrypted folder for the formation pack"
                - "Ask each founder for legal name, addresses, nationality and tax number"
                - "Collect identity documents and a recent proof of address from each founder"
                - "Run the proposed company name through the official registry search"
            - name: Share structure and articles at formation
              description: |-
                ## Purpose
                Decisions made in the first filing, such as how many shares are authorised, their nominal value and whether the standard articles are amended, show up in every later round. A large number of low-value shares, a single ordinary class and articles your lawyer has adapted for a startup are common defaults, but each needs a conscious choice.

                ## Milestones
                1. The number of shares to authorise or issue at formation agreed with your lawyer.
                2. A nominal or par value chosen that keeps founder purchase prices small.
                3. Standard articles reviewed and any startup amendments agreed, such as pre-emption or transfer rules.
                4. The final articles saved as a signed PDF in the company folder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A share structure and articles approved by every founder and the lawyer before filing, saved as final versions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your lawyer how many shares and what nominal value startups usually start with"
                - "Read the draft articles and mark every clause you do not understand"
                - "Agree any amendments to transfer, pre-emption or director appointment rules"
                - "Save the approved articles as the final version in the company folder"
            - name: Filing the company registration
              description: |-
                ## Purpose
                Registration is the moment the company exists in law, and errors in director details, share numbers or the registered office are tedious to correct later. Checking every field against the formation pack and keeping the certificate and filed documents together gives you the first page of the company's permanent record.

                ## Milestones
                1. The registration form checked line by line against the formation pack.
                2. The filing submitted and the official fee paid.
                3. The certificate of incorporation and company number received.
                4. The certificate, filed articles and receipt saved in the company folder.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A certificate of incorporation is held, with the company number and filing receipt stored in the company folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check each field of the registration form against the formation pack"
                - "Approve the filing with your lawyer or submit it on the registry website"
                - "Save the certificate of incorporation and company number when issued"
                - "Send the company number and certificate to every founder"
            - name: Founder share issue and purchase agreements
              description: |-
                ## Purpose
                Shares agreed on a whiteboard are not shares until the company issues them, the founders pay for them and the paperwork records any vesting and repurchase terms. Issuing founder shares promptly at a nominal price, while the company is worth almost nothing, keeps the tax position simple and gives investors the clean record they look for.

                ## Milestones
                1. The agreed split and vesting terms written into a share purchase or subscription agreement for each founder.
                2. A board or director resolution authorising the issue.
                3. Each founder's subscription price paid into the company bank account or recorded as paid.
                4. Share certificates or the electronic register updated and the issue filed with the registry where required.

                ## Notes
                How to split the equity belongs to the co-founder equity conversation. This project is about recording what was agreed, correctly and on time.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every founder holds signed purchase paperwork, a recorded payment and an entry in the share register within 60 days of incorporation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the agreed split and vesting terms to your lawyer for drafting"
                - "Sign a director resolution authorising the founder share issue"
                - "Pay each founder's subscription price and keep proof of payment"
                - "Update the share register and file the issue where the registry requires it"
            - name: Founder IP assignment into the company
              description: |-
                ## Purpose
                Code, designs, domains and research created before incorporation belong to the person who made them, not the company, until they are assigned in writing. Investors check this early, and a missing assignment from a departed co-founder can stall a round for months.

                ## Milestones
                1. An inventory of pre-incorporation IP: code repositories, designs, domains, accounts and research.
                2. Any past employer or university claims on that IP checked with each founder.
                3. A signed IP assignment from every founder covering past and future work for the company.
                4. Repositories, domains and key accounts transferred into company ownership.

                ## Notes
                If a founder built the product on an employer's laptop or time, tell your lawyer now. It is far easier to solve before money arrives.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signed IP assignments from every founder are on file and all repositories and domains are owned by company accounts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every repository, design file, domain and account the product depends on"
                - "Ask each founder about employer or university rights over their work"
                - "Sign IP assignment agreements drafted by your lawyer"
                - "Move repositories and domains into accounts owned by the company"
            - name: Restricted share tax election on time
              description: |-
                ## Purpose
                Some tax systems let founders whose shares vest elect to be taxed on their value at issue rather than as they vest, and the window is short and unforgiving. The US 83(b) election, for example, must be filed within 30 days of the share issue, and missing it can create a large tax bill later on shares that cannot be sold.

                ## Milestones
                1. Your accountant has confirmed whether any such election applies to each founder.
                2. The filing deadline for each founder calculated from the share issue date and written down.
                3. Each election signed, sent by a trackable method and proof of sending kept.
                4. Copies given to the company and to each founder's personal tax adviser.

                ## Notes
                Ask the question even if you are not in the US. Several countries have their own rules for shares subject to vesting or repurchase.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "For each founder, either a filed election with proof of sending inside the deadline or a written note from the accountant that none applies."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your accountant whether a vesting share election applies to each founder @priority(high)"
                - "Count the deadline from the share issue date and put it in every founder's calendar"
                - "Sign and send each election by a tracked method"
                - "File proof of sending in the company folder and with each founder"
            - name: Company tax registrations and identifiers
              description: |-
                ## Purpose
                A new company often needs several numbers before it can invoice or pay anyone: a corporate tax reference, an employer number if it runs payroll and a sales tax or VAT registration once it crosses a threshold or chooses to register early. Knowing which apply and when avoids late-registration penalties in the first year.

                ## Milestones
                1. The registrations that apply to the company listed with their triggers and deadlines.
                2. The corporate tax registration completed or confirmed as automatic.
                3. A written decision on voluntary or required sales tax registration, made with your accountant.
                4. All tax numbers recorded in the company details sheet.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every required tax registration is complete or diarised, with numbers stored in the company details sheet."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the tax authority website for registrations a new company needs"
                - "Confirm the corporate tax registration and note the reference number"
                - "Decide with your accountant whether to register for sales tax now"
                - "Add every tax number to the company details sheet"
            - name: Opening the company bank account
              description: |-
                ## Purpose
                Banks now ask hard questions of new companies, especially with founders abroad or in regulated sectors, and approval can take from two days to two months. Applying as soon as the certificate arrives, with the right documents and a clear description of the business, lets founders pay in share capital and stop mixing personal and company money.

                ## Milestones
                1. Two or three banks or business accounts compared on fees, foreign currency, onboarding time and integrations.
                2. The application pack ready: certificate, articles, register, founder identity and a business description.
                3. The account opened with the signing rules the founders agreed.
                4. Founder subscription money paid in and the first statement saved.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A company bank account is open in the company's name with agreed signatories, and founder share money has been paid in."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare two or three business accounts on fees, currency and onboarding time"
                - "Write a two-paragraph description of the business for the bank's questions"
                - "Submit the application with the certificate, articles and founder identity"
                - "Agree who can approve payments and set the limits in the account"
            - name: Bookkeeping set-up from the first transaction
              description: |-
                ## Purpose
                Accountants charge far more to reconstruct a year of receipts than to review books kept as they go, and investors ask for clean accounts sooner than founders expect. Connecting the bank feed to accounting software on day one, with a short chart of accounts and a receipt habit, keeps the year-end cheap.

                ## Milestones
                1. Accounting software chosen and connected to the company bank feed.
                2. A simple chart of accounts agreed with your accountant.
                3. Formation costs and founder-paid expenses entered from the start date.
                4. A receipt capture habit running for every founder who spends company money.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bank transaction since incorporation is categorised in the accounting software, with no month left unreconciled."
                cadence: rolling
              tasks:
                - "Connect the company bank account to accounting software"
                - "Agree a short chart of accounts with your accountant"
                - "Snap and upload every receipt from the week @recurring(weekly:fri)"
                - "Reconcile the previous month's bank transactions @recurring(monthly:6)"
            - name: Statutory filing and compliance calendar
              description: |-
                ## Purpose
                Young companies are struck off or fined for missed annual returns, confirmation statements, franchise taxes or beneficial ownership updates far more often than for anything dramatic. One calendar holding every statutory deadline, with an owner and a reminder well before each, is the cheapest insurance a company can buy.

                ## Milestones
                1. Every recurring filing for the company listed with its due date and source.
                2. Each filing assigned to a named founder or adviser.
                3. Reminders set at least a month before every deadline.
                4. One full year passed without a late filing or penalty.

                ## Notes
                Start from the **Compliance control** template. Your registry, tax authority and accountant each know part of the list; ask all three.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar holds every statutory deadline with an owner, and twelve months pass with no late filing or penalty notice."
                cadence: rolling
              tasks:
                - "Ask the registry, tax authority and accountant for every recurring filing"
                - "Put each deadline in a shared calendar with a named owner"
                - "Check the next 60 days of the compliance calendar @recurring(monthly:3)"
                - "Rebuild the calendar for the coming year from the latest rules @recurring(yearly)"
            - name: Monthly company admin hour
              description: |-
                ## Purpose
                Corporate admin piles up quietly: a signed contract not filed, a resolution not drafted, a registry letter unopened. Setting aside one fixed hour a month to close those loops means nothing older than four weeks is ever outstanding, and diligence becomes a matter of exporting folders.

                ## Milestones
                1. A fixed monthly hour in the founders' calendar.
                2. A standing checklist covering documents, registers, resolutions, books and filings.
                3. Every item older than a month closed or given a date.
                4. Six consecutive admin hours held and logged.

                ## Notes
                Start from the **Month-end close** template and cut it down to what a company of two or three people really needs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly admin hours held in a row, each with a logged checklist and no open item older than a month."
                cadence: rolling
              tasks:
                - "Book a recurring one-hour admin slot in the founders' calendar"
                - "Write a ten-line monthly admin checklist"
                - "Work through the admin checklist and log what was closed @recurring(monthly:12)"
                - "Move any item older than a month to the top of next week's priorities"
            - name: Minute book and written resolutions
              description: |-
                ## Purpose
                Directors approve things constantly in a startup, from the bank mandate to share issues and option grants, and each decision needs a written record to be valid and provable. A tidy minute book of board minutes and written resolutions, numbered and signed, is one of the first things a lawyer asks for in a funding round.

                ## Milestones
                1. A numbered minute book started with the formation resolutions.
                2. A resolution template agreed with your lawyer.
                3. Every decision since incorporation that needed approval recorded and signed.
                4. Resolutions signed electronically and stored within a week of each decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every board and shareholder decision since incorporation has a signed, numbered resolution or minute in the minute book."
                cadence: rolling
              tasks:
                - "Create a numbered minute book folder starting with the formation resolutions"
                - "Ask your lawyer for a written resolution template"
                - "List decisions made since incorporation that have no resolution yet"
                - "Check that every decision this quarter has a signed resolution @recurring(quarterly)"
            - name: Cap table as the single source of truth
              description: |-
                ## Purpose
                Spreadsheets of who owns what drift from the share register within months, especially once advisers, options or convertible notes appear. Keeping one cap table that matches the legal register exactly, reconciled every quarter, means founders always know their real ownership and investors find no surprises.

                ## Milestones
                1. One cap table, in a spreadsheet or cap table tool, matching the share register line by line.
                2. Every entry linked to the document that created it.
                3. A fully diluted view including any option pool and convertible instruments.
                4. Four quarterly reconciliations completed with no unexplained difference.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The cap table matches the legal share register exactly at four consecutive quarterly checks."
                cadence: rolling
              tasks:
                - "Choose a spreadsheet or cap table tool and set up one master table"
                - "Link each holding to the resolution and agreement that created it"
                - "Reconcile the cap table against the share register @recurring(quarterly)"
                - "Add a fully diluted tab for options and convertible instruments"
            - name: Statutory registers and beneficial ownership records
              description: |-
                ## Purpose
                Most jurisdictions require a company to keep registers of members, directors and, increasingly, the people with significant control, and to report changes within a set time. Registers left blank after formation are a common diligence finding and, in some places, an offence.

                ## Milestones
                1. The registers the company must keep listed from the registry's guidance.
                2. Each register created and filled in from formation onwards.
                3. Beneficial ownership information filed where the jurisdiction requires it.
                4. A rule that any change to shareholders or directors updates the registers within a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every required register exists, is complete from formation, and has been checked against the cap table this quarter."
                cadence: rolling
              tasks:
                - "Read the registry guidance on which registers a company must keep"
                - "Create the registers of members, directors and controlling persons"
                - "File beneficial ownership details where the jurisdiction requires it"
                - "Compare the registers with the cap table and director list @recurring(quarterly)"
            - name: Registered agent and official mail routine
              description: |-
                ## Purpose
                Tax notices, registry reminders and legal papers go to the registered office or agent, not to the founders' inboxes, and a missed letter can mean a penalty or a default judgment. Choosing a reliable registered office service and checking its forwarded mail every week closes the gap.

                ## Milestones
                1. A registered office or agent chosen with mail scanning and fast forwarding.
                2. The address confirmed on the registry record.
                3. A named founder responsible for official mail.
                4. Every official letter in the last quarter logged with the action taken.

                ## Notes
                Start from the **Vendor** template to record the service, its renewal date and what it costs each year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Official mail is checked weekly by a named founder and every letter in the past quarter has a logged action."
                cadence: rolling
              tasks:
                - "Compare two registered office services on scanning, forwarding and price"
                - "Confirm the registered address shown on the registry record"
                - "Open forwarded official mail and log any action needed @recurring(weekly:mon)"
                - "Diarise the registered office service renewal date"
            - name: Company document vault and signing authority
              description: |-
                ## Purpose
                Signed agreements end up scattered across personal email, e-signature accounts and laptops, and nobody is sure who may sign what for the company. A single vault with a clear folder structure and a short written signing policy makes contracts findable and stops a founder committing the company to something the others never saw.

                ## Milestones
                1. A company-owned document vault with folders for corporate, equity, IP, contracts, tax and banking.
                2. Every signed document since formation moved into it.
                3. A one-page signing authority policy approved by resolution.
                4. Access limited to the people who need it, with a quarterly review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All signed company documents are in one company-owned vault and a signing authority policy has been approved by resolution."
                cadence: rolling
              tasks:
                - "Create a company-owned vault with six top-level folders"
                - "Move every signed document from inboxes and e-signature accounts into it"
                - "Draft a one-page policy on who can sign what and up to what value"
                - "Review who has access to the vault and remove anyone who should not @recurring(quarterly)"
            - name: Founder expenses and loans to the company
              description: |-
                ## Purpose
                In the first year founders pay for domains, software and travel on personal cards, and some lend the company cash. Without a reimbursement routine and a written loan record, those sums become arguments at the first round or ambiguous items in the accounts.

                ## Milestones
                1. A simple expense claim form and a rule on what founders may spend without approval.
                2. Every pre-incorporation cost the company will reimburse listed and approved.
                3. Any founder loan documented with amount, date and repayment terms.
                4. Monthly claims paid out or recorded as owed in the books.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every founder expense and loan since formation is either repaid or recorded in the books against a signed claim or loan note."
                cadence: rolling
              tasks:
                - "List costs founders paid personally before and since incorporation"
                - "Approve the pre-incorporation costs the company will repay by resolution"
                - "Write a short loan note for any cash a founder lent the company"
                - "Submit and approve founder expense claims for the month @recurring(monthly:27)"
            - name: Annual accounts and annual return cycle
              description: |-
                ## Purpose
                Even a company with no revenue usually has to file annual accounts or a return, pay any franchise or annual tax and confirm its details to the registry each year. Treating the year-end as a planned cycle, with the accountant briefed early, keeps the company in good standing and avoids automatic late fees.

                ## Milestones
                1. The financial year end and every annual filing date confirmed.
                2. Books closed and handed to the accountant within six weeks of year end.
                3. Accounts, annual return and any annual tax filed and paid on time.
                4. Notes from the year kept to make next year's cycle faster.

                ## Notes
                Some investor jurisdictions calculate annual tax in a way that produces a frightening default figure. Ask your registered agent or accountant before paying an unexpected bill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Annual accounts, returns and annual taxes for the year are filed and paid before their deadlines, with receipts saved."
                cadence: cyclic
              tasks:
                - "Confirm the financial year end and every annual filing date"
                - "Brief the accountant six weeks before year end on anything unusual"
                - "File the annual accounts, return and annual tax for the company @recurring(yearly)"
                - "Write a short note on what slowed this year's cycle down"
            - name: Business insurance review for a young company
              description: |-
                ## Purpose
                Insurers, customers and investors increasingly expect cover that founders never think about: general and professional liability, cyber, and directors and officers once there is a board. Reviewing what the company really needs each year, as contracts and headcount change, avoids both gaps and paying for cover that a two-person company does not need.

                ## Milestones
                1. The insurance clauses in customer and office contracts listed.
                2. Quotes from a broker for the covers those contracts and risks require.
                3. Policies bought and certificates stored in the vault.
                4. A yearly renewal review booked a month before expiry.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The company holds every insurance cover its contracts require, with certificates on file and a renewal review in the calendar."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List the insurance requirements in every signed customer and office contract"
                - "Ask a broker which covers suit a company of your size and sector"
                - "Store the policy certificates in the company vault"
                - "Review insurance cover against current contracts and headcount @recurring(yearly)"
            - name: Director duties for first-time founders
              description: |-
                ## Purpose
                Becoming a director brings personal legal duties: acting in the company's interest, avoiding conflicts, keeping records and taking care when the company is short of cash. Founders who learn these in the first month make better calls later, especially when runway gets tight and creditors' interests start to matter.

                ## Milestones
                1. The official guidance on director duties in your jurisdiction read and summarised on one page.
                2. A conflicts of interest register started, even if empty.
                3. The point at which the company's finances change directors' duties understood and written down.
                4. Questions for your lawyer answered and filed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each director has read the official duties guidance and signed a one-page summary, and a conflicts register exists."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the registry or government guidance on director duties"
                - "Summarise the duties on one page in your own words"
                - "Start a conflicts of interest register for every director"
                - "Ask your lawyer what changes when the company may not pay its debts"
            - name: Reading your own constitutional documents
              description: |-
                ## Purpose
                Few founders have read their articles, bylaws or certificate of incorporation, yet these documents decide who can appoint directors, how shares transfer and what needs shareholder approval. An evening spent reading them with a pen, and an hour with the lawyer on the marked clauses, means no surprises when a decision is contested.

                ## Milestones
                1. The articles or bylaws and certificate read in full by every founder.
                2. Clauses on directors, share transfers, quorum and approvals summarised.
                3. Unclear clauses answered by your lawyer in writing.
                4. A one-page cheat sheet of the rules saved beside the documents.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the company's constitutional rules exists, reviewed by the lawyer and read by every founder."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Print or open the filed articles and certificate of incorporation"
                - "Mark every clause on directors, transfers, quorum and approvals"
                - "Send the marked clauses to your lawyer with your questions"
                - "Write a one-page cheat sheet of the rules that matter day to day"
            - name: Share capital basics for founders
              description: |-
                ## Purpose
                Authorised versus issued shares, nominal value, share premium, classes and dilution are terms that appear in every funding document, and founders who mix them up agree to the wrong thing. Working through a short course or primer, then explaining your own cap table back in those terms, makes term sheets readable.

                ## Milestones
                1. A primer or short course on company share capital completed.
                2. Your own company's authorised and issued shares explained in one paragraph.
                3. A worked example of dilution from a hypothetical round on your cap table.
                4. Five terms you were unsure of now written up in your own words.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain your company's share capital and a worked dilution example to a co-founder without notes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick a primer on company share capital from a law firm or accelerator library"
                - "Explain your company's authorised and issued shares in one paragraph"
                - "Model a hypothetical round on a copy of the cap table to see dilution"
                - "Write your own definitions of five terms you were unsure of"
            - name: Company tax basics for a new startup
              description: |-
                ## Purpose
                Corporate income tax, sales tax, payroll taxes, research credits and the tax treatment of losses all start applying from the day of formation, often before any revenue. Understanding the outline, so you can ask your accountant the right questions, prevents costly first-year surprises like a missed registration or an unclaimed credit.

                ## Milestones
                1. The taxes that apply to a company like yours listed from the tax authority's guidance.
                2. How early losses can be carried forward noted for your jurisdiction.
                3. Any startup or research tax credit you might qualify for identified.
                4. A list of questions answered by your accountant.

                ## Notes
                This is for understanding the landscape, not for making tax decisions yourself. Every decision belongs with your accountant.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the company's tax obligations and possible credits, checked by your accountant."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's guidance for newly formed companies"
                - "Note how losses in the early years can be carried forward"
                - "Check whether any research or startup tax credit could apply"
                - "Take your questions to the accountant and record the answers"
            - name: Contractor versus employee rules for early helpers
              description: |-
                ## Purpose
                Early startups lean on freelancers, friends and part-time helpers, and getting their status wrong can bring back taxes, penalties or a claim that someone owns part of the code. Learning the tests your tax authority uses before engaging anyone keeps the first contracts right.

                ## Milestones
                1. The official status tests for contractors and employees read and summarised.
                2. Every current helper listed with how they work, are paid and are directed.
                3. Any doubtful case raised with your accountant or lawyer.
                4. Each helper on a written agreement that matches their real status and assigns IP.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every person working for the company has a written agreement matching their status as checked against the official tests."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the tax authority's guidance on employment status"
                - "List every helper with their hours, pay and who directs their work"
                - "Raise any unclear case with your accountant or lawyer"
                - "Put each helper on a written agreement that includes an IP assignment"
            - name: How investors diligence a company's formation
              description: |-
                ## Purpose
                Legal diligence on a seed round focuses on a predictable list: the certificate and articles, founder share paperwork, tax elections, IP assignments, registers, resolutions and any unusual promises. Studying a typical diligence checklist now, a year before you need it, shows exactly what to fix while it is still cheap.

                ## Milestones
                1. A typical early-stage legal diligence checklist obtained from a law firm or accelerator.
                2. Each item marked as in place, missing or unclear for your company.
                3. The three most serious gaps given a fix date.
                4. The checklist saved for the funding data room project.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A diligence checklist scored for your company, with every gap given an owner and a date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find an early-stage legal diligence checklist from a law firm or accelerator"
                - "Mark each item as in place, missing or unclear"
                - "Ask the agent to turn the gaps into a dated fix list"
                - "Fix the most serious gap before the end of the month"
            - name: Founders' agreement on decisions, deadlock and leavers
              description: |-
                ## Purpose
                When co-founders disagree or one leaves, the company falls back on whatever the documents say, and default company law rarely fits a two- or three-person startup. Writing down roles, which decisions need everyone, how a deadlock is broken and what happens to a leaver's shares turns hard future conversations into the application of rules already agreed.

                ## Milestones
                1. Founder roles, time commitments and titles written down.
                2. A list of reserved decisions that need every founder's consent.
                3. A deadlock mechanism agreed, such as a named mediator or a casting vote.
                4. Good and bad leaver terms agreed and the whole agreement signed after legal review.

                ## Notes
                Keep the equity split itself in its own conversation. This agreement is about the rules that apply after the split is settled.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A founders' agreement covering roles, reserved decisions, deadlock and leaver terms is signed by every founder after legal review."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write each founder's role, hours and title on one page"
                - "List the decisions that should need every founder to agree"
                - "Choose a deadlock method and a named mediator"
                - "Agree good and bad leaver terms and send the draft for legal review"
            - name: Shareholders' agreement before the first outside shareholder
              description: |-
                ## Purpose
                The day an angel, adviser or employee takes shares, the founders' private understanding stops being enough. A shareholders' agreement covering transfers, drag and tag rights, information rights and new share issues, in place before that first outside holder joins, avoids renegotiating with someone who now has rights of their own.

                ## Milestones
                1. The first outside shareholder and their expected stake identified.
                2. The main terms agreed among founders: transfers, drag and tag, pre-emption and information rights.
                3. A draft prepared by your lawyer and checked against the articles.
                4. The agreement signed by every shareholder at or before the first outside issue.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A shareholders' agreement consistent with the articles is signed by every shareholder no later than the first outside share issue."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note who is likely to be the first shareholder outside the founders"
                - "Agree the founders' position on transfers, drag, tag and pre-emption"
                - "Ask your lawyer to draft the agreement and check it against the articles"
                - "Collect every shareholder's signature before shares are issued"
            - name: Pre-incorporation contracts and work brought into the company
              description: |-
                ## Purpose
                Before the company existed, a founder may have signed a pilot agreement, a hosting contract or a lease in their own name, and those obligations do not move to the company by themselves. Listing them and novating, assigning or ratifying each one puts the risk and the benefit where they belong.

                ## Milestones
                1. Every agreement signed by a founder for the business before incorporation listed.
                2. Each one marked for novation, assignment, ratification or closing.
                3. Counterparties asked to move contracts into the company's name where needed.
                4. Resolutions recording any contracts the company adopts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every pre-incorporation agreement has been moved into the company, ratified by resolution or closed, with the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search founders' email for any agreement signed for the business before formation"
                - "Decide for each one whether to novate, assign, ratify or close it"
                - "Write to counterparties asking to move contracts into the company's name"
                - "Pass a resolution adopting the contracts the company is taking over"
            - name: Starter contract templates for a new company
              description: |-
                ## Purpose
                Within months a startup needs a mutual NDA, a contractor agreement with IP assignment, a simple customer agreement and website terms, and founders who sign whatever the other side sends give away more than they realise. A small set of lawyer-approved templates, with notes on what may be changed, saves fees and protects the IP.

                ## Milestones
                1. The four or five agreements the company will need in the next six months listed.
                2. Templates drafted or sourced and reviewed by your lawyer.
                3. A note on each template saying which clauses may be changed without legal review.
                4. The templates stored in the vault and used for every new agreement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Lawyer-reviewed templates for NDA, contractor and customer agreements are in the vault with notes on permitted changes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the agreements the company expects to sign in the next six months"
                - "Ask your lawyer for templates or reviewed versions of open-source ones"
                - "Add a short note to each template on clauses you may change alone"
                - "Save the templates in the contracts folder of the vault"
            - name: Privacy and data protection registration
              description: |-
                ## Purpose
                A company that collects customer emails, analytics or payment details may need to register with a data protection authority, appoint a contact and publish a privacy notice from the first signup. Getting the basics set up at formation is simpler than retrofitting them after a customer's security questionnaire arrives.

                ## Milestones
                1. The personal data the company collects listed with where it is stored.
                2. Any registration or fee required by your data protection authority completed.
                3. A privacy notice published that matches what the product really does.
                4. A named person responsible for privacy requests.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The company has completed any required data protection registration and publishes a privacy notice matching its real data use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the personal data the product and website collect"
                - "Check whether your data protection authority requires registration or a fee"
                - "Publish a privacy notice that matches the real data flows"
                - "Renew any data protection registration and update the notice @recurring(yearly)"
            - name: Business licences and permits check
              description: |-
                ## Purpose
                Software companies usually need few licences, but fintech, health, food, transport, education and hardware founders can be stopped by a permit nobody mentioned at formation. Checking sector and local rules early means a launch or a customer contract is never blocked by a missing licence.

                ## Milestones
                1. The company's activities described in plain terms against the local licensing lists.
                2. Any sector regulator's requirements checked.
                3. Required licences applied for or a written note that none apply.
                4. Renewal dates added to the compliance calendar.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written record shows each licence the company needs, with applications made, or a note confirming none apply."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe what the company does in three plain sentences"
                - "Check local business licence lists and any sector regulator's website"
                - "Apply for any licence required before launch"
                - "Confirm all licences and permits are still valid @recurring(yearly)"
            - name: Paying the founders through payroll
              description: |-
                ## Purpose
                Whether founders take a salary, a small salary plus dividends or nothing at all affects personal tax, the company's runway and, in some countries, social security and immigration status. Deciding with your accountant and registering as an employer only when needed keeps the company compliant without adding admin it cannot yet carry.

                ## Milestones
                1. Each founder's personal situation and need for income written down.
                2. Options compared with your accountant: no pay, salary, or salary and dividends.
                3. The company registered as an employer if any founder is paid.
                4. A payroll provider set up and the first run completed correctly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on founder pay, with employer registration and a first correct payroll run if anyone is paid."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask each founder how much income they need from the company"
                - "Compare founder pay options with your accountant"
                - "Register as an employer and choose a payroll provider if anyone is paid"
                - "Approve the founders' payroll run and file the payroll return @recurring(monthly:25)"
            - name: Equity incentive plan adoption
              description: |-
                ## Purpose
                The first employee or adviser offered options needs a plan to grant them under, and creating the plan in a hurry for one offer often produces the wrong pool size or missing valuation work. Adopting a plan approved by the board and shareholders, with a pool sized for the next eighteen months of hires, lets offers go out quickly and correctly.

                ## Milestones
                1. The hires and advisers expected in the next eighteen months listed with indicative grants.
                2. A plan type chosen with your lawyer that suits your jurisdiction's tax rules.
                3. The plan and pool size approved by board and shareholder resolution.
                4. Any required valuation or tax authority approval obtained before the first grant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A board- and shareholder-approved incentive plan with a sized pool exists before the first option offer is made."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List expected hires and advisers for the next eighteen months"
                - "Ask your lawyer which plan type suits your jurisdiction"
                - "Approve the plan and pool size by board and shareholder resolution"
                - "Arrange any valuation required before the first grant"
            - name: Holding company and operating subsidiary decision
              description: |-
                ## Purpose
                Some founders hold their shares through a personal holding company, and some startups put a parent in an investor jurisdiction over a local operating company. Either structure can make sense for tax, liability or fundraising, but each adds filings and cost, so the decision deserves a clear comparison before formation rather than after.

                ## Milestones
                1. The reasons for a holding structure written down: tax, liability, investors or exit.
                2. One-entity and two-entity versions compared on annual cost and admin.
                3. Advice taken from an accountant and lawyer on the tax effects.
                4. A recorded decision, with the structure chart if a holding is used.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a holding structure, supported by a written cost comparison and professional advice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down why a holding company is being considered"
                - "Estimate the annual cost of one entity against two"
                - "Ask your accountant and lawyer about the tax effects of each structure"
                - "Record the decision and draw the structure chart"
            - name: Converting a sole trader or LLC into a startup company
              description: |-
                ## Purpose
                Many startups begin as a sole trader, partnership or pass-through LLC that suited a side business, then need a corporation or limited company to raise money and grant options. Planning the conversion, including moving contracts, IP, customers and bank accounts, avoids a gap in which nobody quite owns the business.

                ## Milestones
                1. The current structure's assets, contracts, IP and liabilities listed.
                2. The conversion method chosen with advisers, such as a new company buying the business or a statutory conversion.
                3. Contracts, IP, accounts and customers moved to the new entity.
                4. The old entity closed or kept dormant with its final filings done.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The business is wholly owned by the new company, with contracts and IP transferred and the old entity closed or dormant."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List everything the existing business owns, owes and has signed"
                - "Ask your accountant about the tax cost of each conversion route"
                - "Transfer contracts, IP and accounts to the new company"
                - "Make the final filings for the old entity or set it to dormant"
            - name: Flipping the company into an investor-favoured jurisdiction
              description: |-
                ## Purpose
                Accelerators and foreign investors sometimes ask a company formed locally to create a new parent in their preferred jurisdiction, with founders swapping their shares into it. A flip touches tax, IP, employment and banking in two countries, so it needs a dated plan and advisers on both sides.

                ## Milestones
                1. The reason for the flip and the investor's requirements confirmed in writing.
                2. Tax effects for founders and the company assessed by advisers in both countries.
                3. A step plan agreed: new parent, share exchange, IP and contract moves.
                4. The flip completed with the cap table and registers updated in both entities.

                ## Notes
                Never start a flip because an investor mentioned it once. Get the requirement in writing and the tax advice first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A completed flip with signed share exchange documents, advisers' tax sign-off and matching cap tables in both entities."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the investor or accelerator to confirm the flip requirement in writing"
                - "Brief advisers in both countries on the founders' tax position"
                - "Agree a step plan covering the new parent, share exchange and IP"
                - "Update cap tables and registers in both entities after completion"
            - name: First board meeting of the new company
              description: |-
                ## Purpose
                Holding a proper first board meeting, even with only the founders as directors, ratifies everything done at formation and sets the habit of recording decisions. It is the natural moment to approve the bank mandate, share issues, IP assignments, the financial year end and the signing policy in one sitting.

                ## Milestones
                1. An agenda covering every formation decision that needs approval.
                2. Board papers circulated at least two days before.
                3. The meeting held, with minutes recording each approval.
                4. Minutes signed and filed in the minute book.

                ## Notes
                Start from the **Board meeting** template and keep the first one to an hour.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first board meeting is held and signed minutes ratifying the formation decisions are in the minute book."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft an agenda listing every formation decision to approve"
                - "Circulate board papers two days before the meeting"
                - "Hold the meeting and record each approval in the minutes"
                - "Hold a short directors' meeting and file signed minutes @recurring(quarterly)"
            - name: Formation-to-funding data room
              description: |-
                ## Purpose
                When a term sheet arrives, the investor's lawyers will ask for the corporate record within days. Building a data room of the company's formation, equity, IP, contracts and compliance documents before anyone asks shortens the round and shows investors a founder who runs a tidy company.

                ## Milestones
                1. A data room folder structure matching a standard seed diligence list.
                2. Every corporate, equity and IP document uploaded in final signed form.
                3. An index listing each document, its date and its folder.
                4. A dry run in which an adviser reviews the room and lists gaps.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete data room with an index, reviewed by an adviser, with every flagged gap closed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set up data room folders that follow a seed diligence checklist"
                - "Upload final signed versions of every corporate, equity and IP document"
                - "Write an index of documents with dates and folders"
                - "Ask an adviser to review the room and list what is missing"
            - name: First-anniversary corporate health check
              description: |-
                ## Purpose
                Twelve months after formation is a good moment to check that the company is in good standing, the registers and cap table agree, and nothing filed in a hurry is now wrong. Founders who do this once a year rarely face a painful clean-up during a funding round.

                ## Milestones
                1. Good standing confirmed on the registry record.
                2. Registers, cap table and minute book checked against each other.
                3. Every filing, tax election and assignment from year one confirmed present.
                4. A short list of fixes, each with an owner and a date.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written health check dated within a month of the first anniversary, with every fix assigned an owner and date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download a good standing check from the registry"
                - "Compare the registers, cap table and minute book side by side"
                - "Confirm every year-one filing, election and assignment is on file"
                - "Assign each fix an owner and a date"
            - name: Solo founder incorporating as sole director
              description: |-
                ## Purpose
                A solo founder is often the only director, shareholder and signatory, which makes formation quick but leaves the company frozen if that person is ill or unreachable. Planning for that at formation, with a named alternate, documented access and a lighter but still real record-keeping habit, protects customers and future investors.

                ## Milestones
                1. The articles checked for what happens if the sole director cannot act.
                2. A trusted person and process named for emergencies, with legal input.
                3. Passwords, bank access and key documents recorded for that emergency process.
                4. Written resolutions used for decisions even though one person makes them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented continuity plan for the sole director exists, reviewed by the lawyer, with emergency access stored securely."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your lawyer what happens to the company if you cannot act"
                - "Choose a trusted person to step in and agree the process with them"
                - "Store emergency access to bank, domain and vault in a sealed record"
                - "Record your own decisions as written resolutions"
            - name: Co-founders resident in different countries
              description: |-
                ## Purpose
                When co-founders live in different countries, the company's tax residence, where it is managed from, each founder's personal tax on shares and even who can open the bank account all become harder. Mapping these questions before formation, with advisers who know each country, avoids a company accidentally taxed in two places.

                ## Milestones
                1. Each founder's country of residence and tax status recorded.
                2. Where board decisions are made and the company is managed from agreed.
                3. Advice taken on the company's tax residence and each founder's share taxation.
                4. Banking, signing and identity checks planned for founders abroad.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cross-border plan covering the company's tax residence, where it is managed and each founder's tax position, reviewed by advisers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record each founder's country of residence and tax status"
                - "Agree where board meetings are held and decisions are made"
                - "Ask advisers in each country about the company's tax residence"
                - "Check which banks will onboard directors living abroad"
            - name: Incorporating abroad from a smaller market
              description: |-
                ## Purpose
                Founders in smaller markets, such as Trinidad and Tobago, Jamaica or Barbados, often hear they need a company in a bigger investor jurisdiction before anyone will fund them. Sometimes that is true and sometimes a local company or a later flip is better, and the costs of a foreign parent, registered agent and bank account add up for a pre-revenue team.

                ## Milestones
                1. Target investors asked what structure they actually require.
                2. Annual costs of a local company, a foreign parent and both compared.
                3. Local tax, exchange control and reporting duties on owning a foreign company checked with an accountant.
                4. A structure chosen with a plan for banking and receiving foreign payments.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A structure decision backed by investor requirements in writing and a cost comparison checked by a local accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask three target investors which company structure they require"
                - "Compare the annual cost of a local company and a foreign parent"
                - "Ask a local accountant about tax and reporting on owning a foreign company"
                - "Plan how the company will bank and receive payments from abroad"
            - name: Spouses or family members as co-founders
              description: |-
                ## Purpose
                Couples, siblings and parents with grown children found companies together often, and the trust is real, but investors and the law still need clear documents. Treating the family founder like any other on shares, IP and leaver terms, and checking the effect of marriage or inheritance rules on shares, protects both the company and the family.

                ## Milestones
                1. Shares, roles and leaver terms documented exactly as for unrelated founders.
                2. Advice taken on how marriage, separation or inheritance rules could affect the shares.
                3. Conflicts of interest recorded where family members approve each other's pay.
                4. Wills or estate plans checked to cover the shares.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Family co-founders hold the same documented share, IP and leaver terms as any founder, with advice recorded on marital and estate effects."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check that family founders have the same share and IP paperwork as others"
                - "Ask a lawyer how separation or inheritance could affect the shares"
                - "Record conflicts where family members set each other's pay"
                - "Review each founder's will or estate plan to cover the shares"
            - name: Clean-up of a hastily formed company
              description: |-
                ## Purpose
                Companies formed in an afternoon online often carry missing founder share paperwork, unsigned IP assignments, empty registers or the wrong share structure. Fixing them methodically before a round, with a lawyer and a dated plan, costs a fraction of fixing them under a term sheet deadline.

                ## Milestones
                1. A gap list built against a standard diligence checklist.
                2. Each gap rated by how much it would worry an investor.
                3. Corrective documents drafted, signed and filed for the serious gaps.
                4. A confirming resolution recording the corrections.

                ## Notes
                Start from the **Remediation plan** template. Some fixes, such as a missed tax election, cannot be undone; your adviser will explain the alternatives.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every serious formation gap has corrective documents signed and filed, recorded in a confirming resolution."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Score the company against a seed diligence checklist"
                - "Rate each gap by how much an investor would care"
                - "Ask your lawyer to draft corrective documents for the serious gaps"
                - "Pass a resolution confirming and recording the corrections"
            - name: Tax relief eligibility records for founder shares
              description: |-
                ## Purpose
                Several countries offer generous tax relief on startup shares, such as qualified small business stock rules in the US or investment schemes like SEIS and EIS in the UK, but only if the company meets conditions from issue onwards. Keeping evidence of eligibility year by year can be worth a great deal at exit and is nearly impossible to rebuild later.

                ## Milestones
                1. Any relief schemes that might apply identified with your accountant.
                2. The conditions for each scheme listed with the evidence needed.
                3. A yearly record of the evidence, such as asset tests, activity and share issue details.
                4. Any advance assurance or registration applied for where it exists.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An eligibility file for each applicable relief scheme exists, with evidence added for every year since issue."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Ask your accountant which share relief schemes could apply"
                - "List each scheme's conditions and the evidence needed"
                - "Apply for advance assurance where the scheme offers it"
                - "Add this year's evidence to the relief eligibility file @recurring(yearly)"
            - name: Intercompany agreements for a multi-entity group
              description: |-
                ## Purpose
                Once a parent owns an operating subsidiary or a local entity employs the team, money, IP and services move between companies, and tax authorities expect written agreements priced at arm's length. Putting intercompany services, IP licence and cost-sharing agreements in place early prevents a transfer pricing problem from appearing in diligence.

                ## Milestones
                1. A structure chart showing every entity and what flows between them.
                2. Intercompany agreements drafted for services, IP and funding.
                3. Pricing method chosen with a tax adviser and documented.
                4. Invoices or journals between entities running monthly in line with the agreements.

                ## Notes
                Transfer pricing is specialist work. Use an adviser who does it routinely for small groups.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signed intercompany agreements with a documented pricing method cover every flow between group entities."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw a chart of every group entity and the flows between them"
                - "Ask a tax adviser to set the pricing method for each flow"
                - "Sign intercompany agreements for services, IP and funding"
                - "Review intercompany pricing and agreements against the year's activity @recurring(yearly)"
---

# Incorporating a Startup

This area is for founders turning an idea, a side project or a trading sole business into a properly formed company that investors, banks and future hires can trust. It starts with the formation decisions (timing, jurisdiction, entity type and adviser), moves through filing, founder shares, IP assignment, tax elections and the bank account, then the routines that keep a company in good standing, the knowledge a first-time director needs, the founder and shareholder agreements and structural choices, dated milestones like the first board meeting and a funding-ready data room, variants for solo, cross-border, smaller-market and family founders, and finally the specialist work of cleaning up a rushed formation and running a multi-entity group.

What repeats is a weekly look at official mail and the books, a monthly company admin hour, founder expense and payroll runs, quarterly cap table, register, resolution and access reviews, and the yearly cycle of accounts, annual returns, insurance, licences and relief records. The **Purchase decision**, **Compliance control**, **Month-end close**, **Vendor**, **Board meeting** and **Remediation plan** templates pair with choosing an adviser, the compliance calendar, the admin hour, the registered agent, the first board meeting and the clean-up. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
