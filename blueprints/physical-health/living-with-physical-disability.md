---
id: physical-health.living-with-physical-disability
name: Living With Physical Disability
description: "An access needs profile, equipment that is serviced before it fails, skin and care routines that hold, and planned adaptations, so daily life with a physical disability runs on your terms."
category: personal
version: 1.0.0
tags: [physical-health, living-with-physical-disability, everyone, wheelchair-users, mobility-equipment, home-adaptations, pressure-care, personal-assistants]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - vendor
    - trip
    - onboarding-plan
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Living With Physical Disability
          description: "Managing health, equipment, adaptations and specialist care when living with a physical disability, so independence and comfort are planned rather than improvised."
          projects:
            - name: One-page access needs profile
              description: |-
                ## Purpose
                Every new nurse, therapist, driver or assistant asks the same questions, and answering from memory under pressure means things get missed. A single page covering how you transfer, what equipment you rely on, how you communicate and what help you need lets anyone get it right the first time.

                ## Milestones
                1. One page written covering mobility, transfers, personal care, communication and fatigue.
                2. The three things that most often go wrong when people help you listed in plain words.
                3. The profile checked by someone who knows your routine well.
                4. Copies saved on your phone, printed in your bag and shared with regular helpers.

                ## Notes
                Write it in the first person ("I transfer best from my left side") so it reads as instructions, not a medical summary.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page access needs profile exists in print and on your phone, and every regular helper has a copy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five tasks you most often need help with and how you like them done"
                - "Write how you transfer, including your stronger side and any equipment"
                - "Ask a regular helper to read the draft and point out gaps"
                - "Print two copies and save the page as a phone favourite"
            - name: Care and equipment team contact map
              description: |-
                ## Purpose
                Disability care is usually spread across an occupational therapist, a wheelchair service, a specialist nurse, suppliers, repair lines and a social care contact, and nobody else holds the whole list. Mapping who does what, and who to ring when something breaks on a Friday evening, saves days when it matters.

                ## Milestones
                1. Every professional and service involved in your care listed with role, phone and email.
                2. Out-of-hours and emergency repair numbers marked separately.
                3. Each contact's reference number for you, such as a client or equipment number, recorded.
                4. The map shared with whoever coordinates your care day to day.

                ## Notes
                Ask each service what their reference number for you is. Quoting it on the first call often halves the time it takes to get help.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact map naming every care and equipment service, with out-of-hours numbers and your reference numbers, is saved and shared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather letters and leaflets from every service involved in your care"
                - "Write each contact's role, phone number and your reference number"
                - "Find the out-of-hours repair number for your wheelchair and hoist"
                - "Share the finished map with your main carer or family contact"
            - name: Equipment inventory with serial numbers and warranties
              description: |-
                ## Purpose
                When a powerchair controller fails or a hoist is recalled, the first question is always the model, serial number and who owns it. An inventory of every piece of equipment, whether bought, loaned or funded, turns a long phone call into a short one and shows what is due for replacement.

                ## Milestones
                1. Each item listed with make, model, serial number and date received.
                2. Ownership recorded for each item: yours, on loan, or funded with conditions.
                3. Warranty end dates and the supplier responsible for repairs noted.
                4. Photos of serial plates stored with the list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory lists every piece of disability equipment with serial number, ownership, warranty date and repair contact."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk round the house and list every aid and piece of equipment"
                - "Photograph the serial plate on each larger item"
                - "Note who owns each item and who repairs it"
                - "Update the inventory after any repair, loan or new item @recurring(quarterly)"
            - name: Occupational therapy home assessment
              description: |-
                ## Purpose
                An occupational therapist can see risks and solutions in your home that you have stopped noticing, and their assessment is often the route to funded equipment and adaptations. Asking for one with a clear list of the tasks that are hard right now makes the visit productive.

                ## Milestones
                1. An occupational therapy assessment requested through your doctor, social care or a private therapist.
                2. A list of daily tasks that are difficult or risky prepared before the visit.
                3. The visit completed with the therapist seeing you do the hard tasks, not just hearing about them.
                4. The written recommendations received and each one marked as agreed, ordered or declined.

                ## Notes
                Show the therapist your worst time of day if you can. A visit at your best hour can understate what you need.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An occupational therapy home assessment has taken place and a written list of recommendations is filed with a status against each one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor or social care team how to get an occupational therapy referral"
                - "Write down every daily task that is hard, slow or risky"
                - "Book the visit for the time of day you find hardest"
                - "Chase the written report two weeks after the visit"
            - name: Baseline of what your body can do today
              description: |-
                ## Purpose
                Gradual change, a little less reach, a shorter time sitting comfortably, a transfer that needs more effort, is easy to miss until it becomes a crisis. Recording a simple baseline now gives you and your clinicians something concrete to compare against at every review.

                ## Milestones
                1. Sitting tolerance, transfer ease, reach and walking or wheeling distance written down with today's date.
                2. Pain, fatigue and sleep described on a simple 0 to 10 scale.
                3. Weight recorded, using a seated or wheelchair scale if needed.
                4. The baseline stored where you will find it before your next appointment.

                ## Notes
                Choose measures you can repeat at home without help. A consistent rough measure beats a precise one you only take once.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated baseline of sitting tolerance, transfers, reach, distance, pain, fatigue and weight is written down and stored."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Time how long you can sit comfortably before needing to shift"
                - "Measure how far you can walk or wheel without stopping"
                - "Find a place where you can be weighed in your chair or seated"
                - "Score your usual pain, fatigue and sleep from 0 to 10"
            - name: Emergency sheet for paramedics and hospital staff
              description: |-
                ## Purpose
                In an emergency the people helping you will not know how to move you safely, which equipment must come with you, or that your normal speech, posture or blood pressure looks unusual to them. A short sheet by the door and on your phone answers those questions before harm is done.

                ## Milestones
                1. One sheet covering your condition, safe moving method, normal baselines and equipment that must travel with you.
                2. Allergies, current medicines and the contact for your main carer included.
                3. A copy placed by the front door, one in your wheelchair bag and one on your phone lock screen.
                4. The sheet reviewed after any change in condition or equipment.

                ## Notes
                Include what is normal for you, such as low resting blood pressure or limited speech, so staff do not treat your baseline as an emergency.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An emergency sheet with moving method, baselines, medicines and contacts is in three places: by the door, in the chair bag and on the phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write how you must be moved and what must not be done"
                - "Add your normal baselines, medicines, allergies and emergency contact"
                - "Put copies by the front door, in your chair bag and on your phone"
                - "Reread the emergency sheet and update anything that has changed @recurring(yearly)"
            - name: Funding routes for equipment and care
              description: |-
                ## Purpose
                Equipment, adaptations and support are often partly paid for by health services, local councils, charities or insurance, but each route has its own forms, assessments and waiting times. Knowing which routes apply to you before you need something big stops you paying for what you might have been funded for.

                ## Milestones
                1. The main public, charity and insurance routes for equipment and care in your area listed.
                2. Eligibility rules and evidence needed noted for each route that fits you.
                3. Current awards, review dates and conditions recorded in one place.
                4. Any application you qualify for but have not made started or deliberately set aside.

                ## Notes
                Disability advice organisations and charities for your condition usually know the local routes far better than general guidance does. Ask them first.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of funding routes that apply to you, with eligibility, evidence needed and current award review dates, is written and acted on."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a disability advice service which funding routes apply where you live"
                - "List the awards you already receive with their review dates"
                - "Gather the evidence each new route asks for"
                - "Ask the agent to draft a summary of the routes and their deadlines"
            - name: Daily routine and energy map
              description: |-
                ## Purpose
                Care visits, transfers, personal care and appointments all draw on the same limited energy, and a day built around other people's timings can leave nothing for what you want to do. Mapping a typical day hour by hour shows where the effort goes and which tasks to move, share or drop.

                ## Milestones
                1. Three typical days written out hour by hour, including care visits and rest.
                2. Each activity marked as high, medium or low effort.
                3. Two or three changes identified, such as moving a shower to the evening or using a perching stool.
                4. The changes tried for two weeks and kept or dropped.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written map of a typical day with effort ratings exists, and at least two changes have been tried for two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down yesterday hour by hour, including care visits"
                - "Mark each activity high, medium or low effort"
                - "Pick two tasks to move, share or simplify"
                - "Note after two weeks whether each change helped"
            - name: Power cut plan for powered equipment
              description: |-
                ## Purpose
                Powerchairs, profiling beds, air pressure mattresses, hoists and breathing equipment can all stop working in a power cut, and some fail in ways that are unsafe. A written plan for the first few hours, plus registration with your electricity supplier's priority list where one exists, keeps a cut from becoming an emergency.

                ## Milestones
                1. Every powered item listed with how long it runs on battery and what happens when power fails.
                2. Manual fallbacks known, such as lowering a bed by hand or deflating a mattress safely.
                3. Registration with your energy supplier or network operator's priority service confirmed, where offered.
                4. A charged backup battery or torch, and a person to call, kept ready.

                ## Notes
                Air mattresses vary: some hold pressure for hours, others go flat quickly. Ask the supplier exactly what yours does.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written power cut plan covers every powered item, and priority registration with the energy supplier is confirmed where available."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each powered item and how long its battery lasts"
                - "Ask each supplier what the item does when power fails"
                - "Register with your energy supplier's priority service if one exists"
                - "Test the manual lowering and battery backup on each powered item @recurring(quarterly)"
            - name: Weekly wheelchair safety check
              description: |-
                ## Purpose
                Soft tyres, loose brakes and worn casters make every push harder and every transfer riskier, and most faults give weeks of warning before they fail. Ten minutes once a week catches them while they are still cheap and quick to fix.

                ## Milestones
                1. A written checklist covering tyres, brakes, casters, footplates, armrests, cushion and battery.
                2. The check done weekly with faults noted on the same sheet.
                3. Any fault you cannot fix reported to the repair service within two days.

                ## Notes
                Start from the **Operational checklist** template. Tyre pressure is printed on the tyre wall; a small bike pump with a gauge does the job.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The wheelchair checklist is completed every week for three months, with every fault either fixed or reported."
                cadence: rolling
              tasks:
                - "Write a checklist for tyres, brakes, casters, footplates and battery"
                - "Buy a pump with a pressure gauge that fits your valves"
                - "Run the wheelchair safety check and note any faults @recurring(weekly:sun)"
            - name: Daily skin and pressure area check
              description: |-
                ## Purpose
                Pressure ulcers start as a patch of red or darker skin that does not fade, often over the base of the spine, hips, heels or sitting bones, and they can become serious within days. Looking at those areas every day, with a mirror or a helper, catches damage while relieving pressure is still enough.

                ## Milestones
                1. The pressure areas that matter for your position identified with your nurse or therapist.
                2. A daily check routine set, using a long-handled mirror, phone camera or helper.
                3. A clear rule written down for what to do when a mark does not fade.
                4. The daily check done for a month without gaps.

                ## Notes
                On darker skin, early damage may look purple, blue or shiny rather than red, and may feel warmer or harder. Ask your nurse what to look for on your skin.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily skin check is done for 30 days in a row and the action rule for a mark that does not fade is written down."
                cadence: rolling
              tasks:
                - "Ask your nurse or therapist which pressure areas to check for your position"
                - "Buy a long-handled inspection mirror or set up a phone camera stand"
                - "Check your pressure areas and note any mark that does not fade @recurring(daily)"
                - "Write what you will do if a mark lasts more than half an hour"
            - name: Seating cushion care and replacement cycle
              description: |-
                ## Purpose
                Pressure-relieving cushions only work if they are the right way round, correctly inflated and not worn out, and foam and gel ones lose their support long before they look tired. A monthly inspection and a known replacement date protect your skin and posture.

                ## Milestones
                1. The cushion type, size and replacement guidance from the supplier recorded.
                2. A monthly check of inflation, cover, orientation and foam firmness in place.
                3. A replacement date set based on the supplier's guidance and your use.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The cushion is inspected monthly and a replacement date from the supplier's guidance is recorded."
                cadence: cyclic
              tasks:
                - "Find the cushion's model and the supplier's replacement guidance"
                - "Mark the front and top of the cushion so helpers fit it correctly"
                - "Inspect the cushion inflation, cover and firmness @recurring(monthly:12)"
            - name: Bladder and bowel routine diary
              description: |-
                ## Purpose
                Many physical disabilities affect bladder and bowel control, and a routine that worked last year can drift with new medicines, less movement or a change in diet. A short diary reviewed each month shows patterns early and gives your continence nurse or doctor real information instead of a guess.

                ## Milestones
                1. A simple diary format agreed, covering timing, fluids, accidents and any discomfort.
                2. Two weeks of entries completed before your next continence or doctor appointment.
                3. A monthly review in place that compares this month with last.
                4. Changes worth discussing listed for the next appointment.

                ## Notes
                Fever, cloudy or strong-smelling urine, or new pain can signal an infection, which can make spasms or other symptoms worse. Agree with your clinician when to call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The bladder and bowel diary is reviewed every month and a list of changes is taken to each continence or doctor appointment."
                cadence: rolling
              tasks:
                - "Choose a diary format, a notebook or an app, that you will keep"
                - "Keep two weeks of full entries before your next appointment"
                - "Review the month's diary for changes in timing or accidents @recurring(monthly:20)"
            - name: Medical supplies stock and reorder cycle
              description: |-
                ## Purpose
                Catheters, continence products, dressings, gloves and sling liners are dull until they run out on a bank holiday weekend. Knowing your monthly usage and ordering at a fixed point in the month keeps a two-week buffer without filling the spare room.

                ## Milestones
                1. Every regular supply listed with monthly usage and the supplier for each.
                2. A minimum stock level set for each item, usually two weeks of use.
                3. A monthly stock count and order routine running on a fixed day.
                4. Delivery delays and substitutions noted so orders can be adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each regular supply has a minimum stock level, and the monthly count and order has run for three months without running out."
                cadence: rolling
              tasks:
                - "List every regular supply with how many you use a month"
                - "Set a minimum stock level of two weeks for each item"
                - "Count supplies and place the month's orders @recurring(monthly:8)"
                - "Note any delivery delay or substitution and adjust the next order"
            - name: Equipment servicing calendar
              description: |-
                ## Purpose
                Hoists, slings, powerchairs, profiling beds and stairlifts usually need regular safety inspections and servicing, and in many countries hoists and slings must be inspected every six months. A calendar of what is due when, and who does it, prevents the failure that strands you in bed or in the chair.

                ## Milestones
                1. Every serviceable item listed with its service interval and the company responsible.
                2. The date of the last service and inspection recorded for each.
                3. Upcoming services booked at least a month ahead.
                4. Inspection certificates or reports filed with the equipment inventory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every serviceable item has a recorded interval, last service date and next booking, and no inspection is overdue."
                cadence: cyclic
              tasks:
                - "Find the service interval for each hoist, sling, bed and powerchair"
                - "Record the last inspection date from labels or paperwork"
                - "Check the servicing calendar and book anything due next month @recurring(monthly:26)"
            - name: Weekly care and assistant rota
              description: |-
                ## Purpose
                If you rely on paid carers, personal assistants or family for daily tasks, one unfilled shift can mean a missed meal, a missed transfer or a day in bed. Confirming next week's rota every week, with a named backup for each critical slot, makes gaps visible while there is still time to fill them.

                ## Milestones
                1. A weekly rota showing who covers each visit or shift.
                2. Critical slots, such as getting up and going to bed, marked with a named backup.
                3. The rota confirmed with every helper a few days before the week starts.
                4. Gaps and late cancellations logged so patterns can be raised with the agency or helpers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Next week's rota is confirmed every week, with a backup named for each critical slot, for three months in a row."
                cadence: rolling
              tasks:
                - "Write out a typical week of visits or shifts and who covers them"
                - "Mark the slots you cannot safely go without"
                - "Confirm next week's rota with every helper and fill any gaps @recurring(weekly:thu)"
                - "Log any missed or late visit with date and reason"
            - name: Monthly body check-in against your baseline
              description: |-
                ## Purpose
                Secondary problems such as shoulder pain, weight change, swollen ankles or shorter sitting tolerance creep in slowly when you live with a physical disability. A fifteen-minute check against your baseline once a month turns vague worry into a short, dated list worth taking to your clinician.

                ## Milestones
                1. A short monthly checklist built from your baseline measures.
                2. Each month's scores recorded in one log.
                3. Any measure that has worsened for two months in a row flagged for your clinician.

                ## Notes
                Start from the **Metrics log** template. Keep it to five or six measures so it stays quick.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The monthly check-in is logged for six months, and any measure worse two months running has been raised with a clinician."
                cadence: rolling
              tasks:
                - "Pick five or six measures from your baseline to repeat monthly"
                - "Set up a log with one row per month"
                - "Repeat your baseline measures and log the scores @recurring(monthly:3)"
            - name: Annual disability health review
              description: |-
                ## Purpose
                Appointments tend to focus on whatever is wrong that day, so the slow issues that come with long-term disability, bone health, bladder function, weight, shoulders, skin, breathing and mood, can go years without a proper look. Booking one review a year that covers them all, with your notes ready, closes that gap.

                ## Milestones
                1. A yearly review booked with your doctor or specialist team, asked for as a longer appointment.
                2. Your monthly log, questions and equipment issues summarised on one page beforehand.
                3. Each secondary health area discussed or deliberately deferred.
                4. Agreed actions, referrals and tests written down with who owns them.

                ## Notes
                Ask for a double appointment and an accessible room with a height-adjustable couch or hoist if you need one. You are entitled to ask.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A yearly review covering bone, bladder, skin, weight, shoulders, breathing and mood has taken place, with actions written down."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Book a long annual review and ask for an accessible room"
                - "Summarise the year's monthly log and questions on one page"
                - "Book the annual disability health review @recurring(yearly)"
                - "Write down each agreed action and who will do it"
            - name: Daily stretching to prevent stiffness
              description: |-
                ## Purpose
                When muscles are weak, inactive or tight from altered tone, joints can stiffen into fixed positions that make dressing, sitting and transfers harder. A short daily stretching routine, set by your physiotherapist and done by you or a helper, protects range of movement you will want in ten years.

                ## Milestones
                1. A stretching routine of five to eight movements agreed with a physiotherapist.
                2. Each stretch written or filmed so helpers can do it the same way.
                3. The routine fitted into an existing daily slot, such as after getting up.
                4. Range of movement rechecked by the physiotherapist after three months.

                ## Notes
                Stretches should not cause sharp pain. If a joint is getting harder to move despite stretching, ask about a review rather than pushing harder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An agreed stretching routine is done daily for three months and range of movement has been rechecked by a physiotherapist."
                cadence: rolling
              tasks:
                - "Ask your physiotherapist for a written daily stretching routine"
                - "Film each stretch on your phone for helpers to follow"
                - "Do the daily stretching routine @recurring(daily)"
            - name: Adapted exercise sessions twice a week
              description: |-
                ## Purpose
                Disabled people are far less likely to get regular exercise, often because gyms, classes and changing rooms are not designed for them, yet strength and fitness protect heart health, mood and independence. Finding two adapted sessions a week that you can actually get to, such as seated circuits, hand cycling, swimming or wheelchair sport, makes it routine.

                ## Milestones
                1. Accessible options within reach listed, including changing facilities and transport.
                2. Two sessions tried and one chosen to keep.
                3. Two sessions a week happening for two months.
                4. Any pain or skin issue after exercise reported to your physiotherapist.

                ## Notes
                Inclusive sport organisations and charities for your condition often list accessible clubs and instructors trained in disability.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two adapted exercise sessions a week are completed for eight weeks and logged."
                cadence: rolling
              tasks:
                - "Search for inclusive or adapted sport sessions near you"
                - "Phone one venue to check changing facilities and access"
                - "Book two taster sessions in different activities"
                - "Do an adapted exercise session @recurring(weekly:tue,sat)"
            - name: Safe transfers for you and your helpers
              description: |-
                ## Purpose
                Transfers between bed, chair, toilet and car are where most falls and helper back injuries happen. Learning the right technique and equipment for each transfer, and making sure everyone who helps does it the same way, cuts the risk for both of you.

                ## Milestones
                1. Each regular transfer described with method, equipment and number of helpers needed.
                2. The methods taught or checked by an occupational therapist or physiotherapist.
                3. Transfer boards, turning discs or slings matched to each transfer.
                4. Every regular helper shown the methods and seen doing them correctly.

                ## Notes
                Never let a helper lift you by the arms or under the armpits. It risks shoulder damage for you and back injury for them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every regular transfer has a written method checked by a therapist, and every regular helper has been seen doing it correctly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every transfer you do in a normal week"
                - "Ask your therapist to watch and correct your riskiest transfer"
                - "Write each method in steps and add it to your access needs profile"
                - "Watch each new helper do the transfers before they work alone"
            - name: Directing your own care clearly
              description: |-
                ## Purpose
                Whether help comes from an agency, an employed assistant or family, it goes better when you can explain exactly what you want, give feedback without friction and say no. Practising short, clear instructions for your routines makes every new helper faster to train and every day less tiring.

                ## Milestones
                1. Your main routines written as short step-by-step instructions.
                2. A standard way to give feedback chosen and used, such as a quick end-of-shift check.
                3. One difficult conversation, such as about lateness or rough handling, prepared and held.
                4. The instructions tested with a new or occasional helper.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written step-by-step instructions exist for your main routines and have been used to brief at least one new or occasional helper."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write your morning routine in ten steps or fewer"
                - "Ask the agent to turn your notes into clear instructions for a new helper"
                - "Rehearse how you will raise a recurring problem with a helper"
                - "Try the instructions with an occasional helper and fix what confused them"
            - name: Wheelchair skills course
              description: |-
                ## Purpose
                Kerbs, slopes, uneven pavements and getting back into the chair after a tip-out are skills, not luck, and few people are taught them properly when they first get a chair. A structured course or sessions with an experienced user can widen where you go alone.

                ## Milestones
                1. A wheelchair skills course, peer trainer or therapist session found.
                2. Kerbs, slopes, rough ground and back-wheel balance practised with a spotter.
                3. Getting back into the chair from the floor practised, or a plan made if it is not possible.
                4. Two places you used to avoid visited independently.

                ## Notes
                Peer trainers who use wheelchairs themselves often teach the practical tricks that clinical sessions skip.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least four wheelchair skills have been practised with a trainer, and two previously avoided places have been visited alone."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Search for wheelchair skills training or peer trainers near you"
                - "Book a first session and list the obstacles you want to tackle"
                - "Practise back-wheel balance with a spotter behind you"
                - "Visit one place you used to avoid and note what was hard"
            - name: Warning signs specific to your condition
              description: |-
                ## Purpose
                Some disabilities carry their own emergencies: autonomic dysreflexia after a high spinal cord injury, shunt problems, infections that show up only as rising spasms, or breathing that weakens overnight. Learning the signs that matter for your condition, and teaching them to helpers, can be life-saving.

                ## Milestones
                1. The warning signs for your condition confirmed with your specialist team.
                2. What to do for each sign written down, including when to call emergency services.
                3. A wallet card or phone note made for any condition-specific emergency.
                4. Every regular helper briefed on the signs and the response.

                ## Notes
                If you have a spinal cord injury at or above the sixth thoracic level, ask your team about autonomic dysreflexia cards. Many emergency staff have never seen it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of condition-specific warning signs and responses exists, and every regular helper has been briefed on it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your specialist team which warning signs apply to your condition"
                - "Write each sign with what to do and when to call for help"
                - "Order or make a wallet card for any condition-specific emergency"
                - "Brief each regular helper on the signs this week"
            - name: Wheelchair repairs you can do yourself
              description: |-
                ## Purpose
                Waiting a week for a repair visit to fix a puncture or a loose footplate is a week with less freedom. Learning a handful of simple jobs, with the right small tools, means many faults are fixed in minutes and the repair service is kept for the jobs that need it.

                ## Milestones
                1. The jobs your supplier allows you to do yourself confirmed, so warranties are not affected.
                2. A small tool kit assembled, such as hex keys, a tyre lever, a pump and a spare inner tube.
                3. A puncture repair or tube change practised once at home.
                4. Brake adjustment and bolt tightening practised with guidance.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tool kit is assembled and a tube change and brake adjustment have each been done successfully at home."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the supplier which repairs you can safely do yourself"
                - "Buy the hex keys and spare tube that fit your chair"
                - "Change an inner tube once at home with a video guide"
                - "Keep the tool kit in the chair bag or by the door"
            - name: Your rights to accessible healthcare
              description: |-
                ## Purpose
                Many health services are required to make reasonable adjustments for disabled patients, such as longer appointments, accessible examination couches, hoists, information in your format or a carer present, but they rarely offer them unprompted. Knowing what you can ask for, and asking in writing, makes appointments safer and more useful.

                ## Milestones
                1. The adjustments you need at appointments listed.
                2. The relevant disability equality law or patient rights in your country read in summary.
                3. Your adjustments recorded on your health record at the main practice and hospital.
                4. One complaint or request process found in case adjustments are refused.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of your adjustments is recorded on your record at your main practice and hospital."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the adjustments that make appointments workable for you"
                - "Read a plain-language summary of disabled patients' rights where you live"
                - "Write to your practice asking for your adjustments to be added to your record"
                - "Find the patient advice or complaints contact for your main hospital"
            - name: Fall recovery plan
              description: |-
                ## Purpose
                Falling, or sliding out of your chair, is often less dangerous than lying on the floor for hours afterwards. A plan for getting up safely, or summoning help when you cannot, means the next fall is an inconvenience rather than a hospital stay.

                ## Milestones
                1. A safe method for getting up, or staying safe on the floor, agreed with a therapist.
                2. A way to call for help that works from the floor, such as a wearable alarm or voice assistant.
                3. Who gets called, and who has a key or key safe code, agreed.
                4. The plan practised once with a helper present.

                ## Notes
                If you cannot get up, the therapist may suggest an emergency lifting cushion or a plan for keeping warm and shifting weight while you wait.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A fall plan with a floor-reachable alarm and named responders exists and has been practised once."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your therapist to teach a safe way up or a safe way to wait"
                - "Test whether you can raise an alarm from the floor in each room"
                - "Agree who responds and how they get into the house"
                - "Practise the plan once with a helper watching"
            - name: Choosing a new wheelchair or powerchair
              description: |-
                ## Purpose
                A wheelchair shapes posture, skin, shoulders, energy and where you can go for five years or more, and a poor match costs far more than it saves. Comparing models against your real routes, transfers, vehicle and home, with a proper trial, gets you a chair that fits your life.

                ## Milestones
                1. Requirements written: daily distances, terrain, transfers, vehicle, home width and posture needs.
                2. Funded options and any top-up or personal budget routes confirmed.
                3. Three models trialled for at least a few hours each, ideally on your own routes.
                4. A choice made with your seating specialist and the order placed.

                ## Notes
                Start from the **Purchase decision** template. Measure door widths and turning space at home before trials, not after.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new chair is ordered after trialling three models against written requirements agreed with a seating specialist."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write your daily routes, transfers, vehicle and posture needs"
                - "Measure the narrowest door and tightest turn in your home"
                - "Ask your wheelchair service what is funded and what is not"
                - "Book trials of three shortlisted models"
            - name: Seating and posture assessment
              description: |-
                ## Purpose
                Slumping, leaning or sliding forward in a chair is not a character flaw: it usually means the seat, back or cushion does not fit, and over years it causes pain, pressure damage and breathing problems. A specialist seating assessment measures you in the chair and adjusts or prescribes support that fits.

                ## Milestones
                1. A seating assessment requested from your wheelchair service or a specialist clinic.
                2. Photos of how you sit at the start and end of the day taken beforehand.
                3. The assessment completed and adjustments or new parts agreed.
                4. A follow-up check booked once changes are made.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seating assessment has taken place and the agreed adjustments have been made and followed up."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your wheelchair service for a seating and posture assessment"
                - "Photograph how you sit in the morning and late afternoon"
                - "List where you feel pain or pressure after a long day"
                - "Book the follow-up once the adjustments are fitted"
            - name: Accessible bathroom adaptation
              description: |-
                ## Purpose
                The bathroom is where most home accidents happen and where independence is often lost first. Planning a wet room, level-access shower, grab rails or toilet changes with an occupational therapist, and getting the work quoted and funded properly, can return private personal care to you.

                ## Milestones
                1. Bathroom needs assessed by an occupational therapist with a written specification.
                2. Funding routes checked and any grant application submitted.
                3. Two or three quotes from builders experienced in accessible bathrooms compared.
                4. Work completed and checked against the specification before final payment.

                ## Notes
                Ask for drainage, floor gradient and grab rail positions to be signed off by the therapist before tiling starts.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An adapted bathroom is finished and checked against the therapist's written specification before final payment."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your occupational therapist for a written bathroom specification"
                - "Check whether a home adaptation grant applies to you"
                - "Get quotes from three builders with accessible bathroom experience"
                - "Walk through the finished room against the specification"
            - name: Step-free access to your home
              description: |-
                ## Purpose
                Needing help to get in and out of your home means every appointment, delivery and outing depends on someone else's timing. Ramps, wider doors, a level threshold or a through-floor lift can make leaving the house your own decision again.

                ## Milestones
                1. Every entrance measured for steps, gradient, door width and turning space.
                2. Options compared, from portable ramps to permanent works, with an occupational therapist.
                3. Permissions or landlord consent obtained where needed.
                4. Work completed and one entrance usable without help.

                ## Notes
                Ramps need enough length for a safe gradient; a short steep ramp can be worse than none. Your therapist will know the gradients that suit your chair.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one entrance to your home can be used independently, with works or equipment in place."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Measure each step, door width and turning space at your entrances"
                - "Ask your therapist which access options fit your chair and home"
                - "Ask your landlord or planning office whether consent is needed"
                - "Test the finished entrance alone in wet weather"
            - name: Choosing a hoist and slings
              description: |-
                ## Purpose
                Hoists that suit the room, the transfers and the people operating them make moving safer and more dignified, while the wrong sling size or type can cause pressure damage or a fall. Choosing ceiling track or mobile hoist, and the right slings, with a therapist present, gets it right first time.

                ## Milestones
                1. Transfers needing a hoist listed, with rooms and ceiling or floor space measured.
                2. Ceiling track and mobile hoist options compared for those rooms.
                3. Sling type and size assessed by a therapist with you in it.
                4. The chosen hoist installed and every helper trained to use it.

                ## Notes
                Slings are personal: sharing one between people, or using the wrong size, is a common cause of falls.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A hoist and correctly sized slings are chosen with a therapist, installed and used by trained helpers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the transfers where a hoist would help"
                - "Measure ceiling height and floor space in those rooms"
                - "Ask your therapist to assess sling type and size with you"
                - "Arrange training for every helper before first use"
            - name: Bed and night-time positioning setup
              description: |-
                ## Purpose
                Nights are when pressure damage, stiffness and broken sleep often start, especially if you cannot easily turn yourself. Getting the bed height, mattress, positioning supports and any turning schedule right improves sleep for you and anyone helping overnight.

                ## Milestones
                1. Current problems at night listed: pain, waking, stiffness, skin marks, getting in and out.
                2. Bed height, mattress type and positioning supports reviewed with a therapist or nurse.
                3. Changes made and a turning plan written if you need one.
                4. Two weeks of nights compared with before.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Bed, mattress and positioning have been reviewed by a professional and changes kept after a two-week comparison."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note a week of night-time problems and how often you wake"
                - "Ask a therapist or nurse to review your bed and positioning"
                - "Write the agreed turning or positioning plan for night helpers"
                - "Compare two weeks of nights after the changes"
            - name: Driving adaptations or an accessible vehicle
              description: |-
                ## Purpose
                Hand controls, a transfer seat, wheelchair stowage or a wheelchair-accessible vehicle can turn a long wait for transport into getting in and going. A formal driving or passenger assessment shows what will work before you spend thousands on a vehicle.

                ## Milestones
                1. A driving or passenger assessment booked at a specialist centre.
                2. Adaptation and vehicle options recommended in writing.
                3. Funding, leasing and insurance options compared.
                4. A decision made and any licence or insurance changes completed.

                ## Notes
                Tell your licensing authority and insurer about adaptations and any change in your condition that affects driving. Ask the assessment centre what applies.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A specialist driving or passenger assessment report exists and a vehicle decision is recorded with insurance updated."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find a specialist driving assessment centre within reach"
                - "Book an assessment as driver, passenger or both"
                - "Compare buying, leasing and grant options for the recommended setup"
                - "Update your licence details and insurer after any change"
            - name: Assistive technology and home controls
              description: |-
                ## Purpose
                Voice assistants, smart plugs, automatic door openers, environmental control units and phone-controlled lighting can each remove a small dependency that adds up across a day. Choosing a few that solve real problems, rather than buying gadgets, gives back independence for a modest cost.

                ## Milestones
                1. Daily tasks that need someone else only because of reach or grip listed.
                2. Technology options matched to the top five tasks.
                3. Two or three devices set up and tested for a month.
                4. A fallback in place for when the internet or power goes down.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two assistive technology devices are in daily use and each one has a fallback for outages."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List tasks you need help with only because of reach or grip"
                - "Match the top five tasks to a device or control option"
                - "Set up and test two devices for a month"
                - "Write a fallback for each device in case of outages"
            - name: Equipment supplier and repair contract review
              description: |-
                ## Purpose
                Response times for wheelchair and hoist repairs vary from same day to several weeks, and the difference is often in the contract or the supplier you chose. Reviewing what your supplier promises, and how they have actually performed, tells you whether to switch or to escalate.

                ## Milestones
                1. Repair terms, response times and call-out costs for each supplier recorded.
                2. The last year's repairs and how long each took listed.
                3. A decision recorded to keep, escalate or switch each supplier.

                ## Notes
                Start from the **Vendor** template. A log of response times is the strongest evidence if you need to complain.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each equipment supplier has recorded terms, a repair history and a written keep, escalate or switch decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the repair terms for each equipment supplier"
                - "List last year's repairs with reporting and fix dates"
                - "Decide to keep, escalate or switch each supplier"
            - name: Hospital stay plan for your disability needs
              description: |-
                ## Purpose
                Hospital wards are rarely set up for someone who needs a specific cushion, transfer method, bladder routine or turning schedule, and pressure damage on a ward can undo months of progress. A plan for what comes with you and what you ask for on day one protects you during any admission.

                ## Milestones
                1. A packing list of disability equipment and supplies that must come with you.
                2. Your routines, such as bladder, bowel, positioning and transfers, written for ward staff.
                3. Who will advocate for you if you are too unwell to speak up agreed.
                4. A day-one checklist ready to hand to the nurse in charge.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A hospital bag list, a routines sheet for ward staff and a named advocate are in place before any planned admission."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List equipment and supplies that must come with you to hospital"
                - "Write your routines on one page for ward staff"
                - "Ask a family member or friend to advocate for you if needed"
                - "Pack a bag with the essentials that do not change"
            - name: Accessible trip with your equipment
              description: |-
                ## Purpose
                Travel with a disability is mostly logistics: airline wheelchair rules and lithium battery limits, accessible rooms that turn out to have a step, hiring equipment at the other end, and what to do if the chair is damaged in transit. Planning those details means the trip is about the place, not the problems.

                ## Milestones
                1. Accommodation access confirmed with photos and measurements, not just a label.
                2. Airline or rail assistance booked and battery or chair details sent in advance.
                3. Equipment to hire at the destination arranged.
                4. A damage plan ready: photos of the chair, supplier contact and travel insurance details.

                ## Notes
                Start from the **Trip** template. Photograph your chair from all sides before handing it over, and ask for it at the aircraft door.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip is completed with assistance booked, accessible accommodation confirmed by photos, and a chair damage plan carried."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the accommodation for photos and measurements of the room and bathroom"
                - "Book travel assistance and send your chair and battery details"
                - "Arrange any equipment hire at the destination"
                - "Photograph your chair from all sides before the trip"
            - name: Onboarding a new personal assistant
              description: |-
                ## Purpose
                A new personal assistant or carer who is thrown in without a proper start makes mistakes with transfers, routines and boundaries, and many leave within weeks. A planned first fortnight, with shadow shifts, written routines and early check-ins, makes it more likely they stay and do the job well.

                ## Milestones
                1. Written routines, access needs profile and emergency sheet ready before the first shift.
                2. Two or more shadow shifts with an experienced helper arranged.
                3. Transfers and any moving equipment checked before they work alone.
                4. Check-ins held at the end of the first and second week.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new assistant has completed shadow shifts, been checked on transfers and had two check-in conversations in the first fortnight."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather your routines, profile and emergency sheet into one pack"
                - "Arrange two shadow shifts with your most experienced helper"
                - "Watch the new assistant do each transfer before they work alone"
                - "Hold a short check-in at the end of week one and week two"
            - name: Moving home with a physical disability
              description: |-
                ## Purpose
                Moving home means checking access at the new place, moving heavy equipment safely, transferring care and equipment services if you cross a boundary, and keeping routines going through the upheaval. Starting early avoids arriving at a home you cannot get into or use.

                ## Milestones
                1. The new home checked for entrance, bathroom, bedroom and turning space before you commit.
                2. Care, equipment and health services told about the move and transfers arranged.
                3. Ceiling hoists, beds and other installed equipment moved or reinstalled by approved fitters.
                4. Essential equipment and supplies working on the first night.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The move is complete with essential equipment working on night one and care and equipment services transferred."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Visit the new home with a tape measure and your access checklist"
                - "Tell your care, equipment and health services the moving date"
                - "Book approved fitters to move installed equipment"
                - "Pack a first-night box of supplies and equipment chargers"
            - name: Emergency evacuation plan for home and work
              description: |-
                ## Purpose
                Lifts are switched off in a fire, and stairs that others run down may be impossible for you. A personal evacuation plan for your home and your workplace or college, agreed with the people who would help, means everyone knows what happens in the first five minutes.

                ## Milestones
                1. Routes out of each building checked, including refuges and evacuation chairs.
                2. A written personal evacuation plan agreed with your employer, college or building manager.
                3. Neighbours or colleagues who would help named and briefed.
                4. The plan practised once in a drill.

                ## Notes
                Ask your local fire service whether they offer home safety visits for disabled residents. Many do, and some fit alarms suited to you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written evacuation plans exist for home and your workplace or college and each has been practised once."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk the exit routes from your home and workplace"
                - "Ask your employer or building manager for a personal evacuation plan"
                - "Ask your fire service about a home safety visit"
                - "Practise the evacuation plan in a drill @recurring(yearly)"
            - name: First three months home after becoming disabled
              description: |-
                ## Purpose
                Coming home after an injury, amputation or sudden diagnosis is often harder than the hospital stay, because the routines, equipment and support are new and nobody is on call. Planning the first twelve weeks with clear priorities, short-term equipment and named contacts reduces the chance of falls, readmissions and isolation.

                ## Milestones
                1. Discharge equipment, follow-up appointments and contacts confirmed before leaving hospital.
                2. A weekly plan for the first month covering care, therapy and rest.
                3. One peer support group or person with lived experience contacted.
                4. A three-month review held with your team on what to keep, change or chase.

                ## Notes
                Ask the discharge team for a named contact to ring in the first fortnight. It is the time most likely to go wrong.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A first-month plan exists, a peer contact has been made and a three-month review with your team has taken place."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the discharge team for a named contact for the first fortnight"
                - "Check discharge equipment works before the hospital transport leaves"
                - "Contact one peer support group for your condition"
                - "Book a three-month review with your rehabilitation team"
            - name: Ageing with a long-standing disability
              description: |-
                ## Purpose
                People who have lived with a disability for decades often hit new problems in midlife: shoulders worn by years of pushing and transfers, fatigue, weight gain, bone thinning or the late effects of conditions like polio or cerebral palsy. Spotting those changes early and adapting equipment before you are forced to protects the independence you have built.

                ## Milestones
                1. Changes over the last five years in strength, pain, fatigue and transfers listed.
                2. Late effects known for your condition read about from a condition-specific organisation.
                3. Equipment changes discussed, such as power assist or a lighter chair.
                4. A plan agreed with your clinician for the next five years.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written five-year plan covering equipment and secondary health has been agreed with your clinician."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List what has got harder in the last five years"
                - "Read about late effects from a charity for your condition"
                - "Ask your clinician about power assist or other equipment changes"
                - "Write a five-year plan with your clinician's input"
            - name: Planning ahead with a progressive condition
              description: |-
                ## Purpose
                With conditions such as multiple sclerosis, motor neurone disease or muscular dystrophy, equipment and adaptations often take longer to arrive than the change they are meant to address. Agreeing with your team what you are likely to need next, and starting assessments early, keeps support one step ahead.

                ## Milestones
                1. Likely changes over the next year or two discussed with your specialist team.
                2. Equipment and adaptations with long lead times identified.
                3. Assessments or applications started ahead of need.
                4. Your wishes about future care written down while you can choose.

                ## Notes
                This can be hard to think about. Many people find it easier with a specialist nurse or a charity adviser in the room.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of anticipated needs with lead times exists, and at least one long-lead assessment or application has started."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your specialist nurse what changes to plan for in the next year"
                - "List equipment and adaptations with long waiting times"
                - "Start one assessment or application before it is urgent"
                - "Write your wishes for future care and share them with family"
            - name: Parenting with a physical disability
              description: |-
                ## Purpose
                Lifting, bathing, carrying and chasing a small child all need adapting when you have a physical disability, and mainstream baby equipment is rarely built for it. Planning adapted equipment, help at the hardest moments and routines that use your strengths makes parenting safer and less exhausting.

                ## Milestones
                1. The physical tasks of caring for your child at their current age listed.
                2. Adapted equipment found, such as side-opening cots or height-adjustable changing tables.
                3. Help arranged for the tasks you cannot do safely.
                4. Contact made with a disabled parents' network for practical tips.

                ## Notes
                Ask your occupational therapist for a parenting assessment. Many can advise on equipment for babies and toddlers.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Adapted equipment is in place for the hardest childcare tasks and help is arranged for anything unsafe to do alone."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the childcare tasks that are hardest physically"
                - "Ask your occupational therapist about a parenting assessment"
                - "Search for adapted cots, changing tables and carriers"
                - "Join a disabled parents' network or forum"
            - name: Moving from children's to adult services
              description: |-
                ## Purpose
                Young people with a physical disability often lose a familiar paediatric team at 16 to 18 and arrive in adult services that work very differently, with separate clinics and less coordination. Planning the handover from the early teens, with a young person and parent working together, prevents gaps in equipment, therapy and specialist care.

                ## Milestones
                1. Every paediatric service listed with its adult equivalent and handover age.
                2. A transition meeting held with the young person present.
                3. First appointments in adult services booked before paediatric care ends.
                4. The young person managing at least one appointment or order on their own.

                ## Notes
                Ask for a written transition plan. Equipment loans and therapy are the services most often lost in the handover.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every paediatric service has a booked adult equivalent, and the young person has managed one appointment or order alone."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every children's service and when each one ends"
                - "Ask the lead paediatric clinician for a written transition plan"
                - "Book first appointments with each adult service"
                - "Let the young person make and attend one appointment alone"
            - name: Backup plan if your main carer is unavailable
              description: |-
                ## Purpose
                If most of your daily help comes from one partner, parent or friend, their illness, accident or holiday can leave you without care overnight. Writing a backup plan, with named people, an emergency care contact and your routines ready to hand over, means their absence does not become your emergency.

                ## Milestones
                1. The tasks your main carer does each day listed with timings.
                2. Two backup people or an emergency care service named for each critical task.
                3. Any carer emergency scheme or card in your area registered with, where available.
                4. The plan shared with your main carer, backups and care coordinator.

                ## Notes
                Your main carer may be entitled to their own assessment of their needs. Supporting them is part of protecting you.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written backup plan names two people or a service for each critical task and has been shared with everyone involved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what your main carer does each day and at what time"
                - "Ask two people if they would step in for critical tasks"
                - "Check for a carer emergency scheme in your area"
                - "Confirm your backup carers are still available @recurring(yearly)"
            - name: Spasticity and tone management with your team
              description: |-
                ## Purpose
                Spasms and stiffness from conditions such as spinal cord injury, multiple sclerosis, stroke or cerebral palsy can be painful and disrupt sleep, seating and transfers, but treatments range from stretching and positioning to injections and pumps. Tracking your tone and its triggers gives your specialist the evidence to tune treatment.

                ## Milestones
                1. A simple weekly tone and spasm score agreed with your specialist.
                2. Triggers noted, such as infections, tight clothing, cold or a full bladder.
                3. Treatment options discussed with your specialist and a plan agreed.
                4. The effect of any change reviewed after an agreed period.

                ## Notes
                A sudden increase in spasms can be the first sign of an infection or skin problem. Check for those before assuming the condition has changed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Weekly tone scores and triggers are logged for three months and a treatment plan has been reviewed with your specialist."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree a simple spasm and stiffness score with your specialist"
                - "Score the week's tone and note likely triggers @recurring(weekly:fri)"
                - "Bring three months of scores to your next specialist appointment"
                - "Ask the agent to summarise the trigger notes into a one-page pattern"
            - name: Shoulder protection for manual wheelchair users
              description: |-
                ## Purpose
                Manual wheelchair users put their shoulders through thousands of pushes and many transfers a day, and shoulder pain is one of the most common reasons people lose independence later. Changing push technique, transfer height and chair setup, and strengthening the muscles at the back of the shoulder, protects them for the long run.

                ## Milestones
                1. Push stroke and chair setup checked by a physiotherapist or seating specialist.
                2. Transfers adjusted so you move between surfaces of similar height where possible.
                3. A twice-weekly strengthening routine for the back of the shoulder running.
                4. Power assist or other options discussed if pain persists.

                ## Notes
                Long smooth push strokes are generally easier on the shoulder than short fast jabs. Ask your therapist to watch you push.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Push technique and chair setup have been checked and a shoulder strengthening routine is done twice a week for three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a physiotherapist to watch your push stroke and transfers"
                - "Check the axle position and seat height with your seating service"
                - "Do the shoulder strengthening routine @recurring(weekly:mon,thu)"
            - name: Prosthetic limb fit and residual limb care
              description: |-
                ## Purpose
                After an amputation, the residual limb changes in volume through the day and over months, and a socket that no longer fits causes sores, pain and falls. Daily skin checks, managing sock layers and regular prosthetist reviews keep the limb comfortable and walking reliable.

                ## Milestones
                1. A daily residual limb skin check and liner cleaning routine in place.
                2. Sock-ply changes through the day recorded to show volume patterns.
                3. Prosthetist reviews booked at the interval they recommend.
                4. A plan agreed for what to do if the socket becomes painful or a sore appears.

                ## Notes
                Do not carry on walking on a sore or blister in the socket. Contact your prosthetist promptly, as small problems become large ones quickly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily limb checks and sock-ply records are kept for two months and a prosthetist review is booked."
                cadence: rolling
              tasks:
                - "Ask your prosthetist how often they want to review the fit"
                - "Check the residual limb skin and clean the liner @recurring(daily)"
                - "Record the sock layers you add or remove through the day"
                - "Write what to do if a sore or socket pain appears"
---

# Living With Physical Disability

This area is for anyone living with a physical disability, whether it arrived last month or decades ago, and for the people who help with it. It starts with the foundations (an access needs profile, your care and equipment team, an emergency sheet and a plan for power cuts), then the routines that keep skin, equipment, supplies and support running, the skills that make transfers and instructing helpers safer, the decisions about chairs, hoists and home changes, the events that need planning, the situations that change the picture, and finally the specialist work of an experienced self-manager.

What repeats is a daily skin check and stretch, a weekly chair inspection and care rota, monthly supply counts and body check-ins, quarterly equipment and outage tests, and the annual review with your clinician. The Operational checklist, Metrics log, Purchase decision, Vendor, Trip and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
