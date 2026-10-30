---
id: food-nutrition.feeding-fussy-eating-children
name: Feeding Fussy-Eating Children
description: "A food diary and safe food list, low-pressure routines for new foods, calm mealtimes shared by every carer, and a clear route to a dietitian or feeding therapist when home strategies are not enough."
category: personal
version: 1.0.0
tags: [food-nutrition, feeding-fussy-eating-children, parent, picky-eating, safe-foods, food-exposure, mealtimes, feeding-therapy]
author: Aurum Technology
starter_structure:
  templates:
    - weekly-meal-plan
    - metrics-log
    - purchase-decision
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Feeding Fussy-Eating Children
          description: "Expanding a picky child's diet with low-pressure exposure, family meals and strategies that reduce mealtime battles."
          projects:
            - name: Two-week food and mealtime diary
              description: |-
                ## Purpose
                Before changing anything, write down what your child actually eats and drinks for fourteen days, including snacks, milk, the time of each meal and how it went. Parents often find the picture is better than it felt, or that the battles cluster around one meal, one tired time of day or one adult. The diary becomes the baseline every later project is measured against.

                ## Milestones
                1. Fourteen days recorded with times, foods offered, foods eaten and drinks between meals.
                2. Each meal marked as calm, tense or a battle.
                3. Patterns noted, such as the meals that go well and the times of day that never do.
                4. A one-paragraph summary written that you could hand to a health professional.

                ## Notes
                Record what was offered as well as what was eaten: the gap between the two is the most useful column. Keep entries factual, amounts and times rather than judgements.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fourteen-day diary of foods offered, foods eaten, drinks and mealtime mood exists, with a written summary of the main patterns."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a diary page with columns for time, offered, eaten, drinks and mood"
                - "Record every meal, snack and drink for fourteen days"
                - "Mark each meal as calm, tense or a battle"
                - "Ask the agent to summarise the diary into the three clearest patterns"
            - name: Safe foods list for each child
              description: |-
                ## Purpose
                A safe food is one your child will eat almost every time it is offered, and for a very selective eater the exact brand, shape and temperature can matter. Writing the list down shows how many foods you really have to work with, protects them from being overused, and gives every other adult who feeds your child the same reference.

                ## Milestones
                1. Every food each child reliably eats listed, with brand, shape, texture and how it is served.
                2. The list grouped into proteins, starches, fruit and vegetables, dairy and snacks.
                3. Foods eaten only some of the time listed separately as maybe foods.
                4. The list shared with the other adults who feed the child.

                ## Notes
                Be precise: 'plain pasta shells, no sauce, warm' is more useful than 'pasta'. If the safe list holds fewer than about twenty foods, mention it at the doctor's review.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written safe food list for each child, grouped by food type with a separate maybe list, is shared with every adult who feeds them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every food your child eats nearly every time it is offered"
                - "Add the brand, shape, texture and serving temperature to each item"
                - "Start a separate list of maybe foods eaten some of the time"
                - "Share the list with the other parent, grandparents and childcare"
            - name: Growth and warning signs check with your doctor
              description: |-
                ## Purpose
                Most fussy eating is a normal phase, but a small number of children have a feeding disorder, a medical cause or poor growth that needs professional help. Booking a review with your doctor or health visitor, with the diary and safe food list in hand, settles whether this is ordinary pickiness before you spend months on home strategies.

                ## Milestones
                1. The signs your health service lists for concern checked against your diary, such as weight loss, frequent gagging or a shrinking list of foods.
                2. An appointment held with recent height and weight measured and plotted.
                3. The clinician's view on whether further referral is needed written down.
                4. A date agreed for the next growth check.

                ## Notes
                This project organises the conversation; it does not replace it. Seek help promptly if your child is losing weight, struggling to swallow or very distressed around food.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A review with a doctor or health visitor has taken place, height and weight are recorded, and their conclusion on referral is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the feeding warning signs your health service publishes"
                - "Book a growth and feeding review with your doctor or health visitor"
                - "Bring the diary and safe food list to the appointment"
                - "Write down the clinician's conclusion and any referral agreed"
                - "Ask for height and weight to be measured at the routine review @recurring(yearly)"
            - name: Agreeing who decides what at the table
              description: |-
                ## Purpose
                Mealtime battles usually come from adults and children fighting over the same decision. A widely used approach splits the jobs: adults decide what is served, when and where, and the child decides whether to eat and how much. Agreeing this split in writing with every adult at the table stops one parent coaxing while the other insists.

                ## Milestones
                1. The split of jobs between adults and children written in plain words.
                2. Every adult who regularly feeds the child has read it and agreed.
                3. The two or three habits that break the split identified, such as spoon-feeding an able child or negotiating bites.
                4. A two-week trial completed with a short note on what changed.

                ## Notes
                The hardest part for most parents is accepting that some meals will be barely touched. Small, regular meals and snacks make that safe, because the next chance to eat is never far away.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement on who decides what, when, where, whether and how much is accepted by every adult who regularly feeds the child."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the adult jobs and the child jobs at mealtimes on one page"
                - "Talk the page through with your partner or co-parent"
                - "List the habits each adult will drop, such as counting bites"
                - "Run the agreement for two weeks and note what changed"
            - name: Fixed meal and snack timetable
              description: |-
                ## Purpose
                Children who graze on snacks and milk all day arrive at dinner with no appetite, then get labelled fussy. A timetable of three meals and two or three planned snacks, roughly two to three hours apart with only water in between, lets real hunger do some of the work.

                ## Milestones
                1. Set times for meals and snacks written for school days and for weekends.
                2. Water agreed as the only drink between eating times.
                3. Grazing and kitchen raids answered with one calm line about when the next snack is.
                4. Two weeks on the timetable completed with appetite at dinner noted.

                ## Notes
                Ask your health visitor or doctor what spacing suits your child's age, especially for toddlers and children with medical conditions.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written meal and snack timetable for school days and weekends has been followed for two weeks, with dinner appetite noted daily."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write meal and snack times for a school day and a weekend day"
                - "Put the timetable on the fridge where your child can see it"
                - "Practise one calm phrase for food requests outside snack times"
                - "Note dinner appetite each evening for the first two weeks"
            - name: Milk, juice and drinks between meals audit
              description: |-
                ## Purpose
                Milk and juice are filling, and a child who drinks a lot between meals can look like a poor eater when they are simply full. Measuring what goes in from cups and bottles for one week, then asking your health visitor or doctor what amount suits your child, often explains a good part of the refusal.

                ## Milestones
                1. One week of every drink recorded with type, amount and time.
                2. Daily totals of milk and juice worked out.
                3. A suitable daily amount for your child's age confirmed with a health professional.
                4. A plan agreed for moving drinks to mealtimes, if needed.

                ## Notes
                Change milk amounts gradually and with professional advice, especially for toddlers still on bottles or children with low intake.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A week of drinks has been measured and totalled, and a daily amount agreed with a health professional is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure how much each of your child's cups and bottles holds"
                - "Record every drink with its amount and time for seven days"
                - "Ask your health visitor or doctor what daily milk amount suits your child"
                - "Write down the plan for when drinks will be offered"
            - name: Pressure-free mealtime phrases
              description: |-
                ## Purpose
                Phrases like 'just one more bite', 'you liked it yesterday' or 'well done for eating' all add pressure, and pressure is one of the most reliable ways to make a selective eater eat less. Agreeing a short list of neutral things to say, and what to say instead of the usual lines, gives every adult something to reach for in the moment.

                ## Milestones
                1. The pressure phrases currently used at your table written down honestly.
                2. A neutral replacement written for each one.
                3. The list kept somewhere visible at mealtimes.
                4. A month of meals using the new phrases, with lapses noted without blame.

                ## Notes
                Praise for eating is still pressure. Talk about the day, the company, or the colour and crunch of the food instead.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of current pressure phrases with neutral replacements is on display and has been used by every adult for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Listen at three meals and write down what adults say about eating"
                - "Ask the agent to draft neutral replacements for each pressure phrase"
                - "Stick the replacement list inside a cupboard door near the table"
                - "Review how the phrases are going with the other adults @recurring(monthly:15)"
            - name: Seating and table set-up for steady eating
              description: |-
                ## Purpose
                Feeding therapists often start with the chair, because a child whose feet dangle and whose elbows sit below the table spends energy on balance rather than on chewing. Checking seat height, foot support, cutlery and plate size is a cheap one-evening fix that can calm a fidgety, distracted eater.

                ## Milestones
                1. The child sits with hips, knees and ankles at roughly right angles and feet supported.
                2. The table reaches about elbow height when seated.
                3. Child-sized cutlery, cup and plate in use.
                4. The same set-up kept at each meal for two weeks.

                ## Notes
                A sturdy box under the feet works as well as a bought footrest. Ask an occupational therapist if your child still cannot sit for a meal with good support.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The child's seat gives supported feet and elbow-height table access, with child-sized cutlery and plate used for two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph your child sitting at the table from the side"
                - "Add a footrest or booster so feet are flat and the table reaches elbow height"
                - "Swap in a small plate, cup and child-sized cutlery"
                - "Keep the same seat and set-up for two weeks"
            - name: Pudding, treats and rewards policy
              description: |-
                ## Purpose
                Using pudding as a prize for finishing vegetables teaches children that vegetables are the price and sweets the reward, which makes both harder to manage. Deciding as a household how dessert, treats and stickers will work, then sticking to it, removes one of the most frequent bargaining points at the table.

                ## Milestones
                1. Current pudding and reward habits written down.
                2. One approach chosen, such as a small pudding served with the meal whatever is eaten, or no pudding on most days.
                3. Sticker charts or rewards for eating phased out.
                4. The policy explained to the child in one sentence.

                ## Notes
                Whatever you choose, dessert is neither earned nor withheld. Consistency between adults matters more than the exact rule.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written pudding and rewards policy, agreed by every adult, has replaced bargaining at the table for at least one month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List how pudding, treats and stickers are used at the moment"
                - "Choose one dessert approach with your partner or co-parent"
                - "Tell your child the new rule in a single calm sentence"
                - "Check whether the pudding policy is still working @recurring(quarterly)"
            - name: Weekly meal plan with a safe food at every meal
              description: |-
                ## Purpose
                A selective eater who sees nothing familiar on the plate often refuses the whole meal. Planning the week so each meal contains at least one safe food alongside what everyone else eats means the child can always fill up, and new foods sit next to something reassuring rather than replacing it.

                ## Milestones
                1. A weekly plan in which every meal names at least one safe food for each child.
                2. Family meals served as one meal, with no separate menus.
                3. The plan kept where the cook can see it.
                4. Four consecutive weeks planned this way.

                ## Notes
                Start from the **Weekly meal plan** template. A safe food can be a side: bread, rice, fruit or plain pasta all count.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly plans exist in which every meal lists at least one safe food for each child."
                cadence: rolling
              tasks:
                - "Mark the safe foods for each child on your next dinner plan"
                - "Add one safe side to any planned meal that has none"
                - "Plan next week's meals with a safe food at each one @recurring(weekly:sun)"
                - "Keep a stock of the three most-used safe sides in the cupboard"
            - name: Weekly target food exposure plan
              description: |-
                ## Purpose
                Many children need to meet a new food eight to fifteen times or more before they will taste it, and most parents give up after three. Choosing one or two target foods a week and serving them in small amounts again and again, with no expectation to eat, turns that finding into a routine.

                ## Milestones
                1. A list of ten target foods chosen, starting with ones close to existing safe foods.
                2. One or two target foods served at least four times in a week.
                3. Each serving a tiny amount on the plate or in a shared dish, with no request to eat it.
                4. Eight consecutive weeks of target foods completed.

                ## Notes
                Pick targets the rest of the family already eats, so they turn up naturally. Letting your child choose one target fruit or vegetable on a shopping trip adds a little ownership.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Target foods have been chosen weekly and served at least four times a week for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Write a list of ten target foods close to current safe foods"
                - "Take your child shopping to pick one new fruit or vegetable to try"
                - "Choose this week's target food and the meals it will appear at @recurring(weekly:sat)"
                - "Serve a teaspoon-sized portion of the target food without comment"
            - name: New food exposure log
              description: |-
                ## Purpose
                Progress with a selective eater is slow enough to miss, and it rarely means eating a full portion. Logging each exposure and how far your child got, from tolerating the food on the table to licking or chewing it, shows the small steps that keep parents going.

                ## Milestones
                1. A log with columns for date, food, how it was served and the furthest step reached.
                2. Every target food exposure recorded for one month.
                3. Exposures counted per food.
                4. At least one food identified that has moved up a step.

                ## Notes
                Start from the **Metrics log** template. Use the steps from the eating ladder project so every adult records progress the same way.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A month of exposures is logged with the furthest step reached each time, and the count per food is totalled."
                cadence: rolling
              tasks:
                - "Create an exposure log from the metrics log template"
                - "Add the steps of the eating ladder as a fixed list to choose from"
                - "Log today's target food and the furthest step reached @recurring(daily)"
                - "Count exposures per food at the end of the first month"
            - name: Family-style serving at dinner
              description: |-
                ## Purpose
                When food arrives already plated, the child's only choices are eat or refuse. Putting dishes in the middle and letting children serve themselves, even a single pea, hands them the decision about amount and lets them handle new foods with a spoon long before they are ready to taste.

                ## Milestones
                1. Serving bowls and child-sized spoons available for the table.
                2. Two dinners a week served family-style for a month.
                3. Children serving at least one food themselves at each of those meals.
                4. Simple serving rules agreed, such as using the spoon and not putting food back.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two dinners a week have been served family-style for a month, with each child serving at least one food themselves."
                cadence: rolling
              tasks:
                - "Find small serving bowls and spoons your child can manage"
                - "Agree two simple serving rules with the children"
                - "Serve dinner family-style from shared bowls @recurring(weekly:tue,thu)"
                - "Ask your child to pass one dish to someone else at each meal"
            - name: After-school snack routine
              description: |-
                ## Purpose
                The hour after school is when children are starving, tired and least willing to try anything, and a big unplanned snack then ruins dinner. A set snack at a set time, from a small rotating list that pairs a safe food with a fruit or vegetable, takes the edge off without filling them up.

                ## Milestones
                1. A fixed after-school snack time at least two hours before dinner.
                2. A rotating list of ten snacks, each pairing a safe food with a fruit or vegetable.
                3. Snack requests outside the time met with the same calm answer.
                4. Four school weeks run on the routine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fixed after-school snack time and rotating snack list have been used for four school weeks, with dinner appetite holding."
                cadence: rolling
              tasks:
                - "Choose a snack time at least two hours before dinner"
                - "Write ten snacks that pair a safe food with a fruit or vegetable"
                - "Put the after-school snack out at the agreed time @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Keep one emergency snack in the school bag for late club days"
            - name: Monthly review of accepted foods
              description: |-
                ## Purpose
                Once a month, step back from the daily meals and compare the safe food list and exposure log with last month. The point is to notice slow gains, spot foods quietly dropped, and choose next month's targets on evidence rather than on the mood of the worst dinner.

                ## Milestones
                1. The safe food count recorded each month.
                2. Foods gained and foods dropped listed.
                3. Next month's target foods chosen from the evidence.
                4. Six monthly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Six monthly reviews exist, each recording the safe food count, foods gained and dropped, and next month's targets."
                cadence: rolling
              tasks:
                - "Count the foods on the safe and maybe lists @recurring(monthly:26)"
                - "List the foods gained and dropped since last month"
                - "Choose next month's target foods from the exposure log"
                - "Share one win from the month with the other adults"
            - name: Weekly cooking session with your child
              description: |-
                ## Purpose
                Children who wash, tear, stir and sniff a food have handled it many times before it reaches the plate, and they are prouder of what they made. A short weekly cooking session, built around one target food, is exposure that feels like play.

                ## Milestones
                1. A list of age-appropriate kitchen jobs for your child.
                2. A weekly thirty-minute cooking slot set.
                3. Each session built around one target or maybe food.
                4. Eight sessions completed.

                ## Notes
                Tasting is never the goal of the session. Touching, smelling and serving the food to someone else are all wins.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly cooking sessions, each built around a target or maybe food, have been completed and noted."
                cadence: rolling
              tasks:
                - "List five kitchen jobs your child can do safely"
                - "Pick a simple recipe that uses this week's target food"
                - "Cook together for thirty minutes @recurring(weekly:sat)"
                - "Let your child serve what they made to the family"
            - name: Twenty-minute mealtime with a clear start and end
              description: |-
                ## Purpose
                Meals that drag on for an hour, with pleading at the end, teach a child that refusing earns attention. A predictable shape, a warning beforehand, twenty to thirty minutes at the table and a calm finish without comment on what was eaten, keeps meals short enough to stay pleasant.

                ## Milestones
                1. A ten-minute warning given before each main meal.
                2. A fixed meal length agreed, roughly twenty to thirty minutes.
                3. Plates cleared at the end without comment on what was eaten.
                4. Three weeks of meals run to the same shape.

                ## Notes
                A sand timer on the table helps younger children see that the end is coming.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Main meals have followed a warning, a fixed length and a neutral finish for three consecutive weeks."
                cadence: rolling
              tasks:
                - "Agree a meal length between twenty and thirty minutes"
                - "Give a ten-minute warning before dinner @recurring(daily)"
                - "Clear plates at the end without commenting on what was eaten"
                - "Use a sand timer on the table for a week if the end causes protest"
            - name: Carer and grandparent consistency check-in
              description: |-
                ## Purpose
                Grandparents, childminders and the other parent may feed a child several meals a week, and one adult who bribes or forces can undo a month of calm exposure. A one-page summary of your approach and a regular check-in keep every adult working the same way without anyone feeling criticised.

                ## Milestones
                1. A one-page summary of the approach written in plain words.
                2. The summary given to each adult who regularly feeds the child.
                3. Their questions and any disagreements talked through.
                4. A monthly check-in running for three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every regular carer has the one-page summary and three monthly check-ins about mealtimes have taken place."
                cadence: rolling
              tasks:
                - "Ask the agent to draft a one-page summary of your feeding approach"
                - "Give the summary to grandparents, childcare and the other parent"
                - "Ask each adult what they find hardest about the approach"
                - "Check in with each regular carer about mealtimes @recurring(monthly:8)"
            - name: Quarterly safe food list refresh
              description: |-
                ## Purpose
                Safe food lists drift: brands change recipes, foods get dropped after a bad experience, and maybe foods quietly become safe. Rewriting the list every quarter keeps it accurate for everyone who uses it and shows early if it is shrinking.

                ## Milestones
                1. The list checked line by line against the last month of meals.
                2. Foods moved between safe, maybe and dropped.
                3. Any shrinkage of more than a few foods flagged for the doctor.
                4. The updated list reshared with carers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The safe food list has been rewritten each quarter for a year, with dropped foods recorded and the latest copy held by every carer."
                cadence: cyclic
              tasks:
                - "Rewrite the safe and maybe lists from recent meals @recurring(quarterly)"
                - "Move any food not eaten for a month onto a dropped list"
                - "Flag a shrinking list to your doctor or health visitor"
                - "Send the updated list to everyone who feeds your child"
            - name: How fussy eating develops in childhood
              description: |-
                ## Purpose
                Food neophobia, the wariness of new foods, tends to rise from around two, peak in the preschool years and ease gradually through primary school, and it is partly inherited. Understanding why it happens, from evolutionary caution to sensory sensitivity, helps parents stop blaming themselves or the child and pick strategies that fit the stage.

                ## Milestones
                1. Two reputable sources on children's feeding read, such as a health service guide and a book by a paediatric dietitian.
                2. Notes made on neophobia, repeated exposure and the effect of pressure.
                3. Your child's behaviour placed on that picture: a typical stage, or something worth asking about.
                4. Three ideas chosen to try first.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One page of notes on neophobia, exposure and pressure exists, with three ideas chosen and a judgement on whether to seek advice."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find your health service's guide to fussy eating in children"
                - "Choose one book on children's feeding written by a dietitian or feeding specialist"
                - "Write one page of notes on neophobia, exposure and pressure"
                - "Pick three ideas from the reading to try this month"
            - name: Steps-to-eating ladder for new foods
              description: |-
                ## Purpose
                Eating is not one step but many: tolerating a food in the room, on the table, on the plate, then touching, smelling, kissing, licking, biting, chewing and finally swallowing it. Learning this ladder, which several feeding therapy programmes use, lets you notice and celebrate progress that would otherwise look like refusal.

                ## Milestones
                1. The ladder written out in about ten steps that fit your child.
                2. Your child's current step recorded for five target foods.
                3. Games invented for the touching, smelling and licking steps.
                4. One food moved up at least two steps in a month.

                ## Notes
                Never push a child several steps at once. Slipping back a step after a hard day is normal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written eating ladder is in use, with current steps recorded for five foods and at least one food two steps higher after a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the steps from tolerating to swallowing on one card"
                - "Record the current step for five target foods"
                - "Invent a game for the smell and touch steps, such as guessing foods by sniff"
                - "Note the date whenever a food moves up a step"
            - name: Sensory food words instead of yuck
              description: |-
                ## Purpose
                Children who only have 'yummy' and 'yucky' have no way to say what bothers them about a food, and parents have no clue to the next food to try. Teaching words for texture, temperature, taste and smell, such as crunchy, slippery, sour or smoky, turns refusal into description you can work with.

                ## Milestones
                1. A list of twenty describing words covering texture, taste, smell and temperature.
                2. The words used by adults at meals for two weeks.
                3. Your child describing at least one refused food in their own words.
                4. The features your child objects to most noted, for example wet textures or mixed foods.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twenty-word food vocabulary is in use at meals and a note lists the textures and tastes your child objects to most."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write twenty food words across texture, taste, smell and temperature"
                - "Use one describing word yourself at each family meal"
                - "Ask your child to describe a food instead of rating it"
                - "Write down the textures and tastes your child objects to most"
            - name: Messy food play sessions
              description: |-
                ## Purpose
                For a child who gags at the sight of wet or mixed textures, the first step is getting comfortable touching food with no chance of being asked to eat it. Short play sessions away from mealtimes, painting with yoghurt, building with crackers, squashing berries, get hands used to a food before mouths are asked to try.

                ## Milestones
                1. A list of play activities ranked from dry and easy to wet and messy.
                2. A weekly play session held away from mealtimes.
                3. Wipes and a clean-up bowl always to hand so the child can stop at any time.
                4. Your child touching at least one previously avoided texture.

                ## Notes
                Let the child lead and stop when they want. If even dry textures cause strong distress, mention it to an occupational therapist or feeding specialist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Weekly food play sessions have run for two months and at least one previously avoided texture has been touched."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Rank ten food play ideas from dry to wet"
                - "Set out wipes and a bowl so your child can clean hands any time"
                - "Hold a fifteen-minute food play session @recurring(weekly:wed)"
                - "Note any new texture your child touched"
            - name: Reading hunger and fullness cues
              description: |-
                ## Purpose
                Parents of picky eaters often lose trust in their child's appetite and start managing every mouthful. Learning what your child's hunger and fullness signals look like, from early grumpiness to pushing the plate away, helps you stop feeding by amount and start feeding by signal.

                ## Milestones
                1. Your child's typical hunger signs listed from a week of watching.
                2. Their fullness signs listed the same way.
                3. Meals ended on fullness signals rather than plate emptiness for two weeks.
                4. Any mismatch, such as never seeming hungry, raised with your health visitor or doctor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written lists of your child's hunger and fullness signs exist, and meals have ended on fullness signals for two weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Watch for hunger signs before three meals and write them down"
                - "Watch for fullness signs at the same meals"
                - "End meals on the fullness signal for two weeks"
                - "Raise any worry about appetite at the next health review"
            - name: Food bridges from one form to the next
              description: |-
                ## Purpose
                A child who eats raw carrot sticks may refuse cooked carrot, and one who eats apple slices may never have tried apple sauce. Building bridges, serving a familiar food in a new shape, temperature or cooking method, grows variety with far less fear than starting from scratch.

                ## Milestones
                1. Five safe foods chosen as starting points.
                2. Three variations planned for each, such as cut differently, roasted, grated or mixed in.
                3. Each variation served at least five times next to the original form.
                4. At least two new forms accepted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifteen variations of five safe foods have been planned and served, and at least two new forms are on the safe or maybe list."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose five safe foods to build bridges from"
                - "Plan three new shapes or cooking methods for each"
                - "Serve one variation alongside the original form"
                - "Record which new forms are accepted"
            - name: Calm responses to gagging, spitting and meltdowns
              description: |-
                ## Purpose
                Gagging on a new texture is a reflex, not a performance, and a big adult reaction makes the next try harder. Planning how you will respond, with a spit-out bowl allowed, one calm phrase and no punishment, keeps a bad moment from turning into fear of the whole meal.

                ## Milestones
                1. A spit-out bowl or napkin agreed as allowed at every meal.
                2. One calm phrase for gagging and one for meltdowns written down.
                3. The plan shared with every adult who feeds the child.
                4. The difference between gagging and choking understood, with first aid basics learned.

                ## Notes
                Choking is often silent and needs immediate first aid. A paediatric first aid course is worth doing for anyone who feeds young children, and frequent gagging on many foods should be raised with your doctor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written response plan for gagging and meltdowns is shared with every carer, and at least one adult has completed paediatric first aid."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Put a small spit-out bowl or napkin by your child's plate"
                - "Write one calm phrase for gagging and one for meltdowns"
                - "Read your health service's guidance on gagging versus choking"
                - "Book a paediatric first aid course"
            - name: Build-your-own dinners for mixed tastes
              description: |-
                ## Purpose
                Tacos, wraps, rice bowls, jacket potatoes and pizza nights let everyone assemble the same meal differently, so a child can eat plain components while new fillings sit within reach. A small set of these dinners removes the clash of serving a mixed dish to a child who will not eat foods that touch.

                ## Milestones
                1. Five build-your-own dinners chosen that the adults enjoy too.
                2. Each one listed with its safe components and its stretch components.
                3. One build-your-own dinner on the plan each week.
                4. Your child adding at least one stretch component without being asked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five build-your-own dinners are written up with safe and stretch components, and one has been served weekly for a month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick five build-your-own dinners the adults also enjoy"
                - "List the safe and stretch components for each"
                - "Serve every component in its own bowl"
                - "Put one build-your-own night on next week's plan"
            - name: Hidden versus visible vegetables decision
              description: |-
                ## Purpose
                Blending spinach into sauces adds nutrients, but a child who never knowingly eats a vegetable has not learned to accept one, and discovery can break trust in safe foods. Weighing the trade-off and deciding how you will use hidden vegetables, if at all, keeps nutrition and learning in balance.

                ## Milestones
                1. Arguments for and against hiding vegetables written down for your child.
                2. A household rule chosen, for example hidden vegetables allowed but the same vegetable always also served visibly.
                3. Safe foods kept unaltered so they stay safe.
                4. The rule reviewed after a month.

                ## Notes
                Never change a safe food in secret. If you add something to it, tell your child or serve it as a separate dish.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-line household rule on hidden vegetables is written down and has been reviewed after a month with no safe foods lost."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the pros and cons of hiding vegetables for your child"
                - "Decide on a household rule and write it in one line"
                - "Serve a visible version of any vegetable you hide"
                - "Check after a month whether any safe food was lost"
            - name: Dips, sauces and toppings as stepping stones
              description: |-
                ## Purpose
                Familiar dips can make an unfamiliar food feel safer, and a small bowl of grated cheese or a favourite sauce lets a child change the taste of something new themselves. Finding two or three trusted dips and toppings gives every target food a reassuring companion.

                ## Milestones
                1. Two or three dips or toppings your child reliably likes identified.
                2. Each one served on the side, never poured over food.
                3. Dips paired with at least five different target foods.
                4. Any target food eaten with a dip recorded in the exposure log.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two or three trusted dips are identified and have been paired with at least five target foods, with results in the exposure log."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Offer three dips side by side to find the favourites"
                - "Serve the favourite dip in its own small bowl"
                - "Pair the dip with a different target food each week"
                - "Record any food eaten with the dip in the exposure log"
            - name: Plates and cutlery for a sensory eater
              description: |-
                ## Purpose
                Some children are distressed when foods touch, and others find cold metal cutlery or a large full plate overwhelming. Choosing a divided plate, small cutlery or a tasting plate deliberately, rather than buying several gadgets in hope, gives a calmer start at very little cost.

                ## Milestones
                1. The specific sensory issues noted, such as touching foods, cold cutlery or plate size.
                2. Two or three options compared on price, washability and size.
                3. One option chosen and used for a month.
                4. A plan for letting foods sit gradually closer together, if separation is the issue.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One plate or cutlery option has been chosen against written criteria and used at every meal for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note what about plates and cutlery seems to bother your child"
                - "Compare three plate or cutlery options on price and washability"
                - "Buy the one option that fits best"
                - "Use it at every meal for a month before judging it"
            - name: Ending the short-order cook habit
              description: |-
                ## Purpose
                Cooking a separate dinner for the picky child feels kind, but it removes any reason to approach family food and doubles the cook's work. Phasing out custom meals over a few weeks, while guaranteeing a safe food at each family meal, gets everyone eating one dinner without leaving the child hungry.

                ## Milestones
                1. The number of separate meals cooked each week counted.
                2. A date set for moving to one family meal with safe sides.
                3. Separate meals reduced over three to four weeks.
                4. A full week of single family dinners completed.

                ## Notes
                Tell your child ahead of time what will change. The safe side is the guarantee that makes this fair.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A full week of single family dinners, each with a safe side for every child, has been served with no separate meals cooked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count how many separate meals you cooked last week"
                - "Tell your child calmly that dinner will become one meal with a safe side"
                - "Cut one separate meal a week until none are left"
                - "Record the first full week of single family dinners"
            - name: Multivitamin question for your doctor or pharmacist
              description: |-
                ## Purpose
                Parents of very selective eaters often wonder whether a supplement would fill the gaps, and the answer depends on age, what is actually eaten and local guidance. Bringing a summary of the safe food list to a doctor, dietitian or pharmacist turns a supermarket guess into an informed decision.

                ## Milestones
                1. A list of the food groups your child rarely or never eats.
                2. Your health service's general guidance on vitamins for children found.
                3. The question asked of a doctor, dietitian or pharmacist with the food list in hand.
                4. Their recommendation recorded, including when to review it.

                ## Notes
                Do not choose doses yourself. Some vitamins are harmful in excess, and chewable supplements can be mistaken for sweets, so store them out of reach.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A professional's recommendation on supplements, based on your child's food list, is written down with a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the food groups your child rarely eats on the safe food list"
                - "Read your health service's guidance on vitamins for children"
                - "Ask a doctor, dietitian or pharmacist whether a supplement is needed"
                - "Record their advice and when to review it"
            - name: Managing food jags and safe food burnout
              description: |-
                ## Purpose
                Food jags happen when a child eats the same food at every meal until one day they refuse it completely, and for a child with few safe foods losing one hurts. Rotating safe foods, changing brands, shapes and sides on purpose, and not serving the same food at back-to-back meals helps keep the list intact.

                ## Milestones
                1. Foods served at more than one meal a day identified from the diary.
                2. A rule set that no safe food appears at back-to-back meals.
                3. Small variations planned for each of the top five safe foods.
                4. No safe food dropped in two months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A no back-to-back rule is in place, variations exist for the top five safe foods, and no safe food has been dropped in two months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the safe foods served most often in the diary"
                - "Set a rule that no safe food appears at back-to-back meals"
                - "Rotate the brand or shape of one safe food @recurring(weekly:thu)"
                - "Note any safe food that starts being refused"
            - name: Birthday parties and playdates plan
              description: |-
                ## Purpose
                Parties and friends' houses mean unfamiliar food, other adults commenting and a child who may come home starving. A simple plan, a safe snack beforehand, a quiet word with the host, no pressure to try the party food, keeps these occasions fun rather than a test.

                ## Milestones
                1. A short standard message for hosts about your child's eating written.
                2. A pre-party safe snack routine agreed.
                3. An easy meal planned for a hungry child afterwards.
                4. The next party or playdate handled with the plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A host message and pre-party routine exist, and at least one party or playdate has been handled with them and noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a two-line message to hosts about your child's eating"
                - "Give your child a safe snack before the next party"
                - "Plan an easy safe dinner for after the party"
                - "Note how the event went and what to change next time"
            - name: Festive and feast day meals with a selective eater
              description: |-
                ## Purpose
                Big holiday meals, whether Christmas, Eid, Diwali or Thanksgiving, bring rich unfamiliar dishes, relatives' comments and late eating times all at once. Putting safe foods on the table, briefing relatives and setting realistic expectations means the day can be a celebration for your child too.

                ## Milestones
                1. The feast menu checked for at least one safe food per course.
                2. Relatives briefed in advance on the no-pressure approach.
                3. A plan ready in case the main meal runs late.
                4. Notes written after the day for next year.

                ## Notes
                Avoid using the occasion for a big new-food push. Seeing and smelling the festive dishes is exposure enough.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A feast day has been held with a safe food at every course, relatives briefed beforehand and notes written for next year."
                cadence: cyclic
              tasks:
                - "Check the feast menu for a safe food at each course"
                - "Message relatives a week ahead about not commenting on your child's plate"
                - "Plan a safe snack in case the main meal runs late"
                - "Write the feast-day plan two weeks before each big holiday @recurring(yearly)"
            - name: Eating out with a picky child
              description: |-
                ## Purpose
                Restaurants can feel impossible with a child who eats ten foods, yet avoiding them means the child never sees other people enjoying different food. Finding a few welcoming places, checking menus ahead and packing a backup safe food lets family meals out happen.

                ## Milestones
                1. Three local places identified with at least one likely safe food on the menu.
                2. Menus checked online before each visit.
                3. A small backup safe food packed for every meal out.
                4. Three meals out completed without a scene over food.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three meals out at places chosen in advance have been completed, each with a backup safe food packed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Search menus for three local places with a likely safe food"
                - "Ask staff whether plain versions of dishes are possible"
                - "Pack a small backup safe food in your bag"
                - "Let your child see and smell your dish without offering it"
            - name: Holiday and travel food plan for a selective eater
              description: |-
                ## Purpose
                Travel removes the familiar brands, timings and kitchen that a selective eater relies on, and a week of refusal far from home is exhausting. Researching what safe foods will be available, packing non-perishable favourites and planning the first meals makes the trip calmer for everyone.

                ## Milestones
                1. Safe foods available at the destination researched.
                2. Non-perishable safe foods packed for travel days.
                3. The first two days of meals planned.
                4. Notes kept on what worked, for the next trip.

                ## Notes
                Start from the **Trip** template. Check customs rules before packing food for international travel.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip has been completed with safe foods packed, the first two days of meals planned and notes written for next time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up supermarkets and familiar foods near your destination"
                - "Pack non-perishable safe foods for travel days"
                - "Plan meals for the first two days away"
                - "Write notes after the trip on what to pack next time"
            - name: Nursery or school eating handover
              description: |-
                ## Purpose
                Nursery and school staff feed your child several times a week, and without a briefing they may praise clean plates, insist on tasting, or not notice that nothing was eaten. A short handover of safe foods, your approach and what you would like to be told keeps their mealtimes aligned with home.

                ## Milestones
                1. A one-page handover covering safe foods, approach and any medical notes.
                2. A meeting held with the key worker or class teacher.
                3. Agreement on how you will hear what was eaten each day or week.
                4. A first check-in held after a month.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Staff hold a one-page eating handover, a feedback method is agreed and the first monthly check-in has taken place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page eating handover for staff"
                - "Book a short meeting with the key worker or class teacher"
                - "Agree how staff will tell you what was eaten"
                - "Check in with staff about how eating is going @recurring(monthly:3)"
            - name: Toddler food refusal from two to four
              description: |-
                ## Purpose
                Toddlers who ate everything as babies often narrow sharply around their second birthday, refusing vegetables and anything mixed or green. Treating this as a normal developmental stage, with short meals, tiny portions, picture books about food and plenty of eating alongside adults, stops a phase hardening into a long-term pattern.

                ## Milestones
                1. Toddler-sized portions in use, with seconds offered rather than large first servings.
                2. Picture books or pretend-play games about food used each week.
                3. Your toddler eating alongside an adult at most meals.
                4. Three months through the stage with the safe food list stable or growing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three months of small portions and shared eating are complete, with the toddler's safe food list the same length or longer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Swap to a small plate and offer seconds instead of big servings"
                - "Borrow two picture books about trying food from the library"
                - "Eat the same food alongside your toddler at most meals"
                - "Play a pretend kitchen game featuring this week's target food"
            - name: Picky eating in the primary school years
              description: |-
                ## Purpose
                From about five to eleven, children can follow reasons, enjoy responsibility and be swayed by friends, so the approach can grow up with them. Involving your child in choosing target foods, keeping their own tasting record and taking on small kitchen jobs works better at this age than parent-led exposure alone.

                ## Milestones
                1. Your child choosing one target food a fortnight from a list.
                2. A tasting record your child keeps and enjoys filling in.
                3. One food responsibility handed over, such as making their own snack.
                4. Progress reviewed together after three months.

                ## Notes
                Keep every challenge voluntary. Rewards for tasting are best avoided, though your interest and attention are fine.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your child has chosen target foods for three months, kept their own tasting record and reviewed it with you."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Show your child the target list and let them pick the next food"
                - "Make a tasting record your child keeps themselves"
                - "Hand over one food job, such as making their own after-school snack"
                - "Review the tasting record together after three months"
            - name: Teenager with a narrow diet
              description: |-
                ## Purpose
                Teenagers with a very limited diet often feel embarrassed at friends' houses, on school trips and on dates, and parent-led strategies now backfire. Moving to a supporting role, helping them name their own goals, practise in private and plan for social eating, respects their independence while keeping the door open to professional help.

                ## Milestones
                1. A private conversation held about what, if anything, your teenager wants to change.
                2. Their own goals written down in their words.
                3. A plan made for one social eating situation they find hard.
                4. Professional support discussed openly as an option.

                ## Notes
                A very restricted diet in a teenager, especially with weight loss or fear around food, should be checked by a doctor. Eating disorders can start in these years and are treatable.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your teenager's own goals are written down, a plan for one social eating situation exists, and professional help has been discussed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your teenager privately whether eating ever gets in their way"
                - "Write down any goals they choose, in their words"
                - "Plan one social eating situation together, such as a school trip"
                - "Try a new food together at a cafe of their choosing @recurring(monthly:20)"
            - name: Autistic or sensory-sensitive child feeding plan
              description: |-
                ## Purpose
                Autistic children and those with sensory processing differences are far more likely to eat a narrow range of foods, often for strong sensory reasons such as texture, smell or how food looks. A plan built around their sensory profile, made with an occupational therapist where possible, works with those preferences rather than against them.

                ## Milestones
                1. The sensory features of safe and refused foods listed, such as crunchy, beige or uniform.
                2. An occupational therapist or feeding specialist consulted, if available.
                3. Target foods chosen that share the sensory features of safe foods.
                4. The mealtime environment adjusted for noise, smell and lighting where needed.

                ## Notes
                Progress may be slower, and that is fine. Predictability, warnings before change and respect for overload matter more than speed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written sensory feeding plan lists the features of safe foods, two matched target foods and one environmental change made."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List what your child's safe foods have in common"
                - "Ask your doctor about an occupational therapy referral"
                - "Choose two target foods that share features with safe foods"
                - "Reduce one sensory stressor at the table, such as strong cooking smells"
            - name: Two homes with one feeding approach
              description: |-
                ## Purpose
                When a child splits time between two households, different rules on pudding, pressure or second helpings can confuse them and undo progress. Agreeing a few shared basics with the other parent, and swapping a short weekly update, gives the child consistency without needing identical kitchens.

                ## Milestones
                1. Three to five shared basics agreed with the other parent.
                2. Each home's safe food list shared.
                3. A weekly update on new foods tried in place.
                4. A check after two months on whether the basics are holding.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five written shared basics are agreed by both homes and weekly updates have run for two months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose three feeding basics you most want both homes to share"
                - "Raise them with the other parent in a calm message or meeting"
                - "Share each home's safe food list"
                - "Swap a short note on new foods tried with the other home @recurring(weekly:fri)"
            - name: Siblings who eat very differently
              description: |-
                ## Purpose
                When one child eats everything and another eats a handful of foods, comparisons creep in at the table, and the adventurous eater can become a tool for shaming. Planning for both, with no comparisons, a safe food for one and real variety for the other, protects both children's relationship with food.

                ## Milestones
                1. Comparisons between siblings at the table stopped by every adult.
                2. Each child's safe foods present at every family meal.
                3. The adventurous sibling's interest shared through cooking together, never as a lecture.
                4. A month of meals with no sibling comparisons noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A month of family meals has passed with a safe food for each child and no sibling comparisons made by any adult."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree with the other adults that siblings are never compared at the table"
                - "Check each family meal holds a safe food for every child"
                - "Invite the siblings to cook one dish together"
                - "Note any comparison you catch and how you redirected it"
            - name: Fostered or adopted child with food worries
              description: |-
                ## Purpose
                Hoarding food, eating very fast, refusing anything unfamiliar or panicking when food runs out are common in children who have known hunger or chaotic care. Feeding them starts with trust, predictable meals, visible food supplies and no restriction, planned with the social worker or adoption support team who know the child's history.

                ## Milestones
                1. Relevant food history gathered from the social worker or placement records.
                2. A predictable meal timetable shared visually with the child.
                3. A snack basket the child can see and use at agreed times.
                4. Specialist support discussed with the placement or adoption team.

                ## Notes
                Do not punish hoarding. Ask the support team before starting any exposure work with new foods.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A picture timetable and visible snack basket are in use, and food history and specialist support have been discussed with the support team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the social worker what is known about the child's food history"
                - "Make a picture timetable of meals and snacks"
                - "Set up a snack basket the child can see"
                - "Ask the support team about specialist feeding or therapy help"
            - name: Regression after illness, a new baby or a move
              description: |-
                ## Purpose
                Illness, a sore throat, a new sibling, starting school or moving house can shrink a child's diet suddenly, and parents fear months of progress are gone. Planning a short return to safe foods and low demands, then restarting exposure gently, usually brings the lost foods back.

                ## Milestones
                1. The trigger and the foods lost written down.
                2. Two weeks of safe foods and low demands allowed.
                3. Exposure restarted with the most recently lost foods.
                4. Lost foods back on the safe list, or the regression raised with the doctor after a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Lost foods and the trigger are recorded, and within a month they are back on the safe list or the doctor has been consulted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down which foods were lost and when it started"
                - "Return to safe foods without pressure for two weeks"
                - "Reintroduce the most recently lost food first"
                - "Ask the doctor about any regression lasting more than a month"
            - name: Referral to a paediatric dietitian or feeding therapist
              description: |-
                ## Purpose
                If home strategies stall, growth is a concern or the safe food list is very short, specialist help from a paediatric dietitian, speech and language therapist or occupational therapist can change the picture. Preparing a short feeding history and clear questions makes the referral quicker and the first appointment far more useful.

                ## Milestones
                1. Referral routes through your health service or private practice identified.
                2. A two-page feeding history written with diary summary, safe food list and growth notes.
                3. Questions for the first appointment listed.
                4. The first appointment attended and the plan recorded.

                ## Notes
                Waiting lists can be long, so ask to be referred early rather than waiting until things are worse.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A two-page feeding history has gone to a feeding specialist, the first appointment is attended and their plan is written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your doctor which feeding specialists your child can be referred to"
                - "Ask the agent to draft a two-page feeding history from your diary and lists"
                - "List five questions for the first appointment"
                - "Record the specialist's plan after the appointment"
            - name: Preparing for an ARFID assessment
              description: |-
                ## Purpose
                Avoidant restrictive food intake disorder, or ARFID, is a recognised condition in which eating is limited by sensory sensitivity, fear of choking or vomiting, or low interest in food, to the point of affecting growth, nutrition or daily life. If your clinician raises it, gathering evidence and understanding the assessment makes the conversation clearer and less frightening.

                ## Milestones
                1. Reputable information on ARFID from a health service or eating disorder charity read.
                2. Examples gathered of how eating affects your child's growth, health or daily life.
                3. Questions about the assessment and treatment options listed.
                4. The assessment attended and its outcome recorded.

                ## Notes
                Only a qualified clinician can diagnose ARFID. This prepares you for the assessment; it does not replace it.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written examples and questions were taken to an ARFID assessment, and the outcome and next steps are recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read an ARFID guide from a health service or eating disorder charity"
                - "Write down examples of how eating affects school, social life or health"
                - "List your questions about assessment and treatment"
                - "Record the outcome and next steps after the assessment"
            - name: Following a feeding therapy home programme
              description: |-
                ## Purpose
                Feeding therapy happens mostly at home between appointments, and progress depends on short, regular practice done the way the therapist set it. Building the home programme into the week, with notes the therapist can review, gets far more out of every session.

                ## Milestones
                1. The therapist's home programme written out step by step.
                2. Practice sessions fixed into the weekly schedule.
                3. Notes kept for each practice session.
                4. Notes shared at every therapy appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two home practice sessions a week have run for two months, with notes brought to each therapy appointment."
                cadence: rolling
              tasks:
                - "Ask the therapist to write down each step of the home programme"
                - "Fix two practice slots into the family week"
                - "Run the home programme practice session @recurring(weekly:mon,thu)"
                - "Bring your practice notes to every appointment"
            - name: Twelve-week food chain from a favourite food
              description: |-
                ## Purpose
                Food chaining, a technique used by feeding specialists, moves a child from a strongly preferred food to new ones through small changes in taste, texture or appearance: shop nuggets, then home-made breaded chicken, then chicken strips, then chicken in a wrap. Running one chain carefully over twelve weeks shows how far small, planned steps can go.

                ## Milestones
                1. One favourite food chosen as the start of the chain.
                2. Six to eight links planned, each a small change from the last.
                3. Each link served until accepted before moving on.
                4. At least four links accepted by week twelve.

                ## Notes
                Work with a feeding specialist if you can, especially for a child with very few safe foods. Change only one feature at a time.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written chain of six to eight links exists and at least four links have been accepted within twelve weeks."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose one strongly preferred food to start the chain"
                - "Plan six to eight links, each changing only one feature"
                - "Serve the current chain step beside the safe version @recurring(weekly:tue,sat)"
                - "Record the week each link is accepted"
---

# Feeding Fussy-Eating Children

This area is for parents of children who eat a short list of foods and turn every meal into a negotiation, from toddlers in the classic picky phase to teenagers with a narrow diet. It starts with the foundations (a two-week food diary, a safe food list, a growth check with your doctor, clear jobs at the table and a steady meal timetable), then the weekly routines of target foods, exposure logs and calm meals, the skills of the eating ladder, food bridges and sensory words, the decisions about hidden vegetables, dips and separate dinners, the occasions that test the approach, the situations that change it, such as autism, two homes or fostering, and finally the specialist work of referrals, ARFID assessment and food chaining.

What repeats is a daily exposure log and dinner warning, a Saturday choice of target food, Sunday meal planning with a safe food at every meal, weekday after-school snacks, a monthly review of accepted foods on the 26th, a monthly carer check-in and a quarterly refresh of the safe food list. The Weekly meal plan, Metrics log, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
