---
id: agriculture.farm-incentives-and-grants
name: Farm Incentives and Grants
description: "Government farm incentives claimed in full and on time: registration kept current, eligible items checked before you buy, clean receipts and photos, inspections passed and rebates followed until the money lands."
category: business
version: 1.0.0
tags: [agriculture, farm-incentives-and-grants, small-business, farm-incentives, agricultural-grants, rebates, farmer-registration, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - vendor
    - compliance-control
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Farm Incentives and Grants
          description: "Applying for government farm incentives and grants: eligible items, farmer registration, paperwork, inspections and claiming rebates on time."
          projects:
            - name: Farmer registration card brought up to date
              description: |-
                ## Purpose
                Almost every incentive, rebate and relief payment asks for a valid farmer registration number first, and an expired card is the most common reason a good claim is turned away at the counter. Getting registered, or renewing, before you need it means the next scheme that opens finds you ready.

                ## Milestones
                1. The current registration requirements and office hours confirmed with the Ministry or registration unit.
                2. Every document they ask for gathered in one envelope or folder.
                3. A registration card or certificate held that shows today's farm, crops and animals correctly.
                4. The card number and expiry date written on the inside cover of your incentive folder.

                ## Notes
                Registration often depends on an officer seeing the farm. Ask when visits are scheduled so the card is not delayed for weeks.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A valid farmer registration card is held, with its number and expiry date recorded in the incentive folder."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Call the registration unit and ask what documents a new or renewing farmer needs"
                - "Check whether your current card shows the right acreage, crops and animals"
                - "Book or confirm the officer's verification visit to the farm"
                - "Collect the card and photograph both sides for your records"
            - name: Map of incentive schemes that fit your farm
              description: |-
                ## Purpose
                Ministries, development banks and regional programmes each run their own schemes, and most farmers only hear about the one a neighbour mentioned. A single page listing every scheme that could apply to your crops, animals and plans, with what it pays for and how to claim, turns rumour into a plan.

                ## Milestones
                1. The current incentive list obtained from the Ministry website, office or extension officer.
                2. Each scheme recorded with eligible items, the rate or cap, and how claims are made.
                3. Schemes that do not fit your farm crossed out with the reason noted.
                4. A short list of three to six schemes worth pursuing in the next year.

                ## Notes
                Rates and caps change with each national budget. Record the date you checked beside every figure so you know when it may be stale.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page map of applicable schemes with eligible items, caps and claim method for each, and a short list marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the Ministry office for the printed or online list of current farm incentives"
                - "Write one line per scheme with what it pays for and the claim route"
                - "Cross out schemes that do not match your crops, animals or farm size"
                - "Mark the three to six schemes you will pursue this year"
            - name: Proof of occupation pack for incentive claims
              description: |-
                ## Purpose
                Incentive officers usually want to see that you have the right to farm the land you are claiming for: a lease, a deed, a tenancy letter or a letter from the landowner. Having certified copies ready, and knowing which ones each scheme accepts, stops claims stalling while you chase a relative or a land office.

                ## Milestones
                1. Each scheme's accepted proof of occupation listed.
                2. Certified copies made of the documents you already hold.
                3. Gaps identified, such as an expired lease or an unsigned family letter, with a plan to fill each.
                4. The pack filed in the incentive folder with an expiry date for anything time limited.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Certified copies of accepted occupation documents are in the incentive folder, with any expiry dates noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List which occupation documents each shortlisted scheme accepts"
                - "Get certified copies of your lease, deed or tenancy letter"
                - "Ask the landowner or family member to sign a dated letter if that is what you hold"
                - "Note any lease expiry date that falls within the next two years"
            - name: Tax clearance and business papers for claims
              description: |-
                ## Purpose
                Many schemes will not pay a farmer who owes tax or whose business registration has lapsed, and a tax clearance or compliance certificate can take weeks to issue. Starting this before the claim window opens is the difference between being paid this year and next.

                ## Milestones
                1. The tax, business registration and social security papers each scheme requires listed.
                2. Any outstanding returns or arrears identified with your accountant or the tax authority.
                3. A current tax compliance certificate, or a dated application for one, held.
                4. Expiry dates for each certificate entered in the deadline calendar.

                ## Notes
                This is paperwork, not tax advice. Your accountant or the tax authority decides what is owed.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A current tax compliance certificate and business registration are filed, with both expiry dates in the calendar."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the incentive office which tax and registration papers a claim needs"
                - "Check with your accountant whether any returns are outstanding"
                - "Apply for a tax compliance certificate at the tax authority"
                - "Enter each certificate's expiry date in the deadline calendar"
            - name: Bank details and payment mandate for rebates
              description: |-
                ## Purpose
                Rebates paid by cheque get lost and payments sent to a closed account bounce back into a queue for months. Giving the incentive office a current farm account, in the same name as your registration, means the money arrives without another trip to town.

                ## Milestones
                1. A bank account in the exact name on your farmer registration confirmed.
                2. The office's direct payment form completed with a bank letter or void cheque.
                3. Written confirmation that your payment details are on file.
                4. A yearly reminder set to check the details are still correct.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The incentive office has confirmed in writing that your current farm account is on file for payments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the name on your bank account with the name on your registration card"
                - "Ask your bank for a letter confirming the account details"
                - "Hand in the direct payment form and ask for a stamped copy"
                - "Confirm the account on file is still open and correct @recurring(yearly)"
            - name: Incentive folder with every claim document
              description: |-
                ## Purpose
                A claim is only as strong as the papers behind it, and those papers tend to live in the truck, the kitchen drawer and three phones. One labelled folder, paper and scanned, with a section per scheme and per claim, makes every application quicker and every query easy to answer.

                ## Milestones
                1. A paper folder with sections for registration, land, tax, bank, and one per scheme.
                2. A matching scanned folder on your phone or computer with the same section names.
                3. Every document from the foundation projects filed in both.
                4. A backup copy kept somewhere other than the farm.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Paper and scanned incentive folders exist with matching sections, every current document filed and a backup off the farm."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Buy a ring binder with dividers and label the sections"
                - "Create the same folder names on your phone or computer"
                - "Scan or photograph every registration, land, tax and bank document"
                - "Copy the scanned folder to a backup drive or cloud account @recurring(quarterly)"
            - name: Receipt standard for claimable purchases
              description: |-
                ## Purpose
                Rebate officers reject handwritten chits, receipts without the supplier's details and invoices made out to someone else. Knowing exactly what a claimable receipt must show, and asking for it at the till, saves arguing about it months later.

                ## Milestones
                1. The office's receipt requirements written down, such as supplier name, address, tax number, item description and your name.
                2. A short card in the wallet or truck listing what to ask the supplier for.
                3. Every past receipt for a planned claim checked against the standard.
                4. Replacement invoices requested for any that fall short.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written receipt standard is in the truck or wallet, and all receipts for planned claims meet it or have replacements requested."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the incentive office what a receipt must show to be accepted"
                - "Write the list on a card and keep it where you buy supplies"
                - "Check the receipts you already hold against the list"
                - "Ask suppliers to reissue any receipt missing your name or their details"
            - name: Farm sketch map and plot register for inspectors
              description: |-
                ## Purpose
                Inspectors arrive needing to find the water tank, the new pen or the acre of replanted cocoa you claimed for, and a vague answer slows the visit or raises doubts. A simple sketch map with numbered plots and structures, and a register of what is in each, lets any officer verify a claim in minutes.

                ## Milestones
                1. A sketch of the farm boundaries, access road, buildings and water points.
                2. Every plot and structure numbered on the map.
                3. A register listing each plot's area, crop or use, and any incentive claimed on it.
                4. Copies of the map kept in the incentive folder and in the truck.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbered farm sketch map and plot register exist, with copies in the incentive folder and on the farm."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk the boundary and sketch the farm with roads, buildings and water points"
                - "Number every plot and structure on the sketch"
                - "Write a register with each plot's size, use and any incentive claimed"
                - "Put copies in the incentive folder and the truck glovebox"
            - name: Check eligibility before buying anything
              description: |-
                ## Purpose
                Some schemes only pay for items bought after written approval, from approved suppliers, or to a stated specification, and farmers who buy first and ask later often lose the whole rebate. A personal rule and a two-minute checklist before any farm purchase over a set amount protects money you were entitled to.

                ## Milestones
                1. A purchase threshold set above which you always check incentives first.
                2. A short checklist covering approval, supplier, specification and timing rules.
                3. The checklist used on the next three farm purchases above the threshold.
                4. Any item that needed pre-approval flagged in the scheme map.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written pre-purchase eligibility checklist exists and was used on the last three purchases above your threshold."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the purchase amount above which you check incentives first"
                - "Write the four checks: approval, supplier, specification and timing"
                - "Run the checklist before your next input or equipment order"
                - "Mark in the scheme map which items need approval before purchase"
            - name: Incentive deadline calendar
              description: |-
                ## Purpose
                Claim windows, registration expiries, inspection requests and budget year ends all fall on different dates, and a missed closing date usually means waiting a full year. One calendar holding every incentive date, checked monthly, is the cheapest insurance in this area.

                ## Milestones
                1. Every known closing date, expiry and reporting date entered with a reminder two weeks before.
                2. The government's financial year end noted, since many schemes close before it.
                3. A monthly check of the calendar in place.
                4. No date missed over a full year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar holds every incentive date with two-week reminders, and a full year passes with no missed closing date."
                cadence: rolling
              tasks:
                - "Enter every closing date and certificate expiry you know of today"
                - "Add a reminder two weeks before each date"
                - "Check the incentive calendar for the coming six weeks @recurring(monthly:3)"
                - "Confirm next year's claim windows with the incentive office @recurring(yearly)"
            - name: Monthly receipt filing day
              description: |-
                ## Purpose
                Receipts fade, get wet and vanish if they sit in a pocket until claim season. A fixed monthly session to scan, label and file every claimable receipt keeps the evidence intact and turns the annual claim into a matter of adding up.

                ## Milestones
                1. One day each month set for filing receipts.
                2. Each receipt scanned, named by date, supplier and scheme, and filed.
                3. A running total kept for each scheme you plan to claim.
                4. Three months in a row filed with nothing left loose.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of claimable receipts are scanned, filed by scheme and totalled, with none loose."
                cadence: rolling
              tasks:
                - "Empty the truck, wallet and drawers of receipts into one tray"
                - "Scan, label and file the month's claimable receipts @recurring(monthly:26)"
                - "Update the running total for each scheme"
                - "Throw nothing away until the claim for it has been paid"
            - name: Claim status tracker
              description: |-
                ## Purpose
                Once a claim is lodged it can sit for months between the field officer, the accounts unit and the treasury, and nobody tells the farmer where it is. A simple tracker with the reference number, date lodged and every status update means you can chase the right desk with facts.

                ## Milestones
                1. Every open claim listed with scheme, reference number, amount and date lodged.
                2. Each status change and the name of the person who gave it recorded.
                3. Claims older than the office's stated processing time flagged for follow-up.
                4. Closed claims marked paid with the date and amount received.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open claim has a reference number, current status and next follow-up date, and paid claims show the amount received."
                cadence: rolling
              tasks:
                - "List every open claim with its reference number and date lodged"
                - "Ask the office how long each scheme normally takes to pay"
                - "Phone or visit about any claim past its processing time @recurring(weekly:thu)"
                - "Mark claims paid with the date and amount that reached the bank"
            - name: Quarterly scan for new schemes
              description: |-
                ## Purpose
                New incentives appear in budget speeches, after disasters and when donors fund programmes, and the first applicants often get the money before the allocation runs out. A short quarterly check of the usual sources keeps your scheme map current.

                ## Milestones
                1. A list of sources to check: Ministry notices, the development bank, farmer groups, extension officers and regional programmes.
                2. A quarterly check in place, with findings added to the scheme map.
                3. The yearly budget announcement read for agriculture measures.
                4. At least one new or changed scheme acted on within a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The scheme map shows a dated quarterly update and the budget's agriculture measures for the current year."
                cadence: rolling
              tasks:
                - "Write the list of places new incentives are announced"
                - "Check each source and update the scheme map @recurring(quarterly)"
                - "Read the agriculture section of the national budget when it is presented @recurring(yearly)"
                - "Ask your farmer group what schemes members have heard about"
            - name: Yearly registration and certificate renewal
              description: |-
                ## Purpose
                Farmer cards, tax certificates, business registrations and leases all expire on their own schedules, and one lapsed paper can block every claim at once. A fixed yearly renewal round, done well before claim season, keeps the whole set valid.

                ## Milestones
                1. Every document with an expiry date listed in one table.
                2. A renewal month chosen that falls before the main claim windows.
                3. Every renewal lodged in that month, with receipts kept.
                4. The table updated with the new expiry dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All registration and certificate documents are valid at the start of claim season, with new expiry dates recorded."
                cadence: cyclic
              tasks:
                - "List every document with its expiry date in one table"
                - "Choose a renewal month ahead of the main claim windows"
                - "Lodge all renewals in that month @recurring(yearly)"
                - "Write the new expiry dates into the table and calendar"
            - name: Photo evidence routine for funded works
              description: |-
                ## Purpose
                Inspectors and auditors often ask what the site looked like before the tank, fence or drain was built, and that moment cannot be photographed afterwards. Taking dated before, during and after photos from the same spot for every funded job is quick and settles most queries.

                ## Milestones
                1. A fixed photo point marked for each planned piece of funded work.
                2. Before photos taken with the date visible or recorded.
                3. Progress and finished photos taken from the same point.
                4. All photos filed under the claim they support.

                ## Notes
                Include something for scale, such as a person or a measuring tape, and turn on location tagging if your phone allows it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every funded job in the past year has dated before, during and after photos from a fixed point, filed under its claim."
                cadence: rolling
              tasks:
                - "Pick and mark a photo point for each planned funded job"
                - "Take before photos with something for scale in the frame"
                - "Photograph progress at each stage from the same point"
                - "File the photos in the scanned folder under the claim number"
            - name: Correspondence log with the incentive office
              description: |-
                ## Purpose
                When an officer says a document is fine on the phone and a different officer rejects it later, the farmer with a dated note of who said what usually wins the argument. A plain log of every call, visit, letter and message about incentives keeps that record.

                ## Milestones
                1. A log started with date, person, office, topic and what was agreed.
                2. Every past contact you can remember added with approximate dates.
                3. A monthly tidy of the log with any promised actions carried forward.
                4. Copies of letters and emails filed beside the log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A correspondence log covers every incentive contact in the past six months, with names, dates and agreed actions."
                cadence: rolling
              tasks:
                - "Start a log with columns for date, person, office, topic and outcome"
                - "Add every call or visit about incentives straight after it happens"
                - "Review the log and carry forward any promised actions @recurring(monthly:9)"
                - "Ask for important verbal answers to be confirmed in writing"
            - name: Rebate payments matched to the bank
              description: |-
                ## Purpose
                Rebates sometimes arrive short, in batches covering several claims, or with a reference number that means nothing to your bank. Matching each payment to its claim every month shows what is still owed and catches errors while the officer still remembers the file.

                ## Milestones
                1. Each incentive payment on the bank statement matched to a claim.
                2. Any shortfall against the approved amount recorded with the reason given.
                3. Unexplained payments queried with the incentive office.
                4. A year-to-date total of incentive income kept for your accountant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every incentive payment this year is matched to a claim, with shortfalls explained and a year-to-date total recorded."
                cadence: rolling
              tasks:
                - "Match the month's incentive payments to claims in the tracker @recurring(monthly:20)"
                - "Write down any payment that is less than the approved amount"
                - "Ask the office for a remittance breakdown for any batch payment"
                - "Keep a year-to-date incentive income total for your accountant"
            - name: Yearly review of incentives claimed
              description: |-
                ## Purpose
                Most farms leave money unclaimed every year, through missed windows, weak receipts or schemes they never tried. An honest yearly comparison of what was available, what was claimed and what was paid shows where next year's effort should go.

                ## Milestones
                1. A table of each scheme with amounts available, claimed and received for the year.
                2. Reasons recorded for every claim refused, reduced or never made.
                3. Two or three changes chosen for next year.
                4. Next year's shortlist of schemes updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly table of available, claimed and received incentives exists, with reasons for gaps and two or three changes chosen."
                cadence: cyclic
              tasks:
                - "Total what each scheme could have paid the farm this year"
                - "Set it beside what you claimed and what arrived"
                - "Write the reason for each gap in one line"
                - "Hold the review and choose next year's changes @recurring(yearly)"
            - name: Reading an incentive programme's guidelines
              description: |-
                ## Purpose
                Programme guidelines are written by administrators and bury the rules that matter, such as approval before purchase, minimum acreage or a cap per farmer, in the middle of long paragraphs. Learning to read them for eligibility, evidence, timing and conditions saves rejected claims and wasted trips.

                ## Milestones
                1. The full guidelines for one scheme you plan to use obtained.
                2. Eligibility, eligible items, evidence, timing and conditions underlined in different colours.
                3. A half-page summary written in your own words.
                4. Any unclear rule asked about and the answer recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page plain-language summary of one scheme's guidelines exists, with unclear rules answered by the office."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get the full written guidelines, not the flyer, for one scheme"
                - "Underline eligibility, items, evidence, timing and conditions"
                - "Ask the agent to draft a half-page summary from your underlined notes"
                - "Take your unclear questions to the incentive office"
            - name: How incentive inspections work
              description: |-
                ## Purpose
                Inspections usually happen at two points: before approval, to confirm the farm and the need, and after the work, to confirm it was done as claimed. Knowing what officers check, how long visits take and what they write in the report removes most of the anxiety and most of the delays.

                ## Milestones
                1. The inspection stages for each shortlisted scheme written down.
                2. A list of what officers usually check, from an officer or an experienced farmer.
                3. A copy of a blank inspection form or report seen.
                4. Your own pre-visit checklist drafted from what you learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of the inspection stages and checks for each shortlisted scheme, and a draft pre-visit checklist."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask an extension or incentive officer what an inspection covers"
                - "Talk to a farmer who has passed an inspection recently"
                - "Ask to see a blank inspection report form"
                - "Draft your own pre-visit checklist from the answers"
            - name: Approved supplier and quotation rules
              description: |-
                ## Purpose
                Some schemes only refund purchases from registered or approved suppliers, or want two or three competing quotations before a large item is approved. Learning these rules before shopping means the cheapest quote is also the one that qualifies.

                ## Milestones
                1. Each scheme's supplier and quotation rules written down.
                2. The current approved supplier list obtained where one exists.
                3. Contacts for at least three qualifying suppliers for your common items.
                4. A note of what a valid quotation must show.

                ## Notes
                Start from the **Vendor** template for each supplier you use regularly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Supplier and quotation rules are recorded for each shortlisted scheme, with three qualifying suppliers listed for common items."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask whether each scheme uses an approved supplier list"
                - "Get the list and highlight suppliers within reach of the farm"
                - "Note what a quotation must show to be accepted"
                - "Check the supplier list is still current @recurring(yearly)"
            - name: Writing a short proposal for a competitive grant
              description: |-
                ## Purpose
                Competitive grants, unlike automatic rebates, are scored against other applicants, and a clear problem, a costed plan and a measurable result usually beat a long story. Practising a two-page proposal on your own farm idea builds the skill before a real call opens.

                ## Milestones
                1. The scoring criteria from a recent or current call collected.
                2. A two-page practice proposal covering the problem, plan, budget and results.
                3. The draft read by an extension officer or experienced applicant.
                4. A revised version kept as your starting point for real calls.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A two-page practice proposal, reviewed by someone experienced and revised, is filed ready for the next grant call."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the scoring criteria from a recent farm grant call"
                - "Write one paragraph on the problem your farm faces"
                - "Draft the plan, budget and expected results on two pages"
                - "Ask an extension officer to read it and mark the weak parts"
            - name: Budget tables for grant applications
              description: |-
                ## Purpose
                Grant budgets are checked line by line, and a total that does not add up, or a line with no quotation behind it, can sink an otherwise good application. Learning the usual layout of items, quantities, unit costs, your contribution and the amount requested makes every later budget quicker and more credible.

                ## Milestones
                1. A sample budget layout from a past call or guideline obtained.
                2. A practice budget built for one real farm investment.
                3. Every line backed by a quotation or price list.
                4. The totals checked by someone else.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A practice grant budget for one real investment exists, every line backed by a quotation and the totals checked by a second person."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Copy the budget layout from a past grant call"
                - "List the items, quantities and unit costs for one investment"
                - "Attach a quotation or price list to each line"
                - "Ask someone to check the arithmetic and the contribution split"
            - name: Tax treatment of incentive income with your accountant
              description: |-
                ## Purpose
                Rebates and grants may count as income, reduce the cost of an asset for tax purposes or be exempt, depending on the country and the scheme. Asking your accountant once, with a list of what you received, avoids an unwelcome surprise at filing time.

                ## Milestones
                1. A list of incentive payments received in the year, with what each was for.
                2. Your accountant's advice on how each is treated, recorded in writing.
                3. Your bookkeeping categories set up to match.
                4. A yearly reminder to send the list before the tax return.

                ## Notes
                Treatment varies by country and scheme. Rely on your accountant or the tax authority, not on what a neighbour did.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your accountant's written view on how each incentive is treated for tax is filed, and the books use matching categories."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List every incentive payment with the item or work it paid for"
                - "Send the list to your accountant with the scheme names"
                - "Set up bookkeeping categories that match their advice"
                - "Send the year's incentive list to your accountant before the return @recurring(yearly)"
            - name: Choosing which incentives to pursue this year
              description: |-
                ## Purpose
                Every claim costs time in paperwork, visits and follow-up, and a small farm cannot chase every scheme at once. Ranking the options by money available, fit with the farm plan and effort required gives you two or three to pursue properly instead of six done badly.

                ## Milestones
                1. Each shortlisted scheme scored on value, fit with the farm plan and effort.
                2. Up-front cash needs checked against the farm's cash flow.
                3. Two or three schemes chosen, with the reasons written down.
                4. The chosen schemes' dates added to the calendar.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three schemes are chosen for the year with written reasons, and their dates are in the incentive calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Score each shortlisted scheme on value, fit and effort out of five"
                - "Check you can carry the up-front cost until each rebate pays"
                - "Choose two or three and write one line on why"
                - "Add the chosen schemes' windows to the deadline calendar"
            - name: Three quotations for an incentive-backed purchase
              description: |-
                ## Purpose
                When a scheme pays part of a water tank, a shade house or a pump, the officer needs to see that the price was fair and the item meets the specification. Collecting three comparable quotations from qualifying suppliers protects the claim and usually lowers your share of the cost too.

                ## Milestones
                1. The item specification written from the scheme guidelines.
                2. Three quotations from qualifying suppliers for the same specification.
                3. The quotations compared on price, delivery, warranty and eligibility.
                4. A supplier chosen and the reason recorded for the file.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three comparable quotations from qualifying suppliers are filed, with the chosen one and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the item specification the scheme requires"
                - "Request quotations from three qualifying suppliers"
                - "Compare price, delivery time, warranty and eligibility side by side"
                - "Record the chosen supplier and the reason in the claim file"
            - name: Matching a planned investment to an incentive
              description: |-
                ## Purpose
                Farmers often plan an irrigation line, a pen or a cold room first and look for help afterwards, when the rules may no longer fit. Starting from next year's planned investments and checking each against the scheme map can change the timing, size or specification so the incentive applies.

                ## Milestones
                1. The farm's planned investments for the next 12 months listed with rough costs.
                2. Each one checked against the scheme map for a matching incentive.
                3. Timing or specification adjusted where that makes an item eligible.
                4. The likely incentive amount added to each investment's cost estimate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each planned investment for the next year shows whether an incentive applies, any change made to qualify and the expected amount."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List next year's planned farm investments with rough costs"
                - "Check each against the scheme map for a matching incentive"
                - "Note any change in timing or specification needed to qualify"
                - "Subtract the likely incentive from each cost estimate"
            - name: Fixing and resubmitting a rejected claim
              description: |-
                ## Purpose
                Most rejected claims fail on paperwork, not merit: a missing receipt, a wrong name, a photo that does not show the work. Getting the reason in writing and fixing exactly that point, inside any resubmission window, recovers money that would otherwise be written off.

                ## Milestones
                1. The rejection reason obtained in writing.
                2. The resubmission deadline, if any, entered in the calendar.
                3. The missing or faulty evidence replaced.
                4. The claim resubmitted with a covering note addressing the reason.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A rejected claim is resubmitted within its window with the stated reason fixed and a covering note filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the office for the rejection reason in writing"
                - "Find out whether and by when the claim can be resubmitted"
                - "Replace the missing receipt, signature or photo"
                - "Resubmit with a short note explaining what was corrected"
            - name: Appealing a refused application
              description: |-
                ## Purpose
                Occasionally an application is refused on a reading of the rules you believe is wrong, such as a crop excluded that the guidelines include. A calm, documented appeal to the right level, citing the guideline clause, is more effective than repeated visits to the same counter.

                ## Milestones
                1. The refusal and the guideline clause you rely on set side by side.
                2. The appeal route and any time limit confirmed.
                3. A one-page appeal letter sent with copies of the evidence.
                4. The outcome recorded and, if lost, the lesson noted for next year.

                ## Notes
                Keep the tone factual. Officers who feel blamed rarely help; officers shown a clear clause often do.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page appeal citing the guideline clause is lodged within the time limit and its outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put the refusal letter beside the guideline clause you rely on"
                - "Ask who hears appeals and whether there is a time limit"
                - "Write and send a one-page appeal with copies of the evidence"
                - "Record the outcome in the correspondence log"
            - name: Combining incentives without double claiming
              description: |-
                ## Purpose
                One item could qualify under a Ministry rebate, a development bank programme and a donor project at once, and claiming the same cost twice can mean repayment and a ban. Knowing which schemes can be combined, and on what share of the cost, lets you use more than one honestly.

                ## Milestones
                1. Items that appear in more than one scheme identified.
                2. Each scheme's rule on combining support confirmed in writing.
                3. A cost split recorded showing which scheme pays which share.
                4. Every claim form declaring the other support received.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For each item with more than one possible scheme, a written combining rule and cost split are filed and declared on the claims."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark items in the scheme map that appear in more than one scheme"
                - "Ask each scheme in writing whether support can be combined"
                - "Write the cost split for each combined item"
                - "Declare the other support on every claim form"
            - name: Preparing for the pre-approval inspection
              description: |-
                ## Purpose
                For schemes that approve before you spend, the first visit decides whether the project goes ahead, and officers often have a full list of farms to see that week. Being ready with the map, the documents, the quotations and a clear account of what you plan saves a second visit and weeks of delay.

                ## Milestones
                1. The visit date confirmed and someone available to meet the officer.
                2. The site cleared so the planned work area is visible.
                3. The folder ready with registration, land, quotations and the sketch map.
                4. The officer's findings and any conditions written down before they leave.

                ## Notes
                Start from the **Operational checklist** template for the pre-visit list.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pre-approval inspection is completed in one visit, with the officer's findings and conditions recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the inspection date and who will meet the officer"
                - "Clear and mark the area where the funded work will go"
                - "Put registration, land papers, quotations and the map in one folder"
                - "Write down the officer's findings and conditions before they leave"
            - name: Post-works verification inspection
              description: |-
                ## Purpose
                Payment usually waits on an officer confirming the work matches what was approved, and small differences, such as a smaller tank or a different fence post, can hold up the whole claim. Checking your finished work against the approval before you request the visit avoids surprises.

                ## Milestones
                1. The finished work checked against the approved specification and quantities.
                2. Before, during and after photos and all receipts filed.
                3. The verification visit requested in writing.
                4. The officer's sign-off or list of issues recorded.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The verification inspection is passed or its issues listed in writing, with all photos and receipts on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Measure the finished work against the approved specification"
                - "Gather the photos and receipts for the claim"
                - "Request the verification visit in writing"
                - "Record the officer's sign-off or list of issues"
            - name: Annual rebate claim lodged before closing
              description: |-
                ## Purpose
                Many input and equipment rebates are claimed once a year in a fixed window, often closing before the government's financial year end, and late claims are simply not processed. Lodging a complete claim two weeks early leaves time to fix anything the counter clerk spots.

                ## Milestones
                1. Every receipt for the claim year totalled by scheme.
                2. Claim forms completed and signed, with copies made.
                3. The claim lodged at least two weeks before the closing date.
                4. A stamped receipt or reference number held for each claim.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The annual rebate claim is lodged at least two weeks before closing, with a stamped receipt or reference number filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total the year's receipts for each rebate scheme"
                - "Complete and sign the claim forms and copy them"
                - "Lodge the claims two weeks before the closing date"
                - "File the stamped receipt and add the reference to the claim tracker"
            - name: Applying in a competitive grant call
              description: |-
                ## Purpose
                When a grant call opens, the window is often four to eight weeks and the forms are longer than any rebate. Treating it as a small project with a timetable, a budget backed by quotations and a reviewer before submission gives the farm a fair chance against better-resourced applicants.

                ## Milestones
                1. The call documents, scoring criteria and closing date read and summarised.
                2. A timetable working back from the closing date.
                3. A proposal and budget drafted from your practice versions.
                4. The application submitted before the deadline with proof of submission.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete grant application is submitted before the closing date, with proof of submission filed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the call documents and write down the closing date"
                - "Plan a timetable working back from the deadline"
                - "Adapt your practice proposal and budget to the call"
                - "Submit the application and save the confirmation"
            - name: Registering for relief after a hurricane or flood
              description: |-
                ## Purpose
                After a storm or flood, governments often offer relief such as cash, seed, planting material or feed, but only to registered farmers who report damage within a short window. Registering fast, with photos and a damage list, puts the farm in the first round of support.

                ## Milestones
                1. The relief registration process and deadline confirmed after the event.
                2. Damage photographed and listed by plot, crop, animal and structure.
                3. The damage report lodged with registration and land papers.
                4. The relief received recorded against the losses.

                ## Notes
                Keep your before photos and plot register current during the season. Relief officers compare damage with what was there.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A damage report with photos and a plot list is lodged within the relief window, and support received is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find out where and by when farm damage must be reported"
                - "Photograph damage plot by plot with the date recorded"
                - "List lost crops, animals and structures against the plot register"
                - "Lodge the report and record the reference number"
            - name: Grant agreement signing and conditions
              description: |-
                ## Purpose
                A grant award comes with an agreement listing what you must deliver, report and keep, sometimes for years, and breaking a condition can mean repaying the grant. Reading the agreement carefully before signing, and turning its conditions into a checklist, protects the award.

                ## Milestones
                1. The agreement read in full with every obligation underlined.
                2. Unclear terms asked about and answered in writing.
                3. A conditions checklist with dates for reports, milestones and asset retention.
                4. The signed agreement filed and all its dates added to the calendar.

                ## Notes
                Start from the **Compliance control** template. If the agreement has legal terms you do not understand, ask a lawyer or the farmers' organisation before signing.
              priority: high
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "The signed grant agreement is filed with a conditions checklist and every reporting date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the agreement and underline every obligation and date"
                - "Send your questions on unclear terms to the grant officer"
                - "Turn the obligations into a dated conditions checklist"
                - "Add every reporting and retention date to the calendar"
            - name: First-time farmer's route to incentives
              description: |-
                ## Purpose
                A new farmer often has no registration, no receipts history and no land papers in their own name, and the incentive system can feel closed. Taking the steps in the right order, registration, land evidence, then one simple scheme, builds a record that makes later claims straightforward.

                ## Milestones
                1. Registration lodged within the first months of farming.
                2. Land evidence secured in your own name or with a signed letter.
                3. One simple scheme, such as an input rebate or seedling programme, claimed successfully.
                4. The lessons from that first claim written down for the next one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new farmer is registered, holds land evidence and has one successful claim on file with lessons recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the registration unit how long a new farmer must farm before registering"
                - "Get a signed land letter if the land is not in your name"
                - "Pick the simplest scheme you qualify for and claim it"
                - "Write down what slowed the first claim and how to avoid it"
            - name: Young farmer programmes and grants
              description: |-
                ## Purpose
                Many governments and regional bodies run programmes for farmers under a stated age, with start-up grants, land access or training stipends that older farmers cannot get. A young farmer who finds these early, and meets their training or business plan conditions, gets a far larger start.

                ## Milestones
                1. Youth agriculture programmes and their age limits listed.
                2. Conditions such as training, a business plan or a mentor recorded.
                3. One application prepared and lodged.
                4. Any training condition completed and its certificate filed.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One youth agriculture programme application is lodged, with any training condition completed and certified."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the Ministry and your farmer group which youth schemes are open"
                - "Note the age limit and conditions of each"
                - "Prepare and lodge one application"
                - "Complete the required training and file the certificate"
            - name: Women farmers and targeted support
              description: |-
                ## Purpose
                Some schemes reserve funds or set lower contributions for women farmers, often run with rural women's networks or donor projects, yet they are under-claimed because the land or registration is in a husband's or father's name. Getting your own registration and finding these schemes opens support meant for you.

                ## Milestones
                1. Your farmer registration held in your own name.
                2. Schemes with funds or terms for women farmers listed.
                3. Contact made with a rural women's network or group.
                4. One application lodged under a targeted scheme.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "You hold registration in your own name and have lodged one application under a scheme targeted at women farmers."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check whose name is on the farm's registration and land papers"
                - "Ask about schemes with funds or terms for women farmers"
                - "Contact a rural women's network in your district"
                - "Lodge one application under a targeted scheme"
            - name: Part-time grower deciding what is worth claiming
              description: |-
                ## Purpose
                With a day job and a backyard plot, a part-time grower has little time for counters and visits, and some schemes have minimum acreage or income rules anyway. Working out the one or two schemes that pay enough for the effort keeps incentives useful instead of exhausting.

                ## Milestones
                1. Minimum size or income rules checked for each scheme.
                2. The hours each claim needs estimated, including visits.
                3. One or two schemes chosen where the payment justifies the time.
                4. Visits and filing planned around your work hours.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One or two schemes are chosen with their minimum rules checked and the claim hours planned around your job."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the minimum acreage or income rules for each scheme"
                - "Estimate the hours each claim needs, including visits"
                - "Choose the one or two schemes that justify the time"
                - "Ask whether inspections can be booked outside working hours"
            - name: Claiming incentives on family land without title
              description: |-
                ## Purpose
                Much Caribbean farmland is family land held by many heirs with no single title, and incentive officers still need proof you are entitled to farm it. Knowing which letters, declarations or community confirmations each scheme accepts lets you claim while any wider title question is resolved separately.

                ## Milestones
                1. Each scheme's rule on family land or untitled occupation confirmed.
                2. The accepted document, such as a statutory declaration or family letter, prepared.
                3. Signatures gathered from the family members the scheme requires.
                4. The document accepted on a claim and filed for reuse.

                ## Notes
                This project covers what the incentive office accepts. Settling title among heirs is a legal matter for a lawyer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A family land document that a scheme has accepted on a claim is filed in the incentive folder for reuse."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each scheme what it accepts for untitled family land"
                - "Prepare the declaration or family letter they name"
                - "Collect the required signatures from family members"
                - "File the accepted document with a note of which schemes took it"
            - name: Returning national's farm equipment concessions
              description: |-
                ## Purpose
                Nationals returning from abroad to farm may qualify for duty or tax concessions on tools, vehicles or equipment, but usually only if they apply before shipping or within a time limit of arriving. Sorting the paperwork early can save a large share of the cost of setting up.

                ## Milestones
                1. The returning national and farm equipment concessions in your country identified.
                2. Eligibility rules and time limits written down.
                3. Supporting documents such as proof of residence abroad and farm plans gathered.
                4. The application lodged before the equipment ships or within the stated window.

                ## Notes
                Rules differ between islands and change. Confirm with customs and the Ministry, not a shipping agent's summary.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A concession application for farm equipment is lodged within the time limit, with supporting documents filed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask customs and the Ministry which concessions a returning farmer can use"
                - "Write down the time limits and eligible items"
                - "Gather proof of residence abroad and your farm plan"
                - "Lodge the application before the equipment is shipped"
            - name: Handing over incentive records to a successor
              description: |-
                ## Purpose
                Registration numbers, open claims and grant conditions on funded assets do not transfer automatically when a farm passes to a child, a partner or a buyer, and a grant can be clawed back if a funded asset is sold early. A clear handover file keeps the farm's standing and its obligations intact.

                ## Milestones
                1. Open claims, grant conditions and asset retention periods listed.
                2. The incentive office told about the change and its transfer rules confirmed.
                3. The successor registered or added to the registration.
                4. The incentive folder and logs handed over with a walk-through.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The successor is registered, the incentive office has confirmed transfer rules and the folder has been handed over."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List open claims and any grant conditions still running"
                - "Ask the incentive office how registration and conditions transfer"
                - "Help the successor register or be added to the registration"
                - "Walk the successor through the folder, tracker and calendar"
            - name: Duty and VAT concessions on farm inputs and machinery
              description: |-
                ## Purpose
                Registered farmers in many countries can buy listed inputs, tools and machinery free of import duty or sales tax, but the exemption is applied only when the right certificate or approval is shown at purchase or import. Setting this up properly can cut costs on every large order.

                ## Milestones
                1. The concession lists for farm inputs and machinery obtained.
                2. The approval or certificate needed to use them identified.
                3. The certificate obtained and suppliers told to apply it.
                4. Savings on the first concession purchases recorded.

                ## Notes
                Using a concession for items that go to a non-farm use can bring penalties. Keep the purchase and use records together.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A concession certificate is held, suppliers apply it, and savings on the first purchases are recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the Ministry or customs for the farm concession item lists"
                - "Find out which certificate lets suppliers apply the concession"
                - "Apply for the certificate and give copies to your main suppliers"
                - "Record the duty or tax saved on the first concession orders"
            - name: Climate resilience grants for water and solar
              description: |-
                ## Purpose
                Donor and regional climate programmes increasingly fund rainwater harvesting, solar pumps and windbreaks on small farms, with longer applications and stricter reporting than Ministry rebates. A farm with good records and a costed resilience plan is well placed to win one.

                ## Milestones
                1. Current climate and resilience grant programmes open to farmers identified.
                2. A costed plan for one resilience investment drafted.
                3. Eligibility and co-financing rules checked.
                4. An application lodged or a decision recorded to wait for the next call.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One climate resilience grant is applied for with a costed plan, or a written decision to wait is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the Ministry and your farmer group about climate grant calls"
                - "Cost one resilience investment such as a tank or solar pump"
                - "Check eligibility and the co-financing you must provide"
                - "Apply or record when the next call is expected"
            - name: Group grant application through a farmer group
              description: |-
                ## Purpose
                Shared packing sheds, cold rooms and machinery are often funded through grants open only to registered groups or cooperatives. Applying as a group spreads the paperwork but needs agreed roles, a group bank account and minutes showing members approved the application.

                ## Milestones
                1. The group's legal registration and bank account confirmed as current.
                2. Members' approval recorded in minutes.
                3. Roles agreed for writing, budgeting and reporting.
                4. The group application lodged with all member documents.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A group grant application is lodged with minutes of member approval and agreed roles on file."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the group's registration and bank account are current"
                - "Put the application to a members' meeting and minute the vote"
                - "Agree who writes, who budgets and who reports"
                - "Check the group's application and reporting progress @recurring(monthly:7)"
            - name: Reporting on a multi-year grant
              description: |-
                ## Purpose
                Larger grants pay in tranches against progress reports, and a late or thin report can freeze the next payment. A reporting routine that collects photos, spending and results as you go makes each report a matter of assembly, not panic.

                ## Milestones
                1. Every report due date and its required contents listed.
                2. Spending recorded against the approved budget lines each month.
                3. Each report submitted on time with photos and receipts.
                4. Every tranche received after its report.

                ## Notes
                Start from the **Compliance control** template if you used it for the agreement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every grant report in the year is submitted on time and each following tranche is received."
                cadence: rolling
              tasks:
                - "List each report's due date and required contents"
                - "Record grant spending against budget lines @recurring(monthly:12)"
                - "Assemble and submit the progress report @recurring(quarterly)"
                - "Confirm each tranche arrives after its report"
            - name: Register of grant-funded assets
              description: |-
                ## Purpose
                Grant agreements often require funded assets to stay on the farm, in use and insured for a number of years, and auditors can ask to see them long after the money is spent. A register with serial numbers, locations, photos and retention end dates answers that in minutes.

                ## Milestones
                1. Every grant- or rebate-funded asset listed with scheme, cost and date.
                2. Serial numbers, locations and photos recorded.
                3. Retention end dates and insurance requirements noted.
                4. A yearly check that every asset is present and in use.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every funded asset with serial number, photo and retention end date, checked within the last year."
                cadence: cyclic
              tasks:
                - "List every funded asset with scheme, cost and purchase date"
                - "Photograph each asset and record serial numbers"
                - "Note each retention end date and insurance condition"
                - "Walk the farm and confirm every funded asset is present @recurring(yearly)"
            - name: Helping neighbours with incentive paperwork
              description: |-
                ## Purpose
                Older farmers and those with limited reading time often miss incentives they qualify for, and an experienced claimant in the district can change that. Running a simple paperwork help session before claim season, without taking money or making promises, strengthens the farming community around you.

                ## Milestones
                1. A help session arranged with your farmer group or church hall before claim season.
                2. A one-page guide to registration and claims prepared in plain language.
                3. Neighbours helped to complete forms in their own name.
                4. Questions you could not answer passed to the extension or incentive office.

                ## Notes
                Help farmers complete their own forms. Never sign for them or hold their documents.
              priority: low
              deadlineOffsetDays: 100
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "One help session is held before claim season, with a plain-language guide handed out and unanswered questions passed on."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your farmer group to host a paperwork help session"
                - "Write a one-page plain-language guide to registration and claims"
                - "Help neighbours fill in forms in their own handwriting"
                - "Pass unanswered questions to the incentive office"
            - name: Five-year incentive plan tied to farm investments
              description: |-
                ## Purpose
                Farms that do well from incentives plan their big investments around the schemes over several years, spacing a tank, a shade house and a cold room so each qualifies and the cash up front is manageable. A five-year plan turns incentives from luck into part of how the farm grows.

                ## Milestones
                1. The farm's major investments for five years listed by year.
                2. Likely incentives matched to each, with caps per farmer noted.
                3. Up-front cash and timing checked against expected harvest income.
                4. The plan reviewed and adjusted each year after the budget.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A five-year investment plan shows each major item, its matched incentive, cap and timing, reviewed after the latest budget."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the farm's major investments for the next five years"
                - "Match each one to a likely scheme and note any cap per farmer"
                - "Space the investments so the up-front cash is manageable"
                - "Revise the plan after each budget announcement"
---

# Farm Incentives and Grants

This area is for farmers who know the Ministry pays rebates and grants but keep losing them to an expired farmer card, a missing receipt or a closing date that slipped past. It starts with foundations (registration, a map of the schemes that fit your farm, tenure, tax and bank papers, and a rule that nothing gets bought before eligibility is checked), then the monthly machinery of filing, tracking and chasing claims, the knowledge that makes guidelines and inspections readable, decisions on which incentives to pursue and how to fix a refused claim, the dated moments of inspections, closing dates and grant calls, situations for new, young, women, part-time and returning farmers, and finally specialist work on duty concessions, multi-year grant compliance and helping your farmer group apply.

What repeats is a monthly receipt filing day, a deadline calendar check, a correspondence log update and a rebate reconciliation on different days, a weekly chase while claims are open, a quarterly scan for new schemes and a backup of the incentive folder, and a yearly round of registration renewal, budget announcements and a review of what you claimed against what was available. The Operational checklist, Purchase decision, Vendor and Compliance control templates pair with claim submissions, incentive-backed purchases, approved suppliers and grant conditions. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
