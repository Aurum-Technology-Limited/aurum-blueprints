---
id: agriculture.coffee-farming
name: Coffee Farming
description: "A coffee holding run as a business: varieties for your elevation, nurseries and shade, borer and rust scouting, picking, pulping and drying, cup quality and the origin rules your beans must meet."
category: business
version: 1.0.0
tags: [agriculture, coffee-farming, small-business, arabica, blue-mountain, specialty-coffee, wet-processing, cupping]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - risk-register
    - vendor
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Coffee Farming
          description: "Growing coffee in Caribbean highlands: varieties, shade and spacing, picking, pulping and drying, cup quality, and the rules for Blue Mountain and other origins."
          projects:
            - name: Block-by-block inventory of the coffee holding
              description: |-
                ## Purpose
                Most inherited or bought coffee land is a patchwork of old Typica, newer plantings, gaps and bush that nobody has mapped. Walking every block and counting trees, gaps and shade tells you what you actually own, where the next crop will come from and which blocks are costing more than they return.

                ## Milestones
                1. Every block named on a sketch map with its rough area, slope and elevation.
                2. Trees counted or estimated per block, with gaps and dead stumps noted.
                3. Each block labelled by age group and variety as far as can be known.
                4. A one-page summary ranking blocks as productive, tired or abandoned.

                ## Notes
                A phone with GPS and a free mapping app is enough. Count a sample row of 20 trees per block and multiply, rather than counting every tree on a steep slope.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A block map and summary exist showing area, elevation, tree count, age and condition for every block on the holding."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the boundary and main blocks of the farm on one sheet"
                - "Record the elevation of each block with a phone GPS app"
                - "Count trees and gaps along a 20-tree sample row in every block"
                - "Rank each block as productive, tired or abandoned"
            - name: Choosing coffee varieties for your elevation
              description: |-
                ## Purpose
                Variety decides the next twenty years of a block: Typica gives the classic mountain cup but is vulnerable to leaf rust, while tolerant lines yield more but may not suit a premium origin. Choosing on elevation, rainfall, disease pressure and what your buyer or regulator will accept avoids planting thousands of seedlings of the wrong tree.

                ## Milestones
                1. Elevation, rainfall pattern and rust history recorded for each block to be planted.
                2. Varieties permitted or preferred under your origin designation confirmed.
                3. A shortlist of two or three varieties compared on cup, yield, rust tolerance and stature.
                4. A written variety choice per block, with the seed or seedling source named.

                ## Notes
                Talk to the coffee authority or extension officer before buying seed. Some premium origins expect specific varieties, and seed from an unknown tree may not be true to type.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A variety is chosen for every block to be planted, with reasons and a confirmed seed or seedling source written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the blocks you plan to plant or replant in the next two years"
                - "Ask the extension officer which varieties do well at your elevation"
                - "Check which varieties your origin rules or main buyer accept"
                - "Compare the shortlist on cup, yield, rust tolerance and height"
                - "Record the chosen variety and seed source for each block"
            - name: Origin rules for Blue Mountain and other designations
              description: |-
                ## Purpose
                Protected coffee origins such as Jamaica Blue Mountain set rules on where the coffee is grown, who may process it and how it is marked, and coffee sold outside those rules can be refused or seized. Knowing exactly which rules apply to your land, and what paperwork every lot needs, protects the premium your mountain is worth.

                ## Milestones
                1. The designation, if any, that covers your land confirmed with the coffee regulator.
                2. The rules on growing area, licensed processing and labelling written in plain words.
                3. The documents each lot needs, from cherry receipt to export, listed.
                4. Any gap between current practice and the rules noted with a fix.

                ## Notes
                Rules and the bodies that enforce them differ by island. Read the current regulations or ask the regulator directly, and never rely on what a dealer says the rules are.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary of the origin rules that apply to your land, with the documents required per lot, checked against the regulator's current guidance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the coffee regulator for your country and its contact details"
                - "Ask whether your land falls inside a protected origin area"
                - "Write down the rules on processing, marking and selling that apply"
                - "List the documents each lot must carry from farm to buyer"
            - name: Grower registration with the coffee authority
              description: |-
                ## Purpose
                In many coffee-growing islands a grower must be registered, and some buyers, pulperies and support schemes will only deal with registered farms. Getting the registration, farm number and any licence in order now means the first harvest can be sold without a delay at the gate.

                ## Milestones
                1. The registration or licence requirements for growers confirmed.
                2. Land documents, ID and farm details gathered for the application.
                3. The registration submitted and a receipt or farm number received.
                4. The renewal date, if any, written in the farm calendar.

                ## Notes
                Keep a copy of the registration with your land lease or title. Lenders and grant schemes often ask for both together.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The farm holds a current grower registration or written confirmation that none is needed, with any renewal date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Call the coffee authority to ask what grower registration involves"
                - "Gather land documents, ID and the block map for the application"
                - "Submit the application and keep the receipt"
                - "Note the renewal date in the farm calendar"
            - name: Coffee nursery from seed to field-ready seedling
              description: |-
                ## Purpose
                Buying thousands of seedlings is expensive and supply can vanish in a good planting year, so many growers raise their own. A clean nursery, with seed from selected mother trees, sterile germination beds and bags under shade, delivers sturdy plants in about eight to twelve months, timed to go out with the rains.

                ## Milestones
                1. Seed collected from healthy, high-yielding mother trees or bought from a certified source.
                2. Germination beds set up under shade with clean sand or substrate.
                3. Seedlings moved to bags at the button or butterfly stage.
                4. Plants hardened off and counted against the planting plan.
                5. Planting dates set to match the start of the rainy season.

                ## Notes
                Nematodes and damping off travel in dirty soil. Use clean media, raise bags off the ground and keep the nursery away from old coffee.
              priority: high
              deadlineOffsetDays: 300
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The number of field-ready seedlings in the planting plan are hardened off in the nursery before the first planting rains."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Work out how many seedlings the planting plan needs, plus spares"
                - "Mark mother trees or order certified seed for the nursery"
                - "Build shaded germination beds with clean substrate"
                - "Transfer seedlings into bags and count them monthly"
            - name: Shade tree and spacing plan for a new block
              description: |-
                ## Purpose
                Spacing and shade decide yield, disease pressure and how easily pickers can work a slope for the life of the block. Planning tree spacing, rows on the contour and a shade canopy of legume trees, bananas or timber before the first hole is dug avoids a block that is crowded, dark and full of rust in year six.

                ## Milestones
                1. Spacing between rows and trees chosen for the variety and slope.
                2. Shade species and their spacing chosen, with temporary and permanent shade separated.
                3. Contour lines pegged on the ground for the planting rows.
                4. A planting layout drawn with the total number of coffee and shade trees.

                ## Notes
                Tall varieties need wider spacing than compact ones. Ask the extension officer what spacing local growers use for your variety before deciding.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A planting layout shows coffee and shade spacing, row direction and total plant numbers for the block, with contour rows pegged on site."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the extension officer what spacing suits your chosen variety"
                - "Choose permanent and temporary shade species for the block"
                - "Peg contour lines across the slope with an A-frame"
                - "Draw the layout and count coffee and shade plants needed"
            - name: Terracing and soil cover on steep coffee slopes
              description: |-
                ## Purpose
                Highland coffee is often grown on slopes that lose topsoil every heavy rain, taking fertility and young trees with it. Individual tree terraces, contour hedgerows and mulch hold the soil in place and keep water where the roots can use it.

                ## Milestones
                1. The steepest and most eroded blocks identified on the block map.
                2. Contour hedgerows or barriers planned along the slope.
                3. Individual terraces or half-moons built around young trees in the worst block.
                4. Mulch or cover crop in place on all bare ground between rows.

                ## Notes
                Never leave cleared coffee ground bare through the wet season. A rough grass strip on the contour stops more soil than a neat bare row.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The most eroded block has contour barriers and tree terraces in place, and no bare ground is left between rows going into the wet season."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Mark the most eroded blocks on the farm map after a heavy rain"
                - "Plan contour hedgerows across the worst slope"
                - "Build tree terraces around the youngest plants first"
                - "Spread mulch on bare ground between rows before the rains"
            - name: Coffee year calendar from flowering to last pick
              description: |-
                ## Purpose
                The coffee year is set by the rains: blossom follows the first heavy showers after dry weather, cherry ripens months later, and pruning, fertility and weeding must fit around picking. Writing your own farm's calendar from flowering to last pick lets you book labour, inputs and buyers before you need them.

                ## Milestones
                1. Typical flowering, ripening and harvest months recorded for each block.
                2. Pruning, weeding, fertility and borer control windows placed on the calendar.
                3. Labour peaks marked, especially the main picking months.
                4. The calendar shared with workers and the main buyer.

                ## Notes
                Higher blocks ripen later than lower ones, often by weeks. Keep a separate line for each elevation band.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page coffee calendar shows flowering, harvest, pruning, weeding and pest control windows for every elevation band on the farm."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down when each block flowered and was picked last year"
                - "Place pruning, weeding and fertility windows on a twelve-month sheet"
                - "Mark the picking months when extra labour is needed"
                - "Share the calendar with your workers and main buyer"
            - name: Cost of production per box of cherry
              description: |-
                ## Purpose
                Many growers sell for years without knowing whether a box of cherry, or a pound of green, costs them more to produce than the buyer pays. Adding up labour, inputs, transport and processing for a season gives a cost per unit you can compare with every price offer.

                ## Milestones
                1. All coffee costs for the last season gathered, including family labour at a fair rate.
                2. Total cherry or parchment produced in the same season recorded.
                3. A cost per box of cherry and per pound of green worked out.
                4. The figure compared with the prices received from each buyer.

                ## Notes
                Picking is usually the largest single cost. Separate it from field work so you can see what a poor ripe-cherry percentage really costs.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cost per box of cherry and per pound of green for the last season, compared against at least two buyer prices."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect last season's receipts, wage book and input bills"
                - "Add up total boxes of cherry and pounds of parchment sold"
                - "Ask the agent to build a cost per box and per pound table"
                - "Compare the cost with what each buyer paid"
                - "Update the cost per box after each season @recurring(yearly)"
            - name: Coffee berry borer monitoring with traps
              description: |-
                ## Purpose
                Berry borer tunnels into the bean and can quietly ruin a large share of a crop, and by the time damage is obvious at the pulpery it is too late. Weekly trap counts and a regular check of bored berries tell you when borer pressure is rising, so control is timed to the pest and not to habit.

                ## Milestones
                1. Traps placed in each block at the density the extension officer recommends.
                2. A weekly count sheet started with block, date and count.
                3. A sample of berries checked for bore holes each month.
                4. An action level agreed with the extension officer and written on the sheet.

                ## Notes
                Start from the **Metrics log** template. Collecting fallen and leftover berries after harvest removes the borer's home between seasons and is the cheapest control there is.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly trap counts are recorded for every block across a full season, with any action above the agreed level logged."
                cadence: rolling
              tasks:
                - "Ask the extension officer how many borer traps each block needs"
                - "Count and record borer catches in every trap @recurring(weekly:mon)"
                - "Check 100 green berries per block for bore holes @recurring(monthly:5)"
                - "Strip and bury leftover berries at the end of picking"
            - name: Coffee leaf rust scouting round
              description: |-
                ## Purpose
                Leaf rust strips trees of leaves and can take two crops with it, and the orange spores show long before the defoliation does. A monthly walk that scores rust on the same marked trees gives an early warning and an honest record of which blocks and varieties are most at risk.

                ## Milestones
                1. Ten marked trees per block chosen for monthly scoring.
                2. A simple rust score sheet in use, with leaves checked on each marked tree.
                3. Rust levels compared across blocks and varieties after three months.
                4. Control decisions taken with the extension officer, following the product label.

                ## Notes
                Rust rises after wet, warm spells and on overbearing, poorly fed trees. Shade, pruning and nutrition do as much as any spray.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly rust scores for marked trees in every block are recorded for twelve months, with any control decision noted with the advisor's name."
                cadence: rolling
              tasks:
                - "Tag ten scouting trees in each block with paint or ribbon"
                - "Score rust on leaves of every tagged tree @recurring(monthly:12)"
                - "Compare rust levels between varieties after three months"
                - "Call the extension officer if rust jumps between two rounds"
            - name: Picking round schedule for harvest season
              description: |-
                ## Purpose
                Cherry does not ripen all at once, and stripping a branch of green and ripe together lowers the cup and the price. Picking each block in rounds every ten to fourteen days, ripe cherry only, keeps quality up and spreads labour across the season.

                ## Milestones
                1. Blocks grouped into a picking rotation by elevation and ripening.
                2. A round schedule set so every block is visited every ten to fourteen days.
                3. Pickers briefed on ripe-only picking and paid in a way that rewards it.
                4. Boxes picked per block per round recorded for the season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During harvest every block is picked on a written rotation of no more than fourteen days, with boxes per round recorded."
                cadence: cyclic
              tasks:
                - "Group the blocks into a picking rotation by ripening order"
                - "Plan which blocks the pickers work this week @recurring(weekly:mon,thu)"
                - "Explain ripe-only picking to every picker on the first day"
                - "Record boxes picked per block after each round"
            - name: Coffee picker recruitment and pay system
              description: |-
                ## Purpose
                Picking labour is short in many coffee areas at the peak of harvest, and a picker paid only on weight has every reason to strip green cherry. A recruitment plan and a pay system that rewards ripe cherry, paid on time with a receipt, keeps good pickers coming back each season.

                ## Milestones
                1. Last season's picker numbers and gaps written down.
                2. A pay rate per box agreed, with a bonus or deduction for ripeness.
                3. Pickers recruited early from returning workers and local contacts.
                4. Every picker paid on a fixed day with a written record.

                ## Notes
                Check your country's minimum wage and statutory contribution rules for seasonal workers with the labour office.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written picker pay system with a ripeness rule is in use, and every picker has a dated pay record for the season."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count how many pickers were short at last season's peak"
                - "Set a box rate with a ripeness bonus"
                - "Contact last season's best pickers before harvest"
                - "Pay pickers on a fixed day with a written slip"
            - name: Cherry receipt and weighing log
              description: |-
                ## Purpose
                Whether you pay pickers by the box or sell cherry to a pulpery, disputes come down to what was weighed or counted, when and by whom. A receipt book and a weekly reconciliation stop money leaking and give the traceability record buyers and regulators expect.

                ## Milestones
                1. A numbered receipt book or digital log in use for every delivery.
                2. Each entry showing date, block, picker or seller, quantity and ripeness note.
                3. A weekly total reconciled against the pulpery or buyer's own slips.
                4. Any difference above an agreed margin raised the same week.

                ## Notes
                Give the picker or seller a copy every time. A receipt that only one side holds is not a record anyone trusts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every cherry delivery in the season has a numbered receipt, and weekly totals agree with the buyer's records within the agreed margin."
                cadence: cyclic
              tasks:
                - "Buy a duplicate receipt book or set up a simple cherry log"
                - "Record every box delivered with block, picker and ripeness"
                - "Reconcile the week's receipts against buyer slips @recurring(weekly:sat)"
                - "Raise any difference with the pulpery the same week"
            - name: Pulper and fermentation tank hygiene routine
              description: |-
                ## Purpose
                Pulp left in a pulper or tank overnight sours and taints the next batch with ferment and stinker beans that a cupper will catch at once. A fixed cleaning routine for the pulper, channels and tanks after every run costs an hour and protects the price of the whole lot.

                ## Milestones
                1. A written cleaning checklist for the pulper, channels, tanks and washing area.
                2. Clean water supply and drainage confirmed for the wash.
                3. The checklist signed off after every processing day in season.
                4. Pulper gaps checked so beans are not nipped or crushed.

                ## Notes
                Keep it to one laminated page by the pulper. Nipped beans from a badly set pulper are a defect you create yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed cleaning checklist exists for every processing day of the season, and pulper settings are checked at least weekly."
                cadence: cyclic
              tasks:
                - "Write a one-page cleaning checklist for the pulpery"
                - "Scrub tanks and channels after each processing day"
                - "Check pulper gaps for nipped beans @recurring(weekly:fri)"
                - "Fix any standing water or blocked drains around the tanks"
            - name: Parchment drying and moisture checks
              description: |-
                ## Purpose
                Parchment dried too fast cracks, dried too slow moulds, and parchment stored wet loses its cup within weeks. Even layers, regular turning, cover from rain and a moisture check before bagging bring every lot down to the moisture range buyers ask for.

                ## Milestones
                1. Drying beds, patios or tables cleaned and covers ready before harvest.
                2. Layer depth and turning times agreed with whoever runs the drying.
                3. Every lot checked with a moisture meter before bagging.
                4. Drying start date, end date and final moisture logged per lot.

                ## Notes
                Most buyers want parchment at roughly 10 to 12 percent moisture. Confirm the exact range with yours and check the meter against theirs once a season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lot in the season has a logged drying period and a final moisture reading within the buyer's range before bagging."
                cadence: cyclic
              tasks:
                - "Clean the drying area and check covers before the first pick"
                - "Agree layer depth and turning times with the drying team"
                - "Read moisture on each lot on the drying beds @recurring(weekly:tue)"
                - "Log final moisture for every lot before it is bagged"
            - name: Weeding and mulching rounds under coffee
              description: |-
                ## Purpose
                Weeds compete hard with young coffee for water and nutrients, and vines climbing into the canopy shade out bearing wood. Regular slashing between rows, a clean ring around each tree and mulch on top keeps competition down without leaving the slope bare.

                ## Milestones
                1. A weeding rotation set for every block, youngest first.
                2. A clean ring kept around each tree and slashed cover between rows.
                3. Mulch from prunings and shade loppings spread around trees.
                4. Vines and climbers cleared from all bearing trees.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every block is weeded on a written rotation for a full year, with young blocks never left more than one round without a clean tree ring."
                cadence: rolling
              tasks:
                - "Rank blocks for weeding with the youngest plantings first"
                - "Slash between rows and clear tree rings in the next block @recurring(monthly:20)"
                - "Spread pruning waste as mulch around young trees"
                - "Pull vines out of bearing trees before flowering"
            - name: Coffee fertility plan from leaf and soil tests
              description: |-
                ## Purpose
                Heavy crops on acid mountain soils run coffee down fast without feeding, but guesswork wastes money and can burn roots. A yearly plan based on soil and leaf tests, written with the extension officer and timed to the rains, feeds the trees what they actually lack.

                ## Milestones
                1. Soil samples taken from each block and sent to a lab.
                2. Leaf samples taken at the time the lab or advisor recommends.
                3. A written fertility plan for each block agreed with the extension officer.
                4. Applications timed to the rains and recorded with product and date.

                ## Notes
                This blueprint gives no rates. Use the lab report, the product label and your advisor for amounts, and record exactly what went on each block.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written fertility plan per block based on current soil and leaf results, with every application logged by date and product."
                cadence: cyclic
              tasks:
                - "Ask the lab or extension officer how to sample coffee soil and leaves"
                - "Take soil samples from every block for testing @recurring(yearly)"
                - "Agree the fertility plan for each block with the advisor"
                - "Record each application by block, product and date"
            - name: Rainfall and flowering record
              description: |-
                ## Purpose
                Blossom showers set the timing of the whole crop, and a dry spell at the wrong time costs flowers and later beans. Recording rainfall and the dates and strength of each flowering gives you a crop forecast months ahead and a record to show insurers and buyers.

                ## Milestones
                1. A rain gauge installed in an open spot near the coffee.
                2. Daily or event rainfall written in a single log.
                3. Each flowering dated and scored as light, medium or heavy by block.
                4. An expected harvest window worked out from the main flowering.

                ## Notes
                Start from the **Metrics log** template. Cherry usually ripens many months after the main blossom; your own records will tell you the gap at your elevation.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Rainfall and flowering dates are logged for a full year, and the harvest window forecast from the main flowering is written down."
                cadence: rolling
              tasks:
                - "Install a rain gauge in an open spot near the main block"
                - "Write each flowering date and strength in the log by block"
                - "Total the month's rainfall and flowering notes @recurring(monthly:28)"
                - "Estimate the harvest window from the main flowering date"
            - name: Parchment and green coffee store checks
              description: |-
                ## Purpose
                Stored coffee picks up moisture, smells and pests from everything around it, and a lot that cupped well in January can taste of the store by June. A clean, dry, raised store and a monthly check of bags, moisture and smell protect what took a year to grow.

                ## Milestones
                1. The store cleared of fuel, chemicals, feed and anything with a smell.
                2. Bags stacked on pallets away from walls with space to walk around.
                3. Each lot labelled with lot code, weight and date.
                4. A monthly check of moisture, smell, pests and roof leaks recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All stored coffee is on pallets, labelled by lot, and checked monthly with results recorded until it leaves the farm."
                cadence: rolling
              tasks:
                - "Move fuel, chemicals and feed out of the coffee store"
                - "Stack every bag on pallets clear of the walls"
                - "Check stored lots for moisture, smell and pests @recurring(monthly:8)"
                - "Patch roof leaks before the wet season"
            - name: Coffee season review after the last pick
              description: |-
                ## Purpose
                Once the last cherry is in, memory of what went wrong fades fast and next season gets planned on habit. A review that sets yield, quality, costs and problems for each block beside last year's turns one season's lessons into next season's plan.

                ## Milestones
                1. Yield per block and total sales gathered for the season.
                2. Grading and cupping results set beside each block.
                3. Three problems and three things that worked written down.
                4. Changes for next season added to the coffee calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written season review per block with yield, quality and cost figures, and at least three changes added to next season's calendar."
                cadence: cyclic
              tasks:
                - "Total yield and sales per block for the season"
                - "Set grading and cup scores beside each block"
                - "Hold a season review with workers after the last pick @recurring(yearly)"
                - "Add next season's changes to the coffee calendar"
            - name: Learning selective picking of ripe cherry
              description: |-
                ## Purpose
                Picking quality is the single biggest lever a grower has on cup score, and it is a skill, not an instinct. Learning to judge ripeness by colour and feel, and teaching it to pickers with sample boards and spot checks, raises the ripe share of every box.

                ## Milestones
                1. A sample board showing green, under-ripe, ripe and over-ripe cherry made up.
                2. Ripeness checks done by counting a handful from random boxes.
                3. A target ripe share agreed with pickers and the buyer.
                4. Picker results shared and the best pickers recognised.

                ## Notes
                A float test in a bucket of water separates many floaters and defects. Remove them before pulping and record how many you take out.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Spot checks show the ripe share in delivered boxes rising over one season against the starting count, with results recorded per picker."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Make a ripeness sample board from one branch of mixed cherry"
                - "Count ripe cherry in a handful from five random boxes"
                - "Agree a ripe-share target with the pickers"
                - "Float each day's cherry and record the floaters removed"
            - name: Pruning and stumping for renewal
              description: |-
                ## Purpose
                Coffee bears on new wood, so an unpruned tree turns into a tall, bare stick that crops every other year and is hard to pick. Learning to prune, and to stump old trees in a rotation so part of the farm is always renewing, keeps yield steady and trees at picking height.

                ## Milestones
                1. The main pruning systems for your variety understood, with one chosen.
                2. A demonstration attended or a skilled pruner watched on your own trees.
                3. A practice row pruned and checked by an experienced grower.
                4. A stumping rotation set so a share of trees is renewed each year.

                ## Notes
                Prune right after harvest, before flowering. Clean, angled cuts heal faster; seal large cuts if your advisor recommends it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice row has been pruned to a chosen system and approved by an experienced grower, and a written stumping rotation covers every block."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the extension office about the next pruning demonstration"
                - "Prune one practice row and ask an experienced grower to check it"
                - "Write a stumping rotation that renews part of each block"
                - "Review the pruning plan after the last pick @recurring(yearly)"
            - name: Wet processing with pulping, fermentation and washing
              description: |-
                ## Purpose
                Washed coffee lives or dies in the twenty-four hours after picking: delays before pulping, uneven fermentation and poor washing all show in the cup. Understanding each step, and how to tell when fermentation is done, gives you control over a stage many growers leave to luck.

                ## Milestones
                1. The steps from receiving cherry to drying parchment written for your pulpery.
                2. Cherry pulped the same day it is picked.
                3. Fermentation endpoint judged by feel and timed for each lot.
                4. Washing and grading channels used to separate floaters and light beans.

                ## Notes
                Fermentation time depends on temperature and elevation. Record start and finish for every lot and the cup will soon tell you which timing works.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written processing procedure is in use, and fermentation start and end times are logged for every lot of one season."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the steps from cherry receipt to drying on one page"
                - "Learn the hand test for finished fermentation from an experienced processor"
                - "Log fermentation start and finish times for each lot"
                - "Use the washing channel to remove floaters and light beans"
            - name: Learning to cup your own coffee
              description: |-
                ## Purpose
                Buyers grade your coffee by cupping it, and a grower who cannot taste their own lots is negotiating blind. Learning the basic cupping protocol and tasting your lots alongside known references lets you spot defects, compare blocks and talk to buyers in their language.

                ## Milestones
                1. The standard cupping steps learned from a course, cupper or published protocol.
                2. A basic kit gathered: scale, grinder, cups, spoons and a kettle.
                3. Lots from different blocks cupped side by side with notes.
                4. Your scores compared with a professional cupper's on the same samples.

                ## Notes
                Start from the **Metrics log** template to keep scores by lot. Ask a roaster or the coffee authority if you can join one of their cupping sessions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Monthly cupping notes exist for at least six sessions, and at least one set of your scores has been compared with a professional cupper's."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find a published cupping protocol and read it through"
                - "Gather a scale, grinder, cups and spoons for a home table"
                - "Cup samples from different blocks side by side @recurring(monthly:15)"
                - "Ask a roaster to cup the same samples and compare scores"
            - name: Reading a green coffee grading report
              description: |-
                ## Purpose
                When a buyer or the coffee authority grades your lot, the report lists screen sizes, defect counts and cup notes that decide the price. Knowing how to read it, and which defects come from the field, the pulpery or the store, turns a rejection into a list of fixes.

                ## Milestones
                1. The main green defects and their usual causes listed.
                2. Screen sizes and grade names used by your buyer understood.
                3. Your last grading report annotated line by line.
                4. Three fixes chosen for next season from the report.

                ## Notes
                Black, sour and insect-damaged beans usually start in the field and pulpery, not in the roaster. Trace each defect back before you blame the buyer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your latest grading report is annotated with the cause of each listed defect and three fixes are written into next season's plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your buyer for the full grading report on your last lot"
                - "List each defect with its likely cause on the farm"
                - "Ask the grader to explain the grade and screen size terms"
                - "Write three fixes for next season from the report"
            - name: Coffee pest and disease field guide for the farm
              description: |-
                ## Purpose
                Workers who can tell borer from rust, brown eye spot from American leaf spot and root mealybug from drought stress catch problems weeks earlier. A short illustrated guide made from your own farm's photos is more useful than any textbook kept in the house.

                ## Milestones
                1. Photos of the main pests and diseases collected from your own blocks.
                2. Each one identified and confirmed with the extension officer.
                3. A one or two page guide made with photo, name and first action.
                4. Every worker walked through the guide in the field.

                ## Notes
                Never act on an identification alone for a chemical control. The guide's first action should be to record and call the advisor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A farm pest and disease guide built from your own photos is printed, confirmed by the extension officer and shown to every worker."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Photograph every pest, spot and wilt you find in one walk"
                - "Ask the extension officer to confirm each identification"
                - "Lay out the guide with photo, name and first action"
                - "Walk the guide through the field with every worker"
            - name: Small-batch roasting for farm-gate sales
              description: |-
                ## Purpose
                Selling some of your own coffee roasted, to visitors, family and local shops, earns far more per pound than green, but a badly roasted bag hurts your name. Learning to roast consistently in small batches, with notes on time and colour, gives you a product you can stand behind.

                ## Milestones
                1. A small roaster bought, borrowed or rented time on.
                2. Test batches roasted with time, temperature and colour noted.
                3. A roast profile chosen that suits your coffee and is repeatable.
                4. Any food business or labelling rules for selling roasted coffee checked.

                ## Notes
                Roasting for sale is food production. Check what your local health authority needs before the first bag leaves the farm.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written roast profile repeats within a minute of total roast time across three batches, and the food rules for selling roasted coffee are confirmed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Find a roaster to borrow or rent time on locally"
                - "Roast five test batches and record time and colour"
                - "Cup the batches and choose one profile to repeat"
                - "Call the health authority about rules for selling roasted coffee"
            - name: Rehabilitating an old or abandoned coffee block
              description: |-
                ## Purpose
                Old blocks of tall, unpruned trees under overgrown shade often still have good roots and the right genetics, and bringing them back is usually cheaper and faster than replanting. Clearing, stumping, gap filling and new shade management can return a block to crop in about two years.

                ## Milestones
                1. The block assessed and a decision made between rehabilitating and replanting.
                2. Bush cleared and overgrown shade thinned.
                3. Healthy trees stumped and dead ones marked for replacement.
                4. Gaps filled with seedlings of the chosen variety.
                5. New shoots selected and the block back in the normal weeding and scouting rounds.

                ## Notes
                Stumping takes a crop away for a season or two. Rehabilitate one block at a time so cash flow keeps coming from the rest.
              priority: high
              deadlineOffsetDays: 540
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One old block is cleared, stumped, gap-filled and producing new bearing shoots, with costs recorded against its first crop."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Walk the old block and count healthy, weak and dead trees"
                - "Decide with the extension officer whether to rehabilitate or replant"
                - "Clear the bush and thin the overgrown shade trees"
                - "Stump healthy trees and order seedlings for the gaps"
            - name: Replanting with rust-tolerant varieties
              description: |-
                ## Purpose
                After a bad rust year many growers face a hard choice between staying with a classic variety that cups well but suffers, and moving to tolerant lines that are safer but may earn less. Weighing yield, cup, buyer acceptance and origin rules on paper first keeps the decision from being made in a panic.

                ## Milestones
                1. Rust losses for the last two or three seasons estimated per block.
                2. Tolerant varieties allowed under your origin rules listed.
                3. Buyers asked how they would grade and price each option.
                4. A decision recorded per block: keep, replace or split.

                ## Notes
                Tolerance can break down as rust strains change. Ask the coffee authority which lines are holding up locally now.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written keep, replace or split decision exists for every rust-affected block, with buyer feedback and origin rules noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate rust losses per block from the last three harvests"
                - "List tolerant varieties allowed under your origin rules"
                - "Ask two buyers how they would price coffee from each option"
                - "Record the decision for each affected block"
            - name: Own pulpery or selling cherry
              description: |-
                ## Purpose
                Selling fresh cherry is simple and paid quickly, while processing to parchment yourself adds value but needs a licence in some origins, water, equipment and labour at the busiest time. Comparing the two on real numbers, not hope, decides one of the biggest investments a coffee farm makes.

                ## Milestones
                1. Current cherry prices compared with parchment or green prices for the same coffee.
                2. Costs of pulper, tanks, drying, water and labour estimated.
                3. Licensing and wastewater rules for processing checked.
                4. A decision recorded with the break-even volume.

                ## Notes
                Some designated origins only allow processing at licensed works. Check this before pricing any equipment.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to sell cherry or process on farm, with the break-even volume and licensing position recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get current cherry and parchment prices from two buyers"
                - "Price a pulper, tanks and drying space for your volume"
                - "Ask the regulator whether on-farm processing needs a licence"
                - "Work out the break-even volume and record the decision"
            - name: Drying upgrade to raised beds or a solar dryer
              description: |-
                ## Purpose
                Mountain farms often lose drying days to cloud and afternoon rain, and coffee left damp on a patio is coffee losing value. Comparing raised African beds, a covered solar dryer and a small mechanical dryer against your volume and weather finds the cheapest way to dry on time.

                ## Milestones
                1. Drying days lost to rain last season estimated.
                2. Three drying options priced for your peak daily volume.
                3. Running costs and power or fuel needs compared.
                4. An option chosen, with a build or purchase date set before harvest.

                ## Notes
                Start from the **Purchase decision** template. Raised mesh beds under a clear cover are often the best value for small lots.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A drying option is chosen on a written comparison of cost, capacity and weather risk, and is built or bought before the next harvest."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the drying days lost to rain last harvest"
                - "Price raised beds, a solar dryer and a mechanical dryer"
                - "Compare capacity against your busiest picking day"
                - "Choose an option and set a build date before harvest"
            - name: Natural and honey process trial lots
              description: |-
                ## Purpose
                Naturals and honeys, dried with the fruit or mucilage left on, can lift a cup and open doors with specialty roasters, but they fail badly in wet weather. A small, controlled trial beside your washed coffee shows whether your climate and buyers can support them before you risk a whole pick.

                ## Milestones
                1. Origin rules checked to confirm the process is allowed for your coffee.
                2. Two small trial lots processed beside a washed control lot.
                3. Drying time, weather and handling recorded for each lot.
                4. All three lots cupped blind and shown to a roaster.

                ## Notes
                Some protected origins specify washed processing only. Check before selling a trial lot under the origin name.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two trial lots and a washed control are processed, cupped blind and reviewed by a roaster, with a written go or no-go for next season."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Check whether your origin rules allow natural or honey coffee"
                - "Set aside cherry from one pick for two small trial lots"
                - "Record drying days and weather for each trial lot"
                - "Cup the trials blind beside the washed control"
            - name: Choosing who to sell your coffee to
              description: |-
                ## Purpose
                The same bag of coffee can earn very different money depending on whether it goes to a licensed dealer, a coffee board, a local roaster or straight to an overseas buyer. Comparing price, payment speed, quality demands and paperwork for each route lets you pick a main channel and a back-up.

                ## Milestones
                1. Every legal selling route for your coffee and origin listed.
                2. Price, payment terms and quality demands collected for each.
                3. Paperwork and licences needed for each route noted.
                4. A main buyer and a back-up chosen and the reasons recorded.

                ## Notes
                Start from the **Vendor** template for each buyer. A buyer who pays fast and fairly is worth more than one who quotes high and pays late.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main and back-up buyer are chosen from a written comparison of at least three routes, with payment terms recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the licensed buyers and routes open to your coffee"
                - "Ask each buyer for price, grade rules and payment terms"
                - "Note the paperwork each route needs"
                - "Review buyer performance after the last delivery @recurring(yearly)"
            - name: Coffee buyer contracts and price terms
              description: |-
                ## Purpose
                Coffee prices swing with the world market and the dollar, and a handshake price agreed in the blossom season can look very different at delivery. A written agreement on price basis, grade, volume, delivery and payment protects both you and the buyer when the market moves.

                ## Milestones
                1. The terms you need written as a checklist: price basis, grade, volume, delivery, payment.
                2. The buyer's proposed contract compared against the checklist.
                3. Changes agreed and the final contract signed.
                4. Deliveries and payments tracked against the contract.

                ## Notes
                This is organisation, not legal advice. Have a lawyer read any large or multi-year contract before you sign.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The season's main sale is covered by a signed contract that states price basis, grade, volume, delivery and payment date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a checklist of the terms every coffee contract needs"
                - "Compare the buyer's draft against the checklist"
                - "Agree changes and sign the final contract"
                - "Track deliveries and payments against it"
            - name: Pulpery wastewater and pulp management
              description: |-
                ## Purpose
                Pulping water and rotting pulp are strong pollutants that kill fish and foul drinking water downhill, and regulators and certifiers check for them. Settling pits, soak-aways and composting the pulp keep you legal, keep neighbours on side and turn waste into mulch for the coffee.

                ## Milestones
                1. Every point where processing water leaves the pulpery mapped.
                2. Local rules on agricultural wastewater checked with the environment agency.
                3. Settling pits or soak-aways built well away from streams.
                4. Pulp composted and returned to the field as mulch.

                ## Notes
                Never run pulping water straight into a river or gully. Ask the environment agency or extension officer what pit size suits your volume.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No processing water reaches a watercourse, settling pits are in use and pulp is composted, confirmed by a walk-round before harvest."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Walk the pulpery and mark where wastewater runs to"
                - "Ask the environment agency what the rules require"
                - "Dig settling pits well away from any stream"
                - "Turn the pulp heap into compost for the coffee"
            - name: Pre-harvest readiness check
              description: |-
                ## Purpose
                The first ripe cherry waits for no one, and a broken pulper, missing boxes or no pickers lined up in that week costs quality and money. A readiness check a few weeks before the first pick makes sure labour, equipment, drying space, receipts and buyer arrangements are all in place.

                ## Milestones
                1. Pickers booked for the first rounds with rates agreed.
                2. Pulper, tanks, drying beds and moisture meter tested.
                3. Boxes, bags, receipt books and lot labels in stock.
                4. Buyer contacted with expected volume and first delivery date.

                ## Notes
                Keep the same list from year to year and add each new problem to it, so the check gets better every season.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two weeks before the first expected pick, labour, equipment, supplies and buyer arrangements are all confirmed on a written checklist."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the readiness checklist from last season's problems"
                - "Test run the pulper and check the moisture meter"
                - "Book pickers for the first two rounds"
                - "Tell the buyer your expected volume and first delivery date"
            - name: Entering a coffee quality competition
              description: |-
                ## Purpose
                National and regional cupping competitions put a small lot in front of judges and buyers who would never visit the farm, and a good score can set your price for years. Preparing a carefully picked, processed and stored competition lot is also the best training in quality there is.

                ## Milestones
                1. Competition rules, deadlines and sample sizes confirmed.
                2. A block chosen and picked separately for the competition lot.
                3. The lot processed, dried and rested with full records.
                4. Samples submitted on time and results recorded.

                ## Notes
                Pick only fully ripe cherry and keep the lot separate from start to finish. Judges find any mix.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A separately processed competition lot is submitted before the deadline, with its score and feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Find a coffee competition open to your origin and read the rules"
                - "Choose the block with the best cup for a separate lot"
                - "Process and dry the competition lot apart from the rest"
                - "Submit samples before the deadline and log the result"
            - name: First micro-lot sale to a specialty roaster
              description: |-
                ## Purpose
                Specialty roasters pay well above the commodity price for small, traceable lots with a story and a cup score to match, but they expect samples, records and reliability. Landing the first one turns quality work in the field into a buyer who may return every year.

                ## Milestones
                1. A lot of known size, block and process with full records ready.
                2. Pre-shipment samples sent to three roasters with a short farm profile.
                3. A price, volume and delivery agreed in writing with one roaster.
                4. The lot delivered or shipped legally and payment received.

                ## Notes
                Export of green coffee may need a licence or must go through a licensed exporter in your country. Check before promising delivery.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "One micro-lot is sold to a specialty roaster at an agreed written price and the payment has been received."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Choose one lot with full block and processing records"
                - "Ask the agent to draft a one-page farm and lot profile"
                - "Send samples and the profile to three specialty roasters"
                - "Agree price, volume and delivery in writing with one buyer"
            - name: Hurricane preparation for coffee trees and stores
              description: |-
                ## Purpose
                A hurricane can strip coffee and shade trees, block roads for weeks and soak a store full of parchment, all at the height of the season. Preparing the pulpery, stores and records before each season, and knowing your recovery steps, shortens the time from storm to selling again.

                ## Milestones
                1. Risks to trees, pulpery, store, roads and records listed.
                2. Stored coffee moved or raised and covered before a storm warning.
                3. Equipment, roofs and drying covers secured.
                4. Photos of blocks and stores taken before the season for claims.
                5. A recovery list ready for clearing roads, pruning damaged trees and drying wet coffee.

                ## Notes
                Start from the **Risk register** template. Wind-snapped coffee often recovers with cleaning cuts; ask the extension officer before stumping a whole block after a storm.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Before each hurricane season the farm has a written storm plan, dated photos of blocks and stores, and a recovery list."
                cadence: cyclic
              tasks:
                - "List storm risks to trees, pulpery, store and access road"
                - "Photograph every block and the store before the season @recurring(yearly)"
                - "Secure roofs, drying covers and loose equipment"
                - "Write the recovery steps for the first week after a storm"
            - name: Hosting a buyer or roaster farm visit
              description: |-
                ## Purpose
                Buyers who visit the farm, see the blocks and cup with you tend to buy again and pay more for what they have seen. A well planned visit, with a clear route, clean pulpery, cupping table and records ready, makes one afternoon count for years of trade.

                ## Milestones
                1. A visit date agreed with the buyer and access confirmed.
                2. A route planned through the best blocks, pulpery and store.
                3. Lot samples roasted and a cupping table set up.
                4. Follow-up notes and any agreed next steps sent within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A buyer visit is held with a planned route and cupping, and written follow-up is sent within seven days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a date and check the road is passable for visitors"
                - "Plan a route through blocks, pulpery and store"
                - "Roast samples of the lots on offer for a cupping"
                - "Send a thank you note and agreed next steps after the visit"
            - name: Taking over a family coffee holding
              description: |-
                ## Purpose
                Many coffee farms pass from parents to children who grew up picking but never ran the business, and the knowledge in the older generation's head is the most valuable asset on the land. Recording that knowledge and sorting out land, buyers and workers in the first year keeps the farm from slipping while you learn.

                ## Milestones
                1. The older grower interviewed about blocks, varieties, buyers and problems.
                2. Land, registration and buyer agreements checked and moved into your name where needed.
                3. Workers met and their roles and pay confirmed.
                4. A first-year plan written that changes little until you have seen a full season.

                ## Notes
                Family land often has unclear title. Get legal help early if the land is to be used as security or shared between siblings.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written record of the previous grower's knowledge, a checked set of land and buyer documents and a first-year plan exist."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Sit with the older grower and record what they know about each block"
                - "Gather the land papers, registration and buyer contacts"
                - "Meet every worker and confirm their role and pay"
                - "Write a cautious plan for your first full season"
            - name: Starting coffee on leased hillside land
              description: |-
                ## Purpose
                A newcomer leasing land for coffee is betting on a crop that takes three or four years to pay, so the lease, the land and the money all have to last that long. Checking elevation, access, water and lease length, and planning cash for the years before the first crop, avoids planting a farm you cannot keep.

                ## Milestones
                1. The site checked for elevation, aspect, access, water and soil.
                2. A lease long enough to cover establishment and many crops agreed in writing.
                3. A budget covering the years before the first full crop.
                4. The first block planted with seedlings of the chosen variety.

                ## Notes
                A lease shorter than the time to a full crop is rarely worth planting coffee on. Ask a lawyer to read it before signing.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written lease covers at least the establishment years, a pre-crop budget exists and the first block is planted."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Check the site's elevation, road access and water source"
                - "Ask a lawyer to review the lease before signing"
                - "Budget for every year until the first full crop"
                - "Plant the first block once the rains are steady"
            - name: Joining a coffee cooperative or growers group
              description: |-
                ## Purpose
                A smallholder with a few hundred trees rarely has the volume to process, certify or export alone, and a cooperative or growers group can provide pulpery access, inputs, training and better buyers. Checking how a group is run, and taking part once you join, decides whether it helps or just takes a cut.

                ## Milestones
                1. Groups near you listed with their services and membership terms.
                2. Accounts and rules of the preferred group read, and two members asked about it.
                3. Membership taken up and your cherry delivery arrangement confirmed.
                4. Group meetings attended and your questions raised.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A decision to join or not join a named group is recorded, and if joined, at least four group meetings are attended in the first year."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List coffee cooperatives and growers groups within reach"
                - "Ask two current members how payments and prices really work"
                - "Read the group's rules and latest accounts"
                - "Attend the group meeting and raise your questions @recurring(monthly:3)"
            - name: Coffee farm tours and tastings
              description: |-
                ## Purpose
                Visitors to coffee country, from cruise passengers to local weekenders, will pay to walk the blocks, see the pulpery and taste the cup, and they buy roasted bags on the way out. A safe, simple tour adds income in the months between harvests and builds a name for your coffee.

                ## Milestones
                1. A tour route chosen that is safe on steep ground and in wet weather.
                2. Insurance and any permits for visitors checked.
                3. A tour script, price and booking method set.
                4. The first paid tour run and visitor feedback collected.

                ## Notes
                Public liability cover matters more than signage on a steep farm. Check with an insurer before the first group arrives.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A priced tour with a safe route, insurance in place and a booking method has run at least once with feedback recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Walk a possible tour route and note any safety risks"
                - "Ask an insurer about cover for visitors on the farm"
                - "Write a 45-minute tour script and set a price"
                - "Run a trial tour for friends and collect their feedback"
            - name: Lot coding and traceability from block to bag
              description: |-
                ## Purpose
                Specialty buyers, certifiers and origin regulators increasingly want to know which block, which pick and which process each bag came from. A lot code that follows the coffee from cherry receipt through drying, storage and sale makes that answer quick and lets you trace any defect back to its source.

                ## Milestones
                1. A lot code format chosen covering block, pick date and process.
                2. Codes written on receipts, drying records, bags and sale invoices.
                3. One lot traced from invoice back to block in under ten minutes.
                4. The traceability record shared with a buyer who asks for it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every lot in a season carries one code from receipt to invoice, and a test trace from bag to block takes under ten minutes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a lot code made of block, pick date and process"
                - "Add the code to receipts, drying logs and bag labels"
                - "Trace one sold lot back to its block as a test"
                - "Fix any step where the code was lost"
            - name: Coffee certification options compared
              description: |-
                ## Purpose
                Organic, Rainforest Alliance, Fairtrade and similar schemes can open buyers and premiums, but each brings annual audits, record keeping and fees that may outweigh the gain for a small farm. Comparing them against what your buyers actually ask for prevents paying for a label nobody needs.

                ## Milestones
                1. Buyers asked which certifications they require or reward.
                2. Two or three schemes compared on requirements, audit cost and premium.
                3. Gaps between current practice and the chosen scheme listed.
                4. A decision recorded to certify, join a group certificate or wait.

                ## Notes
                Group certification through a cooperative often costs a fraction of certifying a farm alone.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two schemes with costs and premiums leads to a recorded certify, group or wait decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your buyers which certifications they pay more for"
                - "Ask the agent to compare two schemes on rules and costs"
                - "List the changes the farm would need for the best fit"
                - "Record the decision and the date to review it"
            - name: Variety trial plot for new cultivars
              description: |-
                ## Purpose
                New coffee cultivars promise rust tolerance, compact growth or better cups, but the only proof that counts is how they behave on your own slope. A small, labelled trial plot beside your main variety, scored over several seasons, gives you evidence before you replant a block.

                ## Milestones
                1. Two to four cultivars sourced through the coffee authority or research station.
                2. A trial plot planted with labelled rows beside the current variety.
                3. Growth, rust, yield and cup recorded every season.
                4. A summary after the third crop recommending which, if any, to scale.

                ## Notes
                Bring in planting material only through approved channels. Seed carried in from abroad can bring pests and break import rules.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A labelled trial plot has records of growth, rust, yield and cup for each cultivar across three seasons, ending in a written recommendation."
                cadence: cyclic
              tasks:
                - "Ask the coffee research station which cultivars are available to trial"
                - "Plant labelled trial rows beside the current variety"
                - "Score growth and rust on each trial row @recurring(quarterly)"
                - "Cup each cultivar separately after harvest"
            - name: Single-estate brand for your own coffee
              description: |-
                ## Purpose
                Growers with a strong cup and a good story can build a name of their own rather than disappearing into a dealer's blend. A single-estate brand, with origin rules respected, a clear label and a small set of loyal buyers, captures more of the value the mountain creates.

                ## Milestones
                1. Origin and labelling rules for using the estate and origin names confirmed.
                2. A brand name, label and farm story drafted and checked for conflicts.
                3. A small first run roasted or packed and priced.
                4. Three regular outlets or buyers selling the brand.

                ## Notes
                Protected origin names usually need the regulator's approval on the label. Get it before printing anything.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved estate label is on sale through at least three regular outlets or buyers."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the regulator what a label using the origin name needs"
                - "Draft the brand name, label and farm story"
                - "Price a first run of roasted or green bags"
                - "Approach five shops or buyers with samples"
            - name: Planning for a warmer climate on the mountain
              description: |-
                ## Purpose
                Rising temperatures and less reliable rain are pushing good coffee land upslope and making blossom timing harder to predict. A long-term plan that looks at your own records, shade, water and variety choices gives the farm a better chance of cropping well in twenty years.

                ## Milestones
                1. Ten years of your own rainfall, flowering and yield records gathered where they exist.
                2. Regional climate projections for your elevation read with an advisor.
                3. Blocks most at risk from heat or drought identified.
                4. A written plan for shade, water storage and variety shifts over the next decade.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written ten-year climate plan names the blocks at most risk and the shade, water and variety changes planned for each."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Gather every year of rainfall, flowering and yield records you have"
                - "Ask the extension office for climate projections for your area"
                - "Mark the blocks most exposed to heat and drought"
                - "Write the shade, water and variety changes for each block"
---

# Coffee Farming

Coffee in the Caribbean highlands is a long game: a tree planted this year gives its first real crop in three or four, and the price you get depends as much on picking and drying as on the mountain it grows on. These projects start with the foundations (a block inventory, varieties for your elevation, origin rules, a nursery and a shade plan), then the operating routines for borer, rust, picking, pulping and drying, the skills of pruning and cupping, the big decisions about processing and selling, and finally the specialist work of micro-lots, certification and your own export.

Most of the rhythm follows the coffee year: weekly borer trap counts and picking rounds in season, monthly rust scouting, weeding and store checks, a monthly cupping session, and yearly pruning, fertility and cost reviews. The Purchase decision, Metrics log, Risk register and Vendor templates pair with the dryer, cupping, hurricane and buyer projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
