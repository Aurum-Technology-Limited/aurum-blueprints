---
id: fundraising-investors.investor-relations-website
name: Investor Relations Website
description: "A clear, compliant investor section: publishing rules and a release-day workflow, archives and share data kept current, accessible reports, results and AGM pages, and plans for listings, mergers and takeovers."
category: business
version: 1.0.0
tags: [fundraising-investors, investor-relations-website, enterprise, manager, listed-company, ir-website, disclosure, accessibility]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - purchase-decision
    - operational-checklist
    - metrics-log
    - vendor
    - risk-register
    - remediation-plan
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Investor Relations Website
          description: "Running the investor section of a company website with reports, announcements, governance documents and contact details."
          projects:
            - name: Investor website ownership and sign-off matrix
              description: |-
                ## Purpose
                Investor pages often sit between the IR team, corporate communications, the web team and the company secretary, and when a document goes up late or wrong nobody is sure who should have caught it. A one-page matrix naming who drafts, who approves and who presses publish for each content type, with named deputies, closes the gap before the next results day.

                ## Milestones
                1. Every content type on the investor section listed, from regulatory announcements to director biographies.
                2. An owner, an approver and a publisher named for each type, with a deputy for each.
                3. Out-of-hours publishing cover agreed for results released before the market opens.
                4. The matrix signed off by the head of IR and the company secretary.

                ## Notes
                Keep publishing rights to a short list of trained people. A wide pool of editors is the usual cause of an unapproved draft going live.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed matrix names an owner, approver, publisher and deputy for every investor section content type, including out-of-hours cover."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every type of content currently on the investor pages"
                - "Name an owner, approver and publisher for each content type"
                - "Agree who publishes when results go out before the market opens"
                - "Get the head of IR and the company secretary to sign the matrix"
            - name: Website disclosure obligations checklist for your market
              description: |-
                ## Purpose
                Many exchanges and company laws require specific items on the company website: annual and half-year reports kept for a set number of years, announcements posted promptly, the articles, board committee terms of reference and AGM voting results. Checking the current investor section against your market's actual rules, with the company secretary or counsel, shows what is missing before a regulator or shareholder notices.

                ## Milestones
                1. The website requirements in your listing rules, company law and governance code listed with their sources.
                2. Each requirement marked as met, partly met or missing on the live site.
                3. Retention periods for reports and announcements recorded.
                4. A dated fix list agreed for every gap and reviewed by the company secretary or counsel.

                ## Notes
                Start from the **Compliance control** template. Requirements differ between markets and change over time, so record the rule reference and the date you checked it, not just the conclusion.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A checklist of every website disclosure requirement for your market, each marked met or missing with a source reference, is reviewed by the company secretary."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the company secretary for the rules that mention the company website"
                - "List each requirement with its rule reference and retention period"
                - "Mark each requirement as met, partly met or missing on the live site"
                - "Agree a fix date for every missing item with the web owner"
                - "Recheck the checklist against any rule changes in your market @recurring(yearly)"
            - name: Investor section sitemap and page structure
              description: |-
                ## Purpose
                Investors arrive with a narrow job to do: find the latest results, the share capital figure, the next reporting date or the annual report from three years ago. A sitemap built around those jobs, with nothing important more than two clicks from the investor home page, saves them time and cuts the emails asking where things are.

                ## Milestones
                1. The ten tasks investors and analysts most often come to the site for, listed from mailbox queries and analytics.
                2. A sitemap covering results and reports, announcements, share information, governance, shareholder meetings, debt, sustainability and contacts.
                3. Every one of the ten tasks reachable in two clicks or fewer from the investor home page.
                4. The sitemap approved by IR and the web team, with the URL pattern fixed.

                ## Notes
                Fix the URL pattern now and never change it casually. Analysts and data services link deep into results pages, and links that break years later look careless.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved sitemap puts each of the ten most common investor tasks within two clicks of the investor home page, with a fixed URL pattern."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the last six months of investor mailbox questions into one list"
                - "Rank the ten jobs investors most often come to the site to do"
                - "Draw the sitemap with every section and its URL pattern"
                - "Test the sitemap by finding five documents in two clicks or fewer"
            - name: Archive inventory of reports and announcements
              description: |-
                ## Purpose
                Gaps in the archive show up at awkward moments: an analyst rebuilding a ten-year history, a lawyer checking what was published when, or a regulator asking for an old announcement. Listing every report, presentation and announcement the company has issued and matching each to its file on the site shows exactly what is missing, broken or posted under the wrong date.

                ## Milestones
                1. A spreadsheet of every annual report, interim report, results presentation and announcement for the retention period.
                2. Each item matched to its live URL or marked missing.
                3. Missing files recovered from the news service archive, the registrar or company records.
                4. Wrong dates and mismatched titles corrected on the site.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete inventory for the retention period shows every report and announcement matched to a working URL, with gaps filled or explained."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export the full list of announcements from your regulatory news service"
                - "Match each announcement and report to its URL on the investor site"
                - "Recover missing files from the newswire archive or company records"
                - "Correct titles and dates that differ from the original release"
            - name: Hosting and content management approach for investor pages
              description: |-
                ## Purpose
                Investor pages can live in the main corporate content management system, with a specialist IR website provider, or as a hybrid where the provider supplies feeds and widgets. The choice decides who can publish at 7 a.m. on results day, how announcements flow onto the site and what happens when marketing redesigns the corporate site. Comparing three options against the same criteria makes it a decision rather than an inheritance.

                ## Milestones
                1. Requirements written for announcement feeds, share price data, alert emails, accessibility, uptime and publishing access.
                2. Three options costed over three years, including internal web team time.
                3. References taken from two companies of similar size for each shortlisted provider.
                4. A recommendation approved by the CFO or head of IR, with the reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. Ask every provider what happens to the investor pages on a day the corporate website is down.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on how the investor pages are hosted and edited, comparing three costed options against the same requirements, is approved by the CFO."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the requirements list for investor page publishing and feeds"
                - "Get three-year costs from two IR website providers and the web team"
                - "Call two reference clients of each shortlisted provider"
                - "Present the recommendation and record the decision with its reasons"
            - name: Release-day publishing workflow with timestamps
              description: |-
                ## Purpose
                Regulators and investors expect price-sensitive information to reach the market through the official channel first and appear on the website promptly afterwards, never before. A written workflow that holds documents unpublished, releases them only after the regulatory news service confirms, and records the time each item goes live gives you both the discipline and the evidence.

                ## Milestones
                1. A step-by-step workflow from approved announcement to live web page, with the order of channels stated.
                2. Staged pages and files set up so nothing is publicly reachable before release.
                3. The time each item went live recorded automatically or in a publishing log.
                4. The workflow tested on a routine announcement and adjusted.

                ## Notes
                Check that staged PDFs cannot be found by guessing a URL or through the site search. Early leaks of results files have come from exactly this.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested workflow ensures announcements go live on the website only after the regulatory release, with posting times logged for every item."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the steps from approved announcement to live investor page"
                - "Confirm staged files are hidden from site search and direct URL guesses"
                - "Set up a publishing log that records the time each item went live"
                - "Run the workflow on a routine announcement and fix what slows it"
            - name: Investor contact page and shared mailbox
              description: |-
                ## Purpose
                Shareholders, analysts and journalists all look for a way to reach the company, and a contact page listing a departed manager's personal email sends their questions into a void. A shared IR mailbox, a registrar link for shareholding questions and a short note on response times route each kind of query to the right place.

                ## Milestones
                1. A shared IR mailbox set up, with at least two people holding access.
                2. The contact page listing IR, the registrar or transfer agent, media contacts and the company secretary for governance matters.
                3. An auto-reply that states the response time and points shareholding queries to the registrar.
                4. A test message through each route received by the right person.

                ## Notes
                Do not put an individual's direct line on the page unless that person is happy to take retail shareholder calls.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact page with a shared IR mailbox, registrar details and response times is live, and test messages through each route reached the right person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request a shared IR mailbox with two named people holding access"
                - "Draft the contact page with IR, registrar, media and secretary details"
                - "Write an auto-reply with the response time and a registrar link"
                - "Send a test message to the IR mailbox from outside the company @recurring(quarterly)"
            - name: Investor email alert sign-up with consent records
              description: |-
                ## Purpose
                Email alerts let shareholders and analysts hear about results, announcements and the AGM without checking the site, but a list built without clear consent becomes a data protection problem. Double opt-in, separate choices for each alert type and an easy unsubscribe keep the list both useful and lawful.

                ## Milestones
                1. Alert types agreed: all announcements, results only, and AGM and events.
                2. Double opt-in sign-up live, with consent wording reviewed by your data protection lead.
                3. Every alert email carrying an unsubscribe link and a link to the privacy notice.
                4. A test subscription and unsubscribe completed end to end.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An alert sign-up with double opt-in, per-type choices and a working unsubscribe is live, with consent wording approved by the data protection lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree which alert types subscribers can choose between"
                - "Send the consent wording to your data protection lead for review"
                - "Turn on double opt-in for every new alert subscriber"
                - "Subscribe and unsubscribe a test address to prove the flow works"
            - name: Website disclaimers and forward-looking statement notices
              description: |-
                ## Purpose
                Archived documents, old forecasts, delayed share prices and third-party data all sit side by side on investor pages, and a visitor needs to know that older material speaks only as of its date. Agreeing standard notices with counsel and placing them where they apply, rather than on one long legal page nobody opens, reduces the risk that a three-year-old outlook is read as current.

                ## Milestones
                1. Standard notices drafted for archived documents, forward-looking statements, delayed share data and third-party content.
                2. Each notice reviewed and approved by legal counsel.
                3. Notices placed on the pages and document lists they apply to.
                4. A date recorded for the next legal review of the wording.

                ## Notes
                This project organises the wording counsel approves. It does not decide what the notices must say in your jurisdiction.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Counsel-approved notices for archived material, forward-looking statements and delayed share data appear on every page they apply to."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every page that shows forecasts, archived documents or share data"
                - "Ask counsel to approve standard wording for each kind of notice"
                - "Place the approved notices on the pages that need them"
                - "Ask counsel to review the website notice wording @recurring(yearly)"
            - name: Announcement cross-check between newswire and website
              description: |-
                ## Purpose
                Announcements that reach the regulatory news service but never make it onto the website, or appear with the wrong title, are easy to miss because nobody looks at both lists side by side. A monthly reconciliation of every release against the site catches gaps within weeks instead of at the next audit or analyst complaint.

                ## Milestones
                1. A reconciliation sheet listing each month's releases from the news service.
                2. Every release matched to its live page, with the posting time noted.
                3. Missing or mistitled items fixed within two working days of the check.
                4. Three consecutive months with no unexplained gaps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every regulatory announcement for the last three months appears on the website with the correct title and date, confirmed by a monthly reconciliation."
                cadence: rolling
              tasks:
                - "Download last month's release list from the regulatory news service"
                - "Match each release to its investor page and note the posting time"
                - "Fix any missing or mistitled announcement within two working days"
                - "Reconcile the month's releases against the investor website @recurring(monthly:5)"
            - name: Weekly broken link and document check
              description: |-
                ## Purpose
                Hundreds of PDFs and deep links build up in an investor section, and a redesign elsewhere on the corporate site can quietly break dozens of them. A short weekly scan with a link checker, plus a spot check of the five most visited documents, finds problems before an analyst emails about them.

                ## Milestones
                1. A link checking tool set to scan the investor section only.
                2. A list of the five most visited documents for the weekly spot check.
                3. Broken links fixed or redirected within a week of being found.
                4. A month of weekly scans with no unresolved broken links.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly link scan of the investor section runs, and no broken link stays unresolved for more than seven days."
                cadence: rolling
              tasks:
                - "Set a link checker to crawl only the investor section"
                - "Pick the five most visited documents for a weekly spot check"
                - "Redirect or repair every broken link the scan reports"
                - "Run the link scan and open the five key documents @recurring(weekly:tue)"
            - name: Share capital and major holdings page updates
              description: |-
                ## Purpose
                The number of shares in issue, total voting rights, treasury shares and notified major holdings change with every option exercise, buyback and holding notification, and investors use these figures to work out their own disclosure thresholds. Updating the page as each change is announced, and checking it monthly against the register, keeps the published figure trustworthy.

                ## Milestones
                1. A share information page showing shares in issue, voting rights, treasury shares and the date of each figure.
                2. A major holdings table sourced only from notifications the company has received and announced.
                3. A page update step added to the publishing workflow for each relevant announcement.
                4. The published figure matched to the registrar's figure each month.

                ## Notes
                Show the as-at date beside every figure. A share count without a date is one of the most common errors on investor pages.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The share information page shows a dated share count and major holdings table that matches the registrar's figure at each monthly check."
                cadence: rolling
              tasks:
                - "Add an as-at date beside every share count on the site"
                - "Rebuild the major holdings table from announced notifications only"
                - "Add a page update step to every share capital announcement"
                - "Compare the published share count with the registrar's figure @recurring(monthly:10)"
            - name: Results page refresh each reporting period
              description: |-
                ## Purpose
                Every reporting period produces a release, a presentation, a webcast and often a data pack and transcript, and investors expect all of them in one place on the day. Running the same page refresh each period, from a template page staged before results, avoids uploading files one by one while the call is already under way.

                ## Milestones
                1. A template results page with slots for release, presentation, webcast, data pack and transcript.
                2. The next period's page built and staged a week before results.
                3. Every item live within the agreed time on results day.
                4. A short note of what went wrong, kept for the next period.

                ## Notes
                Start from the **Operational checklist** template. Half-yearly reporters can use the quarterly task for trading updates or to confirm the next results date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each reporting period a staged results page goes live with release, presentation and webcast within the agreed time, and a lessons note is kept."
                cadence: cyclic
              tasks:
                - "Build a reusable results page with slots for every results document"
                - "Stage the next results page a week before the release date @recurring(quarterly)"
                - "Check each results item is live and opens correctly on the day"
                - "Write three lines on what to change for the next period"
            - name: Financial calendar page upkeep
              description: |-
                ## Purpose
                Analysts plan model updates and meetings around the results dates, dividend dates and AGM date shown on the site, and a calendar still showing last year's dates suggests nobody is watching. Updating the calendar as soon as dates are confirmed, and checking it monthly, keeps one public source that matches what has been announced.

                ## Milestones
                1. A calendar page listing results dates, dividend dates, the AGM and confirmed conferences.
                2. Each date marked as confirmed or provisional.
                3. Past events moved to an events archive with links to their materials.
                4. The calendar checked each month against the internal reporting timetable.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The financial calendar lists every confirmed date for the next twelve months, matches the internal timetable at each monthly check and shows no past events."
                cadence: rolling
              tasks:
                - "Get the board-approved reporting timetable from the finance team"
                - "Mark each calendar date as confirmed or provisional"
                - "Move past events into an archive with links to their materials"
                - "Check the calendar page against the internal timetable @recurring(monthly:3)"
            - name: Governance documents register with review dates
              description: |-
                ## Purpose
                Articles of association, board committee terms of reference, the diversity policy, codes of conduct and director biographies all sit on the governance pages, and each changes on its own timetable. A register listing every governance document with its approval date and owner means a revised policy reaches the website the week it is approved, not months later.

                ## Milestones
                1. A register of every governance document on the site with owner, approval date and live version.
                2. Each live version matched to the latest board-approved version.
                3. Director biographies and committee memberships checked against the current board.
                4. A routine for the company secretary to tell the web owner about new approvals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every governance document on the website matches its latest approved version, confirmed by a quarterly check of the register."
                cadence: rolling
              tasks:
                - "List every governance document on the site with its owner"
                - "Ask the company secretary for the latest approved version of each"
                - "Replace outdated versions, biographies and committee lists on the site"
                - "Check the register against recent board approvals @recurring(quarterly)"
            - name: Investor page analytics and monthly usage note
              description: |-
                ## Purpose
                Usage data shows whether the investor section is doing its job: which documents are downloaded, where visitors come from, and what they search for and fail to find. A baseline now and a one-page monthly note afterwards turn the analytics into decisions about what to fix, rather than a dashboard nobody opens.

                ## Milestones
                1. Analytics set to report on the investor section separately from the rest of the site.
                2. A baseline of visits, top pages, top downloads and failed searches.
                3. A one-page monthly note with three observations and one action.
                4. Results day traffic compared across two reporting periods.

                ## Notes
                Start from the **Metrics log** template. Check that tracking respects the choices visitors make on the cookie banner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly usage note with top pages, downloads, failed searches and one action is produced for six consecutive months."
                cadence: rolling
              tasks:
                - "Set up an analytics view that covers only the investor pages"
                - "Record a baseline of visits, top downloads and failed searches"
                - "Write the monthly usage note with three observations and one action @recurring(monthly:20)"
                - "Compare results day traffic with the previous reporting period"
            - name: Investor alert delivery and list hygiene
              description: |-
                ## Purpose
                Alert emails fail quietly: a feed stops, a spam filter starts blocking the sender, or bounces pile up until the sending provider throttles the list. A monthly look at delivery and bounce figures, plus a company test address that receives every alert, tells you the system still works before an investor says they missed the results.

                ## Milestones
                1. A company test address subscribed to every alert type.
                2. Monthly delivery, open and bounce figures recorded.
                3. Hard bounces removed and unsubscribes honoured within the time your privacy notice states.
                4. Sender authentication for the alert domain confirmed by IT.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A test address receives every alert, and monthly delivery and bounce figures are recorded with hard bounces removed."
                cadence: rolling
              tasks:
                - "Subscribe a company test address to every alert type"
                - "Ask IT to confirm sender authentication for the alert domain"
                - "Review delivery, bounce and unsubscribe figures for the month @recurring(monthly:24)"
                - "Remove hard bounces from the alert list"
            - name: Narrative pages and management team freshness sweep
              description: |-
                ## Purpose
                Text written around the last results goes stale fast: a strategy page quoting last year's revenue, a management page still listing a departed CFO, a news box stuck on an old headline. A monthly sweep of the narrative pages against the latest results and the current team catches these before investors do.

                ## Milestones
                1. A list of every narrative page with the facts it quotes.
                2. Each quoted figure linked to the report it comes from.
                3. The management team page matched to the current executive committee.
                4. No page quoting figures older than the latest reported period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No narrative investor page quotes figures older than the latest reported period or lists anyone who has left the management team."
                cadence: rolling
              tasks:
                - "List each narrative page and every figure it quotes"
                - "Note the source report beside each quoted figure"
                - "Update the management team page against the current executive list"
                - "Sweep the narrative pages for stale figures and names @recurring(monthly:16)"
            - name: Annual investor site review and archive roll-forward
              description: |-
                ## Purpose
                Once a year the investor section needs more than upkeep: the year's reports filed into the archive structure, documents past the retention period dealt with, usage compared year on year and the disclosure checklist confirmed. Doing it after the annual report and AGM season, when the year's documents are complete, keeps it to half a day.

                ## Milestones
                1. The year's reports, presentations and AGM documents filed in the archive structure.
                2. Items older than the retention period kept, moved or removed under an agreed rule.
                3. Year-on-year usage compared and three priorities set for the coming year.
                4. A review summary shared with the head of IR.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review files the year's documents in the archive, applies the retention rule and records three priorities agreed by the head of IR."
                cadence: cyclic
              tasks:
                - "Book half a day after the AGM for the yearly investor site review @recurring(yearly)"
                - "File the year's reports and presentations in the archive structure"
                - "Apply the agreed retention rule to the oldest documents"
                - "Send the head of IR a summary with three priorities for next year"
            - name: Publishing access and security review for investor pages
              description: |-
                ## Purpose
                A defaced investor page, or a fake announcement posted through a compromised editor account, can move a share price before anyone notices, so the investor section deserves tighter controls than the careers page. A quarterly review of who can publish, with multi-factor sign-in and patching confirmed by IT, closes the most likely routes in.

                ## Milestones
                1. A list of everyone with edit or publish rights on the investor section.
                2. Multi-factor sign-in required for every account with publish rights.
                3. Leavers and role changes removed within a week.
                4. IT confirmation each quarter that the content system and plug-ins are patched.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter every investor page publisher uses multi-factor sign-in, no leaver keeps access and IT has confirmed patching in writing."
                cadence: rolling
              tasks:
                - "Export the list of accounts with investor page publish rights"
                - "Ask IT to require multi-factor sign-in for those accounts"
                - "Remove leavers and anyone who no longer needs access"
                - "Review publish rights and patch status with IT @recurring(quarterly)"
            - name: The website as a fair disclosure channel
              description: |-
                ## Purpose
                Companies often treat the investor section as a noticeboard, but regulators treat what appears there as disclosure, and a slide deck shown to one fund and posted a week later can raise selective disclosure questions. Learning when your market accepts the website as a channel, and when the regulatory news service must come first, lets you set clear rules for presentations, transcripts and other investor material.

                ## Milestones
                1. A one-page note on when your market treats the website as an acceptable disclosure channel and when it does not.
                2. A rule agreed for posting presentations used at conferences and roadshows.
                3. Two or three published examples of guidance or enforcement involving company websites summarised.
                4. The note checked by counsel and shared with everyone who publishes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A counsel-checked note sets out when the website may carry investor material and includes a written rule for posting conference and roadshow presentations."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your regulator's guidance on company websites and disclosure"
                - "Agree a rule for posting presentations shown at investor meetings"
                - "Write a one-page note on what the site may and may not carry"
                - "Ask counsel to check the note before sharing it with publishers"
            - name: Accessibility standards for investor content
              description: |-
                ## Purpose
                Annual reports published only as large, untagged PDFs shut out screen reader users and frustrate anyone on a phone, and accessibility law in many markets now reaches listed company websites. Learning the standard your organisation targets, usually a WCAG level, and how it applies to PDFs, data tables, charts and webcasts lets you brief designers and providers properly.

                ## Milestones
                1. A summary of the accessibility level your organisation targets and any legal duty in your markets.
                2. A checklist for accessible PDFs, data tables, charts and webcast captions.
                3. Three existing investor documents tested with a free accessibility checker.
                4. Findings shared with the report designers and the web team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An accessibility checklist for investor PDFs, tables, charts and webcasts exists, and three current documents have been tested against it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the web team which accessibility level the corporate site targets"
                - "Run three investor PDFs through a free accessibility checker"
                - "Write a checklist for tagged PDFs, tables, charts and captions"
                - "Share the checklist with the annual report designers"
            - name: How investors and analysts use IR websites
              description: |-
                ## Purpose
                Buy-side analysts, retail shareholders, credit investors and journalists use the site differently: analysts want spreadsheets and transcripts, retail holders want dividend dates and the registrar, and stewardship teams want policies and voting results. Five short interviews and two published studies of IR website use show what to put first.

                ## Milestones
                1. Five short interviews held with an analyst, a fund manager, a retail holder, a credit investor and a journalist.
                2. Two published surveys or studies of IR website use summarised.
                3. A ranked list of needs by user type.
                4. Three changes to the site proposed from the findings.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of needs by user type, drawn from five interviews and two published studies, leads to three proposed site changes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask three friendly analysts and investors for twenty minutes each"
                - "Ask each one what they last came to the site for and whether they found it"
                - "Summarise two published studies of how investors use IR websites"
                - "Ask the agent to group the interview notes into needs by user type"
            - name: Plain language writing for investor pages
              description: |-
                ## Purpose
                Page copy on investor sections is often lifted straight from the annual report, dense with defined terms and long sentences that read badly on a screen. Practising a plain style for web pages, with short paragraphs, defined terms explained once and every figure given with its period, makes the section usable by retail shareholders without irritating analysts.

                ## Milestones
                1. A one-page style note covering sentence length, defined terms, figures and dates.
                2. Three existing pages rewritten to the style note.
                3. The rewrites checked by the legal reviewer for unchanged meaning.
                4. The style note adopted for all new investor page copy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A style note for investor page copy is adopted, and three rewritten pages have passed legal review for unchanged meaning."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three investor pages with the densest copy"
                - "Write a one-page style note for investor page copy"
                - "Ask the agent to suggest plainer versions of the densest paragraphs"
                - "Get legal to confirm the rewrites keep the original meaning"
            - name: Machine-readable reports and structured data
              description: |-
                ## Purpose
                Many markets now require annual reports in a tagged electronic format such as iXBRL, and data services and AI tools increasingly read the investor site directly. Understanding which structured filings your company produces, where each must be published, and how page markup helps search engines find official documents lets you publish them correctly beside the PDF.

                ## Milestones
                1. A list of the tagged filings your company produces and where each must be lodged or published.
                2. The tagged annual report file published on the site beside the PDF where required.
                3. Basic structured data markup added to results and report pages.
                4. A short note on how the main data services pick up your documents.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of the company's tagged filings and their publishing duties exists, and any required tagged file is live beside its PDF."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance which tagged electronic filings the company produces"
                - "Check whether your market requires the tagged file on the company website"
                - "Publish the tagged annual report beside the PDF if it is required"
                - "Ask the web team to add structured data markup to results pages"
            - name: Data protection for investor pages and alert lists
              description: |-
                ## Purpose
                Alert sign-ups, contact forms, webcast registrations and analytics cookies all collect personal data on investor pages, often through third-party providers. Learning the data protection rules that apply, and mapping exactly what each tool collects and where it is stored, lets you answer a data subject request in days rather than weeks.

                ## Milestones
                1. A map of every tool on the investor pages that collects personal data, with provider and storage location.
                2. Each tool covered by the privacy notice, with a lawful basis agreed with the data protection lead.
                3. A data processing agreement on file for each provider.
                4. Retention periods set for alert, contact and webcast data.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A data map covers every tool collecting personal data on the investor pages, each with a processing agreement on file and a set retention period."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each form, widget and cookie on the investor pages"
                - "Ask each provider where the personal data they collect is stored"
                - "Check a data processing agreement is on file for each provider"
                - "Agree retention periods with the data protection lead"
            - name: Search visibility for official investor documents
              description: |-
                ## Purpose
                When someone searches for your annual report or latest results, aggregator sites and unofficial copies often rank above the official page, and AI assistants may quote an outdated figure from them. Learning how page titles, descriptive file names and short HTML summaries help search and AI tools find the official source makes the company's own version the one people see first.

                ## Milestones
                1. Ten searches an investor would make run, with the ranking of official pages recorded.
                2. Page titles and report file names changed to a descriptive pattern.
                3. A short HTML summary page added for each major report.
                4. The same ten searches rerun after three months and compared.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten investor searches are recorded before and three months after the changes, with official pages ranking higher in at least half of them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run ten typical investor searches and note where official pages rank"
                - "Rename report files with company, document type and period"
                - "Add a short HTML summary page for each annual and interim report"
                - "Rerun the ten searches three months later and compare the rankings"
            - name: Share price and stock data provider choice
              description: |-
                ## Purpose
                Share price charts, historic price lookups, dividend history and investment calculators usually come from a data provider, and their accuracy becomes your problem when a widget shows yesterday's close or the wrong currency. Comparing providers on accuracy, delay labelling, uptime and contract length lets you pick one you can hold to account.

                ## Milestones
                1. Requirements set for price data, delay labelling, price history, dividends and currency.
                2. Two or three providers compared on cost, accuracy and support.
                3. A contract signed with service levels for uptime and correction times.
                4. The provider recorded with contacts, service levels and renewal date.

                ## Notes
                Start from the **Vendor** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A share data provider is chosen from at least two compared, under a contract with uptime and correction service levels and a recorded renewal date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the requirements for price charts, history and dividend data"
                - "Ask two or three data providers for prices and sample widgets"
                - "Check each sample widget against the exchange closing price for a week"
                - "Spot check the live price widget against the exchange close @recurring(monthly:27)"
            - name: Accessible HTML annual report
              description: |-
                ## Purpose
                A two-hundred-page PDF is hard to read on a phone and hard to search, while an HTML version with linked sections, tagged tables and downloadable data serves analysts and retail holders alike. Deciding the scope, from a full HTML report to an HTML highlights section beside the PDF, and building it into the next annual report timetable spreads the work across the cycle.

                ## Milestones
                1. A scope decision between a full HTML report, HTML highlights or a tagged PDF only.
                2. The design and build steps placed in the annual report production timetable.
                3. The HTML version tested with an accessibility checker and on a phone.
                4. The HTML version published on the same day as the PDF.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The next annual report is published in an accessible HTML form, at the agreed scope, on the same day as the PDF."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Compare the cost of full HTML, HTML highlights and tagged PDF only"
                - "Agree the scope with the annual report project lead"
                - "Fit the HTML build into the annual report production timetable"
                - "Test the HTML version for accessibility and on a phone before launch"
            - name: Downloadable financial data pack
              description: |-
                ## Purpose
                Analysts rebuild your history by hand from PDFs, and every typing error risks a wrong number in a published model you later have to correct. A downloadable spreadsheet of key financials and KPIs covering at least five years, with definitions and restatements flagged, saves them hours and cuts the misreadings.

                ## Milestones
                1. Data pack contents agreed with finance: income statement, balance sheet, cash flow, segment data and KPIs.
                2. Five years of history populated and tied to published reports.
                3. Definitions and restated figures shown on a separate tab.
                4. The pack published alongside each results release.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A data pack with five years of tied-out financials, KPIs and definitions is live and updated with each results release."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the data pack contents and number of years with finance"
                - "Populate the history and tie every figure to a published report"
                - "Add a tab for definitions and restated figures"
                - "Update and publish the data pack with the results release @recurring(quarterly)"
            - name: Mobile layout of the investor section
              description: |-
                ## Purpose
                Growing numbers of retail shareholders, and some analysts between meetings, check results on their phones, and investor sections built around wide tables and long PDF lists break on small screens. Testing the ten most used pages on two phones and fixing the worst problems is a contained piece of work with visible results.

                ## Milestones
                1. The ten most used investor pages tested on two phone sizes.
                2. Problems listed by severity: unreadable tables, links too small to tap, oversized files.
                3. The five worst problems fixed.
                4. The mobile share of investor traffic recorded before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most used investor pages have been tested on two phone sizes and the five most severe problems found are fixed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Open the ten most used investor pages on two different phones"
                - "List each problem with a screenshot and a severity"
                - "Fix the five worst problems with the web team"
                - "Compare mobile visits to the investor pages before and after the fixes"
            - name: Investment case page from the approved equity story
              description: |-
                ## Purpose
                The investment case page is often the most visited narrative page and the hardest to keep honest, because it quotes strategy, targets and track record. Building it strictly from the board-approved equity story and published figures, with each claim traceable to a source, gives investors a clear summary without creating a new disclosure by accident.

                ## Milestones
                1. Page content drawn only from the approved equity story and published reports.
                2. Each figure and target footnoted to its source document.
                3. IR and legal sign-off recorded.
                4. A review trigger set for every change to targets or strategy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An investment case page with every figure and target footnoted to a published source is live with IR and legal sign-off recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the approved equity story and the latest published targets"
                - "Draft the investment case page using only those sources"
                - "Footnote every figure and target to its source document"
                - "Get IR and legal sign-off before publishing the page"
            - name: Translated investor pages decision
              description: |-
                ## Purpose
                Companies with shareholders, employees or a second listing in another language market face a choice: translate everything, translate key documents only, or rely on English. Mapping the shareholder base by language, any legal requirement and the cost per document leads to a scope you can sustain every reporting period, not just at launch.

                ## Milestones
                1. Shareholders and site visitors broken down by country or language.
                2. Any legal requirement to publish in a second language identified with counsel.
                3. Cost and turnaround per document type quoted by a translation provider.
                4. A written scope decision naming the languages and documents covered.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the languages and document types translated, based on shareholder mix, legal requirements and quoted costs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Break down shareholders and site visitors by country"
                - "Ask counsel whether any market requires documents in another language"
                - "Get translation costs and turnaround times per document type"
                - "Record the scope decision and the documents it covers"
            - name: Webcast and presentation archive page
              description: |-
                ## Purpose
                Results webcasts, capital markets day recordings and conference presentations are some of the most useful material for a new investor, yet they often vanish when a webcast provider's replay link expires. A page that keeps recordings, slides and transcripts together, with replays hosted where links do not expire, preserves them for the whole archive period.

                ## Milestones
                1. A list of every recorded event in the retention period and where each is hosted.
                2. Expiring provider links replaced with permanent hosting or downloaded copies.
                3. Each event shown with slides, recording and transcript where available.
                4. A rule agreed for how long recordings stay on the site.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every recorded investor event in the retention period has a working replay, slides and transcript where available on one archive page."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every recorded investor event and its hosting link"
                - "Ask the webcast provider when each replay link will expire"
                - "Move expiring recordings to permanent hosting"
                - "Agree with the head of IR how long recordings stay on the site"
            - name: Sustainability reporting hub on the investor site
              description: |-
                ## Purpose
                ESG analysts and rating agencies hunt for policies, data tables and reports scattered across sustainability, governance and investor pages, then email IR when they cannot find them. One hub on the investor section linking the sustainability report, data tables, policies and frameworks used cuts those requests during rating season.

                ## Milestones
                1. Every sustainability document and data set on the corporate site listed.
                2. A hub page linking reports, data tables, policies and the reporting frameworks used.
                3. Data tables offered as downloads with the reporting period stated.
                4. An owner for each item agreed with the sustainability team.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sustainability hub on the investor section links every current report, policy and downloadable data table, each with a named owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every sustainability document and data set across the corporate site"
                - "Agree the hub structure with the sustainability team"
                - "Publish data tables as downloads with their reporting period"
                - "Name an owner for each item on the hub"
            - name: Annual report publication day on the website
              description: |-
                ## Purpose
                The annual report day brings the largest upload of the year: the report, the tagged file, the notice of meeting, proxy form, remuneration report and often a sustainability report, released alongside regulatory announcements. A run sheet built a month ahead, with every file named, checked and staged, keeps the day calm and the order right.

                ## Milestones
                1. A list of every file published with the annual report, with owners and final versions.
                2. Files staged and checked for links, bookmarks and accessibility tagging.
                3. A run sheet with release time, publishing order and who checks each item.
                4. Everything live and spot checked within an hour of the release.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every annual report file is live and spot checked within an hour of the regulatory release, following a written run sheet."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Start the annual report publishing run sheet a month before release @recurring(yearly)"
                - "Collect final signed-off versions from each file owner a week ahead"
                - "Stage and check every file for links, bookmarks and tagging"
                - "Run the publishing order on the day and spot check each item"
            - name: AGM documents and voting results pages
              description: |-
                ## Purpose
                Around the AGM, shareholders look for the notice and explanatory notes, proxy and online voting links, a way to send questions and the webcast, and afterwards the voting results, which many markets require on the website within a set time. Planning the meeting pages as one sequence, from notice to results, avoids missing the results deadline in the rush after the meeting.

                ## Milestones
                1. A meeting page structure covering notice, proxy, voting links, questions, webcast and results.
                2. The deadline for posting voting results in your market confirmed with the company secretary.
                3. Pages staged before the notice is released.
                4. Voting results posted within the required time and the page archived afterwards.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The AGM page carries notice, proxy, voting and webcast links before the meeting, and voting results are posted within the required time."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm with the company secretary when voting results must be posted"
                - "Build the AGM page with notice, proxy, questions and webcast slots"
                - "Post the voting results and record the posting time"
                - "Archive last year's AGM page and set up this year's @recurring(yearly)"
            - name: Relaunch of the redesigned investor section
              description: |-
                ## Purpose
                A relaunch is the riskiest day in the life of an investor site: URLs change, feeds are reconnected and links in years of analyst notes can break. A go-live plan with a full redirect map, a cut-over timed away from announcements and a recheck against the archive inventory means the new section opens with nothing lost.

                ## Milestones
                1. A redirect map from every old URL to its new home.
                2. Go-live timed away from results, the AGM and any expected announcement.
                3. Feeds, alerts and share price widgets tested on the new site before cut-over.
                4. The archive inventory rechecked on the new site within a week.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The redesigned investor section goes live with every old URL redirected and the archive inventory rechecked with no missing items within a week."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Export every old investor URL and map each one to its new page"
                - "Pick a go-live date away from results and the AGM"
                - "Test announcement feeds, alerts and price widgets on the new site"
                - "Recheck the archive inventory on the new site a week after launch"
            - name: Capital markets day event page and materials
              description: |-
                ## Purpose
                Capital markets days produce a registration page, an agenda, a webcast, a long slide deck, videos and often new targets that must reach all investors at once. A dedicated event page planned with the event lead, with slides published the moment any new targets are announced, keeps those not in the room on equal terms.

                ## Milestones
                1. An event page with registration, agenda, webcast link and speaker biographies.
                2. Slides and any target announcement published as the event starts.
                3. The recording and transcript added within two working days.
                4. The event page moved into the events archive.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Capital markets day slides are live when the event starts, and the recording and transcript are posted within two working days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the event page contents with the capital markets day lead"
                - "Build the registration page and test the webcast link"
                - "Publish the slides at the moment the event starts"
                - "Add the recording and transcript within two working days"
            - name: Investor section build ahead of an IPO
              description: |-
                ## Purpose
                Before listing, a company needs an investor section ready for the first day of trading, but what it publishes during the offer is tightly restricted by securities law and the advisers' publicity guidelines. Building the site in parallel with the prospectus, kept private until listing, and agreeing every page with counsel gets it live on day one without breaching the offer rules.

                ## Milestones
                1. Publicity guidelines from counsel summarised into rules for website content.
                2. The investor section built on a hidden staging site with listing-day content.
                3. Every page approved by counsel and the lead adviser.
                4. The section live on the first day of trading with the announcement feed connected.

                ## Notes
                Check that nothing about the offer, including draft pages, is reachable from the public site before counsel says it can be.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A counsel-approved investor section with a connected announcement feed goes live on the first day of trading."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask counsel for the publicity guidelines that apply before listing"
                - "Build the investor section on a hidden staging site"
                - "Get counsel and the lead adviser to approve every page"
                - "Connect the announcement feed and go live on the first day of trading"
            - name: One-person IR team running the investor site
              description: |-
                ## Purpose
                At a smaller listed company the IR manager often runs the investor pages alone, alongside results, meetings and the AGM, with no web team on call. A short list of what must always be right, a trained backup publisher and one batched monthly session make the site manageable in about two hours a month.

                ## Milestones
                1. A must-be-right list of no more than eight items: announcements, share capital, calendar, reports and contacts among them.
                2. A backup publisher trained and tested.
                3. Routine checks batched into a single monthly session.
                4. Nice-to-have improvements parked on a dated list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A must-be-right list of eight items or fewer, a tested backup publisher and a monthly check session are in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the eight items on the site that must always be right"
                - "Train a colleague or the provider as backup publisher"
                - "Run the batched two-hour check of the investor site @recurring(monthly:12)"
                - "Park every nice-to-have idea on a list with a review date"
            - name: Combining investor sections after a merger
              description: |-
                ## Purpose
                When two listed companies combine, or a listed company buys another, investors still need both businesses' historic reports, and the acquired company's site often disappears with its domain. Planning which archives move, how old URLs redirect and how long the legacy material stays up protects the shareholders and analysts who rely on that history.

                ## Milestones
                1. Both companies' investor archives inventoried.
                2. A decision on which documents migrate and how long the legacy pages stay live.
                3. Redirects from the legacy domain to the combined section in place.
                4. Pro forma and combined materials published with clear labelling.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Both companies' archives are available on the combined investor section, with legacy URLs redirected and pro forma material clearly labelled."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Inventory the investor archive of the acquired or merging company"
                - "Agree how long the legacy investor pages stay live"
                - "Set up redirects from the legacy domain to the combined section"
                - "Label pro forma and historic documents clearly on the new pages"
            - name: Offer period pages during a takeover
              description: |-
                ## Purpose
                During a takeover offer, the rules in many markets require offer documents and announcements on a website within set times, and some material must be withheld from visitors in certain jurisdictions. Preparing a template offer page and a jurisdiction confirmation screen with counsel in advance means you are not building them in the first hours after an approach.

                ## Milestones
                1. The website requirements of the takeover rules in your market summarised with counsel.
                2. A template offer page and document list ready to stage.
                3. A jurisdiction confirmation screen approved by counsel for restricted documents.
                4. A named team and timetable for publishing within the required times.

                ## Notes
                Keep the template unpublished and unindexed. Its existence should not hint at any live situation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An unpublished offer page template, a counsel-approved jurisdiction screen and a named publishing team are ready before any approach."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel what the takeover rules require on the company website"
                - "Build a template offer page and keep it unpublished"
                - "Agree jurisdiction confirmation wording for restricted documents with counsel"
                - "Name who publishes offer documents and how quickly"
            - name: Debt investor pages for bond and note holders
              description: |-
                ## Purpose
                Companies with listed bonds or private placements, including some with no listed shares, have investors who need the prospectus or offering memorandum, final terms, credit ratings, covenant reports and the debt maturity profile. A debt section built around those needs serves bondholders and rating agencies without burying their documents among the equity pages.

                ## Milestones
                1. A list of every outstanding debt instrument and the documents its terms require to be published.
                2. A debt page with instruments, ratings, maturity profile and documents.
                3. Restricted offering documents placed behind a counsel-approved access screen where required.
                4. The page updated after each issue, redemption or rating change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A debt investor page lists every outstanding instrument with ratings, maturity profile and required documents, updated after each change."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each outstanding bond, note or facility with its listing venue"
                - "Check each instrument's terms for documents that must be published"
                - "Build the debt page with ratings, maturity profile and documents"
                - "Add a page update step to every issue, redemption or rating change"
            - name: Domain change or rebrand of the investor section
              description: |-
                ## Purpose
                Renaming the company or moving to a new domain can break years of links in analyst notes, data services and search results, and an investor who sees an old name beside new reports wonders which document is official. Planning the change with permanent redirects, historic documents left in their original form and notices to data services keeps the archive credible.

                ## Milestones
                1. Redirects from every old domain URL tested and set as permanent.
                2. Historic documents kept unchanged, with a note explaining the former name.
                3. Data services, the exchange and the registrar told of the new address.
                4. Ownership of the new domain confirmed in search engine tools.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every old investor URL redirects permanently to the new domain, and data services, the exchange and the registrar have the new address."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map every old investor URL to its address on the new domain"
                - "Keep historic documents unchanged and add a former name note"
                - "Tell data services, the exchange and the registrar the new address"
                - "Confirm ownership of the new domain in search engine tools"
            - name: Investor pages after delisting or going private
              description: |-
                ## Purpose
                After a company delists or is taken private, some duties to keep material online may continue for a period, remaining bondholders or minority holders may still need documents, and pages left unattended start showing a frozen share price. Deciding what stays, what changes and when the section closes protects the remaining investors and the company.

                ## Milestones
                1. Remaining obligations to publish or keep documents confirmed with counsel.
                2. Share price widgets, alerts and the financial calendar switched off.
                3. A closing notice with a contact for remaining investors published.
                4. A date set for archiving or retiring the section.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision sets what stays on the investor pages after delisting, with live share data switched off and a contact for remaining investors published."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel which website obligations continue after delisting"
                - "Switch off share price widgets, alerts and the financial calendar"
                - "Publish a notice with a contact for remaining investors"
                - "Set the date to archive or retire the investor section"
            - name: Investor site continuity plan for results day
              description: |-
                ## Purpose
                Results day traffic can be many times a normal day, and if the corporate site fails at 7 a.m. investors still need to reach the release, the presentation and the webcast. A continuity plan with a load test, a static fallback page, a provider-hosted mirror and agreed wording pointing to the regulatory news service keeps material available whatever breaks.

                ## Milestones
                1. Peak traffic from the last two results days measured and a load test run at twice that level.
                2. A static fallback page ready to switch on within fifteen minutes.
                3. A documented route to point investors to the news service and webcast if the site fails.
                4. A rehearsal of the fallback held before the next results day.

                ## Notes
                Start from the **Risk register** template. Record each failure scenario with its owner and the time it takes to switch to the fallback.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A continuity plan with a load test at twice peak traffic and a rehearsed fallback page that goes live within fifteen minutes is on file."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull peak traffic figures from the last two results days"
                - "Ask the web team to load test the investor pages at twice that peak"
                - "Prepare a static fallback page that can go live in fifteen minutes"
                - "Rehearse the switch to the fallback page before results day @recurring(yearly)"
            - name: Evidence archive of what was published and when
              description: |-
                ## Purpose
                Disputes, regulatory enquiries and litigation sometimes turn on exactly what the website showed on a given day, and a content system that overwrites pages keeps no reliable record. Capturing dated, tamper-evident snapshots of the investor section after each material change gives the company secretary evidence when it is asked for.

                ## Milestones
                1. A snapshot method agreed with legal: an archiving service, content system version history or both.
                2. Snapshots captured after each announcement and once a month.
                3. Snapshot retention set to match the document retention period.
                4. A test retrieval of a past page completed within one working day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Dated snapshots of the investor section are captured after every announcement and monthly, and a test retrieval succeeded within one working day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask legal what evidence of past website content they would need"
                - "Choose a web archiving service or turn on content system version history"
                - "Set snapshots to run after each announcement and once a month"
                - "Retrieve a page from three months ago to test the archive"
            - name: Peer benchmarking of investor websites
              description: |-
                ## Purpose
                Looking at ten peer and best-in-class investor sites side by side against a fixed scorecard shows quickly where yours falls short and which ideas are worth copying, from data packs to results pages. Repeating it yearly with the same scorecard, or against published IR website award criteria, stops the section drifting behind what investors now expect.

                ## Milestones
                1. A scorecard of fifteen criteria covering content, speed, accessibility, data and usability.
                2. Ten peer and leading sites scored, including your own.
                3. Three gaps to close and three ideas to adopt agreed with the head of IR.
                4. The benchmark repeated a year later with the same scorecard.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten investor sites, including your own, are scored on a fifteen-point scorecard, with three gaps and three ideas agreed with the head of IR."
                cadence: cyclic
              tasks:
                - "Pick ten peer and best-in-class investor sites to compare"
                - "Write a fifteen-point scorecard for content, data, speed and access"
                - "Score each site and agree three gaps to close"
                - "Rerun the benchmark with the same scorecard @recurring(yearly)"
            - name: Independent accessibility audit of the investor section
              description: |-
                ## Purpose
                Self-checks catch the obvious accessibility problems, but an independent audit against the standard your organisation targets, including testing with screen readers, finds the ones that matter to disabled shareholders and leaves a defensible record. Fixing the findings in priority order and retesting the worst pages closes the loop.

                ## Milestones
                1. An auditor appointed with a scope covering investor pages, key PDFs and the webcast player.
                2. Audit findings received and ranked by severity.
                3. All critical and serious findings fixed or scheduled with dates and owners.
                4. A retest confirming the critical findings are closed, and the accessibility statement updated.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An independent accessibility audit is complete, every critical finding is retested as closed and the accessibility statement is updated."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the audit scope covering pages, key PDFs and the webcast player"
                - "Get quotes from two independent accessibility auditors"
                - "Rank the findings and assign each to an owner with a date"
                - "Book a retest of the critical findings once fixes are live"
---

# Investor Relations Website

This area is for investor relations managers, company secretaries and web owners at listed companies and bond issuers who run the investor section of the corporate website. It starts with the foundations (who publishes what, your market's website disclosure rules, the sitemap, the archive, the hosting choice, the release-day workflow and the legal notices), then the routines that keep announcements, share data, calendars and governance documents current, the knowledge behind fair and accessible publishing, improvements from data packs to HTML reports, dated publishing events such as the annual report and the AGM, situations from an IPO to a takeover or delisting, and finally specialist work on continuity, evidence and independent audits.

What repeats is a weekly link check, monthly reconciliations of announcements, share capital and the financial calendar, monthly freshness and usage notes, a quarterly access review and results page refresh, and a yearly site review, benchmark and fallback rehearsal. The Compliance control, Purchase decision, Operational checklist, Metrics log, Vendor, Risk register and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
