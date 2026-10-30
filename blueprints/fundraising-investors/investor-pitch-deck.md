---
id: fundraising-investors.investor-pitch-deck
name: Investor Pitch Deck
description: "A pitch deck built from a clear story and sourced numbers, kept current between raises, with versions for sending, presenting and demo day, for founders and the designers who help them."
category: business
version: 1.0.0
tags: [fundraising-investors, investor-pitch-deck, founder, creative, pitch-deck, storytelling, slide-design, startup-fundraising]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - operational-checklist
    - reading-queue
    - vendor
    - portfolio-piece
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Investor Pitch Deck
          description: "Writing and refining the pitch deck that tells the company story, market, traction and ask for a fundraise."
          projects:
            - name: One-page deck brief for this raise
              description: |-
                ## Purpose
                Before opening a slide tool, write down the round size, the stage, the three investor types who will read the deck and the one belief each must leave with. Decks written without a brief drift into product tours, and a single page agreed with co-founders settles arguments about what belongs on the slides long before design time is spent.

                ## Milestones
                1. A one-page brief naming the round, the target amount range and the stage of the company.
                2. The three reader types listed, such as seed fund associate, operator angel and partner, with what each needs to believe.
                3. The three strongest proof points chosen and ranked.
                4. Co-founders' sign-off on the brief recorded in writing.

                ## Notes
                Keep the brief open beside the deck. When a debate starts about adding a slide, the question is whether it serves a belief on the brief.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off one-page brief naming the round, the readers, the beliefs and the top three proof points exists before slide one is drafted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the round size range and company stage in two lines"
                - "List the three investor types who will read the deck first"
                - "Write the one belief each reader type must leave with"
                - "Rank your three strongest proof points from strongest down"
                - "Share the brief with co-founders and record their sign-off"
            - name: One-line company description test
              description: |-
                ## Purpose
                Investors forward decks with a sentence of their own, and if your cover slide cannot supply that sentence, they will write a vaguer one. A one-line description that names the customer, the problem and what you do differently, tested on ten people outside the company, becomes the cover slide, the email subject and the opening of every later conversation.

                ## Milestones
                1. Five candidate one-liners drafted, each under twenty words.
                2. Each candidate tested on at least ten people who know nothing about the company.
                3. The winner chosen by how accurately listeners repeated it back.
                4. The chosen line placed on the cover slide and in the outreach email template.

                ## Notes
                Avoid category labels such as 'Uber for X' unless the comparison is exact; they invite the listener to hunt for the flaw in the analogy.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-line description under twenty words, chosen after ten outsider tests, sits on the cover slide and in the outreach email."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft five one-liners naming customer, problem and difference"
                - "Read each one aloud to ten people outside the company"
                - "Ask each listener to describe the company back in their own words"
                - "Put the winning line on the cover slide"
            - name: Ten-beat story outline before design
              description: |-
                ## Purpose
                Most weak decks are weak in their story, not their visuals: the market slide arrives before the reader cares about the problem, or the traction is buried on slide fourteen. Writing the deck first as ten plain sentences, one per beat from problem to ask, lets you fix the argument in a text document where changes cost minutes rather than hours of design.

                ## Milestones
                1. Ten sentences written, one per beat: problem, insight, solution, product, traction, market, business model, competition, team and ask.
                2. Each sentence stating a claim rather than naming a topic.
                3. The outline read cold by someone outside the company, who could retell the argument.
                4. The outline approved as the skeleton for slide headlines.

                ## Notes
                Many experienced founders draft in prose first. If a beat cannot be written as one sentence, the slide behind it is not ready.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-sentence outline, one claim per beat, has been retold accurately by an outside reader and approved as the slide skeleton."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one claim sentence for each of the ten story beats"
                - "Cut any sentence that names a topic without making a claim"
                - "Ask the agent to point out the weakest link in the argument"
                - "Have one outsider read the outline and retell it to you"
            - name: Choosing the slide order for your stage
              description: |-
                ## Purpose
                The order of slides tells investors what you think matters most. A pre-seed company with no revenue usually leads with the problem and the team, while a company with strong growth should show traction by slide three, before anyone has formed a view. Choosing the order deliberately, against two or three alternatives, stops a template's default order from hiding your best evidence.

                ## Milestones
                1. Three candidate running orders sketched as numbered lists.
                2. The position of your strongest proof point compared across the three.
                3. One order chosen, with a sentence explaining why.
                4. The chosen order applied to the outline and the draft deck.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A running order chosen from three written alternatives, with the reason recorded and the strongest proof point within the first five slides."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sketch three possible running orders as numbered lists"
                - "Mark where your strongest evidence falls in each order"
                - "Pick one order and write a sentence on why"
                - "Reorder the outline to match the chosen sequence"
            - name: Source sheet for every number in the deck
              description: |-
                ## Purpose
                Every figure on a slide, from market size to monthly revenue to pilot results, will be checked in diligence, and a number that cannot be traced costs more trust than it ever earned. A source sheet listing each figure, its slide, its source and the date it was pulled turns diligence questions into five-minute answers and stops old numbers surviving into new versions.

                ## Milestones
                1. Every number in the deck listed with its slide number.
                2. A source, an owner and a date recorded beside each figure.
                3. Any figure without a reliable source removed or replaced.
                4. The sheet stored next to the master deck file.

                ## Notes
                Internal metrics should match the financial model and the data room exactly, including rounding. Mismatches are among the first things investors notice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A source sheet covers every number in the current deck, each with a source and date, and no unsourced figure remains on any slide."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every number in the current deck with its slide"
                - "Record the source, owner and date pulled for each figure"
                - "Remove or replace any figure you cannot trace"
                - "Recheck every source that is more than six months old @recurring(quarterly)"
            - name: Audit of old decks, memos and sales slides
              description: |-
                ## Purpose
                Old fundraising decks, accelerator applications, sales presentations and customer case studies often hold better phrasing and stronger charts than a blank page will. An afternoon spent pulling them into one folder and marking what is reusable saves days of redrafting, and it shows how the story has moved since the last raise.

                ## Milestones
                1. All past decks, applications and sales slides collected into one folder.
                2. Reusable slides, charts and sentences marked.
                3. Claims that are no longer true flagged so they do not creep back in.
                4. A short note written on how the story has changed since the earliest version.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One folder holds every earlier deck and sales slide, with reusable material marked and outdated claims flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect past decks, applications and sales slides into one folder"
                - "Mark the slides and charts worth reusing"
                - "Flag claims in old material that are no longer true"
                - "Write three lines on how the story has changed"
            - name: Deck master file and version naming
              description: |-
                ## Purpose
                Decks multiply fast: a version per investor, a co-founder's edits, a designer's copy, a PDF exported last month. One master file in a shared presentation tool, with a naming rule that carries the round, version and date, means nobody sends last month's revenue to a partner by mistake.

                ## Milestones
                1. One master deck file in a shared folder that every co-founder can edit.
                2. A naming rule written down, for example company, round, version and date.
                3. Older copies moved to an archive folder.
                4. PDF exports saved with the same version number as the source file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single named master file exists, older copies are archived, and every exported PDF carries the matching version number."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the presentation tool the whole team will edit in"
                - "Write a file naming rule with round, version and date"
                - "Move every older copy into an archive folder"
                - "Export a PDF named to match the master version"
            - name: Deck master slides with type, colour and grid
              description: |-
                ## Purpose
                A deck with five fonts and charts in clashing colours reads as careless before anyone reaches the argument. Setting up master slides with two typefaces, a small colour palette, a grid and four layouts takes about a day and keeps every later slide consistent, whoever edits it.

                ## Milestones
                1. Two typefaces chosen, one for headlines and one for body text.
                2. A palette of no more than five colours, with one reserved for highlighting.
                3. Four master layouts built: title, headline with chart, headline with image, and section break.
                4. Chart colours and styles saved so new charts match by default.

                ## Notes
                If you have brand guidelines, start from them. If you do not, choose restraint rather than inventing a brand under deadline.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four master layouts with fixed typefaces, a five-colour palette and a default chart style are in the master file and used on every slide."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a headline typeface and a body typeface"
                - "Choose up to five colours and name the highlight colour"
                - "Build title, chart, image and section-break master layouts"
                - "Save a default chart style in the palette colours"
            - name: Ask slide with amount, runway and milestones
              description: |-
                ## Purpose
                The ask slide is where many decks go vague, with a range so wide it signals indecision, or a use-of-funds pie chart that says nothing about outcomes. A clear ask states the amount, the months of runway it buys and the two or three milestones it will reach, which is what an investor needs to judge whether the next round will be fundable.

                ## Milestones
                1. The amount and instrument stated, consistent with the financial model.
                2. Runway in months shown for the amount raised.
                3. Two or three milestones named that the money will reach, each with a target quarter.
                4. Use of funds shown as outcomes, not only as cost categories.

                ## Notes
                Take the numbers from your financial model rather than estimating them on the slide. Whether to show a valuation or cap is a judgement to discuss with your advisers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ask slide states the amount, runway in months and up to three dated milestones, each matching the financial model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take the raise amount and runway figure from the financial model"
                - "Name the two or three milestones the money will reach"
                - "Redraw use of funds as outcomes with rough percentages"
                - "Check the runway on the ask slide against current cash @recurring(monthly:28)"
            - name: Deck version log and changelog
              description: |-
                ## Purpose
                Without a changelog, nobody can say which investor saw the version with the old churn number or why the market slide changed in March. A short entry for every version, recording what changed and why, keeps co-founders aligned and lets you answer 'what did we send them?' in seconds.

                ## Milestones
                1. A changelog page linked from the master deck.
                2. Every new version logged with its date, changes and reason.
                3. Superseded versions archived rather than overwritten.
                4. Six months of consecutive entries kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The changelog holds an entry for every deck version over six months, with each superseded file archived."
                cadence: rolling
              tasks:
                - "Create a changelog page linked from the master deck"
                - "Log each new version with its date, changes and reason"
                - "Write the month's changelog summary and archive superseded files @recurring(monthly:26)"
            - name: Monthly traction slide refresh
              description: |-
                ## Purpose
                Traction slides go stale within weeks, and a chart that ends three months ago makes investors wonder what happened since. Refreshing revenue, user or pipeline charts once a month from closed numbers, with the same definitions each time, keeps the deck ready to send on any day without a scramble.

                ## Milestones
                1. The definition behind each traction metric written down.
                2. A metrics log holding the monthly figures that feed the charts.
                3. Charts updated within the first week of each month.
                4. Twelve consecutive monthly refreshes completed.

                ## Notes
                Start from the **Metrics log** template. Never change a metric definition silently; if it changes, say so on the slide or in the appendix.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Traction charts show last month's closed figures within the first week of every month for twelve months running."
                cadence: rolling
              tasks:
                - "Write the definition of every metric on the traction slide"
                - "Set up the metrics log that feeds the traction charts"
                - "Update traction charts with last month's closed numbers @recurring(monthly:4)"
                - "Note any change of metric definition in the changelog"
            - name: Investor feedback log on the deck
              description: |-
                ## Purpose
                Feedback during a raise arrives as half-sentences in emails and polite passes, and it is easy to overreact to the last voice heard. Logging every comment about the deck, then grouping the comments by theme each month, shows which objections are patterns worth fixing and which are one investor's taste.

                ## Milestones
                1. A feedback log with columns for date, investor type, slide and comment.
                2. Every deck comment from meetings and passes logged within a week.
                3. Comments grouped by theme each month.
                4. At least one slide changed in response to a recurring theme.

                ## Notes
                Start from the **Feedback themes** template. Three independent investors raising the same point is a pattern; one strong opinion is not.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deck comment during the raise is logged, themes are reviewed monthly, and at least one slide has changed because of a recurring theme."
                cadence: rolling
              tasks:
                - "Set up the feedback log from the feedback themes template"
                - "Add the week's investor comments to the feedback log @recurring(weekly:fri)"
                - "Group the month's comments by theme and pick one slide to fix @recurring(monthly:12)"
                - "Record which slide changed and which theme drove it"
            - name: Quarterly narrative review between raises
              description: |-
                ## Purpose
                Between rounds the company changes faster than the deck, so the story you will tell in nine months is being written by decisions made now. A quarterly hour spent rereading the outline and asking which beats are now stronger, weaker or wrong means the next raise starts from a current story rather than a rewrite under pressure.

                ## Milestones
                1. A quarterly slot booked with co-founders.
                2. Each of the ten story beats rated as stronger, unchanged or weaker.
                3. Beats that are no longer true rewritten in the outline.
                4. A short list of evidence to gather before the next raise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews completed in a year, each with ratings for all ten beats and a written evidence list."
                cadence: cyclic
              tasks:
                - "Book a recurring quarterly hour with co-founders"
                - "Rate each story beat as stronger, unchanged or weaker @recurring(quarterly)"
                - "Rewrite any beat that is no longer true"
                - "List the evidence to gather before the next raise"
            - name: Deck view analytics after each send
              description: |-
                ## Purpose
                Tracked links show who opened the deck, how long they spent and where they stopped, which is the closest thing to watching an investor read. Reviewing that data weekly during a raise reveals the slide where readers drop off, and that slide is usually the one to rewrite next.

                ## Milestones
                1. A document-sharing tool with per-slide viewing time chosen and set up.
                2. Every send made through a tracked link with the recipient named.
                3. A weekly note of the slides with the longest dwell and the most drop-offs.
                4. One slide rewritten on the strength of drop-off data.

                ## Notes
                Some investors dislike tracked links and email gates. Keep a plain PDF ready for anyone who asks, and never chase people based on open times.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every send during the raise uses a tracked link, and the weekly drop-off note has led to at least one rewritten slide."
                cadence: rolling
              tasks:
                - "Choose a sharing tool that reports time spent per slide"
                - "Create one tracked link per recipient for each send"
                - "Review dwell time and drop-off for the week's sends @recurring(weekly:mon)"
                - "Rewrite the slide where most readers stop"
            - name: Competition slide upkeep
              description: |-
                ## Purpose
                Competitors raise, launch, pivot and shut down, and an investor who knows the space will spot a missing name instantly. Keeping a short competitor list updated each quarter, with funding, positioning and what changed, means the competition slide is accurate whenever the deck goes out.

                ## Milestones
                1. A competitor list with name, funding, positioning and source.
                2. Recent funding and product news checked each quarter.
                3. The competition slide updated to match the list.
                4. Any new entrant that challenges your positioning raised at the narrative review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The competitor list and the competition slide are updated every quarter, with sources and a date on the list."
                cadence: rolling
              tasks:
                - "Build a competitor list with funding, positioning and sources"
                - "Check funding and launch news for each competitor @recurring(quarterly)"
                - "Update the competition slide to match the list"
                - "Flag new entrants for the next narrative review"
            - name: Pre-send checklist for the deck
              description: |-
                ## Purpose
                One wrong number, a leftover comment bubble or a slide meant for a different investor can end a conversation before it starts. A short checklist run before each new batch of sends, covering numbers, dates, names, links and file size, catches the errors that tired founders miss at midnight.

                ## Milestones
                1. A checklist of about ten checks written, including numbers against the source sheet, dates, names, hidden slides, comments and links.
                2. The checklist run before every new batch of sends.
                3. The checker's name and date recorded against each version sent.
                4. No investor-reported error in the deck across a full raise.

                ## Notes
                Start from the **Operational checklist** template. Ask someone who did not edit the deck to run it; the editor's eye skips their own mistakes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every version sent during the raise has a completed checklist with the checker's name, and no investor reports an error."
                cadence: rolling
              tasks:
                - "Write the ten-item pre-send checklist from the template"
                - "Ask someone who did not edit the deck to run the checklist"
                - "Record the checker and date against the version sent"
                - "Strip speaker notes and comments from every export"
            - name: Send register of deck versions by investor
              description: |-
                ## Purpose
                Founders often send three or four versions during a raise, and a partner meeting goes badly when the founder presents a different number from the one in the deck the partner read. A register of which version each investor received, and when, lets you prepare for every meeting with the exact file they have in front of them.

                ## Milestones
                1. A register with investor, firm, version sent, date and format.
                2. Every send added on the day it goes out.
                3. The register checked before each investor meeting.
                4. Differences between versions noted wherever they affect a figure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register records every deck sent during the raise, and each meeting is prepared from the version that investor holds."
                cadence: rolling
              tasks:
                - "Set up a register of investor, version, date and format"
                - "Add each send to the register on the day it goes out"
                - "Open the investor's version before every meeting with them"
                - "Reconcile the send register against your investor tracker @recurring(monthly:20)"
            - name: Customer logo and quote permissions register
              description: |-
                ## Purpose
                Customer logos, testimonials and named pilot results are among the most persuasive things in a deck, and among the riskiest when a customer has not agreed to appear. A register recording who said yes, in writing, for what use and until when, protects relationships and avoids an awkward request to pull a slide in the middle of a raise.

                ## Milestones
                1. Every logo, quote and named result in the deck listed.
                2. Written permission on file for each, with its scope.
                3. Items without permission removed or anonymised.
                4. Permissions reconfirmed when contracts renew or contacts leave.

                ## Notes
                Anonymised wording such as 'a top-five regional bank' is often enough. Check your customer contracts for publicity clauses before asking.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every logo, quote and named result in the deck has written permission on file or has been anonymised."
                cadence: rolling
              tasks:
                - "List every customer logo, quote and named result in the deck"
                - "Email each customer contact to request written permission"
                - "Anonymise any item where permission is not given"
                - "Reconfirm logo and quote permissions with each customer @recurring(quarterly)"
            - name: Studying twenty funded decks
              description: |-
                ## Purpose
                Reading decks that raised money, from your sector and stage, teaches more about structure and restraint than any template. Working through twenty of them with the same notes for each, such as slide count, order, first proof point and how the ask is framed, gives you a feel for what investors at your stage are used to seeing.

                ## Milestones
                1. A reading queue of twenty published decks from comparable stages and sectors.
                2. The same five notes taken for each deck.
                3. Three patterns written down that your deck does not yet follow.
                4. One idea from the study applied to your own deck.

                ## Notes
                Start from the **Reading queue** template. Published decks are often polished after the fact; treat them as examples, not as proof of what worked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty decks read with the same five notes each, and three written patterns compared against your own deck."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a reading queue of twenty decks at your stage"
                - "Take the same five notes on each deck you read"
                - "Write three patterns your deck does not yet follow"
                - "Add one newly published deck to the reading queue @recurring(monthly:8)"
            - name: Writing slide headlines that state the point
              description: |-
                ## Purpose
                Slide titles such as 'Market' or 'Traction' waste the most-read line on the page. Headlines written as full claims, such as 'Revenue tripled in six months with no paid acquisition', let an investor skim only the titles and still get the argument, which is how many first reads happen.

                ## Milestones
                1. Every slide title rewritten as a one-sentence claim.
                2. The headlines read alone in sequence and checked for a coherent argument.
                3. Each slide body checked to support its headline and nothing else.
                4. Headlines kept to about twelve words or fewer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every slide carries a one-sentence claim headline, and the headlines alone tell the full argument when read in sequence."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Rewrite each slide title as a one-sentence claim"
                - "Read only the headlines in order and fix gaps in the argument"
                - "Cut body content that does not support the headline"
                - "Trim any headline longer than about twelve words"
            - name: Charts investors read in three seconds
              description: |-
                ## Purpose
                Investors give a chart a few seconds, so a chart that needs a legend, a second axis or an explanation in the meeting has failed. A few rules, one message per chart, labels on the lines instead of a legend, and the highlight colour on the number that matters, make traction and market slides land at first glance.

                ## Milestones
                1. Each chart in the deck given a single stated message.
                2. Legends replaced with direct labels wherever possible.
                3. Axes, units and time periods labelled on every chart.
                4. Each chart shown to two outsiders who could say its message within five seconds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every chart in the deck has one message, direct labels and units, and two outsiders can state its point within five seconds."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the single message each chart must carry"
                - "Replace legends with direct labels on the lines or bars"
                - "Label units and time periods on every axis"
                - "Show each chart to two outsiders for five seconds and ask its point"
            - name: Bottom-up market sizing slide
              description: |-
                ## Purpose
                Top-down market figures copied from an analyst report rarely convince anyone, because every company in the sector quotes the same billion. A bottom-up count of reachable customers multiplied by a realistic annual price shows that you understand who buys, and it gives investors a number they can test.

                ## Milestones
                1. The number of reachable customers counted from a named source.
                2. A realistic annual price per customer taken from real pricing.
                3. The bottom-up figure shown beside the top-down one, with both sources.
                4. Assumptions listed on an appendix slide.

                ## Notes
                Keep the method simple enough to explain in one breath. Investors will rebuild it on the back of an envelope.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The market slide shows a bottom-up figure built from a sourced customer count and real pricing, with assumptions in the appendix."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count reachable customers from a named public source"
                - "Take the average annual price from your real pricing"
                - "Multiply out the bottom-up figure and note both sources"
                - "Refresh the market size inputs against newly published data @recurring(yearly)"
            - name: Product slide without jargon
              description: |-
                ## Purpose
                Technical founders often describe the architecture when investors want to see what the customer does differently on Monday morning. A product slide built from one real screenshot or photo, a before and after, and a sentence in the customer's own words makes the product concrete to someone who will never use it.

                ## Milestones
                1. One real screenshot, photo or short demo clip chosen for the slide.
                2. A before and after of the customer's workflow written in plain words.
                3. Jargon checked by a reader outside the industry.
                4. The slide reduced to one image and no more than thirty words.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The product slide uses one real image and under thirty words, and an outsider can describe what the customer now does differently."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick one real screenshot or product photo for the slide"
                - "Write the customer's workflow before and after in plain words"
                - "Ask someone outside the industry to underline any jargon"
                - "Cut the slide text to thirty words or fewer"
            - name: Why now slide with a dated trigger
              description: |-
                ## Purpose
                Partners often ask why this company could not have existed five years ago, and a weak answer suggests the market will not move. A why-now slide names a specific, dated change, such as a regulation, a cost curve, a platform shift or a change in behaviour, and shows how the company is placed to ride it.

                ## Milestones
                1. Two or three candidate changes listed with dates and sources.
                2. The strongest one chosen and its effect on customers explained.
                3. A chart or timeline showing the change.
                4. The link between the change and your product stated in the headline.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The why-now slide names one dated, sourced change, and its headline links that change to the company."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List two or three dated changes that make the company possible now"
                - "Find a source and a date for each change"
                - "Draw the strongest change as a simple timeline"
                - "Write a headline linking the change to your product"
            - name: Unit economics slide that holds up
              description: |-
                ## Purpose
                Unit economics get more scrutiny than almost any other slide, because a lifetime value built on three months of data is easy to spot. Showing payback period, gross margin and the ratio of customer value to acquisition cost, each with its time window and definition stated, earns more trust than a flattering headline number.

                ## Milestones
                1. Each unit economics figure defined in a footnote or the appendix.
                2. The data window stated for every figure.
                3. Figures matched exactly to the financial model.
                4. A note on how the numbers are expected to change with scale.

                ## Notes
                If your history is short, say so on the slide. Investors discount an honest early number far less than an inflated one they later unpick.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The unit economics slide shows defined figures with stated data windows that match the financial model exactly."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the definition and data window for each figure"
                - "Check each unit economics figure against the financial model"
                - "Add a footnote wherever history is shorter than a year"
                - "Recompute payback and margin with the latest quarter @recurring(quarterly)"
            - name: Team slide that answers why you
              description: |-
                ## Purpose
                At seed, many investors say they back the team as much as the idea, yet team slides often list job titles and university logos. A team slide that shows the specific experience each founder brings to this problem, and who is still to be hired, answers the real question of why these people are the ones to win.

                ## Milestones
                1. One line per founder linking past experience to this problem.
                2. Advisers included only where they are genuinely involved.
                3. The next two critical hires named.
                4. Photos and titles consistent in size and style.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Each founder has one line tying their experience to this problem, and the next two critical hires are named on the slide."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write one line per founder linking experience to the problem"
                - "Remove advisers who are not actively involved"
                - "Name the next two critical hires on the slide"
                - "Match photo sizes and title styles across the slide"
            - name: Send-ahead deck and presenting deck split
              description: |-
                ## Purpose
                A deck that reads well alone in an inbox is too dense to present, and a presenting deck of big images and few words makes no sense without you in the room. Splitting into two versions, one built to be read and one built to be shown, lets each do its job instead of half-doing both.

                ## Milestones
                1. A send-ahead version that a reader can follow without a presenter.
                2. A presenting version with far fewer words per slide.
                3. Both versions sharing the same numbers, order and source sheet.
                4. File names that make clear which version is which.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two versions exist with matching numbers and order, and the send-ahead version has been understood by an outsider reading it alone."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Duplicate the master into send-ahead and presenting versions"
                - "Add explanatory text to the send-ahead version"
                - "Strip the presenting version to headlines and visuals"
                - "Have an outsider read the send-ahead version with no explanation"
            - name: Cutting the deck to twelve slides
              description: |-
                ## Purpose
                Long decks rarely convince more; they bury the best slide among weaker ones. Cutting the main deck to around twelve slides, with everything else moved to an appendix, forces a choice about what matters and respects the few minutes a first reader will give it.

                ## Milestones
                1. Every slide scored on whether it supports a belief from the deck brief.
                2. The main deck reduced to around twelve slides.
                3. Cut slides moved to the appendix rather than deleted.
                4. The shorter deck read by two outsiders who could retell the story.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The main deck runs to about twelve slides, cut material sits in the appendix, and two outsiders can retell the story from it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Score each slide against the beliefs in the deck brief"
                - "Move the lowest scoring slides into the appendix"
                - "Merge slides that make the same point"
                - "Ask two outsiders to retell the story from the shorter deck"
            - name: Appendix slides for predictable questions
              description: |-
                ## Purpose
                Certain questions come up in almost every meeting: churn by cohort, pipeline detail, pricing tiers, the regulatory picture, how the product is built. An appendix slide ready for each turns a follow-up email into an answer on the spot, and shows investors you know where your business is weak.

                ## Milestones
                1. A list of the ten questions investors ask most often.
                2. One appendix slide prepared for each of the ten.
                3. Appendix slides held to the same standard as the main deck.
                4. New appendix slides added whenever a question recurs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten appendix slides answer the ten most common investor questions, with a new slide added when a question comes up three times."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the ten questions investors ask you most often"
                - "Build one appendix slide for each of the top ten questions"
                - "Hold appendix slides to the main deck's design standard"
                - "Add an appendix slide for any question asked by three investors @recurring(monthly:16)"
            - name: Hiring a pitch deck designer
              description: |-
                ## Purpose
                Hiring a designer pays off when the story is settled and the visuals are holding it back, and wastes money while the outline is still moving. Comparing two or three designers on their past decks, process and price, with a written brief and a fixed number of revision rounds, avoids paying twice for the same slides.

                ## Milestones
                1. The story outline and numbers frozen before any designer is briefed.
                2. Two or three designers compared on portfolio, process, price and timing.
                3. A written brief and agreement covering revision rounds and file ownership.
                4. Editable source files delivered in the team's presentation tool.

                ## Notes
                Start from the **Vendor** template. Insist on editable files in your own tool, or every later edit will need the designer.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A designer chosen from at least two compared options, with a written agreement on revisions and editable files delivered."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the outline and numbers are frozen before briefing anyone"
                - "Shortlist three designers with pitch deck portfolios"
                - "Compare each on process, price, timing and revision rounds"
                - "Agree in writing that editable source files will be delivered"
            - name: Competition slide format choice
              description: |-
                ## Purpose
                Competition slides fail in two familiar ways: a two-by-two grid where you sit alone in the top right corner, or a feature table with ticks only in your column. A format that shows the real alternatives, including spreadsheets, agencies and doing nothing, and names the trade-off customers make, reads as honest and is harder to argue with.

                ## Milestones
                1. Three formats tried: a grid, a comparison table and a description of customer alternatives.
                2. The status quo and indirect alternatives included alongside named competitors.
                3. One format chosen, with the reason noted.
                4. A sentence written on why customers choose you over the strongest alternative.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The competition slide uses a chosen format that includes the status quo and states why customers pick you over the strongest alternative."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the competition slide as a grid, a table and a list"
                - "Add the status quo and indirect alternatives to each sketch"
                - "Choose one format and note why"
                - "Write why customers pick you over the strongest alternative"
            - name: Business model slide clarity test
              description: |-
                ## Purpose
                If an investor cannot say who pays, how much and how often after reading your business model slide, the meeting will spend ten minutes on it. Testing the slide on five people for ten seconds each, then asking those three questions, shows quickly whether the slide explains the model or only names it.

                ## Milestones
                1. The slide shown to five people for ten seconds each.
                2. Their answers to who pays, how much and how often recorded.
                3. The slide rewritten until at least four of five answer correctly.
                4. Prices on the slide matched to current real pricing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least four of five testers correctly state who pays, how much and how often after ten seconds on the slide."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Show the business model slide to five people for ten seconds"
                - "Ask each who pays, how much and how often"
                - "Rewrite the slide until four of five answer correctly"
                - "Check the prices shown against your current price list"
            - name: Phone and accessibility readability pass
              description: |-
                ## Purpose
                Many partners first open a deck on a phone between meetings, where small type, pale grey text and dense tables become unreadable. A readability pass covering font size, contrast, file size and how the PDF renders on a small screen means the first read is not lost to squinting.

                ## Milestones
                1. No body text below a set minimum size on any slide.
                2. Text and background contrast checked on every slide.
                3. The exported PDF opened and read end to end on a phone.
                4. The PDF kept small enough to attach to an email.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The exported deck has been read on a phone with no unreadable slides, passes a contrast check and is small enough to email."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set a minimum font size and fix every slide below it"
                - "Run a contrast check on text over coloured backgrounds"
                - "Open the exported PDF on a phone and read every slide"
                - "Compress images until the PDF is small enough to email"
            - name: Teaser deck for first contact
              description: |-
                ## Purpose
                Cold and lukewarm investors rarely read a twenty-slide deck, but many will skim five slides. A short teaser covering problem, product, traction, team and ask gives a reason to take the meeting without handing over the full story and every number before there is a relationship.

                ## Milestones
                1. A teaser of no more than five slides built from the master deck.
                2. Sensitive figures held back for the full deck.
                3. The teaser tested on two investors or advisers for clarity.
                4. Teaser and full deck kept in step through the version log.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A teaser of five slides or fewer, drawn from the master deck and kept in step with it, has been tested on two readers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the five slides that earn a first meeting"
                - "Remove figures you only share after a first conversation"
                - "Ask the agent to tighten each teaser slide to a single idea"
                - "Test the teaser on two advisers and note what confused them"
            - name: Legal review of claims and disclaimers
              description: |-
                ## Purpose
                Claims in a fundraising deck about revenue, customers, projections or regulatory approval can carry legal weight, and in some countries the rules on who may receive offering materials are strict. A review with your lawyer of forward-looking statements, the confidentiality footer and how the deck will be distributed is cheap compared with fixing a problem after the round.

                ## Milestones
                1. Forward-looking statements and projections identified on every slide.
                2. A disclaimer and confidentiality wording agreed with your lawyer.
                3. Distribution rules for your country and investor types confirmed by your lawyer.
                4. Every claim your lawyer flagged changed or removed.

                ## Notes
                This work prepares the questions and records the answers. The legal view itself comes from your lawyer, not from the deck or a template.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your lawyer has reviewed the deck's claims, disclaimer and distribution plan, and every flagged item is fixed and recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark every projection and forward-looking claim in the deck"
                - "Send the deck and distribution plan to your lawyer for review"
                - "Agree disclaimer and confidentiality wording with your lawyer"
                - "Fix or remove each claim your lawyer flagged"
            - name: Deck freeze before the raise opens
              description: |-
                ## Purpose
                Freezing the deck on a set date before the first investor meetings stops the late-night edits that introduce errors and make every send slightly different. After the freeze only factual updates and changes driven by repeated feedback go in, each one logged, so the first twenty sends tell the same story.

                ## Milestones
                1. A freeze date set at least a week before the first meeting.
                2. All slides, numbers and appendix items final by that date.
                3. A rule written for which changes are allowed after the freeze.
                4. The frozen version tagged in the changelog.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The deck is frozen on the planned date and tagged in the changelog, and only logged factual or feedback-driven changes follow."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the freeze date a week before the first investor meeting"
                - "Finish every slide and appendix item by the freeze date"
                - "Write the rule for which changes are allowed after it"
                - "Tag the frozen version in the changelog"
            - name: Cold read by two friendly investors
              description: |-
                ## Purpose
                Two investors who know you, but are not considering the round, can read the deck the way a stranger will and tell you what partners say about decks when founders are not in the room. Booking these cold reads a fortnight before the freeze leaves time to act on what they find.

                ## Milestones
                1. Two friendly investors or experienced angels agreed to read cold.
                2. Each reading the send-ahead version with no briefing.
                3. Their top three concerns written down for each reader.
                4. Changes made before the freeze, with any declined advice noted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two cold reads are completed before the freeze, with three written concerns from each reader and a recorded response to every concern."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two friendly investors to read the deck cold"
                - "Share the send-ahead version with no briefing note"
                - "Ask each for the three things that would stop them investing"
                - "Record your response to each concern before the freeze"
            - name: Demo day and pitch competition short deck
              description: |-
                ## Purpose
                Demo days and pitch competitions give two to five minutes, a fixed slide count or a timer, and an audience who sees twenty other decks the same afternoon. A short version built to the organiser's rules, with one memorable number and a clear ask, makes yours the company people remember afterwards.

                ## Milestones
                1. The organiser's rules on time, slide count and format written down.
                2. A short deck built within those limits from the master deck.
                3. One memorable number and a one-line ask on the final slide.
                4. The file submitted in the required format before the organiser's deadline.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A short deck within the organiser's rules, ending on a one-line ask, is submitted in the required format before the deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the organiser's limits on time, slides and format"
                - "Cut the master deck to fit those limits"
                - "Choose the one number you want the room to remember"
                - "Submit the file in the required format before the deadline"
            - name: Post-round deck archive and lessons
              description: |-
                ## Purpose
                Once the round closes, the final deck is a record of what you promised investors, and it becomes the baseline they compare you against at the next raise. Archiving the final version with its source sheet, and writing down what worked and what did not, saves weeks when the next round starts.

                ## Milestones
                1. The final deck, source sheet and feedback log archived together.
                2. The milestones promised on the ask slide copied into the company plan.
                3. A one-page note on which slides worked and which drew objections.
                4. Outdated variants moved out of the working folder.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "The final deck and its source sheet are archived, the promised milestones are in the company plan, and a one-page lessons note exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Archive the final deck, source sheet and feedback log together"
                - "Copy the milestones from the ask slide into the company plan"
                - "Write a page on which slides worked and which drew objections"
                - "Move every outdated variant out of the working folder"
            - name: Pre-traction deck for first-time founders
              description: |-
                ## Purpose
                With no revenue and no product in market, a first-time founder's deck has to win on insight, team and early signals: interviews, a waitlist, letters of intent, a paid pilot. Building the deck around the evidence you do have, rather than around projections, gives angels and pre-seed funds something real to back.

                ## Milestones
                1. Every early signal listed with counts and dates.
                2. The strongest signal placed by slide four.
                3. The insight behind the company written as one sentence most people would disagree with at first.
                4. Projections kept to the appendix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deck shows at least three concrete early signals with the strongest by slide four, and projections appear only in the appendix."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every early signal you have, with counts and dates"
                - "Write your founding insight as one contrarian sentence"
                - "Place the strongest signal within the first four slides"
                - "Log one new early signal from customers each week @recurring(weekly:wed)"
            - name: Creative venture deck for film, games or music
              description: |-
                ## Purpose
                Creative ventures such as a film slate, a game studio or a music company are judged on different things from software: the intellectual property, the comparable titles, the talent attached and how money comes back to investors. A deck that shows the slate, honest comparables and the rights position speaks the language investors in creative industries expect.

                ## Milestones
                1. The slate or catalogue shown with stage and budget for each title.
                2. Comparable titles chosen with sourced performance figures.
                3. Attached talent and rights ownership stated clearly.
                4. How revenue returns to investors explained in plain terms.

                ## Notes
                Rights, recoupment and revenue waterfalls vary by deal and country. Have an entertainment lawyer check the wording before the deck goes out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deck shows the slate, sourced comparable titles, attached talent, the rights position and how money returns, checked by a lawyer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List each title with its stage and budget"
                - "Choose three comparable titles with sourced figures"
                - "Write one slide on rights ownership and attached talent"
                - "Ask an entertainment lawyer to check the returns slide wording"
                - "Refresh comparable title figures as new releases report @recurring(quarterly)"
            - name: Consumer brand deck with product photography
              description: |-
                ## Purpose
                Consumer brand investors want to see the product, the customer and the shelf, and grainy phone photos undo a strong growth chart. Planning a small shoot of the product in use, alongside clear charts for repeat purchase and channel mix, gives a consumer deck the visual quality the category demands.

                ## Milestones
                1. A shot list covering product, packaging, the product in use and the customer.
                2. Photos taken or commissioned at a resolution fit for full-slide use.
                3. Repeat purchase and channel mix charted from real sales data.
                4. Every image cleared for use in investor materials.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deck uses high-quality product photos with usage rights confirmed, alongside repeat purchase and channel mix charts from real data."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a shot list of product, packaging and the product in use"
                - "Book a photographer or set up a simple daylight shoot"
                - "Chart repeat purchase and channel mix from real sales data"
                - "Confirm usage rights for every image in the deck"
            - name: Freelance designer building a client's deck
              description: |-
                ## Purpose
                Designers asked to build a founder's pitch deck often receive a messy draft, a moving story and a deadline set by the first investor meeting. Running the job with a clear brief, a fixed number of revision rounds, the founder named as owner of every number, and a portfolio case study at the end protects your time and builds a repeatable service.

                ## Milestones
                1. A brief agreed with the founder covering audience, round, deadline and revision rounds.
                2. The founder confirmed in writing as owner of every number and claim.
                3. Draft, revision and final files delivered on the agreed dates.
                4. A case study written, with the client's permission, for your portfolio.

                ## Notes
                Start from the **Portfolio piece** template for the case study. Never show a client's deck publicly without written permission; most contain confidential figures.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The client deck is delivered on the agreed date within the agreed revision rounds, and a permitted case study is in your portfolio."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree audience, deadline and revision rounds with the founder"
                - "Confirm in writing that the founder owns all numbers and claims"
                - "Deliver draft, revision and final files on the agreed dates"
                - "Ask the client for written permission before any portfolio use"
            - name: Hardware and deep tech deck with technical risk
              description: |-
                ## Purpose
                Hardware and science companies ask investors to accept technical risk that software companies do not, and a deck that hides that risk loses specialist investors at the first question. Showing what has already been proven, the remaining technical milestones and how this round retires the next risk gives a clear picture of what the money buys.

                ## Milestones
                1. Technical risks listed, each marked as proven, in test or unproven.
                2. A milestone timeline showing which risks this round retires.
                3. One slide explaining the core technology for a non-specialist.
                4. Supporting test data and patent details placed in the appendix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deck states each technical risk and its status, shows which ones this round retires, and explains the technology for a non-specialist."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every technical risk and mark it proven, in test or unproven"
                - "Draw a timeline showing which risks this round retires"
                - "Write one plain-language slide on the core technology"
                - "Move test results and patent details into the appendix"
            - name: Deck for investors in another country
              description: |-
                ## Purpose
                Raising from investors abroad brings different expectations: currency, the markets they know, how much detail they want and sometimes the language itself. Adapting the deck, with figures in their currency, a slide explaining your home market and a translation checked by a fluent speaker, stops avoidable confusion from looking like a weak business.

                ## Milestones
                1. Key figures shown in the investor's currency, with the exchange rate and date stated.
                2. The home market explained for readers who do not know it.
                3. Local conventions checked with a founder or adviser from that country.
                4. Any translation reviewed by a fluent speaker with business vocabulary.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adapted version shows dated currency conversions, explains the home market and has been checked by someone from the target country."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Convert key figures and state the exchange rate and date"
                - "Add a slide explaining your home market to outsiders"
                - "Ask a founder from that country to review local conventions"
                - "Have a fluent speaker check any translated version"
            - name: Second-time founder deck after a failed startup
              description: |-
                ## Purpose
                Having run a company that failed is common among founders, and many investors count it as experience, but a deck that avoids the subject invites suspicion. One honest line on the team slide about the earlier company, what you learned and how it shapes this one turns a question mark into part of the reason to back you.

                ## Milestones
                1. One line on the earlier company written for the team slide.
                2. Two or three specific lessons that show up in this company's plan.
                3. The wording checked with a former co-founder or investor from the earlier company.
                4. A short prepared answer for follow-up questions written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The team slide addresses the earlier company in one honest line, and the lessons it cites appear in the current plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one honest line about the earlier company"
                - "Name the lessons from it that show in this company's plan"
                - "Check the wording with a former investor or co-founder"
                - "Write a short prepared answer for follow-up questions"
            - name: Story reframe after a pivot
              description: |-
                ## Purpose
                After a pivot, the old deck is worse than no deck, because existing investors and anyone who saw the earlier version will compare the two. Rebuilding the story around what the company learned, the evidence that led to the change and why the new direction has a better shot keeps the pivot from reading as a retreat.

                ## Milestones
                1. The evidence that led to the pivot written as three points.
                2. A new story outline built from a fresh deck brief.
                3. Slides from the old story retired from the master file.
                4. The new story tested with two existing investors before wider use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rebuilt deck explains the pivot with three pieces of evidence and has been reviewed by two existing investors before outreach."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the three pieces of evidence that led to the pivot"
                - "Redraft the ten-beat outline for the new direction"
                - "Retire slides from the old story in the master file"
                - "Show the new story to two existing investors first"
            - name: Later-stage deck with efficiency metrics
              description: |-
                ## Purpose
                By Series B and later, investors expect a deck closer to a board pack: net revenue retention, gross margin trends, burn against new revenue, sales efficiency and cohort behaviour, with definitions they can check. Building these slides with the finance lead, using the definitions the board already sees, prepares the deck for a diligence-heavy process.

                ## Milestones
                1. The efficiency metrics expected at your stage listed with definitions.
                2. Each metric charted over at least eight quarters where data allows.
                3. Definitions matched to the board reporting pack.
                4. The finance lead's sign-off on every figure recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deck shows each agreed efficiency metric over eight quarters where data exists, with definitions matching board reporting and finance sign-off."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the efficiency metrics expected at your stage"
                - "Agree definitions with the finance lead to match the board pack"
                - "Chart each metric over at least eight quarters"
                - "Record the finance lead's sign-off on every figure"
            - name: Cohort and retention charts for the appendix
              description: |-
                ## Purpose
                Cohort charts answer the question behind every growth claim: do customers stay and spend more, or is growth hiding churn? Building a cohort table and turning it into one clear chart, with revenue retention shown beside logo retention, gives experienced investors the evidence they look for first.

                ## Milestones
                1. A cohort table built from billing or usage data.
                2. Logo retention and revenue retention charted separately.
                3. Small or unrepresentative cohorts labelled as such.
                4. The charts updated as each new cohort completes a month.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The appendix holds logo and revenue retention charts built from billing data, updated monthly, with small cohorts labelled."
                cadence: rolling
              tasks:
                - "Export customer start dates and billing history"
                - "Build a cohort table by customer start month"
                - "Chart logo retention and revenue retention separately"
                - "Add the latest monthly cohort to the retention charts @recurring(monthly:7)"
            - name: Modular slide library for the company story
              description: |-
                ## Purpose
                Over several raises, the same story is needed for recruits, partners, customers and the board, each wanting a slightly different cut. A library of approved, current slides tagged by audience lets anyone in the company assemble a correct version in minutes and keeps the fundraising story consistent with everything else the company says.

                ## Milestones
                1. Approved slides stored in one library and tagged by audience.
                2. An owner named for each slide's content.
                3. Stale slides retired or refreshed each quarter.
                4. Three audience versions assembled from the library without new design work.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tagged slide library with named owners has produced three audience versions and is refreshed every quarter."
                cadence: rolling
              tasks:
                - "Move approved slides into one library tagged by audience"
                - "Name an owner for the content of each slide"
                - "Retire or refresh library slides older than a quarter @recurring(quarterly)"
                - "Assemble a recruiting version from the library to test it"
---

# Investor Pitch Deck

This area is for founders writing the deck for a raise, and for the designers and creative founders who shape it. It starts with the foundations (a deck brief, a one-line description, a ten-beat outline, sourced numbers and a clear ask), then the routines that keep the deck current and accurate, the slide-by-slide craft of headlines, charts, market, product and team, the decisions about length, versions and design help, the dated moments such as the freeze and demo day, versions for particular situations, and finally the work of a founder on their third or fourth raise.

What repeats is a monthly traction refresh and changelog, a weekly feedback log and view-analytics check during a raise, quarterly reviews of the story, competitors, customer permissions and unit economics, and a yearly refresh of market data. The Metrics log, Feedback themes, Operational checklist, Reading queue, Vendor and Portfolio piece templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
