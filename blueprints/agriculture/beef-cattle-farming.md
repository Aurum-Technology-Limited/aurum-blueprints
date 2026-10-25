---
id: agriculture.beef-cattle-farming
name: Beef Cattle Farming
description: "Count and tag the herd, pick breeds that thrive in the heat, graze paddocks in rotation, plan herd health with your vet and sell finished cattle to the abattoir at a known weight and price."
category: business
version: 1.0.0
tags: [agriculture, beef-cattle-farming, small-business, cattle, grazing, pasture, herd-health, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - vendor
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Beef Cattle Farming
          description: "Raising beef cattle: breeds suited to the tropics, pasture and forage, water, handling facilities, herd health with a vet and selling to abattoirs."
          projects:
            - name: Herd register with ear tags for every animal
              description: |-
                ## Purpose
                Animals known only as the brown cow or the young bull cannot be weighed, bred, treated or sold against a record. Tagging every animal and writing one line per head in a register is the base that weighing, vet work, theft reports and every sale depend on.

                ## Milestones
                1. Every animal carries a readable ear tag with a unique number.
                2. A register lists each animal's tag, sex, approximate age, breed type and dam where known.
                3. Calves born in the last year are added with birth month and mother's tag.
                4. The register is kept in one place, on paper or a phone spreadsheet, with a dated backup.

                ## Notes
                Ask your extension office or vet whether your country runs a national livestock identification scheme, because its tags may be required for movement and sale. Write tag numbers in the register the day they go in, not later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every animal on the farm by ear tag number with sex, age and breed, and a head count in the field matches it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the herd in the field and write down every animal you see"
                - "Ask the extension office whether an official tagging scheme applies"
                - "Buy numbered ear tags and an applicator from a farm supply store"
                - "Tag each animal in the crush and record it the same day"
                - "Reconcile a field count with the register @recurring(monthly:15)"
            - name: Paddock map and carrying capacity estimate
              description: |-
                ## Purpose
                Overstocked pasture shows up as bare ground, weedy regrowth and thin cattle by the middle of the dry season. Mapping the land into paddocks and estimating how many animals each can carry in the wet and dry months tells you whether the herd fits the grass before you buy another animal.

                ## Milestones
                1. A map of the land showing paddocks, fences, gates, water points and shade.
                2. Each paddock's approximate area recorded.
                3. A wet season and a dry season carrying estimate per paddock agreed with your extension officer.
                4. Current herd numbers compared with the estimate and any gap written down.

                ## Notes
                Carrying capacity in the tropics swings widely between seasons and grass types, so local advice beats any figure from a book written for temperate pasture.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A paddock map exists with areas and wet and dry season carrying estimates, compared in writing with the current herd size."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Walk the fence lines with a phone recording the track"
                - "Mark gates, troughs, ponds and shade trees on the map"
                - "Work out the rough area of each paddock"
                - "Ask the extension officer for local carrying estimates by grass type"
                - "Compare herd numbers with the estimate and note the gap"
            - name: Choosing beef breeds suited to the heat
              description: |-
                ## Purpose
                European breeds bought for size often struggle with heat, ticks and poor dry season grass, while tropical breeds such as Senepol, Jamaica Red Poll, Jamaica Black and Brahman crosses were developed for these conditions. Choosing a breed or cross on purpose, before the next purchase or bull, sets the herd's growth, fertility and temperament for a decade.

                ## Milestones
                1. The breed types already in the herd identified as best you can.
                2. Three candidate breeds or crosses compared on heat tolerance, tick resistance, temperament, growth and local availability.
                3. At least two local breeders or graziers asked how their cattle perform.
                4. A breeding direction for the herd written down in two sentences.

                ## Notes
                Start from the **Purchase decision** template. Crossbreeding a tropical breed over local cows often gives a good balance of hardiness and growth, but agree the plan with someone who knows your conditions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written breeding direction names the chosen breed or cross and the reasons, based on a comparison of at least three options."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the breed types you think are in the herd now"
                - "Compare three tropical breeds or crosses in a simple table"
                - "Visit or call two graziers who run those breeds locally"
                - "Write the herd's breeding direction in two sentences"
            - name: Cattle water supply audit
              description: |-
                ## Purpose
                A grown beef animal can drink well over forty litres on a hot day, and cattle that walk far for water or drink from a muddy pond grow slowly and get sick. Checking every water source, its reliability in the dry season and how far cattle walk to it shows where the next pipe, tank or trough should go.

                ## Milestones
                1. Every water source for the cattle listed: ponds, rivers, standpipes, tanks and troughs.
                2. Each source rated for dry season reliability and cleanliness.
                3. The longest walk from grazing to water estimated for each paddock.
                4. The top two water improvements chosen with rough costs.

                ## Notes
                Check with the water authority or ministry whether abstracting from a river or well needs a permit before you lay pipe.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every cattle water source rated for dry season reliability, with the two improvements to make first and their costs."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every place the cattle drink today"
                - "Mark which sources failed or got muddy last dry season"
                - "Estimate the walk from each paddock to its water"
                - "Price a tank, pipe run or trough for the worst paddock"
            - name: Handling yard and crush for safe work
              description: |-
                ## Purpose
                Tagging, treating, pregnancy testing and loading are dangerous and slow without a yard and a crush, and many injuries to people and cattle come from working animals in the open with ropes. A small, solid yard with a forcing pen, race and crush makes every later job safer and lets one or two people do what used to need five.

                ## Milestones
                1. A site chosen on firm, well-drained ground near water and a truck access point.
                2. A layout sketched with holding pen, forcing pen, race, crush and loading ramp.
                3. Materials priced, or a used crush found, and a budget agreed.
                4. The yard built and tested by running a few quiet animals through it.

                ## Notes
                Curved races and solid sides keep cattle calmer. Ask a neighbour with a good yard if you can copy it, and have the vet look at the crush before the first herd visit.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working yard with a crush and loading ramp is built and has handled the whole herd once without injury."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Pick a dry site near water with room for a truck to back in"
                - "Sketch the pens, race, crush and ramp to scale"
                - "Price timber, steel or a second-hand crush"
                - "Run three quiet animals through the finished yard as a test"
            - name: Cattle fence survey and repair plan
              description: |-
                ## Purpose
                Escaped stock end up on the road, in a neighbour's crop or stolen, and a single straying incident can cost more than a year of fence repairs. Walking every boundary and internal fence, scoring each section and fixing the worst first turns patchwork into fences that hold cattle.

                ## Milestones
                1. Every fence line walked and each section scored good, weak or failed.
                2. Failed sections and broken gates on boundaries repaired first.
                3. A choice made between barbed wire, electric fence or live posts for new lines.
                4. A materials list and repair order written for the remaining weak sections.

                ## Notes
                Live fence posts such as gliricidia root quickly and resist termites. Electric fencing needs a reliable energiser and earth, and a sign on road boundaries.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every fence section is scored on the paddock map, boundary breaks are repaired and a written plan covers the rest."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Walk the boundary fence and mark weak and failed sections"
                - "Repair the boundary breaks closest to the road first"
                - "Compare barbed wire, electric and live post fencing costs"
                - "Write a repair order for the internal fences"
            - name: Engaging a large animal vet for the herd
              description: |-
                ## Purpose
                Emergencies such as tick fever, difficult calvings and sudden deaths need a vet who knows the farm before the emergency, not a stranger called at midnight. Finding a vet who works with cattle, agreeing call-out terms and booking a first whole-herd visit gives the farm a health baseline and someone to plan with.

                ## Milestones
                1. One or two vets who work with cattle in your district identified, including any government veterinary service.
                2. Call-out fees, emergency availability and payment terms written down.
                3. A first whole-herd visit completed with the vet's notes kept.
                4. The vet's number saved in every worker's phone and posted in the yard.

                ## Notes
                Start from the **Vendor** template to keep the vet's terms and contact details. Many ministries run a veterinary service for farmers, so ask the extension office first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named vet has visited the whole herd, with call-out terms and the visit notes kept in the farm file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension office which vets attend cattle in your district"
                - "Call two vets and note fees and emergency availability"
                - "Book a whole-herd visit with the vet you choose"
                - "Post the vet's number in the yard and in workers' phones"
            - name: Livestock farmer registration and movement rules
              description: |-
                ## Purpose
                Many Caribbean countries require livestock owners to register with the ministry, and moving or selling cattle may need permits, brands or receipts that police and abattoirs ask for. Getting registration and the movement rules sorted early avoids a load turned away at the abattoir and makes theft reports and incentive claims possible.

                ## Milestones
                1. The farm registered as a livestock holding with the ministry or agricultural agency, with the card or number kept.
                2. The rules for moving, selling and slaughtering cattle in your country written down.
                3. Any required brand, tag or receipt book obtained.
                4. Copies of registration documents filed with the herd register.

                ## Notes
                Rules differ by country and sometimes by parish or region. Note where you got each rule and the date you checked it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The farm holds a current livestock registration and a written note of the movement and sale rules, with the source and date checked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Call the ministry or district office about livestock registration"
                - "Ask what paperwork a cattle sale or move needs"
                - "Get any required brand, tags or receipt book"
                - "File the registration with the herd register"
            - name: Buying cattle from known herds safely
              description: |-
                ## Purpose
                Bought-in cattle are the commonest way new disease, ticks and bad temperament arrive on a farm, and a cheap animal from an unknown source can cost the whole herd. Setting rules for where you buy, what you check and how long new animals stay apart protects the cattle you already have.

                ## Milestones
                1. A written list of what to check before buying: source herd, age, teeth, feet, condition, temperament and health history.
                2. Sellers asked for treatment and vaccination history and proof of ownership.
                3. An isolation paddock set aside for new arrivals, with the stay length agreed with your vet.
                4. Every new animal tagged and entered in the register on arrival.

                ## Notes
                Start from the **Purchase decision** template for each batch you buy. Always get a written receipt showing the seller's name, the animal's description and the price, because police and abattoirs may ask for it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written buying checklist and an isolation paddock exist, and the last batch bought came with receipts and was isolated as the vet advised."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page checklist for inspecting cattle before buying"
                - "Ask your vet how long new animals should stay apart"
                - "Fence or choose an isolation paddock away from the main herd"
                - "Get a signed receipt with every animal you buy"
            - name: Morning herd count and condition check
              description: |-
                ## Purpose
                Most cattle losses that could have been saved were missed for a day or two: a cow down after calving, an animal bloated, a calf missing or a broken fence. A short daily walk that counts heads and looks for anything off catches these while there is still time to call the vet.

                ## Milestones
                1. A fixed time and route for the daily check agreed with whoever does it.
                2. A short list of what to look for: counts, lameness, isolation, bloating, discharge, calves sucking, water flowing.
                3. Problems written in a notebook or message group the same morning.
                4. A month of daily checks completed without a missed day.

                ## Notes
                Cattle that stand apart from the herd, stop eating or stop chewing the cud are worth a second look. When in doubt, call the vet early.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The herd is counted and checked every morning for a month, with any problem noted the same day."
                cadence: rolling
              tasks:
                - "Write the list of signs to look for on a card"
                - "Count the herd and check water each morning @recurring(daily)"
                - "Note any problem in the herd notebook before leaving the field"
                - "Set up a message group with workers for herd alerts"
            - name: Rotational grazing rota by paddock
              description: |-
                ## Purpose
                Left on one large pasture, a herd will eat the best grass to the ground and leave the rest to go stemmy and weedy. Moving the herd through paddocks on a rota, with rest periods that suit the season, grows more grass from the same land and cuts the need for bought feed.

                ## Milestones
                1. Paddocks numbered and a move order agreed.
                2. A target rest period for the wet and dry season set with your extension officer.
                3. A grazing chart recording which paddock the herd is in and when it moved.
                4. Two full rotations completed with grass height noted at entry and exit.

                ## Notes
                Move on grass height, not the calendar alone: take cattle off before the grass is grazed to the soil, and rest longer in the dry season when regrowth is slow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A grazing chart shows two full rotations through every paddock with move dates and grass heights recorded."
                cadence: rolling
              tasks:
                - "Number the paddocks and write the move order on the chart"
                - "Ask the extension officer for a wet and dry season rest period"
                - "Check grass height and move the herd if due @recurring(weekly:mon)"
                - "Record the move date and grass height on the grazing chart"
            - name: Monthly weighing and liveweight gain log
              description: |-
                ## Purpose
                Without weights, nobody knows whether steers are growing, stalling or ready for sale, and buyers who weigh will always know more than you. Weighing on a scale or with a weigh tape once a month shows daily gain by group, flags the animals not thriving and lets you predict when each one reaches sale weight.

                ## Milestones
                1. A scale or calibrated weigh tape available, with the method kept the same each time.
                2. Every growing animal weighed and the weight written against its tag.
                3. Average daily gain worked out for each group after the second weighing.
                4. Animals gaining far less than their group flagged for the vet or culling.

                ## Notes
                Start from the **Metrics log** template. Weigh at the same time of day, ideally before cattle fill up on water and grass, so the numbers are comparable.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly weights are logged for every growing animal, with average daily gain worked out by group."
                cadence: rolling
              tasks:
                - "Buy a weigh tape or arrange use of a neighbour's scale"
                - "Weigh growing cattle and record against tag numbers @recurring(monthly:12)"
                - "Work out average daily gain per group in the log"
                - "Flag animals well below their group's gain for a closer look"
            - name: Quarterly body condition scoring of cows
              description: |-
                ## Purpose
                Cows that are thin at calving take longer to get back in calf, and by the time ribs show from the road it is months too late to fix. Scoring cows on a simple scale every quarter shows which groups need better grazing or supplements before calving and breeding.

                ## Milestones
                1. A body condition scoring scale chosen and learned, with photos of each score.
                2. Every breeding cow scored and the score written against her tag.
                3. Thin cows grouped and a plan made with the extension officer or vet.
                4. Four quarters of scores recorded and compared with calving results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every breeding cow has a body condition score recorded each quarter for a year, with a written plan for the thin group."
                cadence: cyclic
              tasks:
                - "Print a body condition score chart with example photos"
                - "Score every breeding cow and record the result @recurring(quarterly)"
                - "Group cows scoring thin and ask the vet about them"
                - "Compare the scores with which cows calved on time"
            - name: Tick and fly control programme with the vet
              description: |-
                ## Purpose
                Ticks in the tropics carry tick fever and cause hide damage and weight loss, and treating too often or with the wrong product breeds resistance. A programme designed with your vet, based on tick counts rather than habit, keeps burdens down and the treatments working.

                ## Milestones
                1. The tick species and current burden checked with the vet or extension officer.
                2. A written control programme agreed with the vet, naming products, timing and rotation.
                3. Treatment records kept with date, product, animals treated and withdrawal period.
                4. Tick counts on sample animals taken regularly and used to adjust timing.

                ## Notes
                Read the label for every acaricide and fly product, wear the protective equipment it lists and never treat within the withdrawal period before sale. Tropical breeds and their crosses often carry fewer ticks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tick control programme written with the vet is followed, with regular tick counts and every treatment recorded with its withdrawal date."
                cadence: rolling
              tasks:
                - "Ask the vet to check tick species and burden on the next visit"
                - "Write the agreed products, timing and rotation on one page"
                - "Count ticks on five sample animals @recurring(weekly:thu)"
                - "Record every treatment with its withdrawal date"
            - name: Trough, pipe and float valve round
              description: |-
                ## Purpose
                A stuck float valve, a cracked pipe or a trough full of algae can leave a paddock dry for days in the heat, and cattle without water stop eating. A weekly round of every water point catches failures before animals suffer and keeps troughs clean enough that cattle drink freely.

                ## Milestones
                1. Every trough, tank and float valve listed on the round.
                2. A small kit of spare floats, fittings and pipe kept at the farm.
                3. Troughs scrubbed on a regular cycle and the date noted.
                4. A month of weekly rounds completed with faults logged and fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every water point is checked weekly for a month, with each fault and its repair date written in the log."
                cadence: rolling
              tasks:
                - "List every trough, tank and valve in the order you walk them"
                - "Buy spare floats, fittings and a short pipe length"
                - "Check and clean every water point on the round @recurring(weekly:fri)"
                - "Log each fault and the date it was fixed"
            - name: Monthly fence line walk
              description: |-
                ## Purpose
                Fences fail slowly: a sagging wire, a rotten post, a gap a calf can slip through or a broken electric earth. Walking the lines once a month and fixing small faults on the spot is far cheaper than catching strays from a neighbour's field or the road.

                ## Milestones
                1. A route that covers every boundary and internal fence.
                2. A fencing kit carried on each walk: pliers, wire, staples and a strainer.
                3. Faults fixed on the spot or logged for a work day.
                4. Six monthly walks completed with no unplanned breakouts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly fence walks are logged with faults fixed, and no animal broke out through a fault the walk should have found."
                cadence: rolling
              tasks:
                - "Pack a fencing bag with pliers, wire, staples and a strainer"
                - "Walk every fence line and fix small faults @recurring(monthly:20)"
                - "Test the electric fence voltage at the far end of each line"
                - "Log larger repairs for the next work day"
            - name: Yearly herd health calendar with the vet
              description: |-
                ## Purpose
                Vaccinations, deworming, pregnancy tests and bull checks forgotten until something goes wrong are a common pattern on small cattle farms. Sitting down with the vet once a year to set a calendar for the herd puts every routine health job on a date, timed around breeding, weaning and the seasons.

                ## Milestones
                1. A meeting with the vet to review last year's health problems and losses.
                2. A written calendar of herd health jobs by month, as the vet recommends.
                3. Each job assigned to a person and entered in the farm calendar.
                4. Last year's calendar reviewed against what was actually done.

                ## Notes
                The vet decides which vaccines and treatments the herd needs and when. Keep the calendar with the treatment records so withdrawal periods are visible before any sale.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written yearly herd health calendar agreed with the vet is in the farm file, with each job assigned and dated."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Gather last year's treatment records and deaths before meeting the vet"
                - "Book a planning meeting with the vet @recurring(yearly)"
                - "Write the vet's recommended jobs on a month by month calendar"
                - "Check the calendar for jobs due next month @recurring(monthly:3)"
            - name: Bush and weed control in grazing paddocks
              description: |-
                ## Purpose
                Unpalatable bush, sensitive plant, thorny shrubs and some poisonous weeds spread quickly in tropical pasture and take grazing area away from cattle. A steady round of slashing, spot control and grazing pressure keeps paddocks open without large clearance jobs every few years.

                ## Milestones
                1. The main weed and bush species in each paddock identified with the extension officer.
                2. Any plants poisonous to cattle marked and removed first.
                3. A slashing and spot control round set paddock by paddock.
                4. Weed cover in the worst paddock visibly reduced after six months.

                ## Notes
                Any herbicide must be approved for pasture, used as the label says, and cattle kept off for the grazing interval on the label.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weeds in each paddock are identified, poisonous plants removed and a monthly control round logged for six months."
                cadence: rolling
              tasks:
                - "Ask the extension officer to identify the worst pasture weeds"
                - "Pull or cut any plants poisonous to cattle"
                - "Slash or spot treat one paddock after the herd moves out @recurring(monthly:8)"
                - "Photograph the worst paddock now and again in six months"
            - name: Cattle sales and costs ledger
              description: |-
                ## Purpose
                Cattle money comes in lumps at sale time while feed, vet, labour and fencing costs go out every month, so it is easy to feel profitable while losing money. A simple monthly ledger for the cattle enterprise shows the real cost of each animal sold and which costs are growing.

                ## Milestones
                1. Cost categories set: purchases, feed and supplements, vet and treatments, labour, fencing and water, transport, fees.
                2. Every sale recorded with tag, weight, price per kilogram and buyer.
                3. Monthly totals and a running year to date total kept.
                4. Cost per animal sold worked out at the end of the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of cattle income and costs are recorded, with cost per animal sold worked out for the year."
                cadence: rolling
              tasks:
                - "Set up the ledger with the cost categories for the herd"
                - "Enter the month's cattle receipts and sales @recurring(monthly:28)"
                - "Record weight and price per kilogram for every sale"
                - "Work out cost per animal sold at year end"
            - name: Low-stress cattle handling skills
              description: |-
                ## Purpose
                Shouting, sticks and dogs make cattle harder to move, injure people and cost weight, while calm handling that uses the animal's flight zone and point of balance moves cattle quietly. Learning these principles and practising them with workers makes every yard day shorter and safer.

                ## Milestones
                1. The flight zone and point of balance understood and explained to workers.
                2. A short training session held in the yard with everyone who handles cattle.
                3. Sticks replaced with flags or paddles for moving cattle.
                4. The time and number of people needed to yard the herd noted before and after.

                ## Notes
                Never work alone in a pen with a bull or a cow with a new calf. Keep an escape route clear in every pen.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Everyone who handles cattle has had a yard session on low-stress handling, and yarding the herd takes fewer people than before."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Watch a low-stress handling demonstration from an extension or university source"
                - "Practise moving a small group using the point of balance"
                - "Run a yard session with every worker who handles cattle"
                - "Swap sticks for flags or paddles in the yard"
            - name: Recognising sick cattle and when to call the vet
              description: |-
                ## Purpose
                Sick animals hide illness until they are quite sick, and tick fever, bloat, pinkeye, foot problems and pneumonia all have early signs that a trained eye picks up. Learning these signs, and agreeing with the vet which ones mean call at once, saves animals and money.

                ## Milestones
                1. The common cattle diseases in your area listed with the vet or extension officer.
                2. Early signs for each written on a one-page card for the yard.
                3. A rule agreed with the vet on which signs mean call immediately.
                4. Workers walked through the card in the field.

                ## Notes
                This is for spotting and reporting, not treating. Some diseases are notifiable, so ask the vet which ones must be reported to the veterinary authority.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page card of disease signs and call-the-vet rules, agreed with the vet, is posted in the yard and has been explained to every worker."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the vet which cattle diseases are common in your area"
                - "Write the early signs of each on a single card"
                - "Agree with the vet which signs mean call straight away"
                - "Walk workers through the card during a herd check"
                - "Restock the herd first aid box with the items the vet listed @recurring(quarterly)"
            - name: Calving watch and difficult birth signs
              description: |-
                ## Purpose
                Most cows calve without help, but a heifer stuck for hours or a calf that never sucks can be lost within a day. Knowing the signs of normal and difficult calving, having a clean kit ready and a clear rule for calling the vet gives each calf its best start.

                ## Milestones
                1. Expected calving months known from breeding or pregnancy test records.
                2. Normal stages of calving and signs of trouble learned with the vet's guidance.
                3. A calving kit ready: gloves, lubricant, clean ropes, iodine and a torch.
                4. Every calf checked for sucking within hours of birth and recorded.

                ## Notes
                Do not pull a calf without training; the vet can show you when assistance is safe and when it is not.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A calving kit is ready, calving signs are written down with the vet's call rule, and every calf born this season is recorded as sucking."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List which cows are due to calve and in which month"
                - "Ask the vet to explain normal calving and the warning signs"
                - "Put together a clean calving kit in a sealed box"
                - "Record each calf's birth date, dam and first suck"
            - name: Knowing your tropical pasture grasses
              description: |-
                ## Purpose
                Pastures in the region are often a mix of improved grasses such as Brachiaria, Guinea grass and Pangola, native grasses, legumes and weeds, and they differ greatly in feed value and dry season survival. Being able to name what grows in each paddock helps you graze it well and decide what to replant.

                ## Milestones
                1. Samples of the main grasses and legumes from each paddock collected.
                2. Each sample named with the extension officer or a local guide.
                3. The share of good grass, poor grass and weed estimated for each paddock.
                4. Notes added to the paddock map.

                ## Notes
                Legumes such as centrosema or leucaena can lift feed value, but ask locally before planting leucaena because it needs managing in cattle diets.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The paddock map notes the main grasses and legumes in each paddock and the rough share of good grass, poor grass and weed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Cut and bag samples of the main grasses from each paddock"
                - "Take the samples to the extension office for identification"
                - "Estimate good grass, poor grass and weed in each paddock"
                - "Write the pasture notes onto the paddock map"
            - name: Judging finished cattle and carcass value
              description: |-
                ## Purpose
                Selling an animal too early wastes growth, while holding it too long costs grass and money, and a buyer who knows carcass value better than you sets the price. Learning to judge finish by eye and weight, and how the abattoir or buyer grades and pays, lets you sell at the right time and argue the price.

                ## Milestones
                1. The abattoir's or buyer's payment basis understood: liveweight, carcass weight or grade.
                2. A typical dressing percentage for your type of cattle asked of the abattoir.
                3. Three animals judged by eye and weight before sale, then compared with the carcass result.
                4. A target sale weight and finish written down for steers and cull cows.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A target sale weight and finish for steers and cull cows is written down, checked against at least three carcass results."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the abattoir how it weighs, grades and pays for cattle"
                - "Judge three sale animals by eye and record your estimate"
                - "Compare your estimates with the carcass weights returned"
                - "Write the target sale weight for steers and cull cows"
            - name: Castration, dehorning and branding done right
              description: |-
                ## Purpose
                Castration, dehorning and branding done late or roughly cause pain, infection and weight loss, and some countries regulate who may do them and how. Agreeing with the vet when and how each is done on your farm, and who does it, makes these jobs routine and humane.

                ## Milestones
                1. The vet's advice recorded on the right age and method for castration and disbudding or dehorning.
                2. The legal rules for these procedures and for branding in your country checked.
                3. The person who will do each job named, with the vet doing or supervising where required.
                4. Each procedure recorded against the calf's tag and date.

                ## Notes
                Done young, these jobs are quicker and kinder. Pain relief and who may perform them is a question for the vet and the law, not for this list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written guidance from the vet on timing and method is in the farm file, and every calf procedure this year is recorded with date and tag."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the vet about timing and methods for castration and dehorning"
                - "Check the rules on branding and on who may do these jobs"
                - "Name who does each procedure on this farm"
                - "Record each procedure against the calf's tag"
            - name: Loading and trucking cattle safely
              description: |-
                ## Purpose
                Bruising, injuries and falls during loading and transport take money off every carcass, and a frightened animal on a ramp can hurt a person badly. Learning how to load calmly, choosing a suitable truck and planning the trip protects both the cattle and their sale value.

                ## Milestones
                1. A loading ramp at the right height for the trucks you use.
                2. A trucker who carries cattle regularly found, with rates and truck condition checked.
                3. Rules agreed for loading: no overcrowding, non-slip floor, sick or late pregnant animals left behind.
                4. Any movement paperwork prepared before the truck arrives.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A named cattle trucker and written loading rules are in the farm file, and the last load arrived without injury or bruising complaints."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure the ramp height against the trucks you will use"
                - "Get rates from two truckers who carry cattle"
                - "Write the loading rules on a card in the yard"
                - "Prepare movement papers the day before each load"
            - name: Cow and calf, backgrounding or finishing system
              description: |-
                ## Purpose
                Breeding your own calves, growing bought weaners or finishing older cattle for slaughter need different land, capital, skills and buyers. Choosing one system, or a clear mix, on numbers rather than habit stops the herd from drifting into an expensive muddle of everything.

                ## Milestones
                1. The three systems described in a sentence each for your conditions.
                2. Land, grass, water, cash and labour needs estimated for each.
                3. Likely income per year compared with the extension officer or an experienced grazier.
                4. A chosen system written down with the herd numbers it implies.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the cattle system the farm will run, compared on land, cash, labour and income against the two alternatives."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-sentence description of each system for your farm"
                - "Estimate the land and cash each system would need"
                - "Talk through the numbers with an experienced grazier"
                - "Write down the chosen system and target herd size"
            - name: Choosing a bull with a breeding soundness exam
              description: |-
                ## Purpose
                The bull is half the genetics of every calf, and an infertile or injured bull can leave a whole season of cows empty without anyone noticing. Buying or keeping a bull only after a breeding soundness exam by the vet, and choosing one suited to your breeding direction, protects next year's calf crop.

                ## Milestones
                1. The traits wanted in the next bull written down from your breeding direction.
                2. Candidate bulls from known breeders viewed, with their background and temperament noted.
                3. A breeding soundness exam done by the vet before purchase or before the season.
                4. The chosen bull's details and exam result kept in the herd register.

                ## Notes
                Start from the **Purchase decision** template. Never keep a bull that is aggressive to people, however good his calves.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The working bull has passed a vet's breeding soundness exam within the last year, and the result is filed with his register entry."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the traits you want in the next bull"
                - "Visit two breeders and view their bulls"
                - "Book a breeding soundness exam with the vet"
                - "File the bull's details and exam result"
            - name: Moving to a controlled breeding season
              description: |-
                ## Purpose
                A bull running with the cows all year spreads calving across every month, so calves are weaned at mixed ages, sold in ones and twos and some born at the worst time of the dry season. Limiting the bull to a set breeding window lines calving up with good grass and makes weaning, vet work and sales happen in batches.

                ## Milestones
                1. A target calving period chosen to match the best grass months.
                2. A breeding window worked back from it and agreed with the vet.
                3. A plan to keep the bull apart outside the window.
                4. The first season of calvings recorded to show how tight the spread is.

                ## Notes
                Moving from year-round to a set season usually takes two or three years. Expect some cows to fall out of step and plan their culling.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written breeding window is in place with the bull kept apart outside it, and the following calving spread is recorded month by month."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark the months with the best grass on the farm calendar"
                - "Agree a breeding window with the vet"
                - "Fence a bull paddock away from the cows"
                - "Record each calving month to measure the spread"
            - name: Artificial insemination versus keeping a bull
              description: |-
                ## Purpose
                For a small herd, a bull can cost more to feed and house than his calves are worth, while artificial insemination gives access to better genetics but needs heat detection, a technician and good handling. Comparing the two on cost and practicality for your herd size settles a decision many farmers make by default.

                ## Milestones
                1. The cost of keeping a bull for a year estimated.
                2. A local AI technician or government service contacted for availability and fees.
                3. Heat detection and handling needs for AI listed honestly.
                4. A decision written down, including any shared bull arrangement with neighbours.

                ## Notes
                Start from the **Purchase decision** template. Synchronisation programmes are planned and run by the vet or technician, not from a list.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of bull costs against AI costs for this herd leads to a recorded decision for the next breeding season."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add up the yearly cost of feeding and keeping a bull"
                - "Call the AI service for fees and availability"
                - "List what heat detection would mean for your daily routine"
                - "Write down the decision for next season"
            - name: Renovating a run-down pasture
              description: |-
                ## Purpose
                Years of overgrazing leave a paddock with weeds, bare patches and poor grass that no rotation will fix quickly. Renovating one paddock at a time, by resting, reseeding or replanting improved grass with cuttings, lifts its carrying capacity and shows what the rest of the farm could do.

                ## Milestones
                1. The worst paddock chosen and its current grass and weed cover photographed.
                2. A renovation method agreed with the extension officer, timed for the start of the rains.
                3. Planting material, seed or cuttings sourced and the paddock prepared.
                4. The paddock rested until established and its carrying capacity reassessed.

                ## Notes
                Any soil test or fertiliser decision goes through the extension officer and the lab results. Keep cattle off new grass until it is well rooted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One run-down paddock is replanted or reseeded at the start of the rains and reassessed for carrying capacity after establishment."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Photograph the worst paddock and note its weed cover"
                - "Ask the extension officer for a renovation method and timing"
                - "Source grass seed or cuttings before the rains start"
                - "Keep cattle out until the new grass is rooted"
            - name: Shade, shelter and heat stress in the herd
              description: |-
                ## Purpose
                In full sun with no shade, cattle pant, stop grazing in the middle of the day and grow and breed poorly, and dark-coated animals suffer most. Planting or protecting shade trees in every paddock, and noting how cattle use them, is a cheap way to keep animals grazing and cows cycling.

                ## Milestones
                1. Each paddock rated for shade available in the hottest hours.
                2. Paddocks without shade given a plan: trees planted, temporary shade cloth or rotation away in the hottest months.
                3. Shade trees planted and protected from cattle until established.
                4. Signs of heat stress written on the herd check card.

                ## Notes
                Silvopasture, planting rows of trees through pasture, gives shade, fodder and timber over time. Ask the forestry or extension office about suitable species.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every paddock has a shade rating and a plan, and new shade trees are planted and guarded in the paddocks that had none."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Watch where cattle stand at midday in each paddock"
                - "Rate every paddock for midday shade"
                - "Plant and guard shade trees in the worst paddock"
                - "Add heat stress signs to the herd check card"
            - name: Dry season feed gap plan for the herd
              description: |-
                ## Purpose
                By the end of the dry season many pastures carry little feed of any value, and cattle that lose weight then take months of wet season grass to recover. Planning how the herd will be fed through the gap, with fewer animals, saved grass, cut forage or supplements agreed with an adviser, avoids panic buying and weight loss.

                ## Milestones
                1. The usual length of the feed gap estimated from past years.
                2. Options compared: early sales, standing hay, cut and carry forage, bought feed and supplements.
                3. A plan agreed with the extension officer or nutritionist, with costs.
                4. Body condition at the end of the dry season compared with the start.

                ## Notes
                Supplement products and amounts are set with a nutritionist, the extension officer and the label. Selling a few animals early is often cheaper than feeding them.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed dry season feed plan is agreed with an adviser before the dry season, and end of season body condition is recorded against it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note when the grass ran out in the last two dry seasons"
                - "Price cut forage, bought feed and early sales as options"
                - "Agree the plan and its cost with the extension officer"
                - "Decide which animals to sell before the gap starts"
            - name: Written culling rules for the cow herd
              description: |-
                ## Purpose
                Cows that miss a calf, raise poor calves, have bad feet, broken teeth or a wild temper eat as much grass as the best cows, and sentiment often keeps them for years. Writing down clear culling rules and applying them after pregnancy testing raises herd fertility and frees grass for animals that pay.

                ## Milestones
                1. Culling rules written: empty at pregnancy test, no calf in a set period, poor temperament, bad feet, udder or teeth.
                2. The rules discussed with the vet and anyone who shares the herd.
                3. The herd checked against the rules and a cull list made.
                4. Culls sold before the dry season and recorded in the ledger.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written culling rules exist, the herd has been checked against them and the resulting culls are sold and recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the five or six reasons a cow leaves the herd"
                - "Check the rules with the vet"
                - "Go through the register and list cows that fail the rules"
                - "Sell the culls before the dry season starts"
            - name: Water points closer to the grazing
              description: |-
                ## Purpose
                Cattle that walk a long way to drink graze the near pasture bare and leave the far side untouched, and lose weight walking. Adding a tank, a pipe run or a trough in the paddocks furthest from water, chosen from the water audit, spreads grazing and lifts gain.

                ## Milestones
                1. The paddock with the longest walk to water chosen from the audit.
                2. A gravity, pump or solar pump option costed with any permit checked.
                3. The new tank, pipe and trough installed.
                4. Grazing spread in that paddock compared before and after.

                ## Notes
                A solar pump with a header tank can supply remote paddocks without grid power. Size the tank to cover a few cloudy days.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new water point is working in the paddock with the longest walk to water, with grazing spread noted before and after."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick the paddock with the longest walk from the water audit"
                - "Price a gravity line, a pump and a solar pump option"
                - "Install the tank, pipe and trough"
                - "Photograph grazing in the paddock before and after"
            - name: Annual pregnancy testing day with the vet
              description: |-
                ## Purpose
                An empty cow eats for a year and produces nothing, and without a pregnancy test you only find out when she fails to calve. Booking the vet for a yearly pregnancy test day, a set time after the breeding season, gives a clear list of in-calf cows, expected calving months and culls.

                ## Milestones
                1. The test date booked with the vet a suitable time after the bull comes out.
                2. Cows yarded early on the day with the crush and records ready.
                3. Every cow's result and estimated stage recorded against her tag.
                4. Empty cows listed for culling or a decision with the vet.

                ## Notes
                Start from the **Operational checklist** template for the yard day. Have extra hands for drafting cattle so the vet's time is used well.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every breeding cow has a recorded pregnancy result from the vet this year, with the empty cows listed and a decision made for each."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the vet for a pregnancy test day after the breeding season"
                - "Write the yard day checklist and assign helpers"
                - "Record each cow's result against her tag on the day"
                - "List the empty cows and decide their future with the vet"
            - name: Weaning day for the calf crop
              description: |-
                ## Purpose
                Weaning is stressful for cows and calves, and done badly it costs calves weight and leads to fence breaking and sickness. A planned weaning day, with weights taken, calves moved to good grass and safe fences, and cows given a rest before the next calving, starts the calves' growing phase well.

                ## Milestones
                1. Calves old and heavy enough for weaning identified with the vet's guidance.
                2. A weaning paddock with good grass, water and strong fences ready.
                3. Every calf weighed and the weaning weight recorded against its tag.
                4. Cows and calves kept apart and checked daily for the first week.

                ## Notes
                Fence-line weaning, where calves can see their mothers through a strong fence for a few days, often reduces stress.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The calf crop is weaned into a prepared paddock with every weaning weight recorded and no breakouts in the first week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the calves ready to wean by age and weight"
                - "Check fences and water in the weaning paddock"
                - "Weigh every calf on the day and record it"
                - "Check cows and weaners twice a day for the first week"
            - name: First load of steers to the abattoir
              description: |-
                ## Purpose
                The first abattoir sale is where a year or two of work turns into money, and a load turned away for missing paperwork, an animal inside its withdrawal period or a dirty truck is a painful lesson. Preparing the first load properly also sets up the relationship with the abattoir for future sales.

                ## Milestones
                1. The abattoir's booking process, requirements, fees and payment terms written down.
                2. Animals chosen at target weight and checked clear of all withdrawal periods.
                3. Ownership, movement and treatment paperwork ready.
                4. Carcass weights, grades and payment received and recorded against each tag.

                ## Notes
                Start from the **Vendor** template for the abattoir's terms and contacts. Ask for carcass weights and any condemnation reasons in writing.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first load is delivered and accepted at the abattoir, with carcass weights and payment recorded for every animal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Call the abattoir about booking, fees and payment terms"
                - "Check treatment records to confirm no animal is within withdrawal"
                - "Prepare ownership and movement papers for the load"
                - "Record carcass weights and payment against each tag"
            - name: Selling at a livestock auction or show
              description: |-
                ## Purpose
                Auctions and agricultural shows bring buyers together and can set a better price than a single dealer at the farm gate, but they reward animals that are well presented and sellers who know the rules. Preparing a small group for an auction or show tests your cattle against others and builds a name with buyers.

                ## Milestones
                1. A suitable auction or show found, with entry rules, fees and dates written down.
                2. A small group chosen and prepared: halter trained where needed, clean and healthy.
                3. A reserve price set for each animal from recent sale results.
                4. Results, prices and buyer contacts recorded after the event.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A prepared group is entered at an auction or show, with reserve prices set in advance and results and buyer contacts recorded."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Find the next livestock auction or agricultural show and its rules"
                - "Choose and start preparing a small group of animals"
                - "Set a reserve price for each from recent sale prices"
                - "Write down prices and buyer contacts after the event"
            - name: Storm and flood plan for the cattle
              description: |-
                ## Purpose
                Hurricanes and flash floods drown cattle in low paddocks, bring down fences and cut roads to the farm for days. A written plan for where the herd goes, who moves them, how they get water and feed afterwards and how strays are found is ready long before the first warning.

                ## Milestones
                1. High, open ground with water chosen as the storm paddock, away from falling trees and power lines.
                2. A trigger agreed for moving the herd, and who does it.
                3. Feed, water and fencing materials for a week after the storm identified.
                4. A herd photo and register copy kept off the farm to prove ownership of strays.

                ## Notes
                Start from the **Risk register** template. Cattle are often safer in a large open paddock than in a barn that could collapse; ask the extension office for local advice.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written storm plan names the storm paddock, the move trigger and the people responsible, with a register copy and herd photos stored off the farm."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Walk the farm to choose the highest open paddock with water"
                - "Agree who moves the herd and at what warning"
                - "Store a copy of the register and herd photos off the farm"
                - "Review the storm plan before the season starts @recurring(yearly)"
            - name: Starting with a few head on family land
              description: |-
                ## Purpose
                Many people start with three to ten head on family land or a roadside lot, often tethered, with no yard and a job elsewhere. Setting this small herd up properly, with tags, water, a basic pen and a vet's number, and an honest sense of what it earns, decides whether it grows into a business or drains weekend time and money.

                ## Milestones
                1. Permission to graze the family land written down and agreed with other family members.
                2. Each animal tagged, recorded and checked by a vet.
                3. Safe water and a simple pen or catching area in place.
                4. A one-year plan noting whether to grow, hold or sell, with costs and expected sales.

                ## Notes
                Tethered cattle need moving at least daily to fresh grass and shade and must always reach water. Family land arrangements are a common source of disputes, so write down who agreed to what.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written family agreement to graze, a tagged and vet-checked herd and a one-year grow, hold or sell plan exist."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Talk to family members about grazing and write down what is agreed"
                - "Tag and record each animal"
                - "Set up a water point and a simple catching pen"
                - "Write a one-year plan with costs and likely sales"
            - name: Grazing cattle on leased or rented pasture
              description: |-
                ## Purpose
                Graziers often run cattle on state agricultural leases, rented pasture or land agisted from a neighbour, and disputes over fences, water, numbers and payment are common. Agreeing the terms in writing and keeping the land in good order protects the herd and your right to stay.

                ## Milestones
                1. A written lease or grazing agreement covering rent, stocking limit, fences, water and notice period.
                2. Responsibilities for fence and water repairs agreed in writing.
                3. A condition record of the land with dated photos at the start.
                4. Rent payments and any agreed improvements recorded.

                ## Notes
                Have a lawyer or the agency that issues the lease check unusual terms before you sign. Do not invest in fixed improvements on land without a clear agreement on who owns them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed grazing agreement, dated photos of the land and a record of rent paid are kept in the farm file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what you need the grazing agreement to cover"
                - "Photograph fences, water and pasture before stocking"
                - "Agree who repairs fences and water in writing"
                - "Keep a record of every rent payment"
            - name: Running the herd from a distance with a herdsman
              description: |-
                ## Purpose
                Owners who live in town or abroad often leave cattle with a herdsman or relative and find out about deaths, missing animals or sales only months later. Agreeing duties, pay, reporting and spot checks turns blind trust into a working arrangement that protects both sides.

                ## Milestones
                1. A written agreement with the herdsman covering duties, pay, authority to call the vet and rules on sales.
                2. A weekly report agreed: head count, births, deaths, problems and photos.
                3. An independent spot count by the owner or a trusted person on a regular cycle.
                4. Herd numbers reconciled against the register each quarter.

                ## Notes
                Agree a small spending limit the herdsman can use for emergencies without asking, and a rule that no animal leaves the farm without your written say.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written herdsman agreement is in place, weekly reports arrive with photos, and quarterly counts match the register."
                cadence: rolling
              tasks:
                - "Write the herdsman's duties, pay and sales rules on one page"
                - "Agree a weekly report with a head count and photos"
                - "Read the herdsman's report and photos @recurring(weekly:sun)"
                - "Reconcile the head count with the register @recurring(quarterly)"
            - name: Grazing cattle under coconuts or tree crops
              description: |-
                ## Purpose
                Grazing cattle under coconuts, citrus or other tree crops is common in the region and can keep the grass down while earning beef from the same land. It only works if young trees are protected, cattle are kept off when chemicals are used and the stocking rate suits the shade.

                ## Milestones
                1. The tree crop blocks suitable for grazing chosen with the crop's age noted.
                2. Young trees fenced or guarded against browsing and rubbing.
                3. A rule set to keep cattle out while any spray's grazing interval applies.
                4. Grass, tree health and cattle condition checked after six months.

                ## Notes
                Any spray in the orchard must allow grazing, and cattle stay out for the interval on the label. Talk to the crop's buyer too, as some certifications restrict grazing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written integration plan protects young trees and sets spray exclusion rules, and a six-month check of grass, trees and cattle is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose which tree blocks are old enough to graze under"
                - "Guard young trees against browsing"
                - "Write the spray exclusion rule in the grazing chart"
                - "Check grass, trees and cattle after six months"
            - name: Adding water buffalo or buffalypso to the herd
              description: |-
                ## Purpose
                Water buffalo and the Trinidad-bred buffalypso thrive on wet, swampy ground and coarse grasses where cattle struggle, and their meat sells in some markets. Learning their different handling, fencing and health needs before buying keeps a promising idea from becoming a fence-breaking problem.

                ## Milestones
                1. Buffalo or buffalypso keepers in your country visited and their experience noted.
                2. Land, wallowing water, fencing and handling needs compared with your cattle setup.
                3. Health and movement rules checked with the vet and the ministry.
                4. A decision recorded, with a small trial group if you go ahead.

                ## Notes
                Buffalo need access to water or mud to wallow in the heat and stronger fences than many cattle paddocks have.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on keeping buffalo or buffalypso is recorded after visiting at least one keeper and checking needs with the vet."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find and visit a buffalo or buffalypso keeper"
                - "Compare their fencing and water needs with your paddocks"
                - "Ask the vet about health and movement rules for buffalo"
                - "Record the decision and the size of any trial group"
            - name: Selling freezer beef by the quarter or half
              description: |-
                ## Purpose
                Farm gate beef sold to families by the quarter or half, killed at a licensed abattoir and cut by a butcher, can earn more than a liveweight sale and builds a loyal customer list. It only works if the slaughter, cutting, cold chain and food rules are all done properly from the start.

                ## Milestones
                1. The legal route confirmed: licensed slaughter, butcher, storage and any trading permit.
                2. Costs per carcass for slaughter, cutting, packing and freezing added up.
                3. A price per kilogram and a deposit system set.
                4. A first animal sold in shares and customer feedback recorded.

                ## Notes
                Selling meat that was not killed at a licensed facility can break food safety law. Check with the public health or veterinary authority before taking orders.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One animal is killed at a licensed abattoir, cut and sold in shares with deposits, and the margin is compared with a liveweight sale."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the public health office what rules apply to selling beef"
                - "Get slaughter, cutting and freezing prices for one carcass"
                - "Set the share price and take deposits from customers"
                - "Compare the margin with a liveweight sale"
            - name: Herd performance records and yearly review
              description: |-
                ## Purpose
                Experienced graziers judge a herd on a handful of numbers: calving rate, calving interval, weaning weight, deaths and cost per kilogram sold. Working these out each year from your register, weights and ledger shows whether changes in breeding, grazing or health are paying off.

                ## Milestones
                1. Calving percentage, weaning weight, mortality and sale weights worked out for the year.
                2. Calving interval worked out for each cow with two or more calves.
                3. Cost per kilogram of beef sold worked out from the ledger.
                4. A one-page yearly review with three changes for next year.

                ## Notes
                Ask the agent to turn the register, weights and ledger into the one-page review, then check every figure against the records.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page herd review for the year shows calving rate, weaning weight, mortality and cost per kilogram sold, with three changes chosen."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Pull the year's births, deaths, weights and sales from the records"
                - "Work out calving rate, interval and weaning weight"
                - "Ask the agent to draft the one-page herd review from the figures"
                - "Write the herd review and pick three changes @recurring(yearly)"
            - name: Selecting replacement heifers from your herd
              description: |-
                ## Purpose
                Replacement heifers set the herd's fertility and temperament for the next decade, and keeping whichever heifers happen to be left after sales is how herds slide. Choosing heifers on their mothers' records, their own growth and temperament, and getting them to breeding size on time, steadily improves the cow herd.

                ## Milestones
                1. Selection rules written: dam calved regularly, good weaning weight, calm temperament, sound feet and frame.
                2. Heifer calves scored at weaning and a shortlist kept.
                3. A target weight and age for first breeding agreed with the vet.
                4. Heifers weighed toward target and their first breeding recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Replacement heifers are chosen against written selection rules, with weights recorded toward a vet-agreed breeding target."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the selection rules for replacement heifers"
                - "Score this year's heifer calves at weaning"
                - "Agree a first breeding weight with the vet"
                - "Weigh the shortlisted heifers against their target"
            - name: Carcass feedback to improve finishing
              description: |-
                ## Purpose
                The abattoir's carcass weights, grades, bruising and any condemned parts are the most honest report card on how cattle were bred, fed and handled. Collecting this feedback for every load and comparing it by group shows what to change in finishing, transport and breeding.

                ## Milestones
                1. The abattoir asked to supply carcass weight, grade, bruising and condemnation notes per tag.
                2. Carcass results linked to each animal's liveweight, age and breeding.
                3. Patterns noted across at least three loads.
                4. One change to finishing, handling or breeding made from the findings.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Carcass results from three loads are linked to each animal's records, and one change made from the findings is written down."
                cadence: rolling
              tasks:
                - "Ask the abattoir for per-tag carcass reports on every load"
                - "Link each carcass result to the animal's record"
                - "Compare dressing results across the last three loads"
                - "Write down one change to try from the findings"
            - name: Breeding stock sales and herd book registration
              description: |-
                ## Purpose
                Graziers with well-bred Senepol, Jamaica Red Poll or other recognised cattle can earn more selling bulls and heifers for breeding than selling them for beef. That premium depends on herd book registration, accurate records and a reputation built over several years.

                ## Milestones
                1. The breed society or herd book for your cattle contacted, with its rules and fees noted.
                2. Eligible animals registered with parentage and birth records.
                3. Performance records kept on registered animals: weights, temperament and fertility.
                4. A first breeding animal sold with its papers and records.

                ## Notes
                Only advertise what your records prove. Buyers of breeding stock come back, or warn others, based on how the animals perform.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Eligible animals are registered with a breed society, and at least one breeding animal is sold with its papers and performance records."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Contact the breed society about registration rules and fees"
                - "Gather parentage and birth records for eligible animals"
                - "Register the eligible animals with the herd book"
                - "List one breeding animal for sale with its records"
---

# Beef Cattle Farming

Beef Cattle Farming is for anyone raising cattle for meat in the tropics, from the family with six head tied out on the roadside verge to the grazier running a hundred cows on improved pasture. The projects start with knowing what you have: a tagged herd register, a paddock map, water, fences, a handling yard and a vet. Then come the routines that keep cattle growing, the stockmanship skills, breeding and pasture decisions, the dated days such as pregnancy testing, weaning and the first abattoir load, situations such as family land, leased pasture and absentee owners, and specialist work on herd performance, replacement heifers and carcass feedback.

What repeats is the daily herd check, weekly paddock moves and trough rounds, monthly weighing, fence walks and the cattle ledger, quarterly condition scoring and the yearly calendar of breeding, weaning and vet work. The Purchase decision, Metrics log, Operational checklist, Vendor and Risk register templates pair with the projects that point to them. Every vaccine, dewormer, tick treatment and supplement goes through your vet, your extension officer and the product label, never a dose from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
