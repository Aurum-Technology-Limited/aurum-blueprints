---
id: sales-revenue.ideal-customer-profile-sales
name: Ideal Customer Profile Definition
description: "Evidence on which customers win fastest, pay most and stay longest, a written ideal customer profile with disqualifiers and tiers, and the routines that keep the whole team selling to it."
category: business
version: 1.0.0
tags: [sales-revenue, ideal-customer-profile-sales, founder, small-business, team, icp, segmentation, targeting]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - feedback-themes
    - purchase-decision
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Ideal Customer Profile Definition
          description: "Working out which companies and buyers win fastest, pay most and stay longest, then turning that into targeting rules the whole sales team follows."
          projects:
            - name: Closed-won customer export with clean revenue figures
              description: |-
                ## Purpose
                Every argument about the ideal customer ends in opinion unless someone has the real list of who paid, how much and for how long. Pulling every closed-won customer from the CRM and the billing system into one sheet, with first deal value, current annual revenue, start date and any churn date, gives you the evidence base the rest of this area depends on.

                ## Milestones
                1. One sheet listing every paying customer from the last three years, one row per account.
                2. First deal value, current annual revenue, start date and any churn date filled for every row.
                3. Duplicates and parent and subsidiary accounts merged so each company appears once.
                4. The revenue total reconciled to the finance figure within a few percent.

                ## Notes
                Billing data beats CRM data for revenue and churn: deals get edited after the fact, invoices do not. With fewer than twenty customers, keep serious late-stage prospects on a separate tab so the sheet still has something to compare.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single customer sheet covering three years of paying accounts, one row each, whose revenue total finance has confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export all closed-won deals from the CRM for the last three years"
                - "Pull invoice totals and cancellation dates from the billing system"
                - "Merge the two exports into one row per customer account"
                - "Ask finance to check the revenue total against their own figure"
            - name: Ten best customers you would clone
              description: |-
                ## Purpose
                Ask a sales team to describe its ideal customer and you usually get the biggest logo or the friendliest contact. Ranking customers on three plain measures, deal size, speed to close and how long they stayed, and picking the ten that score well on all three gives a short list you can study in detail instead of arguing in general.

                ## Milestones
                1. Every customer ranked separately on revenue, sales cycle length and tenure.
                2. A combined rank and a top ten that does well on all three measures.
                3. A one-line note beside each of the ten explaining why it made the cut.
                4. The top ten agreed by the founder or sales lead and one person from delivery or support.

                ## Notes
                Resist adding a famous logo that ranks poorly. A name that impresses investors but took eighteen months and a 40 percent discount is exactly what the profile should steer you away from.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked top ten of customers, each with a written reason, agreed by sales and by someone who delivers or supports them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add sales cycle days and tenure in months to the customer sheet"
                - "Rank customers separately on revenue, cycle length and tenure"
                - "Combine the three ranks and mark the top ten accounts"
                - "Ask support or delivery which of the ten are easiest to serve"
            - name: Firmographic pattern in the best accounts
              description: |-
                ## Purpose
                Once the top ten are known, the question is what they share that you could search for: industry, headcount, revenue band, region, ownership model and growth stage. Coding those attributes for the best customers and for everyone else shows which traits genuinely separate winners from the average and which are coincidence.

                ## Milestones
                1. Industry, employee band, revenue band, region and ownership type recorded for every customer.
                2. A comparison table showing how often each value appears in the top ten versus the rest.
                3. Three to five traits identified that are clearly over-represented in the best accounts.
                4. Traits that sound important but appear equally everywhere crossed off.

                ## Notes
                Use bands, not exact numbers: 50 to 200 staff is searchable in any company database, 137 staff is not.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison table of firmographic traits for the top ten against all other customers, with three to five distinguishing traits marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add columns for industry, headcount band, revenue band, region and ownership"
                - "Fill the columns from company websites and public company registries"
                - "Count how often each value appears in the top ten and in the rest"
                - "Highlight the traits at least twice as common among the best accounts"
            - name: Buying triggers behind your fastest deals
              description: |-
                ## Purpose
                Good-fit companies do not buy every month; they buy when something changes. Going back through the notes of your quickest wins to find the event that started each conversation, a new hire, a funding round, a failed audit, an expansion or a supplier letting them down, tells sellers when to call as well as whom.

                ## Milestones
                1. The first-contact notes of the ten fastest closed deals read and summarised.
                2. A trigger event named for each of those deals, or honestly marked unknown.
                3. A list of four to six recurring triggers, each with an example deal.
                4. Each trigger paired with a public signal that would reveal it, such as a job advert or press release.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of four to six buying triggers, each with an example won deal and an outside signal that reveals it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort won deals by days from first contact to signature"
                - "Read the first meeting notes for the ten fastest deals"
                - "Write down what changed at each buyer just before they engaged"
                - "Match each trigger to a signal you could spot from outside the company"
            - name: Buyer roles common to your won deals
              description: |-
                ## Purpose
                A company that fits on paper still stalls if you are talking to the wrong person. Listing who first replied, who championed, who signed and who used the product across your best deals shows which job titles start conversations and which ones hold the budget, so persona targeting rests on evidence rather than guesswork.

                ## Milestones
                1. For each top-ten deal, the first contact, champion, signer and main users recorded with job titles.
                2. Job titles grouped into three or four role families.
                3. The role family that most often starts conversations and the one that most often signs identified.
                4. Titles that appear in stalled or lost deals but rarely in wins noted as warning signs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three or four named buyer role families, with the usual opener and usual signer identified from at least ten won deals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the contacts on each top-ten deal with their job titles"
                - "Mark who replied first, who championed and who signed"
                - "Group the titles into three or four role families"
                - "Compare the role families against contacts on five stalled deals"
            - name: One-page ideal customer profile, version one
              description: |-
                ## Purpose
                Findings scattered across spreadsheets do not change what sellers do on Monday morning. Condensing the firmographics, triggers, buyer roles and disqualifiers onto one page, written as plain rules with a real example company for each, gives the team a single reference everyone can quote and test against.

                ## Milestones
                1. A one-page profile with sections for company traits, triggers, buyer roles and disqualifiers.
                2. Each trait written as a rule a researcher could check in two minutes.
                3. Two real customers that fit the profile named on the page as examples.
                4. The page published with a version number and date where the team keeps sales documents.

                ## Notes
                Keep it to one page. If a rule needs a paragraph of explanation, it is probably two rules or not yet a rule at all.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, versioned one-page ideal customer profile with checkable rules and two named example customers, shared with everyone who sells."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the profile on one page from the findings so far"
                - "Rewrite every trait as a rule a researcher could check in two minutes"
                - "Add two named customers who fit the profile closely"
                - "Publish the page with a version number in the shared sales folder"
            - name: Disqualifier list for accounts not worth chasing
              description: |-
                ## Purpose
                The quickest way to raise win rates is to stop working deals you were always going to lose or regret winning. A short negative profile, the industries, sizes, set-ups and buying behaviours that predict long cycles, heavy discounting or early churn, lets sellers walk away early and politely.

                ## Milestones
                1. Churned and heavily discounted customers reviewed for shared traits.
                2. Five to eight disqualifiers written as clear rules.
                3. Each disqualifier backed by at least two real examples from your own history.
                4. A short agreed form of words for declining or referring an off-profile prospect.

                ## Notes
                A disqualifier is a strong default, not a ban. Record deliberate exceptions in the off-profile log so the list learns from them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five to eight written disqualifiers, each with two real examples, added to the profile page alongside an agreed way to decline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List customers who churned within a year or needed a deep discount to sign"
                - "Note what those customers had in common"
                - "Write each pattern as a disqualifying rule with two examples"
                - "Draft a polite way to decline or refer an off-profile prospect"
            - name: Shared fit definitions with marketing and customer success
              description: |-
                ## Purpose
                When marketing counts a lead as on-profile by job title and sales judges it by company size, both sides report good numbers and the pipeline still disappoints. One agreed set of definitions for in-profile, near-profile and off-profile, used by marketing, sales and customer success alike, ends the recurring argument about lead quality.

                ## Milestones
                1. Marketing, sales and customer success leads have each read the draft profile.
                2. One written definition of in-profile, near-profile and off-profile agreed.
                3. Points of disagreement and how they were settled recorded.
                4. The definitions copied into campaign briefs and the customer success handover note.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written definitions of in-profile, near-profile and off-profile, agreed by sales, marketing and customer success and used in their own documents."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a 60-minute session with the marketing and customer success leads"
                - "Send the one-page profile two days before the session"
                - "Agree the definitions of in-profile, near-profile and off-profile"
                - "Copy the definitions into the campaign brief and handover note"
            - name: ICP fields on every account record
              description: |-
                ## Purpose
                Profiles that live only in a document cannot be filtered, reported or scored. Adding a handful of fields to the account record, such as industry band, headcount band, tier, fit status and trigger, means every list, report and forecast can be cut by fit, and the rest of this area can finally be measured.

                ## Milestones
                1. Five to seven ICP fields chosen, each with a fixed list of allowed values.
                2. The fields added to the account record by whoever administers the CRM.
                3. Every customer and open opportunity filled in for each field.
                4. A shared saved view of in-profile accounts that any seller can open.

                ## Notes
                Ask for picklists, not free text. Free-text industry fields end up with forty spellings of the same sector and cannot be reported on.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five to seven ICP picklist fields exist on the account record and are filled for every customer and open opportunity."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the ICP fields and write the allowed values for each"
                - "Ask the CRM owner to add the fields as picklists"
                - "Fill the fields for every customer and open opportunity"
                - "Save a shared view filtered to in-profile accounts"
            - name: Monthly fit check on new opportunities
              description: |-
                ## Purpose
                Within a few months of a new profile, deals that do not fit start creeping back in because they arrived warm or looked big. Checking each opportunity created in the month against the profile, and asking the owner about any off-profile ones, keeps the pipeline honest without blocking real exceptions.

                ## Milestones
                1. A saved report of opportunities created in the last 30 days with their fit status.
                2. Every off-profile opportunity discussed with its owner and either kept with a reason or closed.
                3. The in-profile share of new pipeline recorded month on month.
                4. That share rising, or holding at the agreed level, over two quarters.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The in-profile share of new opportunities is recorded for six consecutive months, with every off-profile deal carrying a written reason."
                cadence: rolling
              tasks:
                - "Build a report of opportunities created in the last 30 days with fit status"
                - "Run the new opportunity report and mark the off-profile deals @recurring(monthly:8)"
                - "Ask each owner of an off-profile deal for the reason to keep it"
                - "Record the month's in-profile share on the ICP dashboard"
            - name: Quarterly ICP review meeting
              description: |-
                ## Purpose
                Markets move, products change and a profile written a year ago slowly stops describing who actually buys. A 45-minute quarterly review of wins, losses, churn and exceptions by fit status catches drift early and keeps changes to the profile deliberate rather than accidental.

                ## Milestones
                1. A standing quarterly meeting with the sales, marketing and customer success leads.
                2. A short pack of wins, losses, churn and exceptions by fit status prepared before each meeting.
                3. Every proposed change to the profile accepted or rejected with a recorded reason.
                4. Accepted changes published as a new profile version within a week.

                ## Notes
                Start from the **Meeting notes** template. Keep a running list of decisions at the top so next quarter starts from what was agreed, not from memory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly ICP reviews held in a year, each with a written pack and a decision recorded on every proposed change."
                cadence: cyclic
              tasks:
                - "Book the ICP review as a recurring 45-minute quarterly meeting"
                - "Prepare the wins, losses and churn pack by fit status @recurring(quarterly)"
                - "Record each proposed change and the decision taken"
                - "Publish accepted changes as a new profile version"
            - name: Account tiers A, B and C
              description: |-
                ## Purpose
                Not every in-profile account deserves the same effort. Splitting the target universe into tiers, A for a close match with a live trigger, B for a good match, C for worth nurturing, tells sellers where to spend research time and tells marketing which accounts get personal attention.

                ## Milestones
                1. Written criteria for tiers A, B and C based on profile fit and current triggers.
                2. Every target account and open opportunity assigned a tier.
                3. Tier A capped at a number each seller can genuinely work, such as 25.
                4. Tiers refreshed each quarter as triggers appear and fade.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every target account carries a tier from written criteria, and the tiers have been refreshed at least once a quarter for a year."
                cadence: cyclic
              tasks:
                - "Write the criteria that put an account in tier A, B or C"
                - "Tier every target account and open opportunity"
                - "Cap tier A at the number each seller can research properly"
                - "Re-tier accounts whose triggers have appeared or expired @recurring(quarterly)"
            - name: Fit notes on every closed deal
              description: |-
                ## Purpose
                The profile improves only if each win and loss feeds back into it while the details are fresh. A two-line fit note on every closed deal, did it match, what trigger started it and who signed, takes a minute to write and builds the evidence the quarterly review needs.

                ## Milestones
                1. A fit note field on the closed deal form that takes under two minutes to fill.
                2. Fit notes recorded on deals closed won and closed lost.
                3. A quarter of notes read for patterns before each quarterly review.
                4. At least 90 percent of closed deals carrying a fit note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 90 percent of deals closed in a quarter carry a fit note covering match, trigger and signer."
                cadence: rolling
              tasks:
                - "Add a short fit note field to the closed deal form"
                - "Explain the fit note to the team at the next sales meeting"
                - "Write fit notes for every deal closed this week @recurring(weekly:fri)"
                - "Check what share of last month's closed deals carry a fit note"
            - name: Off-profile exception log
              description: |-
                ## Purpose
                Sometimes the right call is to take a deal that breaks the rules: a strategic logo, a new segment worth testing, or cash the business needs this quarter. Logging each exception with the reason and checking six months later how it turned out shows whether the rule or the exception was right.

                ## Milestones
                1. A log with account, reason for exception, approver, deal value and date.
                2. Every off-profile deal signed in the period recorded.
                3. Each exception reviewed after six months for revenue, effort and retention.
                4. At least one rule changed or confirmed from the reviewed exceptions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every off-profile deal signed in a year is in the log with an approver, and each one older than six months has a written outcome."
                cadence: rolling
              tasks:
                - "Set up the exception log with reason and approver columns"
                - "Add off-profile deals signed this month to the log @recurring(monthly:22)"
                - "Review exceptions that are six months old for revenue and effort"
                - "Bring the exception findings to the next quarterly review"
            - name: Weekly sweep of blank fit fields
              description: |-
                ## Purpose
                Accounts created without fit fields quietly break every report built on the profile. A ten-minute weekly sweep of accounts added in the last seven days with a blank tier or fit status keeps the data usable without a painful clean-up every quarter.

                ## Milestones
                1. A saved report of new accounts with blank ICP fields.
                2. Blank fields filled, or the creator asked to fill them, every week.
                3. The blank rate on new accounts below five percent for a full quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fewer than five percent of accounts created in a quarter have a blank tier or fit status at quarter end."
                cadence: rolling
              tasks:
                - "Save a report of accounts created in the last seven days with blank fit fields"
                - "Fill or reassign blank fit fields on new accounts @recurring(weekly:mon)"
                - "Message anyone who creates three or more accounts without fit fields"
                - "Note the blank rate at the end of each month"
            - name: Poor-fit signals from customer success
              description: |-
                ## Purpose
                Customer success sees the cost of a bad-fit customer long after the commission is paid: endless onboarding, constant tickets, a renewal that never comes. A monthly look with them at accounts struggling because of fit closes the loop between who sales wins and who the business can keep.

                ## Milestones
                1. Customer success has agreed what counts as a fit problem rather than a service problem.
                2. A poor-fit flag and short reason recorded on the account.
                3. Newly flagged accounts reviewed monthly against their fit status at the time of sale.
                4. Confirmed patterns added to the disqualifier list or tier criteria.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A poor-fit flag is in use, flagged accounts are reviewed every month, and at least one confirmed pattern has changed the profile within a year."
                cadence: rolling
              tasks:
                - "Agree with customer success what counts as a fit problem"
                - "Add a poor-fit flag and reason field to the account record"
                - "Review newly flagged accounts with customer success @recurring(monthly:15)"
                - "Add each confirmed pattern to the disqualifier list"
            - name: Target account universe built from the profile
              description: |-
                ## Purpose
                Sellers need real company names, not a description. Searching a company database or public registries with the profile's rules, then removing current customers, open deals and disqualified accounts, produces a named universe of targets sized to what the team can actually work.

                ## Milestones
                1. Search filters written directly from the profile rules.
                2. A list of in-profile companies that are not yet customers or open deals.
                3. Each company tiered and given a primary buyer role to approach.
                4. The universe refreshed each quarter with newly matching companies and closures removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tiered list of in-profile target companies sits in the CRM and has been refreshed at least once a quarter."
                cadence: cyclic
              tasks:
                - "Turn the profile rules into filters in your company database"
                - "Remove current customers, open deals and disqualified accounts"
                - "Tier the remaining companies and load them into the CRM"
                - "Add newly matching companies and remove closed ones @recurring(quarterly)"
            - name: ICP dashboard of pipeline, wins and revenue by fit
              description: |-
                ## Purpose
                Whether the profile is working shows up in four numbers: in-profile share of new pipeline, win rate, average deal size and 12-month retention, each split by fit status. A small dashboard updated monthly makes the case to the team with data instead of exhortation.

                ## Milestones
                1. Four measures defined and split by in-profile, near-profile and off-profile.
                2. A dashboard or sheet showing the last twelve months.
                3. The monthly update done within the first week of each month.
                4. The dashboard shown at the monthly sales meeting.

                ## Notes
                Start from the **Metrics log** template. Keep the definitions on the same page as the numbers so nobody quietly changes how win rate is counted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month dashboard of four fit measures, updated in the first week of every month for six months in a row."
                cadence: rolling
              tasks:
                - "Define the four measures and how each one is calculated"
                - "Build twelve months of history split by fit status"
                - "Update the dashboard with last month's figures @recurring(monthly:3)"
                - "Show the dashboard at the monthly sales meeting"
            - name: Reading retention by customer segment
              description: |-
                ## Purpose
                Win rate tells you who buys; retention tells you who was worth winning. Learning to build a simple cohort table, customers grouped by start quarter and segment and showing how many still pay at 6, 12 and 24 months, reveals segments that look great at signature and fade within a year.

                ## Milestones
                1. A cohort table of customers by start quarter with retention at 6, 12 and 24 months.
                2. The same table split by two or three segments.
                3. Gross and net revenue retention explained in your own words.
                4. One segment named whose retention differs sharply from the average.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cohort retention table split by segment exists, with a written paragraph naming the best and worst retaining segments."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short guide to cohort retention tables"
                - "Build a cohort table from the customer sheet by start quarter"
                - "Split the table by industry or headcount band"
                - "Write a paragraph on the segments that retain best and worst"
            - name: Lifetime value and payback by segment
              description: |-
                ## Purpose
                Segments that close fast at small deal sizes may cost more to sell and serve than they ever return. Working out average revenue, gross margin, retention and acquisition cost per segment gives a rough lifetime value and payback period, enough to compare segments fairly in planning.

                ## Milestones
                1. Average annual revenue and gross margin for each segment.
                2. A rough acquisition cost per segment from sales and marketing time and spend.
                3. A lifetime value and payback estimate for each segment, with every assumption written down.
                4. The method checked by finance or your accountant.

                ## Notes
                These are planning estimates, not accounting figures. Keep the assumptions next to the result so nobody quotes the number as fact.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lifetime value and payback estimate per segment, with assumptions listed, reviewed by finance or an accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Estimate average annual revenue and gross margin for each segment"
                - "Split last year's sales and marketing cost across the segments"
                - "Calculate lifetime value and payback with the assumptions listed"
                - "Ask finance to check the method"
                - "Refresh the segment lifetime value figures after year-end @recurring(yearly)"
            - name: Best-customer interviews on why they bought
              description: |-
                ## Purpose
                CRM data says what customers look like; only customers can say why they chose you over doing nothing. Twenty-minute conversations with eight to ten of your best customers about the moment they started looking, what nearly stopped them and how they would describe you to a peer turn the profile from a description into a story sellers can use.

                ## Milestones
                1. Eight to ten best customers interviewed with the same short set of questions.
                2. Notes written up within a day of each conversation.
                3. Recurring themes on triggers, alternatives considered and doubts grouped together.
                4. Three customer phrases chosen for sales and marketing copy, used with permission.

                ## Notes
                Start from the **Feedback themes** template. Ask the account owner to make the introduction: a founder or sales lead asking for advice gets far more yeses than a survey link.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least eight best-customer interviews written up and grouped into themes, with three approved customer phrases recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write six open questions about the buying decision"
                - "Ask account owners to introduce you to eight best customers"
                - "Hold the interviews and write up notes the same day"
                - "Ask the agent to group the interview notes into themes"
                - "Interview one best customer about their buying decision @recurring(monthly:19)"
            - name: Company data sources for firmographics and technographics
              description: |-
                ## Purpose
                Most profile traits can be found without paid tools if you know where to look: company registries, job boards, websites, technology lookup tools and trade association lists. Knowing what each source is good for, and how stale it gets, saves money and stops sellers trusting a database figure that is two years old.

                ## Milestones
                1. A list of free and paid sources for each profile trait.
                2. Each source tested on five known customers for accuracy.
                3. A note on how fresh each source is and where its gaps are.
                4. A default source chosen for each trait.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written source guide naming the default source for each profile trait, with accuracy tested on five known customers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each profile trait and where it could be found"
                - "Test three sources against five customers whose details you know"
                - "Note the accuracy and freshness of each source"
                - "Pick the default source for each trait"
                - "Recheck the default sources for accuracy on a fresh sample @recurring(yearly)"
            - name: Jobs to be done for each buyer role
              description: |-
                ## Purpose
                Job titles say who to contact; jobs to be done say what to talk about. Writing, for each role family in the profile, the job they hire your product for, the measure they are judged on and the workaround they use today makes targeting start from their world rather than your feature list.

                ## Milestones
                1. For each role family, the core job, the measure they are judged on and today's workaround written down.
                2. Each statement checked with at least two people who hold that role.
                3. The final statements added to the profile page under buyer roles.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A job, measure and current workaround statement for every role family, each checked with two people in that role."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read an introduction to jobs to be done thinking"
                - "Draft the job, measure and workaround for each role family"
                - "Check each draft with two people who hold that role"
                - "Add the final statements to the profile page"
            - name: Bottom-up count of in-profile companies
              description: |-
                ## Purpose
                Before betting the year on one profile, you need to know it is big enough. Counting the companies that match the profile in your regions and multiplying by a realistic deal size gives a bottom-up market figure that is far more useful for sales planning than a top-down industry report.

                ## Milestones
                1. A count of matching companies per region from a database or registry.
                2. A realistic annual deal size taken from your own won deals.
                3. The serviceable market figure written down with its assumptions.
                4. A check that the market covers the revenue target several times over.

                ## Notes
                If the count is under a few hundred companies, the profile may be too narrow for a growth target, or right for a high-touch, high-value approach. Say which.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written bottom-up market figure from a count of matching companies and your median deal size, compared with the revenue target."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Apply the profile filters in a company database and note the count by region"
                - "Take the median first deal value from your won deals"
                - "Multiply out the serviceable market and write down every assumption"
                - "Compare the result with this year's revenue target"
                - "Recount the in-profile companies before annual planning @recurring(yearly)"
            - name: Persona cards sellers actually open
              description: |-
                ## Purpose
                Long persona documents get read once at launch and never again. A single card per buyer role, with their priorities, the trigger that makes them act, two good opening questions and the words they use themselves, fits on a screen during call preparation and gets used.

                ## Milestones
                1. One card per role family, each fitting on a single screen.
                2. Each card holding priorities, triggers, two opening questions and the buyer's own words.
                3. The cards stored where sellers prepare for calls.
                4. Three sellers asked a month later whether they use the cards, and fixes made.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One single-screen card per buyer role is stored with the call preparation material, and three sellers have given feedback on it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft one card per role family from the interview notes"
                - "Ask the agent to tighten each card so it fits on one screen"
                - "Store the cards next to the account research material"
                - "Ask three sellers after a month what they would change"
            - name: Weighted fit score for accounts
              description: |-
                ## Purpose
                Yes or no fit labels hide the difference between a perfect match and a borderline one. A simple points score, with weights for each trait set by how strongly it marked your best accounts, gives every account a number from 0 to 100 that sellers and marketing can sort by.

                ## Milestones
                1. Each profile trait given a weight based on the earlier comparison work.
                2. Score bands defined for strong, possible and poor fit.
                3. The score calculated for every account in a spreadsheet or the CRM.
                4. The scoring rules written on one page so anyone can explain a score.

                ## Notes
                Start with five to eight traits. A score with twenty inputs is impossible to explain and usually no more accurate.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every customer and open account has a fit score from 0 to 100 calculated from written rules with defined strong, possible and poor bands."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Give each trait points in proportion to how strongly it marked the best accounts"
                - "Set the thresholds for strong, possible and poor fit"
                - "Calculate the score for every customer and open account"
                - "Write the scoring rules on one page"
                - "Recalibrate the weights using the past year's wins @recurring(yearly)"
            - name: Back-test of the fit score against past deals
              description: |-
                ## Purpose
                Even a sensible-looking score may predict nothing. Scoring last year's opportunities as they looked on the day they were created, then comparing win rate, deal size and retention across score bands, shows whether the score earns a place in the sales process or needs rework.

                ## Milestones
                1. Last year's opportunities scored using only data available when they were created.
                2. Win rate, average deal size and 12-month retention compared across score bands.
                3. A clear verdict recorded: strong-fit deals do better, or the weights need changing.
                4. Any weight changes made and tested once more.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table of win rate and deal size by score band for last year's opportunities, with a written verdict on the score."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull last year's opportunities with the details known at creation"
                - "Score each opportunity with the current weights"
                - "Compare win rate and deal size across the score bands"
                - "Adjust weights where a trait made no difference and test again"
            - name: Choosing between two candidate focus segments
              description: |-
                ## Purpose
                Small teams that chase three segments at once usually win none of them properly. When two segments both look promising, scoring them side by side on market size, win rate, deal size, retention and how easily you can reach the buyers produces a choice you can explain to the team and revisit in six months.

                ## Milestones
                1. Each candidate segment described in one sentence.
                2. Both scored on the same five criteria using real figures where you have them.
                3. A decision recorded with the reasons and the evidence that would reverse it.
                4. A review date set six months out.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between two segments, scored on five shared criteria, with a review date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Describe each candidate segment in one sentence"
                - "Score both segments on size, win rate, deal size, retention and reach"
                - "Write the decision and the evidence that would reverse it"
                - "Put a review date six months out in the calendar"
            - name: Minimum deal size worth pursuing
              description: |-
                ## Purpose
                Below a certain size, a deal costs more in sales time, onboarding and support than it brings in. Working out that floor from your own cost of selling and serving, and agreeing what happens to smaller enquiries, whether a self-serve offer, a partner or a polite no, protects seller time for the deals that pay.

                ## Milestones
                1. Average sales and onboarding hours estimated for small, medium and large deals.
                2. A minimum annual deal value at which a deal covers its cost of sale.
                3. An agreed route for enquiries below the floor.
                4. The floor added to the profile page and disqualifier list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A minimum annual deal value, with its calculation, is on the profile page alongside an agreed route for smaller enquiries."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate sales and onboarding hours for small, medium and large deals"
                - "Work out the deal value below which those hours are not covered"
                - "Agree where enquiries below the floor should go"
                - "Add the floor to the profile page"
            - name: Exit or reprice an unprofitable segment
              description: |-
                ## Purpose
                Some segments look fine on the revenue chart but drag down margin, support capacity and morale. Deciding deliberately whether to reprice, narrow the offer or stop selling to a segment, and how to treat existing customers in it fairly, is better than letting the problem continue by default.

                ## Milestones
                1. The segment's revenue, margin and support load compared with your best segment.
                2. Options set out: keep, reprice, narrow the offer or stop new sales.
                3. A decision taken by the founder or leadership with an effective date.
                4. Existing customers in the segment given a clear and fair plan.

                ## Notes
                Check existing contracts before changing terms for current customers, and take advice if notice periods or price commitments are unclear.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded leadership decision on the segment with an effective date and a written plan for its existing customers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare the segment's margin and ticket volume with your best segment"
                - "Write out the keep, reprice, narrow and stop options with their revenue effect"
                - "Take the options to the founder or leadership team for a decision"
                - "Draft how existing customers in the segment will be told and supported"
            - name: Choosing an account data provider
              description: |-
                ## Purpose
                Paid company databases differ hugely in coverage by country, industry and company size, and contracts often renew automatically at full price. Testing two or three providers against a sample of accounts you already know before signing shows which one actually covers your profile.

                ## Milestones
                1. Three providers shortlisted that cover your regions and company sizes.
                2. Each trial run on the same 50 known accounts for match rate and accuracy.
                3. Pricing, contract length and renewal terms compared side by side.
                4. A provider chosen, or a decision to stay with free sources recorded.

                ## Notes
                Start from the **Purchase decision** template. Insist on testing your own sample list, not the vendor's demo data, which is always their best-covered market.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded provider decision based on match rate and accuracy across the same 50 known accounts, with the renewal date noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three data providers that cover your regions"
                - "Prepare a test list of 50 accounts whose details you know"
                - "Run the same test list through each trial"
                - "Compare match rate, accuracy, price and renewal terms"
                - "Review data contract value two months before renewal @recurring(yearly)"
            - name: Value statement for each profile segment
              description: |-
                ## Purpose
                Retailers and logistics firms may both fit the profile yet care about completely different results. Writing a short value statement per segment, the problem in their words, the result you deliver and one proof point, stops a good profile from producing generic messaging.

                ## Milestones
                1. A value statement written for each segment within the profile.
                2. Each statement backed by a customer result from that segment.
                3. Statements tested with five prospects or customers per segment.
                4. The final statements shared with marketing and sellers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One tested value statement per segment, each with a named customer result, shared with marketing and sales."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the segments within the profile"
                - "Write the problem, result and proof for each segment"
                - "Test each statement with five people from that segment"
                - "Share the final statements with marketing and sellers"
                - "Refresh each segment's proof point with this year's results @recurring(yearly)"
            - name: Cost to serve by segment
              description: |-
                ## Purpose
                Two segments with the same deal size can have very different profits once onboarding hours, support tickets, custom work and slow payment are counted. Measuring cost to serve per segment adds the missing column to the profile and often moves a segment up or down the ranking.

                ## Milestones
                1. Onboarding hours, ticket counts and custom work hours gathered per customer.
                2. Average cost to serve calculated for each segment.
                3. Segments re-ranked on revenue minus cost to serve.
                4. The findings added to the next quarterly ICP review pack.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An average cost to serve per segment is calculated from a year of data and the segments are re-ranked on revenue after that cost."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull last year's onboarding hours and ticket counts per customer"
                - "Add custom work hours and average days to pay where recorded"
                - "Calculate the average cost to serve for each segment"
                - "Re-rank the segments on revenue after cost to serve"
            - name: ICP launch briefing for the sales team
              description: |-
                ## Purpose
                Launching a new profile by email changes nothing about which deals sellers chase. A one-hour session covering the evidence, the rules, the tiers and how exceptions work, followed by a practice round scoring real accounts, gets the team using it from the following week.

                ## Milestones
                1. A 30-minute walkthrough of evidence, profile, tiers and exceptions prepared.
                2. The session held with every seller and marketer present, or recorded for those absent.
                3. Each attendee has scored five real accounts and compared results with a colleague.
                4. Questions and objections logged, with answers sent within a week.

                ## Notes
                Lead with the numbers from your own customers. Sellers accept a profile built from their own wins far more readily than one that looks imposed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch session held with all sellers and marketers, every attendee has scored five accounts, and answers to all questions sent within a week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a one-hour session with all sellers and marketers"
                - "Build a short deck of the evidence, rules and tiers"
                - "Prepare five real accounts for attendees to score in the room"
                - "Send answers to every question raised within a week"
            - name: Annual ICP rebuild before planning
              description: |-
                ## Purpose
                Once a year, before targets, territories and budgets are set, the profile deserves a full rebuild from the latest twelve months of data rather than another quarterly tweak. Timing it a month ahead of planning means quotas and campaigns are built on who actually buys now.

                ## Milestones
                1. The customer sheet refreshed with the last twelve months of wins, churn and revenue.
                2. The best-customer ranking and trait comparison re-run.
                3. A new major version of the profile published.
                4. The new version handed to whoever sets targets and territories.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new major profile version, rebuilt from the last twelve months of data, is published at least a month before annual planning."
                cadence: cyclic
              tasks:
                - "Find out when annual planning starts and work back one month"
                - "Refresh the customer sheet with the last twelve months"
                - "Re-run the best-customer ranking and the trait comparison"
                - "Rebuild and publish the profile for the planning team @recurring(yearly)"
            - name: Leadership workshop on the ideal customer
              description: |-
                ## Purpose
                When the founder, sales lead and product lead each carry a different picture of the ideal customer, the company ends up building for one segment and selling to another. A half-day workshop that works from the evidence rather than opinion produces one agreed profile that roadmap, marketing and sales all follow.

                ## Milestones
                1. Each leader's current picture of the ideal customer written down before the session.
                2. A pre-read sent with the customer sheet, top ten and trait comparison.
                3. One agreed profile, or a short list of open disagreements each with an owner.
                4. A written summary circulated within two days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A leadership workshop held from a written evidence pack, ending in one agreed profile or named owners for each open disagreement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each leader to describe their ideal customer in three sentences"
                - "Send the evidence pack three days before the workshop"
                - "Run the workshop with the evidence on screen throughout"
                - "Circulate the agreed profile and open questions within two days"
            - name: ICP evidence pack for investors or the board
              description: |-
                ## Purpose
                Investors and boards ask the same question in different words: who buys, why, and how many more of them are there? A short pack showing the profile, win rate and retention by fit, and the in-profile market count answers it with your own data and makes the sales plan credible.

                ## Milestones
                1. Four slides covering the profile, evidence by fit, market count and focus plan.
                2. Every figure traceable to the customer sheet or dashboard.
                3. The likely hard questions listed with prepared answers.
                4. The pack presented and the feedback recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A four-slide ICP evidence pack, every figure traced to its source, presented to investors or the board with feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft four slides on profile, evidence, market and focus"
                - "Check every figure against the source sheet"
                - "Ask the agent to list the ten hardest questions a sceptical investor would ask"
                - "Rehearse the answers with a colleague playing the board"
            - name: Ninety-day test of a new segment
              description: |-
                ## Purpose
                Moving into a new segment on a hunch can cost a year. A time-boxed test with a defined list of 50 to 100 accounts, a tailored message and success thresholds such as meetings booked and first deals gives a go or no-go decision within a quarter.

                ## Milestones
                1. The test segment, account list and success thresholds written down before starting.
                2. Outreach run for ninety days with results logged weekly.
                3. Meetings, opportunities and any wins compared with the core segment.
                4. A go, extend or stop decision recorded.

                ## Notes
                Write the thresholds first. Deciding what counts as success after seeing the results almost always produces an extend.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ninety-day segment test run against thresholds set in advance, ending in a recorded go, extend or stop decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the success thresholds before contacting anyone"
                - "Build a list of 50 to 100 accounts in the test segment"
                - "Log meetings and opportunities from the test each week"
                - "Record the go, extend or stop decision at day ninety"
            - name: First ICP with fewer than ten customers
              description: |-
                ## Purpose
                Early founders cannot run statistics on five customers, but they can still be deliberate. Writing down what the first customers share, which ones were easiest to sell and serve, and a sharp hypothesis to test with the next twenty conversations beats selling to anyone who will take a call.

                ## Milestones
                1. A short paragraph on each early customer and why they bought.
                2. A written hypothesis naming the company type, buyer and trigger you will focus on.
                3. Twenty conversations with companies matching the hypothesis held and noted.
                4. The hypothesis confirmed, narrowed or replaced in writing.

                ## Notes
                Narrow feels risky with so few customers, but a tight hypothesis is the fastest way to learn. You can widen it once it is proven.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-sentence focus hypothesis tested in twenty matching conversations and then confirmed, narrowed or replaced in writing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a paragraph on each early customer and why they said yes"
                - "Pick the two easiest customers and write what they share"
                - "State your focus hypothesis in one sentence"
                - "Book twenty conversations with companies that match it"
                - "Rewrite the hypothesis after the twentieth conversation"
            - name: Local customer profile for a service business
              description: |-
                ## Purpose
                Plumbers, accountants and design studios selling locally have an ideal customer too, defined by neighbourhood, property or business type, job size and how promptly they pay. Profiling the jobs that were profitable and pleasant against those that were not helps a small business price, advertise and turn down work with confidence.

                ## Milestones
                1. Last year's jobs listed with area, customer type, job value and days to pay.
                2. The most profitable and least troublesome customer types identified.
                3. A short profile covering area, customer type, minimum job and payment behaviour.
                4. Advertising and quoting rules adjusted to match the profile.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written local customer profile covering area, customer type, minimum job size and payment behaviour, with advertising changed to match."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List last year's jobs with area, customer type, value and days to pay"
                - "Mark the jobs you would happily repeat and the ones you would not"
                - "Write a short profile of the customers behind the good jobs"
                - "Move advertising spend towards where that profile lives and works"
            - name: Fit calibration exercise for the sales team
              description: |-
                ## Purpose
                Two sellers reading the same profile will still tier the same account differently. Having every seller independently score twenty sample accounts, then comparing and discussing the disagreements, tightens the rules and gets the team applying them the same way.

                ## Milestones
                1. Twenty sample accounts chosen, including five tricky borderline cases.
                2. Every seller has tiered all twenty accounts independently.
                3. The accounts with the widest disagreement discussed as a team.
                4. Rules that caused disagreement rewritten in the profile.

                ## Notes
                Keep the same twenty accounts as a standing exercise for new sellers in their first month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every seller has tiered the same twenty accounts, and the rules behind the five widest disagreements have been rewritten."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick twenty sample accounts including five borderline ones"
                - "Ask every seller to tier the accounts independently"
                - "Discuss the five accounts with the widest spread of answers"
                - "Rewrite the rules that caused the disagreements"
            - name: Rewriting the profile after a pivot or new offer
              description: |-
                ## Purpose
                Pivots, moves upmarket and major new products can make last year's best customers a poor guide. Separating what still holds from what has changed, and setting a deliberate hypothesis for the new direction, stops the team selling the new offer to the old profile out of habit.

                ## Milestones
                1. Each trait in the current profile marked as still valid, changed or unknown.
                2. A hypothesis profile written for the new offer.
                3. Early wins under the new offer compared with the hypothesis.
                4. A revised profile published once ten new-offer wins exist.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hypothesis profile for the new offer exists, and a revised profile is published after comparison with the first ten new-offer wins."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark each profile trait as still valid, changed or unknown"
                - "Write a hypothesis profile for the new offer"
                - "Tag new opportunities as new-offer or core-offer"
                - "Compare the first ten new-offer wins with the hypothesis"
            - name: Profile stress test for a downturn
              description: |-
                ## Purpose
                Budgets tighten unevenly in a downturn: some segments freeze purchasing while others buy more to save money. Reviewing which profile traits signal budget resilience, and which in-profile accounts are most exposed, lets you shift effort before the pipeline dries up.

                ## Milestones
                1. Each segment rated for budget sensitivity from recent deal slippage and churn.
                2. Exposed and resilient segments listed.
                3. Tier criteria adjusted to favour resilient accounts for the next two quarters.
                4. A signal defined for reversing the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every segment has a written budget sensitivity rating, and tier criteria have been adjusted with a defined signal for reversing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare deal slippage and churn by segment over the last two quarters"
                - "Rate each segment's budget sensitivity as high, medium or low"
                - "Adjust the tier criteria towards the resilient segments"
                - "Write down the signal that would make you switch back"
            - name: Project versus retainer client profiles for an agency
              description: |-
                ## Purpose
                Agencies and consultancies often win plenty of one-off projects from clients who never return, while a few retainer clients carry the business. Profiling the clients who moved from a first project to a retainer, and how quickly, shows which enquiries to prioritise and how to shape the first proposal.

                ## Milestones
                1. Clients from the last two years split into one-off and retainer, with time to convert.
                2. Traits that differ between the two groups listed.
                3. A retainer-likely profile written alongside the main one.
                4. Two qualifying questions added to new enquiry calls.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written retainer-likely client profile based on two years of clients, with two qualifying questions in use on enquiry calls."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Split the last two years' clients into one-off and retainer"
                - "Note how long each retainer client took to convert"
                - "List the traits that differ between the two groups"
                - "Add two retainer-signal questions to your enquiry call notes"
            - name: Separate profiles for a second product line
              description: |-
                ## Purpose
                Second products often sell to a different buyer, or to the same company at a different moment. Deciding whether the new product shares the main profile or needs its own, and how the two overlap, keeps marketing from blending messages and sellers from pitching the wrong product to the wrong person.

                ## Milestones
                1. Wins for the second product profiled using the same method as the main one.
                2. Overlap between the two profiles measured in shared accounts and buyer roles.
                3. A decision on one combined profile or two linked ones.
                4. Accounts that match both profiles tagged in the CRM.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on one combined or two linked profiles, with accounts matching both tagged in the CRM."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Profile the second product's wins with the main method"
                - "Count the accounts and buyer roles shared by both products"
                - "Decide on one combined profile or two linked ones"
                - "Tag the accounts that match both profiles"
            - name: Lookalike search from best-customer data
              description: |-
                ## Purpose
                With the profile proven, the next step is finding companies that resemble your best customers in ways a few rules cannot capture. Feeding the top accounts into a lookalike tool, or a similarity method in a spreadsheet, surfaces companies your filters miss, which you then check by hand before anyone contacts them.

                ## Milestones
                1. A seed list of the 20 to 50 best customers prepared with clean website domains.
                2. A lookalike list generated and de-duplicated against the CRM.
                3. A random sample of 30 results checked by hand against the profile.
                4. The hit rate recorded and the lookalike source kept or dropped.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A de-duplicated lookalike list with a hand-checked hit rate from a random sample of 30, and a keep or drop decision on the source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Prepare a seed list of best customers with website domains"
                - "Generate a lookalike list from a data tool or similarity method"
                - "Remove accounts already in the CRM"
                - "Check thirty random results by hand and note the hit rate"
            - name: Timing signals layered on top of fit
              description: |-
                ## Purpose
                Fit says who could buy; timing says who might buy now. Adding a small set of signals, such as hiring for a relevant role, new funding, a leadership change, a technology switch or research activity from an intent provider, to tier A and B accounts tells sellers where to act this month.

                ## Milestones
                1. Four to six timing signals chosen from the trigger work.
                2. A free or paid source set up for each signal.
                3. Signals reviewed monthly and accounts re-prioritised.
                4. Meeting rate on signalled accounts compared with unsignalled ones after a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Timing signals are reviewed every month for tier A and B accounts, and meeting rates for signalled versus unsignalled accounts are compared after a quarter."
                cadence: rolling
              tasks:
                - "Choose four to six timing signals from your trigger list"
                - "Set up an alert or source for each signal"
                - "Review new signals on tier A and B accounts @recurring(monthly:11)"
                - "Compare meeting rates for signalled and unsignalled accounts after a quarter"
            - name: Predictive fit model with an analyst or vendor
              description: |-
                ## Purpose
                Given a few hundred closed deals, a statistical model can weigh dozens of traits better than a hand-built score. Whether built by an analyst or bought from a vendor, it earns its place only if it beats the current score on held-back deals and every output can be explained to a seller.

                ## Milestones
                1. At least 200 closed opportunities with clean outcomes and trait data available.
                2. A model trained on older deals and tested on recent ones it has not seen.
                3. Its accuracy compared with the hand-built score on the same deals.
                4. A decision to adopt, run in parallel or drop, with the reasons.

                ## Notes
                Ask any vendor to score your held-back deals blind before you sign. A model that cannot say why it scored an account highly will not be trusted by sellers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A predictive model compared with the hand-built score on held-back deals, with a recorded adopt, parallel or drop decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check you have at least 200 closed deals with clean outcomes"
                - "Hold back the most recent quarter of deals as a test set"
                - "Have the analyst or vendor score the test set blind"
                - "Compare the model with the current score and record the decision"
            - name: Channel partner profile
              description: |-
                ## Purpose
                If resellers, referral partners or integrators bring in deals, they need a profile too: which partner types send in-profile customers, close quickly and keep them happy. Applying the same method to partners stops the team signing up dozens who never produce a deal.

                ## Milestones
                1. Every partner listed with deals sourced, win rate and customer retention.
                2. Partners that produce in-profile customers described by type, size and focus.
                3. A one-page partner profile written.
                4. Partner recruitment pointed at the profile.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page partner profile based on sourced deals, win rate and retention, shared with whoever recruits partners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List partners with deals sourced, wins and customer retention"
                - "Describe the partners whose customers fit your ICP"
                - "Write a one-page partner profile"
                - "Share the partner profile with whoever recruits partners"
            - name: Twelve-month ICP impact review
              description: |-
                ## Purpose
                A year after the profile goes live, leadership will rightly ask whether it changed anything. Comparing win rate, deal size, sales cycle and first-year retention before and after launch, split by in-profile and off-profile deals, shows whether the work paid off and where the profile still needs sharpening.

                ## Milestones
                1. Before and after figures for win rate, deal size, cycle length and retention.
                2. The same figures split by in-profile and off-profile deals.
                3. A one-page summary of what improved, what did not and why.
                4. Two or three changes agreed for the next profile version.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page before and after review of four sales measures split by fit status, presented to leadership with agreed changes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the baseline figures from the year before launch"
                - "Compare them with the twelve months since launch by fit status"
                - "Write a one-page summary for leadership"
                - "Agree two or three changes for the next profile version"
---

# Ideal Customer Profile Definition

This area is for founders, small business owners and sales teams who want to know which customers win fastest, pay most and stay longest, and to turn that knowledge into rules everyone targets by. It starts with the evidence (a clean customer list, the ten best accounts, their firmographics, buying triggers and buyer roles) and the first written profile and disqualifiers, then the machinery that keeps fit visible in the pipeline, the skills of retention, lifetime value and customer interviews, the scoring and segment decisions, the launches and resets, variants for early founders, local service businesses, agencies and sales teams, and finally lookalikes, timing signals and predictive models.

What repeats is a weekly fit note on closed deals and a sweep of new accounts, monthly fit checks, dashboard updates, exception reviews and customer success feedback, quarterly ICP reviews, tier and target list refreshes, and a yearly rebuild of the profile before planning. The Meeting notes, Metrics log, Feedback themes and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
