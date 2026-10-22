---
id: food-nutrition.specialty-coffee-brewing
name: Specialty Coffee Brewing
description: "A grinder, scale and water you can trust, a written recipe and brew log, cleaning and reorder routines, the extraction, espresso and milk skills, and the specialist work of water recipes, refractometers and home roasting."
category: personal
version: 1.0.0
tags: [food-nutrition, specialty-coffee-brewing, everyone, espresso, pour-over, grinder, home-barista, tasting]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - vendor
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Specialty Coffee Brewing
          description: "Brewing better coffee at home with espresso, pour-over and grinder dialling in, plus bean sourcing and tasting notes."
          projects:
            - name: Choosing your main home brew method
              description: |-
                ## Purpose
                Pour-over, immersion, moka pot and espresso each need different gear, different grind sizes and a different amount of morning time, and buying for all of them at once is how cupboards fill with unused brewers. Deciding which one you will make most days, based on how you like your coffee and how many minutes you really have, settles every purchase that follows.

                ## Milestones
                1. The coffee you most enjoy buying out written down, black or with milk, and its size.
                2. Your realistic weekday brewing time measured in minutes.
                3. One main method chosen from pour-over, immersion, moka pot or espresso, with a second method for weekends if wanted.
                4. A rough budget set for the grinder and brewer that method needs.

                ## Notes
                If you mostly drink milky coffee, espresso or a strong moka pot is the honest choice. If you drink it black and slowly, filter methods give more flavour for far less money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main brew method and a starting budget are written down, with the reasons in two sentences."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the last five coffees you bought out and how you drank them"
                - "Time how many minutes you have for coffee on a weekday morning"
                - "Choose a main brew method and note why in two sentences"
                - "Set a combined budget for grinder and brewer"
            - name: Burr grinder matched to your brew method
              description: |-
                ## Purpose
                The grinder decides more about the cup than the brewer does: blade grinders and cheap burr sets make a mix of dust and boulders that extracts unevenly, so the coffee tastes sour and bitter at once. Choosing a burr grinder built for your method, hand or electric, is the single upgrade most home brewers say they should have made first.

                ## Milestones
                1. Your brew method's grind range noted, filter or espresso or both.
                2. Three burr grinders shortlisted with price, burr type and adjustment steps.
                3. Hand versus electric decided against how many cups you grind a day.
                4. A grinder bought, borrowed or ordered, with its model recorded in your brew log.

                ## Notes
                Start from the **Purchase decision** template. An espresso grinder needs very fine, stepless or small-step adjustment; a filter grinder does not, so do not pay for espresso range you will never use.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A burr grinder suited to your main method is in the kitchen, chosen from a shortlist of three with the reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note whether you need filter range, espresso range or both"
                - "Shortlist three burr grinders within your budget"
                - "Compare adjustment steps, retention and noise for each one"
                - "Buy or order the grinder you chose and record the model"
            - name: Brewing scale and gooseneck kettle setup
              description: |-
                ## Purpose
                Scoops vary by several grams depending on roast and grind, which is enough to move a cup from balanced to thin. A scale reading to 0.1 gram with a built-in timer, and a kettle you can pour slowly from, turn a guessed ritual into a recipe you can repeat and adjust one variable at a time.

                ## Milestones
                1. A scale reading in 0.1 gram steps with a timer on the counter.
                2. A kettle with a narrow spout, ideally with temperature control, chosen for pour-over.
                3. Both items placed where the brewer, scale and kettle can be used without moving anything.
                4. The scale checked against a known weight such as an unopened 500 gram packet.

                ## Notes
                Espresso-only brewers still need the scale; the gooseneck kettle matters only if you pour by hand.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A 0.1 gram timer scale and a suitable kettle are set up together, with the scale checked against a known weight."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your kitchen scale reads in 0.1 gram steps"
                - "Decide whether you need a gooseneck kettle for your method"
                - "Buy or borrow the scale and kettle you are missing"
                - "Check the scale against an unopened 500 gram packet"
            - name: Brewing water test and filter decision
              description: |-
                ## Purpose
                A cup of filter coffee is about 98 percent water, and very hard tap water both flattens flavour and coats kettles and machines with scale. Testing your water's hardness and alkalinity once, then choosing between tap, a filter jug, a plumbed filter or bottled water, protects both the taste and the equipment.

                ## Milestones
                1. Your water supplier's published hardness figure found, or a test strip result recorded.
                2. Total hardness and alkalinity noted in your brew log.
                3. A decision made between tap, filter jug, plumbed filter or a named bottled water.
                4. Your espresso machine's maker guidance on water hardness checked, if you have one.

                ## Notes
                Softening water with salt-based softeners is not the same as making it good for coffee, and some machine makers forbid it. Check the manual before choosing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your water's hardness is recorded and a brewing water choice is written in the brew log, matching your machine's guidance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your water supplier's hardness report for your postcode or area"
                - "Test the tap water with a hardness and alkalinity strip"
                - "Choose your brewing water and note it in the brew log"
                - "Replace the filter jug cartridge if you use one @recurring(monthly:19)"
            - name: First bag from a local specialty roaster
              description: |-
                ## Purpose
                Supermarket coffee is often roasted months before it is opened, and pre-ground coffee loses much of its aroma within days. Buying a 250 gram bag of whole beans with a printed roast date from a nearby roaster shows how different fresh coffee tastes and gives you a reference to judge every later bag against.

                ## Milestones
                1. Two or three local or online roasters found that print roast dates on their bags.
                2. A 250 gram bag of whole beans bought, roasted within the last three weeks.
                3. The bag's origin, process and roast date copied into your brew log.
                4. A first impression written after three cups.

                ## Notes
                Many roasters suggest resting beans for a week or more after roasting, especially for espresso. Ask the roaster what they recommend for the coffee you buy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A whole-bean bag with a roast date under three weeks old is bought and its details and first notes are in the brew log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search for roasters near you that print the roast date"
                - "Ask the roaster which coffee they would suggest for your brew method"
                - "Buy a 250 gram bag of whole beans"
                - "Write the origin, process and roast date in your brew log"
            - name: Baseline recipe written for your brewer
              description: |-
                ## Purpose
                Without a fixed starting point every cup is a fresh guess, so there is nothing to adjust from when one tastes wrong. Writing down a baseline, such as 15 grams to 250 grams of water at about 94°C for pour-over, or 18 grams in and 36 grams out for espresso, gives you the reference recipe every other change is measured against.

                ## Milestones
                1. A dose, water amount or yield, and water temperature chosen for your brewer.
                2. A target total brew time written down.
                3. Five cups brewed to the recipe with the grinder setting recorded each time.
                4. The baseline recipe written on a card kept beside the brewer.

                ## Notes
                Common starting ratios are around 1:16 for pour-over, 1:15 for French press and 1:2 for espresso. They are starting points, not rules.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written baseline recipe with dose, water, temperature and target time sits beside the brewer, tested over five cups."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a starting ratio for your brewer from the maker or roaster"
                - "Brew five cups to the recipe and note the grinder setting each time"
                - "Adjust grind only until the brew time lands in your target range"
                - "Write the final baseline on a card next to the brewer"
            - name: Coffee brew log
              description: |-
                ## Purpose
                Memory is a poor record of which grind setting worked on which bag three weeks ago. A short log with bean, roast date, dose, water, grind, time and a taste note lets you return to a great cup on purpose and spot why a bag started tasting worse.

                ## Milestones
                1. A log set up with columns for date, bean, roast date, dose, water, grind, time and taste.
                2. Your grinder model, water choice and baseline recipe written at the top.
                3. At least ten brews logged.
                4. One change you would not have noticed without the log recorded.

                ## Notes
                Start from the **Metrics log** template. Keep it on your phone or a card by the grinder; a log you have to walk to will not get filled in.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A brew log holding at least ten dated entries with grind setting and a taste note for each."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a brew log from the metrics log template"
                - "Add columns for bean, roast date, dose, water, grind, time and taste"
                - "Write your grinder, water and baseline recipe at the top"
                - "Log every brew for the next two weeks"
            - name: Bean storage and single-dose freezing
              description: |-
                ## Purpose
                Beans lose aroma fastest once the bag is opened, and a kilo bought for the discount can taste flat by the last cup. An airtight, opaque container for the open bag, and frozen single doses in small sealed tubes for the rest, keep the last cup of a bag close to the first.

                ## Milestones
                1. One airtight, opaque container in use for the bag you are drinking.
                2. A set of small airtight tubes or bags bought for single doses.
                3. One bag portioned into doses and frozen, each labelled with bean and date.
                4. A frozen dose ground straight from the freezer and compared with a fresh one.

                ## Notes
                Grind frozen beans straight from the freezer and do not refreeze them. Condensation is the enemy, so take out only what you will use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Open beans live in an airtight container and at least one bag has been frozen in labelled single doses."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Move the open bag into an airtight, opaque container"
                - "Buy a set of small airtight dosing tubes"
                - "Weigh one bag into single doses and freeze them with labels"
                - "Brew a frozen dose beside a fresh one and note the difference"
            - name: Cleaning kit for grinder, brewer and machine
              description: |-
                ## Purpose
                Coffee oils turn rancid within days and mineral scale builds in every kettle and boiler, so a dirty setup slowly makes good beans taste stale. Putting the right brushes, cloths, descaler and, for espresso, a blind basket and detergent in one place means cleaning takes minutes rather than an afternoon of searching.

                ## Milestones
                1. A grinder brush, microfibre cloths and a descaler suited to your kettle and brewer in one box.
                2. A blind basket, backflush detergent and group brush added if you use espresso.
                3. Each machine's manual checked for approved cleaning products.
                4. The kit stored next to the coffee station.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single cleaning box holds brushes, cloths and maker-approved descaler and detergent, kept beside the coffee station."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read each machine's manual for its approved cleaning products"
                - "Buy the brushes, descaler and any espresso cleaning items you lack"
                - "Put everything in one box beside the coffee station"
                - "Restock descaler and cleaning tablets before they run out @recurring(quarterly)"
            - name: Dialling in each new bag in three brews
              description: |-
                ## Purpose
                Every new bag behaves differently, and a lighter roast from a high farm may need a finer grind than last month's chocolatey blend. A short routine of three deliberate brews, changing only the grind, gets each bag tasting right within a day instead of drifting through half the bag on the wrong setting.

                ## Milestones
                1. First brew made to the baseline recipe and tasted for sour or bitter.
                2. Second and third brews adjusted by grind only, one step at a time.
                3. The winning grind setting written against the bag in the log.
                4. The routine followed for three bags in a row.

                ## Notes
                Change one variable at a time. Grind first, then ratio, then temperature, and only once the grind is close.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive bags each have a logged grind setting found within three brews of opening."
                cadence: rolling
              tasks:
                - "Brew the first cup of each new bag to your baseline recipe"
                - "Taste for sour or bitter and move the grind one step accordingly"
                - "Record the winning grind setting against the bag in the log"
                - "Write first-cup notes within two days of opening each bag"
            - name: Weekly grinder brush-out and burr care
              description: |-
                ## Purpose
                Old grounds and oil stuck in the burr chamber go stale and leak into fresh coffee, and a grinder that has not been cleaned in months can hold several grams of last week's beans. A short weekly brush-out and a fuller quarterly clean keep the grind consistent and the flavour fresh.

                ## Milestones
                1. A weekly brush-out done for four weeks running.
                2. A quarterly clean done with the burrs removed or grinder cleaning tablets, following the manual.
                3. The burrs checked for chips or dull edges and their age noted.
                4. The grind setting re-checked after reassembly.

                ## Notes
                Unplug electric grinders before opening them. Never wash burrs in water unless the maker says you can, as some rust.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly brush-outs are logged for a month and a full quarterly clean has been done with the grind setting re-checked."
                cadence: rolling
              tasks:
                - "Find the cleaning section of your grinder manual"
                - "Brush out the chute and burr chamber @recurring(weekly:sun)"
                - "Open the grinder, clean the burrs and note their condition @recurring(quarterly)"
                - "Re-check your grind setting with a test brew after each deep clean"
            - name: Espresso machine backflush and soak schedule
              description: |-
                ## Purpose
                Espresso machines push hot water through coffee oils at high pressure, and the group head, shower screen and portafilter collect a bitter film within days. A weekly detergent backflush and a monthly soak of baskets and portafilter keep shots clean and stop expensive repairs from scale and blocked valves.

                ## Milestones
                1. Your machine's manual checked for whether it can be backflushed, and with what.
                2. A weekly backflush done for four weeks running.
                3. Baskets and portafilter soaked in detergent once a month.
                4. A descaling interval agreed from your water hardness and the maker's guidance.

                ## Notes
                Not every machine can be backflushed; some lever and pump designs forbid it. Dual boiler machines often need professional descaling, so check before pouring descaler in.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weekly backflushes and one monthly soak are logged, with a written descaling interval that matches the manual."
                cadence: rolling
              tasks:
                - "Check the manual for backflush and descaling instructions"
                - "Backflush the group head with detergent @recurring(weekly:fri)"
                - "Soak the baskets and portafilter in detergent solution @recurring(monthly:9)"
                - "Write your descaling interval on the inside of the cleaning box"
            - name: Kettle and filter brewer descaling routine
              description: |-
                ## Purpose
                Scale in the kettle slows heating, throws off temperature readings and flakes into the cup, and glass carafes and plastic brewers hold oils that taste stale. A monthly descale and soak keeps filter brewing gear tasting neutral, and takes about fifteen minutes.

                ## Milestones
                1. Kettle descaled with a maker-approved descaler or citric acid.
                2. Brewers, carafes and server soaked to remove coffee oils.
                3. Kettle temperature reading checked against a thermometer once.
                4. The routine done three months running.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Kettle and filter gear have been descaled and soaked for three consecutive months, with the kettle temperature checked once."
                cadence: rolling
              tasks:
                - "Check which descaler your kettle maker allows"
                - "Descale the kettle and soak brewers and carafes @recurring(monthly:14)"
                - "Check the kettle's set temperature against a probe thermometer"
                - "Rinse every soaked part twice before the next brew"
            - name: Bean stock and reorder rhythm
              description: |-
                ## Purpose
                Running out of beans means a week of whatever is in the supermarket, while ordering too much means drinking stale coffee. Knowing how many grams you use a week and ordering on a fixed day keeps a fresh bag arriving as the last one finishes.

                ## Milestones
                1. Weekly coffee use worked out in grams from the brew log.
                2. A reorder point set, such as when one bag and a week of frozen doses remain.
                3. A regular order day chosen that suits the roaster's roasting days.
                4. Three months passed with no empty weeks and no bag older than six weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly use in grams and a reorder point are written down, and three months pass without running out."
                cadence: rolling
              tasks:
                - "Work out how many grams you brew in a normal week"
                - "Ask your roaster which days they roast and ship"
                - "Count the bags and frozen doses and place the next order @recurring(monthly:3)"
                - "Note any week you ran out and move the reorder point earlier"
            - name: Monthly brew log review
              description: |-
                ## Purpose
                Logs that are written but never read change nothing. Spending twenty minutes each month looking at which bags, recipes and grind settings scored best shows patterns, such as a preference for washed coffees or for slightly longer brews, that shape what you buy next.

                ## Milestones
                1. The month's entries read through and the three best cups marked.
                2. One pattern written down about origin, process, roast or recipe.
                3. One change decided for next month's buying or brewing.
                4. A running list of favourite coffees kept at the front of the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each monthly review leaves one written pattern and one decided change at the top of the log."
                cadence: rolling
              tasks:
                - "Mark the three best cups of the month in the log @recurring(monthly:24)"
                - "Write one pattern you notice about the coffees you rated highest"
                - "Decide one change to try next month"
                - "Add any standout coffee to the favourites list"
            - name: Saturday slow brew tasting session
              description: |-
                ## Purpose
                Weekday coffee is often made in a hurry, so the bag never gets tasted carefully. Setting aside a quiet half hour at the weekend to brew one cup with full attention, let it cool and taste it at three temperatures, is how a tasting palate actually develops.

                ## Milestones
                1. A regular weekend slot chosen and kept for four weeks.
                2. Each session's cup tasted hot, warm and near room temperature.
                3. Three descriptors written for each session.
                4. One session spent comparing two different brewers on the same bean.

                ## Notes
                Coffee reveals most as it cools. Sour or harsh notes that appear only when cool often point to the grind.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weekend tasting sessions are logged with three descriptors each, including one two-brewer comparison."
                cadence: rolling
              tasks:
                - "Pick a quiet half hour at the weekend for slow brewing"
                - "Brew one careful cup and taste it at three temperatures @recurring(weekly:sat)"
                - "Write three descriptors for the cup in the log"
                - "Compare two brewers on the same bean in one session"
            - name: Seasonal origin rotation through the harvest year
              description: |-
                ## Purpose
                Coffee is a seasonal crop: Ethiopian and Kenyan lots usually arrive fresh at different times from Central American or Colombian ones, and roasters' menus change through the year. Rotating through one new origin each season teaches you what you like and means you are drinking coffees near their best.

                ## Milestones
                1. Your favourite roaster's typical arrival months for main origins noted.
                2. One new origin tried each quarter for a year.
                3. Each origin's character summarised in a line in the log.
                4. A short list of origins you will look for again written down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four new origins have been tried in a year, each summarised in the log, with a written list of origins to buy again."
                cadence: cyclic
              tasks:
                - "Ask your roaster when their main origins usually arrive"
                - "Buy a coffee from an origin you have not tried @recurring(quarterly)"
                - "Summarise each origin's character in one line"
                - "Write a short list of origins worth buying again"
            - name: Annual espresso gasket and shower screen service
              description: |-
                ## Purpose
                Group head gaskets harden over a year or two of heat, then leak around the portafilter, and shower screens clog in ways backflushing does not reach. A yearly service, done at home with the right parts or booked with a technician, keeps pressure even and avoids the bigger repair bill.

                ## Milestones
                1. The right gasket and shower screen sizes for your machine found and noted.
                2. Spare parts bought or a technician booked.
                3. Gasket and screen replaced, or the service done, with the date logged.
                4. Any leaks, slow heat-up or pressure changes noted for the technician.

                ## Notes
                Let the machine cool fully and unplug it before working on the group. If the machine is under warranty, check whether home servicing affects it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The group gasket and shower screen are replaced or professionally serviced once a year, with the date in the log."
                cadence: cyclic
              tasks:
                - "Find the gasket and shower screen sizes for your machine"
                - "Book a service or replace the gasket and screen yourself @recurring(yearly)"
                - "Log the service date and any faults you noticed"
                - "Keep one spare gasket in the cleaning box"
            - name: Monthly coffee spend check
              description: |-
                ## Purpose
                Specialty beans, café visits, gear upgrades and pods all come out of different pockets, so few people know what coffee really costs them. A five-minute monthly total shows whether home brewing is replacing café spend or adding to it.

                ## Milestones
                1. One month's spend on beans, café coffee and gear added up.
                2. A monthly coffee budget set that you are comfortable with.
                3. Three months of totals compared against the budget.
                4. One change made if the total ran over.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of coffee spend totals are recorded against a written monthly budget."
                cadence: rolling
              tasks:
                - "Search last month's statements for coffee shops and roasters"
                - "Set a monthly coffee budget you are comfortable with"
                - "Add up beans, café visits and gear for the month @recurring(monthly:28)"
                - "Make one change in any month that runs over"
            - name: Grind size and extraction basics
              description: |-
                ## Purpose
                Most bad cups at home are extraction problems: too coarse or too fast and the coffee tastes sour and thin, too fine or too long and it turns bitter and dry. Learning to taste the difference and fix it with grind size is the skill every other coffee technique rests on.

                ## Milestones
                1. One bag brewed at three grind settings, coarse, baseline and fine, on the same day.
                2. Sour, balanced and bitter cups tasted side by side and described.
                3. The idea of extraction and strength explained back in your own words.
                4. A personal fix-it rule written down for sour and for bitter cups.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-grind comparison is logged with taste notes and a written rule for fixing sour and bitter cups."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide to coffee extraction from a roaster or trade body"
                - "Brew one bean at three grind settings on the same morning"
                - "Taste the three cups side by side and describe each"
                - "Write your fix-it rule for sour and bitter cups"
            - name: Pour-over technique from bloom to drawdown
              description: |-
                ## Purpose
                Pour-over is unforgiving: an uneven pour leaves dry pockets and channels, and the same recipe can take two minutes or five depending on technique. Practising the bloom, steady pulse pours and a flat bed at the end makes your cups consistent enough that grind changes mean something.

                ## Milestones
                1. A bloom of about two to three times the coffee weight used for 30 to 45 seconds.
                2. Pulse pours practised to hit set weights at set times.
                3. Drawdown time within 15 seconds of your target on five brews in a row.
                4. A flat, even coffee bed seen at the end of most brews.

                ## Notes
                Rinse the paper filter with hot water first; it removes papery taste and warms the brewer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five consecutive pour-overs finish within 15 seconds of the target time with a flat bed, logged."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Watch one pour-over technique video from a respected brewer"
                - "Practise the bloom and timed pulse pours with water only"
                - "Brew five cups in a row and log each drawdown time"
                - "Photograph the coffee bed after each brew to check it is flat"
            - name: Immersion brewing with French press and AeroPress
              description: |-
                ## Purpose
                Immersion brewers steep all the coffee in all the water, which makes them forgiving and ideal for busy mornings, travel or a first step into better coffee. Learning a clean French press method and two AeroPress recipes gives you a dependable cup even on days with no time for pour-over.

                ## Milestones
                1. A French press brewed with a four minute steep and the crust broken and skimmed.
                2. Two AeroPress recipes tried, one standard and one inverted.
                3. A favourite immersion recipe written on a card.
                4. Fines and sludge in the cup reduced by letting the press settle before pouring.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written immersion recipe is chosen after trying a French press method and two AeroPress recipes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Brew a French press with a four minute steep and skim the crust"
                - "Try a standard and an inverted AeroPress recipe"
                - "Let the press settle for a few minutes before pouring and compare"
                - "Write your favourite immersion recipe on a card"
            - name: Dialling in espresso by dose, yield and time
              description: |-
                ## Purpose
                Espresso magnifies every small error, and a few seconds or two grams can turn a sweet shot sour or harsh. Learning to fix dose, weigh the yield in the cup and adjust grind to hit a time window gives you a repeatable shot and a method for every new bag.

                ## Milestones
                1. A fixed dose that suits your basket weighed for every shot.
                2. Shots weighed in the cup and timed from pump start.
                3. Ten shots logged with dose, yield, time and taste.
                4. A sweet, balanced shot reached on two different bags.

                ## Notes
                A common starting point is a 1:2 ratio in 25 to 35 seconds, but taste outranks the timer. Light roasts often want longer ratios.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten logged espresso shots with dose, yield, time and taste, and a balanced shot reached on two bags."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Weigh how much coffee your basket holds comfortably"
                - "Pull a shot at a 1:2 ratio and time it from pump start"
                - "Adjust grind and log ten shots with dose, yield, time and taste"
                - "Repeat the process on a second bag to check the method holds"
            - name: Milk steaming for silky microfoam
              description: |-
                ## Purpose
                Big bubbles and scalded milk ruin a flat white faster than a mediocre shot. Learning to stretch milk briefly, then spin it into a glossy whirlpool and stop around 60 to 65°C, gives sweeter, smoother drinks and is the base for latte art.

                ## Milestones
                1. Cold milk in a jug of the right size for the drink.
                2. Stretching and texturing phases practised separately.
                3. Milk stopped at drinking temperature checked with a thermometer, then by hand.
                4. Glossy, paint-like milk produced five times in a row.

                ## Notes
                Plant milks steam differently. Barista versions of oat and soy foam best; keep notes on which ones work with your machine.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five consecutive jugs of glossy microfoam stopped within the target temperature range, with notes logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy a milk jug sized for the drinks you make"
                - "Practise stretching with water and a drop of washing up liquid"
                - "Steam milk to temperature with a clip-on thermometer"
                - "Log which dairy or plant milks foam best on your machine"
            - name: Latte art from heart to rosetta
              description: |-
                ## Purpose
                Pouring a clean heart or rosetta takes many cups of practice, but it also proves the milk texture is right, which is why baristas use it as a check. Working through heart, tulip and rosetta in order, with photos of each attempt, turns aimless pouring into progress you can see.

                ## Milestones
                1. A recognisable heart poured three times in a row.
                2. A three-stack tulip poured.
                3. A rosetta with visible leaves poured.
                4. A photo record of attempts showing progress over eight weeks.

                ## Notes
                Practise with cheap milk and water-plus-soap foam to save money. Pour height and jug tilt matter more than speed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Photographs show a repeatable heart, a tulip and a rosetta poured within eight weeks."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Watch a slow-motion video of a heart being poured"
                - "Pour and photograph five practice cups @recurring(weekly:wed)"
                - "Move from heart to tulip once three hearts in a row are clean"
                - "Compare the first and latest photos after eight weeks"
            - name: Reading a specialty coffee bag label
              description: |-
                ## Purpose
                Specialty bags list origin, farm or cooperative, variety, process, altitude, roast date and tasting notes, and each one tells you something about how the coffee will taste and brew. Learning what they mean lets you choose a new bag with some confidence rather than by the illustration on the front.

                ## Milestones
                1. The common processes, washed, natural, honey and anaerobic, understood and described.
                2. Common varieties such as Bourbon, Caturra, SL28 and Gesha recognised.
                3. The link between altitude, density and grind setting noted.
                4. Three bags from your log annotated with what each label told you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three logged bags are annotated with what their process, variety and altitude suggest, written in your own words."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a roaster's guide to coffee processing methods"
                - "Ask the agent to summarise the label of your current bag in plain terms"
                - "Annotate three bags in your log with what the labels suggest"
                - "Check whether the tasting notes matched what you actually tasted"
            - name: Building a tasting vocabulary with a flavour wheel
              description: |-
                ## Purpose
                Saying a coffee is nice gives you nothing to compare, while saying it tastes of red apple, black tea and brown sugar does. Using a coffee flavour wheel and short weekly tasting notes builds the vocabulary that makes buying, logging and talking to roasters useful.

                ## Milestones
                1. A coffee flavour wheel printed or saved where you brew.
                2. Weekly notes using at least three wheel descriptors kept for six weeks.
                3. Acidity, sweetness, body and finish rated on a simple five point scale.
                4. A roaster's published notes compared with yours on two bags.

                ## Notes
                Start from the outer, general ring of the wheel and move inward only when you are sure. Fruit or chocolate is a useful note; it does not have to be lychee.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weeks of tasting notes using flavour wheel terms and rated attributes are in the log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Print a coffee flavour wheel and keep it by the brewer"
                - "Write a tasting note using three wheel descriptors @recurring(weekly:tue)"
                - "Rate acidity, sweetness, body and finish from one to five"
                - "Compare your notes with the roaster's on two bags"
            - name: Moka pot brewing without the bitterness
              description: |-
                ## Purpose
                The stovetop moka pot makes a strong, rich coffee cheaply, but most people overheat it and get a harsh, metallic cup. Starting with hot water, a slightly coarser grind than espresso and pulling it off the heat as soon as it gurgles fixes most of the bitterness.

                ## Milestones
                1. The basket filled level without tamping, using a grind coarser than espresso.
                2. Brews started with hot water from the kettle and a medium flame.
                3. The pot taken off the heat and cooled under a tap as soon as it sputters.
                4. A recipe that tastes sweet rather than burnt written down.

                ## Notes
                Never seal a moka pot with the safety valve blocked, and replace the rubber gasket if it hardens or cracks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written moka pot method has produced three sweet, non-burnt brews in a row, logged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the moka pot's gasket and safety valve are in good condition"
                - "Fill the base with hot water and the basket level without tamping"
                - "Take the pot off the heat as soon as it starts to sputter"
                - "Write down the method that gave the sweetest cup"
            - name: Choosing a house coffee by cupping three bags
              description: |-
                ## Purpose
                Having a house coffee you reorder without thinking saves time and money, but it should be chosen by tasting, not by habit. A simple home cupping of three candidate coffees, with the same grind, ratio and water, lets you pick the one you genuinely prefer.

                ## Milestones
                1. Three candidate coffees bought in small bags, roasted within a similar window.
                2. A cupping done with equal doses, a coarse grind and water just off the boil.
                3. Each coffee scored on sweetness, acidity, body and overall.
                4. A house coffee chosen and set as the default reorder.

                ## Notes
                Taste each cup more than once as it cools. First impressions often change at the lower temperatures.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three coffees are cupped and scored side by side and one is named as the house coffee in the log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose three candidate coffees in small bags"
                - "Set up three cups with the same dose, grind and water"
                - "Score each coffee on sweetness, acidity, body and overall"
                - "Name the winner as the house coffee and set it as the reorder default"
            - name: Espresso machine purchase decision
              description: |-
                ## Purpose
                Home espresso machines run from single boiler entry models to heat exchangers, dual boilers and manual levers, at prices from a few hundred to several thousand. Choosing by the drinks you make, how many in a row and how much you will maintain avoids paying for features you do not use, or buying a machine that cannot steam milk for two.

                ## Milestones
                1. Your daily drinks counted, milk or black, and how many back to back.
                2. Single boiler, heat exchanger, dual boiler and lever designs compared for your use.
                3. Three machines shortlisted with warranty, parts availability and service options.
                4. A decision recorded, including whether the grinder budget is protected first.

                ## Notes
                Start from the **Purchase decision** template. A good espresso grinder matters as much as the machine; most experienced home baristas spend similar amounts on both.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A machine is chosen from a shortlist of three, with the decision and reasons recorded against your daily drinks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count how many espresso and milk drinks you make on a normal day"
                - "Compare boiler types against how many milk drinks you make in a row"
                - "Shortlist three machines and check local parts and service support"
                - "Record your choice with the reasons in the purchase decision page"
            - name: Roaster subscription or local shop buying
              description: |-
                ## Purpose
                Subscriptions deliver fresh beans on a schedule and often cost less per bag, but they can send coffees you do not enjoy or more than you drink. Comparing a subscription with buying from a local shop, on price per kilo, freshness and choice, settles how beans arrive in your house.

                ## Milestones
                1. Price per kilo, delivery cost and freshness compared for two subscriptions and one local shop.
                2. Your weekly use matched to a bag size and frequency.
                3. One option chosen and set up, with pause and skip rules noted.
                4. A three-month review date set.

                ## Notes
                Start from the **Vendor** template to keep the roaster's contact, delivery days and cancellation terms in one place.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One bean supply route is chosen on price per kilo and freshness, with its terms recorded on a vendor page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the price per kilo for two subscriptions and one local shop"
                - "Match your weekly use to a bag size and delivery frequency"
                - "Set up the chosen option and note how to pause or cancel"
                - "Review the last three bags and keep, pause or switch @recurring(quarterly)"
            - name: Cost per cup at home versus a coffee shop
              description: |-
                ## Purpose
                Good beans at home often cost a fraction of a café cup even after equipment, but the number is rarely worked out, so upgrade decisions are made on feel. Calculating your real cost per cup, including gear spread over its life, gives a clear figure for what home brewing saves or costs.

                ## Milestones
                1. Cost per cup of beans worked out from price per kilo and your dose.
                2. Milk, filters and water filter cartridges added per cup.
                3. Equipment cost spread over an expected lifetime in years.
                4. Home cost per cup compared with your usual café order.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cost per cup at home, including spread equipment cost, sits beside the price of your usual café order."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Divide your bean price per kilo by your dose to get the bean cost per cup"
                - "Add milk, filter and cartridge costs per cup"
                - "Spread equipment cost over its expected years of use"
                - "Compare the total with your usual café order"
            - name: Single-dose workflow to cut retention and static
              description: |-
                ## Purpose
                Grinders hold old grounds in the chute, and static sprays chaff across the counter, so the first grams of each grind can be stale and the dose inconsistent. Weighing each dose before grinding, adding a drop of water to the beans and clearing the chute keeps every cup fresh and the counter clean.

                ## Milestones
                1. Each dose weighed as beans before grinding.
                2. A single drop of water stirred into the beans to cut static, if your grinder maker allows it.
                3. Retention measured by comparing beans in with grounds out.
                4. A workflow settled that keeps retention under about half a gram.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written single-dose routine is in use with measured retention under about half a gram."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Weigh beans in and grounds out to measure your grinder's retention"
                - "Check the grinder manual on adding a drop of water to beans"
                - "Try a bellows or brush to clear the chute after each grind"
                - "Write the final single-dose routine on the brew card"
            - name: Filter paper and brewer comparison
              description: |-
                ## Purpose
                Cone and flat-bottom brewers, and thick or thin, bleached or unbleached papers, change flow rate and body enough to taste. Brewing the same bean through two brewers and two papers shows which combination suits your taste before you buy more gear.

                ## Milestones
                1. Two brewers or two paper types identified to compare.
                2. The same bean, dose and grind used for each brew.
                3. Brew time and taste logged for each combination.
                4. A preferred brewer and paper chosen as the default.

                ## Notes
                Unbleached papers often add a papery taste unless rinsed thoroughly. Rinse every paper with hot water before brewing.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four logged brews compare two brewers or papers on one bean and a default combination is chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose two brewers or two paper types to compare"
                - "Brew the same bean, dose and grind through each"
                - "Log brew time and taste for each combination"
                - "Set the winning brewer and paper as your default"
            - name: Decaf worth drinking at home
              description: |-
                ## Purpose
                Decaf has improved a great deal, and coffees decaffeinated by Swiss Water, sugarcane ethyl acetate or carbon dioxide methods can taste close to the original. Finding one you enjoy means you can have a proper cup in the evening, or offer guests a real choice.

                ## Milestones
                1. The main decaffeination methods and how they affect taste understood.
                2. Two specialty decafs bought from roasters you trust.
                3. Each decaf dialled in, as decaf often needs a different grind.
                4. One decaf chosen and kept in the freezer in single doses.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One specialty decaf is chosen after comparing two, with its grind setting logged and doses in the freezer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how Swiss Water, sugarcane and carbon dioxide decaf differ"
                - "Buy two specialty decafs in small bags"
                - "Dial in each decaf and log the grind setting"
                - "Freeze single doses of the decaf you prefer"
            - name: Deciding where the next upgrade money goes
              description: |-
                ## Purpose
                After a year of brewing most people want to spend something, and the usual mistake is a shinier brewer when the grinder is holding the cup back. Listing the faults in your current cups and matching each to the gear, water or skill that causes it points the money where it will be tasted.

                ## Milestones
                1. The three most common faults in your cups listed from the log.
                2. Each fault traced to grinder, brewer, water or technique.
                3. One upgrade, or a decision to spend nothing, chosen with its cost.
                4. A review of the cups written a month after any purchase.

                ## Notes
                Grinder first is a reliable rule. A better brewer rarely fixes uneven grinding.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One upgrade, or none, is chosen against faults listed from the log, and a follow-up note is written a month later."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three faults you notice most often in your log"
                - "Trace each fault to grinder, brewer, water or technique"
                - "Choose one upgrade or decide to spend nothing"
                - "Write a short note on the cups a month after any purchase"
            - name: Coffee for a brunch of eight guests
              description: |-
                ## Purpose
                Making eight good coffees one at a time while cooking is how a host ends up stuck at the machine. Planning a batch brew in a large brewer or thermal carafe, plus a decaf and dairy-free option, lets everyone get a good cup at once.

                ## Milestones
                1. Guest count, decaf needs and milk preferences known.
                2. A batch recipe scaled for about 1.5 litres and tested once.
                3. A thermal carafe or flask ready to keep it hot for an hour.
                4. Decaf and plant milk options on the table.

                ## Notes
                Most pour-over recipes scale up, but grind coarser for big batches or the brew will take too long and turn bitter.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tested batch recipe serves eight guests at once, with decaf and plant milk options, on the day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask guests about decaf and milk preferences"
                - "Scale your recipe to about 1.5 litres and test it once"
                - "Borrow or buy a thermal carafe if you do not have one"
                - "Grind the coffee and lay out the coffee station the night before"
            - name: Hosting a home cupping evening
              description: |-
                ## Purpose
                Tasting four coffees side by side with friends teaches more in an evening than months of single cups, and it makes a cheap, unusual night in. Running a simple cupping with numbered cups, spoons and score sheets turns coffee curiosity into something social.

                ## Milestones
                1. Four contrasting coffees chosen, such as a washed African, a natural, a Central American and a decaf.
                2. Cups, spoons, a timer and simple score sheets ready.
                3. Each coffee cupped blind and scored by every guest.
                4. Results compared and the group favourite noted in your log.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A cupping evening of four coffees is held with blind scores from every guest and the favourite recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a date and invite three to six friends"
                - "Buy four contrasting coffees in small bags"
                - "Print simple score sheets and number the cups"
                - "Reveal the coffees and record the group favourite"
            - name: Barista course or roastery tour booking
              description: |-
                ## Purpose
                A few hours with a trained barista corrects habits that videos miss, such as tamping posture or milk jug angle, and a roastery tour shows how roast choices shape the cup. Booking one gives you a dated goal and a list of questions to bring.

                ## Milestones
                1. Two or three local courses or tours compared on content, price and group size.
                2. One booked for a date within three months.
                3. A list of five questions from your own brewing written to bring.
                4. Notes from the session added to your log and one change made.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A barista course or roastery tour is attended and at least one change from it is recorded in the log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search for barista courses and roastery tours near you"
                - "Book the one that matches your method and budget"
                - "Write five questions from your own brewing to bring"
                - "Add notes from the session to your log"
            - name: Entering a home brewing competition
              description: |-
                ## Purpose
                Local and national brewing competitions, many built around the AeroPress, welcome home brewers and force you to refine one recipe until it is reliable under pressure. Entering gives a firm deadline for practice and a chance to taste how others brew.

                ## Milestones
                1. A competition found with entry rules, date and format noted.
                2. A competition recipe written and brewed at least twenty times.
                3. A travel brewing kit packed and tested away from home.
                4. The competition attended and lessons written up afterwards.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A competition is entered with a recipe practised at least twenty times and lessons written up afterwards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find a local or national home brewing competition and its rules"
                - "Write a competition recipe and brew it twenty times"
                - "Pack and test your kit away from your own kitchen"
                - "Write up what you learned within a week of the event"
            - name: Coffee starter kit for a beginner friend
              description: |-
                ## Purpose
                Friends who admire your coffee often ask what to buy, then end up with a blade grinder and stale beans. Putting together a small, sensible starter kit as a gift, with a hand grinder, simple brewer, fresh beans and a one-page recipe, gives them a good start for a fixed budget.

                ## Milestones
                1. A budget and your friend's preferred drink agreed or guessed.
                2. A burr hand grinder, a simple brewer and scale chosen within budget.
                3. Freshly roasted beans bought close to the giving date.
                4. A one-page recipe card written for their brewer.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A starter kit with grinder, brewer, fresh beans and a recipe card is given within the set budget."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask how your friend drinks coffee now"
                - "Choose a hand grinder and simple brewer within the budget"
                - "Ask the agent to draft a one-page recipe card for their brewer"
                - "Buy fresh beans in the week before giving the kit"
            - name: Good coffee in a small or shared kitchen
              description: |-
                ## Purpose
                Renters and flat sharers often have a corner of counter and no space for a machine and grinder. A compact setup, such as a hand grinder, an AeroPress or small dripper, a kettle and a tray that lifts away, gives café quality without taking over the kitchen.

                ## Milestones
                1. Available counter and cupboard space measured.
                2. A compact kit chosen that fits on one tray or shelf.
                3. Beans and gear stored away from shared-kitchen heat and steam.
                4. A full brew possible in under five minutes from the tray.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A full coffee kit fits on one tray or shelf and a brew can be made in under five minutes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure the counter and cupboard space you can use"
                - "Choose a compact brewer and grinder that fit on one tray"
                - "Store beans away from the oven and kettle steam"
                - "Time a full brew from tray to cup"
            - name: Travel and camping coffee kit
              description: |-
                ## Purpose
                Holiday rentals and campsites usually offer instant coffee or a tired filter machine. A packed travel kit, with a hand grinder, a light brewer, a small scale and pre-weighed doses, means a good cup every morning away without filling the bag.

                ## Milestones
                1. A travel brewer and hand grinder chosen for weight and durability.
                2. Doses for the trip weighed into small bags.
                3. A kit list written and kept with the bag.
                4. The kit tested at home with only what is packed.

                ## Notes
                Check airline rules on liquids and sharp items. Some burr grinders are questioned at security, so carry them in hold luggage if unsure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written kit list and a packed travel kit have been tested at home using only what is packed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a light brewer and hand grinder that pack well"
                - "Weigh doses for the trip into small sealed bags"
                - "Write a kit list and keep it in the travel bag"
                - "Brew a test cup at home using only the packed kit"
            - name: Caffeine cut-off and half-caf routine
              description: |-
                ## Purpose
                Better coffee often means more coffee, and an afternoon cup can still be in your system at bedtime. Setting a cut-off time and switching later cups to half-caf or decaf keeps the ritual while protecting sleep, and a weekly note shows whether it is working.

                ## Milestones
                1. Current cups a day and the time of the last one recorded for a week.
                2. A personal cut-off time chosen.
                3. Half-caf or decaf doses ready for any cup after the cut-off.
                4. Four weeks of notes on cups and sleep compared.

                ## Notes
                If you are pregnant, breastfeeding, have a heart condition or take medicines, ask your doctor or midwife what caffeine limit applies to you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written cut-off time is kept for four weeks, with weekly notes on cups and sleep."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note every cup and its time for one week"
                - "Choose your afternoon caffeine cut-off time"
                - "Mix half-caf doses of regular and decaf beans"
                - "Note this week's cups and how you slept @recurring(weekly:mon)"
            - name: Summer cold brew and iced pour-over
              description: |-
                ## Purpose
                Hot coffee loses its appeal in a heatwave, and shop iced coffee is expensive and often stale. Cold brew steeped overnight, and Japanese style iced pour-over brewed hot onto ice, give two very different summer drinks for the price of beans.

                ## Milestones
                1. A cold brew concentrate made with a coarse grind and a 12 to 18 hour fridge steep.
                2. An iced pour-over brewed with part of the water replaced by ice.
                3. The two compared for taste and strength.
                4. A summer recipe card written for each.

                ## Notes
                Keep cold brew in the fridge and use it within about a week to ten days. Label the jar with the date.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Written recipes for cold brew and iced pour-over are tested and kept for each summer."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Steep a coarse-ground batch of cold brew in the fridge overnight"
                - "Brew an iced pour-over with part of the water as ice"
                - "Write recipe cards for both drinks"
                - "Restart the cold brew jar when the warm weather starts @recurring(yearly)"
            - name: Better coffee for a small office or team
              description: |-
                ## Purpose
                Shared offices often run on a pod machine or a jar of instant, and people drift out to cafés. Proposing a simple batch brewer or filter setup, with a bean order, cleaning rota and shared cost, can lift the office cup for less than most people spend outside.

                ## Milestones
                1. Current spend and cups a day in the office estimated.
                2. A simple batch brewer and grinder option costed.
                3. A cleaning rota and bean order owner agreed.
                4. The setup running with a one-page brewing guide on the wall.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A shared office coffee setup is running with a costed plan, a named owner for beans and a posted cleaning rota."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count how many cups the office drinks on a normal day"
                - "Cost a batch brewer, grinder and monthly bean order"
                - "Agree a cleaning rota and who orders the beans"
                - "Post a one-page brewing guide beside the machine"
            - name: Weekday coffee in under five minutes
              description: |-
                ## Purpose
                Busy mornings are when good coffee habits collapse back into instant. Pre-weighing doses, filling the kettle the night before and keeping one simple recipe for weekdays means a good cup in five minutes, with the careful brewing saved for the weekend.

                ## Milestones
                1. A weekday recipe chosen that takes under five minutes start to finish.
                2. The week's doses weighed out in advance.
                3. Brewer, mug and filters laid out the night before.
                4. Five weekdays in a row with good coffee and no instant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five consecutive weekdays of home-brewed coffee made in under five minutes each, using pre-weighed doses."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a weekday recipe that takes under five minutes"
                - "Weigh the week's doses into tubes @recurring(weekly:sun)"
                - "Lay out brewer, filter and mug before bed"
                - "Time a weekday brew from kettle to cup"
            - name: Mineral water recipe from distilled water
              description: |-
                ## Purpose
                Experienced brewers often build their own water from distilled water and mineral concentrates, because it gives the same water every day and the right balance of hardness and buffer for coffee. Mixing a published recipe and comparing it with your filtered tap water shows how much water shapes the cup.

                ## Milestones
                1. One published brewing water recipe chosen, with its target hardness and alkalinity.
                2. Distilled or deionised water and food-grade mineral concentrates bought.
                3. A batch mixed and labelled with date and recipe.
                4. The same coffee brewed with recipe water and filtered tap water and compared.

                ## Notes
                Use only food-grade minerals and keep concentrates labelled and away from children. Recipe water may still be too soft for some espresso machines, so check the maker's minimum.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A labelled batch of recipe water is made and compared in a logged side-by-side brew with filtered tap water."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose one published brewing water recipe"
                - "Buy distilled water and food-grade mineral concentrates"
                - "Mix a fresh four litre batch of brewing water @recurring(monthly:6)"
                - "Brew one coffee with recipe water and tap water side by side"
            - name: Measuring extraction with a TDS refractometer
              description: |-
                ## Purpose
                A refractometer measures total dissolved solids, which with dose and water weight gives extraction yield, the number baristas use to check a recipe objectively. Using one for a month alongside your tasting shows where your palate and the numbers agree, and where they do not.

                ## Milestones
                1. A refractometer bought or borrowed and zeroed with distilled water.
                2. A sampling method followed, with samples cooled before reading.
                3. Twenty brews logged with TDS and calculated extraction yield.
                4. Your preferred extraction range noted for filter and, if used, espresso.

                ## Notes
                Numbers support taste rather than replacing it. A cup inside the textbook range can still taste flat if the coffee is old.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twenty logged brews with TDS and extraction yield, and a written preferred range for your main method."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Borrow or buy a coffee refractometer"
                - "Zero it with distilled water before each session"
                - "Log TDS and extraction yield for twenty brews"
                - "Write down the range where your best-tasting cups fall"
            - name: Home roasting the first ten batches
              description: |-
                ## Purpose
                Roasting your own green coffee shows exactly how roast development changes flavour, and green beans keep for months. Starting with a small roaster or a converted popcorn machine, ten logged batches teach first crack, development time and how to avoid baked or scorched coffee.

                ## Milestones
                1. A safe roasting spot chosen with good ventilation and nothing flammable nearby.
                2. Green coffee from one origin bought in a 2 to 5 kg amount.
                3. Ten batches roasted with time to first crack and drop time logged.
                4. The best batch compared with a professional roast of a similar coffee.

                ## Notes
                Roasting makes smoke and loose chaff that can catch fire. Never leave a roaster unattended, roast outdoors or under strong extraction, and keep a fire blanket nearby.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Ten home roasts are logged with first crack and drop times, and the best is compared with a professional roast."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a ventilated roasting spot away from anything flammable"
                - "Buy green coffee from one origin in a small sack"
                - "Roast ten batches, logging first crack and drop times"
                - "Taste your best batch beside a professional roast of a similar bean"
---

# Specialty Coffee Brewing

This area is for anyone who wants the coffee at home to be as good as, or better than, the cup from their favourite café, whether that means a careful pour-over at the weekend or a dialled-in espresso before work. It starts with the foundations (a brew method, a burr grinder, a scale and kettle, water that suits coffee, fresh beans and a written recipe with a log), then the routines that keep gear clean and beans fresh, the core skills of extraction, pour-over, espresso and milk, the decisions about house coffee, machines, subscriptions and decaf, the dated occasions from brunch to competitions, versions for small kitchens, travel, offices and caffeine limits, and finally the water recipes, refractometer readings and home roasting of an experienced brewer.

What repeats is a weekly grinder brush-out and Friday backflush, a Saturday tasting brew, a monthly bean order, log review and spend check, a quarterly origin rotation and burr clean, and a yearly espresso service. The Purchase decision, Metrics log and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
