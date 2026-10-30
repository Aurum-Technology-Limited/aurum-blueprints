---
id: fundraising-investors.reward-crowdfunding-launch
name: Reward Crowdfunding Launch
description: "Pre-sell a product on a reward crowdfunding platform: a goal built from real costs, tiers that keep their margin, a launch that funds early and fulfilment backers can trust."
category: business
version: 1.0.0
tags: [fundraising-investors, reward-crowdfunding-launch, founder, creative, small-business, pre-sales, fulfilment, backers]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - content-pipeline
    - metrics-log
    - risk-register
    - marketing-campaign
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Reward Crowdfunding Launch
          description: "Funding a product through pre-sales on reward crowdfunding platforms, planning tiers, campaign content and fulfilment promises."
          projects:
            - name: Reward crowdfunding fit check
              description: |-
                ## Purpose
                Reward crowdfunding works best for a physical or creative product that a stranger understands in ten seconds, that you can make for well under half the pledge price, and that has an audience you can reach before launch. Testing your idea against those three conditions now saves months spent on a campaign that was never going to fund, or worse, one that funds and cannot be delivered.

                ## Milestones
                1. The product described in one sentence that a stranger repeats back correctly.
                2. A rough unit cost and a planned pledge price written side by side, with the margin worked out.
                3. An honest count of people you can contact directly on launch day.
                4. A go, wait or drop decision recorded with the reason.

                ## Notes
                Services, software subscriptions and anything you cannot show working are hard to fund this way. Platforms also ban some categories outright, so check the rules before going further.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written go, wait or drop decision exists, backed by a unit cost estimate, a pledge price and a count of directly reachable supporters."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the product in one sentence and test it on three people outside the project"
                - "Estimate the unit cost and the pledge price you would charge"
                - "Count the subscribers, followers and customers you could message on launch day"
                - "Record a go, wait or drop decision and the reason for it"
            - name: Teardown of ten comparable funded campaigns
              description: |-
                ## Purpose
                The best guide to your own campaign is a set of similar ones that already ran: what goal they set, how fast they funded, which tiers sold and what backers complained about afterwards. Ten teardowns in your category, including two or three that failed, give you realistic numbers for goal, price and timing instead of guesses.

                ## Milestones
                1. Ten campaigns in your category listed, at least two of them unsuccessful.
                2. For each, the goal, final total, backer count, campaign length and lowest tier price recorded.
                3. The tier structures of the three strongest campaigns set out in one comparison sheet.
                4. Late delivery and backer complaints noted from each campaign's comments and updates.
                5. Five lessons written down that will change your own plan.

                ## Notes
                Third-party tracking sites show daily pledge curves for past campaigns. The first 48 hours usually explain most of the final result.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison sheet of ten past campaigns with goal, total, backers, length and tiers, plus five written lessons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List ten past campaigns in your category, including two that missed their goal"
                - "Record each campaign's goal, total raised, backers, length and cheapest tier"
                - "Read the last ten updates of each funded campaign for delivery problems"
                - "Ask the agent to summarise the common backer complaints across the comment sections"
                - "Write five lessons that change your goal, pricing or timing"
            - name: Platform and funding model choice
              description: |-
                ## Purpose
                Platforms differ in audience, category rules, fees, payout timing and whether they run all-or-nothing or keep-what-you-raise funding. All-or-nothing protects you from being funded for a product you cannot afford to make; flexible funding suits projects that can deliver at any amount. Choosing deliberately, with fees and payout dates in hand, avoids surprises in the week the money arrives.

                ## Milestones
                1. Two or three platforms shortlisted that accept your category and your country of residence.
                2. Platform fee, payment processing fee and payout delay written down for each.
                3. All-or-nothing or flexible funding chosen, with the reason recorded.
                4. A creator account opened and identity and bank verification completed on the chosen platform.

                ## Notes
                Start from the **Purchase decision** template. Verification and bank checks can take a couple of weeks, so start them well before the launch date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One platform and funding model chosen, with fees and payout timing recorded and creator verification completed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which platforms accept your product category and country of residence"
                - "Write down the platform fee, processing fee and payout delay for each shortlisted platform"
                - "Decide between all-or-nothing and flexible funding and record why"
                - "Open a creator account and submit identity and bank verification"
            - name: Manufacturing quotes at three order quantities
              description: |-
                ## Purpose
                Your funding goal and tier prices depend on what one unit really costs, and that cost changes sharply with quantity. Written quotes from at least two manufacturers at three volumes, for example 300, 1,000 and 3,000 units, show the minimum order you can survive and the price breaks that later stretch goals might pay for.

                ## Milestones
                1. A specification pack with drawings, materials, finish and packaging sent to at least two manufacturers.
                2. Written quotes at three quantities, including tooling, samples and lead time.
                3. Minimum order quantities and payment terms recorded for each supplier.
                4. A preferred supplier chosen and a pre-production sample ordered.

                ## Notes
                Start from the **Vendor** template, one per manufacturer. Ask whether tooling is a one-off charge or spread into the unit price, because it moves your goal more than anything else.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written quotes from two or more manufacturers at three order quantities, with a preferred supplier chosen and a sample ordered."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page specification with materials, finish, packaging and target quantities"
                - "Send the specification to at least two manufacturers and ask for quotes at three volumes"
                - "Record tooling, sample cost, minimum order and lead time for each quote"
                - "Order a pre-production sample from the preferred supplier"
            - name: Funding goal built from landed unit costs
              description: |-
                ## Purpose
                Many campaigns that fund still lose money, because the goal was set to look achievable rather than to cover the cost of delivery. Building the goal up from landed unit cost, tooling, platform and payment fees, packaging, tax and a contingency of 10 to 20 percent gives you the smallest number at which you can still deliver every reward.

                ## Milestones
                1. A landed cost per reward that includes manufacturing, packaging, freight to your warehouse and duties.
                2. Fixed costs listed: tooling, certification, page production, samples and software.
                3. Platform and processing fees and any sales tax or VAT set aside in the model.
                4. A minimum viable goal and the number of backers needed to reach it written down.
                5. The goal checked against what comparable campaigns raised.

                ## Notes
                Treat sales tax or VAT collected with pledges as money you are holding for the tax authority, not money you raised.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A goal spreadsheet shows landed unit cost, fixed costs, fees, tax and contingency, with the minimum goal and the backers needed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every fixed cost you must pay whether you sell 100 units or 2,000"
                - "Work out landed cost per reward including freight to your warehouse and duties"
                - "Add platform fees, processing fees, tax and a contingency to the model"
                - "Calculate the minimum goal and the number of backers needed to reach it"
            - name: Reward tier structure and pricing
              description: |-
                ## Purpose
                Backers decide in seconds, so the tier list needs an obvious default choice, a reason to pledge early and no reward that loses money once shipping is added. Most well-run campaigns lead with one core reward, a limited early bird at a real discount and a bundle that raises the average pledge.

                ## Milestones
                1. One core reward, priced from the goal model, set as the main tier.
                2. A limited early bird tier with a fixed quantity and a discount you can afford.
                3. A two or three unit bundle that lifts the average pledge.
                4. A low-cost support tier for people who only want to follow along.
                5. Every tier checked for margin after fees, packaging and shipping.

                ## Notes
                Fewer tiers convert better than many; six or seven is plenty for most products. Digital-only and thank-you tiers need no shipping but still need a delivery plan.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A tier table of no more than seven tiers, each with price, quantity limit, contents and margin after fees and shipping."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a tier table with price, contents and quantity limit for each tier"
                - "Set the early bird quantity and discount from the goal model"
                - "Check the margin of every tier after fees, packaging and shipping"
                - "Show the tier table to five likely backers and note which tier each would pick"
            - name: Campaign budget and cash gap timeline
              description: |-
                ## Purpose
                Money goes out long before pledges arrive: samples, video, ads and the factory deposit are often paid two or three months ahead, and the payout usually lands a couple of weeks after the campaign ends. A month-by-month cash timeline from first spend to final shipment shows how much you must fund yourself and when the factory balance falls due.

                ## Milestones
                1. A pre-launch budget covering samples, photography, video, landing page and ads.
                2. The expected payout date and amount after fees, based on the minimum goal.
                3. Factory deposit and balance dates, plus freight and fulfilment payments, placed on the timeline.
                4. The largest cash shortfall and the month it occurs identified.
                5. A decision on how that gap will be covered, written down.

                ## Notes
                Ads that bring in launch-day backers are usually paid from your own pocket weeks earlier. Cap pre-launch ad spend at an amount you could afford to lose.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly cash timeline from first spend to last shipment names the largest shortfall, its month and how it will be covered."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every cost you will pay before the campaign launches"
                - "Place factory deposit, balance, freight and fulfilment payments on a monthly timeline"
                - "Mark the expected payout date after the campaign closes"
                - "Write down the largest cash gap and how you will cover it"
            - name: Campaign bank account, payouts and tax set-up
              description: |-
                ## Purpose
                Pledges are customer money held against a promise, and mixing them with personal or everyday business funds makes it hard to see what is left for fulfilment. A separate account, a business entity if you need one, and early questions to your accountant about income timing and sales tax keep the payout clean and the year-end return simple.

                ## Milestones
                1. A dedicated bank account linked to the platform for payouts.
                2. Your accountant's advice recorded on when pledge income is recognised and which taxes apply.
                3. Sales tax or VAT registration questions answered for the countries you will ship to.
                4. Bookkeeping categories set up for pledges, fees, refunds and fulfilment costs.

                ## Notes
                Whether you must register for sales tax or VAT abroad depends on where backers live and how much you ship there. Ask a professional rather than guessing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dedicated payout account is linked, bookkeeping categories exist and the accountant's tax advice is written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Open a separate bank account to receive the campaign payout"
                - "Book a call with your accountant about pledge income and tax registration"
                - "Set up bookkeeping categories for pledges, fees, refunds and fulfilment"
                - "Link the payout account to the platform and confirm it verifies"
            - name: Pre-launch landing page and email list
              description: |-
                ## Purpose
                The first 48 hours decide whether a campaign is picked up by the platform's own discovery pages, and those hours are funded by people who signed up before launch. A simple landing page with one image, one sentence and an email sign-up measures real demand while there is still time to change the plan.

                ## Milestones
                1. A landing page live with a product image, a one-line promise and an email sign-up.
                2. A confirmation email that tells subscribers the launch month and asks them one question.
                3. Sign-up conversion and cost per lead tracked from the first week.
                4. A subscriber target written down, sized so that a small share of the list funds the first day.

                ## Notes
                A small paid reservation is a far stronger signal than a free sign-up. Check the platform's rules on taking deposits before launch.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live landing page with a sign-up form, a working confirmation email and a written subscriber target tied to the first-day goal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the one-sentence promise and choose the hero image for the landing page"
                - "Build the landing page with an email sign-up and a confirmation email"
                - "Set a subscriber target from your first-day funding goal"
                - "Decide whether to test a small paid reservation and check the platform rules"
            - name: Launch date and campaign length decision
              description: |-
                ## Purpose
                Campaigns of around 30 days often raise as much as longer ones and are far less exhausting to run. The launch day matters because your list, press contacts and partners all need to act on it, so choosing a date clear of major holidays, big rival campaigns and your own commitments gives everyone a fixed point to plan back from.

                ## Milestones
                1. Campaign length chosen, with the end date and time written down.
                2. Launch date checked against holidays, trade shows and your own calendar.
                3. Platform review time and pre-launch page approval built into the schedule.
                4. The date shared with your manufacturer, partners and anyone helping on the day.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A launch date and end date are fixed in writing and shared with the manufacturer and everyone helping on launch day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a campaign length between three and five weeks and note the end date"
                - "Check the launch week against holidays and big campaigns in your category"
                - "Add the platform review and approval time to the schedule"
                - "Send the launch date to the manufacturer and your helpers"
            - name: Weekly pre-launch list growth routine
              description: |-
                ## Purpose
                Lists grow when someone does the work every week: a post, a partner mention, a small ad test, a reply to everyone who wrote in. A fixed weekly session with the subscriber count, cost per lead and one new channel tried keeps growth visible and tells you early if the launch date needs to move.

                ## Milestones
                1. A weekly slot in the calendar for list growth.
                2. Subscriber count and cost per lead logged every week.
                3. One new channel or partner tried each week, with the result noted.
                4. A rule written for when slow growth pushes the launch date back.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly entries show subscriber count, cost per lead and the channel tried that week."
                cadence: rolling
              tasks:
                - "Block a weekly hour for list growth in your calendar"
                - "Log subscriber count, cost per lead and the channel tried this week @recurring(weekly:mon)"
                - "Write the subscriber number below which the launch date moves back"
                - "Reply personally to every subscriber who answers the confirmation email"
            - name: Campaign content pipeline
              description: |-
                ## Purpose
                A campaign needs far more content than people expect: the page, the video, 20 or more social posts, launch emails, update drafts, ad variations and press assets. Running it as a pipeline, with each piece moving from idea to draft to approved to scheduled, stops the night-before scramble and lets helpers pick up work without asking.

                ## Milestones
                1. A pipeline board with idea, draft, approved and scheduled columns.
                2. Every launch-week asset listed with an owner and a due date.
                3. A weekly planning session reviewing what moves next.
                4. All launch-day emails and posts scheduled at least three days before launch.

                ## Notes
                Start from the **Content pipeline** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every launch-week asset sits on the pipeline with an owner, and all launch-day posts and emails are scheduled three days ahead."
                cadence: rolling
              tasks:
                - "Create the pipeline board from the content pipeline template"
                - "List every asset needed for launch week with an owner and due date"
                - "Move each content item forward and fill the gaps in the coming week @recurring(weekly:wed)"
                - "Schedule all launch-day emails and posts three days before launch"
            - name: Paid ad spend review
              description: |-
                ## Purpose
                Ads can build a pre-launch list cheaply or burn the whole marketing budget in a fortnight, and the difference shows in the numbers within days. A weekly review of spend, cost per lead before launch and cost per backer during the campaign, set against the margin on an average pledge, tells you which ads to cut and which to feed.

                ## Milestones
                1. A weekly ad budget ceiling set from the campaign budget.
                2. Cost per lead and cost per backer tracked by ad and audience.
                3. A stop rule written: the cost per backer above which an ad is paused.
                4. Weekly decisions to pause, keep or raise each ad recorded.

                ## Notes
                Compare cost per backer with the margin on the average pledge, not with the pledge itself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly log of ad spend shows cost per lead or per backer for each ad, with a written stop rule applied every week."
                cadence: rolling
              tasks:
                - "Set a weekly ad budget ceiling you will not exceed"
                - "Write the cost per backer above which an ad is paused"
                - "Review spend, cost per lead and cost per backer for each ad @recurring(weekly:tue)"
                - "Record which ads were paused, kept or given more budget"
            - name: Live campaign daily dashboard
              description: |-
                ## Purpose
                During the campaign, small signals decide what to do tomorrow: which referral source is sending backers, whether an add-on is selling, whether a tier is about to sell out. A five-minute daily dashboard of total, new backers, average pledge, top referrers and conversion rate keeps those decisions grounded in data rather than mood.

                ## Milestones
                1. A dashboard with daily total, new backers, average pledge and conversion rate.
                2. Referral tracking links set up for each email, partner and ad channel.
                3. The dashboard filled in every day the campaign is live.
                4. One action chosen each day from what the numbers show.

                ## Notes
                Start from the **Metrics log** template. A plateau in the middle third is normal; compare against your teardown campaigns, not against your own first two days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard entry exists for every day of the live campaign, each with one action noted for the next day."
                cadence: cyclic
              tasks:
                - "Create referral tracking links for each email, partner and ad channel"
                - "Set up the dashboard from the metrics log template"
                - "Record total, new backers, average pledge and top referrers @recurring(daily)"
                - "Write one action for tomorrow based on today's numbers"
            - name: Backer comments and messages response routine
              description: |-
                ## Purpose
                Unanswered questions on a campaign page look like an absent creator, and prospective backers read the comments before they pledge. Answering every comment and message within a day, from a shared set of tested answers on shipping, timing and tiers, turns the comment section into a reason to back.

                ## Milestones
                1. A response time standard set, for example within 24 hours.
                2. A frequently asked questions document with approved answers on shipping, dates and tiers.
                3. Repeated questions added to the campaign page's own FAQ section.
                4. Every comment and message answered within the standard for the whole campaign.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every comment and message during the campaign is answered within 24 hours, with recurring questions added to the page FAQ."
                cadence: cyclic
              tasks:
                - "Write approved answers to the ten questions backers are most likely to ask"
                - "Answer every new comment and direct message on the campaign @recurring(daily)"
                - "Add any question asked three times to the campaign page FAQ"
                - "Give a helper the answer document to cover days you cannot"
            - name: Backer update schedule
              description: |-
                ## Purpose
                Backers who hear nothing assume the worst, and silence after funding is the commonest source of angry comments and refund requests. A fixed rhythm, weekly during the campaign and at least monthly until the last reward ships, with photos from the factory and honest dates, keeps trust high even when things slip.

                ## Milestones
                1. An update calendar covering the campaign and the months to fulfilment.
                2. A short update structure: progress, photos, what is next and any risk.
                3. Weekly updates posted during the live campaign.
                4. Monthly updates posted from close until the last reward ships.

                ## Notes
                Bad news delivered early with a new date is forgiven far more often than good news that arrives late.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An update is posted every week of the campaign and every month after it, with no gap longer than five weeks until fulfilment ends."
                cadence: rolling
              tasks:
                - "Draft an update structure with progress, photos, next steps and risks"
                - "Post a backer update during the live campaign @recurring(weekly:fri)"
                - "Post a production and shipping update after the campaign @recurring(monthly:12)"
                - "Ask the factory for fresh photos or video before each update"
            - name: Fulfilment risk register review
              description: |-
                ## Purpose
                Most crowdfunding delays come from a short list of causes: tooling revisions, failed samples, component shortages, certification, freight and customs. Writing them down with an owner and a fallback, and reviewing the list monthly from launch to final shipment, means problems reach backers as managed updates rather than surprises.

                ## Milestones
                1. A risk register listing at least ten fulfilment risks with likelihood and impact.
                2. An owner and a fallback action for each high risk.
                3. A monthly review held from launch until the last reward ships.
                4. Each risk that happened linked to the backer update that explained it.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk register of ten or more fulfilment risks with owners is reviewed every month from launch until the final shipment."
                cadence: rolling
              tasks:
                - "List ten things that could delay making or shipping the rewards"
                - "Give each high risk an owner and a fallback action"
                - "Review the fulfilment risk register and update likelihoods @recurring(monthly:20)"
            - name: Factory production check-in routine
              description: |-
                ## Purpose
                Production slips quietly when nobody asks: a material is substituted, a mould needs a second revision, a golden sample sits unsigned. A weekly check-in with your manufacturer, using the same questions every time and asking for photos, catches changes while they can still be fixed and gives you material for backer updates.

                ## Milestones
                1. A standing weekly call or message thread agreed with the factory contact.
                2. A fixed question list covering schedule, materials, quality issues and the next payment.
                3. The golden sample approved in writing before mass production starts.
                4. An inspection before shipment booked, by you or a third-party inspector.

                ## Notes
                Agree a slot that works across both time zones and keep to it, even in weeks with nothing new to report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly factory check-in is logged from deposit to shipment, with a signed golden sample and a completed pre-shipment inspection."
                cadence: rolling
              tasks:
                - "Agree a weekly check-in time with your factory contact"
                - "Send the standard schedule, materials and quality questions to the factory @recurring(weekly:thu)"
                - "Approve the golden sample in writing before mass production"
                - "Book a pre-shipment quality inspection"
            - name: Campaign money reconciliation
              description: |-
                ## Purpose
                After payout, the money drains steadily into the factory, freight, fulfilment and replacements, often over six months or more. A monthly reconciliation of what came in, what has gone out and what is still owed shows how much is left for the backers who have not received anything yet, and warns you early if it will not stretch.

                ## Milestones
                1. One sheet tracking money received, refunds and every committed cost.
                2. A monthly figure for money remaining against costs still to pay.
                3. Tax set aside in a separate pot and never counted as available cash.
                4. A warning threshold written down for when remaining money drops below remaining costs plus contingency.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly reconciliation runs from payout to final shipment, each showing cash remaining against committed fulfilment costs."
                cadence: rolling
              tasks:
                - "Set up one sheet tracking money received, refunds and committed costs"
                - "List every committed cost still to be paid before the last reward ships"
                - "Compare money remaining with costs still to pay @recurring(monthly:5)"
                - "Move the tax portion into a separate savings pot"
            - name: Backer support inbox after funding
              description: |-
                ## Purpose
                Once rewards start moving, the messages change to address changes, missing parcels, damaged items and wrong colours, and they keep coming for months. A single support inbox with saved replies, a replacement policy and a twice-weekly clear-out keeps one unhappy backer from becoming a public thread.

                ## Milestones
                1. One support address or helpdesk used for all backer queries.
                2. Saved replies for address changes, tracking, damage and missing items.
                3. A written replacement and refund policy, with a budget for replacements.
                4. The inbox cleared twice a week until 30 days after the final shipment.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "All backer queries go to one inbox, are answered from saved replies and are cleared twice a week until 30 days after final shipment."
                cadence: rolling
              tasks:
                - "Set up one support address and point the campaign page and emails to it"
                - "Write saved replies for address changes, tracking, damage and missing items"
                - "Set aside a replacement budget, for example 2 to 3 percent of units"
                - "Clear the backer support inbox @recurring(weekly:mon,thu)"
            - name: Campaign page story and copy
              description: |-
                ## Purpose
                A campaign page has to answer, in the order a stranger asks: what is it, why should I care, does it work, who are you, when will I get it and what could go wrong. Learning that structure, and writing the page as short sections with an image every few paragraphs, is the biggest influence on conversion that you control.

                ## Milestones
                1. The page structure written as headings before any copy.
                2. A headline and subhead tested on five people who know nothing about the product.
                3. A full draft with images placed every two or three paragraphs.
                4. The page read on a phone, where most backers will see it, and trimmed.
                5. Feedback collected from two creators who have run campaigns.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A complete page draft, checked on a phone and reviewed by two past creators, carries a headline that five strangers understood."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the page outline as headings in the order a stranger asks questions"
                - "Test three headline options on five people who do not know the product"
                - "Ask the agent to cut the full draft by a third without losing any facts"
                - "Read the page preview on a phone and remove anything that does not earn its space"
                - "Send the preview link to two past creators for feedback"
            - name: Campaign video script and shoot
              description: |-
                ## Purpose
                Many viewers decide within the first ten seconds of the video, so it should show the product doing its job before anyone introduces themselves. Planning the script, a shot list and a two to three minute cut, and learning enough about light and sound to avoid the obvious mistakes, matters more than an expensive crew.

                ## Milestones
                1. A script that shows the product working in the first ten seconds.
                2. A shot list with locations, props and the people needed.
                3. Sound recorded with an external microphone and checked on the day.
                4. A final cut of two to three minutes with captions for silent viewing.
                5. A 15 to 30 second cut-down for ads and social posts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A captioned video of two to three minutes and a short cut-down are exported and approved before the page goes to review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Watch the videos of your three strongest comparable campaigns and time the first product shot"
                - "Write a script that shows the product working in the first ten seconds"
                - "Draw up a shot list with locations, props and people"
                - "Record sound with an external microphone and check it before leaving the location"
                - "Add captions to the final cut and export a short version for ads"
            - name: Product photography and animated demos
              description: |-
                ## Purpose
                Campaign pages are read mostly as pictures: hero shots, scale shots in a hand, detail close-ups and short looping animations that show a feature working. Learning to shoot clean product images at home with window light or a light tent, and turning short clips into small animations, gives you 20 or more assets for the page, updates and ads.

                ## Milestones
                1. A simple home set-up with a plain background and controlled light.
                2. Hero, scale, detail and in-use shots of the prototype captured.
                3. Five short looping demos made from video clips and compressed for fast loading.
                4. A shared folder of approved images, named and sized for page, social and press.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Twenty or more approved product images and five compressed looping demos are saved in a shared, named folder."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up a plain background with window light or a light tent"
                - "Shoot hero, scale, detail and in-use photos of the prototype"
                - "Turn five short clips into looping demos under the platform's file size limit"
                - "Name and file the approved images by use in a shared folder"
            - name: Crowdfunding ad targeting and tracking basics
              description: |-
                ## Purpose
                Paid ads for crowdfunding work differently from ordinary online selling: before launch you buy email sign-ups, at launch you retarget them, and during the campaign you need tracking that shows which ads produce backers. Learning the basics of pixels, custom audiences, lookalikes and attribution windows means you can judge an agency's claims or run small tests yourself.

                ## Milestones
                1. Tracking pixels installed on the landing page and connected to the campaign where the platform allows.
                2. A custom audience of subscribers and a lookalike audience built from it.
                3. Three small test ads run on a fixed budget, each with a written hypothesis.
                4. A one-page summary of what the tests showed about cost per lead.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pixels are installed, custom and lookalike audiences are built and three ad tests are summarised on one page with cost per lead."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Install the ad platform's tracking pixel on the landing page"
                - "Build a custom audience from subscribers and a lookalike from it"
                - "Run three small ad tests, each with one written hypothesis"
                - "Summarise what the tests showed about cost per lead"
            - name: International shipping and customs basics
              description: |-
                ## Purpose
                Shipping is where reward campaigns most often lose money, because a parcel's cost depends on weight, size, destination and who pays the import charges. Learning how dimensional weight, tariff codes, duties and import VAT work, and the difference between duties paid and unpaid, lets you price shipping honestly and spares backers a surprise fee at the door.

                ## Milestones
                1. Packed weight and dimensions of each reward measured from a real sample.
                2. A likely tariff code for the product noted and confirmed with a customs broker or freight forwarder.
                3. Shipping quotes to your five largest backer regions, with and without duties prepaid.
                4. A written choice on whether backers in each region pay duties at checkout or on delivery.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Packed dimensions are measured, a tariff code is confirmed with a professional, and five regions have shipping quotes and a duties decision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Weigh and measure each reward packed in its shipping box"
                - "Ask a freight forwarder or customs broker to confirm the tariff code"
                - "Get shipping quotes to your five biggest regions with and without duties prepaid"
                - "Decide region by region who pays the import duties"
            - name: Press, reviewer and creator outreach
              description: |-
                ## Purpose
                Coverage from a trusted reviewer or a niche publication can bring more backers than a week of ads, but writers and video creators receive dozens of pitches a day. Learning to write a short, personal pitch, offer a review sample early and give a clear embargo date makes it easy for the right people to say yes.

                ## Milestones
                1. A list of 40 writers, reviewers and creators who cover your category, with what each covered recently.
                2. A press kit with images, a fact sheet, the video and a launch embargo.
                3. Personal pitches sent four to six weeks before launch, with samples to the most relevant contacts.
                4. A tracker of replies, samples sent and coverage dates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Forty targeted contacts are pitched four or more weeks before launch, with samples and coverage tracked in one sheet."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List 40 writers, reviewers and creators who covered similar products this year"
                - "Build a press kit with images, fact sheet, video link and embargo date"
                - "Send personal pitches four to six weeks before launch"
                - "Ship review samples to the ten most relevant contacts"
            - name: Writing an honest risks and challenges section
              description: |-
                ## Purpose
                Platforms ask creators to explain what could go wrong, and experienced backers read that section closely to judge whether you understand manufacturing. Writing it from your risk register, naming the real risks and what you have already done about each, builds more confidence than a paragraph of reassurance.

                ## Milestones
                1. The three biggest risks to delivery taken from the fulfilment risk register.
                2. For each risk, the step already taken and the fallback if it happens.
                3. A realistic delivery window stated as a range of months, with the assumptions behind it.
                4. The section reviewed by someone who has shipped a physical product.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A risks section names three specific delivery risks with mitigations and a delivery window, reviewed by an experienced maker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the three biggest delivery risks from your risk register"
                - "Write the step already taken and the fallback for each risk"
                - "State the delivery window as a range of months with its assumptions"
                - "Ask someone who has shipped a physical product to review the section"
            - name: Product safety certifications before shipping
              description: |-
                ## Purpose
                Electronics, toys, products with batteries and anything that touches food or skin often need testing and marks before they can be sold or shipped into a market, and finding out after funding can add months and a large bill. Identifying the likely requirements for each destination now, with a test lab or compliance consultant, puts the cost into the goal and the time into the delivery date.

                ## Milestones
                1. Product features that may trigger certification listed, such as electronics, radio, batteries, toy use or food contact.
                2. The likely marks and tests for each target market confirmed with a test lab or compliance consultant.
                3. Quotes and lead times for testing added to the goal model and schedule.
                4. Battery and hazardous goods shipping rules checked with your freight forwarder.

                ## Notes
                Requirements differ by country and change over time. Treat this as a list of questions for a qualified lab, not a conclusion you reach yourself.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of required tests and marks per target market, confirmed by a lab or consultant, has its cost and lead time in the plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the features that might need certification, such as batteries, radio or food contact"
                - "Ask a test lab or compliance consultant which tests apply in each target market"
                - "Add testing cost and lead time to the goal model and schedule"
                - "Check battery and hazardous goods shipping rules with your freight forwarder"
            - name: Stretch goals that protect the margin
              description: |-
                ## Purpose
                Stretch goals keep a funded campaign moving, but upgrades promised in the excitement of day three are a common cause of late and loss-making delivery. Planning a short list in advance, each costed per unit and tied to a funding level that pays for it, lets you announce them with confidence rather than improvise.

                ## Milestones
                1. Five candidate stretch goals listed, each costed per unit and in added lead time.
                2. The funding level that pays for each one calculated.
                3. Any goal that adds tooling, certification or a new supplier removed.
                4. Three stretch goals chosen and ready to reveal in sequence.

                ## Notes
                Stretch goals that cost little to deliver, such as a digital extra or a colour option already tooled, are the safest.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three stretch goals are chosen, each with a per-unit cost, a funding trigger and no new tooling or certification."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List five possible stretch goals and their cost per unit"
                - "Calculate the funding level that pays for each one"
                - "Remove any goal that needs new tooling, testing or a new supplier"
                - "Prepare reveal graphics for the three chosen goals"
            - name: Add-ons and upsell plan
              description: |-
                ## Purpose
                Accessories, spare parts and a second colour raise the average pledge without changing the core reward, and many backers add them after the campaign in the pledge manager. Choosing add-ons that ship in the same box and use stock you are already making keeps the extra revenue from turning into extra shipping cost.

                ## Milestones
                1. Add-on candidates listed with unit cost, weight and whether they fit the main box.
                2. Prices set so each add-on keeps its margin after any shipping change.
                3. A decision on which add-ons appear during the campaign and which only in the pledge manager.
                4. Add-on quantities included in the factory order.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An add-on list shows prices, margins and box fit, with a decision on campaign or pledge manager for each item."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List possible add-ons with unit cost, weight and whether they fit the main box"
                - "Price each add-on to keep its margin after shipping"
                - "Decide which add-ons appear during the campaign and which only afterwards"
                - "Add the planned add-on quantities to the factory order"
            - name: Choosing a pledge manager
              description: |-
                ## Purpose
                After the campaign you need to collect addresses, reward choices, shipping fees and add-on orders, and a pledge manager does this far better than a spreadsheet. Comparing two or three on fees, shipping calculation, tax handling and export to your fulfilment partner prevents a messy survey and a month of data cleaning.

                ## Milestones
                1. Two or three pledge managers shortlisted that integrate with your platform.
                2. Fees, shipping calculation, tax handling and export formats compared.
                3. A trial run with a test backer completed.
                4. One pledge manager chosen and set up before the campaign ends.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One pledge manager is chosen after comparing fees, shipping, tax and exports, with a test backer run through it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist pledge managers that integrate with your campaign platform"
                - "Compare fees, shipping calculation, tax handling and export formats"
                - "Run a test backer through a trial of the preferred option"
                - "Configure the chosen pledge manager before the campaign closes"
            - name: Fulfilment partner versus shipping it yourself
              description: |-
                ## Purpose
                Packing 200 parcels at the kitchen table is manageable; packing 3,000 bound for 40 countries is not. Comparing the full cost and time of doing it yourself against a crowdfunding fulfilment partner, including storage, pick and pack, packaging and returns, gives you a decision you can price into shipping before the campaign.

                ## Milestones
                1. Expected parcel count and destinations estimated from the goal and comparable campaigns.
                2. A do-it-yourself cost including your own hours, packaging and postage.
                3. Quotes from two fulfilment partners covering receiving, storage, pick and pack and returns.
                4. A decision recorded, with the fulfilment cost per backer added to shipping prices.

                ## Notes
                Start from the **Vendor** template for each partner, and ask for references from campaigns of your size.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded fulfilment decision compares self-shipping with two partner quotes, and the cost per backer is built into shipping fees."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate parcel count by destination from your goal and comparable campaigns"
                - "Cost out packing and posting yourself, including your own hours"
                - "Request quotes from two fulfilment partners for receiving, storage and pick and pack"
                - "Check the fulfilment partner's storage and handling invoice @recurring(monthly:25)"
            - name: Shipping charged at pledge or after the campaign
              description: |-
                ## Purpose
                Charging shipping during the campaign gives backers a full price up front but needs rates you may not have yet; charging later in the pledge manager uses real rates, but some backers drop out when they see the fee. Choosing with your shipping quotes in hand, and stating it clearly on the page, removes one of the commonest sources of backer anger.

                ## Milestones
                1. Shipping quotes for each region gathered from the customs and fulfilment work.
                2. The pros and cons of each approach written for your product and regions.
                3. A decision recorded, with the wording to use on the page.
                4. A buffer added for rate rises between campaign and shipment.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written decision on when shipping is charged exists, with the page wording for it and a rate buffer for each region."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather the shipping quotes for each region in one table"
                - "Write the pros and cons of charging now versus later for your regions"
                - "Record the decision and the exact page wording"
                - "Add a buffer for shipping rate rises before dispatch"
            - name: Crowdfunding agency and marketing service vetting
              description: |-
                ## Purpose
                Creators are approached by agencies offering to fund a campaign for a fee plus a share of pledges, and some deliver while others mainly sell traffic that never converts. Checking a shortlist against campaigns they actually ran, their fee structure and references from creators who used them protects a budget you cannot get back.

                ## Milestones
                1. A decision on which jobs you would outsource: ads, PR, page design or all of it.
                2. Two or three agencies asked for links to campaigns they ran.
                3. References from at least two past clients of each, including one that missed its goal.
                4. Fees, percentage cut, minimum terms and exit terms compared in writing.
                5. A hire or no-hire decision recorded.

                ## Notes
                Be wary of guaranteed totals and of fees charged on pledges the agency did not bring in.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A hire or no-hire decision on outside marketing help is recorded, based on references and a written fee comparison."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Decide which campaign jobs you would pay someone else to do"
                - "Ask each agency for links to campaigns they ran last year"
                - "Call two past clients of each agency, including one that missed its goal"
                - "Compare fees, percentage cut, minimum term and exit terms in writing"
            - name: Late pledges and post-campaign pre-order store
              description: |-
                ## Purpose
                People keep finding the product after the campaign closes, through press, shares and search, and a late pledge or pre-order page captures them instead of sending them away. Setting one up with honest delivery dates, prices slightly above the campaign and stock reserved in the factory order turns the tail of attention into revenue.

                ## Milestones
                1. Late pledges switched on in the pledge manager, or a pre-order page live on your own store.
                2. Prices set above the campaign tiers and below the planned retail price.
                3. Expected delivery dates shown honestly, later than campaign backers'.
                4. Pre-order units reserved in the factory order.
                5. Pre-order sales reviewed monthly against reserved stock.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A live late-pledge or pre-order page carries prices, delivery dates and reserved stock, and is reviewed every month."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Switch on late pledges or build a pre-order page on your own store"
                - "Set prices above campaign tiers and below planned retail"
                - "Show the delivery month for late orders on the page"
                - "Review pre-order sales against reserved stock @recurring(monthly:15)"
            - name: Pre-launch page follower push
              description: |-
                ## Purpose
                Most platforms let people follow a campaign before it goes live and notify them the moment it launches, and that follower count is one of the better predictors of first-day results. A two-week push moving email subscribers onto the pre-launch page gives you a clear signal: if followers are well short of target, you can delay before going public.

                ## Milestones
                1. The pre-launch page approved and live on the platform.
                2. Two emails and a set of posts asking subscribers to follow the pre-launch page.
                3. Follower count tracked against a target through the fortnight.
                4. A go or delay call made three days before launch, based on the follower count.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pre-launch page is live, followers are tracked against a target, and a go or delay decision is recorded three days before launch."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Submit the pre-launch page for platform approval"
                - "Email subscribers twice asking them to follow the pre-launch page"
                - "Set the follower count you need three days before launch"
                - "Make and record the go or delay call three days out"
            - name: Launch day and first 48 hours plan
              description: |-
                ## Purpose
                Funding a large share of the goal in the first 48 hours brings platform promotion, press interest and the confidence of later backers who see a project already succeeding. An hour-by-hour plan for launch day, with emails, posts, partner shares and someone watching the comments, turns your list into momentum.

                ## Milestones
                1. An hour-by-hour run sheet for launch day and the following day.
                2. Launch emails scheduled to go out within minutes of the campaign going live.
                3. Partners, friends and press briefed with the exact link and time.
                4. One person assigned to comments and messages for the first 48 hours.
                5. Results of the first 48 hours recorded against the target.

                ## Notes
                Start from the **Marketing campaign** template. Run the whole launch sequence once with a private preview link the day before.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Launch day runs from a written hour-by-hour plan, and the 48-hour total is recorded against the first-day target."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write an hour-by-hour run sheet for launch day and the day after"
                - "Schedule the launch emails to send minutes after the campaign goes live"
                - "Brief partners and friends with the exact link and launch time"
                - "Assign one person to watch comments and messages for 48 hours"
            - name: Mid-campaign slump plan
              description: |-
                ## Purpose
                Daily pledges almost always drop after the first few days and stay low until the final stretch, and creators with nothing planned for that middle period watch the campaign stall. Preparing a sequence of moments in advance, such as a stretch goal reveal, a livestream demo, a cross-promotion with another campaign or a press piece landing, gives people reasons to come back.

                ## Milestones
                1. Four mid-campaign moments scheduled, roughly one every four or five days.
                2. Two or three cross-promotion swaps agreed with campaigns running at the same time.
                3. A livestream or demo session announced with a date.
                4. Pledges on each moment's day compared with the days around it.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four planned mid-campaign moments are delivered on schedule, with each day's pledges compared against the surrounding days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Schedule four mid-campaign moments, one every four or five days"
                - "Agree cross-promotion swaps with two campaigns running at the same time"
                - "Announce a livestream demo with a date and a reminder link"
                - "Compare each moment's pledges with the days around it"
            - name: Final 72 hours push
              description: |-
                ## Purpose
                Ending-soon reminders from the platform and fence-sitters finally deciding usually make the last three days the second biggest surge of the campaign. A planned final push, with a last-chance email sequence, a closing livestream and a clear reason to pledge now, captures that surge instead of letting it pass quietly.

                ## Milestones
                1. A last-chance email sequence written for 72 hours, 24 hours and the final few hours.
                2. A closing event or livestream scheduled before the end time.
                3. A final stretch goal or limited tier prepared to announce.
                4. A thank-you update drafted for the moment the campaign closes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Last-chance emails at 72 hours, 24 hours and the final hours are sent, a closing event is held and a thank-you update is posted at close."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write last-chance emails for 72 hours, 24 hours and the final hours"
                - "Schedule a closing livestream before the end time"
                - "Prepare the final stretch goal or limited tier announcement"
                - "Draft the thank-you update to post the moment the campaign closes"
            - name: Campaign close and payout check
              description: |-
                ## Purpose
                When the campaign ends the total is not final: some cards fail, a few backers cancel, and the payout arrives after a review period with fees deducted. Checking the final numbers, chasing failed payments through the platform's process and confirming the payout amount and date gives you the real budget for fulfilment.

                ## Milestones
                1. Final total, backers and dropped pledges recorded once payment collection ends.
                2. Backers with failed payments contacted through the platform's process.
                3. The payout amount reconciled against the total minus fees and failed payments.
                4. The factory balance and fulfilment budget updated with the real figure.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final payout is reconciled to the campaign total and the fulfilment budget is updated with the real figure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the final total, backers and failed payments after collection ends"
                - "Contact backers with failed payments through the platform's process"
                - "Check the payout amount against the total less fees and failed payments"
                - "Update the factory balance and fulfilment budget with the real payout"
            - name: Backer survey and address lock
              description: |-
                ## Purpose
                Rewards cannot ship until every backer has confirmed address, reward choices and add-ons, and a survey sent too early collects addresses that change before dispatch. Sending it when the ship date is close, with reminders and a stated lock date, gives your fulfilment partner clean data the first time.

                ## Milestones
                1. Survey questions limited to what fulfilment needs: address, choices, add-ons and a phone number for couriers.
                2. The survey sent once the ship date is about two months away.
                3. Two reminders sent to backers who have not responded.
                4. Addresses locked on a stated date and exported to the fulfilment partner.
                5. Non-responders listed and given a final chance before their rewards are held back.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least 95 percent of backers complete the survey before the lock date, and clean data is exported to fulfilment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write survey questions covering only address, choices, add-ons and phone number"
                - "Send the survey once the ship date is about two months away"
                - "Send two reminders to backers who have not answered"
                - "Lock addresses on the stated date and export them to fulfilment"
            - name: First shipping wave to backers
              description: |-
                ## Purpose
                Packaging, label and data problems show up in the first parcels, so it pays to ship a small batch before the bulk. A pilot wave of 20 to 50 parcels to a spread of regions, with every arrival checked, catches the mistake before it reaches thousands of backers.

                ## Milestones
                1. A pilot wave of 20 to 50 parcels sent to a spread of regions.
                2. Delivery and condition confirmed with each pilot backer.
                3. Packaging or label fixes made before the bulk release.
                4. The bulk shipment released, with tracking emails reaching every backer.
                5. A shipping progress update posted to all backers.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot wave arrives intact across regions, fixes are made and the bulk wave ships with tracking sent to every backer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick 20 to 50 pilot backers across your main regions"
                - "Ask each pilot backer to confirm delivery and condition with a photo"
                - "Fix any packaging or label problem before releasing the bulk wave"
                - "Release the bulk shipment and check the tracking emails go out"
            - name: Solo creator campaign around a day job
              description: |-
                ## Purpose
                Illustrators, game designers, writers and musicians often run a campaign alone, in evenings and weekends, for an art book, a card deck, a vinyl pressing or a board game. Planning it around a fixed number of hours a week, with a simple tier list and a printer or pressing plant used to small runs, keeps it achievable without burning out or letting the day job slip.

                ## Milestones
                1. A realistic weekly hours budget agreed with yourself and anyone you live with.
                2. Jobs you will hand off or pay for, such as page design or packing, identified.
                3. A printer, pressing plant or maker experienced with small crowdfunded runs chosen.
                4. Campaign and fulfilment dates set around known busy periods at work.
                5. A protected weekly creative session kept through the campaign.

                ## Notes
                Taking leave from work for launch week and the final three days makes a real difference, so book it early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written campaign plan fits a stated weekly hours budget, names what is outsourced and sets dates around work commitments."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the hours a week you can give the campaign for three months"
                - "List the jobs you will pay for or hand to a friend"
                - "Ask two creators in your medium which printer or pressing plant they used"
                - "Book time off work for launch week and the final three days"
                - "Hold a protected creative session on the project @recurring(weekly:sat)"
            - name: Existing small business adding a crowdfunded product
              description: |-
                ## Purpose
                A shop, studio or brand with existing customers can use a campaign to pre-sell a new product and fund its first production run without borrowing. The advantages are a ready audience and a known supply chain; the risks are confusing regular customers and pulling staff away from the core business, so both need planning.

                ## Milestones
                1. A decision on whether the campaign runs under the existing brand or a new product name.
                2. Existing customers segmented and an early-access offer prepared for them.
                3. Staff time for the campaign agreed, with cover for normal trading.
                4. Campaign income and costs kept separate in the business accounts.
                5. A plan for selling the product through the normal shop once backers are served.

                ## Notes
                Tell regular customers why the product is on a crowdfunding platform rather than in the shop, or some will feel they are paying twice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan covers brand, customer offer, staff cover, separate accounts and retail sale after fulfilment."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Decide whether to run the campaign under your brand or a new product name"
                - "Segment existing customers and draft an early-access offer for them"
                - "Agree staff hours for the campaign and cover for normal trading"
                - "Check campaign spend against the business's own monthly plan @recurring(monthly:8)"
            - name: Hardware founder using campaign results as demand evidence
              description: |-
                ## Purpose
                For a hardware startup, a funded campaign is also a dataset: thousands of paying customers, conversion by channel and price sensitivity across tiers and countries. Capturing that evidence cleanly, with honest caveats about the fulfilment still to come, gives later conversations with lenders, retailers or investors something firmer than a survey.

                ## Milestones
                1. Backer count, average pledge, conversion by channel and country split exported.
                2. Tier and add-on uptake summarised as evidence of price sensitivity.
                3. Fulfilment status and remaining risks stated plainly alongside the numbers.
                4. A two-page demand summary written and stored for later use.

                ## Notes
                Backers who have not received a product yet are not yet satisfied customers. Keep every claim to what the data shows.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page demand summary with backer, conversion, tier and country data and an honest fulfilment status is stored for later use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export backer, pledge, referral and country data from the platform"
                - "Summarise tier and add-on uptake as evidence of price sensitivity"
                - "Ask the agent to draft a two-page demand summary from the exports"
                - "Add a plain statement of fulfilment status and remaining risks"
            - name: Relaunching after a campaign that missed its goal
              description: |-
                ## Purpose
                An all-or-nothing campaign that misses its goal costs time but no money owed to backers, and plenty of products fund on a second attempt. Working out why the first one stalled, from traffic, conversion and backer comments, and relaunching with a lower goal, a sharper page or a bigger list, turns the first attempt into a test run.

                ## Milestones
                1. Traffic, conversion rate and first 48 hours compared with the teardown benchmarks.
                2. Comments and messages from the first campaign summarised into reasons people hesitated.
                3. Three changes chosen from goal, price, page, list size or timing.
                4. Followers of the first campaign invited to the relaunch with an early offer.
                5. A relaunch date set only once the list has passed a stated target.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written diagnosis of the first campaign names three specific changes and ties the relaunch date to a stated list target."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare the first campaign's traffic and conversion with your teardown benchmarks"
                - "Summarise backer comments into reasons people hesitated"
                - "Choose three changes to goal, price, page, list or timing"
                - "Email first-campaign followers an early offer for the relaunch"
            - name: Communicating a fulfilment delay to backers
              description: |-
                ## Purpose
                Backers judge a creator less on a delay than on how it was explained, and most reward campaigns deliver later than first promised. When a date slips, an update that says what happened, what you are doing, the new date range and what backers can do if they would rather have a refund keeps the community on your side.

                ## Milestones
                1. The cause of the delay and a realistic new date range confirmed with the supplier.
                2. An update written covering what happened, what you are doing and the new dates.
                3. A stated option for backers who want a refund instead of waiting.
                4. The update posted before backers start asking, with comments answered that week.
                5. The new dates added to the risk register and the update calendar.

                ## Notes
                Never post a new date you cannot support with the supplier's own schedule. A second slip hurts far more than a longer first estimate.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A delay update with cause, actions, new date range and refund option is posted before backers ask, and its comments are answered within a week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the cause and a new date range with the supplier in writing"
                - "Write the update covering what happened, what you are doing and the new dates"
                - "Decide and state the refund option for backers who do not want to wait"
                - "Answer every comment on the delay update within the week"
            - name: Multi-region fulfilment hubs and tax on rewards
              description: |-
                ## Purpose
                Above a few thousand backers, shipping everything from one country means slow delivery, high postage and duty bills for backers abroad. Splitting stock across regional hubs, for example North America, the EU, the UK and Australia, with taxes collected and paid correctly in each, cuts cost and complaints but needs careful planning with a fulfilment partner and a tax adviser.

                ## Milestones
                1. Backer counts by region used to decide which hubs are worth opening.
                2. Freight split, import duties and hub costs compared with single-origin shipping.
                3. Tax registration and collection needs for each region confirmed with a tax adviser.
                4. Stock allocated per hub, with a buffer for replacements.
                5. Shipping and tax rates reviewed each quarter for later campaigns and pre-orders.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A hub plan compares regional and single-origin costs, records tax advice per region and allocates stock to each hub."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Group backer counts by region from the survey export"
                - "Compare regional hub costs with shipping everything from one origin"
                - "Ask a tax adviser what registration each hub region requires"
                - "Review regional shipping and tax rates for upcoming orders @recurring(quarterly)"
            - name: Second campaign for an existing backer community
              description: |-
                ## Purpose
                Creators who delivered their first campaign well often raise more the second time, because past backers return early and in numbers. Planning a follow-on product or expansion around what the community asked for, and keeping them engaged between campaigns, gives the next launch a much stronger first day.

                ## Milestones
                1. Past backers' requests and feedback summarised into three product ideas.
                2. A short survey of past backers ranking those ideas.
                3. A loyalty reward or early access for returning backers designed.
                4. A between-campaigns rhythm of news for the community in place.
                5. The first campaign fully delivered before the second launches.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A follow-on idea is chosen from a survey of past backers, with a returning-backer reward and the first campaign fully delivered."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise past backers' requests into three possible follow-on ideas"
                - "Survey past backers to rank the three ideas"
                - "Design an early access or loyalty reward for returning backers"
                - "Send past backers a short news email between campaigns @recurring(quarterly)"
            - name: Campaign post-mortem and backer data archive
              description: |-
                ## Purpose
                Every campaign generates a year of lessons and data that vanish once the platform page goes quiet. A written post-mortem on what the goal, tiers, launch, factory and shipping really cost and took, plus an export of backer data kept in line with your privacy notice, makes the next product faster and cheaper to launch.

                ## Milestones
                1. Planned versus actual figures for goal, unit cost, shipping, timeline and margin.
                2. Ten lessons written, each with what you would do differently.
                3. Backer, survey and shipping data exported and stored securely.
                4. Data retention and consent checked against your privacy notice.
                5. The post-mortem shared with your team or a peer creator.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A post-mortem with planned versus actual figures and ten lessons exists, and backer data is archived in line with the privacy notice."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare planned and actual goal, unit cost, shipping, timeline and margin"
                - "Write ten lessons with what you would do differently"
                - "Export backer, survey and shipping data and store it securely"
                - "Check the stored data against your privacy notice and consent wording"
---

# Reward Crowdfunding Launch

This area is for founders, creators and small businesses funding a product through pre-sales on a reward crowdfunding platform. It starts with the foundations (a fit check, comparable campaigns, platform choice, factory quotes, a goal and tiers built from real costs, and a pre-launch list), then the routines that run a campaign and its fulfilment, the skills behind the page, video and shipping, the decisions about certification, stretch goals, add-ons and partners, the dated moments from launch day to the first shipping wave, situations for solo creators, shops and hardware founders, and finally the work of a creator planning a second campaign.

What repeats is a weekly look at list growth, content and ad spend before launch, a daily dashboard and comment sweep while the campaign is live, weekly then monthly backer updates, a weekly factory check-in, and monthly money and risk reviews until the last reward ships. The Purchase decision, Vendor, Content pipeline, Metrics log, Risk register and Marketing campaign templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
