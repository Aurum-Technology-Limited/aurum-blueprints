---
id: family-parenting.family-emergency-plan
name: Family Emergency Plan
description: "A written family emergency plan: contact lists and cards, meeting points, a fire escape route, guardianship wishes, medical sheets, grab bags, and children who know exactly what to do and who to call."
category: personal
version: 1.0.0
tags: [family-parenting, family-emergency-plan, parent, emergency-contacts, fire-safety, guardianship, first-aid, evacuation]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - purchase-decision
    - operational-checklist
    - meeting-notes
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Family Emergency Plan
          description: "Preparing the family for emergencies with contact lists, meeting points, guardianship wishes and what children should do."
          projects:
            - name: One-page family emergency contact list
              description: |-
                ## Purpose
                In a real emergency phones die, contacts are locked behind a screen and the adult who knows every number may be the one who is hurt. A single printed page with every number that matters, kept on the fridge and in each adult's bag, means a babysitter, a grandparent or a ten-year-old can reach help without searching.

                ## Milestones
                1. One page listing the emergency number, both parents, two nearby adults, the out-of-area contact, each school, the family doctor and the poison advice line.
                2. Home address, postcode or zip and nearest crossroads written at the top for reading out to a call handler.
                3. Copies on the fridge, in each adult's bag and in the car glovebox.
                4. Every number on the page tested by calling it once.

                ## Notes
                Write numbers in full with the area code. A list that says "Gran" and nothing else is no use to a babysitter who has never met her.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A printed one-page contact list with at least eight tested numbers and the home address is on the fridge, in each adult's bag and in the car."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the ten people and services you would need to reach in a crisis"
                - "Add the home address and nearest crossroads at the top of the page"
                - "Print four copies for the fridge, both bags and the car"
                - "Call every number on the list to check it still connects @recurring(yearly)"
            - name: Emergency contact cards for each child
              description: |-
                ## Purpose
                Young children rarely know a parent's mobile number, and a lost seven-year-old at a festival can only say "Mummy" to the steward. A small laminated card in each child's coat, school bag and sports kit gives any helping adult two numbers to call within seconds.

                ## Milestones
                1. A card for each child with their name, two parent numbers and the out-of-area contact.
                2. Allergies or medical conditions added in a single line where relevant.
                3. Cards laminated or sleeved and sewn or clipped into coat, school bag and kit bag.
                4. Each child able to say where their card is and when to show it.

                ## Notes
                Keep the home address off cards that dangle visibly from a bag. Put it on the inside where only a helper would look.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every child has a laminated contact card with two parent numbers in their coat and school bag, and can show an adult where it is."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a card for each child with two parent numbers and their full name"
                - "Laminate the cards or put them in clear plastic sleeves"
                - "Fix one card inside each coat, school bag and kit bag"
                - "Ask each child to show you where their card is and who they would give it to"
            - name: Choosing an out-of-area family contact
              description: |-
                ## Purpose
                After a regional flood, storm or major incident local phone lines jam while long-distance calls and texts often still get through. Naming one relative or friend who lives well away from you, and who agrees to be the family's message hub, gives scattered family members one place to check in.

                ## Milestones
                1. One person living at least a few hours away asked and agreed to be the out-of-area contact.
                2. Their number on the contact list, every child's card and every phone.
                3. A simple script agreed: each person texts the contact where they are and whether they are safe.
                4. The contact holding a copy of the household's plan and key numbers.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named out-of-area contact has agreed in writing to act as message hub and is saved in every family phone and on every child's card."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a relative or friend who lives well outside your area"
                - "Ask them by phone whether they will act as the family message hub"
                - "Send them a copy of the contact list and the meeting points"
                - "Save their number in every family phone under ICE"
            - name: Home fire escape plan with two ways out
              description: |-
                ## Purpose
                Children who wake to a smoke alarm often hide under the bed or in a wardrobe rather than leave, and a house fire can make a hallway impassable in two or three minutes. Drawing a floor plan with two exits from every room, and deciding who helps the youngest, turns a frightening moment into a route everyone has walked.

                ## Milestones
                1. A simple floor plan of every level showing two ways out of each bedroom.
                2. Door and window keys kept in an agreed spot close to each exit.
                3. Each adult assigned to a named child or a baby to collect.
                4. The plan pinned up in the children's rooms at their eye level.

                ## Notes
                Your local fire service often publishes a family escape plan sheet and may offer a free home safety visit. Teach "get out, stay out, call for help": nobody goes back in for pets or belongings.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A floor plan with two marked exits per bedroom and an adult assigned to each young child is pinned up in every child's room."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch each floor of the home and mark every door and window"
                - "Mark two ways out of each bedroom and where keys are kept"
                - "Agree which adult collects which child or baby"
                - "Check whether your fire service offers a free home safety visit"
            - name: Meeting points near home and further away
              description: |-
                ## Purpose
                When a family is split up by a fire, a gas leak or a cordon, everyone needs one spot they will head for without being told. Two meeting points, one just outside the house and one in the neighbourhood that can be reached on foot, stop parents running back into danger to look for a child who is already safe.

                ## Milestones
                1. An outside meeting point chosen a safe distance from the house, such as a named lamp post or a neighbour's gate.
                2. A neighbourhood meeting point chosen for when the street is closed, such as a library, place of worship or friend's house.
                3. Both points written on the contact list and every child's card.
                4. Each child has walked to both points with a parent.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two named meeting points are written on the contact list and every child has walked to both with an adult."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a fixed object outside the house as the first meeting point"
                - "Choose a neighbourhood place that stays open and reachable on foot"
                - "Add both meeting points to the contact list and children's cards"
                - "Walk each child to both points and let them lead the way back"
            - name: Guardianship wishes for your children
              description: |-
                ## Purpose
                Parents of young children who die without written guardianship wishes leave a court or social services to decide who raises them, sometimes after a family dispute. Choosing guardians, asking them properly and recording the choice the way your legal system requires, usually in a will, is the single most consequential part of a family emergency plan.

                ## Milestones
                1. Both parents agreed on a first-choice guardian and a reserve.
                2. Each chosen guardian asked in person and their answer recorded.
                3. The choice recorded in a will or other legally recognised document with a solicitor, lawyer or notary.
                4. A letter of wishes written covering schooling, faith, contact with family and what matters to each child.
                5. Guardians told where the will and letter are kept.

                ## Notes
                Rules on appointing guardians vary by country and for separated parents. Take advice from a qualified legal professional; this project prepares the questions and the paperwork, it does not replace that advice.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first and reserve guardian are named in a signed will or equivalent legal document, both have agreed, and a letter of wishes sits with it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List three people you would trust to raise your children and why"
                - "Discuss the shortlist with your partner and agree a first choice and a reserve"
                - "Ask your first choice in person and give them time to think"
                - "Book an appointment with a solicitor or lawyer to record guardianship in a will"
                - "Revisit the guardianship choice as children and circumstances change @recurring(yearly)"
            - name: Who collects the children if we both cannot
              description: |-
                ## Purpose
                Guardianship covers the worst case, but far more common is a parent in hospital or stuck abroad with the school closing at 3.30. Agreeing two local adults who can collect the children today, stay overnight and handle the morning routine covers the first 48 hours before family arrives.

                ## Milestones
                1. Two local adults agreed as short-notice carers, with their availability on weekdays and weekends.
                2. Each carer holding a key or the key safe code, the contact list and the medical sheets.
                3. Both carers added to the authorised pickup list at each school and nursery.
                4. The children told who will come for them if a parent cannot.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two named local adults have agreed to collect and care for the children for 48 hours and are registered with each school or nursery."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask two nearby friends or relatives whether they could cover 48 hours at short notice"
                - "Give each carer a key or access code and a copy of the contact list"
                - "Tell the children by name who would collect them in an emergency"
                - "Write a one-page overnight routine for each child for the carers"
            - name: Medical information sheet for each child
              description: |-
                ## Purpose
                Paramedics and emergency department staff ask the same questions every time: allergies, medicines, conditions, weight, vaccination status. A one-page sheet per child, kept in the grab bag and on each parent's phone, lets a grandparent or babysitter answer correctly when a parent is not there.

                ## Milestones
                1. A sheet for each child with date of birth, weight, allergies, conditions, regular medicines and vaccination status.
                2. Doctor's name and number and any hospital or specialist reference numbers added.
                3. Printed copies in the grab bag and with each short-notice carer.
                4. A photo of each sheet saved on both parents' phones.

                ## Notes
                Copy medicine names and strengths from the packaging or prescription, not from memory.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every child has a current one-page medical sheet, printed in the grab bag and stored on both parents' phones."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather each child's allergies, medicines and conditions from records and packaging"
                - "Fill in one sheet per child including weight and doctor details"
                - "Put printed sheets in the grab bag and give copies to short-notice carers"
                - "Update each sheet with new medicines, weights and vaccinations @recurring(quarterly)"
            - name: School and nursery emergency pickup list
              description: |-
                ## Purpose
                Schools will only release a child to adults on their authorised list, which is exactly right until the only listed adults are both unreachable. Checking and updating the list at every school, nursery and club, and setting a password if they use one, makes sure the right person can walk out with your child.

                ## Milestones
                1. The current authorised list obtained from each school, nursery and regular club.
                2. Short-notice carers and the out-of-area contact added where allowed.
                3. A collection password set wherever the setting offers one.
                4. Each setting's emergency number saved on both parents' phones.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every school, nursery and regular club holds an authorised pickup list with at least three named adults, confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask each school office for a copy of your child's authorised pickup list"
                - "Add the two short-notice carers to every list"
                - "Set a collection password where the setting offers one"
                - "Confirm the pickup list with each school at the start of the school year @recurring(yearly)"
            - name: Household emergency risk check
              description: |-
                ## Purpose
                Families in a flood plain, a wildfire zone, an earthquake area or a block of flats face different emergencies, and a plan built for the wrong one wastes effort. Listing the five things most likely to go wrong where you actually live, using official local risk maps, tells you which projects in this area matter most.

                ## Milestones
                1. Official flood, wildfire, storm or earthquake risk for your address looked up.
                2. Home-specific risks noted: gas appliances, upstairs bedrooms, a pond, a busy road, a high-rise.
                3. The top five risks ranked by likelihood and harm.
                4. Each top risk matched to the projects in this area that address it.

                ## Notes
                Start from the **Risk register** template. Local authorities and national weather services usually publish risk maps you can search by postcode or zip.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of the five emergencies most likely at your address, each linked to the action that covers it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your address on the official flood and weather risk maps"
                - "Walk round the home listing hazards specific to it"
                - "Rank the five most likely emergencies by likelihood and harm"
                - "Ask the agent to suggest which of your top risks your plan does not yet cover"
            - name: What the school does in a lockdown or closure
              description: |-
                ## Purpose
                Schools have their own plans for lockdowns, evacuations and sudden closures, and parents who do not know them tend to drive to the gates and block the emergency services. Knowing how the school will contact you, where children are taken and how reunification works lets you act calmly on the day.

                ## Milestones
                1. Each school's emergency and closure procedure for parents read or requested.
                2. The off-site evacuation location for each school noted on the contact list.
                3. Parents signed up to every school text, app or email alert channel.
                4. Children told, in age-appropriate words, that school has a plan and to follow their teacher.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The contact list records each school's alert channel and off-site evacuation point, and both parents receive the school's alerts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each school office for the parent version of their emergency procedure"
                - "Note each school's off-site evacuation location on the contact list"
                - "Check that both parents receive the school's alert texts or app messages"
                - "Tell the children their job in a school emergency is to stay with their teacher"
            - name: Smoke and carbon monoxide alarm routine
              description: |-
                ## Purpose
                Smoke alarms with dead or removed batteries are a common feature of fatal house fires, and carbon monoxide gives no warning at all without a detector. A monthly test button press and an annual check of each alarm's replace-by date takes ten minutes and protects every bedroom.

                ## Milestones
                1. A working smoke alarm on every level and in or near every sleeping area.
                2. A carbon monoxide alarm in every room with a fuel-burning appliance.
                3. Each alarm's replace-by date written on a list.
                4. Children familiar with the sound of each alarm.

                ## Notes
                Alarms have a limited life, often around ten years; the date is printed on the back. Never take a battery out of an alarm to silence it while cooking.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every alarm in the home is tested monthly for a year, logged, and none is past its replace-by date."
                cadence: rolling
              tasks:
                - "Count and note every smoke and carbon monoxide alarm in the home"
                - "Buy alarms for any level or fuel-burning room that lacks one"
                - "Press the test button on every smoke and carbon monoxide alarm @recurring(monthly:3)"
                - "Check each alarm's replace-by date and order replacements due @recurring(yearly)"
            - name: Quarterly family fire drill
              description: |-
                ## Purpose
                A plan that has never been walked is a plan nobody will follow at 2am with a screeching alarm. Running a short drill each season, sometimes in the evening with lights low, shows whether children wake to the alarm, whether windows open and whether everyone reaches the meeting point.

                ## Milestones
                1. First drill run with everyone starting from their bedroom.
                2. Time from alarm to meeting point recorded.
                3. One problem from each drill fixed before the next, such as a stiff window or a lost key.
                4. At least one drill a year run in the evening when children are in bed.

                ## Notes
                Some children sleep through smoke alarms. If yours do in the first drill, ask your fire service about alarms with a voice or a recorded parent's message.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four drills run in a year with times logged, at least one at bedtime, and every child reaches the meeting point unaided."
                cadence: cyclic
              tasks:
                - "Tell the children a fire drill is coming and what the alarm sounds like"
                - "Run a fire drill from bedrooms and time it to the meeting point @recurring(quarterly)"
                - "Note one thing that slowed the drill and fix it within a week"
            - name: Grab bag packed and kept current
              description: |-
                ## Purpose
                Evacuating in ten minutes with small children leaves no time to find birth certificates, nappies, chargers and a favourite toy. One bag by the door with three days of essentials, children's medicines and copies of key papers means you leave with what you need and not just your keys.

                ## Milestones
                1. One sturdy bag holding water, snacks, torch, power bank, first aid kit and a change of clothes for each person.
                2. Children's medicines, medical sheets and copies of key documents in a waterproof pouch.
                3. A comfort item and a small activity for each young child.
                4. The bag kept in one agreed spot near the main exit.

                ## Notes
                Start from the **Operational checklist** template. Clothes are the first thing to go out of date: children outgrow a packed set within a few months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A grab bag with three days of essentials and current-size clothes for every family member sits by the main exit and is checked every quarter."
                cadence: rolling
              tasks:
                - "Write the grab bag contents list for your family"
                - "Pack the bag and store it in one spot by the main exit"
                - "Swap children's clothes for current sizes and replace used items @recurring(quarterly)"
                - "Show every adult in the house where the bag lives"
            - name: Three-day home supplies store
              description: |-
                ## Purpose
                Water outages, heavy snow and power cuts can keep a family at home for days with shops closed. A small store of drinking water, food that needs no cooking, baby formula if needed and spare medicines, rotated into everyday meals, covers three days without becoming wasted money.

                ## Milestones
                1. Water stored for each person and pet for three days, using the amount your emergency authority suggests.
                2. Three days of food that needs no cooking or only a kettle, chosen from what the children will actually eat.
                3. A manual can opener, paper plates and rubbish bags with the store.
                4. Each item marked with its use-by date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A three-day supply of water and no-cook food for every family member is stored, dated and rotated each quarter without anything expiring."
                cadence: rolling
              tasks:
                - "Look up how much water per person your emergency authority suggests storing"
                - "Buy three days of no-cook food the children already like"
                - "Move items nearing their date into the weekly meals and replace them @recurring(quarterly)"
            - name: Phone emergency settings for the whole family
              description: |-
                ## Purpose
                Most phones can show medical details and emergency contacts on the lock screen, share location automatically when an emergency call is made and call for help with a button press. Setting these up on every family phone, including children's, takes an evening and lets a first responder learn who to call without opening the phone.

                ## Milestones
                1. Medical ID or emergency information filled in on every adult and child phone.
                2. Emergency contacts set to show on each lock screen.
                3. Emergency SOS and location sharing on calls turned on and explained.
                4. A family location sharing setting agreed and in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every family phone shows medical details and two emergency contacts on the lock screen, checked once a quarter."
                cadence: rolling
              tasks:
                - "Fill in the medical ID or emergency information on your own phone tonight"
                - "Set up the same on each partner's and child's phone"
                - "Show each child how emergency SOS works and that it calls for real"
                - "Check every phone's medical ID and emergency contacts are current @recurring(quarterly)"
            - name: Family first aid kit kept stocked
              description: |-
                ## Purpose
                First aid kits are raided for plasters on a Tuesday and found empty when a child splits a chin on a Saturday. A monthly five-minute check against a written list, with child-specific items like a spare inhaler or an adrenaline auto-injector where prescribed, keeps the kit ready.

                ## Milestones
                1. One home kit and one car kit stocked against a written contents list.
                2. Child-specific items included where prescribed, with their expiry dates noted.
                3. Kits stored where adults can reach them and young children cannot.
                4. Every adult and older child knows where both kits are.

                ## Notes
                Ask your pharmacist what a family kit should hold. Keep prescribed emergency medicines with the child, not only in the kit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The home and car first aid kits match their written list on twelve monthly checks with no expired items."
                cadence: rolling
              tasks:
                - "Write a contents list and tape it inside the kit lid"
                - "Ask your pharmacist what a family kit should hold for your children's ages"
                - "Check the kit against the list and replace used or expired items @recurring(monthly:14)"
            - name: Emergency copies of key family documents
              description: |-
                ## Purpose
                Passports, birth certificates, insurance policies and the will are hard to replace after a fire or flood, and slow to find even when they survive. A secure digital copy plus a printed set in the grab bag means you can prove identity, claim on insurance and show guardianship papers from anywhere.

                ## Milestones
                1. A list of the family's key documents and where each original is kept.
                2. Scans of each document stored in an encrypted location both parents can reach.
                3. Paper copies of identity documents and insurance policies in the grab bag.
                4. The out-of-area contact told how to reach the copies if both parents cannot.

                ## Notes
                Never store copies of identity documents in an unencrypted email folder or shared drive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Encrypted scans of every key document are reachable by both parents, and printed copies are in the grab bag."
                cadence: rolling
              tasks:
                - "List every key family document and where its original is kept"
                - "Scan passports, birth certificates, policies and the will into encrypted storage"
                - "Print copies of identity and insurance documents for the grab bag"
                - "Add any renewed or new documents to the copies @recurring(yearly)"
            - name: Annual family emergency plan review
              description: |-
                ## Purpose
                Families change faster than plans: a new baby, a move, a child at secondary school, a grandparent who can no longer drive. One sitting a year to read the whole plan, update every name and number and choose the next improvement keeps it true to the family you are now.

                ## Milestones
                1. Every section of the plan read by both parents in one sitting.
                2. Out-of-date names, numbers, schools and medical details corrected.
                3. One improvement chosen for the coming year.
                4. Children given their part of the update in a short family chat.

                ## Notes
                Start from the **Meeting notes** template. Pairing the review with a fixed date, such as the clocks changing or a school term start, makes it stick.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated review note each year records the plan was read in full, corrections made and one improvement chosen."
                cadence: cyclic
              tasks:
                - "Pick a fixed date each year for the plan review"
                - "Hold the annual emergency plan review with both parents @recurring(yearly)"
                - "Record changes and the chosen improvement in the review note"
            - name: Teaching children to call the emergency number
              description: |-
                ## Purpose
                Children as young as three or four can make an emergency call if they have practised what to say, and many recorded calls show a child saving a parent's life. Teaching the number, when to call, and how to answer the handler's questions with name, address and what happened is the most valuable skill in this area.

                ## Milestones
                1. Each child can say the emergency number for your country and when it is for.
                2. Each child can say their full address, or point to it on the contact list.
                3. A pretend call practised with a parent playing the handler, phone switched off.
                4. Each child knows how to make an emergency call from a locked phone.

                ## Notes
                Practise with a toy phone or a switched-off handset only. Explain that real calls are for when someone is hurt, in danger or will not wake up.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every child aged four or older completes a pretend emergency call giving their name, address and what happened without prompting."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Teach each child the emergency number and three reasons to call it"
                - "Show each child how to place an emergency call from a locked phone"
                - "Practise a pretend emergency call on a switched-off phone @recurring(monthly:8)"
                - "Ask each child to tell you their full address from memory"
            - name: Children learning a parent's number by heart
              description: |-
                ## Purpose
                A child who knows one parent's mobile number can be reunited through any shop assistant or police officer, even if the card is lost and the phone is dead. Songs, rhythm and daily repetition get most five-year-olds there in a few weeks.

                ## Milestones
                1. Each child knows which parent's number they are learning.
                2. The number set to a tune or rhythm the child enjoys.
                3. The child says the full number correctly on three separate days.
                4. Older children also know the out-of-area contact's number.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child aged five or older recites one parent's full mobile number correctly on three separate days."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose which parent's number each child will learn"
                - "Make up a short song or chant for the number"
                - "Ask for the number during the walk to school for two weeks"
                - "Add the out-of-area contact's number once the first is secure"
            - name: Paediatric first aid course for parents
              description: |-
                ## Purpose
                Choking, burns, head bumps, febrile seizures and allergic reactions are the emergencies parents are most likely to face, and the first minutes matter. A certified paediatric first aid course, often a single day or two evenings, gives both parents and regular carers hands-on practice with infant and child mannequins.

                ## Milestones
                1. A certified paediatric first aid course found from a recognised provider.
                2. Both parents booked, plus any regular grandparent or nanny where possible.
                3. The course completed and certificates filed.
                4. A one-page summary of the key steps kept with the first aid kit.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both parents hold a current paediatric first aid certificate from a recognised provider, filed with the plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search for certified paediatric first aid courses within reach"
                - "Ask grandparents or your nanny whether they want to join"
                - "Book places for both parents on the same course or back to back"
                - "File the certificates and note when they need renewing"
            - name: Yearly choking and CPR refresher
              description: |-
                ## Purpose
                First aid skills fade within months, and the hand positions for a baby, a child and an adult differ. A short yearly refresher with a recognised video or app, practised on a cushion or mannequin, keeps the steps automatic.

                ## Milestones
                1. A recognised source of refresher videos for infant and child choking and CPR chosen.
                2. Both parents practise the steps on a cushion or practice mannequin.
                3. The differences for a baby, a child and an adult written on one card.
                4. Older children shown how to help a choking sibling and when to call for help.

                ## Notes
                A video refresher keeps memory fresh but does not replace a hands-on course when your certificate lapses.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Both parents complete a choking and CPR refresher each year, with the date recorded next to their course certificates."
                cadence: cyclic
              tasks:
                - "Find a refresher video from a recognised first aid organisation"
                - "Practise infant and child choking steps on a cushion together"
                - "Write the baby, child and adult differences on one card for the kit"
                - "Watch the refresher and practise the steps with your partner @recurring(yearly)"
            - name: Teaching young children what to do if lost
              description: |-
                ## Purpose
                Young children who get separated in a shopping centre, a theme park or a crowd tend to wander looking for you, which makes finding them much harder. Teaching them to stop, stay put and ask a safe helper, such as a parent with children or a uniformed staff member, gives them a plan instead of panic.

                ## Milestones
                1. Each child can repeat the stop, stay, ask rule in their own words.
                2. Each child can point out who counts as a safe helper in a shop or park.
                3. A practice run done on a quiet outing with a parent watching from close by.
                4. A meeting spot agreed at the start of every busy outing.

                ## Notes
                Before a busy day out, take a photo of each child in the clothes they are wearing. It is the first thing staff will ask for.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child under ten correctly says what they would do and who they would ask if lost, and has done one supervised practice."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Teach the stop, stay, ask rule with a picture book or role play"
                - "Point out safe helpers on your next trip to the shops"
                - "Agree a meeting spot as soon as you arrive anywhere crowded"
                - "Photograph each child in their outfit before busy days out"
            - name: Home alone emergency readiness for older children
              description: |-
                ## Purpose
                The first time a child is left alone for an hour, or walks home to an empty house, they need to know what to do if the smoke alarm sounds, a stranger knocks, they lock themselves out or a sibling is hurt. Walking through each scenario together before that day tells you whether they are ready and gives them answers they can follow.

                ## Milestones
                1. Local guidance on leaving children home alone checked for your country.
                2. Five scenarios talked through: fire alarm, knock at the door, locked out, injury, power cut.
                3. The child can say what they would do in each scenario.
                4. A spare key arrangement and a nearby adult agreed for lockouts.

                ## Notes
                Many countries have no fixed legal age but do expect parents to judge maturity. Check your local child protection guidance rather than relying on what other parents do.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An older child answers all five home alone scenarios correctly and knows the lockout plan before being left alone for the first time."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your local guidance on leaving children home alone"
                - "Talk through the five scenarios one evening with your child"
                - "Agree which neighbour your child goes to if locked out"
                - "Leave your child alone for ten minutes nearby and debrief after"
            - name: Shutting off gas, water and electricity
              description: |-
                ## Purpose
                Burst pipes, gas smells and electrical faults can turn small damage into a ruined home if nobody knows where the stopcock or the fuse box is. Finding and labelling each shut-off, and showing every adult and teenager how to use it, takes an hour and pays back the first time a pipe bursts.

                ## Milestones
                1. The water stopcock, gas valve and electrical consumer unit found and labelled.
                2. Each shut-off tested or checked that it turns freely.
                3. A torch kept near each shut-off point.
                4. Every adult and teenager in the house has turned each one off and on with supervision.

                ## Notes
                If you smell gas, leave the property and call your gas emergency line from outside. Do not switch lights or appliances on or off.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All three shut-offs are labelled with a torch nearby and every adult and teenager has operated each one under supervision."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the water stopcock, gas valve and fuse box and label each"
                - "Check the stopcock turns freely without forcing it"
                - "Put a torch next to each shut-off point"
                - "Show each adult and teenager how to turn each supply off"
            - name: Signing up to local emergency alerts
              description: |-
                ## Purpose
                Flood warnings, severe weather alerts and evacuation orders are issued hours ahead, but only reach families signed up to the right channels. Registering both parents for your area's official alerts, and knowing what each warning level means, buys time to act before the water or the storm arrives.

                ## Milestones
                1. Official alert services for your area found: weather, flood, wildfire or civil emergency.
                2. Both parents registered by text or app for each relevant service.
                3. Phone emergency alert settings turned on.
                4. The meaning of each warning level written on the contact list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both parents receive official alerts for every relevant hazard at home, and the warning levels are written on the contact list."
                cadence: rolling
              tasks:
                - "Find the official weather and flood alert services for your address"
                - "Register both parents' phones for each alert service"
                - "Turn on emergency alerts in each phone's settings"
                - "Check your alert registrations are active and the address is current @recurring(yearly)"
            - name: Buying versus building a family emergency kit
              description: |-
                ## Purpose
                Ready-made emergency kits are convenient but often hold cheap torches, adult-only supplies and nothing for babies or medical needs. Comparing two or three kits with a self-built list priced from what you already own shows which gives a better kit for your family's money.

                ## Milestones
                1. Two or three ready-made kits shortlisted with prices and contents.
                2. A self-built list priced, counting items you already have.
                3. Gaps in each option for children, babies or medical needs noted.
                4. A decision made and the kit bought or assembled.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between a ready-made and a self-built kit, with prices and child-specific gaps compared for at least two options."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Shortlist two or three ready-made family emergency kits"
                - "Price a self-built kit from your grab bag list"
                - "Note what each option lacks for your children"
                - "Record your choice and buy or assemble the kit"
            - name: Escape ladders and window keys for upstairs rooms
              description: |-
                ## Purpose
                Families with children sleeping upstairs or in a loft conversion may have no second way out if the stairs fill with smoke. Checking each upper window opens wide enough, keeping keys beside locked windows and deciding whether a certified escape ladder suits your home closes that gap.

                ## Milestones
                1. Every upstairs bedroom window checked for how wide it opens and whether it is locked.
                2. Window keys kept on a hook near each locked window, out of small children's reach.
                3. A decision made on an escape ladder for any room without a safe second exit.
                4. Older children shown how to use the second exit, with a supervised practice where safe.

                ## Notes
                Ask your fire service before relying on a ladder. For many homes the advice is to stay in a room with the door shut and call for help from the window.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every upstairs bedroom has a recorded second exit plan, with window keys in place and a ladder decision written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open each upstairs bedroom window fully and note any that stick or lock"
                - "Hang window keys on hooks near each locked window"
                - "Ask your fire service whether an escape ladder suits your home"
                - "Show older children the second way out of their room"
            - name: Power cut kit and plan for children
              description: |-
                ## Purpose
                Power cuts after dark frighten young children and can mean no heating, no cooking and no charged phones for a day or more. Torches in known places, charged power banks and a plan for cold or medical equipment turn it into a camping night rather than a crisis.

                ## Milestones
                1. A torch or head torch for each person kept in a known place.
                2. Two power banks kept charged and a car charger available.
                3. A plan for keeping warm and for any fridge-stored medicines.
                4. Children's night lights replaced with battery or rechargeable ones where useful.

                ## Notes
                Avoid candles with young children; battery lanterns are safer. Never use a gas camping stove or barbecue indoors.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each family member has a working torch in a known place and two power banks are kept charged, checked every month."
                cadence: rolling
              tasks:
                - "Put a torch in each child's bedside drawer"
                - "Buy two power banks and note where they live"
                - "Charge the power banks and test every torch @recurring(monthly:21)"
                - "Write a short plan for staying warm without power"
            - name: Money and access for whoever steps in
              description: |-
                ## Purpose
                Whoever steps in as guardian or short-notice carer also needs money for food, school costs and childcare, and access to bills and accounts that keep the home running. Checking what life cover, savings and insurance exist and how a carer would reach them, with a financial adviser where needed, stops a willing guardian being stretched beyond what they can manage.

                ## Milestones
                1. A list of existing life cover, death in service benefits, savings and insurance policies.
                2. A note of how much a guardian would need each year for each child, as an estimate.
                3. Any gap discussed with a qualified financial adviser or insurer.
                4. A sealed instruction note telling the executor or guardian where everything is.

                ## Notes
                This project organises what exists and what questions to ask. It is not financial advice; take that from a qualified adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written list of every policy and account a guardian would need, with a sealed location note held alongside the will."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every life cover, savings and insurance policy you hold"
                - "Estimate a year of costs for each child as a rough figure"
                - "Book a conversation with a financial adviser if there is a gap"
                - "Write a location note for the executor and file it with the will"
            - name: Pets in the family emergency plan
              description: |-
                ## Purpose
                Children will try to go back for a pet, and many emergency shelters do not accept animals. Deciding in advance who takes the dog or cat, packing a small pet kit and telling children firmly that firefighters rescue pets, not them, removes one of the most dangerous moments in an evacuation.

                ## Milestones
                1. A friend or kennel named to take each pet in an emergency.
                2. A pet kit with food, lead or carrier, medicines and vet records packed near the grab bag.
                3. Each pet microchipped with current contact details.
                4. Children told and able to repeat that they never go back inside for a pet.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each pet has a named emergency carer, a packed kit and current microchip details, and children can repeat the never-go-back rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a friend whether they could take your pet in an emergency"
                - "Pack a small pet kit next to the grab bag"
                - "Check each pet's microchip details are current"
                - "Tell the children the never-go-back-inside-for-a-pet rule"
            - name: Car emergency kit for family journeys
              description: |-
                ## Purpose
                Breakdowns on a motorway with children, or being stuck in snow for hours, call for warmth, water, light and a plan for getting everyone out of the car safely. A small kit in the boot and a rule about where the family waits on a fast road keeps a breakdown an inconvenience.

                ## Milestones
                1. A boot kit with blankets, water, snacks, torch, high-visibility vests and a phone charger.
                2. Spare nappies, wipes and a change of clothes for young children added.
                3. The family rule agreed for waiting behind the barrier, well away from traffic.
                4. Breakdown cover details saved in both parents' phones.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A family car kit with blankets, water, light and high-visibility vests is in the boot and checked each year before winter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pack blankets, water, snacks and a torch in a boot box"
                - "Add child-sized high-visibility vests and spare clothes"
                - "Explain the breakdown waiting rule to the children before the next long drive"
                - "Check and refill the car kit before winter @recurring(yearly)"
            - name: Emergency access to accounts and devices
              description: |-
                ## Purpose
                If one parent is in hospital, the other may be locked out of the household's email, utility accounts, children's school portals and photos. Setting up the emergency access features in your password manager and phone, and listing which accounts matter, lets a partner or trusted person keep the household running without sharing passwords day to day.

                ## Milestones
                1. A list of the accounts the household cannot run without for a month.
                2. Emergency or legacy access set up in each adult's password manager and phone platform.
                3. School, nursery and medical portals checked so both parents have their own login.
                4. The location of the emergency access instructions recorded in the plan.

                ## Notes
                Use the built-in emergency access features rather than writing passwords on paper.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both parents have emergency access to each other's critical accounts through built-in features, and each has their own login to every child's school and medical portal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the accounts the household would need for a month without you"
                - "Turn on emergency access in your password manager for your partner"
                - "Check both parents have their own login to each school and medical portal"
                - "Record where the emergency access instructions are kept"
            - name: Family emergency plan launch meeting
              description: |-
                ## Purpose
                Plans that children help to make stick far better than rules they are simply told. One relaxed family meeting, with snacks and a drawn map, to introduce the meeting points, the escape route and the contact cards makes the plan theirs and lets you hear their fears and questions.

                ## Milestones
                1. A date set for the family meeting when nobody is rushed.
                2. Each child given a job in the plan suited to their age.
                3. The escape route and meeting points shown on a map the children helped draw.
                4. Children's questions and worries noted and answered.

                ## Notes
                Start from the **Meeting notes** template. Keep it short for under-sevens and finish with something fun. The aim is calm confidence, not fear.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A family meeting is held where every child is given a named job in the plan and can point to both meeting points on a map."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a calm weekend afternoon for the family meeting"
                - "Draw a simple map of home and meeting points with the children"
                - "Give each child one age-suited job in the plan"
                - "Write down the children's questions and answer each one"
            - name: Walking the routes to the meeting points
              description: |-
                ## Purpose
                Meeting points a child has only heard about are ones they may not find under stress, in the dark or with a road closed. Walking each route together, at night as well as in daylight, and letting the children lead on the way back makes it familiar enough to follow alone.

                ## Milestones
                1. The route to the neighbourhood meeting point walked in daylight with each child.
                2. The same route walked once after dark.
                3. An alternative route found for when the usual road is blocked.
                4. Each child leads the way without help at least once.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each child has walked to the neighbourhood meeting point by day and after dark and led the route once unaided."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Walk the route to the neighbourhood meeting point with each child"
                - "Repeat the walk after dark with torches"
                - "Find a second route that avoids the main road"
                - "Let each child lead you to the meeting point"
            - name: Emergency briefing for babysitters and nannies
              description: |-
                ## Purpose
                A new babysitter arrives at seven, the parents leave at ten past, and nobody has shown them where the fire exits, the first aid kit or the medicines are. A standard ten-minute walkthrough and a printed sheet for every sitter, nanny or au pair means anyone in charge of your children can act on the plan.

                ## Milestones
                1. A one-page sitter sheet with address, contacts, medical notes, exits and meeting points.
                2. A ten-minute walkthrough routine: exits, alarms, first aid kit, grab bag, shut-offs.
                3. Every regular sitter or nanny walked through it once.
                4. The sheet kept by the front door or on the fridge.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A sitter sheet is on the fridge and every regular babysitter or nanny has had the ten-minute emergency walkthrough."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a one-page sitter sheet from your contact list and medical sheets"
                - "Write the ten-minute walkthrough as a short list"
                - "Walk each regular sitter through exits, alarms and the first aid kit"
                - "Put the sitter sheet on the fridge by the contact list"
            - name: Preparing for a forecast storm or flood
              description: |-
                ## Purpose
                Severe weather usually comes with a day or two of warning, which is enough time to charge everything, move valuables upstairs and decide where the family will go if told to leave. A ready-made checklist to run the moment an amber or red warning arrives means the preparation happens calmly instead of at midnight.

                ## Milestones
                1. A pre-storm checklist written: charging, supplies, garden items, car fuel, medicines.
                2. A flood list of what moves upstairs and in what order, if you are at flood risk.
                3. A decision written down on where the family goes if evacuation is ordered.
                4. The checklist run once as a dry run.

                ## Notes
                Start from the **Operational checklist** template. Follow official instructions on the day; they override anything in your own plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written pre-storm checklist and evacuation destination exist and have been run once as a timed dry run."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a checklist of what to do when a severe weather warning arrives"
                - "List what moves upstairs first if flooding is forecast"
                - "Agree where the family stays if told to evacuate"
                - "Run the checklist as a dry run and time it"
            - name: Handing the plan to grandparents before a stay
              description: |-
                ## Purpose
                Grandparents looking after children for a weekend or a summer week are often in an unfamiliar routine, sometimes in their own home with no plan at all. A short handover pack and a call before the stay covers medicines, contacts, the nearest emergency department and what each child knows to do.

                ## Milestones
                1. A handover pack with contacts, medical sheets, consent note and nearest hospital.
                2. A note giving grandparents permission to seek medical treatment for the children.
                3. The grandparents' own home checked for alarms and an escape route if children stay there.
                4. A call before each stay to go through anything that has changed.

                ## Notes
                Some hospitals and doctors ask for written consent from a parent before treating a child brought in by another adult. Check what your health service expects.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Grandparents hold a current handover pack with a signed treatment consent note before each stay of a night or longer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put together a handover pack for the grandparents"
                - "Write and sign a treatment consent note for the stay"
                - "Ask whether the grandparents' home has working smoke alarms"
                - "Phone the grandparents before the stay to go through changes"
            - name: Emergency plan with a baby or toddler
              description: |-
                ## Purpose
                Babies cannot walk out, cannot be told where to go and need formula, nappies and sterile water whatever is happening. Adapting the plan for under-threes, with who carries the baby, a sling by the cot and a baby section in the grab bag, removes the hardest part of an evacuation with small children.

                ## Milestones
                1. One adult named as the baby's carrier in every escape and evacuation plan.
                2. A sling or carrier kept near the cot so both hands stay free.
                3. Three days of nappies, wipes, formula or feeding supplies and ready-to-use water in the grab bag.
                4. The baby section of the bag updated each month for size and stage.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The grab bag holds three days of current-size baby supplies and a named adult and sling are assigned to the baby in the escape plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Decide which adult carries the baby in every emergency plan"
                - "Hang a sling or carrier within reach of the cot"
                - "Pack three days of baby supplies in the grab bag"
                - "Swap nappy size, clothes and feeding supplies for the baby's current stage @recurring(monthly:27)"
            - name: Plan for a child with medical needs or disability
              description: |-
                ## Purpose
                Daily medicines, a feeding pump, a ventilator or a fixed routine put a child at greater risk in a power cut or evacuation, and a stranger helping may not understand their needs. A specific plan, made with the child's care team, covers spare medicines, backup power, communication and where to go.

                ## Milestones
                1. An emergency care plan agreed with the child's clinician or specialist nurse.
                2. Spare medicines and supplies for at least several days, with expiry dates logged.
                3. Backup power for essential equipment and registration with the power supplier as a priority household where offered.
                4. A one-page communication passport describing how the child communicates and calms.

                ## Notes
                Many power companies keep a priority services register for households with medical equipment. Ask your child's team what they recommend for your local service.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clinician-agreed emergency care plan, several days of spare medicines and a communication passport are in place and checked monthly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your child's clinician or nurse for an emergency care plan"
                - "Register with your power supplier's priority services list if equipment needs power"
                - "Write a one-page communication passport for your child"
                - "Check spare medicines and supplies for expiry and quantity @recurring(monthly:5)"
            - name: Emergency plan across two homes after separation
              description: |-
                ## Purpose
                Moving between two homes, children need the same emergency rules in both, or they will freeze trying to remember which house has which meeting point. Agreeing a shared core plan with the other parent, while each home keeps its own escape route, gives children consistency even when parents disagree on much else.

                ## Milestones
                1. A shared core agreed: contact list, emergency carers, medical sheets and guardianship wishes.
                2. Each home's escape route and meeting point written down and shown to the children.
                3. A grab bag or medicine set kept in both homes for children with medical needs.
                4. A rule for notifying the other parent at once in any emergency involving the children.

                ## Notes
                Where communication is difficult, use the same written channel you use for other parenting matters, and keep emergency notes factual.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both homes hold the same contact list and medical sheets, and each has a written escape route the children have practised."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Send the other parent the contact list and medical sheets to agree a shared core"
                - "Ask the children to show you the escape route in the other home"
                - "Agree how each parent notifies the other in an emergency"
                - "Check both homes' contact lists still match @recurring(quarterly)"
            - name: Teenagers' emergency plan for nights out
              description: |-
                ## Purpose
                Teenagers spend more time away from home than anyone else in the family, on late buses, at parties and in town centres, often with a dying phone. A teen-specific plan, with a no-questions-asked pickup promise, a code word for getting out of a bad situation and money for a taxi, keeps them reachable and willing to call.

                ## Milestones
                1. A no-questions-asked collection promise agreed and written down.
                2. A code word or text the teenager can send to be called home without losing face.
                3. Emergency taxi money or a ride-share account set up for them.
                4. Your teenager can name what to do if a friend is very drunk, unconscious or hurt.

                ## Notes
                Hold the conversation outside a crisis. Teenagers are far more likely to call if they trust the promise will be kept.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written teen emergency agreement with a code word, collection promise and taxi fund exists and the teenager can explain what to do for an unconscious friend."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a calm moment to talk about getting home safely"
                - "Agree a code word text that means come and get me now"
                - "Set up emergency taxi money or a ride-share account"
                - "Talk through the recovery position and when to call for help"
            - name: Emergency plan for family trips abroad
              description: |-
                ## Purpose
                Lost passports, a child separated at an airport or a medical emergency in a country where you do not speak the language are far harder with children in tow. Preparing before departure, with copies of documents, the local emergency number, the nearest embassy or consulate and insurance details, makes a crisis abroad manageable.

                ## Milestones
                1. The destination's emergency number, nearest embassy or consulate and nearest hospital saved on both phones.
                2. Copies of passports and travel insurance stored securely and printed.
                3. Children given a card with the hotel name and address in the local language.
                4. A family meeting rule agreed for airports, stations and crowded attractions.

                ## Notes
                Some countries ask for a signed consent letter when a child travels with only one parent. Check entry requirements well before you book.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before departure, both phones hold the local emergency number and embassy details and every child carries a hotel card in the local language."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the local emergency number and nearest embassy for your destination"
                - "Print copies of passports and the travel insurance policy"
                - "Make each child a card with the hotel address in the local language"
                - "Agree a meeting rule for airports and busy attractions"
            - name: Redoing the plan after moving house
              description: |-
                ## Purpose
                New homes come with unknown exits, alarms of unknown age, a different stopcock and a neighbourhood the children do not yet know. Running through the core of the plan in the first fortnight after a move, before the boxes are unpacked, catches the gaps while the family is most exposed.

                ## Milestones
                1. Every smoke and carbon monoxide alarm in the new home tested and its replace-by date noted.
                2. A new fire escape route drawn with two ways out of each bedroom.
                3. New meeting points chosen and walked with the children.
                4. The address, schools and doctor updated on the contact list, children's cards and medical sheets.

                ## Notes
                Change the locks or ask for all keys back from the previous owners, and find the shut-offs before you need them.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within two weeks of moving, the new home has tested alarms, a drawn escape route, walked meeting points and updated contact cards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Test every alarm in the new home on the first night"
                - "Draw the new escape route and pin it in each bedroom"
                - "Walk the children to the new meeting points"
                - "Update the address on the contact list, cards and medical sheets"
            - name: If the only adult at home collapses
              description: |-
                ## Purpose
                Single parents, and parents often home alone with young children, face a specific risk: if they faint, have a seizure or fall, a child may be the only one there. Teaching children what to do if a parent will not wake, and making sure a nearby adult can get in, covers the scenario most plans forget.

                ## Milestones
                1. Each child can say what to do if a parent will not wake: call the emergency number, open the front door, wait.
                2. The front door can be opened from inside by the oldest child, or a key safe code is held by the emergency services and a neighbour.
                3. A neighbour or friend agreed as the first person a child calls after the emergency number.
                4. Any parental health condition written on the adult's own medical sheet by the phone.

                ## Notes
                Keep it matter-of-fact and practise as a game. Children who know what to do are less frightened, not more.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every child aged four or older can describe the three steps if a parent will not wake, and a nearby adult can get into the home."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Teach each child the three steps if you will not wake up"
                - "Make sure the oldest child can open the front door from inside"
                - "Ask a neighbour to be the first person your child calls after the emergency number"
                - "Write your own health conditions and medicines on a sheet by the phone"
            - name: Family tabletop emergency exercise
              description: |-
                ## Purpose
                Drills test the route, but a tabletop exercise tests decisions: what if the meeting point is flooded, a parent is at work across the city and the phones are down. Talking through one scenario a month over dinner, older children included, shows gaps in the plan that no drill will find.

                ## Milestones
                1. A list of twelve family-specific scenarios, one for each month.
                2. Each scenario talked through over a meal with everyone giving their answer.
                3. One gap found per scenario written down and given an owner.
                4. The plan updated after each exercise where needed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly scenario talks are held in a year, each with its gap recorded and the plan updated where needed."
                cadence: rolling
              tasks:
                - "Ask the agent to draft twelve emergency scenarios suited to your home and children's ages"
                - "Talk through one scenario at a family meal @recurring(monthly:16)"
                - "Write down the gap each scenario exposes and who will fix it"
            - name: Shelter in place or evacuate decision guide
              description: |-
                ## Purpose
                Some emergencies, such as a chemical leak or severe storm, call for staying inside with windows shut, while others, such as rising water or wildfire, call for leaving early. A one-page guide to which applies, what to do in each case and a ten-minute leaving list stops the family hesitating between the two.

                ## Milestones
                1. Official advice on shelter-in-place and evacuation for your area read.
                2. A shelter room chosen with few windows and supplies within reach.
                3. A ten-minute leaving list: people, pets, grab bag, medicines, phone chargers, lock up.
                4. Both adults agree who makes the call and how the children are told.

                ## Notes
                Official instructions on the day always override your own guide. This project prepares the family to follow them quickly.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page shelter or evacuate guide with a chosen shelter room and a ten-minute leaving list is on the fridge with the contact list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your emergency authority's advice on sheltering in place"
                - "Choose the shelter room and store water and a torch there"
                - "Write the ten-minute leaving list in priority order"
                - "Time a leaving drill with the children and the grab bag"
            - name: Street mutual aid and neighbour contacts
              description: |-
                ## Purpose
                Neighbours are usually the first people on the scene in a fire, flood or medical crisis, long before emergency services. Swapping numbers with the households either side and across the road, and knowing who is elderly or alone, means your children have trusted adults close by and your family can help others in return.

                ## Milestones
                1. Numbers swapped with at least three nearby households.
                2. A street group chat joined or started for emergencies and outages.
                3. Vulnerable neighbours known and an offer of help made.
                4. Children able to name which neighbours they could go to.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "At least three neighbouring households have swapped emergency numbers with you and the children can name two they could go to."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Knock on three neighbours' doors and swap phone numbers"
                - "Join or set up a street group chat for emergencies"
                - "Find out which nearby neighbours live alone or need extra help"
                - "Introduce the children to the neighbours they could go to"
            - name: Family recovery plan after an emergency
              description: |-
                ## Purpose
                When the immediate danger is over, families face insurance claims, temporary housing, missed school and children who cannot sleep or are scared of the smoke alarm. Writing down in advance the first-week steps for paperwork, school and children's emotional recovery means you are not working it out while exhausted.

                ## Milestones
                1. A first-week list: insurer, landlord or mortgage lender, school, employer, doctor.
                2. Insurance policy numbers and claim lines noted with the document copies.
                3. Signs of distress in children to watch for, from your health service's guidance, noted.
                4. Where to get support for children after a frightening event listed.

                ## Notes
                Children often react weeks later, through bedwetting, nightmares or clinginess. Speak to your doctor or the school if signs last.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written first-week recovery list with insurer contacts and children's support sources sits with the emergency document copies."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the first-week calls list: insurer, school, employer, doctor"
                - "Note insurance policy numbers and claim lines next to the document copies"
                - "Read your health service's guidance on children after frightening events"
                - "List local support services for children who have been through an emergency"
---

# Family Emergency Plan

This area is for parents who want the family to know what to do when something goes badly wrong, from a kitchen fire at night to a parent rushed to hospital while the children are at school. It starts with the foundations (the contact list, children's cards, meeting points, a fire escape route, guardianship wishes and who collects the children tonight), then the routines that keep the plan alive, the skills children and adults need, the kit and decisions, the dated drills and briefings, the variants for babies, medical needs, two homes, teenagers and travel, and finally the advanced work of evacuation, neighbours and recovery.

What repeats is a monthly alarm test, a monthly first aid kit check, quarterly fire drills and grab bag swaps, a quarterly look at phone emergency settings, and a yearly review of the whole plan, the guardianship choice and the school pickup list. The Risk register, Purchase decision, Operational checklist and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
