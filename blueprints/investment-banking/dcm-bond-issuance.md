---
id: investment-banking.dcm-bond-issuance
name: DCM Bond Issuance
description: "A working kit for bond issues in debt capital markets: issuer funding profiles, curves and fair value, documentation, ratings timetables, investor marketing, books and pricing, allocations and clean settlement."
category: business
version: 1.0.0
tags: [investment-banking, dcm-bond-issuance, knowledge-worker, analyst, associate, debt-capital-markets, bonds, syndicate]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - feedback-themes
    - development-plan
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: DCM Bond Issuance
          description: "Working on bond issues in debt capital markets: issuer preparation, ratings, documentation, investor marketing, pricing against the curve and settlement."
          projects:
            - name: DCM vocabulary from one real term sheet
              description: |-
                ## Purpose
                New joiners lose weeks nodding along to talk of IPTs, reoffer spreads, new issue concession and books over three times covered. Taking one recent public term sheet and its announcement messages apart line by line gives you the words that every later call, email and pricing screen assumes you already know.

                ## Milestones
                1. One recent investment grade term sheet and its launch and pricing announcements saved.
                2. Every term on it defined in your own words on a single glossary page.
                3. The path from initial price thoughts to guidance to launch to pricing written as a short worked example.
                4. Five terms you could not define checked with a syndicate colleague.

                ## Notes
                Pick a plain senior unsecured fixed rate deal for this first pass. Callable, hybrid or labelled bonds add terms that are easier to learn once the basics are set.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary covering every term on a real term sheet, with a worked pricing path, checked by a syndicate colleague."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Save the term sheet and announcements from a recent senior bond issue"
                - "Write a definition for every term on the sheet in plain words"
                - "Trace the spread from price thoughts to final pricing as a worked example"
                - "Ask a syndicate colleague to check the five terms you were least sure of"
            - name: Bond issue timeline mapped from three past deals
              description: |-
                ## Purpose
                A debut issue can take three to four months while a frequent issuer can go from mandate to pricing in a morning, and juniors who do not know which kind of deal they are on plan the wrong week. Mapping three past deals of your desk against a calendar shows where the documentation, ratings and marketing time actually went.

                ## Milestones
                1. Three past deals chosen: a debut issuer, a programme drawdown and a multi-tranche trade.
                2. A timeline for each from first issuer meeting to settlement, with dates.
                3. The longest workstream on each deal identified and the reason noted.
                4. A standard week-by-week template for a debut deal saved for reuse.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three dated deal timelines and a reusable debut issue week plan, reviewed with an associate on the desk."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask an associate for three past deals that show different timelines"
                - "Pull the key dates for each from the deal folders and announcements"
                - "Mark the longest workstream on each timeline and why it ran long"
                - "Turn the debut deal timeline into a week-by-week planning template"
            - name: Issuer funding profile and maturity wall page
              description: |-
                ## Purpose
                Every origination conversation starts from the same question: what does this issuer owe, when does it fall due and how has it funded before. A one-page funding profile with the maturity wall chart, outstanding bonds, loans and past issuance lets you open any meeting knowing where the next deal could come from.

                ## Milestones
                1. All outstanding bonds and major loans listed with currency, size, coupon and maturity.
                2. A maturity wall chart by year and currency on one page.
                3. The last five years of issuance summarised by market, tenor and size.
                4. Two or three likely funding needs in the next 18 months noted with their source.

                ## Notes
                Check outstanding amounts against the issuer's latest annual report as well as your data terminal: buybacks and taps often leave the terminal figures out of date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page funding profile for a coverage issuer with a maturity wall, issuance history and noted funding needs, checked against the annual report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the issuer's outstanding debt from your data terminal"
                - "Reconcile the totals with the debt note in the latest annual report"
                - "Build the maturity wall chart by year and currency"
                - "Write down the funding needs you can see in the next 18 months"
                - "Refresh the profile after each set of results @recurring(quarterly)"
            - name: Comparable bonds and secondary curve screen
              description: |-
                ## Purpose
                Pricing a new bond means knowing where the issuer's own bonds and its closest peers trade today, tenor by tenor. A saved screen of comparable bonds with spreads to the right benchmark turns a two-hour scramble before a pricing call into a five-minute refresh.

                ## Milestones
                1. The issuer's own bonds and six to ten peer bonds chosen by rating, sector and currency.
                2. A saved terminal screen or sheet showing yield, spread to benchmark and maturity for each.
                3. A chart of the issuer and peer curves on the same axes.
                4. The reasons for including each peer written in a sentence.

                ## Notes
                Use the benchmark the market prices that currency against, such as mid-swaps for euro bonds or government bonds for dollar issues, and keep it the same across every line.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved comparables screen and curve chart for one issuer, with the reason for each peer recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the issuer's outstanding bonds in the target currency"
                - "Choose six to ten peer bonds by rating, sector and currency"
                - "Save the screen with yield, spread and maturity for each line"
                - "Plot issuer and peer curves on the same chart"
            - name: Who does what on a DCM desk
              description: |-
                ## Purpose
                Origination, syndicate, documentation, credit research, the swaps desk and sales all touch every bond, and knowing who decides what saves you from sending a pricing question to the wrong person at the worst moment. A short map of the desk, with names, answers it once.

                ## Milestones
                1. Each function that touches a bond issue described in two lines.
                2. The person you go to in each function named, with how they prefer to be contacted.
                3. The decisions each function owns written down, such as who sets guidance and who signs off documents.
                4. The map checked with your team lead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map of the functions on a bond issue with named contacts and decision owners, confirmed by your team lead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every function that touched the last deal your desk priced"
                - "Ask a colleague in syndicate which decisions they own on execution day"
                - "Write one line per function on who to call and when"
                - "Share the map with your team lead for corrections"
            - name: Bond documentation map and glossary
              description: |-
                ## Purpose
                Base prospectus, final terms, pricing supplement, trust deed or fiscal agency agreement, subscription agreement, comfort letters and legal opinions all arrive at once on a debut deal. Knowing what each document does, who drafts it and when it is signed lets you track the workstream instead of chasing it.

                ## Milestones
                1. Each standard document on a public bond issue listed with its purpose in a sentence.
                2. The drafter and the signatories of each document noted.
                3. The point in the timeline each document is needed marked on your deal timeline.
                4. The difference between a trustee structure and a fiscal agent structure explained in a paragraph.

                ## Notes
                Read one complete set of final documents from a past deal rather than templates. Lawyers on both sides will explain any clause you ask about, so keep a list.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A documentation map listing every standard bond document with its drafter, signatories and timing, checked by the desk's documentation lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the full set of final documents from one recent closed deal"
                - "List each document with its purpose, drafter and signatories"
                - "Mark when each document is needed on your deal timeline"
                - "Take your open questions to the documentation lead or deal counsel"
            - name: Issuer readiness checklist before a mandate
              description: |-
                ## Purpose
                Mandates slip when the issuer discovers late that its accounts are too old for the comfort letters, its board has not authorised the issue or it has no legal entity identifier. A readiness checklist run in the first meeting finds these gaps while there is still time to fix them.

                ## Milestones
                1. A checklist covering board authority, audited accounts age, ratings status, legal entity identifier, listing venue and existing covenants.
                2. Each item tagged with who on the issuer side owns it.
                3. The checklist run on one live or recent issuer and the gaps listed.
                4. A note of the items that most often delay a deal on your desk.

                ## Notes
                Start from the **Operational checklist** template. Ask deal counsel which items they want confirmed in writing, since the answers often feed the legal opinions.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issuer readiness checklist with owners for each item, run once on a real issuer with the gaps recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the readiness checklist from your last two debut deals"
                - "Ask deal counsel which items they need confirmed in writing"
                - "Run the checklist on one current coverage issuer"
                - "Send the issuer a list of the open items with owners"
            - name: Working party list for a bond issue
              description: |-
                ## Purpose
                Bond issues can involve the issuer's treasury and legal teams, two to six bookrunners, issuer and dealer counsel, auditors, the trustee or fiscal agent, the listing agent and the rating agencies. A clean working party list with roles, phone numbers and time zones is the first document everyone asks for and the one most often out of date.

                ## Milestones
                1. Every party and individual on the deal listed with role, email, phone and time zone.
                2. The list split by who must be on every all-party call and who is copied only.
                3. A version number and date on the list.
                4. The list circulated and corrections folded in within two days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated working party list for a live or recent deal, circulated and corrected, with call attendance marked for each person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect names and roles from the mandate email and the first call"
                - "Add phone numbers, time zones and call attendance for each person"
                - "Circulate version one and ask every firm to correct its own entries"
                - "Update the version number whenever someone joins or leaves"
            - name: Bond maths refresher for pricing calls
              description: |-
                ## Purpose
                On a pricing call nobody waits while you work out the reoffer price from a spread and a coupon. Rebuilding yield, spread, coupon setting, reoffer price and duration by hand in a small sheet means you can check the syndicate desk's numbers and answer an issuer's question on the spot.

                ## Milestones
                1. A sheet that turns a benchmark yield and a spread into a reoffer yield, coupon and price.
                2. The coupon rounding convention of your main markets noted.
                3. Duration and the value of one basis point calculated for a sample bond.
                4. The sheet tested against three real priced deals and matching their published terms.

                ## Notes
                Day count and rounding conventions differ by currency, so check each against a real final terms document rather than memory.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A pricing sheet that reproduces the reoffer price and coupon of three real deals to the published decimal places."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build a sheet from benchmark yield and spread to reoffer yield"
                - "Add coupon rounding and reoffer price for your main currencies"
                - "Test it against three priced deals and fix any mismatch"
                - "Add a line for duration and the value of one basis point"
            - name: Morning new issue calendar and market colour
              description: |-
                ## Purpose
                DCM bankers are expected to know before nine what priced yesterday, who is in the market today and how the books went. A short morning read of the new issue calendar, syndicate wires and market colour, logged in a few lines, keeps that knowledge daily rather than patchy.

                ## Milestones
                1. A fixed list of sources for the morning read saved.
                2. A running log with yesterday's deals, final spreads, concessions and book sizes.
                3. Deals in your coverage sector flagged and shared with the team when relevant.
                4. The log kept for one quarter without gaps of more than a few days.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily new issue log with spreads, concessions and book sizes kept for a full quarter."
                cadence: rolling
              tasks:
                - "Save the sources you will read each morning in one folder"
                - "Log yesterday's priced deals with spread, concession and book size @recurring(daily)"
                - "Flag any deal in your sector to the team before the morning call"
                - "Skim the log for patterns in concessions on the last day of the month @recurring(monthly:28)"
            - name: Monday issuer curve and spread refresh
              description: |-
                ## Purpose
                Spreads move every week, and a fair value page built a month ago can be twenty basis points out by the time the issuer calls. Refreshing the curves of your main coverage issuers each Monday keeps every pitch, update and reverse enquiry answer close to today's market.

                ## Milestones
                1. A list of the coverage issuers whose curves you refresh each week.
                2. A saved sheet or screen per issuer that updates in one step.
                3. Week-on-week spread changes noted for each issuer.
                4. Any move of more than a set number of basis points flagged to the coverage banker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Curve sheets for every listed coverage issuer refreshed weekly, with large moves flagged to the coverage banker the same day."
                cadence: rolling
              tasks:
                - "List the coverage issuers whose curves you will track"
                - "Refresh each issuer's curve and note week-on-week changes @recurring(weekly:mon)"
                - "Flag any large move to the coverage banker with a line of context"
                - "Set the threshold for a large move with your team lead"
            - name: Issuer funding needs tracker
              description: |-
                ## Purpose
                The bank that knows an issuer has a bond maturing in nine months, a cash-hungry acquisition or a loan to refinance is the bank in the room when the mandate is given. A tracker of funding needs across your coverage list, updated monthly, turns scattered meeting notes into an origination pipeline.

                ## Milestones
                1. Every coverage issuer listed with its next maturities and known funding events.
                2. Each likely deal tagged with currency, rough size, timing and confidence.
                3. The source of every entry noted, such as a meeting, a results call or a filing.
                4. The tracker reviewed with the coverage team each month.

                ## Notes
                Write down only what the issuer has told you or published. Guesses about non-public plans do not belong in a shared tracker, and inside information goes through compliance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A funding needs tracker covering every coverage issuer, sourced line by line and reviewed with the team each month."
                cadence: rolling
              tasks:
                - "Set up the tracker with maturities pulled from each funding profile"
                - "Add funding events mentioned in results calls and filings"
                - "Update the tracker before the monthly coverage meeting @recurring(monthly:5)"
                - "Remove or close out deals that priced elsewhere or were cancelled"
            - name: Funding window calendar for the year
              description: |-
                ## Purpose
                Issuers cannot go in blackout before results, the market thins out in August and late December, and central bank meetings and big data releases close windows for a day. A funding window calendar for your coverage list shows when each issuer can realistically print and helps you time the call.

                ## Milestones
                1. Results dates and blackout periods for each coverage issuer added.
                2. Market holidays, central bank meetings and major data releases for your currencies added.
                3. Likely execution windows for each issuer marked for the next two quarters.
                4. The calendar refreshed monthly and shared with the coverage team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A calendar showing blackout periods, market holidays and likely issuance windows for every coverage issuer, refreshed each month."
                cadence: rolling
              tasks:
                - "Add each issuer's next results date and blackout period"
                - "Add market holidays and central bank meetings for your currencies"
                - "Mark likely execution windows for the next two quarters"
                - "Refresh the calendar for newly announced dates @recurring(monthly:12)"
            - name: Thursday swap and basis levels check
              description: |-
                ## Purpose
                Most issuers swap a fixed rate bond to floating or back into their home currency, and cross-currency basis can make one market several basis points cheaper than another. Checking swap and basis levels each week with the derivatives desk keeps your currency comparisons honest.

                ## Milestones
                1. The swap tenors and currency pairs that matter to your issuers listed.
                2. A weekly record of mid-swap levels and cross-currency basis for those pairs.
                3. A one-line note of any change that would shift an issuer's cheapest market.
                4. A named contact on the derivatives desk who checks your levels.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly record of swap and basis levels for your issuers' key currency pairs, with changes to the cheapest market noted."
                cadence: rolling
              tasks:
                - "Agree with the derivatives desk which levels to track"
                - "Record mid-swaps and cross-currency basis for your pairs @recurring(weekly:thu)"
                - "Note any change that would move an issuer's cheapest market"
                - "Ask the derivatives desk to sanity check your sheet once"
            - name: Pricing record for every bond you work on
              description: |-
                ## Purpose
                When an issuer asks how its last deal priced against peers, or a pitch needs a credentials page with concession and book data, the answer should take minutes. A personal record of every bond you work on, with spreads at each stage and the book, becomes the evidence base for every later pricing argument.

                ## Milestones
                1. A record template with IPTs, guidance, final spread, fair value estimate, concession, peak book and final book.
                2. Every deal you have worked on in the last year entered.
                3. Each new deal entered within a week of pricing.
                4. A short note on each deal of what drove the outcome.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pricing record covering every bond you have worked on in the last year, each entered within a week of pricing."
                cadence: rolling
              tasks:
                - "Set up the record with spread at each stage and book sizes"
                - "Back-fill the deals you worked on in the last twelve months"
                - "Enter any deal priced this month and its outcome note @recurring(monthly:20)"
                - "Add your pre-deal fair value estimate beside the final spread"
            - name: Execution checklist kept current
              description: |-
                ## Purpose
                Execution day runs to a script: announcement, books open, guidance, launch, pricing, allocations, final terms. A checklist that is updated after every deal with what nearly went wrong is the difference between a calm morning and a missed announcement in one time zone.

                ## Milestones
                1. A checklist covering every step from the go decision to the pricing announcement.
                2. Each step tagged with the owner on the bank side and the issuer side.
                3. The checklist used on at least one live deal.
                4. Lessons from each deal folded into the next version.

                ## Notes
                Start from the **Operational checklist** template. Put announcement wording approvals and the time zones of each market on the first page, since those are the items most often missed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A versioned execution checklist with owners on every step, used on a live deal and updated after it."
                cadence: rolling
              tasks:
                - "Write the execution checklist from the last deal's email trail"
                - "Tag each step with its bank and issuer owner"
                - "Use it on the next live deal and mark anything that went wrong"
                - "Fold the latest lessons into a new version of the checklist @recurring(quarterly)"
            - name: Investor feedback log across deals
              description: |-
                ## Purpose
                After every roadshow and every book, investors say what they liked, what they wanted more of and what price would have brought them in. Logging that feedback by investor and theme lets you answer the next issuer who asks who will buy its bond and what they will ask.

                ## Milestones
                1. A log with investor type, region, question asked and price sensitivity noted.
                2. Feedback from the last three deals entered.
                3. Recurring themes grouped, such as covenant concerns or tenor preference.
                4. The log used to brief an issuer before its next marketing.

                ## Notes
                Keep the log at the level of what investors chose to tell the bank. Order details are confidential to the deal and stay in the deal records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An investor feedback log covering at least three deals, grouped by theme and used to brief one issuer."
                cadence: rolling
              tasks:
                - "Set up the log with investor type, region, question and price view"
                - "Enter feedback from the last three deals you worked on"
                - "Regroup the feedback into recurring themes @recurring(monthly:16)"
                - "Add new feedback within two days of each roadshow or book"
            - name: Documentation precedent library
              description: |-
                ## Purpose
                Most bond documents are drafted from the last deal, so the speed of a documentation workstream depends on finding the right precedent fast. A library of final documents sorted by structure, currency and governing law means you can send counsel the best starting point on day one.

                ## Milestones
                1. Final documents from past deals stored by issuer type, structure, currency and governing law.
                2. A one-line index entry for each set describing what is unusual about it.
                3. Programme, standalone, labelled and hybrid examples all represented.
                4. Newly closed deals added each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An indexed library of final bond documents covering at least four structures, with new deals added each quarter."
                cadence: rolling
              tasks:
                - "Collect final document sets from your desk's last ten closed deals"
                - "Write a one-line index entry for each set"
                - "Ask counsel for a precedent of any missing structure"
                - "Add the quarter's newly closed deals to the library @recurring(quarterly)"
            - name: Fair value and new issue concession estimate
              description: |-
                ## Purpose
                The core pricing argument in DCM is where the new bond would trade in the secondary market today and how much concession investors need to buy it. Building a fair value estimate from the issuer's curve, peer curves and curve extension, and checking it against where deals land, sharpens the number you bring to the issuer.

                ## Milestones
                1. A method written down for interpolating or extrapolating the issuer's curve to the new tenor.
                2. Adjustments for peers, currency and any structural difference noted with reasons.
                3. A fair value range and expected concession prepared for one live or recent deal.
                4. The estimate compared with the final pricing and the gap explained.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written fair value method applied to one real deal, with the estimate compared against the final spread and the gap explained."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a syndicate banker to walk you through their fair value method"
                - "Apply it to a recent deal using the curve on the day before pricing"
                - "Compare your fair value and concession with the final spread"
                - "Write down which adjustment explained most of the gap"
            - name: Reading an order book through the day
              description: |-
                ## Purpose
                A headline book of five times covered can hide inflated orders that fall away at the first tightening, and a smaller book of real money accounts can be the better outcome for an issuer. Learning to read the book by quality, price limits and investor type lets you advise on guidance with more than the headline number.

                ## Milestones
                1. The categories syndicate uses to judge order quality written down.
                2. One past book studied for drop-off between guidance and final pricing.
                3. Price limits and their effect on the final book explained for that deal.
                4. A short note on what a high quality book looks like for your issuer types.

                ## Notes
                Book data is confidential to the deal. Study books from deals you worked on, inside the bank's systems, and never copy order detail into personal files.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on order book quality based on one past deal, covering drop-off, price limits and investor mix, reviewed by syndicate."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask syndicate how they rank order quality on a typical book"
                - "Study the book of a past deal from guidance to final pricing"
                - "Note how price limits changed the final book size"
                - "Write a short note on what a good book looks like for your issuers"
            - name: Allocation principles and investor tiering
              description: |-
                ## Purpose
                Allocations decide who supports an issuer next time, and issuers increasingly ask to see the principles behind them. Learning how your bank tiers investors, how it records allocation decisions and what the issuer is told means you can explain an allocation without being caught out.

                ## Milestones
                1. The bank's allocation policy read and summarised in a page.
                2. The investor tiers your desk uses described with their criteria.
                3. One past allocation reviewed against the policy with a senior banker.
                4. The record that has to be kept for each allocation decision understood.

                ## Notes
                Allocation rules are set by regulators and by your bank's policy, and differ by market. Follow the written policy and ask compliance about anything unclear.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the bank's allocation policy and investor tiers, checked against one real allocation with a senior banker."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the bank's allocation policy and summarise it in a page"
                - "Ask syndicate how investor tiers are set and reviewed"
                - "Review one past allocation against the policy with a senior banker"
                - "Note the records that must be kept for every allocation"
            - name: Terms package for an investment grade bond
              description: |-
                ## Purpose
                Investment grade investors expect a standard set of terms: negative pledge, change of control, events of default, make-whole and par calls, and the issuer's lawyers will push back on any that are new. Knowing the usual package for your market and where issuers differ lets you settle the term sheet before it reaches counsel.

                ## Milestones
                1. The standard terms for senior unsecured bonds in your main market listed with a line on each.
                2. Three recent deals compared to see where their terms differ.
                3. The terms that investors pushed back on in recent feedback noted.
                4. A draft term sheet for one issuer prepared and checked with counsel.

                ## Notes
                Terms are a legal matter and the final wording belongs to counsel. Your job is to know the market standard and spot what is unusual.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of standard investment grade terms with a comparison of three deals and one draft term sheet checked by counsel."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the standard senior unsecured terms in your main market"
                - "Compare the terms of three recent deals in one table"
                - "Draft a term sheet for one coverage issuer"
                - "Send the draft to deal counsel and log their comments"
            - name: Credit story for the investor presentation
              description: |-
                ## Purpose
                Bond investors care less about upside than about how the issuer pays them back: cash flow, debt metrics, financial policy and what management will do if things go wrong. Writing the credit story in a page before the roadshow deck is built keeps every slide pointed at the questions credit investors actually ask.

                ## Milestones
                1. A one-page credit story with four or five points, each backed by a number.
                2. The issuer's stated financial policy and debt targets quoted from public sources.
                3. The likely weak points in the credit listed with a planned answer for each.
                4. The story agreed with the issuer's treasury team before deck drafting starts.

                ## Notes
                A credit story is not an equity story. Growth matters only as far as it supports cash flow and debt reduction, so cut anything that reads like a sales pitch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page credit story with numbered points, financial policy and planned answers to weak points, agreed with the issuer before the deck is drafted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull the issuer's stated financial policy and debt targets"
                - "Draft four or five credit points, each backed by a number"
                - "List the weak points and a planned answer for each"
                - "Ask the agent to turn the credit points into a first slide outline"
            - name: Rating agency timetable inside the issue plan
              description: |-
                ## Purpose
                Debut issuers that need a new rating, and frequent issuers whose deal needs a rating on the new bond, can see the whole timetable hang on the agencies. Building the agency steps into the issue plan, from the request to the published rating, stops the bond waiting on a report nobody chased.

                ## Milestones
                1. The rating steps for this issue listed: request, materials, meeting, committee and publication.
                2. Each step dated on the deal timeline with an owner.
                3. The point where documents must be final for the agency marked.
                4. A fallback noted if the rating is not published by the planned launch date.

                ## Notes
                This is the issuance timetable only. Strategy on the rating itself, methodology and metric targets belong with the bank's ratings advisory team.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated rating workstream inside the issue timeline, with owners and a fallback, agreed with the issuer and the ratings advisory team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the issuer which agencies will rate the new bond"
                - "Agree the agency steps and lead times with the ratings advisory team"
                - "Date each step on the deal timeline with an owner"
                - "Write a fallback if the rating is late for launch"
            - name: Prospectus drafting sessions and due diligence calls
              description: |-
                ## Purpose
                On a debut issue or a new programme, the prospectus is written in drafting sessions and checked through business and auditor due diligence calls that the bookrunners rely on for their own defence. Running those sessions well, with a question list sent in advance and clean notes, protects the bank and keeps the timetable.

                ## Milestones
                1. A drafting session schedule agreed with counsel and the issuer.
                2. A due diligence question list sent before the business call.
                3. Notes of each session kept with open points and owners.
                4. Every open point closed or recorded before the documents are signed off.

                ## Notes
                Start from the **Meeting notes** template for each session. Due diligence notes can matter later, so keep them factual and let counsel advise on what is recorded.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Drafting session and due diligence notes for one issue, with every open point closed or recorded before sign-off."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the drafting session schedule with counsel and the issuer"
                - "Send the due diligence question list before the business call"
                - "Write up each session with open points and owners"
                - "Confirm every open point is closed before document sign-off"
            - name: Choosing the currency and market for an issue
              description: |-
                ## Purpose
                The same issuer can often raise money in euros, dollars, sterling or its home currency, and the cheapest market after swapping is not always the best one once investor depth, documentation and future access are counted. A side-by-side comparison gives the issuer a recommendation it can follow and defend to its board.

                ## Milestones
                1. Three candidate markets compared on all-in cost after swaps.
                2. Investor depth, likely size and tenor available in each market noted.
                3. Documentation and listing needs for each market listed.
                4. A recommendation with reasons agreed by the deal team and presented to the issuer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of three markets on swapped cost, investor depth and documentation, with a recommendation the issuer has accepted or challenged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick three candidate markets for the issuer"
                - "Compare all-in cost after swaps using the derivatives desk's levels"
                - "Note investor depth, size and tenor available in each market"
                - "Write the recommendation and the main reason against each alternative"
            - name: Tenor choice against the maturity profile
              description: |-
                ## Purpose
                Issuers want the longest money they can get at a sensible cost, but a tenor that lands next to an existing maturity creates a refinancing cliff. Testing candidate tenors against the maturity wall and the curve's shape lets you recommend a tenor that fills a gap rather than adding to a pile.

                ## Milestones
                1. Three or four candidate tenors placed on the issuer's maturity wall.
                2. The spread cost of each extra year of tenor estimated from the curve.
                3. Investor demand by tenor noted from recent comparable deals.
                4. A recommended tenor with its reasoning on one page.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page tenor recommendation showing candidate tenors against the maturity wall, curve cost and recent demand."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Place each candidate tenor on the issuer's maturity wall"
                - "Estimate the spread cost of each extra year from the curve"
                - "Check demand by tenor on recent comparable deals"
                - "Write a one-page recommendation for the issuer call"
            - name: New benchmark or tap of an existing line
              description: |-
                ## Purpose
                Tapping an existing bond can be quicker and cheaper than a new line, but it adds to one maturity, can trade at a price far from par and may not count as a benchmark size for index inclusion. Comparing the two for one issuer shows when a tap is the better answer.

                ## Milestones
                1. The issuer's existing lines checked for size, price and tap capacity.
                2. The cost of a tap compared with a new line at the same tenor.
                3. Index inclusion and liquidity effects of each option noted.
                4. A recommendation recorded with the deciding factor.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of a tap and a new line for one issuer, with the deciding factor recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the issuer's lines that could be tapped and their prices"
                - "Estimate the cost of a tap against a new line at the same tenor"
                - "Check index size thresholds that apply to each option"
                - "Record the recommendation and what decided it"
            - name: Public bond or private placement comparison
              description: |-
                ## Purpose
                Smaller or unrated issuers often get better terms, or simply a deal done, in a private placement or a Schuldschein than in a public bond. Laying out size, cost, covenants, disclosure, speed and investor base for each route gives an issuer a fair choice rather than the one the desk happens to sell.

                ## Milestones
                1. Public bond, private placement and any regional alternative described in a line each.
                2. Each route compared on size, tenor, cost, covenants, disclosure and timetable.
                3. The issuer's own constraints, such as rating and reporting, set against each route.
                4. A recommendation with the main trade-off spelled out.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of at least two funding routes on six criteria, with a recommendation for one named issuer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the funding routes open to this issuer"
                - "Compare each on size, tenor, cost, covenants, disclosure and timetable"
                - "Check the issuer's rating and reporting limits against each route"
                - "Write the recommendation with the main trade-off in one paragraph"
            - name: Debt issuance programme or standalone deal
              description: |-
                ## Purpose
                Frequent issuers save weeks on every deal with a medium term note programme, but the set-up costs time and money and the annual update never stops. Comparing a programme with standalone deals against the issuer's expected issuance over three years gives a clear answer.

                ## Milestones
                1. The issuer's expected number of deals over three years estimated.
                2. Set-up and annual costs of a programme listed with counsel's input.
                3. Time saved per drawdown compared with a standalone deal.
                4. A decision recorded with the issuance level at which a programme pays off.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-year comparison of programme and standalone costs and timing for one issuer, with a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate the issuer's deal count over the next three years"
                - "Ask counsel for programme set-up and update cost ranges"
                - "Compare drawdown time with a standalone deal timetable"
                - "Record the decision and the break-even deal count"
            - name: Fixed, floating or callable structure choice
              description: |-
                ## Purpose
                Whether a bond pays a fixed coupon, floats over a reference rate or carries an issuer call changes who buys it, what it costs and how it fits the issuer's interest rate policy. Laying out the options against the treasury's hedging policy keeps the structure question from being settled by habit.

                ## Milestones
                1. The issuer's interest rate and hedging policy summarised from public or provided material.
                2. Fixed, floating and callable options priced against each other for the planned tenor.
                3. Investor demand for each structure noted from recent deals.
                4. A recommended structure agreed with the issuer's treasury team.

                ## Notes
                Hedging is the issuer's decision under its own policy. Bring the derivatives desk in for any swap pricing and keep the bank's role to explaining options.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of fixed, floating and callable options priced for one tenor, with a structure agreed with the issuer's treasury."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the issuer's interest rate and hedging policy"
                - "Price fixed, floating and callable options for the planned tenor"
                - "Check recent demand for each structure"
                - "Agree the structure with the issuer's treasury team"
            - name: Answering an issuer's bookrunner request for proposal
              description: |-
                ## Purpose
                Frequent issuers pick bookrunners through a formal request covering pricing views, distribution, past performance, fees and research. A sharp response that answers every question in order, with real pricing data from your record, wins more mandates than a glossy deck that dodges the hard ones.

                ## Milestones
                1. Every question in the request listed with an owner on the bank side.
                2. A pricing view and fair value page built from current curves.
                3. Credentials and distribution data drawn from verified deal records.
                4. The response sent on time with a cover note from the senior banker.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A response that answers every question in an issuer's request, with verified pricing and credentials data, sent before the deadline."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every question in the request with a bank-side owner"
                - "Build the pricing view from this week's curves"
                - "Pull credentials and distribution figures from verified records"
                - "Send the response with the senior banker's cover note"
            - name: Investor targeting list for a new credit
              description: |-
                ## Purpose
                Debut and unusual credits need a book built from investors who can buy it: the right rating limits, currency, tenor and sector appetite. A targeting list prepared with sales before the roadshow decides which meetings are worth flying to.

                ## Milestones
                1. Target investors listed by type and region with sales input.
                2. Each tagged with likely constraints, such as rating floor or tenor limit.
                3. A first and second priority group agreed for meetings.
                4. The list matched against the roadshow schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An investor targeting list with constraints and priority groups agreed with sales and matched to the roadshow plan."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask sales for investors who bought comparable credits"
                - "Tag each investor with rating, currency and tenor limits"
                - "Split the list into first and second priority groups"
                - "Match the first group against the proposed roadshow cities"
            - name: Debut bond issue from mandate to settlement
              description: |-
                ## Purpose
                A first-time issuer needs everything at once: documents, ratings, an investor presentation, a listing and an audience that has never seen the name. Running one debut from mandate to settlement as a single dated plan is the clearest way to learn every workstream and the one that most often goes wrong.

                ## Milestones
                1. A dated plan for documentation, ratings, marketing, listing and execution agreed with the issuer.
                2. Documents signed off and ratings published before launch.
                3. The roadshow completed and investor feedback summarised.
                4. The bond priced, allocated and settled on the planned date.
                5. A post-deal note of what you would do differently.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One debut bond priced and settled on its planned date, with a dated plan and a written post-deal note."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Draft the dated plan from your debut timeline template"
                - "Review open workstreams on the all-party call @recurring(weekly:wed)"
                - "Confirm documents and ratings are final before launch"
                - "Write the post-deal note within a week of settlement"
            - name: Roadshow and global investor call
              description: |-
                ## Purpose
                For a new or infrequent issuer, the roadshow is where investors decide whether they will put in an order at all. A well organised schedule of group meetings, one-on-ones and a recorded global investor call, with feedback captured after each, turns marketing days into a book.

                ## Milestones
                1. A schedule of cities, meetings and a global investor call agreed with the issuer.
                2. The investor presentation signed off by the issuer and counsel.
                3. Feedback from each meeting logged the same day.
                4. A summary of feedback and indicative demand sent to the issuer before the go decision.

                ## Notes
                Check with counsel what can be said and shown in each market, since roadshow rules differ by jurisdiction and investor type.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed roadshow with feedback logged after every meeting and a summary sent to the issuer before the go decision."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the city schedule and global investor call slot with the issuer"
                - "Get the presentation signed off by the issuer and counsel"
                - "Log investor feedback on the evening of each roadshow day"
                - "Send the issuer a feedback summary before the go decision"
            - name: Execution day from announcement to pricing
              description: |-
                ## Purpose
                On execution day the issuer, syndicate and counsel make a dozen decisions in a few hours: whether to go, initial price thoughts, guidance, size and final spread. Preparing a run sheet and the decision points in advance means the issuer is never asked to decide something cold.

                ## Milestones
                1. A run sheet with timings, owners and announcement wording approved the day before.
                2. The issuer briefed on the decisions it will be asked to make and the data behind each.
                3. Each update and decision logged with the time it was made.
                4. Pricing announced and final terms circulated without errors.

                ## Notes
                Agree in advance who on the issuer side can approve guidance and pricing, and their mobile numbers. The most common delay is waiting for the one person who can say yes.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A run sheet prepared and used on a live execution day, with every decision time-stamped and final terms circulated cleanly."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the run sheet with timings and owners"
                - "Get announcement wording approved by the issuer and counsel the day before"
                - "Brief the issuer on each decision point and the data behind it"
                - "Log every update and decision with the time on the day"
            - name: Settlement, listing and closing day
              description: |-
                ## Purpose
                Between pricing and settlement the final terms, closing documents, clearing system set-up, listing and funds flow all have to line up, often within five business days. A closing checklist run with the agents and counsel stops a bond from failing to settle over a missing signature or a wrong account.

                ## Milestones
                1. Final terms or pricing supplement signed and filed.
                2. Security codes, clearing and paying agent set-up confirmed.
                3. Listing application submitted and approval received.
                4. Closing documents signed and the funds flow confirmed on the settlement date.

                ## Notes
                Ask the paying agent and counsel for their own closing checklists and reconcile them against yours on day one after pricing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A bond settled on the scheduled date with final terms filed, listing approved and the closing checklist fully signed off."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Reconcile your closing checklist with the agent's and counsel's lists"
                - "Confirm security codes and clearing set-up with the paying agent"
                - "Chase the listing approval and closing signatures"
                - "Confirm the funds flow and settlement with the issuer's treasury"
            - name: Annual programme update
              description: |-
                ## Purpose
                Medium term note programmes have to be updated every year for new accounts, risk factors and regulatory changes, and a lapsed programme shuts an issuer out of the market just when a window opens. Running the update to a fixed timetable each year keeps the issuer ready to print.

                ## Milestones
                1. The update timetable agreed with the issuer and counsel, tied to the audited accounts.
                2. Changes from the past year listed for counsel, such as new risk factors or dealers.
                3. Updated documents approved and published.
                4. The next year's update date set in the calendar.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A programme updated and published to its timetable, with the following year's update date recorded."
                cadence: cyclic
                effort_hours_estimate: "15"
              tasks:
                - "Agree the update timetable with the issuer and counsel"
                - "List the year's changes for counsel to draft from"
                - "Track the approval and publication of the updated documents"
                - "Check each programme issuer's update date is in the calendar @recurring(yearly)"
            - name: Post-deal debrief with issuer and syndicate
              description: |-
                ## Purpose
                Within a week of pricing, the issuer wants to know how the bond performed, who bought it and what could have gone better. A short debrief, with secondary performance, distribution statistics and the team's honest lessons, is what wins the next mandate.

                ## Milestones
                1. Secondary performance since pricing charted against peers.
                2. Distribution by investor type and region summarised within what can be shared.
                3. Three lessons from the deal agreed with the deal team.
                4. The debrief delivered to the issuer and filed.

                ## Notes
                Start from the **Feedback themes** template to group the lessons. Keep distribution data to the categories your bank shares with issuers.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A debrief with secondary performance, distribution summary and three lessons delivered to the issuer within two weeks of pricing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Chart the bond's secondary spread against peers since pricing"
                - "Summarise distribution by investor type and region"
                - "Agree three lessons with the deal team"
                - "Deliver the debrief to the issuer and file a copy"
            - name: First month on a DCM desk
              description: |-
                ## Purpose
                Juniors arriving on a DCM desk from training or another group often find the pace odd: long quiet stretches, then a deal priced in four hours. A planned first month, with the morning routine, the core screens and one shadowed deal, gets you useful before the next busy window.

                ## Milestones
                1. The morning read and curve refresh running from week one.
                2. Core terminal screens and desk templates saved.
                3. One live deal shadowed from mandate to pricing.
                4. A 30-day check-in held with your team lead and next goals written down.

                ## Notes
                Start from the **Development plan** template. Ask early which issuers you will cover, since the curves and funding profiles you build first should be theirs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 30-day check-in held with your team lead covering one shadowed deal, saved screens and written goals for the next quarter."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your team lead which issuers you will cover first"
                - "Save the desk's core terminal screens and templates"
                - "Ask to shadow the next live deal from mandate to pricing"
                - "Book a 30-day check-in with your team lead"
            - name: Owning the documentation workstream as an associate
              description: |-
                ## Purpose
                Associates on a DCM deal usually own the documents: tracking turns between counsel, checking that numbers match the accounts and getting sign-offs before launch. A clear tracker and a weekly call with counsel keep the workstream from becoming the reason a window is missed.

                ## Milestones
                1. A document tracker listing each document, the latest turn, the holder and open points.
                2. A weekly documentation call held with issuer and dealer counsel.
                3. Financial figures in the prospectus checked against the accounts.
                4. All documents signed off before launch with no late surprises.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A documentation tracker kept for one deal, with weekly counsel calls and every document signed off before launch."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Set up a tracker with every document, latest turn and holder"
                - "Hold the documentation call with both sets of counsel @recurring(weekly:tue)"
                - "Check prospectus figures against the audited accounts"
                - "Confirm sign-off on every document before the go decision"
            - name: Covering issuers as a vice president
              description: |-
                ## Purpose
                Vice presidents in DCM move from running deals to owning issuer relationships: knowing every treasurer on the coverage list, bringing ideas before the competition does and leading the pricing argument. A coverage plan with a contact rhythm and a few ideas per issuer makes that shift deliberate.

                ## Milestones
                1. Each coverage issuer listed with the treasurer, contact frequency and last meeting.
                2. One funding idea per priority issuer written up each quarter.
                3. Wins and losses of mandates recorded with the reason given.
                4. A review with the head of origination twice a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A coverage plan with contact frequency for every issuer, a quarterly idea per priority issuer and mandate results recorded."
                cadence: rolling
              tasks:
                - "List your coverage issuers with treasurer contacts and last meeting dates"
                - "Check contact dates against the coverage plan @recurring(monthly:24)"
                - "Write one funding idea for each priority issuer @recurring(quarterly)"
                - "Record each mandate won or lost with the reason given"
                - "Book a coverage review with the head of origination"
            - name: DCM at a regional or emerging market bank
              description: |-
                ## Purpose
                At a regional bank the DCM team may be three people covering origination, documentation and distribution for local currency bonds, corporate notes and the occasional international issue. Mapping the local market's rules, investors and exchange process gives you a working base that the big-bank manuals do not cover.

                ## Milestones
                1. The local securities regulator's and exchange's rules for bond issues summarised.
                2. The main local investors listed, such as pension funds, insurers and banks.
                3. A local issue timeline built from two recent deals.
                4. The differences from international issuance noted for issuers who may do both.

                ## Notes
                Check every regulatory point against the regulator's and exchange's current published rules rather than past deals, since local rules change often.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of local bond rules, investors and a dated local issue timeline, checked against current published rules."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Download the current bond issue rules from the regulator and exchange"
                - "List the main local institutional investors by type"
                - "Build a local timeline from two recent deals"
                - "Note where international issuance would differ for the same issuer"
            - name: Keeping weekends between deal windows
              description: |-
                ## Purpose
                DCM hours come in waves around results, the September and January rushes and individual windows, and the quiet weeks are when you recover. Planning protected time around the funding window calendar, and telling the team in advance, keeps you rested for the weeks that matter.

                ## Milestones
                1. Quiet periods for your coverage list identified from the funding window calendar.
                2. Protected days or weekends chosen and shared with your team lead.
                3. Cover agreed with a colleague for each protected period.
                4. One quarter reviewed for how many protected days held.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Protected days planned around the funding calendar for a quarter, with cover agreed and the number kept recorded."
                cadence: rolling
              tasks:
                - "Find the quiet weeks in your funding window calendar"
                - "Choose protected days for the coming month and tell your team lead @recurring(monthly:26)"
                - "Agree cover with a colleague for each protected period"
                - "Count how many protected days held at the end of each quarter @recurring(quarterly)"
            - name: Green, social and sustainability-linked bond framework
              description: |-
                ## Purpose
                Labelled bonds need a framework the market recognises, a second party opinion and reporting that runs for the life of the bond. Helping an issuer build the framework, line up the reviewer and plan the allocation and impact reports avoids a labelled deal that investors challenge later.

                ## Milestones
                1. The relevant market principles for the label chosen read and summarised.
                2. Eligible project categories or key performance indicators agreed with the issuer.
                3. A second party opinion provider appointed and the opinion received.
                4. An allocation and impact reporting plan with dates agreed.
                5. The framework published before the deal is announced.

                ## Notes
                Claims about environmental or social impact carry legal and reputational risk. Keep language to what the framework and the reviewer support, and let counsel review marketing material.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A published framework with a second party opinion and an agreed reporting plan, in place before a labelled bond is announced."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Summarise the market principles for the label the issuer wants"
                - "Agree eligible categories or targets with the issuer's sustainability team"
                - "Compare second party opinion providers on timing and cost"
                - "Set dates for the first allocation and impact reports"
            - name: Sovereign, supranational and agency issuance
              description: |-
                ## Purpose
                Sovereigns, supranationals and agencies run annual funding programmes with published targets, regular benchmarks and investors such as central banks and official institutions. Learning how their funding plans, syndicate practices and pricing references differ from corporates lets you contribute to these deals from the first call.

                ## Milestones
                1. Two published annual funding plans read and summarised.
                2. The pricing references and investor types for these issuers listed.
                3. One recent syndicated benchmark studied from announcement to allocation.
                4. The main differences from corporate issuance written up in a page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note comparing sovereign and agency issuance with corporate issuance, based on two funding plans and one real benchmark."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read two published annual funding plans and summarise them"
                - "List the pricing references used for these issuers"
                - "Study one recent syndicated benchmark from start to allocation"
                - "Write a one-page note on how this differs from corporate deals"
            - name: Debut emerging market Eurobond
              description: |-
                ## Purpose
                First international bonds from emerging market sovereigns or corporates bring country risk, sanctions and know-your-customer checks, a new investor base and often a rating below investment grade. Planning the extra workstreams up front avoids the classic delay of a deal ready to launch with diligence still open.

                ## Milestones
                1. Country, sanctions and know-your-customer reviews scheduled with compliance.
                2. Disclosure on economic, political and legal risks drafted with counsel.
                3. Emerging market investors targeted by region with sales.
                4. A launch plan that allows for market volatility and a fallback window.

                ## Notes
                Country risk and sanctions questions are for compliance and counsel. Start them at mandate, since they are the item most likely to hold a launch.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A debut emerging market bond launched with country, sanctions and know-your-customer reviews closed and a fallback window agreed in advance."
                cadence: phased
                effort_hours_estimate: "100"
              tasks:
                - "Book the country, sanctions and know-your-customer reviews with compliance"
                - "Agree the country risk disclosure plan with counsel"
                - "Ask sales for emerging market investors by region"
                - "Write a launch plan with a primary and a fallback window"
            - name: Hybrid and subordinated capital bonds
              description: |-
                ## Purpose
                Corporate hybrids and bank capital instruments sit between debt and equity, so their terms, rating agency treatment and regulatory or accounting treatment decide whether the issuer gets what it wants from them. Learning how these structures work, and who has to sign off each feature, prepares you for some of the most complex deals on the desk.

                ## Milestones
                1. The main hybrid and subordinated structures in your market described in a page.
                2. Rating agency and regulatory treatment questions listed for each structure.
                3. Two recent deals compared on call dates, coupon reset and deferral terms.
                4. A checklist of the specialists who must review a hybrid deal.

                ## Notes
                Rating, regulatory and accounting treatment are for the agencies, regulators, auditors and counsel to confirm. The banker's job is to bring the right people in early.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to hybrid and subordinated structures with a two-deal comparison and a specialist review checklist."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the hybrid and subordinated structures in your market"
                - "Compare two recent deals on call, reset and deferral terms"
                - "List the treatment questions for each structure"
                - "Write the specialist review checklist for hybrid deals"
            - name: Multi-tranche and multi-currency trade structuring
              description: |-
                ## Purpose
                Large issuers often print several tenors or currencies on the same day to raise more money at a lower average cost and reach more investors. Structuring a multi-tranche trade means sizing each tranche, setting guidance across them and deciding when to drop or upsize one as books build.

                ## Milestones
                1. The rationale for each tranche written down with its target investors.
                2. Indicative size ranges and fair value for every tranche prepared.
                3. Rules agreed with the issuer in advance for upsizing or dropping a tranche.
                4. The final outcome compared with the plan and lessons noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tranche plan with sizes, fair values and pre-agreed upsizing rules, compared with the final outcome after pricing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the rationale and target investors for each tranche"
                - "Prepare size ranges and fair value for every tranche"
                - "Agree upsizing and drop rules with the issuer before launch"
                - "Compare the final outcome with the plan after pricing"
            - name: Bond issuance teach-in for new juniors
              description: |-
                ## Purpose
                Every year new analysts and interns join the desk with no feel for how a bond goes from mandate to settlement. A short teach-in built from your own pricing record and checklists passes on what you learned and sharpens your own understanding of the process.

                ## Milestones
                1. A one-hour session covering the timeline, pricing, books and settlement.
                2. One real past deal used as the worked example.
                3. Handouts drawn from your glossary, checklist and pricing record.
                4. Feedback collected and the session updated for the next intake.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-hour teach-in delivered to new juniors with a real worked example and feedback recorded for the next intake."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Choose one past deal to use as the worked example"
                - "Build slides from your glossary, checklist and pricing record"
                - "Book the session with the new intake and their team leads"
                - "Collect feedback and update the session for next year"
---

# DCM Bond Issuance

Debt capital markets work is a cycle of knowing your issuers' funding needs, spotting the window, getting the documents and ratings ready, marketing the credit and pricing a bond against the curve on a single morning. This area starts with foundations (the vocabulary, the deal timeline, issuer funding profiles, comparable curves and the working party), then the daily and weekly machinery of a DCM desk, the pricing, book reading and documentation skills, the structuring decisions an issuer has to make, the issue itself from mandate to settlement, variants for analysts, associates, vice presidents and regional bankers, and specialist work such as labelled bonds, sovereign and hybrid issues.

What repeats is the morning read of the new issue calendar, a Monday curve refresh and a Thursday swap levels check, with monthly updates to issuer funding needs, the funding window calendar and the pricing record, plus quarterly upkeep of the precedent library and the execution checklist. The **Operational checklist**, **Meeting notes**, **Feedback themes** and **Development plan** templates pair with execution day, the drafting sessions, the post-deal debrief and the move onto the desk. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
