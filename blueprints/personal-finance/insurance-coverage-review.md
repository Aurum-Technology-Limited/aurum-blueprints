---
id: personal-finance.insurance-coverage-review
name: Insurance Coverage Review
description: "Every home, contents, car, travel, pet and gadget policy on one list, checked for gaps and double cover, valued correctly and renewed on purpose rather than rolled over at a loyalty price."
category: personal
version: 1.0.0
tags: [personal-finance, insurance-coverage-review, everyone, homeowner, renter, home-insurance, car-insurance, travel-insurance, renewals]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - vendor
    - metrics-log
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Insurance Coverage Review
          description: "Reviewing home, contents, car, travel and gadget insurance for the right cover at the right price, avoiding overlaps and gaps."
          projects:
            - name: List of every insurance policy in the household
              description: |-
                ## Purpose
                Most households hold between six and twelve general insurance policies, and at least one of them usually renews silently from a card nobody checks. Writing every policy on one list, with insurer, what it covers, premium, excess and renewal date, is the starting point for every other decision in this area.

                ## Milestones
                1. Twelve months of bank and card statements searched for insurance payments.
                2. Every policy on one list with insurer, cover type, annual premium, excess and renewal date.
                3. Cover held through employers, bank accounts and credit cards added to the same list.
                4. A total annual spend on general insurance worked out.

                ## Notes
                Include the small ones: gadget cover bought at the till, breakdown cover, boiler cover and pet policies are the easiest to forget and the most likely to overlap.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single list holds every general insurance policy in the household with premium, excess and renewal date, plus a total annual spend."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the last year of bank and card statements for the word insurance"
                - "List each policy with insurer, cover, premium, excess and renewal date"
                - "Ask your employer and bank which insurance comes with your job or account"
                - "Add up the total yearly cost of all policies"
            - name: Policy schedules and wordings in one folder
              description: |-
                ## Purpose
                When a pipe bursts or a suitcase vanishes, the first question is what the policy actually says, and the answer is usually in a PDF buried in an old email. Saving the current schedule, policy wording and certificate for each policy in one named folder, paper or digital, means a claim can start within minutes.

                ## Milestones
                1. One folder created with a sub-folder per policy.
                2. The current schedule, full policy wording and any certificate saved for each policy.
                3. Old schedules moved into an archive so only current documents sit on top.
                4. A second person in the household told where the folder is.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds the current schedule and full wording for every policy on the household list, and one other adult knows where it is."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a folder named Insurance with one sub-folder per policy"
                - "Download the schedule and full wording from each insurer's online account"
                - "Move expired schedules into an archive sub-folder"
                - "Show one other adult where the folder is kept"
            - name: Renewal dates on one calendar
              description: |-
                ## Purpose
                Insurers are required in many countries to show last year's premium on the renewal notice, but that notice arrives three to four weeks out, which is too late to shop calmly. Putting every renewal date in a calendar with a reminder six weeks ahead turns renewal from a surprise into a planned errand.

                ## Milestones
                1. Every renewal date from the policy list entered in the household calendar.
                2. A reminder set six weeks before each renewal.
                3. Policies that auto-renew marked so they are never left to roll over by default.
                4. A note of which month is busiest so renewals can be spread out over time.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every policy's renewal date sits in the household calendar with a reminder six weeks ahead, and auto-renewing policies are flagged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Enter each renewal date from your policy list into your calendar"
                - "Set a reminder six weeks before each renewal"
                - "Mark the policies set to renew automatically from a card or direct debit"
                - "Note which months have more than two renewals"
            - name: Gap and overlap check across all policies
              description: |-
                ## Purpose
                Double cover is common: phones covered by both a packaged bank account and a gadget policy, or a bike on contents and a separate cycle policy. Gaps are just as common, such as no accidental damage on contents or no cover for items taken out of the house. Laying the risks against the policies on one page shows what to drop and what to add.

                ## Milestones
                1. A list of the household's main risks: the building, contents, cars, travel, pets, gadgets, liability and legal costs.
                2. Each risk matched to the policy or policies that cover it.
                3. Every overlap marked with the cheaper or better place to keep that cover.
                4. Every gap marked with a decision to insure it, self-insure it or accept it.

                ## Notes
                Start from the **Risk register** template. Two policies covering the same item rarely pay twice; they usually share the claim, so you pay two premiums for one payout.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page register shows every household risk against its policy, with each overlap and gap given a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the risks your household would struggle to pay for out of savings"
                - "Match each risk to the policy that covers it"
                - "Mark every item covered twice and every item not covered at all"
                - "Write a keep, drop or add decision beside each overlap and gap"
            - name: Buildings rebuild cost worked out properly
              description: |-
                ## Purpose
                Buildings cover should match what it would cost to clear the site and rebuild, not the market value of the house, and the two can differ by tens of thousands either way. An out-of-date sum insured can mean an insurer scales down a claim for underinsurance. Using a rebuild cost calculator or a surveyor's figure, and noting how it was reached, fixes the most expensive number in the household's cover.

                ## Milestones
                1. The current buildings sum insured found on the schedule.
                2. A rebuild cost estimate taken from a recognised calculator or a recent survey.
                3. Floor area, construction type and outbuildings recorded with the estimate.
                4. The sum insured changed with the insurer if the two differ materially.

                ## Notes
                Many policies now offer unlimited or high-limit buildings cover with no stated sum; if yours does, record that instead and check any conditions attached. A survey or valuation from the last few years may already state a reinstatement figure.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rebuild cost with its method and date sits in the insurance folder, and the buildings sum insured matches it or is confirmed as unlimited."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the buildings sum insured on your current schedule"
                - "Measure or look up the internal floor area of the home"
                - "Run the figures through a recognised rebuild cost calculator"
                - "Ask the insurer to change the sum insured if it is too low or too high"
                - "Rerun the rebuild cost calculator before the home renewal @recurring(yearly)"
            - name: Contents value counted room by room
              description: |-
                ## Purpose
                People guess their contents at a round number and usually guess low, because furniture, clothes and kitchen kit add up far faster than expected. Going room by room with replacement prices takes an afternoon and protects against a claim being reduced because the total was understated.

                ## Milestones
                1. A room-by-room list with a replacement cost for each group of items.
                2. Clothes, kitchen equipment and garden and garage items counted, not just the visible furniture.
                3. Items above the policy's single-item limit listed separately.
                4. The contents sum insured updated to the new total.

                ## Notes
                Value at what it would cost to buy new today if the policy is new for old, which most are. A walk-through video on your phone doubles as evidence later.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated room-by-room contents valuation exists, and the policy's contents sum insured has been set to that total or above."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick one room and price replacing everything in it new"
                - "Repeat for every room, the loft, the shed and the garage"
                - "List any single item worth more than the policy's single-item limit"
                - "Record a walk-through video of each room on your phone"
                - "Update the contents sum insured with your insurer"
            - name: Statement of fact accuracy check
              description: |-
                ## Purpose
                Every policy is priced on a set of facts you gave or the insurer assumed: occupation, claims history, alarm type, roof material, annual mileage, where the car sleeps. A wrong answer, even an innocent one, can lead to a claim being reduced or refused. Reading the statement of fact for each policy line by line and correcting it now is far cheaper than discovering the error after a loss.

                ## Milestones
                1. The statement of fact or proposal summary downloaded for each policy.
                2. Every answer read and checked against how things really are.
                3. Each error reported to the insurer in writing, with any change in premium noted.
                4. Written confirmation of each correction saved in the policy folder.

                ## Notes
                Assumptions are the trap: some online quotes assume no previous claims, standard construction and a particular lock type unless you change them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each policy's statement of fact has been checked line by line, and every correction is confirmed in writing by the insurer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the statement of fact for your home and car policies"
                - "Read each answer and mark any that are wrong or out of date"
                - "Email each insurer the corrections and ask for written confirmation"
                - "Save the confirmations in the policy folder"
            - name: Insurer contact cards and claims lines
              description: |-
                ## Purpose
                At two in the morning with water through the ceiling, nobody wants to search an app for a claims number. A short card for each insurer, with policy number, claims line, emergency helpline and what they want first, saves the first hour of any claim and lets someone else in the household start it.

                ## Milestones
                1. A card for each insurer with policy number, claims line, emergency helpline and online claim link.
                2. Excess and any cover limits that matter in an emergency written on each card.
                3. Cards saved on two phones and printed for the folder.
                4. Home emergency helpline numbers stuck inside a kitchen cupboard door.

                ## Notes
                Start from the **Vendor** template, one record per insurer, so contact history and complaint references live in the same place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each insurer has a contact card holding policy number, claims and emergency lines and excess, saved on two phones and in print."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create one vendor record per insurer from the template"
                - "Add the policy number, claims line and emergency helpline to each"
                - "Save the cards on your phone and a partner's phone"
                - "Print the home emergency numbers and stick them inside a cupboard door"
                - "Ring each claims line once to check the number still works @recurring(yearly)"
            - name: Cover already included with bank accounts and cards
              description: |-
                ## Purpose
                Packaged current accounts often bundle travel, phone and breakdown cover for a monthly fee, and some credit cards add purchase protection or travel accident cover. Knowing exactly what you already hold, and the conditions on it, stops you buying a second policy and also stops you relying on cover that excludes you, for example on age or medical grounds.

                ## Milestones
                1. Every packaged account and card benefit listed with its monthly fee.
                2. The conditions for each benefit noted: age limits, medical declarations, phone registration, trip length.
                3. A decision recorded on whether each packaged account is worth its fee against standalone policies.
                4. Any phones or travellers not yet registered under the account added.

                ## Notes
                Packaged travel cover usually requires you to declare medical conditions separately, and some phone cover only applies once each handset is registered.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every bank and card insurance benefit is listed with its conditions, and a keep or downgrade decision is recorded for each packaged account."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the benefits guide for each packaged account you hold"
                - "Note the age, medical and registration conditions for each benefit"
                - "Price the same cover as standalone policies"
                - "Decide whether each packaged account is worth its monthly fee"
                - "Check the account benefits guide for changes to cover @recurring(yearly)"
            - name: Six-week renewal window routine
              description: |-
                ## Purpose
                Renewal quotes for existing customers are often higher than the same insurer quotes new ones, and the best prices for car and home cover tend to appear around three to four weeks before the start date rather than the day before. A standing monthly glance six weeks ahead, followed by a fixed sequence of compare, call and choose, keeps every renewal deliberate.

                ## Milestones
                1. A monthly check of renewals due in the next six weeks in place.
                2. For each upcoming renewal: last year's premium, the new quote and two comparable quotes noted.
                3. A call made to the current insurer with the cheapest like-for-like quote.
                4. The renewal or switch confirmed before the old policy ends, with no gap in cover.

                ## Notes
                Start from the **Operational checklist** template. Cancel auto-renewal only after the new policy is confirmed, so you are never uninsured for a day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every renewal in a twelve-month period was compared against at least two like-for-like quotes before its start date, with the outcome noted."
                cadence: rolling
              tasks:
                - "Copy the renewal steps into an operational checklist"
                - "Check the calendar for renewals due in the next six weeks @recurring(monthly:4)"
                - "Gather two like-for-like quotes for each renewal due"
                - "Record last year's price, the renewal quote and the price you paid"
            - name: Premiums taken matched to policy schedules
              description: |-
                ## Purpose
                Insurance direct debits change quietly: a mid-term adjustment, a renewal you meant to cancel, a policy that kept collecting after you sold the car. Matching what left the account each month to the premiums on the schedules catches a stray payment within weeks, not at the next annual review.

                ## Milestones
                1. A list of the monthly insurance payments you expect, with amounts and dates.
                2. Each month's statement checked against that list.
                3. Any unexpected or changed payment queried with the insurer within the month.
                4. Refunds for cancelled or duplicated policies chased until received.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For twelve months, every insurance payment on the statements has matched a current schedule or been queried within the same month."
                cadence: rolling
              tasks:
                - "Write down each insurance payment you expect each month and its amount"
                - "Tick each insurance payment against the list on the statement @recurring(monthly:19)"
                - "Query any payment that does not match a current schedule"
                - "Chase any promised refund until it reaches your account"
            - name: Change of circumstances notifications
              description: |-
                ## Purpose
                Most policies require you to tell the insurer about material changes during the year: a new job, a lodger, building work, a speeding conviction, a car modification or a home left empty. Missing one can invalidate a claim. A quarterly prompt to ask what has changed, with a short list of the usual triggers, makes the duty easy to meet.

                ## Milestones
                1. A list of changes each insurer says you must report, taken from the wordings.
                2. A quarterly check of the household against that list.
                3. Each change reported in writing and the insurer's reply saved.
                4. Any premium change recorded on the policy list.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of reportable changes exists, and every change in the last twelve months has a saved notification and insurer reply."
                cadence: rolling
              tasks:
                - "Copy each insurer's list of changes you must report into one note"
                - "Run through the list and ask what has changed this quarter @recurring(quarterly)"
                - "Email the insurer about each change and save the reply"
                - "Update the premium on your policy list if it changes"
            - name: Yearly contents inventory refresh
              description: |-
                ## Purpose
                Within a year, a contents list made once goes stale as new laptops, bikes and furniture arrive and old things leave. Refreshing it each year, with new receipts filed and photos updated, keeps the sum insured honest and gives you evidence to back a claim without hunting for proof.

                ## Milestones
                1. Receipts and photos for new purchases over a set value filed through the year.
                2. The room-by-room list updated once a year with new and departed items.
                3. The contents total recalculated and compared with the sum insured.
                4. Any change in the sum insured or specified items made before renewal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The contents inventory carries this year's date, its total is within ten percent of the sum insured, and new valuables have receipts on file."
                cadence: cyclic
              tasks:
                - "Pick a value above which every new purchase's receipt is filed"
                - "Photograph and file receipts for new items over that value"
                - "Update the room-by-room list and recalculate the total @recurring(yearly)"
                - "Change the sum insured if the total has moved by more than a tenth"
            - name: Annual premium log
              description: |-
                ## Purpose
                Without a record, nobody remembers whether the car insurance was 480 or 620 last year, and a creeping premium goes unnoticed. A log of what each policy cost each year, the excess and whether you switched gives a long view that makes renewal negotiations and switching decisions quick.

                ## Milestones
                1. A log with a row per policy per year: insurer, premium, excess, renewal quote and price paid.
                2. Past years filled in from old schedules where they can be found.
                3. This year's total compared with last year's.
                4. Any policy that rose more than ten percent without a change in risk flagged.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A premium log holds at least two years of figures for every policy, with this year's total compared against last year's."
                cadence: cyclic
              tasks:
                - "Set up a premium log from the metrics log template"
                - "Fill in last year's figures from old schedules"
                - "Add each renewal's quote and the price you paid when it happens"
                - "Compare this year's insurance total with last year's @recurring(yearly)"
            - name: Claims history and no-claims proof file
              description: |-
                ## Purpose
                Switching insurer can stall because the new insurer wants proof of a no-claims discount, or a claim from four years ago is half remembered on a quote form. Keeping a simple record of every claim and incident, with dates, amounts and outcomes, plus the latest no-claims proof, makes every future quote faster and more accurate.

                ## Milestones
                1. Every claim and reported incident in the last five years listed with date, policy, cost and fault.
                2. The latest no-claims discount proof saved for each car.
                3. Incidents reported but not claimed recorded separately, since many forms ask about them.
                4. The list updated after any new incident.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A five-year claims and incident record exists, and current no-claims proof for every car is saved in the folder."
                cadence: rolling
              tasks:
                - "List every claim and incident from the last five years"
                - "Request a no-claims discount letter for each car policy"
                - "Note whether each incident was a claim, a notification or fault-free"
                - "Check the record is complete before answering any quote form"
                - "Save the new no-claims letter after each car renewal @recurring(yearly)"
            - name: Home upkeep that keeps cover valid
              description: |-
                ## Purpose
                Home policies cover sudden events, not gradual ones: a slow leak behind a bath, worn roof flashing or blocked gutters can all be excluded as wear and tear or poor maintenance. A short seasonal check of the parts of the house insurers most often cite protects both the building and the claim.

                ## Milestones
                1. The maintenance conditions and wear-and-tear exclusions in your buildings policy noted.
                2. A seasonal checklist of roof, gutters, seals, pipes and the boiler written.
                3. Each check dated with a photo of anything fixed.
                4. Pipes lagged and the stopcock located before the first frost.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated record shows the seasonal checks done four times in a year, with photos of repairs and the stopcock location known."
                cadence: cyclic
              tasks:
                - "Read the wear and tear and maintenance exclusions in your buildings policy"
                - "Check gutters, roof edges, bath seals and visible pipes @recurring(quarterly)"
                - "Photograph and date any repair you make"
                - "Find the stopcock and label it"
                - "Lag exposed pipes and test the heating before winter @recurring(yearly)"
            - name: Lock, alarm and security conditions met
              description: |-
                ## Purpose
                Contents policies often say the insurer will not pay for theft without forced entry, or only if specific locks were used, an alarm was set or windows were secured. People sign up to these conditions without reading them. Checking the security endorsements against the actual doors and windows avoids learning about them after a burglary.

                ## Milestones
                1. Every security condition or endorsement on the home policy listed.
                2. Each external door and window checked against the required lock standard.
                3. Any shortfall fixed or the insurer told and the condition renegotiated.
                4. Household members told which conditions apply, such as setting the alarm when out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every security condition on the home policy is met in practice or formally changed with the insurer, and the household knows the rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the security conditions and endorsements on your home schedule"
                - "Check each outside door and window against the required lock type"
                - "Fit missing locks or ask the insurer to change the condition"
                - "Tell everyone at home which security rules the policy relies on"
            - name: Whole portfolio review each year
              description: |-
                ## Purpose
                Renewing one policy at a time never shows the full picture: total spend, the same risk covered twice, excesses that no longer fit your savings. Once a year, taking an hour to look at every policy together, with the premium log and gap register beside you, catches what monthly routines miss.

                ## Milestones
                1. The policy list, premium log and gap register reviewed together once a year.
                2. Total insurance spend compared with last year and with household income.
                3. Excesses checked against what the emergency fund can now absorb.
                4. Three changes for the coming year written down and dated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review note exists with total spend, excess check and three dated changes for the coming year."
                cadence: cyclic
              tasks:
                - "Book an hour in your calendar for the yearly insurance review"
                - "Lay the policy list, premium log and gap register side by side"
                - "Write three changes to make before next year's renewals @recurring(yearly)"
                - "Ask the agent to summarise the year's premiums and claims in five lines"
            - name: Reading a policy wording in thirty minutes
              description: |-
                ## Purpose
                Policy wordings run to forty pages, but the parts that decide a claim fit on one: the definitions, the main exclusions, the conditions and the limits. Learning where those sit, and practising on your own home policy, makes every later comparison faster and shows you the clauses that matter before you need them.

                ## Milestones
                1. The definitions, general exclusions, general conditions and limits sections located in one wording.
                2. A one-page summary of your home policy's limits, exclusions and conditions written.
                3. Three clauses you did not expect noted and, if unclear, asked about.
                4. The same method used on a second policy.

                ## Notes
                Read the definitions first: words like home, unoccupied, valuables and accidental damage often mean something narrower than everyday English.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One-page summaries of limits, exclusions and conditions exist for at least two of your policies."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open your home policy wording and find the definitions section"
                - "Note the single-item limit, valuables limit and unoccupancy rule"
                - "Ask the agent to draft a one-page summary of exclusions and conditions"
                - "Ask the insurer to explain any clause you are unsure of"
            - name: Underinsurance, averaging and new for old
              description: |-
                ## Purpose
                Two ideas cause the most disappointment at claim time. If the sum insured is too low, some insurers apply averaging and pay only the same proportion of the claim; and indemnity cover pays the worn value, not the cost of new. Understanding both, and checking which applies to your policies, explains why valuations matter.

                ## Milestones
                1. Averaging explained in your own words with a worked example.
                2. The difference between new-for-old and indemnity cover noted.
                3. Each of your policies marked as new for old or indemnity, and whether averaging applies.
                4. Any item category on indemnity terms, often clothing or bikes, noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explains averaging with an example and records which of your policies are new for old, indemnity or subject to averaging."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your home wording for the words average and underinsurance"
                - "Work an example of a claim reduced by averaging"
                - "Mark each policy as new for old or indemnity"
                - "List any items your policy settles at worn value"
            - name: How no-claims discounts really work
              description: |-
                ## Purpose
                Built up over years, a no-claims discount can be worth more than half a car premium, and it shapes whether a small claim makes sense at all. Knowing how many years you lose for a fault claim, what protecting the discount actually protects, and how it transfers between insurers or to a second car turns a vague worry into a calculation.

                ## Milestones
                1. Your current years of no-claims discount confirmed for each car.
                2. Your insurer's step-back scale for one and two claims noted.
                3. What protected no-claims does and does not protect written down, including the effect on the base premium.
                4. A rule of thumb written for when a small claim is worth making.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records your no-claims years, the insurer's step-back scale and a written rule for when a small claim is worth making."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm your years of no-claims discount with your car insurer"
                - "Ask for the step-back scale after one and two claims"
                - "Find out whether a protected discount still raises the base premium"
                - "Write your own threshold for paying small repairs yourself"
            - name: Comparison sites without the traps
              description: |-
                ## Purpose
                Comparison sites put the cheapest quote at the top, and the cheapest is often cheap because of a high excess, missing accidental damage, a low single-item limit or a quiet change in what you declared. Learning to set the filters, check the defaults and compare on cover first and price second gives a fair fight between quotes.

                ## Milestones
                1. The default assumptions on one comparison site checked and corrected.
                2. A like-for-like specification written: excess, limits, add-ons and key cover.
                3. Quotes from two comparison sites and one insurer that does not appear on them compared.
                4. The insurer's own key facts document read for the top two quotes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written like-for-like specification exists, and a renewal was compared across two sites and one direct-only insurer using it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the excess, limits and add-ons you want as a fixed specification"
                - "Run one quote on two comparison sites using that specification"
                - "Get a quote direct from an insurer that does not list on comparison sites"
                - "Read the key facts for the two cheapest quotes before choosing"
            - name: What moves a premium up or down
              description: |-
                ## Purpose
                Premiums respond to factors you can change and many you cannot: job title wording, postcode, where the car is kept, annual mileage, voluntary excess, payment method and how far ahead you buy. Learning which levers are honest and which are fraud, such as misstating occupation or fronting, lets you lower the price without risking the cover.

                ## Milestones
                1. A list of the factors insurers price on for home and car cover.
                2. Each factor marked as changeable, fixed or off limits.
                3. Three honest changes tested on a quote, with the price effect noted.
                4. A line written on the dishonest shortcuts that void cover.

                ## Notes
                Choosing the most accurate of several true job titles is fine; picking a job you do not do is not. Fronting, naming a parent as main driver of a young driver's car, can void the policy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three honest pricing changes have been tested on a real quote, with each one's effect on price recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the factors your car and home insurers ask about"
                - "Mark each one as changeable, fixed or off limits"
                - "Test three honest changes on a quote and note the prices"
                - "Write down the shortcuts that would void your cover"
            - name: Making a claim that gets paid
              description: |-
                ## Purpose
                Claims go wrong less often on cover than on process: evidence thrown away, damage repaired before it was seen, a deadline missed, a vague first call. Learning the sequence insurers expect, from reporting and stopping further damage to evidence, loss adjusters and settlement offers, means a real claim runs on rails.

                ## Milestones
                1. The claims steps and time limits in your home and car wordings noted.
                2. A claim checklist written: report, mitigate, photograph, keep damaged items, log every call.
                3. The role of a loss adjuster, and of a loss assessor you might appoint, understood.
                4. A rule agreed for checking any settlement offer before accepting.

                ## Notes
                Keep damaged items until the insurer says you can dispose of them, and log every call with date, name and what was said.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written claim checklist with your policies' time limits sits in the insurance folder, ready to use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the claim time limits in your home and car wordings"
                - "Write a one-page claim checklist and save it in the folder"
                - "Read what a loss adjuster does and how a loss assessor differs"
                - "Start a blank claim call log ready for use"
            - name: Complaints and the ombudsman route
              description: |-
                ## Purpose
                When a claim is declined or a settlement looks low, many people give up after one phone call. Most countries have a free financial ombudsman or dispute service, and insurers must handle complaints within set time limits before you can go there. Knowing the route and how to write a clear complaint keeps a disputed claim from simply fading away.

                ## Milestones
                1. Your insurers' complaints procedures and time limits found.
                2. The free ombudsman or dispute service for your country identified, with how to refer a case.
                3. A short complaint letter structure saved: facts, policy clause, what you want.
                4. A rule written to escalate when the final response deadline passes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note names your insurers' complaint routes, the free ombudsman service and its deadlines, with a complaint letter outline saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the complaints page for each of your insurers"
                - "Look up the free financial ombudsman service in your country"
                - "Save a complaint letter outline with facts, clause and remedy"
                - "Note how long an insurer has before you can refer a complaint"
            - name: Excess level the household can absorb
              description: |-
                ## Purpose
                Raising the voluntary excess lowers the premium, but only makes sense if paying it would not hurt. Setting excesses by deliberately comparing the premium saved against the emergency fund, rather than accepting whatever the quote defaulted to, often saves money on home and car cover without real added risk.

                ## Milestones
                1. The compulsory and voluntary excess on each policy listed, with the total for a bad year.
                2. Quotes at two or three excess levels for the home and car policies compared.
                3. An excess chosen for each policy that the emergency fund could pay twice.
                4. The chosen excesses applied at the next renewal.

                ## Notes
                Escape-of-water and subsidence claims often carry their own, much higher, compulsory excess. Check these separately.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each home and car policy has a chosen excess recorded with the premium saving, and the total is affordable from savings twice over."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the compulsory and voluntary excess on every policy"
                - "Find the separate excess for escape of water and subsidence"
                - "Get quotes at two higher excess levels for home and car"
                - "Choose each excess and note the yearly saving"
            - name: Paying annually or monthly
              description: |-
                ## Purpose
                Paying an insurance premium by monthly instalments is often a credit agreement with its own interest rate, which can add a noticeable amount to the yearly cost. Comparing the true annual cost of each method, and the cheapest way to fund an annual payment, is a quick decision with a saving that repeats every year.

                ## Milestones
                1. The annual and monthly total cost for each policy listed.
                2. The interest rate on each monthly arrangement found.
                3. A plan for funding annual payments, such as a sinking fund, written.
                4. A payment method chosen for each policy before its renewal.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each policy's annual and monthly cost is compared, and a recorded payment method is applied at renewal."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the total yearly cost of paying monthly on each policy"
                - "Note the interest rate on each monthly payment plan"
                - "Decide which policies to switch to an annual payment"
                - "Move a twelfth of next year's premiums into the insurance pot @recurring(monthly:26)"
            - name: Accidental damage cover decision
              description: |-
                ## Purpose
                Accidental damage is the add-on that pays for the dropped television, the paint on the carpet or the cracked basin, and it is often what people assume they already have. Whether it earns its cost depends on children, pets, the age of your belongings and your excess, so it deserves a deliberate decision rather than a tick box.

                ## Milestones
                1. Whether you have accidental damage on buildings, contents or both confirmed.
                2. The extra premium for each version noted.
                3. Recent accidents in the household that would have been claims listed.
                4. A keep, add or drop decision recorded for each.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The household's accidental damage cover for buildings and contents is confirmed and a priced decision recorded for each."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your schedule for accidental damage on buildings and contents"
                - "Ask what adding or removing it would change the premium by"
                - "List accidents in the last three years that would have been claims"
                - "Decide whether to keep, add or drop accidental damage"
            - name: Legal expenses and home emergency add-ons
              description: |-
                ## Purpose
                Legal expenses, home emergency and key cover are bolted on at checkout for a few pounds a month each, and they often duplicate cover from a trade union, a boiler service plan or a car policy. Reading what each actually pays for, and its limits, decides whether they stay.

                ## Milestones
                1. Every add-on across home and car policies listed with its price.
                2. The limits and main exclusions for each noted.
                3. Duplicates with memberships, boiler plans or other policies marked.
                4. Each add-on kept or removed at its next renewal.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every add-on is listed with its price and limits, duplicates are marked and each has a keep or remove decision applied."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each add-on on your home and car policies with its price"
                - "Read the limits for legal expenses and home emergency cover"
                - "Check memberships and service plans for duplicate cover"
                - "Remove the add-ons you do not need at the next renewal"
            - name: Car cover level and named drivers set right
              description: |-
                ## Purpose
                Comprehensive cover is sometimes cheaper than third party, and the drivers, mileage and use class on a car policy drive the price as much as the cover level. Setting each of these to what is true, including commuting or business use, avoids both overpaying and the risk of a claim refused for the wrong class of use.

                ## Milestones
                1. Quotes compared for comprehensive and third party cover on the same car.
                2. Named drivers checked: who actually drives the car and how often.
                3. Annual mileage estimated from MOT or service records, not guessed.
                4. Class of use set to cover commuting or business driving where it happens.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The car policy's cover level, named drivers, mileage and class of use all match reality and the choice is noted on the policy list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Quote comprehensive and third party cover for the same car"
                - "Work out last year's mileage from service or roadworthiness records"
                - "Confirm who drives the car and add or remove named drivers"
                - "Check the class of use covers your commute or work driving"
            - name: Telematics policy decision
              description: |-
                ## Purpose
                Black box and app-based car policies can cut premiums sharply for new and careful drivers, but they come with curfews, mileage caps, data sharing and penalties that do not suit everyone. Weighing the saving against how and when you really drive gives a decision you will not regret three months in.

                ## Milestones
                1. Two telematics quotes compared with two standard quotes.
                2. Curfews, mileage caps and penalty rules for each telematics policy listed.
                3. A week of your actual driving times and distances noted.
                4. A decision recorded on whether telematics fits your driving.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on telematics compares two telematics and two standard quotes against a week of real driving."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Get two telematics and two standard quotes for the same car"
                - "Note the curfew, mileage cap and penalties for each telematics deal"
                - "Log a week of your driving times and distances"
                - "Choose the policy and write down why"
            - name: Single-trip or annual multi-trip travel cover
              description: |-
                ## Purpose
                An annual multi-trip policy can pay for itself with two trips a year, but trip-length limits, winter sports, age bands and medical declarations change the sums. Deciding before the first booking of the year, and buying cover when you book rather than when you leave, gets cancellation protection from the start.

                ## Milestones
                1. The trips planned for the next twelve months listed with length and destination region.
                2. Single-trip and annual quotes compared with the same medical declarations.
                3. Trip length, region and activity limits checked against the plans.
                4. Cover bought on the day the first trip is booked.

                ## Notes
                Every existing medical condition must be declared, and a policy bought after symptoms start may not cover them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between single-trip and annual travel cover, priced with full medical declarations, with cover starting when the first trip is booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the trips you expect to take this year with their length"
                - "Get single-trip and annual quotes with full medical declarations"
                - "Check trip length, region and activity limits against your plans"
                - "Buy the cover on the day you book the first trip"
            - name: Gadget cover or self-insuring devices
              description: |-
                ## Purpose
                Gadget policies are among the most expensive insurance per pound of cover once excesses, wear-and-tear exclusions and theft conditions are counted, and many households already have device cover through contents or a bank account. Pricing the alternatives, including simply putting the premium aside, makes a clear call.

                ## Milestones
                1. Every phone, tablet, laptop and wearable listed with its replacement cost.
                2. Existing cover through contents, bank accounts or manufacturers noted.
                3. Gadget policy premium and excess compared with self-insuring.
                4. A decision recorded and any duplicate policy cancelled.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each device has a recorded cover decision, and no device is insured twice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each device with what it would cost to replace"
                - "Check whether contents or a bank account already covers each one"
                - "Compare a gadget policy's total yearly cost with setting the money aside"
                - "Cancel any device policy that duplicates cover you already have"
            - name: Pet insurance type and limits chosen
              description: |-
                ## Purpose
                Pet policies differ far more than their prices suggest: lifetime cover renews a condition's limit each year, while time-limited and maximum-benefit policies stop paying for a long-term condition. Choosing the type while the animal is young and healthy matters, because switching later usually excludes anything already treated.

                ## Milestones
                1. Lifetime, maximum-benefit and time-limited cover compared for your pet.
                2. Vet fee limit, excess and co-payment rules noted for each quote.
                3. Age-related premium rises and co-payments checked.
                4. A policy chosen and its pre-existing condition exclusions understood.

                ## Notes
                Moving insurer later usually means any condition already treated is excluded, so the first choice carries weight.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pet policy is chosen from a comparison of at least three quotes across cover types, with its vet fee limit and exclusions recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Get lifetime, maximum-benefit and time-limited quotes for your pet"
                - "Note the yearly vet fee limit and excess for each"
                - "Ask how premiums and co-payments rise with age"
                - "Choose the policy and record its exclusions"
                - "Compare the pet renewal price and vet fee limit with last year @recurring(yearly)"
            - name: Valuables and specified items schedule
              description: |-
                ## Purpose
                Contents policies cap any single item and the total of valuables, so an engagement ring, a good bike or a camera kit may be only partly covered unless named. Listing high-value items with current valuations and specifying them on the policy, including cover away from home, closes one of the most common claim shortfalls.

                ## Milestones
                1. Items above the single-item limit listed with photos and proof of value.
                2. Jewellery and watches valued by a qualified valuer within the last five years.
                3. Each item specified on the policy, with personal possessions cover if taken out.
                4. Valuations diarised for review as prices move.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every item above the single-item limit is named on the policy with a dated valuation or receipt saved in the folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every item worth more than your policy's single-item limit"
                - "Book a valuation for jewellery and watches without a recent one"
                - "Ask the insurer to specify each item, including cover away from home"
                - "Check valuations are still current for specified items @recurring(yearly)"
            - name: Moving house insurance handover
              description: |-
                ## Purpose
                Moving house touches almost every policy: contents in transit, the old home empty, a new address on the car policy, and new buildings and contents starting on the right day. Planning the handover as a list with dates prevents both a gap in cover and a policy left running on a house you no longer own or rent.

                ## Milestones
                1. Every policy affected by the move listed with what must change.
                2. Contents cover for the removal confirmed with the insurer or the removal firm.
                3. New home cover starting on the completion or tenancy start date.
                4. The address changed on car, travel and pet policies within the insurers' time limits.
                5. Old home cover cancelled only after the old keys are handed back.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On moving day, the new home has cover from its start date, contents were covered in transit, and every policy shows the new address."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every policy that needs changing because of the move"
                - "Ask whether contents are covered while in the removal van"
                - "Arrange new home cover to start on completion or move-in day"
                - "Update the address on car, travel and pet policies"
            - name: Trip-ready travel insurance check
              description: |-
                ## Purpose
                A week before a holiday is the last chance to find out the policy excludes the planned ski day, a new medical condition or a destination now on a government travel warning. A short check against the itinerary, and carrying the emergency assistance number, is what makes travel cover usable abroad.

                ## Milestones
                1. The policy checked for destination, trip length and every planned activity.
                2. Any medical changes since purchase declared to the insurer.
                3. Government travel advice for the destination checked against the policy.
                4. The 24-hour emergency assistance number and policy number saved on every traveller's phone.

                ## Notes
                Some countries offer a public healthcare card for travel within certain regions; carry it as well, but it does not replace travel insurance.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before departure, cover is confirmed for the destination, activities and declared medical conditions, and every traveller holds the assistance number."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the policy covers the destination, trip length and activities"
                - "Declare any new medical condition to the insurer before you go"
                - "Read the government travel advice for the destination"
                - "Save the emergency assistance number on every traveller's phone"
            - name: Insuring a newly bought car on the day
              description: |-
                ## Purpose
                Cover must be in place before a car is driven away, and dealer offers of short-term or bundled cover are rarely the best value. Getting quotes once the registration is known, and setting the policy to start on collection day, avoids paying for a week of expensive temporary cover or driving uninsured.

                ## Milestones
                1. Quotes run using the registration or exact model before collection.
                2. Dealer-offered insurance products compared with the best quote.
                3. The policy set to start on collection day, with documents received.
                4. Cover on the old car cancelled or transferred once it is sold.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new car is insured from collection day at a compared price, and the old car's policy is ended or moved within a week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the dealer or seller for the registration number before collection"
                - "Run quotes using the registration and your driving details"
                - "Set the policy to start on collection day"
                - "Cancel or transfer the old car's policy once it is sold"
            - name: Telling the insurer before building work
              description: |-
                ## Purpose
                Extensions, loft conversions and even large kitchen refits change the rebuild cost and often void cover for the building while work is under way, if the insurer was not told. A call before the builders arrive, plus checking the contractor's own liability cover, protects both the house and the project.

                ## Milestones
                1. The insurer told about the planned work, start date and value before it begins.
                2. Any conditions for the works period, such as security or unoccupancy, written down.
                3. The contractor's public liability certificate seen and saved.
                4. The rebuild cost and contents value updated once the work is finished.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The insurer confirmed cover in writing before work started, the contractor's liability certificate is saved, and sums insured were updated afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Email the insurer the scope, value and start date of the work"
                - "Ask the builder for a copy of their public liability certificate"
                - "Note any conditions the insurer sets during the works"
                - "Update the rebuild cost once the work is complete"
            - name: First 72 hours after a flood, fire or break-in
              description: |-
                ## Purpose
                The first three days after serious damage decide how smoothly a claim runs, and they are also the days when people are most shaken. A prepared plan, covering who to call, how to make the home safe, what to photograph and whether the policy pays for somewhere else to stay, turns a crisis into a list.

                ## Milestones
                1. A one-page plan written covering safety, the claims call, emergency repairs and evidence.
                2. Alternative accommodation cover and its limit found in the home policy.
                3. The plan saved with the insurer cards and shared with the household.
                4. A grab list of documents and medicines kept with the plan.

                ## Notes
                Make the home safe and stop further damage first; insurers expect reasonable emergency repairs, but keep receipts and photos of everything before and after.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page 72-hour plan, including alternative accommodation limits, is saved with the insurer cards and every adult at home has seen it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the first steps for flood, fire and break-in on one page"
                - "Find the alternative accommodation limit in your home policy"
                - "Save the plan beside the insurer contact cards"
                - "Walk everyone at home through the plan"
            - name: Leaving the home empty for weeks
              description: |-
                ## Purpose
                Most home policies cut back cover once a property is unoccupied for a set period, often 30 to 60 days, removing escape of water, theft or vandalism unless conditions are met. A long trip, a hospital stay or a house waiting to be sold all trigger it. Checking the rule and arranging visits keeps cover in force.

                ## Milestones
                1. The policy's unoccupancy period and conditions found.
                2. The insurer told if the absence will exceed that period.
                3. Conditions met, such as water drained down, heating set or weekly visits by a named person.
                4. Visits logged with dates while the home is empty.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "During a long absence, the insurer was told, the unoccupancy conditions were met and every visit was logged by date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the unoccupancy period and conditions in your home policy"
                - "Tell the insurer the dates you will be away"
                - "Ask a neighbour or relative to visit and note each visit"
                - "Drain down or set the heating as the policy requires"
            - name: Renter's contents and tenant liability cover
              description: |-
                ## Purpose
                Renters often assume the landlord's insurance covers their belongings, but it covers the building and the landlord's fixtures only. A contents policy for renters, ideally with tenant's liability for accidental damage to the landlord's fixtures and fittings, protects both your things and your deposit.

                ## Milestones
                1. The tenancy agreement checked for any insurance requirements.
                2. Contents valued and quotes gathered for renters' contents cover.
                3. Tenant's liability for the landlord's fixtures added or confirmed.
                4. Personal possessions cover away from home considered for phones, laptops and bikes.

                ## Notes
                Ask the landlord what their buildings policy covers in writing, and keep their answer with your policy.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A renters' contents policy with tenant's liability is in force, and the landlord's buildings cover is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your tenancy agreement for any insurance requirements"
                - "Ask your landlord in writing what their insurance covers"
                - "Get three renters' contents quotes with tenant's liability"
                - "Decide whether to add cover for items taken out of the home"
                - "Check the contents total still matches the policy at each tenancy renewal @recurring(yearly)"
            - name: Shared house contents cover for housemates
              description: |-
                ## Purpose
                In a shared house, insurers may only cover your own room, may require a lock on your bedroom door, or may not cover theft by a housemate or their guests. Housemates each need to know what their own policy says, and shared items such as a sofa or a television need a clear owner on paper.

                ## Milestones
                1. Each housemate's contents cover confirmed or arranged.
                2. Conditions for shared houses, such as a lockable room door, checked.
                3. Shared items listed with who owns and insures each one.
                4. Theft-by-occupant exclusions understood by everyone.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every housemate has contents cover, shared items each have a named owner and insurer, and shared-house conditions are met."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each housemate whether they have contents cover"
                - "Check your policy's conditions for shared houses"
                - "List shared items and agree who owns and insures each"
                - "Fit a lock to your room door if the policy requires one"
            - name: Leasehold flat and the block buildings policy
              description: |-
                ## Purpose
                Flat owners in a leasehold block usually pay for buildings cover through the service charge, arranged by the freeholder or managing agent, and many also buy buildings cover they do not need. Getting the block policy summary shows what is covered, the excess you would bear and where your own contents cover must start.

                ## Milestones
                1. The block policy summary and excess obtained from the managing agent.
                2. The boundary between the block's buildings cover and your contents noted, including kitchens and flooring.
                3. Any duplicate buildings policy you hold cancelled.
                4. The claims route through the managing agent written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The block policy summary is on file, any duplicate buildings policy is cancelled, and the claims route through the agent is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the managing agent for the block insurance summary and excess"
                - "Check whether fitted kitchens and flooring are buildings or contents"
                - "Cancel any separate buildings policy that duplicates the block cover"
                - "Write down how to report a claim through the agent"
            - name: Young driver joining the household's cars
              description: |-
                ## Purpose
                Adding a newly qualified driver can double a car premium, and the cheapest-looking route, naming a parent as main driver of the young person's car, can void the policy. Comparing honest options, such as named driver on the family car, a telematics policy in their name or a lower insurance group car, keeps cover valid and the cost known.

                ## Milestones
                1. Quotes for the young driver as named driver and as main driver on their own policy compared.
                2. Telematics options priced, with the rules shared with the young driver.
                3. Insurance groups of candidate cars checked before any purchase.
                4. The policy chosen with the main driver correctly stated.

                ## Notes
                Fronting is insurance fraud and can leave a young driver uninsured after a crash. The main driver must be the person who drives the car most.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The young driver is insured on a compared policy with the main driver stated truthfully, and the rules of any telematics box are agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Quote the young driver as a named driver and as main driver"
                - "Price a telematics policy in the young driver's own name"
                - "Check the insurance group of any car you are considering"
                - "Agree the telematics rules with the young driver before cover starts"
                - "Go through the telematics score with the young driver @recurring(monthly:12)"
            - name: Working from home and home office cover
              description: |-
                ## Purpose
                Standard home policies may limit cover for work equipment, exclude business visitors or not cover stock and client property at all. If you work from home a few days a week, a quick check with your employer and insurer confirms whether the laptop, the desk set-up and anyone visiting for work are covered.

                ## Milestones
                1. Who owns and insures each piece of work equipment confirmed with your employer.
                2. The home policy checked for business equipment limits and business visitors.
                3. The insurer told about home working if the policy asks.
                4. Any gap for business equipment, stock or visitors filled or accepted in writing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Work equipment ownership and cover is confirmed in writing, and the home policy's business limits are checked and any gap decided."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your employer who insures the laptop and equipment they provide"
                - "Check your home policy for business equipment and visitor limits"
                - "Tell the insurer you work from home if the policy asks"
                - "Decide whether any gap needs extra cover"
            - name: Flood-risk or non-standard home cover
              description: |-
                ## Purpose
                Homes in flood zones, with thatched or timber-frame construction, listed status or past subsidence often struggle on standard comparison sites and need a specialist insurer or broker. Knowing how your home is classed, which schemes exist in your country to keep flood cover affordable, and what resilience measures insurers credit makes a hard renewal manageable.

                ## Milestones
                1. The home's flood risk and construction type checked on public sources.
                2. Any national flood insurance scheme and whether your home qualifies noted.
                3. Quotes sought from at least one specialist broker.
                4. Flood resilience or subsidence history documents filed for future quotes.

                ## Notes
                In the UK, for example, Flood Re helps make flood cover affordable for eligible homes; other countries run different schemes or none.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The home's risk classification is recorded, at least one specialist quote is on file and supporting documents are saved for renewals."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check your home's flood risk on the official flood map"
                - "Note any non-standard construction or past subsidence"
                - "Ask a specialist broker for a quote"
                - "File flood resilience or subsidence reports for future quotes"
            - name: Landlord or lodger cover when letting space
              description: |-
                ## Purpose
                Taking in a lodger, letting a room through a short-stay platform or renting out a whole property usually breaks a standard home policy unless the insurer agrees. Each set-up needs its own answer: a lodger endorsement, a host policy or a full landlord policy with liability and loss of rent.

                ## Milestones
                1. The letting arrangement described exactly: lodger, short stays or whole property.
                2. The current insurer asked in writing whether the arrangement is covered.
                3. Quotes for a lodger endorsement, host cover or landlord policy compared.
                4. Cover confirmed in writing before the first guest or tenant arrives.

                ## Notes
                Platform host guarantees are not insurance and usually exclude much of what a policy would cover.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written confirmation of cover for the letting arrangement is on file before the first guest, lodger or tenant arrives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write two lines describing exactly how you will let the space"
                - "Ask your home insurer in writing whether that is covered"
                - "Compare lodger, host and landlord policy quotes"
                - "Get cover confirmed before the first guest or tenant arrives"
            - name: Checking your claims history record
              description: |-
                ## Purpose
                Insurers share claims and incident data through industry databases, and a wrongly recorded incident, a claim logged against the wrong address or one you withdrew can raise quotes for years. Requesting your own record under data protection rights shows exactly what insurers see.

                ## Milestones
                1. The claims database used in your country identified, such as CUE in the UK.
                2. A subject access request sent for your name and address history.
                3. The record compared with your own claims and incident file.
                4. Any error disputed with the insurer that reported it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your claims database record has been received, compared with your own file, and any error formally disputed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find which claims database insurers use in your country"
                - "Send a subject access request for your record"
                - "Compare the record with your own claims file"
                - "Ask the reporting insurer to correct any wrong entry"
            - name: Using an independent insurance broker
              description: |-
                ## Purpose
                For complicated set-ups, such as high-value contents, a portfolio of policies, a classic car or a home that comparison sites decline, an independent broker can search insurers you cannot reach directly and argue your corner on claims. Knowing how brokers are paid and what to ask makes the relationship worth having.

                ## Milestones
                1. The situations where a broker adds value for your household written down.
                2. Two brokers interviewed about the insurers they use and how they are paid.
                3. Commission or fees disclosed in writing.
                4. A decision recorded on which policies, if any, to place through a broker.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two brokers have been asked the same questions, their pay disclosed in writing, and a decision recorded on what to place with one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the policies that comparison sites struggle with"
                - "Find two independent brokers through a professional register"
                - "Ask each how they are paid and which insurers they use"
                - "Ask the agent to draft a comparison of the two brokers' answers"
---

# Insurance Coverage Review

This area is for anyone who pays for general insurance, whether renting a room, owning a house or simply running a car and a phone, and wants each policy to pay out when it matters without costing more than it should. It starts with the foundations (a list of every policy, the documents, the renewal dates, a gap and overlap check, a proper rebuild cost and contents value), then the routines that keep cover accurate, the skills for reading wordings and making claims, the decisions about excesses, add-ons and payment, the events that need cover changed, the situations of renters, owners, leaseholders and young drivers, and finally the specialist cases.

What repeats is a monthly look six weeks ahead for renewals, a check that premiums taken match the schedules, a quarterly change-of-circumstances sweep, and a yearly refresh of the contents inventory, the premium log and the whole portfolio. The Risk register, Vendor, Metrics log, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
