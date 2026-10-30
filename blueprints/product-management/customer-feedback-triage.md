---
id: product-management.customer-feedback-triage
name: Customer Feedback Triage
description: "One inbox for feedback from support, sales, reviews, surveys and interviews, a tagging taxonomy people apply the same way, a weekly triage habit and monthly themes that reach the roadmap, for product teams and small businesses."
category: business
version: 1.0.0
tags: [product-management, customer-feedback-triage, team, small-business, voice-of-customer, feedback-tagging, support-insights, customer-insights]
author: Aurum Technology
starter_structure:
  templates:
    - feedback-themes
    - meeting-notes
    - purchase-decision
    - operational-checklist
    - metrics-log
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Customer Feedback Triage
          description: "Collecting feedback from support, sales, reviews and interviews into one place, tagging it consistently and spotting patterns worth acting on."
          projects:
            - name: Inventory of every place feedback arrives
              description: |-
                ## Purpose
                Feedback usually lives in six or more places at once: the help desk, sales call notes, app store reviews, survey comments, a shared inbox, chat channels and the founder's head. Listing every source, who owns it and roughly how much arrives each month shows where signal is being lost before you build anything to catch it.

                ## Milestones
                1. A list of every feedback source, including informal ones such as direct messages and conversations at events.
                2. An owner and an estimated monthly volume written beside each source.
                3. Each source marked as captured today, partly captured or lost.
                4. The three sources losing the most useful feedback picked as the first to connect.

                ## Notes
                Ask support, sales and success separately. Each team usually knows about a channel the others have forgotten.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written source inventory with owner, volume and capture status for every channel, and three priority sources chosen."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every channel where you heard customer feedback last month"
                - "Ask support, sales and success leads which sources they would add"
                - "Estimate a monthly volume and name an owner for each source"
                - "Mark the three sources losing the most signal as first to connect"
            - name: Single feedback inbox for the whole team
              description: |-
                ## Purpose
                Scattered feedback cannot be counted, so the loudest recent comment wins every argument. Setting up one shared place where every item lands, whether a dedicated tool, a shared board or a well-structured spreadsheet, gives the team one list to triage and one source of truth to quote from.

                ## Milestones
                1. One shared feedback inbox chosen and set up, with access for everyone who submits or triages.
                2. The three priority sources from the inventory flowing into it, automatically or by a simple forwarding habit.
                3. A short note pinned in the inbox saying what belongs there and what does not.
                4. At least 50 real feedback items sitting in the inbox.

                ## Notes
                A spreadsheet with consistent columns beats an expensive tool nobody opens. Move to a tool later, once you know what you need.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single shared inbox holds at least 50 feedback items from three or more sources, with a pinned note on what belongs there."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide where the shared feedback inbox will live for now"
                - "Connect or set up forwarding for the first priority source"
                - "Write the pinned note on what belongs in the inbox"
                - "Connect the second and third priority sources"
            - name: Standard fields for every feedback record
              description: |-
                ## Purpose
                Without a standard record, half the items say only 'customer wants export' with no customer, no date and no original words. Agreeing the fields every item must carry, such as source, date, customer or account, plan or segment, the verbatim quote and a link back to the original, makes later counting and weighting possible.

                ## Milestones
                1. A field list agreed, with each field marked required or optional.
                2. The verbatim quote field kept separate from the submitter's summary.
                3. The inbox or spreadsheet updated so required fields cannot be skipped easily.
                4. Twenty existing items brought up to the new standard as a test.

                ## Notes
                Keep the required list short, five or six fields at most. Every extra required field lowers how much gets submitted.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written field standard of no more than six required fields is applied in the inbox and to twenty existing items."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the list of fields every feedback item should carry"
                - "Mark which fields are required and which are optional"
                - "Add the fields to the inbox or spreadsheet"
                - "Update twenty existing items to test the standard"
            - name: First version of the feedback tagging taxonomy
              description: |-
                ## Purpose
                Tags are what turn a pile of comments into counts, but a taxonomy invented on the fly ends up with 'exports', 'export' and 'CSV issue' as three separate tags. A first version with a short list of product areas, a type such as bug, request, usability or praise, and clear definitions gives everyone the same vocabulary from day one.

                ## Milestones
                1. Between 10 and 25 product area tags, each with a one-line definition.
                2. A small fixed set of feedback types, such as bug, request, usability problem, praise and question.
                3. A rule for what to do when an item fits two areas.
                4. The taxonomy applied to 100 existing items, with gaps noted.

                ## Notes
                Start from the **Feedback themes** template. Tag the problem area the customer hit, not the feature they proposed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written taxonomy of 10 to 25 area tags and a fixed set of types, with definitions, applied to 100 existing items."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read 50 recent feedback items and jot down the areas they touch"
                - "Group the areas into 10 to 25 tags with one-line definitions"
                - "Agree the fixed list of feedback types"
                - "Tag 100 existing items and note anything that did not fit"
            - name: Triage owner and rota agreed
              description: |-
                ## Purpose
                Triage that belongs to everyone is done by nobody, and the inbox quietly fills. Naming a single owner, or a rota for a larger team, with a stated time each week and a backup for holidays, is the cheapest fix for most feedback programmes that have stalled.

                ## Milestones
                1. One named triage owner, or a rota with names and weeks.
                2. A fixed weekly time slot for triage on the owner's calendar.
                3. A named backup for holidays and busy weeks.
                4. The owner and rota announced to support, sales and the product team.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named triage owner or rota, a weekly calendar slot and a backup are written down and announced to the teams that submit feedback."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide who owns triage, or draw up a rota for the team"
                - "Block a weekly triage slot in the owner's calendar"
                - "Name a backup for weeks the owner is away"
                - "Tell support, sales and product who owns triage and when it happens"
            - name: Support ticket feedback pipeline
              description: |-
                ## Purpose
                Support sees more feedback than any other team, yet most of it stays buried in closed tickets. Agreeing how agents flag a ticket as product feedback, such as a help desk tag, a macro or a quick form, and how flagged tickets reach the inbox turns daily support work into steady signal without adding much to an agent's load.

                ## Milestones
                1. A single agreed way for agents to flag a ticket as product feedback.
                2. Flagged tickets reaching the feedback inbox with the customer and a link to the ticket.
                3. A two-minute briefing given to the support team, with examples of what to flag.
                4. At least 30 flagged tickets arriving in the first month.

                ## Notes
                Ask agents to flag, not to summarise. The triage owner can summarise; agents have a queue to clear.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Support agents flag feedback with one agreed method and at least 30 flagged tickets reach the inbox in the first month."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the support lead how agents could flag feedback in under ten seconds"
                - "Set up the help desk tag or macro for product feedback"
                - "Route flagged tickets into the feedback inbox with a ticket link"
                - "Brief the support team with three examples of what to flag"
            - name: Sales and account team feedback capture
              description: |-
                ## Purpose
                Salespeople hear why deals are lost and what prospects compare you against, but that feedback usually reaches product as a hallway comment about one big account. A short capture form or CRM field, filled in after calls that raise product gaps, gets lost-deal reasons and requests into the inbox with the deal size attached.

                ## Milestones
                1. A capture form or CRM field with no more than five questions.
                2. Deal stage and deal size captured alongside each item.
                3. The form introduced at a sales team meeting, with the reason it matters.
                4. Lost-deal reasons from the last quarter added to the inbox.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-question capture form is in use by the sales team and last quarter's lost-deal reasons are in the feedback inbox."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a five-question feedback form for sales calls"
                - "Add deal stage and deal size to the form"
                - "Present the form at the next sales team meeting"
                - "Remind the sales team to log product gaps from the month's calls @recurring(monthly:24)"
            - name: Linking feedback to customer accounts
              description: |-
                ## Purpose
                A request from a customer on the free plan and the same request from your largest account are not the same signal. Linking each item to the customer record, with plan, segment, size and tenure, lets triage count both how many people raised something and who they are.

                ## Milestones
                1. A reliable key, such as email domain or account ID, chosen for matching feedback to customers.
                2. Plan, segment and account size pulled onto each feedback item.
                3. At least 80 percent of the last month's items linked to an account.
                4. A note on which sources cannot be linked and why.

                ## Notes
                Anonymous sources such as public reviews will never link fully. Count them separately rather than guessing who wrote them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least 80 percent of the last month's feedback items carry a linked account with plan and segment."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the field you will match feedback to customers on"
                - "Add plan, segment and account size columns to the inbox"
                - "Link the last month's items to customer accounts"
                - "Write down which sources cannot be linked"
            - name: Clearing the first month of feedback into a baseline
              description: |-
                ## Purpose
                Most teams start with a backlog of untagged items and no idea what normal looks like. Tagging one full month of feedback against the new taxonomy produces the first baseline: how much arrives, from where, about what, so later months have something to be compared with.

                ## Milestones
                1. Every item from one calendar month tagged with area and type.
                2. A count of items by source, area and type.
                3. The top five areas by volume written down with an example quote each.
                4. The baseline shared with the product team.

                ## Notes
                Choose a typical month, not the month of a big launch or outage, or the baseline will mislead you for a year.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One full month of feedback is tagged and summarised into counts by source, area and type, with the top five areas shared."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a typical recent month to use as the baseline"
                - "Tag every item from that month with area and type"
                - "Count the items by source, area and type"
                - "Share the top five areas and an example quote for each"
            - name: Weekly feedback triage session
              description: |-
                ## Purpose
                A fixed weekly session keeps the inbox small enough to read properly, which is the whole point of triage. In 45 to 60 minutes the owner tags new items, merges duplicates, routes bugs to engineering and how-to questions to support, and notes anything that looks like an emerging pattern.

                ## Milestones
                1. A weekly session held on the same day at the same time.
                2. The inbox brought to zero untriaged items at the end of each session.
                3. Bugs and support questions routed out within the week they arrived.
                4. A three-line note of emerging patterns written after each session.

                ## Notes
                Start from the **Meeting notes** template for the pattern notes. If a session regularly runs past an hour, the intake rules need tightening, not more time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The inbox holds zero untriaged items older than seven days in at least 10 of any 12 consecutive weeks."
                cadence: rolling
              tasks:
                - "Run the weekly triage session and bring the inbox to zero @recurring(weekly:tue)"
                - "Route new bugs to engineering with the customer quote attached"
                - "Send how-to questions back to support with a note"
                - "Write three lines on any emerging patterns"
            - name: Urgent feedback escalation path
              description: |-
                ## Purpose
                Some feedback cannot wait for the weekly session: a data loss report, a possible security issue, a large customer threatening to leave or a payment flow that is broken. A written list of what counts as urgent, who to tell and how fast, with a quick sweep twice a week, means the inbox never sits on a fire.

                ## Milestones
                1. A written definition of urgent feedback, with four to six concrete examples.
                2. A named contact for each kind of urgent item, such as engineering on call, security or the account owner.
                3. A target response time for each kind.
                4. The escalation note pinned where everyone who submits feedback can see it.

                ## Notes
                Security reports follow your security team's process, not the feedback process. Route them out immediately and keep only a reference.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pinned escalation note lists urgent types, contacts and response times, and every urgent item in a quarter was routed within its target."
                cadence: rolling
              tasks:
                - "Write four to six examples of feedback that counts as urgent"
                - "Name the contact and response time for each kind"
                - "Pin the escalation note in the feedback inbox"
                - "Scan new feedback for urgent bugs, security reports and churn threats @recurring(weekly:mon,thu)"
            - name: Monthly feedback themes report
              description: |-
                ## Purpose
                Leadership and product teams rarely read a raw inbox, but they will read one page a month. A short report with the top themes, how they moved since last month, one or two quotes each and what is already being done about them keeps customer voice in planning conversations.

                ## Milestones
                1. A one-page report format agreed, with themes, movement, quotes and status.
                2. The first report sent to product, support and leadership.
                3. Each theme showing volume this month and the change from last month.
                4. Questions and reactions from readers logged for the next edition.

                ## Notes
                Start from the **Feedback themes** template. A theme with five quotes from your biggest segment can matter more than one with fifty from trial users; say so in the report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page themes report has gone out on time for three consecutive months, each with volumes, movement and quotes."
                cadence: rolling
              tasks:
                - "Agree the one-page format with the product lead"
                - "Ask the agent to draft the month's themes summary from the tagged items"
                - "Check the draft against the raw counts and add two quotes per theme"
                - "Send the monthly themes report to product, support and leadership @recurring(monthly:5)"
            - name: Closing the loop with customers who gave feedback
              description: |-
                ## Purpose
                Customers who hear nothing back stop giving feedback, and the ones who hear 'we built it, thanks to you' become your best source. Keeping a list of who asked for what, and telling them when something ships or when the answer is no, rewards the people who took the time to write.

                ## Milestones
                1. Each feedback item linked to the people who raised it, so they can be found later.
                2. A short reply template for 'shipped', 'not now' and 'not planned'.
                3. Every customer linked to a shipped item contacted within two weeks of release.
                4. Replies and reactions logged against the original item.

                ## Notes
                An honest 'not planned, and here is why' keeps more trust than silence. Keep the reasons short and true.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every customer linked to a feature shipped this quarter received a personal note within two weeks of release."
                cadence: rolling
              tasks:
                - "Check that each open request lists the customers who raised it"
                - "Write reply templates for shipped, not now and not planned"
                - "Contact customers whose requests shipped this month @recurring(monthly:18)"
                - "Log each reply against the original feedback item"
            - name: Quarterly taxonomy review and clean-up
              description: |-
                ## Purpose
                Taxonomies drift: new features need new tags, old tags go unused and catch-all tags such as 'other' quietly swallow a fifth of everything. A quarterly review keeps tags meaningful without changing them so often that month-on-month counts stop comparing.

                ## Milestones
                1. Tag usage counted for the quarter, with unused and overused tags flagged.
                2. Items tagged 'other' or 'general' read and re-sorted.
                3. Changes to the taxonomy written down with the date and reason.
                4. Old items re-tagged where a tag was split or merged.

                ## Notes
                Keep a change log. Without one, a theme that seems to vanish may simply have been renamed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each quarter a dated taxonomy change log is updated and fewer than 10 percent of items carry a catch-all tag."
                cadence: cyclic
              tasks:
                - "Count how often each tag was used this quarter"
                - "Read every item tagged other and re-sort it"
                - "Record taxonomy changes with the date and reason"
                - "Run the taxonomy review and update the change log @recurring(quarterly)"
            - name: App store and review site monitoring
              description: |-
                ## Purpose
                Public reviews are feedback with an audience: prospects read them before buying and a run of one-star reviews can follow a single bad release. Checking app stores and review sites weekly, logging useful reviews into the inbox and replying where the platform allows catches release problems early and shows readers someone is listening.

                ## Milestones
                1. A list of every review site and app store page where your product appears.
                2. A weekly check logged, with useful reviews copied into the inbox.
                3. A reply guideline written for public reviews, including what never to say in public.
                4. Average rating and review count recorded monthly to spot a sudden drop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every public review site is checked weekly and useful reviews from the last quarter appear in the inbox with their rating."
                cadence: rolling
              tasks:
                - "List every app store page and review site that lists your product"
                - "Write a short guideline for replying to public reviews"
                - "Check review sites and copy useful reviews into the inbox @recurring(weekly:fri)"
                - "Note the average rating and review count at month end"
            - name: Social media and community mention sweep
              description: |-
                ## Purpose
                Complaints and wishes often appear first in forums, community groups and social posts, written in plainer language than any support ticket. A short weekly sweep of the places your customers talk, logging what is useful, catches problems you would otherwise hear about weeks later.

                ## Milestones
                1. A list of the forums, groups, hashtags and keywords to check.
                2. A saved search or alert for your product name and common misspellings.
                3. A weekly sweep completed, with useful mentions logged as feedback items.
                4. A rule for when a public post is handed to support or communications first.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly sweep of agreed community and social sources runs for a quarter, with useful mentions logged in the inbox."
                cadence: rolling
              tasks:
                - "List the communities and keywords where customers talk about you"
                - "Set up saved searches for your product name and misspellings"
                - "Sweep community and social mentions and log useful ones @recurring(weekly:wed)"
                - "Agree when a public post goes to support or communications first"
            - name: Survey verbatim processing routine
              description: |-
                ## Purpose
                Survey scores get charted while the comment box answers, often the most useful part, sit unread in an export. A monthly routine that pulls satisfaction and recommendation survey comments into the inbox, tags them and notes the score beside each one turns survey spend into usable feedback.

                ## Milestones
                1. Every active survey with a free-text question listed.
                2. Survey comments exported or synced into the inbox monthly, each with its score.
                3. Comments tagged with the same taxonomy as other feedback.
                4. Themes from low scorers and high scorers compared each month.

                ## Notes
                Read the comments from people who gave the middle scores too. They often say exactly what would move them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All survey comments from the last three months are in the inbox, tagged and paired with their scores."
                cadence: rolling
              tasks:
                - "List every survey that has a free-text question"
                - "Set up an export or sync of survey comments with their scores"
                - "Import and tag the month's survey comments @recurring(monthly:12)"
                - "Compare themes from low and high scorers"
            - name: Feedback to backlog hand-off log
              description: |-
                ## Purpose
                Themes only matter if they reach the people who decide what gets built. A simple log that links each significant theme to a backlog item, an opportunity, or a written decision not to act shows the team where feedback went, and stops the same theme being raised from scratch every quarter.

                ## Milestones
                1. Each active theme linked to a backlog item, an opportunity or a recorded decision.
                2. The theme's volume and key accounts visible from the linked backlog item.
                3. A monthly hand-off held with the product manager or team lead.
                4. Themes with no link after two months flagged for a decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every theme with more than ten items in the last quarter links to a backlog item, an opportunity or a recorded decision."
                cadence: rolling
              tasks:
                - "List the active themes with more than ten items"
                - "Link each theme to a backlog item or a recorded decision"
                - "Hold the monthly feedback hand-off with the product lead @recurring(monthly:22)"
                - "Flag themes left without a link for two months"
            - name: Quarterly feedback review with leadership
              description: |-
                ## Purpose
                Once a quarter the people who set strategy should hear the customer directly, not filtered through whichever account is shouting. A 45-minute review of the quarter's biggest themes, the trend lines and a handful of verbatim quotes gives leadership evidence to bring to planning.

                ## Milestones
                1. A quarterly slot held in leadership's calendar.
                2. Three to five themes presented with volume, trend, segments and quotes.
                3. At least one decision or question recorded from each review.
                4. Follow-ups from the previous review reported at the start of the next.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A quarterly review has been held for two consecutive quarters, each with themes presented and decisions recorded."
                cadence: cyclic
              tasks:
                - "Book a 45-minute quarterly slot with leadership"
                - "Choose three to five themes and gather quotes for each"
                - "Prepare and hold the quarterly feedback review @recurring(quarterly)"
                - "Record decisions and report back on them at the next review"
            - name: Duplicate merging and inbox hygiene
              description: |-
                ## Purpose
                Duplicates inflate some themes and hide others, especially when the same customer raises one issue through support, sales and a survey. A monthly hygiene pass that merges duplicates while keeping every customer who raised the point, and archives items older than a set age, keeps counts honest.

                ## Milestones
                1. A rule for what counts as a duplicate: same problem, not merely the same feature.
                2. Merged items keeping the list of every customer and source behind them.
                3. An archive rule for untouched items older than a set age, such as 12 months.
                4. A monthly hygiene pass logged with the number merged and archived.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly hygiene pass is logged for three consecutive months, with merged items keeping every linked customer."
                cadence: rolling
              tasks:
                - "Write down when two items count as duplicates"
                - "Agree an archive age for untouched items"
                - "Merge duplicates and archive stale items in the inbox @recurring(monthly:27)"
                - "Note how many items were merged and archived"
            - name: Summarising feedback without losing the customer's words
              description: |-
                ## Purpose
                Raw comments are long and emotional, and summaries written in a hurry turn 'I lost an hour rebuilding my report' into 'wants autosave'. Practising a summary format that records the problem, the context and the impact, while keeping the original quote alongside, makes every later count trustworthy.

                ## Milestones
                1. A summary format written: problem, context, impact, with the verbatim kept.
                2. Twenty real items summarised in the format.
                3. Summaries compared with the originals by a colleague for lost meaning.
                4. The format added to the inbox guidance.

                ## Notes
                Never edit the verbatim to make it tidier. If it needs explaining, put the explanation in the summary field.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty items summarised in the written format and reviewed by a colleague, with the format added to the inbox guidance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the problem, context and impact summary format"
                - "Summarise twenty real feedback items using it"
                - "Ask a colleague to compare your summaries with the originals"
                - "Add the format to the inbox guidance"
            - name: Tagging consistency calibration
              description: |-
                ## Purpose
                Two people tagging the same item often choose different tags, and nobody notices until the counts stop making sense. A calibration exercise where everyone who triages tags the same 30 items separately, then compares, shows which definitions are vague and builds a shared instinct.

                ## Milestones
                1. Thirty mixed items chosen and tagged separately by each person who triages.
                2. Agreement measured as the share of items where everyone chose the same area tag.
                3. The three most disputed tags rewritten with clearer definitions and examples.
                4. Agreement measured again a quarter later.

                ## Notes
                Aim for agreement above roughly 80 percent on area tags. Lower than that and your theme counts are measuring the taggers as much as the customers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A calibration round of 30 items has been run, agreement recorded, and the three most disputed tag definitions rewritten."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick thirty mixed feedback items for the calibration set"
                - "Ask each person who triages to tag them separately"
                - "Compare the results and rewrite the most disputed definitions"
                - "Rerun the calibration with a fresh set of items @recurring(quarterly)"
            - name: Finding the problem behind a feature request
              description: |-
                ## Purpose
                Feature requests are usually solutions a customer has already imagined, and building the request exactly often misses the need. Learning to reply with one or two short follow-up questions, such as what they were trying to do and what they do today instead, turns 'add a dark mode' into a problem the team can actually weigh.

                ## Milestones
                1. Three follow-up questions written that work in a reply or a ticket.
                2. The questions used on ten real requests.
                3. Each of the ten requests rewritten as a problem statement.
                4. The questions shared with support and sales so they can ask them at the source.

                ## Notes
                Keep it to one or two questions in writing. Longer conversations belong in a proper customer interview, not a triage reply.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten real requests have been followed up and rewritten as problem statements, and the questions are shared with support and sales."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three short follow-up questions for feature requests"
                - "Send the questions in reply to ten recent requests"
                - "Rewrite each request as a problem statement from the answers"
                - "Share the questions with support and sales"
            - name: Weighting feedback by segment and revenue
              description: |-
                ## Purpose
                Ten loud users on a free plan can outnumber three accounts that pay half your revenue, and raw counts will never show it. Learning to view each theme by segment, plan and revenue, side by side with the plain count, keeps triage from rewarding volume alone.

                ## Milestones
                1. Each top theme shown with item count, account count and linked revenue.
                2. The same themes broken down by segment or plan.
                3. A written note on any theme whose rank changes sharply when weighted.
                4. A default view chosen for the monthly report.

                ## Notes
                Show weighted and unweighted views together. A theme that matters only to big accounts and one that matters to everyone are both worth knowing about.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The top ten themes are shown with item count, account count and linked revenue, and a default view is chosen for reporting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count items and distinct accounts for the top ten themes"
                - "Add linked revenue or plan to each theme"
                - "Note which themes move up or down when weighted"
                - "Choose the default view for the monthly report"
            - name: Rating severity separately from sentiment
              description: |-
                ## Purpose
                Angry feedback is not always serious and calm feedback can describe a customer quietly losing data. Learning to rate severity, meaning how badly the problem blocks the customer, on a short scale separate from tone helps triage spot the polite reports that matter most.

                ## Milestones
                1. A three or four point severity scale with a definition and example for each level.
                2. Severity rated on 50 recent items alongside the existing tags.
                3. Items where tone and severity disagreed listed and discussed.
                4. The scale added to the triage guidance.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written severity scale is in the triage guidance and has been applied to 50 items, with tone and severity mismatches reviewed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a three or four point severity scale with examples"
                - "Rate severity on fifty recent items"
                - "List items where tone and severity disagreed"
                - "Add the scale to the triage guidance"
            - name: Basic feedback analysis in a spreadsheet
              description: |-
                ## Purpose
                You do not need a specialist tool to answer most questions about feedback: a pivot table on an export answers which areas are growing, which segments complain most and which sources are drying up. Learning to build three or four standard views makes the monthly report quick and lets you answer a manager's question in minutes.

                ## Milestones
                1. A clean export of the last three months of feedback in a spreadsheet.
                2. Pivot views for items by area, by month, by segment and by source.
                3. A month-on-month change column for each area.
                4. The views saved so next month's export drops straight in.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A saved spreadsheet with four pivot views and a month-on-month change column is refreshed from a new export in under 30 minutes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last three months of tagged feedback"
                - "Build pivot views by area, month, segment and source"
                - "Add a month-on-month change column for each area"
                - "Test refreshing the views with a new export"
            - name: Spotting bias in who gives feedback
              description: |-
                ## Purpose
                Feedback comes from people who are engaged enough to speak and still around to do it, so churned customers, quiet users and some segments barely appear. Learning to compare who gave feedback with who your customers actually are shows where the inbox is lopsided and which voices to go looking for.

                ## Milestones
                1. The share of feedback by segment set beside the share of customers by segment.
                2. Under-represented segments and silent groups listed.
                3. One extra source chosen to reach an under-represented group.
                4. A caveat line added to the monthly report about who is missing.

                ## Notes
                Power users and new users dominate most inboxes. Middle-tenure customers who use the product quietly are often the least heard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of feedback share and customer share by segment exists, with one new source chosen for an under-represented group."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare the share of feedback by segment with the customer base"
                - "List the segments that are under-represented or silent"
                - "Pick one source to reach an under-represented segment"
                - "Add a line on missing voices to the monthly report"
            - name: Choosing a feedback management tool
              description: |-
                ## Purpose
                Dedicated feedback tools can pull from the help desk, CRM and surveys automatically and link items to accounts, but they cost money and need someone to run them. Comparing two or three options against your actual sources, volume and budget, including staying on a spreadsheet, avoids paying for features you will not use.

                ## Milestones
                1. Requirements written from your source inventory, volume and team size.
                2. Two or three tools shortlisted, plus the option of staying with the current set-up.
                3. Each option tried with a week of real feedback where a trial allows.
                4. A decision recorded with cost, owner and a review date.

                ## Notes
                Start from the **Purchase decision** template. Check how easily you can export your data before signing; switching tools later is common.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision compares at least two options plus the current set-up against written requirements, with cost and owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write requirements from your source inventory and monthly volume"
                - "Shortlist two or three tools and include staying as you are"
                - "Trial each option with a week of real feedback"
                - "Record the decision with cost, owner and review date"
            - name: In-app feedback widget placement
              description: |-
                ## Purpose
                In-app feedback catches people in the moment, with the page and account already known, but a prompt in the wrong place produces noise or annoys users. Deciding where a feedback button or prompt goes, what it asks and what context it captures automatically gives a steady stream of specific, well-labelled feedback.

                ## Milestones
                1. One or two placements chosen, such as a help menu entry or after a key task.
                2. The prompt wording written as a single open question.
                3. Page, account and plan captured automatically with each submission.
                4. Submissions arriving in the inbox and reviewed after one month.

                ## Notes
                Ask one open question, not a form. Rating scales can come later if you need them.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An in-app feedback entry point is live, captures page and account automatically, and its first month of submissions has been reviewed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one or two places for the in-app feedback entry point"
                - "Write the single open question the prompt will ask"
                - "Agree with engineering which context is captured automatically"
                - "Review the first month of in-app submissions"
            - name: Deciding what does not count as product feedback
              description: |-
                ## Purpose
                Not every message is product feedback: billing disputes, password resets and how-to questions clog the inbox and inflate counts. Writing clear routing rules, with where each kind of message goes instead, keeps triage focused and makes sure those customers still get an answer from the right team.

                ## Milestones
                1. A list of message types that are not product feedback, with where each goes.
                2. A rule for mixed messages, such as a how-to question that reveals a usability problem.
                3. The rules agreed with support, billing and success.
                4. The share of out-of-scope items in the inbox measured before and after.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written routing rules are agreed with support and billing, and out-of-scope items fall below 10 percent of the inbox within two months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the message types that keep landing in the inbox but are not feedback"
                - "Write where each type should go instead"
                - "Agree the routing rules with support and billing"
                - "Measure the share of out-of-scope items a month later"
            - name: Theme strength score for triage
              description: |-
                ## Purpose
                Counting items alone overweights chatty sources, while gut feel overweights the last call you were on. A simple, written score for how strong a theme's signal is, combining distinct accounts, severity, segment fit and trend, gives triage a consistent way to say which themes deserve a product conversation.

                ## Milestones
                1. Three or four signal inputs chosen, each with a simple scale.
                2. The score calculated for the current top 15 themes.
                3. The ranking sense-checked against the triage owner's judgement, with disagreements discussed.
                4. The score added to the monthly report as a column, not a verdict.

                ## Notes
                The score says how loud and clear the customer signal is. Deciding what to build also weighs cost, strategy and effort, which belongs in the prioritisation conversation, not in triage.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written theme strength score with three or four inputs is applied to the top 15 themes and shown in the monthly report."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose three or four inputs for the theme strength score"
                - "Score the current top fifteen themes"
                - "Compare the ranking with the triage owner's judgement"
                - "Add the score as a column in the monthly report"
            - name: Auto-tagging rules and AI classification pilot
              description: |-
                ## Purpose
                Rules or an AI classifier can apply first-pass tags to hundreds of items a week, leaving people to check and correct rather than tag from scratch. A time-boxed pilot that measures accuracy against human tags on a held-back set shows whether automation saves time or quietly adds errors.

                ## Milestones
                1. A test set of 100 items tagged by hand as the reference.
                2. Keyword rules or an AI classifier applied to the same set.
                3. Accuracy measured per tag, with the worst tags listed.
                4. A decision recorded: adopt for first-pass tags, adopt for some tags only, or stop.

                ## Notes
                Keep a person reviewing every automated tag for the first few months. Check that any external tool handles customer data in line with your privacy rules before sending it real feedback.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Automated tags are compared with hand tags on 100 items, accuracy is recorded per tag and an adopt or stop decision is written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Hand-tag 100 items as a reference set"
                - "Ask the agent to tag the same 100 items using your taxonomy definitions"
                - "Measure accuracy per tag against the hand tags"
                - "Record whether to adopt, partly adopt or stop"
            - name: Acknowledgement and reply templates
              description: |-
                ## Purpose
                Writing a fresh reply to every piece of feedback is slow, and a cold automatic 'thanks for your feedback' tells the customer nothing. A small set of warm, honest templates for receipt, follow-up questions, 'planned', 'not planned' and 'shipped', each easy to personalise, keeps replies quick without sounding robotic.

                ## Milestones
                1. Five reply templates written, each under 100 words.
                2. Each template with one place to personalise, such as the customer's own words.
                3. Templates shared with support, sales and whoever closes the loop.
                4. Templates reviewed once a year for tone and accuracy.

                ## Notes
                Never promise dates in a template. 'Planned' can change; a missed promised date costs more trust than no date.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five reply templates under 100 words each are saved where support and sales can use them, with a yearly review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft five reply templates for the common feedback outcomes"
                - "Add one personalisation point to each template"
                - "Share the templates with support and sales"
                - "Review the reply templates for tone and accuracy @recurring(yearly)"
            - name: Privacy and retention rules for feedback data
              description: |-
                ## Purpose
                Verbatims often contain names, email addresses, account details and sometimes health or financial information customers volunteered. Agreeing with whoever handles data protection what may be stored, who can see it, how long it is kept and how to remove it on request keeps the feedback programme on the right side of your obligations.

                ## Milestones
                1. The kinds of personal data that appear in feedback listed.
                2. Access rules agreed for the inbox and any connected tools.
                3. A retention period and a deletion request process agreed with your data protection lead.
                4. A yearly retention clean-up scheduled and the first one completed.

                ## Notes
                This project organises the questions; the rules themselves come from your data protection lead or legal adviser, and depend on where you and your customers are.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written access, retention and deletion rules for feedback data are agreed with the data protection lead and the first clean-up is done."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the kinds of personal data that appear in feedback"
                - "Book time with your data protection lead to agree the rules"
                - "Restrict inbox access to the people who need it"
                - "Remove feedback older than the agreed retention period @recurring(yearly)"
            - name: Two-week feedback watch after a launch
              description: |-
                ## Purpose
                The two weeks after a release bring a burst of feedback that says whether it landed, and it arrives mixed in with everything else. Setting up a dedicated tag, a daily look for the first few days and a short summary at the end of week two gives the launch team a clear answer instead of anecdotes.

                ## Milestones
                1. A launch tag created before release and explained to support and sales.
                2. Launch feedback checked every working day for the first five days.
                3. Bugs and confusion routed within a day during the watch.
                4. A one-page summary of launch feedback shared at the end of week two.

                ## Notes
                Start from the **Operational checklist** template so each launch watch runs the same way.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch tag is in use, feedback is checked daily for five days and a two-week summary is shared with the launch team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a launch tag and brief support and sales on it"
                - "Check launch-tagged feedback each working day for five days"
                - "Route launch bugs and confusion within a day"
                - "Share a one-page summary at the end of week two"
            - name: Year in feedback retrospective
              description: |-
                ## Purpose
                Once a year it is worth stepping back from monthly themes to ask what customers said most, what changed because of it, and what was heard all year and never acted on. A short annual retrospective gives the team a record to point at in planning and shows customers' influence on the product.

                ## Milestones
                1. The year's top ten themes with volume, trend and status.
                2. A list of changes shipped that trace back to feedback.
                3. A list of long-running themes with no action and a reason for each.
                4. The retrospective presented to the team and stored with the year's reports.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An annual retrospective lists the top ten themes, the changes they drove and the unaddressed themes with reasons, and is presented to the team."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Pull the year's top ten themes from the monthly reports"
                - "List shipped changes that trace back to feedback"
                - "List long-running themes with no action and why"
                - "Present the year in feedback retrospective to the team @recurring(yearly)"
            - name: Backlog clear-out of old untriaged feedback
              description: |-
                ## Purpose
                Untriaged backlogs of hundreds or thousands of items make the inbox feel hopeless and hide recent signal. A dated clear-out, sampling and bulk-tagging what is worth keeping and archiving the rest with a note, resets the inbox so the weekly rhythm can start clean.

                ## Milestones
                1. The size and age of the untriaged backlog counted.
                2. A cut-off agreed: items newer than the cut-off triaged, older ones sampled.
                3. A random sample of older items read to catch themes worth keeping.
                4. Everything else archived with a dated note, and the inbox at zero.

                ## Notes
                Archive, do not delete. Old items can still be searched when a theme comes back.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The untriaged backlog is at zero, recent items are tagged, and older items are sampled and archived with a dated note."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count the untriaged items and note the oldest date"
                - "Agree a cut-off date with the product lead"
                - "Triage everything newer than the cut-off"
                - "Read a random sample of older items before archiving the rest"
            - name: Feedback watch around a price change
              description: |-
                ## Purpose
                Price and packaging changes bring a wave of reactions through support, sales, reviews and cancellations, and the useful signal is easy to miss in the noise. Preparing a tag, a short script for support and a daily summary for the weeks either side of the change tells the team quickly whether the change is landing as planned.

                ## Milestones
                1. A price change tag and a short support script ready before the announcement.
                2. Cancellation and downgrade reasons captured with the tag.
                3. A daily summary shared with the pricing owner for the first two weeks.
                4. A final summary of themes, volumes and affected segments written after six weeks.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Price change feedback is tagged across all sources and a six-week summary of themes and affected segments is delivered to the pricing owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up a price change tag before the announcement"
                - "Agree a short script with support for price questions"
                - "Send a daily feedback summary to the pricing owner for two weeks"
                - "Write the six-week summary of themes and segments"
            - name: Feedback handling during an outage or incident
              description: |-
                ## Purpose
                During an outage the feedback inbox fills with near-identical complaints that swamp every theme for a month if they are tagged like normal feedback. A short plan for incidents, with one incident tag, a single linked item and a separate count, keeps the monthly figures readable and gives the incident review a clean list of affected customers.

                ## Milestones
                1. An incident tag and a rule to link all related items to one parent record.
                2. A note that incident items are reported separately from normal themes.
                3. The affected customer list handed to the incident owner after each incident.
                4. The plan added to the escalation note.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "An incident tagging rule is written into the escalation note and the next incident's feedback is reported separately with an affected customer list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create an incident tag and a parent record format"
                - "Write the rule for reporting incident items separately"
                - "Agree with the incident owner what customer list they need"
                - "Add the incident plan to the escalation note"
            - name: Thirty-minute weekly triage for a solo owner
              description: |-
                ## Purpose
                If you run a small business on your own, feedback arrives in your email, your messages, your reviews and conversations at the counter, and there is no team to share it with. A 30-minute weekly habit with one notebook or spreadsheet, five tags and three questions is enough to notice what customers keep asking for.

                ## Milestones
                1. One place chosen for all feedback, such as a single spreadsheet or notes page.
                2. Five tags that fit your business, such as product, price, service, delivery and website.
                3. A 30-minute weekly slot kept for four weeks in a row.
                4. One change made to the business because of something heard more than twice.

                ## Notes
                Write down the customer's own words, even just a line. A month later you will not remember how they put it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly 30-minute triage sessions are logged and one business change is traced to repeated feedback."
                cadence: rolling
              tasks:
                - "Choose the one place where all your customer feedback will go"
                - "Pick five tags that fit your business"
                - "Spend 30 minutes logging and tagging the week's feedback @recurring(weekly:fri)"
                - "Make one change based on something customers said more than twice"
            - name: Capturing feedback from in-person and phone conversations
              description: |-
                ## Purpose
                In a shop, café, salon or trade business, most feedback is spoken and gone by the end of the day. A simple capture habit, a card by the till, a shared note on the phone or a two-minute end-of-day jot by whoever served the customer, gets those comments into the same place as your reviews and emails.

                ## Milestones
                1. A capture method chosen that staff can use in under a minute.
                2. Staff shown what to write down: what was said, roughly when, and about what.
                3. Spoken feedback collected every week for a month.
                4. The week's notes typed into the main feedback list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Spoken feedback from staff is captured every week for a month and added to the main feedback list."
                cadence: rolling
              tasks:
                - "Choose a capture method staff can use in under a minute"
                - "Show staff what to write down when a customer comments"
                - "Collect the week's spoken feedback notes and add them to the list @recurring(weekly:mon)"
                - "Thank staff for the most useful note of the month"
            - name: Handing over triage when the owner moves on
              description: |-
                ## Purpose
                When the person who has run triage for a year changes role, their judgement about tags, accounts and history usually leaves with them. A deliberate handover, with written guidance, a walk-through of open themes and two weeks of shadowed sessions, keeps the programme running at the same quality.

                ## Milestones
                1. Written triage guidance covering intake, tags, escalation and reporting.
                2. A walk-through of every open theme and its history.
                3. Two weekly sessions run together, then two led by the new owner.
                4. The new owner announced to support, sales and product.

                ## Notes
                Start from the **Operational checklist** template so the handover becomes the guidance for the next one.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Written triage guidance exists, four handover sessions are completed and the new owner is announced to the submitting teams."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the triage guidance covering intake, tags, escalation and reports"
                - "Walk the new owner through every open theme"
                - "Run two triage sessions together"
                - "Announce the new owner to support, sales and product"
            - name: Scaling triage from one person to a team rota
              description: |-
                ## Purpose
                One person can triage a few hundred items a month; past that, triage needs to be shared, and sharing breaks consistency unless it is planned. Moving to a rota of three to six people, split by product area or by week, with a shared guide and a monthly calibration, keeps quality steady as volume grows.

                ## Milestones
                1. A split chosen: by product area, by source or by rotating week.
                2. A shared triage guide every member has read.
                3. Each member's first two sessions reviewed by the original owner.
                4. A monthly calibration check of a few shared items across the rota.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A rota of three to six people is triaging under a shared guide, with each member's first two sessions reviewed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Decide whether to split the rota by area, source or week"
                - "Share the triage guide with every rota member"
                - "Review each member's first two triage sessions"
                - "Compare tags on five shared items across the rota"
            - name: Feedback triage for a few large business accounts
              description: |-
                ## Purpose
                With a B2B product where a handful of accounts make up most revenue, one account's champion can generate more feedback than the next twenty customers combined. Keeping a per-account view, separating the champion's personal wishes from the account's needs, and reviewing it with the account owner monthly keeps big customers heard without letting them steer everything.

                ## Milestones
                1. A per-account feedback view for the top ten accounts.
                2. Each item noted with who at the account raised it and their role.
                3. A monthly review of open items with each account owner.
                4. Themes raised by only one account marked clearly in reports.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top ten accounts each have a feedback view reviewed monthly with their account owner, and single-account themes are marked in reports."
                cadence: rolling
              tasks:
                - "Set up a feedback view for each of the top ten accounts"
                - "Record who at the account raised each item and their role"
                - "Review open account feedback with each account owner @recurring(monthly:9)"
                - "Mark themes raised by only one account in the monthly report"
            - name: Seasonal feedback review after peak trading
              description: |-
                ## Purpose
                Seasonal businesses such as holiday retail, tourism or event services hear most of their feedback in a few busy weeks, when there is no time to read it. Collecting it through the peak and reviewing it properly once things calm down turns one season's complaints into changes ready before the next.

                ## Milestones
                1. A quick capture habit agreed before peak season starts.
                2. All peak-season feedback collected in one list.
                3. A review held within three weeks of the season ending.
                4. Three changes chosen and scheduled before the next peak.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A post-season review is held within three weeks of the peak ending and three changes are scheduled before the next peak."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Agree a quick capture habit with staff before the busy season"
                - "Gather all peak-season feedback into one list"
                - "Hold the post-season feedback review @recurring(yearly)"
                - "Schedule three changes before the next peak"
            - name: Feedback themes linked to revenue and churn
              description: |-
                ## Purpose
                Revenue figures turn a feedback theme from 'people mention it a lot' into 'accounts worth this much raised it, and this many of them left'. Joining feedback to billing and churn data shows which themes sit with renewing customers and which with customers who later cancelled, which is the strongest evidence triage can offer.

                ## Milestones
                1. Feedback items joined to account revenue and churn status.
                2. Each top theme shown with revenue of accounts raising it and their churn rate.
                3. Themes over-represented among churned accounts flagged.
                4. The view refreshed monthly and shared with product and success leaders.

                ## Notes
                Correlation is not cause. A theme common among churned accounts is a lead to investigate, not proof of why they left.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A monthly view shows each top theme with linked revenue and churn rate, and is shared with product and success leaders."
                cadence: rolling
              tasks:
                - "Ask finance or data for account revenue and churn status by account"
                - "Join feedback items to revenue and churn status"
                - "Flag themes over-represented among churned accounts"
                - "Refresh the revenue and churn view and share it @recurring(monthly:3)"
            - name: Sizing feedback themes with product usage data
              description: |-
                ## Purpose
                Usage data can show how many people hit a problem silently compared with the few who wrote in about it. Checking each major theme against product analytics, for example how many users reach the screen people complain about, turns a theme into an estimate of reach rather than a guess.

                ## Milestones
                1. The top five themes each matched to a usage question analytics can answer.
                2. Usage figures pulled for each, with the help of whoever owns analytics.
                3. Each theme's feedback volume set beside the number of users exposed.
                4. Themes whose reach is much larger or smaller than their volume suggests noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The top five themes each have a usage figure alongside feedback volume, with mismatches noted in the monthly report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write one usage question for each of the top five themes"
                - "Ask the analytics owner for the usage figures"
                - "Set feedback volume beside users exposed for each theme"
                - "Note themes with much larger or smaller reach than expected"
            - name: Shared taxonomy across several products
              description: |-
                ## Purpose
                Companies with several products or product lines often end up with a separate taxonomy per team, so nobody can tell whether billing or onboarding is a problem everywhere or just in one place. A shared top layer of tags for cross-cutting themes, with product-specific tags underneath, lets each team keep its detail and leadership see the whole.

                ## Milestones
                1. Each product team's current taxonomy collected and compared.
                2. A shared top layer of cross-cutting tags agreed, such as billing, onboarding, performance and permissions.
                3. Product-specific tags mapped under the shared layer.
                4. A cross-product themes view produced for one quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-level taxonomy with a shared top layer is adopted by every product team and one cross-product themes view is produced."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect each product team's current tag list"
                - "Propose a shared top layer of cross-cutting tags"
                - "Map each team's tags under the shared layer"
                - "Produce a cross-product themes view for the quarter"
            - name: Cancellation reason triage
              description: |-
                ## Purpose
                Cancellation reasons from exit surveys, cancellation calls and downgrade forms are the bluntest feedback a product gets, yet they are often logged in a different system from everything else. Pulling them into the inbox, tagging them with the same taxonomy and reviewing them monthly shows which problems actually cost customers.

                ## Milestones
                1. Every source of cancellation and downgrade reasons connected to the inbox.
                2. Reasons tagged with the main taxonomy, plus a reason type such as price, missing feature, switched or no longer needed.
                3. A monthly count of reasons by type and theme.
                4. The top cancellation themes compared with the top themes from active customers.

                ## Notes
                'Too expensive' often means 'not worth it for what I use'. Where you can, read the free-text answer before trusting the dropdown.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Cancellation reasons from all sources are tagged in the inbox and reviewed monthly for three months against active customer themes."
                cadence: rolling
              tasks:
                - "List every place cancellation and downgrade reasons are recorded"
                - "Connect those sources to the feedback inbox"
                - "Add a reason type field for cancellation feedback"
                - "Review the month's cancellation reasons by type and theme @recurring(monthly:15)"
            - name: Feedback programme health metrics
              description: |-
                ## Purpose
                Measuring the triage programme itself shows whether it is working or slowly decaying. Tracking a handful of numbers, such as days from arrival to triage, share of items tagged, share linked to an account, share of shipped requests where the loop was closed and the number of sources connected, tells you where to put effort next.

                ## Milestones
                1. Four or five programme health metrics chosen, each with a definition.
                2. A first reading of each metric recorded.
                3. A target agreed for each, such as triage within seven days.
                4. Metrics reviewed every quarter, with one improvement chosen each time.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A metrics log holds at least two quarterly readings of four or five programme health metrics, each with a target."
                cadence: cyclic
              tasks:
                - "Choose four or five programme health metrics and define each"
                - "Record a first reading of each metric"
                - "Agree a target for each metric with the product lead"
                - "Review programme health metrics and choose one improvement @recurring(quarterly)"
---

# Customer Feedback Triage

This area is for whoever has to make sense of what customers keep saying: a product manager drowning in support tickets and sales notes, a small team sharing the job between them, or a small business owner who hears feedback at the till, on the phone and in reviews. It starts with the foundations (an inventory of sources, one inbox, a record standard, a first taxonomy, an owner and a cleared baseline), then the operating rhythm of triage, escalation, themes reports and closing the loop, followed by triage skills, decisions about tools and scoring, dated moments such as launches and price changes, situations for solo owners and growing teams, and specialist work linking feedback to revenue, churn and usage.

What repeats is a weekly triage session, a twice-weekly urgent sweep, weekly checks of reviews and social mentions, monthly themes reports, loop closing, survey processing, roadmap hand-offs and duplicate merging, and quarterly reviews of the taxonomy, tagging consistency and programme health. The Feedback themes, Meeting notes, Purchase decision, Operational checklist and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
