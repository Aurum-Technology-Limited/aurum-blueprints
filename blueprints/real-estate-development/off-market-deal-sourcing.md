---
id: real-estate-development.off-market-deal-sourcing
name: Off-Market Deal Sourcing
description: "A written buying brief, a patch you know street by street, owner outreach that respects consent rules, agents who call you first, distress signals watched and a deal pipeline reviewed every week."
category: business
version: 1.0.0
tags: [real-estate-development, off-market-deal-sourcing, founder, small-business, deal-sourcing, owner-outreach, deal-pipeline, off-market]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - vendor
    - meeting-notes
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Off-Market Deal Sourcing
          description: "Finding property deals before they reach the open market: owner outreach, agent relationships, distressed sellers, data tools and a deal pipeline."
          projects:
            - name: Off-market buying brief for income property
              description: |-
                ## Purpose
                Owners and agents only bring deals to buyers who can say exactly what they want in one breath. A one-page brief naming asset type, unit count or floor area, price band, locations, condition you will accept and the return threshold you underwrite to stops you chasing every lead and tells everyone else when to call you.

                ## Milestones
                1. Asset types, size range and price band written on one page.
                2. Target locations named down to postcode districts or neighbourhoods.
                3. Condition and tenancy situations you will and will not take listed.
                4. A minimum return threshold agreed with your partners or lender in principle.
                5. The brief dated, with a review date six months out.

                ## Notes
                Keep the brief narrow. A buyer who wants anything anywhere sounds like a buyer who has not yet decided, and agents rank them last.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page buying brief with asset type, size, price band, locations and return threshold, shared with any partner in the deal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last five deals you looked at and what made you pass on each"
                - "Write the asset type, size range and price band in three lines"
                - "Name the locations you will buy in and the ones you will not"
                - "Agree the minimum return threshold with your partners or lender"
            - name: Proof of funds and buyer credibility pack
              description: |-
                ## Purpose
                An owner selling quietly is choosing a buyer, not running a process, and the first question is whether you can complete. A short pack with proof of funds or a lender's agreement in principle, your track record, your solicitor and a simple timetable makes you the buyer who gets the second meeting.

                ## Milestones
                1. A current proof of funds letter or lender agreement in principle on file.
                2. A one-page track record of deals completed, or of the team's experience if this is your first.
                3. Your solicitor, surveyor and broker named with contact details.
                4. A typical timetable from agreed price to completion written in weeks.
                5. The pack saved as a PDF ready to send the same day it is asked for.

                ## Notes
                Never send bank statements unredacted. A letter from your bank, accountant or lender confirming available funds is usually enough at this stage.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A PDF credibility pack with proof of funds dated within the last three months, track record, advisers and timetable, ready to send."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your bank or lender for a proof of funds or agreement in principle letter"
                - "Write a one-page track record with addresses, prices and dates"
                - "Confirm your solicitor and surveyor can act on short notice"
                - "Save the pack as one PDF named with your company and the date"
            - name: Patch map of target streets and buildings
              description: |-
                ## Purpose
                Off-market buyers win by knowing a small area better than anyone, which streets hold the right buildings and who owns them. Mapping two or three neighbourhoods block by block, with every building that fits the brief marked, turns a vague target area into a list of doors to knock on.

                ## Milestones
                1. Two or three neighbourhoods chosen from the buying brief.
                2. Every building that fits the brief marked on a shared map.
                3. Each marked building given a row in the tracker with address and type.
                4. At least 150 candidate buildings identified across the patch.

                ## Notes
                A patch you can walk or drive in an afternoon is worth more than a city you can only see on a screen.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shared map of the patch with at least 150 buildings that fit the brief, each with a matching tracker row."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick the two or three neighbourhoods that best match the brief"
                - "Mark fitting buildings on a shared online map from street imagery"
                - "Walk the busiest street in the patch and add what the imagery missed"
                - "Copy every marked building into the tracker as a new row"
            - name: Deal pipeline tracker with stages and sources
              description: |-
                ## Purpose
                Without a single record, a lead from an agent in March is forgotten by June, and nobody can say which source is worth the effort. A tracker with stages from first contact to completed, a source field on every row and a next action date makes the whole area measurable.

                ## Milestones
                1. A tracker set up with stages: identified, contacted, talking, offered, agreed, completed, dead.
                2. Every row carrying a source, an owner name if known and a next action date.
                3. Existing leads from email, notes and phone moved into it.
                4. A filtered view showing leads with an overdue next action.

                ## Notes
                A spreadsheet is fine to start. Move to a property CRM only when the spreadsheet is the thing slowing you down.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One tracker holds every live lead with stage, source and next action date, and an overdue view returns the right rows."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the tracker with stage, source, owner and next action columns"
                - "Move every lead from your inbox and notes into the tracker"
                - "Build a filtered view of leads with an overdue next action"
                - "Update stages and next action dates in the tracker @recurring(weekly:fri)"
            - name: Sourcing budget and cost per deal target
              description: |-
                ## Purpose
                Letters, data subscriptions, list fees, travel and finder's fees add up quickly, and most sourcing spend produces nothing directly. Setting a yearly budget and a target cost per completed deal makes the spend a decision you can defend to partners rather than a drift.

                ## Milestones
                1. A yearly sourcing budget split by channel.
                2. A target cost per offer made and per deal completed.
                3. A rule for when a channel is cut for not producing offers.
                4. The budget approved by any partner who shares the cost.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written sourcing budget by channel with target cost per offer and per deal, agreed with any partner sharing the cost."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up what you spent on sourcing in the last twelve months"
                - "Split next year's budget across letters, data, events and fees"
                - "Set a target cost per offer and per completed deal"
                - "Write the rule for cutting a channel that produces no offers"
            - name: Consent and privacy rules for contacting owners
              description: |-
                ## Purpose
                Writing to, calling or texting property owners uses personal data, and data protection and telemarketing laws (such as GDPR in the UK and EU or do-not-call registers elsewhere) set real limits and real fines. Getting a privacy professional's view once, and building an opt-out list into the tracker, protects the business before the first campaign goes out.

                ## Milestones
                1. The data protection and marketing rules for each channel you use checked with a privacy adviser.
                2. A short privacy notice written for letters and calls.
                3. An opt-out and suppression list built into the tracker.
                4. A rule recorded for how long owner data is kept and when it is deleted.

                ## Notes
                Rules differ for individuals and companies, and for post, phone, text and email. Ask the adviser to cover each channel separately rather than assuming one answer fits all.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written guidance from a privacy adviser on each outreach channel, a privacy notice, and a working opt-out list in the tracker."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every channel you plan to use to contact owners"
                - "Book a short session with a data protection or privacy adviser"
                - "Add an opt-out column and suppression check to the tracker"
                - "Check the suppression list against the next mailing file @recurring(yearly)"
            - name: Ownership and contact data tools chosen
              description: |-
                ## Purpose
                Ownership records, company registries, list providers and property data platforms all promise owner details, and they vary widely in cost, accuracy and lawful use. Testing two or three on the same twenty buildings shows which ones actually return a correct owner and an address you can write to.

                ## Milestones
                1. Three data sources shortlisted with price and licence terms.
                2. Each tested on the same twenty buildings from the patch.
                3. Accuracy recorded as owners confirmed correct out of twenty.
                4. One primary source chosen and subscribed to, with a renewal date noted.

                ## Notes
                Start from the **Purchase decision** template. Check the licence lets you use the data for direct marketing, not only for research.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded test of three data sources on the same twenty buildings, with one chosen on accuracy and licence terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three ownership or property data sources with prices"
                - "Pick twenty buildings from the patch as a test sample"
                - "Run the sample through each source and score correct owners"
                - "Read the licence terms on marketing use before subscribing"
            - name: Ten-minute screen for unsolicited deals
              description: |-
                ## Purpose
                Once agents and owners know you are buying, leads arrive faster than you can model them. A ten-minute screen against the brief, asking price per unit or per square metre, rough yield and one deal-killer check, lets you say no politely the same day and spend real time only on the few that pass.

                ## Milestones
                1. A one-page screen with five pass or fail tests from the brief.
                2. Price per unit, price per area and rough yield worked from the headline figures.
                3. A standard polite decline message for leads that fail.
                4. Every lead in the last month put through the screen as a test.

                ## Notes
                Reply to every lead, even with a no. Agents remember who answered.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written five-test screen used on every new lead, with a reply sent within two working days to each one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the five tests from the brief that kill most deals"
                - "Build a small calculator for price per unit and rough yield"
                - "Write a short decline reply you can send in one minute"
                - "Run last month's leads through the screen to test it"
            - name: Acquisition criteria one-pager for agents
              description: |-
                ## Purpose
                Agents hold pocket listings for buyers they can describe to a seller in a sentence. A one-page, outward-facing version of your brief with a photo of a recent purchase, the criteria and a direct phone number is the thing they forward to colleagues and pin above the desk.

                ## Milestones
                1. An outward-facing one-pager drafted from the internal brief, without return thresholds.
                2. A recent purchase or comparable example shown with a photo.
                3. Your direct phone number and a promise to reply within one working day.
                4. The one-pager sent to every agent on your list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A designed one-page criteria sheet sent to every agent in the tracker, with the send date recorded against each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft an agent-facing criteria page from your brief"
                - "Remove return thresholds and anything confidential"
                - "Add a photo of a past purchase and your direct number"
                - "Send it to every agent in the tracker and log the date"
            - name: Monday pipeline review and next actions
              description: |-
                ## Purpose
                Off-market deals are won by the buyer who follows up on the fourth contact, and leads quietly die when nobody owns the next step. Thirty minutes every Monday moving each live lead forward, killing the dead ones and setting a dated next action keeps the pipeline honest.

                ## Milestones
                1. A fixed thirty-minute slot in the calendar each Monday.
                2. Every live lead with a next action dated within fourteen days.
                3. Dead leads marked with a reason rather than left open.
                4. The top three leads for the week named at the end of each review.

                ## Notes
                If the review takes longer than an hour, the tracker has too many live leads. Kill the weakest third.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every Monday for a quarter, the pipeline is reviewed and no live lead is left without a next action dated within fourteen days."
                cadence: rolling
              tasks:
                - "Block thirty minutes every Monday morning in your calendar"
                - "Review every live lead and set its next action date @recurring(weekly:mon)"
                - "Mark dead leads with the reason they died"
                - "Name the three leads that matter most this week"
            - name: Weekly agent and broker call round
              description: |-
                ## Purpose
                Agents call the buyer they spoke to most recently, so a buyer who rings once a quarter hears about deals after they are gone. A short weekly round of five to eight calls, rotating through the agent list, keeps you near the top of every agent's mind without becoming a nuisance.

                ## Milestones
                1. An agent list ranked by how many fitting deals each handles.
                2. A weekly round of five to eight calls, rotating so each agent hears from you monthly.
                3. Each call logged with what the agent is working on.
                4. A thank-you sent for every lead passed on, whether you buy or not.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every agent on the ranked list is spoken to at least once a month, with each call and any lead logged in the tracker."
                cadence: rolling
              tasks:
                - "Rank your agents by how many fitting deals each handled last year"
                - "Call five to eight agents from the rota @recurring(weekly:tue)"
                - "Send each agent your updated criteria and recent purchases @recurring(monthly:3)"
                - "Log every call and any lead in the tracker the same day"
            - name: Quarterly owner letter drops across the patch
              description: |-
                ## Purpose
                Most owners are not selling the day your first letter lands, but the one who keeps your third letter in a drawer calls when a tenant leaves or a loan comes due. A quarterly drop to every owner in the patch, with a different short letter each time, builds the familiarity that makes that call happen.

                ## Milestones
                1. A mailing list of owners in the patch checked against the suppression list.
                2. Four different short letters written for the year.
                3. The first drop sent and logged against each tracker row.
                4. Replies tracked by drop so the best letter can be reused.

                ## Notes
                Handwritten envelopes and a real signature lift response rates more than glossy design. Keep the letter to one side of paper.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four drops a year reach every owner in the patch not on the suppression list, with replies counted against each drop."
                cadence: cyclic
              tasks:
                - "Export the owner mailing list and check it against opt-outs"
                - "Write four short letters with different openings for the year"
                - "Send the next letter drop to every owner in the patch @recurring(quarterly)"
                - "Record replies against the drop that produced them"
            - name: Follow-up rhythm for owners who said not now
              description: |-
                ## Purpose
                An owner who says not yet is the warmest lead you have, and almost nobody calls them back. A light monthly touch, a market note, a sale nearby or a short call on a date they chose, means you are the first buyer they remember when circumstances change.

                ## Milestones
                1. Every not-now owner tagged in the tracker with the reason they gave.
                2. A follow-up date agreed with or chosen for each.
                3. A short market note template for monthly touches.
                4. Each follow-up logged with any change in the owner's plans.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every owner tagged not now has been contacted on schedule for six months, with each touch and any change logged."
                cadence: rolling
              tasks:
                - "Tag every owner who said not now and note their reason"
                - "Write a short market note you can personalise in five minutes"
                - "Contact the not-now owners due this month @recurring(monthly:12)"
                - "Record any change in an owner's plans in the tracker"
            - name: Weekly distress signal scan
              description: |-
                ## Purpose
                Owners under pressure rarely advertise it, but the signs are public: probate grants, unpaid local tax notices, licensing failures, enforcement notices, boarded windows and long-empty shop units. A short weekly scan of the sources that apply in your jurisdiction surfaces owners who may welcome a quick, certain sale.

                ## Milestones
                1. The public notices and registers available in your area listed.
                2. A weekly scan routine covering each source in under an hour.
                3. Signals matched to buildings in the patch and logged in the tracker.
                4. A careful first-contact letter written for owners in difficulty.

                ## Notes
                Approach with care. People in probate, debt or ill health deserve a respectful letter and a fair price, and a firm suggestion that they take their own advice. Auctions and receiver sales sit in their own area.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly scan runs for three months, with every signal that matches a patch building logged and a contact decision recorded."
                cadence: rolling
              tasks:
                - "List the public notices and registers published in your area"
                - "Scan the notice sources and log matches to patch buildings @recurring(weekly:thu)"
                - "Write a respectful first letter for owners showing distress"
                - "Decide for each match whether to contact now or watch"
            - name: Expired and withdrawn listings sweep
              description: |-
                ## Purpose
                Buildings that were marketed and failed to sell have owners who wanted out and prices that were too high, which is often the best off-market lead there is. Sweeping listings that expired or were withdrawn each month, and writing to those owners directly, catches them before the next agent relists.

                ## Milestones
                1. A way to see listings withdrawn or expired in the patch set up.
                2. Each withdrawn building matched to its owner in the tracker.
                3. A letter written for owners whose sale did not complete.
                4. Monthly sweeps logged with the number of owners contacted.

                ## Notes
                Do not undercut an agent who still holds a sole agency. Check the listing has truly ended before writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly sweeps for six months, with every withdrawn or expired listing in the patch matched to an owner and a contact decision logged."
                cadence: rolling
              tasks:
                - "Set up saved searches or alerts for listings in the patch"
                - "Sweep listings that expired or were withdrawn this month @recurring(monthly:5)"
                - "Write a short letter for owners whose sale did not complete"
                - "Confirm no sole agency is still running before you write"
            - name: Commercial lease expiry watch
              description: |-
                ## Purpose
                When the main tenant of a small office or industrial building gives notice, the owner faces empty rates, a void and a refit, and selling quietly can look better than reletting. Keeping a list of known lease expiries and break dates in the patch lets you write in the year before, while the owner is still deciding.

                ## Milestones
                1. Known lease expiries and break dates for patch buildings gathered from agents and public data.
                2. Each date logged against its building in the tracker.
                3. A monthly check of expiries falling twelve to eighteen months out.
                4. Owners with an approaching expiry contacted with a tailored letter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated list of lease expiries and breaks for patch buildings, checked monthly, with owners contacted twelve to eighteen months ahead."
                cadence: rolling
              tasks:
                - "Ask your commercial agents which local leases end in the next two years"
                - "Log each expiry and break date against its building"
                - "Check expiries falling twelve to eighteen months out @recurring(monthly:20)"
                - "Write to owners facing a void with a tailored letter"
            - name: Monthly source metrics and cost per offer
              description: |-
                ## Purpose
                Most buyers believe their best deals come from agents or from letters, and most have never counted. A monthly log of leads, conversations, offers and deals by source, set against what each source cost, shows where the next pound and the next hour should go.

                ## Milestones
                1. Leads, conversations, offers and completions counted by source each month.
                2. Spend per source taken from the budget.
                3. Cost per offer and per completed deal worked out by source.
                4. A one-line conclusion written each month on what to do more or less of.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly entries showing leads, offers, deals and cost per offer by source, each with a written conclusion."
                cadence: rolling
              tasks:
                - "Count this month's leads, offers and deals by source @recurring(monthly:28)"
                - "Pull spend per source from the sourcing budget"
                - "Work out cost per offer for each source"
                - "Write one line on which source to back next month"
            - name: Landlord and investor network calendar
              description: |-
                ## Purpose
                Tired landlords sell to people they have met, and the room where they meet is the local landlord association, the trade breakfast or the investor meetup. Picking a small number of regular events and turning up to every one of them makes you a familiar face rather than a stranger with a business card.

                ## Milestones
                1. Local landlord, trade and investor events listed with dates and costs.
                2. Two or three regular events chosen for the year.
                3. Attendance at each logged with people met and follow-ups.
                4. Every useful contact entered in the tracker within two days.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Attendance at a chosen local event at least ten times in a year, with each new contact logged in the tracker within two days."
                cadence: rolling
              tasks:
                - "List local landlord associations, trade groups and investor meetups"
                - "Choose two or three to attend regularly this year"
                - "Attend the next chosen event and log who you met @recurring(monthly:15)"
                - "Follow up with each useful contact within two days"
            - name: Monthly street walk of the patch
              description: |-
                ## Purpose
                Data tools miss the signs you only see from the pavement: skips outside, peeling paint, a letting board up for months, a shop unit dark for a season. A monthly walk or drive of a slice of the patch keeps the map current and turns up buildings whose owners have stopped caring.

                ## Milestones
                1. The patch split into slices, one walked each month.
                2. A short checklist of neglect and vacancy signs to look for.
                3. Photos and notes added to the tracker for every flagged building.
                4. Owners of flagged buildings traced and added to the next letter drop.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every slice of the patch walked at least twice a year, with flagged buildings photographed and logged in the tracker."
                cadence: rolling
              tasks:
                - "Split the patch into slices you can walk in two hours"
                - "Write a checklist of neglect and vacancy signs"
                - "Walk this month's slice and photograph flagged buildings @recurring(monthly:8)"
                - "Trace the owners of flagged buildings for the next drop"
            - name: Tracing the owner behind a company or trust
              description: |-
                ## Purpose
                Many income buildings are owned by a company, a trust or an overseas entity, and the name on the title is not the person who decides. Learning to follow the trail through company registries, filed accounts and registers of beneficial ownership, where they exist, gets your letter to the person who can say yes.

                ## Milestones
                1. The company registry and any beneficial ownership register in your jurisdiction understood.
                2. Five company-owned buildings in the patch traced to a named director or controller.
                3. Filed accounts read for signs of debt, losses or a winding down.
                4. A tracing method written down so it can be repeated by someone else.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five company-owned buildings traced to named decision makers, with a written tracing method another person could follow."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the company registry and ownership registers for your area"
                - "Pick five company-owned buildings from the patch"
                - "Trace each to a named director or person with control"
                - "Write the tracing steps as a short repeatable method"
            - name: Cold calling owners with a simple script
              description: |-
                ## Purpose
                Phoning reaches an owner in a way a letter cannot, but most first calls fail in the first twenty seconds. Practising a short opening, three questions about the building and an easy close for a follow-up turns a nervous call into a conversation, where calling owners is lawful and they have not opted out.

                ## Milestones
                1. A twenty-second opening that says who you are and why you called.
                2. Three open questions about the building and the owner's plans.
                3. Answers prepared for the five most common objections.
                4. Twenty practice calls made and reviewed for what worked.

                ## Notes
                Check the consent rules before calling. Never call anyone on a do-not-call list or who has opted out.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written call script with objection answers, tested on twenty lawful calls with notes on what changed after each five."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a twenty-second opening and read it aloud until it sounds natural"
                - "List the five objections you expect and write an answer to each"
                - "Make twenty lawful calls to owners not on any opt-out list"
                - "Review your notes after every five calls and adjust the script"
            - name: Owner letter that gets replies
              description: |-
                ## Purpose
                Good owner letters are short, specific to the building, honest about who you are and easy to answer. Testing two versions against each other on the same patch, and counting replies, beats copying the glossy templates every other buyer sends.

                ## Milestones
                1. Two letter versions written, each under 200 words and naming the building.
                2. Each sent to half of a matched list of owners.
                3. Replies counted and the stronger version kept.
                4. A swipe file of lines that produced replies.

                ## Notes
                Name the building and the street. A letter that could be about any property gets treated as junk mail.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two letter versions tested on matched halves of a list of at least 100 owners, with reply counts recorded and a winner chosen."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect three letters you have received and note what they got wrong"
                - "Write two versions under 200 words that name the building"
                - "Split a list of owners into two matched halves and send one each"
                - "Count replies for each version after six weeks"
            - name: Seller motivation conversation
              description: |-
                ## Purpose
                The price an off-market owner will accept depends on why they might sell: retirement, a partner's death, a tax bill, a falling-out between co-owners, a tenant they are tired of. Learning to ask about the owner's situation before the building is how you find the deal structure that suits both sides.

                ## Milestones
                1. A short list of open questions about timing, plans and worries.
                2. A habit of listening for the problem behind the sale.
                3. Notes from five owner conversations recording motivation and timing.
                4. At least one offer shaped around what the owner told you mattered.

                ## Notes
                Start from the **Meeting notes** template for each owner conversation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes from five owner conversations recording motivation and timing, and one offer shaped around a stated owner need."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write six open questions about the owner's plans and timing"
                - "Use them in your next five owner conversations"
                - "Record each owner's motivation and timing in the tracker"
                - "Shape your next offer around what the owner said mattered"
            - name: First figure from a rent roll in fifteen minutes
              description: |-
                ## Purpose
                When an owner asks what you would pay, waiting a fortnight for a full model loses the moment, but guessing loses credibility. Practising a quick first figure from rents, a cost ratio and a local yield range lets you give an honest indicative range on the call and commit to a firm number later.

                ## Milestones
                1. A one-page quick figure sheet using rent, cost ratio and yield range.
                2. Local yield ranges for each asset type in the brief noted from recent sales.
                3. Ten past deals run through the sheet and compared with their real prices.
                4. A standard way of giving an indicative range without committing.

                ## Notes
                Always say the figure is indicative and subject to inspection and full underwriting. The detailed valuation work sits in its own area.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past deals run through a quick figure sheet, with results within a recorded range of the real sale prices."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a one-page sheet from rent, cost ratio and yield range"
                - "Note local yield ranges from recent sales for each asset type"
                - "Run ten past sales through the sheet and compare results"
                - "Write the sentence you use to give an indicative range"
            - name: Finder's fee and introducer agreements
              description: |-
                ## Purpose
                Paying someone who brings you a deal is normal, but an unwritten promise causes disputes, and in some places introducers must be registered or regulated. Understanding the usual terms and having a solicitor-approved introducer letter ready means you can say yes to a good contact without risk later.

                ## Milestones
                1. Usual introducer fee structures in your market noted.
                2. Any registration or licensing duties for introducers checked with a solicitor.
                3. A short introducer letter approved by your solicitor.
                4. A rule for when a fee is earned, such as on completion only.

                ## Notes
                Fees on completion only, a clear definition of the introduced property and a time limit avoid most disputes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A solicitor-approved introducer letter on file, with fees payable on completion and the introducer duties in your market recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask three agents or buyers what introducer fees they pay"
                - "Ask your solicitor whether introducers must be registered locally"
                - "Have your solicitor approve a short introducer letter"
                - "Record the rule that fees are paid on completion only"
            - name: How agents decide who gets the first call
              description: |-
                ## Purpose
                An agent with a quiet instruction has a seller who wants speed, certainty and no embarrassment, and the agent's reputation rides on the buyer. Learning what agents are judged on, and behaving so you never cost them face, is what moves you from the general list to the two buyers they ring first.

                ## Milestones
                1. Three agents asked what makes a buyer their first call.
                2. A written list of behaviours that lose an agent's trust.
                3. Your own handling of the last three agent leads checked against it.
                4. One change to how you handle agent leads made and kept.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Answers from three agents recorded, and one written change to how you handle agent leads in place for three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask three agents over coffee what makes a buyer their first call"
                - "Write down every behaviour they said loses their trust"
                - "Check how you handled your last three agent leads"
                - "Pick one change to how you handle leads and keep it"
            - name: Own outreach or a paid deal sourcer
              description: |-
                ## Purpose
                Running your own outreach costs time and a steady budget; paying a sourcer costs a fee per deal and some control. Comparing the two honestly, on hours, cost per deal and the quality of what each brings, settles a choice many small buyers drift into without deciding.

                ## Milestones
                1. Your own hours and spend per offer estimated from the source metrics.
                2. Fees and terms from two or three sourcers gathered.
                3. Deal quality compared on fit to the brief, not just volume.
                4. A decision recorded with a date to review it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of own outreach and two paid sourcers on cost per offer and fit, with a dated decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate your own hours and spend per offer from the metrics"
                - "Ask two or three sourcers for their fees and terms in writing"
                - "Compare the last deals each route produced against the brief"
                - "Record the decision and the date you will review it"
            - name: Checks on a deal sourcer before paying a fee
              description: |-
                ## Purpose
                Some sourcers sell the same deal to ten buyers, have no authority from the owner, or are not registered where registration is required. A short set of checks before any money changes hands protects your deposit and your name with the owners you will meet.

                ## Milestones
                1. The sourcer's company, registrations and any redress scheme membership confirmed.
                2. Written evidence that the sourcer is authorised by the owner.
                3. References from two buyers who completed deals through them.
                4. Fee terms agreed in writing, payable on completion where possible.

                ## Notes
                Start from the **Vendor** template. Walk away from any sourcer who asks for a large non-refundable fee before you have spoken to the owner.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed check on each sourcer used, covering registration, owner authority, two references and written fee terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the sourcer's company and registrations on public registers"
                - "Ask for written proof that the owner has authorised them"
                - "Call two buyers who completed deals through the sourcer"
                - "Agree fee terms in writing before sharing your details"
            - name: Fair price and fair dealing with unrepresented sellers
              description: |-
                ## Purpose
                Selling without an agent, an owner may not know what the building is worth, and a buyer who takes advantage loses their name in the patch and can face legal claims. Deciding in advance how you price, how you encourage owners to take advice and what you will not do is part of sourcing well.

                ## Milestones
                1. A written fair dealing policy for direct purchases.
                2. A standard line encouraging every seller to take independent advice.
                3. A rule for extra care with elderly, bereaved or vulnerable sellers.
                4. The policy shared with anyone who contacts owners for you.

                ## Notes
                If a seller seems confused or under pressure from someone else, pause and suggest they involve a family member or adviser before going further.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written fair dealing policy, shared with everyone who contacts owners, including advice and vulnerable seller rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write how you will price direct purchases fairly"
                - "Draft the line you use to suggest independent advice"
                - "Set extra steps for elderly, bereaved or vulnerable sellers"
                - "Share the policy with anyone who contacts owners for you"
            - name: Cutting a sourcing channel that does not produce
              description: |-
                ## Purpose
                Channels that felt promising, a data subscription, a mailing list, an event, can run for years without producing a single offer. Reviewing each channel against its cost per offer once there is six months of data, and cutting the weakest, frees budget for the ones that work.

                ## Milestones
                1. Six months of source metrics gathered for every channel.
                2. Each channel ranked by cost per offer.
                3. The weakest channel cut or changed, with the reason recorded.
                4. The freed budget moved to the strongest channel.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each channel ranked by cost per offer on six months of data, with at least one cut or change recorded with its reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull six months of metrics for every sourcing channel"
                - "Rank channels by cost per offer made"
                - "Cancel or change the weakest channel and note why"
                - "Move the freed budget to the strongest channel"
            - name: Refreshing the buying brief after six months of leads
              description: |-
                ## Purpose
                Six months of leads show what the market actually offers in your patch, which is often not what the brief assumed. Comparing passed and pursued leads against the brief tells you whether to widen the price band, change the asset type or move the patch.

                ## Milestones
                1. Every lead from six months sorted into fits, near misses and misfits.
                2. The most common reasons for near misses listed.
                3. A decision recorded on whether to change the brief.
                4. The updated brief and agent one-pager sent out.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A review of six months of leads against the brief, with a recorded decision and an updated brief sent to agents if changed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sort six months of leads into fits, near misses and misfits"
                - "List the commonest reasons near misses failed the brief"
                - "Decide with your partners whether to change the brief"
                - "Send the updated brief to every agent if it changed"
            - name: Sellers page and inbound enquiry route
              description: |-
                ## Purpose
                Owners who keep your letter often look you up before calling, and a missing or generic website loses them. A plain page that says what you buy, how you complete and how to reach you, with a simple enquiry form that feeds the tracker, catches the owners who will never pick up the phone.

                ## Milestones
                1. A sellers page live with what you buy, how you work and contact details.
                2. Two short case studies of past purchases with the owner's permission.
                3. An enquiry form that lands in the tracker.
                4. Enquiries answered within one working day.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live sellers page with an enquiry form that feeds the tracker, and every enquiry answered within one working day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the sellers page copy in plain words"
                - "Ask two past sellers for permission to describe their sale"
                - "Connect the enquiry form to the tracker"
                - "Check inbound enquiries and response times on the page @recurring(monthly:18)"
            - name: First 100 owner letters sent and logged
              description: |-
                ## Purpose
                The first campaign is where the patch map, data, consent rules and letter all meet, and it teaches more than any planning. Getting the first hundred letters out, every one logged against its building, gives you real reply data within weeks.

                ## Milestones
                1. A list of 100 owners traced and checked against opt-outs.
                2. The tested letter printed, signed and posted.
                3. Every send logged against its tracker row with the date.
                4. Replies counted and followed up within two working days.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One hundred letters posted and logged by date in the tracker, with every reply followed up within two working days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick 100 owners from the tracker and check them against opt-outs"
                - "Print, sign and post the letters in one batch"
                - "Log the send date against each tracker row"
                - "Reply to every response within two working days"
            - name: First off-market viewing and owner meeting
              description: |-
                ## Purpose
                Meeting an owner at their building is where an off-market lead becomes a real conversation or fades away. Preparing for the first one, with a short agenda, a few good questions and your credibility pack, means you leave with the information needed to make an offer.

                ## Milestones
                1. A viewing booked at a time that suits the owner.
                2. A one-page agenda and question list prepared.
                3. Rents, costs, tenancies and known problems noted during the visit.
                4. A follow-up sent within 48 hours with a clear next step.

                ## Notes
                Start from the **Meeting notes** template. Ask for the rent schedule before the visit if the owner is happy to share it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first owner viewing held with notes on rents, costs and tenancies, and a written follow-up sent within 48 hours."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book the viewing at a time that suits the owner"
                - "Prepare a one-page agenda and five questions"
                - "Take the credibility pack and note rents, costs and tenancies"
                - "Send a follow-up with a next step within 48 hours"
            - name: First written off-market offer
              description: |-
                ## Purpose
                Many buyers talk to owners for months and never put a figure in writing, so the owner never has to decide. A clear written offer with price, conditions, timetable and your advisers, sent within a fortnight of the viewing, turns goodwill into a decision.

                ## Milestones
                1. The deal underwritten enough to support a firm figure.
                2. A written offer with price, conditions, deposit and timetable.
                3. The offer sent with the credibility pack attached.
                4. The owner's answer and any counter recorded in the tracker.

                ## Notes
                Make the offer subject to survey, title checks and finance where needed, and ask your solicitor to confirm the wording keeps it non-binding until contracts.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written offer with price, conditions and timetable sent to an off-market owner, with their answer recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the underwriting supports a firm figure"
                - "Draft the offer letter with price, conditions and timetable"
                - "Ask your solicitor to check the offer stays non-binding"
                - "Send the offer and record the owner's answer"
            - name: Ninety-day off-market sourcing sprint
              description: |-
                ## Purpose
                Sourcing habits take months to show results, and many buyers quit before the first reply. A ninety-day sprint with weekly targets for agent calls, letters and owner conversations gives enough volume to learn which channels work in your patch.

                ## Milestones
                1. Weekly targets set for calls, letters and conversations.
                2. Progress against targets logged every week for thirteen weeks.
                3. At least ten owner conversations held.
                4. A written review at day ninety of what to keep.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Thirteen weeks of logged activity against targets, at least ten owner conversations, and a written day-ninety review."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set weekly targets for agent calls, letters and conversations"
                - "Log progress against targets at the end of each week"
                - "Count owner conversations at the halfway mark"
                - "Write the day-ninety review of what to keep and drop"
            - name: Property show or landlord conference visit
              description: |-
                ## Purpose
                A regional property show or landlord conference puts agents, landlords, lenders and sourcers in one hall for a day. Going with a target list, appointments booked ahead and a follow-up plan turns a day of brochures into a handful of real relationships.

                ## Milestones
                1. One show or conference chosen for the year.
                2. Ten target exhibitors or attendees listed and three meetings booked.
                3. Contacts logged during the day with notes.
                4. Every useful contact followed up within a week.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Attendance at one property show with three pre-booked meetings and every useful contact followed up within a week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose one property show or landlord conference for this year"
                - "List ten exhibitors or attendees you want to meet"
                - "Book three meetings in advance by email"
                - "Follow up every useful contact within a week"
            - name: Sourcing deals alongside a full-time job
              description: |-
                ## Purpose
                Founders and small investors with a day job cannot take calls at ten in the morning, but they can run a disciplined two-hour weekly block and batch letters at weekends. Designing the sourcing routine around fixed hours stops it from either swallowing evenings or quietly stopping.

                ## Milestones
                1. A fixed two-hour weekly sourcing block in the calendar.
                2. Channels chosen that suit evenings and weekends, such as letters and events.
                3. Agent calls batched into one lunch hour a week.
                4. A voicemail and email reply promise owners can rely on.

                ## Notes
                Tell agents honestly that you work around a job, and give them a reliable time to reach you. Reliability matters more than availability.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A two-hour weekly sourcing block held for twelve weeks, with agent calls batched and every owner reply answered within a day."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Block two fixed hours a week for sourcing"
                - "Pick the channels that work outside office hours"
                - "Hold the weekly sourcing block and log what you did @recurring(weekly:sat)"
                - "Set a voicemail that says when you return calls"
            - name: Buying from retiring landlords
              description: |-
                ## Purpose
                Landlords in their sixties and seventies with a few buildings often want out of tenant calls and repairs but dread agents, viewings and tax surprises. A patient, respectful approach that offers a simple sale, flexible timing and room for their own advisers suits them better than any aggressive campaign.

                ## Milestones
                1. Long-held, individually owned buildings in the patch identified.
                2. A gentle letter written for landlords thinking about stepping back.
                3. Owners who reply met at a pace that suits them.
                4. Each conversation logged with their concerns and timing.

                ## Notes
                Encourage every owner to involve their accountant early. Tax on a sale is often the real obstacle, and you should never advise on it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of long-held individually owned buildings, a quarterly letter sent to them, and every reply logged with the owner's concerns."
                cadence: rolling
              tasks:
                - "Filter the tracker for long-held buildings owned by individuals"
                - "Write a gentle letter for landlords who may want to step back"
                - "Send the letter to long-held owners in the patch @recurring(quarterly)"
                - "Log each owner's concerns and preferred timing after you speak"
            - name: Probate and inherited property handled with care
              description: |-
                ## Purpose
                Heirs who inherit a tenanted building often live elsewhere, disagree with siblings and want a fair, simple exit. Approaching them weeks after a probate notice, with respect, patience and no pressure, can lead to deals that work well for a family under strain.

                ## Milestones
                1. A sensitive letter written for executors and heirs.
                2. A rule on how long after a death you wait before writing.
                3. Executors' and solicitors' preferences respected in every contact.
                4. Each conversation logged with family timing and any disputes noted.

                ## Notes
                Write to the executor or their solicitor rather than individual family members where possible, and accept a no the first time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A written letter and waiting rule for probate contacts, with every contact made through the executor or their solicitor and logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Decide how long after a death you wait before writing"
                - "Write a short, respectful letter to executors and heirs"
                - "Address contacts to the executor or their solicitor"
                - "Log family timing and any disputes after each conversation"
            - name: Pipeline evidence for a first fund raise
              description: |-
                ## Purpose
                Founders raising a first fund or a first syndication are asked to show investors a real pipeline, not a hope. Keeping anonymised pipeline statistics, deals reviewed, offered and declined, with reasons, gives investors evidence of discipline as well as access.

                ## Milestones
                1. A monthly anonymised pipeline summary with counts by stage.
                2. Three example deals written up without owner details.
                3. Reasons for passing on deals recorded as evidence of discipline.
                4. The summary shared with prospective investors under the right legal advice.

                ## Notes
                Never share owner names or confidential terms. Check with your securities lawyer what you may say to prospective investors before the raise is open.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Six monthly anonymised pipeline summaries and three deal write-ups, reviewed by a lawyer before being shown to investors."
                cadence: rolling
              tasks:
                - "Ask the agent to draft an anonymised summary of the tracker by stage"
                - "Write up three example deals without owner details"
                - "Update the anonymised pipeline summary for investors @recurring(monthly:22)"
                - "Ask your securities lawyer what you may share before the raise"
            - name: Sourcing in a new city where you know no one
              description: |-
                ## Purpose
                Moving into a new market means no agent knows you and every local buyer has a head start. A deliberate ninety-day entry plan, a visit every fortnight, a local partner or adviser and a narrow first patch, is faster than months of cold emails from a distance.

                ## Milestones
                1. A narrow first patch chosen with local data and one visit.
                2. Ten local agents met in person.
                3. A local solicitor, surveyor and letting agent identified.
                4. A first letter drop sent to owners in the new patch.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within 120 days, a new-city patch map, ten agents met in person, local advisers named and a first letter drop sent."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a narrow first patch in the new city from local data"
                - "Book a fortnightly visit to meet agents in person"
                - "Find a local solicitor, surveyor and letting agent"
                - "Send a first letter drop to owners in the new patch"
            - name: Small team roles for caller, analyst and closer
              description: |-
                ## Purpose
                Small property companies with two or three people often have everyone doing a bit of everything, so leads stall between people. Giving each person a clear role, who finds owners, who screens and underwrites, who meets and negotiates, with handover points in the tracker, makes the pipeline move.

                ## Milestones
                1. Each sourcing step assigned to one named person.
                2. Handover points marked as stages in the tracker.
                3. A weekly fifteen-minute handover between roles.
                4. Response times between stages measured for a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every sourcing step owned by a named person, with handovers marked in the tracker and response times measured for a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every step from first contact to offer"
                - "Assign each step to one named person"
                - "Add handover stages to the tracker"
                - "Measure how long leads wait between stages for a month"
            - name: Business owners who own their premises
              description: |-
                ## Purpose
                Family firms that own their workshop, shop or office often have most of their wealth tied up in the building, and a sale and leaseback can free cash while they keep trading. Finding these owner-occupiers and opening a conversation about their plans brings income property that never reaches the market.

                ## Milestones
                1. Owner-occupied commercial buildings in the patch identified.
                2. A short note explaining sale and leaseback in plain words.
                3. Five owner conversations held about their plans for the building.
                4. Each owner encouraged to take accounting and legal advice.

                ## Notes
                A leaseback is only as good as the tenant. Underwrite the business as well as the building before making an offer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of owner-occupied buildings in the patch, a plain-words leaseback note, and five owner conversations logged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Identify owner-occupied commercial buildings in the patch"
                - "Write a plain-words note on how sale and leaseback works"
                - "Hold five conversations with owners about their plans"
                - "Suggest each owner talks to their accountant and solicitor"
            - name: Buying a landlord's whole portfolio off-market
              description: |-
                ## Purpose
                A landlord with eight or twenty units across a town would often rather sell once to one buyer than sell each one through agents. Approaching portfolio owners, valuing the portfolio as a whole with the weak units priced honestly, and offering one clean completion, is a specialist play that few small buyers attempt.

                ## Milestones
                1. Owners with several buildings in the patch identified from the tracker.
                2. A portfolio approach letter written.
                3. A method for pricing a portfolio with strong and weak units.
                4. Finance capacity for a portfolio purchase confirmed with a lender.

                ## Notes
                Ask about tenancies, arrears and repairs unit by unit. A portfolio price hides the problem units unless you look.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of multi-building owners, a portfolio pricing method, and lender confirmation of capacity for a portfolio purchase."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Filter the tracker for owners with several buildings"
                - "Write a letter offering one clean sale of the whole portfolio"
                - "Set out how you price strong and weak units together"
                - "Confirm with your lender how large a portfolio you could fund"
            - name: Corporate and public surplus property
              description: |-
                ## Purpose
                Companies, utilities, health bodies and councils regularly decide that a depot, an office or a branch building is surplus, and many sell through informal approaches before any marketing. Getting known to the estates and property teams of the large owners in your patch puts you on the list they call first.

                ## Milestones
                1. The large corporate and public owners in the patch listed.
                2. Contacts in their estates or property teams identified.
                3. Your criteria sent to each team with an introduction.
                4. Published disposal lists or surplus property registers watched where they exist.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Named contacts in the estates teams of at least five large owners in the patch, each sent your criteria, with any disposal lists watched."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the large corporate and public owners in the patch"
                - "Find a contact in each estates or property team"
                - "Send each contact your criteria with a short introduction"
                - "Check published surplus property lists in your area"
            - name: Refinancing squeeze outreach to geared owners
              description: |-
                ## Purpose
                Borrowers who geared up heavily at low rates face a harder refinance when their loan term ends, and some would rather sell quietly than inject equity. Using public charge data where available and agent knowledge to time outreach around likely refinancing dates is a specialist way to meet sellers before they are forced.

                ## Milestones
                1. Sources of mortgage or charge data in your jurisdiction identified.
                2. Patch buildings with older charges flagged as likely refinances.
                3. A letter written for owners weighing a refinance.
                4. Flagged owners contacted on a quarterly cycle.

                ## Notes
                Never imply you know an owner's finances. Write about the market, not about their loan.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A flagged list of likely refinances in the patch, contacted quarterly with a market-focused letter, with replies logged."
                cadence: rolling
              tasks:
                - "Find what charge or mortgage data is public in your area"
                - "Flag patch buildings with charges likely to need refinancing"
                - "Write a letter about the refinancing market, not their loan"
                - "Contact the flagged owners and log replies @recurring(quarterly)"
            - name: Likelihood-to-sell score for patch buildings
              description: |-
                ## Purpose
                With several hundred buildings in the patch, writing to everyone equally wastes money. A simple score from signals such as years owned, owner age or type, vacancy, condition, lease expiries and charges lets you spend most of the budget on the owners most likely to sell, and test whether the score works.

                ## Milestones
                1. Five or six signals chosen and weighted.
                2. Every building in the tracker given a score.
                3. Outreach budget concentrated on the top-scoring fifth.
                4. Reply rates for high and low scores compared after two drops.

                ## Notes
                Keep the score simple enough to explain. If high scores do not reply more than low ones, change the signals.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every patch building scored on written signals, with reply rates for top and bottom fifths compared after two letter drops."
                cadence: rolling
              tasks:
                - "Choose five or six signals and give each a weight"
                - "Score every building in the tracker"
                - "Rescore the patch with fresh signal data @recurring(quarterly)"
                - "Compare reply rates for top and bottom fifths after two drops"
            - name: Track record pack of completed off-market deals
              description: |-
                ## Purpose
                Experienced buyers win the best quiet deals because they can show owners and agents exactly what they did last time. A track record pack of completed deals, with dates, how each was found and what the seller said, becomes the most persuasive thing you send.

                ## Milestones
                1. Every completed deal written up on half a page.
                2. Permission asked from sellers for any quote used.
                3. The pack added to the credibility pack and sellers page.
                4. The pack updated after each completion.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A track record pack covering every completed deal, with seller permission for quotes, updated within a month of each completion."
                cadence: rolling
              tasks:
                - "Write half a page on each completed deal"
                - "Ask past sellers for permission to quote them"
                - "Add the pack to the credibility pack and sellers page"
                - "Review the pack for new completions and quotes @recurring(quarterly)"
            - name: Yearly sourcing review and channel plan
              description: |-
                ## Purpose
                Once a year, the question is whether the sourcing machine is producing deals at a cost the business can carry. A yearly review of deals completed by source, cost per deal, relationships built and the brief itself sets next year's budget and channel mix on evidence.

                ## Milestones
                1. Deals completed, offers made and cost per deal counted by source.
                2. The top ten relationships of the year named.
                3. Next year's budget and channel mix agreed.
                4. The buying brief and patch confirmed or changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written yearly review with cost per deal by source, a named top ten relationships list and next year's agreed budget."
                cadence: cyclic
              tasks:
                - "Count the year's deals, offers and costs by source"
                - "Name the ten relationships that produced most value"
                - "Agree next year's budget and channel mix with partners"
                - "Hold the yearly sourcing review and update the brief @recurring(yearly)"
---

# Off-Market Deal Sourcing

Off-Market Deal Sourcing is for sponsors, small property companies and founders who want to see income property before it is marketed: apartment blocks, mixed-use parades, small industrial and office buildings, and whole landlord portfolios. It starts with foundations (a buying brief, proof of funds, a patch map, a tracker and the consent rules for contacting owners), then the weekly and monthly machinery of agent calls, letters, follow-ups and distress signals, then skills such as tracing owners and talking to sellers, the decisions about channels and paid sourcers, first milestones, situations for part-time and new-market buyers, and specialist plays like portfolio buys and sale and leaseback.

The rhythm is a Monday pipeline review, a weekly agent call round and distress scan, monthly sweeps of expired listings, lease expiries and street walks, quarterly letter drops and a yearly review of which sources actually produced deals. The Purchase decision, Metrics log, Vendor and Meeting notes templates pair with the data tool choice, the source metrics, paid sourcer checks and seller meetings. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
