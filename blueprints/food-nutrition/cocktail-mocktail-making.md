---
id: food-nutrition.cocktail-mocktail-making
name: Cocktail & Mocktail Making
description: "A home bar built from eight tools and five bottles, fresh citrus and syrup routines, the core techniques for sours, stirred drinks and alcohol-free serves, and batched drinks for parties, gifts and every kind of guest."
category: personal
version: 1.0.0
tags: [food-nutrition, cocktail-mocktail-making, everyone, home-bar, classic-cocktails, mocktails, low-alcohol, batching]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - habit-tracker
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cocktail & Mocktail Making
          description: "Building a home bar and learning classic cocktails, low and no alcohol drinks and batch serves for entertaining."
          projects:
            - name: Eight-tool home bar starter kit
              description: |-
                ## Purpose
                Most classic cocktails need only eight tools: a two-piece shaker tin, a double-sided jigger, a Hawthorne strainer, a fine strainer, a long bar spoon, a mixing glass, a hand citrus press and a Y-peeler. Buying these once, in solid stainless steel rather than as a gift-box set padded with gadgets you will never use, means every recipe in this area can be made the evening you find it.

                ## Milestones
                1. A list of the drinks you most want to make, with the tools each one needs.
                2. Two or three options for each tool compared on price and build, with tins that seal without sticking.
                3. All eight tools bought or borrowed and stored together.
                4. A first shaken drink and a first stirred drink made with the new kit.

                ## Notes
                Start from the **Purchase decision** template. Two-piece tins seal and release more easily than three-piece cobbler shakers, which tend to leak and jam once they are cold.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All eight core tools are in the house, kept together, and have been used to make one shaken and one stirred drink."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down five drinks you would most like to make at home"
                - "List the tools each of those five drinks needs"
                - "Compare two-piece shaker tins and jiggers from two or three shops"
                - "Buy the eight core tools and store them in one place"
            - name: Five-bottle core spirits shelf
              description: |-
                ## Purpose
                Buying a bottle for every recipe you read leads to a cupboard of half-used liqueurs and nothing to make a daiquiri with. Starting from five bottles chosen around the drinks you already enjoy, often a gin, a whisky or bourbon, a light rum, a tequila and a sweet vermouth, covers dozens of classics and keeps the spend in check.

                ## Milestones
                1. The base spirits in your three favourite drinks identified.
                2. Five bottles chosen, each covering at least four classic recipes.
                3. A price ceiling per bottle agreed before shopping.
                4. The shelf stocked and each bottle's opening date written on its label.

                ## Notes
                Mid-priced bottles made for mixing usually beat premium sipping spirits in a cocktail. Keep the expensive bottle for tasting neat.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Five spirits are on the shelf, each matched in writing to at least four drinks it makes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the base spirit in each of your three favourite drinks"
                - "Match each candidate bottle to four classics it can make"
                - "Set a price ceiling per bottle before going to the shop"
                - "Buy the five bottles and date each label as you open it"
                - "Review which bottles actually got used and adjust the shelf @recurring(yearly)"
            - name: Accurate measuring with a jigger
              description: |-
                ## Purpose
                Free pouring by eye is the commonest reason a home drink tastes different every time, and five millilitres too much lime can tip a sour from bright to harsh. Learning to fill a jigger to the brim at eye level, and checking your pours against a kitchen scale, makes every recipe repeatable and every adjustment meaningful.

                ## Milestones
                1. The marked lines on your jigger checked against a kitchen scale using water.
                2. Ten practice pours of each size landing within two millilitres of target.
                3. Your recipes converted to the units your jigger shows.
                4. Every ingredient measured, including syrups and juice, as a matter of habit.

                ## Notes
                Recipes switch between millilitres, centilitres and ounces. Pick one unit for your spec book and convert everything into it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten consecutive water pours of each jigger size land within two millilitres of target on a kitchen scale."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Weigh water poured to each line of your jigger on a kitchen scale"
                - "Practise ten pours of each size and note how far off they are"
                - "Choose one unit, millilitres or ounces, for all your recipes"
                - "Convert three favourite recipes into that unit"
            - name: Household drinking guideline and limits
              description: |-
                ## Purpose
                Health services publish low-risk drinking guidelines in standard drinks or units, and a generous home-made cocktail can hold two or three of them. Looking up your country's guideline, learning how many standard drinks your usual recipes contain and agreeing a household limit before the bar fills up keeps the hobby about flavour rather than volume.

                ## Milestones
                1. Your health service's low-risk guideline and its definition of a standard drink written down.
                2. The standard drinks in five of your regular recipes worked out.
                3. A weekly limit and at least two alcohol-free days agreed for the household.
                4. Any medicines or health conditions that rule alcohol out checked with a pharmacist or doctor.

                ## Notes
                This organises your health service's guidance; it is not a safe amount for everyone. Pregnancy, some medicines and some conditions mean no alcohol at all.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written household limit sits inside the bar cupboard, alongside the standard drink count of five regular recipes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your health service's low-risk drinking guideline"
                - "Work out the standard drinks in five recipes you make often"
                - "Agree a weekly limit and alcohol-free days with your household"
                - "Ask a pharmacist whether any regular medicine interacts with alcohol"
                - "Revisit the household limit and recipe counts @recurring(yearly)"
            - name: Home ice supply for every drink
              description: |-
                ## Purpose
                Ice is the ingredient people forget, yet it chills, dilutes and sets the texture of every shaken and stirred drink. Freezer cubes that smell of last week's curry, or a single tray for a party of eight, spoil drinks faster than cheap gin. Setting up trays for large cubes, a store of standard cubes and a way to crush ice gives you the three forms most recipes ask for.

                ## Milestones
                1. Two silicone trays for large cubes and a lidded box for standard cubes in the freezer.
                2. A canvas bag and mallet, or a sturdy blender, ready for crushed ice.
                3. Freezer space cleared and ice kept away from strong-smelling food.
                4. Enough ice for eight drinks in stock at any time.

                ## Notes
                Allow around 200 grams of ice per drink for mixing and serving, more for crushed-ice drinks. Bags of shop ice are worth buying before any party.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The freezer holds large-cube, standard and crushing ice in sealed containers, enough for at least eight drinks at any time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Clear a freezer shelf or drawer for ice only"
                - "Buy two large-cube silicone trays and a lidded ice box"
                - "Set up a canvas bag and mallet for crushed ice"
                - "Refill the trays and bag the frozen cubes @recurring(weekly:thu)"
            - name: Glassware for four drink families
              description: |-
                ## Purpose
                Four shapes cover nearly every classic: a coupe or Nick and Nora for drinks served up, a rocks glass, a highball and a wine-style glass for spritzes. Choosing them deliberately, in sizes that suit a standard recipe once dilution is added, avoids the half-empty giant coupe and the overflowing tiny one.

                ## Milestones
                1. The drinks you make most often grouped into served up, on the rocks, long and spritz.
                2. Glass capacities checked against your usual recipe volumes plus dilution.
                3. Four to six of each chosen shape bought, with cupboard space measured first.
                4. One or two spares kept for breakages.

                ## Notes
                Start from the **Purchase decision** template. Coupes of around 150 to 200 millilitres fit most shaken drinks once dilution is added.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four to six glasses in each of four shapes are in the cupboard, each sized to fit its usual recipe with dilution."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sort your regular drinks into up, rocks, long and spritz"
                - "Measure the volume of a finished drink in each group"
                - "Measure the cupboard space you have for glasses"
                - "Buy four to six glasses in each of the four shapes"
            - name: Bar station in a cupboard or trolley
              description: |-
                ## Purpose
                Making a drink is slow and messy when the jigger is in one drawer, the bitters behind the cereal and the syrups lost in the fridge door. Giving the bar one home, a cupboard shelf, a trolley or a tray, laid out in the order you work, cuts a five-minute hunt to thirty seconds and keeps bottles away from children and heat.

                ## Milestones
                1. One location chosen, out of direct sunlight and away from the cooker.
                2. Tools, bitters and garnishes arranged in the order you use them.
                3. Bottles grouped by spirit with the most used at the front.
                4. A child-proof catch or high shelf in place if children live in or visit the house.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tool, bottle and bitters bottle lives in one station and a classic drink can be made without leaving it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one spot away from sunlight and the cooker for the bar"
                - "Lay out tools left to right in the order you use them"
                - "Group bottles by spirit with the most used at the front"
                - "Fit a catch or move bottles higher if children are around"
            - name: House spec book of tested recipes
              description: |-
                ## Purpose
                Recipes found online disagree wildly, and the version you perfected last month is easy to forget. A spec book holding your own tested measures, glass, ice, method and garnish for each drink turns one good evening into a drink you can repeat, scale up for a party or hand to a friend behind the bar.

                ## Milestones
                1. A single format chosen, a notebook or a shared document, with fields for spec, glass, ice, method and garnish.
                2. Ten drinks written up from your own tested versions, not copied recipes.
                3. Each entry dated with when it was last made and any tweak.
                4. A printed or phone-friendly copy kept at the bar.

                ## Notes
                Pour in the order the spec lists: cheapest ingredients first, spirit last, so a mistake wastes juice rather than whisky.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spec book holds at least ten drinks in one format, each tested by you and dated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a notebook or document for the spec book"
                - "Ask the agent to lay out your tested recipes in one consistent format"
                - "Write up the first ten drinks from versions you have tested"
                - "Keep a copy wherever you mix drinks"
            - name: Ten-classic tasting flight to find your palate
              description: |-
                ## Purpose
                Most people know whether they like a drink but not why, which makes choosing new recipes guesswork. Making ten classics across the main families, from a daiquiri and a margarita to a martini, a Negroni and a spritz, and scoring each one shows whether you lean sour, bitter, spirit-forward or long, and points the whole hobby in the right direction.

                ## Milestones
                1. Ten classics made over several evenings from standard published specs.
                2. Each one scored out of ten with a line on what you liked or did not.
                3. The drink families ranked from favourite to least liked.
                4. Three next drinks chosen from the top two families.

                ## Notes
                Spread the flight across several evenings, or make half-size versions to share. Ten full drinks in one session is not a tasting.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten classics scored with notes, and a written ranking of drink families with three next recipes chosen."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick standard published specs for ten classics across the families"
                - "Make two or three of the classics each weekend and score them"
                - "Rank the drink families by your average scores"
                - "Choose three new recipes from your two favourite families"
            - name: Fresh citrus buying and juicing routine
              description: |-
                ## Purpose
                Bottled lime and lemon juice tastes flat and bitter in a sour, and juice squeezed the day before has already lost its brightness. Buying citrus to match the drinks you plan, juicing on the day and straining it through a fine sieve is the single change that most lifts home cocktails.

                ## Milestones
                1. A rough rule for how many limes and lemons a weekend of drinks needs.
                2. Juice pressed on the day and strained, never poured from a squeezy bottle.
                3. Leftover juice labelled with the time and used or binned within a day.
                4. Peels kept for twists or cordial rather than thrown away.

                ## Notes
                An average lime gives around 25 to 30 millilitres of juice, so most sours need about one lime. Roll the fruit firmly on the board before pressing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight weekends running, every citrus drink was made with juice pressed the same day."
                cadence: rolling
              tasks:
                - "Work out how many limes and lemons a typical weekend needs"
                - "Buy limes and lemons for the weekend's drinks @recurring(weekly:fri)"
                - "Press and strain juice on the day you serve it"
                - "Label leftover juice with the time it was squeezed"
            - name: Syrup batches with dated labels
              description: |-
                ## Purpose
                Simple syrup, rich demerara syrup and honey syrup appear in most sweetened cocktails and mocktails, and all of them grow mould if forgotten in the fridge. Making small batches on a fixed day, in clean bottles with the ratio and date written on, means syrup is always ready and never past it.

                ## Milestones
                1. Three base syrups chosen, with their ratios written on a card: 1 to 1 simple, 2 to 1 demerara and 3 to 1 honey.
                2. Clean, sealable bottles and a marker kept for syrup only.
                3. Each batch labelled with type, ratio and date made.
                4. A keep-by rule for each syrup, with anything cloudy binned on sight.

                ## Notes
                Batches of around 250 millilitres are plenty for most households. Rich syrups keep longer than 1 to 1 syrup.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of syrup batches made on schedule, each labelled with ratio and date, with nothing used past its keep-by date."
                cadence: rolling
              tasks:
                - "Write the ratio for each of your three base syrups on a card"
                - "Set aside two clean bottles and a marker for syrups only"
                - "Make a fresh bottle of simple syrup and date the label @recurring(monthly:9)"
                - "Bin any syrup that is cloudy or past its keep-by date"
            - name: Bottle inventory and reorder list
              description: |-
                ## Purpose
                Running out of vermouth on the night friends arrive, or buying a third bottle of Campari you already had, both come from not knowing what is open. A one-page inventory with each bottle's level and a short reorder list makes shopping quick and stops duplicate buys.

                ## Milestones
                1. Every open and sealed bottle listed with spirit type and rough fill level.
                2. A reorder level set for the bottles you use most.
                3. A reorder list kept on your phone and checked before every shop.
                4. Six monthly counts completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly inventory counts recorded, with the core bottles never running out in that time."
                cadence: rolling
              tasks:
                - "List every bottle in the bar with its rough fill level"
                - "Mark a reorder level for your five most used bottles"
                - "Count open bottles and update the reorder list @recurring(monthly:21)"
                - "Check the reorder list before any shop that sells spirits"
            - name: Vermouth and fortified wine freshness rule
              description: |-
                ## Purpose
                Vermouth, sherry and other aromatised wines start to oxidise once opened, and on a warm shelf they turn a Manhattan or martini stale within weeks. Keeping them in the fridge, buying smaller bottles and writing the opening date on each removes one of the commonest home bar faults.

                ## Milestones
                1. All open vermouths and sherries moved into the fridge.
                2. Each bottle labelled with the date it was opened.
                3. Half bottles chosen for anything you use slowly.
                4. A keep-by rule written for each, with stale bottles moved to cooking or binned.

                ## Notes
                Many bartenders aim to finish refrigerated vermouth within a month or two. Taste it neat now and then: if it tastes dull or sour, replace it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open vermouth and sherry is in the fridge with an opening date, and none is older than your written keep-by rule."
                cadence: rolling
              tasks:
                - "Move open vermouth and sherry bottles into the fridge"
                - "Write the opening date on each bottle with a marker"
                - "Switch to half bottles for anything that lasts past two months"
                - "Check the dates on open vermouth and sherry bottles @recurring(monthly:14)"
            - name: Bar spend against a monthly budget
              description: |-
                ## Purpose
                Premium spirits, specialist liqueurs and bitters add up quickly, and a home bar can quietly cost more than going out. Logging every bar purchase against a monthly figure shows where the money goes and when a new bottle should wait.

                ## Milestones
                1. A monthly bar budget agreed with anyone you share money with.
                2. Every bottle, mixer and tool purchase logged with date and price.
                3. Cost per drink worked out for three regular recipes.
                4. Three months of spend compared with the budget.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of bar purchases logged and compared with an agreed budget, with cost per drink worked out for three recipes."
                cadence: rolling
              tasks:
                - "Agree a monthly bar budget with anyone you share costs with"
                - "Log every bottle, mixer and tool you buy with its price"
                - "Work out the cost per drink of three recipes you make often"
                - "Add up the month's bar spend against the budget @recurring(monthly:28)"
            - name: Windowsill mint and herb garnish supply
              description: |-
                ## Purpose
                Mojitos, juleps, smashes and plenty of mocktails need fresh mint or basil, and supermarket packets wilt within days. Two or three pots on a bright windowsill, picked often so they bush out, give a steady supply of garnish and muddling herbs for a fraction of the price.

                ## Milestones
                1. Pots of mint, basil and one other herb such as rosemary or thyme on a bright sill.
                2. Mint kept in its own pot so it does not crowd the others.
                3. Herbs picked often enough to stay bushy rather than flowering.
                4. Garnish sprigs available for every herb drink for two months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight weeks, every mint or basil drink made at home used herbs picked from your own pots."
                cadence: rolling
              tasks:
                - "Buy healthy pots of mint and basil from a garden centre"
                - "Repot the mint into its own container"
                - "Water and pinch out the herb pots @recurring(weekly:wed)"
                - "Clap mint between your palms before garnishing to release the aroma"
            - name: Bar tool cleaning and care
              description: |-
                ## Purpose
                Sticky shaker tins, a jigger crusted with syrup and a strainer spring full of mint carry flavours from one drink to the next and draw fruit flies. Rinsing every tool straight after use and giving the whole kit a monthly deep clean keeps flavours clean and the steel free of rust.

                ## Milestones
                1. A rinse-and-dry routine followed after every session.
                2. A monthly deep clean of tins, strainers, bar spoon and ice trays.
                3. Wooden muddler and cutting board oiled, or replaced when cracked.
                4. A short checklist taped inside the bar cupboard.

                ## Notes
                Start from the **Operational checklist** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly deep cleans completed and ticked off, with every tool rinsed and dried after each session in between."
                cadence: rolling
              tasks:
                - "Write a five-step after-session rinse and dry checklist"
                - "Tape the checklist inside the bar cupboard"
                - "Deep clean shaker seals, strainer springs and ice trays @recurring(monthly:3)"
                - "Oil the wooden muddler and cutting board"
            - name: Alcohol-free weeknight drink rotation
              description: |-
                ## Purpose
                Alcohol-free days are easier to keep when there is something better than squash or water to reach for at six o'clock. Choosing one alcohol-free drink each week, with its syrup or cordial made on Monday, gives weeknights a ritual glass that feels like a treat rather than a sacrifice.

                ## Milestones
                1. A shortlist of eight alcohol-free drinks you like, from shrub sodas to tea highballs.
                2. One drink chosen each week and its syrup or cordial made in advance.
                3. The drink served in a proper glass with ice and garnish.
                4. Eight weeks of the rotation completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks, each with a chosen alcohol-free drink prepared in advance and made on alcohol-free days."
                cadence: rolling
              tasks:
                - "List eight alcohol-free drinks you would happily drink on a weeknight"
                - "Choose this week's alcohol-free drink and make its syrup @recurring(weekly:mon)"
                - "Keep tonic, soda and ginger beer chilled for weeknights"
                - "Serve it in a good glass with ice and a garnish"
            - name: Tasting notes and tweak log
              description: |-
                ## Purpose
                Five millilitres of syrup or a different gin is often all that separates a decent drink from your best version, and those findings vanish unless written down. A weekly note of what you made, how it tasted and what you changed builds the evidence that sharpens your spec book.

                ## Milestones
                1. A log with date, drink, spec used, score and one tweak to try next.
                2. Notes written for every new recipe tried.
                3. Each successful tweak copied into the spec book.
                4. Twelve weeks of entries.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of tasting notes recorded, with at least three tweaks carried into the spec book."
                cadence: rolling
              tasks:
                - "Set up a log with date, drink, spec, score and next tweak"
                - "Write up notes on the week's drinks @recurring(weekly:sun)"
                - "Copy any tweak that worked into the spec book"
            - name: Seasonal house menu of four drinks
              description: |-
                ## Purpose
                Rhubarb in spring, berries and cucumber in summer, apples and pears in autumn, citrus and spice in winter: drinks taste better when they follow the season. A four-drink house menu rewritten each quarter, always with at least one alcohol-free option, keeps the bar interesting and makes buying for it simpler.

                ## Milestones
                1. A four-drink menu written for the current season, one of them alcohol-free.
                2. Ingredients for the menu sourced and its syrups prepared.
                3. The menu written on a card or small board by the bar.
                4. Four seasonal menus completed over a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four seasonal menus written in a year, each with four tested drinks including at least one alcohol-free option."
                cadence: cyclic
              tasks:
                - "Note which fruit, herbs and spices are in season now"
                - "Rewrite the four-drink house menu for the new season @recurring(quarterly)"
                - "Test each new drink once before it goes on the menu"
                - "Write the menu on a card by the bar"
            - name: Shaking and stirring technique
              description: |-
                ## Purpose
                Shaking chills, dilutes and aerates, which suits drinks with citrus, cream or egg; stirring chills and dilutes while keeping spirit-forward drinks silky and clear. Practising both properly, with a full tin or glass of ice, the right time and a taste at the end, removes the main cause of watery or warm drinks.

                ## Milestones
                1. The rule learned: shake drinks with juice, dairy or egg, stir drinks made only of spirits and fortified wine.
                2. A hard twelve-second shake practised with a tin full of ice.
                3. A thirty-second stir practised until the bar spoon turns smoothly without splashing.
                4. Dilution measured by weighing the drink before and after mixing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A shaken and a stirred drink weighed before and after mixing, each showing between a fifth and a third extra volume from dilution."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Watch a reputable bartending video on shaking and stirring"
                - "Practise a twelve-second shake with a tin full of ice"
                - "Practise stirring with the bar spoon for thirty seconds"
                - "Weigh a drink before and after mixing to see the dilution"
            - name: Sours and the spirit, citrus and sugar ratio
              description: |-
                ## Purpose
                The daiquiri, margarita, whisky sour, gimlet and dozens of other drinks follow one pattern: two parts spirit, one part citrus and roughly three quarters of a part syrup. Learning that ratio and making five sours with it gives you a method for inventing drinks rather than a list of recipes to memorise.

                ## Milestones
                1. The basic sour ratio written at the front of your spec book.
                2. Five sours made with different spirits: rum, tequila, whisky, gin and brandy.
                3. Sweetness and acidity adjusted by taste to your own preference.
                4. One new sour invented by swapping a syrup or spirit.
              priority: high
              deadlineOffsetDays: 42
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five sours with different base spirits made from one written ratio, plus one original variation recorded in the spec book."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the basic sour ratio at the front of your spec book"
                - "Make a classic daiquiri and adjust it until you like the balance"
                - "Make sours with tequila, whisky, gin and brandy using the same ratio"
                - "Invent one variation by swapping the syrup or spirit"
            - name: Stirred spirit-forward classics
              description: |-
                ## Purpose
                The martini, Manhattan, Negroni and old fashioned are short, strong and unforgiving: with no juice to hide behind, the ratio, dilution and temperature show at once. Working through these four, noting how each changes with a different vermouth or bitters, builds the palate and technique for every stirred drink that follows.

                ## Milestones
                1. Each of the four classics made to a standard published spec.
                2. Two vermouth ratios of the martini and Manhattan compared side by side.
                3. The old fashioned's sugar and bitters adjusted to taste.
                4. Your preferred specs for all four written in the spec book.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Preferred specs for the martini, Manhattan, Negroni and old fashioned recorded after comparing at least two variations of each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Chill the glasses in the freezer before making stirred drinks"
                - "Make a Negroni and an old fashioned to standard specs"
                - "Compare a dry and a wetter martini side by side in half measures"
                - "Write your preferred version of each drink in the spec book"
            - name: Highballs that stay fizzy
              description: |-
                ## Purpose
                A gin and tonic or whisky highball goes flat when warm mixer meets small ice in a warm glass. Learning the details bartenders rely on, a chilled glass packed with large cubes, cold spirit, mixer from a fresh small bottle poured down a bar spoon and one gentle lift, keeps long drinks lively to the last sip.

                ## Milestones
                1. Glasses and mixers chilled before use.
                2. Small bottles or cans of mixer bought instead of large ones that go flat.
                3. The pour-down-the-spoon method practised.
                4. Three highballs perfected: a gin and tonic, a whisky highball and a paloma.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three highballs made with a chilled glass, cold mixer and full ice, each still noticeably fizzy after ten minutes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Chill highball glasses and mixer bottles before making a drink"
                - "Switch to small bottles or cans of tonic and soda"
                - "Pour the mixer gently down a bar spoon and lift once"
                - "Make a gin and tonic, a whisky highball and a paloma"
            - name: Egg white and aquafaba foams
              description: |-
                ## Purpose
                A silky foam on a whisky sour or pisco sour comes from egg white or aquafaba, the liquid from a tin of chickpeas, shaken hard without ice and then again with it. Learning the dry shake, and how to choose the safer option for each guest, adds a whole family of drinks to your repertoire.

                ## Milestones
                1. Dry shake and reverse dry shake both tried and compared.
                2. Aquafaba measured and used as a vegan alternative.
                3. Pasteurised egg white sourced for guests who should avoid raw egg.
                4. Every drink containing egg flagged in the spec book so guests can be told.

                ## Notes
                Raw egg carries a small food poisoning risk. Offer pasteurised egg white or aquafaba to pregnant guests, older people and anyone with weakened immunity, and always say when a drink contains egg, as it is a common allergen.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A foamed sour made with egg white and one with aquafaba, with every egg drink flagged in the spec book."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy a carton of pasteurised egg white or save the liquid from a tin of chickpeas"
                - "Make a whisky sour with a dry shake, then with a reverse dry shake"
                - "Compare the foam from egg white and aquafaba side by side"
                - "Mark every drink that contains egg in the spec book"
            - name: Balancing drinks by taste and dilution
              description: |-
                ## Purpose
                Lemons vary in sourness, syrups in sweetness and spirits in strength, so even a perfect spec sometimes needs adjusting. Learning to taste a drink with a straw before it is strained, and knowing whether it needs sugar, acid, dilution or a drop of salt, is the skill that separates following recipes from making drinks.

                ## Milestones
                1. A habit of tasting with a straw before every strain.
                2. One drink deliberately made too sweet, too sour and too strong, then corrected.
                3. A saline solution made and tried in a sour and a Negroni.
                4. A short balance checklist written in the spec book.

                ## Notes
                Bartenders usually use a 20 percent salt solution a couple of drops at a time. It brightens flavour without tasting salty.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three deliberately unbalanced drinks corrected by taste, with a written balance checklist in the spec book."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Taste every drink with a straw before straining it"
                - "Make a sour too sweet on purpose and correct it with lime"
                - "Make a small dropper bottle of saline solution"
                - "Write a four-line balance checklist in the spec book"
            - name: Citrus twists and garnishes that add aroma
              description: |-
                ## Purpose
                Expressed orange oil over an old fashioned or lemon over a martini changes the first sip as much as any ingredient. Practising clean twists with a Y-peeler, expressing the oils properly and drying citrus wheels in a low oven gives drinks aroma and a finished look without fiddly decoration.

                ## Milestones
                1. Wide twists cut with no bitter white pith.
                2. Oils expressed over the glass and the rim wiped with the peel.
                3. A batch of dried citrus wheels made and stored airtight.
                4. Each drink's garnish noted in the spec book.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Ten clean, pith-free twists cut in a row and a jar of dried citrus wheels made and stored."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Practise cutting ten wide twists with a Y-peeler"
                - "Express a twist over a drink and wipe it around the rim"
                - "Dry thin orange wheels in a low oven for a few hours"
                - "Store the dried wheels in an airtight jar"
            - name: Bitters side-by-side tasting
              description: |-
                ## Purpose
                Bitters are the seasoning of cocktails, yet most people own one bottle and have never tasted it on its own. Tasting several in soda water side by side, then in the same old fashioned, teaches what aromatic, orange and other bitters each add and which are worth buying.

                ## Milestones
                1. Three or four bitters tasted in soda water.
                2. The same old fashioned made with each and compared.
                3. A tasting note written for each bitters.
                4. One bitters added to the bar, or dropped, on the strength of the tasting.

                ## Notes
                Bitters are concentrated alcoholic extracts, so a few dashes add a little alcohol. Check with guests who avoid alcohol completely before using them in a mocktail.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Tasting notes for at least three bitters, each tried in soda and in an old fashioned, with a buy or skip decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Borrow or buy three different bitters, in miniature bottles if possible"
                - "Add two dashes of each to a glass of soda water and taste"
                - "Make the same old fashioned with each of the bitters"
                - "Write a one-line tasting note for each bottle"
            - name: Building body and bite in alcohol-free drinks
              description: |-
                ## Purpose
                Alcohol brings warmth, weight and a dry finish, so mocktails made from juice and syrup alone often taste like sweet squash. Learning the alternatives, strong tea for tannin, ginger and chilli for heat, verjus and shrubs for acidity, and a pinch of salt with a little bitterness from tonic or grapefruit for depth, makes alcohol-free drinks grown-up rather than sugary.

                ## Milestones
                1. Five techniques for body and bite each tried in one drink.
                2. A strong tea syrup or cold-brewed tea made and used.
                3. A shrub or verjus drink compared with a juice-based one.
                4. Three alcohol-free drinks in the spec book that adults ask for again.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tested alcohol-free drinks using tea, spice or acid in place of alcohol written into the spec book."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Make a strong black tea syrup and try it in a long drink"
                - "Add a slice of fresh ginger or chilli to a soda-based drink"
                - "Compare a shrub and soda with a plain juice and soda"
                - "Write the three best alcohol-free drinks into the spec book"
            - name: Non-alcoholic spirits trial
              description: |-
                ## Purpose
                Non-alcoholic gins, aperitifs and spirit alternatives range from convincing to expensive flavoured water, and a bottle can cost as much as the real thing. Trying three in the same drinks, ideally from miniatures or a bottle shared with a friend, before committing to a full bottle saves money and finds one that earns its shelf space.

                ## Milestones
                1. Three alcohol-free spirits shortlisted from reviews or a shop tasting.
                2. Each tried with tonic and in one cocktail-style drink.
                3. Each scored on flavour, body and price per serve.
                4. One bought for the bar, or the category ruled out in favour of other methods.

                ## Notes
                Start from the **Purchase decision** template. Some products sold as alcohol-free contain traces of alcohol, so check the label if someone avoids it completely.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three non-alcoholic spirits scored in the same two drinks, with one bought or the category ruled out in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three non-alcoholic spirits from reviews"
                - "Buy miniatures or split full bottles with a friend for the trial"
                - "Try each with tonic and in one cocktail-style drink"
                - "Score each on flavour, body and price per serve"
            - name: Home carbonation system choice
              description: |-
                ## Purpose
                Soda water and tonic are the most used ingredients in many home bars, and large plastic bottles go flat within days of opening. Comparing a countertop carbonator, a soda siphon and simply buying small cans, on running cost, fizz and cupboard space, settles whether carbonating at home is worth it for you.

                ## Milestones
                1. Weekly use of soda and tonic estimated in litres.
                2. Three options compared on purchase price, gas or refill cost and fizz level.
                3. Running cost per litre worked out for each.
                4. A decision recorded and the chosen option in use.

                ## Notes
                Carbonate only what the manufacturer allows. Many countertop machines are made for water only, and carbonating juice or spirits in them can damage the bottle or spray sticky liquid across the kitchen.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three soda options with cost per litre, and the chosen option in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate how many litres of soda and tonic you use a week"
                - "Compare a countertop carbonator, a soda siphon and small cans"
                - "Work out the running cost per litre for each option"
                - "Record the decision and put the chosen option in place"
            - name: Low-alcohol versions of your favourite drinks
              description: |-
                ## Purpose
                Many classic drinks have a lighter cousin: a spritz instead of a Negroni, a sherry cobbler, a vermouth and tonic, or a half-measure highball topped up long. Rewriting your three favourites as low-alcohol versions gives you drinks for long afternoons and early evenings that still taste deliberate.

                ## Milestones
                1. Your three most made drinks listed with their standard drink count.
                2. A lower-alcohol version of each designed around vermouth, sherry, aperitif wine or a smaller pour.
                3. Each tested against the original and adjusted.
                4. The new versions in the spec book with their lower standard drink count.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three low-alcohol versions of favourite drinks tested and written in the spec book, each with a lower standard drink count than the original."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List your three most made drinks with their standard drink count"
                - "Design a version of each built on vermouth, sherry or a smaller pour"
                - "Taste each new version beside the original"
                - "Add the low-alcohol versions to the spec book with their standard drink counts"
            - name: Blind comparison before upgrading a spirit
              description: |-
                ## Purpose
                Price and branding influence taste more than most people admit, especially once a spirit is mixed. Tasting three gins or rums at different prices blind, both neat and in the same simple drink, shows whether the expensive bottle actually earns its place in your cocktails.

                ## Milestones
                1. Three bottles at different prices chosen in one category.
                2. Someone else pouring them into numbered glasses so you cannot tell which is which.
                3. Each tasted neat with a drop of water and in the same simple drink.
                4. A decision on which bottle to keep buying, with its cost per drink noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A blind comparison of three bottles in one category recorded, with the bottle to keep buying chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose one spirit category and three bottles at different prices"
                - "Ask someone to pour them blind into numbered glasses"
                - "Taste each neat with a drop of water and in the same simple drink"
                - "Record the winner and its cost per drink"
            - name: Lower-sugar rewrites of house drinks
              description: |-
                ## Purpose
                Sweet liqueurs, juices and generous syrups can put more sugar in a cocktail than a can of cola, which matters to anyone watching sugar or calories. Rewriting your sweetest house drinks with less syrup, balanced by more acidity, bitterness or dilution, keeps them enjoyable with noticeably less sugar.

                ## Milestones
                1. The sugar sources in each house drink listed.
                2. Three drinks remade with a quarter less syrup and rebalanced by taste.
                3. Juice-heavy mocktails rebuilt with tea, soda or verjus.
                4. The lower-sugar versions replacing the old specs in the spec book.

                ## Notes
                Syrups made with sugar alternatives behave differently from sugar. Test them in small amounts, as some taste bitter or thin when cold.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three house drinks rebalanced with at least a quarter less syrup and recorded in the spec book."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the sugar sources in each house drink"
                - "Cut the syrup by a quarter in three drinks and rebalance by taste"
                - "Rebuild one juice-heavy mocktail with tea or soda"
                - "Replace the old specs with the lower-sugar versions"
            - name: Oleo saccharum and cordials from spent citrus
              description: |-
                ## Purpose
                Peels left after juicing hold the most aromatic part of the fruit and usually go in the bin. Turning them into oleo saccharum, peel and sugar left to draw out the oils, or into a lime cordial adds bright flavour to punches and highballs and cuts kitchen waste at the same time.

                ## Milestones
                1. An oleo saccharum made from the peels of one juicing session.
                2. A lime or grapefruit cordial made and dated.
                3. Both used in at least two drinks each.
                4. Peels routinely kept for the bar rather than the bin.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An oleo saccharum and a citrus cordial made from leftover peels and each used in two drinks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save the peels from your next juicing session in a lidded tub"
                - "Cover the peels in sugar and leave them overnight for oleo saccharum"
                - "Make a small batch of lime cordial and date the bottle"
                - "Use the oleo and the cordial in two drinks each"
            - name: Quick infusions with tea, spice and fruit
              description: |-
                ## Purpose
                Infusing a spirit with Earl Grey, chilli, vanilla or fresh strawberries takes a jar and anything from an hour to a few days, and gives drinks a personal stamp no bottle can. Tasting the infusion at set intervals and straining it at the right moment avoids the over-steeped bitterness most first attempts end with.

                ## Milestones
                1. Three infusions made in small jars: one tea, one spice and one fruit.
                2. Each tasted at set intervals and strained when ready.
                3. Infusion times noted for next time.
                4. Each infused spirit labelled with contents and date and used in a drink.

                ## Notes
                Tea can be ready in under an hour and chilli in a few hours, while vanilla takes days. Strain fruit infusions fully and keep them in the fridge.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three infused spirits made, labelled with date and steep time, and each used in a recorded drink."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pour three small jars of spirit for a tea, a spice and a fruit infusion"
                - "Taste each infusion at set intervals and note the time"
                - "Strain each one when it tastes right and label the bottle"
                - "Use each infusion in one drink and note the result"
            - name: Cocktail party for twelve with a batched menu
              description: |-
                ## Purpose
                Shaking drinks to order for twelve people keeps the host behind the bar all night. Choosing three drinks, one of them alcohol-free, batching the stirred and long ones ahead and keeping only one shaken drink to order lets you serve quickly and actually join the party.

                ## Milestones
                1. A three-drink menu chosen, with at least one alcohol-free drink.
                2. Spirit, mixer, ice and glassware quantities worked out for twelve guests across the evening.
                3. Batches made, bottled and chilled the day before.
                4. Water, food and a plan for guests getting home in place.

                ## Notes
                Allow two to three drinks per guest for a three-hour party, plus a bag of ice for every four guests, and always put out water. Ask guests about allergies before fixing the menu.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A party for around twelve held with a three-drink batched menu, including an alcohol-free option, with no drink running out."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a date and a three-drink menu with one alcohol-free option"
                - "Ask the agent to scale the three recipes into party batch quantities"
                - "Batch and bottle the stirred and long drinks the day before"
                - "Set out water and agree how guests will get home"
            - name: Bottled cocktails as festive gifts
              description: |-
                ## Purpose
                Small bottles of house Negroni, Manhattan or coffee old fashioned make a personal present that costs less than a shop gift set. Bottled stirred drinks keep well because they contain no fresh juice, so a batch made four weeks before the festive season can be labelled, chilled and handed out without a last-minute rush.

                ## Milestones
                1. One stirred cocktail chosen and its batch spec with added water worked out.
                2. Bottles and labels bought, with drink name, ingredients and strength on each.
                3. The batch made, bottled and stored somewhere cool.
                4. Gifts handed over with a short serving note.

                ## Notes
                Add the water a stirred drink would normally pick up from ice, around a fifth of the volume, so the bottle can be poured straight into a chilled glass. Leave out fresh juice, which spoils.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Gift bottles of one stirred cocktail made, labelled with ingredients and strength, and handed out before the festive season."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one stirred drink and work out a batch spec with added water"
                - "Buy small swing-top bottles and labels"
                - "Make and bottle the batch four weeks before the giving date"
                - "Pick next year's gift cocktail and order the bottles @recurring(yearly)"
            - name: Punch bowl for a summer garden party
              description: |-
                ## Purpose
                Punch was the original party drink: a bowl, a ladle and a large block of ice serve forty people with nobody stuck behind the bar. Planning a balanced punch, a matching alcohol-free bowl and an ice block frozen days ahead makes a summer gathering far easier than mixing to order.

                ## Milestones
                1. A punch recipe and an alcohol-free version scaled for the guest list.
                2. A large ice block frozen in a tub or loaf tin three days ahead.
                3. Bowls, ladles and cups sourced or borrowed.
                4. Both bowls clearly labelled on the day.

                ## Notes
                Keep the alcohol-free bowl visibly separate and labelled so children and drivers do not pick up the wrong one. Never put dry ice in drinks guests serve themselves.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A garden party served from a labelled punch bowl and a separate alcohol-free bowl, with ice lasting the afternoon."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Scale a punch and an alcohol-free version for your guest list"
                - "Freeze a large ice block in a tub three days before"
                - "Borrow two punch bowls, ladles and enough cups"
                - "Label both bowls clearly before guests arrive"
            - name: Alcohol-free month drinks plan
              description: |-
                ## Purpose
                Plenty of people take a month off alcohol after the festive season or before a big event, and it goes better with a plan for evenings and social occasions. Lining up a month of good alcohol-free drinks, stocking the bar with them and deciding what to order when out turns the month into a test of new recipes rather than willpower.

                ## Milestones
                1. The month chosen and shared with the household.
                2. Eight alcohol-free recipes and two shop-bought alternatives ready.
                3. A go-to order decided for pubs, restaurants and parties.
                4. A short note written at the end on sleep, spending and what you want to keep.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full alcohol-free month completed with eight new drinks tried and a written note on what to keep afterwards."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick the month and tell the people you live with"
                - "Choose eight alcohol-free recipes and buy what they need"
                - "Decide your go-to alcohol-free order for nights out"
                - "Plan next year's alcohol-free month and its drinks list @recurring(yearly)"
            - name: Cocktail-making evening for friends
              description: |-
                ## Purpose
                Teaching three classic drinks to four or five friends is a cheap, sociable night and the fastest way to sharpen your own technique. Planning stations, pre-measured ingredients and alcohol-free versions of each drink keeps it fun and moderate rather than a race to the bottom of the bottle.

                ## Milestones
                1. Three drinks chosen that teach shaking, stirring and building in the glass.
                2. Ingredients pre-measured and tools set out for two people per station.
                3. Alcohol-free versions of each drink ready.
                4. Recipe cards handed out to take home.

                ## Notes
                Teach with half measures. Everyone gets the practice and nobody ends the evening with six full cocktails inside them.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A teaching evening held for at least four friends, covering three techniques with half-measure drinks and recipe cards handed out."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three drinks that teach shaking, stirring and building"
                - "Invite four or five friends and ask about allergies"
                - "Prepare stations with pre-measured half-measure ingredients"
                - "Ask the agent to draft simple recipe cards for the three drinks"
            - name: Signature drinks for a wedding or milestone birthday
              description: |-
                ## Purpose
                Couples and families often want a drink named for the occasion, but a cocktail that is lovely made one at a time can be impossible to serve to a hundred guests. Designing two signature drinks, one of them alcohol-free, that caterers or a hired bartender can batch and pour quickly gives the day a personal touch without slowing the bar.

                ## Milestones
                1. Two drinks agreed with the couple or host, one alcohol-free.
                2. Each drink tested at batch scale and adjusted.
                3. A written spec, quantities and serving notes sent to the caterer or venue bar.
                4. The venue's rules on licensing and who may serve alcohol confirmed.

                ## Notes
                Many venues and countries require licensed staff to serve alcohol at an event. Check the venue's rules before planning to run the bar yourself.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two batch-tested signature drinks, one alcohol-free, with written specs and quantities accepted by the venue or caterer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the flavours and names with the couple or host"
                - "Test both drinks at batch scale and adjust the specs"
                - "Send specs, quantities and serving notes to the caterer"
                - "Confirm the venue's rules on who may serve alcohol"
            - name: Alcohol-free drinks during pregnancy
              description: |-
                ## Purpose
                Health services generally advise avoiding alcohol in pregnancy, and many people trying to conceive or breastfeeding choose to avoid it too, yet the evening drink ritual is hard to give up. Building a small set of grown-up alcohol-free drinks, free of raw egg and unpasteurised juice and checked against your midwife's advice on caffeine and herbs, keeps the ritual without the worry.

                ## Milestones
                1. Your midwife or doctor's guidance on alcohol, caffeine and herbal ingredients written down.
                2. Five alcohol-free drinks chosen that fit that guidance.
                3. Egg white drinks switched to aquafaba and juices checked as pasteurised.
                4. An alcohol-free option ready for every social occasion in the calendar.

                ## Notes
                Some herbal ingredients, tonic containing quinine and high-caffeine teas or colas may come with limits in pregnancy. Ask your midwife rather than relying on a recipe site.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Five alcohol-free drinks checked against your midwife's guidance written in the spec book, with one ready for each upcoming social event."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your midwife about alcohol, caffeine and herbal ingredients"
                - "Choose five alcohol-free drinks that fit the advice"
                - "Swap egg white for aquafaba in any foamed drinks"
                - "Keep one alcohol-free option stocked for every social event"
            - name: Drinks for drivers and non-drinking guests
              description: |-
                ## Purpose
                At most gatherings someone is driving, pregnant, on medication, avoiding alcohol for faith or health reasons, or simply not drinking, and they usually get offered orange juice. Keeping two adult alcohol-free drinks permanently ready, and offering them as warmly as the cocktails, makes every guest feel properly hosted.

                ## Milestones
                1. Two house alcohol-free drinks chosen and their syrups kept in stock.
                2. Alcohol-free options listed alongside the cocktails on any menu.
                3. Guests asked what they would like without being asked why.
                4. Drivers' drinks kept clearly apart from alcoholic batches.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three gatherings in a row, two alcohol-free house drinks were offered alongside the cocktails and served in the same glassware."
                cadence: rolling
              tasks:
                - "Choose two house alcohol-free drinks for guests"
                - "Check the alcohol-free syrups and mixers are stocked @recurring(monthly:25)"
                - "List alcohol-free drinks alongside cocktails on any party menu"
                - "Serve them in the same glasses as the cocktails"
            - name: Cutting back with a drinks diary
              description: |-
                ## Purpose
                Home bars make it easy to drink more than you meant, because nobody is counting the measures. Keeping a simple diary of standard drinks for a couple of months, and setting small goals such as smaller pours, more alcohol-free days or a later first drink, shows the real pattern and makes cutting back concrete.

                ## Milestones
                1. A diary in place recording each drink and its standard drink count.
                2. Four weeks of baseline entries before any change.
                3. One or two specific goals set from the baseline.
                4. Eight weeks of entries compared with your health service's guideline.

                ## Notes
                Start from the **Habit tracker** template. If you drink heavily every day, speak to your doctor before cutting down sharply, as stopping suddenly can be unsafe. Your doctor or a local support service can help if cutting back proves harder than expected.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of drinks diary entries recorded, with weekly totals compared against the household limit and at least one goal met."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set up a drinks diary from the habit tracker template"
                - "Record each drink with its standard drink count for four weeks"
                - "Total the week's drinks and compare them with your limit @recurring(weekly:sat)"
                - "Set one or two goals based on the first four weeks"
            - name: Party drinks for children at family celebrations
              description: |-
                ## Purpose
                Children at birthdays and family gatherings love feeling included in the grown-up drinks, and a special glass and a silly garnish matter more to them than the recipe. Planning two or three low-sugar fizzy drinks served from their own jug, with names the children choose, keeps them away from the adult batches and keeps the sugar down.

                ## Milestones
                1. Two or three children's drinks chosen with less sugar than shop fizzy drinks.
                2. Names and garnishes decided with the children.
                3. A separate, labelled jug and unbreakable cups set aside.
                4. Adult batches kept out of reach on the day.

                ## Notes
                Leave out caffeine, tonic and bitters for children, and check allergies with the parents of any visiting children.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At one family celebration, children were served their own labelled low-sugar drinks from a separate jug, with adult drinks kept out of reach."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose three low-sugar fizzy drinks children will enjoy"
                - "Let the children name the drinks and pick garnishes"
                - "Set aside a labelled jug and unbreakable cups"
                - "Place adult drinks out of children's reach before guests arrive"
            - name: Cocktails on a student budget
              description: |-
                ## Purpose
                Students and anyone in a shared flat can make good drinks without a trolley full of bottles. One versatile spirit, one liqueur and a bottle of aromatic bitters, plus a jam jar shaker and a tablespoon measure, cover a dozen drinks for the price of a round at the student bar.

                ## Milestones
                1. One spirit and one liqueur chosen that cover at least ten drinks between them.
                2. A jam jar, a tablespoon measure and a tea strainer standing in for bar tools.
                3. Syrups made from sugar and water rather than bought.
                4. Cost per drink worked out and compared with a local bar.

                ## Notes
                A tablespoon holds 15 millilitres, so two level tablespoons make a 30 millilitre measure. Keep bottles in your room rather than a shared kitchen if you want them to last.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten drinks made from one spirit, one liqueur and kitchen equipment, each costing a third or less of the bar price."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one spirit and one liqueur that cover ten drinks"
                - "Use a jam jar, tablespoon and tea strainer as bar tools"
                - "Make a bottle of simple syrup from sugar and hot water"
                - "Work out the cost per drink against your local bar"
            - name: Clarified milk punch
              description: |-
                ## Purpose
                Clarified milk punch, a centuries-old method of curdling milk with an acidic punch and straining it through cloth, produces a crystal-clear, silky drink that keeps for weeks in the fridge. It is a slow, rewarding project for an experienced home bartender and a showpiece for large gatherings.

                ## Milestones
                1. A tested recipe chosen and scaled to a one-litre batch.
                2. Milk curdled with the punch and strained through a fine cloth or coffee filter until clear.
                3. The finished punch bottled, labelled with dairy and the date, and refrigerated.
                4. The punch served and the recipe adjusted for the next batch.

                ## Notes
                Clarified punch still contains milk proteins, so label it as containing dairy for guests with an allergy.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A litre of clarified milk punch made, strained clear, labelled with dairy and date, and served to guests."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a tested milk punch recipe and scale it to one litre"
                - "Make the punch base and pour it into the milk to curdle"
                - "Strain through a cloth or coffee filter until it runs clear"
                - "Bottle the punch and label it with dairy and the date made"
            - name: Fat-washing spirits
              description: |-
                ## Purpose
                Fat-washing adds the flavour and silky texture of butter, coconut oil or bacon to a spirit by mixing them, freezing the fat solid and straining it off. Mastering the method lets you make brown butter rum or coconut-washed tequila, and explains a technique used across modern cocktail bars.

                ## Milestones
                1. One fat-wash made with a mild fat such as coconut oil.
                2. The mix frozen and strained through a coffee filter until no fat remains.
                3. A brown butter or savoury version made once the method works.
                4. The washed spirits labelled and each used in a drink.

                ## Notes
                Strain thoroughly and keep washed spirits in the fridge. Label any spirit washed with dairy, nut or animal fat so allergic, vegetarian or religious guests can avoid it.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two fat-washed spirits made, strained clear, labelled with the fat used and each served in a drink."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Warm coconut oil and stir it into a small jar of rum"
                - "Freeze the jar until the fat sets solid"
                - "Strain through a coffee filter until no fat remains"
                - "Label the washed rum with the fat used and try it in a drink"
            - name: Original signature cocktail development
              description: |-
                ## Purpose
                Once the classic families feel familiar, inventing a drink is mostly disciplined swapping: start from a template, change one element, taste, record. Developing one original cocktail through at least five recorded versions, judged by friends who do not know the spec, tests everything learned in this area.

                ## Milestones
                1. A starting template and a flavour idea written down.
                2. At least five versions made, each changing one element only.
                3. A blind tasting with three friends scoring the final two versions.
                4. The winning drink named and written in the spec book with its development notes.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One original cocktail developed through at least five recorded versions and chosen by a blind tasting of three people."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down the template and the flavour idea you will start from"
                - "Make version one and record the spec and tasting note"
                - "Change one element per version for at least five versions"
                - "Hold a blind tasting of the final two with three friends"
            - name: Acid-adjusted juices and cordials
              description: |-
                ## Purpose
                Bartenders use citric and malic acid powders to make orange or apple juice as tart as lime, to build cordials that keep for weeks and to stand in for citrus when it is poor or expensive. Learning to weigh small amounts of acid accurately on a fine scale opens up drinks that keep longer and taste the same every time.

                ## Milestones
                1. Food-grade citric and malic acid and a scale reading to 0.01 grams bought.
                2. Orange juice adjusted to lime-like acidity and used in a sour.
                3. A long-keeping cordial made with acid in place of fresh juice.
                4. Acid quantities recorded in the spec book for each recipe.

                ## Notes
                Use food-grade acids only, weigh them rather than measuring by spoon, and keep the powders labelled and out of reach of children.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One acid-adjusted juice and one acid cordial made by weight, each used in a drink and recorded in the spec book."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Buy food-grade citric and malic acid and a scale reading to 0.01 grams"
                - "Adjust orange juice with acid and try it in a sour"
                - "Make a long-keeping cordial using acid instead of fresh juice"
                - "Record every acid weight in the spec book"
---

# Cocktail & Mocktail Making

This area is for anyone who wants to make a properly good drink at home, with or without alcohol, from a quiet Friday old fashioned to a punch bowl for forty. It starts with the foundations (the eight core tools, a five-bottle spirits shelf, accurate measuring, a household drinking limit, ice, glassware and a spec book), then the routines that keep citrus fresh, syrups dated and bottles counted, the core techniques of sours, stirred drinks, highballs, foams and alcohol-free body, the decisions about non-alcoholic spirits, carbonation and lighter versions, the parties and gifts worth planning, versions for pregnancy, drivers, children and students, and finally the clarified punches, fat-washes and original drinks of an experienced home bartender.

What repeats is a Friday citrus shop, a Thursday ice refill, a Monday alcohol-free pick and a Sunday tasting note, a monthly syrup batch, bottle count, vermouth date check and spend tally, a quarterly seasonal menu, and the yearly gift batch and alcohol-free month. The Purchase decision, Metrics log, Operational checklist and Habit tracker templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
