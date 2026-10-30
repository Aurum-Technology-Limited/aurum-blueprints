---
id: fundraising-investors.investor-target-list-building
name: Investor Target List Building
description: "A researched, scored and tiered investor list matched to your round by stage, sector, cheque size and fit, with the routines that keep it current through the raise and beyond."
category: business
version: 1.0.0
tags: [fundraising-investors, investor-target-list-building, founder, venture-capital, investor-research, fundraising-crm, prospecting]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - reading-queue
    - metrics-log
    - feedback-themes
    - person
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Investor Target List Building
          description: "Researching and ranking investors by stage, sector, cheque size and fit so outreach goes to the people most likely to invest."
          projects:
            - name: Round parameters that shape the investor list
              description: |-
                ## Purpose
                Before a single fund goes on the list, the round itself has to be pinned down: how much, at what stage, on what instrument, and whether someone needs to lead. A seed round of 1.5 million that needs a lead calls for a completely different list from a 400,000 pre-seed party round on SAFEs. Writing these four facts on one page stops you spending weeks researching investors who could never fit.

                ## Milestones
                1. A target raise amount written as a range, with the minimum that still reaches the next milestone.
                2. The stage label you will use with investors, checked against what comparable companies called rounds of this size.
                3. The instrument chosen or shortlisted and agreed with your co-founders.
                4. A yes or no on whether the round needs a lead investor, with the reason.
                5. The four facts pinned to the top of the target list.

                ## Notes
                The amount and instrument are decided in the round's own planning; this project only records them so the list can be filtered. If they change mid-raise, re-filter the list the same day.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page round summary with amount range, stage, instrument and lead requirement sits at the top of the target list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the raise amount as a range with the minimum you could accept"
                - "Note the stage label comparable companies used for a round this size"
                - "Confirm the instrument with your co-founders and write it down"
                - "Decide whether the round needs a lead and record why"
            - name: Ideal investor profile for this round
              description: |-
                ## Purpose
                Fit is the whole point of a target list, and fit is far easier to judge when it is written down before you start reading fund websites. An ideal investor profile names the stage, sectors, cheque range, geography, lead or follow role and the kind of help you actually want, so every later name can be checked against the same six lines.

                ## Milestones
                1. Six criteria written: stage, sector, cheque range, geography, role and the help you want.
                2. Each criterion split into must-have and nice-to-have.
                3. Three investors you would love to have named and tested against the profile.
                4. The profile challenged by a co-founder or adviser and tightened.

                ## Notes
                Resist writing 'any top-tier fund'. Brand is not a criterion; a partner who knows your buyers is.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written profile of six criteria, each marked must-have or nice-to-have, agreed by the founding team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the six fit criteria on one page"
                - "Mark each criterion as must-have or nice-to-have"
                - "Name three dream investors and test them against the profile"
                - "Ask a co-founder or adviser to challenge the profile"
            - name: Investor target list spreadsheet structure
              description: |-
                ## Purpose
                Lists kept in a notes app or a row of browser bookmarks fall apart at around thirty names. Setting up the columns first, from firm and partner through cheque range, last relevant deal, conflict flag, source, score and tier, means every name you add is complete and sortable, and the list can feed whatever CRM you use once the raise starts.

                ## Milestones
                1. A sheet or database with one row per partner, not per firm.
                2. Columns for firm, partner, stage, cheque range, sectors, geography, lead or follow, last relevant deal, conflict flag, source, score, tier and status.
                3. Drop-down values set for tier, status and role so filtering works.
                4. Ten existing names moved in with every column filled.

                ## Notes
                One row per partner matters: firms rarely decide as a whole, and two partners at one firm can want very different things. Mark which partner is your first choice so you never pitch two at once.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A target list with the agreed columns and drop-downs holds at least ten fully completed partner rows."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the target list sheet with one row per partner"
                - "Add the agreed columns and drop-down values for tier, status and role"
                - "Move every investor name you already have into the sheet"
                - "Fill all columns for the first ten rows"
            - name: Choosing an investor database subscription
              description: |-
                ## Purpose
                Paid investor databases save hours but cost real money, and they vary widely in how current their partner and portfolio data is. Comparing two or three options, including free sources such as fund portfolio pages and funding news, against investors you already know tells you whether a subscription is worth it for this raise.

                ## Milestones
                1. Three data sources compared, at least one of them free.
                2. Each tested on the same ten investors whose details you already know.
                3. Accuracy, export limits and monthly cost noted for each.
                4. A decision recorded: subscribe, use a trial for a research sprint, or stay on free sources.

                ## Notes
                Start from the **Purchase decision** template. Read the export terms before paying; some tools restrict how much data you can take out.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of investor data source, backed by a ten-investor accuracy test across three options."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three investor data sources, including one free option"
                - "Test each source against ten investors you already know well"
                - "Note the price, trial length and export limits of each"
                - "Record the choice on a purchase decision page"
                - "Check the subscription is still earning its cost before renewal @recurring(yearly)"
            - name: Comparable company investor mining
              description: |-
                ## Purpose
                The investors most likely to back you have usually backed something like you, one or two years earlier, at the same stage. Listing fifteen to twenty comparable companies and recording who invested in their rounds of your size produces a starting list grounded in evidence rather than reputation.

                ## Milestones
                1. Fifteen to twenty comparable companies listed: same customer, model or market, not just the same buzzword.
                2. Each comparable's announced round at your stage found from press releases, funding news or its own site.
                3. Every investor in those rounds added to the list with the comparable named as the source.
                4. Investors appearing in three or more comparables flagged for a closer look.

                ## Notes
                Investors in a direct competitor may be conflicted; the portfolio conflict screen deals with them before outreach.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least fifteen comparable companies mined, with every investor in their stage-matched rounds on the list and repeat names flagged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down fifteen comparable companies and why each counts"
                - "Find the announced round at your stage for each comparable"
                - "Add every investor named in those rounds with the source recorded"
                - "Flag investors who appear in three or more comparables"
            - name: Cheque size and ownership fit check
              description: |-
                ## Purpose
                A fund's typical cheque follows from its fund size and the ownership it aims for, so a 300 million fund rarely writes a 250,000 cheque and a 20 million micro-fund cannot lead a 5 million round. Checking each name's real cheque range against your round removes investors who may like the company but structurally cannot take part.

                ## Milestones
                1. Each fund's size and typical first cheque recorded from its own statements or recent deals.
                2. A written rule for which cheque ranges can lead, co-lead or follow in your round.
                3. Names that cannot fit moved to a parked tab, not deleted.
                4. Funds with no reliable cheque data marked for a follow-up check.

                ## Notes
                Cheque ranges on fund websites are often years out of date. Recent announced deals are better evidence.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every name on the list has a recorded cheque range, and those that cannot fit the round are parked with the reason noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add fund size and typical first cheque columns to the list"
                - "Write the cheque range that can lead, co-lead or follow your round"
                - "Move names that cannot fit to a parked tab with the reason"
                - "Mark funds with unclear cheque data for a closer look"
            - name: Lead and follow-on investor split
              description: |-
                ## Purpose
                Rounds that need a lead stall when the list is full of investors who only follow, because followers wait for someone else to set the terms. Tagging each name as a likely lead, possible lead or follower, based on what they have actually done in the last two years, shows whether there are enough leads to start.

                ## Milestones
                1. Every name tagged lead, possible lead or follower from recent deal evidence.
                2. The count of likely leads compared with the number the round needs.
                3. Gaps filled with extra lead candidates before outreach begins.
                4. Followers grouped so they can be approached once a lead is in place.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every investor carries a lead, possible lead or follower tag backed by a recent deal, and the list holds the target number of likely leads."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tag each investor as lead, possible lead or follower"
                - "Check two recent deals for every name tagged lead"
                - "Count likely leads against the number your round needs"
                - "Research extra lead candidates if the count falls short"
            - name: Portfolio conflict screen
              description: |-
                ## Purpose
                Pitching a fund that backs your closest competitor wastes a meeting at best, and at worst hands your plan to someone with a reason to share it. Screening each fund's current portfolio for direct and adjacent competitors before outreach takes an afternoon and protects both the raise and your information.

                ## Milestones
                1. A one-line definition of a direct competitor and of an adjacent one.
                2. Every tier A and B fund's portfolio checked against the definitions.
                3. Conflicted funds flagged red and adjacent ones amber, with the portfolio company named.
                4. A decision recorded for each amber fund: pitch with care or drop.

                ## Notes
                Some funds will meet a conflicted company to learn the market. Ask about conflicts directly early in any first conversation.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every tier A and B fund carries a conflict flag with the portfolio company named, and each amber flag has a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one line defining a direct and an adjacent competitor"
                - "Check each tier A and B portfolio page for competitors"
                - "Flag conflicts red or amber and name the portfolio company"
                - "Decide for each amber fund whether to pitch or drop it"
                - "Run the conflict check on names added to tier A this month @recurring(monthly:3)"
            - name: Investor scoring rubric
              description: |-
                ## Purpose
                Gut feel ranks the famous funds first and the best-fit funds nowhere. A simple weighted rubric, scoring stage fit, sector fit, cheque fit, recent activity, partner interest and how reachable they are from 1 to 5, puts a defensible number on every row and makes the ranking easy to explain to a co-founder.

                ## Milestones
                1. Five or six criteria drawn from the ideal investor profile, each with a weight.
                2. A line describing what a 1, a 3 and a 5 look like for each criterion.
                3. Every name scored, with the weighted total calculated by the sheet.
                4. The top twenty sense-checked against instinct and any surprises explained.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every investor on the list has a weighted score from a written rubric, and the top twenty have been reviewed by the founding team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose five or six scoring criteria and give each a weight"
                - "Write what a 1, 3 and 5 mean for every criterion"
                - "Score every investor and let the sheet total the weights"
                - "Review the top twenty with a co-founder and explain any surprises"
            - name: Tiering the list into outreach waves
              description: |-
                ## Purpose
                Founders who email their dream investors first spend those meetings on a pitch that has not yet been tested. Splitting the scored list into tiers A, B and C, and deciding which tier goes in which wave, means the strongest targets hear the sharpest version of the story.

                ## Milestones
                1. Tier A of fifteen to twenty-five best-fit investors, tier B of thirty to fifty, tier C for the rest.
                2. A wave order agreed, usually a handful of tier B meetings before tier A.
                3. Each wave given a target start week in the list.
                4. Tier boundaries written down so later additions are placed consistently.

                ## Notes
                Early-wave meetings should still be with investors you would happily take money from. Never pitch someone purely as rehearsal if a yes would be awkward.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The list is split into three tiers with written boundaries, and each tier is assigned to a dated outreach wave."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the score cut-offs for tiers A, B and C"
                - "Check that tier A holds between fifteen and twenty-five names"
                - "Agree the wave order and the start week for each tier"
                - "Write the tier rules at the top of the list"
            - name: Weekly investor research block
              description: |-
                ## Purpose
                Lists built in one frantic weekend are thin and full of errors. A protected ninety-minute block each week, adding and completing ten qualified names, builds a list of a hundred well-researched partners in about ten weeks without crowding out the work of running the company.

                ## Milestones
                1. A recurring ninety-minute block in the calendar.
                2. Ten new partner rows added and fully completed each week.
                3. Every new row scored and tiered in the same session.
                4. At least a hundred qualified names on the list within twelve weeks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weeks of research blocks completed, each adding at least ten fully completed and scored partner rows."
                cadence: rolling
              tasks:
                - "Book a recurring ninety-minute research block in your calendar"
                - "Add and complete ten qualified partner rows @recurring(weekly:tue)"
                - "Score and tier each new row before closing the sheet"
                - "Count qualified names at the end of each month and note the total"
            - name: Funding announcement scan for active investors
              description: |-
                ## Purpose
                Investors who announced a deal in your sector last month are, by definition, writing cheques now. Scanning funding news and newsletters each week for rounds at your stage keeps the list full of active investors rather than those who were busy two years ago.

                ## Milestones
                1. Three or four sources chosen: sector newsletters, funding news and saved searches.
                2. A fifteen-minute weekly scan in place.
                3. New active investors added with the deal recorded as their last relevant deal.
                4. Existing rows updated whenever a listed investor announces a new deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly scans completed, with every relevant announced deal reflected in the list's last relevant deal column."
                cadence: rolling
              tasks:
                - "Choose three funding news sources that cover your sector and stage"
                - "Set up saved searches or alerts for your sector keywords"
                - "Scan the week's announced rounds and update the list @recurring(weekly:mon)"
                - "Update the last relevant deal for any investor already listed"
            - name: New fund close watch
              description: |-
                ## Purpose
                Funds that have just closed a new fund are usually at their most active in the first couple of years and are hunting for first deals. Watching fund close announcements, and noting fund number and size, tells you which firms are deploying and which are near the end of an old fund with little room for new companies.

                ## Milestones
                1. A source for fund close announcements chosen.
                2. A fund vintage column filled for every tier A and B firm.
                3. Firms that closed a fund in the last eighteen months highlighted.
                4. Firms on a fund more than four years old checked for a successor fund.

                ## Notes
                These are rules of thumb. Ask the partner directly whether they are making new investments from the current fund.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tier A and B firm has a current fund vintage recorded, refreshed each month for six months."
                cadence: rolling
              tasks:
                - "Set an alert for fund close announcements in your sector and region"
                - "Check for new fund closes and update the vintage column @recurring(monthly:9)"
                - "Highlight firms that closed a fund in the last eighteen months"
                - "Look for a successor fund on any firm with an old current fund"
            - name: Monthly list hygiene pass
              description: |-
                ## Purpose
                Within a couple of months a list collects duplicate rows, dead links, investors who have left their firms and funds that stopped investing. An hour of hygiene each month keeps it trustworthy, so nobody emails a partner who moved on or pitches a fund that has wound down.

                ## Milestones
                1. Duplicate firm and partner rows merged.
                2. Rows missing key columns completed or parked.
                3. Rows untouched for ninety days refreshed or parked.
                4. The month's changes noted in a short change log tab.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly hygiene passes recorded in the change log, with no duplicate rows and no row older than ninety days unchecked."
                cadence: rolling
              tasks:
                - "Add a change log tab to the list"
                - "Merge duplicate firm and partner rows"
                - "Run the hygiene pass and note the changes in the log @recurring(monthly:18)"
                - "Park rows that still cannot be completed after two attempts"
            - name: Partner moves and departures watch
              description: |-
                ## Purpose
                Partners leave firms, start their own funds and change focus more often than founders expect, and a relationship usually follows the person, not the logo. Checking each quarter for moves among tier A and B partners keeps the right name on every row and now and then surfaces a new fund that is hungry for deals.

                ## Milestones
                1. Tier A and B partners followed on the professional networks they post on.
                2. A quarterly check of each partner's current role.
                3. Moved partners updated, with a replacement contact found at their old firm.
                4. Partners who launched their own funds added as new rows.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly role checks completed in a year, with every tier A and B row naming a partner who is still at that firm."
                cadence: rolling
              tasks:
                - "Follow every tier A and B partner on the network they post on"
                - "Check the current roles of tier A and B partners @recurring(quarterly)"
                - "Find the replacement partner when someone leaves a target firm"
                - "Add any partner who launched a new fund as a fresh row"
            - name: Investor thinking reading queue
              description: |-
                ## Purpose
                Partners publish a surprising amount about what they want: blog posts, podcasts, investment theses, talks and threads. Reading two pieces from tier A partners each week fills the why-this-partner column with something specific, and often reveals a stated interest that moves a name up or down the list.

                ## Milestones
                1. A queue of posts, talks and interviews from tier A partners.
                2. Two pieces read each week, each with a one-line takeaway.
                3. The why-this-partner column filled for every tier A row.
                4. Scores adjusted wherever a partner's stated interest changed the fit.

                ## Notes
                Start from the **Reading queue** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tier A row has a specific why-this-partner note drawn from something the partner has published or said."
                cadence: rolling
              tasks:
                - "Create a reading queue of tier A partners' posts and talks"
                - "Read two pieces and note one takeaway from each @recurring(weekly:thu)"
                - "Fill the why-this-partner column for every tier A row"
                - "Adjust scores where a partner's stated interest changes the fit"
            - name: Target list health metrics log
              description: |-
                ## Purpose
                Without a few numbers it is hard to tell whether the list is ready or merely long. Logging qualified names, tier A count, average score, the share of rows with a known connection path and, once outreach starts, response and meeting rates by tier, shows where the list is thin before it costs you a month.

                ## Milestones
                1. Five list health measures defined, each with how it is counted.
                2. A monthly snapshot recorded.
                3. Response and meeting rates by tier added once outreach begins.
                4. One change made to the list in response to each snapshot.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly snapshots in the metrics log, each followed by one recorded change to the list."
                cadence: rolling
              tasks:
                - "Set up a metrics log with five list health measures"
                - "Record the month's list health snapshot @recurring(monthly:28)"
                - "Add response and meeting rates by tier once outreach begins"
                - "Write one change to the list prompted by each snapshot"
            - name: Pass reasons fed back into the list
              description: |-
                ## Purpose
                Every pass is free research about who the list should and should not contain. Recording the stated reason, grouping the themes and re-scoring similar investors means the tenth pass for the same reason never happens, because the list has already changed.

                ## Milestones
                1. A pass reason column on the list and a themes page.
                2. Every pass logged within two days with the stated reason.
                3. Recurring themes grouped, such as too early, wrong sector or cheque too small.
                4. Similar uncontacted investors re-scored after each new theme.

                ## Notes
                Start from the **Feedback themes** template. Stated reasons are often polite rather than real, so look for patterns across several passes, not one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pass during the raise is logged with a reason, and the three most common themes are written at the top of the list."
                cadence: rolling
              tasks:
                - "Add a pass reason column to the list"
                - "Create a feedback themes page for investor passes"
                - "Group the week's passes into themes and re-score similar names @recurring(weekly:fri)"
                - "Write the three most common pass themes at the top of the list"
            - name: Between-rounds next-stage list upkeep
              description: |-
                ## Purpose
                The best time to build the next round's list is the year you are not raising, when you can meet investors without an ask and watch who keeps investing. A light quarterly refresh keeps the next stage's tier A current, so the next raise starts with a researched list and months of context.

                ## Milestones
                1. A separate tab for investors at the following stage, with that stage's criteria.
                2. Twenty next-stage partners identified and scored.
                3. Activity and fit on that tab refreshed each quarter.
                4. A dated note on each next-stage partner of anything they have backed or published since the last refresh.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A next-round tab of at least twenty scored partners, refreshed in each of the last four quarters."
                cadence: rolling
              tasks:
                - "Create a next-round tab with the following stage's criteria"
                - "Identify twenty next-stage partners and score them"
                - "Refresh activity and fit on the next-round tab @recurring(quarterly)"
                - "Note anything each next-stage partner has backed since the last refresh"
            - name: Reading a fund's real stage from its portfolio
              description: |-
                ## Purpose
                Fund websites often say pre-seed to Series B, but their last fifteen first investments usually show where they really write first cheques. Learning to read a portfolio by entry stage, entry date and co-investors gives you the true picture in about ten minutes per firm.

                ## Milestones
                1. A short method written for checking a fund's last fifteen first investments.
                2. The entry stage of each found from announcements or the company's funding history.
                3. The method practised on ten tier A firms and their stage columns corrected.
                4. Firms whose stated and real stage differ noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten tier A firms checked by their last fifteen first investments, with stage columns corrected where they differed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a short checklist for reading a fund's portfolio"
                - "Find the entry stage of one fund's last fifteen first investments"
                - "Practise the method on ten tier A firms"
                - "Correct stage columns where stated and real stage differ"
            - name: Fund size, reserves and fund age basics
              description: |-
                ## Purpose
                Why does a fund that likes your company still say no? Often the answer is fund economics: how big the fund is, how much it holds back for follow-ons, how many new companies it has room for, and how far through its investment period it is. Understanding these basics lets you read a fund's appetite instead of guessing at it.

                ## Milestones
                1. Fund size, vintage, investment period, reserves and target ownership understood in plain words.
                2. A rough rule written for how fund size relates to first cheque.
                3. Three tier A funds analysed with these terms and the notes added to their rows.
                4. Two polite questions about fund status prepared for first conversations.

                ## Notes
                These are patterns, not rules. The only reliable answer about a fund's current capacity comes from the partner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining five fund economics terms, applied to three tier A funds whose rows now carry the analysis."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain-language explainer on how venture funds are structured"
                - "Write one sentence each on fund size, vintage, reserves and target ownership"
                - "Analyse three tier A funds using these terms"
                - "Draft two polite questions on fund status for first calls"
            - name: Decoding investor theses and market maps
              description: |-
                ## Purpose
                Many funds publish a thesis, a market map or a list of themes they are excited about, and a partner who has written one is often actively looking for companies that fit it. Learning to compare your company against a written thesis, honestly, turns a vague sector match into a specific reason this fund should care.

                ## Milestones
                1. Published theses or market maps collected for every tier A firm that has one.
                2. Each thesis summarised in two lines.
                3. Your fit with each thesis rated strong, partial or none, with the reason.
                4. Scores raised for firms whose thesis fits strongly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every published tier A thesis is summarised in two lines with a fit rating and reason recorded on the firm's row."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the published thesis or market map for each tier A firm"
                - "Summarise each thesis in two lines"
                - "Rate your fit with each thesis and note the reason"
                - "Raise the score of firms whose thesis fits strongly"
            - name: Finding the right partner inside a firm
              description: |-
                ## Purpose
                Pitching the wrong partner at the right firm is a common route to a quiet no, because the person who might champion you never hears about the company. Working out which partner covers your sector, from their board seats, posts and recent deals, means each firm row points at one specific person.

                ## Milestones
                1. Each tier A firm's partners listed with the sectors they actually invest in.
                2. A first-choice partner chosen per firm, with the evidence.
                3. A second choice noted in case the first is not a fit.
                4. Associates and principals recorded separately from decision-making partners.

                ## Notes
                Associates are often the first reader and can be valuable allies, but find out who makes the decision before relying on one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every tier A firm row names a first-choice and second-choice partner, each with a recorded reason."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the partners at each tier A firm with their board seats"
                - "Choose a first-choice partner per firm and note the reason"
                - "Note a second-choice partner for each tier A firm"
                - "Separate associates and principals from decision-makers in the list"
            - name: Public records for investor research
              description: |-
                ## Purpose
                Company registries, shareholder filings and securities notices often show who really invested, and when, even where no press release went out. Learning where these records live in your own market, and in any overseas market you target, gives you evidence that databases miss.

                ## Milestones
                1. The registries and filing types that reveal investors listed for each target market.
                2. Searches practised on five comparable companies.
                3. Investors found in filings added to the list with the filing as the source.
                4. A monthly search of new sector filings set up where the registry allows it.

                ## Notes
                A US Form D notice or a UK confirmation statement are examples; check what your own market publishes. Treat filings as data to verify, not proof of current interest.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Registry searches completed for five comparable companies, with any new investors added and their filing named as the source."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the public registries that record investors in your target markets"
                - "Search the filings of five comparable companies"
                - "Add investors found in filings with the filing named as source"
                - "Search the registry for new sector filings @recurring(monthly:25)"
            - name: Search strings for investor databases and networks
              description: |-
                ## Purpose
                Typing fintech investor into a database returns thousands of rows, most of them wrong. Learning to build precise searches that combine stage, sector terms, geography, recent activity and role cuts the noise to a list worth reading, and the searches can be saved and rerun.

                ## Milestones
                1. Three saved searches built: one each for leads, followers and specialist funds.
                2. Each search refined until most results are genuine fits.
                3. Exclusion terms added for stages and sectors you never want.
                4. The working search strings stored in the list for reuse.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three saved searches in which at least half of the first twenty results are genuine fits, stored in the list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the sector, stage and region terms that describe your company"
                - "Build a saved search for likely lead investors"
                - "Add exclusion terms for stages and sectors you never want"
                - "Store the working search strings in a tab of the list"
            - name: Spotting inactive funds and tourist investors
              description: |-
                ## Purpose
                Some funds stay in every database long after they stop making new investments, and some investors take meetings with no real intention of writing a cheque at your stage. Learning the warning signs, such as no new first cheques in eighteen months, an old fund with no successor, or only follow-on deals, saves your meetings for investors who are deploying.

                ## Milestones
                1. Five or six inactivity signals written down.
                2. Every tier A and B firm checked against the signals.
                3. Suspect names marked with the signal they hit.
                4. One question prepared that confirms active investing in a first call.

                ## Notes
                One signal alone is not proof. Mark a name as suspect, not dead, until you have two signals or a direct answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All tier A and B firms checked against written inactivity signals, with every suspect name marked and its signal recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the warning signs of an inactive fund"
                - "Check every tier A and B firm against the signs"
                - "Mark suspect names with the signal they hit"
                - "Re-check suspect funds for new first cheques @recurring(monthly:7)"
            - name: Types of early-stage investor and where each fits
              description: |-
                ## Purpose
                Angels, scouts, micro-funds, seed specialists, multi-stage funds, corporate arms and family offices behave differently on cheque size, speed, follow-on and the help they offer. Knowing the types, and which ones your round needs, lets you classify every row and notice when the list leans too heavily on one kind.

                ## Milestones
                1. Each investor type described in two lines: typical cheque, speed and follow-on behaviour.
                2. An investor type column added and filled for every row.
                3. The mix of types in tier A compared with what the round needs.
                4. Missing types noted as research targets.

                ## Notes
                Angel syndicates, corporate venture investors and family offices each have their own area in this pillar if they become a large part of the round.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every row has an investor type, and a short note compares tier A's type mix with what the round needs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a two-line description of each early-stage investor type"
                - "Add an investor type column and fill it for every row"
                - "Compare the type mix in tier A with what the round needs"
                - "Note which investor types are missing as research targets"
            - name: Narrowing an oversized list to a working list
              description: |-
                ## Purpose
                Lists of five hundred names feel safe but cannot be worked properly, because nobody can personalise or follow up on that many. Cutting to a working list of eighty to a hundred and fifty, by raising cut-offs and parking marginal names, puts your effort where the evidence says the money is.

                ## Milestones
                1. A target size for the working list agreed by the founding team.
                2. Score cut-offs raised until the list reaches that size.
                3. Cut names kept on a parked tab, not deleted.
                4. A written rule for when a parked name comes back.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A working list of eighty to a hundred and fifty names, with cut names parked and a written rule for bringing them back."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a working list size with your co-founders"
                - "Raise the score cut-off until the list fits that size"
                - "Move cut names to a parked tab with their score"
                - "Write the rule for bringing a parked name back"
            - name: Multi-stage funds at seed, the signalling decision
              description: |-
                ## Purpose
                Large multi-stage funds increasingly write small early cheques, and if one invests early but then does not lead your next round, other investors may read that as a bad sign. Deciding in advance how many multi-stage funds to target, and in what role, avoids an awkward choice in the middle of a raise.

                ## Milestones
                1. Multi-stage funds on the list identified and tagged.
                2. The signalling question discussed with at least two founders who took such money.
                3. A decision recorded on how many multi-stage funds sit in tier A and in what role.
                4. The tiers adjusted to match.

                ## Notes
                Opinions differ and the answer depends on the fund and the round. Take any rights such a fund asks for to your lawyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the number and role of multi-stage funds in tier A, informed by two founder conversations."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tag every multi-stage fund on the list"
                - "Ask two founders who took early multi-stage money how it played out"
                - "Write your decision on multi-stage funds in tier A"
                - "Move multi-stage names between tiers to match the decision"
            - name: Geographic scope of the investor list
              description: |-
                ## Purpose
                Whether to raise locally, regionally or from overseas funds changes the list more than any choice after stage. Local investors may understand your market and meet in person, while overseas funds can bring larger cheques but sometimes expect a particular company structure or a presence in their market.

                ## Milestones
                1. Target geographies written down with the reason for each.
                2. Known structure expectations for each overseas market noted for your lawyer.
                3. Investors outside the chosen geographies parked.
                4. The share of tier A by geography recorded.

                ## Notes
                Do not restructure the company to suit an investor's preference without legal and tax advice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written geographic scope with reasons, structure questions logged for the lawyer and out-of-scope investors parked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the geographies you will target and why"
                - "Note any company structure questions for each overseas market"
                - "Ask your lawyer which structure questions need answers before outreach"
                - "Park investors outside the chosen geographies"
            - name: Partner dossiers for the top fifteen targets
              description: |-
                ## Purpose
                Your top fifteen partners deserve more than a spreadsheet row. A one-page dossier for each, covering their deals, board seats, published views and the angle that makes your company relevant to them, lets you prepare in minutes when a meeting is booked at short notice.

                ## Milestones
                1. Fifteen dossier pages, one per top partner.
                2. Each with recent deals, board seats, stated interests and your relevance angle.
                3. Each dossier linked from the partner's row in the list.
                4. A dossier refreshed before every meeting with that partner.

                ## Notes
                Start from the **Person** template. Keep dossiers to public, professional information.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fifteen partner dossiers exist, each with deals, board seats, interests and a relevance angle, linked from the list."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create a person page for each of the top fifteen partners"
                - "Add recent deals, board seats and stated interests to each"
                - "Write the relevance angle for your company on every dossier"
                - "Link each dossier from the partner's row in the list"
            - name: Connection path column for tier A
              description: |-
                ## Purpose
                Knowing who in your network is connected to each tier A partner, and how well, changes how realistic each name is for the first wave. Recording the best path and its strength on every tier A row turns the list into something you can plan from; asking for the introductions themselves is a separate job.

                ## Milestones
                1. A connection path column and a path strength score from 1 to 3.
                2. Professional networks, past colleagues, advisers and existing investors checked for each tier A partner.
                3. The best path recorded for every tier A row, or marked as none.
                4. Tier A names with no path reviewed for a cold approach or a later wave.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier A row records a best connection path with a strength score, or is marked none with a plan."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add connection path and path strength columns to the list"
                - "Check mutual connections for each tier A partner"
                - "Record the best path or mark none for every tier A row"
                - "Update path strength for tier A names as relationships change @recurring(monthly:14)"
            - name: Re-scoring after the first ten meetings
              description: |-
                ## Purpose
                Until real investors respond, the rubric is only a hypothesis. After ten first meetings, comparing who engaged with who passed shows which criteria actually predicted interest, and re-weighting then improves every remaining name before tier A hears from you.

                ## Milestones
                1. The outcome of each of the first ten meetings recorded against that investor's score.
                2. The criteria that best predicted interest identified.
                3. Rubric weights adjusted and every uncontacted name re-scored.
                4. Tier boundaries checked and moved names noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A revised rubric with reasons for each weight change, and every uncontacted investor re-scored against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the outcome of each of the first ten meetings beside its score"
                - "Compare the scores of engaged and passing investors"
                - "Adjust the rubric weights and re-score uncontacted names"
                - "Note which names moved tier after re-scoring"
            - name: Agent-assisted list enrichment with verification
              description: |-
                ## Purpose
                Filling fund size, recent deals and partner focus for a hundred rows by hand takes days. Having the agent draft summaries from public sources, then checking each fact against the original before it enters the list, cuts the time sharply without letting errors reach your best targets.

                ## Milestones
                1. A short brief listing what each summary must contain and where it comes from.
                2. Draft summaries for twenty rows produced with sources.
                3. Every fact checked against its source and errors corrected.
                4. A rule recorded that no unverified fact enters tier A.

                ## Notes
                AI-drafted summaries can be confidently wrong about deals and people. Verify before relying on anything in a pitch.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty enriched rows, each fact checked against a cited source, with verified rows marked in the list."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a brief listing the facts each investor summary needs"
                - "Ask the agent to draft summaries for twenty rows with sources"
                - "Check every fact against its source before adding it"
                - "Mark verified rows so unverified ones stand out"
            - name: Exclusion criteria for investors you will not take
              description: |-
                ## Purpose
                Some money is not worth having: an investor with a record of hostile behaviour toward founders, a mandate that conflicts with your customers or values, or a habit of terms you know you will refuse. Writing exclusion criteria before the raise makes the call once and calmly, rather than under pressure with a term sheet on the table.

                ## Milestones
                1. Exclusion criteria written and agreed by all founders.
                2. The whole list checked against the criteria.
                3. Excluded investors moved to a separate tab with the reason.
                4. Names needing a closer check before any meeting flagged.

                ## Notes
                Talking to founders an investor has backed is its own area in this pillar; this project records the criteria and the outcome.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written exclusion criteria agreed by all founders, with every excluded investor moved to a separate tab and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your exclusion criteria with your co-founders"
                - "Check every row on the list against the criteria"
                - "Move excluded investors to a separate tab with the reason"
                - "Flag names that need a reference check before any meeting"
            - name: Raise-ready list lock
              description: |-
                ## Purpose
                Outreach goes far better when the list is finished before the first email than when it is assembled between meetings. Setting a lock date two weeks before the raise opens, by which tiers A and B are complete, scored, conflict-checked and pathed, gives a clear checkpoint and a reason to stop researching and start talking.

                ## Milestones
                1. A lock date set two weeks before the planned raise start.
                2. Tiers A and B complete in every column, scored and conflict-checked.
                3. Connection paths recorded for every tier A name.
                4. The locked list exported and saved as version one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the lock date, every tier A and B row is complete, scored and conflict-checked, and version one is saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the list lock date two weeks before the raise opens"
                - "List every tier A and B row still missing a column"
                - "Complete the missing columns and conflict checks"
                - "Export the locked list and save it as version one"
            - name: Sector conference investor shortlist
              description: |-
                ## Purpose
                Industry conferences and investor days put many target partners in one building for two days, and the founders who get value from them arrive with a short list and a reason to speak to each person. Cross-checking speakers and published attendees against your target list turns an expensive ticket into a focused set of conversations.

                ## Milestones
                1. One or two events chosen where target investors genuinely attend or speak.
                2. Speaker and attendee lists cross-checked against the target list.
                3. A shortlist of eight to twelve investors to find, each with a one-line reason.
                4. Every conversation logged in the list within a day of the event.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shortlist of eight to twelve target investors prepared before the event, and every conversation logged within a day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the sector events calendar for investor-heavy events @recurring(quarterly)"
                - "Cross-check the event's speakers with your target list"
                - "Write a shortlist of eight to twelve investors with a reason for each"
                - "Log each conversation in the list within a day"
            - name: Adviser walk-through of the target list
              description: |-
                ## Purpose
                An experienced founder or adviser who has raised at your stage can strike a third of a list in an hour: funds that have quietly stopped, partners who never lead, firms known to be slow. Walking them through tiers A and B before outreach is the cheapest quality check the list will ever get.

                ## Milestones
                1. One or two advisers who raised at your stage in the last two years asked for an hour.
                2. Tiers A and B shared in advance with the key columns visible.
                3. Strikes, additions and moves recorded during the session.
                4. The list updated within two days and the adviser told what changed.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An adviser review held before outreach, with every strike, addition and move applied to the list within two days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask one adviser who raised at your stage for an hour"
                - "Share tiers A and B with the key columns two days before"
                - "Record every strike, addition and move during the session"
                - "Update the list and send the adviser a note of what changed"
            - name: Post-round list retrospective
              description: |-
                ## Purpose
                After the round closes, the list holds the best evidence you will ever have about which sources, criteria and tiers led to real interest. A two-hour retrospective while memories are fresh turns that evidence into a better start for the next raise, and into useful advice for founders who ask you.

                ## Milestones
                1. Each contacted investor's final outcome recorded: invested, term sheet, passed or no reply.
                2. Outcomes compared by source, tier and investor type.
                3. Three lessons written for the next round's list.
                4. The list archived as a dated version with the lessons attached.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A dated archive of the round's list with outcomes for every contacted investor and three written lessons."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record the final outcome for every contacted investor"
                - "Compare outcomes by source, tier and investor type"
                - "Write three lessons for building the next list"
                - "Archive the list as a dated version with the lessons"
            - name: Co-founder list calibration session
              description: |-
                ## Purpose
                Co-founders often carry quite different pictures of the ideal investor, and the gap only shows when one of them starts emailing. A ninety-minute session where each founder scores the same twenty names alone and then compares surfaces those disagreements while they are cheap to settle.

                ## Milestones
                1. Twenty names chosen from across all three tiers.
                2. Each founder's independent scores collected before the session.
                3. Every gap of two points or more discussed and settled.
                4. Rubric wording updated wherever unclear criteria caused the gap.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Twenty names scored independently by every founder, with each gap of two or more points settled and recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick twenty names spread across the three tiers"
                - "Ask each founder to score them alone before the session"
                - "Discuss every gap of two points or more"
                - "Reword any rubric line that caused a disagreement"
            - name: First-time founder starter list of forty
              description: |-
                ## Purpose
                First-time founders without a venture network often assume they cannot build a serious list, but public sources are enough to start. A first forty drawn from comparable companies' rounds, local and sector funds and the investors behind recent accelerator cohorts gives you a credible list within a month, before a single introduction.

                ## Milestones
                1. Forty names from public sources, each with its source recorded.
                2. At least ten local or sector-specialist funds known to back first-time founders.
                3. Every name scored with a simple version of the rubric.
                4. Five founders a stage ahead identified who could review the list.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of forty sourced and scored investors, at least ten of them with a record of backing first-time founders."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down the five public sources you will use first"
                - "Add forty names with the source of each"
                - "Mark funds with a record of backing first-time founders"
                - "List five founders a stage ahead who could review the list"
            - name: Investor list from outside a major venture hub
              description: |-
                ## Purpose
                Founders in the Caribbean, smaller European cities, Africa or Latin America face a thinner local investor base and overseas funds that may never have backed their market. A list built in layers, local angels and funds first, then regional and diaspora investors, then overseas funds with a record in similar markets, gives a realistic route to the round.

                ## Milestones
                1. Local and regional funds and angel groups listed.
                2. Diaspora investors and funds with a record in similar markets identified.
                3. Overseas funds that have backed at least one company from a comparable market tagged.
                4. Structure and currency questions noted for your lawyer and accountant.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A three-layer list of local, regional or diaspora, and overseas investors, each overseas name backed by a deal in a comparable market."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List local and regional funds and angel groups in your market"
                - "Search for diaspora investors with a link to your market"
                - "Tag overseas funds that have backed a company from a similar market"
                - "Note structure and currency questions for your lawyer and accountant"
                - "Check regional funding news for newly launched local funds @recurring(monthly:11)"
            - name: Deep-tech and hardware investor list
              description: |-
                ## Purpose
                Hardware, biotech, materials and other science-heavy companies need investors comfortable with long timelines, capital-hungry milestones and technical diligence. Most generalist funds will say no politely, so a list built around specialist funds, technical partners and co-investors who have carried similar risk saves months.

                ## Milestones
                1. Specialist deep-tech funds and partners with technical backgrounds identified.
                2. Each tier A fund's record with capital-intensive companies checked.
                3. A technical diligence column added and filled.
                4. Grant and strategic sources noted on separate tabs, to be pursued in their own areas.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Tier A contains only funds with at least one capital-intensive investment like yours, each with its technical diligence capability noted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find funds that have backed three or more technically similar companies"
                - "Note which partners have a technical or scientific background"
                - "Add a technical diligence column to the list"
                - "Check each tier A fund's record on capital-intensive rounds"
            - name: Regulated sector investor list
              description: |-
                ## Purpose
                Fintech, health, insurance, energy and other regulated sectors move at the speed of licences and approvals, and investors who have not lived through that tend to panic at the first delay. Filtering for funds whose portfolio companies have been through similar regulatory steps gives you backers who will not need the basics explained.

                ## Milestones
                1. The main regulatory milestones ahead of the company listed in plain words.
                2. Funds whose portfolio companies passed similar steps identified.
                3. A regulatory experience column filled for tier A.
                4. Investors with no regulated-sector record moved down a tier or parked.

                ## Notes
                Investors are not your compliance advisers. Regulatory questions belong with a specialist lawyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every tier A row records the investor's regulated-sector experience, with inexperienced names moved down or parked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the regulatory milestones ahead of the company in plain words"
                - "Find funds whose portfolio companies passed similar milestones"
                - "Fill a regulatory experience column for tier A"
                - "Move investors with no regulated-sector record down a tier"
            - name: Solo founder investor targeting
              description: |-
                ## Purpose
                Some funds openly prefer founding teams and rarely back a solo founder, while others have a clear record of doing so. Checking each tier A firm's portfolio for solo-founded companies, and asking founders who raised alone, keeps the list on investors who will judge the company rather than the head count.

                ## Milestones
                1. Tier A portfolios checked for companies founded by one person.
                2. Firms with a solo-founder record tagged.
                3. Two solo founders who raised at your stage asked which investors were open to it.
                4. Tiers adjusted so proven solo-founder backers come first.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every tier A firm is tagged for its solo-founder record, informed by portfolio checks and two founder conversations."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check tier A portfolios for companies with a single founder"
                - "Tag firms with a record of backing solo founders"
                - "Ask two solo founders which investors were open to them"
                - "Move proven solo-founder backers to the front of their tier"
            - name: Second-time founder list reactivation
              description: |-
                ## Purpose
                Founders on their second company already own a list: investors from the last company, those who passed but stayed friendly, and partners met along the way. Reactivating it carefully, checking who has moved, which funds are still active and whether the new company fits their stage, often produces a lead faster than starting cold.

                ## Milestones
                1. Every investor contact from the previous company brought into the new list.
                2. Each checked for current firm, fund status and stage fit.
                3. Prior investors and friendly passes tagged separately.
                4. Any obligations or sensitivities from the last company noted, with the lawyer asked where needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All investor contacts from the previous company are on the new list with current firm, fund status and stage fit checked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export investor contacts from the previous company's records"
                - "Check each contact's current firm, fund status and stage fit"
                - "Tag prior investors and friendly passes separately"
                - "Note any obligations from the last company to raise with your lawyer"
            - name: Underrepresented founder fund and programme map
              description: |-
                ## Purpose
                A growing number of funds and angel networks have explicit mandates to back women, Black, Indigenous, immigrant, disabled or other underrepresented founders, and many generalist funds run dedicated partner or scout programmes. Mapping these alongside your fit-based targets widens the list without lowering the bar for fit.

                ## Milestones
                1. Funds and networks with relevant mandates identified for your stage and sector.
                2. Each checked for recent deals so the mandate is active, not just stated.
                3. Dedicated programmes at generalist funds noted with their entry routes.
                4. All of them scored on the same rubric as the rest of the list.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Mandate funds and programmes for your stage are on the list, each with a recent deal recorded and a rubric score."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search for funds and networks with mandates that match your team"
                - "Check each for a deal in the last twelve months"
                - "Note dedicated programmes at generalist funds and how to apply"
                - "Look for newly launched mandate funds and programmes @recurring(yearly)"
            - name: Co-investment map of target investors
              description: |-
                ## Purpose
                Investors rarely act alone: seed funds have favourite co-investors, and leads have followers who trust their judgement. Mapping who has co-invested with whom across your list shows clusters, so one committed lead can bring others, and reveals the investors at the centre of your sector's network.

                ## Milestones
                1. Co-investors recorded for each tier A investor's last ten deals.
                2. Pairs that co-invested three or more times identified.
                3. Clusters around likely leads drawn as a simple map.
                4. Hub investors flagged and moved up the list where fit allows.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A co-investment map covering tier A's last ten deals each, with repeat pairs and hub investors marked on the list."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record the co-investors in each tier A investor's last ten deals"
                - "Identify pairs that co-invested three or more times"
                - "Draw the clusters around your likely leads"
                - "Refresh co-investment pairs with newly announced rounds @recurring(quarterly)"
            - name: Lead pipeline depth model
              description: |-
                ## Purpose
                Experienced founders work backwards from the term sheet: if one in ten first meetings with lead candidates becomes a serious process, and you want two term sheets, the list needs enough lead candidates to fill the top of that funnel. A simple depth model built on your own early conversion data tells you whether tier A is big enough before the raise is half over.

                ## Milestones
                1. Assumed conversion rates written for first meeting, partner meeting and term sheet.
                2. The number of lead candidates needed calculated from those rates.
                3. The result compared with the current count of likely leads in tier A.
                4. Assumptions replaced with real rates after the first wave.

                ## Notes
                Conversion rates vary enormously by market and company. Switch to your own first-wave numbers as soon as you have them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A depth model showing the lead candidates needed for two term sheets, updated with first-wave rates and compared with tier A."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write assumed conversion rates for each stage of the process"
                - "Calculate how many lead candidates two term sheets would need"
                - "Compare the result with the likely leads in tier A"
                - "Replace the assumptions with real rates after the first wave"
            - name: Reusable investor intelligence base
              description: |-
                ## Purpose
                Serial founders, studio operators and founders who help others raise end up researching the same funds again and again. Turning the list into a maintained base, separate from any single round, with standard fields, sources and dated notes, means every new raise starts from accurate research instead of a blank sheet.

                ## Milestones
                1. A master base separated from the current round's working list.
                2. Fields standardised and a date added to every fact.
                3. A monthly update routine with a named owner.
                4. The next round's working list built as a filtered view of the base.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A master investor base with dated facts, updated monthly for six months, from which a round's working list can be filtered."
                cadence: rolling
              tasks:
                - "Copy the current list into a separate master investor base"
                - "Standardise the fields and add a date column to every fact"
                - "Update dated facts in the master investor base @recurring(monthly:22)"
                - "Build the next working list as a filtered view of the base"
---

# Investor Target List Building

This area is for founders who want their fundraising time spent on investors who can actually say yes. It starts with the foundations (round parameters, an ideal investor profile, a well-built list, cheque and conflict checks, a scoring rubric and tiers), then the weekly and monthly routines that keep the list current, the research skills behind good targeting, decisions about scope and quality, the dated checkpoints around a raise, versions for particular kinds of founder, and finally the modelling an experienced founder brings to the list.

What repeats is a weekly research block and funding news scan, a weekly reading slot and pass review while the raise is live, monthly checks on fund closes, list hygiene, connection paths and list health, and a quarterly look at partner moves and next-round targets. The Purchase decision, Reading queue, Metrics log, Feedback themes and Person templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
