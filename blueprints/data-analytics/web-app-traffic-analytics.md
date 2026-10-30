---
id: data-analytics.web-app-traffic-analytics
name: Web & App Traffic Analytics
description: "A measurement plan, a clean tag manager install and consent set-up, weekly and monthly traffic routines, channel and funnel skills, ecommerce and lead tracking, launch readiness and advanced app and export set-ups."
category: business
version: 1.0.0
tags: [data-analytics, web-app-traffic-analytics, small-business, knowledge-worker, team, web-analytics, tag-management, consent]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - compliance-control
    - metrics-log
    - operational-checklist
    - marketing-campaign
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Web & App Traffic Analytics
          description: "Setting up and interpreting website and app analytics, from tracking and consent to traffic sources, funnels and goal reporting."
          projects:
            - name: Measurement plan for the questions analytics must answer
              description: |-
                ## Purpose
                Most analytics set-ups collect everything and answer nothing, because nobody wrote down which decisions the numbers should support. A one-page measurement plan lists three to five business objectives, the metric for each, and the visitor actions that feed it, such as a quote request, a purchase or a newsletter sign-up. Every later tracking choice in this area is checked against that page.

                ## Milestones
                1. Three to five business objectives written, each in one sentence.
                2. One headline metric and one supporting metric named for each objective.
                3. The visitor actions behind each metric listed as candidate events.
                4. The plan agreed by the business owner or team lead and saved where everyone can find it.

                ## Notes
                Keep it to one page. If an objective has no action a visitor can take on the site or app, it belongs in a different report.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page measurement plan lists objectives, metrics and the visitor actions behind them, signed off by the decision maker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three decisions you most want website or app data to inform"
                - "Write one objective and one headline metric for each decision"
                - "Note the visitor actions on the site that show progress toward each metric"
                - "Share the one-page plan with the business owner for sign-off"
            - name: Choosing a web analytics tool
              description: |-
                ## Purpose
                Free general tools, privacy-first counters and paid product analytics suites differ in cost, data ownership, sampling and how much set-up they need. Comparing two or three options against your measurement plan, your consent obligations and who will maintain the set-up stops a default choice from forcing a costly migration two years later.

                ## Milestones
                1. Five criteria written down: cost, data ownership and location, consent fit, reporting depth and maintenance effort.
                2. Two or three tools shortlisted, for example a free general tool, a privacy-first counter and a product analytics suite.
                3. Each tool scored against the same criteria, with notes on any deal breakers.
                4. A tool chosen and the reasons recorded in a short decision note.

                ## Notes
                Start from the **Purchase decision** template. Check where each vendor stores data, and whether your privacy adviser is comfortable with it, before you commit.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision note names the chosen analytics tool, the scores of at least two alternatives and the reasons for the choice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the five criteria the analytics tool must meet"
                - "Shortlist two or three tools that fit the size of your site or app"
                - "Score each shortlisted tool against the criteria in one table"
                - "Record the chosen tool and the reasons in a decision note"
            - name: Analytics account and property structure
              description: |-
                ## Purpose
                An analytics account created on a former employee's personal login, or a separate property for every subdomain that nobody can combine, causes trouble for years. Setting up the account under a company-owned login, with one property per product and a data stream for each website and app, gives clean reporting and a clear owner from day one.

                ## Milestones
                1. The analytics account owned by a shared company login or organisation, not a personal address.
                2. A property and data stream structure drawn up, with one property per product and a stream for each site or app.
                3. At least two people with admin access, and everyone else on the lowest role they need.
                4. Account, property and stream IDs recorded in the tracking plan.

                ## Notes
                Keep staging and test sites out of the live property. A separate test property is usually cleaner than mixing test visits in and filtering them later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A company-owned analytics account exists with documented properties and streams and at least two named admins."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which login currently owns any existing analytics account"
                - "Sketch one property per product with a data stream for each site or app"
                - "Create the account and properties under the company login"
                - "Give a second trusted person admin access"
                - "Write the account, property and stream IDs into the tracking plan"
            - name: Installing the tag through a tag manager
              description: |-
                ## Purpose
                Pasting analytics code straight into page templates means every change needs a developer and nobody knows which pages are missing it. Installing a tag manager container once, on every template, lets you add and change tracking with versions and a preview mode instead of code edits.

                ## Milestones
                1. The tag manager container snippet installed on every page template, including checkout and account pages.
                2. The analytics base tag firing on all pages through the container, with no hard-coded duplicate left behind.
                3. A page view seen in the real-time report from both a desktop and a phone.
                4. The first container version published with a note describing it.

                ## Notes
                Search the site source for an old hard-coded analytics snippet before publishing, or every visit will be counted twice. Website builders often have a built-in integration; use one method, not both.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One tag manager container fires the analytics tag on every page template, verified in real time with no duplicate page views."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every page template on the site, including checkout and account pages"
                - "Install the tag manager container snippet on each template"
                - "Remove any old hard-coded analytics snippet from the site code"
                - "Confirm a page view arrives in real time from a desktop and a phone"
                - "Publish the first container version with a short description"
            - name: Consent banner and analytics consent set-up
              description: |-
                ## Purpose
                In many countries analytics cookies need a visitor's permission before they are set, and a banner that appears but does not hold tags back gives a false sense of compliance. Connecting a consent tool to the tag manager, so analytics and advertising tags respect each choice, protects the business and turns the gap from declined consent into something you can measure.

                ## Milestones
                1. Your privacy adviser's view on which tags need consent in your markets written down.
                2. A consent banner live, with accept and reject choices presented the way your adviser requires.
                3. Tags confirmed in preview mode to wait for a choice, with no analytics cookie set beforehand.
                4. The privacy notice updated to name the analytics tool and what it collects.

                ## Notes
                Start from the **Compliance control** template. Rules differ by country and change often; this project organises the set-up, and your privacy adviser or data protection lead decides what the rules require.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consent banner controls analytics and advertising tags, verified in preview mode, with the adviser's requirements recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your privacy adviser which tags need consent in the countries you serve"
                - "Choose a consent tool that integrates with your tag manager"
                - "Map each tag in the container to the consent category it belongs to"
                - "Test in preview mode that no analytics cookie is set before a choice"
                - "Check the banner still holds tags back after recent site changes @recurring(quarterly)"
            - name: Event and conversion tracking plan
              description: |-
                ## Purpose
                Without a written tracking plan, events arrive as form_submit, FormSubmit and contact_sent from three different people, and reports split one action into many rows. A shared spreadsheet listing every event, its parameters, when it fires and who owns it becomes the single reference for developers, marketers and anyone reading the reports.

                ## Milestones
                1. A naming convention agreed, such as lower case words joined by underscores.
                2. Every event from the measurement plan listed with its trigger, parameters and example values.
                3. An owner and a status of planned, live or retired recorded for each event.
                4. The plan stored in a shared place and linked from the analytics admin notes.

                ## Notes
                Use the tool's recommended event names where they exist, such as its standard ecommerce events, so built-in reports work without extra mapping.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared tracking plan lists every event with trigger, parameters, owner and status under one naming convention."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree an event naming convention and write it at the top of the plan"
                - "List each event from the measurement plan with its trigger and parameters"
                - "Mark which events map to the tool's recommended event names"
                - "Add an owner and status column and fill it for every row"
            - name: Key conversion events with values
              description: |-
                ## Purpose
                Reports only become useful once the tool knows which actions matter. Marking the three to six actions that represent real business outcomes as key events, and giving lead-type conversions an agreed value, turns traffic tables into a view of what each channel and page actually produces.

                ## Milestones
                1. Three to six key events chosen from the tracking plan, each tied to an objective.
                2. Each key event firing once per real action, with no double counting on page reloads.
                3. A value attached to purchases from the order total and an agreed estimate attached to leads.
                4. The key events visible in acquisition reports for at least one full week.

                ## Notes
                Do not mark every click as a conversion. If everything is a key event, conversion rate stops meaning anything. Agree lead values with whoever owns the sales figures.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Between three and six key events are configured, fire once per action, and carry an agreed value in reports for a full week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the three to six actions that represent real business outcomes"
                - "Mark those events as key events or conversions in the analytics tool"
                - "Agree an estimated value for each lead type with whoever owns sales figures"
                - "Reload a test confirmation page to check conversions are not counted twice"
            - name: Internal and developer traffic filters
              description: |-
                ## Purpose
                Staff checking the site, developers testing checkout and agencies running uptime monitors can make up a surprising share of a small site's visits. Filtering out office and home addresses, test environments and monitoring tools keeps the numbers about customers rather than about you.

                ## Milestones
                1. Office, staff home and agency addresses listed, or a cookie or parameter method chosen where addresses change often.
                2. An internal traffic rule created and checked in testing mode before it is switched to active.
                3. Staging and test domains excluded from the live property.
                4. Bot filtering confirmed on, with any uptime monitors excluded.

                ## Notes
                Filters usually apply only from the day they are switched on and cannot clean past data, so test first if your tool offers a testing state.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An internal traffic filter is active and verified, staging traffic is excluded and the excluded sources are listed in the tracking plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the addresses and tools that generate staff, agency and test traffic"
                - "Create an internal traffic rule and leave it in testing mode for a week"
                - "Switch the filter to active once test traffic is labelled correctly"
                - "Review the internal traffic list for new offices or agencies @recurring(quarterly)"
            - name: Cross-domain and payment gateway tracking
              description: |-
                ## Purpose
                When checkout, booking or payment sits on another domain, visits break in two and the payment provider ends up credited as the source of your sales. Configuring cross-domain measurement and excluding payment referrers keeps the original channel attached to the purchase or booking.

                ## Milestones
                1. Every domain a visitor passes through listed, including booking engines, shops and payment pages.
                2. Cross-domain measurement configured for the domains you control.
                3. Payment provider domains added to the unwanted referrals list.
                4. A test purchase showing one continuous visit with the original source intact.

                ## Notes
                Payment providers that return the buyer through a redirect are the usual culprit. If one appears in your top referrers, start here.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test conversion that crosses domains shows a single visit with its original source, and no payment provider appears as a referral."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Click through the site to list every domain a buyer passes through"
                - "Configure cross-domain measurement for each domain you control"
                - "Add payment and booking provider domains to the unwanted referrals list"
                - "Run a test purchase from a tagged link and check the source survives"
            - name: Retention, time zone, currency and linked services
              description: |-
                ## Purpose
                Defaults chosen at sign-up quietly shape every report: a time zone that shifts late orders to the wrong day, a currency that does not match the shop, a retention period that deletes the detail needed for year-on-year comparisons. Checking these settings once, and linking the search console and advertising accounts, saves months of confusion.

                ## Milestones
                1. Reporting time zone and currency matched to the business's own books.
                2. Event data retention set to the longest period your privacy adviser is comfortable with.
                3. Search console and advertising accounts linked to the property.
                4. Each setting and the date it changed recorded in the tracking plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Time zone, currency and retention settings match the business and are recorded, and search console and ad accounts are linked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare the analytics time zone and currency with your shop or accounts"
                - "Check the event data retention period and ask whether it should be longer"
                - "Link the search console and advertising accounts to the property"
                - "Note each setting and its change date in the tracking plan"
            - name: Monday traffic and conversion check
              description: |-
                ## Purpose
                Fifteen minutes each Monday on last week's visits, key events and channels catches broken tracking, a collapsed campaign or a sudden referral spike while there is still time to act. Comparing with the previous week and the same week last year separates real movement from ordinary seasonality.

                ## Milestones
                1. A saved report with sessions, key events and conversion rate by channel.
                2. A routine of comparing with the previous week and the same week last year.
                3. Any move larger than the agreed threshold noted with a likely cause.
                4. Four consecutive weekly checks completed.

                ## Notes
                Pick a threshold, such as a 20 percent swing on a channel with real volume, so you only chase changes that matter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive Monday checks are logged, each comparing key events by channel with last week and last year."
                cadence: rolling
              tasks:
                - "Save a report showing sessions, key events and conversion rate by channel"
                - "Write down the size of swing that deserves a closer look"
                - "Check last week's traffic and key events against the prior week and last year @recurring(weekly:mon)"
                - "Note any large move and its likely cause beside the saved report"
            - name: Monthly website traffic report
              description: |-
                ## Purpose
                Owners and managers rarely want the analytics tool itself; they want one page that says how many people came, from where, what they did and what changed. A fixed monthly report with the same five numbers and three sentences of commentary builds a record the business trusts and actually reads.

                ## Milestones
                1. A one-page layout with visits, key events, conversion rate, top channels and top landing pages.
                2. A commentary section of three sentences: what moved, why, and what to do about it.
                3. The first report sent to its readers by an agreed day each month.
                4. Twelve months of reports stored together for comparison.

                ## Notes
                Start from the **Metrics log** template. Keep the numbers identical every month so readers learn where to look, and put one-off questions in a separate note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page monthly report with the same core numbers and short commentary reaches its readers by the agreed day for three months running."
                cadence: rolling
              tasks:
                - "Agree the five numbers the report will always show"
                - "Build the one-page layout and fill it in for last month"
                - "Ask the agent to draft the three-sentence commentary from the month's figures"
                - "Send the monthly traffic report with commentary @recurring(monthly:4)"
            - name: Tracking check after every site release
              description: |-
                ## Purpose
                Most broken analytics is broken by an ordinary site update: a renamed button, a new form, a checkout step moved. A short checklist run after each release, testing the key events in preview or debug mode, finds the break the same day instead of at month end.

                ## Milestones
                1. A checklist of the key events and the steps to trigger each one.
                2. The checklist added to the release process so the person shipping knows to run it.
                3. Each check recorded with date, release and result.
                4. A monthly spot check running even in months with no logged release.

                ## Notes
                Start from the **Operational checklist** template. Ten minutes after a release is cheaper than a month of missing conversions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A key event checklist is part of the release process, and every release in a month has a dated check result."
                cadence: rolling
              tasks:
                - "Write a checklist of each key event and the steps to trigger it"
                - "Ask whoever ships site changes to add the checklist to their release steps"
                - "Record each release check with the date and result"
                - "Run the key event checklist as a spot check @recurring(monthly:12)"
            - name: Campaign link tagging convention and register
              description: |-
                ## Purpose
                Email, social and partner traffic lands in direct or referral when links are untagged, or splits into Facebook, facebook and fb when everyone tags differently. A written convention for campaign parameters, a shared link builder and a register of every tagged link make channel reports reliable.

                ## Milestones
                1. A convention for source, medium and campaign values written in lower case, with allowed values listed.
                2. A shared link builder sheet that produces correctly tagged links.
                3. Every live campaign link recorded in the register with its owner.
                4. Monthly checks finding no new spelling variants in source and medium.

                ## Notes
                Never tag internal links on your own site. It starts a new visit and overwrites the real source.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written tagging convention, a link builder and a register exist, and a monthly check finds no new source or medium variants."
                cadence: rolling
              tasks:
                - "Write the allowed source, medium and campaign values in one sheet"
                - "Build a link builder that joins those values into a tagged URL"
                - "Share the builder with everyone who sends emails, posts or ads"
                - "Check source and medium values for new spelling variants @recurring(monthly:18)"
            - name: Annotations log for site changes and campaigns
              description: |-
                ## Purpose
                Six months after a traffic drop, nobody remembers that the site moved to a new theme that week or that the newsletter skipped a send. A log of launches, outages, tracking changes, campaigns and search engine updates, kept as they happen, explains most strange lines on a chart in seconds.

                ## Milestones
                1. A shared log with columns for date, what changed, who changed it and the expected effect.
                2. The last three months back-filled from release notes, campaign calendars and emails.
                3. Entries added within a week of each change.
                4. The log linked from the monthly report so readers can check context.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An annotations log covering at least the past three months exists, with each week's changes added by Friday."
                cadence: rolling
              tasks:
                - "Create a shared log with date, change, owner and expected effect columns"
                - "Back-fill the last three months from release notes and campaign calendars"
                - "Add this week's site, campaign and tracking changes to the log @recurring(weekly:fri)"
                - "Link the log from the monthly traffic report"
            - name: Search console performance and indexing review
              description: |-
                ## Purpose
                Analytics shows what visitors did after they arrived; the search console shows the searches that brought them and the pages search engines could not index. A monthly look at clicks, impressions, average position and indexing errors explains organic traffic changes that analytics alone cannot.

                ## Milestones
                1. The search console verified for every version of the domain and linked to analytics.
                2. A saved comparison of top queries and pages for the last 28 days against the previous period.
                3. Indexing problems listed with the page affected and the owner of the fix.
                4. A monthly note on organic clicks, impressions and any indexing change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The search console is verified and linked, and three monthly notes record organic clicks, impressions and indexing issues with owners."
                cadence: rolling
              tasks:
                - "Verify the domain property in the search console if it is not already"
                - "Save a comparison of top queries and pages against the previous 28 days"
                - "Pass any pages not indexed to whoever maintains the site"
                - "Review search clicks, impressions and indexing issues @recurring(monthly:9)"
            - name: Analytics versus orders and leads reconciliation
              description: |-
                ## Purpose
                Analytics will never match the shop or CRM exactly: ad blockers, declined consent and test orders all open a gap. Comparing the two each month, and knowing your usual gap, tells you when a sudden widening means broken tracking rather than normal loss.

                ## Milestones
                1. Orders or leads from the shop or CRM set beside analytics conversions for the last three months.
                2. The usual gap written down as a percentage range.
                3. A rule agreed for the size of change that triggers an investigation.
                4. Monthly comparisons recorded, with any investigation and its outcome.

                ## Notes
                Match on transaction ID where you can, not just totals. It shows whether missing orders cluster on one device, browser or payment method.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly comparison of analytics conversions with shop or CRM records shows the usual gap and any investigation for three months."
                cadence: rolling
              tasks:
                - "Export last month's orders or leads from the shop or CRM"
                - "Set them beside analytics conversions and work out the gap"
                - "Write the usual gap range at the top of the comparison sheet"
                - "Compare analytics conversions with shop or CRM records @recurring(monthly:15)"
            - name: Quarterly tracking plan audit
              description: |-
                ## Purpose
                Tracking drifts: events fire that nobody documented, documented events stopped firing two releases ago, and parameters arrive empty. Setting the tracking plan beside what the tool actually received each quarter keeps the plan honest and prunes events nobody uses.

                ## Milestones
                1. A list of events received in the last 90 days, with counts, exported from the tool.
                2. Each received event matched to a row in the tracking plan or flagged as undocumented.
                3. Planned events with no data in 90 days investigated, fixed or retired.
                4. The tracking plan showing the date of the latest audit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every event received in the last 90 days is matched to the tracking plan or flagged, and the plan shows the audit date."
                cadence: cyclic
              tasks:
                - "Export the list of events and their counts for the last 90 days"
                - "Match each event to the tracking plan and flag undocumented ones"
                - "Retire or fix planned events that sent no data"
                - "Run the tracking plan audit against live event data @recurring(quarterly)"
            - name: Tag manager housekeeping and versions
              description: |-
                ## Purpose
                Containers collect old pixels, paused tests and tags from agencies long gone, each one slowing pages and sending data you no longer mean to share. Naming tags consistently, writing a note on every published version and clearing unused tags each quarter keeps the container readable and safe to change.

                ## Milestones
                1. A naming pattern for tags, triggers and variables applied across the container.
                2. Every published version carrying a description of what changed.
                3. Tags with no purpose or owner paused, then removed a month later.
                4. User access to the container reviewed and trimmed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The container follows one naming pattern, each version has a description, and a quarterly clean-up has removed unowned tags."
                cadence: cyclic
              tasks:
                - "Write a naming pattern for tags, triggers and variables"
                - "Rename existing items to the pattern in a single workspace"
                - "Pause tags with no known owner and note the date"
                - "Remove tags paused for a month and review container users @recurring(quarterly)"
            - name: Annual analytics access and ownership review
              description: |-
                ## Purpose
                Former staff, past agencies and one-off freelancers often keep admin access to analytics, tag manager and search console for years. A yearly review of every user on every tool, with the business still holding two admin seats, closes a quiet security gap and confirms who owns what.

                ## Milestones
                1. Users listed for analytics, tag manager, search console and linked advertising accounts.
                2. Anyone who no longer needs access removed or reduced.
                3. At least two current admins on each tool, both inside the business.
                4. The review date and changes recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated record shows every analytics-related tool reviewed, departed users removed and two in-house admins on each."
                cadence: cyclic
              tasks:
                - "List every user with access to analytics, tag manager and search console"
                - "Remove or downgrade people who have left or no longer need access"
                - "Confirm two people inside the business hold admin on each tool"
                - "Run the full analytics access review @recurring(yearly)"
            - name: How analytics counts users, sessions and engagement
              description: |-
                ## Purpose
                Users in analytics are browsers and devices, not people, so one customer on a phone and a laptop counts twice and a declined cookie may count as none. Knowing how your tool defines users, sessions, engaged sessions and engagement rate prevents misreadings such as comparing a new tool's numbers with an old one's and calling the difference a traffic drop.

                ## Milestones
                1. Your tool's definitions of user, session, engaged session and engagement rate written in plain words.
                2. An explanation of why visitor numbers differ between two tools you use, such as analytics and an ad platform.
                3. A short glossary added to the tracking plan for report readers.
                4. Two misreadings in past reports identified and corrected.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-words glossary of user, session and engagement definitions is in the tracking plan and two past misreadings are corrected."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your tool's help pages on how users and sessions are counted"
                - "Write a one-line definition of each core metric in plain words"
                - "Compare visitor counts in analytics and the ad platform for one week"
                - "Add the glossary to the tracking plan for report readers"
            - name: Reading source, medium and channel groupings
              description: |-
                ## Purpose
                Channel reports are built from rules: a visit with medium cpc becomes paid search, a missing source becomes direct, and anything the rules cannot place becomes unassigned. Learning how your tool groups source and medium into channels, and where direct traffic really comes from, lets you trust the channel table or fix it.

                ## Milestones
                1. Your tool's default channel rules read and summarised in a short table.
                2. The common causes of direct traffic listed, from bookmarks to untagged email and app links.
                3. Your top ten source and medium pairs checked against the channel each landed in.
                4. A custom channel grouping drafted if the defaults misplace something you care about.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of channel rules and a check of the top ten source and medium pairs show each lands in the right channel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up your tool's default channel grouping rules"
                - "Export the top ten source and medium pairs for the last month"
                - "Check which channel each pair landed in and flag mistakes"
                - "Draft a custom channel grouping for any misplaced source"
            - name: Attribution settings in analytics reports
              description: |-
                ## Purpose
                The same sale can be credited to the email that started the visit, the ad clicked last week or a model that shares it between both, and reports switch between these quietly depending on the screen. Understanding user-scoped and session-scoped dimensions, the attribution model setting and the lookback window explains why channel totals rarely agree from one report to the next.

                ## Milestones
                1. The property's attribution model and lookback windows recorded.
                2. First-user, session and key event attribution dimensions explained with one example each.
                3. Two models compared on last month's data, with the channels that gain and lose credit noted.
                4. A note on the monthly report saying which attribution view it uses.

                ## Notes
                In-tool attribution only sees tracked clicks. Questions about channels it cannot see, such as television or posters, belong to marketing mix modelling.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The property's attribution settings are recorded and the monthly report states which attribution view its channel numbers use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record the attribution model and lookback windows set on the property"
                - "Compare channel credit under two attribution models for last month"
                - "Write one example of first-user versus session source for the same sale"
                - "Add the attribution view used to the monthly report footer"
            - name: Testing tags with preview and debug tools
              description: |-
                ## Purpose
                Publishing a tag and waiting a day to see whether numbers appear wastes time and pollutes reports with test data. Learning the tag manager preview mode, the analytics debug view and a browser tag inspector shows exactly which tags fired, with which values, before anything goes live.

                ## Milestones
                1. Preview mode used to follow one visit and see which tags fired on each page.
                2. The analytics debug view showing a test event with its parameters.
                3. A broken or missing parameter found and fixed using these tools.
                4. A short testing how-to written into the tracking plan for colleagues.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can show a colleague a test event in debug view with its parameters, and a how-to note sits in the tracking plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open tag manager preview mode and follow a visit through three pages"
                - "Find your test event and its parameters in the analytics debug view"
                - "Install a tag inspector extension from your browser's official store"
                - "Write a five-step testing how-to in the tracking plan"
            - name: Data layer basics for tag manager users
              description: |-
                ## Purpose
                Scraping values from page text breaks the moment a designer changes a label, while a data layer, where the site hands values such as product ID, order total or form name to the tag manager, does not. Knowing how data layer pushes, variables and triggers fit together lets marketers write clear requests and developers build them once.

                ## Milestones
                1. The data layer explained in a paragraph with one real example from your site.
                2. A data layer variable created and read correctly in preview mode.
                3. A trigger built on a custom data layer event.
                4. A request template for developers listing the push, its keys and when it fires.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working data layer variable and custom event trigger exist in the container and a developer request template is saved."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Open the browser console on your site and inspect the existing data layer"
                - "Create a data layer variable for one value and check it in preview"
                - "Build a trigger that fires on a custom data layer event"
                - "Write a request template developers can fill in for new data layer pushes"
            - name: Building funnel explorations
              description: |-
                ## Purpose
                A conversion rate tells you how many finished; a funnel tells you where everyone else gave up. Building funnels for checkout, sign-up or a lead form, with open and closed variants and a device breakdown, points to the one step worth fixing first.

                ## Milestones
                1. A funnel for your main conversion path, with four to six steps defined from events.
                2. The funnel compared by device and by new versus returning visitors.
                3. The step with the largest drop-off identified with its rate.
                4. A one-paragraph finding shared with whoever owns that step.

                ## Notes
                A closed funnel only counts people who entered at step one; an open funnel lets them join at any step. Say which you used whenever you share the numbers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved funnel exploration for the main conversion path names the step with the largest drop-off, shared with its owner."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the four to six steps visitors take to complete your main conversion"
                - "Build the funnel exploration from those events"
                - "Break the funnel down by device category"
                - "Share the biggest drop-off step and its rate with the page owner"
            - name: Segments and comparisons that answer real questions
              description: |-
                ## Purpose
                Site-wide averages hide most of what matters: mobile visitors from social behave nothing like desktop visitors from search. Learning to build segments and comparisons, such as returning buyers, a single country or visitors who used site search, turns vague reports into answers to specific questions.

                ## Milestones
                1. Three segments built that match questions from the measurement plan.
                2. A comparison applied to a standard report and read correctly.
                3. Segment sizes checked so no conclusion rests on a handful of visitors.
                4. The segments saved and named for colleagues to reuse.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three named, saved segments answer questions from the measurement plan, each with its size noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick three questions from the measurement plan that a segment could answer"
                - "Build a segment for each question and note its size"
                - "Apply a comparison to the landing page report and read the difference"
                - "Save and name the segments so colleagues can reuse them"
            - name: Writing honest caveats on traffic numbers
              description: |-
                ## Purpose
                Traffic figures carry known gaps: declined consent, ad blockers, modelled data, thresholds that hide small rows and the occasional sampled report. Learning to state these in one line under a chart stops readers treating a 4 percent change as certain and protects your credibility when someone else's tool shows a different number.

                ## Milestones
                1. A list of the gaps that affect your data, with a rough size for each where known.
                2. A standard caveat line written for the monthly report.
                3. Sampling, threshold and modelled data warnings recognised in the tool interface.
                4. One past report corrected where a caveat changed the conclusion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A standard caveat line covering consent, blocking and modelled data appears on every monthly traffic report."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each known gap in your traffic data and its likely size"
                - "Learn how your tool flags sampled, thresholded and modelled data"
                - "Write a one-line standard caveat for the monthly report"
                - "Ask the agent to check last quarter's reports for claims the caveats undermine"
            - name: Ecommerce tracking from product view to purchase
              description: |-
                ## Purpose
                For an online shop, page views say little; product views, basket adds, checkout starts and purchases with item data say which products and channels make money. Implementing the tool's standard ecommerce events with transaction IDs and item details, then checking them against real orders, makes revenue reports trustworthy.

                ## Milestones
                1. Product view, add to basket, begin checkout and purchase events firing with item ID, name, price and quantity.
                2. Purchases carrying a unique transaction ID, total, tax, shipping and currency.
                3. Duplicate purchases on confirmation page reloads prevented.
                4. A week of analytics revenue within your usual gap of shop revenue.

                ## Notes
                Many shop platforms offer an analytics integration. Check what it sends before building your own, and never run both at once.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Standard ecommerce events with item data and transaction IDs fire, and a week of analytics revenue sits within the usual gap of shop records."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check what your shop platform's analytics integration already sends"
                - "List the ecommerce events and item fields in the tracking plan"
                - "Implement or switch on product view, basket, checkout and purchase events"
                - "Compare a week of analytics purchases with shop orders by transaction ID"
            - name: Lead form, call and email click tracking
              description: |-
                ## Purpose
                Plumbers, accountants and clinics rarely sell online; the website's job is to make the phone ring or an enquiry arrive. Tracking form submissions, click-to-call taps and email link clicks as key events, by the page and channel they came from, shows which marketing really brings enquiries.

                ## Milestones
                1. Each enquiry form tracked on successful submission, not on button click.
                2. Click-to-call and email link clicks tracked as events.
                3. Tracked enquiries compared with the enquiry inbox for one month.
                4. The pages and channels that bring the most enquiries named.

                ## Notes
                A tap on a phone number is intent, not a call. Call tracking numbers can confirm real calls, but check your privacy adviser is comfortable with how caller details are recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Form submissions, call taps and email clicks are tracked and a month of analytics enquiries is compared with the real inbox."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every enquiry form, phone number and email link on the site"
                - "Set up form tracking on successful submission or the thank-you page"
                - "Add click-to-call and email link click events"
                - "Compare a month of tracked enquiries with the enquiry inbox"
            - name: Downloads, outbound clicks, video and site search tracking
              description: |-
                ## Purpose
                Brochure downloads, clicks to booking partners, video plays and searches on your own site reveal intent that page views miss. Switching on the tool's built-in enhanced measurement where it is reliable, and building the rest as custom events, adds these signals without flooding reports.

                ## Milestones
                1. Enhanced measurement settings reviewed, with unreliable ones switched off.
                2. File downloads and outbound clicks recorded with the file name or destination.
                3. Site search terms captured from the results page URL or the data layer.
                4. A monthly list of top site search terms passed to whoever writes content.

                ## Notes
                Searches that return no results are the most useful list here: they are customers telling you what the site is missing.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Downloads, outbound clicks and site search terms are tracked and the top search terms reach the content owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Review each enhanced measurement setting and test it in debug view"
                - "Set the site search query parameter your site actually uses"
                - "Build a custom event for any video or download the defaults miss"
                - "Send the top site search terms to the content owner"
            - name: Untangling unassigned and (not set) traffic
              description: |-
                ## Purpose
                When a growing slice of unassigned channels or (not set) landing pages appears, data is arriving without the context reports need. Tracing the causes, usually untagged links, events firing before the page view or sessions that time out, recovers attribution and often exposes a tracking bug.

                ## Milestones
                1. The share of unassigned and (not set) traffic measured for the last three months.
                2. The main cause identified for each of the largest slices.
                3. Fixes made to tags, links or the channel grouping.
                4. The share checked each month and kept below an agreed level.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The causes of unassigned and (not set) traffic are documented, fixes are made, and the share stays below an agreed level for two months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Measure the share of unassigned and (not set) traffic for three months"
                - "Explore the source, medium and landing page of the largest slices"
                - "Fix the untagged links or tag firing order behind each cause"
                - "Check the unassigned share against the agreed level @recurring(monthly:24)"
            - name: Landing page performance review and fix list
              description: |-
                ## Purpose
                A handful of pages usually receives most first visits, and one weak page among them costs more than a dozen poor blog posts. Ranking landing pages by entrances, engagement and key event rate, split by device, produces a short fix list for the pages that matter.

                ## Milestones
                1. The top 20 landing pages ranked by entrances for the last 90 days.
                2. Engagement and key event rate shown for each, split by mobile and desktop.
                3. Three pages chosen for fixes, each with a stated reason.
                4. The fix list handed to page owners with a review date.

                ## Notes
                Compare pages with similar intent. A blog post and a pricing page should not share one conversion benchmark.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked review of the top 20 landing pages produces a fix list of three pages, each with an owner and review date."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Export the top 20 landing pages for the last 90 days"
                - "Add engagement and key event rate split by device"
                - "Choose three pages to fix and write the reason for each"
                - "Repeat the landing page ranking and update the fix list @recurring(quarterly)"
            - name: Site speed field data alongside traffic
              description: |-
                ## Purpose
                Slow pages on mid-range phones lose visitors before the tag even fires, so the loss can be invisible in analytics. Setting field speed data, such as the core web vitals report in the search console, beside landing page traffic and key event rate shows which slow pages cost the most.

                ## Milestones
                1. Field speed data for the main page templates collected for mobile and desktop.
                2. Slow templates matched to their traffic and key event rate.
                3. The two slowest high-traffic pages passed to a developer with figures.
                4. A before and after comparison recorded once fixes ship.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Slow, high-traffic page templates are identified with field speed and conversion data, and a before and after comparison is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Open the core web vitals report and note failing page groups"
                - "Match the failing groups to their landing page traffic"
                - "Send the two worst high-traffic pages to a developer with figures"
                - "Compare speed and key event rate four weeks after the fix ships"
            - name: Measuring visitors who decline cookies
              description: |-
                ## Purpose
                Where many visitors decline cookies, analytics can miss a large share of real traffic, and trend lines move whenever consent rates move. Deciding how to estimate that gap, through the tool's consent-based modelling, a cookieless counter running alongside, or simply logging the consent rate, keeps reports honest about what they cannot see.

                ## Milestones
                1. The consent acceptance rate taken from the consent tool for the last month.
                2. Options compared: modelled data, a cookieless counter, or reporting the gap only.
                3. A decision recorded and checked with your privacy adviser.
                4. The monthly report showing the consent rate next to traffic.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on handling declined-consent visitors, checked with the privacy adviser, and the consent rate on the monthly report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export last month's consent acceptance rate from the consent tool"
                - "Compare modelled data, a cookieless counter and reporting the gap only"
                - "Ask your privacy adviser to check the preferred option"
                - "Add the consent rate to the monthly traffic report"
            - name: Server-side tagging decision
              description: |-
                ## Purpose
                Server-side tagging moves tag processing from the visitor's browser to a server you control, which can speed pages, reduce the data shared with vendors and lengthen cookie life. It also adds hosting cost and engineering work, so weighing it against your traffic and skills prevents a fashionable project nobody can maintain.

                ## Milestones
                1. The problems it would solve listed, such as page weight, data control or loss to ad blockers.
                2. Hosting cost estimated for your monthly event volume.
                3. The skills and the owner needed to run it named.
                4. A go, wait or no decision recorded with a review date.

                ## Notes
                Server-side tagging does not remove consent obligations. Tags still need to respect each visitor's choice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go, wait or no decision on server-side tagging is recorded with cost, owner and the problems it would solve."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the problems server-side tagging would solve for your site"
                - "Estimate monthly hosting cost from your current event volume"
                - "Name who would build and maintain the server container"
                - "Record a go, wait or no decision with a review date"
            - name: Website redesign and migration tracking plan
              description: |-
                ## Purpose
                Redesigns and platform moves are the most common cause of lost analytics history and lost search traffic: tags left off new templates, events renamed, old URLs without redirects. Planning measurement before launch, testing on staging and comparing a clean before and after period protects both the data and the traffic.

                ## Milestones
                1. A four-week baseline of traffic, key events and top landing pages saved before launch.
                2. Tags and events confirmed on the staging site against the tracking plan.
                3. A redirect map from old to new URLs checked for the top 100 landing pages.
                4. Launch day annotated and key events tested on the live site.
                5. A four-week before and after comparison written up.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new site launches with every key event verified on the day, redirects for the top 100 pages, and a written before and after comparison."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Save a four-week baseline of traffic and key events before launch"
                - "Check every key event on the staging site against the tracking plan"
                - "Confirm redirects for the top 100 landing pages with the developer"
                - "Test key events and add an annotation on launch day"
                - "Write a before and after comparison four weeks after launch"
            - name: Campaign launch measurement set-up
              description: |-
                ## Purpose
                Campaigns are often judged on gut feel because measurement was an afterthought. Before a launch, agreeing the goal, building tagged links, checking the landing page records its key event and noting the baseline means the readout two weeks later can say whether it worked.

                ## Milestones
                1. The campaign goal and its success number agreed before launch.
                2. Every link tagged using the convention and logged in the register.
                3. The landing page key event tested end to end from a tagged link.
                4. A readout of visits, key events and cost per key event delivered after two weeks.

                ## Notes
                Start from the **Marketing campaign** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A campaign launches with tagged links, a tested landing page key event and a written two-week readout against its agreed goal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the campaign goal and the number that will count as success"
                - "Build and log every campaign link with the link builder"
                - "Click a tagged link and complete the key event while watching debug view"
                - "Write the two-week readout against the agreed goal"
            - name: Peak season tracking readiness
              description: |-
                ## Purpose
                Breaking tracking during a sale weekend or the holiday rush loses the most valuable data of the year, and nobody has time to fix it then. Running a freeze-and-check routine two weeks before peak, with someone watching real-time reports on the day, protects the numbers next year's plan will be built from.

                ## Milestones
                1. Peak dates and campaigns listed with the pages they will use.
                2. A tag manager change freeze agreed for the peak window.
                3. All key events and campaign links tested two weeks ahead.
                4. Someone named to watch real-time reports on peak days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two weeks before peak, every key event and campaign link is tested, a change freeze is agreed and a real-time watcher is named."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "List the peak dates, campaigns and the pages that will carry them"
                - "Agree a tag manager change freeze for the peak window"
                - "Name the person watching real-time reports on peak days"
                - "Test all key events and campaign links two weeks before peak @recurring(yearly)"
            - name: Moving to a new analytics platform
              description: |-
                ## Purpose
                Switching tools, whether forced by a vendor retiring a product or chosen for privacy or cost, breaks year-on-year comparisons unless it is planned. Running old and new tools side by side for a few weeks, exporting history and documenting how their metrics differ lets reports continue without a cliff in the chart.

                ## Milestones
                1. Historical reports exported from the old tool in the format you will need.
                2. The new tool running in parallel with the same key events for at least four weeks.
                3. Differences between the tools on users, sessions and conversions measured and explained.
                4. The old tool's tags removed and its access closed on a set date.

                ## Notes
                Expect the two tools to disagree. The goal is a documented, stable difference, not identical numbers.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "History is exported, both tools run in parallel for four weeks with a written explanation of differences, and the old tags are removed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Export the historical reports you will need from the old tool"
                - "Install the new tool alongside the old one with the same key events"
                - "Compare users, sessions and conversions between tools after four weeks"
                - "Remove the old tags and close access on the agreed date"
            - name: Year in review traffic report
              description: |-
                ## Purpose
                Yearly views show the slow changes monthly reports hide: a channel quietly shrinking, mobile overtaking desktop, one landing page that carried the year. Written within a month of year end, the report feeds next year's plans and marketing budget with evidence instead of impressions.

                ## Milestones
                1. Twelve months of traffic, key events and revenue by channel compared with the previous year.
                2. The top ten landing pages listed with their share of key events.
                3. Three findings and three recommendations written.
                4. The report shared with the people setting next year's budget.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A year in review report with channel trends, top landing pages and three recommendations reaches budget holders within a month of year end."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Pull twelve months of traffic and key events by channel against last year"
                - "List the top ten landing pages with their share of key events"
                - "Write three findings and three recommendations"
                - "Share the year in review traffic report with budget holders @recurring(yearly)"
            - name: Twenty-minute analytics for a one-person business
              description: |-
                ## Purpose
                Sole traders and small shop owners have no time to learn a full analytics tool, and do not need to. Picking three numbers, such as enquiries or orders, visits from search and the best-performing page, and checking them for twenty minutes once a month gives enough to decide where next month's marketing effort goes.

                ## Milestones
                1. Three numbers chosen that tie directly to money coming in.
                2. A saved report or bookmark that shows all three on one screen.
                3. A monthly twenty-minute check booked in the calendar.
                4. One decision written down after each check, even if it is to change nothing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three money-linked numbers sit on one saved screen and three monthly checks each end with a written decision."
                cadence: rolling
              tasks:
                - "Choose three numbers that connect to enquiries or sales"
                - "Save one report or bookmark that shows all three"
                - "Ask whoever built the site to confirm enquiries or orders are tracked"
                - "Check the three numbers and write down one decision @recurring(monthly:2)"
            - name: Taking analytics back from an agency
              description: |-
                ## Purpose
                Small businesses often discover that the agency or freelancer who built the site owns the analytics account, the tag manager and the search console, so parting ways means losing years of data. Moving ownership to a business-held login, with documentation of what was set up, protects that history whoever you work with next.

                ## Milestones
                1. Every analytics-related tool listed with its current owner.
                2. Business-held logins added as admins, then made owners.
                3. Documentation of tags, key events and filters received from the agency.
                4. Agency access reduced to the level the current contract needs.

                ## Notes
                Ask in writing and early. Most agencies hand over cleanly when asked while the relationship is good rather than after it ends.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The business holds owner access on analytics, tag manager and search console, with agency documentation filed and agency access reduced."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each analytics, tag manager and search console account and its owner"
                - "Ask the agency in writing to add your business login as admin"
                - "Request a written summary of tags, key events and filters"
                - "Reduce agency access once ownership has moved"
            - name: Mobile app analytics with screens and app events
              description: |-
                ## Purpose
                App analytics works differently from web: an SDK sends screen views and app events, users update on their own schedule, and installs are attributed through the app stores. Setting up the SDK, a screen naming scheme and the key in-app events, ideally in the same property as the website, lets a product team see web and app behaviour together.

                ## Milestones
                1. The analytics SDK added to the app, with screen views named consistently.
                2. Key in-app events from the tracking plan firing in the debug view on test devices.
                3. App version captured so behaviour can be compared release by release.
                4. Web and app data streams reporting into one property where the tool allows.

                ## Notes
                Events added in a release only arrive once users update, so plan new tracking a release ahead of the question you need answered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The app sends consistently named screen views and the key in-app events from the tracking plan, verified on test devices and visible by app version."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add app screens and events to the tracking plan with a naming scheme"
                - "Ask the app developers to add the analytics SDK and screen tracking"
                - "Verify key in-app events on test devices in the debug view"
                - "Check that app version appears as a dimension in reports"
            - name: Tracking request process for product and marketing teams
              description: |-
                ## Purpose
                When product, marketing and agencies all add tags, the container fills with duplicates and nobody knows which conversion is the real one. One request route, a weekly triage and named approvers for publishing give a team speed without losing control of the tracking plan.

                ## Milestones
                1. A request form capturing the question, event, trigger and deadline.
                2. Named owners for approving and for publishing container changes.
                3. A weekly triage slot where requests are accepted, merged or declined.
                4. Every new event added to the tracking plan before it goes live.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All new tracking arrives through one request form, is triaged weekly and appears in the tracking plan before publishing."
                cadence: rolling
              tasks:
                - "Build a short request form with question, event, trigger and deadline"
                - "Name who approves and who publishes container changes"
                - "Triage new tracking requests against the tracking plan @recurring(weekly:wed)"
                - "Tell requesters the outcome and the date their event will go live"
            - name: Analytics for a blog, newsletter or content site
              description: |-
                ## Purpose
                Writers, publishers and content teams need to know which articles bring new readers, which keep them reading and which turn them into subscribers. Tracking scroll depth, engaged time, content groups and newsletter sign-ups by article answers those questions far better than page views alone.

                ## Milestones
                1. Content groups set up by topic or format.
                2. Scroll and engaged time captured with thresholds that suit your article length.
                3. Newsletter sign-up tracked as a key event, credited to the article it happened on.
                4. A monthly ranking of articles by sign-ups per thousand readers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Articles are grouped by topic, newsletter sign-ups are a key event, and a monthly ranking of sign-ups per thousand readers is produced."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Define content groups by topic or format for every article"
                - "Set scroll tracking thresholds that suit your typical article length"
                - "Track newsletter sign-up as a key event with the article it came from"
                - "Rank articles by sign-ups per thousand readers @recurring(monthly:26)"
            - name: Page view tracking for single-page apps
              description: |-
                ## Purpose
                Sites built as single-page apps change the URL without loading a new page, so the tag may record one page view for a whole session or count every route twice. Tracking route changes properly, with the right page path and title, is what makes page and funnel reports work on these sites.

                ## Milestones
                1. Current behaviour checked by counting page views across five route changes.
                2. A history change trigger or a data layer route event chosen.
                3. Page path and title set correctly on each virtual page view.
                4. Duplicate page views ruled out in the debug view.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five route changes in a test session produce exactly five page views with correct paths and titles in the debug view."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Click through five routes in preview mode and count the page views"
                - "Choose a history change trigger or a data layer route event"
                - "Set the page path and title on each virtual page view"
                - "Confirm in the debug view that no route sends duplicate page views"
            - name: Logged-in user ID and cross-device measurement
              description: |-
                ## Purpose
                Once customers log in, sending an internal user ID lets the tool join their phone and laptop visits into one person, which changes both user counts and attribution. It also raises privacy questions, so it should be done with a non-identifying ID, a clear purpose and your privacy adviser's agreement.

                ## Milestones
                1. The purpose written down and agreed with your privacy adviser.
                2. A non-identifying internal ID chosen, never an email address or a name.
                3. The ID sent on login and cleared on logout.
                4. User counts before and after compared and explained in the glossary.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A non-identifying user ID is sent on login and cleared on logout, with the privacy adviser's agreement recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the purpose for user ID measurement and send it to your privacy adviser"
                - "Choose an internal ID that contains no name or email address"
                - "Ask developers to set the ID on login and clear it on logout"
                - "Compare user counts before and after and note the change"
            - name: Sending offline conversions back to analytics
              description: |-
                ## Purpose
                For many businesses the sale happens on the phone, in the showroom or weeks later in the CRM, so analytics credits the visit but never sees the revenue. Sending qualified leads and closed sales back to the tool, through its import feature or server-to-server measurement option, ties marketing channels to money rather than to form fills.

                ## Milestones
                1. The offline outcomes worth sending chosen, such as qualified lead and closed sale.
                2. A way to join online and offline records agreed, such as a stored client ID or transaction ID.
                3. A first batch of offline conversions sent and visible in reports.
                4. Channels compared on enquiries versus closed sales.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Offline qualified leads or sales are sent to analytics with a matching ID, and a channel comparison of enquiries versus sales is written."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose which offline outcomes to send back to analytics"
                - "Agree how to store the analytics ID with each lead in the CRM"
                - "Send a first test batch through the import or measurement API"
                - "Compare channels on enquiries and on closed sales"
            - name: Raw event export for unsampled analysis
              description: |-
                ## Purpose
                Interface reports hit limits: thresholds hide small rows, explorations sample, and history ends at the retention period. Switching on the tool's raw event export to a warehouse or storage bucket keeps every event for your own queries, and it is far easier to start early than to wish for later.

                ## Milestones
                1. The export option and its costs checked for your tool and event volume.
                2. A daily raw event export switched on to a business-owned project.
                3. A first query reproducing one interface number within a small difference.
                4. Storage cost and access reviewed after the first month.

                ## Notes
                Keep it simple at first. Modelling raw events into reporting tables is warehouse work, covered in the data modelling and pipeline areas.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A daily raw event export runs to a business-owned project and a query reproduces one interface figure closely."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether your tool offers raw event export and what it costs"
                - "Switch on the daily export to a project the business owns"
                - "Query yesterday's events to reproduce the interface session count"
                - "Review storage cost and who has access after one month"
---

# Web & App Traffic Analytics

This area is for anyone who needs to know what visitors do on a website or app: small business owners checking whether the site brings enquiries, knowledge workers who own the monthly report, and teams who share a tag manager. It starts with foundations (a measurement plan, the right tool, a company-owned account, a tag manager install, consent, a tracking plan and key events), then the routines that keep data clean, the skills behind reading channels, attribution and funnels, improvements such as ecommerce and lead tracking, dated events like a redesign or peak season, situations for sole traders, agency handovers, apps and publishers, and finally specialist set-ups such as user ID, offline conversions and raw event export.

What repeats is a Monday traffic check, a Wednesday triage of tracking requests and a Friday annotations entry, monthly reports, link tagging checks, search console reviews and order reconciliation, quarterly audits of the tracking plan, container and consent, and a yearly access review and year in review report. The Purchase decision, Compliance control, Metrics log, Operational checklist and Marketing campaign templates pair with the tool choice, consent set-up, monthly report, release check and campaign launch. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
