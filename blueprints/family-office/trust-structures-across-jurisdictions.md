---
id: family-office.trust-structures-across-jurisdictions
name: Trust Structures Across Jurisdictions
description: "A documented picture of every family trust across countries: an inventory and structure chart, a deed library, residence maps, trust types understood, a filing calendar and a yearly review with advisers in each jurisdiction."
category: personal
version: 1.0.0
tags: [family-office, trust-structures-across-jurisdictions, parent, retiree, trusts, cross-border, trust-reporting, estate-structures]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - operational-checklist
    - meeting-notes
    - risk-register
    - reading-queue
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Trust Structures Across Jurisdictions
          description: "Holding family assets in trusts in more than one country: choosing jurisdictions, trust types, tax and reporting effects, and keeping the structure documented."
          projects:
            - name: Inventory of every family trust and its home country
              description: |-
                ## Purpose
                Families with wealth across borders often discover a forgotten trust only when a bank asks about it or a beneficiary receives a tax letter. A single inventory listing every trust the family has settled, benefits from or is named in, with its governing law and current trustee, is the starting point for everything else in this area.

                ## Milestones
                1. Every trust the family settled, benefits from or sits on as protector listed in one table.
                2. Each entry shows the trust name, date of settlement, governing law and current trustee.
                3. Trusts set up by grandparents or by in-laws for the family's benefit included.
                4. Gaps and uncertain entries marked for follow-up with the trustee or the family lawyer.

                ## Notes
                Include dormant and apparently empty trusts. A trust with nothing in it can still have reporting duties until it is formally wound up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete trust inventory with name, settlement date, governing law and trustee for each trust, with open questions listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every trust you know of from memory, statements and old correspondence"
                - "Ask each adult family member whether they are a beneficiary of any other trust"
                - "Request a confirmation of governing law and trustee from each trustee"
                - "Mark uncertain entries and send the list of gaps to the family lawyer"
            - name: Cross-border trust structure chart
              description: |-
                ## Purpose
                A table of trusts says what exists, but only a chart shows how a trust in one country owns a company in a second, which holds property in a third. Drawing the whole structure on one page, with countries shown as coloured bands, lets advisers in every jurisdiction see the same picture and spot where one change will ripple into another.

                ## Milestones
                1. Each trust drawn with its settlor, trustee, protector and classes of beneficiary.
                2. Underlying companies, partnerships and directly held assets shown beneath each trust.
                3. Every entity coloured by the country whose law governs it.
                4. Percentage holdings and the date of the chart written on it.
                5. The chart checked by the trustee of each trust for accuracy.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page structure chart covering every trust and underlying entity, confirmed as accurate by each trustee."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the top layer of trusts and settlors on a single page"
                - "Add each underlying company and asset with percentage holdings"
                - "Colour every entity by the country of its governing law"
                - "Send the draft to each trustee asking them to correct their part"
            - name: Trust deed and supplemental deed library
              description: |-
                ## Purpose
                Few families hold a complete, signed copy of every trust deed, and fewer still have the deeds of appointment, variation and retirement that changed them over the years. Gathering the full chain of documents for each trust, in a secure vault with a clear index, means nobody has to rely on a trustee's summary when a question matters.

                ## Milestones
                1. A signed copy of the original deed held for every trust in the inventory.
                2. Every deed of addition, appointment, exclusion, variation and trustee change collected in date order.
                3. An index for each trust listing every document, its date and what it changed.
                4. Missing documents requested in writing from the trustee or former advisers.

                ## Notes
                Store scans in the family's document vault with access limited to named people. Certified copies are worth requesting where originals cannot be released.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A vault folder per trust holding the original deed and every later deed in date order, each with a written index."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Create one vault folder per trust using the inventory names"
                - "Write to each trustee asking for certified copies of every deed on file"
                - "Build a dated index of documents for each trust as copies arrive"
                - "Chase missing deeds with former lawyers or retired trustees"
            - name: Residence map of settlors, trustees and beneficiaries
              description: |-
                ## Purpose
                How a trust is taxed and reported usually turns on where the people around it live, not where the trust was set up. A map showing the tax residence and citizenship of every settlor, trustee, protector and beneficiary shows each adviser which countries have a claim, and which family moves would change the picture.

                ## Milestones
                1. Tax residence and citizenship recorded for every settlor, protector and adult beneficiary.
                2. The residence of each trustee and the place each trust is administered noted.
                3. Beneficiaries with ties to more than one country flagged.
                4. The map shared with each country's tax adviser for their reading of its effects.

                ## Notes
                Citizenship matters as well as residence where a country taxes its citizens wherever they live, as the United States does.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A residence and citizenship map for every person connected to each trust, reviewed by the tax adviser in each relevant country."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every settlor, protector and beneficiary from the trust inventory"
                - "Record each person's tax residence, citizenship and any second home country"
                - "Note where each trustee is based and where trustee meetings are held"
                - "Refresh the residence map with every adult beneficiary @recurring(yearly)"
            - name: Governing law, situs and administration sheet
              description: |-
                ## Purpose
                One trust can be governed by the law of one place, hold assets situated in another and be run by a trustee in a third, and each of those can trigger different rules. Setting out these three facts for every trust on one sheet stops advisers making assumptions and shows where a trust is more exposed than its deed suggests.

                ## Milestones
                1. Governing law and the jurisdiction of the courts recorded for each trust.
                2. The country where each main asset is situated listed beneath its trust.
                3. The place of administration and the trustee's regulator noted.
                4. Mismatches between the three highlighted for discussion at the next review.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sheet showing governing law, asset situs and place of administration for every trust, with mismatches flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the governing law and forum clause in each trust deed"
                - "List where each significant trust asset is legally situated"
                - "Confirm with each trustee where the trust is actually administered"
                - "Flag any trust whose assets and law sit in different countries"
            - name: Why the family holds assets in trust
              description: |-
                ## Purpose
                Trusts get set up for good reasons, such as protecting a young beneficiary, keeping a business intact or planning for incapacity, and then outlive the people who remember those reasons. A short statement of what the family wants its trusts to achieve gives every later decision about jurisdictions, trust types and changes something to be measured against.

                ## Milestones
                1. The original purpose of each existing trust recovered from the settlor, deed or adviser.
                2. Three to six family objectives for holding assets in trust written in plain language.
                3. Objectives that pull against each other, such as control and protection, named.
                4. The statement agreed by the senior generation and filed with the inventory.

                ## Notes
                This is a family statement, not a legal document. Share it with trustees as context; it does not bind them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page statement of trust objectives agreed by the senior generation and filed alongside the trust inventory."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each living settlor why they created their trust and note the answer"
                - "Draft three to six objectives the family wants its trusts to serve"
                - "Mark where two objectives conflict and how the family wants to weigh them"
                - "Agree the statement with the senior generation and file it"
            - name: Trust lawyers and tax advisers in each country
              description: |-
                ## Purpose
                Every country in the structure needs someone who knows its trust and tax law, and a lawyer in one centre is rarely qualified to opine on another. Building a named panel, with one trust lawyer and one tax adviser for each jurisdiction the family touches, means a question can reach the right person in days rather than weeks.

                ## Milestones
                1. Each country in the residence map and the structure chart matched to a needed adviser.
                2. A named trust lawyer and tax adviser confirmed for every relevant jurisdiction.
                3. Engagement terms, hourly rates and conflict checks on file for each.
                4. One adviser named to coordinate cross-border questions between the others.

                ## Notes
                Start from the **Vendor** template for each adviser. Check that the trustee's own lawyers are not the only advisers, since their duty runs to the trustee rather than the family.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A panel listing a trust lawyer and tax adviser for every jurisdiction in the structure, with a named coordinator and signed engagement terms."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every country that appears on the structure chart or residence map"
                - "Ask existing advisers for two referrals in each country without cover"
                - "Record engagement terms and rates for each adviser on the panel"
                - "Confirm each adviser's contact details and availability @recurring(yearly)"
            - name: Family glossary of trust terms
              description: |-
                ## Purpose
                Beneficiaries who do not know what a protector, an appointor or a power of addition is cannot ask useful questions, and they often stay silent in meetings rather than admit it. A short glossary in the family's own words, using examples from its own trusts, makes the rest of this area readable to every adult member.

                ## Milestones
                1. Around thirty terms listed from the family's own trust deeds and reports.
                2. Each term explained in two plain sentences with an example from a family trust.
                3. Terms that differ between common law and civil law countries marked.
                4. The glossary checked by the trust lawyer and shared with adult beneficiaries.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of about thirty trust terms with family examples, checked by the trust lawyer and circulated to adult beneficiaries."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Highlight unfamiliar terms while reading two of the family's trust deeds"
                - "Ask the agent to draft plain explanations of each highlighted term"
                - "Replace generic examples with ones from the family's own trusts"
                - "Send the glossary to the trust lawyer for a check before sharing"
            - name: Schedule of assets held in each trust
              description: |-
                ## Purpose
                Trustees report in their own formats and currencies, and few families can say at a glance what each trust actually holds. A schedule for every trust, listing each asset with its location, how it is held and its last value, ties the structure chart to real property, shares and accounts.

                ## Milestones
                1. Every asset in every trust listed with its type, country and holding entity.
                2. Last known value and valuation date recorded, in the original currency.
                3. Assets held directly by the trustee separated from those held through companies.
                4. Assets with special rules, such as land or shares in a family business, flagged.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An asset schedule for each trust listing every holding with country, holding entity, value and valuation date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each trustee for its latest statement of trust assets"
                - "Enter each asset with type, country and holding entity in one schedule"
                - "Flag land, family business shares and other assets with special rules"
                - "Update values from new trustee statements @recurring(quarterly)"
            - name: Annual cross-border trust review
              description: |-
                ## Purpose
                Laws, family members and assets all move over a year, and a structure that suited the family three years ago can now be costly or exposed. A yearly review that brings the trust inventory, residence map and asset schedules together with the advisers in each country catches drift before it becomes a problem.

                ## Milestones
                1. An agenda covering each trust, every residence change and every new law flagged by advisers.
                2. Written updates from each jurisdiction's adviser received a week before the meeting.
                3. The review held with the coordinating adviser and minutes taken.
                4. Actions from the review assigned with an owner and a target date.

                ## Notes
                Start from the **Meeting notes** template. Ask each adviser for a short written note rather than a presentation; it keeps fees down and gives you a record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One review held each year with written adviser updates, minutes and an owned action list filed in the vault."
                cadence: cyclic
              tasks:
                - "Set a review month that falls after most trust accounts are finalised"
                - "Request a one-page update from each country's adviser before the meeting"
                - "Hold the cross-border trust review and circulate minutes @recurring(yearly)"
                - "Track each review action to completion in the action list"
            - name: Trust filing and reporting calendar
              description: |-
                ## Purpose
                Each country brings its own deadlines: trust tax returns, beneficiary statements, register updates, annual government fees and trustee licence renewals. One calendar holding every date for every trust, with who is responsible for it, turns a scattering of obligations into a routine the family can watch over without chasing.

                ## Milestones
                1. Every recurring filing and fee date for each trust entered with its country.
                2. A named person or firm responsible for each entry.
                3. Reminders set four weeks before each date.
                4. Confirmation of each filing saved in the trust's vault folder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar holding every trust filing and fee date with an owner, and a saved confirmation for each completed filing."
                cadence: rolling
              tasks:
                - "Ask each trustee and tax adviser for their list of yearly deadlines"
                - "Enter every date with the trust name, country and responsible party"
                - "Check the next month's filings and chase any that look late @recurring(monthly:9)"
                - "Roll the calendar forward and confirm dates for the coming year @recurring(yearly)"
            - name: Beneficial ownership and trust register filings
              description: |-
                ## Purpose
                More and more countries require trusts with local assets, trustees or beneficiaries to be entered on a register of beneficial owners, and the details must be kept current. Knowing which registers each trust appears on, what was filed and when it next needs confirming avoids penalties and the awkward discovery that a register is out of date.

                ## Milestones
                1. Every register each trust must appear on identified with the relevant adviser.
                2. Copies of each filing and its reference number saved in the vault.
                3. Changes to trustees, protectors or beneficiaries traced to the registers they affect.
                4. Who can see each register's entries, and on what grounds, noted for the family.

                ## Notes
                Some registers are private to authorities, others open to people with a legitimate interest. Your privacy adviser will want to know which is which.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of every register each trust appears on, with filing references and a confirmed date for the next update."
                cadence: rolling
              tasks:
                - "Ask each country's adviser which trust registers apply to the family"
                - "Save every filing receipt and reference number in the vault"
                - "Check registers after any change of trustee, protector or beneficiary"
                - "Confirm every register entry is still accurate @recurring(yearly)"
            - name: Distribution records across all trusts
              description: |-
                ## Purpose
                Once a beneficiary receives money from a trust, the tax treatment in their country can depend on what the trust earned and when, sometimes years earlier. Keeping a single record of every distribution, with the trustee's resolution and the character of the payment as the trustee reported it, gives each beneficiary's tax adviser what they need.

                ## Milestones
                1. Every distribution from every trust recorded with date, amount, currency and recipient.
                2. The trustee resolution or minute for each distribution saved.
                3. The trustee's statement of what each payment represents filed with it.
                4. Each beneficiary's adviser sent their part of the record each year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A distribution record for all trusts with trustee resolutions attached and a yearly extract sent to each beneficiary's adviser."
                cadence: rolling
              tasks:
                - "Ask each trustee for a list of distributions made over the past five years"
                - "Record each distribution with date, amount, currency and recipient"
                - "Collect new distribution details and resolutions from trustees @recurring(quarterly)"
                - "Send each beneficiary's adviser their annual extract of distributions"
            - name: Beneficiary change of circumstances log
              description: |-
                ## Purpose
                Life events such as a beneficiary marrying, moving abroad, becoming a parent or taking a new citizenship can change how a trust is taxed or reported in several countries at once. A running log of these events, passed to trustees promptly, means the structure responds to family life instead of finding out from a tax authority.

                ## Milestones
                1. A log started with the events that matter: moves, marriages, births, deaths and new citizenships.
                2. An agreed route for family members to report changes, kept short and simple.
                3. Each entry sent to the relevant trustees with the date they were told.
                4. Advisers' responses to each change recorded beside it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log of beneficiary life events, each with the date trustees were told and the adviser response noted."
                cadence: rolling
              tasks:
                - "List the life events that trustees and advisers need to hear about"
                - "Tell adult beneficiaries how and to whom to report a change"
                - "Gather changes from each branch and pass them to trustees @recurring(quarterly)"
                - "Record each adviser's view of what the change affects"
            - name: Collecting annual trust accounts and valuations
              description: |-
                ## Purpose
                Trustees should produce accounts each year, but in a multi-country structure they arrive in different formats, currencies and months, and some never arrive at all unless asked for. A routine for requesting, receiving and filing each trust's annual accounts and valuations gives the family a dependable record and a basis for questions at the review.

                ## Milestones
                1. The expected month and format of accounts agreed with each trustee.
                2. Accounts for the latest year received and filed for every trust.
                3. Major movements in each trust explained in a short note from the trustee.
                4. Any trust without recent accounts escalated in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Current annual accounts filed for every trust, each with a short trustee note on major movements."
                cadence: cyclic
              tasks:
                - "Ask each trustee when its accounts year ends and when accounts are ready"
                - "Request accounts and valuations from every trustee @recurring(yearly)"
                - "File each set of accounts in the trust's vault folder with a summary line"
                - "Write to any trustee whose accounts are more than three months late"
            - name: Keeping the structure chart current
              description: |-
                ## Purpose
                A structure chart is only useful if it matches reality, and it falls out of date quietly whenever a company is added, a trustee retires or a holding is sold. A short quarterly check against trustee updates keeps a version on file that advisers, banks and the family can trust.

                ## Milestones
                1. A named owner for the structure chart in the family or the office.
                2. A version number and date shown on every copy.
                3. Each quarter's changes checked against trustee and company secretary updates.
                4. Superseded versions archived rather than deleted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A structure chart with a version number and date no older than one quarter, with earlier versions archived."
                cadence: rolling
              tasks:
                - "Name the person who owns and updates the structure chart"
                - "Add a version number and date box to the chart"
                - "Compare the chart with trustee and company updates @recurring(quarterly)"
                - "Archive each superseded version in a dated folder"
            - name: Trust document log and version control
              description: |-
                ## Purpose
                New deeds, trustee minutes, letters from advisers and registry receipts arrive steadily, and they are easy to leave in an inbox. A monthly habit of filing each new trust document, logging it in the trust's index and noting what it changes keeps the deed library complete without a large clean-up later.

                ## Milestones
                1. One inbox or folder where every new trust document lands first.
                2. Each document logged in the trust's index with its date and effect.
                3. Signed final versions distinguished clearly from drafts.
                4. Nothing older than a month left unfiled.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trust document received in the last month is filed and logged in its trust's index, with drafts kept separate."
                cadence: rolling
              tasks:
                - "Set up a single intake folder for incoming trust documents"
                - "Agree a naming pattern of date, trust and document type"
                - "File and index every new trust document from the intake folder @recurring(monthly:23)"
            - name: Log of additions to each trust
              description: |-
                ## Purpose
                Money or assets added to a trust after it was set up, by the settlor or by someone else, can change who counts as a settlor and how the trust is taxed in their country. A record of every addition, with who made it and when, protects the family from a later dispute about where the trust's capital came from.

                ## Milestones
                1. Every addition since settlement listed with date, value, asset and contributor.
                2. Deeds or letters of addition saved beside each entry.
                3. Additions by anyone other than the original settlor highlighted.
                4. The tax adviser in each contributor's country told of additions that may matter.

                ## Notes
                Check before anyone pays a trust's bills from their own pocket. Paying expenses can count as adding value in some countries.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A record of every addition to each trust with contributor, value and supporting document, reviewed by the relevant tax advisers."
                cadence: rolling
              tasks:
                - "Ask each trustee for a history of additions since settlement"
                - "Record each addition with date, value and who made it"
                - "Highlight additions made by someone other than the original settlor"
                - "Confirm with trustees that no new additions went unrecorded @recurring(yearly)"
            - name: Trust running costs by jurisdiction
              description: |-
                ## Purpose
                Trustee fees, government levies, audit, registered office and adviser bills add up across several countries, and they are rarely shown in one place. Tracking the full cost of each trust shows which structures still earn their keep and gives the family facts for a fee conversation or a simplification decision.

                ## Milestones
                1. Every fee and levy for each trust gathered for the past two years.
                2. Costs grouped by trust and by country in one currency.
                3. Each trust's total cost set beside the value of its assets.
                4. Trusts whose cost looks out of line flagged for the annual review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cost record by trust and country for the last two years, with outliers flagged for the annual review."
                cadence: rolling
              tasks:
                - "Collect two years of trustee invoices and government fee receipts"
                - "Group costs by trust and country in a single currency"
                - "Add new invoices and compare against the previous quarter @recurring(quarterly)"
                - "Note any trust whose costs are high relative to its assets"
            - name: Discretionary, fixed interest and bare trusts compared
              description: |-
                ## Purpose
                Most family structures use a handful of trust types, and the differences decide who can demand what, how tax falls and how much protection there is. Learning how discretionary, fixed interest, life interest and bare trusts work, using the family's own deeds as examples, lets parents and retirees follow what their advisers propose.

                ## Milestones
                1. Each trust in the inventory labelled with its type, confirmed by the trust lawyer.
                2. A one-page comparison of who has rights to income and capital under each type.
                3. Notes on how each type is commonly treated for tax in the family's main countries, from the advisers.
                4. Three questions about the family's own trusts written down for the next review.

                ## Notes
                Start from the **Reading queue** template for the reading list. Choose plain guides from professional trust bodies over sales material from providers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every family trust labelled by type and a one-page comparison of rights under each type, checked by the trust lawyer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose two plain guides to trust types from a professional trust body"
                - "Label each family trust by type and ask the lawyer to confirm"
                - "Write a one-page comparison of income and capital rights by type"
                - "List three questions about the family's own trusts for the review"
            - name: Trusts in civil law countries and recognition
              description: |-
                ## Purpose
                Many civil law countries have no trust in their own law, so a beneficiary living in one may find that local courts, banks or tax authorities treat the trust as a contract, a gift or something stranger. Understanding how recognition works, including the role of the Hague Trusts Convention where a country has joined it, prepares the family for questions before a member moves or an asset is bought there.

                ## Milestones
                1. Each civil law country connected to the family listed.
                2. Whether each country recognises foreign trusts, and on what basis, noted from adviser input.
                3. Practical issues such as local reporting or gift treatment summarised per country.
                4. Any trust with assets or beneficiaries in a non-recognising country flagged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A per-country note on how each civil law country tied to the family treats foreign trusts, drawn from local adviser input."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the civil law countries where family members live or own assets"
                - "Check which of them have joined the Hague Trusts Convention"
                - "Ask a local adviser in each how a foreign trust is treated in practice"
                - "Summarise the practical issues per country in a short note"
            - name: How tax systems view a foreign trust
              description: |-
                ## Purpose
                Countries take very different approaches to trusts set up abroad: some tax the settlor as if the trust did not exist, some tax beneficiaries only on what they receive, and some charge extra when old income is paid out late. Grasping these broad patterns, with each country's adviser explaining their own rules, helps the family see why one change can be harmless in one place and expensive in another.

                ## Milestones
                1. The broad approach of each country in the residence map described by its adviser.
                2. Whether each country looks through to the settlor or taxes beneficiaries on receipt noted.
                3. Any rules that charge more on distributions of accumulated income identified.
                4. A summary table shared with the family before the next review.

                ## Notes
                This is for understanding, not planning. Never act on the summary table without a specific opinion from the adviser in the country concerned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary table of how each country in the residence map taxes foreign trusts, written from adviser explanations."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each country's tax adviser for a one-page note on foreign trusts"
                - "Note whether each country taxes the settlor or the beneficiaries"
                - "Mark any country with extra charges on late distributions"
                - "Ask the agent to merge the notes into one comparison table"
            - name: Purpose trusts and reserved powers trusts explained
              description: |-
                ## Purpose
                Several offshore centres offer trusts that work differently from the classic family trust: purpose trusts that hold assets for an aim rather than people, and trusts where the settlor keeps investment or other powers. The Cayman STAR trust and the BVI VISTA trust are two well known examples, and families holding family company shares often meet them. Knowing what they do, and what they cost in protection, makes a proposal easier to judge.

                ## Milestones
                1. The difference between a purpose trust and a beneficiary trust written in a paragraph.
                2. The common reserved powers listed, with what keeping each one may risk.
                3. Two or three named examples from different centres summarised.
                4. Whether any family trust already uses these features confirmed with the lawyer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explaining purpose and reserved powers trusts with named examples, and a lawyer's confirmation of any family use."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read an introductory guide to purpose trusts from a trust law body"
                - "List common reserved powers and the risks the lawyer attaches to each"
                - "Summarise two named examples from different offshore centres"
                - "Ask the lawyer whether any family trust already uses these features"
            - name: Firewall laws and the limits of asset protection
              description: |-
                ## Purpose
                Many trust centres have firewall legislation that refuses to apply foreign judgments about inheritance or marriage to their trusts, and families sometimes treat this as a guarantee. Learning what firewalls actually cover, and the challenges they do not stop, such as transfers made to defeat known creditors, keeps expectations honest.

                ## Milestones
                1. What firewall provisions generally cover described in plain language.
                2. The usual grounds on which a trust can still be challenged listed.
                3. Which family trusts sit in centres with firewall laws confirmed by the lawyer.
                4. One paragraph on the family's realistic level of protection written with the lawyer.

                ## Notes
                Asset protection planned after a claim is known or likely is the most common way trusts fail. Talk to the lawyer before moving anything when a dispute is brewing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lawyer-reviewed note on what firewall laws cover for the family's trusts and where they would not help."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a professional summary of trust firewall legislation"
                - "List the grounds on which trusts are commonly challenged"
                - "Ask the lawyer which family trusts benefit from firewall provisions"
                - "Write the protection paragraph with the lawyer and file it"
            - name: Reading a trust deed clause by clause
              description: |-
                ## Purpose
                Trust deeds are long and dense, but the clauses that matter most to a family are few: the beneficiaries, the trust period, the powers to add or exclude, the protector's consents and the governing law. Working through one of the family's own deeds with the lawyer, clause by clause, builds the confidence to read the others.

                ## Milestones
                1. One family deed chosen and read in full with key clauses marked.
                2. The beneficiary, period, powers, protector and governing law clauses summarised.
                3. Questions answered in a session with the trust lawyer.
                4. A one-page clause guide written for reuse on the family's other deeds.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page clause guide built from one family deed after a session with the trust lawyer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the family deed that matters most and read it end to end"
                - "Mark the beneficiary, period, powers, protector and law clauses"
                - "Book an hour with the trust lawyer to go through your questions"
                - "Turn your notes into a clause guide for the other deeds"
            - name: Private wealth foundations compared with trusts
              description: |-
                ## Purpose
                Families with members in civil law countries are often offered a private foundation, as found in Liechtenstein, Panama or Jersey, instead of a trust. A foundation is a legal person with its own council and charter, which can sit more comfortably with civil law courts and banks. Comparing the two on control, recognition, reporting and cost lets the family judge whether a foundation fits a particular branch.

                ## Milestones
                1. The main features of a private foundation set beside those of a discretionary trust.
                2. How each would be treated in the countries where the family lives noted from advisers.
                3. Control, disclosure and running costs compared.
                4. A view recorded on whether any branch would be better served by a foundation.

                ## Notes
                This is about private wealth foundations for family members. A charitable foundation is a separate project with different rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of private foundations and trusts for the family's countries, with a recorded view on whether one suits any branch."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the main features of a private foundation and a discretionary trust"
                - "Ask advisers in the family's civil law countries how each is treated"
                - "Compare control, disclosure and running costs in one table"
                - "Record whether a foundation would suit any branch better"
            - name: Choosing a jurisdiction for a new family trust
              description: |-
                ## Purpose
                When a new trust is needed, the choice of governing law and trustee location lasts for decades. Comparing two or three candidate centres on trust law features that matter to this family, such as the trust period allowed, reserved powers, firewall provisions, court quality and access to good trustees, leads to a choice the family can explain later.

                ## Milestones
                1. The new trust's objectives and beneficiaries written down first.
                2. Two or three candidate jurisdictions chosen with adviser input.
                3. Each scored against the same trust law and practical criteria.
                4. Tax effects in the beneficiaries' countries confirmed for the leading option.
                5. The choice and reasons recorded in the trust file.

                ## Notes
                Choose on trust law and practicality for this family, not on headline tax. The tax that matters is usually where the beneficiaries live.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of two or three jurisdictions against the same criteria, with the chosen one and its reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the objectives and intended beneficiaries for the new trust"
                - "Ask the coordinating adviser for two or three candidate jurisdictions"
                - "Score each candidate against the same set of trust law criteria"
                - "Record the chosen jurisdiction and reasons in the trust file"
            - name: Choosing the trust type for a new settlement
              description: |-
                ## Purpose
                Once the place is settled, the shape still has to be chosen: a discretionary trust, a life interest for a surviving spouse, a trust for a disabled child or one that holds a family company's shares. Setting out what each beneficiary should receive, and when, before the lawyer drafts, makes the deed fit the family rather than a template.

                ## Milestones
                1. Each intended beneficiary listed with what they should receive and when.
                2. The level of trustee discretion the settlor wants agreed.
                3. Two trust types compared by the lawyer against those wishes.
                4. The chosen type and main terms set out in a written instruction to the lawyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written instruction to the lawyer naming the chosen trust type and main terms, based on a list of beneficiary wishes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each intended beneficiary and what they should receive"
                - "Decide how much discretion the trustee should have"
                - "Ask the lawyer to compare two trust types against these wishes"
                - "Send the lawyer a written instruction with the chosen type"
            - name: Simplifying overlapping family trusts
              description: |-
                ## Purpose
                Structures built over three generations often hold several small trusts with overlapping beneficiaries, each paying fees and filing reports in its own country. Reviewing whether some can be merged, ended or appointed into a single trust can cut cost and confusion, provided the tax effects in every country are checked first.

                ## Milestones
                1. Trusts with overlapping beneficiaries or small assets identified from the inventory and cost record.
                2. Options for each, such as merging, appointing out or winding up, listed by the lawyer.
                3. Tax effects of each option confirmed in every affected country.
                4. A family decision recorded on which trusts to simplify and in what order.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on which trusts to simplify, supported by legal options and tax confirmations from each affected country."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Mark trusts that share beneficiaries or hold small assets"
                - "Ask the trust lawyer for the options available for each one"
                - "Get tax confirmation for each option in every affected country"
                - "Agree and record the order in which trusts will be simplified"
            - name: Migrating a trust to a new jurisdiction
              description: |-
                ## Purpose
                Sometimes a trust can be moved by changing its governing law or appointing a trustee elsewhere, perhaps because a centre's reputation has changed or the family has moved. Migration touches the deed, the trustee, the bank accounts, the registers and tax in several countries, so it needs a staged plan rather than a single signature.

                ## Milestones
                1. The power to change governing law or trustee located in the deed and confirmed by the lawyer.
                2. Tax effects of the move confirmed in the old country, the new one and each beneficiary's country.
                3. A new trustee appointed and accounts opened in the new jurisdiction.
                4. Old registrations closed and new ones made.
                5. The structure chart, inventory and deed library updated.

                ## Notes
                Moving a trust can be treated as a disposal or a resettlement in some countries. Do not sign anything until every tax confirmation is in writing.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The trust operating under its new law and trustee, with written tax confirmations and updated registers, chart and deed library."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the lawyer whether the deed allows a change of law or trustee"
                - "Gather written tax views from every country the move affects"
                - "Appoint the new trustee and open accounts in the new jurisdiction"
                - "Close old registrations and update the chart and inventory"
            - name: Decanting assets into a new trust
              description: |-
                ## Purpose
                When an old trust's terms no longer fit, trustees may be able to use a power of appointment to move assets into a new trust with better terms, often called decanting. Planning it carefully, with every beneficiary's position and every country's tax effect understood, can modernise a structure without breaking it.

                ## Milestones
                1. The power that would allow assets to move located in the old deed.
                2. Terms of the new trust drafted and compared with the old.
                3. Each beneficiary's position before and after set out in a table.
                4. Tax effects in each relevant country confirmed in writing.
                5. Assets moved and the old trust's status recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Assets appointed into a new trust with a before and after table of beneficiary positions and written tax confirmations on file."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the lawyer to identify any power of appointment in the old deed"
                - "Compare the old trust terms with the draft new trust in a table"
                - "Set out each beneficiary's position before and after the move"
                - "Confirm tax effects with advisers before any assets move"
            - name: Adding or excluding beneficiaries
              description: |-
                ## Purpose
                Families change: grandchildren arrive, a branch emigrates and would be better outside a trust, or a new spouse needs to be added or kept out. Many deeds contain powers to add or exclude beneficiaries, usually with a protector's consent, and using them well depends on knowing the deed and the tax effects before anyone asks the trustee.

                ## Milestones
                1. The power to add or exclude, and whose consent it needs, confirmed in each deed.
                2. The reason for the change and who it affects written down.
                3. Tax effects of the change in each person's country checked.
                4. The signed deed of addition or exclusion filed and registers updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed deed of addition or exclusion on file, with the reason, consents and tax checks recorded and registers updated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the power to add or exclude beneficiaries in the deed"
                - "Write down who the change affects and why it is wanted"
                - "Check the tax effects in each affected person's country"
                - "File the signed deed and update the relevant registers"
            - name: Underlying companies beneath family trusts
              description: |-
                ## Purpose
                Trustees often hold assets through companies rather than directly, to limit liability, simplify transfers or keep a bank relationship in one place. Each underlying company brings its own directors, filings and possible tax presence, so the family should know why each exists and whether it still serves a purpose.

                ## Milestones
                1. Every company owned by a trust listed with its country, directors and purpose.
                2. Annual filings and registered office arrangements confirmed for each.
                3. Companies with no current purpose identified.
                4. A decision recorded on keeping, merging or closing each one.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of every trust-owned company with its purpose and a recorded decision to keep, merge or close each one."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each company owned by a trust with its country and directors"
                - "Ask the trustee why each company exists and what it holds"
                - "Identify companies that no longer serve a clear purpose"
                - "Record a keep, merge or close decision for each one"
            - name: Evidence of where each trust is run
              description: |-
                ## Purpose
                Many countries decide a trust's tax residence by where its trustees are and where its real decisions are made. If a family member in another country is effectively directing the trust, it may be taxed there. Keeping clear evidence that trustee decisions are made by the trustee, in the right place, protects the structure the family chose.

                ## Milestones
                1. Each trust's intended place of administration recorded.
                2. Trustee meeting minutes showing where and by whom decisions were made collected.
                3. Family requests to trustees routed in writing rather than as instructions.
                4. Any decisions made outside the intended jurisdiction raised with the adviser.

                ## Notes
                Family members can share wishes, but a trustee who simply follows instructions from abroad weakens the trust's position. Keep requests as requests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Trustee minutes on file for each trust showing decisions made in the intended jurisdiction, with family requests made in writing."
                cadence: rolling
              tasks:
                - "Record where each trust is meant to be administered"
                - "Ask trustees to minute where and by whom each decision was made"
                - "Collect trustee meeting minutes for each trust @recurring(quarterly)"
                - "Raise any decision taken outside the intended country with the adviser"
            - name: Funding a new trust with family assets
              description: |-
                ## Purpose
                A trust deed with nothing in it does nothing, and transferring assets into a trust is where errors creep in: shares registered to the wrong name, property transfers that trigger local taxes, bank accounts opened before the trustee has completed its checks. A checklist for each asset makes the transfer clean and documented.

                ## Milestones
                1. Every asset to be transferred listed with its country and current legal owner.
                2. Transfer formalities and any local taxes confirmed for each asset.
                3. Trustee due diligence completed and accounts opened.
                4. Each transfer completed with signed documents filed.
                5. The asset schedule and structure chart updated.

                ## Notes
                Start from the **Operational checklist** template. Transfers of land or shares in some countries need local registration before the trustee becomes the legal owner.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every planned asset transferred to the trustee with signed documents filed, and the asset schedule and chart updated."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List each asset to be transferred with its country and legal owner"
                - "Confirm transfer steps and local taxes for each asset with advisers"
                - "Provide the trustee with everything needed for its due diligence"
                - "File signed transfer documents and update the asset schedule"
            - name: Preparing for a trust's end date
              description: |-
                ## Purpose
                Plenty of trusts carry a fixed end date or perpetuity period, often 80 to 150 years from settlement, and older trusts set up by grandparents may be closer to that date than anyone realises. Knowing when each trust must vest, and what happens then, gives the family years rather than months to plan distributions or restructuring.

                ## Milestones
                1. The end date or perpetuity period for every trust found in its deed.
                2. Trusts ending within 15 years flagged.
                3. What the deed says happens to the assets at the end summarised.
                4. Options for each flagged trust discussed with the lawyer and tax advisers.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "End dates recorded for every trust, with options discussed for any ending within fifteen years."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the trust period clause in every family deed"
                - "Add each end date to the trust inventory"
                - "Summarise what happens to assets at the end of each flagged trust"
                - "Book a meeting with the lawyer about trusts ending within fifteen years"
            - name: Beneficiary age milestones under trust terms
              description: |-
                ## Purpose
                Some trusts give a beneficiary an absolute right to income or capital at 18, 21 or 25, and that birthday can change both the trust's tax position and the young person's life. Knowing these dates in advance lets parents prepare their children and lets trustees plan rather than react.

                ## Milestones
                1. Every age-based entitlement in every deed listed with the beneficiary's date of birth.
                2. The next five years of milestone birthdays shown on one list.
                3. Tax and reporting effects of each milestone confirmed with advisers.
                4. Each young beneficiary prepared with a conversation before their date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A list of age-based entitlements for the next five years, each with confirmed tax effects and a preparation conversation held."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search each deed for ages at which beneficiaries gain rights"
                - "Match each entitlement to the beneficiary's date of birth"
                - "Ask advisers what changes for tax and reporting at each milestone"
                - "Review the coming year's age milestones with trustees @recurring(yearly)"
            - name: What happens to each trust when the settlor dies
              description: |-
                ## Purpose
                Death of the settlor can end reserved powers, trigger a change in tax treatment in their country, move a trust into a new regime or bring a protector into play. For a retired settlor, writing down what happens to each trust on death, and who must be told, spares the family a scramble at the worst moment.

                ## Milestones
                1. The effect of the settlor's death on each trust summarised from the deed and advisers.
                2. Tax changes on death confirmed in the settlor's and beneficiaries' countries.
                3. A list of who must be notified, with contact details, prepared.
                4. The summary stored with the will and shared with the executor.

                ## Notes
                Trusts sit outside the will in most countries, so the executor may know nothing of them. Make sure they do.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written summary of each trust's position on the settlor's death, with a notification list, stored with the will and shared with the executor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the lawyer to summarise what each deed says happens on the settlor's death"
                - "Confirm tax changes on death with each relevant adviser"
                - "Prepare a notification list of trustees, protectors and advisers"
                - "Store the summary with the will and give a copy to the executor"
            - name: Periodic and anniversary tax charges on trusts
              description: |-
                ## Purpose
                Some countries levy charges on trusts at fixed anniversaries, such as the ten-yearly charge on certain trusts in the United Kingdom, or when property leaves the trust. Missing an anniversary can mean penalties and interest. Mapping each trust's charge dates in every relevant country gives time to value assets and file correctly.

                ## Milestones
                1. Countries that impose periodic or exit charges on the family's trusts identified.
                2. The next anniversary date for each affected trust recorded.
                3. Valuations commissioned in time for each anniversary.
                4. Each charge calculated and filed by the adviser before its deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Next anniversary dates recorded for every affected trust, with valuations and filings completed before each deadline."
                cadence: cyclic
              tasks:
                - "Ask each tax adviser whether periodic or exit charges apply"
                - "Record the next anniversary date for each affected trust"
                - "Check upcoming anniversaries and order valuations in time @recurring(yearly)"
                - "Confirm each filing was made and save the receipt"
            - name: Trusts for minor children living in other countries
              description: |-
                ## Purpose
                Parents who settle a trust for young children often do so while living in one country, then raise the children in another and send them to university in a third. Planning a trust for minors with that mobility in mind, and knowing what each move would change, keeps the children's inheritance from becoming a tax problem by accident.

                ## Milestones
                1. Each child's likely countries of residence over the next 15 years written down.
                2. How each of those countries would treat the children's trust confirmed with advisers.
                3. Who decides for each child until adulthood, and how, recorded.
                4. A plan to revisit the trust before each expected move agreed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written note of each child's likely countries and the trust's treatment in each, with review points tied to expected moves."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the countries each child may live in over the next fifteen years"
                - "Ask advisers in each country how the children's trust would be treated"
                - "Record who makes decisions for each child's interest until adulthood"
                - "Tie a trust review to each expected school or university move"
            - name: Retired settlor stepping back from trust powers
              description: |-
                ## Purpose
                Settlors who kept investment powers or the right to replace trustees may want to let go as they age, or may need to before incapacity makes the decision for them. Planning how each reserved power passes to a protector, a successor or the trustee keeps the trust working and avoids a power being stuck with someone who can no longer use it.

                ## Milestones
                1. Every power the settlor holds across all trusts listed.
                2. A successor or release chosen for each power.
                3. Tax and legal effects of releasing each power confirmed.
                4. Signed deeds of release or appointment filed.
                5. The settlor's lasting power of attorney checked for trust-related limits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every settlor power assigned to a successor or released by signed deed, with tax effects confirmed and documents filed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every power the settlor holds in each trust deed"
                - "Choose a successor or a release for each power with the lawyer"
                - "Confirm the tax effect of each release before signing"
                - "File the signed deeds and update the deed library"
            - name: Trust consequences of a beneficiary relocating
              description: |-
                ## Purpose
                When a son moves for work or a daughter marries abroad, the trust follows them into a new tax system whether anyone notices or not. A short trust-side checklist, run before the move, shows what the trust will need to report, whether distributions should be timed differently and which new adviser to bring in.

                ## Milestones
                1. The destination country's treatment of the trust confirmed by a local adviser.
                2. New reporting duties for the beneficiary and the trust listed.
                3. Any distribution timing questions put to the trustee before the move.
                4. The residence map, registers and change log updated after arrival.

                ## Notes
                This covers the trust side only. The wider plan for the person's move belongs with their pre-move advisers.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A completed trust checklist for the relocating beneficiary with local adviser confirmation and updated records."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find a trust adviser in the destination country"
                - "List the reporting the beneficiary and trust will face there"
                - "Raise distribution timing with the trustee before the move date"
                - "Update the residence map and change log after the move"
            - name: Trusts and blended families
              description: |-
                ## Purpose
                Second marriages, stepchildren and children from earlier relationships make trust drafting delicate: a life interest for a new spouse can leave children from a first marriage waiting decades. Writing down how the settlor wants each group treated, and checking whether the existing deeds reflect it, prevents disputes that cross borders and courts.

                ## Milestones
                1. Each person in every branch, including stepchildren and former spouses, listed.
                2. The settlor's intentions for each group written plainly.
                3. Existing deeds checked against those intentions by the lawyer.
                4. Changes, if any, agreed and documented.

                ## Notes
                Whether stepchildren or adopted children count as children under a deed depends on its wording and governing law. Do not assume.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written statement of the settlor's intentions for each family group, checked by the lawyer against every relevant deed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every person in each branch, including stepchildren"
                - "Write how the settlor wants each group treated"
                - "Ask the lawyer whether each deed's definitions match those wishes"
                - "Agree and document any changes the lawyer recommends"
            - name: Protective trusts for a vulnerable beneficiary
              description: |-
                ## Purpose
                Children with a disability, an addiction or difficulty managing money may need a trust that provides for them without handing over capital, and in some countries without affecting public benefits. Getting the structure right needs advice in the country where that person lives, which may not be where the rest of the family's trusts sit.

                ## Milestones
                1. The beneficiary's needs and likely long-term country of residence described.
                2. Local rules on trusts for vulnerable people and on benefit entitlement confirmed.
                3. A trust type and trustee approach agreed with the local lawyer.
                4. A care and spending note written for the trustee.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A local lawyer's recommendation on trust type and trustee approach, with a care note written for the trustee."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Describe the beneficiary's needs and where they will likely live"
                - "Find a lawyer in that country who handles trusts for vulnerable people"
                - "Confirm how a trust interacts with any local benefits"
                - "Write a care and spending note to guide the trustee"
            - name: Responding to a court request about a trust
              description: |-
                ## Purpose
                Divorce, probate or creditor cases in one country can produce demands for disclosure about a trust governed in another, and the family member involved may feel pressure to answer immediately. A prepared approach, with the trustee and lawyers in both countries coordinated, means the response is accurate and nothing is volunteered that should not be.

                ## Milestones
                1. The trust lawyer and the litigation lawyer in the court's country introduced.
                2. An agreed protocol for who responds to requests about each trust.
                3. Family members told not to answer trust questions without advice.
                4. Each request and response logged.

                ## Notes
                Never move or alter trust assets once proceedings are expected; it can look like concealment and weaken the trust.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written response protocol agreed by the trust and litigation lawyers, with family members briefed and a request log in place."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the trust lawyer to recommend a litigation contact in each key country"
                - "Agree in writing who answers requests about each trust"
                - "Brief adult beneficiaries to refer every trust question to the lawyer"
                - "Start a log for requests received and responses given"
            - name: US connected family members and foreign trusts
              description: |-
                ## Purpose
                Having a US citizen or green card holder anywhere in the family tree brings some of the strictest rules on foreign trusts, with separate filings for settlors and beneficiaries and heavy penalties for gaps. Identifying every US person, how each trust is classed for US purposes and which annual forms apply, such as Form 3520, avoids an expensive surprise.

                ## Milestones
                1. Every family member with US citizenship, green card or long US residence identified.
                2. Each trust's US classification confirmed by a US trust tax adviser.
                3. Annual US filings needed for each trust and person listed.
                4. Filings for the past three years checked for gaps.

                ## Notes
                A child born abroad to a US citizen parent may be a US citizen without knowing it. Check every branch.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of US persons and each trust's US classification, with the annual filings for each confirmed by a US adviser."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask every branch whether anyone holds US citizenship or a green card"
                - "Engage a US adviser to confirm each trust's US classification"
                - "List the annual US filings needed for each trust and person"
                - "Confirm US trust filings are complete with the US adviser @recurring(yearly)"
            - name: Forced heirship exposure review
              description: |-
                ## Purpose
                In many civil law countries and under some religious law, children have fixed shares of an estate that cannot be overridden, and an heir may try to claw back assets put into a trust. Reviewing which family members could be subject to these rules, and where, shows whether firewall protection is relevant and what disclosure to heirs might be wise.

                ## Milestones
                1. Each settlor's nationality, domicile and asset locations reviewed for forced heirship rules.
                2. Heirs who could bring a claim, and in which courts, identified with advisers.
                3. Protection available under each trust's governing law confirmed.
                4. The family's approach to the risk recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written forced heirship review for each settlor, with potential claimants, available protection and the family's approach recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record each settlor's nationality, domicile and asset countries"
                - "Ask advisers which forced heirship rules could apply to each"
                - "Confirm what each trust's governing law offers against claims"
                - "Write down the family's approach to any risk found"
            - name: Stress test of the structure against challenge
              description: |-
                ## Purpose
                Trusts are attacked in a few familiar ways: as a sham because the settlor kept control, as the settlor's alter ego, as a transfer to defeat creditors or as invalid under the law of a beneficiary's country. Testing each family trust against these, with the lawyer playing the claimant, finds weak points while there is still time to fix them.

                ## Milestones
                1. Each trust reviewed against the main grounds of challenge.
                2. Evidence of independent trustee decision making gathered.
                3. Weak points rated by likelihood and impact.
                4. Remedies agreed for every high-rated weakness.

                ## Notes
                Start from the **Risk register** template. Repeat the test after any major change in the settlor's involvement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register rating every trust against the main grounds of challenge, with remedies agreed for each high-rated weakness."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the lawyer to list the main grounds on which trusts are challenged"
                - "Rate each family trust against each ground in a risk register"
                - "Gather trustee minutes showing independent decisions"
                - "Agree remedies for every weakness rated high"
            - name: Winding up a trust in another country
              description: |-
                ## Purpose
                Ending a trust is more than paying out the assets. Final accounts, tax clearances in more than one country, register removals, closing bank accounts and releasing the trustee all have to happen in the right order. A planned wind-up avoids a trust that is empty but still filing, or a beneficiary taxed twice.

                ## Milestones
                1. The power to end the trust and the beneficiaries entitled confirmed.
                2. Tax effects of final distributions confirmed in each recipient's country.
                3. Final accounts and any tax clearances obtained.
                4. Registers, bank accounts and underlying companies closed.
                5. A trustee release signed and the trust marked closed in the inventory.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The trust closed with final accounts, tax clearances, register removals and a signed trustee release on file."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm with the lawyer who is entitled when the trust ends"
                - "Get tax views on final distributions in each recipient's country"
                - "Obtain final accounts and any tax clearances from the trustee"
                - "Close registers and accounts and file the signed trustee release"
            - name: Designing a multi-generation dynasty trust
              description: |-
                ## Purpose
                Some families want a trust to hold a business or a core portfolio for several generations, which needs a jurisdiction with a long or unlimited trust period, governance that can adapt and a way for later generations to have a voice. Designing it well means thinking about great-grandchildren who are not yet born and the countries they might live in.

                ## Milestones
                1. The assets and purpose of the dynasty trust agreed by the senior generation.
                2. Jurisdictions with suitable trust periods shortlisted by advisers.
                3. Mechanisms for amending terms, replacing protectors and involving each generation designed.
                4. Tax treatment for the likely countries of future beneficiaries reviewed.
                5. A term sheet agreed for the lawyer to draft from.

                ## Notes
                Longer is not always better. A trust that cannot adapt to new laws or family shape becomes a burden for the grandchildren.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed term sheet for a dynasty trust covering assets, jurisdiction, amendment powers and generational involvement."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Agree with the senior generation what the dynasty trust should hold"
                - "Ask advisers for jurisdictions with long or unlimited trust periods"
                - "Design how terms can be amended and protectors replaced over time"
                - "Agree a term sheet for the lawyer to draft from"
---

# Trust Structures Across Jurisdictions

This area is for the family whose assets already sit in, or are about to move into, trusts in more than one country: parents who settled a trust in one centre for children now living in two others, or a retired couple whose grandparents left a structure nobody fully understands. It starts with foundations (an inventory, a structure chart, a deed library, a residence map and the adviser team in each country), then the operating routines that keep the structure filed, reported and current, the knowledge behind trust types, recognition and tax treatment, the decisions on new settlements, migration and simplification, dated events such as funding a trust or a settlor's death, situations for minor children, blended families and relocating beneficiaries, and finally specialist work on challenge risk, forced heirship and dynasty planning.

What repeats is a monthly filing calendar check and document log, quarterly updates to the structure chart, distribution records, beneficiary changes, asset schedules and costs, and a yearly cycle of trust accounts, register confirmations, residence refreshes and the full cross-border review. The Vendor, Operational checklist, Meeting notes, Risk register and Reading queue templates pair with the adviser team, the funding of a new trust, the annual review, the challenge stress test and the reading list. Nothing here is tax or legal advice: every structural change is agreed with qualified advisers in each country it touches. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
