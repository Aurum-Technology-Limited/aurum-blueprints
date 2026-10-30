---
id: founding-startups.hardware-startup-prototyping
name: Hardware Startup Prototyping
description: "A costed bill of materials, staged prototype builds from EVT to PVT, suppliers and a factory you can trust, certification booked early and a first production run signed off against a written quality plan."
category: business
version: 1.0.0
tags: [founding-startups, hardware-startup-prototyping, founder, engineer, hardware, prototyping, manufacturing, certification]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - risk-register
    - metrics-log
    - vendor
    - trip
    - operational-checklist
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Hardware Startup Prototyping
          description: "Taking a physical product from prototype to first production run, with suppliers, certification, costs and long lead times."
          projects:
            - name: Product requirements document for the first device
              description: |-
                ## Purpose
                Hardware punishes vague requirements far harder than software, because a missed requirement found after tooling means cutting steel again. A short requirements document that fixes size, weight, battery life, operating temperature, ingress rating, target markets and target cost gives every engineer, supplier and test lab the same numbers to work to.

                ## Milestones
                1. A requirements document of no more than six pages with every requirement written as a measurable number or a pass and fail test.
                2. Each requirement tagged must, should or could, with no more than fifteen musts.
                3. Target markets listed, since they decide which certification marks the product needs.
                4. The document reviewed and signed off by every founder and the lead engineer.

                ## Notes
                Start from the **Product spec** template. Write requirements as numbers you can test on a bench: 'survives a 1.2 metre drop onto concrete' rather than 'durable'.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off requirements document exists in which every must requirement has a number or a bench test attached."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every number a customer would notice: size, weight, runtime, price"
                - "Tag each requirement as must, should or could"
                - "Write the list of countries you intend to sell into first"
                - "Hold a one-hour sign-off meeting and record the agreed version number"
            - name: Looks-like and works-like prototype split
              description: |-
                ## Purpose
                Trying to make the first prototype both look finished and work fully usually produces a device that does neither. Splitting early work into a looks-like model for customer and investor feedback and a works-like rig for proving the electronics and mechanics lets both move at full speed, then merge once each has answered its own questions.

                ## Milestones
                1. A list of the questions only the looks-like model must answer, such as hand feel, size and colour.
                2. A list of the questions only the works-like rig must answer, such as power draw, range and heat.
                3. A first looks-like model in hand from printed or machined parts.
                4. A works-like rig running on development boards or a first PCB, whatever its shape.
                5. A date set for the first combined alpha prototype.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A looks-like model and a works-like rig both exist, each with a written list of the questions it answered."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write the five questions customers will ask about how the device looks and feels"
                - "Write the five technical questions the electronics must prove"
                - "Order printed parts for the looks-like model from a print bureau"
                - "Wire up the works-like rig on development boards and record its first power reading"
            - name: First costed bill of materials
              description: |-
                ## Purpose
                Founders routinely underestimate unit cost by half because the first BOM lists the chips and forgets the screws, gaskets, labels, cables, packaging and assembly labour. A costed BOM with every line, a quantity break and a source shows early whether the product can ever hit its price, while changing it is still cheap.

                ## Milestones
                1. Every part listed with manufacturer part number, quantity per unit and supplier.
                2. Prices recorded at three volumes, for example 100, 1,000 and 10,000 units.
                3. Non-electronic lines included: fasteners, labels, packaging, inserts, cables and assembly time.
                4. A total unit cost at each volume compared with the target cost.

                ## Notes
                Add a contingency line of ten to fifteen percent for the parts you have forgotten. Everyone forgets some.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A BOM with every line priced at three volumes exists, and its unit cost at the launch volume is compared with the target cost."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export the parts list from the schematic and the CAD assembly"
                - "Add every mechanical, packaging and labelling line by hand"
                - "Look up prices at three volumes on two distributor sites"
                - "Total the unit cost and set it beside the target cost"
            - name: Hardware risk register for the prototype programme
              description: |-
                ## Purpose
                Hardware programmes rarely fail on the risk everyone discusses; they fail on the single-source chip, the radio that will not pass emissions or the battery shipping rule nobody checked. Writing the top risks down with an owner, a likelihood and the cheapest test that would retire each one turns worry into a test plan.

                ## Milestones
                1. At least fifteen risks listed across technical, supply, certification, cost and schedule.
                2. Each risk scored for likelihood and impact and given one named owner.
                3. The cheapest experiment or quote that would retire each of the top five risks written beside it.
                4. The register reviewed at the end of every prototype build.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of at least fifteen scored risks exists, with an owner and a retiring test written for each of the top five."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Spend thirty minutes listing everything that could delay the first production run"
                - "Score each risk for likelihood and impact on a one to five scale"
                - "Name an owner for every risk scored twelve or above"
                - "Write the cheapest test that would retire each of the top five risks"
                - "Rescore the register and retire risks the latest tests closed @recurring(monthly:12)"
            - name: Prototype budget and lead-time calendar
              description: |-
                ## Purpose
                A hardware schedule is set by lead times, not by effort: PCBs take one to three weeks, injection mould tools six to twelve, some chips months, and certification labs are booked out. Laying out the expected builds, their costs and the longest lead items on one calendar shows how much cash the programme needs and where the critical path really runs.

                ## Milestones
                1. Each planned build (alpha, EVT, DVT, PVT) costed with quantity and expected spend.
                2. The ten longest lead items listed with quoted lead times.
                3. A calendar showing builds, tooling, certification and first production as dated blocks.
                4. The critical path marked, with the items that would move the launch date if they slipped.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated calendar from prototype to first production exists, with total spend per build and the critical path marked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your PCB house and a toolmaker for current quoted lead times"
                - "List the ten parts with the longest lead times from the BOM"
                - "Lay out each build as a dated block with its cost"
                - "Mark the critical path in red and share it with the team"
            - name: Makerspace, lab bench and tool access
              description: |-
                ## Purpose
                Early iteration speed depends on how long it takes to go from a CAD change to a part in your hand. Securing a bench with a decent soldering station, oscilloscope, bench power supply and access to a printer and laser cutter, whether bought, borrowed or rented at a makerspace, can turn week-long loops into same-day ones.

                ## Milestones
                1. A list of the tools each of the next three builds will need.
                2. Each tool marked as own, borrow, rent or outsource, with cost.
                3. A working bench with safe ventilation for soldering and a fire-safe area for charging batteries.
                4. A makerspace membership or university lab access arranged for the tools you will not buy.

                ## Notes
                A good second-hand oscilloscope is usually better value than a new cheap one, and many makerspaces run induction sessions you must book before using the laser cutter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A working bench is set up and every tool needed for the next build is owned, borrowed or booked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the tools each of the next three builds will need"
                - "Visit or call two local makerspaces and ask about equipment and hours"
                - "Set up a fume extractor and a fire-safe battery charging spot"
                - "Buy or book the three tools you will use every week"
            - name: Target unit cost and margin stack
              description: |-
                ## Purpose
                Physical products need room between landed cost and shelf price for the retailer, distributor, shipping, returns and warranty, and many founders discover too late that a product costing forty to make cannot sell at a hundred. Working backwards from a realistic retail price to a target landed cost sets the number every engineering choice has to respect.

                ## Milestones
                1. A realistic retail price range written from three comparable products.
                2. The margin stack laid out: retailer or platform cut, distribution, shipping, returns, warranty reserve and your gross margin.
                3. A target landed unit cost derived from that stack.
                4. The gap between current BOM cost and the target recorded as a number.

                ## Notes
                Direct-to-customer and retail channels need very different stacks. Model both if you are not yet sure which you will use.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written target landed unit cost exists, derived from a margin stack, with the gap to the current BOM cost stated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the shelf prices of three comparable products"
                - "Ask one retailer or distributor contact what margin they expect"
                - "Lay out the margin stack from retail price down to landed cost"
                - "Record the gap between current BOM cost and the target cost"
            - name: Prior art search and patent conversation
              description: |-
                ## Purpose
                Before money goes into tooling it is worth knowing whether the core mechanism is already patented by someone else and whether anything you have built is worth protecting. A structured prior art search followed by one meeting with a patent attorney gives you their view on freedom to operate and on filing, and stops you disclosing the idea publicly before a filing decision is made.

                ## Milestones
                1. A search of public patent databases for the core mechanism, with the ten closest results saved.
                2. A one-page summary of what is new about your design in plain words.
                3. A meeting held with a patent attorney and their recommendations written down.
                4. A decision recorded on filing, with any public disclosure held back until then.

                ## Notes
                This is preparation for professional advice, not a legal opinion. Many countries limit patents on anything disclosed before filing, so check with the attorney before demos, crowdfunding pages or conference talks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A saved prior art list, an attorney meeting and a recorded filing decision exist before any public disclosure of the design."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search a free public patent database for your core mechanism"
                - "Save the ten closest patents with their numbers and a one-line note"
                - "Write a one-page plain-words summary of what is new"
                - "Book a first consultation with a patent attorney"
            - name: Component selection with lifecycle and second sources
              description: |-
                ## Purpose
                Picking a clever chip that goes end of life a year after launch, or that only one distributor stocks, can halt production with no warning, as many teams learned in recent chip shortages. Checking the lifecycle status, stock levels and a drop-in alternative for every critical part before the schematic is final costs a few hours and protects the whole product.

                ## Milestones
                1. Every critical part marked with lifecycle status from the manufacturer or a distributor.
                2. Stock levels at two or more distributors recorded for each critical part.
                3. A second source or footprint-compatible alternative named for each single-source part.
                4. Any part marked not recommended for new designs replaced before layout.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every critical component has a recorded lifecycle status, stock check and named alternative, with no end-of-life parts left in the design."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark the ten parts the product cannot work without"
                - "Check each part's lifecycle status on the manufacturer's page"
                - "Record stock levels at two distributors for each one"
                - "Name a footprint-compatible alternative for every single-source part"
            - name: Weekly hardware build review and engineering log
              description: |-
                ## Purpose
                Hardware teams lose weeks to decisions made in a hallway and forgotten, or to the same failure rediscovered on the next board spin. A weekly review that walks the build status, new failures and open decisions, with a dated engineering log behind it, gives the team one memory and gives investors and future hires a record of why the design looks the way it does.

                ## Milestones
                1. A shared engineering log with a dated entry for every build, failure and design decision.
                2. A standing weekly review of no more than an hour with a fixed agenda.
                3. Open decisions listed with an owner and a date at every review.
                4. Eight consecutive weekly reviews held and logged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly build reviews are recorded in a shared engineering log with owners and dates on open decisions."
                cadence: rolling
              tasks:
                - "Create a shared engineering log with a dated entry format"
                - "Write a fixed review agenda: build status, new failures, open decisions, next week"
                - "Run the weekly build review and log decisions with owners @recurring(weekly:mon)"
                - "Add one log entry for each design decision made outside the review"
            - name: Revision control for CAD, schematics and firmware
              description: |-
                ## Purpose
                Three engineers emailing files called final_v3_really_final is how a factory ends up building the wrong revision. Putting mechanical CAD, electronics design files and firmware under revision control with a simple naming and release scheme means every board, part and test result can be traced to the exact design that produced it.

                ## Milestones
                1. Firmware, schematic, layout and CAD files held in a version-controlled repository or a product data management tool.
                2. A revision naming scheme agreed and written down, for example letters for released hardware and numbers for drafts.
                3. Every board and printed part from now on marked with its revision.
                4. Released files exported to a read-only release folder that suppliers receive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All design files are under revision control and every physical prototype carries a revision that traces to a released file set."
                cadence: rolling
              tasks:
                - "Move all current design files into one version-controlled repository"
                - "Write a one-page revision naming and release scheme"
                - "Add the revision to the silkscreen and to every printed part"
                - "Check the release folder matches the latest released revision @recurring(monthly:17)"
            - name: BOM cost and part availability watch
              description: |-
                ## Purpose
                Part prices and stock move every month, and a chip that was plentiful at design time can vanish before the production order is placed. A monthly pass over the costed BOM catches price rises, shrinking stock and lifecycle changes while there is still time to buy ahead or swap the part.

                ## Milestones
                1. A monthly snapshot of total unit cost at the launch volume, kept in the BOM file.
                2. A stock alert set up at a distributor for each critical part.
                3. Any part with falling stock or a lifecycle change flagged in the risk register.
                4. A buy-ahead decision recorded for any critical part below a set stock threshold.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly BOM cost snapshots exist and every critical part has a stock alert and a recorded response to any shortage."
                cadence: rolling
              tasks:
                - "Set up stock alerts at a distributor for every critical part"
                - "Refresh BOM prices and record the unit cost snapshot @recurring(monthly:9)"
                - "Flag any part with falling stock or a lifecycle change in the risk register"
                - "Decide on a buy-ahead quantity for any part below its stock threshold"
            - name: Supplier communication rhythm
              description: |-
                ## Purpose
                Suppliers in another time zone answer the customer who keeps in touch, and silence for three weeks usually means your order slipped down their queue. A short weekly check-in with each active supplier, with a written list of open questions and promised dates, keeps orders moving and surfaces delays while you can still react.

                ## Milestones
                1. A list of active suppliers with contact, time zone and preferred channel.
                2. An open-items sheet per supplier with every promised date.
                3. A weekly message or call with each active supplier.
                4. Slipped dates recorded and fed into the lead-time calendar the same week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active supplier has an open-items sheet updated weekly for two months, with slipped dates reflected in the schedule."
                cadence: rolling
              tasks:
                - "List active suppliers with contact, time zone and preferred channel"
                - "Start an open-items sheet for each supplier with promised dates"
                - "Send each active supplier a short status message with open questions @recurring(weekly:tue)"
                - "Copy any slipped date into the lead-time calendar the same day"
            - name: Lead time and build schedule tracker
              description: |-
                ## Purpose
                Your hardware launch date is only as good as the latest delivery promise behind it. Reviewing the critical path every week against fresh dates from suppliers, labs and the factory shows early when a launch has moved, so you can tell customers, backers and investors before they find out from you missing a date.

                ## Milestones
                1. The lead-time calendar updated weekly with the latest supplier and lab dates.
                2. A forecast first production date written at the top and changed only with a reason.
                3. Every slip of more than a week explained in one sentence in the log.
                4. A monthly schedule note sent to co-founders and investors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The forecast first production date is reviewed weekly and a monthly schedule note has gone to stakeholders for three months running."
                cadence: rolling
              tasks:
                - "Write the current forecast first production date at the top of the calendar"
                - "Update the critical path with the latest promised dates @recurring(weekly:thu)"
                - "Explain every slip over a week in one sentence in the log"
                - "Send a short schedule note to co-founders and investors @recurring(monthly:26)"
            - name: Prototype parts inventory and spares
              description: |-
                ## Purpose
                Builds stall for days because the last connector was used on a test that failed, or because nobody knew which drawer held revision B boards. A simple inventory of components, boards and printed parts, with minimum stock for anything that blocks a build, keeps the bench moving and stops paying express shipping on parts you already own.

                ## Milestones
                1. Labelled storage for components, boards by revision and mechanical parts.
                2. An inventory sheet with quantities and a minimum level for build-blocking parts.
                3. Failed and scrapped boards tagged and stored separately with a note of the failure.
                4. A monthly count that triggers reorders below the minimum.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An inventory sheet with minimum levels exists and no build has stalled for a missing stocked part over three months."
                cadence: rolling
              tasks:
                - "Label drawers by part family and boards by revision"
                - "Start an inventory sheet with a minimum level for build-blocking parts"
                - "Count build-blocking parts and reorder anything below minimum @recurring(monthly:3)"
                - "Tag every failed board with its revision and failure note"
            - name: Bench test log and failure tracking
              description: |-
                ## Purpose
                Intermittent faults are the hardest to fix and the easiest to forget, and a failure that appears once in twenty units on the bench will appear in hundreds of customers' homes. Logging every test run and every failure against the unit's serial and revision builds the evidence you need to find root causes and to decide when a design is ready.

                ## Milestones
                1. Every prototype given a serial number recorded with its revision.
                2. A test log recording date, unit, test, result and conditions for every run.
                3. A failure list where each failure has a status: open, root cause found or fixed and verified.
                4. A weekly look at the failure list during the build review.

                ## Notes
                Start from the **Metrics log** template. Never mark a failure fixed until the fix has been verified on a unit that showed it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every prototype has a serial, every test run is logged and every failure carries a status, reviewed weekly for two months."
                cadence: rolling
              tasks:
                - "Give every working prototype a serial number and record its revision"
                - "Set up a test log with date, unit, test, result and conditions"
                - "Review open failures and update their status @recurring(weekly:wed)"
                - "Retest every fix on the unit that originally failed"
            - name: Engineering change order process
              description: |-
                ## Purpose
                Once suppliers hold your files, an unrecorded change becomes a mismatch between what the factory builds and what you tested. A lightweight change order, saying what changed, why, which revision it affects and who approved it, keeps every supplier on the same design and makes cost and certification impacts visible before a change is made.

                ## Milestones
                1. A one-page change order form with reason, affected parts, cost impact and certification impact.
                2. A rule that no released file changes without an approved change order.
                3. Every supplier holding the affected files notified with the new revision.
                4. A change log listing every approved change in order.

                ## Notes
                Any change to the radio, antenna, power supply or enclosure material can invalidate certification. Ask the test lab before approving those changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A change order form and change log exist, and every change to released files since adoption has an approved change order."
                cadence: rolling
              tasks:
                - "Draft a one-page change order form with cost and certification impact boxes"
                - "Agree who can approve changes to released files"
                - "Start a numbered change log in the engineering log"
                - "Notify every supplier affected by an approved change in writing"
                - "Close or chase every open change order in the log @recurring(weekly:fri)"
            - name: Prototype spend against the build budget
              description: |-
                ## Purpose
                Express PCB orders, reprinted parts and rushed shipping add up quietly, and hardware founders often find a build cost twice its budget only when the card statement arrives. A monthly reconciliation of prototype spend against each build's budget keeps the programme honest and feeds real numbers into the runway conversation.

                ## Milestones
                1. Every prototype purchase tagged to a build: alpha, EVT, DVT or PVT.
                2. A monthly total compared against each build's budget.
                3. Overspends over ten percent explained with a cause.
                4. The final cost of each finished build recorded for planning the next one.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly prototype spend is reconciled against build budgets for three months, with every overspend over ten percent explained."
                cadence: rolling
              tasks:
                - "Tag every prototype purchase so far to a build"
                - "Reconcile the month's prototype spend against build budgets @recurring(monthly:28)"
                - "Write a one-line cause for any build more than ten percent over"
                - "Record the final cost of each finished build"
            - name: Design for manufacture basics for injection moulding
              description: |-
                ## Purpose
                A part that prints perfectly can be impossible or very expensive to mould, because printers forgive undercuts, thick walls and zero draft that a mould tool cannot. Learning the core rules of wall thickness, draft angles, ribs, bosses, gate and parting line placement before the enclosure design is final avoids costly tool changes and sink marks on the first shots.

                ## Milestones
                1. The core rules learned: uniform wall thickness, draft, rib ratios, boss design and avoiding undercuts.
                2. The current enclosure reviewed against those rules with every problem area marked.
                3. A moulder or toolmaker's design for manufacture feedback received on the enclosure.
                4. The enclosure revised to address the feedback before tooling quotes are final.

                ## Notes
                Many toolmakers will give free design feedback with a quote. Ask for it explicitly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The enclosure has been reviewed against moulding rules and revised after written design for manufacture feedback from a toolmaker."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read a moulder's published design guide for plastic parts"
                - "Mark every wall thickness change and zero-draft face on the enclosure"
                - "Send the enclosure to a toolmaker and ask for design feedback with the quote"
                - "Revise the CAD for each point raised in the feedback"
            - name: PCB design review and board house checks
              description: |-
                ## Purpose
                Every board spin costs one to three weeks and a few hundred to a few thousand in your currency, so catching a reversed footprint or a missing pull-up before ordering is the cheapest engineering there is. A structured review with a checklist, a second engineer and the board house's own manufacturability check turns first boards from expensive experiments into working hardware.

                ## Milestones
                1. A written PCB review checklist covering power, footprints, clearances, test points and assembly.
                2. Every board reviewed by an engineer who did not lay it out.
                3. The board house's manufacturability report read and every flag resolved.
                4. A list of lessons from each spin added to the checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every board ordered since adoption has passed a checklist review by a second engineer and a resolved board house manufacturability report."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a PCB review checklist from your last two board spins"
                - "Ask a second engineer or a paid reviewer to check the current layout"
                - "Run the board house's online manufacturability check before ordering"
                - "Add every lesson from the latest spin to the checklist"
            - name: Firmware bring-up routine for new boards
              description: |-
                ## Purpose
                New boards arrive and the team spends days unsure whether a fault is in the hardware, the firmware or the assembly. A fixed bring-up sequence, from checking rails before powering the processor to a minimal blink and a test of each peripheral, turns the first day with a new board into a repeatable procedure and a clear list of hardware errata.

                ## Milestones
                1. A written bring-up sequence from visual inspection and rail checks to each peripheral test.
                2. A minimal bring-up firmware image that exercises every peripheral separately.
                3. Debug access and logging working on every new board revision.
                4. An errata list per board revision recording every fault found during bring-up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written bring-up sequence and test image exist and the last board revision has a complete errata list from bring-up."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write the bring-up order: inspect, rails unpowered, rails powered, clock, debug port"
                - "Build a minimal firmware image that tests one peripheral at a time"
                - "Run the sequence on the next new board and log every result"
                - "Start an errata list for each board revision"
            - name: Lithium battery safety for prototypes
              description: |-
                ## Purpose
                Lithium cells are in most connected products and they cause most of the bench fires, swollen packs and shipping refusals that hardware teams meet. Learning safe handling, charging and storage, choosing cells with protection and documentation, and finding out early what battery transport and safety tests the product will need keeps people safe and keeps shipments moving.

                ## Milestones
                1. Safe handling, charging and storage rules written and posted at the bench.
                2. Every cell in use sourced from a supplier who provides a datasheet and safety test reports.
                3. A protection circuit confirmed on every pack, with charge and temperature limits tested.
                4. The transport test and documentation requirements for shipping the product identified with a freight forwarder or test lab.

                ## Notes
                Never leave cells charging unattended on a bench. Keep a fire-safe container and a suitable extinguisher near the charging area and agree what to do with a swollen cell.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written battery safety rules are posted, every cell in use has documentation and protection, and transport test needs are recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write and post battery handling, charging and storage rules at the bench"
                - "Ask each cell supplier for the datasheet and safety test reports"
                - "Test charge cut-off and over-temperature behaviour on the current pack"
                - "Ask a freight forwarder what documents shipping the battery will need"
                - "Inspect stored cells and packs for swelling or damage @recurring(monthly:5)"
            - name: Reading supplier quotes, incoterms and landed cost
              description: |-
                ## Purpose
                Two quotes that look ten percent apart can be thirty percent apart once freight, duty, payment terms, tooling amortisation and minimum order quantities are counted. Learning to read a supplier quote line by line, including the incoterm that decides who pays for shipping and insurance, lets you compare factories honestly and avoid surprise invoices at the port.

                ## Milestones
                1. The common incoterms understood well enough to say who pays and carries risk at each stage.
                2. A landed cost sheet that adds freight, insurance, duty, brokerage and payment fees to a unit price.
                3. Every current quote converted into landed cost per unit at the launch volume.
                4. Minimum order quantity, tooling and payment terms recorded beside each quote.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every open supplier quote has been converted into a landed cost per unit with MOQ, tooling and payment terms recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a plain guide to the current incoterms and note who pays at each stage"
                - "Build a landed cost sheet with freight, duty, brokerage and fees"
                - "Ask a customs broker or freight forwarder for typical duty on your product category"
                - "Convert every open quote into landed cost per unit"
            - name: Printing, CNC or urethane casting for each prototype
              description: |-
                ## Purpose
                Each prototyping process answers a different question at a different price: printing is fast and cheap for form, CNC gives real materials and tolerances, urethane casting gives near-production parts in tens. Choosing deliberately for each build, instead of printing everything, gets better feedback per unit of money and time.

                ## Milestones
                1. The questions each upcoming build must answer listed.
                2. Each part assigned a process with a reason: print, CNC, sheet metal or urethane casting.
                3. Quotes from at least two bureaus for the parts not made in-house.
                4. The cost and lead time of each choice recorded against the build budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every part in the next build has a chosen process with a written reason and quotes from two bureaus where outsourced."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the parts in the next build and what each must prove"
                - "Assign print, CNC, sheet metal or casting to each part with a reason"
                - "Upload the outsourced parts to two online bureaus for quotes"
                - "Record cost and lead time for each part in the build budget"
            - name: Pre-certified radio module versus custom design
              description: |-
                ## Purpose
                Designing a radio from chip level can cut unit cost but adds months of RF work and the full intentional radiator certification, while a pre-certified module costs more per unit and inherits much of its radio approval. Comparing the two at your real volumes, with certification cost and time counted, is one of the biggest early decisions a connected hardware startup makes.

                ## Milestones
                1. Two or three pre-certified modules shortlisted with unit prices at launch volume.
                2. A chip-down design estimate including RF engineering time and full radio certification cost.
                3. The volume at which chip-down becomes cheaper calculated.
                4. A decision recorded with the volume at which it will be revisited.

                ## Notes
                Check with your test lab how much of a module's certification your product can rely on in each target market. The antenna and enclosure still matter.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded module or chip-down decision exists with a break-even volume calculated from unit and certification costs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three pre-certified modules that meet the radio requirements"
                - "Ask a test lab for the certification cost of a module versus a chip-down design"
                - "Calculate the volume at which chip-down becomes cheaper"
                - "Record the decision and the volume at which you will revisit it"
            - name: Contract manufacturer shortlist and RFQ
              description: |-
                ## Purpose
                The factory you choose decides your quality, cost and how much of your time goes on firefighting for years. Sending a clear request for quotation, with the BOM, drawings, volumes and quality expectations, to five or six candidates and scoring the replies on the same criteria gives you a choice based on evidence rather than the first factory that answered.

                ## Milestones
                1. An RFQ pack with BOM, drawings, annual volume forecast, test requirements and quality expectations.
                2. Five or six contract manufacturers contacted, matched to your product size and volume.
                3. Replies scored on price, responsiveness, relevant experience, quality systems and minimum order.
                4. References from two current customers of the top two candidates checked.

                ## Notes
                Start from the **Vendor** template for each candidate. A factory that is too big will put you at the back of the queue; one that is too small may not cope with your growth.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least five RFQ replies are scored on the same criteria and the top two candidates have had references checked."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Assemble the RFQ pack with BOM, drawings, volumes and test needs"
                - "Find six candidate factories that build products of your size and volume"
                - "Score every reply on the same five criteria"
                - "Call two current customers of each of the top two factories"
            - name: Tooling strategy and mould quote comparison
              description: |-
                ## Purpose
                Injection mould tooling is often the largest single cheque in a first production run, and the choice between aluminium soft tooling, steel production tooling and family tools changes cost, lead time and how many parts you get before the tool wears. Comparing quotes on the same basis, with cavity count, steel grade, expected shot life and who owns the tool written down, avoids paying twice.

                ## Milestones
                1. Tooling quotes from at least two toolmakers for the same part set.
                2. Each quote recorded with material, cavities, expected shot life, lead time and price.
                3. A choice between soft and production tooling made against the volume forecast.
                4. Tool ownership, storage and transfer rights confirmed in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tooling choice is recorded from two comparable quotes, with tool ownership and transfer rights confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send the same part set to two toolmakers for quotes"
                - "Tabulate material, cavities, shot life, lead time and price"
                - "Choose soft or production tooling against the year-one volume forecast"
                - "Get tool ownership and transfer rights confirmed in writing"
            - name: BOM cost-down review before tooling
              description: |-
                ## Purpose
                Once tools are cut and boards are certified, most cost-saving changes become expensive or impossible. A focused cost-down review before design freeze, going line by line through the BOM and assembly steps for consolidations, cheaper equivalents, fewer fasteners and simpler packaging, is where the gap to target cost is most cheaply closed.

                ## Milestones
                1. The twenty most expensive BOM lines and assembly steps listed.
                2. Ideas logged for each: consolidate, substitute, simplify or remove.
                3. Savings estimated for each idea with any certification or quality risk noted.
                4. Accepted changes made before design freeze and the new unit cost recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A cost-down review is recorded with accepted changes made before freeze and the new unit cost compared with the target."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sort the BOM by extended cost and list the top twenty lines"
                - "Count fasteners and assembly steps and mark any that could go"
                - "Ask the factory for their own cost-down suggestions"
                - "Record the unit cost after accepted changes"
            - name: Retail packaging design and transit testing
              description: |-
                ## Purpose
                Packaging is often designed last and then turns out to crush in transit, fail retailer requirements or cost more than the product's plastics. Designing the box early, with the insert, regulatory markings and barcode in place, and putting it through a drop and vibration test, protects the product and the margin.

                ## Milestones
                1. Packaging dimensions set to suit shipping cartons and the target channel.
                2. Required markings listed: barcode, certification marks, battery and recycling symbols and importer details.
                3. Packed samples dropped and shaken to a recognised transit test procedure, by a lab or in-house.
                4. Damage, if any, fixed in the insert or carton and retested.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packaging design with all required markings has passed a transit drop and vibration test without product damage."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure the product and set box sizes that fill a standard shipping carton"
                - "List every marking the box must carry in your first markets"
                - "Order three packaging samples from a packaging supplier"
                - "Drop-test packed samples and photograph any damage"
            - name: Design freeze decision before tooling
              description: |-
                ## Purpose
                Freezing too early locks in problems you have not found yet, and freezing too late burns money as tools and certification wait. A deliberate freeze review against written criteria, such as all must requirements passed, no open high-severity failures and cost within target, makes the moment you commit to steel a decision and not a drift.

                ## Milestones
                1. Written freeze criteria agreed by the founders and the lead engineer.
                2. Evidence gathered for each criterion from test logs and the BOM.
                3. A freeze review held and every criterion marked met, waived with reason, or not met.
                4. The frozen revision released and later changes routed through change orders only.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A freeze review is recorded against written criteria and the frozen revision is released, with all later changes under change orders."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft five to eight design freeze criteria"
                - "Gather test log and BOM evidence for each criterion"
                - "Hold the freeze review and record each criterion as met, waived or not met"
                - "Release the frozen revision to suppliers"
            - name: Engineering validation test build
              description: |-
                ## Purpose
                EVT is the first build on production-intent electronics, usually tens of units, and its job is to prove the design works to specification, not to look finished. Running it as a planned event, with a test plan written before the boards arrive and every failure logged, tells you what must change before the more expensive DVT build.

                ## Milestones
                1. An EVT test plan listing every requirement and the test that verifies it.
                2. A build of production-intent boards in the quantity the plan needs.
                3. Every test run and result logged against unit serial numbers.
                4. An EVT readout listing pass, fail and the changes needed for DVT.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An EVT readout exists showing a result for every requirement and a list of changes approved for DVT."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Write the EVT test plan from the requirements document"
                - "Order the EVT boards and parts against the plan quantity"
                - "Run and log every test against unit serials"
                - "Write the EVT readout and list the changes for DVT"
            - name: Design validation test build
              description: |-
                ## Purpose
                DVT uses production tooling or near-production parts and is where the product must pass reliability, environmental and pre-compliance testing as a finished object. Treating it as a dated event with enough units for destructive tests, field trials with real users and certification samples is what makes the later production run predictable.

                ## Milestones
                1. A DVT plan covering reliability, environmental, drop and user testing, with unit counts for each.
                2. Parts from production or first-shot tooling assembled into the planned number of units.
                3. Units in the hands of real users for a field trial with feedback collected.
                4. A DVT readout with a recommendation on whether the design is ready for certification and PVT.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A DVT readout records results from reliability, environmental and field tests and a go or no-go for certification and PVT."
                cadence: one-shot
                effort_hours_estimate: "80"
              tasks:
                - "Write the DVT plan with unit counts for each test"
                - "Recruit five to ten users for a two-week field trial"
                - "Collect field trial feedback and failures in the test log"
                - "Write the DVT readout with a go or no-go recommendation"
            - name: EMC pre-compliance session at a test lab
              description: |-
                ## Purpose
                Failing a formal emissions test can cost thousands and weeks of redesign, and most products fail the first time. Booking a few hours of informal pre-compliance scanning at a lab, or with rented equipment, on EVT or early DVT units shows where the product stands while board and shielding changes are still cheap.

                ## Milestones
                1. A lab booked for a pre-compliance session with the relevant standards for your markets identified.
                2. Units prepared in representative configurations, with cables and accessories.
                3. Emissions and immunity results recorded with margins to the limits.
                4. Fixes identified for any failing frequencies and verified on a second session or bench scan.

                ## Notes
                Bring spare parts, ferrites, copper tape and the design files. Engineers often fix the worst issue during the session itself.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-compliance report with margins to the limits exists and every failing frequency has a verified fix."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask two test labs for pre-compliance session prices and availability"
                - "Prepare three units in representative configurations with cables"
                - "Pack ferrites, copper tape and spare components for the session"
                - "Record every failing frequency and the fix that cleared it"
            - name: Certification plan and lab submission
              description: |-
                ## Purpose
                Most markets require marks before a product can be sold, for example FCC in the United States, CE or UKCA in Europe and the United Kingdom, plus radio, battery and safety approvals, and lab slots are often booked weeks ahead. A plan that maps each target market to its required tests, then books the lab against the DVT schedule, stops certification becoming the thing that delays launch.

                ## Milestones
                1. A table mapping each target market to the marks and tests the lab says are required.
                2. Quotes from at least two accredited labs and one chosen.
                3. Samples, documentation and the technical file prepared to the lab's checklist.
                4. Test reports and certificates received and filed with the frozen revision.

                ## Notes
                Ask the lab to confirm requirements for your product; do not rely on general guides. Any later change to the radio, power supply or enclosure may need retesting.
              priority: high
              deadlineOffsetDays: 210
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Certificates or test reports for every target market are filed against the frozen revision before the production order ships."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask two accredited labs which tests your product needs for each target market"
                - "Choose a lab and book the slot against the DVT schedule"
                - "Prepare samples and the technical file to the lab's checklist"
                - "File every certificate and report against the frozen revision"
            - name: Production validation test and pilot run
              description: |-
                ## Purpose
                PVT is the first run on the real production line, with real operators, fixtures and inspection, and it exists to prove the factory can build the product to quality at speed. A pilot of a few hundred units with yield, cycle time and defect data tracked tells you whether to release the mass production order or fix the line first.

                ## Milestones
                1. A pilot run quantity agreed with the factory, with yield and cycle time targets.
                2. Line build observed in person or by live video, with the process steps recorded.
                3. First-pass yield and defect types recorded for the whole run.
                4. A release or hold decision for mass production made against the targets.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A PVT report records first-pass yield and defects against targets, with a written release or hold decision for mass production."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree the pilot quantity, yield target and cycle time target with the factory"
                - "Arrange to watch the line in person or by live video"
                - "Collect yield and defect data for every unit in the pilot"
                - "Hold the release or hold meeting and record the decision"
            - name: Golden sample and first article sign-off
              description: |-
                ## Purpose
                Disputes with factories almost always come back to what good looks like. Signing a set of golden samples that both sides keep, and checking the first articles from production against drawings and those samples, gives a physical reference for every inspection and every argument about colour, finish, gaps and function.

                ## Milestones
                1. Golden samples approved and signed by you and the factory, with copies held by both.
                2. First articles measured against drawing dimensions and recorded.
                3. Cosmetic standards written for colour, scratches, gaps and markings, with limit samples where useful.
                4. First article inspection report signed before mass production ships.

                ## Notes
                Start from the **Operational checklist** template for the first article inspection steps.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Signed golden samples are held by both sides and a first article inspection report is signed before shipment."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the factory for five units to approve as golden samples"
                - "Measure first articles against critical drawing dimensions"
                - "Write cosmetic standards for colour, scratches, gaps and markings"
                - "Sign the first article inspection report with the factory"
            - name: Factory visit before the production order
              description: |-
                ## Purpose
                Photos and video calls hide a lot: how the line is laid out, whether parts are stored cleanly, how operators are trained and who really runs your job. Visiting the chosen factory before placing the first production order, with a list of things to see and people to meet, builds the relationship and catches problems that would otherwise arrive in a container.

                ## Milestones
                1. A visit agenda agreed with the factory covering the line, incoming inspection, storage and test stations.
                2. Travel, visas and an interpreter arranged where needed.
                3. Notes and photos (where permitted) of every area visited, with concerns listed.
                4. Concerns sent to the factory in writing with agreed fixes and dates.

                ## Notes
                Start from the **Trip** template. Meet the project manager and the quality lead who will handle your product, not only the sales contact.
              priority: medium
              deadlineOffsetDays: 200
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A factory visit is completed with written concerns sent to the factory and agreed fixes logged with dates."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree a visit agenda with the factory project manager"
                - "Book travel and check visa requirements for the trip"
                - "Write the list of areas to see and questions to ask"
                - "Send the factory a written list of concerns within a week of returning"
            - name: Factory agreement, NNN terms and tool ownership
              description: |-
                ## Purpose
                Founders often sign a factory's standard terms and later find the tools belong to the factory, the design can be sold to others or quality failures are at their own cost. A manufacturing agreement covering confidentiality and non-use, tool ownership, quality standards, warranty, defect handling and payment terms, reviewed by a lawyer, sets the rules before the first big order.

                ## Milestones
                1. A list of the terms that matter to you: non-use, non-disclosure, non-circumvention, tooling, quality, warranty and payment.
                2. A draft agreement or the factory's terms marked up against that list.
                3. The agreement reviewed by a lawyer familiar with manufacturing contracts in the factory's country.
                4. A signed agreement filed before the production order is placed.

                ## Notes
                This is a checklist for preparing professional advice, not legal advice. A non-disclosure agreement written for your home country may be of little use in the factory's, which is why NNN agreements exist.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed manufacturing agreement covering non-use, tooling ownership, quality and warranty is filed before the first production order."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the seven terms you need in the factory agreement"
                - "Mark up the factory's standard terms against that list"
                - "Find a lawyer with manufacturing contract experience in the factory's country"
                - "File the signed agreement with the tooling records"
            - name: Solo engineer founder prototyping part-time
              description: |-
                ## Purpose
                Building hardware alone around a day job usually leaves ten to fifteen hours a week, and hardware has more waiting than software: parts, boards, prints. Planning the week so long-lead orders go out first, bench time is batched into protected blocks and admin happens while waiting turns those scarce hours into steady progress.

                ## Milestones
                1. Two protected bench blocks a week written into the calendar.
                2. A rule that every long-lead order goes out at the start of the week.
                3. A waiting list of small tasks for days when parts have not arrived.
                4. Four weeks of logged progress against the build calendar.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two bench blocks a week have been kept for four weeks with long-lead orders placed at the start of each week."
                cadence: rolling
              tasks:
                - "Block two three-hour bench sessions a week in the calendar"
                - "Place every long-lead order for the week before the first session @recurring(weekly:sat)"
                - "Write a waiting list of tasks for days without parts"
                - "Log what each bench session achieved in the engineering log"
            - name: Software founder building hardware for the first time
              description: |-
                ## Purpose
                Software founders tend to underestimate hardware by assuming iteration is cheap, mistakes can be patched and inventory is a spreadsheet problem. Spending a few weeks learning how hardware programmes actually run, talking to hardware founders and hiring or advising with someone who has shipped a product, prevents the most expensive beginner mistakes.

                ## Milestones
                1. Three hardware founders who have shipped a product interviewed about their worst mistakes.
                2. A short list of the differences from software that matter for your product: lead times, tooling, certification, inventory.
                3. An experienced hardware adviser or contractor engaged for design reviews.
                4. The build calendar and budget revised after their input.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three hardware founder interviews are written up and an experienced hardware adviser has reviewed the build calendar and budget."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your network for three founders who have shipped a hardware product"
                - "Ask each one for the mistake that cost them the most time"
                - "Write the differences from software that matter for your product"
                - "Ask an experienced hardware engineer to review the build calendar"
            - name: Working with an outside product design firm
              description: |-
                ## Purpose
                Many startups hire an industrial design or engineering consultancy for the enclosure, electronics or the whole product, and the result depends on how well the work is scoped and handed over. A clear brief, staged deliverables with acceptance criteria, ownership of all files and a handover plan means you can take the design to a factory without being locked to the firm.

                ## Milestones
                1. A brief covering requirements, target cost, volumes and deliverables for each stage.
                2. Proposals from at least two firms compared on approach, relevant products shipped and price.
                3. A contract confirming you own all design files, CAD and source code.
                4. Native files and documentation handed over at every stage gate.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A design firm is engaged under a contract that assigns all files to the company, with native files received at each stage."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a brief with requirements, target cost and staged deliverables"
                - "Ask two firms for proposals and examples of products they have shipped"
                - "Confirm in the contract that the company owns all native files"
                - "Request native files and documentation at each stage gate"
            - name: Crowdfunding fulfilment plan for hardware backers
              description: |-
                ## Purpose
                Most hardware crowdfunding campaigns ship late, often because the promised date was set before the factory, certification and freight were planned. A fulfilment plan that builds the delivery date from real lead times with a buffer, prices shipping and duty by region and sets a monthly backer update rhythm protects both the company's reputation and its cash.

                ## Milestones
                1. A delivery date built from the lead-time calendar with at least a three-month buffer.
                2. Shipping and duty costs estimated for each backer region and included in reward prices.
                3. A fulfilment partner or in-house plan chosen for packing and shipping.
                4. A monthly backer update schedule set, with honest reporting of any slip.

                ## Notes
                Run the campaign only when DVT is near. Promising a date from a works-like prototype is how most campaigns get into trouble.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fulfilment plan exists with a buffered delivery date, regional shipping costs in reward prices and a monthly update schedule."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Build the promised delivery date from the lead-time calendar plus a buffer"
                - "Get shipping and duty estimates for your three largest backer regions"
                - "Ask two fulfilment partners for quotes"
                - "Post a backer progress update with photos from the bench @recurring(monthly:15)"
            - name: Dividing mechanical, electrical and firmware ownership
              description: |-
                ## Purpose
                In a hardware team of two to five, nobody owning the interfaces between enclosure, board and firmware is how a connector ends up on the wrong side or a button has no debounce. Naming an owner for each discipline and for each interface, with a short interface document, keeps a small team moving in parallel without stepping on each other.

                ## Milestones
                1. An owner named for mechanical, electrical, firmware, test and supply.
                2. An interface list covering board outline, connectors, buttons, displays, antennas and thermal paths.
                3. A short interface document for each with dimensions and responsibilities.
                4. Interface changes reviewed in the weekly build review.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every discipline and every listed interface has a named owner and a written interface document reviewed weekly."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name an owner for each discipline on one page"
                - "List every interface between enclosure, board and firmware"
                - "Write the board outline and connector interface first"
                - "Add interface changes as a standing item in the build review"
            - name: Prototyping from a small island or remote market
              description: |-
                ## Purpose
                Founders in smaller markets, such as many Caribbean islands, face longer and costlier shipping for every component, customs delays and few local suppliers or labs. Planning around this, with consolidated orders through a freight forwarder, a duty and customs routine, a stocked parts library and relationships with overseas bureaus and labs, keeps the loop from stretching to months.

                ## Milestones
                1. A freight forwarder or mail-forwarding service chosen that consolidates parcels from major distributors.
                2. A customs routine written: invoices, product codes and the broker to call.
                3. A local parts library stocked with common passives, connectors and spare boards.
                4. Overseas print bureaus, board houses and a test lab chosen with door-to-door lead times recorded.

                ## Notes
                Ask your local small business or investment agency whether duty relief exists for prototypes or manufacturing inputs. Some countries offer it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consolidated shipping route, a written customs routine and recorded door-to-door lead times for key suppliers are in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare two freight forwarders that consolidate parcels from major distributors"
                - "Write a customs routine with invoices, product codes and a broker contact"
                - "Order a stock of common passives and connectors in one consolidated shipment"
                - "Record door-to-door lead times for the board house and print bureau"
            - name: Design for test and end-of-line fixture
              description: |-
                ## Purpose
                Every unit that leaves the factory needs to be tested quickly and identically, and that only works if the board was designed with test points and the factory has a fixture and software to drive it. Designing the end-of-line test early, with a pogo-pin fixture, programming station and pass and fail limits, turns quality from hope into a number per unit.

                ## Milestones
                1. Test points for power, programming and key signals on the board, reachable from one side.
                2. An end-of-line test specification with every test, limit and expected duration.
                3. A test fixture built and validated on known good and known bad boards.
                4. Test results logged per serial number and shared with you by the factory.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A validated end-of-line fixture runs every test in the specification and logs a result per serial number at the factory."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Add test points for power, programming and key signals on one board side"
                - "Write the end-of-line test specification with limits and durations"
                - "Validate the fixture on known good and deliberately faulty boards"
                - "Agree with the factory how test logs per serial will reach you"
            - name: Reliability and environmental testing programme
              description: |-
                ## Purpose
                A product that works on the bench can fail after a summer in a hot car, a year of button presses or a humid coastal climate. A reliability plan with accelerated life, temperature cycling, humidity, drop and ingress tests, sized by how customers will really use the product, finds the weak points before customers find them.

                ## Milestones
                1. A use profile describing expected temperatures, humidity, drops, presses and cycles over the product's life.
                2. A test matrix with conditions, durations and unit counts for each test.
                3. Tests run in-house or at a lab with every failure root-caused.
                4. Design fixes verified with a repeat test before production release.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reliability test matrix has been run on DVT units with every failure root-caused and fixes verified before release."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the use profile for a typical customer over the product's life"
                - "Build a test matrix with conditions, durations and unit counts"
                - "Ask a lab for prices on the tests you cannot run in-house"
                - "Root-cause every reliability failure before marking it closed"
            - name: Incoming and outgoing quality inspection plan
              description: |-
                ## Purpose
                Without a written quality plan, inspection becomes whatever the factory's line leader decides on the day. A plan that sets acceptable quality limits for critical, major and minor defects, uses sampling inspection on each shipment and adds an independent third-party inspection before goods leave the factory catches problems while they can still be reworked.

                ## Milestones
                1. Defects classified as critical, major and minor with examples and photos.
                2. Acceptable quality limits and a sampling level agreed with the factory for each class.
                3. A third-party inspection booked before each production shipment.
                4. Inspection reports filed and any failed lot reworked and reinspected before shipping.

                ## Notes
                Start from the **Operational checklist** template for the pre-shipment inspection steps. Critical defects, such as anything unsafe, should have a limit of zero.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A signed quality plan with defect classes and AQLs exists and every production shipment has a filed inspection report."
                cadence: rolling
              tasks:
                - "Write the defect classification list with photos of each defect"
                - "Agree AQLs and sampling levels with the factory in writing"
                - "Book a third-party pre-shipment inspection for the first order"
                - "File every inspection report against its production lot"
                - "Review inspection results and open defects with the factory @recurring(monthly:22)"
            - name: Field returns and failure analysis loop
              description: |-
                ## Purpose
                The first few hundred units in customers' hands are the best reliability test the product will ever get, and returns contain the evidence. A returns process that captures the serial, symptom and environment, brings failed units back for analysis and feeds root causes into change orders turns the first shipments into the fixes for the next run.

                ## Milestones
                1. A returns process with a form capturing serial, symptom, usage and environment.
                2. A returns log with failure category and root cause status for every unit.
                3. A monthly review of return rates by failure category.
                4. Root causes linked to change orders or factory corrective actions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every returned unit is logged with serial and failure category, and monthly return reviews link root causes to corrective actions."
                cadence: rolling
              tasks:
                - "Set up a returns form that captures serial, symptom and environment"
                - "Start a returns log with failure category and root cause status"
                - "Review return rates by failure category @recurring(monthly:20)"
                - "Link each confirmed root cause to a change order or factory corrective action"
            - name: Long-lead component buffer stock strategy
              description: |-
                ## Purpose
                When one chip has a lead time longer than your whole production cycle, the production plan is really a bet on that part's supply. Deciding which parts to buy ahead, how many months of buffer to hold and how to fund it, set against the cash it ties up, is a specialist call that experienced hardware operators make deliberately rather than in a panic.

                ## Milestones
                1. Parts ranked by lead time and by how easily they can be substituted.
                2. A buffer level in months of production set for each high-risk part.
                3. The cash tied up in buffer stock calculated and agreed with the founders.
                4. Buffer stock purchased, stored with the factory or a distributor and counted quarterly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written buffer level exists for every high-risk part, with the cash committed agreed and stock counted each quarter."
                cadence: rolling
              tasks:
                - "Rank BOM parts by lead time and ease of substitution"
                - "Set a buffer level in months of production for each high-risk part"
                - "Calculate the cash tied up and agree it with the founders"
                - "Count buffer stock held at the factory or distributor @recurring(quarterly)"
            - name: Firmware update path and device provisioning
              description: |-
                ## Purpose
                Connected devices ship with firmware that will need fixing, and a product without a safe update path or per-device credentials becomes a support and security problem at scale. Designing the factory provisioning step, the over-the-air or cable update process with rollback, and the record of which firmware every serial carries is specialist work best done before production.

                ## Milestones
                1. A provisioning step at the factory that loads firmware and unique device credentials per serial.
                2. An update process with signed images and a rollback if an update fails.
                3. A record of firmware version per serial updated on every release.
                4. A tested update from the production firmware to a new version on DVT or PVT units.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Production units are provisioned with unique credentials and a signed update with rollback has been tested on PVT units."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the factory provisioning steps for firmware and device credentials"
                - "Implement signed firmware images with a rollback on failure"
                - "Record firmware version per serial in the device database"
                - "Test an update from production firmware on three PVT units"
---

# Hardware Startup Prototyping

This area is for founders and founding engineers turning a physical product from a bench prototype into a first production run, where every mistake costs weeks of lead time and real money in tooling. It starts with foundations (the requirements document, the looks-like and works-like split, a costed bill of materials, the risk register, target cost and component choices), moves through the weekly machinery of build reviews, revision control, supplier calls and bench testing, the skills of design for manufacture, PCB review, battery safety, landed cost and firmware bring-up, the big decisions on processes, radio modules, factories, tooling and design freeze, the dated EVT, DVT and PVT builds with certification and factory sign-off, variants for solo, software-first, outsourced, crowdfunded and remote-island founders, and ends with test fixtures, reliability, inspection and field returns.

What repeats is the rhythm of a hardware team: a weekly build review and engineering log, weekly supplier, lead-time and change order checks, a bench test log, and monthly looks at risks, BOM cost, part availability, inventory, battery storage, inspections, returns and prototype spend. The Product spec, Risk register, Metrics log, Vendor, Trip and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
