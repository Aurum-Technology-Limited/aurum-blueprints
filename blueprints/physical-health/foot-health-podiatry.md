---
id: physical-health.foot-health-podiatry
name: Foot Health & Podiatry
description: "A foot health baseline, a registered podiatrist, nail, skin and shoe routines, and plans for runners, older adults, diabetic feet and common problems from bunions to heel pain."
category: personal
version: 1.0.0
tags: [physical-health, foot-health-podiatry, everyone, athlete, retiree, podiatry, footwear, diabetic-foot]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - habit-tracker
    - metrics-log
    - training-program
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Foot Health & Podiatry
          description: "Looking after feet with podiatry visits, orthotics, nail and skin care, and diabetic foot checks, for runners, older adults and people on their feet all day."
          projects:
            - name: Ten-minute foot health self-check
              description: |-
                ## Purpose
                Most foot problems that end in a clinic, from ingrown nails to cracked heels and fungal skin, show early signs that nobody looked for. A first unhurried look at both feet, in good light with a mirror for the soles, gives you a baseline to compare against and a short list of things worth showing a pharmacist or podiatrist.

                ## Milestones
                1. Both feet checked top, sole, heel and between every toe in good light.
                2. Skin, nails, swelling, colour and any pain written down for each foot.
                3. Photos taken of anything unusual, labelled with the date.
                4. A short list of concerns ready for a pharmacist or podiatrist.

                ## Notes
                Sitting on the edge of the bed with a hand mirror on the floor shows the soles without bending far. If you have diabetes, poor circulation or numbness, do the warning signs project the same week.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated written note on the condition of both feet exists, with photos of anything unusual and a list of concerns to raise."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look over both feet in good light, using a mirror for the soles"
                - "Write down anything you notice about skin, nails, swelling or colour"
                - "Photograph anything unusual and label the photos with the date"
                - "List the concerns you want a professional to look at"
            - name: Foot warning signs that need same-day care
              description: |-
                ## Purpose
                A hot, red, swollen foot, a wound that will not heal, spreading redness around an ingrown nail, or a suddenly cold, pale and painful foot can all need care the same day, and people with diabetes or poor circulation are most at risk of waiting too long. Writing down what your health service lists as urgent, and who to call, means the decision is made calmly in advance.

                ## Milestones
                1. Your health service's guidance on urgent foot problems found and read.
                2. A one-page card listing the signs and the numbers to call.
                3. The card kept where everyone in the household can find it.
                4. Your clinician asked whether any extra signs apply to you.

                ## Notes
                Use your own health service's wording. The card organises their guidance; it does not replace a clinician's judgement.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A warning signs card based on your health service's guidance is in a known place at home and lists who to call."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's guidance on urgent foot problems"
                - "Write the signs and the numbers to call on one card"
                - "Put the card where everyone in the house can find it"
                - "Check the numbers and signs on the card are still current @recurring(yearly)"
            - name: Personal foot health record
              description: |-
                ## Purpose
                Podiatry notes, orthotic prescriptions, nail surgery dates and shoe sizes end up scattered across letters, receipts and memory. One record holding all of it means every new podiatrist, physiotherapist or shoe fitter starts from the facts, and you can see when a problem keeps coming back.

                ## Milestones
                1. A single record with sections for measurements, conditions, treatments, orthotics and footwear.
                2. Past treatments and their dates added from letters and receipts.
                3. Current orthotic and footwear details written in.
                4. The record updated after the most recent podiatry visit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One foot health record holds measurements, past treatments with dates and current orthotics, updated after the latest visit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a foot record with sections for measurements, conditions and treatments"
                - "Gather old podiatry letters, receipts and orthotic prescriptions"
                - "Add each past treatment with its date and outcome"
                - "Add notes from each podiatry visit on the day you get home"
            - name: Measuring both feet for length and width
              description: |-
                ## Purpose
                Feet spread and lengthen with age, pregnancy and weight change, and many adults are still buying a size they were measured for years ago. Measuring both feet at the end of the day, when they are largest, tells you the size and width to shop for and whether one foot needs the bigger shoe.

                ## Milestones
                1. Both feet measured standing, late in the day, for length and width.
                2. The longer foot identified and its size used as your shoe size.
                3. Your width fitting noted in at least one common sizing system.
                4. Measurements written in your foot record with the date.

                ## Notes
                A shop with a measuring device or a trained fitter is easiest. At home, stand on paper, mark the longest toe and the back of the heel, and measure the widest part across the ball of the foot.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Length and width of both feet are recorded with the date, along with the shoe size and width fitting to buy."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Book or drop in for a shoe fitting late in the afternoon"
                - "Measure both feet standing for length and width"
                - "Note which foot is longer and the size it needs"
                - "Write the measurements and date in your foot record"
            - name: Shoe cupboard audit against your measurements
              description: |-
                ## Purpose
                Shoes that pinch at the toes, slip at the heel or have collapsed at the back cause a large share of corns, blisters and nail problems, yet people keep wearing them because they are still in the cupboard. Checking every pair against your measured size and for wear decides what stays, what gets repaired and what goes.

                ## Milestones
                1. Every pair tried on late in the day and checked for length, width and wear.
                2. Each pair sorted into keep, repair or go.
                3. The pairs that go donated, recycled or thrown out.
                4. A gap list written for any type of shoe you now lack.

                ## Notes
                A thumb's width of space beyond the longest toe and a toe box you can wiggle in are common fitting rules. Soft, collapsed heel counters and soles worn through on one side are reasons to replace.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every pair has been sorted into keep, repair or go, the go pile has left the house, and a gap list exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Try on every pair late in the day and note fit and wear"
                - "Sort the pairs into keep, repair and go"
                - "Take the go pile to a donation or textile recycling point"
                - "Write a list of the shoe types you still need"
            - name: Choosing everyday shoes that fit your feet
              description: |-
                ## Purpose
                The shoes worn most hours of the week matter more to your feet than any specialist pair. Choosing them on fit, toe box shape, fastening and sole, rather than on looks alone, prevents the slow pressure problems that bring people to a podiatrist.

                ## Milestones
                1. Three or four criteria for everyday shoes written down from your measurements and needs.
                2. At least three pairs tried on late in the day and scored.
                3. One pair bought that meets every criterion.
                4. The new pair worn around the house for a week before outdoor use.

                ## Notes
                Start from the **Purchase decision** template. Laces or straps hold the foot better than slip-ons, which make the toes grip to keep the shoe on.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One everyday pair chosen against written criteria, bought and worn in at home for a week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your criteria for fit, toe box, fastening and sole"
                - "Try on at least three pairs late in the day"
                - "Score each pair against the criteria and buy the best fit"
                - "Wear the new pair indoors for a week before going out in them"
            - name: Home foot care kit
              description: |-
                ## Purpose
                Nails cut with kitchen scissors and hard skin attacked with a razor blade are two classic routes into a podiatry clinic. A small kit of the right tools, kept together where you actually sit to do foot care, makes routine care safer and quicker.

                ## Milestones
                1. Straight-edged nail clippers, a nail file, a foot file and an emollient cream in one box.
                2. A long-handled mirror or another way of seeing the soles.
                3. Blades and medicated corn products left out unless a podiatrist advises them.
                4. The kit stored where you do your foot care.

                ## Notes
                If you have diabetes or poor circulation, ask your podiatrist what is safe to use at home before buying anything abrasive.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A foot care kit with clippers, nail file, foot file, emollient and an inspection mirror is stored together where you use it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Gather the foot care tools you already have into one box"
                - "Buy straight-edged clippers, a nail file, a foot file and an emollient"
                - "Add a long-handled mirror for seeing the soles"
                - "Store the kit next to where you sit for foot care"
            - name: Finding a registered podiatrist near you
              description: |-
                ## Purpose
                Podiatrist and chiropodist are protected titles in many countries, but foot health practitioners, nail technicians and shoe shop staff may offer similar sounding services with far less training. Checking registration with your country's regulator and comparing two or three clinics on services, cost and access gives you someone to call before you need them.

                ## Milestones
                1. The regulator or professional register for podiatrists in your country identified.
                2. Two or three local podiatrists found and their registration checked.
                3. Services, fees, home visit options and waiting times compared.
                4. One podiatrist chosen and their details saved in your foot record.

                ## Notes
                Ask your doctor whether you qualify for publicly funded podiatry, which is often limited to people with diabetes, circulation problems or other high-risk feet.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A registered podiatrist is chosen after comparing at least two, with registration checked and contact details saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official register of podiatrists for your country"
                - "Shortlist three local podiatrists and confirm each is registered"
                - "Compare their services, fees and home visit options"
                - "Ask your doctor whether you qualify for funded podiatry"
                - "Save the chosen podiatrist's details in your foot record"
            - name: Preparing for your first podiatry assessment
              description: |-
                ## Purpose
                Expect a first podiatry appointment to cover your history, a look at skin and nails, circulation and sensation checks and sometimes a look at how you walk. Bringing your shoes, your questions and a list of medicines turns a short slot into a plan rather than a quick tidy-up.

                ## Milestones
                1. The appointment booked and in the calendar.
                2. A list of symptoms, how long you have had them and what makes them worse.
                3. Your most worn shoes, current insoles and medicine list packed.
                4. The podiatrist's findings and treatment plan written in your foot record.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first podiatry assessment attended with shoes and questions, and the treatment plan recorded in your foot record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the first assessment with your chosen podiatrist"
                - "Write down each symptom, when it started and what worsens it"
                - "Pack your most worn shoes, insoles and medicine list"
                - "Record the findings and plan in your foot record the same day"
            - name: Foot pulse and sensation check with your clinician
              description: |-
                ## Purpose
                Blood flow and feeling in the feet can fade without any pain, and both change what is safe to do at home. Smokers, people with diabetes, kidney or heart disease, and many adults over 65 may benefit from asking for their foot pulses and a simple sensation test at a planned appointment.

                ## Milestones
                1. Your clinician asked whether a foot pulse and sensation check suits your risk.
                2. The check done at a planned appointment.
                3. The results and any risk category written in your foot record.
                4. Any referral or follow-up interval agreed and noted.

                ## Notes
                Cold feet, calf pain when walking that eases with rest, or numbness are worth mentioning even if nobody asks.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Foot pulses and sensation have been checked by a clinician, with the result and any follow-up interval recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down any cold feet, numbness or calf pain when walking"
                - "Ask at your next appointment for a foot pulse and sensation check"
                - "Record the results and any risk category in your foot record"
                - "Note the follow-up interval your clinician recommends"
            - name: Weekly foot inspection routine
              description: |-
                ## Purpose
                Small cuts, blisters, colour changes and early fungal skin are easy to treat in their first week and much harder by their fourth. Two minutes looking at both feet on the same evening each week, after a bath or shower, catches them early.

                ## Milestones
                1. One evening a week fixed for the check.
                2. Tops, soles, heels, nails and between the toes checked each time.
                3. Any change noted with a date and a photo.
                4. Twelve consecutive weekly checks completed.

                ## Notes
                If you have diabetes or reduced feeling, your diabetes team will usually want a daily check instead; see the daily diabetic check project.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly foot checks completed, with any change dated and photographed."
                cadence: rolling
              tasks:
                - "Pick the evening of the week that follows your bath or shower"
                - "Inspect both feet top, sole, heel and between the toes @recurring(weekly:sun)"
                - "Photograph any change and add a dated note to your foot record"
            - name: Nightly heel and skin moisturising routine
              description: |-
                ## Purpose
                Dry skin around the heels thickens and splits, and deep heel cracks can become painful and infected. An emollient rubbed into heels and soles at night, keeping it away from between the toes, is one of the simplest and most effective habits in foot care.

                ## Milestones
                1. An emollient chosen, with your pharmacist's help if your skin is very dry or cracked.
                2. A nightly moment fixed, such as straight after brushing your teeth.
                3. Cream applied to heels and soles, not between the toes, for four weeks.
                4. Heel dryness and cracks compared with your baseline photos.

                ## Notes
                Start from the **Habit tracker** template. Deep or bleeding cracks are a job for a podiatrist, not a harder file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Emollient applied to heels and soles on at least 24 of 28 nights, with before and after photos compared."
                cadence: rolling
              tasks:
                - "Ask your pharmacist which emollient suits very dry heels"
                - "Rub emollient into heels and soles, avoiding between the toes @recurring(daily)"
                - "Compare heel photos with your baseline after four weeks"
            - name: Toenail trimming every four weeks
              description: |-
                ## Purpose
                Nails left too long catch on socks and press against shoes, while nails cut too short or rounded at the corners are a common cause of ingrown toenails. A fixed date every four weeks, after a bath when nails are softer, keeps them at a safe length without guesswork.

                ## Milestones
                1. A regular trimming date in the calendar.
                2. Nails cut straight across, level with the end of the toe, with corners filed smooth.
                3. Any thickened, discoloured or painful nail noted for the podiatrist.
                4. Six months of regular trims with no new ingrown nail.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Nails trimmed straight across on a four-weekly schedule for six months, with no new ingrown toenail."
                cadence: rolling
              tasks:
                - "Put a monthly nail trimming slot in the calendar"
                - "Trim toenails after a bath and smooth the corners with a file @recurring(monthly:12)"
                - "Note any thick or discoloured nail for your podiatrist"
            - name: Regular podiatry visits for nails and hard skin
              description: |-
                ## Purpose
                Thickened nails, recurring corns and callus over pressure points usually come back, so many people do better with a planned visit every two or three months than with emergency appointments when walking starts to hurt. Agreeing the interval with your podiatrist and booking ahead stops the gap from stretching.

                ## Milestones
                1. A visit interval agreed with your podiatrist.
                2. The next visit booked before leaving each appointment.
                3. Notes from each visit added to your foot record.
                4. A year of visits at the agreed interval with no gap longer than planned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Podiatry visits kept at the agreed interval for twelve months, each booked before the previous one ended."
                cadence: cyclic
              tasks:
                - "Ask your podiatrist what visit interval suits your feet"
                - "Book the next visit before leaving the clinic"
                - "Confirm the next podiatry visit is booked and in the calendar @recurring(quarterly)"
                - "Copy the main points from each visit into your foot record"
            - name: Fungal infection prevention routine
              description: |-
                ## Purpose
                Athlete's foot and fungal nail infections thrive in damp shoes, shared showers and socks worn twice. Drying carefully between the toes, alternating shoes so each pair dries for a day, and wearing sandals in communal showers cut the chance of infection, and of it returning after treatment.

                ## Milestones
                1. Feet dried between every toe after washing.
                2. At least two pairs of daily shoes rotated so each dries out for 24 hours.
                3. Sandals packed for gym, pool and hotel showers.
                4. Insoles washed or aired and shoes cleaned inside monthly if you have had an infection.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Shoes rotated daily, sandals used in communal showers and a monthly shoe and insole clean recorded for three months."
                cadence: rolling
              tasks:
                - "Add a pair of shower sandals to your gym or swim bag"
                - "Set up two pairs of daily shoes to alternate"
                - "Wash or air the insoles and clean inside your shoes @recurring(monthly:20)"
                - "Dry carefully between each toe after every wash"
            - name: Orthotic insole upkeep and annual review
              description: |-
                ## Purpose
                Orthotics flatten, crack and lose their shape, and feet and activity levels change, so a pair that helped two years ago may now be doing little. A yearly check of their condition and fit with the podiatrist who prescribed them keeps them working and tells you when to replace them.

                ## Milestones
                1. The date and type of your current orthotics recorded.
                2. Insoles checked for cracks, flattening and worn top covers.
                3. A yearly review with the prescribing podiatrist.
                4. Replacement or adjustment arranged when advised.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Orthotics checked by a podiatrist within the last year, with their age and condition recorded."
                cadence: cyclic
              tasks:
                - "Write the date and type of your current orthotics in your foot record"
                - "Look over the insoles for cracks, flattening and worn covers"
                - "Book a yearly orthotic check with your podiatrist @recurring(yearly)"
                - "Move the orthotics into any new shoes and check they still fit"
            - name: Seasonal sock and shoe wear check
              description: |-
                ## Purpose
                Socks with holes or tight elastic, and shoes with worn heels or soles worn through on one side, change how you walk and where pressure lands. A check at each change of season catches wear before it turns into blisters, corns or a sore knee.

                ## Milestones
                1. Every pair of socks checked for holes, thin heels and tight tops.
                2. Shoe heels, soles and heel counters checked for uneven wear.
                3. Worn items repaired, replaced or recycled.
                4. A note made of any wear pattern worth showing your podiatrist.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four seasonal sock and shoe checks completed in a year, each with worn items dealt with."
                cadence: cyclic
              tasks:
                - "Turn out the sock drawer and remove any with holes or tight tops"
                - "Examine heels and soles of every pair for uneven wear @recurring(quarterly)"
                - "Take shoes with worn heels to a cobbler"
                - "Note any one-sided wear pattern for your podiatrist"
            - name: Annual foot health review
              description: |-
                ## Purpose
                Once a year is a good moment to look across everything: how your feet have been, which treatments worked, whether your shoes and orthotics still suit you, and what to change. A short review against last year's notes turns a pile of appointments into a plan for the next twelve months.

                ## Milestones
                1. Last year's foot record, photos and podiatry notes read through.
                2. Problems that came back or got worse listed.
                3. Footwear, orthotics and routines compared with current needs.
                4. Three priorities for the coming year written down.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated annual review sits in your foot record, naming three foot priorities for the coming year."
                cadence: cyclic
              tasks:
                - "Read through last year's foot record, photos and visit notes"
                - "List the problems that came back or got worse"
                - "Write three foot priorities for the next twelve months"
                - "Hold your annual foot health review @recurring(yearly)"
            - name: Running shoe mileage log
              description: |-
                ## Purpose
                Cushioning in running shoes wears out long before the upper looks tired, and many runners only notice when new aches appear. Logging distance per pair and how each felt tells you when to replace them and which models suit you.

                ## Milestones
                1. Every running shoe pair listed with model and start date.
                2. Distance logged per pair each month.
                3. A replacement range noted for each model, from the maker's guidance or your own experience.
                4. New pairs bought before old ones pass that range.

                ## Notes
                Start from the **Metrics log** template. Rotating two pairs lets each recover between runs and shows you which you prefer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every current running shoe pair has a logged distance, and none has passed the replacement range you set."
                cadence: rolling
              tasks:
                - "List each running shoe pair with model and first use date"
                - "Add the month's distance to each pair in the log @recurring(monthly:28)"
                - "Set a replacement range for each model"
                - "Order a replacement pair before the current one reaches its range"
            - name: Cutting toenails straight across without ingrowns
              description: |-
                ## Purpose
                Ingrown toenails usually begin with a curved cut or a corner dug out to relieve pressure. Learning the technique once, ideally by watching a podiatrist and asking questions, prevents one of the most common and painful foot problems.

                ## Milestones
                1. The straight-across technique shown by a podiatrist or read in a health service guide.
                2. The right clippers and file in your kit.
                3. Your own nails cut using the technique, with corners filed rather than dug out.
                4. Two trimming cycles done with no new soreness at the nail edges.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two nail trimming cycles completed using the straight-across technique, with no new soreness at the nail edges."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Ask your podiatrist to show you how to cut your nails at your next visit"
                - "Read your health service's guide to cutting toenails"
                - "Cut straight across, level with the toe tip, without digging into the corners"
                - "Look for redness at the nail edges a week after trimming"
            - name: Learning your foot type and how you walk
              description: |-
                ## Purpose
                High arches, flat feet and feet that roll in or out each spread load differently through the foot, ankle and knee. Understanding your own pattern, from a podiatrist's assessment rather than a quick shop test, helps you choose shoes and make sense of where you get sore.

                ## Milestones
                1. Arch height and foot posture described by a podiatrist.
                2. Your walking pattern observed and explained to you.
                3. Wear patterns on your old shoes matched to what you were told.
                4. The two or three shoe features that suit your feet written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your foot type and walking pattern are written in your foot record with the shoe features that suit them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Line up your three most worn pairs and photograph the soles"
                - "Ask your podiatrist to describe your arch and walking pattern"
                - "Match the explanation to the wear on your old shoes"
                - "Write the shoe features that suit your feet in your record"
            - name: How to judge a shoe before buying it
              description: |-
                ## Purpose
                Labels say little, but a few hand checks reveal whether a shoe will support a foot: a firm heel counter, a sole that bends at the toes rather than the middle, a toe box deep enough to wiggle in and a fastening that holds the foot back. Learning these checks makes every future purchase quicker and less of a gamble.

                ## Milestones
                1. The heel counter, flex point, twist, toe box and fastening checks learned.
                2. The checks practised on three pairs you already own.
                3. A five-point checklist saved on your phone for shop visits.
                4. The checklist used on the next purchase.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-point shoe checklist is saved on your phone and has been used on at least one purchase."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Squeeze the heel counter of each shoe you own to test its firmness"
                - "Bend each shoe to see whether it flexes at the toes or the middle"
                - "Save a five-point shoe checklist on your phone"
                - "Use the checklist on the next pair you try on"
            - name: Safe home care for corns and hard skin
              description: |-
                ## Purpose
                Corns and callus form where shoes or bones press, and gentle filing helps, but cutting them or using acid plasters can cause wounds, especially for people with diabetes or poor circulation. Learning what is safe to do at home, and what to leave to a podiatrist, keeps routine care from creating new problems.

                ## Milestones
                1. Your podiatrist asked what home care is safe for your feet.
                2. A gentle filing routine learned for callus after bathing.
                3. The pressure point causing each corn identified.
                4. Corns that keep returning or hurt passed to the podiatrist.

                ## Notes
                Many health services advise people with diabetes, poor circulation or fragile skin not to use medicated corn plasters. Check with your podiatrist first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A home care routine for hard skin agreed with your podiatrist is written in your foot record, with the cause of each corn identified."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your podiatrist what home care is safe for your hard skin"
                - "File callus gently after a bath with a foot file"
                - "Work out which shoe or bone is pressing on each corn"
                - "Book the podiatrist for any corn that hurts or keeps returning"
            - name: Foot and ankle strengthening programme
              description: |-
                ## Purpose
                Weak calves and small foot muscles are linked with heel pain, tired feet and poorer balance, and they respond to simple exercises such as calf raises, towel scrunches and single leg balance. Eight weeks of short sessions twice a week, agreed with a podiatrist or physiotherapist, builds strength you can feel on long days.

                ## Milestones
                1. A set of four or five exercises agreed with a podiatrist or physiotherapist.
                2. Starting numbers recorded, such as calf raises on each leg and balance time.
                3. Two sessions a week completed for eight weeks.
                4. Starting numbers retested and compared.

                ## Notes
                Start from the **Training program** template. Stop and ask your clinician if any exercise causes sharp pain.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Eight weeks of twice-weekly sessions logged, with calf raise and balance numbers retested against the start."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your podiatrist which foot and ankle exercises suit you"
                - "Record your single leg calf raises and balance time on each side"
                - "Do your foot and ankle exercise session @recurring(weekly:tue,fri)"
                - "Retest calf raises and balance after eight weeks"
            - name: Blister prevention for long walks and races
              description: |-
                ## Purpose
                Blisters come from friction, heat and moisture together, and almost every long walk or race cut short by them followed new socks, new shoes or no plan at all. Finding which socks, lacing, lubricants or tapes work for your feet, and testing them in training, makes long days comfortable.

                ## Milestones
                1. Your usual hot spots identified from past walks or runs.
                2. Sock, lubricant and taping options tested on training outings.
                3. A kit of what works ready for long days.
                4. A long outing completed with no blister needing treatment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested anti-blister kit is packed and a long walk or run has been completed without a blister."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark your usual blister spots on a foot outline"
                - "Test one sock or lubricant change on each long training outing"
                - "Practise heel lock lacing on your walking or running shoes"
                - "Pack a blister kit with the products that worked"
            - name: Telling athlete's foot, fungal nails and dry skin apart
              description: |-
                ## Purpose
                Peeling skin, itching between the toes and thick yellow nails can be fungal, but they can also be eczema, psoriasis or simple dryness, and the treatments differ. Knowing what each looks like, and getting a pharmacist or podiatrist to confirm it, saves months on the wrong cream.

                ## Milestones
                1. The typical signs of athlete's foot, fungal nails and dry skin read from a health service source.
                2. Your own feet compared with them and photographed.
                3. A pharmacist or podiatrist consulted before treating.
                4. Any nail sample your clinician offers taken before a long treatment starts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pharmacist or podiatrist has confirmed what the skin or nail change is before treatment began, with the answer recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's pages on athlete's foot and fungal nails"
                - "Photograph the affected skin or nail in daylight"
                - "Show the photos to a pharmacist or podiatrist before treating"
                - "Ask whether a nail clipping test is worth doing first"
            - name: Custom versus ready-made orthotics decision
              description: |-
                ## Purpose
                Custom orthotics can cost many times more than good ready-made insoles, and for some common problems the difference in benefit is small, while for others a custom pair is the right call. Weighing both with your podiatrist, on cost, evidence for your particular problem and lifespan, avoids paying for more support than you need, or less.

                ## Milestones
                1. The problem the orthotics are meant to help clearly stated.
                2. Your podiatrist's view on ready-made versus custom for that problem recorded.
                3. Costs, lifespan and trial periods compared.
                4. One option chosen and a date set to judge whether it helped.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded orthotic decision names the option chosen, its cost and a date to judge whether it helped."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the problem the orthotics should help"
                - "Ask your podiatrist whether ready-made insoles are worth trying first"
                - "Compare cost, lifespan and return policy of each option"
                - "Set a date six weeks out to judge whether the choice is working"
            - name: Ingrown toenail treatment options
              description: |-
                ## Purpose
                An ingrown toenail that keeps returning is often treated by a podiatrist removing a narrow strip of nail under local anaesthetic, while a first episode may settle with nail care and roomier shoes. Knowing the options and the questions to ask helps you decide calmly rather than in the middle of a painful infection.

                ## Milestones
                1. The history of the nail written down: how often, which side, any infections.
                2. Conservative care and nail surgery explained by a podiatrist.
                3. Recovery time, recurrence and cost of each option noted.
                4. A decision recorded and any procedure booked.

                ## Notes
                Spreading redness, pus or a fever with an ingrown nail needs prompt care. See your warning signs card.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment decision for the ingrown nail is recorded after a podiatrist consultation, with any procedure booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down how often the nail has flared and any infections"
                - "Ask your podiatrist about conservative care versus partial nail removal"
                - "Note recovery time and recurrence rate for each option"
                - "Record the decision and book any procedure"
            - name: Fungal nail treatment decision
              description: |-
                ## Purpose
                Fungal nail treatments range from paint-on solutions used for a year, to tablets that may need blood tests, to laser or simply having the nail thinned, and success rates vary widely. Agreeing with a clinician whether to treat at all, and by which route, avoids months of effort on something unlikely to work.

                ## Milestones
                1. The infection confirmed by a clinician, ideally with a nail sample.
                2. Treatment options and their usual success rates explained.
                3. A choice made, including the choice to leave it alone.
                4. Progress photos taken every three months to compare with the first.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on fungal nail treatment follows clinician confirmation, with progress photos at three-month intervals."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Book a pharmacist or podiatrist to confirm the infection"
                - "Ask about success rates and duration for each treatment option"
                - "Record your choice, including a choice not to treat"
                - "Photograph the nail from the same angle @recurring(quarterly)"
            - name: Footwear for a job on your feet all day
              description: |-
                ## Purpose
                Nurses, chefs, retail staff, warehouse workers and teachers can stand or walk for ten hours a shift, often in shoes limited by a uniform policy. Picking work shoes for cushioning, grip and fit within the rules, and owning two pairs to alternate, is the difference between tired feet and chronic heel or forefoot pain.

                ## Milestones
                1. Your employer's footwear rules and any required safety standard written down.
                2. Two or three compliant options tried on at the end of a shift.
                3. Two pairs bought to alternate between shifts.
                4. Feet checked after a month of shifts for new soreness.

                ## Notes
                If your employer requires safety footwear, ask whether they fund or subsidise it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two pairs of compliant work shoes chosen against written criteria are in alternating use for a month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your workplace footwear rules and safety standards"
                - "Try on options at the end of a shift when feet are largest"
                - "Buy two pairs so each can dry out between shifts"
                - "Ask your employer whether they fund safety footwear"
            - name: Bunion care and the surgery question
              description: |-
                ## Purpose
                Bunions usually progress slowly, and many people manage well with wider shoes, padding and toe spacers, while others reach a point where pain limits walking and surgery is worth discussing. Tracking pain and function, and deciding in advance what would make a long recovery worthwhile, lets you decide with a surgeon rather than be decided for.

                ## Milestones
                1. Shoes with enough toe box width for the bunion in daily use.
                2. Pain and the activities it limits logged for three months.
                3. Non-surgical options tried with a podiatrist.
                4. Your own threshold for considering surgery written down.
                5. A referral discussion held if that threshold is met.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three months of bunion pain and activity notes are recorded, with a written decision on whether to seek a surgical opinion."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Measure the width of your forefoot across the bunion"
                - "Log bunion pain and limited activities for three months"
                - "Ask your podiatrist about padding, spacers and wider shoes"
                - "Write down what would make surgery worth discussing"
            - name: Heel pain plan for plantar fasciitis
              description: |-
                ## Purpose
                Sharp heel pain with the first steps in the morning is commonly plantar heel pain, which often improves over months with load management, stretching, supportive shoes and sometimes insoles. A plan agreed with a podiatrist, with a simple pain score to track, keeps you from cycling through every gadget sold online.

                ## Milestones
                1. The cause confirmed by a podiatrist or doctor.
                2. A plan agreed covering footwear, stretches, activity and any insoles.
                3. First-step pain scored each morning for eight weeks.
                4. Progress reviewed at eight weeks and the plan adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight weeks of morning pain scores are logged against an agreed plan and reviewed with a podiatrist."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a podiatrist to confirm the cause of the heel pain"
                - "Agree a plan for shoes, stretches, activity and insoles"
                - "Score your first-step heel pain out of ten each morning"
                - "Review the scores with your podiatrist at eight weeks"
            - name: Deciding whether and how to treat a verruca
              description: |-
                ## Purpose
                Many verrucas clear on their own within a year or two, home treatments take weeks of patience, and clinic options such as freezing or needling cost money and can hurt. Deciding which route fits, given pain, spread and your health, saves effort on something that may resolve anyway.

                ## Milestones
                1. The verruca confirmed by a pharmacist or podiatrist.
                2. Pain, size and any spread photographed and noted.
                3. Waiting, home treatment and clinic treatment compared.
                4. A route chosen with a date to review it.

                ## Notes
                People with diabetes or poor circulation should ask a clinician before using any home verruca treatment.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen verruca approach is recorded with a review date, after confirmation by a pharmacist or podiatrist."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Show the lesion to a pharmacist or podiatrist"
                - "Photograph it with a coin beside it for scale"
                - "Compare waiting, home treatment and clinic treatment"
                - "Set a review date for the route you choose"
            - name: Running shoe fitting and choice
              description: |-
                ## Purpose
                Fit and comfort are the most useful guides when choosing running shoes, and models differ in cushioning, heel-to-toe drop, width and stability. A fitting where you can run in several pairs, wearing your usual socks and bringing your old shoes, narrows the choice quickly.

                ## Milestones
                1. Your weekly distance, surfaces and any injury history written down.
                2. Old running shoes and usual socks taken to a specialist shop.
                3. At least three pairs run in and compared.
                4. One pair chosen and added to your mileage log.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A running shoe pair is chosen after running in at least three options and recorded by model in the mileage log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your weekly distance, surfaces and injury history"
                - "Take your old shoes and usual socks to a running shop"
                - "Run in at least three pairs before choosing"
                - "Add the new pair to your running shoe mileage log"
            - name: Biomechanical assessment appointment
              description: |-
                ## Purpose
                Recurring pain in the feet, ankles or knees is often explained by a biomechanical assessment, which looks at joint range, foot posture and how you walk or run, often on video. Preparing your shoes, activity details and symptom history beforehand helps the podiatrist reach a clear plan in one visit.

                ## Milestones
                1. The assessment booked with a podiatrist who offers it.
                2. Symptom history, training or activity details and old shoes ready.
                3. Shorts and usual footwear packed for the gait analysis.
                4. Findings, exercises and any orthotic plan recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A biomechanical assessment is attended with a prepared history and shoes, and the findings and plan are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your podiatrist whether a biomechanical assessment fits your problem"
                - "Write a one-page history of your pain and activity"
                - "Pack shorts, old shoes and current insoles for the visit"
                - "Record the findings and exercise plan in your foot record"
            - name: Nail surgery day and dressing changes
              description: |-
                ## Purpose
                Partial or total toenail removal under local anaesthetic is quick, but the following weeks of dressings, footwear and activity limits decide how well it heals. Planning the day, the lift home and the dressing schedule in advance makes recovery straightforward.

                ## Milestones
                1. The procedure date booked and time off arranged.
                2. A lift home and loose open-toe footwear ready for the day.
                3. The dressing schedule and supplies in place.
                4. Follow-up appointments attended until the clinic signs you off.

                ## Notes
                Follow your podiatrist's aftercare instructions exactly, and report increasing pain, spreading redness or discharge promptly.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Nail surgery is completed, every dressing change done to schedule and healing signed off by the podiatrist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book the procedure date and arrange time off work"
                - "Arrange a lift home and pack loose open-toe footwear"
                - "Buy the dressings the clinic recommends"
                - "Put each follow-up appointment in the calendar"
            - name: Marathon foot preparation over twelve weeks
              description: |-
                ## Purpose
                Marathons and ultras expose every foot weakness late in the race: black toenails, blisters, a seam that rubs. Using the last twelve weeks of training to settle shoes, socks, nail length and lacing, and rehearsing it all on long runs, means race day brings no new kit.

                ## Milestones
                1. Race shoes chosen by week twelve and broken in on long runs.
                2. Socks, lubricant and taping tested on at least three long runs.
                3. Nails trimmed a few days before race day, not the night before.
                4. A race-day foot kit packed, with a spare pair of socks.
              priority: low
              deadlineOffsetDays: 84
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The race is completed in shoes and socks tested on at least three long runs, with no new kit on race day."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose race shoes and wear them on the next long run"
                - "Test race socks and lubricant on three long runs"
                - "Trim toenails three or four days before the race"
                - "Pack a race-day foot kit with spare socks and blister plasters"
            - name: Foot plan for a multi-day hike
              description: |-
                ## Purpose
                On a multi-day trek, feet never get a full night's recovery the way they do after a single walk, and small hot spots become trip-ending blisters by day three. Breaking in boots, planning daily foot care at camp and carrying the right kit keeps you walking.

                ## Milestones
                1. Boots worn on at least three long walks before the trip.
                2. A daily routine planned: air feet at lunch, change into dry socks, check hot spots at camp.
                3. A foot kit packed with tape, blister dressings and spare socks.
                4. Feet checked every evening of the trip.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The hike is completed with boots broken in beforehand and a foot check done every evening."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Wear the hiking boots on three long walks before you go"
                - "Plan a daily foot routine for lunch stops and camp"
                - "Pack tape, blister dressings and a spare sock pair for each day"
                - "Look after your feet at camp each evening, airing and drying them"
            - name: Breaking in shoes for a wedding or formal event
              description: |-
                ## Purpose
                Formal shoes are often narrow, stiff and worn for one very long day, which is why so many guests end the evening barefoot. Buying early and wearing them in short sessions at home over a few weeks, with a comfort plan for the day itself, keeps blisters out of the photographs.

                ## Milestones
                1. Event shoes bought at least four weeks ahead, fitted late in the day.
                2. Shoes worn indoors in growing sessions over three weeks.
                3. Hot spots padded and a second comfortable pair arranged for the evening.
                4. The day finished in the shoes you chose without blisters.
              priority: low
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Event shoes are worn in over at least three weeks, with a backup pair ready on the day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy the event shoes at least four weeks before the day"
                - "Wear them indoors for 30 minutes, building up each week"
                - "Pad any hot spot with a gel pad or tape"
                - "Arrange a comfortable second pair for the evening"
            - name: Annual diabetic foot risk assessment
              description: |-
                ## Purpose
                People with diabetes are usually offered a yearly foot check of sensation, circulation, skin and footwear, and the result places them in a risk category that decides how often they see a podiatrist. Knowing your category, what it means, and making sure the check really happens every year is one of the most valuable routines in diabetes care.

                ## Milestones
                1. The yearly foot check booked with your diabetes team or practice.
                2. Your risk category and what it means written down.
                3. Podiatry visit frequency for your category agreed.
                4. Each year's result added to your foot record.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A diabetic foot check was completed within the last twelve months, with your risk category and podiatry interval recorded."
                cadence: cyclic
              tasks:
                - "Ask your practice when your last diabetic foot check was"
                - "Book the yearly diabetic foot check @recurring(yearly)"
                - "Ask what your risk category is and what it means for you"
                - "Write the category and podiatry interval in your foot record"
            - name: Daily foot check with diabetes
              description: |-
                ## Purpose
                With reduced feeling, a stone in a shoe or a small burn can go unnoticed until it becomes an ulcer, which is why diabetes teams ask for a daily look at both feet. Tying the check to taking your socks off at night, and knowing exactly what to report, makes it quick and reliable.

                ## Milestones
                1. A daily moment fixed, such as taking socks off at bedtime.
                2. Soles, heels, between the toes and nails checked each day, with a mirror or help.
                3. The inside of each shoe felt for stones or rough seams before wearing.
                4. What to report, and to whom, written on your warning signs card.

                ## Notes
                Many diabetes services advise against hot water bottles or heat pads on feet with reduced feeling, and testing bath water with your elbow or a thermometer. Follow your own team's guidance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feet checked every day for four weeks, with any change reported to the diabetes team within a day."
                cadence: rolling
              tasks:
                - "Choose the moment each day when you take your socks off"
                - "Check soles, heels, nails and between the toes before bed @recurring(daily)"
                - "Feel inside each shoe for stones or seams before putting it on"
                - "Add the diabetes team's contact number to your warning signs card"
            - name: Slippers, shoes and falls in later life
              description: |-
                ## Purpose
                Backless slippers, worn soles and loose shoes are a common factor in falls at home, and painful feet make people walk less steadily. Swapping them for well-fitting, fastened footwear with a thin, firm, grippy sole is one of the simplest falls prevention steps an older adult or their family can take.

                ## Milestones
                1. Every pair of slippers and indoor shoes checked for backs, grip and fit.
                2. Backless or worn pairs replaced with fastened ones.
                3. Foot pain or numbness affecting balance raised with a clinician.
                4. Indoor footwear checked again each year, especially before winter.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All indoor footwear has backs, fastenings and grippy soles, and any foot pain affecting balance has been raised with a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Go through every slipper and indoor shoe for a back, grip and fit"
                - "Replace backless or worn slippers with fastened ones"
                - "Tell your doctor if foot pain or numbness affects your balance"
                - "Check indoor footwear for wear before each winter @recurring(yearly)"
            - name: Nail care when you can no longer reach your feet
              description: |-
                ## Purpose
                Stiff hips, back pain, poorer eyesight or thickened nails can make cutting your own toenails unsafe, and many older adults quietly stop. Arranging regular help, whether a podiatrist, a funded service, a trained foot care assistant or a family member shown how, keeps nails safe and comfortable.

                ## Milestones
                1. The reason home nail care has become hard written down.
                2. Funded and paid options for nail care in your area found.
                3. A regular arrangement in place with a named person or service.
                4. Thick, painful or discoloured nails seen by a podiatrist rather than trimmed at home.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named person or service cuts your toenails at a set interval, with podiatry arranged for any problem nails."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what makes cutting your own nails hard"
                - "Ask your doctor about funded foot care services nearby"
                - "Compare a podiatrist, a foot care assistant and family help"
                - "Set up regular nail care with a named person or service"
            - name: Helping an older relative with foot care
              description: |-
                ## Purpose
                Adult children and partners often notice a parent's feet only when walking changes or a wound appears. Helping with a regular look, shoe shopping and podiatry bookings, with their agreement, catches problems early and supports their independence.

                ## Milestones
                1. A conversation held about what help they would welcome.
                2. Their feet looked at together during regular visits.
                3. Footwear reviewed and any replacements bought with them.
                4. Podiatry appointments booked and transport arranged.

                ## Notes
                Respect their wishes and dignity: offer, do not take over.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A relative's feet are looked at on regular visits and their podiatry appointments are booked with transport arranged."
                cadence: rolling
              tasks:
                - "Ask your relative what foot care help they would welcome"
                - "Look at their feet together on one of your visits @recurring(monthly:15)"
                - "Go shoe shopping with them for well-fitting fastened shoes"
                - "Book their podiatry appointments and arrange transport"
            - name: Foot changes in pregnancy and after birth
              description: |-
                ## Purpose
                Pregnancy can bring swollen ankles, a lower arch and a half or full size increase that may not reverse, and reaching your own feet gets harder in the final months. Planning comfortable shoes, help with nail care and knowing which swelling to report keeps feet comfortable and safe.

                ## Milestones
                1. Shoes with room for swelling in use by mid-pregnancy.
                2. A plan for nail care in the third trimester.
                3. Your midwife's guidance on swelling that needs urgent checking written down.
                4. Feet measured again a few months after birth before buying new shoes.

                ## Notes
                Sudden swelling of the face, hands or feet in pregnancy needs prompt advice from your midwife or maternity unit.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Swelling guidance from your midwife is recorded and feet are re-measured after birth before new shoes are bought."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your midwife which foot or ankle swelling needs urgent checking"
                - "Buy one pair of shoes with room for swelling"
                - "Arrange help with toenail cutting for the last trimester"
                - "Re-measure your feet three months after birth"
            - name: A new runner's first six months of foot care
              description: |-
                ## Purpose
                New runners often build distance faster than their feet, calves and Achilles can adapt, and bruised toenails, blisters and heel pain tend to appear in the first months. Building gradually, in shoes that fit, with a quick look at your feet after each long run, lets them keep up.

                ## Milestones
                1. Shoes fitted and a gradual weekly distance plan written.
                2. Feet checked after each long run for blisters, nails and pain.
                3. Any pain lasting more than a few days logged and rested.
                4. Six months completed without a foot problem that stopped running.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six months of running completed with gradual increases logged and no foot problem stopping training for more than a week."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a weekly distance plan that builds gradually"
                - "Check feet for blisters, bruised nails or pain after long runs"
                - "Log any pain that lasts more than three days"
                - "Book a podiatrist if pain persists beyond two weeks"
            - name: Transition to minimalist or barefoot shoes
              description: |-
                ## Purpose
                Minimal shoes with little cushioning and a zero drop load the calves, Achilles and foot bones differently, and switching too quickly is a known route to injury. A slow transition over several months, starting with walking, lets tissues adapt if you decide the change is worth making.

                ## Milestones
                1. Your reasons for switching and any history of foot or calf injury reviewed with a podiatrist.
                2. A transition plan starting with short walks and increasing over months.
                3. Calf and foot soreness logged after each session.
                4. A decision made at three months to continue, slow down or stop.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A three-month transition is logged with soreness scores, ending in a recorded decision to continue, slow down or stop."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Discuss the switch with your podiatrist if you have past injuries"
                - "Start with short walks in the new shoes"
                - "Log calf and foot soreness the day after each session"
                - "Decide at three months whether to continue, slow down or stop"
            - name: Home video gait check for runners
              description: |-
                ## Purpose
                Slow-motion phone video from the side and behind shows how your foot lands, where it lands relative to your body and whether one side differs, none of which you can feel while running. Filming every few months at the same pace gives you and your podiatrist a record of how your gait changes with shoes, fatigue or injury.

                ## Milestones
                1. Side and rear videos filmed at an easy pace and a faster pace.
                2. Foot strike, cadence and left and right differences noted.
                3. Videos shared with a podiatrist or coach for comment.
                4. A repeat filming done after a shoe change or injury.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Side and rear running videos from at least two dates are saved with notes and reviewed by a podiatrist or coach."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Film side and rear slow-motion video of an easy run"
                - "Count your steps per minute from the video"
                - "Note any difference between left and right foot landings"
                - "Ask the agent to turn your video notes into questions for your podiatrist"
                - "Refilm after any change of shoes or an injury"
            - name: Forefoot pain investigation
              description: |-
                ## Purpose
                Burning or sharp pain in the ball of the foot, or a feeling of walking on a pebble, has several possible causes, including an irritated nerve such as a Morton's neuroma, joint inflammation and stress fractures. Logging when it hurts and in which shoes, then seeing a podiatrist for an assessment and any scan, leads to the right treatment instead of guesswork.

                ## Milestones
                1. Pain location, sensation and the shoes that trigger it logged for two weeks.
                2. A podiatry assessment held with the log.
                3. Any scan or referral the podiatrist suggests completed.
                4. A treatment plan agreed and its first review date set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-week forefoot pain log has been reviewed at a podiatry assessment, with a working diagnosis and plan recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark where the pain is on a foot outline"
                - "Log the pain and which shoes you wore each day for two weeks"
                - "Book a podiatry assessment and bring the log"
                - "Ask the agent to summarise the pain log onto one page for the appointment"
            - name: Living with a high-risk foot after an ulcer
              description: |-
                ## Purpose
                After a foot ulcer heals, the chance of another is high, and specialist foot teams usually set a tighter routine of podiatry, prescribed footwear and daily checks. Keeping that routine, and knowing exactly who to call at the first sign of trouble, is how most new problems are caught while they are still small.

                ## Milestones
                1. The specialist team's routine for visits, footwear and checks written down.
                2. Prescribed footwear worn indoors as well as out.
                3. Every scheduled specialist and podiatry review attended.
                4. A same-day contact route for new wounds saved in your phone and on your warning signs card.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every specialist foot review in the last year was attended, prescribed footwear is in daily use and a same-day contact route is saved."
                cadence: rolling
              tasks:
                - "Write down the routine your foot team has set"
                - "Save the foot team's same-day contact number in your phone"
                - "Wear your prescribed footwear indoors as well as outdoors"
                - "Confirm your next foot clinic review is booked @recurring(quarterly)"
---

# Foot Health & Podiatry

This area is for anyone whose feet ache, crack, rub or simply carry them through long days, from runners counting miles to older adults keeping their balance and people living with diabetes. It starts with the foundations (a first self-check, a warning signs card, accurate measurements, shoes that fit and a registered podiatrist), then the routines that keep skin and nails healthy, the skills of nail cutting, shoe judging and blister prevention, the decisions about orthotics, bunions, heel pain and nail treatments, the events worth preparing your feet for, situations from diabetes and pregnancy to later life, and finally the specialist work of gait analysis and high-risk foot care.

What repeats is a weekly foot inspection, nightly moisturising, a nail trim every four weeks, podiatry visits and a seasonal sock and shoe check each quarter, and an annual review that pulls it all together. The Purchase decision, Habit tracker, Metrics log, Training program and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
