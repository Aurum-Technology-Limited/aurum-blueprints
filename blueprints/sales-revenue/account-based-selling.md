---
id: sales-revenue.account-based-selling
name: Account-Based Selling
description: "A named and tiered target account list, coordinated pods, multi-threaded plays, signal watching, engagement scores and the events and specialist work that turn a short list of dream accounts into pipeline."
category: business
version: 1.0.0
tags: [sales-revenue, account-based-selling, enterprise, team, founder, target-accounts, abm, multi-threading]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - purchase-decision
    - operational-checklist
    - marketing-campaign
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Account-Based Selling
          description: "Coordinating personalised outreach to a short list of named target accounts across several contacts, channels and team members at once."
          projects:
            - name: Deciding whether account-based selling fits your deals
              description: |-
                ## Purpose
                Account-based selling pays off when deals are large, buying committees have five or more people and the number of companies that could ever buy runs to hundreds, not tens of thousands. Where a deal is worth less than about ten times the cost of a coordinated campaign into one account, high-volume outbound usually wins. Checking your last twenty closed deals against those tests settles the question before anyone buys software or redraws patches.

                ## Milestones
                1. Average deal size, sales cycle length and number of people involved recorded for the last twenty closed deals.
                2. The number of companies in your market that fit your customer profile estimated.
                3. A written go, partial or no-go decision, naming the segment where named-account selling is tried first.
                4. The decision shared with the sales leader and the head of marketing.

                ## Notes
                A partial yes is common and sensible: run named-account selling for the top segment and keep volume prospecting for the rest.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go, partial or no-go decision on account-based selling, backed by figures from at least twenty closed deals."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last twenty closed-won deals with value, cycle length and contacts involved"
                - "Estimate how many companies in your market fit your customer profile"
                - "Write a one-page go, partial or no-go recommendation"
                - "Agree the first segment to try with the sales and marketing leaders"
            - name: Named target account list for the year
              description: |-
                ## Purpose
                Most teams that say they run account-based selling are really working a saved filter in a contact database. A named list of real companies, typically fifty to two hundred for a team of four to eight sellers, chosen on fit, signs of timing and existing relationships, is what lets marketing, sellers and leadership aim at the same targets. Freezing it for a quarter stops every rep quietly swapping in favourites.

                ## Milestones
                1. A long list of candidate accounts pulled from your customer profile filters.
                2. Each candidate scored on fit, timing signals and existing relationships.
                3. A final list of named accounts sized to the number of sellers who will work it.
                4. The list flagged in the CRM and signed off by the sales and marketing leaders.

                ## Notes
                Size the list to capacity. One seller can run genuinely coordinated outreach into roughly fifteen to thirty accounts at a time, not three hundred.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named target account list, sized to seller capacity and flagged in the CRM, is signed off by both the sales and marketing leaders."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull a long list of accounts that match the customer profile filters"
                - "Score each candidate on fit, timing signals and existing relationships"
                - "Cut the list to what the available sellers can work properly"
                - "Flag every chosen account in the CRM and share the final list"
            - name: Tiering target accounts by depth of effort
              description: |-
                ## Purpose
                Treating all two hundred named accounts the same means either nobody gets real personalisation or the budget runs out by the second quarter. Splitting the list into one-to-one accounts with their own plan, one-to-few clusters grouped by industry or shared problem, and one-to-many accounts with light personalisation at scale matches effort to the size of the prize.

                ## Milestones
                1. An entry rule written for each of the three tiers.
                2. Every target account assigned a tier.
                3. Tier one capped at a number the pods can genuinely plan for, often ten to twenty-five.
                4. Tier two clusters named, each with a one-sentence shared problem.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every named account has a tier recorded in the CRM, and tier one holds no more accounts than the pods agreed they can plan individually."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one entry rule each for tier one, tier two and tier three"
                - "Assign a tier to every account on the target list"
                - "Group tier two accounts into clusters by industry or shared problem"
                - "Record the tier in a CRM field the whole team can filter on"
            - name: Sales and marketing agreement on target accounts
              description: |-
                ## Purpose
                Named-account programmes fail quietly when marketing measures leads, sales measures meetings and nobody measures the accounts. A one-page agreement says what each side delivers per tier, how an engaged account is defined, how fast sellers follow up and which shared numbers both teams report. Reviewed monthly, it stops the work drifting back into two separate plans within a quarter.

                ## Milestones
                1. A one-page agreement listing what marketing and sales each commit to per tier.
                2. A shared definition of an engaged account and an opportunity-ready account.
                3. A follow-up time for engaged accounts agreed, for example two working days.
                4. Both leaders signed off, with a monthly review booked.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page sales and marketing agreement defines engaged accounts, follow-up times and shared numbers, and has been reviewed at least once."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft what marketing and sales each commit to for each tier"
                - "Agree the definition of an engaged account in one sentence"
                - "Set the follow-up time for newly engaged accounts"
                - "Review the agreement scorecard with the marketing lead @recurring(monthly:28)"
            - name: Account pod roles and ownership
              description: |-
                ## Purpose
                Coordinated outreach depends on knowing who does what inside each account: the account executive owns the strategy, the development rep opens threads, a marketer runs plays, and a solutions engineer or executive joins for senior contacts. Writing these roles down per pod, with one named owner per account, stops the same finance director getting three unconnected emails from your company in one week.

                ## Milestones
                1. Pods formed, each with an account executive, a development rep and a marketing contact.
                2. A one-page roles sheet saying who contacts which level of seniority.
                3. One named owner for every tier one and tier two account.
                4. An agreed rule for when two people want to contact the same buyer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier one and tier two account has one named owner, and a written roles sheet sets who contacts which level of seniority."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the sellers, development reps and marketers available for pods"
                - "Write who contacts which seniority level in each account"
                - "Assign one named owner to every tier one and tier two account"
                - "Agree what happens when two people want to contact the same buyer"
            - name: One-page research brief for tier one accounts
              description: |-
                ## Purpose
                Sellers who open with a generic pitch waste the one chance a senior buyer gives them. A standard one-page brief covering strategy, recent news, likely priorities, tools already in place, known contacts and a first value hypothesis means every tier one account starts from the same depth of homework, and a new pod member can catch up in five minutes.

                ## Milestones
                1. A brief layout agreed with sections for strategy, news, priorities, current tools, contacts and value.
                2. Briefs written for the first five tier one accounts.
                3. Each brief attached to its account record in the CRM.
                4. Briefs written for every remaining tier one account.

                ## Notes
                Keep it to one page. A twelve-page dossier gets written once and never read again.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier one account has a one-page research brief in the agreed layout, attached to its CRM record."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the six sections of the research brief with the pod"
                - "Ask the agent to draft a first brief from the account's public sources"
                - "Check and correct the draft against the account's own website and reports"
                - "Attach each finished brief to its tier one account record"
            - name: Buying committee persona map for target accounts
              description: |-
                ## Purpose
                In a typical target account, six to ten people shape a purchase: an economic buyer, the owner of the problem, daily users, technical evaluators, procurement and sometimes legal or security. Mapping those roles once for your offer, with the titles they usually hold and what each cares about, tells pods which contacts to find in every account before any opportunity exists.

                ## Milestones
                1. Every role that appeared in the last ten won deals listed.
                2. The usual job titles written against each role.
                3. The main concern and most useful message for each role noted.
                4. The map shared with every pod and used to set contact coverage targets.

                ## Notes
                This is the general pattern for your market. Mapping the actual people in one live deal is a separate job once an opportunity is open.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A persona map lists at least six buying committee roles with usual titles and main concerns, and is shared with every pod."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every role involved in the last ten won deals"
                - "Write the usual job titles for each role"
                - "Note the main concern of each role in one sentence"
                - "Update the persona map with roles found in newly won deals @recurring(yearly)"
            - name: Coverage and engagement baseline across target accounts
              description: |-
                ## Purpose
                Before the first coordinated play goes out, record where each account stands: how many buying committee contacts you know, how many engaged in the last ninety days, any open opportunity and past revenue. Without that starting point, six months later nobody can say whether the programme moved anything or simply relabelled pipeline that already existed.

                ## Milestones
                1. Known contacts per account counted against the persona map.
                2. Contacts engaged in the last ninety days counted per account.
                3. Open pipeline and past revenue recorded per target account.
                4. A dated baseline snapshot saved for comparison at every review.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated baseline records known contacts, engaged contacts and open pipeline for every target account."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export contacts and activity for every target account from the CRM"
                - "Count known and engaged contacts per account against the persona map"
                - "Add open pipeline and past revenue for each account"
                - "Re-run the coverage snapshot and compare it with the baseline @recurring(quarterly)"
            - name: Account engagement stages from cold to opportunity
              description: |-
                ## Purpose
                Lead stages describe people, and target accounts need stages of their own. A simple ladder such as unaware, aware, engaged, meeting held and opportunity open, with a test for each step that anyone can apply, shows which accounts are warming and which have not moved in a quarter. It also gives the monthly report a shape that sales and marketing both accept.

                ## Milestones
                1. Five or six account stages named, each with a one-line test.
                2. An account stage field added to the CRM.
                3. Every target account placed on a stage.
                4. A rule written for who moves an account up a stage and when.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Account stages with written tests exist as a CRM field, and every target account has its current stage set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft five account stages with a one-line test for each"
                - "Agree the stage tests with the marketing lead"
                - "Ask whoever runs the CRM to add an account stage field"
                - "Set the current stage for every target account"
            - name: Weekly account pod stand-up
              description: |-
                ## Purpose
                Twenty minutes a week keeps a pod coordinated: which accounts moved, which contacts replied, which plays go out next and who is about to email whom. Covering only tier one accounts plus any tier two account that showed a strong signal keeps the meeting short enough that people actually turn up.

                ## Milestones
                1. A fixed weekly slot booked with the whole pod.
                2. A standing agenda of movers, signals, next plays and contact clashes.
                3. Actions recorded with an owner for each account discussed.
                4. Four consecutive stand-ups held.

                ## Notes
                Start from the **Meeting notes** template. Do not read the CRM aloud; each owner brings two lines per account.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pod has held the stand-up four weeks in a row, with recorded actions and owners for each tier one account discussed."
                cadence: rolling
              tasks:
                - "Book a recurring twenty-minute slot with the pod"
                - "Write the four-item standing agenda"
                - "Run the pod stand-up and record actions per account @recurring(weekly:mon)"
                - "Rotate who chairs the stand-up each month"
            - name: Multi-threaded outreach into tier one accounts
              description: |-
                ## Purpose
                A single contact in a large company is one job change away from zero. Running coordinated outreach to five to eight people in each tier one account at once, each message tuned to their role and sent by the right person on your side, builds several threads so the account survives any one person going quiet.

                ## Milestones
                1. Five to eight target contacts named in each tier one account.
                2. A role-specific opening message written for each persona.
                3. Touches sequenced so no contact hears from two of your people on the same day.
                4. Three or more engaged contacts in at least half of tier one accounts.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least half of tier one accounts have three or more engaged contacts, tracked in the CRM."
                cadence: rolling
              tasks:
                - "Name five to eight target contacts for each tier one account"
                - "Write one opening message per buying committee role"
                - "Sequence the touches so no contact hears from two of you on the same day"
                - "Check which tier one threads have gone quiet and plan the next touch @recurring(weekly:tue)"
            - name: Trigger event watch for target accounts
              description: |-
                ## Purpose
                A new chief executive, a funding round, an acquisition, a burst of job adverts in one function or a public project failure are the moments when a named account will listen. Setting alerts on every target account and spending half an hour a week on them turns news into timely, relevant outreach instead of guesswork about timing.

                ## Milestones
                1. News and job alerts set on every tier one and tier two account.
                2. A list of trigger types that justify outreach, each with a suggested play.
                3. A weekly review slot in the diary.
                4. At least one outreach a month started from a trigger, with the trigger logged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Alerts cover every tier one and tier two account, and the CRM shows at least one trigger-led outreach logged each month."
                cadence: rolling
              tasks:
                - "Set news and job alerts for every tier one and tier two account"
                - "List the trigger types that justify outreach and a play for each"
                - "Review the week's triggers and assign outreach to owners @recurring(weekly:thu)"
                - "Log the trigger behind each outreach in the account notes"
            - name: Intent and website signal review
              description: |-
                ## Purpose
                Third-party intent data, visits to your pricing page and repeated reads of your content can show an account researching the problem months before anyone fills in a form. Reviewing these signals weekly against the target list, and treating them as a prompt to look closer rather than proof of buying, gets sellers into conversations earlier.

                ## Milestones
                1. The signal sources you can access listed, with what each can and cannot show.
                2. A weekly signal report filtered to target accounts.
                3. A rule for which signal strength triggers outreach.
                4. One quarter of signal-led outreach results recorded.

                ## Notes
                Intent data is noisy. One spike means little; repeated signals on related topics from the same account mean more.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly signal report covers target accounts, and one quarter of signal-led outreach results is recorded."
                cadence: rolling
              tasks:
                - "List the intent and website signal sources you can access"
                - "Set up a weekly report filtered to target accounts"
                - "Review the signal report and flag accounts for outreach @recurring(weekly:wed)"
                - "Compare reply rates on signal-led and unprompted outreach after a quarter"
            - name: Monthly account engagement scoring
              description: |-
                ## Purpose
                Counting meetings alone misses accounts that are warming up across several people. A monthly score adding up engaged contacts, senior engagement, signal strength and meetings per account shows which accounts deserve more effort next month and which have flatlined despite it.

                ## Milestones
                1. A scoring rule with four or five weighted inputs.
                2. Scores calculated for every target account.
                3. Effort moved towards rising accounts and away from flat ones.
                4. Three months of scores kept to show trends.

                ## Notes
                Start from the **Metrics log** template. Keep the weights simple enough that a seller can predict their own account's score.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every target account has a monthly engagement score, with at least three months of history logged."
                cadence: rolling
              tasks:
                - "Write the scoring rule with four weighted inputs"
                - "Score every target account from current CRM data"
                - "Score target accounts and flag the biggest risers and fallers @recurring(monthly:9)"
                - "Share the ten biggest movers with the pods"
            - name: Contact coverage gap fill
              description: |-
                ## Purpose
                Many target accounts start with one or two known names, usually at the wrong level. Comparing each tier one account's contacts against the buying committee persona map every month, then sourcing the missing roles, keeps coverage climbing steadily rather than in one rush before a campaign.

                ## Milestones
                1. Coverage gaps listed for every tier one account against the persona map.
                2. Missing contacts sourced and verified for the biggest gaps.
                3. Average known roles per tier one account above the recorded baseline.
                4. Contacts who have left their company marked and replaced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Average known buying committee roles per tier one account has risen above the recorded baseline."
                cadence: rolling
              tasks:
                - "List missing persona roles for each tier one account"
                - "Source and verify contacts for the three biggest gaps"
                - "Fill the month's coverage gaps and remove contacts who have left @recurring(monthly:16)"
                - "Report average roles known per tier one account to the pod"
            - name: Quarterly target account list refresh
              description: |-
                ## Purpose
                A list frozen for a year fills up with companies that were acquired, went silent or signed with a competitor. Reviewing it each quarter, with a fixed swap budget of around ten percent, keeps effort pointed at live opportunities while still giving each account enough time to respond.

                ## Milestones
                1. Accounts with no engagement after two full quarters flagged.
                2. Accounts that signed with a competitor or no longer fit removed.
                3. Replacements chosen from the scored long list.
                4. The refreshed list signed off by sales and marketing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The target list is reviewed every quarter, with removed and added accounts and the reason for each change recorded."
                cadence: cyclic
              tasks:
                - "Flag accounts with no engagement after two quarters"
                - "Remove accounts that signed with a competitor or no longer fit"
                - "Pick replacements from the scored long list"
                - "Run the target list refresh with sales and marketing @recurring(quarterly)"
            - name: Quarterly account play calendar
              description: |-
                ## Purpose
                Plays are the coordinated moves made into an account: an executive letter, an industry benchmark report, a roundtable invitation, a tailored demo offer. Planning a quarter of plays per tier in advance means marketing can produce the assets on time and sellers know what is coming instead of improvising every week.

                ## Milestones
                1. Three to five plays chosen for each tier for the quarter.
                2. An owner and launch date set for each play.
                3. Assets for each play ready a fortnight before launch.
                4. Results of each play recorded at quarter end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated quarterly play calendar exists for each tier, and results for every play are recorded at quarter end."
                cadence: cyclic
              tasks:
                - "List the plays that produced meetings last quarter"
                - "Choose three to five plays per tier with owners and dates"
                - "Brief marketing on the assets each play needs"
                - "Plan the next quarter's play calendar with the pods @recurring(quarterly)"
            - name: Monthly account-based pipeline report
              description: |-
                ## Purpose
                Leadership will ask whether the programme is working long before the first deals close. A monthly one-page report showing account stage movement, coverage, meetings and pipeline from target accounts against the baseline answers with evidence and protects the budget through a long sales cycle.

                ## Milestones
                1. Five headline measures agreed with leadership.
                2. A one-page report layout built from CRM data.
                3. The first report sent with a comparison to the baseline.
                4. Six monthly reports sent on time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page account-based pipeline report has gone to leadership on schedule for six consecutive months."
                cadence: rolling
              tasks:
                - "Agree five headline measures with the sales leader"
                - "Build the report layout from CRM fields"
                - "Send the account-based pipeline report to leadership @recurring(monthly:4)"
                - "Note in each report one decision the numbers should prompt"
            - name: Fast follow-up on newly engaged target accounts
              description: |-
                ## Purpose
                When three people from a tier one account attend a webinar or read the same report, a reply two weeks later wastes the moment. A rule that every newly engaged account gets a personal follow-up from its owner within two working days, checked every Friday, turns marketing engagement into sales conversations.

                ## Milestones
                1. An alert sent to the account owner whenever an account becomes engaged.
                2. Short follow-up notes ready for each common type of engagement.
                3. A weekly check of engaged accounts with no follow-up.
                4. Follow-up within target for at least eight in ten engaged accounts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight in ten newly engaged target accounts receive a personal follow-up within two working days, measured over a month."
                cadence: rolling
              tasks:
                - "Set an alert to the account owner when an account becomes engaged"
                - "Write a short follow-up note for each common engagement type"
                - "Check engaged accounts that have had no seller follow-up @recurring(weekly:fri)"
                - "Add the follow-up rate to the monthly pipeline report"
            - name: Writing an account-specific point of view
              description: |-
                ## Purpose
                Senior buyers reply to someone who has thought about their business, not to a product summary. A point of view is a one-page argument about a problem the account probably has, why it matters this year and what a first step could look like. Learning to write one in under two hours makes tier one outreach credible.

                ## Milestones
                1. Three strong point-of-view documents collected and studied.
                2. A four-part structure agreed: observation, implication, idea, next step.
                3. Points of view written for three tier one accounts and reviewed by a colleague.
                4. At least one sent and the response recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three account-specific points of view have been written and peer reviewed, and at least one has been sent with the response logged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect three point-of-view examples from your team or industry"
                - "Outline the four-part structure on one page"
                - "Write a point of view for one tier one account"
                - "Ask a colleague to review it before it is sent"
            - name: Reading a target account's strategy from public sources
              description: |-
                ## Purpose
                Annual reports, investor presentations, earnings call transcripts, job adverts and leadership interviews say what a company is trying to achieve this year and where it is struggling. Learning to pull three stated priorities and the figures behind them in about an hour lets sellers tie outreach to goals executives have already announced.

                ## Milestones
                1. A checklist of public sources for listed and privately owned companies.
                2. Three stated priorities and their figures pulled for one practice account.
                3. The same exercise completed for five tier one accounts.
                4. Each account's priorities and sources added to its research brief.

                ## Notes
                Private companies publish less. Job adverts, press interviews and trade press often reveal their priorities instead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five tier one research briefs each list three stated company priorities with a public source cited for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a source checklist for listed and private companies"
                - "Pull three priorities from one account's latest annual report"
                - "Repeat the exercise for five tier one accounts"
                - "Add each account's priorities and sources to its research brief"
            - name: Executive outreach letters that get replies
              description: |-
                ## Purpose
                Chief executives and finance directors ignore automated sequences but sometimes answer a short, specific letter that names their own stated goal and offers something useful. Practising this form, under one hundred and fifty words with a single clear ask, gives the pod a way in at the top of an account.

                ## Milestones
                1. Five real executive letters that got replies studied for pattern.
                2. A four-line structure written: their goal, your observation, one proof, one ask.
                3. Letters drafted for three tier one executives and reviewed.
                4. Reply rate on executive letters tracked over one quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Executive letters have gone to at least ten tier one leaders, with the reply rate recorded after one quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect five executive letters that earned a reply"
                - "Write the four-line structure for executive letters"
                - "Draft letters for three tier one executives"
                - "Ask a senior colleague to sign or co-sign the strongest letter"
            - name: Cluster messaging for one-to-few accounts
              description: |-
                ## Purpose
                Tier two accounts deserve more than a mail merge but cannot each get a bespoke plan. Messaging written for a cluster of ten to twenty similar accounts, such as regional hospital groups or mid-sized logistics firms, around a problem they share, plus one account-specific line, gives most of the relevance for a fraction of the effort.

                ## Milestones
                1. Each tier two cluster given a one-sentence shared problem.
                2. A core message and two proof points written per cluster.
                3. A slot for one account-specific line added to every template.
                4. Reply rates compared between cluster and generic messaging.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every tier two cluster has written core messaging with proof points, and its reply rate has been compared with generic outreach."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the shared problem for each tier two cluster in one sentence"
                - "Draft a core message and two proof points per cluster"
                - "Add a slot for one account-specific line in each template"
                - "Compare cluster reply rates with generic outreach after six weeks"
            - name: Touch limits across channels and people
              description: |-
                ## Purpose
                When an account executive, a development rep, an advert and a marketing email all reach the same director in one week, it reads as pressure rather than attention. Agreeing simple touch limits, such as a weekly maximum per contact across every channel and a priority order for who speaks to senior buyers, keeps coordinated outreach from tipping into noise.

                ## Milestones
                1. Last month's touches per contact measured for a sample of tier one accounts.
                2. A weekly touch limit per contact agreed across all channels.
                3. A priority order for who contacts senior buyers.
                4. The limits added to the pod roles sheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written touch limits set a weekly maximum per contact across channels and appear in the pod roles sheet."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the touches each contact in five tier one accounts received last month"
                - "Agree a weekly touch limit per contact across all channels"
                - "Set the priority order for who contacts senior buyers"
                - "Add the touch limits to the pod roles sheet"
            - name: Relationship paths into each tier one account
              description: |-
                ## Purpose
                Someone in your company's network often already knows someone inside a target account: a customer's former colleague, an investor, a board member, a partner or a colleague who used to work there. Mapping these paths for every tier one account, and refreshing them monthly, warms up cold accounts without a single cold email.

                ## Milestones
                1. Relationship sources listed: customers, investors, advisers, partners and colleagues' past employers.
                2. Paths found for at least half of tier one accounts.
                3. Introduction requests sent through the strongest paths.
                4. Every path and its outcome recorded on the account.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Relationship paths are recorded for at least half of tier one accounts, with introduction requests and outcomes logged."
                cadence: rolling
              tasks:
                - "List the relationship sources your company can draw on"
                - "Search for paths into each tier one account"
                - "Ask for introductions through the three strongest paths"
                - "Check for new relationship paths into tier one accounts @recurring(monthly:22)"
            - name: Running an account planning session with the pod
              description: |-
                ## Purpose
                Ninety minutes in a room with the seller, development rep, marketer and a solutions engineer produces a better tier one plan than one person writing alone. Learning to facilitate the session, with the research brief on screen and a fixed set of questions, makes it quick enough to repeat for every tier one account each half year.

                ## Milestones
                1. A ninety-minute agenda with six fixed questions.
                2. A first session run for one tier one account.
                3. A one-page account plan produced from each session.
                4. Sessions held for every tier one account within a quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every tier one account has had a pod planning session and has a one-page account plan as a result."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a ninety-minute agenda with six fixed questions"
                - "Run a first session for the tier one account with the most known contacts"
                - "Turn the session output into a one-page account plan"
                - "Book sessions for the remaining tier one accounts"
            - name: Value hypothesis for each tier one account
              description: |-
                ## Purpose
                Before a first meeting, the pod should be able to say in two sentences what the account could gain and roughly what it is worth, such as hours saved a month or revenue at risk. A value hypothesis built from public figures and comparable customers gives outreach a business reason and gives the first discovery call something to test.

                ## Milestones
                1. A four-part format agreed: problem, measure, estimated size, source.
                2. Results from comparable customers gathered for each cluster.
                3. A value hypothesis written for every tier one account.
                4. Each hypothesis tested and corrected after the first discovery conversation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every tier one account has a written value hypothesis with a stated measure and source, updated after first discovery."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree the four-part value hypothesis format with the pod"
                - "Gather results from comparable customers for each cluster"
                - "Write a value hypothesis for each tier one account"
                - "Correct each hypothesis after the first discovery call"
            - name: Choosing an intent data or account-based platform
              description: |-
                ## Purpose
                Account-based platforms promise visitor identification, intent topics, advertising and orchestration in one place, at prices that can exceed a seller's salary. A structured comparison of two or three options, with a trial on your own target list, shows whether the data actually covers your accounts before a multi-year contract is signed.

                ## Milestones
                1. Requirements listed and split into must-have and nice-to-have.
                2. Two or three platforms shortlisted with pricing.
                3. Each shortlisted platform tested against your real target list for coverage.
                4. A recorded decision, including the option to buy nothing yet.

                ## Notes
                Start from the **Purchase decision** template. Ask every vendor what share of your named accounts they hold data on; regional or niche lists often have thin coverage.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A purchase decision is recorded after testing at least two platforms against your own target account list."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List must-have and nice-to-have requirements for a platform"
                - "Shortlist two or three platforms and request pricing"
                - "Send each vendor your target list and ask for coverage figures"
                - "Record the decision and reasons on the purchase decision page"
            - name: Direct mail and gifting for tier one accounts
              description: |-
                ## Purpose
                Well-chosen physical items, such as a relevant book with a handwritten note or a printed account-specific benchmark, can earn a reply where ten emails did not. Running gifting as a programme, with a budget per account, a short list of approved items and a check against each buyer's gift policy, keeps it thoughtful and within the rules.

                ## Milestones
                1. A per-account gifting budget and a list of approved items.
                2. Gift rules checked for public sector and regulated buyers, where gifts may be restricted.
                3. Verified delivery addresses for target contacts, including remote workers.
                4. Every send and response logged against the account.

                ## Notes
                Many organisations cap or ban gifts to their staff. Check first, and never send anything that could look like an inducement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A gifting programme with a budget, approved items and a policy check is running, with every send and response logged."
                cadence: rolling
              tasks:
                - "Set a gifting budget per tier one account"
                - "Choose three approved items that relate to your buyers' work"
                - "Check gift policies for public sector and regulated buyers"
                - "Log gift sends and responses against each account @recurring(monthly:12)"
            - name: Account-targeted advertising with marketing
              description: |-
                ## Purpose
                Adverts shown only to people at named accounts warm up the buying committee before and between sales touches, especially the people sellers cannot reach directly. Matching the advert message to the current play, and reviewing engagement by account every month, makes the spend support sales rather than run alongside it.

                ## Milestones
                1. The target account list uploaded to the advertising platforms marketing uses.
                2. Advert messages matched to each tier's current play.
                3. A monthly view of advert engagement by account shared with sellers.
                4. Accounts with rising advert engagement passed to their owners for outreach.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Advertising runs against the named target list, and a monthly engagement view by account is shared with sellers."
                cadence: rolling
              tasks:
                - "Send marketing the current target list for advert audiences"
                - "Match advert messages to each tier's current play"
                - "Review advert engagement by account with marketing @recurring(monthly:25)"
                - "Pass accounts with rising engagement to their owners"
            - name: Personalised landing pages for tier one accounts
              description: |-
                ## Purpose
                Pages built for one account, with its name, its stated priorities, relevant case studies and the pod's names and photos, give buyers something to forward internally. Starting with five tier one accounts tests whether the extra effort brings more engagement before it becomes standard practice.

                ## Milestones
                1. A reusable page layout with slots for account priorities and case studies.
                2. Pages live for five tier one accounts.
                3. Visits and forwards tracked per page.
                4. A decision recorded on whether to extend pages to all tier one accounts.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five personalised account pages are live with visit tracking, and a decision on extending them has been recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree a reusable page layout with marketing"
                - "Pick five tier one accounts with the most engaged contacts"
                - "Fill each page with the account's priorities and matching case studies"
                - "Compare engagement on page accounts with similar accounts after eight weeks"
            - name: Learning from target accounts that converted
              description: |-
                ## Purpose
                The accounts that turned into opportunities hold the best evidence about what works: which role replied first, which play started the conversation and how long it took. Reviewing every converted target account from the last year beside the same number that stayed cold shows which plays to repeat and which to stop paying for.

                ## Milestones
                1. Every target account that became an opportunity in the last year listed.
                2. The first engaged role, opening play and time to opportunity recorded for each.
                3. The same facts gathered for an equal number of accounts that stayed cold.
                4. Two plays to repeat and one to stop chosen from the comparison.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of converted and cold target accounts names two plays to repeat and one to stop."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List target accounts that became opportunities in the last year"
                - "Record the first engaged role and opening play for each"
                - "Gather the same facts for an equal number of cold accounts"
                - "Pick two plays to repeat and one to stop"
            - name: Testing a one-to-few play against a control group
              description: |-
                ## Purpose
                Teams often credit account-based plays with pipeline that would have arrived anyway. Running one play on half of a cluster and holding back the other half for eight to twelve weeks gives a fair read on whether it actually lifts engagement and meetings.

                ## Milestones
                1. One play and one cluster of at least twenty accounts chosen.
                2. Accounts split at random into test and control groups.
                3. Engagement and meetings recorded for both groups for eight to twelve weeks.
                4. A written result with the decision to scale, change or stop the play.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written test result compares test and control accounts and records whether the play is scaled, changed or stopped."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one play and a cluster of at least twenty accounts"
                - "Split the cluster at random into test and control halves"
                - "Run the play on the test half only"
                - "Compare engagement and meetings between the halves after ten weeks"
            - name: Co-selling into named accounts with partners
              description: |-
                ## Purpose
                Resellers, consultancies and technology partners often already have relationships in your target accounts. Sharing part of the list under a written agreement, mapping overlaps and running joint plays opens doors faster than either side alone, as long as the rules about who owns the deal are clear first.

                ## Milestones
                1. Two or three partners chosen with likely overlap on your target list.
                2. A written agreement covering account sharing, deal ownership and data handling.
                3. Overlapping accounts mapped with each partner.
                4. At least one joint play run per partner and its outcome logged.

                ## Notes
                Check any data-sharing arrangement with whoever owns legal and privacy in your company before swapping account or contact lists.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two partners have a written co-selling agreement, overlapping accounts mapped and a joint play logged."
                cadence: rolling
              tasks:
                - "Shortlist partners with likely relationships in your target accounts"
                - "Agree account sharing and deal ownership rules in writing"
                - "Map overlapping accounts with each partner"
                - "Hold the partner account mapping call @recurring(monthly:19)"
            - name: Executive dinner for target account leaders
              description: |-
                ## Purpose
                Private dinners for eight to twelve senior people from target accounts, built around a topic they care about and hosted by one of your executives, can open more tier one conversations in an evening than a quarter of outreach. They need eight to ten weeks of lead time, personal invitations and careful seating.

                ## Milestones
                1. A topic, host, venue and date confirmed.
                2. Personal invitations sent to around thirty target account leaders for twelve seats.
                3. A seating plan and one-page guest briefing ready for your hosts.
                4. A personal follow-up sent to every attendee within three working days.

                ## Notes
                Start from the **Operational checklist** template. Keep the selling out of the room; the follow-up is where the next step is agreed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The dinner is held with at least eight target account leaders attending, each with a follow-up logged within three working days."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Choose a topic and ask an executive to host"
                - "Shortlist three venues with a private room for twelve"
                - "Send personal invitations from the host to thirty target account leaders"
                - "Write a one-page briefing on each guest for your hosts"
                - "Send each attendee a personal follow-up within three working days"
            - name: Trade show plan around target account attendees
              description: |-
                ## Purpose
                Trade shows are expensive for the handful of target account people who will actually be there. Finding out which named accounts are attending, booking meetings before the show and planning who covers each one turns a stand rental into a set of tier one conversations.

                ## Milestones
                1. Target account attendees identified from exhibitor, speaker and app listings.
                2. Meetings booked with target account attendees before the show.
                3. Stand and floor coverage assigned by account.
                4. Every target account conversation logged with a next step within a week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Pre-booked meetings with target account attendees are held at the show, and each conversation is logged with a next step within a week."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Check the speaker and exhibitor lists for target accounts"
                - "Invite target account attendees to book a meeting at the show"
                - "Assign each attending account to a named person on the stand"
                - "Log every target account conversation with a next step after the show"
            - name: Two-week target account blitz
              description: |-
                ## Purpose
                Once a quarter, a focused two-week push with every seller, development rep and a few executives working the target list together can break open accounts that routine outreach has not. Prepared plays, a shared tally of meetings booked and a fifteen-minute daily check-in keep energy high without lowering message quality.

                ## Milestones
                1. Target accounts, plays and assets for the blitz ready a week before it starts.
                2. Every participant assigned specific accounts and contacts.
                3. Meetings booked with target accounts tracked daily during the blitz.
                4. A short results summary with lessons for the next blitz.

                ## Notes
                Start from the **Marketing campaign** template. Set a quality rule before the start, such as no message without one account-specific line.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The blitz runs for two weeks with every participant assigned accounts, and a results summary records meetings booked per tier."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick the blitz dates and the accounts in scope"
                - "Prepare plays and assets for each tier"
                - "Assign accounts and contacts to every participant"
                - "Write the results summary within a week of the blitz ending"
            - name: Roundtable for a one-to-few cluster
              description: |-
                ## Purpose
                Peers in the same industry want to hear how others handle a shared problem. A sixty-minute online or in-person roundtable for one tier two cluster, led by a customer or an independent expert with your team listening more than talking, engages several accounts at once and surfaces their priorities in their own words.

                ## Milestones
                1. A topic chosen from the cluster's shared problem and a credible guest confirmed.
                2. Invitations sent to buying committee contacts across the cluster.
                3. The roundtable held with at least six target accounts represented.
                4. Notes on each account's stated priorities passed to its owner.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The roundtable is held with at least six target accounts represented, and notes on each are passed to its owner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose the cluster and the shared problem to discuss"
                - "Invite a customer or independent expert to lead the conversation"
                - "Send invitations to buying committee contacts across the cluster"
                - "Pass each account's stated priorities to its owner after the session"
            - name: Executive outreach week
              description: |-
                ## Purpose
                Your own executives can reach peers in target accounts that sellers cannot. One week a quarter in which each leader sends a few personal notes or makes calls to tier one counterparts, with drafts prepared by the pod, puts senior relationships in place before a deal needs them.

                ## Milestones
                1. Each participating executive matched with three to five tier one counterparts.
                2. Personal notes drafted by the pod and edited by each executive.
                3. All notes sent or calls made within the week.
                4. Replies logged and passed to account owners for follow-up.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every participating executive has contacted at least three tier one counterparts in the week, with replies logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Match each participating executive with three to five tier one counterparts"
                - "Ask the agent to draft a first personal note for each pairing"
                - "Have each executive edit and send their notes during the week"
                - "Pass every reply to the account owner the same day"
            - name: Founder-run account-based selling without a marketing team
              description: |-
                ## Purpose
                An early-stage founder can run account-based selling with nothing more than twenty-five dream accounts, a spreadsheet and an hour or two a day. The trick is fewer, deeper accounts, personal notes rather than automation, and using the founder title to reach senior people who ignore sales reps.

                ## Milestones
                1. Twenty-five dream accounts chosen with a reason for each.
                2. Three relevant contacts found per account and a one-sheet tracker set up.
                3. Personal outreach sent to every account within a month.
                4. First meetings held with at least five accounts.

                ## Notes
                Resist buying tools until the first meetings show which messages work; a spreadsheet is enough for twenty-five accounts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A founder-run tracker covers twenty-five accounts with three contacts each, and at least five first meetings have been held."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down twenty-five dream accounts and why each matters"
                - "Find three relevant contacts for each account"
                - "Set up a one-sheet tracker of accounts, contacts and touches"
                - "Send personal notes to five accounts this week"
            - name: Founder as executive sponsor on tier one accounts
              description: |-
                ## Purpose
                Once a sales team exists, the founder's name still opens doors that a seller's cannot. Agreeing which tier one accounts get founder involvement, what that looks like (a note, a call, a dinner seat) and how sellers ask for it keeps the founder useful without becoming a bottleneck or going around the pod.

                ## Milestones
                1. A list of tier one accounts where founder involvement is planned.
                2. A simple route for sellers to request founder time.
                3. A monthly block in the founder's diary for target account notes.
                4. Every founder touch logged on the account.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Founder involvement is planned for named tier one accounts, and every founder touch is logged on the account record."
                cadence: rolling
              tasks:
                - "Pick the tier one accounts where founder time is most likely to matter"
                - "Agree how sellers request founder time and what they must bring"
                - "Write the month's founder notes to tier one executives @recurring(monthly:7)"
                - "Log every founder touch on the account record"
            - name: Moving an enterprise team from territories to named accounts
              description: |-
                ## Purpose
                Switching sellers from geographic or industry patches to named account lists changes what they own, how pipeline is measured and how they are paid. Planning the move in phases, with a pilot pod, a compensation check and clear rules for open deals, avoids losing good sellers or revenue in the transition.

                ## Milestones
                1. A pilot pod working named accounts for one quarter.
                2. Quota and commission effects checked with the people who own compensation.
                3. Rules agreed for open deals and existing customers during the move.
                4. A dated rollout plan for the remaining teams.

                ## Notes
                Sellers losing accounts they have nurtured for years is the biggest risk. Agree how open opportunities and credit are handled before announcing anything.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pilot pod has run named accounts for a quarter, and a dated rollout plan with open-deal and compensation rules is approved."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose one pod to pilot named accounts for a quarter"
                - "Ask the compensation owner to model quota effects for the pilot pod"
                - "Write the rules for open deals and existing customers during the move"
                - "Draft the rollout plan with dates for each remaining team"
            - name: Inheriting a target account list from another seller
              description: |-
                ## Purpose
                Taking over named accounts from someone who left or moved means inheriting their half-finished threads, promises and reputation inside each account. Spending the first two weeks reading history, holding a handover call and sending a careful introduction to every engaged contact keeps momentum instead of restarting from cold.

                ## Milestones
                1. History, open threads and promises read for every inherited account.
                2. A handover call held with the previous owner where possible.
                3. An introduction sent to every engaged contact.
                4. A short plan for each tier one account agreed with your manager.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every engaged contact in the inherited accounts has had an introduction, and each tier one account has an agreed short plan."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the last six months of activity on every inherited account"
                - "Book a handover call with the previous owner"
                - "Send an introduction to every engaged contact"
                - "Agree a short plan for each tier one account with your manager"
            - name: Re-entering a target account that said no
              description: |-
                ## Purpose
                An account that chose a competitor or shelved the project a year ago is often among the warmest on the list: the problem is known, contacts know you and contracts come up for renewal. A planned re-entry, timed to their renewal or a leadership change and opening with what has changed since, earns a second look without reopening old arguments.

                ## Milestones
                1. Accounts that said no in the last two years listed with the reason and date.
                2. Likely renewal or review points estimated for each.
                3. A re-entry message per account that names what has changed.
                4. Re-entry outreach scheduled for each account's review point.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account that said no in the last two years has a re-entry date and a message naming what has changed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List accounts that said no in the last two years with the reason"
                - "Estimate each account's renewal or review point"
                - "Write a re-entry message that names what has changed"
                - "Schedule each re-entry for the account's review point"
            - name: Target account reorganised mid-campaign
              description: |-
                ## Purpose
                Mergers, new leadership and restructures can wipe out months of threads in a target account overnight, or open a door that was shut. Re-mapping the buying committee within two weeks of the news, and adjusting the play to the new priorities, turns the disruption into a reason to talk.

                ## Milestones
                1. The change confirmed from official announcements and its effect on contacts noted.
                2. Contacts who left, moved or gained responsibility updated in the CRM.
                3. The new leaders' stated priorities researched.
                4. An adjusted outreach plan agreed at the pod stand-up.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within two weeks of the reorganisation, the account's contacts are updated in the CRM and an adjusted outreach plan is agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the official announcement and note which contacts are affected"
                - "Update moved, departed and promoted contacts in the CRM"
                - "Research the stated priorities of the new leaders"
                - "Agree the adjusted outreach plan at the next pod stand-up"
            - name: Entry plan for a multi-division group
              description: |-
                ## Purpose
                Large groups with several divisions, countries or brands often buy separately, and a win in one division can be the reference that opens the rest. Mapping the group structure, which units buy on their own and where any existing relationship sits lets an enterprise team choose an entry point and the order of expansion before the first deal.

                ## Milestones
                1. The group's divisions, countries and decision units mapped.
                2. Which units buy independently and which buy centrally established.
                3. The best entry division chosen with a written reason.
                4. A sequence for the next two or three divisions written into the account plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A group map shows which units buy independently, names the entry division with a reason and sets the order for the next divisions."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Map the group's divisions and countries from its annual report"
                - "Find out which units buy independently and which buy centrally"
                - "Choose the entry division and write down why"
                - "Add the expansion sequence to the account plan"
            - name: Measuring pipeline influence of account-based programmes
              description: |-
                ## Purpose
                Simple last-touch attribution credits whoever logged the final activity and makes account-based plays look either useless or magical. Comparing target accounts with similar non-target accounts on opportunity rate, deal size, win rate and cycle length gives a fairer answer to whether the programme pays for itself.

                ## Milestones
                1. A comparison group of similar non-target accounts defined.
                2. Opportunity rate, deal size, win rate and cycle length measured for both groups.
                3. Programme cost per target account totalled.
                4. A written finding on return shared with leadership.

                ## Notes
                Results take two or three sales cycles to mean much. Report early engagement numbers in the meantime and say plainly that revenue figures will lag.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of target and similar non-target accounts on four outcome measures, with programme cost per account, is shared with leadership."
                cadence: cyclic
              tasks:
                - "Define a comparison group of similar non-target accounts"
                - "Measure opportunity rate, deal size, win rate and cycle length for both"
                - "Total the programme cost per target account"
                - "Refresh the target versus non-target comparison @recurring(quarterly)"
            - name: Account fit model from closed-won data
              description: |-
                ## Purpose
                Once you have a few dozen won and lost deals, the target list can be chosen from evidence instead of opinion. A simple fit model, built with whoever handles data and tested against past results, scores every account in the market so each quarterly refresh starts from a ranked list.

                ## Milestones
                1. Won and lost deals from the last two years gathered with company and technology data.
                2. Five to eight fit factors found that separate won from lost deals.
                3. The model tested against a held-back set of past deals.
                4. Every account in the market scored and the top scores compared with the current list.

                ## Notes
                A model built on fewer than about forty won deals will mostly learn noise. Keep it simple and check it against seller judgement.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fit model tested on held-back past deals scores every account in the market, and its top scores are compared with the current list."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Export two years of won and lost deals with company data"
                - "Find the five to eight factors that best separate wins from losses"
                - "Test the model on a held-back set of past deals"
                - "Re-train the fit model with the year's new wins and losses @recurring(yearly)"
            - name: Annual account-based programme review
              description: |-
                ## Purpose
                Every year, step back from accounts and plays to ask whether the programme itself is right: the size of the list, the tier split, the pods, the budget and the platforms. A half-day review with sales, marketing and finance, using a year of monthly reports and the influence analysis, sets the programme for the next twelve months.

                ## Milestones
                1. A year of monthly reports and the influence analysis gathered.
                2. List size, tiers, pods and budget each reviewed against results.
                3. Changes for next year agreed and written down.
                4. Next year's programme budget approved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written annual review records changes to list size, tiers, pods and budget, with next year's budget approved."
                cadence: cyclic
              tasks:
                - "Gather the year's monthly reports and the influence analysis"
                - "Review list size, tiers, pods and budget against results"
                - "Write down the changes agreed for next year"
                - "Hold the annual programme review with sales, marketing and finance @recurring(yearly)"
            - name: Twelve-month plan for a single dream account
              description: |-
                ## Purpose
                Some accounts are worth a year of patient work on their own: a market leader whose logo would change how every other buyer sees you. A dedicated twelve-month plan, with monthly moves, relationship goals at each level and a clear test for when to stop, keeps the effort deliberate instead of sporadic.

                ## Milestones
                1. A written case for why this account justifies a year of focused effort.
                2. Relationship goals set for executive, management and user levels.
                3. Twelve monthly moves planned, each with an owner.
                4. A stop rule agreed, such as no senior engagement after nine months.
                5. A first meeting held with a senior leader in the account.

                ## Notes
                Name the stop rule before you start. Without one, a dream account can absorb a pod's time for years.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A twelve-month plan with monthly moves, owners and a stop rule exists, and a meeting with a senior leader has been held."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write a one-page case for the dream account"
                - "Set relationship goals for executive, management and user levels"
                - "Plan twelve monthly moves with an owner for each"
                - "Agree the stop rule with your sales leader"
---

# Account-Based Selling

This area is for sellers, sales and marketing leaders and founders who have decided to win a short list of named companies rather than chase every lead that fits a filter. It starts with the foundations (whether the approach fits your deals, the named list, tiers, the sales and marketing agreement, pods, research briefs, persona maps, a baseline and account stages), then the weekly and monthly machinery of coordinated outreach, the skills of points of view, executive letters and cluster messaging, improvements such as platforms, gifting, advertising and controlled tests, the events that bring target account leaders into the room, situations for founders, enterprise teams and inherited lists, and finally multi-division entry, influence measurement, fit models and a year-long plan for one dream account.

What repeats is a Monday pod stand-up with weekly checks on quiet threads, triggers, intent signals and follow-up, monthly engagement scores, coverage gap fills, leadership reports, gifting, advertising, partner and founder rhythms, quarterly list refreshes, play calendars and influence comparisons, and a yearly programme review and model refresh. The Meeting notes, Metrics log, Purchase decision, Operational checklist and Marketing campaign templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
