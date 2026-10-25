---
id: agriculture.dairy-farming
name: Dairy Farming
description: "A clean, written milking routine, cold milk the processor accepts, cows kept cool and fed for yield in tropical heat, breeding on time, and the records and costs that show whether each litre pays."
category: business
version: 1.0.0
tags: [agriculture, dairy-farming, small-business, dairy, milking, milk-quality, heat-stress, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - course
    - purchase-decision
    - compliance-control
    - training-program
    - metrics-log
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Dairy Farming
          description: "Running a dairy herd: milking routines and hygiene, feed and forage, cow comfort in the heat, milk testing, cooling and selling to processors."
          projects:
            - name: Herd register and cow identification
              description: |-
                ## Purpose
                A dairy runs on knowing which cow is which: who calved when, who is in calf, who was treated last week. Giving every animal a clear number and one register line, with birth date, breed, dam, last calving and status, is the base every other record in this area hangs on.

                ## Milestones
                1. Every cow, heifer and calf carries a readable ear tag or other approved mark.
                2. A register lists each animal with number, name if used, birth date, breed or cross and dam.
                3. Each milking cow's last calving date and current status (milking, dry, in calf, open) filled in.
                4. Any official animal identification or movement records your country requires checked and up to date.

                ## Notes
                Keep the register in one place, a notebook in the dairy or a spreadsheet on the phone, not both. Replace lost tags the same week, because an untagged cow soon becomes a guess.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register exists in which every animal on the farm has a unique number, birth date, breed and status, and every animal carries that number."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk the herd and list every animal with its tag number or a description"
                - "Order replacement tags for any animal without a readable one"
                - "Fill in birth date, dam and last calving date for each cow"
                - "Ask the veterinary authority which identification records the law requires"
            - name: Milk buyer requirements and dairy registration check
              description: |-
                ## Purpose
                Processors and milk collection schemes set rules on cooling, collection times, quality limits and residue testing, and the authorities usually require a registered or licensed dairy premises. Knowing these rules in writing before you change anything stops you investing in the wrong tank or losing a month's milk to a rejected load.

                ## Milestones
                1. The buyer's current supplier terms or milk quality standard obtained in writing.
                2. Limits for temperature, bacterial count, somatic cells and antibiotic residues noted on one page.
                3. The farm's registration or dairy licence status confirmed with the relevant authority.
                4. A list of any gaps between the farm today and the written requirements.

                ## Notes
                Rules differ by island and by buyer. If a field officer explains a rule verbally, ask for the document or note the officer's name and the date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of the buyer's quality limits and the farm's registration status exists, with each gap listed against it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the processor's field officer for the current supplier terms in writing"
                - "Write the quality limits for temperature, bacteria, cells and residues on one page"
                - "Check with the authority whether the dairy registration or licence is current"
                - "List each requirement the farm does not yet meet"
            - name: Dairy facilities baseline walk-through
              description: |-
                ## Purpose
                Before spending on improvements, it pays to see the whole operation with fresh eyes: the holding yard, the milking area, the dairy room, the feed area, calf pens, drainage and shade. A walk-through with photos and a scored list shows where milk quality, cow comfort and labour are being lost.

                ## Milestones
                1. Every area from the yard to the calf pens photographed and listed.
                2. Each area scored for cleanliness, shade, drainage and state of repair.
                3. The ten most urgent faults ranked by their effect on milk or cows.
                4. A rough cost and owner set against the top five faults.

                ## Notes
                Walk it at milking time as well as when it is quiet. Slippery concrete, a crowded yard and a dark dairy room show up best when the cows are moving.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scored list of every dairy area with photos and a ranked top ten fault list, each of the top five costed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Walk the farm during morning milking and photograph each area"
                - "Score each area for cleanliness, shade, drainage and repair"
                - "Rank the ten faults that hurt milk quality or cows the most"
                - "Put a rough cost beside the top five faults"
            - name: Cost per litre of milk baseline
              description: |-
                ## Purpose
                Milk prices are set by the buyer, so the main lever a dairy farmer holds is cost. Working out last year's total cost of feed, labour, vet, power and repairs and dividing it by litres sold gives one number to compare with the price and to judge every later decision against.

                ## Milestones
                1. Twelve months of litres sold taken from processor statements or the collection book.
                2. Costs for the same months grouped into feed, labour, health, power, repairs and other.
                3. A cost per litre worked out, with feed cost per litre shown separately.
                4. The figure compared with the average price received over the same period.

                ## Notes
                Include your own labour at a fair daily rate, even if you do not pay yourself. Without it the dairy can look profitable while paying you nothing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cost per litre for the last twelve months exists, broken into at least five cost groups and set beside the average milk price."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather twelve months of milk statements and the collection book"
                - "Sort the year's receipts into feed, labour, health, power, repairs and other"
                - "Divide each cost group by litres sold"
                - "Compare the total cost per litre with the average price received"
            - name: Dairy herd health plan with your vet
              description: |-
                ## Purpose
                Mastitis, milk fever, retained cleansings, tick fever and poor fertility cost dairies far more than the vet bill that would have caught them early. A written plan agreed with a vet who knows dairy cows sets what is checked at each visit, which diseases are tested or vaccinated for, and who calls whom when something goes wrong.

                ## Milestones
                1. A vet with dairy experience agreed as the farm's regular vet.
                2. A written plan covering mastitis, calving problems, fertility checks, ticks and the vaccinations your vet recommends.
                3. A regular visit schedule set, with pregnancy checks and fresh cow checks on the list.
                4. Emergency numbers and the signs that mean call now posted in the dairy.

                ## Notes
                Ask the vet to write which medicines may be kept on the farm and how each is recorded. The plan is theirs to set: this project is about having it, not choosing treatments.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written herd health plan signed off by the farm's vet is in the dairy, with a visit schedule and emergency contacts posted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask other dairy farmers which vets in the area treat dairy cows"
                - "Book a first farm visit to agree the herd health plan"
                - "Post the emergency signs and vet numbers on the dairy wall"
                - "Hold the routine herd visit with the vet @recurring(quarterly)"
            - name: Drinking water for milking cows
              description: |-
                ## Purpose
                Milk is mostly water, and a cow giving fifteen litres in the heat can drink several times that in a day. Troughs that are too few, too small, too far from the parlour or green with algae cut yield faster than almost any feed change, and are cheap to fix.

                ## Milestones
                1. Every trough and drinking point mapped with its size and flow rate.
                2. Water reachable within a short walk of the parlour exit and in each paddock.
                3. A trough refill rate fast enough that cows leaving milking do not queue.
                4. Water source tested or checked for quality where the buyer or vet asks for it.

                ## Notes
                Cows drink most straight after milking. A trough at the parlour exit is often the single best water improvement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A water map shows every trough with size and flow, a trough sits at the parlour exit, and no cow waits to drink after milking."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Time how long each trough takes to refill after the herd drinks"
                - "Place or move a trough to the parlour exit"
                - "Ask the vet or buyer whether the water source needs testing"
                - "Scrub and refill the water troughs @recurring(weekly:wed)"
            - name: Choosing heat-tolerant dairy breeds and crosses
              description: |-
                ## Purpose
                Pure Holsteins can give big yields in cool climates and struggle in lowland Caribbean heat, while tropical breeds and crosses such as Jamaica Hope, Girolando or Holstein and zebu crosses give less per cow but keep milking, calving and staying healthy. Deciding which type suits your climate, feed and market before buying stock or semen shapes the herd for a decade.

                ## Milestones
                1. Three or four candidate breeds or crosses listed with yield, heat tolerance and tick resistance.
                2. Two farms in a similar climate visited or called about the cows they milk.
                3. Semen or stock availability and cost checked for each option.
                4. A breed or crossing direction chosen and written down with the reasons.

                ## Notes
                Ask your extension officer or livestock research station which breeds they have records for locally. Yield per cow matters less than yield per hectare and per dollar of feed in the heat.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written breed or crossing decision exists, comparing at least three options on yield, heat tolerance and supply, informed by two local farms."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List three or four breeds or crosses used in hot climates"
                - "Call two dairy farms in a similar climate about their cows"
                - "Check semen and heifer availability for each option"
                - "Write the chosen breeding direction and why"
            - name: Milk cooling and generator backup check
              description: |-
                ## Purpose
                Warm milk grows bacteria by the hour, and in the Caribbean a power cut after evening milking can mean a rejected load by morning. Checking how fast the tank cools, how cold it holds, and whether a generator can run the tank and the milking machine together protects every litre already in the bulk tank.

                ## Milestones
                1. Tank cooling time and holding temperature measured with a separate thermometer.
                2. The tank serviced by a refrigeration technician within the last year.
                3. A generator sized and wired to run the tank and milking machine, with a safe changeover switch.
                4. A written plan for what happens to milk if the power and generator both fail.

                ## Notes
                Ask an electrician to fit the changeover switch so the generator cannot feed back into the grid. Store fuel for at least two days of milking.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The tank cools to the buyer's temperature within the time they set, a generator with a safe changeover runs it, and a written failure plan is posted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the tank temperature with a separate thermometer after milking"
                - "Book a refrigeration technician to service the tank"
                - "Ask an electrician to size the generator and fit a changeover switch"
                - "Check the tank cools to target within the buyer's time limit @recurring(weekly:thu)"
            - name: Written milking procedure for every milker
              description: |-
                ## Purpose
                Mastitis and high bacterial counts often come from milkers doing things slightly differently: one skips fore-stripping, another attaches before the milk lets down. A short written procedure, posted in the parlour and followed by everyone, makes milk quality depend on the routine rather than on who is on shift.

                ## Milestones
                1. Each step written in order: fore-strip, pre-dip, contact time, wipe dry, attach, check, remove, post-dip.
                2. The procedure posted at the milking point in large print.
                3. Every milker shown the procedure and watched through one full milking.
                4. A separate order for milking known mastitis or treated cows last.

                ## Notes
                Start from the **Operational checklist** template. Use dips and teat products your vet or buyer approves, following the label.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written milking procedure is posted in the parlour and every milker has been observed following it through a full milking."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Watch one full milking and write down each step as it is done"
                - "Rewrite the steps in the order your vet recommends"
                - "Print the procedure in large type and post it at the milking point"
                - "Walk each milker through the procedure during a real milking"
            - name: Milking machine service and liner changes
              description: |-
                ## Purpose
                Worn liners, wrong vacuum and sticky pulsators damage teat ends and spread mastitis long before the machine stops working. Keeping a service log, changing liners on time and checking the gauges every week keeps the machine milking gently and evenly.

                ## Milestones
                1. The make, model and recommended liner change interval written in a machine log.
                2. The machine tested by a technician, with vacuum and pulsation results recorded.
                3. Spare liners, tubes and a pulsator kept on the shelf.
                4. Every liner change and repair dated in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A machine log shows a technician test in the last year and liner changes dated at or before the maker's interval."
                cadence: rolling
              tasks:
                - "Find the maker's liner change interval and write it in the log"
                - "Book a milking machine technician to test vacuum and pulsation"
                - "Check the vacuum gauge and listen to the pulsators before milking @recurring(weekly:mon)"
                - "Count milkings since the last liner change and change when due @recurring(monthly:8)"
            - name: Bulk milk quality and somatic cell tracking
              description: |-
                ## Purpose
                The processor's bulk milk results are the clearest warning a dairy gets: a rising somatic cell count points to mastitis in the herd, and a rising bacterial count points to cleaning or cooling. Logging every result and acting when a number moves keeps the farm in the top payment grade and away from penalties.

                ## Milestones
                1. Every bulk milk result from the last six months entered in one sheet.
                2. Action levels set for cell count and bacterial count, below the buyer's penalty limits.
                3. A short cause checklist written for each kind of rise.
                4. Each result above an action level followed by a dated note of what was checked.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A results sheet holds every bulk milk test for six months or more, and each result above the action level has a dated follow-up note."
                cadence: rolling
              tasks:
                - "Ask the processor for the last six months of bulk milk results"
                - "Set action levels below the buyer's penalty limits"
                - "Write a cause checklist for high cells and for high bacteria"
                - "Enter the latest bulk milk results and check against action levels @recurring(monthly:5)"
            - name: Clinical mastitis log and treatment follow-up
              description: |-
                ## Purpose
                Without a log, mastitis feels random. With one, patterns show: the same few cows, the same quarter, a run after a new milker started, or cases straight after calving. Recording each case and what the vet advised turns a recurring cost into something you can manage.

                ## Milestones
                1. A mastitis log in the dairy with cow, quarter, date, signs and treatment given.
                2. Every case recorded for three months without gaps.
                3. Repeat offenders identified and discussed with the vet.
                4. A monthly case count tracked against the herd size.

                ## Notes
                Ask your vet about taking milk samples from cases for culture. Knowing which bacteria you have changes what prevention works.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every mastitis case for three months is in the log, and repeat cows have been reviewed with the vet with a decision recorded for each."
                cadence: rolling
              tasks:
                - "Set up a mastitis log page with cow, quarter, date, signs and treatment"
                - "Ask the vet which cases should be sampled for culture"
                - "Mark cows with three or more cases for a vet discussion"
                - "Total the month's mastitis cases and divide by cows milked @recurring(monthly:28)"
            - name: Treated cow marking and milk withdrawal control
              description: |-
                ## Purpose
                One treated cow's milk in the bulk tank can fail a whole load for antibiotic residues, and processors may charge for the tanker or suspend collection. A clear system of marking treated cows, a board with withdrawal end dates, and a separate bucket or line for their milk makes this mistake almost impossible.

                ## Milestones
                1. A visible marking method agreed, such as leg bands or coloured tail paint.
                2. A treatment board in the dairy showing cow, product, date and milk withdrawal end date.
                3. A separate bucket or line used for milk from treated cows, kept out of the tank.
                4. Every treatment entered in the medicine record your vet and the law require.

                ## Notes
                Withdrawal periods come from the product label and your vet. When a cow is treated with something off label, the vet sets the period in writing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A treatment board lists every treated cow with her withdrawal end date, treated cows are visibly marked, and no load fails a residue test."
                cadence: rolling
              tasks:
                - "Buy leg bands or marker paint for treated cows"
                - "Put a treatment board on the dairy wall with a column for withdrawal end dates"
                - "Set aside a labelled bucket or line for withheld milk"
                - "Check the treatment board against today's date before milking @recurring(daily)"
            - name: Heat stress watch for the milking herd
              description: |-
                ## Purpose
                In tropical heat, high-yielding cows can lose milk, eat less and fail to get in calf when the air is hot and humid. A simple daily watch of temperature, humidity and panting cows, with set actions when thresholds are passed, protects yield and fertility through the hottest months.

                ## Milestones
                1. A thermometer and humidity meter placed in the holding yard or shed.
                2. A temperature and humidity index chart posted, with a trigger level agreed.
                3. Actions written for each level, such as extra sprinkling, more shade, feeding later in the day.
                4. Readings and panting counts logged through one hot season.

                ## Notes
                Panting with the mouth open and drooling are signs to act now. Ask your vet what signs mean a cow needs urgent help.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Temperature, humidity and panting counts are logged on hot days for a full season, with the written actions taken each time the trigger was passed."
                cadence: rolling
              tasks:
                - "Buy a thermometer with a humidity reading for the cow area"
                - "Post a temperature and humidity index chart with your trigger level"
                - "Write the actions to take at each heat level"
                - "Read temperature and humidity at midday and count panting cows @recurring(daily)"
            - name: Heat detection and breeding calendar
              description: |-
                ## Purpose
                A dairy only makes milk if cows calve regularly, and missed heats are the most common reason calving intervals stretch well past a year. Watching for heats at set times, recording them, and keeping a calendar of due inseminations, pregnancy checks and dry-off dates keeps the herd calving on time.

                ## Milestones
                1. Two set heat watch times a day agreed, usually early morning and late afternoon.
                2. A breeding calendar showing each cow's last calving, heats, services and expected calving.
                3. A voluntary waiting period after calving agreed with the vet.
                4. Cows with no heat seen by the agreed day listed for a vet check.

                ## Notes
                Heats are shorter and harder to see in hot weather and often happen at night. Tail paint or heat detection patches help a busy farm catch more of them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A breeding calendar is kept for every cow with heats and services recorded, and every cow with no heat seen by the agreed day has been checked by the vet."
                cadence: rolling
              tasks:
                - "Set two heat watch times a day and tell everyone on the farm"
                - "Draw up a breeding calendar with each cow's last calving date"
                - "Watch for heats at dawn and dusk and note each one @recurring(daily)"
                - "Update the breeding calendar and list cows due for service or checks @recurring(weekly:mon)"
            - name: Monthly individual cow milk recording
              description: |-
                ## Purpose
                The tank total hides the cows that pay and the ones that do not. Measuring each cow's milk on one day a month shows the lactation curve, the low yielders worth culling, and the effect of any feed or comfort change within weeks rather than seasons.

                ## Milestones
                1. A way to measure each cow's milk chosen: meters, a weigh bucket or a calibrated jar.
                2. One recording day a month fixed, with morning and evening milk measured.
                3. Each cow's yield entered against her days since calving.
                4. The lowest ten percent of cows by yield for their stage listed each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly recordings are entered for every milking cow, with days in milk beside each yield."
                cadence: cyclic
              tasks:
                - "Choose a measuring method and check it against a known volume"
                - "Set up a sheet with cow number, days in milk and yield columns"
                - "Measure each cow's morning and evening milk on recording day @recurring(monthly:15)"
                - "List the lowest yielders for their stage of lactation"
            - name: Feed bunk and ration consistency checks
              description: |-
                ## Purpose
                Cows hate surprises in their feed. A ration that changes with whatever forage was cut that day, or concentrate scooped by eye, makes yield swing and can upset the rumen. Checking what goes in and what is left over keeps intake steady and catches problems before the milk drops.

                ## Milestones
                1. The ration your nutritionist or feed adviser set written up on the feed room wall.
                2. Scoops or buckets marked so concentrate amounts match the written ration.
                3. Bunk leftovers scored at the same time each check.
                4. Any change to forage or concentrate brought in over several days, not overnight.

                ## Notes
                Ration design belongs to a nutritionist or the feed adviser; this project makes sure the ration they set is what the cows actually get.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The written ration is posted, measuring scoops are marked, and bunk scores are logged twice a week for three months."
                cadence: rolling
              tasks:
                - "Post the current ration on the feed room wall"
                - "Weigh one scoop of each concentrate and mark the scoops"
                - "Score the feed bunk leftovers before the morning feed @recurring(weekly:tue,fri)"
                - "Write a change-over plan for the next forage switch"
            - name: Dairy and parlour cleaning schedule
              description: |-
                ## Purpose
                High bacterial counts usually come from milk residue in the machine, the tank or the cans rather than from the cows. A written wash routine, with the right water temperature, detergent and acid rinse your supplier recommends, keeps milk clean and the equipment lasting longer.

                ## Milestones
                1. A wash routine written for the machine, the tank and any cans or buckets.
                2. Hot water supply checked to reach the temperature the detergent label needs.
                3. Detergent and acid products chosen with your supplier and stored safely.
                4. A weekly strip check of rubber parts and the tank outlet for residue.

                ## Notes
                Follow the detergent label for strength and temperature. Too cool a wash leaves a fatty film where bacteria grow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A posted wash routine is followed after every milking and weekly strip checks are logged with no residue found for three months."
                cadence: rolling
              tasks:
                - "Write the wash routine for the machine, tank and cans"
                - "Measure the hot water temperature at the wash point"
                - "Ask the dairy supplier which detergent and acid suit your water"
                - "Strip the tank outlet and rubber parts to check for residue @recurring(weekly:sat)"
            - name: Lameness scoring and hoof trimming round
              description: |-
                ## Purpose
                Lame cows walk less, eat less, show fewer heats and give less milk, and wet tropical yards and stony laneways make lameness common. Scoring the herd regularly as it walks, and getting early cases looked at by a trained hoof trimmer or the vet, catches problems while they are still cheap to fix.

                ## Milestones
                1. A simple lameness scoring scale learned and written on a card.
                2. The whole herd scored as it walks out of the parlour.
                3. Every lame cow seen by a trimmer or the vet within days of being spotted.
                4. Laneways and yard surfaces repaired where scoring shows a pattern.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly lameness scores are logged for six months, and every cow scored lame has a dated trimmer or vet visit recorded."
                cadence: rolling
              tasks:
                - "Print a four or five point lameness scoring scale"
                - "Find a trained hoof trimmer or ask the vet who does trimming"
                - "Lameness score the herd walking out of the parlour @recurring(monthly:20)"
                - "Mark the stretch of laneway or yard where lame cows cluster"
            - name: Milk payment statement reconciliation
              description: |-
                ## Purpose
                Processors pay on volume measured at the tank and on quality grades from their tests, and errors happen: a missed collection, a wrong grade, a deduction nobody explained. Matching each statement to your own collection book catches these while they are still easy to query.

                ## Milestones
                1. A collection book recording litres, date and the driver's signature for every pickup.
                2. Each statement's volume, grade and deductions checked against the book.
                3. Differences queried with the processor in writing within the month.
                4. A running sheet of litres, price per litre and deductions for the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every monthly statement for six months is ticked against the collection book, and each difference has a dated query and outcome noted."
                cadence: rolling
              tasks:
                - "Start a collection book with litres, date and driver signature columns"
                - "Ask the processor to explain each deduction code on the statement"
                - "Match the processor statement with the collection book @recurring(monthly:3)"
                - "Email the processor about any difference you find"
            - name: Body condition scoring through lactation
              description: |-
                ## Purpose
                Thin cows at calving struggle to peak and to get back in calf, and fat ones are at risk of calving problems. Learning to score condition by eye and hand, and scoring each cow at key stages, tells you whether the feeding plan is working before it shows in the milk.

                ## Milestones
                1. A dairy body condition scoring chart with photos obtained and studied.
                2. Ten cows scored alongside the vet or extension officer, with scores compared.
                3. Target scores for calving, peak and dry-off agreed with your vet or nutritionist.
                4. Every cow scored each month for three months and the trend noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your scores match the vet's within half a point on ten cows, and three months of monthly scores for every cow are recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download a dairy body condition scoring chart with photos"
                - "Score ten cows with the vet or extension officer and compare"
                - "Agree target scores for calving, peak and dry-off"
                - "Score every cow's body condition @recurring(monthly:25)"
            - name: California mastitis test skills
              description: |-
                ## Purpose
                Subclinical mastitis has no clots and no swollen quarter but still lifts the cell count and cuts yield. The California mastitis test, done on a paddle at the cow side, shows which quarter is the problem in a minute, and learning to read it properly makes the bulk tank results actionable.

                ## Milestones
                1. A test paddle and reagent bought from a dairy supplier.
                2. The method practised on several cows with the vet or an experienced farmer watching.
                3. Reaction grades understood and written on a card kept with the paddle.
                4. The whole herd tested once, with results per quarter recorded.

                ## Notes
                Test fresh cows a few days after calving and any cow whose milk or udder looks off. A whole-herd test is useful whenever the bulk cell count rises.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every milking cow has been tested once with quarter results recorded, and you can grade a reaction the same as the vet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Buy a test paddle and reagent from a dairy supplier"
                - "Practise the test on five cows with someone experienced"
                - "Write the reaction grades on a card kept with the paddle"
                - "Test every milking cow and record results by quarter"
            - name: Reading the processor's milk quality report
              description: |-
                ## Purpose
                Milk reports carry fat, protein, solids, cell count, bacterial count, freezing point and residue results, and each one tells you something different about the herd or the dairy. Knowing what each figure means and how it affects your price turns a slip of paper into a monthly to-do list.

                ## Milestones
                1. Each line of the report explained by the processor's field officer or extension officer.
                2. A one-page guide written: what each figure measures and what usually moves it.
                3. The price effect of each quality grade worked out in money per month.
                4. One improvement chosen from the report and tracked for three months.

                ## Notes
                A low freezing point reading can mean water in the milk, often from rinse water left in the lines. Drain the system well before milking.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to every line on the milk report exists, with the monthly money value of moving up one grade worked out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the field officer to explain each line of the latest report"
                - "Write a one-page guide to what each figure means"
                - "Work out what moving up one quality grade is worth per month"
                - "Pick one figure to improve and note today's value"
            - name: Artificial insemination course for the farm
              description: |-
                ## Purpose
                Keeping a bull is costly and risky, and a bull rarely carries the genetics a dairy needs. A farmer or worker trained in artificial insemination can serve cows at the right time with chosen semen, but only after proper training and, in many countries, a licence.

                ## Milestones
                1. A recognised AI course found through the ministry, a breed society or a semen supplier.
                2. Any licence or registration needed to inseminate your own cows checked.
                3. The course completed, including supervised practice on live cows.
                4. A semen storage tank and record system set up, with liquid nitrogen supply arranged.

                ## Notes
                Start from the **Course** template. Until you are confident, keep the number of an AI technician you can call for repeat breeders.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed AI course certificate is held, any required licence is in place, and semen storage with a supply arrangement is running."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the extension office where AI courses run and when"
                - "Check whether a licence is needed to inseminate your own cows"
                - "Book a place on the next course"
                - "Arrange a liquid nitrogen supply before buying a semen tank"
            - name: Colostrum and newborn calf care
              description: |-
                ## Purpose
                Calves that get enough good colostrum in their first hours have far better odds of surviving scours and pneumonia and growing into productive heifers. Learning the routine for the first day, from the navel to the first feeds, and making it the same every time is the best investment in the future herd.

                ## Milestones
                1. The first-day routine written with your vet: navel care, colostrum timing and amount, identification.
                2. A way to check colostrum quality, such as a refractometer, bought and practised.
                3. A small store of good frozen colostrum kept for emergencies.
                4. Every calf's first feed time recorded for a full calving season.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written first-day calf routine is posted, colostrum quality is checked for each calving, and first feed times are logged for every calf in a season."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the vet to help write the first-day calf routine"
                - "Buy a colostrum refractometer and learn to read it"
                - "Freeze labelled bags of good colostrum from older cows"
                - "Record the first feed time for each new calf"
            - name: Paddock rotation for the milking herd
              description: |-
                ## Purpose
                Milking cows on pasture give more and cost less when they graze young, leafy grass and move before they eat it to the ground. Learning to judge grass by height or leaf stage and setting a rotation around the walk to the parlour makes the most of the cheapest feed the farm grows.

                ## Milestones
                1. Paddocks mapped with area, grass type and walking distance to the parlour.
                2. Entry and exit grass heights learned for your main grass, with an extension officer's help.
                3. A rotation plan written for the wet season and a shorter one for the dry season.
                4. Grazing dates recorded for each paddock through a full rotation.

                ## Notes
                Keep the milking herd on the paddocks closest to the parlour, and graze dry cows and heifers further out. Long walks in the heat cost milk.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A paddock map and written rotation exist, and grazing dates are recorded for every paddock through one full rotation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map each paddock with its area and distance to the parlour"
                - "Ask the extension officer the right entry and exit heights for your grass"
                - "Write a wet season rotation and a dry season rotation"
                - "Record the date the herd enters and leaves each paddock"
            - name: Transition cow care before and after calving
              description: |-
                ## Purpose
                Most dairy health problems, from milk fever to retained cleansings and early mastitis, happen in the three weeks either side of calving. Understanding what the cow needs in this period and agreeing a routine with your vet and nutritionist sets up the whole lactation.

                ## Milestones
                1. The main transition problems and their early signs listed with your vet.
                2. A close-up group or pen for cows due to calve set aside, near the house.
                3. A fresh cow check routine written for the first ten days after calving.
                4. Transition problems recorded for one calving season and reviewed with the vet.

                ## Notes
                Feeding before calving is a specialist subject. Agree any change to the dry cow diet with a nutritionist or your vet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A close-up pen is in use, a written fresh cow check is followed, and one season's transition problems have been reviewed with the vet."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the transition problems and early signs with your vet"
                - "Choose a pen near the house for cows close to calving"
                - "Write a fresh cow check for the first ten days after calving"
                - "Note every transition problem in the herd register"
            - name: Choosing a milking machine or parlour upgrade
              description: |-
                ## Purpose
                Moving from hand milking to a bucket machine, or from buckets to a pipeline and small parlour, changes labour, milk quality and how many cows one person can handle. Comparing options on cost, service support on the island and spare parts stops you buying a machine nobody locally can fix.

                ## Milestones
                1. Current milking time per cow and labour cost measured.
                2. Three options priced, from a single bucket unit to a small parlour.
                3. Local technician support and spare part supply checked for each brand.
                4. A choice made with expected time saved and payback written down.

                ## Notes
                Start from the **Purchase decision** template. Ask other farmers which dealer turns up when a pulsator fails on a Sunday.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision compares three milking options on cost, labour saved and local support, and names the chosen option."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Time a full milking and work out minutes per cow"
                - "Get quotes for three milking options"
                - "Ask two farmers about dealer service for each brand"
                - "Write the decision with expected payback"
            - name: Shade, fans and sprinklers for the holding yard
              description: |-
                ## Purpose
                Cows wait in the holding yard before every milking, often in full sun, and that is when heat stress bites hardest. A roof, fans and sprinklers in the yard, or at least shade and water, can lift yield in the hot months more than any feed change.

                ## Milestones
                1. Shade, sun and air flow in the yard and feeding area measured at midday.
                2. Options priced: shade cloth, a roof, fans, low-pressure sprinklers.
                3. Water use and power needs for sprinklers and fans checked against supply.
                4. The chosen system installed and yield compared before and after.

                ## Notes
                Sprinklers work best with fans to dry the cow, and wet ground without air movement can make humidity worse. Roofs must be built to your area's wind standards.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shade and cooling system is installed in the holding yard, with average yield for a month before and after recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Note which parts of the yard are in full sun at midday"
                - "Price shade cloth, a roof, fans and sprinklers"
                - "Check the water and power supply can run sprinklers and fans"
                - "Record average yield for a month before installing"
            - name: Calf pens and rearing area upgrade
              description: |-
                ## Purpose
                Calves kept in damp, crowded or draughty pens get sick, and every calf lost is a future cow gone. Dry, shaded, well-drained individual or small group pens, with clean water and easy cleaning, cut disease and labour at the same time.

                ## Milestones
                1. Current calf losses and sickness for the last year counted.
                2. A pen design chosen with shade, drainage, airflow and space per calf.
                3. Pens built or rebuilt, with water and feed access in each.
                4. A cleaning routine between calves written and followed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "New or rebuilt calf pens with shade, drainage and water are in use, and a cleaning routine between calves is posted."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Count calves lost or treated in the last year"
                - "Sketch a pen layout with shade, drainage and airflow"
                - "Build or repair the calf pens"
                - "Post the cleaning routine for between calves"
            - name: Dry-off routine and dry cow management
              description: |-
                ## Purpose
                Before calving, every cow needs a dry period to rebuild her udder, and how she is dried off affects mastitis and yield in the next lactation. A written routine for the dry-off date, the method your vet recommends and where dry cows go keeps this from being done in a hurry.

                ## Milestones
                1. The dry period length and dry-off method agreed with the vet.
                2. Dry-off dates set from the breeding calendar for every cow in calf.
                3. A dry cow paddock or pen chosen away from the milking routine.
                4. Every dry-off recorded with the date and any treatment used.

                ## Notes
                Any dry cow treatment or teat sealant is the vet's call, used as the label directs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written dry-off routine agreed with the vet exists, and every cow dried off in the last three months has her date and method recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the dry period length and dry-off method with the vet"
                - "Mark each cow's dry-off date on the breeding calendar"
                - "Choose a dry cow paddock away from the milking herd"
                - "Record each dry-off in the herd register"
            - name: Manure and dairy wastewater plan
              description: |-
                ## Purpose
                Manure and washwater pile up every day in a dairy, and run-off into a river or a neighbour's land brings complaints, fines and flies. A plan for collecting, storing and spreading it turns a nuisance into fertiliser for the forage fields.

                ## Milestones
                1. The volume of washwater and manure produced each day estimated.
                2. Any environmental permit or rule for dairy effluent checked with the authority.
                3. A settling pit, pond or composting area designed and built.
                4. A spreading plan for forage fields written, away from watercourses.

                ## Notes
                Ask the extension officer or environmental agency about safe distances from wells and streams before choosing a site.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A collection and storage system for dairy manure and washwater is built, any permit is in place, and a written spreading plan exists."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Measure how much washwater the dairy uses each day"
                - "Ask the environmental authority what rules apply to dairy effluent"
                - "Choose a site for a settling pit or compost area"
                - "Mark on the farm map where manure can and cannot be spread"
            - name: Culling rules for the dairy herd
              description: |-
                ## Purpose
                Keeping a cow that repeatedly gets mastitis, fails to get in calf or gives little milk costs feed, labour and quality payments. Writing culling rules in advance, so decisions follow the records rather than how fond you are of the cow, keeps the herd improving.

                ## Milestones
                1. Culling criteria written: repeat mastitis, open days, low yield, lameness, temperament.
                2. Every cow checked against the rules using the register and records.
                3. A cull list made with a planned sale or removal date for each cow.
                4. The cull list reviewed once a year against replacement heifers coming in.

                ## Notes
                Check withdrawal periods before any cow leaves for slaughter. A treated cow cannot go to the abattoir until her meat withdrawal has passed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written culling rules exist and every cow in the herd has been checked against them, with a dated cull list."
                cadence: rolling
              tasks:
                - "Write five culling criteria for the herd"
                - "Check each cow's records against the criteria"
                - "Make a cull list with planned dates"
                - "Review the cull list against replacement heifers coming in @recurring(yearly)"
            - name: Rearing or buying replacement heifers
              description: |-
                ## Purpose
                Every herd needs a steady flow of heifers to replace culled cows, and rearing them takes two years of feed and space before they give a litre. Comparing the full cost of rearing your own with buying in, including the disease risk of bought stock, gives a clear decision for the next five years.

                ## Milestones
                1. The number of replacements needed per year worked out from the cull rate.
                2. The cost of rearing one heifer to calving estimated from feed, labour and health.
                3. Prices and disease testing for bought heifers checked with two sellers.
                4. A rearing or buying decision recorded with the numbers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision compares the full cost of rearing and buying replacement heifers and sets the number needed each year."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count how many cows left the herd in the last two years"
                - "Estimate the feed and labour to rear one heifer to calving"
                - "Ask two sellers for heifer prices and health test records"
                - "Write the decision and the yearly replacement target"
            - name: Bull calf and surplus calf plan
              description: |-
                ## Purpose
                Every cow that calves gives a calf, and about half are bulls a dairy does not need. Deciding in advance whether to sell them young, rear them for beef or arrange a buyer avoids crowded calf pens and calves sold for little at the last minute.

                ## Milestones
                1. Expected bull calves per year counted from the calving calendar.
                2. Local buyers or beef rearers for dairy bull calves identified.
                3. The cost of rearing a bull calf to sale weight estimated.
                4. A written plan for each bull calf's age and route off the farm.

                ## Notes
                Sexed semen for the best cows can cut the number of bull calves; ask your semen supplier about cost and conception rates.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan names a buyer or route for bull calves and the age they leave the farm."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count bull calves born in the last year"
                - "Ask beef farmers whether they buy dairy bull calves"
                - "Estimate the cost of rearing one bull calf to sale"
                - "Write the plan for bull calves on the calving board"
            - name: Processor or health inspection readiness
              description: |-
                ## Purpose
                Processors, public health officers and veterinary services inspect dairies, and a poor inspection can mean penalties, a downgrade or suspended collection. Preparing the parlour, dairy room, records and medicine store against the inspection checklist turns a stressful visit into a routine one.

                ## Milestones
                1. The inspection checklist obtained from the processor or authority.
                2. Each item checked on the farm and gaps fixed or scheduled.
                3. Medicine records, treatment board, wash logs and water tests filed together.
                4. A mock inspection done with someone who has not seen the dairy before.

                ## Notes
                Start from the **Compliance control** template. Keep a folder in the dairy office so an inspector sees everything in one place.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every item on the inspection checklist is met or has a dated fix, records are filed in one folder, and a mock inspection has been done."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the processor or authority for the dairy inspection checklist"
                - "Walk the dairy and tick or flag each checklist item"
                - "File medicine, wash and water records in one dairy folder"
                - "Ask a neighbour or adviser to do a mock inspection"
            - name: Storm and long power cut milking contingency
              description: |-
                ## Purpose
                Cows must be milked twice a day whatever the weather, and after a hurricane roads may close, power may be off for weeks and the tanker may not come. A dairy-specific plan for milking, cooling, storing or disposing of milk safely, and keeping cows watered and fed, lets the farm keep going.

                ## Milestones
                1. Fuel for the generator and fresh water stored for at least several days of milking.
                2. A plan for milk if collection stops: reduced milking, feeding calves, local sales or safe disposal.
                3. Hand milking equipment and clean containers kept as a backup to the machine.
                4. A contact list for the processor, vet, feed supplier and neighbouring dairies.

                ## Notes
                Ask the processor and authority how milk may be disposed of safely if collection stops. Milk poured into a stream causes serious pollution.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written storm and power cut plan is posted in the dairy, with stored fuel and water and a tested generator."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Work out how much fuel the generator burns per milking"
                - "Ask the processor what to do with milk if collection stops"
                - "Pack hand milking buckets and clean containers in a storm kit"
                - "Run the generator under load for half an hour @recurring(monthly:10)"
            - name: Calving season preparation
              description: |-
                ## Purpose
                When many cows calve in the same few months, calvings at night, difficult births and sick calves all arrive together. Preparing the calving area, the kit, the vet arrangements and the colostrum store before the first cow is due makes the season far less chaotic.

                ## Milestones
                1. A list of cows due to calve, with expected dates, drawn from the breeding calendar.
                2. A clean, dry calving pen ready, with good light for night checks.
                3. A calving kit stocked as your vet advises, with clean ropes, gloves and lubricant.
                4. Night check rota and vet emergency arrangements agreed.

                ## Notes
                Agree with your vet when to step in and when to call. Pulling a calf too early or too hard causes more damage than it prevents.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A due list, a ready calving pen, a stocked kit and a night check rota are in place before the first expected calving."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Make a list of cows due to calve in date order"
                - "Clean and light the calving pen"
                - "Ask the vet what to keep in the calving kit"
                - "Agree a night check rota with family or staff"
            - name: Buying in cows with quarantine and testing
              description: |-
                ## Purpose
                Bought cows can bring in mastitis bacteria, ticks and tick-borne disease, or infections such as brucellosis and tuberculosis that can close a dairy. Buying only tested animals, isolating them and checking them before they join the herd protects the cows you already have.

                ## Milestones
                1. Health questions and test records asked of every seller before buying.
                2. An isolation pen set up away from the milking herd.
                3. Each bought cow kept apart for the period your vet sets and checked before joining.
                4. Every bought cow entered in the herd register with origin and test results.

                ## Notes
                Ask the veterinary authority which tests are needed when moving cattle between farms. Some countries require official tests and movement permits.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every cow bought in has test records, has completed isolation as the vet set it, and is in the register with her origin."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the health questions to ask every seller"
                - "Ask the vet which tests a bought cow should have"
                - "Set up an isolation pen away from the milking herd"
                - "Check any movement permit needed with the veterinary authority"
            - name: Switching to a new milk buyer
              description: |-
                ## Purpose
                Switching to a new processor or cooperative for a better price can pay, but notice periods, different quality rules and gaps in collection can leave milk with nowhere to go. Planning the switch, with dates, contracts and quality checks lined up, keeps every litre sold.

                ## Milestones
                1. Notice terms in the current agreement checked.
                2. The new buyer's price, payment days, quality limits and collection times in writing.
                3. A start date agreed with no gap in collection.
                4. The first month's statement from the new buyer checked against the collection book.

                ## Notes
                Have a lawyer or the farmers' association look over any long contract before you sign.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The switch is made on an agreed date with no missed collection, and the first statement from the new buyer has been checked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the notice terms in the current milk agreement"
                - "Ask the new buyer for price, payment days and quality limits in writing"
                - "Agree a start date that leaves no gap in collection"
                - "Check the first statement against the collection book"
            - name: Small herd of two to ten cows
              description: |-
                ## Purpose
                Many Caribbean dairies are a few cows milked by one family, often by hand or with a single bucket machine, selling to a collection centre or neighbours. A plan built for that scale, with simple records, a shared bull or AI, and the cheapest cooling that meets the buyer's rules, makes a small herd pay its way.

                ## Milestones
                1. A one-page herd book covering calving, breeding, treatments and daily litres.
                2. A cooling and delivery arrangement that gets milk to the buyer within their time limit.
                3. Breeding arranged through an AI technician, a shared bull or a cooperative.
                4. A simple monthly sum of milk money in and feed and vet money out.

                ## Notes
                Check with the authority or buyer before selling raw milk to neighbours. Many countries restrict or ban it for food safety reasons.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page herd book is kept daily, milk reaches the buyer within their cooling limit, and a monthly money sum is recorded for six months."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draw up a one-page herd book for the cows you have"
                - "Ask the collection centre what cooling and delivery times they require"
                - "Find an AI technician or shared bull for breeding"
                - "Write a monthly sum of milk money in and costs out"
            - name: Converting a beef or mixed farm to dairy
              description: |-
                ## Purpose
                Beef farmers with good pasture sometimes move into milk for the monthly cheque, but dairying needs twice-daily labour, a parlour, cooling, buyer approval and different cows. A staged plan that tests the market, labour and money before buying stock avoids an expensive change that cannot be reversed easily.

                ## Milestones
                1. A buyer willing to collect from your farm, with terms in writing.
                2. A budget for parlour, cooling, cows and the first year's running costs.
                3. Labour for every milking, seven days a week, named and agreed.
                4. A start herd size and a two-year growth step set out.

                ## Notes
                Talk to farm finance advisers and the extension service before committing. A small trial herd teaches more than any spreadsheet.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written conversion plan exists with a buyer's terms, a budget, named milking labour and a start herd size, and a go or no-go decision recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the processor whether they would collect from your farm"
                - "Visit two working dairies and ask about labour and costs"
                - "Draft a budget for parlour, cooling, cows and the first year"
                - "Name who will milk every morning and evening"
            - name: Handing the dairy to the next generation
              description: |-
                ## Purpose
                Family dairies often pass from parent to child without anything written: who owns the cows, the land, the milk contract, and who makes decisions in the meantime. A planned handover over several years keeps the herd running and the family talking.

                ## Milestones
                1. A family meeting held on who wants to farm and on what timeline.
                2. Ownership of land, cows, equipment and the milk contract listed.
                3. A handover plan with stages for decisions, money and ownership written.
                4. Legal and tax advice taken on transfers, with the plan updated.

                ## Notes
                Land held as family land with many heirs needs a lawyer's advice early. Keep the parent's income and housing in the plan.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written, staged handover plan exists, agreed at a family meeting and reviewed with a lawyer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set a date for a family meeting about the dairy's future"
                - "List who owns the land, cows, equipment and milk contract"
                - "Draft the stages of the handover with dates"
                - "Book a lawyer to advise on the transfers"
            - name: Hiring and training a milker
              description: |-
                ## Purpose
                A good milker is the person who decides the farm's milk quality twice a day, and the hardest to replace. Hiring with clear expectations and training against the written milking procedure, with time spent alongside an experienced milker, gets a new person milking well within weeks.

                ## Milestones
                1. A job description covering milking times, days off, pay and duties.
                2. A trial milking with each shortlisted candidate.
                3. A training plan for the first four weeks using the written milking procedure.
                4. The new milker signed off as independent after an observed milking.

                ## Notes
                Start from the **Training program** template. Check statutory pay and contributions with the labour department.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new milker has been hired, trained to the written procedure over four weeks, and signed off after an observed milking."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a job description with milking times and days off"
                - "Hold a trial milking with each shortlisted candidate"
                - "Plan four weeks of training against the milking procedure"
                - "Observe a full milking before signing the milker off"
            - name: Running the dairy while working off the farm
              description: |-
                ## Purpose
                Many dairy owners hold another job or live away from the farm and rely on a herdsman. A short weekly report, a few key numbers and set rules on what needs a call let the owner keep the herd on track without being in the parlour every morning.

                ## Milestones
                1. A weekly report template: litres, quality results, calvings, treatments, problems.
                2. The decisions the herdsman can make alone and the ones that need a call written down.
                3. A weekly call held at a set time.
                4. A visit by the owner at least monthly with a walk-through checklist.

                ## Notes
                Ask the agent to draft the weekly report template from the herd records you already keep.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly reports have arrived for three months, a weekly call is held, and the herdsman's decision limits are written down."
                cadence: rolling
              tasks:
                - "Ask the agent to draft a weekly herd report template"
                - "Write which decisions the herdsman can make alone"
                - "Hold a weekly call with the herdsman @recurring(weekly:sun)"
                - "Write a checklist for the owner's monthly farm walk"
            - name: Joining a milk collection centre or dairy cooperative
              description: |-
                ## Purpose
                Small herds often get a better price, cooling and services such as AI or feed buying through a collection centre or cooperative. Joining well means understanding the rules, the fees, the quality testing and your rights as a member before you sign.

                ## Milestones
                1. The collection centre or cooperative's rules, fees and quality standards obtained.
                2. Two existing members asked about payments, testing and how disputes are settled.
                3. Membership application completed with all documents.
                4. First month's delivery records checked against the centre's statement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A membership decision is recorded after reading the rules and speaking to two members, and the first statement has been checked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the collection centre for its rules, fees and standards"
                - "Speak to two members about payments and testing"
                - "Complete the membership application"
                - "Compare your delivery records with the first statement"
            - name: Farmstead yoghurt and cheese pilot
              description: |-
                ## Purpose
                Turning some milk into yoghurt, cheese or flavoured milk can earn more per litre than the processor pays, but dairy products carry real food safety risk and usually need a licensed facility. A small pilot that checks the rules, the market and the numbers before investing tells you whether it is worth it.

                ## Milestones
                1. Licensing, pasteurisation and labelling rules for dairy products checked with the authority.
                2. A small test batch made in an approved kitchen or under a food safety adviser.
                3. Twenty customers or shops asked to taste and price the product.
                4. Cost per unit and margin compared with selling the same milk to the processor.

                ## Notes
                Check whether your milk contract allows you to divert milk. Some require all milk to go to the processor.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written go or no-go decision compares the product's margin per litre with the processor's price, after checking licensing and testing the market."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the public health authority what licence dairy products need"
                - "Check whether the milk contract lets you keep milk back"
                - "Make a test batch in an approved kitchen"
                - "Ask twenty customers to taste and name a price"
            - name: Selling pasteurised milk direct
              description: |-
                ## Purpose
                Bottled pasteurised milk sold at the farm gate, to shops or by delivery can double the value of a litre, but it needs a pasteuriser, a licence, cold chain and labels. Working through the rules and costs in order avoids buying a pasteuriser before you know you can sell legally.

                ## Milestones
                1. The legal requirements for selling pasteurised milk in your country written down.
                2. Pasteuriser, bottling and cold storage options priced.
                3. A market test with shops or regular customers on volume and price.
                4. A licensed small-scale operation running, or a recorded decision not to proceed.

                ## Notes
                Food safety regulators treat milk as high risk. Get the licence and testing arrangements in place before any sale.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision on direct milk sales exists, based on the legal requirements, priced equipment and a market test."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the food safety authority what selling pasteurised milk requires"
                - "Price a small pasteuriser, bottles and cold storage"
                - "Ask three shops how much milk they would take weekly"
                - "Write the decision on whether to go ahead"
            - name: Sire selection for heat tolerance and milk
              description: |-
                ## Purpose
                Each straw of semen you choose shapes the herd for ten years. Choosing sires on proven milk, solids, fertility, udder health and heat tolerance, rather than on price or a catalogue picture, steadily breeds cows that suit the farm.

                ## Milestones
                1. Breeding goals for the herd written: milk, solids, fertility, udder health, heat tolerance.
                2. Sire catalogues from two semen suppliers compared against the goals.
                3. Each cow matched to a sire to avoid inbreeding and correct weaknesses.
                4. A yearly review of daughter performance against the chosen sires.

                ## Notes
                Bulls proven in temperate countries may not pass on heat tolerance. Ask suppliers for sires with tropical or crossbred daughters on record.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written breeding goals exist and every cow due for service has a chosen sire recorded against them."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Write the herd's breeding goals in order of importance"
                - "Request sire catalogues from two semen suppliers"
                - "Match each cow due for service with a sire"
                - "Review daughter performance against chosen sires @recurring(yearly)"
            - name: Dairy herd benchmarks and key figures
              description: |-
                ## Purpose
                Experienced dairy farmers manage a handful of figures: calving interval, days open, yield per cow per day, cell count, calf losses, culling rate and cost per litre. Tracking these each quarter and comparing with good local herds shows where the next gain lies.

                ## Milestones
                1. Seven key figures defined, with how each is worked out.
                2. The figures calculated from the herd register and records for the last year.
                3. Comparison figures obtained from the extension service, cooperative or processor.
                4. The single weakest figure chosen as the focus for the next quarter.

                ## Notes
                Start from the **Metrics log** template. A figure moves slowly, so look at the trend over several quarters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Seven herd figures are recorded for four consecutive quarters, with a named focus figure and the result each quarter."
                cadence: cyclic
              tasks:
                - "List seven key figures and how each is calculated"
                - "Calculate last year's figures from the records"
                - "Ask the extension officer for local comparison figures"
                - "Update the key figures sheet and pick a focus @recurring(quarterly)"
---

# Dairy Farming

Dairy Farming is for anyone milking cows as a business in the Caribbean or another hot climate, from the family with six crossbred cows and a bucket machine to the farm sending a tanker load to the processor every morning. The projects start with the basics: a herd register, the buyer's rules, a facilities walk, a cost per litre and a written milking procedure. Then come the daily and monthly routines that protect milk quality and cow health, the skills behind good milking and breeding, equipment and herd decisions, inspections, calving and storms, situations such as small herds, conversions and handovers, and specialist work on farm dairy products, direct sales and sire selection.

What repeats is the daily heat, heat detection and withdrawal checks, weekly machine, trough, tank and bunk checks, monthly milk recording, body condition, lameness, quality results and payment reconciliation, and quarterly vet visits and herd figures. The Operational checklist, Course, Purchase decision, Compliance control, Training program and Metrics log templates pair with the projects that name them. Medicines, treatments and withdrawal periods always come from your vet and the product label, never from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
