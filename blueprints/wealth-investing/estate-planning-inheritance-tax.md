---
id: wealth-investing.estate-planning-inheritance-tax
name: Estate Planning & Inheritance Tax
description: "A current will, executors and attorneys in place, an inheritance tax estimate you refresh each year, nominations that match your wishes, and an estate your family can actually administer."
category: personal
version: 1.0.0
tags: [wealth-investing, estate-planning-inheritance-tax, everyone, retiree, wills, inheritance-tax, executors, power-of-attorney]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - meeting-notes
    - metrics-log
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Estate Planning & Inheritance Tax
          description: "Planning how wealth passes on, reducing inheritance or estate tax legally and keeping beneficiaries and arrangements up to date."
          projects:
            - name: Estate asset and liability register
              description: |-
                ## Purpose
                Executors often spend months discovering what someone owned: a forgotten savings account, a small pension from a job in the 1990s, a share certificate in a drawer. A single register listing every asset and debt with its provider, account number, rough value and owner is the base for every tax estimate, will and conversation in this area.

                ## Milestones
                1. Every bank account, investment, pension, property and policy listed with provider and reference number.
                2. Each item marked as sole, joint or held in trust, with an approximate current value.
                3. Mortgages, loans and credit cards listed with balances.
                4. A total estimated net estate figure written at the top of the register.

                ## Notes
                Leave out passwords. The register says where things are, not how to get into them, so it can be shared with an executor safely.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every asset and debt with provider, reference, ownership and value, and shows a total net estate figure."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a spreadsheet with columns for provider, reference, owner and value"
                - "Go through a year of bank statements for payments to unknown providers"
                - "Add every pension, policy and property, including small or dormant ones"
                - "List each debt with its current balance and lender"
            - name: Locating and rereading your existing will
              description: |-
                ## Purpose
                Plenty of people know they made a will once but cannot say where the signed original is or what it actually says. Finding it and reading it against today's family and finances shows quickly whether it still works, or whether it names an ex-partner, a dead executor or a house you sold years ago.

                ## Milestones
                1. The signed original located, or confirmed as missing, with any copies gathered.
                2. The date, executors, guardians and main beneficiaries noted on one page.
                3. Every clause that no longer matches your circumstances marked.
                4. A clear decision recorded: keep, update with a codicil, or replace.

                ## Notes
                If you never made a will, record that and go straight to the intestacy and solicitor projects. A photocopy is usually not enough to prove a will, so the original matters.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The location of the original will is recorded, with a one-page summary and a keep, amend or replace decision written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your files and ask the solicitor who drafted it where the original is held"
                - "Write a one-page summary of who gets what and who is in charge"
                - "Mark every name, asset or clause that is out of date"
                - "Record whether the will should be kept, amended or replaced"
            - name: Assets that pass outside your will
              description: |-
                ## Purpose
                A will often controls less than people assume. Jointly owned property may pass automatically to the co-owner, pension death benefits usually follow a nomination, and policies written in trust go straight to their beneficiaries, so a careful will can be undone by an old form. Mapping which assets the will governs and which it does not avoids that surprise.

                ## Milestones
                1. Each register item labelled: passes by will, by survivorship, by nomination or by trust.
                2. A value total for each route.
                3. Any conflict between the will and a nomination or joint ownership listed.
                4. Questions for your solicitor written down for each conflict.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every asset in the register is labelled with the route by which it passes, with conflicts against the will listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a column to the register for how each asset passes on death"
                - "Check property deeds or land registry entries for the form of joint ownership"
                - "List policies and pensions that pay out directly to a named person"
                - "Write a question for your solicitor beside each conflict you find"
            - name: How your estate passes if there is no will
              description: |-
                ## Purpose
                Every country has default rules for people who die without a will, and they rarely match what families expect. An unmarried partner may receive nothing, and a spouse may share with children in ways that force the sale of a home. Learning the rules where you live shows exactly what your family would face today and how urgent a will is.

                ## Milestones
                1. The default inheritance rules for your country or state read from an official source.
                2. Your own estate run through those rules to see who would receive what.
                3. Anyone who would be left out or left with too much control noted.
                4. The result used to set a deadline for making or updating a will.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note shows who would inherit your estate under the default rules where you live, compared with what you want."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official guide to inheritance without a will for where you live"
                - "Work out who would receive your estate under those rules"
                - "Note where that differs from what you want"
                - "Share the comparison with your partner if you have one"
            - name: First estimate of inheritance or estate tax
              description: |-
                ## Purpose
                Many families only learn an estate is taxable after the death, when the bill is due before assets can be sold. A rough estimate now, using your register and the published thresholds and allowances, tells you whether tax is likely at all, roughly how large it would be, and whether the rest of this area is about tax or mainly about paperwork.

                ## Milestones
                1. The current thresholds, allowances and rates found on the tax authority's website.
                2. Estate value calculated, including assets that pass outside the will where they count for tax.
                3. Spouse or partner exemptions and any transferable allowances applied.
                4. A single estimated tax figure recorded, with assumptions listed.

                ## Notes
                Rules differ widely: the UK, Ireland and the US each treat spouses, homes and pensions differently, and some countries tax the heir rather than the estate. Treat the figure as a planning estimate and have a professional check it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written estimate of the tax due on your estate today, with thresholds, exemptions and assumptions listed beside it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up the current estate or inheritance tax thresholds on the official tax site"
                - "Total the estate from your register, including assets counted for tax"
                - "Apply spouse exemptions and any allowance passed on from a late partner"
                - "Write down the estimated tax and every assumption behind it"
            - name: Pension and life policy beneficiary nominations
              description: |-
                ## Purpose
                Pension death benefits and many life policies pay whoever is named on the provider's form, and those forms are often decades old. An expression of wishes still naming a former spouse can send the largest asset in an estate to the wrong person, so checking each one is among the highest value hours in estate planning.

                ## Milestones
                1. Every pension and life policy listed with the current nominee as recorded by the provider.
                2. Each nomination compared with your will and current wishes.
                3. Updated forms submitted wherever a nominee is wrong or missing.
                4. Written confirmation from each provider filed with the register.

                ## Notes
                Ask each provider for a copy of what they hold rather than relying on your memory of what you filled in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pension and life policy has a current nomination confirmed in writing by the provider and matching your wishes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Log in to each pension and policy account and find the nomination page"
                - "Request a copy of the nomination each provider holds on file"
                - "Submit new nomination forms where the named person is wrong"
                - "File each provider's written confirmation with the register"
            - name: Choosing and asking your executors
              description: |-
                ## Purpose
                An executor gathers the estate, pays debts and tax, deals with the house and distributes what is left, often over a year or more. Picking people who are organised, likely to outlive you and on speaking terms with the family, then asking them properly, matters as much as the wording of the will.

                ## Milestones
                1. Two or three candidates considered against age, location, organisation and family dynamics.
                2. A first choice and a replacement agreed.
                3. Each person asked in conversation and willing to act.
                4. Names and contact details recorded for your solicitor.

                ## Notes
                A professional executor costs money but can suit complex estates or strained families. Many people name a family member alongside a solicitor.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two named executors and one replacement have each agreed in conversation to act, and their details are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List possible executors and score each on reliability and availability"
                - "Decide whether a professional executor should act alongside family"
                - "Ask your first choices in person and explain what the role involves"
                - "Record each executor's full name, address and phone number"
            - name: Naming guardians for children under 18
              description: |-
                ## Purpose
                Parents of young children who die without naming guardians leave a court or social services to decide who raises them. Choosing guardians, asking them and writing the choice into a will settles the most important question in the estate, and it can be done well before the rest of the plan is finished.

                ## Milestones
                1. Possible guardians compared on values, age, health, home and their own family.
                2. A first choice and a back-up agreed between both parents.
                3. Each guardian asked and willing.
                4. The choice passed to your solicitor for the will, with any money worries discussed.

                ## Notes
                Guardians and the people who manage the children's money do not have to be the same. Some families split the roles on purpose.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first and back-up guardian have agreed to act, and the choice is with your solicitor for inclusion in the will."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what matters most to you in the person raising your children"
                - "Agree a shortlist of two guardians with the other parent"
                - "Ask your first choice face to face and give them time to answer"
                - "Send the agreed names to your solicitor for the will"
            - name: Choosing a solicitor for wills and estates
              description: |-
                ## Purpose
                Badly drafted or wrongly signed wills can fail entirely, and online will services suit simple estates far better than blended families, businesses or property abroad. Comparing two or three specialist solicitors on experience, fixed fees and who will hold the original lets you pick one you will use for years.

                ## Milestones
                1. Three firms found that specialise in wills, probate and estate tax.
                2. Fixed fee quotes for a will and powers of attorney compared.
                3. Each firm asked whether it stores originals and how it charges for later updates.
                4. One firm chosen and a first meeting booked.

                ## Notes
                Start from the **Vendor** template. Look for membership of a recognised trust and estate practitioner body where your country has one.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One estate solicitor is chosen from three compared on fees and experience, and a first appointment is booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your professional body's directory for wills and probate specialists"
                - "Ask three firms for fixed fee quotes for a will and powers of attorney"
                - "Ask each firm how it stores originals and prices later changes"
                - "Book a first meeting with the firm you choose"
            - name: Estate documents vault and location note
              description: |-
                ## Purpose
                Nobody can act on a will they cannot find, and executors routinely lose weeks hunting for deeds, policies and share certificates. A single named place for originals, plus a one-page note saying where everything is kept, means the right people can act within days rather than months.

                ## Milestones
                1. Originals of the will, attorney documents, deeds and policies gathered in one secure place or with your solicitor.
                2. A one-page location note listing where each original is held.
                3. Your executors told where the location note is.
                4. A yearly check that every original is still where the note says.

                ## Notes
                A fireproof box at home, a solicitor's strong room or a national will register all work. What matters is that two people know which.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All estate originals are stored in named places and a location note exists that both executors know how to find."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather every original estate document into one folder"
                - "Decide where the originals will live and move them there"
                - "Write a one-page note saying where each original is kept"
                - "Check each original is still where the location note says @recurring(yearly)"
            - name: Instructing a solicitor to draft your will
              description: |-
                ## Purpose
                Instructions built from your register, nominations map and tax estimate produce a will in fewer meetings, and for less money, than one started from a blank page. Arriving with clear instructions on executors, guardians, gifts, the residue and what happens if a beneficiary dies first gets you a draft that reflects real decisions rather than defaults.

                ## Milestones
                1. An instruction sheet covering executors, guardians, specific gifts, residue and back-up beneficiaries.
                2. Questions on tax, the family home and any complex beneficiaries listed in advance.
                3. A meeting held and the solicitor's advice recorded.
                4. A first draft received and returned with comments.

                ## Notes
                Start from the **Meeting notes** template. Bring the register summary, not the full spreadsheet.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first will draft built from a written instruction sheet has been received and reviewed with comments returned to the solicitor."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page instruction sheet for the will"
                - "List the questions you want answered at the first meeting"
                - "Take notes at the meeting and file them with the register"
                - "Return comments on the first draft within two weeks"
            - name: Will signing and witnessing day
              description: |-
                ## Purpose
                Wills fail every year because a witness was also a beneficiary, a page was not initialled or the signing happened over a video call where that is not permitted. Treating the signing as a small planned event, with the right witnesses in the room, makes sure months of work actually becomes a valid will.

                ## Milestones
                1. Signing formalities for where you live confirmed with your solicitor.
                2. Two independent adult witnesses arranged who are not beneficiaries or their partners.
                3. The will signed and witnessed in one sitting.
                4. The original lodged in its storage place and the location note updated.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final will is signed and witnessed under the local formalities, and the original is in its recorded storage place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your solicitor which signing formalities apply where you live"
                - "Book two witnesses who receive nothing under the will"
                - "Sign and have the will witnessed in a single sitting"
                - "Lodge the original and update the location note"
            - name: Lasting powers of attorney for money and health
              description: |-
                ## Purpose
                Estate planning is not only about death: a stroke or dementia can leave a family unable to pay bills or sell a house without a court process that takes months. Powers of attorney for financial and health decisions, made while you have capacity, name the people who can act and how.

                ## Milestones
                1. Attorneys chosen for financial decisions and, where available, for health and care decisions.
                2. Forms completed with any instructions or preferences.
                3. Documents signed, certified and registered as your jurisdiction requires.
                4. Registered copies given to your bank and attorneys and their location recorded.

                ## Notes
                Names and rules vary: lasting powers of attorney in England and Wales, enduring powers in Ireland, durable powers and healthcare proxies in the US. Registration can take weeks, so start early.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Registered powers of attorney for financial and health decisions exist, with copies held by each attorney and the bank."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the official forms for powers of attorney where you live"
                - "Ask your chosen attorneys and explain what the role involves"
                - "Complete, sign and register both documents"
                - "Give certified copies to your bank and each attorney"
            - name: Letter of wishes beside the will
              description: |-
                ## Purpose
                A will is short and public once proved, so it is a poor place for the detail executors actually need: who should have the watch, which charity matters most, how to handle a child who is bad with money. A letter of wishes, not legally binding but kept with the will, gives that guidance in your own words.

                ## Milestones
                1. A list of personal items and who you would like to have them.
                2. Guidance for executors on property, pets and family sensitivities.
                3. The letter signed, dated and stored with the will.
                4. A yearly reread to keep it in line with the will.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed and dated letter of wishes is stored with the will and agrees with its current wording."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the personal items that matter and who should have them"
                - "Ask the agent to draft a plain letter of wishes from your notes"
                - "Sign, date and store the letter with the original will"
                - "Reread the letter of wishes against the will @recurring(yearly)"
            - name: Funeral wishes and costs record
              description: |-
                ## Purpose
                Families often make funeral decisions within days, under strain and without knowing what the person wanted or how it will be paid. A short record of burial or cremation, type of service and the money set aside for it removes guesswork and arguments, and often lets the funeral be paid before probate is granted.

                ## Milestones
                1. Burial or cremation, service type and any religious or personal wishes written down.
                2. Typical local funeral costs found and noted.
                3. The source of payment identified: savings, a policy, a pre-paid plan or the estate.
                4. The record stored with the letter of wishes and shared with executors.

                ## Notes
                Pre-paid funeral plans vary a lot in what they include. If you consider one, compare it as a purchase decision with what is excluded written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written funeral wishes record names the payment source and is stored where both executors can find it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your burial or cremation and service wishes"
                - "Find typical funeral costs from two local funeral directors"
                - "Decide which account or policy will cover the cost"
                - "Give a copy to your executors"
            - name: Digital accounts and assets legacy plan
              description: |-
                ## Purpose
                Online-only bank accounts, investment apps, photos in the cloud and cryptocurrency can be invisible or locked to executors. A plan that lists each digital asset, uses the platforms' own legacy contact tools and says where access instructions are kept stops value and memories disappearing.

                ## Milestones
                1. Digital accounts with money or sentimental value listed, without passwords.
                2. Legacy or inactive account settings switched on where providers offer them.
                3. Emergency access set up in a password manager for a trusted person.
                4. Wishes for each account, keep, close or memorialise, written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A digital asset list exists, legacy contact settings are on where offered, and a trusted person has emergency access."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List online accounts holding money, photos or important records"
                - "Turn on legacy contact settings for your phone and email accounts"
                - "Set up emergency access in your password manager for a trusted person"
                - "Confirm the password manager emergency access still works @recurring(yearly)"
            - name: Monthly estate register upkeep
              description: |-
                ## Purpose
                Registers go stale the first time you open a new account or pay off a loan without updating it. Ten minutes a month adding changes, and a quarterly refresh of values, keeps it reliable enough that an executor, an attorney or your own tax estimate can trust it.

                ## Milestones
                1. A fixed monthly slot for register updates.
                2. New accounts, closures and debts added within the month they happen.
                3. Values refreshed every quarter.
                4. A last updated date at the top of the register that is never more than a month old.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The estate register shows a last updated date within the past month and values refreshed within the past quarter."
                cadence: rolling
              tasks:
                - "Add any account opened or closed this month to the estate register @recurring(monthly:19)"
                - "Refresh balances and valuations in the estate register @recurring(quarterly)"
                - "Change the last updated date at the top of the register"
            - name: Yearly inheritance tax estimate refresh
              description: |-
                ## Purpose
                Thresholds are often frozen while house prices and investments rise, so an estate that was safely under the limit five years ago can now face a real bill. Rerunning the estimate once a year with fresh values and current rules shows the trend early enough to act on it.

                ## Milestones
                1. The estimate rerun each year with refreshed register values and current thresholds.
                2. Each year's figure logged so the trend is visible.
                3. Any jump of more than ten per cent investigated and explained.
                4. A note made of whether the change calls for action or a professional review.

                ## Notes
                Start from the **Metrics log** template, with one row per year for estate value, taxable value and estimated tax.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log holds a dated estimated tax figure for each year, with the latest within the past twelve months."
                cadence: cyclic
              tasks:
                - "Set up a log with one row per year for estate value and estimated tax"
                - "Rerun the inheritance tax estimate with fresh values @recurring(yearly)"
                - "Write one sentence explaining any change from last year"
            - name: Life event triggers for a will review
              description: |-
                ## Purpose
                Marriage can revoke an existing will in some countries, divorce may only partly cancel gifts to an ex-spouse, and a new grandchild or the death of an executor can quietly break a plan. A short quarterly check against a list of triggers catches these before they matter.

                ## Milestones
                1. A written list of events that should prompt a review: marriage, divorce, birth, death, house move, big inheritance, moving country.
                2. A quarterly check of the list against the past three months.
                3. Each trigger that applied logged with the action taken.
                4. Your solicitor contacted within a month whenever a trigger applies.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A trigger list exists, each quarter is checked against it, and every trigger that applied has a logged action."
                cadence: rolling
              tasks:
                - "Write a list of life events that should prompt a will review"
                - "Check the past three months against the trigger list @recurring(quarterly)"
                - "Email your solicitor within a month of any trigger applying"
            - name: Annual beneficiary nomination audit
              description: |-
                ## Purpose
                Changing jobs, consolidating pensions or switching insurers creates new nominations that start blank or default to the estate. Once a year, matching every live nomination against the register catches the new account nobody filled in and the old form nobody updated.

                ## Milestones
                1. Every pension and policy in the register checked against the provider's current nomination.
                2. Blank or wrong nominations corrected.
                3. The audit date and result recorded in the register.
                4. New accounts opened during the year included.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year every pension and policy shows a checked nomination date in the register, with corrections confirmed."
                cadence: cyclic
              tasks:
                - "Check every nomination against the register @recurring(yearly)"
                - "Submit corrected forms for any blank or wrong nominee"
                - "Record the audit date beside each pension and policy"
            - name: Executor briefing pack kept current
              description: |-
                ## Purpose
                Executors who receive a clear pack, covering where documents are, who the professionals are and what you want done first, finish faster, pay fewer fees and argue less. Updating it once a year keeps the contacts, accounts and instructions from drifting out of date.

                ## Milestones
                1. A pack covering the location note, register summary, professional contacts and first steps.
                2. A copy held by each executor or a clear note of where to find it.
                3. The pack refreshed once a year.
                4. Each executor's contact details confirmed at the refresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An executor pack dated within the past twelve months exists, and both executors confirm they know where it is."
                cadence: rolling
              tasks:
                - "Assemble the location note, register summary and contact list into one pack"
                - "Tell each executor where the pack is kept"
                - "Refresh the executor pack and confirm executors' details @recurring(yearly)"
            - name: Estate tax rule change watch
              description: |-
                ## Purpose
                Estate and inheritance tax rules change often and sometimes sharply, for example when pensions are brought into scope or allowances are frozen for years. A yearly read of the budget or tax announcements, with a note of what affects you, keeps your estimate and plan based on rules that still exist.

                ## Milestones
                1. One or two reliable sources of estate tax news chosen.
                2. Each year's budget or tax announcement read for estate changes.
                3. Changes that affect your estate noted with their start dates.
                4. Affected projects reopened, or your solicitor asked, within a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated note each year records which estate tax changes were announced and whether any affect your plan."
                cadence: rolling
              tasks:
                - "Choose one official and one professional source of estate tax news"
                - "Read the yearly budget or tax announcement for estate changes @recurring(yearly)"
                - "Note any change that affects your estimate with its start date"
            - name: Valuation file for the home and valuables
              description: |-
                ## Purpose
                Date of death values are what executors must report, and tax authorities can challenge figures that look low. A file of past valuations, purchase receipts and photographs for the home, jewellery, art and other items of value makes that job quicker and the numbers easier to defend.

                ## Milestones
                1. Purchase records and any past valuations for the home gathered.
                2. Items worth more than a set amount listed with photos and receipts.
                3. A yearly online estimate of the home's value added.
                4. The file's location added to the location note.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A valuation file holds records for the home and every item above your chosen value, with a home estimate from the past year."
                cadence: cyclic
              tasks:
                - "Choose a value above which an item goes in the file"
                - "Photograph each valuable item and file it with its receipt"
                - "Add a fresh estimate of the home's value to the file @recurring(yearly)"
                - "Add the valuation file to the location note"
            - name: Annual estate plan check with your solicitor
              description: |-
                ## Purpose
                Most wills are never looked at again once signed. A short yearly conversation with your solicitor or adviser, bringing the register, tax estimate and any triggers, keeps the plan current at a fraction of the cost of fixing it after a death.

                ## Milestones
                1. A standing yearly appointment or call booked.
                2. The register summary, tax estimate and trigger log sent in advance.
                3. Advice recorded and actions agreed.
                4. Any agreed changes completed before the next check.

                ## Notes
                Start from the **Meeting notes** template. Ask for a fixed fee for the review so it does not become something you avoid.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review with a solicitor or adviser has notes filed and every agreed action completed within the year."
                cadence: cyclic
              tasks:
                - "Book the yearly estate plan review with your solicitor @recurring(yearly)"
                - "Send the register summary and tax estimate a week before"
                - "File the meeting notes and the actions agreed"
            - name: Household handover notes for a surviving partner
              description: |-
                ## Purpose
                In many couples one person runs the money, and after a death the other may not know which bills come out of which account, which policies exist or how to reach the pension provider. A living set of handover notes, updated each quarter, gives the surviving partner a working household from day one.

                ## Milestones
                1. Every regular bill listed with the account it is paid from.
                2. Income sources and their payment dates listed.
                3. Contacts for the bank, pensions, insurers and accountant included.
                4. Both partners able to walk through the notes together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Handover notes listing bills, income and contacts are dated within the past quarter and both partners have read them."
                cadence: rolling
              tasks:
                - "List every direct debit and standing order with its account"
                - "Add income sources, payment dates and provider contacts"
                - "Walk your partner through the notes in one sitting"
                - "Update the handover notes for new bills or providers @recurring(quarterly)"
            - name: Inheritance tax allowances and reliefs explained
              description: |-
                ## Purpose
                Most estate tax planning rests on a handful of rules: the tax-free threshold, any extra allowance for a home passing to children, the exemption for spouses, allowances that transfer between partners and gifts that drop out after a number of years. Understanding these in plain language for your own country makes every conversation with a professional shorter and cheaper.

                ## Milestones
                1. The main thresholds and exemptions where you live written in your own words.
                2. How allowances transfer between spouses or civil partners understood.
                3. The rules for gifts made in the years before death noted.
                4. Three questions you still have written down for your solicitor.

                ## Notes
                Use official guidance first. Commentary often lags behind rule changes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain language summary of the estate tax allowances and exemptions where you live is filed with the register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's guide to inheritance or estate tax"
                - "Write a one-page summary of the thresholds and exemptions"
                - "Note how allowances pass between married partners"
                - "List three questions to take to your solicitor"
            - name: How probate and estate administration work
              description: |-
                ## Purpose
                Knowing what your executors will face, from registering the death to the grant of probate, paying tax, selling property and final accounts, shows which parts of your plan will save them the most time. It also helps you judge whether to appoint a professional or leave it to family.

                ## Milestones
                1. The main stages of estate administration where you live listed in order.
                2. Typical timescales and fees for each stage noted.
                3. The points where your estate is likely to slow things down identified.
                4. One change to your plan that would make administration easier chosen.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of probate stages with typical timescales is filed, alongside one improvement made to your plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official guide to applying for probate where you live"
                - "List the stages and how long each usually takes"
                - "Mark where your own estate would cause delays"
                - "Pick one change that would make your executors' work easier"
            - name: How pensions and life insurance are treated on death
              description: |-
                ## Purpose
                Pensions and life policies are often the largest sums an estate pays out, and their treatment depends on the type of pension, your age at death and whether a policy sits in trust. Learning how each of yours would be paid and taxed avoids a nasty surprise and shows where a nomination or trust conversation is needed.

                ## Milestones
                1. Each pension classed as defined benefit or defined contribution, with its death benefits noted.
                2. The tax treatment of each pension on death before and after a key age understood.
                3. Each life policy marked as in trust or in the estate.
                4. Questions for the provider or your adviser listed.

                ## Notes
                Several countries have changed or announced changes to how pensions are treated on death. Check the date of anything you read.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each pension and policy in the register has a note on its death benefits and likely tax treatment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each pension provider for a statement of death benefits"
                - "Note whether each life policy is written in trust"
                - "Read official guidance on how pensions are taxed on death"
                - "List the questions to raise with your adviser"
            - name: Reviewing a will draft line by line
              description: |-
                ## Purpose
                Solicitors draft from instructions, and a misspelled name, a missing back-up beneficiary or a gift of a house you have since sold can slip through. Reading the draft slowly against your instruction sheet and register, with a short checklist, is the cheapest point at which to fix mistakes.

                ## Milestones
                1. A checklist covering names, executors, guardians, gifts, residue and back-ups.
                2. Every clause checked against the instruction sheet.
                3. Anything unclear asked about in writing.
                4. A corrected draft confirmed before signing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The will draft has been checked clause by clause against a written checklist and all queries answered before signing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a checklist of names, roles, gifts and back-up beneficiaries"
                - "Read the draft against the checklist with a pen"
                - "Send your solicitor a numbered list of queries"
                - "Confirm the corrected draft matches your instructions"
            - name: Why wills get challenged and how to prevent it
              description: |-
                ## Purpose
                Disputes over estates are rising, usually from relatives who were left out, partners who were not married, or claims that the person lacked capacity or was pressured. Knowing the common grounds lets you take simple steps now, such as a capacity note from a doctor or a written reason for an unequal gift.

                ## Milestones
                1. The main grounds for challenging a will where you live understood.
                2. Anyone in your family with a possible claim identified.
                3. Preventive steps agreed with your solicitor.
                4. Any written explanation stored with the will.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the people who might challenge your will and the preventive steps agreed with your solicitor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a professional guide to contesting wills where you live"
                - "List family members who might feel left out by your will"
                - "Ask your solicitor what evidence would help defend the will"
                - "Store any written explanation with the original will"
            - name: Executor duties study for named executors
              description: |-
                ## Purpose
                If a parent, sibling or friend has named you as executor, the role can arrive with no warning while you are grieving. Learning the duties now, and finding out where their documents are, means you will know what to do in the first week and when to call a professional.

                ## Milestones
                1. The legal duties and personal liability of an executor understood.
                2. The person who named you asked where their will and location note are.
                3. A list of the first ten steps after a death written.
                4. A decision noted on whether you would act alone or with a solicitor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written first steps list for acting as executor exists, and you know where the will you are named in is kept."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official guide to an executor's responsibilities"
                - "Ask the person who named you where their will is kept"
                - "Write a list of the first ten steps after a death"
                - "Decide whether you would want a solicitor to help"
            - name: Life cover sized to the projected tax bill
              description: |-
                ## Purpose
                When a large tax bill cannot be avoided, some families choose life cover that pays out to meet it, so the house or business does not have to be sold quickly. Comparing the cost of cover with the projected bill, and asking how the policy should be held so it does not add to the estate, turns a vague worry into a priced decision.

                ## Milestones
                1. The projected tax bill taken from your latest estimate.
                2. Quotes for suitable cover, including joint policies paying on the second death, obtained.
                3. How the policy would be held so it stays outside the estate discussed with an adviser.
                4. A decision recorded to buy, defer or not insure.

                ## Notes
                Start from the **Purchase decision** template. A policy that pays into the estate can increase the bill it was meant to cover.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on life cover for the estate tax bill, with at least two quotes and the holding arrangement agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Take the projected tax figure from your latest estimate"
                - "Get two quotes for cover paying out on the second death"
                - "Ask an adviser how the policy should be held"
                - "Check the cover still matches the tax estimate @recurring(yearly)"
            - name: Liquidity plan for the tax bill and estate costs
              description: |-
                ## Purpose
                Tax on an estate is often due before probate is granted, while most of the value is locked in a house or investments. A plan showing which cash, policies or bank arrangements will cover tax, funeral and legal costs in the first six months stops executors borrowing or selling at a bad time.

                ## Milestones
                1. Expected costs in the first six months listed: tax, funeral, legal and running costs.
                2. Sources of cash that can be reached quickly identified.
                3. Any shortfall quantified.
                4. A way to close the gap chosen and noted for executors.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan shows how tax and estate costs for the first six months would be paid, with any shortfall addressed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate tax, funeral and legal costs for the first six months"
                - "List cash and policies executors could reach quickly"
                - "Ask your bank whether it releases funds to pay estate tax directly"
                - "Rerun the liquidity figures with the latest estimate @recurring(yearly)"
            - name: Joint tenancy or tenants in common decision
              description: |-
                ## Purpose
                How a couple owns their home decides whether each share passes automatically to the survivor or follows each person's will. The choice matters most for second marriages, unequal contributions and some tax strategies, and changing it is usually a simple form, so it deserves a deliberate decision rather than whatever the conveyancer ticked.

                ## Milestones
                1. The current form of ownership confirmed from the title record.
                2. What each form would mean for your family written down.
                3. Your solicitor's advice obtained on which suits your plan.
                4. Any change completed and the title record checked.

                ## Notes
                Terms differ by country. Ask your solicitor what the equivalent forms of co-ownership are where you live.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The form of joint ownership of your home is a recorded decision made with advice, and the title record matches it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download your property's title record to see how it is owned"
                - "Write down what happens to each share under each form of ownership"
                - "Ask your solicitor which form fits your will"
                - "Confirm the title record shows any change"
            - name: The family home's place in the estate plan
              description: |-
                ## Purpose
                For many estates the home is the largest asset and the hardest to divide. Some systems give an extra allowance only if it passes to children or grandchildren, a child living there may expect to stay, and selling or downsizing can change both the tax and the family's plans. Deciding the home's intended route now avoids a forced sale later.

                ## Milestones
                1. The home's value and share of the estate noted.
                2. Any home-specific tax allowances where you live checked, including the effect of downsizing.
                3. Family expectations about the home understood.
                4. The intended outcome for the home written and passed to your solicitor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on what should happen to the family home exists, reflecting tax rules and family expectations."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out what share of the estate the home represents"
                - "Check whether a home passing to descendants changes the tax"
                - "Ask your children what they expect to happen to the house"
                - "Send the intended outcome to your solicitor"
            - name: Setting an inheritance target against retirement spending
              description: |-
                ## Purpose
                Retirees often underspend for fear of leaving too little, or overspend without realising what is left. Agreeing a rough sum you would like to pass on, and checking it against your retirement plan, makes both spending and estate decisions easier and gives children realistic expectations.

                ## Milestones
                1. A rough figure you would like to leave, in today's money.
                2. That figure tested against your retirement income plan.
                3. The trade-off between spending now and leaving more discussed with your partner.
                4. The target reviewed once a year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An inheritance target in today's money is written down and checked against your retirement income plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down a rough sum you would like to leave"
                - "Compare it with what your retirement plan projects you will leave"
                - "Talk through the trade-off with your partner"
                - "Revisit the inheritance target @recurring(yearly)"
            - name: Family conversation about where everything is
              description: |-
                ## Purpose
                Children and executors who have never heard a word about the estate plan are more likely to argue, miss assets or misread a will. One planned conversation, about who the executors are, where documents live and what the main wishes are, without having to share every figure, prevents most of that.

                ## Milestones
                1. What you will and will not share decided in advance.
                2. A date set when the people who need to know can attend.
                3. Executors, document locations and main wishes explained.
                4. Questions raised written down and answered.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A family conversation has been held where executors, document locations and main wishes were explained to those who need to know."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide what you will share and what stays private"
                - "Pick a date and invite the people who need to know"
                - "Explain who the executors are and where the location note is"
                - "Hold a short estate update with the family @recurring(yearly)"
            - name: First 90 days as an executor
              description: |-
                ## Purpose
                When someone dies and you are the executor, the first weeks bring registering the death, the funeral, securing the house, finding the will and notifying dozens of organisations. Working through a checklist with a weekly progress log keeps nothing missed and gives the family a clear picture of where things stand.

                ## Milestones
                1. The death registered and certified copies of the certificate obtained.
                2. The will found and the funeral arranged.
                3. The home, car and valuables secured and insured.
                4. Banks, pensions, insurers and the tax authority notified.
                5. An estate inventory with date of death values started.

                ## Notes
                Start from the **Operational checklist** template. Many countries have a single notification service that tells several government bodies at once.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Within 90 days the death is registered, assets secured, organisations notified and a date of death inventory begun."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Order several certified copies of the death certificate"
                - "Tell the home insurer the property may be empty"
                - "Notify banks, pension providers and the tax authority"
                - "Write a short progress log for the family @recurring(weekly:fri)"
            - name: Inheritance tax return and payment as executor
              description: |-
                ## Purpose
                Getting the estate's tax right is the executor's personal responsibility, and in many places tax must be paid within months of death, before assets can be sold. Valuing everything at the date of death, claiming the right allowances and filing on time avoids interest and penalties.

                ## Milestones
                1. Date of death values gathered for every asset and debt.
                2. Allowances and exemptions the estate can claim confirmed with a professional.
                3. The tax return or form completed and filed.
                4. Tax paid, or a payment plan agreed, before the deadline.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The estate's tax return is filed and tax paid or a payment plan agreed by the official deadline."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Request date of death valuations from each bank and provider"
                - "Get the house professionally valued as at the date of death"
                - "Confirm with a professional which allowances the estate can claim"
                - "File the return and arrange payment before the deadline"
            - name: Final estate accounts and distribution
              description: |-
                ## Purpose
                Beneficiaries are entitled to see how the estate was handled, and executors who distribute before all debts and tax are settled can end up paying the shortfall themselves. Clear estate accounts and a careful final distribution close the estate properly and protect you from later claims.

                ## Milestones
                1. All debts, tax and administration costs paid and recorded.
                2. Clearance received from the tax authority where it is available.
                3. Estate accounts showing every receipt and payment prepared.
                4. Accounts approved by residuary beneficiaries and funds distributed with receipts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Estate accounts are signed off by the residuary beneficiaries and every distribution has a signed receipt."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List every payment in and out of the estate account"
                - "Ask the tax authority for clearance before final distribution"
                - "Send draft estate accounts to the residuary beneficiaries"
                - "Get a signed receipt for every distribution made"
            - name: Estate plan for a blended family
              description: |-
                ## Purpose
                Second marriages bring a real tension: providing for a new partner while making sure children from an earlier relationship are not disinherited when the partner later changes their will. Without planning, everything can pass to the survivor and then to their own family. A deliberate plan, usually built with a solicitor, balances both.

                ## Milestones
                1. Each partner's assets and children listed, including what came into the marriage.
                2. Each partner's wishes for their own children and the survivor written down.
                3. Options such as a life interest in the home discussed with a solicitor.
                4. Matching wills and nominations put in place.

                ## Notes
                Mirror wills can be changed by the survivor after the first death. Ask your solicitor how to protect what each of you wants for your own children.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both partners have signed wills and nominations that reflect a written agreement on the survivor and each set of children."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List what each partner brought into the relationship"
                - "Write down what each of you wants for your own children"
                - "Ask your solicitor how to secure those wishes after the first death"
                - "Update nominations to match the new wills"
            - name: Estate protection for unmarried partners
              description: |-
                ## Purpose
                In many countries a partner who is not married or in a civil partnership inherits nothing under the default rules and may pay tax on what they do receive, however long you have been together. A will, nominations and clear property ownership are the only way to protect each other.

                ## Milestones
                1. The default rules for unmarried partners where you live checked.
                2. Wills made by both partners naming each other as you wish.
                3. Pension nominations and property ownership aligned.
                4. Any tax exposure for the surviving partner estimated.

                ## Notes
                Marriage or civil partnership can change the tax position a lot in some countries. It is a fair question to raise with your adviser.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Both partners have wills and nominations naming each other, and the survivor's likely tax position is noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check what an unmarried partner inherits under the default rules"
                - "Book will appointments for both partners"
                - "Name each other on pension and policy nominations"
                - "Estimate what tax the survivor might pay"
            - name: Estate plan for single people without children
              description: |-
                ## Purpose
                Without a spouse or children, the default rules can send an estate to distant relatives you barely know, and there may be no obvious executor. A deliberate plan lets you choose the people, friends and causes you care about, and pick an executor who can actually do the job.

                ## Milestones
                1. The people and causes you would like to benefit listed.
                2. An executor chosen who is younger and organised, or a professional appointed.
                3. A will made reflecting those choices.
                4. Nominations and powers of attorney in line with the will.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed will names your chosen beneficiaries and an executor, with nominations and attorneys matching."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the people and causes you want to benefit"
                - "Choose an executor who is likely to outlive you"
                - "Take your list to a will appointment"
                - "Bring nominations into line with the new will"
            - name: Updating the estate plan after a partner dies
              description: |-
                ## Purpose
                After the death of a spouse or partner, the survivor's own plan is often left as a mirror will naming someone who has gone. There may also be an unused allowance to claim on the second death. Reworking your plan once the first estate is settled protects your children and preserves those allowances.

                ## Milestones
                1. Any unused allowance from your late partner's estate recorded with evidence.
                2. Your will, executors and attorneys reviewed and replaced as needed.
                3. Nominations updated to remove your late partner.
                4. Your register and tax estimate redone for a single estate.

                ## Notes
                Keep your partner's estate papers. Claiming a transferred allowance later may need values from the first death.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new will and nominations are in place, and evidence of any transferable allowance is filed with the register."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "File your late partner's estate papers with your own register"
                - "Note any unused allowance that could pass to your estate"
                - "Book a will appointment to replace your mirror will"
                - "Remove your late partner from every nomination"
            - name: Updating your plan after marriage, divorce or separation
              description: |-
                ## Purpose
                Marriage can cancel an earlier will in some countries, while a divorce may only partly remove an ex-spouse, and separation without divorce often changes nothing at all. When one of these happens, a focused update of the will, nominations, attorneys and property ownership stops the old relationship deciding where your estate goes.

                ## Milestones
                1. The effect of the event on your existing will checked with a solicitor.
                2. A new will made or confirmed as still valid.
                3. Nominations and attorneys changed to match.
                4. Joint accounts and property ownership reviewed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "After the event, the will, nominations, attorneys and joint ownership all reflect your new circumstances."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your solicitor how the event affects your current will"
                - "Make a new will or confirm the old one still works"
                - "Change nominations and attorneys that name a former partner"
                - "Review joint accounts and the ownership of your home"
            - name: Simplifying accounts to ease estate administration
              description: |-
                ## Purpose
                An estate spread across fifteen bank accounts, old share certificates and several small investment platforms means fifteen sets of forms for executors and more fees. In later life, closing dormant accounts and bringing holdings onto fewer providers is one of the kindest things you can do for the people who will deal with it.

                ## Milestones
                1. Dormant or tiny accounts identified from the register.
                2. Each one closed or merged, with tax and charges checked first.
                3. Paper share certificates moved into an account or sold.
                4. The register updated to show the simpler structure.

                ## Notes
                Before moving any pension or investment, check exit fees and valuable guarantees. Simplifying should never cost you a benefit.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The number of accounts in the register has fallen, with each closure or merger recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark every account with a balance under a set amount in the register"
                - "Close one dormant bank account and move the balance"
                - "Find any paper share certificates and decide what to do with them"
                - "Close one more small account you no longer need @recurring(yearly)"
            - name: Provision for a disabled or vulnerable beneficiary
              description: |-
                ## Purpose
                A direct inheritance can cost a disabled beneficiary their state support or leave someone vulnerable open to pressure. Families in this position usually need specialist drafting, so this project gathers what the solicitor needs to know about the person's support, care and capacity, and records the arrangement chosen.

                ## Milestones
                1. The beneficiary's benefits, care and decision-making capacity summarised.
                2. A specialist solicitor consulted on suitable arrangements.
                3. An arrangement chosen and written into the will.
                4. Trusted people named to look after the beneficiary's interests.

                ## Notes
                Ask about the effect on means-tested support before anything is left directly. The right structure differs by country.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A specialist solicitor has advised and the will reflects an arrangement that protects the beneficiary's support."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a summary of the beneficiary's support, care and capacity"
                - "Find a solicitor with experience of vulnerable beneficiaries"
                - "Ask how an inheritance would affect their state support"
                - "Name the people who will look after their interests"
            - name: Business or farm reliefs on a family enterprise
              description: |-
                ## Purpose
                Shares in a trading company, a partnership interest or farmland can qualify for substantial relief from estate tax in some countries, but only if conditions on ownership period, trading activity and use are met at the date of death. Checking whether your holdings qualify, and what could break it, protects what may be the most valuable part of the estate.

                ## Milestones
                1. Each business or farm asset listed with ownership dates and how it is used.
                2. The relief conditions where you live summarised.
                3. Risks such as excess cash or investment activity identified with an accountant.
                4. Will wording checked so relief is not wasted on the exempt spouse.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note with your accountant's view shows whether each business or farm asset is likely to qualify for relief."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each business or farm asset with ownership dates"
                - "Summarise the relief conditions from official guidance"
                - "Ask your accountant whether any activity could break the relief"
                - "Ask your solicitor whether your will makes the best use of relief"
            - name: Estates with assets in more than one country
              description: |-
                ## Purpose
                Property abroad, or a life lived in several countries, can expose an estate to two tax systems, different inheritance rules and probate in each place. Knowing your residence or domicile position, which rules apply to each asset and whether separate wills are needed avoids double tax and wills that cancel each other.

                ## Milestones
                1. Assets listed by country with their value and legal owner.
                2. Your residence or domicile position for estate tax noted.
                3. Any tax treaty or relief for double taxation checked.
                4. A decision made, with advice, on one will or separate wills per country.

                ## Notes
                A second will made abroad can revoke the first by accident. Make sure each will says which assets it covers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each foreign asset has a recorded tax and probate route, and a decision on one or several wills is made with advice."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Group the register by the country each asset sits in"
                - "Note where you are resident or domiciled for estate tax"
                - "Ask a cross-border specialist about double taxation relief"
                - "Confirm each will states which assets it covers"
            - name: Deed of variation after receiving an inheritance
              description: |-
                ## Purpose
                Some countries let beneficiaries redirect what they inherit within a set period after the death, as if the person who died had left it that way. Used well it can pass money down a generation, fix a will that missed someone or reduce tax. It must be done within the deadline and with advice, so it needs a quick decision.

                ## Milestones
                1. The deadline for a variation where you live confirmed.
                2. The effect of redirecting all or part of the inheritance worked out.
                3. Advice taken on tax and on the others affected.
                4. A decision recorded and, if going ahead, the deed signed before the deadline.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on varying an inheritance is made before the legal deadline, with any deed signed in time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the date of death and the variation deadline"
                - "Work out who would receive the share if you redirected it"
                - "Ask a solicitor about the tax effect for everyone involved"
                - "Record your decision and sign any deed before the deadline"
---

# Estate Planning & Inheritance Tax

This area covers how your money, home and belongings pass on when you die, and how to keep the tax bill and the paperwork from landing on your family at the worst possible moment. It is written for anyone with something to leave and for retirees whose estate is at its largest, and it runs from foundations (an estate register, your current will, a first tax estimate, nominations, executors and guardians) through the documents themselves, the routines that keep them current, the knowledge behind allowances and probate, the decisions on life cover, ownership and the family home, the work of acting as an executor, and situations such as blended families, unmarried partners and estates spread across countries.

What repeats is a monthly update of the estate register, a quarterly look for life events that should change the will, and a yearly round of tax estimate, nominations, valuations, executor pack and a check with your solicitor. The Vendor, Meeting notes, Metrics log, Purchase decision and Operational checklist templates pair with the projects that name them. Everything here is organisational: the legal and tax conclusions belong to a qualified solicitor or tax adviser where you live. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
