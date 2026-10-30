---
id: private-equity-vc.pe-deal-sourcing
name: PE Deal Sourcing
description: "A written buy box, a tiered map of intermediaries, steady owner outreach, conference plans and a channel scorecard, so buyout opportunities arrive from sources you can name and measure."
category: business
version: 1.0.0
tags: [private-equity-vc, pe-deal-sourcing, knowledge-worker, founder, origination, intermediaries, proprietary-outreach, buyouts]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - vendor
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: PE Deal Sourcing
          description: "Building a flow of buyout opportunities: intermediary coverage, proprietary outreach to owners, industry conferences, a sourcing CRM and tracking which channels produce deals."
          projects:
            - name: One-page buy box for intermediaries
              description: |-
                ## Purpose
                Brokers and boutique advisers send deals to the buyers they can describe in one sentence, and a vague mandate gets you every teaser or none. A single page stating revenue and EBITDA range, sectors, geographies, ownership situations and cheque size gives every source the same clear picture and cuts the noise in your inbox within weeks.

                ## Milestones
                1. An EBITDA and revenue range agreed with your partners or capital providers.
                2. Three to six target sectors and the situations you like (founder succession, carve-out, recapitalisation) written down.
                3. A list of what you will not look at, stated as plainly as what you will.
                4. A one-page PDF buy box approved and saved where everyone on the team can send it.

                ## Notes
                Keep the ranges honest. Stretching the box to look busy teaches intermediaries to send you deals you will decline, and they remember the declines.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page buy box with size ranges, sectors, situations and exclusions is approved and has been sent to at least five intermediaries."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the EBITDA range your capital can genuinely support"
                - "List the sectors and ownership situations you would act on this year"
                - "Draft the exclusions list and agree it with your partners"
                - "Lay out the buy box on one page with contact details"
                - "Send the buy box to your five most active intermediaries"
            - name: Audit of where past deals came from
              description: |-
                ## Purpose
                Few firms can say which channels produced their last ten closed deals, so sourcing budgets follow habit rather than evidence. Reconstructing the origin of every deal seen, bid and closed over the last two or three years shows which banks, brokers and outreach efforts actually earned their time.

                ## Milestones
                1. Every deal reviewed in the period listed with its first point of contact.
                2. Each deal tagged by channel: intermediary, proprietary, network referral, inbound or other.
                3. Conversion counted from seen to bid to closed for each channel.
                4. A one-page summary of the findings shared with the partners.

                ## Notes
                Use only your own records or the firm's internal ones you are allowed to analyse, and keep target names out of any copy that leaves the firm.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of all deals from the last two or more years, each tagged by source channel, with seen, bid and closed counts per channel."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the list of deals reviewed in the last two to three years"
                - "Find the first email or call for each deal and note who sent it"
                - "Tag each deal by channel and stage reached"
                - "Count conversion rates by channel in a simple table"
                - "Present the summary at the next partners meeting"
            - name: Source tagging scheme for every opportunity
              description: |-
                ## Purpose
                Channel analysis is only as good as the field that records where a deal came from, and free-text entries such as via John or banker make it useless. A short, fixed list of source types and named sources, applied at the moment a deal is logged, makes every later scorecard possible.

                ## Milestones
                1. A fixed list of six to ten source types agreed, each with a one-line definition.
                2. A rule for deals with two sources, such as first touch wins.
                3. The tags set up as required fields in whatever system logs new deals.
                4. Historic deals from the audit re-tagged to the new scheme.

                ## Notes
                Decide first touch versus most influential touch once and write it down. Switching later breaks every comparison.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new opportunity logged after a set date carries a source type and named source from a fixed list."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft six to ten source types with one-line definitions"
                - "Agree the rule for deals that arrive through two sources"
                - "Make source type and named source required fields for new deals"
                - "Re-tag the deals from your source audit to the new list"
            - name: Map of the intermediary universe in your market
              description: |-
                ## Purpose
                In the lower and middle market, most deals still pass through a few hundred boutique M&A advisers, business brokers, accountants and lawyers, and most firms know only a fraction of them. Building a complete map for your sectors and geographies shows who you have never met and where competitors are getting their first looks.

                ## Milestones
                1. A list of sell-side advisers active in your size range and region, with recent mandates noted.
                2. Business brokers, accounting firms with transaction teams and corporate lawyers added.
                3. Each firm marked as known, met once or unknown to you.
                4. The fifty most relevant unknown firms flagged for first contact.

                ## Notes
                Recent deal announcements and adviser league tables for small deals are the fastest way to see who is actually running processes, not just who has a website.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of at least 150 intermediary firms in your market, each marked by relationship status, with fifty flagged for first contact."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull a year of deal announcements in your size range and note the sell-side adviser"
                - "Add business brokers and accounting transaction teams in your region"
                - "Mark each firm as known, met once or unknown"
                - "Flag the fifty most relevant unknown firms for first contact"
                - "Ask the agent to group the list by city so visits can be batched"
            - name: Tiered coverage list for intermediaries
              description: |-
                ## Purpose
                Calling every banker monthly is impossible and calling none is fatal, so coverage needs tiers. Sorting intermediaries into A, B and C by deal relevance and past flow, each with a contact frequency and an owner on your team, turns a long list into a call plan you can keep.

                ## Milestones
                1. Every mapped intermediary placed in tier A, B or C with a one-line reason.
                2. A contact frequency set for each tier, such as monthly, quarterly and twice a year.
                3. A named owner on your team for each A and B relationship.
                4. The tiering reviewed and adjusted at the end of each quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each intermediary in the map has a tier, a contact frequency and an owner, and the tiers have been reviewed at least once a quarter."
                cadence: rolling
              tasks:
                - "Place each mapped intermediary in tier A, B or C"
                - "Set a contact frequency for each tier and write it at the top of the list"
                - "Assign an owner to every A and B relationship"
                - "Re-tier intermediaries using last quarter's deal flow @recurring(quarterly)"
            - name: Buyer profile and tombstone sheet
              description: |-
                ## Purpose
                When an adviser builds a buyer list for a client, the firms that make the cut are the ones with a crisp profile on file. A two-page sheet with your strategy, completed deals you are allowed to show, decision speed and what you offer owners puts you on more buyer lists and gives intermediaries words to use when they pitch you to a seller.

                ## Milestones
                1. A short statement of strategy and what makes you a good buyer for owners.
                2. Completed deals shown as tombstones, with permission confirmed for each one.
                3. Typical timeline from first meeting to close, stated honestly.
                4. A finished two-page PDF and a matching profile on any buyer databases you use.

                ## Notes
                Check with compliance or counsel before showing past deals or any figures. Firms leaving one employer cannot always show deals done there.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page buyer profile with approved tombstones and a stated timeline exists and has been sent to every tier A intermediary."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write three sentences on why an owner would choose you as buyer"
                - "List completed deals and confirm which ones may be shown"
                - "Draft the two-page profile with tombstones and a realistic timeline"
                - "Send the profile to every tier A intermediary"
            - name: NDA and teaser confidentiality routine
              description: |-
                ## Purpose
                Signing a dozen NDAs a month without a record is how firms breach non-solicitation clauses or lose track of standstill periods. A simple NDA log and an agreed set of positions to take on common clauses keeps you quick to sign and safe when the same target resurfaces two years later.

                ## Milestones
                1. A log of every signed NDA with date, counterparty, term and non-solicit period.
                2. Standard positions on the usual clauses agreed with counsel.
                3. A rule for who may sign, and within what limits, without legal review.
                4. Confidential information from declined deals stored or deleted as each NDA requires.

                ## Notes
                Your counsel or compliance officer sets the positions. The project is about recording and following them, not deciding them.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An NDA log covers every agreement signed in the last year, and counsel has approved written positions on the usual clauses."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect every NDA signed in the last twelve months into one folder"
                - "Build a log with term, non-solicit and standstill dates for each"
                - "Ask counsel for standard positions on the usual NDA clauses"
                - "Agree who may sign NDAs without legal review"
            - name: Hunting ground choice for proprietary outreach
              description: |-
                ## Purpose
                Proprietary sourcing works when you write to owners in a niche you understand better than the generalist buyers who also email them. Choosing two or three sub-sectors to hunt in, using your existing thesis work, focuses lists, letters and conferences on places where you can sound credible on the first call.

                ## Milestones
                1. Three candidate sub-sectors compared on number of owner-run companies in your size range.
                2. Each candidate scored on your team's credibility and existing contacts.
                3. Two or three hunting grounds chosen and written into the sourcing plan.
                4. A rough count of target companies in each chosen niche.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three sub-sectors are chosen for proprietary outreach, each with an estimated count of owner-run targets and a written reason."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List five sub-sectors where your team already has knowledge or contacts"
                - "Estimate how many owner-run companies in your size range each holds"
                - "Score each on credibility, contacts and competition from other buyers"
                - "Record the two or three chosen niches in the sourcing plan"
            - name: Weekly sourcing hours protected in the diary
              description: |-
                ## Purpose
                Live deals always beat sourcing for attention, which is why pipelines dry up six months after a busy execution period. Blocking fixed hours each week for calls and outreach, and treating them like a client meeting, keeps origination going while you close.

                ## Milestones
                1. A target number of sourcing hours per week agreed with yourself or your partners.
                2. Recurring diary blocks set for calls and for written outreach.
                3. A simple weekly count of hours actually spent kept for one quarter.
                4. The blocks moved or resized after the quarter based on what was kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Recurring weekly sourcing blocks exist, and a quarter of logged hours shows at least three quarters of them were kept."
                cadence: rolling
              tasks:
                - "Decide how many hours a week you will spend on sourcing"
                - "Book recurring diary blocks for calls and for outreach"
                - "Log the sourcing hours you actually spent this week @recurring(weekly:fri)"
                - "Resize the blocks after a quarter of honest logging"
            - name: Weekly intermediary call cadence
              description: |-
                ## Purpose
                Advisers mention upcoming mandates to the buyers who called last week, not the ones who sent a holiday card. A steady weekly round of calls, driven by the tier list and logged in a sentence each, keeps you in the first wave of calls when a new process launches.

                ## Milestones
                1. A call list for the week generated from tier frequencies every Monday.
                2. Eight to fifteen intermediary conversations held each week.
                3. Each call logged with what is coming, timing and any request made.
                4. Follow-ups promised on calls sent within two working days.

                ## Notes
                Ask what they are working on that is not yet out, and what they wish buyers did better. Both questions get better answers than how is the market.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight logged intermediary calls a week for twelve consecutive weeks, with follow-ups sent within two working days."
                cadence: rolling
              tasks:
                - "Pull this week's due calls from the tier list @recurring(weekly:tue)"
                - "Hold and log each call in one or two sentences"
                - "Send promised follow-ups within two working days"
                - "Check that no tier A contact has gone a month without a call @recurring(monthly:28)"
            - name: Monthly sourcing channel scorecard
              description: |-
                ## Purpose
                Without numbers, the loudest banker gets the credit and the quiet accountant who sent your best deal gets forgotten. A one-page monthly scorecard counting opportunities, meetings, bids and closings by channel tells you where to spend next month's hours.

                ## Milestones
                1. A scorecard layout with channels as rows and funnel stages as columns.
                2. The first month filled from the tagged deal records.
                3. Twelve consecutive months recorded with a short comment each.
                4. One reallocation of sourcing time made because of what the scorecard showed.

                ## Notes
                Start from the **Metrics log** template. Count quality as well as volume: teasers inside the buy box are worth more than teasers in total.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly scorecards by channel exist, and at least one change to sourcing time is recorded with the scorecard as its reason."
                cadence: rolling
              tasks:
                - "Set up the scorecard with channels as rows and funnel stages as columns"
                - "Fill in last month's numbers from the tagged deal records @recurring(monthly:5)"
                - "Write a two-line comment on what moved and why"
                - "Review the quarter's scorecards and decide one reallocation @recurring(quarterly)"
            - name: Monday log of inbound teasers
              description: |-
                ## Purpose
                Teasers arrive by email at all hours and the ones that sit unanswered for a week tell the adviser you are not serious. Logging every inbound opportunity on Monday, acknowledging each one and passing those inside the buy box to the screening process keeps response times short and the records complete.

                ## Milestones
                1. Every teaser received in the past week logged with source, date and sector.
                2. Each sender acknowledged within two working days.
                3. Teasers inside the buy box passed to screening the same day they are logged.
                4. A monthly count of teasers in and outside the buy box kept for the scorecard.

                ## Notes
                This project ends at handover. Deciding yes, no or wait belongs to your screening process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All inbound teasers for a quarter are logged with source and date, and each sender was acknowledged within two working days."
                cadence: rolling
              tasks:
                - "Log every teaser received last week with source and sector @recurring(weekly:mon)"
                - "Acknowledge each sender with a short reply"
                - "Pass teasers inside the buy box to screening the same day"
                - "Count teasers in and outside the buy box for the month"
            - name: Weekly proprietary outreach to owners
              description: |-
                ## Purpose
                Off-market deals come from owners who heard from you two years before they were ready to sell, and that only happens with steady weekly volume. Sending a set number of personal letters or emails to owners in your hunting grounds each week, with follow-ups scheduled, builds the relationships that become proprietary deals.

                ## Milestones
                1. A weekly target of new owners contacted, such as twenty, agreed.
                2. A three-touch sequence written: letter or email, follow-up, call.
                3. Every contact and reply logged against the owner's record.
                4. First meetings with owners counted monthly and reported in the scorecard.

                ## Notes
                Check the privacy and direct marketing rules that apply to cold contact in your country, and honour every request to stop.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly owner contact target is met for twelve straight weeks, with every touch logged and opt-outs honoured."
                cadence: rolling
              tasks:
                - "Set the weekly number of new owners to contact"
                - "Write the three-touch sequence for your first hunting ground"
                - "Send this week's batch of first-touch owner messages @recurring(weekly:wed)"
                - "Log replies and schedule the next touch for each owner"
            - name: Feedback loop to intermediaries on passes
              description: |-
                ## Purpose
                One-line no thanks emails teach an adviser nothing, while a clear reason why you passed teaches them what to send next time. Giving every intermediary a specific, prompt reason for each decline, and a reminder of the buy box, improves the fit of what they send and marks you as a buyer worth calling.

                ## Milestones
                1. A short set of standard pass reasons that match your buy box.
                2. Every pass in the month communicated with a specific reason within a week of the decision.
                3. A record of which advisers keep sending deals outside the box.
                4. A conversation held with each repeat offender about what fits.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pass for a quarter was sent to the intermediary with a specific reason within a week, and repeat misfits were addressed in a call."
                cadence: rolling
              tasks:
                - "Write five standard pass reasons tied to the buy box"
                - "Send each pass with a reason within a week of the decision"
                - "Review which advisers sent misfits this month @recurring(monthly:12)"
                - "Call each repeat sender of misfits to walk through the buy box"
            - name: Quarterly review of deals you never saw
              description: |-
                ## Purpose
                The deals that closed in your sectors without reaching you are the clearest evidence of gaps in coverage. Each quarter, listing announced transactions in your buy box and finding out who ran them shows which advisers, owners and channels you are missing.

                ## Milestones
                1. Announced deals in your size range and sectors listed for the quarter.
                2. Each marked as seen by you, seen and passed, or never seen.
                3. The adviser or route for every never-seen deal identified where public.
                4. New relationships to build added to the intermediary map.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarterly lists of announced deals exist, each never-seen deal has a likely route noted, and gaps were added to the map."
                cadence: cyclic
              tasks:
                - "List last quarter's announced deals inside your buy box @recurring(quarterly)"
                - "Mark each as seen, passed or never seen"
                - "Find the adviser or route for each never-seen deal"
                - "Add the missing advisers to the intermediary map"
            - name: Sourcing record hygiene
              description: |-
                ## Purpose
                Duplicate contacts, stale tiers and owners logged twice make the scorecard wrong and the call lists embarrassing. A short monthly pass through the sourcing records keeps the data clean enough to trust, without turning into a systems project.

                ## Milestones
                1. Duplicate intermediary and owner records merged.
                2. Contacts who moved firms updated with their new employer.
                3. Every new opportunity checked for a source tag.
                4. A one-line monthly note of fixes made.

                ## Notes
                The design of the pipeline system itself belongs with whoever runs it. This is the sourcing team's own housekeeping.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly hygiene passes are recorded, and every opportunity logged in that period has a source tag."
                cadence: rolling
              tasks:
                - "Run a duplicate check on intermediary and owner records @recurring(monthly:20)"
                - "Update contacts who have changed firms"
                - "Fix any new opportunity missing a source tag"
                - "Note the fixes made in one line"
            - name: Annual sourcing plan and budget
              description: |-
                ## Purpose
                Conferences, data subscriptions, travel and outreach all compete for the same budget and diary, and without a plan the year fills with whatever was booked first. A written plan each year sets targets by channel, the events to attend, the tools to pay for and the hours each person will commit.

                ## Milestones
                1. Last year's scorecard reviewed and the main lessons noted.
                2. Targets by channel set for opportunities, meetings and bids.
                3. A budget for events, data, travel and outreach agreed.
                4. The plan shared with the team and the partners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written annual sourcing plan with channel targets, an events list and a budget is approved before the year starts."
                cadence: cyclic
              tasks:
                - "Draft next year's sourcing plan from this year's scorecard @recurring(yearly)"
                - "Set channel targets for opportunities, meetings and bids"
                - "Price the events, data and travel the plan needs"
                - "Present the plan to the partners for approval"
            - name: Friday scan of deal and trade news
              description: |-
                ## Purpose
                Ownership changes, retirements, lost contracts and adviser hires all show up in trade press and deal announcements before they show up in your inbox. A thirty-minute Friday scan of a few chosen sources turns that news into names to call next week.

                ## Milestones
                1. Five to eight news sources chosen for your sectors and region.
                2. Alerts set for key companies, owners and advisers.
                3. Each week's scan producing a short list of follow-up actions.
                4. Follow-ups from the scan counted in the scorecard as a channel.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly scan has run for twelve weeks, each producing a list of named follow-ups, with resulting meetings tagged in the scorecard."
                cadence: rolling
              tasks:
                - "Choose five to eight trade and deal news sources for your sectors"
                - "Set alerts for target companies and active advisers"
                - "Scan the week's news and list names to contact @recurring(weekly:fri)"
                - "Ask the agent to summarise the week's ownership changes in your niches"
            - name: Lender and debt adviser referral relationships
              description: |-
                ## Purpose
                Senior lenders, unitranche funds and debt advisers often hear that a business is for sale before the process launches, because owners and their advisers test financing early. Treating a handful of lenders as a sourcing channel, not just as capital, adds early signals and occasional direct introductions.

                ## Milestones
                1. Eight to twelve lenders and debt advisers in your size range identified.
                2. An introductory meeting held with each one about your buy box.
                3. A quarterly check-in rhythm in place with the most active.
                4. Opportunities from lenders tagged as their own source type.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly contact is kept with at least eight lenders or debt advisers, and any opportunities they send are tagged as a separate channel."
                cadence: rolling
              tasks:
                - "List the lenders who have financed deals in your size range"
                - "Book introductory meetings with eight of them"
                - "Check in with the most active lenders on what they are seeing @recurring(quarterly)"
                - "Tag any lender-introduced opportunity as its own source type"
            - name: Accountants and lawyers who advise owners
              description: |-
                ## Purpose
                Owner-managed companies trust their external accountant and corporate lawyer more than any banker, and these advisers are often the first to hear that a founder is thinking about succession. Building a small circle of such firms in your region, and being genuinely useful to them, creates a referral channel that reaches owners before a sale process is ever set up.

                ## Milestones
                1. Fifteen accounting and law firms with owner-managed clients in your sectors listed.
                2. An introductory meeting held with a partner at ten of them.
                3. Something useful offered to each, such as a talk to their clients on preparing for a sale.
                4. Referrals from the group tagged as their own source and counted monthly.

                ## Notes
                Professional advisers have duties to their clients and cannot pass on confidential information. Ask them to introduce you, never to tell you about a client.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten accounting or law firms have had an introductory meeting, and referrals from them are tagged and counted as a separate channel each month."
                cadence: rolling
              tasks:
                - "List fifteen accounting and law firms with owner-managed clients in your sectors"
                - "Book introductory meetings with a partner at ten of them"
                - "Offer a client talk on preparing a business for sale"
                - "Send one useful item to each firm in the circle @recurring(monthly:9)"
            - name: Year-end thank-you round to sources
              description: |-
                ## Purpose
                The advisers and contacts who sent you good deals this year rarely hear what happened next. A short personal note at year end, telling each source how their introduction progressed and thanking them, costs an afternoon and is remembered when next year's mandates are allocated.

                ## Milestones
                1. Every source that sent an opportunity inside the buy box this year listed.
                2. A personal note written to each, naming what happened with their introduction.
                3. A small gift sent where your firm's gifts policy allows.
                4. Replies logged and any mentions of upcoming deals followed up.

                ## Notes
                Check your firm's gifts and entertainment policy, and the recipient's, before sending anything with value.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Personal year-end notes are sent to every source of an in-box opportunity this year, with replies logged."
                cadence: cyclic
              tasks:
                - "List every source of an in-box opportunity this year @recurring(yearly)"
                - "Write a personal note naming what happened with each introduction"
                - "Check the gifts policy before sending anything with value"
                - "Log replies and follow up any mention of new deals"
            - name: Writing cold letters owners actually answer
              description: |-
                ## Purpose
                Most cold emails to business owners read like a fund brochure and get deleted in seconds. Learning to write a short, specific letter that shows you understand the owner's business and asks for nothing more than a conversation can lift reply rates from almost nothing to a meaningful few per hundred.

                ## Milestones
                1. Twenty real outreach messages from other buyers collected and marked for what works.
                2. Three draft letters written for different owner situations.
                3. Each draft reviewed by a former owner or an experienced dealmaker.
                4. A final version in use with a reply rate recorded after fifty sends.

                ## Notes
                Name something specific about their company, keep it under 150 words, and never mention valuation or price in a first letter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three reviewed letter versions exist, and one has been sent to at least fifty owners with its reply rate recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect twenty owner outreach messages you or colleagues have received"
                - "Mark what made the best ones readable"
                - "Draft three letters for succession, growth and partial sale situations"
                - "Ask a former owner to tell you which letter they would answer"
            - name: Running a first call with an owner
              description: |-
                ## Purpose
                The first conversation with a founder-owner decides whether there is ever a second, and dealmakers trained in banking often push for numbers too soon. Practising an owner-led first call, focused on their story, their people and what they want next, builds the trust that keeps a proprietary relationship alive.

                ## Milestones
                1. A list of eight to ten open questions for a first owner call.
                2. Three practice calls role-played with a colleague, one as a reluctant owner.
                3. Five real first calls held and notes written within a day of each.
                4. A short list of personal lessons and phrases to avoid.

                ## Notes
                Start from the **Meeting notes** template for each call. Let the owner talk for most of the time; you are earning a second meeting, not a data pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five real first owner calls are held and written up, and a personal list of lessons from them is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write eight to ten open questions for a first owner call"
                - "Role-play three calls with a colleague playing the owner"
                - "Write up each real first call within a day"
                - "Note the questions that opened owners up and the ones that closed them down"
            - name: Sale process types and how to position in each
              description: |-
                ## Purpose
                A broad auction, a limited process with six buyers and an off-market approach need different behaviour from a buyer, and treating them the same wastes time or loses deals. Understanding how each process runs, what the adviser wants and where a buyer can stand out makes your sourcing calls sharper.

                ## Milestones
                1. The stages of a broad auction, a targeted process and a bilateral approach written out.
                2. What the adviser is trying to achieve at each stage noted.
                3. Two or three ways a buyer can stand out in each process type listed.
                4. Your last five deals classified by process type, with what worked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of three process types with positioning notes exists, and five past deals are classified against it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two senior advisers how they run a targeted process"
                - "Write out the stages of each process type on one page"
                - "List how a buyer can stand out at each stage"
                - "Classify your last five deals by process type"
            - name: How intermediaries are paid and what drives them
              description: |-
                ## Purpose
                Retainers, success fees, sliding fee scales and minimum fees shape which mandates an adviser takes and which buyers they favour. Knowing how brokers, boutiques and accounting firms earn their money helps you see why a deal reaches you late, early or not at all, and what makes you useful to them.

                ## Milestones
                1. The common fee structures for brokers, boutiques and accounting deal teams summarised.
                2. Three advisers asked how their incentives work in practice.
                3. A note on what each type of intermediary values most in a buyer.
                4. Your coverage approach adjusted for at least one intermediary type.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of intermediary fee structures and incentives exists, informed by three adviser conversations."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the usual fee structures for brokers and boutiques"
                - "Ask three advisers what makes a buyer easy to work with"
                - "Write what each intermediary type values in a buyer"
                - "Change one thing in how you cover a type of intermediary"
            - name: Building target lists from company data
              description: |-
                ## Purpose
                Good proprietary lists hold a few hundred companies in one niche, each with an owner name and a reason to write, while most lists are thousands of rows with neither. Learning to combine company registries, trade association directories, private company databases and trade show exhibitor lists produces lists worth writing to.

                ## Milestones
                1. Four or more data sources for one hunting ground identified and compared.
                2. A first list of companies built with size estimates and owner names.
                3. Duplicates, subsidiaries of larger groups and out-of-range companies removed.
                4. A finished list of at least 150 owner-run targets with sources noted.

                ## Notes
                Company registries in many countries show directors and filed accounts. Check the terms of any database before exporting from it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A list of at least 150 owner-run companies in one niche, each with owner name, size estimate and data source, is ready for outreach."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List four data sources for your first hunting ground"
                - "Pull a first set of companies with size estimates"
                - "Remove subsidiaries, duplicates and out-of-range companies"
                - "Add owner names from registries or association directories"
            - name: Reading succession and sale signals
              description: |-
                ## Purpose
                Owners rarely announce they are thinking of selling, but the signs are often visible: an owner past sixty with no family successor, a new finance director, a property sale or a first outside adviser. Learning to spot these signals lets you time outreach for when an owner is ready to listen.

                ## Milestones
                1. A list of ten common succession and sale signals with how to find each one.
                2. Signals checked against your current target list.
                3. Targets with two or more signals moved to the top of the outreach queue.
                4. Six months later, meetings from signal-led outreach compared with the rest.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-item signal list exists, targets are ranked by signals, and signal-led outreach results are compared after six months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down ten signals that an owner may be open to selling"
                - "Note where each signal can be found in public records or news"
                - "Score your current target list against the signals"
                - "Move high-signal owners to the front of the outreach queue"
            - name: Quarterly sector note for owners and advisers
              description: |-
                ## Purpose
                A short, useful note on a niche you invest in, covering trends, deal activity and what buyers look for, gives owners and advisers a reason to remember you. Publishing one each quarter builds a reputation as the buyer who knows the sector, which is what proprietary sourcing depends on.

                ## Milestones
                1. A format agreed: two pages, one niche, no confidential information.
                2. The first note written, checked by compliance and sent to owners and advisers.
                3. A distribution list of owners and advisers who agreed to receive it.
                4. Replies and meetings from each issue tracked as a source.

                ## Notes
                Keep it free of deal names you learned under NDA and of anything that reads like investment advice. Get compliance sign-off if your firm requires it.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Four quarterly sector notes are published to an opt-in list, with replies and meetings from each tracked as a source."
                cadence: rolling
              tasks:
                - "Choose the niche and outline the first two-page note"
                - "Ask the agent to draft a first version from your outline and sources"
                - "Send the note to compliance and then to the opt-in list @recurring(quarterly)"
                - "Log replies and meetings from each issue"
            - name: Choosing a private company data subscription
              description: |-
                ## Purpose
                Private company databases can cost as much as a junior hire, and the one with the best brochure may cover your niche poorly. Trialling two or three against a test list of companies you already know shows which gives accurate owners, size data and contact details for your market.

                ## Milestones
                1. A test set of thirty companies you know well chosen.
                2. Two or three providers trialled against the test set.
                3. Coverage, accuracy and price scored for each.
                4. A decision recorded, including the option of buying nothing.

                ## Notes
                Start from the **Purchase decision** template. Ask for a trial on your own niche, not a demo on theirs.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or more data providers are scored against the same thirty-company test set and a buy or do not buy decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick thirty companies you know well as a test set"
                - "Request trials from two or three providers"
                - "Score each provider on coverage, accuracy and price"
                - "Record the decision and the reasons in the purchase note"
            - name: Finder fee and referral policy with counsel
              description: |-
                ## Purpose
                Paying a finder can be legitimate or can create regulatory, tax and conflict problems depending on who the finder is and where they operate. Agreeing a written policy with counsel before anyone asks for a fee means you can say yes or no quickly and safely when a contact offers an introduction.

                ## Milestones
                1. Counsel briefed on the kinds of finders and referrers you meet.
                2. A written policy on when fees may be offered, to whom and at what approval level.
                3. A standard finder agreement prepared by counsel.
                4. The policy shared with everyone who sources deals.

                ## Notes
                Whether a finder needs to be licensed or registered is a legal question for counsel in each jurisdiction. Do not agree any fee before the policy exists.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A counsel-approved finder fee policy and standard agreement exist and have been circulated to everyone who sources deals."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the finders and referrers who have offered introductions so far"
                - "Brief counsel on the situations and ask for a written policy"
                - "Ask counsel to prepare a standard finder agreement"
                - "Circulate the policy to everyone who sources deals"
            - name: Outsourced outreach versus a sourcing analyst
              description: |-
                ## Purpose
                Firms that want more proprietary volume usually choose between an outsourced outreach agency, a dedicated in-house sourcing analyst or more partner time. Comparing cost per first meeting, quality of conversations and control of the message across the options leads to a decision based on numbers, not a vendor pitch.

                ## Milestones
                1. Current cost and output of proprietary outreach measured.
                2. Two outsourced providers and an in-house hire costed.
                3. Expected meetings per month estimated for each option with references checked.
                4. A recommendation agreed with the partners and recorded.

                ## Notes
                Start from the **Vendor** template for any outside provider. Insist on seeing real reply rates from a niche like yours.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three sourcing options are compared on cost per first meeting, and the chosen option is recorded with its reasons."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure what current outreach costs and produces per month"
                - "Get proposals from two outsourced outreach providers"
                - "Cost a junior in-house sourcing analyst for a year"
                - "Call two references for each provider"
                - "Recommend one option to the partners"
            - name: Pruning low-yield intermediaries
              description: |-
                ## Purpose
                After a year of coverage some advisers will have sent nothing useful while taking hours of calls and lunches. Moving them down a tier or off the list frees time for the sources that produce, without burning relationships that may revive later.

                ## Milestones
                1. Twelve months of opportunities counted by intermediary.
                2. Intermediaries with no in-box deals in a year identified.
                3. Each one moved down a tier, kept for a stated reason, or dropped.
                4. The freed hours reassigned to rising sources.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every intermediary with no in-box deal in twelve months has a recorded decision, and freed hours are reassigned."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count in-box opportunities by intermediary over twelve months"
                - "List those with none and note any good reason to keep them"
                - "Move each to a lower tier or off the active list"
                - "Reassign the freed call slots to sources on the rise"
            - name: Testing outreach letters against each other
              description: |-
                ## Purpose
                Reply rates on owner outreach vary several times over with subject line, length and the reason given for writing, but few teams test it. Running a simple split test on two versions across a few hundred owners gives evidence for which approach to keep.

                ## Milestones
                1. One variable chosen to test, such as subject line or opening sentence.
                2. Two versions sent to comparable groups of at least a hundred owners each.
                3. Reply and meeting rates recorded for both.
                4. The winning version adopted and the result written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two outreach versions differing in one variable are each sent to at least a hundred owners, with reply rates recorded and a winner adopted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the single variable to test"
                - "Write two versions that differ only in that variable"
                - "Split the next outreach batch into two comparable groups"
                - "Record reply and meeting rates after six weeks"
            - name: Resetting the buy box after a year of misses
              description: |-
                ## Purpose
                If most deals you like are lost on price or size, or most deals you are shown fall outside the box, the box itself may be the problem. Reviewing a year of lost, passed and never-seen deals and adjusting the mandate keeps sourcing pointed at deals you can actually win.

                ## Milestones
                1. A year of passes, lost bids and never-seen deals grouped by reason.
                2. The most common mismatch between the box and the market named.
                3. A proposed change to size, sector or situation agreed with partners or capital providers.
                4. The new buy box sent to every tier A and B intermediary.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written review of a year of misses leads to a recorded decision to change or keep the buy box, and the result is sent to tier A and B sources."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group a year of passes and lost bids by reason"
                - "Name the most common mismatch between the box and the market"
                - "Propose one change to the buy box to your partners"
                - "Send the revised buy box to tier A and B intermediaries"
            - name: Sourcing plan for a sector trade show
              description: |-
                ## Purpose
                Owner-heavy trade shows in your hunting grounds put hundreds of founders in one hall, most of them not yet talking to any buyer. Preparing a list of exhibitors to meet, booking a few conversations in advance and following up within a week turns a costly trip into a batch of owner relationships.

                ## Milestones
                1. One trade show chosen for a hunting ground, with travel and cost approved.
                2. Exhibitor list filtered to twenty to forty priority owners.
                3. Five or more meetings booked before arrival.
                4. Every conversation logged and followed up within a week of the show.

                ## Notes
                Owners at a trade show are there to sell to customers. Keep stand visits short and ask for a call later rather than a pitch on the spot.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least fifteen owner conversations are held at one trade show and every one is followed up within a week."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Pick the trade show and get the travel budget approved"
                - "Filter the exhibitor list to twenty to forty priority owners"
                - "Write to priority owners to book short meetings"
                - "Follow up every conversation within a week of the show"
            - name: Dealmaker conference meeting plan
              description: |-
                ## Purpose
                Intermediary-focused gatherings, such as an ACG chapter event or a regional M&A conference, compress months of coverage calls into two days if you arrive with a schedule. Booking meetings with the advisers you most want to know, rather than hoping to bump into them, is what makes the ticket worthwhile.

                ## Milestones
                1. One conference chosen and the attendee or sponsor list reviewed.
                2. Twelve or more meetings booked with priority advisers before the event.
                3. Each meeting logged with one fact and one follow-up.
                4. Follow-ups sent within five working days and new contacts tiered.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least twelve pre-booked adviser meetings are held at one conference, all logged and followed up within five working days."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose one conference and register"
                - "Mark the priority advisers on the attendee list"
                - "Book twelve meetings before the event"
                - "Send follow-ups within five working days and tier the new contacts"
            - name: Hosting an intermediary breakfast
              description: |-
                ## Purpose
                Inviting eight to twelve advisers to a small breakfast, with a short talk on what you are buying and a recent deal story, does more for coverage than a dozen separate lunches. It also lets advisers meet each other, which they value and remember you for.

                ## Milestones
                1. Date, venue and a guest list of ten to fifteen tier A and B advisers set.
                2. A ten-minute talk prepared on your buy box and a recent deal.
                3. The breakfast held with at least eight advisers attending.
                4. Personal follow-ups sent to every guest within three days.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A breakfast with at least eight advisers is held and every guest receives a personal follow-up within three days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a date and book a private room"
                - "Invite ten to fifteen tier A and B advisers"
                - "Prepare a ten-minute talk on your buy box and a recent deal"
                - "Send each guest a personal follow-up within three days"
            - name: Two-day intermediary roadshow in one city
              description: |-
                ## Purpose
                Advisers outside your home city often send deals to local buyers simply because they have met them. Spending two days visiting eight to ten offices in one city, in person, puts a face to your buy box and often produces the first deal from a new region within a year.

                ## Milestones
                1. A target city chosen from the intermediary map.
                2. Eight to ten office visits booked over two days.
                3. Every visit logged with mandates mentioned and contacts met.
                4. New contacts tiered and the first follow-up calls scheduled.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Eight or more intermediary office visits are held in one city over two days, each logged, with every new contact tiered."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose the city with the most unknown advisers on your map"
                - "Book eight to ten office visits across two days"
                - "Log each visit the same evening"
                - "Tier the new contacts and book first follow-up calls"
            - name: Owner dinner on a sector theme
              description: |-
                ## Purpose
                Owners of similar businesses like to compare notes with peers, and a dinner on a topic they care about, such as succession or hiring, lets you meet six to ten of them as a host rather than a buyer. Done well, it starts relationships that can surface deals years later.

                ## Milestones
                1. A topic chosen that owners in one niche actually want to discuss.
                2. A guest from outside your firm, such as an owner who sold, lined up to open the discussion.
                3. Six to ten owners attending.
                4. Each owner thanked personally and added to the nurturing list.

                ## Notes
                Keep the selling out of the room. The dinner works because it is useful to the owners, not because you pitch.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dinner with at least six owners from one niche is held, and each is thanked and added to the owner nurturing list."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose a topic owners in your niche want to discuss"
                - "Ask an owner who sold their company to open the discussion"
                - "Invite fifteen owners to get six to ten attending"
                - "Thank each guest and add them to the nurturing list"
            - name: First 90 days of sourcing at a new firm
              description: |-
                ## Purpose
                Joining a firm as a VP or principal usually comes with an origination expectation and no handover of relationships. A deliberate first ninety days, learning the firm's buy box, inheriting what coverage exists and introducing yourself to the market, shows partners early that you can bring in deals.

                ## Milestones
                1. The firm's buy box, past deal sources and current coverage list understood.
                2. Thirty intermediaries met or called as the firm's new contact.
                3. Your own relationships that fit the new firm's box introduced, within any limits from your old employer.
                4. A ninety-day sourcing summary presented to the partners.

                ## Notes
                Check any non-solicitation or confidentiality obligations to your previous employer with counsel before contacting past relationships.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within ninety days, thirty intermediaries are contacted on the new firm's behalf and a written sourcing summary is presented to the partners."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask for the firm's buy box and last three years of deal sources"
                - "List thirty intermediaries to contact in your first month"
                - "Check old-employer restrictions with counsel before calling past contacts"
                - "Present a ninety-day sourcing summary to the partners"
            - name: Earning origination credit as an associate
              description: |-
                ## Purpose
                Associates are hired to execute, but the ones who bring in even one real opportunity get noticed at promotion time. Owning a small slice of coverage, such as a set of B-tier advisers or one hunting ground, gives a junior a visible sourcing record without neglecting live deals.

                ## Milestones
                1. A slice of coverage agreed with a partner or principal.
                2. Weekly time for that slice protected for six months.
                3. Every opportunity from the slice tagged with your name as source.
                4. A six-month summary of what the slice produced shared with your reviewer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An agreed coverage slice is worked for six months and a summary of opportunities tagged to you is shared with your reviewer."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask a partner for a defined slice of coverage you can own"
                - "Book weekly time for the slice for the next six months"
                - "Make sure opportunities from your slice carry your name as source"
                - "Share a six-month summary with your reviewer before reviews"
            - name: Turning a founder network into deal flow
              description: |-
                ## Purpose
                Former founders and operators who move into investing often know more owners than any banker, but have never organised those relationships as a channel. Listing the owners, suppliers, customers and advisers you know from running a company, and telling them clearly what you now buy, can produce warm introductions in the first few months.

                ## Milestones
                1. A list of owners, peers, suppliers and advisers from your operating years.
                2. A short personal message explaining your new role and what you look for.
                3. The message sent to everyone on the list who fits.
                4. Introductions and meetings from the network tracked as their own source.

                ## Notes
                Respect any confidentiality you still owe to your old company, its customers and its buyers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A message about your buy box is sent to everyone relevant in your operating network, and resulting introductions are tracked as a channel."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List owners, peers, suppliers and advisers from your operating years"
                - "Write a short personal note on your new role and buy box"
                - "Send the note to everyone on the list who fits"
                - "Tag introductions from the network as their own source type"
            - name: Sourcing on a lean budget without a fund brand
              description: |-
                ## Purpose
                First-time fund founders and solo sponsors have no logo that advisers recognise and little money for conferences or data. Focusing a small budget on one niche, a short list of advisers who handle small deals and personal owner outreach can still produce competitive deal flow while the brand is being built.

                ## Milestones
                1. A sourcing budget for the year set, with every spend line justified.
                2. One niche and twenty advisers chosen as the whole focus.
                3. A credibility pack ready: your background, capital backing and a reference list.
                4. Monthly results tracked so spend can follow what works.

                ## Notes
                Advisers worry most about whether an unknown buyer can close. Say plainly where the capital comes from and how decisions are made.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written lean sourcing plan with a budget, one niche, twenty named advisers and a credibility pack is in use for six months."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Set a sourcing budget with each spend line justified"
                - "Choose one niche and twenty advisers to focus on"
                - "Prepare a credibility pack showing background and capital backing"
                - "Review the month's results against spend"
            - name: Taking sourcing relationships with you when you move
              description: |-
                ## Purpose
                Dealmakers who change firms often assume their contacts move with them, but employment contracts, firm data rules and confidentiality duties can limit what you may take and use. Sorting out what is yours, what is the firm's and what needs counsel's view avoids a dispute that can follow you into the new role.

                ## Milestones
                1. Your employment contract and firm policies on contacts and data read.
                2. Counsel's view obtained on non-solicitation and confidentiality limits.
                3. A list of relationships you may contact, and when, agreed with counsel.
                4. No firm records, deal lists or CRM exports taken that you are not entitled to.

                ## Notes
                This is a legal question with personal consequences. Get advice before you resign, not after.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Before leaving, a counsel-reviewed list of contactable relationships and timing exists, and no restricted records have been taken."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Reread your contract for non-solicitation and confidentiality terms"
                - "Book a meeting with employment counsel"
                - "Agree with counsel which relationships you may contact and when"
                - "Confirm you hold no firm records you are not entitled to"
            - name: Opening sourcing in a new region
              description: |-
                ## Purpose
                Entering a new country or region means a new set of advisers, local norms on owner contact, different data sources and sometimes a different language of deals. Building coverage there in a planned sequence, rather than flying in for occasional meetings, gets you seen early in local processes.

                ## Milestones
                1. The local intermediary landscape mapped and the top twenty identified.
                2. Local rules on cold contact and data checked with local counsel.
                3. A local partner, adviser or hire chosen to open doors where useful.
                4. Two visits completed and the first local opportunities logged.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within a year, twenty local intermediaries are under coverage and at least five local opportunities are logged with source tags."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Map the top twenty intermediaries in the new region"
                - "Ask local counsel about rules on cold contact and data"
                - "Decide whether a local partner or hire is needed"
                - "Plan two visits in the first six months"
            - name: Hundred-company campaign in one niche
              description: |-
                ## Purpose
                Experienced sourcing teams sometimes run a concentrated campaign: every owner-run company in one niche contacted, met or ranked within a quarter. Done thoroughly, it produces a ranked map of the niche, several live conversations and usually one or two companies worth pursuing over years.

                ## Milestones
                1. A complete list of around a hundred companies in one niche with owners named.
                2. Every company contacted at least twice within the quarter.
                3. Twenty or more owner conversations held and written up.
                4. A ranked map of the niche with a next step for each top-tier company.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within one quarter, around a hundred companies in one niche are contacted twice, twenty conversations are held, and a ranked map exists."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Build the full company list for the chosen niche"
                - "Split the list across the team with weekly contact targets"
                - "Write up every owner conversation within a day"
                - "Rank the niche and set a next step for each top-tier company"
            - name: Corporate carve-out sourcing
              description: |-
                ## Purpose
                Non-core divisions sold by large companies rarely appear in broker teasers, and the people who decide are in corporate development and strategy teams. Building relationships with those teams, and tracking companies under pressure to simplify, opens a channel for carve-outs that generalist buyers often miss.

                ## Milestones
                1. Thirty corporate groups with likely non-core units in your sectors listed.
                2. A contact in corporate development identified at each.
                3. Ten introductory conversations held about what you could buy.
                4. Annual reports and strategy updates checked for disposal signals each year.

                ## Notes
                Carve-outs need a buyer who can stand up separate systems and finance teams. Say how you handle transition services in the first meeting.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten corporate development teams have had an introductory conversation, and thirty groups are tracked for disposal signals."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List thirty corporate groups with likely non-core units in your sectors"
                - "Find a corporate development contact at each"
                - "Hold ten introductory conversations"
                - "Note disposal signals from annual reports and strategy updates"
            - name: Distressed and special situations channels
              description: |-
                ## Purpose
                Businesses in difficulty reach buyers through restructuring advisers, insolvency practitioners and lenders' workout teams, on timetables measured in weeks. Being known to these channels, with a clear statement of what you can do quickly, gives access to deals that never appear in a normal process.

                ## Milestones
                1. Restructuring advisers, insolvency practitioners and workout teams in your market listed.
                2. A short statement of what situations you can act on and how fast.
                3. Introductory meetings held with ten of these contacts.
                4. An internal rule for how fast you will respond to a distressed opportunity.

                ## Notes
                Distressed processes carry legal and reputational risks that differ by jurisdiction. Involve counsel early on any live situation.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A distressed-situations statement exists, ten restructuring or workout contacts have been met, and a response time rule is agreed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List restructuring advisers and workout teams in your market"
                - "Write a short statement of what you can act on and how fast"
                - "Meet ten of them to explain your approach"
                - "Agree an internal response time for distressed opportunities"
            - name: Long-term nurturing of not-yet-ready owners
              description: |-
                ## Purpose
                Most owners who answer your letter say not now, and the deal comes three to five years later to whoever stayed in touch without being a nuisance. A light, regular rhythm of useful contact with these owners, recorded against each one, keeps you first in line when their answer changes.

                ## Milestones
                1. Every owner who said not now listed with their stated timing and reasons.
                2. A contact plan set for each, such as two useful touches a year.
                3. Each touch logged with anything new learned about the business or the owner.
                4. Owners whose situation changed moved back into active outreach.

                ## Notes
                Send things that help the owner: a sector note, an introduction, an article about succession. Never send a reminder that you are still interested and nothing else.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every not-now owner has a contact plan, and two years of logged touches show each was contacted at least twice a year."
                cadence: rolling
              tasks:
                - "List every owner who said not now with their stated timing"
                - "Set a contact plan for each owner on the list"
                - "Send this month's useful touches to scheduled owners @recurring(monthly:16)"
                - "Review the list for owners whose situation has changed @recurring(quarterly)"
            - name: Cost per closed deal by channel
              description: |-
                ## Purpose
                Senior partners eventually ask which sourcing channel is worth the money, and opportunities counted is the wrong answer. Adding up hours, fees, events and data spend per channel, and dividing by deals closed over several years, shows what each closed deal really cost to find.

                ## Milestones
                1. Three or more years of tagged deals and sourcing spend gathered.
                2. Hours and costs allocated to channels by a stated method.
                3. Cost per meeting, per bid and per closed deal calculated for each channel.
                4. A short paper with recommendations presented to the partners.

                ## Notes
                Closed deals are few, so treat the numbers as direction, not proof. Show the range and the assumptions.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A paper showing cost per meeting, bid and closed deal for each channel over three or more years is presented to the partners."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Gather three or more years of tagged deals and sourcing spend"
                - "Agree a method for allocating hours and costs to channels"
                - "Calculate cost per meeting, bid and closed deal by channel"
                - "Ask the agent to draft a short paper from the tables for partner review"
---

# PE Deal Sourcing

This area is for the deal professional or sponsor whose job includes finding buyout opportunities before someone else does, from the associate earning first origination credit to the founder raising a first fund. It starts with the foundations (a buy box you can hand to anyone, an audit of where past deals came from, a source tagging scheme and a tiered map of intermediaries), then the weekly and monthly machinery of coverage calls and owner outreach, the skills of writing to owners and reading a sale process, decisions about data, finder fees and headcount, the conferences and roadshows worth preparing for, the situations that change how you source, and finally the specialist channels such as corporate carve-outs and distressed situations.

What repeats is a weekly round of intermediary calls and owner outreach, a Monday log of inbound teasers, a Friday scan of deal announcements, a monthly channel scorecard, quarterly re-tiering and owner check-ins, and an annual sourcing plan. The Purchase decision, Metrics log, Meeting notes and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
