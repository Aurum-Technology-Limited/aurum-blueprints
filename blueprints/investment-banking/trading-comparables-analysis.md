---
id: investment-banking.trading-comparables-analysis
name: Trading Comparables Analysis
description: "Trading comps you can defend line by line: a clean EV bridge and share count, calendarised and cleaned EBITDA and EPS, a peer set with reasons, multiple ranges, footnotes and refresh routines."
category: business
version: 1.0.0
tags: [investment-banking, trading-comparables-analysis, knowledge-worker, student, valuation, trading-comps, multiples, equity-research]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - reading-queue
    - meeting-notes
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Trading Comparables Analysis
          description: "Running trading comps: choosing the peer set, calendarisation, clean EBITDA and EPS, multiple ranges and footnotes that explain every adjustment."
          projects:
            - name: Comps data sources and access set-up
              description: |-
                ## Purpose
                Comps live or die on where the numbers come from: company filings, a market data terminal for prices and consensus, and the investor relations pages for presentations and reconciliations. Getting logins, plug-ins and a folder of bookmarked filing sources sorted on day one means the first live request is spent on judgement, not on hunting for a password or the right annual report.

                ## Milestones
                1. Working access to the filings database, the market data terminal and its spreadsheet plug-in.
                2. A bookmark list of the regulators' filing sites you will use, by country.
                3. A test pull of share price, shares outstanding and consensus EBITDA for one company that matches the terminal screen.
                4. A note of which data fields need a manual check against filings every time.

                ## Notes
                Your firm may license only one terminal. Learn its field names for diluted shares, net debt and consensus well, because they rarely mean exactly what a filing means.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page source map exists and a test pull for one company ties to the terminal screen within rounding."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every data source your team uses for comps and request any missing access"
                - "Install and test the terminal spreadsheet plug-in with one price pull"
                - "Bookmark the filing sites for the three countries you cover most"
                - "Write down which terminal fields you will always check against filings"
            - name: Enterprise value bridge from market cap
              description: |-
                ## Purpose
                Every EV multiple rests on the bridge from equity value to enterprise value, and most comps errors seen in review sit here: cash counted twice, preferred equity missed, a minority interest left out. Building the bridge by hand for three companies, from the latest balance sheet, fixes the logic so each later line item has a clear reason to be in or out.

                ## Milestones
                1. A written bridge template: market cap, plus debt, preferred, minorities and other claims, less cash and non-operating assets.
                2. Three companies bridged by hand from their latest balance sheets.
                3. Each bridge item tagged with the filing page it came from.
                4. Your bridge compared with the terminal's EV and every gap explained.

                ## Notes
                Keep the balance sheet date and the share price date in view. A bridge built from a June balance sheet and an October price is normal; mixing two balance sheet dates in one bridge is not.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three hand-built EV bridges each reconcile to the terminal figure or carry a written reason for the difference."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the bridge line items in order on one sheet with a sign for each"
                - "Bridge one familiar listed company from its latest balance sheet"
                - "Repeat for two more companies with minorities or preferred equity"
                - "Compare each result to the terminal EV and explain every gap"
            - name: Fully diluted share count with treasury stock method
              description: |-
                ## Purpose
                The basic share count on the cover of a filing is rarely the one a buyer or investor would use. Options, restricted units and convertible instruments add shares, and the treasury stock method needs the current price, so the diluted count moves every time the price does. Getting this right once, with a table you can reuse, protects every equity value and P/E on the page.

                ## Milestones
                1. The latest basic share count taken from the most recent filing cover or share capital note.
                2. Option tranches listed with numbers and weighted average strike prices.
                3. Restricted and performance units added with the vesting treatment written down.
                4. A diluted count that recalculates automatically when the share price changes.
              priority: high
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A reusable dilution table produces a diluted share count that updates with price, checked by hand for one company."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the most recent basic share count and note its date"
                - "Copy the option table from the share-based payment note"
                - "Build the treasury stock calculation linked to the live share price"
                - "Check the result by hand at two different share prices"
            - name: Spreading a company from annual and interim filings
              description: |-
                ## Purpose
                Spreading means pulling revenue, EBITDA, EBIT, net income, EPS and the balance sheet items into a standard layout straight from the filings, not from a data feed. Doing one company end to end, with every number tied to a page reference, teaches where companies hide restructuring costs, impairments and lease effects, and gives you a spread you trust when the terminal disagrees.

                ## Milestones
                1. One company spread for the last fiscal year and the latest interim period.
                2. Every input cell carrying a filing name and page reference.
                3. Reported EBITDA rebuilt from operating profit plus depreciation and amortisation.
                4. A short list of the items you would ask a senior about before adjusting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A fully referenced spread for one company exists, with EBITDA rebuilt from the income statement and cash flow notes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the latest annual report and interim report for one listed company"
                - "Spread the income statement and the EV bridge items into a standard layout"
                - "Rebuild EBITDA from operating profit and the depreciation note"
                - "Write a page reference next to every hard-coded input"
            - name: Last twelve months calculation from quarterly filings
              description: |-
                ## Purpose
                LTM figures are built as the last full year plus the year-to-date period less the same period a year earlier, and companies that report half-yearly, restate or change their year end make it easy to get wrong. Practising the build on two companies with different reporting rhythms means you can produce LTM revenue, EBITDA and EPS quickly and explain the arithmetic in one line.

                ## Milestones
                1. An LTM build sheet with fiscal year, current year to date and prior year to date columns.
                2. LTM figures built for one quarterly reporter and one half-yearly reporter.
                3. Any restatement of the prior period noted and the restated figure used.
                4. The LTM end date shown on the output beside each company.

                ## Notes
                Use the prior period figures as restated in the latest filing, not the ones originally published a year ago.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "LTM revenue, EBITDA and EPS built for two companies with different reporting rhythms, each with its LTM end date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a three-column LTM build sheet"
                - "Build LTM figures for a company that reports every quarter"
                - "Build LTM figures for a company that reports every half year"
                - "Check each prior period figure against the restated comparative"
            - name: First peer set for a practice company
              description: |-
                ## Purpose
                Choosing peers is the judgement call seniors care about most, and a list pulled from a terminal's suggested peers is rarely defensible. Picking eight to twelve companies for one practice target, using business model, end markets, size, geography and growth, and writing one line on why each is in, builds the habit of a peer set that can be argued for in a meeting.

                ## Milestones
                1. A long list of at least twenty candidates from industry codes, competitor mentions in filings and research reports.
                2. Written screening criteria covering business mix, size, geography and growth.
                3. A final set of eight to twelve peers, each with a one-line reason.
                4. A list of the excluded names that a reviewer might expect, with the reason they are out.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented peer set of eight to twelve companies with a written rationale for each inclusion and each obvious exclusion."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick a listed practice company in a sector you know"
                - "Build a long list from industry codes and competitors named in its annual report"
                - "Write four screening criteria before cutting the list"
                - "Write one line for each peer kept and each obvious name dropped"
            - name: Comps output page layout and footnote conventions
              description: |-
                ## Purpose
                Clients only ever see the output page, so its layout carries as much weight as the arithmetic. A consistent page, with the share price date, currency, fiscal year basis, mean and median rows and numbered footnotes, lets a reader trust it in thirty seconds and lets you drop it into any pitch without rework.

                ## Milestones
                1. One output layout with company, price, market cap, EV, and the multiples the sector uses.
                2. A header line showing price date, currency and units.
                3. Mean, median, high and low rows calculated only from the companies shown.
                4. A footnote numbering system where every adjusted figure points to a note.

                ## Notes
                Match your bank's house style first. Where it is silent, fewer columns and clearer footnotes beat a crowded page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A comps output page with dated header, summary statistics and a numbered footnote for every adjustment is saved as your starting layout."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect two recent comps pages from your team as layout references"
                - "Draft one output page with the header, columns and summary rows"
                - "Add a numbered footnote marker style for adjusted figures"
                - "Get an associate to look over the layout before you reuse it"
            - name: Personal comps standards sheet
              description: |-
                ## Purpose
                Small choices change multiples: which consensus source, whether stock-based compensation is added back, how leases are treated, mean or median as the headline. Writing your defaults on one page, aligned to your team's practice, means two comps sets you build a month apart are consistent, and you can answer why a number differs from a colleague's.

                ## Milestones
                1. A one-page list of defaults for consensus source, EBITDA definition, lease treatment and share count.
                2. Each default checked against your team's house practice.
                3. A section for sector exceptions, such as banks or real estate.
                4. The sheet saved where you open it every time you start a comps file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written standards sheet covering at least eight comps choices exists and has been checked with an associate or VP."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the eight comps choices you make most often"
                - "Write your default for each and the reason in one line"
                - "Ask an associate where your defaults differ from team practice"
                - "Review the standards sheet against new house guidance @recurring(yearly)"
            - name: Choosing the pricing date and share price basis
              description: |-
                ## Purpose
                Comps are a snapshot, and the snapshot date matters: a closing price the day before a pitch, a volume weighted average over a period, or an undisturbed price before rumours. Deciding which basis a given output needs, and stamping it on the page, prevents the familiar late-night question of why the numbers moved since the last draft.

                ## Milestones
                1. The difference between closing, average and undisturbed prices written in your own words.
                2. A rule for which basis to use in pitch, live deal and board materials, agreed with your team.
                3. Price date and basis shown in the header of every comps output.
                4. A note on handling peers that trade on different exchanges and close at different times.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written price basis rule for three output types exists and every comps output you send carries its price date and basis."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line definition of each share price basis"
                - "Ask your associate which basis the team uses for pitches and live deals"
                - "Add a price date and basis field to your output header"
                - "Note how you will handle peers listed in other time zones"
            - name: Weekly refresh of a live comps sheet
              description: |-
                ## Purpose
                Most coverage teams keep a standing comps sheet for its sector, and it goes stale quickly: prices move, consensus shifts, a peer reports. A short weekly refresh, with prices pulled, a check for broken links and a dated save, means the sheet is ready when a senior asks for multiples at eight in the evening.

                ## Milestones
                1. One standing comps file nominated as the live sheet for your sector.
                2. A refresh routine that updates prices, FX and consensus in one pass.
                3. A dated archive copy saved after each refresh.
                4. A change note listing any company whose multiple moved by more than a set threshold.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The live comps sheet carries a refresh date no older than seven days for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose the live comps file and save it in the team folder"
                - "Write the five refresh steps at the top of the file"
                - "Refresh prices, FX and consensus and save a dated copy @recurring(weekly:mon)"
                - "Flag any multiple that moved more than your threshold since last week"
            - name: Earnings season comps update routine
              description: |-
                ## Purpose
                When peers report, LTM figures, net debt, share counts and often consensus all change within a few weeks. Working through the reporting calendar company by company, rather than in one panicked rebuild, keeps the comps accurate and gives you a running list of surprises worth telling the team about.

                ## Milestones
                1. A reporting calendar for every company in your live peer set.
                2. LTM, balance sheet and share count updated within two working days of each result.
                3. Consensus checked a week after each result, once analysts have revised.
                4. A short note of results that changed a multiple materially.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every peer in the live set is updated within two working days of reporting for a full earnings season, with a log of changes."
                cadence: cyclic
              tasks:
                - "Put each peer's next results date into a reporting calendar"
                - "Update LTM and balance sheet inputs within two days of each result"
                - "Recheck consensus a week after each peer reports"
                - "Plan the next season's reporting calendar for the peer set @recurring(quarterly)"
            - name: Consensus estimates quality log
              description: |-
                ## Purpose
                Consensus figures can be thin, stale or mixed: three brokers with old numbers, one on a different EBITDA definition, or a figure that has not caught up with an acquisition. A monthly log of broker count, last revision date and range for each peer tells you which forward multiples deserve weight and which need a footnote.

                ## Milestones
                1. A log with broker count, estimate range and latest revision date for each peer.
                2. A threshold set for when a consensus figure is too thin to show without comment.
                3. Peers whose consensus predates a major event flagged.
                4. Footnotes added on the output for any flagged figure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The consensus log is updated monthly for six months and every forward multiple on thin or stale consensus carries a footnote."
                cadence: rolling
              tasks:
                - "Add broker count and revision date columns to the live comps sheet"
                - "Set a minimum broker count for showing a forward multiple without comment"
                - "Update broker counts and flag stale estimates @recurring(monthly:8)"
                - "Footnote any forward multiple that fails your threshold"
            - name: Corporate actions watch for the peer set
              description: |-
                ## Purpose
                Rights issues, share splits, large buybacks, spin-offs and acquisitions can make a peer's multiple meaningless overnight if the share count or net debt is not updated. Scanning announcements for the peer set each month, and noting pro forma adjustments, stops a stale share count from sitting on a client page.

                ## Milestones
                1. An alert or regular scan set up for announcements from every peer.
                2. A log of corporate actions with date, type and effect on shares or net debt.
                3. Pro forma adjustments applied where a deal has closed but not yet reported.
                4. Peers that no longer fit after a transformational deal flagged for the next peer review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A corporate actions log covers every peer for six months and every closed transaction is reflected in share count or net debt."
                cadence: rolling
              tasks:
                - "Set up announcement alerts for each company in the live peer set"
                - "Start a corporate actions log with date, type and effect columns"
                - "Scan peer announcements and update the log @recurring(monthly:15)"
                - "Apply pro forma net debt for any acquisition that closed this month"
            - name: Comps quality checklist before sending
              description: |-
                ## Purpose
                Reviewers find the same comps errors again and again: wrong currency, a December year end mixed with a March one unadjusted, a share count from the wrong date, a median that includes the target. A short checklist run before any comps page leaves your desk catches most of them in ten minutes, which is far cheaper than a correction the next morning.

                ## Milestones
                1. A checklist of twelve to fifteen comps-specific checks.
                2. Each check tied to a past error you or your team has made.
                3. The checklist run and initialled on every comps output for a month.
                4. New items added whenever a reviewer finds something the list missed.

                ## Notes
                Start from the **Operational checklist** template. Keep it about comps: general model checks belong in your model review routine.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A comps checklist of at least twelve items is used on every comps output for one month with no reviewer-found error left off the list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the last five comps errors you or a colleague made"
                - "Turn them into a checklist from the operational checklist template"
                - "Run the checklist on the next comps output before sending it"
                - "Add any reviewer-found error to the checklist @recurring(monthly:28)"
            - name: Footnote library of standard adjustments
              description: |-
                ## Purpose
                Certain adjustments come up on deal after deal: restructuring charges, impairments, IFRS 16 lease effects, pro forma acquisitions, discontinued operations. A library of clear, reusable footnote wording means each note explains the adjustment in one sentence, uses the same terms every time and saves an hour of wordsmithing on deadline.

                ## Milestones
                1. At least fifteen standard footnotes written, each in one or two sentences.
                2. Each footnote showing where the source figure comes from.
                3. Wording checked by an associate for tone and accuracy.
                4. The library reviewed monthly and new wording added from live work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A footnote library with at least fifteen approved entries exists and is used on every comps output you produce."
                cadence: rolling
              tasks:
                - "Collect footnotes from three recent comps pages in your team"
                - "Rewrite them into fifteen standard entries in plain wording"
                - "Ask an associate to mark up the wording once"
                - "Add new footnote wording from the month's work to the library @recurring(monthly:21)"
            - name: Sector multiples tracker for your coverage group
              description: |-
                ## Purpose
                Seniors often ask where the sector trades and how that compares with a year ago. A monthly snapshot of median EV to EBITDA and P/E for your core peer set, kept as a simple time series, answers that in seconds and gives you context when a client asks whether now is a good time to raise equity or sell.

                ## Milestones
                1. A tracker with the date and median forward multiples for the core peer set.
                2. Twelve months of history rebuilt from archived comps where available.
                3. A simple chart of the median multiple over time.
                4. A one-line note on what moved the sector each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The sector tracker holds at least six consecutive monthly snapshots with a one-line driver note for each."
                cadence: rolling
              tasks:
                - "Set up a tracker sheet with date and median multiple columns"
                - "Rebuild past months from archived comps files where you can"
                - "Record the month-end median multiples and a driver note @recurring(monthly:3)"
                - "Add a chart of the median multiple over time"
            - name: Quarterly peer set review
              description: |-
                ## Purpose
                Peer sets drift: a company is acquired, pivots into a new business, drops in size or becomes an outlier for reasons that will not reverse. Reviewing the standing peer set each quarter, with a short written case for each change, keeps the sector comps credible and avoids a client asking why a company that left the industry is still on the page.

                ## Milestones
                1. Each peer checked against the original screening criteria.
                2. New listings and spin-offs in the sector considered for inclusion.
                3. Proposed changes written up with one line of reasoning each.
                4. Changes agreed with the associate or VP and applied to the live sheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A quarterly peer review note exists for two consecutive quarters, each with agreed changes applied to the live sheet."
                cadence: cyclic
              tasks:
                - "Recheck each peer against your written screening criteria"
                - "List new listings and spin-offs in the sector since the last review"
                - "Write up proposed peer changes and agree them with your associate @recurring(quarterly)"
                - "Apply agreed changes and note them in the file's change log"
            - name: Source and version log for every comps file
              description: |-
                ## Purpose
                Three weeks after sending, a reviewer will ask where a number came from, and answering in under a minute is the difference between trust and a full re-check. A log inside each comps file, recording source documents, pull dates and what changed in each version, makes the file auditable by anyone on the team.

                ## Milestones
                1. A source tab in the comps file listing each filing used, with its date.
                2. A version table recording date, author and what changed.
                3. Terminal pull dates recorded beside every consensus figure.
                4. The log kept current on every live file for a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every comps file you send in a month contains a source tab and a version table that a colleague can follow without asking you."
                cadence: rolling
              tasks:
                - "Add a source tab and a version table to your comps file layout"
                - "Fill in the source tab for the file you are working on now"
                - "Check the version table is current on every open comps file @recurring(weekly:fri)"
            - name: Calendarisation of non-December year ends
              description: |-
                ## Purpose
                Comparing a company with a March year end against one with a December year end, without adjustment, mixes nine months of different trading into the multiple. Learning to calendarise to a common year end, by weighting adjacent fiscal years or using quarterly data, and to say which method you used, is one of the core technical skills a comps reviewer checks.

                ## Milestones
                1. The month-weighting method written out with a worked example.
                2. Three peers with different year ends calendarised to December.
                3. Calendarised figures cross-checked against quarterly data where available.
                4. A footnote stating the calendarisation method on the output.

                ## Notes
                Calendarisation assumes earnings accrue evenly through the year. Flag highly seasonal businesses where that is a poor assumption.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three peers calendarised to a common year end, with a worked example and a footnote describing the method."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the month-weighting formula with one worked example"
                - "Calendarise three peers with March, June and September year ends"
                - "Cross-check one result against quarterly figures"
                - "Refresh the fiscal year end table for the peer set @recurring(yearly)"
            - name: Clean EBITDA and non-recurring items
              description: |-
                ## Purpose
                Reported EBITDA often includes restructuring costs, impairments, gains on disposals, litigation settlements and acquisition fees that would distort a multiple. Learning which items to adjust, how to find them in the notes and segment reconciliations, and when management's own adjusted figure goes too far, is the heart of comps that hold up.

                ## Milestones
                1. A list of common non-recurring items with where each usually appears in filings.
                2. Three peers adjusted from reported to clean EBITDA with each item referenced.
                3. Management's adjusted EBITDA compared with yours and any difference explained.
                4. A rule written for recurring restructuring that appears every year.

                ## Notes
                A cost that recurs every year is not non-recurring, whatever the company calls it. Ask your associate before adjusting it out.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Clean EBITDA bridges for three peers exist, each adjustment referenced to a filing page and compared with management's adjusted figure."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List ten common non-recurring items and where filings show them"
                - "Bridge reported to clean EBITDA for three peers"
                - "Compare your figure with management's adjusted EBITDA and note gaps"
                - "Write your rule for restructuring costs that recur every year"
            - name: Clean EPS and adjusted net income
              description: |-
                ## Purpose
                P/E multiples need earnings stripped of the same one-off items as EBITDA, but tax-effected, and with amortisation of acquired intangibles handled consistently across the peer set. Building clean EPS for a handful of peers shows how a single after-tax adjustment can swing a P/E by several turns and why the footnote matters.

                ## Milestones
                1. The after-tax adjustment method written down with the tax rate source.
                2. Clean net income and EPS built for four peers.
                3. A consistent policy on acquired intangible amortisation applied across the set.
                4. Reported and clean P/E shown side by side for review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Clean EPS built for four peers with tax-effected adjustments and a single intangible amortisation policy recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how you will tax-effect each EPS adjustment"
                - "Build clean net income and EPS for four peers"
                - "Choose one treatment for acquired intangible amortisation"
                - "Show reported and clean P/E side by side and flag big gaps"
            - name: Lease accounting effects on EBITDA and EV
              description: |-
                ## Purpose
                Under IFRS 16 most leases sit on the balance sheet and their cost moves below EBITDA, while US GAAP keeps operating lease cost inside it. Mixing the two in one peer set flatters some multiples and penalises others, so learning to put every peer on the same basis, and to say which, is essential for retail, airlines, telecoms and any lease-heavy sector.

                ## Milestones
                1. The IFRS 16 and US GAAP lease effects written out in a short comparison.
                2. One basis chosen for the peer set, pre or post lease, and recorded.
                3. Lease liabilities and lease costs adjusted consistently for each peer.
                4. A footnote explaining the lease basis on the output.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mixed IFRS and US GAAP peer set is restated to one lease basis, with the basis stated in a footnote."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a half-page comparison of lease treatment under the two standards"
                - "Pick a lease-heavy sector with peers on both standards"
                - "Restate each peer's EBITDA and EV to one basis"
                - "Write the lease basis footnote for the output page"
            - name: Minorities, associates and pensions in the bridge
              description: |-
                ## Purpose
                Non-controlling interests, equity-accounted associates, pension deficits and other debt-like items are where experienced reviewers look first. Knowing why minorities are added when EBITDA is consolidated, why associates are subtracted when their income sits below EBITDA, and which pension and provision items your team treats as debt, keeps the numerator and denominator consistent.

                ## Milestones
                1. The consistency rule between EV items and EBITDA written in your own words.
                2. Two peers with large minorities and associates bridged correctly.
                3. Your team's policy on pensions, provisions and earn-outs confirmed and written down.
                4. Each debt-like item on the output footnoted with its source.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two complex EV bridges built with minorities, associates and debt-like items treated consistently with EBITDA and footnoted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the numerator and denominator consistency rule in two sentences"
                - "Find two peers with material minorities or associates"
                - "Ask your associate how the team treats pensions and provisions"
                - "Bridge both peers and footnote every debt-like item"
            - name: Convertibles and complex dilution
              description: |-
                ## Purpose
                Convertible bonds and preferred shares can be counted as debt or as shares depending on whether they are in the money, and getting it wrong double counts or misses value. Working through the if-converted test, net share settlement and the treatment of warrants turns an awkward footnote into a calculation you can explain to a VP.

                ## Milestones
                1. The if-converted test written out with the conversion price and current price.
                2. One peer with a convertible bond treated correctly in both share count and EV.
                3. Net share settlement and warrant treatment understood and documented.
                4. A rule that flips the treatment automatically when the price crosses the conversion price.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A convertible instrument is handled in a live comps file with a switch that moves it between debt and shares based on price."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a listed company with a convertible bond outstanding"
                - "Write out its conversion terms from the debt note"
                - "Build the if-converted switch linked to the share price"
                - "Check the effect on EV and share count above and below conversion"
            - name: Choosing the right multiples for a sector
              description: |-
                ## Purpose
                EV to EBITDA is the default, but it is the wrong headline for banks, insurers, real estate, early-stage software or natural resources. Building a one-page map of which multiples each sector actually uses, and why, means your comps page shows the metrics a buyer or investor in that sector would quote.

                ## Milestones
                1. A table of ten sectors with their primary and secondary multiples.
                2. One sentence for each on why that multiple fits the sector's economics.
                3. The map checked against recent research reports in two sectors.
                4. Your coverage sector's preferred multiples agreed with your associate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sector multiples map covering ten sectors exists, with your own sector's choice confirmed by a senior."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List ten sectors and the multiples you think each uses"
                - "Check two sectors against recent equity research reports"
                - "Write one line on why each multiple fits"
                - "Confirm the preferred multiples for your coverage sector with an associate"
            - name: Reading equity research to sharpen comps
              description: |-
                ## Purpose
                Sell-side research shows how investors frame a company: which peers they compare it with, which multiple they anchor on, and where they think consensus is wrong. Reading a steady flow of initiation reports and sector notes, with a short note on each, builds the sector judgement that makes your peer choices and footnotes sharper.

                ## Milestones
                1. A reading queue of initiations and sector notes for your coverage.
                2. One report a week read and summarised in three lines.
                3. Peer sets used by research compared with your own.
                4. Two useful framing ideas carried into your next comps page.

                ## Notes
                Start from the **Reading queue** template. Respect your compliance team's rules on which research you can access and share.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten research reports read and summarised in three months, with the peer sets compared against your live comps."
                cadence: rolling
              tasks:
                - "Set up a reading queue of research on your coverage sector"
                - "Read one report and write a three-line summary @recurring(weekly:wed)"
                - "Compare the peer sets in research with your own live sheet"
            - name: Cross-border comps across currencies and standards
              description: |-
                ## Purpose
                Global peer sets spanning Europe, North America and Asia bring different currencies, accounting standards, reporting frequencies and market hours. Converting at consistent rates, aligning IFRS and US GAAP items and showing multiples that are currency neutral lets a client compare global peers without being misled by a translation effect.

                ## Milestones
                1. An FX policy recorded: spot for balance sheet items, matching rates for forecasts.
                2. Peers converted to one presentation currency with rates and dates shown.
                3. Key IFRS and US GAAP differences adjusted or footnoted.
                4. Multiples confirmed to be identical before and after currency conversion.

                ## Notes
                Multiples are ratios, so they should not change with the presentation currency if both sides use the same rate. If they do, a rate is being mixed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cross-border peer set is shown in one currency with a stated FX policy and multiples unchanged by conversion."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write your FX policy for market values and financials"
                - "Convert a peer set with three currencies to one presentation currency"
                - "Check each multiple is the same before and after conversion"
                - "Footnote any accounting standard difference you could not adjust"
            - name: Tiering peers into core and secondary groups
              description: |-
                ## Purpose
                A single list of twelve companies treats the closest competitor and a loosely related one as equals. Splitting the set into core peers and a wider reference group, with separate summary statistics, shows the reader where the target really sits and stops one distant outlier pulling the headline median.

                ## Milestones
                1. Tiering criteria written: business mix overlap, size and geography.
                2. Each peer placed in a tier with a one-line reason.
                3. Separate median and mean rows calculated for each tier.
                4. The tiered page reviewed against the untiered version with differences noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tiered comps output with separate statistics for core and secondary peers is produced and the tiering reasons are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three criteria for a core peer"
                - "Place each company in the live set into a tier"
                - "Add tier-level median and mean rows to the output"
                - "Compare tiered and untiered medians and note the difference"
            - name: Setting the selected multiple range
              description: |-
                ## Purpose
                Summary rows give statistics; the valuation needs a range, and the range is a judgement about where the target sits relative to its peers on growth, margins, scale and risk. Practising how to move from the interquartile range to a selected range, and writing the reasons, prepares you for the question every MD asks: why this range and not that one.

                ## Milestones
                1. Interquartile, mean and median shown for the relevant multiples.
                2. The target benchmarked against peers on growth, margin and size.
                3. A selected range chosen with a written reason for where it sits.
                4. The implied valuation range calculated and checked for arithmetic.

                ## Notes
                A range that simply copies the interquartile range invites the question of what judgement was applied. Tie the range to two or three observable differences.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A selected multiple range with a written three-point justification and an implied value range exists for one practice target."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate interquartile range, mean and median for the main multiples"
                - "Benchmark the target's growth and margin against the peers"
                - "Write three reasons for where your selected range sits"
                - "Calculate the implied enterprise and equity value range"
            - name: Outlier treatment and mean versus median
              description: |-
                ## Purpose
                One peer trading at forty times earnings because of depressed profits can drag a mean far from anything meaningful. Deciding in advance when to exclude, cap or footnote an outlier, and whether the headline statistic is mean or median, prevents a cherry-picking accusation and keeps the summary rows honest.

                ## Milestones
                1. A written rule for when a multiple is shown as not meaningful.
                2. A choice of headline statistic agreed with your team.
                3. Excluded or capped values footnoted with the reason.
                4. The rule applied to a live peer set and the effect on the range recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written outlier rule exists and has been applied to one peer set, with every excluded value footnoted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the thresholds at which you mark a multiple as not meaningful"
                - "Ask your associate whether the team leads with mean or median"
                - "Apply the rule to the live peer set"
                - "Footnote each excluded value and record the effect on the range"
            - name: Regression of multiples against growth
              description: |-
                ## Purpose
                If peers differ widely in growth, a plain median misleads, because faster growers usually trade higher. A simple regression of EV to EBITDA or EV to revenue against forecast growth or margin shows where the target would sit on the line and gives a second, more defensible view alongside the standard range.

                ## Milestones
                1. Forward growth and multiples for the peer set placed side by side.
                2. A scatter chart with a fitted line and the R squared shown.
                3. The target's implied multiple read from the line.
                4. A note on whether the fit is strong enough to show a client.

                ## Notes
                With ten points, a regression is a picture, not proof. Show it only when the fit is reasonable and say how many points it rests on.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A regression chart of multiple against growth for one peer set exists, with fit statistics and a written view on whether it is presentable."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put forward growth and the matching multiple in two columns"
                - "Draw the scatter chart with a fitted line and R squared"
                - "Read the target's implied multiple from the line"
                - "Write one sentence on whether the fit is strong enough to show"
            - name: Operating benchmarking pages beside the comps
              description: |-
                ## Purpose
                Multiples only make sense next to the operating facts that explain them: revenue growth, EBITDA margin, cash conversion, returns and gearing. A benchmarking page using the same peers, with the target ranked on each metric, is often the page clients read most closely and the one that justifies a premium or a discount.

                ## Milestones
                1. Five operating metrics chosen for the sector and defined consistently.
                2. Each metric calculated for the target and every peer.
                3. A ranked bar chart or table for each metric.
                4. Two or three observations linking the ranking to the multiple range.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A benchmarking page with five consistently defined metrics for the full peer set is produced and linked to the selected range in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose five operating metrics that matter in your sector"
                - "Calculate each metric for the target and all peers"
                - "Rank the target on each metric in a chart or table"
                - "Refresh the benchmarking page after each earnings season @recurring(quarterly)"
            - name: Rebuilding a personal comps model with built-in checks
              description: |-
                ## Purpose
                Inherited comps files are often patched by five previous analysts, with hard-codes in odd places and summary rows that silently skip a company. Building your own clean version, with input, calculation and output tabs, colour conventions and check cells for EV, share count and statistics, gives you a file you can trust under pressure.

                ## Milestones
                1. Separate input, calculation and output tabs with one consistent colour code.
                2. Check cells for EV bridge totals, share count and summary statistic ranges.
                3. A test run on a known peer set matching a previously reviewed output.
                4. The model saved as your personal starting file with a short guide tab.

                ## Notes
                Use your firm's own template where one is mandated, and add your checks to it rather than replacing it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal comps model with at least five check cells reproduces a previously reviewed output to the decimal."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the tab structure and colour code on one page"
                - "Build input and calculation tabs for one company"
                - "Add check cells for EV, share count and summary rows"
                - "Test the model against a previously reviewed comps output"
            - name: Data provider figures versus filings check
              description: |-
                ## Purpose
                Terminals standardise data, which means their EBITDA, net debt and share counts may follow a definition different from yours or lag a recent filing. Spot-checking a sample of terminal figures against filings each quarter tells you which fields you can trust and which always need a manual override.

                ## Milestones
                1. Five fields checked against filings for every peer in the live set.
                2. Differences logged with the reason, such as definition, timing or error.
                3. A list of fields that always need a manual input.
                4. Any provider errors reported through the terminal's help desk.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A logged comparison of terminal and filing figures for five fields across the live peer set, with a list of manual override fields."
                cadence: cyclic
              tasks:
                - "Pick five terminal fields you rely on for comps"
                - "Compare them with filings for every peer in the live set"
                - "Log each difference and its likely reason"
                - "Repeat the spot check on a fresh sample of peers @recurring(quarterly)"
            - name: First live comps for a client pitch
              description: |-
                ## Purpose
                The first comps page that goes into a client book is a milestone: real peers, a real deadline and a VP who will read every footnote. Planning it as a short project, with time blocked for the peer set, the spread, the checklist and a walk-through with the associate, turns a stressful first request into a page you are proud of.

                ## Milestones
                1. The request, deadline and multiples needed confirmed with the associate on day one.
                2. A draft peer set shared for comment before spreading starts.
                3. The output run through your comps checklist before sending.
                4. Every review comment logged and closed, with lessons noted afterwards.

                ## Notes
                Send the peer set for comment early. A rejected peer list after the spreading is done costs a night.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A comps page delivered on time for a client book, with all review comments closed and a lessons note written."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the request, deadline and multiples with the associate"
                - "Send the draft peer list for comment before spreading"
                - "Run the comps checklist before the first send"
                - "Write three lessons once the page is in the final book"
            - name: Walking a senior through your comps
              description: |-
                ## Purpose
                Being able to explain a comps page out loud, peer by peer, adjustment by adjustment, is how analysts earn trust with VPs and MDs. Preparing a short walk-through, with the three questions most likely to come and a one-line answer for each, makes the review a conversation rather than an interrogation.

                ## Milestones
                1. A one-page cheat sheet: peer rationale, key adjustments and range logic.
                2. Answers prepared for the five likeliest questions.
                3. A walk-through held with the associate or VP and notes taken.
                4. Follow-up actions from the review closed within a day.

                ## Notes
                Start from the **Meeting notes** template for the review itself.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A comps walk-through has been held with a senior and all follow-up actions from it closed within one working day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page cheat sheet for your latest comps"
                - "List five questions a VP would ask and draft an answer to each"
                - "Book fifteen minutes with your associate to walk through the page"
                - "Close every follow-up from the walk-through the same day"
            - name: Timed comps exercise for a modelling test
              description: |-
                ## Purpose
                Recruiting and internal modelling tests often include a timed comps build from a pack of filings. Practising under the clock, with a set routine for spreading, the bridge and summary statistics, shows where you lose time and stops a small error in the share count from costing the whole test.

                ## Milestones
                1. A practice pack of filings for four to six companies assembled.
                2. A first timed run completed and the time per step recorded.
                3. A second run at least a third faster with the same accuracy.
                4. A personal order of steps written for test day.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two timed comps runs completed on a practice pack, the second at least a third faster with no arithmetic errors."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Assemble filings for five companies in one sector as a practice pack"
                - "Do a first timed comps build and record time per step"
                - "Fix the two slowest steps and run the build again"
                - "Write your test-day order of steps on one card"
            - name: Same-day comps refresh after a peer announcement
              description: |-
                ## Purpose
                A takeover approach, a profit warning or a large acquisition by a peer can move its multiple or remove it from the set within hours, often on the day a pitch is due. Rehearsing a same-day refresh, knowing which inputs to change and how to footnote an unaffected price, means you can respond calmly when it happens.

                ## Milestones
                1. A written list of the inputs that change for each type of announcement.
                2. A rule for using an undisturbed price when a peer is subject to a bid.
                3. One practice refresh done on a past announcement in your sector.
                4. A short message template for telling the team what changed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A practice same-day refresh on a past peer announcement is completed within two hours, with footnotes and a team update drafted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what changes in comps for an acquisition, a warning and a bid"
                - "Write your undisturbed price rule for peers subject to a bid"
                - "Rerun the live comps as at a past announcement date in your sector"
                - "Draft a three-line update message for the deal team"
            - name: Comps questions in a technical interview
              description: |-
                ## Purpose
                Interviewers for analyst and summer roles ask comps questions to test whether you understand valuation or have only memorised it: why EV and not equity value with EBITDA, how to pick peers, what to do with negative earnings. Preparing clear spoken answers, and practising them with a friend, turns these from risks into chances to stand out.

                ## Milestones
                1. A list of twenty likely comps questions from guides and past candidates.
                2. A short spoken answer prepared for each one.
                3. Two mock interviews done on comps questions with feedback recorded.
                4. Weak answers rewritten and practised again before the interview date.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two mock interviews on comps completed and every answer rated weak in feedback rewritten before the interview."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down twenty comps questions you could be asked"
                - "Draft a spoken answer of under a minute for each"
                - "Book two mock interviews with a friend or careers adviser"
                - "Rewrite and practise every answer marked weak"
            - name: Student comps for a stock pitch or finance society
              description: |-
                ## Purpose
                Students rarely have a terminal, but they can build credible comps from free filings, exchange sites and company presentations. Doing a full comps page for a stock pitch competition or a finance society, with sources and footnotes, gives you something real to discuss in interviews and shows the discipline banks look for.

                ## Milestones
                1. A target and six to eight peers chosen with written reasons.
                2. Financials and share counts collected from free public sources.
                3. A comps page with dated prices, multiples and footnotes.
                4. The page presented to the society or competition and feedback noted.

                ## Notes
                This is a learning exercise, not a recommendation to buy or sell anything. Say so on the page if it is shared.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A sourced comps page for a stock pitch is presented to a society or competition with feedback recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a listed company you can explain in two sentences"
                - "Pick six to eight peers from its annual report and competitors"
                - "Build the comps page from free filings and exchange data"
                - "Present it to your finance society and note the questions asked"
            - name: Summer intern's first comps request
              description: |-
                ## Purpose
                An intern's first comps request arrives with little context, a tight deadline and a template that someone else built. Knowing which questions to ask up front, how to find the team's last version and when to check in saves the night and shows the judgement that turns internships into offers.

                ## Milestones
                1. Five questions to ask on receiving any comps request written down.
                2. The team's latest comps file for the sector found and understood.
                3. A midpoint check-in with the analyst or associate before the full build.
                4. The final output sent with a short note on sources and open points.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first intern comps request is delivered with a midpoint check-in held and a cover note listing sources and open points."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write five questions to ask whenever you get a comps request"
                - "Ask the team's analyst for the latest comps file in the sector"
                - "Book a short midpoint check-in before you finish the build"
                - "Send the output with a three-line note on sources and open points"
            - name: Moving into comps from audit or accounting
              description: |-
                ## Purpose
                Accountants moving into banking already read financial statements better than most analysts, but comps asks different questions: forward estimates, market values and adjustments made for comparability rather than compliance. Mapping what transfers and what is new shortens the first few months and lets your accounting depth show.

                ## Milestones
                1. A two-column list of skills that transfer and gaps to close.
                2. Three gap topics, such as consensus, market values and calendarisation, studied.
                3. One comps set built where your accounting adjustments are noticeably sharper.
                4. Feedback from a senior on where your background helped.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A skills map exists, three gap topics are studied and one comps set has been reviewed with written feedback."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List what you already know from audit that comps uses"
                - "List the three comps topics that are new to you"
                - "Study one gap topic each week for three weeks"
                - "Ask a senior for feedback on your adjustments in one comps set"
            - name: First ninety days of comps as a new analyst
              description: |-
                ## Purpose
                New analysts get comps requests from several deal teams at once, each with slightly different preferences. A ninety-day plan, keeping a running note of each team's conventions and a weekly reflection on mistakes and fixes, compresses the learning curve and stops the same comment being made twice.

                ## Milestones
                1. A conventions note for each deal team you work with.
                2. A weekly reflection logged for twelve weeks.
                3. Repeat comments from reviewers falling to near zero by week twelve.
                4. A ninety-day summary shared at your first check-in with your staffer or mentor.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twelve weekly reflections and a conventions note per team exist, with a ninety-day summary discussed with a mentor."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Start a conventions note for each deal team you work with"
                - "Write a five-line reflection on the week's comps work @recurring(weekly:thu)"
                - "Count repeat reviewer comments at weeks four, eight and twelve"
                - "Ask the agent to draft a ninety-day summary from your reflections"
            - name: Reviewing junior comps as an associate
              description: |-
                ## Purpose
                Associates who review comps need a fast, consistent way to check a page without rebuilding it, and to give feedback that teaches rather than just corrects. A review routine, covering peer logic, the bridge, calendarisation and footnotes in a fixed order, catches errors quickly and helps junior bankers improve.

                ## Milestones
                1. A fixed review order written for comps pages.
                2. Three spot checks chosen that catch most errors in a few minutes.
                3. A feedback note format that separates must-fix items from style.
                4. The routine used on five reviews and refined from experience.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written comps review routine has been used on five junior outputs, each with a feedback note separating must-fix items from style."
                cadence: rolling
              tasks:
                - "Write your comps review order on one page"
                - "Pick three spot checks you will always run"
                - "Use the routine on the next junior comps page you review"
                - "Send feedback split into must-fix and style points"
            - name: Comps in a small bank without a data terminal
              description: |-
                ## Purpose
                Regional banks, boutiques and corporate finance teams in smaller markets often work without an expensive terminal, so every number is collected by hand. A lean process, built on exchange websites, filings, company presentations and a shared library of spreads, keeps comps credible while respecting the budget and the time a small team has.

                ## Milestones
                1. A list of free and low-cost sources for prices, filings and estimates in your markets.
                2. A shared spread library so each company is only spread once per period.
                3. A rule for when no consensus exists and how forward multiples are shown.
                4. A comps page produced from this process and reviewed by a senior.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented terminal-free comps process exists and one comps page built from it has passed senior review."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every free source for prices and filings in your markets"
                - "Set up a shared folder for company spreads by period"
                - "Write your rule for showing companies without consensus"
                - "Build one comps page using only the documented sources"
            - name: Loss-making and high-growth company comps
              description: |-
                ## Purpose
                Negative EBITDA across most of a peer set leaves standard multiples blank, and comps shift to revenue, gross profit and sector metrics such as the growth plus margin rule used in software. Learning which metrics hold up, how to treat stock-based compensation and how to present a peer set with wide growth differences keeps technology and biotech comps meaningful.

                ## Milestones
                1. A list of multiples and operating metrics usable for loss-making peers.
                2. A policy on stock-based compensation in EBITDA and dilution.
                3. A comps page for a growth sector showing EV to revenue and growth side by side.
                4. Peers grouped by growth band to make the range fairer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A growth-sector comps page with revenue-based multiples, growth bands and a stated stock-based compensation policy exists."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the metrics investors use for loss-making peers in your sector"
                - "Write your stock-based compensation policy for EBITDA"
                - "Build a page with EV to revenue beside forward growth"
                - "Group the peers into growth bands and show each band's median"
            - name: Financial institutions comps on book value
              description: |-
                ## Purpose
                Banks and insurers are valued on equity measures, because debt is their raw material rather than financing, so EV multiples make little sense. Price to book, price to tangible book, P/E and the link between return on equity and the book multiple are what FIG bankers use, and building one set properly teaches a different logic of comps.

                ## Milestones
                1. The reasons EV multiples are not used for banks written down.
                2. Tangible book value calculated for each peer from the balance sheet.
                3. Price to tangible book plotted against return on tangible equity.
                4. Capital ratios shown alongside the multiples as context.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bank comps page with price to tangible book, P/E and a return on equity chart is built for at least six peers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write why EV multiples do not suit banks in three sentences"
                - "Calculate tangible book value for six listed banks"
                - "Plot price to tangible book against return on tangible equity"
                - "Add capital ratios from the regulatory disclosures"
            - name: Real estate and natural resources comps
              description: |-
                ## Purpose
                Property companies trade on price to net asset value and funds from operations, while miners and oil producers are compared on reserves, production and cash flow per unit. Building one set in each, with the sector's own measures and their reporting quirks, prepares you for coverage groups where EBITDA multiples are a secondary view.

                ## Milestones
                1. The sector-specific metrics for real estate and resources defined from published guidance.
                2. A real estate comps page using NAV and funds from operations.
                3. A resources comps page using reserves or production based multiples.
                4. Footnotes on the reporting standards each metric comes from.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Two sector comps pages, one real estate and one resources, each using the sector's own measures with sourced footnotes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Define NAV and funds from operations from an industry body's guidance"
                - "Build a real estate comps page for six listed property companies"
                - "Build a resources page using reserves or production multiples"
                - "Footnote the reporting standard behind each sector metric"
            - name: Sum-of-the-parts comps for conglomerates
              description: |-
                ## Purpose
                Groups with three unrelated divisions have no true peers, so each division is valued against its own peer set using segment data and the parts are added up. Building a sum-of-the-parts view shows how to allocate central costs and net debt and why groups often trade at a discount to the total, which is a common client question.

                ## Milestones
                1. Segment revenue and EBITDA extracted from the segment note.
                2. A peer set and multiple range chosen for each division.
                3. Central costs and net debt allocated with a written method.
                4. The implied group value compared with the current market value.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A sum-of-the-parts comps view with divisional peer sets and an allocation method is compared with the group's market value."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a listed group with at least three reported segments"
                - "Extract segment revenue and EBITDA from the segment note"
                - "Choose a peer set and range for each division"
                - "Allocate central costs and net debt and compare the total with market value"
            - name: Comps in small and thinly traded markets
              description: |-
                ## Purpose
                On smaller exchanges, including those in the Caribbean and other emerging markets, shares may trade rarely, free float can be small and peers may be few. Comps here need liquidity filters, average prices over longer periods and often regional or international peers with adjustments for size and country, all explained so a client understands the limits.

                ## Milestones
                1. Trading volume and free float recorded for each local peer.
                2. A liquidity threshold set, with illiquid names shown separately or footnoted.
                3. A longer averaging period chosen for thinly traded prices.
                4. Regional or international peers added with a written note on size and country differences.

                ## Notes
                Name the limits plainly on the page. A comps range built on three illiquid local stocks is a weak anchor and should sit beside other methods.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A small-market comps page with liquidity data, a stated averaging period and footnoted international peers is produced."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect trading volume and free float for each local peer"
                - "Set a liquidity threshold and flag names below it"
                - "Price thinly traded peers on a longer average and footnote it"
                - "Add regional peers and note size and country differences"
---

# Trading Comparables Analysis

This area is for analysts, associates and students who build trading comparables and want every number on the output page to survive a senior's questions. It starts with the foundations (data access, the enterprise value bridge, diluted share counts, spreading filings, LTM and the first peer set), then the routines that keep a live comps sheet current, the accounting skills behind clean EBITDA and EPS, the decisions about peers, ranges and outliers, the dated moments from a first pitch to a modelling test, variants for students, interns, career switchers and small banks, and finally specialist comps for financials, real estate, loss-making growth companies, conglomerates and thin markets.

What repeats is a weekly price and data refresh, a monthly consensus and corporate actions check, a monthly sector multiples snapshot and footnote library review, a quarterly earnings season update and peer set review, and a few yearly resets of your standards and calendarisation tables. The Operational checklist, Reading queue and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
