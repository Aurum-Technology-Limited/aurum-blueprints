---
id: family-office.caribbean-family-philanthropy
name: Caribbean Family Philanthropy
description: "Caribbean giving run as a family: focus islands chosen, local partners checked and visited, disaster relief ready before the season, scholarships that run every year and receipts the tax adviser can use."
category: personal
version: 1.0.0
tags: [family-office, caribbean-family-philanthropy, parent, retiree, caribbean, disaster-relief, scholarships, ngos]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - trip
    - metrics-log
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Caribbean Family Philanthropy
          description: "Giving in the Caribbean as a family: local foundations and NGOs, disaster relief, education scholarships, tax treatment and partners on the ground."
          projects:
            - name: Map of the family's Caribbean giving to date
              description: |-
                ## Purpose
                Most families who give in the Caribbean do it through many hands at once: a grandmother's church, a cousin's school appeal, a transfer after the last hurricane, a company sponsorship nobody recorded as a gift. Listing every gift made in the last three years by any family member or family entity, with the island, the recipient, the amount and who asked, shows what the family already does before anything new is decided.

                ## Milestones
                1. Every adult family member and every family entity asked for their Caribbean gifts over the last three years.
                2. A single list of gifts with date, giver, island, recipient, amount and who made the request.
                3. Gifts tagged by recipient type: church, school, NGO, disaster appeal, individual.
                4. Totals by island and by recipient type shared with the family lead.

                ## Notes
                Include gifts to individuals, such as school fees paid for a neighbour's child. They are often the largest hidden part of a family's Caribbean giving.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of all Caribbean gifts made over the last three years, with totals by island and recipient type, is saved and shared with the family lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Message each adult family member asking for their Caribbean gifts since three years ago"
                - "Pull Caribbean payments from the family office ledger and bank statements"
                - "Tag each gift by island, recipient type and who requested it"
                - "Total the giving by island and by recipient type and share it with the family lead"
            - name: Family statement on why we give in the Caribbean
              description: |-
                ## Purpose
                A one-page statement saying which places the family feels tied to and why, written in the family's own words, settles many arguments before they start. It is also the first thing a new partner, a scholarship committee or a grandchild reads, and it keeps the programme anchored when the elders who started it are no longer leading.

                ## Milestones
                1. A family conversation held on the places, people and causes that matter most, with notes taken.
                2. A one-page draft naming the islands or communities, the reasons and two or three causes.
                3. Comments gathered from each branch and the elders.
                4. A final version agreed and filed with the family's governance papers.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page statement of why and where the family gives in the Caribbean is agreed by every branch and filed with the governance papers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each elder to name the places and causes they most want the family to support"
                - "Hold a family conversation on why the family gives and take notes"
                - "Ask the agent to draft a one-page statement from the conversation notes"
                - "Circulate the draft to each branch and agree a final version"
            - name: Choosing the islands and communities to focus on
              description: |-
                ## Purpose
                Spreading gifts across a dozen islands makes it hard to know anyone well or see what changed. Choosing two or three places, usually where the family has roots, homes or businesses, lets the family build relationships that last, understand local politics and respond faster when a storm or flood hits.

                ## Milestones
                1. A long list of islands and communities drawn from the giving map and the family statement.
                2. Each candidate scored on family ties, need, local partners available and the family's ability to visit.
                3. Two or three focus places chosen, with the reasons written down.
                4. A plan for winding down or keeping small gifts outside the focus places.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three focus islands or communities are chosen and recorded with reasons, and a rule for gifts outside them is written."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every island and community the family has given to or has ties with"
                - "Score each one on family ties, need, available partners and ease of visiting"
                - "Agree two or three focus places at a family meeting"
                - "Write the rule for gifts that fall outside the focus places"
            - name: Annual Caribbean giving budget with three pots
              description: |-
                ## Purpose
                Without a set figure, Caribbean giving drifts towards whoever asks loudest or most recently. A yearly budget split into pots, for example core grants to partners, scholarships and a disaster reserve held back until the hurricane season ends, makes it possible to say yes quickly and no kindly.

                ## Milestones
                1. A total for the coming year agreed by the family or the foundation board.
                2. The total split into core grants, scholarships, disaster reserve and a small discretionary pot.
                3. A rule for what happens to an unspent disaster reserve at the end of November.
                4. Spending against each pot reported at every quarterly meeting.

                ## Notes
                The disaster reserve only works if it is not raided for other requests during the year. Write down who can release it and for what.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written yearly budget, split into named pots with a rule for the unspent disaster reserve, is approved before the year starts."
                cadence: cyclic
              tasks:
                - "Total last year's Caribbean giving by pot from the giving map"
                - "Propose a split between core grants, scholarships, disaster reserve and discretionary gifts"
                - "Write the rule for rolling over or regranting an unspent disaster reserve"
                - "Set next year's Caribbean giving budget at the family's year-end meeting @recurring(yearly)"
            - name: Checking how charities are registered in each country
              description: |-
                ## Purpose
                Every Caribbean country registers non-profits differently: some under a charities law, some as non-profit companies, some on a separate register of non-profit organisations kept for anti-money-laundering purposes, and many small community groups are not registered at all. Knowing what registration looks like in each focus country, and how to check it, is the first filter before any money moves.

                ## Milestones
                1. For each focus country, the registers a non-profit can appear on identified from official sources.
                2. How to search or request confirmation from each register written down.
                3. Each current recipient checked and its registration status recorded.
                4. A rule agreed for gifts to unregistered groups, such as routing them through a registered intermediary.

                ## Notes
                An unregistered group is not necessarily a bad partner, but a gift to it may carry no tax relief and can draw questions from the family's bank. Confirm what counts as an approved charity with a local adviser.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note per focus country explains how non-profits register and how to verify them, and every current recipient's status is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the official charity or non-profit registers for the first focus country"
                - "Write down how to search each register or request a confirmation letter"
                - "Check the registration status of every current recipient"
                - "Agree the family's rule for gifts to unregistered community groups"
            - name: Tax questions on Caribbean gifts for each adviser
              description: |-
                ## Purpose
                Whether a gift earns any relief depends on where the giver is tax resident, where the recipient is registered and which entity pays, so the same gift to a Jamaican school can be treated differently when paid by a Barbados resident, a UK resident or a family company. Preparing one list of questions per country and getting written answers from the family's tax advisers stops gifts being structured the wrong way.

                ## Milestones
                1. A list of every giver and paying entity, with their country of tax residence.
                2. A question list per country covering relief for local gifts, relief for gifts abroad, approved charity status and proof required.
                3. Written answers received from a tax adviser in each country.
                4. A one-page summary of the answers filed with the giving records.

                ## Notes
                This project prepares questions and records answers. It is not tax advice, and rules change, so date every answer and ask again when a giver moves country.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Dated written answers from a tax adviser in each relevant country are summarised on one page and filed with the giving records."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every family giver and paying entity with its country of tax residence"
                - "Draft the question list for each country's tax adviser"
                - "Send the questions and book a call with each adviser"
                - "Summarise the dated answers on one page and file it"
            - name: Choosing the channel for each kind of gift
              description: |-
                ## Purpose
                Families usually have several routes for a Caribbean gift: paying the charity directly, giving through a local community foundation, granting from the family's own foundation, or recommending a grant from a donor-advised fund held abroad. Each route has a different cost, speed, privacy level and tax effect, so deciding once which route suits which kind of gift saves rethinking it every time.

                ## Milestones
                1. Every route available to the family listed with its fees, speed, privacy and tax effect.
                2. The kinds of gift the family makes listed: core grants, scholarships, emergency gifts, small personal gifts.
                3. A default route chosen for each kind of gift, checked with the tax adviser.
                4. The routing table shared with everyone who can approve a gift.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A routing table naming the default channel for each kind of Caribbean gift is agreed, checked with the tax adviser and shared with approvers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every channel the family can use for a Caribbean gift"
                - "Note the fees, speed, privacy and tax effect of each channel"
                - "Choose a default channel for each kind of gift and check it with the tax adviser"
                - "Share the routing table with everyone who approves gifts"
            - name: Caribbean giving records and receipts file
              description: |-
                ## Purpose
                Receipts from small island charities arrive late, on letterhead, as a phone photo or not at all, and the tax adviser needs proper copies months later. One file per year, with every gift's approval, payment proof and receipt kept together, ends the hunt at tax time and answers any question from a bank or auditor.

                ## Milestones
                1. A yearly folder with a standard structure: approvals, payment proofs, receipts, partner reports.
                2. A gift log listing every gift with a link to each of its documents.
                3. Missing receipts chased within a month of payment.
                4. The previous year's file complete before the tax adviser asks for it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every Caribbean gift in the current year has its approval, payment proof and receipt filed and listed in the gift log."
                cadence: rolling
              tasks:
                - "Create this year's giving folder with sections for approvals, payments and receipts"
                - "Start a gift log with columns for each document"
                - "Chase any receipt that is more than a month overdue"
                - "File the month's gift approvals, payment proofs and receipts @recurring(monthly:28)"
            - name: Decision rules and approval limits for Caribbean gifts
              description: |-
                ## Purpose
                When a hurricane hits or a school principal calls with an urgent request, the family needs to know who can say yes, and for how much, without waiting for the next meeting. A written rule naming the family lead, the limit each person can approve alone and what needs two approvals protects both the money and family relationships.

                ## Milestones
                1. A family lead for Caribbean giving named, with a deputy.
                2. Approval limits set for the lead, the deputy and the family office.
                3. Gifts above the limits routed to the quarterly meeting or an emergency call.
                4. A separate fast rule for releasing the disaster reserve agreed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written approval rule names the lead and deputy, sets limits and includes a fast rule for the disaster reserve, and every approver has a copy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name a family lead and a deputy for Caribbean giving"
                - "Set the amount each approver can agree alone"
                - "Write the fast approval rule for releasing the disaster reserve"
                - "Send the signed rule to every approver and the family office"
            - name: Quarterly family Caribbean giving meeting
              description: |-
                ## Purpose
                A short meeting every quarter, with the numbers, partner news and new requests in one pack, keeps the programme moving between yearly reviews and stops decisions being made in passing at family dinners. Rotating the chair among adult children gives the next generation real practice in running a grant meeting.

                ## Milestones
                1. A standing agenda: spending against budget, partner updates, requests, decisions.
                2. A pack circulated a week before each meeting.
                3. Decisions and owners recorded in the meeting notes.
                4. A chair rota covering the next four meetings.

                ## Notes
                Start from the **Meeting notes** template. Forty-five minutes is enough if the pack goes out on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four meetings a year are held with a pack circulated in advance and decisions recorded with owners."
                cadence: cyclic
              tasks:
                - "Write the standing agenda for the quarterly giving meeting"
                - "Draw up a chair rota for the next four meetings"
                - "Circulate the pack a week before each meeting"
                - "Hold the Caribbean giving meeting and record decisions and owners @recurring(quarterly)"
            - name: Cross-border gift payment controls
              description: |-
                ## Purpose
                Wires to small Caribbean charities can sit for days with a correspondent bank, come back for a missing detail or prompt questions from the family's own bank, and fake emails asking to change a charity's bank details are common. A short payment routine, with bank details confirmed by phone on a known number and every transfer traced to a confirmation, keeps money from going astray.

                ## Milestones
                1. Each partner's bank details held in one place, confirmed by a call to a known number.
                2. A rule that any change of bank details is confirmed by phone before payment.
                3. Each payment carries a reference the partner recognises.
                4. Every month's payments matched to confirmations of receipt.

                ## Notes
                Never act on a change of bank details sent by email alone, even from a familiar address. Call the director on a number you already hold.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every partner's bank details are phone-verified and each month's Caribbean payments are matched to a confirmation of receipt."
                cadence: rolling
              tasks:
                - "List each partner's bank details and the date they were last confirmed"
                - "Call each partner on a known number to confirm their details"
                - "Write the rule for handling a request to change bank details"
                - "Reconcile the month's Caribbean gift payments against partner confirmations @recurring(monthly:8)"
            - name: Grantee report and follow-up calendar
              description: |-
                ## Purpose
                Partners often agree to a short report at six months and then, with small teams and too many funders, forget, and families rarely chase. Keeping one calendar of reports due, with a friendly reminder a fortnight ahead and a thank-you when they arrive, makes reporting a light habit for both sides.

                ## Milestones
                1. Every open grant listed with its report dates.
                2. A reminder sent two weeks before each report is due.
                3. Reports received are read, filed and acknowledged within a week.
                4. Overdue reports followed up with a call, not a stern letter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open grant has its report dates in one calendar, and each report received is acknowledged within a week."
                cadence: rolling
              tasks:
                - "List every open grant with the report dates agreed"
                - "Write a short friendly reminder message to reuse"
                - "Acknowledge each report within a week of receiving it"
                - "Check which partner reports fall due in the next six weeks @recurring(monthly:15)"
            - name: Hurricane season readiness for the giving programme
              description: |-
                ## Purpose
                The Atlantic hurricane season runs from June to November, and the worst time to decide how the family will respond is the morning after a storm. Each May, confirm the disaster reserve, the partners who will receive emergency gifts, their current bank details and phone numbers, and who in the family can release money, so the response takes hours rather than weeks.

                ## Milestones
                1. Disaster risks for each focus island listed: hurricane, flooding, landslides, earthquake and, where relevant, volcanic activity.
                2. Two or three emergency partners per island confirmed, with current contacts and bank details.
                3. The disaster reserve balance confirmed and sitting in an account that can pay quickly.
                4. A one-page response plan shared with the approvers.

                ## Notes
                Start from the **Risk register** template to list hazards by island. Volcanic risk is real in places such as Montserrat and St Vincent, and earthquakes affect the whole region.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "By the end of May each year, a one-page response plan with confirmed partners, contacts and a funded reserve is shared with every approver."
                cadence: cyclic
              tasks:
                - "List the main hazards for each focus island in a risk register"
                - "Confirm two or three emergency partners per island and their contacts"
                - "Write a one-page response plan and share it with the approvers"
                - "Run the pre-season check of the disaster reserve and response partners each May @recurring(yearly)"
            - name: Partner check-in calls on the ground
              description: |-
                ## Purpose
                Relationships with partner NGOs are kept warm by short conversations, not reports. A call each quarter with the director of every anchor partner, asking what has changed and what worries them, catches a lost staff member, a cash gap or a falling-out with a ministry early enough to help.

                ## Milestones
                1. A list of anchor partners with the family member who owns each relationship.
                2. A short set of questions used on every call.
                3. Notes from each call filed with the partner's records.
                4. Any concern raised on a call brought to the next family meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each anchor partner has a named family contact and a check-in call recorded every quarter."
                cadence: rolling
              tasks:
                - "Assign a family member to own each anchor partner relationship"
                - "Write five questions to ask on every check-in call"
                - "File the notes from each call with the partner's records"
                - "Call each anchor partner's director for a check-in @recurring(quarterly)"
            - name: Year-end gift receipts pack for tax advisers
              description: |-
                ## Purpose
                Each country the family files in has its own tax year and its own rules on what proves a charitable gift. Assembling a pack per giver and per country, with totals reconciled to the bank, means returns are filed with the right claims and nothing is claimed that cannot be supported.

                ## Milestones
                1. A list of givers and their tax year ends in each country.
                2. A pack per giver with gift totals and copies of receipts.
                3. Totals reconciled to bank statements and the gift log.
                4. Each pack sent to the right adviser before their deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every giver's receipts pack is reconciled to the bank and sent to the right tax adviser before their filing deadline."
                cadence: cyclic
              tasks:
                - "List each giver's tax year end and adviser in every country"
                - "Ask the agent to total gifts by giver and country from the gift log"
                - "Reconcile the totals to bank statements and fill any receipt gaps"
                - "Send each giver's receipts pack to their tax adviser @recurring(yearly)"
            - name: Scholarship cycle calendar
              description: |-
                ## Purpose
                Caribbean scholarship timing follows the school year: CSEC and CAPE results usually come out in August, university places are confirmed over the summer and fees fall due at the start of term. A yearly calendar from opening applications to paying fees keeps a scholar from losing a place because a payment arrived late.

                ## Milestones
                1. Key dates for each scholarship written into one calendar: applications, shortlisting, interviews, awards, fees.
                2. Selection panel members confirmed each year.
                3. Fees paid directly to the institution before the start of term.
                4. Award letters and terms sent to every scholar and their parents.

                ## Notes
                Check each school's and university's own dates every year; they move.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scholarship has its yearly dates in one calendar, and every scholar's fees are paid before the start of term."
                cadence: cyclic
              tasks:
                - "Ask each school and university for this year's application and fee dates"
                - "Confirm the selection panel for each scholarship"
                - "Open scholarship applications with each partner school @recurring(yearly)"
                - "Pay scholars' fees directly to the institutions before term starts @recurring(yearly)"
            - name: Annual review of the Caribbean giving programme
              description: |-
                ## Purpose
                Once a year, look at the whole programme together: what was given where, which partners delivered, what the family learned and whether the focus islands still make sense. The review feeds the next year's budget and keeps the programme from running on habit long after the reasons have changed.

                ## Milestones
                1. A summary of the year's gifts against budget by pot and island.
                2. Each anchor partner's progress noted in a short paragraph.
                3. Three lessons from the year written down.
                4. Decisions recorded on focus, partners and budget for next year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review with spending against budget, partner progress, lessons and recorded decisions for the next year is filed."
                cadence: cyclic
              tasks:
                - "Pull the year's gifts by pot and island from the gift log"
                - "Write a paragraph on each anchor partner's progress"
                - "List three lessons and the changes they suggest"
                - "Hold the annual Caribbean giving review with the family @recurring(yearly)"
            - name: Monthly watch on local news and needs
              description: |-
                ## Purpose
                Small island needs show up first in local newspapers, radio call-in shows, church notices and NGO social media, long before international news. A monthly scan of a short list of sources for each focus island keeps the family aware of floods, school closures, outbreaks or a partner's appeal while there is still time to help.

                ## Milestones
                1. Three to five local sources chosen for each focus island.
                2. A monthly note of anything relevant to the family's causes or partners.
                3. Items needing action passed to the family lead.
                4. The source list refreshed once a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A short monthly note of local news relevant to the family's partners is written and items needing action are passed on."
                cadence: rolling
              tasks:
                - "Choose three to five local news and NGO sources for each focus island"
                - "Follow the chosen partner and community pages on social media"
                - "Pass anything needing a decision to the family lead"
                - "Scan the local sources and write a short needs note @recurring(monthly:20)"
            - name: Getting to know the Caribbean NGO landscape
              description: |-
                ## Purpose
                Caribbean civil society is a mix of churches and faith groups, service clubs such as Rotary and Lions, community-based organisations, national branches of international charities and a few regional networks. Knowing who does what on each focus island, and who the trusted local conveners are, stops the family funding the most visible group rather than the most useful one.

                ## Milestones
                1. A map of organisations on each focus island by cause: education, health, youth, elderly, disaster.
                2. Five local people asked who they trust and why.
                3. The two or three conveners each island's NGOs look to identified.
                4. A shortlist of possible partners for the family's causes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written map of organisations on each focus island, with named conveners and a shortlist of possible partners, is filed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the organisations working on the family's causes on the first focus island"
                - "Ask five trusted local people which groups do the best work"
                - "Identify the conveners that local NGOs look to"
                - "Draw up a shortlist of possible partners for each cause"
            - name: How disaster response is coordinated in the region
              description: |-
                ## Purpose
                After a major storm, national disaster offices lead the response, a regional agency, CDEMA, coordinates support between participating states, and Red Cross national societies and established NGOs work alongside them. Understanding who coordinates what helps the family give where it fits the response plan rather than adding to the confusion.

                ## Milestones
                1. The national disaster office for each focus island and how it communicates identified.
                2. The roles of the regional agency, the Red Cross and the main NGOs written in a page.
                3. The difference between relief, early recovery and reconstruction understood and noted.
                4. The family's response plan checked against what was learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on who coordinates disaster response on each focus island is written and the family's response plan updated to fit it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the national disaster office for each focus island and follow its channels"
                - "Read the regional disaster agency's description of how it supports member states"
                - "Write a one-page note on who does what after a disaster"
                - "Update the family's hurricane response plan to fit the coordination"
            - name: Proportionate due diligence on small Caribbean NGOs
              description: |-
                ## Purpose
                A volunteer-run group in a rural parish will not have audited accounts, but it can still show a bank account in its own name, a board that meets, recent minutes and two references from people the family trusts. A checklist scaled to the size of the gift lets the family fund small groups safely without asking for paperwork they cannot produce.

                ## Milestones
                1. Three tiers of checks agreed by gift size, from a small gift to a multi-year grant.
                2. A checklist for each tier covering registration, governance, accounts, bank account and references.
                3. Each current partner checked at the right tier and the results filed.
                4. Any red flag, such as a personal bank account, resolved before the next payment.

                ## Notes
                Payments should go to an account in the organisation's own name. A request to pay a director personally is a reason to pause, however well you know them.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A tiered due diligence checklist is written and every current partner has a completed check on file at the right tier."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set the gift sizes that mark each of three due diligence tiers"
                - "Write the checklist for each tier"
                - "Run the right check on each current partner and file the results"
                - "Resolve any red flag before the partner's next payment"
            - name: Reading an NGO's accounts and budget
              description: |-
                ## Purpose
                Small charity accounts can look healthy while the organisation is three months from missing payroll. Learning to read income by source, restricted and unrestricted funds, reserves in months of spending and the gap between budget and actual lets family members ask better questions without needing to be accountants.

                ## Milestones
                1. The main lines of a non-profit's accounts understood: income by source, restricted funds, reserves.
                2. Two partner accounts read together with the family office accountant.
                3. A short list of questions to ask any partner about its accounts.
                4. Months of reserves worked out for each anchor partner.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Family members have read two partners' accounts with the accountant and recorded reserves in months for each anchor partner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two partners for their latest accounts and budget"
                - "Book an hour with the family office accountant to read them together"
                - "Write a list of questions to ask any partner about its finances"
                - "Work out months of reserves for each anchor partner"
            - name: Anti-money-laundering rules that affect Caribbean gifts
              description: |-
                ## Purpose
                Countries in the region are assessed against international standards on money laundering and terrorist financing, including one aimed at non-profits, and banks respond by questioning cross-border payments to charities. Understanding why the questions come, and which documents answer them, keeps gifts from being held up and the family's banking relationships calm.

                ## Milestones
                1. The basics of the international standard on non-profits and the regional assessment body understood.
                2. The questions the family's banks usually ask about charity payments listed.
                3. A standard document pack per partner ready to answer them.
                4. Any partner on a national non-profit register for AML purposes noted.

                ## Notes
                This is about preparing documents and answering questions, not legal advice. Ask the family's lawyer or compliance adviser about any specific obligation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A standard document pack for each partner is ready to answer bank questions on charity payments."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain summary of the international standard for non-profits"
                - "Ask the family's relationship banker what they need for charity payments"
                - "Build a standard document pack for each partner"
                - "Note which partners appear on a national non-profit register"
            - name: Visiting partners respectfully
              description: |-
                ## Purpose
                Visits from a funding family can cost a small NGO a week of preparation and turn the people it serves into props for photographs. Learning how to visit well, asking what the partner wants you to see, keeping the group small, paying your own way and asking before taking pictures, makes visits useful to both sides.

                ## Milestones
                1. A short family guide to partner visits written.
                2. Each partner asked how often and in what form it wants visits.
                3. A photo and consent rule agreed, especially for children.
                4. The guide shared with every family member who travels.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written family guide to partner visits, including a photo consent rule, is shared with every family member who travels."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask two partners what makes a funder visit helpful or a burden"
                - "Write a one-page family guide to partner visits"
                - "Agree a photo and consent rule for visits"
                - "Share the guide with every family member who travels to the islands"
            - name: Local giving traditions the family can build on
              description: |-
                ## Purpose
                Giving in the Caribbean did not start with foundations: church harvest collections, service clubs, past students' associations of secondary schools, diaspora hometown associations and the sou-sou, a rotating savings group, all move money within communities. Understanding these traditions shows where the family can add to what already works rather than set up something parallel.

                ## Milestones
                1. The main giving traditions on each focus island described in a page.
                2. Past students' associations of the schools the family cares about identified.
                3. Two conversations held with leaders of local giving groups.
                4. Ideas for working alongside these groups written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A page describing local giving traditions on each focus island, with two conversations held and ideas recorded, is filed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the elders how giving worked in their home community"
                - "Find the past students' associations of the family's schools"
                - "Speak with two leaders of local giving groups"
                - "Write down ways the family could work alongside them"
            - name: Cash versus goods policy for disaster gifts
              description: |-
                ## Purpose
                After every major storm, containers of donated clothes and tinned food pile up at ports while local shops that could supply the same things sit idle. A written family policy, preferring cash to trusted partners and sending goods only when a partner asks for something specific, avoids the unsolicited goods problem and helps the local economy recover.

                ## Milestones
                1. The family's default for disaster gifts agreed: cash to named partners.
                2. The exceptions written: specific items a partner requests, with shipping and customs arranged.
                3. A kind reply drafted for relatives who want to send barrels of goods.
                4. The policy added to the hurricane response plan.

                ## Notes
                A barrel is the drum of goods Caribbean families abroad traditionally ship home. Barrels for relatives are one thing; barrels to a disaster zone often sit uncleared for weeks.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written cash versus goods policy with its exceptions is added to the hurricane response plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the emergency partners what they need most in the first weeks after a storm"
                - "Write the family's default and exceptions for disaster gifts"
                - "Draft a kind reply for relatives who want to ship goods"
                - "Add the policy to the hurricane response plan"
            - name: Multi-year core funding for anchor partners
              description: |-
                ## Purpose
                Most Caribbean NGOs live grant to grant, with every gift tied to a project and nothing left for rent, an accountant or a director's salary. Choosing two anchor partners for three-year unrestricted grants, with a yearly conversation instead of a yearly application, gives them room to plan and keep good staff.

                ## Milestones
                1. Two anchor partners chosen from the due diligence results.
                2. A three-year grant letter for each, with amounts by year and light reporting.
                3. A yearly conversation in place of an application.
                4. A plan agreed for what happens at the end of the three years.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two anchor partners hold signed three-year unrestricted grant letters with yearly amounts and an agreed end plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Shortlist anchor partners from the due diligence results"
                - "Discuss three-year core funding with each shortlisted director"
                - "Send a grant letter setting out amounts, reporting and the end plan"
                - "Hold the yearly funding conversation with each anchor partner @recurring(yearly)"
            - name: Choosing a local intermediary or community foundation
              description: |-
                ## Purpose
                Where the family has no one on the ground, a local community foundation, an established national NGO or a regional grant-maker can find, check and monitor small groups for a fee. Comparing two or three intermediaries on fees, local knowledge, reporting and how they handle receipts decides whether to work through one and which.

                ## Milestones
                1. Two or three possible intermediaries identified for the focus islands.
                2. Each compared on fees, local knowledge, due diligence, reporting and receipts.
                3. References taken from other funders who use them.
                4. A decision recorded, with a trial grant if the family goes ahead.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least two intermediaries with references is recorded, and a decision on whether to use one is made."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Identify two or three intermediaries working on the focus islands"
                - "Compare their fees, local knowledge, reporting and receipt handling"
                - "Call two other funders who use each intermediary"
                - "Record the decision and agree a trial grant if going ahead"
            - name: Named or anonymous giving policy
              description: |-
                ## Purpose
                Putting a family name on a school building can open doors, but on a small island it also brings a flood of personal requests and can make relatives there a visible target. Agreeing when gifts are public, when they go out under a foundation or partner name and when they are fully anonymous lets each gift carry the profile the family is comfortable with.

                ## Milestones
                1. The family's default agreed: named, under a foundation name or anonymous.
                2. Cases where naming is allowed, such as a memorial scholarship, written down.
                3. Partners told how to credit or not credit the family.
                4. Relatives living on the islands consulted on their own safety and privacy.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written naming policy is agreed with relatives on the islands consulted, and every partner knows how to credit the family."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask relatives living on the islands how public gifts affect them"
                - "Agree the family's default on naming gifts"
                - "Write the cases where a named gift is allowed"
                - "Tell each partner how the family wishes to be credited"
            - name: Matching campaigns with diaspora associations
              description: |-
                ## Purpose
                Diaspora hometown and past students' associations in cities such as London, Toronto and New York raise money for the same schools and clinics the family cares about. Offering to match their fundraising for one specific project doubles the gift, draws in many more donors and builds goodwill across the diaspora.

                ## Milestones
                1. One diaspora association and one project chosen with the partner on the ground.
                2. A match amount, time window and payment route agreed in writing.
                3. The campaign run with the association, with funds sent through the agreed route.
                4. Results reported to the family and the association.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One matching campaign with a diaspora association is completed and the money raised is confirmed received by the partner."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List diaspora associations linked to the family's schools or communities"
                - "Agree a project with the partner on the ground"
                - "Write a match agreement with the association covering amount, timing and route"
                - "Report the campaign results to the family and the association"
            - name: Fewer, larger gifts instead of many small ones
              description: |-
                ## Purpose
                Fifty gifts of a few hundred dollars each take as much admin as fifty large ones and rarely change anything for the recipient. Reviewing the small gifts, keeping those tied to genuine family relationships and folding the rest into partner grants frees time and makes the money count.

                ## Milestones
                1. Every gift below an agreed size listed from the giving map.
                2. Each marked keep, fold into a partner grant, or stop.
                3. Recipients of stopped gifts told kindly and in good time.
                4. The admin time saved estimated and reported.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every small gift is marked keep, fold or stop, and recipients of stopped gifts have been told."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every gift below the agreed size from the giving map"
                - "Mark each gift keep, fold into a partner grant, or stop"
                - "Write to each recipient whose gift is stopping"
                - "Report the admin time saved at the next family meeting"
            - name: Ending funding to a partner responsibly
              description: |-
                ## Purpose
                Families change focus, and stopping a grant without warning can close a small NGO and damage the family's name on the island. A responsible exit, with a sensible default of a year's notice, a tapering final grant and introductions to other funders, explained in person, lets the partner plan and keeps the relationship intact.

                ## Milestones
                1. The decision and the reasons recorded at a family meeting.
                2. The partner told in person or by call before anything is written.
                3. A tapering final grant and notice period confirmed in a letter.
                4. Introductions made to at least two other funders.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An exiting partner has received notice in person, a written taper and introductions to at least two other funders."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Record the decision and reasons at the family meeting"
                - "Call the partner's director to explain the decision"
                - "Send a letter confirming the notice period and tapering grant"
                - "Introduce the partner to two other funders"
            - name: Rapid response gift after a hurricane or disaster
              description: |-
                ## Purpose
                In the first days after a hurricane, flood or eruption, partners need cash for water, tarpaulins, generators and fuel, and they need it before the news moves on. Running the response from the plan agreed before the season, releasing the disaster reserve to named partners within days, is where all the preparation pays off.

                ## Milestones
                1. Contact made with each emergency partner within 48 hours of the event.
                2. Gifts released from the disaster reserve under the fast approval rule.
                3. Payments confirmed received by each partner.
                4. A short note recorded of what worked and what slowed the response.

                ## Notes
                Phone and internet may be down for days. Agree a fallback contact abroad with each emergency partner before the season.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Emergency gifts reach named partners within a week of the event and a short lessons note is filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Contact each emergency partner or their fallback contact abroad"
                - "Approve gifts from the disaster reserve under the fast rule"
                - "Confirm each payment has been received"
                - "Write a short note on what worked and what slowed the response"
            - name: Named scholarship at a secondary school
              description: |-
                ## Purpose
                Scholarships in a grandparent's name at the secondary school they attended are among the most common family gifts in the region, and among the easiest to get wrong. Agreeing the criteria, the selection panel, what the award covers (fees, books, uniforms, transport, a laptop) and how long it runs, with the principal, before announcing it avoids awkward reversals.

                ## Milestones
                1. Criteria agreed with the principal: need, merit or both, and which forms or years.
                2. A selection panel named, with the family represented but not in control.
                3. What the award covers and for how many years written into award terms.
                4. The scholarship announced at the school and the first award made.

                ## Notes
                Consider covering the costs that actually keep students out of school, such as transport and lunch, not only fees.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written award terms are agreed with the principal, a panel is named and the first scholarship is awarded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Meet the principal to discuss a named scholarship"
                - "Agree the criteria and what the award covers"
                - "Name the selection panel and write the award terms"
                - "Announce the scholarship at the school and make the first award"
            - name: Scholar support and progress check-ins
              description: |-
                ## Purpose
                Money alone rarely gets a first-generation student through university; many scholars struggle with accommodation, isolation or a failed course in the first year. A light support routine, with a named mentor, a check-in each term and a clear renewal conversation each year, catches problems before a scholarship is lost.

                ## Milestones
                1. Each scholar matched with a mentor from the family or its network.
                2. A check-in each term recorded.
                3. Renewal terms explained to every scholar at the start.
                4. Scholars who struggle offered extra help before any award is withdrawn.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every scholar has a named mentor and a recorded check-in each term."
                cadence: rolling
              tasks:
                - "Match each scholar with a mentor"
                - "Explain the renewal terms to every scholar in writing"
                - "Agree how extra help is offered when a scholar is struggling"
                - "Check in with each scholar on progress and wellbeing @recurring(quarterly)"
            - name: Family visit to partners on the ground
              description: |-
                ## Purpose
                Seeing a partner's work in person, meeting the staff and the people they serve, changes how the family talks about its giving for years. A planned visit to two or three partners on one island, with the partners setting the agenda, works far better than a drop-in squeezed into a holiday.

                ## Milestones
                1. Two or three partners on one island agree dates and what they want to show.
                2. Travel, accommodation and transport booked, with the family paying its own costs.
                3. Everyone travelling has read the family's visit guide.
                4. A short write-up of the visit shared with the family and thanks sent to partners.

                ## Notes
                Start from the **Trip** template. Avoid the peak of the hurricane season and exam weeks if visiting schools.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A visit to at least two partners is completed and a written account is shared with the family."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask two or three partners on one island for suitable dates"
                - "Book travel and accommodation for the family group"
                - "Share the visit guide with everyone travelling"
                - "Write up the visit and send thanks to each partner"
            - name: Memorial gift to a family homeland community
              description: |-
                ## Purpose
                Many families want to mark an elder's life with a gift to the village or district where they grew up: a roof for the community centre, a library corner, a water tank for the primary school. Choosing it with the community, not for it, and planning upkeep from the start makes it something people still value in twenty years.

                ## Milestones
                1. Community leaders, the school or the church consulted on what is most needed.
                2. A gift chosen with an owner for its upkeep named.
                3. Building or delivery completed, with local contractors where possible.
                4. A dedication held, if the family wishes, with the elder's family present.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A memorial gift chosen with the community is delivered, with a named owner responsible for upkeep."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask community leaders what the village or district most needs"
                - "Choose the gift and agree who will maintain it"
                - "Hire a local contractor or supplier and agree the timeline"
                - "Plan a dedication with the elder's family"
            - name: Year-one report to the family on Caribbean giving
              description: |-
                ## Purpose
                Twelve months in, a short report to every branch, showing what was given, to whom, what partners said changed and what the family learned, builds trust in the programme and invites the next generation in. Writing it plainly, with photos the partners approved, matters more than polish.

                ## Milestones
                1. Figures for the year by island, pot and partner.
                2. A short story from each anchor partner, in their words.
                3. Photos chosen with partners' consent.
                4. The report sent to every branch and discussed at a family meeting.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A year-one report with figures, partner stories and consented photos is sent to every branch and discussed at a meeting."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask each anchor partner for a short story of the year in their own words"
                - "Pull the year's figures by island, pot and partner"
                - "Ask the agent to draft the report from the figures and stories"
                - "Send the report to every branch and discuss it at the next meeting"
            - name: Giving in person after retiring home
              description: |-
                ## Purpose
                Retirees who move back to the island after decades abroad often find they become the family's eyes and ears, and are asked for help at church, at the market and by neighbours. Setting a personal giving budget, a way to pass larger requests to the family programme and a regular morning volunteering with one partner keeps generosity sustainable and useful.

                ## Milestones
                1. A personal giving budget set, separate from the family programme.
                2. A simple rule for passing larger requests to the family lead.
                3. One partner chosen for regular volunteering.
                4. Local observations shared at the family's quarterly meeting.

                ## Notes
                Returning residents may have their own tax and customs rules in their home country. Check them with a local adviser before making large gifts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A personal giving budget and a rule for passing on larger requests are written, and volunteering with one partner happens monthly."
                cadence: rolling
              tasks:
                - "Set a personal yearly budget for local requests"
                - "Write how larger requests will be passed to the family lead"
                - "Choose one partner to volunteer with regularly"
                - "Spend a morning volunteering with your chosen partner @recurring(monthly:12)"
            - name: Children's Caribbean giving circle
              description: |-
                ## Purpose
                Children who grow up abroad can feel the Caribbean is a holiday place rather than a home with real needs. Giving them a small pot each year to research, video-call or visit two local groups and choose one together teaches them to judge need, decide as a group and keep a promise.

                ## Milestones
                1. A yearly pot agreed by the parents for the children's circle.
                2. Two local groups researched and contacted by the children.
                3. A grant chosen together and the reasons written down by the children.
                4. A report back from the group shared with the circle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The children's circle makes one grant each year, with reasons written by the children and a report back from the group."
                cadence: cyclic
              tasks:
                - "Agree the yearly pot with the other parents"
                - "Help the children find two local groups to research"
                - "Arrange a video call with each group"
                - "Hold the children's giving circle meeting @recurring(quarterly)"
            - name: Young adults' volunteering placement with a partner
              description: |-
                ## Purpose
                Placements with a partner NGO can teach a young adult more than any course, provided the work meets a real need and does not take a local job. Agreeing the role with the partner, safeguarding checks where the work involves children, travel and insurance, and a debrief afterwards make it worth the partner's time.

                ## Milestones
                1. A role agreed with the partner that meets a need they name.
                2. Safeguarding checks completed where the role involves children or vulnerable adults.
                3. Travel, accommodation and insurance arranged at the family's cost.
                4. A debrief held with the young adult and feedback asked of the partner.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A placement with a defined role is completed, with safeguarding checks done and feedback received from the partner."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask a partner whether it has a real role for a young volunteer"
                - "Arrange safeguarding checks if the role involves children"
                - "Book travel, accommodation and insurance for the placement"
                - "Hold a debrief and ask the partner for feedback"
            - name: Giving to the Caribbean from the UK, US or Canada
              description: |-
                ## Purpose
                Family members living abroad often get tax relief only for gifts to charities registered in their own country, so a direct gift to a Caribbean school may earn nothing. Many Caribbean causes have friends-of charities or recognised intermediaries abroad; finding these for each partner, and checking them with a tax adviser, lets overseas branches give efficiently.

                ## Milestones
                1. Each overseas giver's country and tax adviser listed.
                2. For each partner, any friends-of charity or recognised intermediary abroad identified.
                3. Each route checked with the giver's tax adviser.
                4. Overseas branches given a short note on how to give to each partner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each overseas branch has a short note, checked by its tax adviser, on how to give to each partner from its country."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List overseas family givers with their country and tax adviser"
                - "Search for friends-of charities or intermediaries for each partner"
                - "Ask each giver's tax adviser to confirm the route"
                - "Remind overseas branches to complete gifts before their tax year ends @recurring(yearly)"
            - name: Caribbean gifts in a parent's will or estate
              description: |-
                ## Purpose
                Parents and grandparents often want part of their estate to go to the island causes they cared about, but a vague wish in a will can leave executors guessing and charities waiting. Recording which partners, how much or what share, and a fallback if a charity closes, then having the lawyer draft it properly, protects both the wish and the executors.

                ## Milestones
                1. The parent's wishes recorded: which causes, which organisations, how much or what share.
                2. A fallback named for each gift in case an organisation closes or merges.
                3. The wishes passed to the parent's lawyer for drafting.
                4. Executors told where the details are kept.

                ## Notes
                The lawyer decides how the gift is drafted and whether it suits the estate. This project gathers wishes and details for them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The parent's Caribbean gift wishes, with fallbacks, are recorded and passed to their lawyer, and executors know where they are."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sit with the parent and write down the causes and organisations they wish to support"
                - "Collect each organisation's legal name and registration details"
                - "Name a fallback for each gift"
                - "Send the wishes to the parent's lawyer and tell the executors"
            - name: One programme across family branches on different islands
              description: |-
                ## Purpose
                When branches live in Trinidad, Barbados and Jamaica, each tends to fund its own island and the family programme splits into three. Agreeing a shared core, with each branch keeping a smaller local pot it directs itself, lets the family act together without anyone feeling their island has been forgotten.

                ## Milestones
                1. Each branch's current giving and priorities set out side by side.
                2. A shared core budget and causes agreed across branches.
                3. A local pot per branch, with simple reporting back.
                4. The arrangement written into the family's giving rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written arrangement with a shared core and a local pot per branch is agreed by every branch."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each branch to set out its current giving and priorities"
                - "Propose a shared core and a local pot per branch"
                - "Agree the split at a family meeting with every branch present"
                - "Write the arrangement into the family's giving rules"
            - name: Co-funding with other Caribbean families and companies
              description: |-
                ## Purpose
                Single families rarely have enough money to fix a regional problem such as early childhood education or youth employment, but several families and companies together can. Joining or forming a funder collaborative with shared due diligence and reporting cuts duplication for partners and spreads the cost of good staff.

                ## Milestones
                1. Other families and companies funding the same causes identified.
                2. A shared purpose, contributions and decision rules agreed in writing.
                3. One due diligence and reporting process used by all members.
                4. A regular call among members held and minuted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written collaborative agreement is in place and members meet on a regular call with minutes kept."
                cadence: rolling
              tasks:
                - "List other families and companies funding the same causes"
                - "Hold an exploratory call with two possible co-funders"
                - "Draft a short agreement on purpose, contributions and decisions"
                - "Join the co-funders' call and circulate the minutes @recurring(quarterly)"
            - name: Funding long-term recovery after a disaster
              description: |-
                ## Purpose
                Emergency money pours in for a few weeks after a storm and then dries up, while rebuilding homes, schools and livelihoods takes years. Setting aside part of the disaster pot for recovery grants six to twenty-four months after an event, through partners that stay, fills the gap most donors leave.

                ## Milestones
                1. A share of the disaster pot reserved for recovery rather than relief.
                2. Partners with a track record in rebuilding identified.
                3. Recovery grants made in the months after the emergency phase.
                4. Progress checked a year after the event.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recovery share of the disaster pot is set and at least one recovery grant is made after the emergency phase."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the share of the disaster pot kept for recovery"
                - "Identify partners with experience in rebuilding and livelihoods"
                - "Make recovery grants once the emergency phase ends"
                - "Check progress with each recovery partner a year after the event"
            - name: Endowed scholarship agreement with a university
              description: |-
                ## Purpose
                Endowing a scholarship at a regional university, for example a campus of the University of the West Indies, means the institution invests the capital and pays awards from the return, so the scholarship can outlive the family members who set it up. The agreement covering criteria, investment, reporting and what happens if the purpose becomes impossible needs care and the family's lawyer.

                ## Milestones
                1. The university's development office consulted on its endowment terms.
                2. Criteria, award size and reporting agreed in a draft agreement.
                3. A clause on changing the purpose if it becomes impossible included.
                4. The agreement reviewed by the family's lawyer and signed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed endowment agreement, reviewed by the family's lawyer, sets out criteria, reporting and a change-of-purpose clause."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Contact the university's development office about endowed scholarships"
                - "Draft the criteria and reporting the family wants"
                - "Ask the family's lawyer to review the draft agreement"
                - "Sign the agreement and note the first award date"
            - name: Capacity-building grant for a partner's finances and governance
              description: |-
                ## Purpose
                Strong partners often fail at the back office: no accountant, a board that never meets, no reserves policy. A grant tied to one agreed improvement, such as a part-time bookkeeper, a first independent review of the accounts or board training, makes every later gift safer and helps the partner attract other funders.

                ## Milestones
                1. One improvement chosen with the partner, not imposed on it.
                2. A grant letter setting out the improvement and the timeline.
                3. The improvement in place and confirmed by the partner.
                4. Its effect discussed at the next yearly conversation.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One agreed back-office improvement is funded and confirmed in place by the partner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the partner which back-office gap holds it back most"
                - "Agree one improvement and its timeline"
                - "Send a grant letter for the improvement"
                - "Confirm with the partner that the improvement is in place"
            - name: Light results tracking agreed with partners
              description: |-
                ## Purpose
                Results measurement designed abroad often asks small partners for data they have no time to collect. Agreeing two or three indicators per partner that they already track, such as students retained, homes repaired or clinic visits, and asking for them once a year, gives the family honest evidence without burying partners in forms.

                ## Milestones
                1. Two or three indicators agreed with each anchor partner.
                2. A baseline for each indicator recorded.
                3. Figures collected once a year and logged.
                4. Trends discussed with the partner, not just reported.

                ## Notes
                Start from the **Metrics log** template, one row per partner per year.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each anchor partner has two or three agreed indicators with a baseline and a yearly figure in the metrics log."
                cadence: cyclic
              tasks:
                - "Ask each anchor partner which numbers they already track"
                - "Agree two or three indicators and record a baseline"
                - "Set up a metrics log with one row per partner per year"
                - "Collect each partner's indicator figures and discuss the trend @recurring(yearly)"
            - name: Partnering with a ministry or regional body on a larger gift
              description: |-
                ## Purpose
                Larger gifts, such as rebuilding a school or equipping a hospital ward, usually need a memorandum of understanding with a government ministry or statutory body covering ownership, staffing, maintenance and public announcements. Preparing for a slower process, clear written terms and a possible change of government midway protects both the gift and the family's reputation.

                ## Milestones
                1. The right ministry or body and the responsible official identified.
                2. A memorandum of understanding drafted covering ownership, staffing, maintenance and announcements.
                3. The draft reviewed by the family's lawyer in that country.
                4. Signed terms and a delivery timeline in place.

                ## Notes
                Ask who will pay for staff and upkeep after handover. A building without a maintenance budget can fall into disrepair within a few years.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed memorandum of understanding covering ownership, staffing, maintenance and announcements is in place before funds are released."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Identify the ministry or body responsible for the proposed project"
                - "Request a meeting with the responsible official"
                - "Draft the memorandum of understanding terms the family needs"
                - "Ask the family's local lawyer to review the draft before signing"
---

# Caribbean Family Philanthropy

This area is for the parent or grandparent who gives to the islands the family comes from, and for the retiree who has moved back home and become the family's eyes and ears there. It starts with foundations (a map of past gifts, why the family gives, the focus islands, a budget, charity registration and tax questions, payment routes and approval limits), moves through the routines that keep the programme running, the knowledge that makes gifts land well, decisions on cash, core funding and intermediaries, events such as a hurricane response or a scholarship launch, situations for retirees, children and overseas branches, and ends with specialist work on collaboratives, long-term recovery, endowments and partnerships with government.

What repeats is a monthly payment reconciliation, receipts filing and local news scan, a quarterly family meeting, partner calls and children's giving circle, the May hurricane readiness check, the scholarship cycle and a yearly review, budget and tax receipts pack. The Meeting notes, Risk register, Trip and Metrics log templates pair with the family meeting, the hurricane plan, partner visits and results tracking. Tax, legal and regulatory questions in each country belong with the family's advisers there. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
