---
id: family-office.family-risk-and-insurance-review
name: Family Risk and Insurance Review
description: "A family risk map, one schedule of every policy, correct named insureds, up-to-date valuations, a broker who reviews the whole programme each year, umbrella limits chosen on purpose and a claims record you can stand behind."
category: personal
version: 1.0.0
tags: [family-office, family-risk-and-insurance-review, parent, homeowner, insurance, umbrella-liability, risk-management, claims]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - vendor
    - meeting-notes
    - purchase-decision
    - operational-checklist
    - remediation-plan
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Risk and Insurance Review
          description: "Reviewing risk across homes, vehicles, art, liability and key people: the insurance programme, umbrella cover, broker reviews and claims history."
          projects:
            - name: Family risk map across people, property and liability
              description: |-
                ## Purpose
                Insurance bought policy by policy tends to mirror whatever a salesperson asked about, not what could actually hurt the family. Mapping every exposure first, from the coastal house to the teenage driver to the founder nobody could replace, gives the broker a brief and shows which risks are insured, which are retained and which nobody has thought about.

                ## Milestones
                1. Exposures listed under five headings: homes and contents, vehicles and vessels, valuables and collections, liability to others, and key people.
                2. Each exposure scored for likelihood and severity on the same simple scale.
                3. Every exposure marked as insured, deliberately retained or not yet considered.
                4. The ten most severe exposures agreed with the family member who leads on risk.

                ## Notes
                Start from the **Risk register** template. Keep the map about what could happen and how bad it would be; policy details belong in the schedule.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated risk map covering homes, vehicles, valuables, liability and key people, with every exposure scored and marked insured, retained or open."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name one family member to lead on risk and insurance"
                - "List every home, vehicle, vessel and valuable collection the family uses"
                - "Add liability exposures such as pools, dogs, staff, board seats and rentals"
                - "Score each exposure for likelihood and severity"
                - "Mark each exposure as insured, retained or not yet considered"
            - name: Single schedule of every insurance policy
              description: |-
                ## Purpose
                Wealthy families often hold twenty or more policies across several insurers, brokers, countries and owning entities, and nobody can say on one page what is covered or when it renews. One schedule listing every policy with its insurer, insured, limit, deductible and renewal date is the document every later review starts from.

                ## Milestones
                1. Every current policy listed: homes, contents, motor, marine, aviation, art, liability, life, health, travel and staff cover.
                2. Each line showing insurer, broker, named insured, limit, deductible, premium and renewal date.
                3. Policies with no known broker or owner flagged for follow-up.
                4. The schedule checked against twelve months of premium payments so nothing is missing.

                ## Notes
                Premium payments are the best test of completeness: a direct debit to an insurer nobody listed usually means a forgotten policy.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One schedule lists every live policy with insurer, named insured, limit, deductible, premium and renewal date, reconciled to a year of payments."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each broker for a current list of policies they place for the family"
                - "Search twelve months of bank and card statements for insurer payments"
                - "Build the schedule with insurer, insured, limit, deductible and renewal date"
                - "Flag any policy with no broker, no owner or an unknown renewal date"
            - name: Named insured and owning entity check
              description: |-
                ## Purpose
                Homes held by a trust, cars registered to a company and art owned by a holding entity are frequently insured in an individual's name, and an insurer can refuse a claim from someone without an insurable interest. Matching every policy's named insured to the legal owner of the asset closes one of the quietest and most expensive gaps in a family programme.

                ## Milestones
                1. The legal owner of every insured asset confirmed from deeds, registrations or the structure chart.
                2. Each policy's named and additional insureds compared with that owner.
                3. Mismatches listed with the change the broker needs to make.
                4. Every mismatch corrected by endorsement, with the endorsement filed.

                ## Notes
                Trustees, company directors and lenders may each need to appear on a policy. Ask the broker and the trust administrator to agree the wording together.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every policy's named insured matches the asset's legal owner, with any corrections made by endorsement and filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the structure chart showing which entity owns each home and asset"
                - "Compare each owner with the named insured on the matching policy"
                - "Send the broker a list of mismatches and the owner each should name"
                - "File each endorsement once the insurer issues it"
            - name: Five-year claims history and loss record
              description: |-
                ## Purpose
                Underwriters price and accept a family on its loss history, and a broker cannot negotiate well without knowing what has been claimed, paid and declined. Gathering five years of claims, including the small ones paid privately, also shows which risks keep recurring and are worth fixing rather than insuring.

                ## Milestones
                1. Loss runs requested from every insurer covering the last five years.
                2. Each claim listed with date, cause, amount claimed, amount paid and outcome.
                3. Uninsured losses paid privately added with an estimated cost.
                4. Repeat causes, such as water damage at one property, highlighted for action.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A five-year claims record built from insurer loss runs plus private losses, with repeat causes identified."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the broker to request five-year loss runs from every insurer"
                - "List each claim with date, cause, amount paid and outcome"
                - "Add uninsured losses the family paid itself in the same period"
                - "Highlight any cause that appears more than once"
            - name: Rebuild cost valuation for each residence
              description: |-
                ## Purpose
                Buildings cover should reflect what it would cost to rebuild the house to the same standard, which is often far above or below the market price and climbs sharply after a regional disaster when builders are scarce. An independent rebuild valuation for each home prevents underinsurance, which some policies punish by cutting every claim in proportion.

                ## Milestones
                1. A list of residences with their current buildings sum insured.
                2. A professional rebuild cost assessment completed for each main residence.
                3. Each sum insured compared with the assessed rebuild cost.
                4. Sums insured adjusted where the gap is material, with the broker's confirmation filed.

                ## Notes
                Ask whether the policy offers guaranteed or extended replacement cost, and whether it covers the extra cost of meeting current building codes.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Each residence has a dated rebuild cost assessment and a buildings sum insured aligned with it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each residence with its current buildings sum insured"
                - "Ask the broker which surveyors their insurers accept for rebuild valuations"
                - "Book a rebuild cost assessment for the main residence first"
                - "Compare each assessment with the sum insured and agree changes"
            - name: Contents and valuables inventory for insurance
              description: |-
                ## Purpose
                After a fire or burglary, families struggle to list what was in each room, and an insurer pays for what can be shown to have existed. A room-by-room photo and video inventory, with receipts and certificates for jewellery and watches, turns a claim from a memory test into a document check.

                ## Milestones
                1. Every room in each home photographed or filmed, including cupboards and storage.
                2. Items above a set value listed with description, receipt or appraisal and location.
                3. Jewellery, watches and furs separated out for scheduling.
                4. The inventory stored off-site in the document vault, not only in the house.

                ## Notes
                Collections of fine art belong in the collection records; this inventory covers general contents and personal valuables.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A room-by-room inventory with photos and supporting documents exists for each home and is stored outside the property."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Film a walk-through of one home room by room, opening cupboards"
                - "Set the value above which items are listed individually"
                - "Gather receipts and appraisals for jewellery and watches"
                - "Upload the inventory to the off-site document vault"
            - name: Personal liability exposure inventory
              description: |-
                ## Purpose
                Liability claims are the risk most likely to reach the family's wider wealth, because there is no ceiling on what a court can award. Listing every source, from the pool and the boat to household staff, rental tenants, dogs, board seats and young drivers, is the only way to size the umbrella cover sensibly.

                ## Milestones
                1. Each source of liability listed with the family member or entity it attaches to.
                2. Higher-severity sources marked: drivers, watercraft, pools, firearms, rentals and staff.
                3. Board, trustee and volunteer roles held by family members listed.
                4. The list shared with the broker as the basis for the umbrella review.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of every liability source by person and entity, with higher-severity sources marked, has been sent to the broker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every driver in the household and the vehicles each uses"
                - "Note pools, trampolines, dogs, watercraft and firearms at each home"
                - "Ask each adult family member which boards and trustee roles they hold"
                - "Send the completed list to the broker"
            - name: Policy document vault and certificate access
              description: |-
                ## Purpose
                In a crisis the family needs the policy wording, the claims number and the broker's out-of-hours contact within minutes, not after a search through email. A single vault folder per policy, with a one-page emergency sheet for each home, makes the programme usable at two in the morning.

                ## Milestones
                1. One vault folder per policy holding the wording, schedule, endorsements and certificate.
                2. An emergency sheet for each home with claims lines, broker contact and policy numbers.
                3. Access agreed for the family leader, the office and each home's manager.
                4. Expired documents moved to an archive folder rather than mixed with current ones.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live policy has a complete vault folder and every home has a printed and digital emergency sheet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create one vault folder per policy using the schedule as the list"
                - "Request missing wordings and endorsements from the broker"
                - "Write a one-page emergency sheet for each home"
                - "Check the current certificate for each policy is in the vault @recurring(quarterly)"
            - name: Premium baseline and insurance cost picture
              description: |-
                ## Purpose
                Few families know their total annual premium, how it splits across homes, vehicles and liability, or how fast it has risen. A three-year baseline shows where costs are concentrated, which lines are climbing fastest and how much is being spent to insure small losses the family could easily absorb.

                ## Milestones
                1. Three years of premiums totalled by policy and by category.
                2. Year-on-year change worked out for each category.
                3. Premiums allocated to the family member, branch or entity that benefits.
                4. The three fastest-rising lines noted for the next broker review.

                ## Notes
                Include taxes and fees on premiums and broker fees separately, so the comparison with alternative quotes is like for like.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-year premium table by policy and category, with year-on-year changes and the three fastest-rising lines named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect three years of premium invoices for every policy"
                - "Total premiums by category and by year"
                - "Allocate each premium to the member or entity that benefits"
                - "Note the three lines rising fastest for the broker"
            - name: Choosing the family's lead private client broker
              description: |-
                ## Purpose
                Splitting the programme between several brokers, each seeing one corner, leaves gaps where policies meet and nobody accountable for the whole. Appointing one lead broker with private client experience, a clear service agreement and access to specialist markets gives the family a single adviser for the full risk picture.

                ## Milestones
                1. Three brokers with private client practices shortlisted and briefed with the risk map.
                2. Each scored on market access, claims advocacy, service team and fee transparency.
                3. A lead broker appointed with a written service agreement and annual review date.
                4. Existing brokers told how their policies will move at each renewal.

                ## Notes
                Start from the **Vendor** template. Ask each broker how they are paid, by commission, fee or both, and whether they receive contingent commissions from insurers.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lead broker is appointed under a written service agreement after three brokers were scored on the same criteria."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask two trusted advisers which private client brokers they rate"
                - "Send three brokers the risk map and the policy schedule"
                - "Score each broker on market access, claims support, service and fees"
                - "Sign a service agreement with the chosen lead broker"
            - name: Annual insurance programme renewal calendar
              description: |-
                ## Purpose
                Policies renewing on scattered dates get rolled over without review, because each one arrives alone and looks routine. A renewal calendar that flags each policy ninety days out, plus one annual meeting where the broker presents the whole programme, means every renewal is a decision rather than a default.

                ## Milestones
                1. Every renewal date from the schedule entered in one calendar with a ninety-day alert.
                2. A standard renewal pack agreed with the broker: changes, quotes and recommendations.
                3. An annual programme review meeting held with the broker and the family risk lead.
                4. Renewal dates aligned over time where it makes the programme simpler.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every policy carries a ninety-day renewal alert and the family has held an annual programme review with the broker."
                cadence: cyclic
              tasks:
                - "Enter every renewal date from the schedule with a ninety-day alert"
                - "Agree the contents of a standard renewal pack with the broker"
                - "Check which policies renew in the next ninety days @recurring(monthly:3)"
                - "Hold the annual programme review meeting with the broker @recurring(yearly)"
            - name: Quarterly change-of-exposure check-in with the broker
              description: |-
                ## Purpose
                Families change faster than policies: a new car, a renovation, a staff hire, a child passing a driving test, a painting bought at auction. A short quarterly note to the broker listing what changed keeps cover current between renewals and avoids the disclosure problems that surface only after a claim.

                ## Milestones
                1. A standing list of changes the broker must hear about, agreed in writing.
                2. A quarterly change note sent covering people, property, vehicles, staff and activities.
                3. The broker's confirmation of any cover changes filed against each item.
                4. A short record kept of each check-in and its outcome.

                ## Notes
                Start from the **Meeting notes** template for each check-in, so the record of what was disclosed and when is easy to find later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly change notes a year are sent to the broker and each has a filed confirmation of the cover changes made."
                cadence: rolling
              tasks:
                - "Agree with the broker the list of changes they must always be told"
                - "Send the broker a note of changes in people, property and activities @recurring(quarterly)"
                - "File the broker's confirmation against each change"
                - "Record what was disclosed in the check-in notes"
            - name: Premium payments and direct debit reconciliation
              description: |-
                ## Purpose
                One failed card payment, or a direct debit cancelled during a bank switch, can lapse a policy without anyone noticing until the claim. Checking each month that every premium due was paid, to the right insurer and in the right amount, catches lapses and duplicated cover early.

                ## Milestones
                1. Each policy's payment method, account and schedule recorded beside the policy.
                2. A monthly check that every premium due has left the right account.
                3. Any missed or duplicated payment raised with the broker within a week.
                4. Payment details updated on the schedule whenever a bank or card changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's premium payments are reconciled to the schedule, with any missed or duplicate payment raised within a week."
                cadence: rolling
              tasks:
                - "Record the payment method and account for each policy on the schedule"
                - "Reconcile premiums paid this month against the schedule @recurring(monthly:12)"
                - "Raise any missed or duplicated premium with the broker"
                - "Update payment details whenever a card or bank account changes"
            - name: New asset notification routine
              description: |-
                ## Purpose
                Cover for a newly bought car, home or piece of jewellery often needs to be in place on the day of purchase, and many policies give only a short automatic grace period for new acquisitions. A simple rule that the office tells the broker before any purchase above a set value closes the gap between buying and insuring.

                ## Milestones
                1. A value threshold agreed above which purchases are notified before completion.
                2. The rule shared with family members, the office and each estate manager.
                3. A monthly sweep of purchases to catch anything missed.
                4. Each new asset added to the policy schedule with its cover confirmed.

                ## Notes
                Ask the broker how long automatic cover lasts for newly acquired items under each policy, and write it on the schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every purchase above the agreed threshold is notified to the broker and added to the schedule within the policy's grace period."
                cadence: rolling
              tasks:
                - "Agree the purchase value that triggers a notice to the broker"
                - "Tell family members and estate managers about the notification rule"
                - "Review purchases above the threshold from the past month @recurring(monthly:26)"
                - "Add each new asset to the schedule once cover is confirmed"
            - name: Open claims tracker and claims log
              description: |-
                ## Purpose
                Large claims run for months, pass between adjusters and stall when nobody chases them. Keeping a log of every open claim with its reference, adjuster, documents sent and next action makes sure the family is paid what it is due and builds the loss record future underwriters will ask for.

                ## Milestones
                1. Every open claim logged with insurer reference, adjuster and amount claimed.
                2. Documents sent and requested recorded against each claim.
                3. A next action and owner set for each open claim.
                4. Closed claims moved to the claims history with the final settlement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each open claim has a reference, adjuster, document record and next action, reviewed monthly until settled."
                cadence: rolling
              tasks:
                - "Log every open claim with its reference, adjuster and amount"
                - "Update each open claim's status and next action @recurring(monthly:20)"
                - "Chase any claim with no insurer response in thirty days"
                - "Move settled claims into the five-year claims history"
            - name: Family risk register review cycle
              description: |-
                ## Purpose
                The risk map goes stale as children grow, homes are bought and sold and new roles are taken on. Rescoring the register each year, and looking at the top five between times, keeps the family's attention on the exposures that matter and gives the broker review a current agenda.

                ## Milestones
                1. The top five risks reviewed each quarter by the family risk lead.
                2. The full register rescored once a year with the broker's input.
                3. New exposures added and closed ones archived with a reason.
                4. A one-page summary of changes shared with the family council or senior members.

                ## Notes
                Start from the **Risk register** template if the map was kept elsewhere. Keep scoring consistent from year to year so movements mean something.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register is rescored annually and its top five risks are reviewed every quarter, with a summary shared after each annual review."
                cadence: cyclic
              tasks:
                - "Review the top five risks and their treatment @recurring(quarterly)"
                - "Rescore every risk in the register with the broker @recurring(yearly)"
                - "Archive closed risks with a short reason"
                - "Share a one-page summary of changes with senior family members"
            - name: Household vehicle and driver register
              description: |-
                ## Purpose
                Motor policies depend on who drives which car, and a new driver, an expired licence or a chauffeur who changed jobs can quietly undermine cover. A register of every vehicle and every person who drives it, checked each quarter, keeps the motor and umbrella policies honest.

                ## Milestones
                1. Every vehicle listed with registered owner, garaging address and main drivers.
                2. Every driver listed with licence details, expiry date and any convictions disclosed.
                3. Chauffeurs and staff drivers included with their employer and permissions.
                4. The register matched to the drivers named on each motor policy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of vehicles and drivers matches every motor policy and is checked each quarter for licence and driver changes."
                cadence: rolling
              tasks:
                - "List every vehicle with its registered owner and garaging address"
                - "Record each driver's licence expiry and any disclosed convictions"
                - "Check licence expiry dates and any new drivers @recurring(quarterly)"
                - "Compare the register with the drivers named on each motor policy"
            - name: Empty home and unoccupancy log
              description: |-
                ## Purpose
                Many home policies restrict cover for theft, water damage or vandalism once a property has stood empty beyond a set number of days, which catches families with seasonal homes every year. Logging occupancy and arranging the inspections the policy requires keeps cover in force while the house is closed.

                ## Milestones
                1. Each policy's unoccupancy limit and conditions written on the schedule.
                2. A monthly log of days each home stood empty.
                3. Inspection visits or caretaker checks arranged where the policy requires them.
                4. The insurer told in advance whenever a home will exceed its limit.

                ## Notes
                Conditions often include draining water systems or leaving heating on. Ask the broker for the exact wording for each home.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each home's unoccupancy limit is recorded, empty days are logged monthly and the insurer is told before any limit is passed."
                cadence: rolling
              tasks:
                - "Write each home policy's unoccupancy limit on the schedule"
                - "Log the days each home stood empty this month @recurring(monthly:28)"
                - "Arrange caretaker inspection visits the policy requires"
                - "Tell the insurer before a home exceeds its empty-days limit"
            - name: Valuation refresh cycle for valuables and homes
              description: |-
                ## Purpose
                Jewellery, watches, art and building costs move year to year, and a schedule based on appraisals from a decade ago leaves the family either underinsured or overpaying. A rolling cycle that refreshes the most valuable items first, every three to five years, keeps sums insured close to what replacement would cost.

                ## Milestones
                1. Each scheduled item and residence listed with its last valuation date.
                2. A refresh interval set for each category with the broker.
                3. This year's due valuations booked with accepted appraisers or surveyors.
                4. New values sent to the broker and the schedule updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scheduled item and residence has a valuation date and refresh interval, and each year's due valuations are completed and sent to the broker."
                cadence: cyclic
              tasks:
                - "Record the last valuation date for each scheduled item and home"
                - "Agree a refresh interval for each category with the broker"
                - "Confirm which valuations fall due this year @recurring(yearly)"
                - "Send the new values to the broker and update the schedule"
            - name: Reading a home insurance policy wording
              description: |-
                ## Purpose
                The schedule says what is insured, but the wording decides what is paid, through definitions, conditions and exclusions few people read until a claim. Working through one home policy clause by clause teaches the family risk lead to spot the gaps that matter, from mould and gradual leaks to cover for property away from home.

                ## Milestones
                1. One full home policy read, including definitions, conditions and exclusions.
                2. Ten clauses that most affect the family marked with plain notes.
                3. Questions on unclear wording sent to the broker and answered in writing.
                4. A short glossary of policy terms kept in the vault for others.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One home policy has been read in full, with ten key clauses annotated and the broker's written answers to open questions filed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose the main residence policy and download its full wording"
                - "Read the definitions, conditions and exclusions sections first"
                - "Mark the ten clauses that most affect the family"
                - "Send the broker your questions on unclear wording"
            - name: Excess liability layers and attachment points
              description: |-
                ## Purpose
                Umbrella and excess policies sit on top of home, motor and watercraft liability and only respond once those limits are used up, so a gap in the underlying layer is a gap in the whole tower. Learning how attachment points, required underlying limits and drop-down cover work makes the umbrella decision informed rather than guessed.

                ## Milestones
                1. A diagram drawn of the family's liability tower from primary policies to the umbrella.
                2. The underlying limits each umbrella requires listed against actual limits.
                3. What happens when an underlying policy lapses or excludes a loss understood.
                4. Questions about drop-down and worldwide cover answered by the broker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A diagram of the family liability tower exists, with every required underlying limit checked against the policy actually held."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the umbrella policy's section on required underlying insurance"
                - "Draw the liability tower from primary policies up to the umbrella"
                - "Check each underlying limit against what the umbrella requires"
                - "Ask the broker how drop-down cover works on this umbrella"
            - name: Agreed value, replacement cost and market value explained
              description: |-
                ## Purpose
                Two policies with the same sum insured can pay very different amounts after a loss, depending on whether they settle at agreed value, replacement cost or actual cash value after depreciation. Understanding the basis for each policy explains why valuations matter and where a claim could fall short.

                ## Milestones
                1. The settlement basis of every property, contents, motor and valuables policy recorded.
                2. A worked example of each basis written for one real family asset.
                3. Policies with depreciation-based settlement flagged for review.
                4. The settlement basis column added to the policy schedule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every policy on the schedule shows its settlement basis and those that deduct depreciation are flagged for discussion with the broker."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the settlement basis clause in each property and valuables policy"
                - "Write a worked example of each basis for one real asset"
                - "Add a settlement basis column to the policy schedule"
                - "Flag policies that settle at actual cash value for the broker"
            - name: How private client insurers differ from standard cover
              description: |-
                ## Purpose
                Specialist private client insurers often offer broader wordings, guaranteed rebuild cost, worldwide valuables cover and risk surveys that mass-market policies lack, at a different premium and with stricter underwriting. Knowing what to expect lets the family judge whether its current carriers suit its exposures.

                ## Milestones
                1. Features commonly offered by private client carriers listed from broker material.
                2. Each feature checked against the family's current policies.
                3. The three most valuable missing features identified.
                4. A short note of findings filed for the next programme review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison note lists private client features against current policies and names the three most valuable missing ones."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the broker for sample wordings from two private client insurers"
                - "List the features those wordings offer that current policies lack"
                - "Pick the three missing features that matter most to the family"
                - "File the note for the next annual programme review"
            - name: Board seat and trustee liability for family members
              description: |-
                ## Purpose
                Family members sitting on charity boards, family company boards, school governing bodies or as trustees can be sued personally for decisions taken in that role, and the organisation's own cover may be thin or absent. Learning what directors' and officers' and trustee liability cover does, and checking each role, protects people who serve.

                ## Milestones
                1. Every board, trustee and committee role held by family members listed.
                2. Each organisation asked for confirmation of its directors' and officers' cover and limit.
                3. Roles with no or thin cover identified.
                4. Options for personal cover or excess under the umbrella discussed with the broker.

                ## Notes
                Many personal umbrella policies exclude board roles for profit-making companies. Check the wording before relying on it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each board and trustee role held by a family member has its directors' and officers' cover confirmed or a gap recorded with the broker's options."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every board and trustee role held by family members"
                - "Ask each organisation for its directors' and officers' certificate and limit"
                - "Check whether the umbrella covers non-profit board roles"
                - "Ask the broker for options where a role has no cover"
            - name: Claims process and loss adjusting basics
              description: |-
                ## Purpose
                The way a claim is reported in the first forty-eight hours shapes how it settles: late notice, repairs before inspection or an admission of fault can all reduce what is paid. Learning the steps, the adjuster's role and when to bring in the broker or a public adjuster prepares the family before it needs to claim.

                ## Milestones
                1. Notification deadlines and duties for each main policy noted.
                2. The roles of the insurer's adjuster, the broker and a public adjuster understood.
                3. A one-page first steps sheet written for property and liability claims.
                4. The sheet added to each home's emergency pack.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A first-steps claims sheet covering notification, evidence and who to call is written and placed in each home's emergency pack."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note the notification deadline in each main policy"
                - "Ask the broker how they support the family during a large claim"
                - "Ask the agent to draft a one-page first steps sheet for claims"
                - "Add the finished sheet to each home's emergency pack"
            - name: Umbrella and excess liability limit decision
              description: |-
                ## Purpose
                Umbrella limits are often set at whatever the first broker suggested and never revisited as wealth, homes and drivers multiply. Choosing the limit on purpose, from the liability inventory, the family's net worth and the broker's view of awards where the family lives, is one of the highest-value decisions in the programme.

                ## Milestones
                1. The liability inventory and current tower reviewed together.
                2. Quotes obtained for at least three limit levels.
                3. Worldwide cover, defence costs and excluded activities compared across quotes.
                4. A limit chosen and the reasons recorded with the decision date.

                ## Notes
                The right limit depends on jurisdiction, exposures and wealth. Take the broker's and lawyer's view; do not copy another family's figure.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An umbrella limit is chosen after comparing quotes at three levels, with the reasons and date recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Send the broker the liability inventory and current umbrella wording"
                - "Request quotes at three umbrella limit levels"
                - "Compare defence costs, territory and exclusions across the quotes"
                - "Record the chosen limit and the reasons for it"
            - name: Deductible and self-insured retention strategy
              description: |-
                ## Purpose
                Low deductibles mean paying the insurer to handle small losses the family could absorb, and frequent small claims can raise premiums or cost a renewal. Setting deductibles deliberately across the programme, and tracking what is paid privately, can cut premium while keeping cover for the losses that matter.

                ## Milestones
                1. Current deductibles listed for every policy.
                2. Premium savings quoted for two higher deductible levels on the main policies.
                3. A family rule for which losses to claim and which to pay privately.
                4. A running record of small losses paid out of pocket.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Deductibles are set from quoted savings, a written rule says which losses to claim, and privately paid losses are recorded monthly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the deductible on every policy in the schedule"
                - "Ask the broker for savings at two higher deductible levels"
                - "Write the family rule for when to claim and when to pay privately"
                - "Record each small loss paid out of pocket @recurring(monthly:15)"
            - name: Consolidating policies with one private client carrier
              description: |-
                ## Purpose
                Homes, cars, valuables and the umbrella spread across several insurers can leave gaps between wordings and make the umbrella harder to place. Moving most personal lines to one carrier may simplify claims and earn a multi-policy credit, but it also concentrates the family on one insurer's appetite.

                ## Milestones
                1. Policies that could move to a single carrier identified.
                2. Two carriers quoted for the consolidated programme on the same specification.
                3. Cover, service, financial strength rating and price compared side by side.
                4. A decision recorded, with a renewal-by-renewal transition plan if moving.

                ## Notes
                Start from the **Purchase decision** template. Check each carrier's financial strength rating with the broker before comparing price.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A consolidation decision is recorded after two carriers were compared on cover, service, rating and price, with a transition plan if moving."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark the policies that could move to one carrier"
                - "Ask the broker to quote two carriers on the same specification"
                - "Compare cover, rating, service and price in one table"
                - "Record the decision and the renewal dates for any move"
            - name: Windstorm and flood cover for coastal homes
              description: |-
                ## Purpose
                For homes in the Caribbean, Florida or other hurricane zones, windstorm often carries a separate percentage deductible and flood is frequently excluded or capped, so a family can find a large share of a storm loss uninsured. Reviewing these terms before the season, home by home, shows the real exposure and the options to reduce it.

                ## Milestones
                1. Windstorm and named storm deductibles listed for each coastal home in money terms.
                2. Flood and storm surge cover confirmed or recorded as excluded.
                3. The uninsured amount in a severe storm estimated for each home.
                4. Options for separate flood cover or lower deductibles quoted.

                ## Notes
                A deductible of a few percent of the sum insured can be a very large figure on a high-value home. Work it out in money, not percentages.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each coastal home shows its storm deductible in money, its flood position and an estimated uninsured storm loss, with options quoted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the windstorm or named storm deductible in each coastal home policy"
                - "Convert each deductible from a percentage into a money figure"
                - "Confirm whether flood and storm surge are covered or excluded"
                - "Ask the broker to quote options to reduce the uninsured amount"
            - name: Excluded perils and earthquake gap review
              description: |-
                ## Purpose
                Earthquake, landslide, subsidence, mould and gradual water damage are common exclusions, and their importance depends on where each home stands. Checking which perils each policy excludes, against what is plausible at each location, turns hidden gaps into decisions to insure or accept.

                ## Milestones
                1. Exclusions listed for each home policy.
                2. Each exclusion rated for relevance to that home's location and construction.
                3. Relevant exclusions priced for buy-back or separate cover.
                4. Each gap recorded as insured, accepted or reduced by work on the property.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every relevant exclusion on each home policy is recorded as insured, accepted or reduced, with costs where cover was quoted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the exclusions in each home policy"
                - "Rate each exclusion for relevance to that home's location"
                - "Ask the broker to price buy-back cover for the relevant ones"
                - "Record each gap as insured, accepted or reduced"
            - name: Personal cyber and fraud cover check
              description: |-
                ## Purpose
                Payment diversion fraud, identity theft and ransomware on home devices now cause real losses for wealthy households, and home policies may offer a small cyber extension or none. Checking what is covered, and what limit, sits alongside the family's security work without duplicating it.

                ## Milestones
                1. Any existing cyber or fraud extension found and its limit recorded.
                2. Covered events listed: funds transfer fraud, identity restoration, extortion, data restoration.
                3. A quote obtained for standalone personal cyber cover if the extension is thin.
                4. A decision recorded and the insurer's incident line added to the emergency sheets.

                ## Notes
                Many cyber policies require prompt notice and use of the insurer's response firm. Keep the number where staff can find it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The family's cyber and fraud cover is recorded with its limit and covered events, and a decision on standalone cover is filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the home and umbrella wordings for cyber and fraud extensions"
                - "List the events and limits the current extension covers"
                - "Ask the broker for a standalone personal cyber quote"
                - "Add the insurer's incident line to each emergency sheet"
            - name: Life and key person cover review
              description: |-
                ## Purpose
                Some family members carry risk others depend on: the founder whose death would trigger estate taxes or a business buy-out, the parent whose income funds a branch, the executive the family company cannot lose. Reviewing life, disability and key person cover against those needs, with the planners and the business, keeps the purpose of each policy clear.

                ## Milestones
                1. Every life, disability and key person policy listed with owner, insured and beneficiary.
                2. The purpose of each policy written in one sentence.
                3. Gaps or overlaps identified with the estate planner and the business finance lead.
                4. Beneficiary nominations confirmed as current on every policy.

                ## Notes
                Who owns a life policy can matter as much as the amount. Leave ownership and trust questions to the estate lawyer.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every life, disability and key person policy has a written purpose, current beneficiaries and a reviewed position on gaps."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every life, disability and key person policy with its owner"
                - "Write one sentence on what each policy is for"
                - "Review gaps with the estate planner and the business finance lead"
                - "Confirm beneficiary nominations on each policy @recurring(yearly)"
            - name: Marketing the whole programme to other carriers
              description: |-
                ## Purpose
                Prices and appetite drift, and a programme renewed with the same insurers for years may be well above what the market would offer. Asking the broker to market the full programme every three to five years tests price and terms, and is easier to justify with a clean claims record and current valuations.

                ## Milestones
                1. A full submission prepared with the schedule, valuations, risk map and claims history.
                2. At least three carriers approached on the same specification.
                3. Responses compared on cover, deductibles, service and premium.
                4. A decision taken to stay, move or split, with the reasons recorded.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The programme is marketed to at least three carriers and a recorded decision explains whether to stay, move or split."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree with the broker the timing of a full market exercise"
                - "Assemble the submission from the schedule, valuations and claims history"
                - "Compare carrier responses on cover, deductibles and premium"
                - "Record the decision and reasons after the comparison"
            - name: Fine art and jewellery scheduling decision
              description: |-
                ## Purpose
                Valuables can be insured under a blanket limit with a per-item cap or scheduled item by item at agreed values, and the right choice depends on how many pieces exceed the cap. Deciding the approach with current appraisals avoids a claim for a single important piece being paid at a fraction of its worth.

                ## Milestones
                1. Pieces above the blanket per-item limit identified from the inventory and collection records.
                2. Scheduled and blanket options quoted for jewellery, watches and art.
                3. Cover for transit, loans and pieces worn or displayed away from home checked.
                4. The approach chosen and the schedule of listed items sent to the broker.

                ## Notes
                Collection care, provenance and loans to museums are handled with the collection records; this project decides only how the pieces are insured.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between blanket and scheduled cover for valuables, with every piece above the per-item limit scheduled at a current value."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the per-item limit on the current valuables or contents policy"
                - "List every piece worth more than that limit"
                - "Ask the broker to quote scheduled and blanket options"
                - "Check transit and worn-away-from-home cover in each option"
            - name: Pre-hurricane season insurance readiness
              description: |-
                ## Purpose
                Insurers commonly stop binding new cover or changes once a named storm is forecast, so any fix has to be made weeks before the season starts in June. A yearly readiness check of policies, documents, photos and contacts for every home in a storm zone means the family meets the season prepared rather than scrambling.

                ## Milestones
                1. Policies for every storm-zone home confirmed in force for the season.
                2. Fresh photos and video of each home and its contents taken and stored off-site.
                3. Emergency sheets updated with broker, insurer and contractor numbers.
                4. Staff at each home briefed on the claims first steps sheet.

                ## Notes
                Start from the **Operational checklist** template. Physical storm preparation of the houses sits with the estate managers; this checklist covers the insurance side.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each season every storm-zone home has confirmed cover, fresh photos stored off-site, updated emergency sheets and briefed staff."
                cadence: cyclic
              tasks:
                - "List every home that sits in a hurricane or windstorm zone"
                - "Run the pre-season policy and document check each May @recurring(yearly)"
                - "Take fresh photos and video of each storm-zone home"
                - "Brief staff at each home on the claims first steps sheet"
            - name: Major home loss claim response
              description: |-
                ## Purpose
                Fire, flood or a storm that makes a home uninhabitable starts a claim that can run for a year or more, with temporary housing, contents lists, contractor estimates and disputes over scope. Having a response plan before it happens, with roles and the right professionals named, protects the settlement and the family's time.

                ## Milestones
                1. Roles agreed for a major claim: family lead, office coordinator, broker and adviser.
                2. Additional living expenses cover and limits confirmed for each home.
                3. A shortlist of public adjusters, loss assessors or claims lawyers kept on file.
                4. A tabletop walk-through of a major loss held with the office and broker.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written major-loss response plan with named roles, living-expense limits and a professional shortlist has been walked through once."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name who leads, coordinates and advises if a home is lost"
                - "Confirm additional living expenses limits for each home"
                - "Shortlist two public adjusters or loss assessors with references"
                - "Walk through a major loss scenario with the office and broker"
            - name: Insurance steps when buying a new home
              description: |-
                ## Purpose
                Lenders want proof of cover before completion, the seller's policy ends at handover and the new home may sit in a flood zone or need an inspection before insurers will quote. Starting the insurance work when an offer is accepted avoids a gap on day one and surfaces costs that should shape the price.

                ## Milestones
                1. Insurability, flood zone and loss history of the property checked before exchange.
                2. Quotes for buildings, contents and liability obtained before completion.
                3. Cover bound from the completion date with the right named insured.
                4. The new home added to the schedule, umbrella and vault.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cover for the new home is bound from completion in the owning entity's name and the home appears on the schedule and umbrella."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the broker to check insurability and flood risk before exchange"
                - "Request a loss history for the property from the seller or insurer"
                - "Bind cover from completion in the name of the owning entity"
                - "Add the new home to the schedule, umbrella and vault"
            - name: Cover for a major renovation or new build
              description: |-
                ## Purpose
                Renovation turns a home into a different risk: contractors on site, open roofs, stored materials and empty rooms, and the existing policy may not cover any of it. Agreeing who insures the works, the existing structure and liability before work starts avoids the gap that appears when each side assumes the other has it.

                ## Milestones
                1. The existing home insurer told about the works and its response recorded.
                2. Builder's risk or contract works cover arranged by the owner or contractor.
                3. Contractors' liability certificates collected and checked for limits and expiry.
                4. Cover returned to normal and values updated once the works finish.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before works start, the insurer has been told, works cover is in place, contractors' certificates are filed and a post-works update is scheduled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tell the home insurer about the planned works and their value"
                - "Agree in the building contract who insures the works"
                - "Collect each contractor's liability certificate and check the expiry"
                - "Update the rebuild value with the broker when works are complete"
            - name: Insuring a wedding or large family event
              description: |-
                ## Purpose
                Weddings, milestone birthdays and large reunions can involve deposits, hired venues, caterers, guests, alcohol and borrowed jewellery, and the family's liability for all of it. Arranging event cancellation and liability cover, and checking vendors' insurance, protects both the money spent and the family name on the day.

                ## Milestones
                1. Event costs at risk listed: deposits, venue, travel and attire.
                2. Event cancellation and special event liability cover quoted and bound.
                3. Venue and key vendors' liability certificates collected.
                4. Jewellery and gifts on display covered for the event location.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The event has cancellation and liability cover in place, vendors' certificates on file and valuables covered at the venue."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total the deposits and costs that would be lost if the event is cancelled"
                - "Ask the broker for event cancellation and liability quotes"
                - "Request liability certificates from the venue and main vendors"
                - "Check valuables cover for jewellery and gifts at the venue"
            - name: Adding a teenage driver to family cover
              description: |-
                ## Purpose
                A newly licensed teenager is statistically the highest-risk driver in most households, and one serious accident can reach well beyond the motor policy into the family's umbrella. Parents who plan the car, the policy, the rules and the umbrella notice before the licence arrives keep both the child and the programme protected.

                ## Milestones
                1. The insurer and umbrella carrier told before the teenager drives.
                2. A suitable vehicle chosen with the broker's input on safety and premium.
                3. Family driving rules written down: passengers, night driving and phones.
                4. Any telematics or driver course discount the insurer offers taken up.

                ## Notes
                Some umbrella insurers set conditions for young drivers. Ask before handing over the keys, not after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The teenager is named on the motor policy, the umbrella carrier is informed and written family driving rules are agreed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell the broker the expected licence date for the teenager"
                - "Ask how a young driver affects the motor and umbrella policies"
                - "Agree written driving rules with the teenager"
                - "Enrol in any telematics or driver course the insurer rewards"
            - name: Cover for children studying away from home
              description: |-
                ## Purpose
                Students abroad or at university carry laptops, bikes and jewellery, sign tenancy agreements, may drive and need health cover where they study. Parents who check what the family policies extend to, and fill the gaps before term starts, avoid discovering at the first theft or accident that the home policy stops at the border.

                ## Milestones
                1. Contents, liability and health cover checked for the student's country and housing.
                2. Tenancy insurance or landlord requirements met where the student rents.
                3. Gaps filled with a student or local policy where needed.
                4. The student given a card with claim numbers and the broker's contact.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Before term, the student's contents, liability and health cover is confirmed or arranged and they hold a card with claim contacts."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the broker whether home and liability cover follows the student abroad"
                - "Check health cover requirements in the student's country"
                - "Arrange student contents or tenancy cover where gaps exist"
                - "Check the student's cover before each academic year @recurring(yearly)"
            - name: Household staff employers' liability cover
              description: |-
                ## Purpose
                Nannies, drivers, housekeepers and gardeners injured at work can claim against the family, and many countries require employers' liability or workers' compensation cover by law. Matching cover to every person on payroll, including agency and part-time staff, protects the staff and keeps the family on the right side of its obligations.

                ## Milestones
                1. Every person working in the homes listed as employee, agency worker or contractor.
                2. Employers' liability or workers' compensation cover confirmed for employees at each home.
                3. Agencies' and contractors' own insurance certificates collected.
                4. Staff numbers and payroll declared correctly to the insurer at renewal.

                ## Notes
                Whether cover is compulsory depends on the country. Confirm the local rule with the broker or an employment adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every worker at each home is covered by the family's or their agency's insurance, with certificates filed and payroll declared."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every person working in each home and how they are engaged"
                - "Confirm employers' liability or workers' compensation cover per home"
                - "Collect insurance certificates from agencies and contractors"
                - "Declare staff numbers and payroll to the insurer @recurring(yearly)"
            - name: Cover for letting a family home
              description: |-
                ## Purpose
                Renting out a holiday home or a former residence, even for a few weeks a year, often breaches a standard home policy and creates new liability to guests. Homeowners who arrange landlord or short-let cover before the first booking avoid a declined claim and keep the umbrella aligned.

                ## Milestones
                1. The current policy's position on letting confirmed in writing.
                2. Landlord or short-let cover quoted, including guest liability and loss of rent.
                3. Platform host protection read and its limits understood as secondary, not a policy.
                4. The let property flagged on the umbrella and the schedule.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The let home has landlord or short-let cover in place before the first booking and is disclosed on the umbrella."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the insurer in writing whether letting is covered"
                - "Get quotes for landlord or short-let cover with guest liability"
                - "Read the platform's host protection terms and limits"
                - "Tell the umbrella carrier the property is now let"
            - name: Insurance review after a death in the family
              description: |-
                ## Purpose
                When a family member dies, homes may be left empty, vehicles go undriven, named insureds no longer exist and life claims must be made, all while the family is grieving. A gentle, ordered review led by the office protects assets during probate and makes sure no policy lapses or pays the wrong person.

                ## Milestones
                1. Every policy naming the person found from the schedule.
                2. Insurers told of the death and life claims started with the right documents.
                3. Empty properties and unused vehicles covered under the right conditions.
                4. Named insureds and drivers updated as the estate is settled.

                ## Notes
                Executors usually need to approve changes to policies in the deceased's name. Work alongside the estate lawyer.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every policy affected by the death is identified, insurers are notified, life claims are lodged and cover is updated as the estate settles."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Filter the schedule for every policy naming the person who died"
                - "Ask the executor which insurers they want the office to notify"
                - "Start life claims with the death certificate and policy documents"
                - "Arrange unoccupancy cover for any home left empty"
            - name: Cover for an ageing parent's home and care
              description: |-
                ## Purpose
                An ageing parent may live alone in a large house, employ carers, stop driving or move into the family home or a care setting, and each change affects insurance. Adult children who review the parent's policies with them keep cover suited to their life now and avoid lapses when bills stop being opened.

                ## Milestones
                1. The parent's policies listed with them and added to the family schedule.
                2. Carers working in the home covered by the right employer or agency insurance.
                3. Motor cover adjusted or ended when the parent stops driving.
                4. Premium payments set up so they cannot lapse unnoticed.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The parent's policies are on the family schedule, carers are covered and premium payments are arranged so they cannot lapse unnoticed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sit with the parent and list their policies together"
                - "Check carers in the home are covered by employer or agency insurance"
                - "Review the motor policy if the parent drives less or stops"
                - "Set up premium payments the office can monitor"
            - name: Aircraft and yacht hull and liability cover review
              description: |-
                ## Purpose
                Aviation and marine policies carry their own terms on navigation limits, approved pilots and crew, laid-up periods and liability limits, and they must fit with the umbrella, which often excludes them. Reviewing them with a specialist broker each year keeps cover aligned with how the asset is actually used and chartered.

                ## Milestones
                1. Hull value, liability limit, navigation or operating area and named pilots or crew listed.
                2. Charter use and the management company's own insurance checked against the policy.
                3. The umbrella's treatment of aircraft and watercraft confirmed.
                4. Findings agreed with a specialist aviation or marine broker.

                ## Notes
                Ownership structures, crew and usage rules are run elsewhere; this review covers only the insurance on the asset.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each aircraft or vessel has its hull, liability, operating area and named crew confirmed with a specialist broker, and the umbrella position is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List hull value, liability limit and operating area for each asset"
                - "Check charter use against the policy and the manager's insurance"
                - "Confirm whether the umbrella covers or excludes aircraft and watercraft"
                - "Review findings with a specialist aviation or marine broker"
            - name: Captive insurance feasibility study
              description: |-
                ## Purpose
                Very large families with significant premiums and good loss records sometimes consider a captive insurance company to fund retained risks, often domiciled in a centre such as Bermuda, the Cayman Islands or Barbados. A feasibility study with independent advisers shows whether the costs, capital, regulation and tax scrutiny would be justified, or whether higher deductibles achieve most of the benefit.

                ## Milestones
                1. Total premiums, retained losses and claims history summarised for the study.
                2. A captive manager or consultant engaged for an independent feasibility view.
                3. Set-up and running costs, capital needs and regulatory duties set out.
                4. A recorded decision to proceed, defer or rely on higher retentions instead.

                ## Notes
                Captives attract tax authority attention. Take independent tax and legal advice in each relevant country before any step.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An independent feasibility report on a family captive is received and a recorded decision explains whether to proceed or defer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Summarise total premiums and retained losses for the last five years"
                - "Ask the broker for two independent captive consultants"
                - "Request a feasibility view covering costs, capital and regulation"
                - "Record the decision with the tax and legal advice received"
            - name: Independent audit of the family insurance programme
              description: |-
                ## Purpose
                Brokers paid by commission review their own work when they review the programme. Every few years an independent risk consultant, paid a fee and placing no business, can test the programme against the risk map and bring a second opinion on limits, wordings and costs.

                ## Milestones
                1. An independent consultant engaged on a fixed fee with no placement role.
                2. The consultant given the risk map, schedule, wordings and claims history.
                3. A written findings report received, ranked by severity.
                4. Each finding accepted, rejected or scheduled with the broker.

                ## Notes
                Start from the **Remediation plan** template to track each finding to a close.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An independent consultant's ranked findings report exists and every finding has a recorded response and owner."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask two advisers to recommend fee-only risk consultants"
                - "Agree a fixed-fee scope that excludes placing insurance"
                - "Send the consultant the risk map, schedule and claims history"
                - "Track every finding to a response with the broker"
            - name: Coordinating cover for homes in several countries
              description: |-
                ## Purpose
                Families with homes and staff in three or four countries often hold local policies bought separately, with different limits, currencies and claims rules, and an umbrella that may not respond abroad. Coordinating the local policies under one plan, with the lead broker and local correspondents, gives consistent protection wherever the family lives.

                ## Milestones
                1. Every country with family homes, vehicles or staff listed with its local policies.
                2. Local legal requirements for compulsory cover noted with the broker's help.
                3. Limits and deductibles compared across countries and any outliers flagged.
                4. The umbrella's territory confirmed for every country on the list.

                ## Notes
                Some countries require cover to be bought from a locally licensed insurer. Leave that question to the broker and local advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A country-by-country table of local policies, compulsory cover and limits exists and the umbrella's territory is confirmed for each country."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each country with family homes, vehicles or staff"
                - "Ask the broker which local cover is compulsory in each country"
                - "Compare local limits and deductibles in one table"
                - "Check local renewals still fit the master programme @recurring(yearly)"
            - name: Personal and family business cover boundary review
              description: |-
                ## Purpose
                Family members use company cars, host business guests at home and hold assets in the family holding company, and claims often fall between the business policies and the personal ones. Reviewing the boundary with both brokers, if there are two, makes sure each exposure has exactly one home.

                ## Milestones
                1. Overlapping exposures listed: company cars, home offices, business entertaining and entity-owned assets.
                2. Each exposure assigned to a business or personal policy.
                3. Gaps and duplicated cover agreed with the business and personal brokers.
                4. Any premium recharge between the business and the family recorded.

                ## Notes
                Keep this to the insurance boundary. The holding company's governance and accounts are handled with its own board.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every exposure shared between family and business has one assigned policy, and gaps and duplicates are resolved with both brokers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List assets and activities shared between the family and the business"
                - "Assign each one to a business or a personal policy"
                - "Meet the business and personal brokers together on the gaps"
                - "Record any premium recharges between business and family"
---

# Family Risk and Insurance Review

This area is for the family whose risks have outgrown a handful of policies bought one at a time: several homes, cars and drivers, art and jewellery, household staff, board seats, trusts and companies that own things, and a few people the whole family depends on. It starts with foundations (a risk map, a single policy schedule, correct named insureds, a claims history, rebuild values, an inventory, a liability list, a document vault, a premium baseline and a lead broker), then the machinery that keeps the programme current, the knowledge needed to read a policy, decisions on limits, deductibles, perils and carriers, dated events such as hurricane season or a major claim, situations for parents and homeowners, and finally specialist work on aircraft and yachts, captives, independent audits and cover across countries.

What repeats is a monthly renewal look-ahead, premium reconciliation, claims update, new-asset check and empty-home log on different days, a quarterly change list to the broker and a driver check, and a yearly programme review, valuation refresh, risk register rescoring and pre-season storm check. The Risk register, Vendor, Meeting notes, Purchase decision, Operational checklist and Remediation plan templates pair with the risk map, the broker choice, broker check-ins, carrier consolidation, storm readiness and audit findings. None of this is insurance, legal or tax advice: the area organises the questions, the records and the decisions, and the answers belong with a licensed broker and the family's lawyers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
