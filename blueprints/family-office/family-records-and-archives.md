---
id: family-office.family-records-and-archives
name: Family Records and Archives
description: "The family's papers found, mapped and kept safe: key documents and originals, structure charts, deeds, access rules, a calendar of checks and a family history archive worth handing down."
category: personal
version: 1.0.0
tags: [family-office, family-records-and-archives, parent, retiree, key-documents, structure-chart, property-deeds, family-history]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - vendor
    - meeting-notes
    - risk-register
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Records and Archives
          description: "Keeping the family's records safe: key documents, structure charts, property deeds, a document vault, family history archives and access rules."
          projects:
            - name: Inventory of the family's key documents
              description: |-
                ## Purpose
                Most families with real assets cannot say, in one sitting, where every will, trust deed, share certificate and title deed actually is. A single inventory, listing each key document, who it belongs to, whether the copy is original or certified, and where it sits, is the base every other records project builds on.

                ## Milestones
                1. A list of key document types agreed: wills, trust deeds, powers of attorney, company documents, deeds, identity papers, insurance and marriage agreements.
                2. Every known document entered with owner, type, date, original or copy, and location.
                3. Gaps marked where a document is believed to exist but cannot yet be found.
                4. The inventory saved in the family's secure vault with a named owner.

                ## Notes
                Record the location of a document, never its contents in full, in the inventory itself. The inventory is a map, not a second copy of everything.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory listing every known key document with its owner, type, date and location, with unresolved gaps flagged, is saved in the secure vault."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the list of key document types the inventory will cover"
                - "Walk through the home safe and office files and log what is there"
                - "Ask the lawyer, accountant and trustees for lists of what they hold"
                - "Mark every document that should exist but has not been located"
            - name: Locating original wills, trust deeds and powers of attorney
              description: |-
                ## Purpose
                Originals carry legal weight that a photocopy or scan often does not, and a missing original will can turn a straightforward estate into months of court applications. Confirming exactly where each original sits, and who can retrieve it, removes the most expensive kind of records surprise.

                ## Milestones
                1. Every current will, codicil, trust deed and power of attorney for each family member listed.
                2. The physical location of each original confirmed in writing by its holder.
                3. Superseded versions identified and their status recorded, on your lawyer's advice.
                4. Retrieval instructions noted for each original: who to call and what proof they need.

                ## Notes
                Do not destroy an old will or deed on your own judgement; ask the lawyer who drew it up what should happen to superseded originals.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each family member's current will, trust deeds and powers of attorney have a confirmed original location and written retrieval instructions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each adult family member and the testamentary documents they should have"
                - "Email each law firm asking for written confirmation of originals they hold"
                - "Note what proof of authority each holder needs before releasing an original"
                - "Ask the family lawyer how superseded versions should be kept or marked"
            - name: Family structure chart of entities and trusts
              description: |-
                ## Purpose
                Advisers, banks and the next generation all ask the same question: what owns what. A one-page chart showing every trust, foundation, company and partnership, with ownership percentages, jurisdictions, trustees and directors, answers it in seconds and exposes entities nobody remembers setting up.

                ## Milestones
                1. Every entity in the family's structures listed with jurisdiction, registration number and date formed.
                2. Ownership links and percentages drawn, with trusts, settlors and beneficiary classes shown.
                3. Trustees, protectors and directors named against each entity.
                4. The chart checked line by line with the family's lawyer or trust administrator.
                5. A dated version saved in the vault, with the previous version kept for history.

                ## Notes
                Show beneficiary classes rather than naming every individual, and keep the full chart behind the strictest access level.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated structure chart covering every entity, with ownership, jurisdiction and officeholders, has been reviewed by the family's lawyer and saved in the vault."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather the latest registers of members and trust schedules for each entity"
                - "Draft the chart in a diagram tool, one box per entity"
                - "Ask the agent to draft a plain-language key explaining each box type"
                - "Book a review of the draft chart with the trust administrator"
            - name: Property deeds and title register for every home
              description: |-
                ## Purpose
                Title deeds for homes across two or three countries tend to live with whichever lawyer handled the purchase decades ago. A register showing each property, its registered owner, title number, mortgage or charge, and where the deed sits makes a sale, a refinance or an estate far simpler.

                ## Milestones
                1. Every property the family or its structures owns listed, including land and seasonal homes.
                2. Registered owner, title or volume and folio number, and any charge recorded for each.
                3. A recent official title search obtained for each registered property.
                4. Deed locations confirmed and any title discrepancy passed to the property lawyer.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A property register lists every family property with registered owner, title reference, charges and deed location, backed by a title search dated within the last year."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every property, including land and homes owned through companies"
                - "Order an official title search for each registered property"
                - "Record the registered owner, title reference and any charge in the register"
                - "Send any mismatch between the search and the family's records to the property lawyer"
                - "Order fresh title searches to check nothing has changed @recurring(yearly)"
            - name: Records custodian named for the family
              description: |-
                ## Purpose
                Records decay fastest when everyone assumes someone else is looking after them. Naming one custodian, with a deputy, and writing down what they are responsible for, gives advisers and family members a single person to send documents to and ask documents from.

                ## Milestones
                1. A custodian and a deputy agreed by the family, inside or outside the office.
                2. A one-page role note covering intake, filing, retrieval, access and the annual audit.
                3. Advisers and banks told where to send original documents from now on.
                4. The custodian's authority to request documents confirmed with each adviser.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A records custodian and deputy are named in a written role note, and every regular adviser has been told to send originals to them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree with the family principal who will be custodian and who is deputy"
                - "Write a one-page note of the custodian's duties and limits"
                - "Send each adviser the custodian's details and the new address for originals"
                - "Add the custodian to the family's emergency contact list"
            - name: Records classification and sensitivity levels
              description: |-
                ## Purpose
                Not every record needs the same protection: a household utility bill and a letter of wishes should not sit behind the same lock. Three or four sensitivity levels, each with a clear example, let the custodian decide quickly where a new document goes and who may see it.

                ## Milestones
                1. Three or four sensitivity levels defined, from routine household records to restricted trust papers.
                2. Two or three examples written under each level.
                3. Every category in the key documents inventory assigned a level.
                4. The classification shared with office staff who handle family paperwork.

                ## Notes
                A sensible default is four levels: routine, family, confidential and restricted. Restricted covers wills, letters of wishes, the structure chart and anything about security.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written classification with defined sensitivity levels and examples has been applied to every category in the key documents inventory."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft three or four sensitivity levels with a one-line definition each"
                - "Write examples of real family documents under each level"
                - "Tag each category in the inventory with its sensitivity level"
                - "Walk office staff through the levels in a short session"
            - name: Access rules for who may see which records
              description: |-
                ## Purpose
                Access questions become painful when they arise in the middle of a family disagreement or a bereavement. Written rules, approved in calm times, setting out which family members, spouses, staff and advisers may see each level of record, protect privacy and relationships at once.

                ## Milestones
                1. Each group listed: principals, adult children, spouses, minors, office staff, trustees and advisers.
                2. A grid showing which sensitivity levels each group may view, request or never see.
                3. A rule for how a family member asks for a record outside their level.
                4. The rules approved by the family principal or council and dated.

                ## Notes
                Trustees may have legal duties to disclose some documents to beneficiaries regardless of family rules. Check the rules against those duties with the trust lawyer.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An access grid covering every group and sensitivity level, with a request route for exceptions, has been approved and dated by the family."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every group of people who might ask to see family records"
                - "Fill in a grid of who may see each sensitivity level"
                - "Write the route for asking to see a record above your level"
                - "Ask the trust lawyer whether the grid conflicts with any trustee duties"
                - "Put the access rules on the next family meeting agenda for approval"
            - name: Emergency document pack for the first 72 hours
              description: |-
                ## Purpose
                When a principal is suddenly hospitalised, detained abroad or dies, the people left behind need a small set of documents within hours, not the whole archive. A sealed pack holding medical directives, powers of attorney copies, key contacts and the location of originals gives them what they need to act straight away.

                ## Milestones
                1. The contents agreed: health directives, power of attorney copies, adviser contacts, bank contacts and the inventory summary.
                2. A pack prepared for each principal, with copies only, never originals.
                3. Two trusted people told where the pack is and how to open it.
                4. The pack dated and a review date written on the outside.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each principal has a dated emergency pack of copies and contacts, and two named people know where it is kept."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the list of what goes into each principal's emergency pack"
                - "Make certified copies of the health directives and powers of attorney"
                - "Tell two trusted people where each pack is kept"
                - "Check each pack against current documents and contacts @recurring(yearly)"
            - name: Family identity documents register
              description: |-
                ## Purpose
                Passports, citizenship certificates, residence cards, birth and marriage certificates are requested for every bank onboarding, property purchase and trust distribution. Knowing who holds which nationality, which documents exist for each person and where they live stops last-minute searches before travel or a signing.

                ## Milestones
                1. Every family member listed with nationalities, passport numbers and residence status.
                2. Birth, marriage, divorce, adoption and naturalisation certificates logged per person.
                3. Missing certificates ordered from the relevant civil registry.
                4. The register stored at the confidential level with copies of photo pages.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An identity register covers every family member's passports, residence documents and civil certificates, with any missing certificate ordered."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect passport photo pages from every family member"
                - "Log each person's civil certificates and where the originals are"
                - "Order any missing birth or marriage certificate from the civil registry"
                - "Store the register and copies at the confidential sensitivity level"
            - name: Retention schedule for family and office records
              description: |-
                ## Purpose
                Keeping everything forever makes the archive unsearchable, and shredding too early can leave the family without proof in a tax enquiry or lawsuit. A retention schedule, agreed with the accountant and lawyer, sets how long each type of record is kept and what happens at the end.

                ## Milestones
                1. Record types listed: tax returns, bank statements, contracts, staff files, property files, trust accounts.
                2. A retention period for each type agreed with the accountant and lawyer, by jurisdiction.
                3. Permanent records named: deeds, trust instruments, constitutions and family history.
                4. The schedule saved where the custodian and office staff can find it.

                ## Notes
                Periods differ between countries and between personal, company and trust records. Let the professionals set the numbers; the schedule just records them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written retention schedule lists each record type with a period confirmed by the accountant or lawyer, and names the permanent records."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every type of record the family and office keep"
                - "Send the list to the accountant and lawyer asking for retention periods"
                - "Mark the records the family will keep permanently"
                - "Check the schedule for any changed legal periods @recurring(yearly)"
            - name: Quarterly structure chart refresh
              description: |-
                ## Purpose
                Structures change quietly: a company is struck off, a trustee retires, shares move between holding companies. Refreshing the chart every quarter against what the administrators report keeps it accurate enough to hand to a bank or a new adviser without a disclaimer.

                ## Milestones
                1. Administrators and company secretaries asked each quarter for changes in officeholders and ownership.
                2. Every change reflected on a new dated version of the chart.
                3. Superseded versions kept in a chart history folder.
                4. A short change note filed with each new version.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The structure chart carries a date within the last three months and a change note for every version issued in the past year."
                cadence: cyclic
              tasks:
                - "Ask each administrator for changes to officeholders and ownership @recurring(quarterly)"
                - "Update the chart and write a one-paragraph change note"
                - "Move the old version into the chart history folder"
                - "Send the new chart to the advisers on the restricted access list"
            - name: Annual key documents audit
              description: |-
                ## Purpose
                Once a year the inventory should be tested against reality: are the originals where the list says, are the wills current, have new documents arrived that nobody logged. A scheduled audit, run as a checklist, catches drift while it is still a filing job rather than a crisis.

                ## Milestones
                1. A sample of originals physically sighted in each location.
                2. Every inventory entry checked for currency and location.
                3. New documents from the year logged and old entries updated.
                4. A short audit note filed with findings and fixes.

                ## Notes
                Start from the **Operational checklist** template. Rotate which locations are sighted in person, so every safe and strongroom is visited at least every three years.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An audit note dated within the last twelve months records originals sighted, entries corrected and any open gaps."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Run the key documents audit checklist against the inventory @recurring(yearly)"
                - "Visit at least one strongroom or safe and sight the originals listed"
                - "Log new documents received during the year"
                - "File the audit note with any open gaps assigned to an owner"
            - name: Monthly scanning and filing of incoming originals
              description: |-
                ## Purpose
                Paper arrives every week from banks, registries, schools and lawyers, and a pile left for a quarter becomes a box nobody opens. A fixed monthly session to scan, name, file and send originals to their safe home keeps the archive current with an hour or two of effort.

                ## Milestones
                1. One inbox tray or envelope used for every incoming original.
                2. Each document scanned, named and filed in the vault within the month.
                3. Originals moved to the safe, strongroom or adviser that should hold them.
                4. The inventory updated for any key document received.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No incoming original sits unfiled for more than five weeks, and every key document received appears in the inventory."
                cadence: rolling
              tasks:
                - "Empty the incoming originals tray into the scanning box @recurring(weekly:fri)"
                - "Scan, name and file the month's documents in the vault @recurring(monthly:9)"
                - "Send originals that belong elsewhere to their holder with a covering note"
                - "Add any key document received to the inventory"
            - name: Passport and visa expiry watch list
              description: |-
                ## Purpose
                An expired passport can stall a property signing, a trust distribution or a family trip, and many countries refuse entry with under six months' validity. A watch list of every family member's passports, visas and residence permits, checked monthly, gives months of notice instead of days.

                ## Milestones
                1. Every passport, visa and residence permit listed with its expiry date.
                2. A renewal window set for each, allowing for the issuing country's processing time.
                3. Upcoming renewals assigned to the family member or the office.
                4. Renewed documents logged in the identity register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every family travel and residence document is on the watch list, and none expires without a renewal started inside its window."
                cadence: rolling
              tasks:
                - "Enter every passport, visa and permit with its expiry date"
                - "Check the watch list for anything entering its renewal window @recurring(monthly:3)"
                - "Remind the family member and book the renewal appointment"
                - "Log each renewed document in the identity register"
            - name: Records access request log
              description: |-
                ## Purpose
                Every request to see a restricted record says something: a beneficiary preparing for a dispute, an adviser doing due diligence, a spouse asking about a trust. Logging each request, who approved it and what was shared protects the custodian and gives the family a record if questions come later.

                ## Milestones
                1. A log with date, requester, record, reason, approver and what was released.
                2. Every request above routine level entered before the record is shared.
                3. A quarterly look at the log for patterns or unusual requests.
                4. Anything unusual raised with the family principal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every release of a confidential or restricted record in the past year appears in the log with its approver and reason."
                cadence: rolling
              tasks:
                - "Create the access request log with the agreed columns"
                - "Enter the requests already handled this year from email"
                - "Review the log for patterns and unusual requests @recurring(quarterly)"
                - "Raise any unusual request with the family principal"
            - name: Secure destruction of records past retention
              description: |-
                ## Purpose
                Shredding by the box in an office corridor is how account numbers end up in a recycling bin. A yearly destruction round, following the retention schedule, using a certified shredding service and recording what went, shrinks the archive safely and proves it was done properly.

                ## Milestones
                1. Records past their retention period identified against the schedule.
                2. A destruction list approved by the custodian before anything goes.
                3. Destruction carried out by a certified service with a certificate issued.
                4. The list and certificate filed permanently.

                ## Notes
                Never destroy anything subject to a legal hold, a tax enquiry or a pending claim, even if it is past retention.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A destruction list and certificate from a certified service are on file for each year's round, with no record under legal hold destroyed."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Pull records past retention into a destruction list @recurring(yearly)"
                - "Check the list against any legal hold before approving it"
                - "Book a certified shredding service to collect or shred on site"
                - "File the destruction certificate with the approved list"
            - name: Off-site certified copy set
              description: |-
                ## Purpose
                A fire, flood or burglary at the one place the originals are kept can wipe out proof of ownership for a generation. A second set of certified copies of the most important documents, held in a different town or country, means the family can prove who owns what while replacements are sought.

                ## Milestones
                1. The documents worth a certified copy chosen: deeds, trust instruments, wills, company constitutions.
                2. Certified copies made by a notary or lawyer.
                3. The set held at a second location at least one region away from the originals.
                4. The copy set checked against the inventory each year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Certified copies of every permanent record sit at a second location away from the originals and were checked within the last year."
                cadence: rolling
              tasks:
                - "Choose which permanent documents need a certified copy off site"
                - "Book a notary to certify copies in one sitting"
                - "Agree a second location, such as a lawyer abroad or a bank box elsewhere"
                - "Compare the off-site set with the inventory and fill gaps @recurring(yearly)"
            - name: Statutory registers and minute books kept current
              description: |-
                ## Purpose
                Companies and foundations are expected to keep registers of members and directors, minute books and resolutions, and gaps surface badly when a bank or buyer asks to see them. Keeping each entity's books complete and in one known place makes every future transaction quicker.

                ## Milestones
                1. Each entity's register of members, directors and charges located.
                2. Minute books checked for missing meetings or unsigned minutes.
                3. Gaps passed to the company secretary or registered agent to fix.
                4. The location of every entity's books recorded on the structure chart.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every entity's statutory registers and minute books are located, complete for the last year, and their location is shown on the structure chart."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask each registered agent where each entity's books are held"
                - "Check the minute books for missing or unsigned minutes"
                - "Send gaps to the company secretary with a deadline to fix"
                - "Confirm every entity's registers are updated for the year @recurring(yearly)"
            - name: Records updates after every life event
              description: |-
                ## Purpose
                Births, marriages, divorces, deaths and moves abroad each change who holds what, whose name is on which account and which documents must be refreshed. A standing list of what to update after each kind of event turns a family milestone into a predictable set of records tasks.

                ## Milestones
                1. A checklist written for each event type: birth, marriage, divorce, death, move, incapacity.
                2. Each checklist naming the records, registers and advisers affected.
                3. Recent life events checked against the lists for anything missed.
                4. A quarterly prompt in place to catch new events.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A checklist exists for each major life event, and every event in the past year has a completed checklist on file."
                cadence: rolling
              tasks:
                - "Write a short checklist for each type of life event"
                - "Run the checklists for any event in the last twelve months"
                - "Ask the family who has had a life event since the last check @recurring(quarterly)"
                - "File each completed checklist with the person's identity records"
            - name: Trust document chain for each settlement
              description: |-
                ## Purpose
                A trust is only as clear as its paperwork: the original deed, every deed of variation, appointments and retirements of trustees, protector changes and letters of wishes. Holding a complete, ordered chain for each trust lets the family and the trustees show exactly what the current terms are.

                ## Milestones
                1. Each trust's deed and every later instrument listed in date order.
                2. Missing instruments requested from the trustee or the lawyer who drafted them.
                3. Current letters of wishes located and their dates recorded.
                4. A one-page summary of the current trustees and protector for each trust.

                ## Notes
                Letters of wishes are usually addressed to the trustees and kept confidential; record where they are and their date, not their contents.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every trust has a dated, complete chain of instruments from deed to current trustees, with any gap requested from the trustee in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask each trustee for a schedule of every instrument since the deed"
                - "Compare the schedule with what the family already holds"
                - "Request copies of missing deeds of variation or appointments"
                - "Ask each trustee to confirm the chain is still complete @recurring(yearly)"
            - name: Originals, certified copies and apostilles explained
              description: |-
                ## Purpose
                Banks, registries and foreign courts each ask for something slightly different: an original, a copy certified by a lawyer, a notarised copy or one with an apostille. Learning what each means, and which countries accept which, saves weeks of rejected submissions when documents cross borders.

                ## Milestones
                1. The difference between an original, a certified copy, a notarised copy and an apostille written up in plain words.
                2. The countries where the family holds assets checked for apostille convention membership.
                3. Each regular bank and registry's requirements noted.
                4. A one-page guide filed for the office and family.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide covering certification types, apostille rules for the family's countries and each regular institution's requirements is filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the official guidance on apostilles from your foreign ministry"
                - "Check which of the family's countries accept apostilles"
                - "Note what each regular bank and registry asks for"
                - "Write the one-page guide and share it with the custodian"
            - name: Archival care of paper, photographs and film
              description: |-
                ## Purpose
                Heat, humidity, sunlight, rubber bands and plastic sleeves destroy old letters and photographs faster than age, and the Caribbean climate makes it worse. Learning basic preservation, and changing how the family's history material is stored, can add decades to its life for a modest cost.

                ## Milestones
                1. The main risks to paper, prints, negatives and film understood.
                2. Acid-free boxes and folders bought for the most fragile items.
                3. Storage moved away from outside walls, attics, basements and air-conditioning drips.
                4. A humidity reading taken monthly in the archive space.

                ## Notes
                Do not try to repair torn or mouldy items yourself. A conservator can advise on anything valuable or fragile.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The family history material is in acid-free storage in a space with a monthly humidity record kept for at least six months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a national archive's guide to caring for family papers"
                - "Remove rubber bands, paper clips and plastic sleeves from old letters"
                - "Buy acid-free boxes and a simple humidity meter"
                - "Note the archive room humidity reading @recurring(monthly:28)"
            - name: Privacy law basics for family archives
              description: |-
                ## Purpose
                Family archives hold other people's personal data: staff files, medical letters, children's school reports and correspondence with living relatives. Understanding the basics of data protection where the office operates helps decide what to keep, who may see it and what to do when someone asks for their own records.

                ## Milestones
                1. The main data protection law in each relevant jurisdiction identified.
                2. The categories of personal data the archive holds listed.
                3. Questions about staff files and medical records answered by a privacy lawyer.
                4. A short note of what the family will do if someone asks to see their own data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the data protection laws that apply, the personal data categories held and the agreed response to a subject access request."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the data protection regulator's guidance for each country the office uses"
                - "List the kinds of personal data the archive holds about non-family people"
                - "Take staff and medical file questions to a privacy lawyer"
                - "Write the response steps for a request to see personal data"
            - name: Reading a title deed and land registry extract
              description: |-
                ## Purpose
                Deeds from different decades and countries look nothing alike, and old unregistered conveyances in parts of the Caribbean can run to dozens of pages. Learning to find the parties, the property description, the charges and the registration details lets a family member check a register without paying for every question.

                ## Milestones
                1. One deed from each country the family owns property in read with a lawyer or guide.
                2. The parts of a title extract understood: owner, description, charges and notices.
                3. The difference between registered and unregistered title noted where it applies.
                4. Questions about any deed passed to the property lawyer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A family member can explain the owner, description and charges on one deed from each country, with open questions sent to the lawyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick one deed from each country where the family owns property"
                - "Read the land registry's public guide to title extracts"
                - "Mark the parties, description and charges on each deed"
                - "Send the remaining questions to the property lawyer"
            - name: Digital preservation and file format choices
              description: |-
                ## Purpose
                Digital files are fragile in a different way: formats go out of use, storage fails and nobody can open a file from software that no longer exists. Learning which formats last, and checking old files each year, keeps the digital archive readable for the grandchildren.

                ## Milestones
                1. Preservation formats chosen for documents, photographs, audio and video.
                2. Files in obsolete formats found and converted, keeping the originals.
                3. Checksums or a similar integrity check set up for permanent files.
                4. A yearly sample check of old files in place.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Permanent digital records are held in agreed preservation formats, and a sample check of old files has been recorded within the last year."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a national archive's guidance on long-term file formats"
                - "List the formats in the archive that are already hard to open"
                - "Convert at-risk files to preservation formats, keeping the originals"
                - "Open a sample of old files to check they still render @recurring(yearly)"
            - name: Oral history interviews with family elders
              description: |-
                ## Purpose
                Grandparents carry the stories behind the business, the move from one island to another and the names in old photographs, and those stories go when they do. Recording structured interviews, with consent and a simple question list, gives the family an archive no document can replace.

                ## Milestones
                1. A question list drafted around childhood, migration, work, the family business and values.
                2. Consent from each elder recorded, including who may hear the recordings.
                3. Interviews recorded in good audio and saved in a preservation format.
                4. Each recording given a written summary and a list of names mentioned.

                ## Notes
                Short sessions of under an hour work better than one long one. Bring photographs to prompt memories.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "At least three recorded interviews with elders are archived with consent, a written summary and a list of names mentioned."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draft a question list with a younger family member"
                - "Ask each elder for consent and agree who may hear the recordings"
                - "Record one interview session with an elder @recurring(monthly:17)"
                - "Ask the agent to draft a summary and name list from each transcript"
            - name: Walking a spouse through the family's records
              description: |-
                ## Purpose
                Spouses often discover the family's records for the first time after a death, at the worst possible moment. A calm walkthrough of the inventory, the structure chart summary and the emergency pack, at the access level the family has agreed, means they know where to look and whom to call.

                ## Milestones
                1. The level of detail agreed with the principal before the session.
                2. A one-hour walkthrough held covering where things are and who to call.
                3. The spouse's questions written down and answered.
                4. The spouse's own documents added to the inventory if missing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "The spouse has had a walkthrough of the records at the agreed access level and can name where the emergency pack and inventory are."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree with the principal what the walkthrough will cover"
                - "Book an hour with the spouse at home or in the office"
                - "Show where the emergency pack, inventory and key contacts are"
                - "Write up and answer the spouse's questions within a week"
            - name: Choosing a fire-rated safe or deed storage
              description: |-
                ## Purpose
                Choosing between a home safe, a bank safe deposit box and a lawyer's strongroom depends on access needs, fire and water ratings and the risk of a box being sealed on death. Comparing options against the same criteria gives originals a home that is both safe and reachable.

                ## Milestones
                1. Criteria agreed: fire rating, water resistance, access at night and on death, cost and insurance.
                2. Three options compared: home safe, bank box and professional strongroom.
                3. A decision recorded with reasons and who holds keys or codes.
                4. Originals moved into the chosen storage and the inventory updated.

                ## Notes
                Start from the **Purchase decision** template. Ask the bank what happens to a safe deposit box when the holder dies; in some places it is sealed until probate.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on where originals are stored, scored against agreed criteria, with key and code holders named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the criteria for storing originals"
                - "Ask the bank what happens to a safe deposit box on the holder's death"
                - "Compare a home safe, bank box and strongroom on the criteria"
                - "Record the choice and who holds the keys and codes"
            - name: Paper versus digital-only decision by record type
              description: |-
                ## Purpose
                Scanning everything and shredding the paper sounds tidy, but some documents must stay as originals and some institutions still demand wet-ink signatures. Deciding record type by record type what stays on paper, what becomes digital only and what keeps both prevents both clutter and costly mistakes.

                ## Milestones
                1. Every record type placed in one of three groups: original required, digital only, or both.
                2. The lawyer and accountant asked to confirm the original-required group.
                3. A rule written for scanning quality and naming before paper is discarded.
                4. The decision added to the retention schedule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each record type is assigned to paper, digital or both, with the original-required list confirmed by the lawyer and accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort every record type into paper, digital or both"
                - "Send the original-required list to the lawyer and accountant"
                - "Write the scanning quality rule for paper that will be discarded"
                - "Add the decisions to the retention schedule"
            - name: Hiring a professional archivist or records manager
              description: |-
                ## Purpose
                Large archives, with decades of business papers, letters and photographs, are beyond what an office manager can sort in spare hours. A professional archivist on a defined project can survey, catalogue and rehouse the collection and leave a system the office can keep up.

                ## Milestones
                1. A scope written: survey, catalogue, rehousing, digitising or ongoing support.
                2. Two or three archivists or records firms asked for proposals.
                3. References checked and a confidentiality agreement signed.
                4. A contract agreed with deliverables and a finish date.

                ## Notes
                Start from the **Vendor** template. Professional archivist associations in many countries list members who take private commissions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An archivist is engaged under a signed contract and confidentiality agreement with a written scope and finish date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a two-page scope for the archive work"
                - "Find candidates through a professional archivist association"
                - "Check two references for each shortlisted archivist"
                - "Sign the confidentiality agreement before any material is shown"
            - name: Agreeing who holds each original
              description: |-
                ## Purpose
                Originals scattered between three law firms, two banks and a home safe are hard to reach and easy to lose when a firm merges or closes. Deciding deliberately who holds each class of original, and getting written receipts, puts every document in a known and accountable place.

                ## Milestones
                1. Each class of original assigned a holder: lawyer, bank, trustee, office or home.
                2. Written receipts obtained from every outside holder.
                3. Originals moved where the decision requires it.
                4. A yearly confirmation from each holder of what they still hold.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every class of original has a named holder, each outside holder has issued a written receipt, and confirmations are on file for the past year."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Decide which holder keeps each class of original"
                - "Arrange transfers where originals are in the wrong place"
                - "Get a signed receipt from each outside holder"
                - "Ask each holder for a written list of originals held @recurring(yearly)"
            - name: Digitising the family photograph and film collection
              description: |-
                ## Purpose
                Shoeboxes of prints, slides, home movies and cassette tapes are often the family's most loved records and its most fragile. Digitising them in a planned order, with names and dates captured while elders can still identify faces, makes the collection shareable across branches without risking the originals.

                ## Milestones
                1. The collection counted by format: prints, slides, negatives, film, video and audio.
                2. A decision made on what to scan at home and what to send to a specialist lab.
                3. Scans named and tagged with people, place and approximate date.
                4. Originals returned to archival storage after scanning.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The photograph and film collection is counted by format, and at least the first set of boxes is digitised and tagged with names, places and dates."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Count the collection by format and note its condition"
                - "Get quotes from a lab for film, slides and video"
                - "Scan one box of photographs and tag the faces @recurring(monthly:24)"
                - "Sit with an elder to name people in unlabelled photographs"
            - name: Recovering records held by former advisers
              description: |-
                ## Purpose
                Over a few decades a family uses many lawyers, accountants and bankers, and each keeps files the family may need again. Writing to former advisers to recover or confirm what they hold, before a firm closes or destroys old files, rescues documents that are otherwise lost.

                ## Milestones
                1. Every former law firm, accounting firm and private bank listed.
                2. A letter sent to each asking what family files they hold and their destruction dates.
                3. Important files recovered or copied into the family's own archive.
                4. Any firm that has closed traced to its successor or archive.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every former adviser has been written to, and files the family needs are recovered or their location confirmed in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every former adviser the family can remember using"
                - "Send each a letter asking what files they hold and when they will be destroyed"
                - "Collect or copy the files worth keeping"
                - "Trace closed firms through the professional regulator"
            - name: Box list and catalogue of the physical archive
              description: |-
                ## Purpose
                Boxes labelled only with a year or a surname are almost useless to the person who inherits them. A box list, numbering every box and describing its contents in a line or two, turns a storeroom into an archive someone else can search.

                ## Milestones
                1. Every box, file and album given a unique number.
                2. A one or two line description written for each.
                3. The box list linked to the key documents inventory where originals are inside.
                4. A copy of the box list kept with the off-site copy set.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every box in the physical archive is numbered and described on a box list, with a copy held off site."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Number every box, file and album in the storeroom"
                - "Write a short description of each box's contents"
                - "Cross-reference boxes holding originals to the inventory"
                - "Place a copy of the box list with the off-site set"
            - name: Retrieving records after a death in the family
              description: |-
                ## Purpose
                The weeks after a death bring requests from banks, registries, trustees and tax authorities, each needing death certificates, the will and proof of authority. A prepared retrieval plan, worked through with the executor, gets the right documents to the right people without the family searching while grieving.

                ## Milestones
                1. Enough certified death certificates ordered for every institution on the list.
                2. The original will located and passed to the executor's lawyer.
                3. Each bank, registry and trustee sent the documents they ask for.
                4. A record kept of which documents went where and when.

                ## Notes
                Ask the executor's lawyer before releasing any original. Many institutions accept certified copies for the first steps.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every institution on the estate list has received the documents it requested, with a dated log of what was sent."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask the executor how many certified death certificates to order"
                - "Retrieve the original will and hand it to the executor's lawyer"
                - "Send each institution the documents it asks for"
                - "Log every document sent, with date and recipient"
            - name: Document handover when an adviser or trustee changes
              description: |-
                ## Purpose
                Changing a lawyer, trustee or administrator is the moment documents most often go missing between two firms. A handover list agreed in advance, with both sides signing off what moved, keeps the trust chain and the company books intact.

                ## Milestones
                1. A full list of documents the outgoing firm holds obtained.
                2. A handover schedule agreed between outgoing and incoming firms.
                3. Every item signed for by the incoming firm.
                4. The inventory and structure chart updated with the new holder.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed handover schedule shows every document moved from the outgoing to the incoming firm, and the inventory reflects the new holder."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the outgoing firm for a full list of family documents it holds"
                - "Agree a handover schedule with both firms"
                - "Check each item off as the incoming firm signs for it"
                - "Update the inventory and structure chart with the new holder"
            - name: Records evacuation plan before a hurricane
              description: |-
                ## Purpose
                Hurricane and flood season in the Caribbean puts paper archives at real risk every year, and the decision to move records is often left until roads close. A written plan for which boxes leave, where they go and who moves them, rehearsed before the season starts, protects what cannot be replaced.

                ## Milestones
                1. The boxes and originals that must leave first marked on the box list.
                2. Waterproof containers and a destination away from the coast arranged.
                3. Two people named to move the records, with a trigger point for leaving.
                4. A dry run done before the start of the season.

                ## Notes
                Start from the **Operational checklist** template. Check the off-site certified copy set is up to date before the season, so a loss is survivable.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written evacuation plan names priority boxes, a destination and two movers, and a dry run was completed before the season began."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark the priority boxes and originals on the box list"
                - "Buy waterproof storage containers for the priority boxes"
                - "Name the two people who will move records and when they act"
                - "Run a dry run of the evacuation before the season opens"
            - name: Family history book for a milestone anniversary
              description: |-
                ## Purpose
                Anniversaries of a business founding, a matriarch's ninetieth birthday or a family reunion give the archive a reason to be seen. A short illustrated history, built from the oral histories, photographs and documents, gives every branch a shared story and checks the archive along the way.

                ## Milestones
                1. The occasion, audience and length agreed.
                2. Material chosen from the archive and permissions confirmed for anything personal.
                3. A draft reviewed by elders for accuracy and sensitivity.
                4. Copies printed or published privately in time for the occasion.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A reviewed family history book is printed or privately published and delivered before the anniversary it marks."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the occasion, readers and length with the family"
                - "Select photographs and documents from the box list"
                - "Send the draft to two elders for accuracy and sensitivity"
                - "Order the print run in time for the occasion"
            - name: Records pack for an estate planning review
              description: |-
                ## Purpose
                Estate planning meetings with lawyers and tax advisers run faster and cost less when the documents are already on the table. Assembling a pack of current wills, the structure chart, the deeds register and trust summaries ahead of the meeting turns billable searching into planning time.

                ## Milestones
                1. The adviser's document request list obtained in advance.
                2. A pack assembled from the inventory, structure chart and deeds register.
                3. The pack sent securely a week before the meeting.
                4. Meeting outcomes and new document actions recorded.

                ## Notes
                Start from the **Meeting notes** template to record what was decided and which documents will change.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A records pack reached the advisers a week before the estate planning meeting, and the meeting's document actions are recorded with owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the lawyer for the document list they want before the meeting"
                - "Assemble the pack from the inventory and structure chart"
                - "Send the pack through a secure channel a week ahead"
                - "Record which documents will be redrafted and by whom"
            - name: Records handover from a retiring family elder
              description: |-
                ## Purpose
                Elders who built the wealth often kept the most important papers personally, in a study or a briefcase only they understood. A planned handover while they are well, sitting together and going through what they hold and why, passes on both the documents and the memory behind them.

                ## Milestones
                1. The elder's personal papers listed with them, box by box.
                2. Their explanations of key documents recorded in writing or audio.
                3. Documents moved into the family's records system with their agreement.
                4. Anything the elder wants kept private marked and respected.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The elder's personal papers are listed, explained in their own words and moved into the records system, with private items marked."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the elder to choose a time to go through their papers together"
                - "List each box or file with them, one session at a time"
                - "Record their explanation of each important document"
                - "Move papers into the records system only with their agreement"
            - name: Personal records file for each adult child
              description: |-
                ## Purpose
                At eighteen a child becomes the legal owner of their own identity documents, accounts and any trust interests, but most still assume their parents hold everything. Building each young adult a personal records file, and showing them how to keep it, prepares them for banks, universities and their first signatures.

                ## Milestones
                1. Their identity documents, certificates and account details gathered into one file.
                2. Their own will, health directive and power of attorney discussed with a lawyer.
                3. The trust interests they may hear about explained at the level the family has agreed.
                4. The file handed over with a short guide to keeping it current.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each child over eighteen holds a personal records file of their own documents and has met a lawyer about a will and health directive."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Gather the child's identity documents and certificates into one file"
                - "Book a meeting with a lawyer about a first will and health directive"
                - "Agree with the trustees what the child will be told about trust interests"
                - "Hand over the file with a one-page guide to keeping it"
            - name: Records for an ageing parent losing capacity
              description: |-
                ## Purpose
                Capacity can fade gradually, and once it has gone a parent can no longer sign a power of attorney or confirm where a document is. Working with them early, while they can still make decisions, to gather their records and confirm their wishes protects both their dignity and the family's ability to act.

                ## Milestones
                1. Their current powers of attorney and health directives located and checked with a lawyer.
                2. Their accounts, pensions, insurance and property records listed.
                3. Their wishes about who sees their records written down with them.
                4. A regular check-in arranged to keep the file current.

                ## Notes
                If capacity is already in doubt, take advice from the lawyer before asking the parent to sign anything new.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The parent's legal documents are confirmed current by a lawyer, their records are listed, and their wishes on access are written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the parent's lawyer whether their powers of attorney are current"
                - "List the parent's accounts, pensions, insurance and property"
                - "Write down with the parent who may see their records"
                - "Go through the parent's records file with them @recurring(quarterly)"
            - name: Records for a family member living abroad
              description: |-
                ## Purpose
                Living abroad splits a person's records between two countries, with documents in different languages, different registries and different rules on certification. Building a dual-country records file means a relative in Toronto or London can still act on property, accounts and trusts back home.

                ## Milestones
                1. Documents in each country listed, with where the originals sit.
                2. Translations obtained for any key document not in the language of the other country.
                3. A local contact or lawyer named in each country to retrieve originals.
                4. Their file linked to the identity register and inventory.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The family member has a dual-country records file with original locations, any needed translations and a named contact in each country."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the family member's documents in each country"
                - "Order certified translations of key documents where needed"
                - "Name a lawyer or relative in each country who can retrieve originals"
                - "Link the file to the identity register and inventory"
            - name: Records after a separation or divorce
              description: |-
                ## Purpose
                Separation brings disclosure requests, changes of name and address, and questions about which documents belong to whom. Handling the family's records carefully, following the lawyers' guidance and the access rules, protects both the family's structures and a fair process for the departing spouse.

                ## Milestones
                1. The family's lawyer consulted on what records may and must be disclosed.
                2. The departing spouse's access level changed under the agreed rules.
                3. Their personal documents returned to them with a receipt.
                4. Identity, property and beneficiary records updated after the settlement.

                ## Notes
                Never remove or alter records once proceedings are in view. Ask the lawyer whether a legal hold applies.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Disclosure followed the lawyer's guidance, the former spouse's access was changed under the rules and their personal documents were returned with a receipt."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the family lawyer what records must be preserved and disclosed"
                - "Change the spouse's access level as the rules set out"
                - "Return the spouse's personal documents and get a signed receipt"
                - "Update the identity and property registers after the settlement"
            - name: Records for a blended or second family
              description: |-
                ## Purpose
                Blended families hold extra paperwork that matters a great deal: adoption orders, guardianship appointments, prior marriage agreements and wills that provide for children of different relationships. Making sure these documents are found, current and stored carefully avoids painful surprises for children later.

                ## Milestones
                1. Adoption, guardianship, step-parent and prior marriage documents located.
                2. Wills and guardianship appointments checked with a lawyer for every child.
                3. Each document placed at the right sensitivity level.
                4. The records updated whenever a new child or relationship joins the family.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Adoption, guardianship and prior marriage documents are located and stored at the right level, and a lawyer has confirmed guardianship for every minor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the adoption, guardianship and prior marriage documents that should exist"
                - "Locate each one and record it in the inventory"
                - "Ask a lawyer to check guardianship appointments for every minor child"
                - "Place each document at the agreed sensitivity level"
            - name: Family lineage record with sources
              description: |-
                ## Purpose
                Genealogy matters beyond curiosity in a wealthy family: trust deeds often define beneficiaries by descent, and old disputes turn on who was born to whom. A family tree backed by certificates and parish or civil records, with each fact sourced, serves both history and governance.

                ## Milestones
                1. A family tree drawn back at least three generations.
                2. Each birth, marriage and death on the tree linked to a certificate or record.
                3. Unsourced facts marked as family tradition rather than fact.
                4. The tree shared with the trustees if beneficiary classes depend on descent.

                ## Notes
                Parish registers and civil registries in many Caribbean countries hold records back to the nineteenth century; national archives can often search them for a fee.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A family tree of three or more generations shows a source for every birth, marriage and death, with unsourced facts clearly marked."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Sketch the tree from what elders remember"
                - "Order certificates for each direct ancestor from the civil registry"
                - "Search parish and national archive records for older generations"
                - "Mark every fact that has no source yet"
            - name: Records continuity plan if the office closes
              description: |-
                ## Purpose
                If the family office winds down, merges into a multi-family office or loses its only records person, the archive can be stranded on a server or in a rented storeroom. A continuity plan saying who takes custody, how files are exported and where originals go keeps the records alive beyond the office.

                ## Milestones
                1. The risks that could strand the archive listed and rated.
                2. A successor custodian named for each part of the archive.
                3. Export steps and storage contracts documented.
                4. The plan approved by the family and filed with the lawyer.

                ## Notes
                Start from the **Risk register** template to list and rate the risks before writing the plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A continuity plan naming successor custodians and export steps for every part of the archive is approved and lodged with the family lawyer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List what could leave the archive stranded and rate each risk"
                - "Name a successor custodian for paper, digital and history material"
                - "Write the steps to export the digital archive in open formats"
                - "Lodge the approved plan with the family lawyer"
            - name: Legal hold procedure for disputes and enquiries
              description: |-
                ## Purpose
                Litigation, a tax enquiry or a regulatory request can make it unlawful to destroy or change related records, and routine shredding can then look like concealment. A written legal hold procedure, triggered by the lawyer, stops destruction at once and documents what was preserved.

                ## Milestones
                1. The events that trigger a hold defined with the family lawyer.
                2. A hold notice template ready to send to staff, advisers and storage providers.
                3. A way to suspend scheduled destruction for affected records.
                4. A register of holds with start and release dates.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A legal hold procedure, notice template and holds register exist, and the destruction round checks the register before anything is shredded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the family lawyer to list the events that trigger a hold"
                - "Draft a hold notice for staff, advisers and storage providers"
                - "Add a holds register check to the destruction round"
                - "Start a register of holds with start and release dates"
            - name: Records governance policy for the family council
              description: |-
                ## Purpose
                Without a written policy, records practice depends on one custodian's habits and ends when they leave. A short policy covering custody, classification, access, retention, destruction and family history, approved by the family council, makes the records system part of how the family governs itself.

                ## Milestones
                1. A policy of four pages or fewer drafted from the work already done.
                2. The policy reviewed by the family lawyer.
                3. The policy approved by the family council and dated.
                4. A yearly records report to the council in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A records policy reviewed by the lawyer and approved by the family council is on file, with a records report given to the council in the last year."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft the policy from the access rules, classification and retention schedule"
                - "Send the draft to the family lawyer for review"
                - "Put the policy to the family council for approval"
                - "Report records matters and audit results to the family council @recurring(yearly)"
            - name: Placing historic papers with a public archive
              description: |-
                ## Purpose
                Some family papers, such as a business's early ledgers, letters from a political career or plantation-era estate records, have value to historians and the wider community. Depositing them with a national archive, university or museum, on agreed terms of access and ownership, preserves them professionally and adds to the public record.

                ## Milestones
                1. Papers of possible public value identified with an archivist's help.
                2. Two or three institutions approached about a deposit or gift.
                3. Terms agreed on ownership, closure periods, access and copying.
                4. A signed deposit agreement and a copy of the catalogue kept by the family.

                ## Notes
                Ask the lawyer and accountant about the effect of a gift or deposit before signing. Closure periods can keep sensitive papers private for decades.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision is recorded on placing historic papers, and if placed, a signed deposit agreement and the institution's catalogue are on file."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask an archivist which family papers may have public value"
                - "Approach two or three institutions about a deposit or gift"
                - "Compare their terms on ownership, closure and access"
                - "Have the lawyer review the deposit agreement before signing"
---

# Family Records and Archives

This area is for the parent or elder who knows the family's papers are spread across a lawyer's strongroom, a bank box, an office server and a drawer at home, and for whoever will one day have to find them in a hurry. It starts with foundations (an inventory of key documents, the location of every original, a structure chart, a deeds register, a named custodian and access rules), then the routines that keep records current, the knowledge that makes them hold up with banks and courts, decisions about storage and digitising, events such as a death, a hurricane or an adviser change, situations such as an ageing parent or a family member abroad, and finally specialist work on lineage, legal holds, records governance and placing historic papers with a public archive.

What repeats is a weekly and monthly filing rhythm for incoming originals, a monthly check of passport and visa expiry dates, a quarterly refresh of the structure chart and access requests, and a yearly audit of key documents, originals held by others and the off-site copy set. The Operational checklist, Purchase decision, Vendor, Meeting notes and Risk register templates pair with the audit, the safe, the archivist, estate planning reviews and the continuity plan. Questions about what a document means legally, or how long the law requires it to be kept, belong with the family's lawyer and accountant. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
