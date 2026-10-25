---
id: practice-ownership.professional-referral-networks
name: Professional Referral Networks
description: "A clear picture of where your work really comes from, a register of referrers kept warm on purpose, referral rules checked with your regulator, and routines that keep both sides of every introduction informed."
category: business
version: 1.0.0
tags: [practice-ownership, professional-referral-networks, small-business, freelancer, referrals, business-development, professional-networks, client-acquisition]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - metrics-log
    - meeting-notes
    - purchase-decision
    - risk-register
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Professional Referral Networks
          description: "Building referral relationships with other professionals: who refers to whom, introductions, keeping referrers informed and tracking referral sources."
          projects:
            - name: Twelve-month audit of where new clients came from
              description: |-
                ## Purpose
                Most practices believe they know their main referral sources and are wrong about at least one of them. Going back through the last twelve months of new client or patient files and recording how each one arrived gives you a real ranking of referrers, and shows which relationships deserve time before you spend any.

                ## Milestones
                1. Every new client or patient from the last twelve months listed with the date they first made contact.
                2. Each one tagged with a source: named referrer, existing client, search, directory, insurer or unknown.
                3. Referrers ranked by number of introductions and by fees billed on that work.
                4. The share of new work marked unknown calculated, as a baseline to reduce.

                ## Notes
                Expect the unknown share to be high the first time, often a third or more. That number is the reason for the next project.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A spreadsheet lists every new client from the last twelve months with a source, plus a ranked list of the top ten referrers by fees."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export a list of new clients or patients opened in the last twelve months"
                - "Check each intake form or first email for how they heard of the practice"
                - "Tag every file with a source category and the named referrer if known"
                - "Rank referrers by number of introductions and by fees billed"
            - name: Referral source question at first contact
              description: |-
                ## Purpose
                Asking how someone heard of you is easy at the first phone call and nearly impossible six months later. Adding one required question to the booking script, web form and intake record, with a fixed list of answers plus the referrer's name, means every new client arrives already tagged and the audit never has to be repeated by hand.

                ## Milestones
                1. One referral source question added to the phone script, online booking form and intake record.
                2. A fixed list of source answers agreed, with a free-text field for the referrer's name.
                3. Reception and support staff briefed on asking it and spelling referrer names consistently.
                4. Four weeks of new clients checked, with fewer than one in ten recorded as unknown.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The source question is live on every intake route and fewer than 10 percent of new clients in a four-week sample are recorded as unknown."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the source question and its fixed list of answers"
                - "Add the question to the booking script, web form and intake record"
                - "Brief reception on asking it at the first call and recording names"
                - "Check a four-week sample of new clients for gaps in the source field"
                - "Check new intake records for missing sources @recurring(monthly:28)"
            - name: Referral rules check with your professional regulator
              description: |-
                ## Purpose
                Professional rules on referrals vary sharply: some professions ban referral fees or fee sharing outright, some allow them only with written disclosure to the client, and healthcare often has strict rules on inducements and self-referral. Reading your regulator's current guidance before you build anything protects your licence and tells you which later projects in this area you can use at all.

                ## Milestones
                1. Your regulator's current rules or guidance on referrals, fee sharing, inducements and gifts found and saved.
                2. A one-page summary of what is allowed, what needs disclosure and what is prohibited for your profession.
                3. Any rules from insurers, health funds or panels you work with added to the summary.
                4. Points of doubt put to the regulator's helpline or your professional adviser, with answers recorded.

                ## Notes
                This is a reading and recording exercise, not legal advice. Where the rules are unclear, ask your regulator or a professional conduct adviser and keep their answer on file.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page summary of the referral, fee-sharing and inducement rules that apply to the practice is saved, with open questions answered in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find your regulator's current guidance on referrals and fee sharing"
                - "Note what needs written disclosure to the client and what is banned"
                - "Add any referral conditions set by insurers or panels you belong to"
                - "Send open questions to the regulator's helpline or a conduct adviser"
            - name: Map of professions that share your clients
              description: |-
                ## Purpose
                Clients rarely need only one professional: a physiotherapist's patients see GPs and sports coaches, a family lawyer's clients need accountants and counsellors, an engineer works beside architects and contractors. Mapping which professions sit before, beside and after you in a client's problem shows where introductions naturally flow and which professions you have no relationship with yet.

                ## Milestones
                1. The five to eight professions that see your clients before or after you listed.
                2. Each profession marked with what triggers a referral in each direction.
                3. Your current named contact in each profession recorded, or the gap marked.
                4. Two professions with no contact chosen as targets for the coming quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page map shows at least five adjacent professions, the referral trigger each way and a named contact or a marked gap for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the professions your last twenty clients also saw or needed"
                - "Write the client situation that triggers a referral each way"
                - "Note your current named contact in each profession"
                - "Pick two professions with no contact to approach this quarter"
            - name: Referrer register with a page per contact
              description: |-
                ## Purpose
                Referral relationships live in one person's head until that person is ill, on leave or gone. A register with a page per referrer, holding their firm, specialism, what they refer, what they like to hear back and the last contact date, makes the network something the practice owns rather than something one partner remembers.

                ## Milestones
                1. A register created with one page per referring professional or firm.
                2. Each page holding contact details, specialism, referral types and last contact date.
                3. Everyone from the twelve-month audit with two or more referrals entered.
                4. Access agreed for partners and the practice manager, with one person responsible for updates.

                ## Notes
                Start from the **Person** template for each referrer page. Keep only business contact details and keep client information out of these pages.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every referrer with two or more introductions in the last year has a register page with specialism, referral types and last contact date filled in."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create the register and a page layout for each referrer"
                - "Enter every referrer with two or more introductions from the audit"
                - "Add the date and type of your last contact with each one"
                - "Name the person responsible for keeping the register current"
                - "Update last contact dates in the referrer register @recurring(monthly:3)"
            - name: Ideal referral profile on one page
              description: |-
                ## Purpose
                Referrers send you what they think you do, which is often broader or narrower than what you want. A single page describing the clients you serve best, the problems you solve, the work you do not take and the details you need with each referral gives referrers something concrete to match against and cuts the time spent declining poor fits.

                ## Milestones
                1. The three client types or problems the practice handles best described in plain words.
                2. Work the practice does not take listed, with where it should go instead.
                3. The minimum information needed with a referral written as a short checklist.
                4. The page reviewed by one trusted referrer and revised from their comments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page referral profile with best-fit clients, exclusions and a referral information checklist exists and has been reviewed by one referrer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe the three client situations the practice handles best"
                - "List the work you decline and where each type should go"
                - "Write the checklist of details you need with every referral"
                - "Ask one trusted referrer to read the page and comment"
            - name: Vetted directory of professionals you refer out to
              description: |-
                ## Purpose
                Every time you send a client elsewhere your name goes with them, so a careless onward referral can cost you the client and the original referrer. A short directory of professionals you have checked, with their registration, specialism, fees range and waiting time, means staff send clients to people you trust instead of whoever comes up first in a search.

                ## Milestones
                1. The professions you refer out to most often listed from recent files.
                2. Two or three named professionals per profession recorded, with registration confirmed on the regulator's public register.
                3. Specialism, typical waiting time and fee range noted for each.
                4. The directory shared with every professional and support staff member who makes onward referrals.

                ## Notes
                Check registration on the public register rather than taking it on trust. Recheck yearly, as registrations lapse and conditions are imposed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A directory lists at least two registered professionals for each profession you refer out to, with registration checked and the date of the check."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the professions you referred clients out to last year"
                - "Choose two or three named professionals for each profession"
                - "Confirm each one on their regulator's public register"
                - "Share the directory with everyone who makes onward referrals"
                - "Recheck registrations of every directory entry @recurring(yearly)"
            - name: Standard referral letter and introduction email
              description: |-
                ## Purpose
                Busy professionals skim referral letters in seconds, and one that buries the question on page two often gets a slow or wrong response. A standard letter and a short introduction email, each with the reason for referral, the specific question, urgency and what has been done so far at the top, make every outbound referral faster to act on and easier to file.

                ## Milestones
                1. A referral letter layout with reason, question, urgency and history in the first five lines.
                2. A short introduction email for connecting a client with another professional by name.
                3. Both saved in the practice software or shared drive where every professional can use them.
                4. Five recent outbound referrals rewritten in the new layout as examples.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard referral letter and introduction email are saved in the practice system and used for every outbound referral in the following month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect five recent referral letters the practice sent out"
                - "Draft a layout with reason, question and urgency at the top"
                - "Write a three-paragraph introduction email for named handovers"
                - "Save both templates where every professional can find them"
            - name: Client consent wording for referral information sharing
              description: |-
                ## Purpose
                Sharing a client's details with another professional, or telling a referrer how their introduction went, usually needs the client's agreement under confidentiality and data protection rules. Clear consent wording at intake and at the point of referral, recorded in the file, lets you keep referrers informed without breaching the trust that made the referral possible.

                ## Milestones
                1. The confidentiality and data protection duties that apply to referral information summarised from your regulator's guidance.
                2. Consent wording drafted for sharing details with an onward professional and for updating the original referrer.
                3. The wording added to intake forms and the referral letter template.
                4. A place in the client record where consent or refusal is recorded.

                ## Notes
                Have the wording checked by your data protection adviser or professional body. A client who refuses consent to update the referrer should still be referred and treated the same.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approved consent wording for onward referral and referrer updates is on the intake form, and consent is recorded in every new client file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your regulator's guidance on sharing client information"
                - "Draft consent wording for onward referrals and referrer updates"
                - "Ask your data protection adviser to check the wording"
                - "Add a consent field to the client record and the intake form"
            - name: Weekly referral log and thank-you round
              description: |-
                ## Purpose
                Thanking a referrer within a week of the introduction is the single habit most referrers notice, and the one most practices let slip when they are busy. A short Friday routine that logs every referral received that week and sends a personal thank-you, within your regulator's rules on gifts, keeps the relationship warm at almost no cost.

                ## Milestones
                1. A weekly slot of twenty minutes held for logging and thanking referrers.
                2. Every referral received that week entered against the referrer's register page.
                3. A personal thank-you note or call made for each new referral within seven days.
                4. Four weeks completed in a row with no referral left unthanked.

                ## Notes
                A handwritten card or a short call beats a gift, and avoids any question under inducement rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks every referral received is logged against the referrer and thanked within seven days."
                cadence: rolling
              tasks:
                - "Block twenty minutes every Friday for the referral log"
                - "Log the week's referrals and send thank-you notes @recurring(weekly:fri)"
                - "Keep a stock of plain thank-you cards at the front desk"
                - "Note each thank-you on the referrer's register page"
            - name: Closing the loop with referrers on each outcome
              description: |-
                ## Purpose
                Nothing kills a referral relationship faster than silence: the referrer never hears whether their client was seen, helped or turned away. Sending a brief update at agreed points, with the client's consent, tells referrers their trust was well placed and gives them a reason to send the next one.

                ## Milestones
                1. Update points agreed for each referral type, such as first appointment, plan agreed and work completed.
                2. A short update note format that shares only what consent allows.
                3. Every open referral from the last month checked for a missing update.
                4. Updates sent at each agreed point for two months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over two months, every referral with consent receives an update at each agreed point, checked against the referral log."
                cadence: rolling
              tasks:
                - "Agree the update points for each common referral type"
                - "Write a short update note that respects the consent recorded"
                - "Check open referrals for missing referrer updates @recurring(weekly:tue)"
                - "Send any overdue updates found in the first check"
            - name: Monthly referral source report
              description: |-
                ## Purpose
                Monthly numbers show changes that an annual audit hides: a referrer who has gone quiet, a new source growing fast, or a service that only one firm ever refers to. A one-page report of new clients by source, fees by source and the unknown share, read at the partners' meeting, turns referral work into something you can steer.

                ## Milestones
                1. A report layout with new clients by source, fees by source and the unknown share.
                2. The report produced from the intake data by a named person each month.
                3. The report on the agenda of the monthly partners' or owner's review.
                4. Three months of reports compared and one action agreed from the trend.

                ## Notes
                Start from the **Metrics log** template to keep the monthly figures side by side.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A referral source report is produced and discussed at the monthly review for three months in a row, with at least one recorded action."
                cadence: rolling
              tasks:
                - "Set up the report layout with sources, fees and the unknown share"
                - "Produce the referral source report from intake data @recurring(monthly:8)"
                - "Add the report to the monthly partners' meeting agenda"
                - "Record one action from each month's discussion"
            - name: Quarterly referrer tiering review
              description: |-
                ## Purpose
                Not every referrer needs the same attention: five people may send half your work, while forty send one a year. Sorting referrers each quarter into tiers by volume, value and fit tells you who gets regular visits, who gets a newsletter and who you should approach about sending more of the right work.

                ## Milestones
                1. Tier definitions written, for example top, steady, occasional and lapsed.
                2. Every register page given a tier using the last twelve months of data.
                3. A contact plan set for each tier, from monthly visits to a yearly note.
                4. The review repeated the next quarter with tier changes noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every referrer in the register has a tier and a contact plan, reviewed and updated at the end of each quarter."
                cadence: cyclic
              tasks:
                - "Write the tier definitions and the contact plan for each tier"
                - "Assign a tier to every referrer using twelve months of data"
                - "Review referrer tiers and note movers @recurring(quarterly)"
                - "Flag top-tier referrers with no contact in the last quarter"
            - name: Visit calendar for top-tier referrers
              description: |-
                ## Purpose
                Relationships with the referrers who matter most are kept by being in the room, not by email. A calendar that books a coffee, practice visit or lunch with each top-tier referrer every two to three months, with notes from each meeting, keeps you current on what they need and what is changing in their practice.

                ## Milestones
                1. Each top-tier referrer given a visit slot in the next quarter.
                2. A standing monthly reminder to book the following month's visits.
                3. Notes from every visit saved to the referrer's register page.
                4. One useful change made in the practice from something a referrer said.

                ## Notes
                Start from the **Meeting notes** template for each visit. Ask one question every time: what would make referring to us easier?
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every top-tier referrer has had an in-person or video meeting in the last three months, with notes on their register page."
                cadence: rolling
              tasks:
                - "List top-tier referrers and propose a visit date to each"
                - "Book next month's referrer visits @recurring(monthly:15)"
                - "Save notes from each visit on the referrer's page"
                - "Ask each referrer what would make referring easier"
            - name: Response standard for inbound referrals
              description: |-
                ## Purpose
                Speed is what a referrer judges you on first: a client they sent who waits a week for a callback reflects badly on them. A written standard, such as contact within one working day and a first appointment within an agreed number of days, with a named owner for the referral inbox, makes the practice reliable to refer to.

                ## Milestones
                1. A response standard written for first contact and first appointment.
                2. One shared inbox or phone route for referrals, with a named owner and a deputy.
                3. Response times measured for a month against the standard.
                4. Any breach reviewed and the cause fixed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Nine in ten inbound referrals over one month receive first contact within the written standard, measured from the referral log."
                cadence: rolling
              tasks:
                - "Write the response standard for first contact and first appointment"
                - "Set up one referral inbox with a named owner and a deputy"
                - "Check the referral inbox for anything unanswered @recurring(daily)"
                - "Measure a month of response times against the standard"
            - name: Monthly check that outbound referrals were seen
              description: |-
                ## Purpose
                Once a client leaves with a referral letter, many practices never learn whether they were seen, and a missed referral can harm the client and expose the practice. A monthly check of outbound referrals, following up any client not yet seen, protects the client and shows which professionals in your directory actually respond.

                ## Milestones
                1. Every outbound referral logged with date, recipient and urgency.
                2. A monthly check of referrals older than the expected waiting time.
                3. Clients or recipients contacted where no appointment is confirmed.
                4. Recipients who repeatedly fail to respond flagged for removal from the directory.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month every outbound referral older than its expected wait has a confirmed appointment or a recorded follow-up."
                cadence: rolling
              tasks:
                - "Add an outbound referral log with date, recipient and urgency"
                - "Follow up outbound referrals with no confirmed appointment @recurring(monthly:22)"
                - "Record the result of each follow-up in the client file"
                - "Flag directory entries that repeatedly fail to respond"
            - name: Annual referral network plan
              description: |-
                ## Purpose
                Planning the year's referral work in one sitting stops it being squeezed out by client work in March and forgotten by June. A yearly plan naming the professions to approach, the relationships to deepen, the events to hold and the time budget for each partner turns good intentions into dated commitments.

                ## Milestones
                1. Last year's referral numbers and audit findings summarised on one page.
                2. Three to five goals set, such as two new professions or a lower unknown share.
                3. Monthly hours for referral work agreed for each partner or professional.
                4. The plan's events and visits placed in the practice calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written annual referral plan with goals, named owners and hours per person is agreed and its dates are in the practice calendar."
                cadence: cyclic
              tasks:
                - "Summarise last year's referral numbers on one page"
                - "Set three to five referral goals for the year"
                - "Agree monthly referral hours for each partner"
                - "Write and agree the next year's referral plan @recurring(yearly)"
            - name: Dormant referrer reactivation round
              description: |-
                ## Purpose
                Dormant referrers are cheaper to win back than new ones are to find, and the reason they stopped is often fixable: a slow response, a change of staff or a service they did not know you offer. A quarterly round of contact with referrers who have gone quiet for six months finds out why and brings some of them back.

                ## Milestones
                1. Referrers with no introduction in six months listed from the register.
                2. Each one contacted with a short call or note asking how things are.
                3. The reason for the gap recorded where they give one.
                4. Any fixable cause, such as a slow response, passed to the person who can fix it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every referrer silent for six months is contacted each quarter and the reason for the gap, where given, is recorded on their page."
                cadence: rolling
              tasks:
                - "List referrers with no introduction in the last six months"
                - "Contact dormant referrers and record why they went quiet @recurring(quarterly)"
                - "Pass any fixable cause to the person who can fix it"
                - "Mark referrers who have retired or moved as inactive"
            - name: Learning what each referring profession needs from you
              description: |-
                ## Purpose
                Each profession that refers to you works under its own pressures: a GP has ten minutes, a solicitor has a court deadline, an architect has a planning date. Interviewing two people from each main referring profession about what a good referral experience looks like teaches you their language and shows what to change in your process.

                ## Milestones
                1. Two people from each of your three main referring professions agreed to a short conversation.
                2. The same five questions asked in each conversation.
                3. Common themes written up in a one-page summary.
                4. Two changes to the practice's referral process chosen from the themes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six referrer conversations are completed and a one-page summary records the themes and two process changes chosen."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write five questions about what makes referring easy or hard"
                - "Ask two people from each main referring profession for twenty minutes"
                - "Hold the conversations and note the answers"
                - "Summarise the themes and choose two process changes"
            - name: Writing referral letters that get acted on
              description: |-
                ## Purpose
                Each referral letter is read by someone deciding in seconds how urgent it is and whether it belongs with them. Practising a tight structure, a clear question and the right supporting documents, and comparing your letters with the best ones you receive, makes your referrals faster to accept and more likely to be returned in kind.

                ## Milestones
                1. Five of the clearest referral letters the practice received collected as examples.
                2. Your own last five letters scored against the same points.
                3. Three letters rewritten and checked by a colleague.
                4. The lessons added as a short checklist beside the letter template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three rewritten referral letters are reviewed by a colleague and a checklist of what makes a good letter sits beside the template."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick five of the clearest referral letters you have received"
                - "Score your last five letters against the same points"
                - "Rewrite three letters and ask a colleague to review them"
                - "Add a short good-letter checklist beside the template"
            - name: Asking for referrals within professional rules
              description: |-
                ## Purpose
                Many professionals never ask for referrals because it feels like selling, and others ask in ways their rules do not allow. Learning a few plain, permitted ways to tell clients and colleagues the kind of work you welcome, and practising them until they sound natural, raises referrals without pressure on anyone.

                ## Milestones
                1. Permitted and prohibited ways of asking checked against your referral rules summary.
                2. Three short phrases written for clients and three for fellow professionals.
                3. The phrases practised in role play with a colleague.
                4. Use of the phrases tried for one month and the result noted.

                ## Notes
                Never tie a request for referrals to a discount, gift or favour without checking your inducement rules first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six permitted referral phrases are written, practised with a colleague and used for one month, with the result recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Reread your referral rules summary for limits on asking"
                - "Write three phrases for clients and three for professionals"
                - "Practise the phrases with a colleague in role play"
                - "Note referrals that followed a month of asking"
            - name: One-minute explanation of your scope to other professionals
              description: |-
                ## Purpose
                Other professionals refer to you only when they can picture the client you would help, and a vague answer to what you do leaves them guessing. A practised one-minute explanation, with two example client situations and one clear thing you do not do, gives them a picture they can repeat to colleagues.

                ## Milestones
                1. A first draft of the explanation written in under 150 words.
                2. Two anonymised example client situations added.
                3. The explanation tested on three professionals outside your field.
                4. A final version that each of them could repeat back accurately.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-minute scope explanation is tested on three professionals from other fields, and each can repeat back who you help."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Draft a scope explanation of under 150 words"
                - "Add two anonymised client situations you handle well"
                - "Try the explanation on three professionals outside your field"
                - "Revise it until each can repeat back who you help"
            - name: Referral pathways required by insurers and funders
              description: |-
                ## Purpose
                Insurers, health funds, legal expense insurers and public schemes often pay only when a client arrives through a set route, such as a doctor's referral or a pre-approved panel. Learning the pathway each payer requires stops clients being turned away at billing and shows referrers exactly what their letter must contain.

                ## Milestones
                1. The payers or schemes behind most of your clients listed.
                2. Each payer's referral requirement recorded, such as who may refer and what the referral must state.
                3. A short guide for referrers written for each common pathway.
                4. Reception trained to check the pathway before the first appointment.

                ## Notes
                Requirements change at renewal of payer agreements, so date each entry and recheck yearly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each major payer's referral requirement is recorded with a date, and a referrer guide exists for each common pathway."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the payers behind most of the practice's clients"
                - "Record each payer's rules on who may refer and what is required"
                - "Write a short referrer guide for each common pathway"
                - "Train reception to confirm the pathway before booking"
                - "Recheck each payer's referral requirements @recurring(yearly)"
            - name: Preparing a short educational talk for referrers
              description: |-
                ## Purpose
                Teaching other professionals something useful about your field is one of the most accepted ways to build referrals, and many professional bodies count it towards CPD for the audience. Preparing a twenty-minute talk on when and how to refer, with two cases and a one-page handout, gives you something to offer at practice meetings and association evenings.

                ## Milestones
                1. A topic chosen that answers a real question referrers ask you.
                2. A twenty-minute talk built around two anonymised cases.
                3. A one-page handout with referral criteria and your contact route.
                4. The talk given once to a friendly audience and revised from feedback.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A twenty-minute referrer talk and handout are finished and delivered once, with feedback recorded and changes made."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the questions referrers most often ask you"
                - "Choose a topic and outline a twenty-minute talk with two cases"
                - "Write a one-page handout with referral criteria"
                - "Give the talk to a friendly audience and collect feedback"
            - name: Reading referral data for conversion and value
              description: |-
                ## Purpose
                Counting referrals tells you who sends work, but not whose referrals become clients or what they are worth. Learning to work out conversion rate, average fee and repeat work per source shows that a referrer who sends three clients a year may be worth more than one who sends twenty poor fits.

                ## Milestones
                1. Conversion from referral to engaged client calculated for the top ten sources.
                2. Average first-year fees per client calculated for each source.
                3. Sources ranked by value as well as volume.
                4. One referrer whose value was misjudged identified and their tier adjusted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Conversion rate and average first-year fees are calculated for the top ten referral sources and the tier list is updated from the results."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pull a year of referrals and the clients who engaged"
                - "Calculate conversion rate for the top ten sources"
                - "Calculate average first-year fees per client by source"
                - "Update referrer tiers where value and volume disagree"
            - name: Choosing a tool to track referral relationships
              description: |-
                ## Purpose
                Spreadsheets work for twenty referrers and fail at two hundred, but a full sales CRM can be more than a practice needs and may hold data your confidentiality rules restrict. Comparing what your practice software already offers with two or three contact management tools, against the same criteria, picks the simplest tool that will actually be used.

                ## Milestones
                1. Requirements listed: referrer pages, referral logging, reminders, reports and data location.
                2. What the current practice management software already does checked first.
                3. Two or three tools scored against the same requirements and costs.
                4. A choice recorded, with a named person to set it up.

                ## Notes
                Start from the **Purchase decision** template. Keep client clinical or legal details in the practice system, not the referral tool.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two tracking options against the same requirements ends with a recorded choice and a named owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what a referral tracking tool must do for the practice"
                - "Check what the current practice software already provides"
                - "Score two or three tools against the requirements and cost"
                - "Record the choice and name the person to set it up"
            - name: Written policy on referral fees and reciprocal arrangements
              description: |-
                ## Purpose
                Whether a practice pays or receives anything for referrals, or keeps an informal reciprocal understanding, it needs a written position before a partner agrees something over lunch. A short policy based on your regulator's rules, covering fees, gifts, hospitality, reciprocity and disclosure to clients, protects every professional in the practice.

                ## Milestones
                1. The referral rules summary turned into a draft policy for the practice.
                2. Positions recorded on referral fees, gifts, hospitality limits and reciprocal arrangements.
                3. Client disclosure wording included wherever any arrangement is allowed.
                4. The policy agreed by the partners and every professional confirming they have read it.

                ## Notes
                Where the rules are uncertain, take advice from your regulator or a conduct adviser before agreeing any arrangement. Many professions require clients to be told about any financial link with a referrer.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A referral policy covering fees, gifts, hospitality and reciprocity is agreed by the partners and signed as read by every professional."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the policy from the referral rules summary"
                - "Set limits on gifts and hospitality given or received"
                - "Add client disclosure wording for any permitted arrangement"
                - "Collect a signed read confirmation from every professional"
            - name: Formal referral arrangement with a key partner firm
              description: |-
                ## Purpose
                When two firms refer heavily to each other, an unwritten understanding can drift into confusion over who handles what, or into an arrangement that a regulator would treat as an undisclosed inducement. A short written arrangement covering scope, response times, information sharing, client choice and disclosure keeps the relationship clean and easy to explain.

                ## Milestones
                1. The partner firm and the scope of work referred each way agreed in outline.
                2. A written arrangement drafted covering response times, information sharing and client choice.
                3. The arrangement checked against both firms' professional rules and your referral policy.
                4. The arrangement signed and a review date set for one year later.

                ## Notes
                Clients must always remain free to choose another professional. Have the document reviewed by your own adviser before signing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed referral arrangement with one partner firm sets out scope, response times, information sharing and client choice, with a review date."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree the referral scope each way with the partner firm"
                - "Draft terms on response times, information sharing and client choice"
                - "Check the draft against both firms' professional rules"
                - "Sign the arrangement and diary a review one year later"
            - name: Making it easier for referrers to send you work
              description: |-
                ## Purpose
                Every extra step between a referrer deciding to refer and the referral reaching you loses some of them: an unanswered switchboard, a form that asks for fifteen fields, a fax number nobody uses. Building one simple route, such as a short online referral form, a direct email and a named phone line, makes you the easiest practice in town to refer to.

                ## Milestones
                1. Every current referral route listed and tested as if you were a referrer.
                2. One primary route chosen and simplified to the minimum fields from your referral profile.
                3. Referral details for the practice sent to every referrer in the register.
                4. The old routes redirected or closed so nothing falls between them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One simplified referral route is live, tested end to end and announced to every referrer in the register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send a test referral through every current route"
                - "Cut the referral form down to the fields you really need"
                - "Ask the agent to draft the note announcing the new route"
                - "Redirect or close the old referral routes"
            - name: Redirect list for referrals you should decline
              description: |-
                ## Purpose
                Saying no to a poor-fit referral is easy; saying no in a way that keeps the referrer and helps the client is a skill. A redirect list naming who handles each type of work you decline, and a polite reply that explains why, turns a refusal into a useful introduction and protects the relationship.

                ## Milestones
                1. The referral types declined in the last year listed with the reasons.
                2. A named professional or service recorded for each declined type.
                3. A short reply template that thanks the referrer and gives the redirect.
                4. Declined referrals logged so a pattern of poor fits can be raised with the referrer.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A redirect list covers every referral type declined last year, and every decline in the next quarter uses the reply template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List referrals declined last year and the reasons"
                - "Name a professional or service for each declined type"
                - "Write a short decline and redirect reply template"
                - "Log each decline against the referrer's register page"
            - name: Deciding whether to join a structured referral group
              description: |-
                ## Purpose
                Structured referral groups and business breakfast clubs promise steady introductions but cost membership fees and a fixed weekly morning. Visiting two groups as a guest, checking the membership against your ideal profile and your profession's rules, and estimating the time cost gives a clear yes or no instead of a year of half-hearted attendance.

                ## Milestones
                1. Two local groups or professional circles identified and attended as a guest.
                2. Members compared with the professions on your adjacent profession map.
                3. Membership rules checked against your regulator's referral rules.
                4. A decision recorded with the cost in fees and hours, and a review date if you join.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on joining a referral group states the annual cost in fees and hours and, if joining, a six-month review date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find two local referral groups that welcome professionals"
                - "Attend each as a guest and note the member professions"
                - "Check the group's rules against your referral policy"
                - "Record the decision with the annual cost in fees and hours"
            - name: Reducing dependence on a single referrer
              description: |-
                ## Purpose
                If one referrer sends a third or more of your new work, their retirement, merger or change of mind becomes a serious risk to the practice. Measuring concentration, naming the risk and setting a target to grow two or three other sources over a year turns a hidden weakness into a managed one.

                ## Milestones
                1. The share of new work and fees from each of the top three referrers calculated.
                2. The concentration risk recorded with likely triggers, such as retirement or a merger.
                3. A target set for the top referrer's share in twelve months.
                4. Two or three other sources chosen for active development, with named owners.

                ## Notes
                Start from the **Risk register** template to record the dependence and its triggers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The top referrer's share of new fees is recorded, a twelve-month target is set and two other sources have named owners."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Calculate each top referrer's share of new work and fees"
                - "Record the dependence and its triggers in the risk register"
                - "Set a target share for the top referrer in twelve months"
                - "Name an owner for each of two or three other sources"
            - name: Referrer open evening at the practice
              description: |-
                ## Purpose
                Seeing the premises, meeting the team and understanding how a referral is handled makes referrers far more confident sending clients. A short open evening for twenty to forty local professionals, with a tour, a brief talk and time to talk, does in two hours what months of emails cannot.

                ## Milestones
                1. A date, guest list from the register and budget agreed, within your hospitality limits.
                2. Invitations sent six weeks ahead, with replies tracked.
                3. A tour route, a ten-minute talk and the referral route handout prepared.
                4. Every attendee followed up within a week and new contacts added to the register.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The open evening is held, at least fifteen professionals attend and every attendee receives a follow-up within seven days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose a date and draw the guest list from the register"
                - "Send invitations six weeks ahead and track replies"
                - "Prepare the tour, a ten-minute talk and handouts"
                - "Follow up every attendee within a week of the evening"
            - name: Year-end note to every referrer
              description: |-
                ## Purpose
                Year-end is when referrers are most likely to notice who remembered them, and when a personal note stands out from the stack of generic cards. A short note to every referrer of the year, mentioning the number of clients they trusted you with and anything that changed in the practice, closes the year well and costs a few evenings.

                ## Milestones
                1. Every referrer of the year listed from the referral log with the number of introductions.
                2. A note written with a personal line for each top-tier referrer.
                3. Notes sent before the final working week of the year.
                4. Replies and any news recorded on register pages.

                ## Notes
                Keep any gift modest and within the policy; a personal note is what referrers remember.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A personal year-end note reaches every referrer of the year before the last working week, with top-tier notes individually written."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every referrer of the year with their number of introductions"
                - "Write a short year-end note with a personal line for top referrers"
                - "Send the notes before the final working week"
                - "Record replies and news on each register page"
            - name: Joint seminar with a partner firm for shared clients
              description: |-
                ## Purpose
                Shared clients often face problems that cross two professions, such as a business owner's tax and legal position on retirement, or a patient's rehab and return to work. Running a joint seminar with a partner firm on one such problem shows both client bases how the two practices work together and strengthens the referral link between them.

                ## Milestones
                1. A topic agreed with the partner firm that matters to both client groups.
                2. Roles, costs and marketing within each firm's professional rules agreed in writing.
                3. The seminar delivered with attendance recorded.
                4. A joint debrief held and follow-up referrals between the firms logged.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A joint seminar with a partner firm is delivered, attendance is recorded and referrals between the firms in the following quarter are logged."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Agree a shared topic with the partner firm"
                - "Put roles, costs and invitations in a short written note"
                - "Deliver the seminar and record who attended"
                - "Hold a joint debrief and log the follow-up referrals"
            - name: Networking plan for the next professional conference
              description: |-
                ## Purpose
                Conferences put hundreds of potential referrers in one building, but most attendees go home with a pocket of business cards and no follow-up. A plan that names ten people to meet, a short question for each, and a follow-up within a week of returning turns the conference fee into relationships.

                ## Milestones
                1. The attendee or speaker list scanned and ten people chosen to meet.
                2. A short reason to talk to each one written down.
                3. Meetings or conversations held with at least six of them.
                4. Every new contact followed up within a week and added to the register.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least six planned conversations are held at the conference and every new contact is followed up and registered within a week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Scan the speaker and attendee list for likely referrers"
                - "Choose ten people and note a reason to talk to each"
                - "Arrange short meetings with three of them before you travel"
                - "Follow up every new contact within a week of returning"
            - name: Announcing a new service or professional to referrers
              description: |-
                ## Purpose
                New services and new professionals often sit underused for months because referrers simply do not know about them. A planned announcement, with a short note to the right tier of referrers, a profile of the new professional and an offer to meet, fills the new diary faster and gives you a reason to contact quiet referrers.

                ## Milestones
                1. The referrers most likely to need the new service picked from the register.
                2. A short announcement with what is new, who it is for and how to refer.
                3. Personal introductions arranged between the new professional and three top referrers.
                4. Referrals to the new service tracked for the first three months.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Targeted referrers receive the announcement, three introductions with the new professional are held and three months of referrals to the service are tracked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick referrers whose clients would use the new service"
                - "Write a short announcement with who it is for and how to refer"
                - "Book introductions between the new professional and three referrers"
                - "Track referrals to the new service for three months"
            - name: Freelance professional building a referral base from zero
              description: |-
                ## Purpose
                Freelancers who leave a firm often discover that the work came to the firm, not to them. Building a base of fifteen to twenty professionals who know your scope and how to reach you, starting with former colleagues and adjacent professions, gives a solo practitioner a steady flow without paying for advertising.

                ## Milestones
                1. Former colleagues, clients' other advisers and peers listed, checking any restrictive covenant first.
                2. Twenty people contacted with a short personal note and your scope explanation.
                3. Ten conversations held in the first three months.
                4. The first referrals logged and each referrer thanked and kept informed.

                ## Notes
                Read your old contract for non-solicitation or non-dealing terms before approaching former clients or colleagues, and take advice if unsure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twenty professionals are contacted, ten conversations held within three months and every resulting referral logged and thanked."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Check your old contract for restrictive covenants before reaching out"
                - "List twenty former colleagues, peers and adjacent professionals"
                - "Send each a short personal note with your scope"
                - "Hold ten conversations and log what each one refers"
            - name: Locum or contract professional staying visible to practices
              description: |-
                ## Purpose
                Locums and contract professionals are referred by practice managers and booking teams rather than clients, and they forget names quickly between bookings. Keeping a simple list of the practices you cover, a current availability note and a short handover record from each booking makes you the first name they call when cover is needed.

                ## Milestones
                1. Every practice or firm you have covered in two years listed with the booking contact.
                2. A one-paragraph profile and availability note ready to send.
                3. A standard handover note left at the end of each booking.
                4. Availability sent to every booking contact on a set day each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every practice covered in two years is listed with a contact, and availability is sent to all of them each month for three months."
                cadence: rolling
              tasks:
                - "List practices covered in two years and their booking contacts"
                - "Write a short profile and availability note"
                - "Leave a standard handover note at the end of every booking"
                - "Send availability to every booking contact @recurring(monthly:25)"
            - name: First twenty referrer introductions for a new practice
              description: |-
                ## Purpose
                Opening a practice means the diary is empty until someone trusts you with a client, and the first referrers set the practice's reputation locally. Planning twenty introductions in the first ninety days, chosen from the adjacent profession map and the local area, gets the network started before the cash runway gets short.

                ## Milestones
                1. Twenty local professionals chosen across at least four adjacent professions.
                2. A short introduction pack with scope, referral route and opening hours.
                3. Each professional visited or called within the first ninety days.
                4. Referrals from the first ninety days logged with their source.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twenty local professionals across at least four professions are contacted within ninety days of opening, with every resulting referral logged."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose twenty local professionals across four adjacent professions"
                - "Prepare a one-page introduction pack with the referral route"
                - "Visit or call five professionals each fortnight"
                - "Log every referral from the first ninety days by source"
            - name: Keeping referrers when a professional leaves the practice
              description: |-
                ## Purpose
                Departing professionals often hold the personal relationships with referrers, and some referrers follow them to the new firm. Telling referrers early, introducing a named successor and keeping the referral route unchanged holds on to most of those relationships, within whatever your partnership or employment terms allow.

                ## Milestones
                1. Referrers who mainly dealt with the departing professional listed from the register.
                2. The agreed message and timing checked against the departure terms and professional rules.
                3. Each affected referrer contacted with a named successor.
                4. Referral volumes from those referrers tracked for six months after the departure.

                ## Notes
                Clients and referrers may choose to follow the departing professional. Keep communications factual and within any agreed announcement.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every referrer linked to the departing professional is contacted with a named successor before the leaving date, and their referrals are tracked for six months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List referrers who dealt mainly with the departing professional"
                - "Check the agreed departure message and its timing"
                - "Contact each referrer and introduce the named successor"
                - "Track referrals from those referrers for six months"
            - name: Handing over referral relationships in a succession or sale
              description: |-
                ## Purpose
                Referral goodwill is part of what a successor or buyer is paying for, yet it often lives entirely in the retiring owner's diary and phone. Introducing the successor personally to each important referrer, over a planned period, gives the relationships a real chance of surviving the change of owner.

                ## Milestones
                1. Top-tier and steady referrers identified as the relationships to hand over.
                2. A handover schedule agreed with the successor, within any sale or succession terms.
                3. Joint meetings or calls held with each top-tier referrer.
                4. Register pages updated with the successor as the named contact.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every top-tier referrer has met the successor jointly with the outgoing owner, and the register names the successor as contact."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Mark the referrer relationships that must be handed over"
                - "Agree a handover schedule with the successor"
                - "Hold joint meetings with each top-tier referrer"
                - "Change the named contact on each register page"
            - name: Rebuilding a local network after moving area
              description: |-
                ## Purpose
                Moving a practice or relocating as a professional leaves most of your referral network behind, while clients still need local professionals they can reach. Mapping the new area's practices, telling old referrers where you are, and making ten local introductions in the first two months shortens the gap before referrals return.

                ## Milestones
                1. Existing referrers who can still refer remotely told of the move.
                2. Local practices in the adjacent professions mapped in the new area.
                3. Ten local introductions made within two months.
                4. The directory of onward referrals rebuilt for the new area.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Ten local introductions are made within two months of the move and the onward referral directory covers the new area."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Tell existing referrers about the move and the new contact route"
                - "Map practices in the adjacent professions in the new area"
                - "Make ten local introductions in the first two months"
                - "Rebuild the onward referral directory for the new area"
            - name: Cross-cover arrangement with peer sole practitioners
              description: |-
                ## Purpose
                Sole practitioners and freelancers cannot take a holiday or fall ill without leaving clients stranded, and urgent work turned away often goes to a competitor for good. A cross-cover arrangement with two trusted peers, covering urgent matters, overflow work and returning clients afterwards, keeps clients safe and builds a two-way referral link.

                ## Milestones
                1. Two peers with matching scope and registration agreed in principle.
                2. Written terms on urgent cover, overflow, client choice and returning clients.
                3. Client consent and record-sharing arrangements checked against your rules.
                4. The arrangement used for one absence and reviewed afterwards.

                ## Notes
                Check that your indemnity insurance and each peer's cover the arrangement before relying on it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written cross-cover arrangement with two peers is in place, insurance is confirmed and it has been used and reviewed for one absence."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two trusted peers whether they would share cover"
                - "Write terms on urgent cover, overflow and returning clients"
                - "Confirm each indemnity policy covers the arrangement"
                - "Review the arrangement after its first use"
            - name: Multidisciplinary referral circle around one client need
              description: |-
                ## Purpose
                Some client problems need several professions working together, such as separation, business sale, a workplace injury or caring for an ageing parent. Forming a small circle of four or five professionals around one such need, with a shared understanding of who does what and how clients move between them, gives clients a joined-up service no single practice could offer.

                ## Milestones
                1. One client need chosen and the four or five professions involved named.
                2. A trusted professional from each profession agreed to join.
                3. A one-page description of who handles what and how referrals move.
                4. The circle meeting twice a year to review cases in anonymised form.

                ## Notes
                Each member stays independent and clients choose freely. Keep shared case discussion anonymised unless the client has agreed otherwise.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A circle of at least four professions is formed around one client need, with a one-page process and two meetings held in a year."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose one client need that crosses several professions"
                - "Invite one trusted professional from each profession"
                - "Write a one-page note on who handles what"
                - "Hold the circle's anonymised case review @recurring(yearly)"
            - name: Cross-border referral links with firms overseas
              description: |-
                ## Purpose
                Clients who move between countries, such as diaspora families in the UK, US and Canada with property or relatives in the Caribbean, need professionals in both places. A small set of vetted firms abroad, with agreed referral terms and an understanding of each other's licensing limits, lets you serve those clients without practising outside your own registration.

                ## Milestones
                1. The countries your clients most often have links to identified from files.
                2. One or two firms per country vetted for registration and professional standing.
                3. Referral terms agreed, including fees disclosure, language and time zones.
                4. Licensing limits noted so each side refers rather than advises across the border.

                ## Notes
                Practising rights stop at the border for most regulated professions. Refer the work rather than advising on another country's rules.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Vetted partner firms are recorded for the two countries your clients most often link to, with terms and licensing limits written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find the countries your clients most often have links to"
                - "Shortlist and vet one or two firms in each country"
                - "Agree referral terms and fee disclosure with each firm"
                - "Record each side's licensing limits beside the firm's entry"
            - name: Internal cross-referral between partners and service lines
              description: |-
                ## Purpose
                Partners in the same practice often refer more work to outside firms than to each other, simply because they do not know what colleagues do. A short internal directory of each partner's specialisms, an internal referral log and a slot at the partners' meeting turn the practice itself into a referral network.

                ## Milestones
                1. Each partner's and senior professional's specialisms listed in an internal directory.
                2. Outside referrals in the last year checked for work the practice could have kept.
                3. An internal referral log with credit agreed under the profit sharing rules.
                4. Internal referrals reviewed at the partners' meeting each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "An internal specialism directory and referral log exist, and internal referrals are reviewed at the partners' meeting for two quarters."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect each partner's specialisms into an internal directory"
                - "Check last year's outside referrals for work the practice could keep"
                - "Set up an internal referral log"
                - "Add internal referrals to the partners' agenda @recurring(quarterly)"
            - name: Independence and conflict review of referral relationships
              description: |-
                ## Purpose
                Independence questions arise when a referrer is also a landlord, a shareholder, a relative or a regular source of hospitality, and they are judged on how they look as well as what happened. A yearly review of close referral relationships, recording any financial or personal link and how it is disclosed, gives you an answer ready if a client or regulator asks.

                ## Milestones
                1. Every professional in the practice asked to declare financial or personal links with referrers.
                2. Each declared link recorded with how it is disclosed to clients.
                3. Links that may breach rules or your policy reviewed with a conduct adviser.
                4. The completed review signed off by the partners and dated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated annual declaration of links with referrers is completed by every professional, with disclosures recorded and partner sign-off."
                cadence: cyclic
              tasks:
                - "Draft a short declaration form for links with referrers"
                - "Collect declarations from every professional @recurring(yearly)"
                - "Record how each declared link is disclosed to clients"
                - "Review doubtful links with a conduct adviser"
            - name: Joining insurer, lender and scheme referral panels
              description: |-
                ## Purpose
                Panel appointments with insurers, lenders, legal expense providers or public schemes can bring a steady stream of referred clients, but they come with fee caps, service levels and audits. Researching which panels fit your work, what they pay and what they demand lets you apply for the right ones and decline those that would cost more than they bring.

                ## Milestones
                1. Panels relevant to your profession and area listed with entry criteria.
                2. Fee terms, service levels and audit demands compared for each panel.
                3. A decision recorded for each panel: apply, wait or decline.
                4. Applications submitted for the chosen panels with deadlines tracked.

                ## Notes
                Check any panel referral fees or marketing charges against your referral rules before signing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every relevant panel has a recorded apply, wait or decline decision based on fees and service terms, and chosen applications are submitted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the panels open to your profession and their entry criteria"
                - "Compare fee caps, service levels and audit demands"
                - "Record an apply, wait or decline decision for each"
                - "Submit applications for the chosen panels"
            - name: Telling a referrer when a referral goes wrong
              description: |-
                ## Purpose
                Bad news about a referred client, such as a complaint, a poor outcome or a missed appointment, will reach the referrer eventually, and hearing it from someone else damages trust more than the event itself. A short protocol for telling the referrer promptly and factually, within confidentiality and any complaint process, keeps the relationship intact through difficult cases.

                ## Milestones
                1. The kinds of events that should be shared with a referrer defined.
                2. A protocol written covering who tells them, how quickly and what consent is needed.
                3. Wording checked so it states facts without admitting liability, with your insurer's guidance.
                4. The protocol used for the next such case and reviewed afterwards.

                ## Notes
                Notify your indemnity insurer first where a claim is possible, and follow their guidance on what to say.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written protocol for informing referrers of adverse events is agreed, checked against insurer guidance and used once with a review recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define which events about referred clients the referrer should hear"
                - "Write who tells them, how quickly and with what consent"
                - "Check the wording against your indemnity insurer's guidance"
                - "Review the protocol after its first use"
---

# Professional Referral Networks

This area is for practice owners and freelance professionals whose best work arrives because another doctor, lawyer, accountant, engineer or adviser trusted them with a client. It starts with foundations (an audit of where clients came from, a source field at intake, the referral rules of your profession, a register of referrers and the people you send work to), moves to the routines that keep relationships alive, the skills of writing referral letters and explaining your scope, decisions about tools, agreements and dependence on one source, dated events such as an open evening, situations from a first freelance year to a partner leaving, and finally specialist work on multidisciplinary circles, panels and cross-border introductions.

What repeats is a weekly referral log and thank-you round, a monthly source report and outbound follow-up check, regular visits to top referrers, a quarterly tiering review and dormant referrer round, and a yearly network plan. The Person, Metrics log, Meeting notes, Purchase decision and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
