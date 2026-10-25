---
id: agriculture.agricultural-insurance
name: Agricultural Insurance
description: "Farm insurance set up on purpose: risks mapped, assets valued and photographed, policies read and compared, parametric weather cover understood, claims evidence kept ready and a savings fund for the losses no one will insure."
category: business
version: 1.0.0
tags: [agriculture, agricultural-insurance, small-business, crop-insurance, livestock-insurance, parametric-insurance, claims, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - savings-goal
    - metrics-log
    - purchase-decision
    - vendor
    - operational-checklist
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Agricultural Insurance
          description: "Insuring a farm: crop and livestock cover where it exists, equipment and buildings, parametric weather products, claims evidence and self-insurance savings."
          projects:
            - name: Farm risk map before buying any cover
              description: |-
                ## Purpose
                Most farmers buy insurance the way it is offered, a vehicle here and a building there, without ever listing what could actually sink the farm. A single page ranking hurricane, flood, drought, fire, theft, animal disease, machinery breakdown and liability by likely cost shows where cover matters and where it would be money wasted. Every later decision in this area starts from that page.

                ## Milestones
                1. Every major risk to the farm listed, from wind and flood to a visitor injured on the property.
                2. Each risk scored for how often it happens locally and what one bad event would cost.
                3. The five risks with the largest likely cost marked as the ones cover must address first.
                4. Risks you have decided to carry yourself noted with a reason.

                ## Notes
                Start from the **Risk register** template. Ask a neighbour who has farmed the same district for twenty years what has gone wrong; their memory is better than any national statistic for your hillside or flood plain.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written risk register lists at least eight farm risks, each scored for frequency and cost, with the top five marked for cover."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every event that has cost the farm money in the last ten years"
                - "Ask two long-standing neighbours what losses the district has seen"
                - "Score each risk for how often it happens and the cost of one event"
                - "Mark the five risks that would hurt the business most"
            - name: Register of insurable farm assets with values
              description: |-
                ## Purpose
                An insurer cannot cover what you cannot describe, and a claim is paid against the schedule, not against what you remember owning. Listing buildings, pens, greenhouses, tanks, pumps, solar panels, tractors, implements and tools with serial numbers, age and a realistic replacement value gives you the schedule every quote and every claim will need.

                ## Milestones
                1. Every building and fixed structure listed with size, materials and age.
                2. Machinery, pumps, generators and solar equipment listed with make, model and serial number.
                3. A replacement value against each item, based on a current quote or price list.
                4. Purchase receipts or invoices filed against the items that have them.

                ## Notes
                Value at what it would cost to replace today, not what you paid. Steel, roofing and pumps have all risen in price, and an old figure leaves you underinsured on every claim.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An asset register lists every building, structure and machine on the farm with identifiers and a current replacement value."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk the farm and list every building, pen, tank and structure"
                - "Record make, model and serial number for each machine and pump"
                - "Get current prices for replacing the five most valuable items"
                - "File purchase receipts in the same folder as the register"
            - name: Reading the policies you already hold
              description: |-
                ## Purpose
                Many farms already have some cover without knowing what it does: a vehicle policy, a house policy that may or may not include the pen beside it, a loan-linked policy the bank arranged. Reading each one for what is insured, what is excluded, the excess and the renewal date often reveals gaps and double cover in the same afternoon.

                ## Milestones
                1. Every current policy schedule and wording gathered in one place.
                2. A one-line summary of each policy: what it covers, sum insured, excess and renewal date.
                3. Farm buildings, stock or activities that fall outside every policy identified.
                4. Any item insured twice, or insured for the wrong value, noted for the next renewal.

                ## Notes
                Domestic house policies often exclude business use. If you run a packing shed or keep feed in the garage, check the wording before assuming it is covered.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each current policy is summarised in one line with cover, sum insured, excess and renewal date, and a written list of gaps exists."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the schedule and full wording for every current policy"
                - "Ask the agent to summarise each wording into cover, exclusions and excess"
                - "Check whether farm buildings and stock appear on any schedule"
                - "Write down every gap and every case of double cover"
            - name: Who insures farms in your country
              description: |-
                ## Purpose
                Farm cover is thin in much of the Caribbean: some insurers will not write crops at all, some write livestock only through a cooperative, and a few islands have parametric weather products sold through local insurers or credit unions. Finding out which brokers, insurers, farmer associations and development bank schemes actually write agricultural risk saves weeks of asking the wrong people.

                ## Milestones
                1. A list of insurers and brokers in your country that write farm property, livestock or crop cover.
                2. Any farmer organisation, commodity board or cooperative scheme offering group cover identified.
                3. Any parametric or index-based product available locally noted with who sells it.
                4. Contact names and the type of cover each one writes recorded.

                ## Notes
                Ask your extension officer and the agricultural development bank; they usually know which insurers have paid farm claims recently. The insurance regulator's website normally lists licensed insurers and brokers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A contact list names at least three sources of farm cover in your country, with the classes of risk each one writes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the list of licensed insurers and brokers from the regulator"
                - "Ask your extension officer which insurers have paid farm claims lately"
                - "Ask your farmer group or commodity board about any group scheme"
                - "Record each contact with the classes of farm cover they write"
            - name: Replacement cost versus market value for farm buildings
              description: |-
                ## Purpose
                A twenty-year-old block pen might sell for little but cost a great deal to rebuild, and the basis you insure on decides which figure the insurer pays. Under an average clause, a building insured for half its true value may receive only half of any claim, even a small one. Settling the right valuation basis before the next renewal avoids the most common shock in farm claims.

                ## Milestones
                1. The valuation basis on each current building policy identified: reinstatement, indemnity or agreed value.
                2. A rebuild estimate for the main buildings from a contractor, quantity surveyor or recent price list.
                3. The sum insured compared with the rebuild estimate and any shortfall calculated.
                4. A decision on basis and sum insured recorded for the next renewal.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each insured building has a recorded valuation basis and a sum insured within ten percent of a current rebuild estimate."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the valuation basis written on each building policy schedule"
                - "Ask a contractor for a rough rebuild price per square metre"
                - "Work out the rebuild cost of each main building"
                - "Note the sum insured you will ask for at renewal"
            - name: Dated photo and video baseline of the farm
              description: |-
                ## Purpose
                After a storm, the hardest thing to prove is what was standing before it. A dated walk-through video and a set of photos of every building, roof, structure, machine, crop block and animal group, stored off the farm, turns a disputed claim into a quick one. It takes a morning and costs nothing.

                ## Milestones
                1. A walk-through video of the whole farm recorded with the date visible or noted.
                2. Close photos of roofs, structures, serial plates and crop blocks taken.
                3. Files stored in cloud storage and on one device kept off the farm.
                4. A short index linking each photo set to the asset register.

                ## Notes
                Shoot crop blocks from the same marked spots each time so before and after photos can be compared directly.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated video and photo set covering every asset on the register is stored in two places away from the farm."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record a slow walk-through video of every building and field"
                - "Photograph serial plates on each machine, pump and generator"
                - "Upload the files to cloud storage and copy them to an off-farm device"
                - "Refresh the photo set of structures, crops and animals @recurring(quarterly)"
            - name: Insurance folder and policy register
              description: |-
                ## Purpose
                Policies kept in a drawer in the farmhouse are lost in exactly the event you need them for. One register listing every policy number, insurer, broker contact, renewal date and claims line, kept on paper and in the cloud, means you can report a loss from a phone on the roadside the morning after.

                ## Milestones
                1. A register listing each policy with number, insurer, broker, renewal date and claims phone number.
                2. Scanned copies of every schedule and wording stored in the cloud.
                3. A paper copy of the register kept with a family member off the farm.
                4. Claims numbers saved in your phone and a partner's phone.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A policy register exists in the cloud and on paper off the farm, and the claims numbers are saved in two phones."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a register with policy number, insurer, broker, renewal date and claims line"
                - "Scan every schedule and wording into one cloud folder"
                - "Give a printed copy of the register to a family member off the farm"
                - "Save each claims phone number in two phones"
            - name: What to insure, self-insure or simply accept
              description: |-
                ## Purpose
                No farm can afford to insure everything, and some risks, like a single goat dying, are cheaper to carry than to cover. Sorting each risk from the map into insure, self-insure from savings, reduce on the farm or accept gives you a clear brief for brokers and stops premiums growing by habit.

                ## Milestones
                1. Each risk on the map placed in one of four groups: insure, self-insure, reduce or accept.
                2. The largest loss the farm could absorb from cash without borrowing worked out.
                3. Risks costing more than that figure placed in the insure group by default.
                4. A one-page brief for brokers listing what you want quoted.

                ## Notes
                A useful rule: insure what would close the business, self-insure what would hurt for a season, and accept the small, frequent losses.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every risk on the farm risk map is assigned to insure, self-insure, reduce or accept, and a written broker brief lists the cover wanted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out the largest loss the farm could pay from cash this year"
                - "Place each mapped risk in insure, self-insure, reduce or accept"
                - "Write a one-page brief listing the cover you want quoted"
                - "Share the brief with whoever helps run the farm for comment"
            - name: Annual farm insurance budget line
              description: |-
                ## Purpose
                Premiums arrive at different times of year and are easy to underestimate until three fall due in the same month as fertiliser. Adding them up, setting them against turnover and putting the total in the farm budget shows what protection really costs and whether it is in proportion to the business.

                ## Milestones
                1. Every premium, levy and broker fee for the year totalled.
                2. Premiums shown as a percentage of last year's farm turnover.
                3. Due months marked against the seasonal cash flow.
                4. A yearly insurance line agreed in the farm budget.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A yearly insurance cost total, its share of turnover and the month each premium falls due are written into the farm budget."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Total every premium, stamp duty and broker fee for the year"
                - "Divide the total by last year's turnover"
                - "Mark the month each premium falls due on the cash flow"
                - "Ask the broker whether any premium can be paid in instalments"
            - name: Policy renewal calendar and pre-renewal check
              description: |-
                ## Purpose
                Renewals that roll over unread keep old sums insured, old exclusions and assets you sold years ago. A calendar that flags each renewal sixty days ahead gives time to update values, ask for quotes and make changes, instead of signing whatever arrives in the post the week it lapses.

                ## Milestones
                1. Every renewal date on one calendar with a reminder sixty days before.
                2. A short pre-renewal checklist: values, new assets, sold assets, claims, changes in farming.
                3. The checklist completed before each renewal this year.
                4. Changes requested in writing and confirmed on the new schedule.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every policy renewed this year had its pre-renewal checklist completed at least thirty days before the renewal date."
                cadence: rolling
              tasks:
                - "Put every renewal date in the calendar with a sixty-day reminder"
                - "Write a five-point pre-renewal checklist"
                - "Check which policies renew in the next sixty days @recurring(monthly:2)"
                - "Confirm requested changes appear on each new schedule"
            - name: Self-insurance fund for farm losses
              description: |-
                ## Purpose
                The losses insurers will not touch, such as a failed planting, a sick sow or the first slice of every claim under the excess, still have to be paid by someone. A separate account fed by a fixed transfer each month turns those losses into a planned expense rather than a reason to borrow at the agro shop.

                ## Milestones
                1. A separate savings account opened and named for farm losses.
                2. A target balance set, usually the total of your excesses plus one season of uninsured losses.
                3. A fixed monthly transfer running automatically.
                4. Clear written rules for what the fund may be spent on.

                ## Notes
                Start from the **Savings goal** template. Refill the fund before anything else after a draw, or it will quietly become the spare cash account.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named loss fund receives a fixed monthly transfer and its balance is reviewed against a written target every quarter."
                cadence: rolling
              tasks:
                - "Open a separate savings account named for farm losses"
                - "Add up all policy excesses to set a first target balance"
                - "Transfer the agreed amount into the loss fund @recurring(monthly:9)"
                - "Review the fund balance against the target @recurring(quarterly)"
            - name: Keeping the asset schedule current
              description: |-
                ## Purpose
                New pumps bought in March are not insured until the insurer knows about them, and a tractor sold last year is still costing premium. Updating the asset register and telling the broker each month keeps the schedule matching the farm, which is what a claims assessor will check first.

                ## Milestones
                1. Each new purchase added to the register with value and serial number in the month it arrives.
                2. Sold, scrapped or stolen items removed from the register.
                3. The broker told of additions and removals in writing.
                4. Endorsements from the insurer filed with the policy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every asset bought or sold in the last twelve months appears correctly on both the farm register and the insurer's schedule."
                cadence: rolling
              tasks:
                - "Update the asset register with this month's purchases and disposals @recurring(monthly:17)"
                - "Email the broker a list of additions and removals"
                - "File each endorsement the insurer sends back"
                - "Check one high-value item against the schedule at random"
            - name: Planting declarations for crop cover
              description: |-
                ## Purpose
                Where crop or banana cover exists, it usually depends on declaring what was planted, where and when, and an undeclared block is simply not insured. A monthly routine for sending planting details and keeping the insurer's acknowledgement protects every block, not just the ones you remembered to mention.

                ## Milestones
                1. The policy's declaration rules noted: what to report, by when and in what form.
                2. Every planting recorded with block, crop, area and planting date.
                3. Declarations sent within the policy's deadline after each planting.
                4. Acknowledgements from the insurer filed against each block.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every planting made during the policy year has a declaration and an insurer acknowledgement on file."
                cadence: rolling
              tasks:
                - "Write down the declaration rules from the crop policy wording"
                - "Set up a simple planting log by block, crop, area and date"
                - "Check every planting this month has been declared @recurring(monthly:4)"
                - "File each insurer acknowledgement next to the planting log"
            - name: Livestock headcount and value for the policy
              description: |-
                ## Purpose
                Livestock policies pay on animals the insurer knows about, at values that may have been set two years ago when calves were cheaper. A monthly headcount by tag and a quarterly value check keep the declared herd or flock in line with what is in the pen, so a loss is paid in full.

                ## Milestones
                1. A list of insured animals by tag, class and declared value.
                2. A monthly headcount matched against the list.
                3. Births, sales, deaths and purchases reported to the insurer as the policy requires.
                4. Declared values checked against recent sale or market prices each quarter.

                ## Notes
                Keep the vet's records and the sales receipts in the same folder as the headcount. A death claim usually needs all three.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The insurer's list of animals matches the monthly tag count within one head, and declared values are within fifteen percent of recent prices."
                cadence: rolling
              tasks:
                - "Get the current list of insured animals from the insurer"
                - "Count animals by tag and compare with the list @recurring(monthly:23)"
                - "Check declared values against recent sale prices @recurring(quarterly)"
                - "Report births, deaths, sales and purchases to the broker"
            - name: Premium payments and lapse watch
              description: |-
                ## Purpose
                One missed instalment can lapse a policy without much warning, and finding that out after a storm is a disaster no one recovers from easily. Tracking each premium, how it is paid and the grace period, with a monthly check that payments went through, closes that gap.

                ## Milestones
                1. Each policy's premium amount, payment method and grace period listed.
                2. Instalments set to pay automatically where the insurer allows it.
                3. Proof of payment kept for every instalment.
                4. No policy lapsed for non-payment during the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Proof of payment exists for every premium instalment in the year and no policy lapsed for non-payment."
                cadence: rolling
              tasks:
                - "List each premium with amount, due day, method and grace period"
                - "Ask the insurer to set instalments to pay automatically"
                - "Confirm this month's premium payments cleared @recurring(monthly:12)"
                - "File proof of every payment in the insurance folder"
            - name: Cover check before hurricane season
              description: |-
                ## Purpose
                Insurers commonly stop writing new windstorm cover or increasing sums insured once a named storm is forming nearby, so the time to fix your cover is May, not the week of a warning. A yearly check before the season starts confirms that wind cover is in force, values are current and the claims routine is ready.

                ## Milestones
                1. Confirmation that every key policy includes windstorm and flood where available.
                2. Sums insured and windstorm excesses checked against current values.
                3. Any binding restrictions during a storm watch noted from the wording.
                4. Photos, register and claims contacts confirmed up to date before the season.

                ## Notes
                Windstorm excesses are often a percentage of the sum insured rather than a fixed figure. Work out what that means in money for your largest building.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before each hurricane season a written check confirms windstorm cover, current sums insured and the excess in money for each key policy."
                cadence: cyclic
              tasks:
                - "Confirm windstorm and flood cover on each key policy before the season @recurring(yearly)"
                - "Work out the windstorm excess in money for your largest building"
                - "Find the clause on cover restrictions during a storm watch"
                - "Check the photo baseline and policy register are current"
            - name: Loss and near-miss log
              description: |-
                ## Purpose
                Small losses that are never claimed still tell a story: which block floods, which shed leaks, how often animals die. A running log of every loss and near miss, with dates, costs and photos, shows insurers a well-managed farm at renewal, supports future claims and tells you where the self-insurance fund is really going.

                ## Milestones
                1. A log with date, event, cost, photos and whether it was claimed.
                2. Every loss over a set amount recorded within a week.
                3. A monthly look at the log for patterns.
                4. A yearly total of uninsured losses carried into the risk plan.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The loss log holds an entry with date, cost and evidence for every loss above the set threshold in the last twelve months."
                cadence: rolling
              tasks:
                - "Set up a log with date, event, cost, photos and claimed or not"
                - "Agree the smallest loss worth recording"
                - "Review the log for repeated losses @recurring(monthly:27)"
                - "Total the year's uninsured losses for the risk plan"
            - name: Rainfall and weather records for claims
              description: |-
                ## Purpose
                Drought, excess rain and wind claims are argued over weather, and the nearest official station may be twenty kilometres and one ridge away. A rain gauge read every morning, with notes on wind and flooding, gives your own record to set beside the insurer's data and shows how well any parametric trigger matches what your fields felt.

                ## Milestones
                1. A rain gauge installed in an open spot away from trees and roofs.
                2. A daily reading recorded with the date.
                3. Storm, wind and flood notes and photos added on the day they happen.
                4. A monthly total compared with the nearest official station.

                ## Notes
                Start from the **Metrics log** template. A simple plastic gauge read at the same time each morning is enough; consistency matters more than precision.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily rainfall record with no more than five missing days a month exists for the last twelve months, alongside monthly station comparisons."
                cadence: rolling
              tasks:
                - "Fix a rain gauge in an open spot clear of trees and roofs"
                - "Read and record the rain gauge each morning @recurring(daily)"
                - "Compare the monthly total with the nearest official station @recurring(monthly:28)"
                - "Add photos and notes on the day of any storm or flood"
            - name: Reading policy wording, perils, exclusions and conditions
              description: |-
                ## Purpose
                Two policies with the same price can pay completely differently, and the difference is in the wording almost no one reads. Learning how a policy is built, schedule, insuring clause, exclusions, conditions and definitions, lets you spot the clause that would void a claim, such as an unoccupied building rule or a security condition on the tool shed.

                ## Milestones
                1. The parts of a policy identified in one of your own policies.
                2. Every exclusion in that policy listed in plain words.
                3. Conditions you must meet to be paid, such as notice periods and security, written down.
                4. Three questions for the broker drawn from what you found.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-words summary of one policy's exclusions and conditions exists, with three questions answered by the broker."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark the schedule, insuring clause, exclusions and conditions in one policy"
                - "Rewrite each exclusion in one plain sentence"
                - "List every condition you must meet for a claim to be paid"
                - "Ask the broker three questions about clauses you are unsure of"
            - name: How excess, deductibles and average change a payout
              description: |-
                ## Purpose
                Farmers are often shocked by a payout that is a fraction of the loss, not because the insurer cheated but because the excess, a percentage windstorm deductible and the average clause all applied at once. Working two examples through on your own figures shows exactly what you would receive and where to change the cover.

                ## Milestones
                1. The excess, any percentage deductible and the average clause found in your property policy.
                2. A worked example for a small loss on a fully insured building.
                3. A worked example for a large loss on an underinsured building.
                4. The changes that would raise the payout noted for renewal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two worked payout examples using your own policy terms are written down, with the gap between loss and payout shown in money."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the excess, deductible and average clause in your property policy"
                - "Work through a small loss on a fully insured building"
                - "Work through a large loss on a building insured at sixty percent of value"
                - "Note what change would close the gap"
            - name: How parametric weather insurance works
              description: |-
                ## Purpose
                Parametric products pay a set amount when a measured index, such as wind speed in a grid cell or rainfall over a period, passes a trigger, without a loss adjuster visiting. They pay fast, but they can also pay nothing after real damage if the index misses your farm. Understanding triggers, payout scales and basis risk lets you judge whether a product like the livelihood policies sold in some islands fits your farm.

                ## Milestones
                1. The difference between parametric and indemnity cover explained in your own words.
                2. The trigger, index source and payout scale of one available product written down.
                3. Basis risk described with an example from your own location.
                4. A list of questions to ask the seller before buying.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains one available parametric product's trigger, data source, payout scale and basis risk for your farm."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get the product sheet for a parametric policy sold in your country"
                - "Write down its trigger, data source and payout scale"
                - "Check past storms against the trigger using your own weather notes"
                - "List questions about basis risk for the seller"
            - name: Named perils versus all risks for farm property
              description: |-
                ## Purpose
                Under a named perils policy the insurer pays only for the causes listed, while an all risks policy pays for anything not excluded, and the gap matters for things like a collapsed shade house or a burst tank. Knowing which form you hold and what each would have paid for your last three losses makes the price difference meaningful.

                ## Milestones
                1. The form of each property policy identified as named perils or all risks.
                2. The list of insured perils or the list of exclusions copied out.
                3. Your last three losses tested against both forms.
                4. A view on whether the wider form is worth asking a price for.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your last three farm losses have been tested against both policy forms and a written view on which form to price exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether each property policy is named perils or all risks"
                - "Copy out the insured perils or exclusions list"
                - "Test your last three losses against each form"
                - "Ask the broker to price the wider form if it would have paid"
            - name: Rehearsing the claims process before a loss
              description: |-
                ## Purpose
                The days after a loss are the worst time to learn how to claim. Walking through the process with the broker now, who to call, how fast, what evidence, whether you may start repairs, means the first call after a storm is made from a checklist, not from memory and panic.

                ## Milestones
                1. The notice period and reporting method for each policy written down.
                2. The evidence each insurer expects for a property, crop and livestock claim listed.
                3. The rules on emergency repairs and salvage before an adjuster visits noted.
                4. A one-page claim routine printed and kept with the policy register.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A printed one-page claim routine covers notice, evidence and repair rules for each policy and sits with the policy register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the broker to walk you through a typical farm claim"
                - "Write down each policy's notice period and reporting method"
                - "Note what repairs you may start before the adjuster visits"
                - "Print the claim routine and file it with the policy register"
            - name: Liability cover for visitors, buyers and the public
              description: |-
                ## Purpose
                A school group on a farm tour, a buyer slipping in the packing shed or a cow on the main road can produce a claim far larger than any storm damage. Learning what public liability and product liability cover, and where your current policies stop, matters most once the farm opens its gate to the public or sells food it has handled.

                ## Milestones
                1. Every way the public, buyers or contractors come onto the farm listed.
                2. The difference between public, product and employers' liability noted in plain words.
                3. Your current liability cover, if any, and its limit identified.
                4. A request for a liability quote sent if a gap was found.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note lists the farm's liability exposures, the current limit of cover and whether a quote has been requested."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every way visitors, buyers and contractors come onto the farm"
                - "Check whether any current policy includes public liability"
                - "Ask the broker what product liability would cover for produce you sell"
                - "Request a liability quote if there is no cover"
            - name: Business interruption and loss of income cover
              description: |-
                ## Purpose
                When a broiler house burns down, the building claim pays for the rebuild but not the six months without birds and the buyer contract you lose. Business interruption cover pays for lost gross profit during repair, and understanding the indemnity period and how gross profit is defined shows whether it is worth adding for your enterprises.

                ## Milestones
                1. How business interruption is triggered and calculated explained in your own words.
                2. Your gross profit worked out the way the insurer defines it.
                3. A realistic rebuild and restocking time estimated for the main enterprise.
                4. A decision on whether to price the cover recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A gross profit figure, an indemnity period estimate and a recorded decision on business interruption cover exist for the main enterprise."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the broker how farm business interruption cover is calculated"
                - "Work out last year's gross profit for the main enterprise"
                - "Estimate how long a rebuild and restock would take"
                - "Record whether you will price the cover at renewal"
            - name: Comparing three quotes for farm property cover
              description: |-
                ## Purpose
                Farm quotes rarely compare like for like: one has a lower premium and a higher windstorm excess, another excludes greenhouses, a third insures on indemnity. Laying three quotes side by side against the same broker brief, with the excess, exclusions and valuation basis in columns, shows the real best value instead of the lowest number.

                ## Milestones
                1. Three quotes received against the same written brief.
                2. A table comparing premium, excesses, sums insured, basis, exclusions and conditions.
                3. The payout each would give on a sample large loss worked out.
                4. A choice made and the reasons written down.

                ## Notes
                Start from the **Purchase decision** template. If an insurer will not quote, ask why; the answer often points at a risk improvement worth making.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table of three quotes against one brief, with a sample payout for each and the chosen quote recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Send the same broker brief to three insurers or brokers"
                - "Build a table of premium, excess, basis, exclusions and conditions"
                - "Work out what each quote would pay on the same large loss"
                - "Record the chosen quote and the reasons"
            - name: Choosing a broker or dealing direct
              description: |-
                ## Purpose
                Good brokers who know farms can find markets you cannot reach and will argue your claim; poor ones simply renew. Interviewing two brokers and one direct insurer on farm experience, claims support and fees makes the choice on evidence, and gives you a named person to call after a loss.

                ## Milestones
                1. Two brokers and one direct insurer interviewed with the same questions.
                2. Each asked for examples of farm claims they handled.
                3. Fees and commission explained by each.
                4. A choice recorded with the contact details of the named person.

                ## Notes
                Start from the **Vendor** template. Ask whether the broker will attend a large loss on site; the answer separates the farm specialists from the rest.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three providers have answered the same written questions and a chosen broker or insurer is recorded with a named contact."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write six questions on farm experience, claims support and fees"
                - "Interview two brokers and one direct insurer with the same questions"
                - "Ask each for an example of a farm claim they handled"
                - "Record the choice and the named contact person"
            - name: Deciding whether to buy parametric weather cover
              description: |-
                ## Purpose
                Parametric policies can put cash in your hand within weeks of a hurricane or extreme rain, which is exactly when a farm needs it to replant and pay workers. Whether it is worth the premium depends on how well the trigger matches your farm and how big the payout is against your losses. Making the decision on numbers, not on a sales pitch, is the point.

                ## Milestones
                1. The payout for past storms or rain events estimated using the product's trigger.
                2. The premium compared with the expected payouts over ten years.
                3. The cover's role against your indemnity policies and loss fund described.
                4. A buy or decline decision recorded with reasons.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written buy or decline decision on a parametric product, supported by a ten-year comparison of premium and estimated payouts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the seller which past events would have triggered a payout"
                - "Estimate total payouts over the last ten years against the premium"
                - "Describe how the payout would sit beside your other cover"
                - "Record your buy or decline decision with reasons"
            - name: Choosing machinery cover level
              description: |-
                ## Purpose
                Tractors can be insured for fire and theft only, for comprehensive damage on and off the road, or with breakdown cover on top, and the right level depends on the machine's age, value and whether it works on public roads. Deciding item by item stops you paying comprehensive premium on an old disc harrow while a new sprayer goes uncovered.

                ## Milestones
                1. Each machine listed with value, age and whether it travels on public roads.
                2. The cover options available for farm machinery priced.
                3. A cover level chosen for each machine with a reason.
                4. Road use checked against the licensing and motor insurance rules in your country.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every machine on the asset register has a recorded cover level and a reason, and road-going machines have the required motor cover."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark which machines travel on public roads"
                - "Ask the broker to price fire and theft, comprehensive and breakdown cover"
                - "Choose a cover level for each machine and write the reason"
                - "Check road-going machines meet motor insurance rules"
            - name: Insuring greenhouses and shade houses
              description: |-
                ## Purpose
                Many insurers decline protected structures or exclude the covering, which is the part most likely to tear in a strong wind. Giving the insurer the structure's design wind rating, anchoring details and the age of the plastic or netting is often the difference between a decline and a quote, and between a paid claim and a rejected one.

                ## Milestones
                1. The manufacturer's wind rating, anchoring method and covering age documented for each structure.
                2. Each insurer's position on structures, coverings and crops inside them recorded.
                3. A quote obtained that names the structures and states what is covered.
                4. Any condition, such as removing the covering when a storm is forecast, written into your routine.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each protected structure has its specifications on file and a written insurer position on cover, with any conditions added to the farm routine."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the manufacturer's wind rating and anchoring details for each structure"
                - "Record the installation date of each plastic or net covering"
                - "Ask two insurers whether they cover the frame, covering and crop"
                - "Add any policy condition on storm preparation to your routine"
            - name: Raising the excess to lower the premium
              description: |-
                ## Purpose
                Once a loss fund exists, a higher excess can cut the premium noticeably, because you stop paying the insurer to handle small claims you could cover yourself. Pricing two or three excess levels and checking each against the fund balance shows whether the saving is real and safe.

                ## Milestones
                1. Premiums quoted at the current excess and two higher levels.
                2. The yearly saving at each level compared with the extra cost of a typical claim.
                3. The loss fund balance checked against the highest excess considered.
                4. An excess level chosen and recorded for renewal.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three excess levels have been priced and compared with the loss fund, and the chosen level is recorded for the next renewal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the broker for premiums at three excess levels"
                - "Compare each saving with the extra cost of a typical claim"
                - "Check the loss fund could pay the highest excess twice"
                - "Record the excess level you will take at renewal"
            - name: Acting on the insurer's risk recommendations
              description: |-
                ## Purpose
                After a survey, insurers often send a list of recommendations, such as fire extinguishers in the feed store, a clear gap around the fuel tank or new wiring in the pen. Some are conditions of cover. Working through them on a dated list protects the policy and often brings the premium down at the next renewal.

                ## Milestones
                1. The insurer's recommendations listed with any that are conditions marked.
                2. A cost and a completion date set against each recommendation.
                3. Each completed item photographed and reported to the insurer.
                4. Fire equipment and other safety items checked on a regular round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every recommendation that is a condition of cover is completed, photographed and reported to the insurer in writing."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every survey recommendation and mark the conditions of cover"
                - "Set a cost and completion date for each item"
                - "Send the insurer photos of each completed item"
                - "Check fire extinguishers and fuel storage on a farm walk @recurring(quarterly)"
            - name: Product liability before selling to hotels and supermarkets
              description: |-
                ## Purpose
                Hotel groups and supermarket chains increasingly ask suppliers for a certificate of insurance showing product liability up to a stated limit before the first order. Arranging cover that names your products and meets the buyer's limit, before the contract meeting, keeps a supply deal from stalling on paperwork.

                ## Milestones
                1. The liability limit and wording each target buyer asks for written down.
                2. A product liability quote that names the produce or products you sell.
                3. Cover bought and a certificate of insurance issued.
                4. The certificate's expiry date added to the renewal calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A certificate of insurance showing product liability at the limit buyers require is on file, with its expiry on the renewal calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each target buyer what liability limit they require"
                - "Request a product liability quote that names your products"
                - "Get a certificate of insurance once cover is bought"
                - "Add the certificate expiry to the renewal calendar"
            - name: Preparing for the insurer's farm survey
              description: |-
                ## Purpose
                Before writing or renewing a sizeable farm policy, many insurers send a surveyor to look at buildings, wiring, fuel storage, housekeeping and security. A tidy farm, a ready asset register and answers to the obvious questions can change the premium, the terms and whether cover is offered at all.

                ## Milestones
                1. A date agreed for the survey visit.
                2. The asset register, photos and past loss log printed for the surveyor.
                3. Obvious hazards such as loose wiring, rubbish near buildings and open fuel cleared.
                4. Notes taken during the visit and any recommendations requested in writing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The survey has taken place with the register and loss log provided, and the surveyor's recommendations have been received in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a survey date with the broker or insurer"
                - "Print the asset register, photo index and loss log"
                - "Clear hazards around buildings, wiring and fuel storage"
                - "Ask the surveyor to send recommendations in writing"
            - name: Making a claim after a storm or flood
              description: |-
                ## Purpose
                Speed and evidence decide most farm claims after a hurricane or flood, and insurers receive thousands of calls in the same week. Reporting within the notice period, photographing before clearing, keeping damaged items where safe and logging every emergency cost puts your file near the front of the queue and gives the adjuster little to dispute.

                ## Milestones
                1. The loss reported to the insurer within the notice period, with a claim number recorded.
                2. Damage photographed and filmed before any clearing or repair.
                3. Emergency costs to prevent further loss kept with receipts.
                4. A claim pack of photos, register extracts and quotes sent to the adjuster.

                ## Notes
                Start from the **Operational checklist** template. Do not throw away damaged items until the adjuster has seen them or agreed in writing; it is the most common reason a claim is reduced.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The claim was reported within the notice period and a complete pack of photos, receipts and quotes reached the adjuster within two weeks."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Phone the claims line and record the claim number"
                - "Photograph and film all damage before clearing anything"
                - "Keep receipts for every emergency repair and tarpaulin"
                - "Send the adjuster a claim pack with photos, register extracts and quotes"
            - name: Livestock death or theft claim
              description: |-
                ## Purpose
                Insurers handling a livestock claim usually need proof that the animal existed, was insured, was yours and died or went missing the way you say. A vet's certificate or post-mortem, tag and breeding records, a police report for theft and fast notification are the pieces insurers ask for. Gathering them in the first forty-eight hours is far easier than later.

                ## Milestones
                1. The insurer notified within the policy's deadline.
                2. A vet's certificate or post-mortem report obtained for a death.
                3. A police report number obtained for theft.
                4. Tag records, photos and purchase or valuation evidence sent with the claim form.

                ## Notes
                Check the policy before disposing of a carcass; some insurers require the vet or adjuster to see it first.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The insurer was notified within its deadline and received a vet certificate or police report plus tag and value evidence."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Notify the insurer of the death or loss and note the reference"
                - "Ask the vet for a certificate or post-mortem report"
                - "Report a theft to the police and record the report number"
                - "Send tag records, photos and value evidence with the claim form"
            - name: Challenging a declined or low claim offer
              description: |-
                ## Purpose
                Some farm claims are declined or settled low because of a misread clause, missing evidence or a valuation the farmer never questioned. A calm, written challenge that quotes the wording, adds the missing evidence and uses the insurer's complaints process, and then the ombudsman or regulator if needed, recovers money that many farmers simply leave behind.

                ## Milestones
                1. The insurer's reasons for declining or reducing the claim received in writing.
                2. The policy clauses they rely on read against the facts.
                3. A written challenge sent with any extra evidence.
                4. The complaint escalated to the ombudsman or regulator if unresolved within the stated time.

                ## Notes
                For a large or complex claim, consider an independent loss assessor or an attorney. Ask about their fees before signing anything.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written challenge citing the policy wording was sent, and a final response or escalation reference is on file."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the insurer to state its reasons in writing"
                - "Read the clauses they cite against what happened"
                - "Ask the agent to draft a challenge letter quoting the wording"
                - "Find the ombudsman or regulator complaint route in your country"
            - name: Annual renewal meeting with the broker
              description: |-
                ## Purpose
                Sitting down with the broker once a year, armed with the asset register, loss log and changes to the farm, turns renewal from a bill into a negotiation. Insurers price well-documented farms with improving loss records more kindly, and the meeting is the moment to ask for the cover gaps from the risk map to be filled.

                ## Milestones
                1. A meeting booked at least six weeks before the main renewal.
                2. An update pack prepared: register, loss log, improvements and changes in farming.
                3. Requested changes and premium questions put to the broker.
                4. Agreed changes confirmed in writing before the renewal date.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The renewal meeting took place six weeks before renewal and the agreed changes are confirmed in writing on the new schedule."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the broker meeting six weeks before the main renewal"
                - "Prepare a pack with register, loss log and farm improvements"
                - "List the gaps from the risk map you want quoted"
                - "Get the agreed changes confirmed in writing"
            - name: Reinstating cover and rebuilding after settlement
              description: |-
                ## Purpose
                Paying a claim can reduce the sum insured for the rest of the year, and a rebuilt structure may be worth more or be built differently from the original. Reinstating the sum insured, telling the insurer about the new building and keeping receipts for the rebuild closes the loop so the next storm does not find the farm underinsured.

                ## Milestones
                1. The settlement amount and any reduction in sum insured confirmed in writing.
                2. The sum insured reinstated where the policy allows.
                3. Rebuild receipts and photos filed against the claim.
                4. The asset register and schedule updated for the rebuilt or replaced items.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "After a paid claim the sum insured is reinstated and the rebuilt items appear on both the asset register and the insurer's schedule."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the insurer whether the claim reduced the sum insured"
                - "Request reinstatement of the sum insured in writing"
                - "File rebuild receipts and photos with the claim record"
                - "Update the register and schedule with the replaced items"
            - name: Cover for a new farm in its first year
              description: |-
                ## Purpose
                New farms have no claims history, few records and money tied up in fencing, water and planting material, which makes them both harder to insure and more fragile. Starting with liability, the main structures and any equipment on loan, then widening cover as records build, protects the investment without spending the start-up budget on premiums.

                ## Milestones
                1. The few risks that would end the venture in year one identified.
                2. Liability and main structure cover in place before the first visitors or workers arrive.
                3. Records started that insurers will want next year: assets, plantings, losses, rainfall.
                4. A plan to widen cover at the first renewal written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new farm has liability and main structure cover in place and a written plan for widening cover at its first renewal."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the three losses that would end the venture in year one"
                - "Arrange liability cover before the first worker or visitor arrives"
                - "Insure the main structure and any borrowed equipment"
                - "Write the cover you will add at the first renewal"
            - name: Meeting insurance conditions in a loan or lease
              description: |-
                ## Purpose
                Lenders and landlords often require cover on the asset they finance or own, with their name on the policy as loss payee or interested party, and proof every year. Missing that condition can put a loan in default even when repayments are up to date. Matching the policy to the agreement, and sending proof on time, keeps both relationships clean.

                ## Milestones
                1. The insurance clauses in each loan, hire purchase and lease agreement copied out.
                2. The lender or landlord named correctly on the relevant policy.
                3. Sums insured meeting the agreement's minimum.
                4. Proof of cover sent and acknowledged at each renewal.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every finance or lease agreement's insurance clause is met, with the right party named and proof of renewal acknowledged each year."
                cadence: rolling
              tasks:
                - "Copy the insurance clause from every loan and lease agreement"
                - "Ask the broker to name each lender or landlord as required"
                - "Check sums insured meet each agreement's minimum"
                - "Send each lender or landlord proof of renewal @recurring(yearly)"
            - name: Insuring a farm on family land
              description: |-
                ## Purpose
                On family land with several heirs, unclear title or one sibling farming while another owns the house, the question of who can insure what is real. Insurers pay the person with an insurable interest, and a policy in the wrong name can fail. Setting out who owns each building, animal and machine, and naming the right people, avoids a family argument becoming an unpaid claim.

                ## Milestones
                1. Ownership of each building, machine and animal group written down.
                2. The family members with a stake in each asset agreed.
                3. Policies in the names of the people who own or are responsible for each asset.
                4. Any shared arrangement explained to the broker in writing.

                ## Notes
                Where ownership of the land itself is unsettled, talk to an attorney about the title; this project is only about getting the insurance names right.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list shows who owns each insured asset and every policy names the right person or persons."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List who owns each building, machine and animal group"
                - "Agree the list with the family members involved"
                - "Ask the broker whose names should be on each policy"
                - "Change any policy that is in the wrong name"
            - name: Cover for a farm that processes or sells direct
              description: |-
                ## Purpose
                Adding a pepper sauce kitchen, a farm stand or a delivery van changes the farm's risks and may fall outside a farm policy altogether. Telling the insurer about each new activity, and adding cover for the kitchen equipment, stock, goods in transit and customers on site, keeps a growing business from outgrowing its insurance unnoticed.

                ## Milestones
                1. Every processing, retail and delivery activity listed with when it started.
                2. Each activity checked against current policy wording.
                3. Cover added for equipment, stock, goods in transit and visiting customers where needed.
                4. The delivery vehicle insured for business use.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every processing, retail and delivery activity is disclosed to the insurer in writing and either covered or recorded as a known gap."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every processing, stand or delivery activity the farm runs"
                - "Disclose each new activity to the broker in writing"
                - "Ask for cover on kitchen equipment, stock and goods in transit"
                - "Check the delivery vehicle is insured for business use"
            - name: Cover for workers and harvest crews
              description: |-
                ## Purpose
                An injury to a worker cutting bananas or driving the tractor can bring a large claim and, in many countries, a legal duty to have employers' liability or workers' compensation cover. Checking what is required where you farm, covering casual harvest crews as well as permanent staff, and keeping the worker list current protects the people and the business.

                ## Milestones
                1. The legal requirement for employers' liability or workers' compensation in your country confirmed.
                2. Cover in place that includes casual and seasonal workers.
                3. Personal accident cover considered for family members who work on the farm.
                4. The worker numbers declared to the insurer kept current.

                ## Notes
                Confirm the legal requirement with the labour department or your broker rather than relying on what other farmers do.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Cover meeting the local legal requirement includes casual workers, and declared worker numbers match the farm's payroll each month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the labour department or broker what cover the law requires"
                - "Confirm the policy includes casual and seasonal harvest workers"
                - "Ask about personal accident cover for family members who work"
                - "Check declared worker numbers match the payroll @recurring(monthly:6)"
            - name: Group cover through a farmer cooperative
              description: |-
                ## Purpose
                Insurers that will not write a single smallholding will sometimes cover a whole cooperative or commodity group, at lower cost and with simpler claims. Exploring a group scheme with your association, and what records each member would need to keep, can bring cover to farms that have never had any.

                ## Milestones
                1. Interest from other members in a group scheme confirmed.
                2. At least one insurer or broker approached about group farm cover.
                3. The records and conditions each member would need written down.
                4. A proposal taken to the cooperative's committee or meeting.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written proposal for group farm cover, with insurer terms and member conditions, has been presented to the cooperative."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the cooperative committee whether members want group cover"
                - "Approach a broker about a group scheme for the members"
                - "Write down the records each member would have to keep"
                - "Present the proposal at the next members' meeting"
            - name: Valuing and insuring tree crops and orchards
              description: |-
                ## Purpose
                Mature cocoa, citrus, nutmeg or mango blocks take years to replace, and the loss after a hurricane is not one season's crop but the income until new trees bear. Insurers that cover trees usually want counts, ages and a valuation method, and knowing how to present those is what separates a specialist tree crop policy from a decline.

                ## Milestones
                1. Trees counted by block, variety and age group.
                2. A replacement and lost-income value per tree or per hectare estimated with the extension service.
                3. Insurers asked whether they cover trees, crop or both, and on what basis.
                4. A decision recorded on cover or self-insurance for the orchard.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tree count by block and age with a per-tree valuation exists, and a recorded decision states how the orchard is protected."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count trees by block, variety and age group"
                - "Ask the extension officer how to value trees by age"
                - "Ask two insurers whether they cover trees, crop or both"
                - "Record whether the orchard will be insured or self-insured"
            - name: Insuring stored produce, feed and inputs
              description: |-
                ## Purpose
                A cold room of peppers, a shed of fertiliser or a month of feed can be worth more than the building around it, and many policies cover stock only up to a low limit or exclude spoilage after a power cut. Declaring a realistic peak stock value and checking spoilage cover protects the money that sits in store between harvest and sale.

                ## Milestones
                1. The highest value of produce, feed and inputs held at any time in the year estimated.
                2. The policy's stock limit and any spoilage or power failure cover checked.
                3. The stock sum insured adjusted to the peak or a seasonal declaration agreed.
                4. A monthly record of stock value kept.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The stock sum insured covers the year's peak value and a monthly stock value record exists for the last six months."
                cadence: rolling
              tasks:
                - "Estimate the highest value of stock held in the past year"
                - "Check the policy's stock limit and spoilage cover"
                - "Ask the broker about a seasonal stock declaration"
                - "Record the value of produce, feed and inputs in store @recurring(monthly:20)"
            - name: Yield history to judge crop cover prices
              description: |-
                ## Purpose
                Crop cover is only worth its premium if it pays more often than you would lose on your own, and you cannot judge that without your own yield and loss history. Building five years of yields per crop, with the bad seasons and their causes, lets you test any crop policy's price and trigger against what actually happens on your land.

                ## Milestones
                1. Yields per crop and block assembled for as many past seasons as records allow.
                2. Each poor season marked with its cause: drought, flood, wind, pest or price.
                3. The payouts a crop policy would have made in those seasons estimated.
                4. A view on whether the premium is fair for your farm recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yield table covering at least three seasons per main crop exists, with estimated policy payouts compared against the premium."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather yield records per crop and block from past seasons"
                - "Mark each poor season with its main cause"
                - "Ask the agent to estimate what a crop policy would have paid each year"
                - "Record whether the premium looks fair for your farm"
            - name: Layered risk plan of savings, parametric and indemnity cover
              description: |-
                ## Purpose
                Experienced farmers rarely rely on one policy; they combine a loss fund for small shocks, parametric cover for fast cash after a big storm, and indemnity cover for buildings and machinery. Writing down how the layers fit, which loss each pays for and where the gaps remain gives you a plan you can explain to a lender, a partner or a successor.

                ## Milestones
                1. Each layer described: loss fund, parametric, indemnity and anything you accept.
                2. Three loss scenarios worked through to show which layer pays and how much.
                3. Remaining gaps listed with a decision on each.
                4. The plan shared with the people who would run the farm after a disaster.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written risk plan shows which layer pays in three loss scenarios and lists every remaining gap with a decision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Describe each layer of protection the farm has now"
                - "Work through a small, a medium and a severe loss scenario"
                - "List the gaps the scenarios reveal and decide on each"
                - "Share the plan with whoever would run the farm after a disaster"
            - name: Five-year loss history and insurance review
              description: |-
                ## Purpose
                Over five years, a farm's claims, uninsured losses and premiums tell you whether insurance has been worth it and give you evidence to negotiate. A yearly review of premiums paid against claims received and losses carried, by policy, shows which cover to keep, which to drop and where to push for better terms.

                ## Milestones
                1. Premiums, claims paid and uninsured losses tabled by year and policy.
                2. A loss ratio for each policy worked out.
                3. Policies that have never paid and protect against minor risks flagged for review.
                4. The findings taken to the next renewal meeting.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of premiums, claims and uninsured losses by year and policy exists, with a loss ratio for each and decisions taken to renewal."
                cadence: cyclic
              tasks:
                - "Table premiums, claims paid and uninsured losses by year"
                - "Work out a loss ratio for each policy"
                - "Review the table and decide what to keep or change @recurring(yearly)"
                - "Take the findings to the next broker meeting"
---

# Agricultural Insurance

This area is for farmers who want to know what would happen to the business after a bad storm, a flood, a fire, a dead bull or a stolen pump, and who would rather sort that out now than in the week after. It starts with foundations (a risk map, an asset register with values and photos, a careful read of the policies you already hold, who insures farms near you and what to self-insure), then the machinery of renewals, declarations, headcounts, rainfall records and a loss fund, the knowledge that makes policy wording and parametric triggers readable, decisions on quotes, brokers, machinery and structure cover, the dated moments of surveys, claims, disputes and renewals, situations such as a first-year farm, a lender's conditions, family land and hired crews, and finally specialist work on tree crops, stored produce, yield history and a layered risk plan.

What repeats is a daily rain gauge reading, monthly checks on renewals, premiums, declarations, the asset register, livestock numbers, stored stock and the loss log on different days, quarterly photo refreshes and fund reviews, and a yearly round of renewals, pre-season cover checks and a loss history review. The Risk register, Savings goal, Metrics log, Purchase decision, Vendor and Operational checklist templates pair with the risk map, the loss fund, the rainfall record, quote comparisons, the broker file and the claim routine. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
