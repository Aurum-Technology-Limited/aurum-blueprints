---
id: investment-banking.buyer-investor-universe-mapping
name: Buyer and Investor Universe Mapping
description: "A buyer and investor universe built from clean data, every name scored on fit, appetite and capacity, conflicts cleared, and an approach order the client has signed off."
category: business
version: 1.0.0
tags: [investment-banking, buyer-investor-universe-mapping, knowledge-worker, analyst, associate, m-and-a, buyer-lists, sponsors]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Buyer and Investor Universe Mapping
          description: "Mapping likely buyers or investors: strategic acquirers, sponsors, family offices, regional groups, appetite and capacity, and the approach order."
          projects:
            - name: Reading three buyer lists from closed deals
              description: |-
                ## Purpose
                Most groups have a house style for buyer lists that nobody writes down: how names are tiered, which columns matter and how much rationale a VP expects per buyer. Pulling the final buyer lists from three closed sale processes, and seeing which buyers actually bid, shows you what a good list looks like and how far the winner usually sat from the top of it.

                ## Milestones
                1. Three closed sale processes chosen, each with its final buyer list and its bid summary located.
                2. A short table comparing the number of names, the tiers and the columns used on each list.
                3. The eventual winner and every bidder marked on each list, with the tier they started in.
                4. Two questions about how the lists were built answered by the associate who built them.

                ## Notes
                Use the list that went to the client, not an early draft. The sent version shows what survived the VP and the client.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of three closed-deal buyer lists, with bidders and the winner marked by starting tier and two questions answered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask an associate which three closed sale processes had the best buyer lists"
                - "Pull the final buyer list and bid summary for each deal from the deal folders"
                - "Mark every bidder and the winner on each list with their starting tier"
                - "Write down how many names each list had and how many actually bid"
            - name: Buyer and investor categories with working definitions
              description: |-
                ## Purpose
                Lists go wrong when one banker files a sponsor-owned platform as a strategic and another files it as a sponsor, because the approach, the timing and the capacity test differ for each. Writing short definitions for every category you use (trade buyer, sponsor, sponsor-backed platform, family office, sovereign or pension direct investor, infrastructure fund, regional conglomerate, management buyout) gives every list in your group the same vocabulary.

                ## Milestones
                1. Eight to ten buyer and investor categories named, each with a two-line definition.
                2. A rule for hybrid cases, such as a portfolio company with its own acquisition budget.
                3. One worked example of a real buyer type for each category, drawn from public deals.
                4. The definitions agreed with your associate and saved beside the list workbook.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of buyer and investor category definitions, including a hybrid rule, agreed with your associate and saved in the group folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every buyer category used on the three closed-deal lists you reviewed"
                - "Write a two-line definition for each category"
                - "Add a rule for sponsor-backed platforms and other hybrid buyers"
                - "Review the definitions with your associate and save the final version"
            - name: Data sources and access for buyer screens
              description: |-
                ## Purpose
                Screen quality depends on the sources behind it, and analysts often find out mid-mandate that the deal database misses private acquirers or that the firm has no licence for the private capital module. Knowing which databases, filings, news services and internal records you can actually use, and what each is blind to, saves a late scramble when the VP asks why a known bidder is missing.

                ## Milestones
                1. Every deal, company and private capital database the firm licenses listed with your login status.
                2. One sentence per source on what it covers well and what it misses.
                3. Internal sources added: the CRM, past buyer lists, coverage bankers' notes and the conflicts system.
                4. A default screening order written down, from broadest source to most specific.

                ## Notes
                Ask the research or information team what the firm licenses before requesting new access. Many firms already pay for modules nobody in the group uses.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A source map listing every licensed database and internal record, its blind spots and your access, with a default screening order."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the research team which deal and private capital databases the firm licenses"
                - "Request any logins you are missing for the main screening tools"
                - "Note what each source misses, such as private acquirers or small family offices"
                - "Check that your database access and logins are still active @recurring(yearly)"
            - name: Standard buyer list workbook
              description: |-
                ## Purpose
                When every mandate starts from a blank spreadsheet, columns drift, tiers mean different things and nobody can merge two lists without an afternoon of cleaning. A standard workbook with fixed columns for category, ownership, rationale, capacity, appetite, conflicts status, coverage banker and contact outcome makes every new list faster and every old one reusable.

                ## Milestones
                1. A workbook with a fixed column set and a short legend for each column.
                2. Drop-down lists for category, tier and contact status so entries stay consistent.
                3. A summary tab that counts buyers by category, tier and status automatically.
                4. The workbook tested on one past list and adopted for your next mandate.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A buyer list workbook with fixed columns, drop-downs and an automatic summary tab, tested on a past list and used on the next live mandate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the fixed columns using the three closed-deal lists as a guide"
                - "Add drop-down lists for category, tier and contact status"
                - "Build a summary tab that counts buyers by category, tier and status"
                - "Load one past buyer list into the workbook to test it"
            - name: Client brief on buyer preferences and exclusions
              description: |-
                ## Purpose
                Sellers almost always have views the bank does not know until a name appears on a draft list: a competitor they refuse to share data with, a sponsor they distrust, a buyer whose culture they think would hurt staff. A short structured conversation before the first screen records those preferences and exclusions in writing, so the list starts from the client's real limits rather than discovering them in a tense review.

                ## Milestones
                1. A question list prepared covering competitors, sponsors, foreign buyers, staff and legacy concerns.
                2. The client's preferences and absolute exclusions recorded in their own words.
                3. Any names the client wants approached first or personally noted.
                4. The brief circulated to the deal team and filed with the buyer workbook.

                ## Notes
                Ask about people as well as companies. A founder may be fine with a buyer and not with that buyer's chief executive.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written client brief listing buyer preferences, absolute exclusions and priority names, circulated to the deal team before the first screen."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft ten questions on competitors, sponsors, foreign buyers and staff concerns"
                - "Agree with your VP who asks the questions in the client meeting"
                - "Record the client's exclusions and priority names in their own words"
                - "File the brief beside the buyer workbook and send it to the deal team"
            - name: Conflicts and restricted list check on the long list
              description: |-
                ## Purpose
                Your firm may already advise one of the buyers on your list, hold a lending relationship with another or be restricted on a third, and approaching them without clearance can embarrass the firm and the client. Running every name through the conflicts process before the list leaves the team, and recording the outcome per buyer, is the step a compliance review looks for first.

                ## Milestones
                1. The full long list submitted through the firm's conflicts process in the required format.
                2. Each buyer marked as cleared, cleared with conditions, or blocked.
                3. Conditions such as separate teams or no contact noted beside the buyer.
                4. Open risks recorded in a register with an owner and a review date.

                ## Notes
                Start from the **Risk register** template. The conflicts and compliance teams decide; your job is to submit the full list early and record what they say.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every buyer on the long list shows a recorded conflicts outcome, with conditions noted and open risks in a register before any approach."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find out the format the conflicts team needs for a list of counterparties"
                - "Submit the full long list, including parent companies and controlling sponsors"
                - "Record each buyer's clearance outcome and any conditions in the workbook"
                - "Log open conflict questions in a risk register with an owner"
            - name: Screening criteria agreed before the first screen
              description: |-
                ## Purpose
                Screens done without agreed criteria produce either 400 names nobody can review or 30 that miss obvious bidders. Agreeing with the VP the size band, sectors, geographies, ownership types and minimum capacity before you run anything turns the screen into a repeatable query and gives you an answer when someone asks why a name was left out.

                ## Milestones
                1. Size, sector, geography and ownership filters written down for strategic buyers.
                2. Fund size, strategy and sector filters written down for sponsors.
                3. A minimum capacity test agreed, such as an acquirer's size relative to the target.
                4. The criteria signed off by the VP and pasted into the workbook's legend tab.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written screening criteria for strategics and sponsors, including a capacity test, signed off by the VP before the first screen is run."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft size, sector and geography filters for strategic buyers"
                - "Draft fund size and strategy filters for sponsor buyers"
                - "Propose a simple capacity test relative to the target's size"
                - "Get the VP's sign-off and paste the criteria into the workbook legend"
            - name: Strategic fit tests for trade buyers
              description: |-
                ## Purpose
                Trade buyers usually have one of a few rationales: more customers, a new geography, a missing product, vertical integration or cost savings from overlap. Writing a short fit test for each rationale lets you sort strategics into those who would pay for synergies and those who are merely in the same industry, which is what a client really wants to know.

                ## Milestones
                1. Five or six acquisition rationales written as one-line tests.
                2. Each strategic on the list tagged with its main rationale, or none.
                3. Buyers with no clear rationale moved to a reserve tab rather than deleted.
                4. Two sample rationales reviewed by the associate for tone and accuracy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every strategic on the list carries a tagged acquisition rationale or sits on a reserve tab, with fit tests written in the legend."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one-line tests for customer, geography, product, integration and cost rationales"
                - "Tag each strategic buyer with its main rationale"
                - "Move strategics with no rationale to a reserve tab"
                - "Ask the associate to review two rationales for tone"
            - name: Ownership and decision maker check for each buyer
              description: |-
                ## Purpose
                Whoever appears on the list is not always the one who decides: a subsidiary may need its parent's board, a sponsor-backed platform needs its sponsor's investment committee, and a family group may hinge on one person. Recording who owns each buyer and who would approve a deal changes both whom the bank calls and how long the buyer will need.

                ## Milestones
                1. Ultimate owner recorded for every buyer, including controlling sponsors and parents.
                2. The likely approving body noted, such as a parent board or an investment committee.
                3. Buyers sharing an owner grouped so they are not approached twice without a reason.
                4. Any buyer under its own sale process or ownership change flagged.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The workbook shows an ultimate owner and an approving body for every buyer, with shared-owner groups and ownership changes flagged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Look up the ultimate owner of each buyer in filings and the company database"
                - "Note whether a parent board or a sponsor committee would approve a deal"
                - "Group buyers that share a parent or a controlling sponsor"
                - "Flag buyers that are themselves for sale or recently changed hands"
            - name: Weekly sector buyer intelligence log
              description: |-
                ## Purpose
                Appetite changes with every results call, new chief executive, failed deal and fresh fund close, and lists built from last year's memory miss those shifts. Fifteen minutes each Monday logging buyer news in your sector keeps a running record you can drop straight into a rationale column when a mandate arrives.

                ## Milestones
                1. A log with columns for date, buyer, event and what it means for appetite.
                2. News alerts set up for the twenty most active buyers in your sector.
                3. At least one entry a week for a full quarter.
                4. The log linked from the standard buyer workbook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A buyer intelligence log with at least twelve weekly entries in a quarter, linked from the buyer workbook."
                cadence: rolling
              tasks:
                - "Set up news alerts for the twenty most active acquirers in your sector"
                - "Create the log with date, buyer, event and appetite columns"
                - "Log the week's buyer news and what it means for appetite @recurring(weekly:mon)"
            - name: Sponsor dry powder and fund vintage tracker
              description: |-
                ## Purpose
                Sponsors with a new fund and capital to deploy behave very differently from those in the last year of its investment period or out raising its next vehicle. Tracking fund size, vintage, sector focus and recent platform deals for the sponsors you meet most tells you which ones have both the money and the urgency to bid now.

                ## Milestones
                1. Forty to sixty sponsors relevant to your sector listed with latest fund size and vintage.
                2. Each sponsor's investment period status estimated from public fund information.
                3. Platform deals in the last two years added for each sponsor.
                4. The tracker refreshed after each quarter's fund closing announcements.

                ## Notes
                Fund data in databases lags. Treat dry powder figures as estimates and note the source date beside each one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sponsor tracker covering at least forty funds with size, vintage, investment period status and recent platforms, refreshed each quarter."
                cadence: rolling
              tasks:
                - "List the forty sponsors you see most often in your sector"
                - "Add each sponsor's latest fund size, vintage and sector focus"
                - "Log new fund closes and platform deals for tracked sponsors @recurring(monthly:12)"
                - "Update investment period estimates for every tracked sponsor @recurring(quarterly)"
            - name: Live buyer tracker during a mandate
              description: |-
                ## Purpose
                Once outreach starts, the list becomes the process's control panel: who has been called, who signed the NDA, who received the teaser, who passed and why. Updating it every Tuesday before the internal call means the VP, the client and the coverage bankers are always looking at the same picture.

                ## Milestones
                1. Status columns added for called, NDA signed, teaser and IM sent, passed and reason.
                2. Every buyer contact reflected within one working day.
                3. A one-line weekly summary of counts by status sent to the deal team.
                4. Pass reasons grouped into themes the team can act on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During a mandate the tracker reflects every contact within a working day and a weekly status count goes to the deal team each Tuesday."
                cadence: rolling
              tasks:
                - "Add status and pass reason columns to the mandate's buyer workbook"
                - "Update buyer statuses and send counts to the deal team @recurring(weekly:tue)"
                - "Group pass reasons into themes after the first twenty responses"
            - name: Buyer list version log
              description: |-
                ## Purpose
                Buyer lists go through a dozen versions between the pitch and launch, and the classic error is sending the client a list that still contains a name they excluded two weeks earlier. A version log that records every addition, removal and reason, closed out each Friday, makes that mistake far less likely and answers the question of who took a buyer off and when.

                ## Milestones
                1. A change log tab recording date, change, reason and who asked for it.
                2. File names following one versioning convention agreed with the team.
                3. A weekly check that client exclusions are absent from the current version.
                4. Every version sent externally saved as a locked copy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The buyer workbook has a change log with a reason for every edit and a locked copy of each externally sent version."
                cadence: rolling
              tasks:
                - "Add a change log tab with date, change, reason and requester columns"
                - "Agree a file naming convention for list versions with the team"
                - "Check the current list against client exclusions and close the log @recurring(weekly:fri)"
            - name: Coverage banker cross-check of buyer names
              description: |-
                ## Purpose
                Coverage bankers often know that a strategic has just frozen acquisitions or that a sponsor partner is leaving, and none of it is in a database. A monthly cross-check where each coverage banker reviews the names in their book that appear on live and draft lists catches those facts before a client meeting rather than after an awkward call.

                ## Milestones
                1. Each buyer on live lists mapped to its coverage banker, where one exists.
                2. A short note sent to each coverage banker with their names and the question to answer.
                3. Their comments recorded in the workbook with the date.
                4. Buyers with no coverage banker listed for the VP's attention.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every buyer on live lists has a named coverage banker or a gap flag, and coverage comments are logged at least monthly."
                cadence: rolling
              tasks:
                - "Map each buyer on live lists to its coverage banker"
                - "Send each coverage banker their names with one clear question @recurring(monthly:9)"
                - "Record coverage comments in the workbook with the date"
            - name: Strategic acquirer deal activity monitor
              description: |-
                ## Purpose
                Recent behaviour is the best guide to appetite: an acquirer that has done three bolt-ons in a year, announced a disposal programme or walked away from a deal is telling you something. A monthly scan of announced deals by the strategics in your sector, noted against each name, keeps capacity and appetite columns grounded in fact.

                ## Milestones
                1. A saved database search for deals by the sector's top fifty strategics.
                2. Deals logged with date, size where public, and whether bought or sold.
                3. Each acquirer's appetite column updated from the latest activity.
                4. Acquirers with no deal in two years flagged for a check.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top fifty strategics in your sector show their deals from the last two years and an appetite note updated each month."
                cadence: rolling
              tasks:
                - "Save a database search for deals by your sector's top fifty strategics"
                - "Log new deals and update each acquirer's appetite note @recurring(monthly:18)"
                - "Flag acquirers with no deal in two years for a coverage check"
            - name: Family office and private capital contact map
              description: |-
                ## Purpose
                Family offices and private holding groups rarely appear in deal databases, change their people often and prefer warm introductions, yet they are frequently the most patient buyers for founder businesses. Keeping a short map of those you or your colleagues know, with what they like to buy and who knows them, makes them a real part of the universe instead of an afterthought.

                ## Milestones
                1. Thirty family offices and private holding groups listed with their stated interests.
                2. The banker in the firm who knows each one recorded.
                3. Typical cheque size and holding style noted where it is known.
                4. Contacts refreshed each quarter, with departures noted.

                ## Notes
                Record only professional information that the family office has shared or published. Personal details of family members do not belong in a buyer list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A map of at least thirty family offices and private holding groups with interests, cheque size and a known banker, refreshed quarterly."
                cadence: rolling
              tasks:
                - "Ask senior bankers which family offices they have met in the last year"
                - "Record each office's stated interests and typical cheque size"
                - "Refresh family office contacts and note departures @recurring(quarterly)"
            - name: Buyer feedback capture after every contact
              description: |-
                ## Purpose
                First reactions on a call (too small, wrong geography, interested but busy with another deal) are the most valuable data in the process and are lost if they live in one banker's memory. Writing every reaction in a fixed format within a day, and reviewing the week's notes on Thursday, lets the team spot patterns and adjust the pitch or the list while there is still time.

                ## Milestones
                1. A short note format: buyer, caller, date, reaction, stated reason, next step.
                2. Notes from every caller collected in one place within a day of the call.
                3. A weekly review that groups reactions into themes.
                4. One change to the list or the message made from the themes, or a note that none was needed.

                ## Notes
                Start from the **Meeting notes** template for longer calls with a buyer's senior team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every buyer contact has a feedback note within a working day, and a weekly theme review is recorded during the live process."
                cadence: rolling
              tasks:
                - "Agree a six-field feedback note format with every caller on the team"
                - "Collect the week's feedback notes and group reactions into themes @recurring(weekly:thu)"
                - "Propose one list or message change to the VP from the themes"
            - name: Estimating acquisition capacity from public numbers
              description: |-
                ## Purpose
                Buyers who love the asset but cannot fund it waste a slot in the process. Learning to estimate capacity quickly, from cash, existing debt against earnings, the room under stated gearing targets, share price and market value relative to the target, lets you rank strategics by ability to pay as well as interest.

                ## Milestones
                1. A one-page method for estimating capacity from cash, net debt and earnings.
                2. The method applied to ten strategics from a past list.
                3. Each estimate checked against a deal that buyer actually did.
                4. A capacity column with a high, medium or low rating added to the workbook.

                ## Notes
                These are screening estimates for internal ranking, not a view on any buyer's credit. Label them as such if they ever leave the team.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written capacity method applied to ten strategics, with estimates checked against their past deals and a rating column added to the workbook."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page capacity method using cash, net debt and earnings"
                - "Apply the method to ten strategics from a past buyer list"
                - "Compare each estimate with the largest deal that buyer has done"
                - "Add a high, medium or low capacity column to the standard workbook"
            - name: Reading sponsor portfolios for platform and add-on fit
              description: |-
                ## Purpose
                Sponsors might buy the target as a new platform or as an add-on to a company it already owns, and the two routes mean different cheque sizes, different decision makers and different prices. Reading each relevant sponsor's portfolio for companies the target could bolt onto turns a generic sponsor list into specific, credible pairings.

                ## Milestones
                1. Portfolio companies of the top twenty sponsors reviewed for overlap with the target.
                2. Each sponsor marked as a platform buyer, an add-on buyer through a named company, or both.
                3. Sponsor-backed add-on buyers added to the strategic tab with their sponsor noted.
                4. New platform acquisitions by tracked sponsors logged each month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The top twenty sponsors are each marked as platform, add-on or both, with named portfolio companies for every add-on route."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull the current portfolios of the twenty most relevant sponsors"
                - "Mark portfolio companies that the target could bolt onto"
                - "Add sponsor-backed add-on buyers to the strategic tab with their sponsor"
                - "Log new platform acquisitions by tracked sponsors @recurring(monthly:21)"
            - name: Judging appetite from earnings calls and filings
              description: |-
                ## Purpose
                Chief executives often say on results calls exactly what they want to buy, what they will not pay for and when they are focused on integration instead. Reading the latest call transcripts and annual reports of the top strategics each quarter, and noting the lines that matter, gives every rationale a quotable source.

                ## Milestones
                1. A note format for capturing acquisition comments with source and date.
                2. The latest call and annual report read for the top fifteen strategics.
                3. Each buyer's stated priorities, exclusions and gearing comments recorded.
                4. Appetite ratings in the workbook revised from what was said.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Acquisition comments from the latest earnings call and annual report of the top fifteen strategics are logged with sources, and appetite ratings revised."
                cadence: cyclic
              tasks:
                - "Choose the fifteen strategics whose comments matter most in your sector"
                - "Read their latest results calls and note acquisition comments with sources @recurring(quarterly)"
                - "Revise each buyer's appetite rating from what management said"
            - name: Writing a one-paragraph buyer rationale
              description: |-
                ## Purpose
                Seniors read rationales quickly and lose trust after the first vague one, such as a line saying only that a buyer is a leader in the space. A good rationale states why this buyer, why now, how they would pay and what might stop them, in about sixty words. Practising on ten buyers with feedback makes it a habit.

                ## Milestones
                1. A four-part rationale structure: fit, timing, capacity, obstacle.
                2. Ten rationales written for buyers on a past or practice list.
                3. Written feedback from the associate on at least five of them.
                4. A short bank of strong example rationales saved for reuse.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten buyer rationales in the four-part structure, five with written associate feedback, and an example bank saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the four-part rationale structure at the top of a practice sheet"
                - "Draft rationales for ten buyers on a past list in about sixty words each"
                - "Ask the associate for written comments on five of them"
                - "Save the three strongest rationales as examples"
            - name: Scoring buyers on fit, appetite, capacity and certainty
              description: |-
                ## Purpose
                Tiering by gut feel invites argument and makes the list hard to defend to a client who asks why their favourite buyer is in tier three. A simple scoring sheet with four factors, each on a short scale with written anchors, makes the ranking transparent and lets the VP change the weights instead of rewriting the list.

                ## Milestones
                1. Four scoring factors defined with written anchors for each score.
                2. Weights agreed with the VP and placed in one cell each.
                3. Every buyer on a live or practice list scored.
                4. A sense check that the top ten by score matches the team's instinct, with differences explained.

                ## Notes
                Certainty means how likely a buyer is to reach signing: approvals, financing, internal politics. Keep it separate from capacity.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scoring tab with anchored scales and adjustable weights, applied to every buyer on a list, with differences from team instinct explained."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write anchors for fit, appetite, capacity and certainty scores"
                - "Put the factor weights in single cells so the VP can change them"
                - "Score every buyer on the current list"
                - "Explain any top-ten buyer where the score and the team's instinct disagree"
            - name: Relationship map to each buyer's decision makers
              description: |-
                ## Purpose
                Who calls a buyer matters as much as whether they are called: a chief executive who hears from a banker they trust takes the call, one who hears from a stranger may not. Mapping the people at each top buyer who would decide, and who in the firm or the client's circle knows them, gives the approach plan real names.

                ## Milestones
                1. For each tier one buyer, the likely decision maker and the corporate development lead named.
                2. Known relationships in the firm recorded beside each name.
                3. Relationships the client or its board holds noted with their permission.
                4. Gaps with no relationship flagged for a cold approach plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every tier one buyer shows a named decision maker, a known relationship or a gap flag, refreshed quarterly."
                cadence: rolling
              tasks:
                - "Name the decision maker and corporate development lead at each tier one buyer"
                - "Search the CRM for colleagues who have met each person"
                - "Ask the client which buyers its board members know"
                - "Refresh names and relationships on the map @recurring(quarterly)"
            - name: Spotting competition clearance risk in a buyer list
              description: |-
                ## Purpose
                Often the buyer who would pay most is the closest competitor, and that is the one most likely to face a long competition review or remedies. Flagging overlap early, for counsel to assess, lets the team weigh price against certainty and stops the client being surprised in the final round.

                ## Milestones
                1. Buyers with direct product or geographic overlap with the target flagged.
                2. Approximate combined share in the main markets noted where public data allows.
                3. The flagged list sent to deal counsel with a request for their view.
                4. Counsel's view recorded against each flagged buyer, without the team drawing its own legal conclusion.

                ## Notes
                Whether a deal raises competition issues is a legal judgement. The bank's job here is to flag overlaps early and record counsel's view.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "All overlapping buyers are flagged, sent to deal counsel and annotated with counsel's recorded view before the list is finalised."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Flag every buyer with direct product or geographic overlap with the target"
                - "Note rough combined market shares from public sources"
                - "Send the flagged buyers to deal counsel and ask for their view"
                - "Record counsel's view against each flagged buyer"
            - name: Broad or targeted buyer list decision
              description: |-
                ## Purpose
                A broad list of eighty names creates competition but risks leaks and drains management time; a targeted list of twelve protects confidentiality but may leave price on the table. Making the choice explicitly, with the reasons written down, gives the client a clear recommendation and the team a number to build to.

                ## Milestones
                1. Arguments for a broad and a targeted approach set out for this specific target.
                2. Confidentiality, staff, customer and timing risks considered for each.
                3. A recommended list size range agreed with the VP.
                4. The decision and its reasons recorded for the client discussion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation on list breadth with a size range and reasons, agreed with the VP before the client sign-off meeting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what the client gains and risks from a broad list"
                - "List what the client gains and risks from a targeted list"
                - "Agree a recommended size range with the VP"
                - "Write the recommendation in one page for the client discussion"
            - name: Tiering buyers into first wave and reserve
              description: |-
                ## Purpose
                Not every name should hear about the deal on day one: a first wave tests the market with the strongest buyers, while a reserve can be added if interest is thin without the process looking shopped. Assigning tiers from the scores, then adjusting for relationships and sensitivities, gives the launch a clear shape.

                ## Milestones
                1. Tier one, tier two and reserve defined with the role each plays.
                2. Every buyer assigned a tier from its score, with manual changes explained.
                3. A trigger written for when reserve buyers will be contacted.
                4. Tier counts checked against the agreed list size range.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every buyer has a tier with any manual change explained, and a written trigger exists for contacting reserve buyers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define the role of tier one, tier two and reserve buyers"
                - "Assign tiers from the scores and explain each manual change"
                - "Write the trigger for bringing reserve buyers into the process"
                - "Check tier counts against the agreed list size range"
            - name: Approach order and sequencing plan
              description: |-
                ## Purpose
                Call order shapes the process: call a competitor first and word may spread; call sponsors a week after strategics and they may feel second choice. A sequencing plan, by day and by caller, balances confidentiality, relationship etiquette and the bid timetable, and is the page the client will study most closely.

                ## Milestones
                1. Calls grouped into waves with a day for each.
                2. Sensitive buyers, such as competitors, placed in the wave the client agreed.
                3. Each call given a caller, a backup caller and a fallback channel.
                4. The plan reconciled with the NDA and teaser timetable.

                ## Notes
                Keep the approach order separate from the tiers. A sensitive tier one buyer may rightly be called last.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A day-by-day approach plan naming a caller and backup for every buyer, reconciled with the NDA and teaser timetable."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group buyers into call waves and give each wave a day"
                - "Place competitors and other sensitive buyers where the client agreed"
                - "Assign a caller and a backup caller to every buyer"
                - "Check the plan against the NDA and teaser timetable"
            - name: Whether to approach direct competitors
              description: |-
                ## Purpose
                Competitors may pay most, but they also see confidential data and can poach customers and staff if the deal fails. Whether to include them, when, and with what protections (clean teams, staged disclosure, later waves) is a decision for the client, and the bank's role is to lay out the trade-off clearly.

                ## Milestones
                1. Each competitor on the list profiled for likely price and the harm they could do with data.
                2. Protection options set out, such as staged disclosure and clean team arrangements, with counsel's input.
                3. A recommendation per competitor: include now, include later, or exclude.
                4. The client's decision recorded in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written client decision on each competitor (now, later or excluded), supported by a profile and the protection options counsel advised."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Profile each competitor's likely price and what they could do with the data"
                - "Ask deal counsel which data protections are workable"
                - "Recommend now, later or exclude for each competitor"
                - "Record the client's decision in writing"
            - name: Foreign buyer inclusion decision
              description: |-
                ## Purpose
                Overseas buyers widen competition, but some will face foreign investment or national security reviews that add months or a real chance of being blocked. Deciding which foreign buyers to include, with advisers' views on likely review regimes, lets the team keep the price tension without loading the process with unrealistic bidders.

                ## Milestones
                1. Foreign buyers on the list grouped by home country.
                2. Counsel asked which buyers may trigger investment screening in the target's jurisdictions.
                3. Each foreign buyer marked include, include with timing caveat, or hold.
                4. The reasoning noted for the client in plain language.

                ## Notes
                Investment screening rules differ widely by country and sector. Rely on counsel's view for the specific deal.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every foreign buyer is marked include, include with caveat or hold, with counsel's view on screening risk recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Group foreign buyers on the list by home country"
                - "Ask counsel which buyers may trigger investment screening"
                - "Mark each foreign buyer include, include with caveat, or hold"
                - "Write a plain-language note on the reasoning for the client"
            - name: Assigning banker callers to buyers
              description: |-
                ## Purpose
                A buyer called by the wrong person, or by two people from the same bank in one week, starts the process badly. Matching each buyer to the banker with the best relationship, confirming they will make the call on the planned day, and writing a short script keeps the outreach coordinated and consistent.

                ## Milestones
                1. Each buyer matched to a caller from the relationship map.
                2. Every caller confirmed available on their planned day.
                3. A short approved call script and what not to say circulated.
                4. Duplicate approaches through other bank teams checked and avoided.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every buyer has one confirmed caller with an approved script, and no buyer is approached twice by the bank in the launch week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Match each buyer to the banker with the best relationship"
                - "Confirm each caller's availability on the planned call day"
                - "Circulate the approved call script and the lines to avoid"
                - "Check with other bank teams that nobody else is calling the same buyers"
            - name: Pruning an overlong buyer list
              description: |-
                ## Purpose
                Screens produce duplicates, dormant acquirers, buyers far too small and three funds from the same sponsor, and a long list full of them tells the client nobody thought hard. A disciplined pruning pass, with reasons recorded, cuts the list to the agreed range while keeping a record of what was considered.

                ## Milestones
                1. Duplicates and sibling funds of the same sponsor merged into one line.
                2. Buyers failing the capacity test moved to a removed tab with the reason.
                3. Dormant acquirers checked against the activity monitor before removal.
                4. The final list inside the agreed size range.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The list sits within the agreed size range, with every removed buyer on a separate tab with its reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Merge duplicate names and sibling funds of the same sponsor"
                - "Move buyers that fail the capacity test to a removed tab"
                - "Check dormant acquirers against recent deal activity before removing them"
                - "Confirm the final count sits inside the agreed range"
            - name: Adjacent sector and wild card buyers
              description: |-
                ## Purpose
                Some of the most aggressive bidders come from outside the obvious peer group: a supplier integrating forward, a customer integrating back, a buyer in a neighbouring sector wanting a new platform. Spending a focused session on adjacent buyers adds a handful of names that can change the dynamics of a process.

                ## Milestones
                1. The target's main suppliers, customers and neighbouring sectors listed.
                2. Ten adjacent buyers screened with a one-line rationale each.
                3. Three to five added to the list as tier two or reserve.
                4. The rest kept on the removed tab with the reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Ten adjacent sector buyers screened with rationales, three to five added to the list and the rest recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the target's main suppliers, customers and neighbouring sectors"
                - "Screen ten adjacent buyers and write a line on each"
                - "Add the strongest three to five to tier two or reserve"
                - "Record why the others were left off"
            - name: Buyer universe page for a pitch meeting
              description: |-
                ## Purpose
                At the pitch, the buyer page is where a prospective client decides whether the bank really knows who will pay. A page that groups likely buyers by category, names the strongest few with a crisp reason and shows awareness of sensitivities does more than a logo wall, and has to be ready days before the meeting.

                ## Milestones
                1. Buyers grouped by category with the strongest named in each.
                2. A one-line reason for each named buyer drawn from the rationale column.
                3. Sensitivities, such as competitors, handled in the wording.
                4. Every name checked against conflicts before the page is printed.

                ## Notes
                Logos and names on a pitch page are seen by the prospect. Check conflicts and any restricted names before printing, not after.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A buyer universe pitch page with grouped names and one-line reasons, conflicts checked, approved by the VP at least two days before the meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group likely buyers by category for the pitch page"
                - "Write a one-line reason for each named buyer"
                - "Run every name on the page through the conflicts check"
                - "Send the page to the VP two days before the pitch"
            - name: Client sign-off meeting on the buyer universe
              description: |-
                ## Purpose
                Until the client has seen every name, the tiers and the approach order and said yes in a minuted meeting, the buyer list is only a draft. Running that meeting well, with the exclusions confirmed and disagreements resolved on the spot, prevents the most common launch delay.

                ## Milestones
                1. A meeting pack with the list summary, tiers, sensitive names and approach order.
                2. Client exclusions from the brief confirmed against the final list.
                3. Every change the client asks for captured in the meeting.
                4. Written client approval of the final list and order received.

                ## Notes
                Start from the **Meeting notes** template and record every name the client adds or removes, with the reason they gave.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Minutes of the sign-off meeting and written client approval of the final buyer list and approach order are on file before launch."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build the meeting pack with summary, tiers, sensitive names and order"
                - "Check the final list against the client's exclusions before the meeting"
                - "Minute every name the client adds or removes and the reason"
                - "Send the agreed list back and ask for written approval"
            - name: Launch day approach call sheet
              description: |-
                ## Purpose
                On launch day a dozen bankers make calls at once, and without one sheet things slip: a buyer is missed, a teaser goes to the wrong address, a caller cannot find the NDA. A call sheet with every buyer, caller, number, script and send instructions, checked the evening before, makes the day mechanical.

                ## Milestones
                1. One sheet listing buyer, contact, caller, time slot and follow-up instructions.
                2. NDA and teaser versions confirmed and attached for each buyer.
                3. Callers briefed the evening before with the script.
                4. Every call outcome recorded on the sheet by the end of the day.

                ## Notes
                Start from the **Operational checklist** template for the evening check and the end-of-day reconciliation.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every buyer in the launch wave has a recorded call outcome on the call sheet by the end of launch day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build the call sheet with buyer, contact, caller and time slot"
                - "Attach the right NDA and teaser version for each buyer"
                - "Brief every caller the evening before launch"
                - "Reconcile all call outcomes on the sheet at the end of the day"
            - name: Mid-process buyer universe review
              description: |-
                ## Purpose
                After the first responses, the picture changes: some tier one buyers pass, unexpected names lean in and pass reasons cluster. A structured review two to three weeks after launch decides whether to bring in reserve buyers, re-approach someone with new information or hold the field as it is.

                ## Milestones
                1. Counts by tier and status summarised from the live tracker.
                2. Pass reasons grouped and compared with the original assumptions.
                3. A recommendation on reserve buyers, re-approaches or holding.
                4. The client's decision recorded and the tracker updated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A mid-process review paper with counts, pass themes and a recommendation, and the client's decision recorded in the tracker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise counts by tier and status from the live tracker"
                - "Compare pass reasons with the assumptions made at launch"
                - "Recommend whether to add reserve buyers or re-approach anyone"
                - "Record the client's decision and update the tracker"
            - name: Post-deal buyer list debrief and archive
              description: |-
                ## Purpose
                Closed processes hold lessons nobody writes down: which buyers moved quickly, who was all talk, which category surprised everyone. A one-hour debrief and an archived list, marked with what each buyer actually did, become the starting point for the next mandate in the sector.

                ## Milestones
                1. The final list marked with each buyer's furthest stage and stated reason.
                2. Three to five lessons on the universe written down.
                3. Buyer intelligence and sponsor trackers updated with what was learnt.
                4. The marked list archived where the group can find it.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "An archived final buyer list showing each buyer's furthest stage, plus three to five written lessons, within a month of signing or ending."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark every buyer's furthest stage and stated reason on the final list"
                - "Hold a one-hour debrief and write down three to five lessons"
                - "Update the intelligence log and sponsor tracker with what you learnt"
                - "Archive the marked list in the group's shared folder"
            - name: Investor universe for a minority stake or growth raise
              description: |-
                ## Purpose
                Selling a minority stake draws a different crowd from a full sale: growth funds, family offices, sovereign investors and strategic partners who want influence without control. Mapping them by cheque size, governance expectations and holding period helps the client choose investors they can live with for years.

                ## Milestones
                1. Investor categories relevant to a minority deal listed with typical stake sizes.
                2. Forty to sixty investors screened against the cheque size and sector.
                3. Each investor's usual governance asks, such as board seats or vetoes, noted from public deals.
                4. A ranked shortlist with reasons shared with the client.

                ## Notes
                Governance terms are negotiated with counsel. Record what investors typically ask for, not what the client should accept.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked minority investor shortlist with cheque size, governance expectations and reasons, shared with the client."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List investor categories that usually take minority stakes of this size"
                - "Screen forty to sixty investors on cheque size and sector"
                - "Note each investor's typical governance asks from public deals"
                - "Rank the shortlist and write a reason for each name"
            - name: Cornerstone and anchor investor mapping for a listing
              description: |-
                ## Purpose
                In listings that use them, cornerstone or anchor investors give the book early credibility, and the map of who might play that role is built long before the bookbuild. Identifying long-only funds, sovereign and pension investors and regional institutions that have anchored similar listings gives the ECM team a starting list to discuss.

                ## Milestones
                1. Recent comparable listings reviewed for publicly disclosed cornerstone or anchor investors.
                2. Thirty potential anchors listed with their sector and region focus.
                3. Each investor's typical allocation behaviour noted where public.
                4. The map handed to the ECM team with sources.

                ## Notes
                Approaches to investors before a listing are governed by strict rules on inside information and wall crossing. The ECM and compliance teams decide who is contacted and when.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A sourced map of thirty potential cornerstone or anchor investors drawn from comparable listings, delivered to the ECM team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find disclosed cornerstone or anchor investors in recent comparable listings"
                - "List thirty potential anchors with sector and region focus"
                - "Note each investor's public allocation behaviour"
                - "Send the sourced map to the ECM team"
            - name: Private placement investor targeting
              description: |-
                ## Purpose
                Private placements of equity or debt go to a small set of qualified investors, and approaching the wrong ones wastes the issuer's best weeks. A targeting list built from investors who have done similar placements, sorted by ticket size and sector appetite, keeps the outreach short and focused.

                ## Milestones
                1. Recent comparable private placements reviewed for disclosed investors.
                2. Investors sorted by typical ticket size and sector appetite.
                3. Eligibility questions, such as investor qualification rules, sent to counsel.
                4. A target list of fifteen to twenty-five investors agreed with the deal team.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A target list of fifteen to twenty-five private placement investors, sorted by ticket and appetite, agreed with the deal team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Review recent comparable placements for disclosed investors"
                - "Sort investors by typical ticket size and sector appetite"
                - "Ask counsel about investor eligibility rules for the placement"
                - "Agree a target list of fifteen to twenty-five names with the deal team"
            - name: Your first buyer screen as an analyst
              description: |-
                ## Purpose
                First screens are usually handed over with a sentence and a deadline, and new analysts either return 600 raw rows or panic and stop at 40. Working through one screen end to end, from criteria to cleaned output with a cover note, with checkpoints where you show the associate your progress, builds the confidence to do the next one alone.

                ## Milestones
                1. Criteria confirmed in writing with the associate before running anything.
                2. Raw screen output saved separately from the cleaned list.
                3. A cleaned list in the standard workbook with rationale for the top twenty.
                4. A short cover note explaining sources, filters and what might be missing.

                ## Notes
                Show the associate a half-finished version early. A ten-minute check at 30 percent saves a night of rework at 100 percent.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A completed first screen in the standard workbook with a cover note on sources and gaps, reviewed by the associate at a midway checkpoint."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the screen criteria with the associate in an email"
                - "Save the raw screen output in a separate tab before cleaning"
                - "Show the associate the list at about 30 percent done"
                - "Write a cover note on sources, filters and likely gaps"
            - name: Owning the buyer universe as an associate
              description: |-
                ## Purpose
                As an associate you stop building the list and start owning it: setting criteria, checking analysts' rationales, defending tiers to the VP and keeping the tracker true during the process. Writing down how you will review and run the list on your next mandate makes the role explicit for you and for the analyst.

                ## Milestones
                1. A review checklist for analyst lists covering sources, conflicts, rationales and exclusions.
                2. A division of work with the analyst agreed for the next mandate.
                3. One list reviewed with written feedback to the analyst.
                4. A standing weekly slot to check the live tracker agreed with the VP.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written review checklist and work split for buyer lists, used on one mandate with written feedback given to the analyst."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a review checklist for analyst buyer lists"
                - "Agree with the analyst who owns which columns and tabs"
                - "Review one list and send the analyst written feedback"
                - "Agree a weekly tracker check slot with the VP"
            - name: Buyer strategy calls as a vice president
              description: |-
                ## Purpose
                At VP level, the list becomes a set of judgement calls: which two buyers set the price, whether to talk to a competitor at all, when to bring in reserves, and how to tell the client their favourite is unlikely to bid. Keeping a short record of each call and how it turned out sharpens your judgement across mandates.

                ## Milestones
                1. A decision note format: question, options, choice, reason, outcome.
                2. Notes written for the main buyer universe calls on one mandate.
                3. Outcomes added once the process ended.
                4. Two patterns from the notes shared with the team as guidance.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Decision notes with recorded outcomes for the main buyer universe calls on one mandate, and two patterns shared with the team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set up a decision note format for buyer universe calls"
                - "Write a note each time you make a call on tiers, order or reserves"
                - "Add outcomes to the notes once the process ends"
                - "Share two patterns from your notes at a team meeting"
            - name: Buyer mapping at a boutique without full databases
              description: |-
                ## Purpose
                Smaller advisory firms often have one database licence, no private capital module and no coverage bankers to call, yet clients expect the same depth. Building a method around free filings, sponsor and company websites, trade press, conference attendee lists and partners' contacts lets a small team produce a credible universe.

                ## Milestones
                1. Free and low-cost sources listed with what each is good for.
                2. A partner contact sweep done for the sector.
                3. A method note for building a list without a full database.
                4. One list built using the method and reviewed by a partner.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written low-cost sourcing method, a partner contact sweep and one buyer list built with it and reviewed by a partner."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List free sources such as filings, sponsor websites and trade press"
                - "Ask each partner for sponsors and acquirers they know in the sector"
                - "Sweep sponsor websites and trade press for new deals in the sector @recurring(monthly:15)"
                - "Write a one-page method note for lists built without a full database"
            - name: Buyer mapping for a founder or family-owned seller
              description: |-
                ## Purpose
                A founder or family seller cares about what happens after the deal: whether staff keep their jobs, whether the name survives, whether the family keeps a role. Those preferences change the universe, often favouring family offices, long-hold investors and strategics with a record of keeping acquired brands, and the list should show that.

                ## Milestones
                1. The family's priorities after the deal written down in their words.
                2. Each buyer's record with acquired staff, brands and founders noted from public deals.
                3. Long-hold and family capital buyers given a fair place on the list.
                4. A page for the family explaining how their priorities shaped the list.

                ## Notes
                Families often disagree among themselves. Record whose priorities you heard and check them with the agreed decision maker.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A buyer list annotated with each buyer's post-deal record and a page showing how the family's written priorities shaped it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the family's priorities for after the deal in their words"
                - "Note each buyer's public record with acquired staff and brands"
                - "Add long-hold and family capital buyers that fit the priorities"
                - "Draft a page for the family explaining how the list reflects them"
            - name: Buyer universes in small and regional markets
              description: |-
                ## Purpose
                In a small or regional market, the universe may be a dozen conglomerates, a few regional funds, development finance institutions and some overseas buyers, and everyone knows everyone. Mapping it means judging confidentiality, cross-holdings and family links more carefully than in a large market, and often reaching beyond the region to keep price tension.

                ## Milestones
                1. Regional conglomerates, funds and institutional investors listed with cross-holdings noted.
                2. Development finance and impact investors active in the region identified.
                3. Overseas buyers with regional interest added to keep competition.
                4. Confidentiality risks from close business ties recorded for the client.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A regional buyer universe with cross-holdings, development finance investors, overseas buyers and recorded confidentiality risks."
                cadence: cyclic
              tasks:
                - "List the region's conglomerates, funds and institutions with cross-holdings"
                - "Identify development finance investors active in the region"
                - "Add overseas buyers with a known interest in the region"
                - "Refresh cross-holdings and regional fund activity @recurring(quarterly)"
            - name: Buyer mapping for a distressed or time-critical sale
              description: |-
                ## Purpose
                When a business must sell in weeks, perhaps through a court process or because cash is running out, the universe narrows to buyers who can move fast and accept risk: distressed funds, credit investors, strategics with integration capacity and existing lenders. Mapping for speed and certainty rather than top price changes every column on the list.

                ## Milestones
                1. Speed and certainty added as the leading scoring factors.
                2. Distressed and special situations investors active in the sector listed.
                3. Existing lenders and creditors considered as possible buyers, with the restructuring team.
                4. A short list of buyers able to close within the available time.

                ## Notes
                Distressed sales often run under court or insolvency rules. The restructuring team and counsel set the process; the list must fit inside it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A buyer list scored mainly on speed and certainty, including distressed investors and creditors, agreed with the restructuring team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Reweight the scoring sheet so speed and certainty lead"
                - "List distressed and special situations investors active in the sector"
                - "Discuss with the restructuring team whether lenders could be buyers"
                - "Shortlist buyers who could realistically close in the time available"
            - name: Consortium and co-investment pairings
              description: |-
                ## Purpose
                Some targets are too large or too specialised for any single buyer, and the likeliest winner is a pairing: a sponsor with an industry partner, two family offices, a fund with a sovereign co-investor. Mapping plausible pairings, and the client's view on allowing them, prepares the team for consortium requests rather than reacting to them.

                ## Milestones
                1. Targets where single-buyer capacity is thin identified from the scoring sheet.
                2. Plausible pairings listed from past co-investments between buyers.
                3. The client's position on consortia recorded, with counsel's view on process rules.
                4. Pairings added to the list as a separate group.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of plausible buyer pairings based on past co-investments, with the client's recorded position on consortia."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find buyers whose capacity is too thin to bid alone"
                - "Search past deals for co-investments between buyers on the list"
                - "Record the client's view on consortium bids with counsel's input"
                - "Add plausible pairings to the list as a separate group"
            - name: Sovereign, pension and infrastructure direct investors
              description: |-
                ## Purpose
                Asset-heavy, long-life businesses such as utilities, ports, data centres and towers attract buyers with a low cost of capital and very long holding periods: sovereign funds, large pension plans investing directly and infrastructure funds. Mapping these properly means understanding their mandates, minimum cheque sizes and the governance they expect.

                ## Milestones
                1. Sovereign, pension and infrastructure investors active in the asset class listed.
                2. Each one's stated mandate, region and minimum cheque size noted from public sources.
                3. Investors that usually co-invest or lead identified.
                4. A tier assigned to each in the main workbook.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Long-hold direct investors in the asset class are mapped with mandate, region, minimum cheque and lead or co-invest role, and tiered."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List sovereign, pension and infrastructure investors active in the asset class"
                - "Note each investor's stated mandate, region and minimum cheque"
                - "Mark whether each usually leads or co-invests"
                - "Tier the long-hold investors in the main workbook"
            - name: Proprietary buyer database for your coverage sector
              description: |-
                ## Purpose
                Senior bankers win mandates partly because they can name, from memory, the twenty buyers who matter in their sector and what each wants. A maintained sector database, combining the intelligence log, sponsor tracker, relationship map and past list outcomes, turns that memory into an asset the whole team can use on day one of a mandate.

                ## Milestones
                1. One file combining strategics, sponsors, family offices and long-hold investors for the sector.
                2. Past process outcomes linked for every buyer that has been approached before.
                3. A monthly update routine and an annual full review in place.
                4. The database used to produce a first long list within a day on a live mandate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A sector buyer database with past outcomes linked, updated monthly, and used to produce a long list within a day on a live mandate."
                cadence: rolling
              tasks:
                - "Combine the intelligence log, sponsor tracker and relationship map into one file"
                - "Link past process outcomes to every buyer approached before"
                - "Merge the month's intelligence and outcomes into the database @recurring(monthly:24)"
                - "Run a full review of names, owners and contacts in the database @recurring(yearly)"
---

# Buyer and Investor Universe Mapping

This area is for the bankers who build and own the list of who might buy a business or invest in it: strategic acquirers, financial sponsors, family offices, regional groups, sovereign and pension money, and the investors behind a minority raise or a listing. It starts with foundations (learning from past lists, buyer categories, data sources, a standard workbook, the client brief, conflicts and screening criteria), then the operating routines that keep buyer intelligence current, the skills of judging appetite and capacity, the decisions about breadth, tiers and approach order, the meetings and launch days where the list is used, investor universes, variants for analysts, associates, vice presidents, boutiques and regional markets, and specialist work such as distressed sales, consortium pairings and a proprietary sector database.

What repeats is a weekly rhythm during a live mandate (Monday sector intelligence, a Tuesday tracker update, Thursday feedback capture and a Friday version log), monthly sweeps of acquirer activity, sponsor portfolios and the coverage cross-check on varied days, and quarterly refreshes of dry powder, family office contacts, relationship maps and earnings call notes. The **Risk register**, **Meeting notes** and **Operational checklist** templates pair with the conflicts check, the client sign-off meeting and launch day calls. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
