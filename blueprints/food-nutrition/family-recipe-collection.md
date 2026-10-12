---
id: food-nutrition.family-recipe-collection
name: Family Recipe Collection
description: "An inventory of the dishes worth saving, cook-along sessions with the relatives who hold them, tested recipes with their stories, safe backups and a family cookbook to pass down."
category: personal
version: 1.0.0
tags: [food-nutrition, family-recipe-collection, everyone, parent, heritage-recipes, oral-history, recipe-archive, family-cookbook]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - content-pipeline
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Family Recipe Collection
          description: "Recording, testing and preserving family recipes from older relatives before they are lost, and sharing them across generations."
          projects:
            - name: Inventory of family dishes worth saving
              description: |-
                ## Purpose
                Before recording anything, list the dishes that would be missed if nobody could make them again: the Sunday stew, the festival sweets, the soup made for anyone who was ill. Writing each one down with the person who makes it best, and whether any written version exists, turns a vague wish into a list you can work through. It usually shows that two or three dishes live only in one person's head.

                ## Milestones
                1. A list of at least twenty dishes, each with the cook who makes it best.
                2. Each dish marked as written down, partly written or memory only.
                3. Relatives in at least two other households asked to add dishes you missed.
                4. The memory-only dishes flagged as the first to record.

                ## Notes
                Include the everyday dishes as well as the celebration ones. The weekday soup nobody thinks of as special is the one most often lost.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of at least twenty family dishes exists, each with its best cook and a written, partial or memory-only status."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every family dish you remember eating at a relative's table"
                - "Add the name of the cook who makes each dish best"
                - "Mark each dish as written, partly written or memory only"
                - "Send the list to two relatives and ask what is missing"
            - name: Choosing a home for the recipe collection
              description: |-
                ## Purpose
                Collections stall when recipes end up split between a shoebox, three phones and a group chat. Decide on one master home, whether a ring binder, a shared document folder or a recipe app, and one rule for what counts as filed. The format matters less than the exit: anything digital must export to an open format such as PDF or plain text, so the collection outlives the app.

                ## Milestones
                1. Three options compared on cost, sharing, photo support and bulk export.
                2. One master home chosen and named.
                3. A test recipe filed, exported and opened on a different device.
                4. The choice and the reason written down, so later helpers follow it.

                ## Notes
                Start from the **Purchase decision** template. Avoid any app that cannot export every recipe at once; companies close and subscriptions lapse.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One master home for the collection is chosen and recorded, and a test recipe has been exported from it and opened elsewhere."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what the collection must do: share, print, hold photos and export"
                - "Compare three options against that list"
                - "File one test recipe and export it to PDF"
                - "Write down the chosen home and why you picked it"
            - name: Standard recipe page layout
              description: |-
                ## Purpose
                Recipes copied down in different shapes are hard to compare, test or print later. One layout with fixed fields (dish, whose recipe, yield, ingredients by weight, method, the cook's own words, story, date recorded and who tested it) means every new recipe goes in the same way, whoever records it. Settling this before the first session saves retyping dozens of pages.

                ## Milestones
                1. A one-page layout with fixed fields agreed.
                2. A field for the original wording and measures kept beside the modern quantities.
                3. Two known recipes rewritten into the layout as worked examples.
                4. The layout shared with every relative who will record recipes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recipe layout with fixed fields exists, with two worked examples, and has been shared with everyone recording."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the list of fields every recipe page will carry"
                - "Add a field for the cook's own words and original measures"
                - "Rewrite two known recipes into the layout as examples"
                - "Share the layout with the relatives helping to record"
            - name: Gathering scattered recipe cards and notebooks
              description: |-
                ## Purpose
                Handwritten cards, recipes on the backs of envelopes, annotated cookbooks and yellowed newspaper cuttings are usually spread across several houses. Asking every branch of the family to search, then photographing or borrowing what turns up, brings the written evidence together before a clear-out or a move loses it.

                ## Milestones
                1. Every household asked to search kitchen drawers, tins and old cookbooks.
                2. Each find photographed in good light with the owner's name noted.
                3. Originals returned with thanks or stored with the collection, as each owner prefers.
                4. A list of finds by household added to the inventory.

                ## Notes
                Look inside the covers of old cookbooks. Margin notes and tucked-in cards are often the most personal recipes of all.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every household has been asked to search, and every card, cutting and notebook found is photographed and listed by owner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Message each household asking them to check drawers, tins and old cookbooks"
                - "Photograph every card and cutting found, flat and in daylight"
                - "Note whose kitchen each find came from"
                - "Agree with each owner whether to keep or return the original"
            - name: Contact sheet of family cooks and keepers
              description: |-
                ## Purpose
                Knowing who to ask is half the work: the aunt who makes the dumplings, the cousin who inherited the notebook, the neighbour who learned from your grandmother. A contact sheet with each person's dishes, how they like to be reached and when they are free turns every request into a quick message rather than a family-wide hunt.

                ## Milestones
                1. Each cook and keeper listed with the dishes or papers they hold.
                2. Preferred contact method and good times noted for each person.
                3. Language, hearing or mobility needs noted where they affect a session.
                4. The sheet shared with anyone else collecting recipes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact sheet lists every known cook and keeper with their dishes, preferred contact method and any session needs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every relative or family friend who holds a family recipe"
                - "Note the dishes or papers each person holds"
                - "Ask each person how and when they prefer to be contacted"
                - "Add any language or hearing needs that affect a recording session"
            - name: Recording the eldest cooks first
              description: |-
                ## Purpose
                Recipes held only by relatives in their eighties and nineties are the ones most likely to vanish, and health can change in a season. Ranking the memory-only dishes by the age and health of the person who holds them, and booking those sessions within weeks, puts the effort where a loss would be permanent.

                ## Milestones
                1. Memory-only dishes ranked by the age and health of their cook.
                2. Dates booked for the top three recording sessions.
                3. The first of those dishes recorded in full.
                4. Remaining gaps noted to revisit while the cook is still able.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The three most at-risk dishes have recording sessions booked, and the first one is recorded in full within three weeks."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Rank the memory-only dishes by who holds them"
                - "Phone the eldest cook and ask to cook alongside them"
                - "Book dates for the top three recording sessions"
                - "Record the first dish in full on the day"
            - name: Family agreement on sharing the recipes
              description: |-
                ## Purpose
                Some recipes are guarded secrets, some cooks dislike being filmed, and branches of a family can fall out over who owns grandmother's cake. Agreeing early who can see the collection, whether anything may be posted publicly and how each cook is credited avoids hurt later, especially once a printed book or website is being discussed.

                ## Milestones
                1. Each cook asked how they want to be credited and whether any recipe stays private.
                2. A short written agreement on who can view, copy and publish.
                3. Private recipes marked clearly in the master copy.
                4. The agreement shared with every household involved.

                ## Notes
                Ask permission before filming or photographing anyone, and ask again before sharing any recording beyond the family.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written sharing agreement exists, every cook's credit preference is recorded and private recipes are marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each cook how they want their name shown on their recipes"
                - "Agree which recipes stay inside the family"
                - "Write a five-line sharing agreement for the collection"
                - "Mark private recipes clearly in the master copy"
            - name: Backup plan for originals and digital files
              description: |-
                ## Purpose
                One phone or one binder is a single accident away from losing everything. Following the simple rule of three copies, on two kinds of storage, with one kept in another house or in the cloud, protects scans, photos and recordings. Originals themselves belong somewhere dry and well away from the stove.

                ## Milestones
                1. Every scan, photo and recording gathered into one folder structure.
                2. A second copy on a different device or drive.
                3. A third copy held off site, in the cloud or with a relative.
                4. One file restored from each copy to prove it works.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three copies of the collection exist on two kinds of storage, one off site, and a test restore from each has worked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather all scans, photos and recordings into one folder"
                - "Copy the folder to a second drive or device"
                - "Set up an off-site copy with a cloud service or a relative"
                - "Restore one file from each copy to prove it works"
            - name: Recording kit for kitchen sessions
              description: |-
                ## Purpose
                Measuring a cook's handful needs a scale on the counter, and filming needs both of your hands free. A small packable kit, with a digital scale, measuring jug and spoons, phone stand, power bank, notebook and labels, means every session captures weights and footage instead of guesses.

                ## Milestones
                1. A kit list written.
                2. Missing items bought or borrowed.
                3. The kit packed in one bag or box, ready to take to any kitchen.
                4. The kit used in one session and the list adjusted.

                ## Notes
                A scale that reads in single grams matters more than an expensive phone. Pinches of spice and raising agents are where recorded recipes usually fail.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed recording kit including a single-gram scale and phone stand has been used in at least one session."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which kit items you already own"
                - "Buy or borrow a digital scale that reads in single grams"
                - "Pack the scale, jug, spoons, phone stand and power bank in one bag"
                - "Note after the first session what was missing from the kit"
            - name: Monthly cook-along session with a relative
              description: |-
                ## Purpose
                Recipes are captured fastest by cooking beside the person who makes them, watching what they do rather than what they say they do. A fixed monthly session, rotating between cooks, makes steady progress without wearing anyone out, and twelve sessions a year will capture most of a family's core dishes.

                ## Milestones
                1. A rotation of cooks and dishes for the next six months.
                2. Each session captured with weights, photos and the cook's own words.
                3. A draft written up within a week of every session.
                4. Twelve sessions held in a year.

                ## Notes
                Start from the **Meeting notes** template for each session, so who cooked, what was made and the open questions are captured the same way every time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve cook-along sessions held in a year, each producing a written recipe draft within a week."
                cadence: rolling
              tasks:
                - "Draft a six-month rotation of cooks and dishes"
                - "Hold a cook-along session with the next relative on the rotation @recurring(monthly:12)"
                - "Write up the session draft within a week of cooking"
                - "Send the cook a photo of the finished dish with your thanks"
            - name: Test kitchen for recorded recipes
              description: |-
                ## Purpose
                No recipe is really saved until someone other than its owner can follow it and get the same result. Test-cooking each draft from the page alone exposes missing steps, vague timings and quantities that only ever worked because the cook adjusted by eye.

                ## Milestones
                1. A test rule agreed: cooked from the page alone, by someone who did not record it.
                2. Each test noted with what went wrong and how the page was fixed.
                3. The original cook or a family taster asked to judge the result.
                4. Recipes marked as tested only after a successful cook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten family recipes test-cooked from the written page, judged against the original and marked tested."
                cadence: rolling
              tasks:
                - "Agree that tests are cooked from the page with no outside help"
                - "Test-cook one drafted family recipe and note every problem @recurring(monthly:20)"
                - "Ask the original cook or a family taster to judge the result"
                - "Correct the page and mark the recipe as tested once it matches"
            - name: Monthly scanning and transcription batch
              description: |-
                ## Purpose
                Big piles of cards rarely get digitised in one weekend, but ten items a month clears two hundred in under two years. A small fixed batch, scanned at high resolution with the back of each card included and typed into the standard layout, makes the backlog steady work rather than a dreaded project.

                ## Milestones
                1. The backlog of cards, cuttings and notebook pages counted.
                2. Scan settings and a file naming pattern chosen and written down.
                3. Ten items scanned and typed up each month.
                4. The backlog reduced by at least half within a year.

                ## Notes
                Scan the back of every card. Dates, names and 'from Mrs Patel next door' are often written there.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten items scanned and transcribed each month, with the remaining backlog counted and falling."
                cadence: rolling
              tasks:
                - "Count the cards, cuttings and notebook pages still to scan"
                - "Write down the scan resolution, file type and file naming pattern"
                - "Scan and type up the month's ten recipe items @recurring(monthly:4)"
                - "Ask the agent to transcribe hard-to-read cards, then check every line by hand"
            - name: Quarterly backup check
              description: |-
                ## Purpose
                Backups fail quietly: a cloud plan lapses, a drive dies in a drawer, a relative's copy stops syncing. A short check each quarter that every copy is current and opens properly catches the problem while the other copies still exist.

                ## Milestones
                1. A checklist of every copy and where it lives.
                2. Each copy compared with the master by file count and latest date.
                3. One random file opened from each copy.
                4. Any broken or stale copy replaced the same week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks completed in a year, each confirming every copy is current and readable."
                cadence: cyclic
              tasks:
                - "Write a checklist of every copy of the collection and where it lives"
                - "Compare each copy's file count and latest date with the master @recurring(quarterly)"
                - "Open one random recording or scan from each copy"
                - "Replace any copy that is out of date or will not open"
            - name: Recipe status tracker
              description: |-
                ## Purpose
                With fifty or more dishes at different stages, it gets hard to remember which are recorded, typed, tested or still only a name on a list. One row per dish and a column per stage shows what to do next and which cooks you have not yet visited.

                ## Milestones
                1. Every dish from the inventory entered as a row.
                2. Stage columns for identified, recorded, transcribed, tested and approved by the cook.
                3. The tracker updated after every session or test cook.
                4. A monthly count of dishes at each stage.

                ## Notes
                Start from the **Content pipeline** template. Its stages map neatly onto recorded, written, tested and shared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker covers every dish in the inventory and is updated monthly with a count of dishes at each stage."
                cadence: rolling
              tasks:
                - "Set up the tracker with one row per dish from the inventory"
                - "Add stage columns from identified through to approved by the cook"
                - "Update stages and count the dishes at each one @recurring(monthly:28)"
            - name: Monthly recipe share with the wider family
              description: |-
                ## Purpose
                Collections fade from attention when they sit in a folder nobody opens. Sending one tested recipe a month to the family group, with a photo and a line of its story, keeps relatives interested, prompts corrections and new memories, and regularly brings in recipes nobody knew existed.

                ## Milestones
                1. A family group chat or mailing list chosen for the share.
                2. One tested recipe sent each month with a photo and its story.
                3. Replies and corrections copied into the recipe notes.
                4. New recipes offered by relatives added to the inventory.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Twelve monthly shares sent in a year, with replies, corrections and newly offered recipes logged in the collection."
                cadence: rolling
              tasks:
                - "Choose the family group or mailing list for the monthly share"
                - "Send one tested recipe with a photo and its story @recurring(monthly:15)"
                - "Copy any corrections from replies into the recipe notes"
                - "Add recipes that relatives offer to the inventory"
            - name: Story notes beside every recipe
              description: |-
                ## Purpose
                The memory around a dish is often what relatives treasure most: who made it for which occasion, the dish that cracked, the spice carried home in a suitcase. Writing a short story note within days of each session, while the details are fresh, turns a set of instructions into family history.

                ## Milestones
                1. A story field present on every recipe page.
                2. Story notes written within a week of each session.
                3. At least one occasion, one person and one memory recorded per dish.
                4. Each story read back to the cook to check names and dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every recorded recipe carries a story note naming an occasion, a person and a memory, checked by its cook."
                cadence: rolling
              tasks:
                - "Add a story field to the recipe layout if it is missing"
                - "Write up the week's memory notes from any session @recurring(weekly:sun)"
                - "Ask each cook which occasion their dish belongs to"
                - "Read each story back to the cook to check names and dates"
            - name: Calendar of once-a-year family dishes
              description: |-
                ## Purpose
                Some dishes appear only at one festival, harvest or birthday, so missing the moment means waiting a whole year to record them. Putting each of these occasions in the calendar, with a reminder a few weeks ahead to ask the cook, catches every one while it is actually being made.

                ## Milestones
                1. Once-a-year dishes listed with their occasion and month.
                2. Each occasion in the calendar with a reminder three weeks ahead.
                3. The cook asked in advance whether you can join the preparation.
                4. Each seasonal dish recorded in the season it is made.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every once-a-year dish is on the calendar with a reminder, and at least half have been recorded at their occasion."
                cadence: cyclic
              tasks:
                - "List the dishes that appear only at one festival or season"
                - "Put each occasion in the calendar with a three-week reminder"
                - "Check the coming month for a seasonal dish to record @recurring(monthly:8)"
                - "Ask the cook in advance if you can join the preparation"
            - name: Annual collection review and thank-you
              description: |-
                ## Purpose
                Once a year, step back and count: how many dishes were recorded, which cooks are still waiting, which recipes have been tested and who has joined in. A yearly review sets the next year's priorities and is the right moment to thank every contributor by name.

                ## Milestones
                1. The year's numbers taken from the status tracker.
                2. Next year's ten priority dishes chosen.
                3. A short update and thank-you sent to every contributor.
                4. The sharing agreement and backup plan re-read and updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review is completed with counts, ten priority dishes chosen and a thank-you sent to every contributor."
                cadence: cyclic
              tasks:
                - "Pull the year's counts from the status tracker"
                - "Choose the ten dishes to focus on next year"
                - "Send contributors a short update and thank-you @recurring(yearly)"
                - "Re-read the sharing agreement and backup plan for anything out of date"
            - name: Interviewing older cooks about their recipes
              description: |-
                ## Purpose
                Experienced cooks often say they 'just know', and skip steps they stopped noticing decades ago. Open questions asked while they cook (how do you know it is ready, what goes wrong, what did your mother do differently) draw out the knowledge a recipe card leaves out.

                ## Milestones
                1. A list of fifteen open questions on technique, timing and memory.
                2. The questions practised once with a willing relative.
                3. Answers captured in the cook's own words, not paraphrased.
                4. A follow-up question list kept for gaps.

                ## Notes
                Ask during the cooking, not afterwards. People remember with their hands, and a question at the stove gets a fuller answer than one at the table.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested list of fifteen interview questions has been used in at least two sessions, with answers kept in the cook's words."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write fifteen open questions about technique, timing and memory"
                - "Practise the questions with one relative over a cup of tea"
                - "Ask the cook how they know each stage is done"
                - "Keep a running list of follow-up questions for the next visit"
            - name: Turning handfuls and pinches into measurements
              description: |-
                ## Purpose
                'A handful of flour, enough water, bake until it looks right' is how most family recipes are actually held. Weighing each ingredient as the cook adds it, timing every stage and noting pan sizes and oven settings converts instinct into numbers someone else can repeat, with the original words kept alongside.

                ## Milestones
                1. Each ingredient weighed by difference as the cook takes it.
                2. Times and heat settings recorded for each stage.
                3. Pan, tin or pot sizes measured and noted.
                4. The measured version cooked once by you and adjusted.

                ## Notes
                Weigh the bag or jar before and after the cook scoops from it. The difference is the real amount, and the cook never has to change how they work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three recipes recorded with weighed quantities, timed stages and pan sizes, each cooked once from the numbers."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Weigh the flour bag before and after the cook scoops from it"
                - "Time each stage of the dish with a phone timer"
                - "Measure the pan or tin the cook always uses"
                - "Note the oven setting or flame height at each stage"
            - name: Old measures, oven settings and lost ingredient names
              description: |-
                ## Purpose
                Older recipes use teacups, gills, ounces, 'a moderate oven', gas marks and brand names that vanished decades ago. Building one conversion sheet for the measures your family's recipes actually use, checked against reliable references, means every transcriber converts the same way.

                ## Milestones
                1. Every unfamiliar measure and ingredient name in the collection listed.
                2. Each measure converted using a reputable cookery reference.
                3. Discontinued brands matched to current equivalents.
                4. The conversion sheet filed with the collection.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A conversion sheet covers every old measure and lost ingredient name found in the collection, with its source noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every unfamiliar measure and ingredient name in the collection"
                - "Look up each conversion in a reliable cookery reference"
                - "Weigh a level and a heaped spoonful from the family's own teacup or glass"
                - "Add the finished conversion sheet to the collection"
            - name: Filming a cooking session on a phone
              description: |-
                ## Purpose
                Ten seconds of footage showing how dough looks when kneaded enough, or how a cook folds a dumpling, explains what words cannot. Learning to frame the hands and the pan, capture clear sound over a noisy extractor and keep clips short gives footage you will actually rewatch.

                ## Milestones
                1. A phone position found that shows the hands and the pan.
                2. A test clip checked for light and sound.
                3. Key moments filmed as short clips rather than one long take.
                4. Clips named by dish and step and filed with the recipe.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One full session filmed as short, named clips with clear sound, filed beside the written recipe."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set up a phone stand that shows the cook's hands and the pan"
                - "Record a one-minute test clip and check the sound"
                - "Film the key moments as clips under two minutes each"
                - "Name each clip by dish and step"
            - name: Photographing dishes and handwritten cards
              description: |-
                ## Purpose
                Good photos are what make a printed book or shared page feel like the family's own. Soft window light, a plain background and cards shot flat from directly above give clear pictures from any phone, without studio kit.

                ## Milestones
                1. A daylight spot by a window chosen.
                2. Cards photographed flat, square and free of shadow.
                3. Each finished dish photographed from above and from the side.
                4. The best photo filed with each recipe.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten recipes each have a clear card photo and a finished-dish photo filed beside them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a window spot with soft daylight and a plain surface"
                - "Photograph three cards flat from directly above"
                - "Photograph one finished dish from above and from the side"
                - "File the best photo with each recipe"
            - name: Writing a method anyone can follow
              description: |-
                ## Purpose
                Clear recipe writing lists ingredients in the order they are used, keeps one action per step and says what done looks like rather than giving only a time. Learning a handful of these conventions turns rough session notes into instructions a teenager or a distant cousin can cook from.

                ## Milestones
                1. Five writing conventions chosen and written down for the collection.
                2. Three drafts rewritten with them.
                3. Every timed step also stating a sign of doneness.
                4. One rewritten recipe cooked by a beginner without questions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A beginner has cooked one rewritten recipe successfully without asking a question, and five conventions are on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down five conventions for the collection's recipe style"
                - "Rewrite three session drafts using them"
                - "Add a doneness sign to every step that has a time"
                - "Ask a beginner to cook one rewritten recipe and note their questions"
            - name: Translating recipes from another language
              description: |-
                ## Purpose
                Many family recipes are written in a language younger relatives no longer read, or in a regional dialect with words no dictionary holds. Translating with a fluent relative, keeping the original text alongside and noting words with no equivalent, preserves both the meaning and the cook's voice.

                ## Milestones
                1. Recipes needing translation listed.
                2. A fluent relative or translator found to check the work.
                3. Each translation kept beside the original text.
                4. A glossary of untranslatable words and dish names.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every recipe in another language has a checked translation beside its original, and a glossary of untranslatable words exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the recipes written in another language or dialect"
                - "Ask the agent for a first-draft translation of one recipe"
                - "Ask a fluent relative to check each translation line by line"
                - "Start a glossary of words that have no exact equivalent"
            - name: Apprenticeship on one signature dish
              description: |-
                ## Purpose
                Watching a dish once rarely means you can cook it. Making it yourself three times with the cook beside you, then once alone, is how the feel for a dough or a sauce actually passes from one pair of hands to another. Choose the dish you would most hate to lose.

                ## Milestones
                1. One signature dish chosen with the cook's agreement.
                2. Three supervised cooks completed, with corrections written down.
                3. One unsupervised cook judged by the original cook.
                4. Your apprentice notes added to the recipe page.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have cooked the chosen dish alone and the original cook has judged it a match, with their corrections on the page."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the one dish you most want to be able to cook"
                - "Ask the cook to watch you make it three times"
                - "Write down every correction they give"
                - "Cook it alone and ask them to judge the result"
            - name: Original and adapted version rule
              description: |-
                ## Purpose
                Every family recipe gets adjusted over time: less sugar, an air fryer, a supermarket substitute. Without a rule, the original quietly disappears under the edits. Decide that the cook's original stays untouched and every adaptation is saved as a named variant with date and reason, so the family can always go back.

                ## Milestones
                1. The rule written down: originals unchanged, changes saved as variants.
                2. A naming pattern for variants agreed.
                3. Already-edited recipes split back into original and variant.
                4. A variants section added to the recipe layout.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written version rule exists, and every edited recipe in the collection has its original restored beside a named variant."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the rule: originals unchanged, changes saved as named variants"
                - "Pick a naming pattern for variants, such as dish, adapter and year"
                - "Split any already-edited recipes back into original and variant"
                - "Add a variants section to the recipe layout"
            - name: Modern ingredients and appliances variants
              description: |-
                ## Purpose
                Lard, suet, old flour types and solid-fuel ovens are hard to reproduce, and many households now cook on induction or in a slow cooker. Testing a practical modern version of the five most-loved recipes, saved as a variant, keeps dishes being cooked rather than only admired.

                ## Milestones
                1. Five recipes chosen whose ingredients or equipment are hard to match today.
                2. Substitutes or equipment changes identified for each.
                3. A modern variant test-cooked for each recipe.
                4. Each variant saved beside its original with notes on the difference in taste.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five modern variants test-cooked and saved beside their originals, each with a note on how the taste differs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose five recipes with hard-to-match ingredients or equipment"
                - "Note a substitute or equipment change for each"
                - "Test-cook the modern version of the first recipe"
                - "Save each variant beside its original with a taste note"
            - name: Dietary variants for family members
              description: |-
                ## Purpose
                Coeliac grandchildren, vegetarian teenagers and cousins with nut allergies can end up unable to eat the dish everyone else gathers around. Working out and testing a variant of the key dishes for each dietary need in the family, saved as a named variant, keeps everyone at the table without losing the original.

                ## Milestones
                1. Dietary needs across the family listed, with who has each.
                2. The family's five signature dishes checked against each need.
                3. A variant tested for each clash and approved by the person who needs it.
                4. Variants labelled clearly with the need they meet.

                ## Notes
                For allergies and coeliac disease, the person's own rules and their clinician's advice come first. A variant page is a record of a recipe, not a promise that a kitchen is safe.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each signature dish has a tested variant for every dietary need in the family, approved by the person who needs it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the dietary needs in the family and who has each"
                - "Check the five signature dishes against each need"
                - "Ask the person concerned which ingredients they avoid and why"
                - "Test one variant and ask that person to approve it"
            - name: Settling conflicting versions of the same dish
              description: |-
                ## Purpose
                Two sisters learned the same soup from their mother and each insists hers is the true one. Recording both, cooking them side by side and labelling each with its branch of the family, instead of picking a winner, keeps both the peace and the history of how the dish travelled.

                ## Milestones
                1. Dishes with competing versions identified.
                2. Each version recorded from its own cook.
                3. Versions cooked side by side and differences written down.
                4. Each version labelled by branch, with neither marked as the original unless everyone agrees.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every dish with competing versions has each version recorded, compared in writing and labelled by family branch."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the dishes that more than one relative claims to make properly"
                - "Record each version from its own cook"
                - "Cook two versions side by side and note the differences"
                - "Label each version with its branch of the family"
            - name: Food safety flags on old recipes
              description: |-
                ## Purpose
                Some older recipes use methods now considered risky: raw egg desserts served to toddlers, home bottling without tested processing times, poultry cooked by eye. Flagging these before the collection is shared, with a pointer to current guidance from your national food safety agency, keeps the dish's history without passing on the risk.

                ## Milestones
                1. Every recipe read for raw eggs, home bottling, curing and undercooked meat.
                2. Each risky step flagged with a short note.
                3. Current guidance from a food safety agency linked beside each flag.
                4. Flagged recipes checked before any print or share.

                ## Notes
                Flag and point to current guidance; do not invent new processing times yourself. Bottling and curing recipes need tested methods from a recognised source.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every recipe has been read for risky methods, and each risky step carries a flag and a pointer to current guidance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read through the collection for raw eggs, bottling, curing and rare meat"
                - "Flag each risky step with a one-line note"
                - "Find your national food safety agency's guidance for each flag"
                - "Check all flags are in place before anything is printed or shared"
            - name: Crediting recipes that began in books and magazines
              description: |-
                ## Purpose
                Plenty of treasured family recipes started on a flour packet, in a newspaper column or in a well-known cookbook, then drifted over the years. Tracing the source where you can, crediting it and keeping the family's changes as the main text matters most if the collection is ever printed or posted outside the family.

                ## Milestones
                1. Recipes that look published listed, with any clues from cuttings or margins.
                2. A likely source found for as many as possible.
                3. A credit line added to each traced recipe.
                4. The family's own changes written as the main text where a book is printed.

                ## Notes
                Ingredient lists are rarely protected, but the wording of a published method usually is. Rewrite methods in your family's words before printing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every recipe with a likely published origin carries a credit line or a note that its source could not be traced."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List recipes that look as though they came from a book or packet"
                - "Search for the likely source of each one"
                - "Add a credit line to every traced recipe"
                - "Rewrite borrowed methods in the family's own words"
            - name: Choosing a printing service for a family cookbook
              description: |-
                ## Purpose
                Print-on-demand sites, local printers and photobook companies differ on price per copy, paper that survives splashes, lay-flat binding and minimum orders. Comparing three and ordering a proof before committing avoids paying for forty books with blurry photos and pages that will not stay open.

                ## Milestones
                1. Three services compared on price per copy, binding, paper and minimum order.
                2. A proof copy ordered from the front runner.
                3. The proof cooked from for a week and checked for errors.
                4. The service and specification chosen and recorded.

                ## Notes
                Start from the **Purchase decision** template. Lay-flat or spiral binding matters more in a kitchen than a hard cover.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A printing service and book specification are chosen after a proof copy has been checked in real kitchen use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the number of copies, page count and budget for the book"
                - "Compare three printing services on price, binding and paper"
                - "Order one proof copy from the front runner"
                - "Cook from the proof for a week and note every error"
            - name: Printed family cookbook for a milestone birthday
              description: |-
                ## Purpose
                An eightieth birthday, a golden wedding or a family reunion gives a cookbook a deadline and a reason. Working back from the date, with recipe sign-off, photos, layout, proofing and printing each given a slot, puts a finished book in the hands of the person it honours on the day.

                ## Milestones
                1. The date, number of copies and budget fixed.
                2. Recipes selected and approved by their cooks.
                3. Layout proofread by two relatives who did not write it.
                4. Books delivered at least two weeks before the occasion.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Printed copies of the family cookbook are delivered at least two weeks before the milestone occasion."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Fix the occasion date, number of copies and budget"
                - "Work back from the date and set deadlines for each stage"
                - "Ask each cook to approve their recipe page"
                - "Send the proof to two relatives to check before printing"
            - name: Recipe swap at a family reunion
              description: |-
                ## Purpose
                A reunion puts many cooks in one place for a day. Asking each household to bring a dish and its written recipe, with a quiet recording corner and a printed list of dishes still missing, can gather more in an afternoon than months of phone calls.

                ## Milestones
                1. Every household asked to bring one dish and its written recipe.
                2. A printed wanted list of missing dishes ready on the day.
                3. A recording corner set up with the kit.
                4. Every dish brought photographed and its recipe collected.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At the reunion, every dish brought is photographed with its recipe collected, and at least two missing dishes are recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the reunion organiser for a table and a quiet corner"
                - "Invite every household to bring a dish and its written recipe"
                - "Print the wanted list of missing dishes"
                - "Photograph every dish and collect each recipe on the day"
            - name: Cook-along video call across households
              description: |-
                ## Purpose
                Families spread across cities or countries can still cook together. A scheduled video call with everyone cooking the same dish, led by its keeper, records the method from several angles and gives distant relatives a shared evening. Sending the ingredient list a week ahead keeps it from turning into a scramble.

                ## Milestones
                1. A dish, a lead cook and a date agreed.
                2. The ingredient and equipment list sent a week before.
                3. The call recorded with everyone's permission.
                4. Questions asked on the call added to the recipe notes.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A recorded cook-along call held with at least three households, and the questions raised added to the recipe."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree the dish, lead cook and date with the family"
                - "Send the ingredient and equipment list a week ahead"
                - "Record the call once everyone has agreed"
                - "Hold the cook-along again around the same date each year @recurring(yearly)"
            - name: Memorial meal from a late relative's recipes
              description: |-
                ## Purpose
                Cooking a relative's dishes for an anniversary or memorial gathering is a way of remembering them, and often the moment others share what they recall of how the food was made. Planning the menu from their recipes and inviting memories at the table gives grief something to do together.

                ## Milestones
                1. Timing agreed with the people closest to the relative.
                2. A menu chosen from their recorded recipes.
                3. Guests invited to bring a memory of the cook.
                4. New memories and corrections added to the recipe pages.

                ## Notes
                Let those closest to the person decide when. Some families find the first year too soon.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A memorial meal is cooked from the relative's recipes, and the memories shared at it are added to the collection."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the people closest to the relative whether and when to hold the meal"
                - "Choose a menu from their recorded recipes"
                - "Invite guests to bring one memory of the cook"
                - "Cook one of their dishes on the anniversary each year @recurring(yearly)"
            - name: Recipe book for a child leaving home
              description: |-
                ## Purpose
                Young people moving out for study or work usually want the food they grew up on but have never cooked it alone. A small book of ten family recipes, chosen with them, written for a basic kitchen and scaled to one or two portions, sends them off able to cook a taste of home.

                ## Milestones
                1. Ten dishes chosen with the young person.
                2. Each recipe rewritten for basic equipment and one or two portions.
                3. At least three recipes cooked together before they leave.
                4. The book handed over in print and as a file on their phone.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A ten-recipe book scaled for one or two portions is handed over before the move, with three recipes cooked together."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the young person which ten home dishes they would miss most"
                - "Rewrite each recipe for a basic kitchen and one or two portions"
                - "Cook three of the recipes together before they leave"
                - "Give them the book in print and as a file on their phone"
            - name: Cooking family recipes with your children
              description: |-
                ## Purpose
                Children who cook a dish beside a parent or grandparent remember it, and are far more likely to keep making it as adults. Simplified picture cards, a regular cooking date and jobs matched to each child's age pass the recipes down in the most dependable way there is.

                ## Milestones
                1. Five family recipes chosen that suit children's hands.
                2. Simplified cards made with pictures for younger children.
                3. Jobs matched to each child's age, from stirring to chopping.
                4. A family dish cooked with the children every month for six months.

                ## Notes
                Invite a grandparent to lead when possible. The child learns the dish and hears the story from the person it belongs to.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly cooking sessions held with the children, each making a family recipe from a simplified card."
                cadence: rolling
              tasks:
                - "Choose five family recipes that suit children's hands"
                - "Make simple picture cards for the younger children"
                - "Match each child to jobs that suit their age"
                - "Cook one family recipe with the children @recurring(monthly:7)"
            - name: Recording recipes while a relative is in care or unwell
              description: |-
                ## Purpose
                When a cook moves into care, grows frail or begins to lose their memory, recording sessions need to change: shorter, mostly talk rather than cooking, with familiar smells, photos and old cards as prompts. Gentle, frequent visits often capture more than one long session, and the conversation itself can be a comfort.

                ## Milestones
                1. The best time of day and any topics to avoid agreed with the main carer or care staff.
                2. A set of prompts ready: old cards, photos, a spice to smell.
                3. Short visits held with one recipe question each.
                4. Everything recalled written up the same day.

                ## Notes
                Stop when the person tires, and accept that some details may be uncertain. Note them as remembered, not confirmed.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Notes from at least eight short visits are written up, each with what was recalled and how sure the cook seemed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the main carer or care staff when visits go best"
                - "Gather old cards, photos and a familiar spice as prompts"
                - "Bring one recipe question or prompt to each visit @recurring(weekly:thu)"
                - "Write up what was recalled the same day"
            - name: Rescuing recipes during a house clearance
              description: |-
                ## Purpose
                After a death or a move into care, a kitchen is often cleared in a single weekend, and recipe notebooks, annotated cookbooks and loose cards go out with the rubbish. Agreeing with whoever handles the clearance that kitchen papers are set aside first saves material that can never be replaced.

                ## Milestones
                1. The person handling the clearance asked to set kitchen papers aside.
                2. Drawers, tins, cookbooks and the backs of cupboard doors checked.
                3. Every paper find boxed and labelled with the house and date.
                4. Finds added to the scanning backlog and the inventory.

                ## Notes
                Check inside cookbooks, under drawer liners and behind framed pictures in the kitchen. Recipes hide in odd places.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All recipe papers from the house are boxed, labelled and added to the scanning backlog before the clearance finishes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask whoever is handling the clearance to set kitchen papers aside"
                - "Search drawers, tins, cookbooks and cupboard doors for recipes"
                - "Box and label every find with the house and date"
                - "Add each find to the scanning backlog"
            - name: Merging recipe traditions in a blended family
              description: |-
                ## Purpose
                Two families joined through marriage or a new partnership each bring their own festival dishes and weekday staples, and children can feel their side is fading. Recording both sets with equal care, and agreeing together which dishes appear at which occasions, gives every child a place in the collection.

                ## Milestones
                1. Each side's signature dishes listed with the children's input.
                2. Recipes from both sides recorded to the same standard.
                3. An agreed rota of which dishes appear at which occasions.
                4. Both families credited equally in the collection.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Both families' signature dishes are recorded to the same standard, with an agreed plan for when each is cooked."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask each child which dishes from their side matter most"
                - "Record recipes from both sides using the same layout"
                - "Agree which dishes appear at which occasions"
                - "Credit both families equally in the collection"
            - name: Diaspora recipes and ingredients from home
              description: |-
                ## Purpose
                Families who moved countries often cook dishes built for flours, chillies and greens that are hard to find abroad, and the second generation may know the taste but not the method. Recording the original, the adapted version the family actually cooks and where each specialist ingredient can be bought keeps both the dish and the know-how alive.

                ## Milestones
                1. Dishes from the country of origin listed with their hard-to-find ingredients.
                2. The original method and the adapted version both recorded.
                3. Shops, markets or online sellers for each specialist ingredient noted.
                4. Younger relatives shown where and how to buy them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each dish from the country of origin has its original and adapted versions recorded, with a source for every specialist ingredient."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List dishes from the country of origin and their hard-to-find ingredients"
                - "Record both the original method and the version cooked now"
                - "Note shops or online sellers for each specialist ingredient"
                - "Take a younger relative shopping for the ingredients once"
            - name: Recording visit to a relative who lives far away
              description: |-
                ## Purpose
                When the cook lives in another city or country, recording means planning a trip around their kitchen: which dishes, which market for ingredients and how many sessions a day without tiring them. A planned visit with a dish list and the kit packed makes one trip yield a year's worth of recipes.

                ## Milestones
                1. Dates agreed with the relative and travel booked.
                2. A dish list prioritised with them before travel.
                3. Sessions spread across the visit, no more than one a day.
                4. Every recipe drafted before you travel home.

                ## Notes
                Start from the **Trip** template. Leave the last day free for anything missed.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A visit completed with every dish on the agreed list recorded and drafted before travelling home."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree dates for the visit with the relative"
                - "Prioritise the dish list with them before booking travel"
                - "Pack the recording kit and spare power"
                - "Draft every recipe before travelling home"
            - name: Handing the collection to the next keeper
              description: |-
                ## Purpose
                Collections usually rest on one enthusiastic person, and they stop when that person does. Sharing the work with a younger relative, with access to the files, the tracker, the backups and the sharing agreement, makes sure the collection outlives its founder.

                ## Milestones
                1. A younger relative willing to share the work identified.
                2. Shared access to the master files, tracker and backups set up.
                3. A one-page guide to how the collection is run.
                4. The new keeper leading at least two sessions alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A second keeper has full access, a one-page guide, and has run two recording sessions without help."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a younger relative whether they would share the work"
                - "Give them access to the master files, tracker and backups"
                - "Write a one-page guide to how the collection runs"
                - "Let them lead two recording sessions on their own"
            - name: Reconstructing a lost recipe from taste memory
              description: |-
                ## Purpose
                Sometimes the cook has gone and nothing was ever written. Gathering every relative's memory of the dish, finding published recipes from the same region and era, and cooking test batches for a tasting panel of people who ate the original can bring it back close enough to recognise.

                ## Milestones
                1. Every surviving memory of the dish written down: look, smell, texture, occasion.
                2. Three published recipes from the same region and period found.
                3. Test batches judged by at least two people who ate the original.
                4. The closest version recorded, with notes on what still differs.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A reconstructed recipe judged recognisable by at least two people who ate the original, with remaining differences noted."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask every relative who ate the dish to describe it in detail"
                - "Find three published recipes from the same region and period"
                - "Cook a first test batch from the closest one"
                - "Ask two people who ate the original to judge each batch"
            - name: Oral history archive with transcripts
              description: |-
                ## Purpose
                Audio and video from recording sessions become far more useful once transcribed, dated and tagged with speaker, dish and place. An archive with a consistent naming pattern and a short index lets relatives decades from now search the family's cooking talk.

                ## Milestones
                1. A naming pattern and index fields agreed: date, speaker, dish, place.
                2. Every existing recording named and indexed.
                3. A transcript for each recording, with names checked by a relative.
                4. The archive included in every backup copy.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every recording is named, indexed and transcribed, and the archive is present in all backup copies."
                cadence: rolling
              tasks:
                - "Agree the naming pattern and index fields for recordings"
                - "Rename and index the existing recordings"
                - "Ask the agent for a first transcript of one recording, then correct names by hand"
                - "Transcribe and index one more session recording @recurring(monthly:17)"
            - name: Family food history research
              description: |-
                ## Purpose
                Dishes carry migration, rationing, poverty and regional custom inside them. Researching where your family's dishes came from, through old regional cookbooks, local archives and conversations about where relatives grew up, adds a short history note to each and often explains an odd ingredient or a strange name.

                ## Milestones
                1. The places and decades each branch of the family cooked in mapped.
                2. Old regional cookbooks or archives consulted for five key dishes.
                3. A history note added to each of those dishes.
                4. Open questions listed for future research.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five key dishes each carry a sourced history note, with the remaining open questions listed."
                cadence: rolling
              tasks:
                - "Map the places and decades where each branch of the family cooked"
                - "Search a library or archive catalogue for regional cookbooks of that era"
                - "Spend one evening following a research lead @recurring(monthly:25)"
                - "Add a short sourced history note to each researched dish"
            - name: Private family recipe website
              description: |-
                ## Purpose
                A private website or shared archive with logins for relatives makes the collection searchable from any phone in any kitchen. Choosing a platform that exports, matching its permissions to the sharing agreement and adding newly tested recipes on a fixed rhythm turns it into a living family resource.

                ## Milestones
                1. A platform chosen that allows private access and full export.
                2. Permissions set to match the sharing agreement.
                3. All tested recipes published with photos and stories.
                4. New recipes added each quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A private site holds every tested recipe, its permissions match the sharing agreement and it has been updated each quarter."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Shortlist two platforms that allow private access and full export"
                - "Set permissions to match the family sharing agreement"
                - "Publish the tested recipes with their photos and stories"
                - "Add the quarter's newly tested recipes to the site @recurring(quarterly)"
            - name: Archival care for fragile handwritten originals
              description: |-
                ## Purpose
                Grease-stained cards, brittle cuttings and notebooks with failing bindings decay fastest in kitchens, lofts and ordinary plastic wallets. Storing them in acid-free sleeves and boxes, away from heat, light and damp, and handling them as little as possible once scanned, keeps the physical originals for the next generation.

                ## Milestones
                1. Every original scanned before it is rehoused.
                2. Originals moved into acid-free sleeves and a labelled archive box.
                3. The box stored somewhere cool, dark and dry, away from the kitchen.
                4. A yearly condition check completed.

                ## Notes
                Never laminate, tape or glue originals. Ask a local archive or conservator about anything already torn, stained or mouldy.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All originals are scanned and stored in acid-free sleeves in a labelled box kept cool and dry, with a yearly check done."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm every original has been scanned before rehousing it"
                - "Buy acid-free sleeves and an archive box sized for the cards"
                - "Store the box somewhere cool, dark and dry, away from the kitchen"
                - "Check the originals for damp, fading or pests @recurring(yearly)"
---

# Family Recipe Collection

This area is for anyone who has realised that the dishes they grew up on live in one or two people's hands, and for parents who want their children to inherit them. It starts with the foundations (an inventory of dishes, a home for the collection, a standard recipe layout, the scattered cards gathered in and the eldest cooks recorded first), then the routines of monthly cook-along sessions, test cooking, scanning and backups, the skills of interviewing, measuring a handful and writing a method anyone can follow, the decisions about originals, variants and safety, the occasions that give the work a deadline, the situations that change it, such as a relative in care or a house clearance, and finally the specialist work of reconstructing lost dishes and building a lasting archive.

What repeats is a cook-along session on the 12th, a test cook on the 20th, a scanning batch on the 4th, a family share on the 15th, a tracker update on the 28th, Sunday story notes, quarterly backup checks and a yearly review with a thank-you to every contributor. The Purchase decision, Meeting notes, Content pipeline and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
