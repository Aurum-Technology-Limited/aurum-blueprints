---
id: family-office.crs-and-fatca-reporting
name: CRS and FATCA Reporting
description: "Family structures kept in line with CRS and FATCA: a residence and US-person map, entity classifications, self-certifications on file, a reporting calendar and a yearly review with the adviser."
category: personal
version: 1.0.0
tags: [family-office, crs-and-fatca-reporting, parent, retiree, crs, fatca, self-certification, tax-information-exchange]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - meeting-notes
    - remediation-plan
    - vendor
    - risk-register
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: CRS and FATCA Reporting
          description: "Keeping family structures compliant with tax information exchange: CRS and FATCA classification, self-certifications, reporting by institutions and adviser reviews."
          projects:
            - name: Inventory of entities and accounts in reporting scope
              description: |-
                ## Purpose
                Tax information exchange works account by account and entity by entity, so the family cannot judge its position until every trust, company, foundation, partnership and financial account is on one list. Most families find two or three forgotten items on the first pass: a dormant company, a custody account opened for a single deal, an insurance policy with cash value.

                ## Milestones
                1. Every family entity listed with its country of incorporation or establishment and its administrator.
                2. Every financial account listed with institution, country, account holder and approximate balance band.
                3. Cash-value insurance policies and annuity contracts included alongside bank and custody accounts.
                4. The list reviewed by the family's adviser for anything missing.

                ## Notes
                Balance bands are enough for this list. Exact figures belong with the institution, not in a spreadsheet emailed around the family.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single dated inventory of every family entity and financial account, checked by the adviser, with no item missing its country and holder."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every entity named on the family's latest structure chart"
                - "Ask each bank and custodian for a list of accounts held in family names"
                - "Add cash-value insurance policies and annuity contracts to the list"
                - "Send the inventory to the adviser and ask what is missing"
            - name: Tax residence map for every family member
              description: |-
                ## Purpose
                Under CRS, institutions report each account holder and controlling person to the country where that person says they are tax resident, so a wrong or out-of-date residence sends data to the wrong place. A map of where each member lives, works and holds a tax number, agreed with the adviser, is the reference every self-certification is checked against.

                ## Milestones
                1. Each adult family member and each beneficiary listed with their declared country or countries of tax residence.
                2. A taxpayer identification number recorded for each country of residence, or the reason none exists.
                3. Members with possible dual residence flagged for the adviser to review.
                4. The map dated and stored in the compliance file.

                ## Notes
                Tax residence is a legal test that differs by country and is not the same as citizenship or where a passport was issued. Let the adviser confirm any case that is not obvious.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated residence map covering every adult member and beneficiary, with a tax number or recorded reason for each country, reviewed by the adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each adult member which countries they consider themselves tax resident in"
                - "Collect a tax number for each declared country of residence"
                - "Flag anyone who split the last year between two or more countries"
                - "Refresh the residence map with each member before the filing season @recurring(yearly)"
            - name: US person check across the family
              description: |-
                ## Purpose
                US citizens and green card holders are followed by FATCA wherever they live, and families are regularly surprised by a child born in the United States, a parent who once held a green card, or a spouse who spends long periods there. A careful check of every member, done once with the adviser, prevents a bank discovering it first through a US birthplace on a passport.

                ## Milestones
                1. Every family member checked for US citizenship, a current or past green card and a US birthplace.
                2. Members who spend long periods in the United States identified for a presence test review.
                3. Each confirmed US person recorded with the adviser's note on their filing position.
                4. Accounts and entities where a US person is a holder or controlling person flagged in the inventory.

                ## Notes
                A US birthplace on any document is a FATCA indicator that institutions must follow up, even if the person has never lived there.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written record of the US status of every family member, signed off by the adviser, with each US connection linked to the accounts and entities it touches."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the place of birth on every family member's passport"
                - "Ask older members whether they ever held a US green card"
                - "Count days spent in the United States by anyone who travels there often"
                - "Re-run the US person check for new spouses and newborns @recurring(yearly)"
            - name: CRS classification of each family structure
              description: |-
                ## Purpose
                Whether a trust or company is a Financial Institution, an Active NFE or a Passive NFE under CRS decides who reports, what is reported and to whom. Getting this right for each structure, in writing, is the single most important step in the area, because every bank form and every filing follows from it.

                ## Milestones
                1. Each entity in the inventory given a proposed CRS classification with the reasoning in two or three sentences.
                2. Entities managed by a professional trustee or discretionary manager tested against the investment entity rules.
                3. The adviser's confirmed classification recorded for every entity.
                4. Any entity whose classification is uncertain or borderline marked for review each quarter.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every family entity carries a CRS classification confirmed in writing by the adviser, with the reasoning attached."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Note for each entity who manages its assets and what income it earns"
                - "Draft a proposed CRS classification for each entity"
                - "Book a working session with the adviser to confirm each classification"
                - "Record the confirmed classification and reasoning in the compliance file"
            - name: FATCA classification and GIIN status for each entity
              description: |-
                ## Purpose
                FATCA uses its own vocabulary, Foreign Financial Institution, Active or Passive NFFE, sponsored and trustee-documented entities, and its classifications do not always match the CRS answer for the same trust. Recording the FATCA status of every entity, and the GIIN where one is held, means the right W-8 form goes to every bank first time.

                ## Milestones
                1. Each entity given a FATCA classification confirmed by the adviser.
                2. Entities that hold a GIIN listed with the number and the date it was obtained.
                3. Any difference between an entity's CRS and FATCA classification explained in a sentence.
                4. Each entity's GIIN checked against the published IRS FFI list.

                ## Notes
                Whether the entity's country has a Model 1 or Model 2 agreement with the United States changes where the entity reports. Note it beside each entity.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every entity has a recorded FATCA classification and, where relevant, a GIIN that appears on the IRS FFI list."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect any GIIN letters or registration confirmations already held"
                - "Search the IRS FFI list for each GIIN the family holds"
                - "Ask the adviser to confirm the FATCA status of each entity"
                - "Note where the CRS and FATCA answers differ and why"
            - name: Controlling persons register for trusts and companies
              description: |-
                ## Purpose
                When a structure is a Passive NFE, banks look through it to its controlling persons, and for a trust that means settlors, trustees, protectors and beneficiaries, each reported with residence and tax number. A register of who counts as a controlling person in each structure lets the family answer bank questions quickly and spot when someone's details have drifted.

                ## Milestones
                1. A controlling persons list for every trust, foundation and company classed as a Passive NFE.
                2. Each controlling person linked to their entry on the tax residence map.
                3. Discretionary beneficiaries and protectors recorded with the adviser's view on how each is treated.
                4. The register checked against what each bank holds on file.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A controlling persons register exists for every passive structure, each person linked to a residence and tax number, and matched against bank records."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the trust deeds and company registers for each passive structure"
                - "List settlors, trustees, protectors and named beneficiaries for each trust"
                - "Ask each bank which controlling persons it currently holds on file"
                - "Compare the register with bank records every quarter @recurring(quarterly)"
            - name: Self-certifications on file with every institution
              description: |-
                ## Purpose
                Banks, custodians and insurers cannot report correctly, and may restrict an account, without a valid self-certification of tax status for each holder and controlling person. Gathering a copy of every form the family has signed, and filling the gaps, turns a scattered paper trail into a complete set the family can stand behind.

                ## Milestones
                1. A copy of the current self-certification held for every account in the inventory.
                2. Each form checked for consistency with the residence map and the entity classifications.
                3. Missing or out-of-date forms replaced and copies filed.
                4. A list of each form's signatory and signing date kept with the compliance file.

                ## Notes
                Never sign a self-certification you do not understand to make a bank's request go away. Send it to the adviser first.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every account in the inventory has a current self-certification on file that matches the residence map and the confirmed classifications."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each institution for copies of the tax forms it holds on the family"
                - "Mark each form as current, inconsistent or missing"
                - "Send inconsistent or missing forms to the adviser for review before signing"
                - "File signed copies with the date and signatory recorded"
            - name: Choosing the CRS and FATCA adviser
              description: |-
                ## Purpose
                Information exchange questions sit between tax, trust law and banking operations, and a general accountant or a private banker is rarely the right person to own them. Choosing an adviser who handles CRS and FATCA for families with cross-border structures, with a clear scope and fee, gives every other project in this area someone to sign off on it.

                ## Milestones
                1. A shortlist of two or three firms with cross-border family structure experience.
                2. Each firm's scope, fee basis and countries covered compared on one page.
                3. References from at least one family or trustee client taken for the preferred firm.
                4. An engagement letter signed that names CRS and FATCA work explicitly.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An engagement letter signed with one adviser whose scope names CRS and FATCA classification, forms and reviews for the family's structures."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the family's trustee and lawyer which firms they trust for CRS work"
                - "Send the shortlisted firms a short brief of the structures and countries"
                - "Compare scope and fee proposals side by side"
                - "Sign an engagement letter that names CRS and FATCA work"
            - name: Compliance file for tax information exchange
              description: |-
                ## Purpose
                Sooner or later a bank, trustee or tax authority asks why an entity was classified a certain way, the answer needs to be in a folder, not in someone's memory. A compliance file with a fixed structure for classifications, forms, filings, correspondence and adviser opinions makes the area survivable when a family office manager or adviser changes.

                ## Milestones
                1. A folder structure agreed with sections for inventory, classifications, forms, filings, correspondence and opinions.
                2. Existing documents moved into the structure and named consistently.
                3. Access limited to named family members, office staff and the adviser.
                4. An index page listing what each section holds and when it was last updated.

                ## Notes
                Tax numbers and dates of birth sit in this file, so keep it in the family's secure document vault, not in email.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single access-controlled compliance file with a written index, holding every classification, form, filing and opinion in its own section."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the six sections of the compliance file in the document vault"
                - "Move existing forms and opinions into the right sections"
                - "Set access for the named people only"
                - "Update the index page and archive superseded forms @recurring(yearly)"
            - name: Responsibility map for forms, filings and bank letters
              description: |-
                ## Purpose
                Months can be lost because no one knew whether the trustee, the office or a family member was meant to answer a bank's tax status letter. Agreeing who signs, who files and who replies for each entity and account removes that ambiguity before the next request arrives.

                ## Milestones
                1. Each entity assigned an owner for classification, forms and any filing duty.
                2. Each family member told who will help them with personal self-certifications.
                3. A rule agreed that every incoming tax status request goes to one named inbox or person first.
                4. The map shared with trustees, administrators and the adviser.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page responsibility map naming an owner for every entity's forms and filings, shared with trustees, administrators and the adviser."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every party who currently handles tax forms for the family"
                - "Assign one owner per entity for forms and filings"
                - "Set up a single point of contact for incoming tax status requests"
                - "Send the map to trustees, administrators and the adviser"
            - name: Change in circumstances monitoring
              description: |-
                ## Purpose
                Self-certifications are only true until something changes: a move abroad, a new beneficiary, a protector replaced, a company turning passive. Institutions expect to be told within a set period, often 30 days, and a short monthly check is the simplest way to catch changes before a form becomes false.

                ## Milestones
                1. A short list of trigger events agreed with the adviser, such as moves, marriages, births, deaths and changes to trust parties.
                2. A monthly check in place that asks the family office and trustees about each trigger.
                3. Each change logged with the forms it affects and the date institutions were told.
                4. A yearly summary of changes reviewed with the adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log updated every month for a year, with each change matched to updated forms sent within the period the institution sets."
                cadence: rolling
              tasks:
                - "Write the list of trigger events that require updated tax forms"
                - "Ask the office and trustees whether any trigger event happened this month @recurring(monthly:9)"
                - "Send updated forms to each institution affected by a logged change"
                - "Review the year's change log with the adviser @recurring(yearly)"
            - name: Annual reporting calendar for reporting entities
              description: |-
                ## Purpose
                Where a family trust or investment company is itself a Reporting Financial Institution, it carries filing duties to its local authority, and in some countries to the IRS, often including nil returns and separate compliance forms. A calendar of every deadline, owner and portal turns a scramble each year into a routine the trustee or administrator can follow.

                ## Milestones
                1. Every reporting entity listed with its filing country, portal and deadlines confirmed by the adviser.
                2. Nil return duties and any separate compliance form deadlines included.
                3. An owner named for preparing, reviewing and submitting each filing.
                4. Filing confirmations from the last cycle saved in the compliance file.

                ## Notes
                Start from the **Compliance control** template. Deadlines differ by country and change, so confirm them with the adviser or the authority's guidance each year rather than copying last year's dates.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar of every reporting entity's filings, with an owner per filing, and a saved submission confirmation for each filing in the last cycle."
                cadence: cyclic
              tasks:
                - "Ask the adviser which family entities have their own filing duties"
                - "Confirm this year's deadlines and portals for each reporting entity @recurring(yearly)"
                - "Save each submission confirmation in the compliance file"
                - "Hold a short filing season debrief with the administrator @recurring(yearly)"
            - name: Responding to bank tax status requests
              description: |-
                ## Purpose
                Private banks send tax status letters, form renewals and remediation requests throughout the year, often with a deadline and a warning about account restrictions. A routine for logging, checking and answering each request means none sits unopened in a family member's inbox while the deadline passes.

                ## Milestones
                1. A request log with institution, account, what was asked, deadline and status.
                2. Every request checked against the residence map and classifications before anyone signs.
                3. Answers sent before each deadline and copies filed.
                4. Repeat requests traced to their cause and fixed at the source.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tax status request received in the year logged and answered before its deadline, with copies of the replies in the compliance file."
                cadence: rolling
              tasks:
                - "Start a log of open tax status requests from banks and custodians"
                - "Check the request log for anything due within three weeks @recurring(monthly:17)"
                - "Compare each request with the residence map before replying"
                - "Ask the bank why a request repeated if the same form was sent before"
            - name: Quarterly classification review of family structures
              description: |-
                ## Purpose
                Classification can change without anyone noticing: a trading subsidiary sold leaves a holding company with mainly passive income, or a new discretionary manager makes a trust an investment entity. Looking at each structure's income and management every quarter catches the shift before the next form or filing goes out wrong.

                ## Milestones
                1. A one-line test for each entity covering who manages it and what share of its income is passive.
                2. A quarterly review completed and dated for every entity.
                3. Any change in classification referred to the adviser and recorded.
                4. Forms at institutions updated after any confirmed change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four dated classification reviews completed in a year, with any change confirmed by the adviser and followed by updated forms."
                cadence: cyclic
              tasks:
                - "Write a one-line classification test for each entity"
                - "Run the classification test across all entities @recurring(quarterly)"
                - "Send any entity whose answer changed to the adviser"
                - "Update institution forms after a confirmed change"
            - name: Annual reconciliation of what was reported
              description: |-
                ## Purpose
                Families rarely see what institutions actually reported about them until a tax authority asks a question. Asking each reporting institution and trustee each year what was reported, to which country and about whom, and comparing it with the family's own records, catches wrong residences and missing controlling persons while they are still easy to fix.

                ## Milestones
                1. Each reporting institution asked for a summary of last year's CRS and FATCA reports concerning the family.
                2. Each summary compared with the residence map and controlling persons register.
                3. Discrepancies listed with the institution responsible and the correction requested.
                4. Corrections confirmed in writing and filed.

                ## Notes
                Many institutions will provide this on request even though they are not obliged to send it automatically. A data access request under privacy law is the fallback.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly reconciliation note comparing every institution's reported data with family records, with each discrepancy corrected in writing."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask each institution what it reported about family accounts last year @recurring(yearly)"
                - "Compare each reported residence and tax number with the residence map"
                - "List discrepancies and request corrections in writing"
                - "File the confirmations of each correction"
            - name: Trust distribution log for reporting
              description: |-
                ## Purpose
                When a trust is a reporting institution, distributions to discretionary beneficiaries can make them reportable for that year, and the trustee needs the payee's residence and tax number to report it. A log of every distribution, kept as it happens, saves the trustee rebuilding the year from bank statements at filing time.

                ## Milestones
                1. A distribution log for each trust with date, beneficiary, amount band and purpose.
                2. Each recipient's residence and tax number confirmed before or at payment.
                3. The log shared with the trustee at each year end.
                4. Payments made on a beneficiary's behalf, such as school fees, recorded the same way.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete distribution log for each trust for the year, with residence and tax number held for every recipient, handed to the trustee before filing."
                cadence: rolling
              tasks:
                - "Set up a distribution log for each family trust"
                - "Add the month's trust distributions and payments to the log @recurring(monthly:24)"
                - "Confirm each new recipient's residence and tax number"
                - "Send the year's log to the trustee after the year closes"
            - name: W-8 and W-9 form expiry tracker
              description: |-
                ## Purpose
                US tax forms held by banks and fund administrators expire, and most W-8 forms lapse at the end of the third calendar year after signing unless circumstances change sooner. An expired form can mean US withholding on income or a frozen subscription, so a tracker of every form's expiry is a small job that prevents an expensive surprise.

                ## Milestones
                1. Every W-8BEN, W-8BEN-E, W-8IMY and W-9 the family has given listed with the recipient and signing date.
                2. An expiry date worked out for each form and confirmed with the adviser.
                3. Renewals sent to each recipient before expiry.
                4. Fund subscription documents checked for the tax forms they required.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No W-8 or W-9 given by the family lapses during the year, with each renewal sent before its expiry date."
                cadence: rolling
              tasks:
                - "List every US tax form given to banks, funds and administrators"
                - "Work out the expiry date for each form"
                - "Check for forms expiring in the next 90 days @recurring(monthly:4)"
                - "Send renewed forms through the adviser before they lapse"
            - name: Annual adviser review of reporting compliance
              description: |-
                ## Purpose
                Once a year the family should sit down with the adviser to check that classifications still hold, filings were made, forms are current and new rules have been considered. Holding that review on a fixed date with a written pack keeps it from turning into a vague phone call that changes nothing.

                ## Milestones
                1. A review pack prepared with the inventory, change log, filing confirmations and open requests.
                2. The review held with the adviser and the family office lead.
                3. Actions recorded with owners and dates.
                4. Actions from the previous review checked off or carried forward with a reason.

                ## Notes
                Start from the **Meeting notes** template. Ask the adviser to flag any rule changes in the family's countries since the last review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly review held with the adviser, with dated notes and a list of actions that each have an owner and due date."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Book the annual reporting review with the adviser @recurring(yearly)"
                - "Ask the agent to assemble the review pack from the compliance file"
                - "Record actions with owners and dates in the meeting notes"
                - "Check last year's actions before the meeting"
            - name: Filing portal registrations and access custody
              description: |-
                ## Purpose
                Reporting entities file through national tax authority portals and the IRS FATCA registration system, and access is often tied to one person who leaves, retires or forgets. Recording who holds each registration, how access is recovered and when it was last tested keeps a filing from being blocked by a lost login.

                ## Milestones
                1. Every portal registration listed with the entity, the authorised user and the recovery route.
                2. At least two authorised people named for each entity where the portal allows it.
                3. Access tested once a year before the filing season.
                4. Changes of authorised user recorded when staff or trustees change.

                ## Notes
                Record who holds access and how to recover it, never the passwords themselves. Credentials belong in the office's password manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every portal registration has two named authorised users where allowed and a recorded access test within the last year."
                cadence: cyclic
              tasks:
                - "List every filing portal registration the family's entities hold"
                - "Record the authorised user and recovery route for each"
                - "Test portal access for every entity before the filing season @recurring(yearly)"
                - "Update the authorised user when a trustee or staff member changes"
            - name: Classification check before new accounts and entities
              description: |-
                ## Purpose
                New companies and accounts are often opened in a hurry for a deal or a property purchase, and the bank's tax form gets filled in by whoever is in the room. A short check before any account opening or new entity, routed through the adviser, keeps new additions consistent with everything already on file.

                ## Milestones
                1. A one-page pre-opening checklist covering classification, controlling persons and forms.
                2. The checklist agreed with the family office and the trustees.
                3. Every new account and entity in the year opened through the checklist.
                4. The inventory updated within a week of each opening.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every account or entity opened in the year has a completed pre-opening checklist and appears in the inventory within a week."
                cadence: rolling
              tasks:
                - "Draft a one-page pre-opening checklist for tax status"
                - "Agree with trustees that no account opens without the checklist"
                - "Check that every account opened this quarter went through the checklist @recurring(quarterly)"
                - "Add each new account and entity to the inventory"
            - name: Learning the Common Reporting Standard
              description: |-
                ## Purpose
                CRS is the OECD standard under which more than a hundred jurisdictions exchange financial account data each year, and family members who sign forms or sit on trust boards should understand its basic logic. A few hours with the OECD's own explanations turns the jargon of reportable accounts, NFEs and controlling persons into something a family member can follow in a meeting.

                ## Milestones
                1. The OECD's CRS overview and implementation handbook summary read.
                2. The difference between a Financial Institution, an Active NFE and a Passive NFE explained in your own words.
                3. The data points reported for an account holder and a controlling person listed.
                4. Three questions about the family's own structures sent to the adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page personal summary of how CRS works, plus three family-specific questions answered by the adviser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the OECD's CRS overview and handbook from its website"
                - "Write a one-page summary of how an account becomes reportable"
                - "List the data points reported about a controlling person"
                - "Send three questions about the family's structures to the adviser"
            - name: Learning how FATCA works outside the United States
              description: |-
                ## Purpose
                FATCA reaches non-US families through the agreements their countries signed with the United States, and its forms, GIINs and US indicia show up in every private bank onboarding. Understanding the Model 1 and Model 2 agreements, the main entity types and how US persons are found makes bank conversations shorter and less alarming.

                ## Milestones
                1. The difference between Model 1 and Model 2 intergovernmental agreements understood.
                2. The agreement type for each country where the family holds structures noted.
                3. The main FATCA entity types and the forms that go with them listed.
                4. The US indicia that banks search for written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note covering the agreement type for each family country, the main FATCA entity types with their forms, and the US indicia banks check."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the US Treasury's list of FATCA intergovernmental agreements"
                - "Note the agreement model for each country the family uses"
                - "Match each FATCA entity type to its W-8 form"
                - "List the US indicia banks look for in account records"
            - name: How trusts are reported under CRS
              description: |-
                ## Purpose
                Trusts are where CRS surprises families most: a professionally managed trust can be a reporting institution in its own right, while a trust with a family trustee may be a Passive NFE that its bank looks through. Studying both routes, using the family's own trusts as worked examples, explains why beneficiaries can be reported even in years they receive nothing.

                ## Milestones
                1. The two reporting routes for trusts, as institution or as Passive NFE, explained with one family trust as an example of each.
                2. The treatment of settlors, protectors, fixed and discretionary beneficiaries noted.
                3. The family's trusts each mapped to their route.
                4. Any point that surprised the family raised with the trustee.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each family trust mapped to its CRS reporting route with a short explanation of who is reported and why, checked by the trustee."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the OECD guidance section on trusts and controlling persons"
                - "Pick one family trust and work out who would be reported"
                - "Map every family trust to its reporting route"
                - "Raise any surprising answers with the trustee"
            - name: Reading a self-certification form line by line
              description: |-
                ## Purpose
                Self-certification forms for individuals, entities and controlling persons look similar across banks but ask subtly different questions, and a tick in the wrong box can classify a trust wrongly for years. Working through each form type once, with the adviser's notes beside each section, gives family members the confidence to spot a wrong pre-filled answer.

                ## Milestones
                1. One sample of each form type collected: individual, entity and controlling person.
                2. Each section annotated with what it asks and the family's usual answer.
                3. The annotated forms reviewed by the adviser.
                4. The annotations saved in the compliance file for anyone who signs forms.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Annotated copies of the three self-certification form types, reviewed by the adviser and stored for family signatories."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect a blank individual, entity and controlling person form from one bank"
                - "Annotate each section with what it is asking"
                - "Ask the adviser to correct the annotations"
                - "Share the annotated set with everyone who signs forms"
            - name: Personal US reporting for family members who are US persons
              description: |-
                ## Purpose
                Alongside FATCA institution reporting sit personal filings that US persons living abroad must make themselves, such as the FBAR for foreign accounts and Form 8938 for specified foreign assets. Family members with a US connection need to know which filings their accountant handles, because a family trust or foreign account can create a duty they never see on a bank statement.

                ## Milestones
                1. Each US person in the family has a named US tax preparer.
                2. The personal filings that apply to each US person confirmed by their preparer.
                3. Accounts and trusts each US person has signing authority over or an interest in listed for the preparer.
                4. Confirmation of each year's filings held in the compliance file.

                ## Notes
                Thresholds and filing rules for these forms are set by US law and change. Leave the detail to the US preparer and keep the family's job to supplying complete lists on time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every US person in the family has a named preparer and a filed confirmation of their personal foreign account and asset filings for the latest year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Confirm each US family member has a US tax preparer"
                - "List every account and trust each US person is connected to"
                - "Send each list to the preparer before the US filing season"
                - "File confirmation that each personal filing was made"
            - name: The managed-by test for investment entities
              description: |-
                ## Purpose
                Many family companies and trusts that think of themselves as simple holding vehicles become investment entities under CRS because a bank or discretionary manager manages their portfolio and most income is from investing. Understanding this test, and running it on each structure, explains why the family may suddenly be asked to file returns of its own.

                ## Milestones
                1. The gross income test and the managed-by condition explained in plain words.
                2. Each family entity's income mix over the last three years estimated.
                3. Each entity's management arrangement, discretionary or advisory, recorded.
                4. The adviser's view on each entity's result recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written result of the managed-by test for every family entity, with income mix and management arrangement noted and confirmed by the adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the OECD commentary on the investment entity definition"
                - "Estimate each entity's investment income share for three years"
                - "Note whether each portfolio is managed on a discretionary or advisory basis"
                - "Ask the adviser to confirm each entity's result"
            - name: Plain-language briefing for family members
              description: |-
                ## Purpose
                Most family members only meet CRS and FATCA as a form from the bank, and many sign what they are given. A short briefing in plain language, explaining what is reported, why their tax number is needed and who to call, cuts down on wrong answers and anxious calls to the office.

                ## Milestones
                1. A two-page briefing written for family members without a finance background.
                2. The briefing checked by the adviser for accuracy.
                3. The briefing shared with every adult member and beneficiary.
                4. A named contact for questions included.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-page plain-language briefing, checked by the adviser, sent to every adult family member and beneficiary with a named contact."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a two-page plain-language briefing on CRS and FATCA"
                - "Send the draft to the adviser for a factual check"
                - "Add the name and contact for tax form questions"
                - "Share the briefing with every adult member and beneficiary"
            - name: Trustee-documented trust or own registration
              description: |-
                ## Purpose
                A trust that is a Financial Institution may be able to rely on its professional trustee to carry its FATCA and CRS duties, or may need its own registration and filings. The choice changes cost, control and who answers questions, and it is best taken deliberately with the trustee rather than inherited by default.

                ## Milestones
                1. Each trust that is a Financial Institution identified.
                2. The trustee's willingness and terms for carrying the reporting confirmed in writing.
                3. The costs and duties of each route compared for each trust.
                4. A decision for each trust recorded with the adviser's sign-off.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each trust that is a Financial Institution has a recorded decision on its reporting route, agreed with the trustee and signed off by the adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the trusts classed as Financial Institutions"
                - "Ask each trustee whether it will carry the trust's reporting"
                - "Compare the cost and duties of each route"
                - "Record the decision with the adviser's sign-off"
            - name: Sponsored entity or own GIIN for investment companies
              description: |-
                ## Purpose
                Family investment companies that are FATCA Financial Institutions can sometimes be sponsored by a manager or administrator that registers and reports on their behalf, instead of holding their own GIIN. Comparing the two, including what happens if the sponsor relationship ends, avoids an entity being left unregistered when a manager changes.

                ## Milestones
                1. Each family investment company's eligibility for sponsorship confirmed by the adviser.
                2. Sponsor terms, fees and exit arrangements obtained from any willing sponsor.
                3. The two routes compared in a one-page note.
                4. A decision recorded and the registration status updated in the inventory.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each family investment company on sponsorship or its own GIIN, with registration status updated in the inventory."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the adviser which investment companies could be sponsored"
                - "Request sponsor terms and exit arrangements from the administrator"
                - "Write a one-page comparison of the two routes"
                - "Record the decision and update registration status"
            - name: Cleaning up inconsistent residence declarations
              description: |-
                ## Purpose
                The same person declared resident in one country at one bank and another country at a second bank is a common finding and a red flag for any authority that receives both reports. Finding every inconsistency across institutions and correcting it in one coordinated round fixes the problem at its source.

                ## Milestones
                1. Residence declarations at every institution compared with the residence map.
                2. Each inconsistency listed with the person, institution and both answers.
                3. Corrected forms sent to every institution in one round after adviser review.
                4. Confirmation of each correction filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every residence declaration held at every institution matches the residence map, with written confirmation of each correction."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare each institution's residence declarations with the residence map"
                - "List each inconsistency with the person and both answers"
                - "Have the adviser approve corrected forms before sending"
                - "Send all corrections in one round and file confirmations"
            - name: Remediating missed or late filings
              description: |-
                ## Purpose
                Families who discover that a trust or company should have been filing as a reporting institution for years face a choice that only an adviser can guide: how to bring the entity into compliance and whether to approach the authority first. A structured remediation plan, with the facts gathered and the options on paper, makes that conversation faster and less costly.

                ## Milestones
                1. The entities and years affected identified with the adviser.
                2. The missing data for each year gathered from administrators and banks.
                3. The adviser's options for regularising the position set out in writing.
                4. A decision taken and the filings or disclosures made on the agreed timetable.

                ## Notes
                Start from the **Remediation plan** template. Do not contact a tax authority about past failures without the adviser's guidance on how and when.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every missed filing identified is either filed or covered by an adviser-led disclosure, with confirmations held in the compliance file."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the entities and years the adviser believes are affected"
                - "Request account data for each missing year from administrators"
                - "Get the adviser's written options for regularising the position"
                - "Track each filing or disclosure through to confirmation"
            - name: Choosing a filing service or reporting software
              description: |-
                ## Purpose
                Reporting entities must file in the authority's XML schema, and families with several entities often end up paying different administrators for the same job. Comparing specialist filing services and reporting software against the family's actual entity count and countries can cut cost and put all filings under one process.

                ## Milestones
                1. The family's filing volume summarised: entities, countries and accounts reported.
                2. Three providers compared on schema support, countries covered, security and price.
                3. References from at least one trust company or family office user taken.
                4. A provider chosen and an onboarding date agreed.

                ## Notes
                Start from the **Vendor** template. Ask how each provider stores tax numbers and where its servers are.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider chosen from a comparison of three, with references taken and an onboarding date agreed before the next filing season."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the entities, countries and accounts the family files for"
                - "Shortlist three filing services or software providers"
                - "Ask each how they store and protect tax numbers"
                - "Choose a provider and agree an onboarding date"
            - name: Data protection review of reported information
              description: |-
                ## Purpose
                CRS and FATCA move dates of birth, tax numbers and balances through banks, administrators, advisers and authorities, and every copy is a privacy risk for a family that values discretion. Mapping where that data goes, and checking that each party protects it, is a reasonable step for any family with a security or privacy concern.

                ## Milestones
                1. A map of every party that receives family tax data and why.
                2. Each party's data protection terms or policy obtained.
                3. Copies held without a reason identified and deleted by agreement.
                4. Family members told of their rights to see what is held and reported about them.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A data flow map of family tax information with each recipient's protection terms on file and unneeded copies removed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every party that receives family tax numbers and dates of birth"
                - "Request each party's data protection terms"
                - "Agree deletion of copies held without a reason"
                - "Recheck the data flow map for new recipients @recurring(yearly)"
            - name: First filing season for a new reporting entity
              description: |-
                ## Purpose
                In its first year as a reporting institution, a trust or investment company has the hardest cycle: registrations, account reviews, data collection and schema tests all happen for the first time against a fixed deadline. Treating it as a dated project with the administrator, rather than a routine, gets the first filing in on time and sets the pattern for later years.

                ## Milestones
                1. Registration with the local authority, and the IRS where needed, completed.
                2. Due diligence on every account the entity maintains completed and documented.
                3. The first return prepared, reviewed by the adviser and submitted.
                4. A debrief held and the process written up for next year.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new reporting entity's first return submitted before the deadline with a saved confirmation and a written process for the next year."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Confirm with the adviser which registrations the entity needs"
                - "Agree a timetable with the administrator working back from the deadline"
                - "Have the adviser review the return before submission"
                - "Write up the process while it is fresh"
            - name: Responding to a tax authority enquiry after an exchange
              description: |-
                ## Purpose
                Exchanged data is matched against tax returns, and a mismatch can bring a letter asking a family member to explain an account abroad. A calm, prepared response, built from the compliance file and led by the adviser, usually resolves it; a rushed reply from the member alone can create new problems.

                ## Milestones
                1. The letter passed to the adviser within days of arrival.
                2. The relevant account, entity and reporting history pulled from the compliance file.
                3. A response drafted by the adviser and approved by the member.
                4. The response sent before the deadline and the outcome recorded.

                ## Notes
                Do not reply directly to the authority before speaking to the adviser, however simple the question looks.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The enquiry answered before its deadline through the adviser, with the response and final outcome recorded in the compliance file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send a copy of the letter to the adviser the day it arrives"
                - "Pull the account's reporting history from the compliance file"
                - "Review the adviser's draft response with the family member"
                - "Record the outcome once the authority replies"
            - name: Account restriction over missing tax documentation
              description: |-
                ## Purpose
                Banks can block transactions or threaten closure when tax documentation is missing, and it tends to happen just before a property completion or a capital call. A prepared response for this situation, with the forms, contacts and escalation route ready, turns a crisis into a two-day fix.

                ## Milestones
                1. The exact documents the bank needs confirmed in writing.
                2. Forms prepared and checked by the adviser within the bank's timetable.
                3. The relationship manager engaged to lift the restriction once documents are in.
                4. The cause recorded so the same gap does not recur at other banks.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The restriction lifted with a written confirmation from the bank, and the underlying gap fixed at every other institution."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the bank for a written list of the documents it needs"
                - "Get the adviser to check the forms before they go back"
                - "Ask the relationship manager for a date the restriction will lift"
                - "Check other banks for the same documentation gap"
            - name: Preparing for a compliance review of a reporting entity
              description: |-
                ## Purpose
                Several authorities now review reporting institutions for the quality of their due diligence, not just whether a return was filed, and a family trust can be selected like any other. Preparing a review pack of written procedures, account files and filing records in advance means the trustee can answer within the authority's timetable.

                ## Milestones
                1. Written due diligence procedures for the entity in place and dated.
                2. A sample of account files checked for complete self-certifications.
                3. Filing records and correspondence for recent years gathered in one pack.
                4. A named person ready to deal with the authority, with the adviser in support.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete review pack of procedures, sampled account files and filing records ready for each reporting entity, with a named contact."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the trustee whether written due diligence procedures exist"
                - "Sample five account files and check each self-certification"
                - "Gather recent filing records into one review pack"
                - "Name the person who will deal with any review"
            - name: Year-end data cut for reporting entities
              description: |-
                ## Purpose
                Reporting is based on balances and payments at the calendar year end, so a clean cut of account values, distributions and closed accounts in early January saves the administrator weeks of chasing later. A short year-end routine, run the same way each year, gives every filing a solid base.

                ## Milestones
                1. Year-end balances obtained for every account a reporting entity maintains.
                2. Closed accounts and their closure dates recorded.
                3. The distribution log for the year closed and handed over.
                4. The data pack sent to the administrator by an agreed date in January.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A year-end data pack with balances, closures and distributions delivered to the administrator by the agreed January date."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Agree the January handover date with the administrator"
                - "Request year-end balances for every reportable account @recurring(yearly)"
                - "Record accounts closed during the year with their dates"
                - "Close the distribution log and add it to the pack"
            - name: A child becoming an adult beneficiary
              description: |-
                ## Purpose
                Turning eighteen, or leaving home to study abroad, often makes a child a reportable person in their own right, with a new tax residence and a first tax number. Parents can prepare the forms, explain what is reported and introduce the young adult to the office before banks start writing to them.

                ## Milestones
                1. The child's tax residence and tax number confirmed with the adviser.
                2. Every trust and account where the child is a beneficiary or holder identified.
                3. Self-certifications in the child's own name completed where needed.
                4. A short conversation held with the child about what is reported and who to ask.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The young adult has current self-certifications at every relevant institution and has met the named contact for tax form questions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether the child needs a tax number in their country of study"
                - "List the trusts and accounts the child is connected to"
                - "Complete the child's self-certifications with the adviser"
                - "Explain to the child what is reported and who to call"
            - name: Updating tax status after a family member moves country
              description: |-
                ## Purpose
                After a move, a member's data should start flowing to the new country, and every bank, trust and fund needs updated forms to make that happen. Working through every institution in one sweep after the move, rather than as letters arrive, keeps reports consistent with the member's new tax position.

                ## Milestones
                1. The new residence position confirmed by advisers in both countries.
                2. Every account and structure linked to the member identified.
                3. Updated self-certifications sent to each institution within the expected period.
                4. The residence map and controlling persons register updated.

                ## Notes
                Planning before the move belongs with pre-immigration advice. This project is the paperwork that follows once the move has happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every institution connected to the member holds an updated self-certification reflecting the confirmed new residence."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get written confirmation of the new residence position from the advisers"
                - "List every account and structure linked to the member"
                - "Send updated forms to each institution in one round"
                - "Update the residence map and controlling persons register"
            - name: Death of a settlor, account holder or beneficiary
              description: |-
                ## Purpose
                A death changes who the controlling persons are, may change a trust's classification and leaves accounts in the name of someone who can no longer sign. In the middle of grief, a clear checklist for the reporting side, handled by the office and trustee, keeps institutions informed without adding to the family's burden.

                ## Milestones
                1. Every account and structure where the person was a holder or controlling person identified.
                2. Each institution informed through the executor or trustee.
                3. The adviser's view obtained on any classification changes.
                4. Registers and forms updated once new holders or beneficiaries are known.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every institution connected to the person informed, and registers and forms updated, within the timescale the executor and adviser agree."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every account and structure linked to the person who died"
                - "Agree with the executor who informs each institution"
                - "Ask the adviser whether any structure's classification changes"
                - "Update the registers once new holders are known"
            - name: New US connections through marriage or birth
              description: |-
                ## Purpose
                A marriage to a US citizen, a child born in the United States or a member taking a US green card can bring FATCA reporting into structures that never had it. Spotting the event early and agreeing the effect on trusts and accounts with US and home advisers avoids years of forms that no longer match the facts.

                ## Milestones
                1. The new US connection confirmed and recorded on the US person check.
                2. Every structure where the person is a holder, beneficiary or controlling person identified.
                3. The effect on each structure's reporting set out by the advisers.
                4. Forms and registers updated to reflect the new position.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The new US connection recorded and every affected structure's forms updated to match the advisers' written view."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Record the new US connection on the US person check"
                - "List the structures the person is connected to"
                - "Ask US and home advisers for their view on each structure"
                - "Update forms at each affected institution"
            - name: Personal reporting checklist for a retiree with accounts abroad
              description: |-
                ## Purpose
                Retirees who have worked or lived in several countries often keep accounts and pensions in each, and every one generates its own forms and reports. A personal checklist, reviewed once a year, keeps the residence declared at each institution consistent with where they now live and spares family members a tangle if they later need to help.

                ## Milestones
                1. Every personal account, pension and policy listed with institution and country.
                2. The residence declared at each institution checked against the current position.
                3. A trusted family member or the office given a copy of the list.
                4. The checklist reviewed with the adviser once a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A current personal checklist of accounts and declared residences, shared with a trusted person and reviewed with the adviser in the last year."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "List every personal account, pension and policy held abroad"
                - "Check the residence declared at each institution"
                - "Give a copy of the list to a trusted family member or the office"
                - "Review the checklist with the adviser @recurring(yearly)"
            - name: Changes to trust parties and protectors
              description: |-
                ## Purpose
                Replacing a protector, adding a beneficiary class or changing trustees can change both who is reported and how a trust is classified. Running each change through a short reporting check before it takes effect keeps the governance decision and the tax forms in step.

                ## Milestones
                1. A reporting check added to the family's process for changing trust parties.
                2. Each proposed change reviewed by the adviser for classification and controlling person effects.
                3. Institutions told of the change with updated forms.
                4. The controlling persons register updated on the date the change takes effect.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trust party change in the year passed a reporting check before taking effect and was reflected in forms and the register."
                cadence: rolling
              tasks:
                - "Add a reporting check step to the trust change procedure"
                - "Send each proposed change to the adviser before signing"
                - "Update institutions with new forms on the effective date"
                - "Update the controlling persons register"
            - name: Screening arrangements under mandatory disclosure rules
              description: |-
                ## Purpose
                Many jurisdictions have adopted rules that require advisers, and sometimes the family itself, to disclose arrangements that could avoid CRS reporting or hide beneficial owners. Screening new structures and changes against these rules with the adviser protects the family from inadvertently using an arrangement that must be reported or should not be used at all.

                ## Milestones
                1. The disclosure rules that apply in the family's countries identified by the adviser.
                2. A screening question added to every new structure or significant change.
                3. Each arrangement screened with the result recorded.
                4. Any disclosure duty met through the adviser on time.

                ## Notes
                Start from the **Risk register** template. An arrangement sold as reducing what gets reported is the clearest warning sign there is.
              priority: medium
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "Every new structure or significant change in the year screened against disclosure rules, with results recorded and any disclosure made through the adviser."
                cadence: rolling
              tasks:
                - "Ask the adviser which disclosure rules apply in the family's countries"
                - "Add a screening question to the new structure checklist"
                - "Review the risk register for open screening items @recurring(quarterly)"
                - "Record each screening result in the compliance file"
            - name: Written due diligence procedures for family reporting entities
              description: |-
                ## Purpose
                Written procedures for identifying reportable accounts, collecting self-certifications and handling changes are expected of every reporting entity, yet family entities often rely on habit instead. Writing them down with the administrator protects the trustees and makes a compliance review straightforward.

                ## Milestones
                1. Procedures drafted covering new accounts, existing accounts, changes in circumstances and record keeping.
                2. The draft reviewed by the adviser against local requirements.
                3. The procedures approved by the trustees or directors and dated.
                4. Staff and administrators who apply them briefed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Dated written due diligence procedures for each reporting entity, reviewed by the adviser and approved by its trustees or directors."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the administrator for its standard procedure template"
                - "Adapt it for each family reporting entity"
                - "Send the draft to the adviser for review"
                - "Table the procedures for trustee or board approval"
            - name: Crypto-asset reporting readiness
              description: |-
                ## Purpose
                The OECD Crypto-Asset Reporting Framework extends information exchange to crypto exchanges and brokers, with many jurisdictions committed to collect data from 2026 and exchange it from 2027. Families with digital assets held personally or in structures should know which providers will report, what forms they will ask for and how holdings fit with existing CRS classifications.

                ## Milestones
                1. Every crypto-asset holding and provider in the family listed.
                2. Each provider's reporting plans and form requirements confirmed.
                3. The adviser's view obtained on how structures holding crypto-assets are treated.
                4. New self-certifications completed where providers request them.

                ## Notes
                Dates of adoption vary by jurisdiction. Check the current position with the adviser rather than relying on the dates above.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of family crypto-asset holdings with each provider's reporting status and the adviser's written view on any structures involved."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every crypto-asset holding and the platform it sits on"
                - "Ask each platform whether it will report under the new framework"
                - "Get the adviser's view on structures that hold crypto-assets"
                - "Complete any new self-certifications the platforms request"
            - name: Amended CRS rules readiness review
              description: |-
                ## Purpose
                The OECD has amended the Common Reporting Standard to cover electronic money and digital currencies and to ask for more detail, such as the role of each controlling person, with many jurisdictions applying the changes from 2026. Checking what the amendments mean for the family's structures and forms avoids a wave of unexpected bank requests.

                ## Milestones
                1. A summary of the amendments relevant to the family obtained from the adviser.
                2. Structures and accounts affected by the changes identified.
                3. Forms and registers updated to capture any new data points, such as controlling person roles.
                4. Institutions' requests under the amended rules answered promptly.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of how the amended CRS affects each family structure, with registers updated for any new data points."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the adviser for a summary of the CRS amendments that affect the family"
                - "Mark the structures and accounts the amendments touch"
                - "Add a controlling person role column to the register"
                - "Log any bank requests that cite the amended rules"
            - name: Multi-jurisdiction reporting map for a complex structure
              description: |-
                ## Purpose
                Large families can have a single trust with a trustee in one country, a holding company in a second, accounts in a third and beneficiaries in five more, each piece reporting somewhere different. Drawing the full reporting map for the most complex structure shows exactly which institution reports what to which country, and exposes gaps and double reporting.

                ## Milestones
                1. The structure drawn with every entity, account and controlling person.
                2. Each reporting flow marked: which institution, which authority, which persons.
                3. Gaps and duplicate reports identified with the adviser.
                4. The map stored in the compliance file and updated after any change.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A reporting map of the family's most complex structure showing every reporting flow, reviewed by the adviser with gaps and duplicates listed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the family's most complex structure to map first"
                - "Draw every entity, account and controlling person in it"
                - "Mark which institution reports what to which authority"
                - "Review the map with the adviser for gaps and duplicates"
            - name: Caribbean structures and their reporting duties
              description: |-
                ## Purpose
                Families using Caribbean centres such as the Cayman Islands, the Bahamas or the BVI find that each has its own CRS and FATCA portal, registration rules and compliance forms for reporting institutions. Recording the local duties for each Caribbean entity, confirmed by local counsel or the administrator, keeps the family's filings in line with the centre's own regime.

                ## Milestones
                1. Every family entity in a Caribbean centre listed with its local administrator.
                2. Each centre's registration, filing and compliance form duties confirmed by local counsel or the administrator.
                3. Local deadlines added to the annual reporting calendar.
                4. Any local penalties or notices received in the last three years reviewed.

                ## Notes
                Choosing between jurisdictions belongs with wealth structuring advice. This project is about meeting the duties of the centres already in use.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each Caribbean entity's local reporting duties confirmed in writing by local counsel or the administrator and added to the reporting calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every family entity held in a Caribbean centre"
                - "Ask each local administrator for the entity's reporting duties"
                - "Add local deadlines to the annual reporting calendar"
                - "Review any local notices or penalties from the last three years"
---

# CRS and FATCA Reporting

This area is for the family whose trusts, companies, foundations and bank accounts are reported between tax authorities every year, and who would rather know what is being said about them than find out from a letter. It starts with foundations (an inventory of entities and accounts, a tax residence map, a US-person check, CRS and FATCA classifications, a controlling persons register and self-certifications on file), then the operating routines that keep the picture current, the knowledge needed to read the forms and rules, decisions about registrations and clean-ups, dated events such as a first filing season or an enquiry, life situations from a child turning eighteen to a death in the family, and finally specialist work on mandatory disclosure, crypto-asset reporting and the amended standard.

What repeats is a monthly change-in-circumstances check, a monthly distribution log and form expiry check, a quarterly classification review, and a yearly cycle of filings, reconciliations and an adviser review. The Compliance control, Meeting notes, Remediation plan, Vendor and Risk register templates pair with the reporting calendar, the adviser review, late-filing clean-ups, filing providers and avoidance screening. None of this is tax or legal advice: every classification, form and filing decision belongs with a qualified adviser in each country involved. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
