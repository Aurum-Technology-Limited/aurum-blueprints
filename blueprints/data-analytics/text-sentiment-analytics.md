---
id: data-analytics.text-sentiment-analytics
name: Text & Sentiment Analytics
description: "Text sources gathered and cleaned, a theme codebook and sentiment labels you can defend, checked models, weekly readouts and the routines that turn reviews, tickets and comments into issues someone fixes."
category: business
version: 1.0.0
tags: [data-analytics, text-sentiment-analytics, researcher, knowledge-worker, sentiment-analysis, topic-modelling, customer-feedback, nlp]
author: Aurum Technology
starter_structure:
  templates:
    - feedback-themes
    - metrics-log
    - reading-queue
    - vendor
    - meeting-notes
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Text & Sentiment Analytics
          description: "Analysing reviews, tickets, survey comments and other text at scale to find themes, sentiment and emerging issues."
          projects:
            - name: Inventory of text sources and their owners
              description: |-
                ## Purpose
                Customer words are usually scattered across an app store console, a review site, the helpdesk, survey exports, live chat and a social listening tool, each owned by a different team. Listing every source with its owner, volume per month, history available and export route shows what can be analysed together and what is missing. Without it, the first theme report quietly covers half the feedback and nobody notices.

                ## Milestones
                1. A table of every text source with owner, monthly volume, earliest date available and how it can be exported.
                2. Each source marked as structured export, API, manual copy or not yet accessible.
                3. The language mix and any star rating or score field noted per source.
                4. The three sources with the most decision value chosen for the first analysis.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A source inventory lists every text feed with owner, volume, history and export route, and the first three sources to analyse are chosen."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every place customers or staff write free text about the product or service"
                - "Ask each source owner for monthly volume and how far back the history goes"
                - "Record the export route and any rating field for each source"
                - "Pick the three sources to analyse first and note why"
            - name: Decisions the text analysis must inform
              description: |-
                ## Purpose
                Theme reports that answer no particular question get read once and filed. Writing down the four or five decisions the analysis should feed, such as which bugs to fix first, whether a price change landed badly or which help articles to rewrite, sets the level of detail, the refresh rhythm and who must see each finding. It also gives you a polite reason to say no to vanity word clouds.

                ## Milestones
                1. Four or five named decisions, each with the person who makes it and when.
                2. For each decision, the text sources and the cut, such as product, region or plan, that matter.
                3. A refresh rhythm agreed per decision, weekly, monthly or one-off.
                4. The list signed off by the main stakeholders in writing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of at least four decisions, each with an owner, relevant sources, cuts and refresh rhythm, is agreed by stakeholders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask product, support and marketing leads which decision they wish customer comments could settle"
                - "Write each decision with its owner and the date it is next made"
                - "Note the sources and cuts each decision needs"
                - "Send the list to stakeholders and record their agreement"
            - name: One clean table of all feedback text
              description: |-
                ## Purpose
                Analysing reviews in one file, tickets in another and survey comments in a third makes cross-source themes impossible and doubles every piece of cleaning. A single table with the same columns for every source, such as record id, source, timestamp, text, rating, product, language and customer key, is the base every later model and report reads from. Build it once, refresh it on a schedule and stop copying text into spreadsheets by hand.

                ## Milestones
                1. A shared schema written with column names, types and the meaning of each field.
                2. The first three sources loaded into the table with source-specific quirks mapped.
                3. Row counts per source and month reconciled against each source system.
                4. A scheduled refresh running with the last load time visible.

                ## Notes
                Keep the original text untouched in one column and put cleaned text in another. Every later cleaning decision can then be redone without re-exporting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single feedback table holds at least three sources in one schema, with row counts reconciled and a scheduled refresh in place."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the shared column list for the combined feedback table"
                - "Map each source's fields onto the shared columns"
                - "Load the first three sources and compare monthly row counts with the source systems"
                - "Schedule the refresh and show the last load time beside the table"
            - name: Redacting personal details from feedback text
              description: |-
                ## Purpose
                Support tickets and chat logs routinely contain names, email addresses, phone numbers, order numbers and occasionally card digits or health details, typed by customers who never expected an analyst to read them. Stripping these before text reaches analysis tools, external models or shared reports protects customers and keeps the work inside your privacy commitments. A redaction step checked on real samples is far safer than a promise to be careful.

                ## Milestones
                1. The types of personal detail found in a sample of 300 records listed.
                2. Pattern rules and a named-entity step that mask each type with a placeholder such as EMAIL or PHONE.
                3. A hand check of 200 redacted records with the miss rate written down.
                4. Redaction running before text enters any shared table or external tool.

                ## Notes
                Agree with your privacy or data protection lead which tools may receive text at all, especially external language model services. Redaction lowers risk; it does not remove the need for that agreement.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A redaction step masks personal details before analysis, with a recorded miss rate from a hand check of at least 200 records."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read 300 raw tickets and list every kind of personal detail you find"
                - "Write masking rules for emails, phone numbers, card-like digit runs and names"
                - "Hand-check 200 redacted records and record what slipped through"
                - "Audit a fresh sample of redacted text for leaked personal details @recurring(quarterly)"
            - name: Cleaning and deduplication rules for feedback text
              description: |-
                ## Purpose
                Raw feedback is full of noise: email signatures, quoted reply chains, auto-acknowledgements, chatbot greetings, copy-pasted complaint templates and the same review posted on three sites. Left in, they create fake themes like 'thank you for contacting us' and inflate volumes. A short written rule set, applied the same way every refresh, is what makes this month comparable with last month.

                ## Milestones
                1. The ten commonest kinds of boilerplate and noise identified from a sample.
                2. Rules written for stripping signatures, reply chains, bot text and system messages.
                3. Exact and near-duplicate detection in place, with the threshold recorded.
                4. Before and after volumes per source logged for one full refresh.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written cleaning rule set and duplicate threshold are applied to every refresh, with before and after volumes logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sort a month of tickets by most frequent opening lines to find boilerplate"
                - "Write a stripping rule for signatures, quoted replies and bot messages"
                - "Set a near-duplicate similarity threshold and test it on fifty pairs"
                - "Log record counts before and after cleaning for each source"
            - name: Reading 200 comments by hand before any model
              description: |-
                ## Purpose
                Analysts who start with a topic model see the model's view of the data, not the customers'. Reading a random 200 comments across sources, with a notebook open, shows the vocabulary people actually use, the share that is off-topic or unreadable, and the complaints no keyword list would have caught. It takes an afternoon and saves weeks of chasing artefacts.

                ## Milestones
                1. A random sample of 200 comments drawn across the chosen sources.
                2. Every comment read, with rough notes on topic, tone and anything surprising.
                3. A list of product names, slang, abbreviations and misspellings people use.
                4. A one-page memo of first impressions shared with the main stakeholder.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two hundred randomly sampled comments have been read and annotated, and a one-page first impressions memo has been shared."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draw a random sample of 200 comments across the chosen sources"
                - "Read each comment and jot its topic and tone in a side column"
                - "List the product names, slang and misspellings customers use"
                - "Write a one-page memo of what surprised you and share it"
            - name: First theme codebook from a hand-coded sample
              description: |-
                ## Purpose
                A codebook is the agreed list of themes, each with a definition, include and exclude rules and two real examples. Building the first version from 300 to 500 hand-coded comments, rather than from what the team assumes people say, keeps the themes grounded and makes later automated coding checkable. Most later disagreements about the numbers turn out to be disagreements about the codebook.

                ## Milestones
                1. Between 300 and 500 comments coded by hand, allowing more than one theme per comment.
                2. Fifteen to thirty themes, each with a definition, include and exclude rules and two quotes.
                3. Themes grouped under a handful of parent categories such as delivery, billing and usability.
                4. Version 1.0 of the codebook saved with a change log.

                ## Notes
                Start from the **Feedback themes** template. Resist themes that only describe sentiment, such as 'unhappy'; a theme should name what the comment is about.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Codebook version 1.0 holds fifteen to thirty defined themes with rules and examples, built from at least 300 hand-coded comments."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Create the codebook from the feedback themes template"
                - "Code 300 comments by hand, adding a theme only when no existing one fits"
                - "Write a definition, include rule and exclude rule for each theme"
                - "Group the themes under parent categories and save version 1.0"
            - name: Sentiment label definitions and edge-case rules
              description: |-
                ## Purpose
                Two people will label 'arrived late but the driver was lovely' differently unless someone has decided what mixed means. Defining the sentiment labels, whether positive, negative, neutral and mixed or a five-point scale, plus rules for sarcasm, questions, feature requests and comments about a competitor, is what makes human and model labels comparable. Decide this before anyone labels at scale.

                ## Milestones
                1. The label set chosen and the reason recorded.
                2. Written rules for mixed, sarcastic, purely factual and request-style comments.
                3. Twenty worked examples showing the agreed label for tricky cases.
                4. Whether sentiment is scored per comment, per theme or both decided.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written sentiment labelling guide defines the label set, edge-case rules and twenty worked examples, and states the scoring level."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull twenty comments that two colleagues would probably label differently"
                - "Choose the sentiment label set and write why"
                - "Write the rule for each edge case with an example"
                - "Decide whether sentiment is scored per comment or per theme"
            - name: Baseline theme and sentiment snapshot for the last 90 days
              description: |-
                ## Purpose
                Every later claim that a theme is rising or sentiment is improving needs a starting point. A snapshot of the last 90 days, giving theme volumes, share of comments per theme, sentiment by theme and source, and a few representative quotes, becomes the reference the weekly readout compares against. It is also the first piece of evidence stakeholders see, so it should be modest and accurate rather than impressive.

                ## Milestones
                1. Ninety days of cleaned text coded against codebook version 1.0.
                2. Theme volumes and sentiment shown by source and month.
                3. Three representative quotes per top theme, redacted.
                4. A short limitations section covering coverage gaps and who tends to write.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A baseline report covers 90 days of feedback with theme volumes, sentiment by theme and source, quotes and a limitations section."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Code the last 90 days of cleaned text against the codebook"
                - "Chart theme volumes and sentiment by source and month"
                - "Pick three redacted quotes that represent each top theme"
                - "Write a limitations section before sharing the snapshot"
            - name: Weekly theme and sentiment readout
              description: |-
                ## Purpose
                Stakeholders act on feedback when it reaches them on a fixed day in the same shape. A weekly one-page readout listing the top movers against baseline, new themes, sentiment shifts with volume behind them and three quotes worth reading gives product and support a routine to plan around. Keep it short enough that someone reads it on a phone.

                ## Milestones
                1. A fixed one-page layout agreed with the main readers.
                2. Readouts sent on the same weekday for eight consecutive weeks.
                3. Every movement quoted with its comment count, not only a percentage.
                4. At least one action per month traced back to a readout.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly readouts sent on schedule, each with counts behind every movement, and one traced action per month."
                cadence: rolling
              tasks:
                - "Agree the one-page readout layout with the two main readers"
                - "Send the weekly theme and sentiment readout with counts and three quotes @recurring(weekly:mon)"
                - "Note in the readout any action taken because of an earlier one"
            - name: Monthly codebook upkeep
              description: |-
                ## Purpose
                Products change, new features ship and customers invent new words, so a codebook frozen at version 1.0 slowly fills its 'other' bucket and splits real issues across vague themes. A monthly pass to add, merge, split or retire themes, with each change logged and old data recoded where needed, keeps trends meaningful across time. Changes made without a log are how year-on-year comparisons break.

                ## Milestones
                1. A monthly slot for codebook changes in the calendar.
                2. Each change logged with date, reason and whether history was recoded.
                3. No theme left with fewer than five comments in three months without review.
                4. A version number bumped with each change set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly codebook passes completed, each recorded in the change log with a version number and recode decision."
                cadence: rolling
              tasks:
                - "Add a change log section to the codebook"
                - "Review the 'other' bucket and low-volume themes and update the codebook @recurring(monthly:12)"
                - "Recode history where a merged or split theme would break a trend"
            - name: Double coding and agreement checks
              description: |-
                ## Purpose
                If two careful people cannot agree on a theme, neither can a model, and the theme's trend means little. Having a second coder label the same 50 comments each month and measuring agreement, for example with Cohen's kappa, shows which themes are well defined and which need sharper rules. It is the cheapest quality check in text analytics and the one most often skipped.

                ## Milestones
                1. A second coder recruited and briefed on the codebook.
                2. Fifty comments double coded each month.
                3. Agreement measured overall and for each theme with enough examples.
                4. Themes with poor agreement rewritten and re-tested the following month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly double coding rounds recorded with agreement scores, and every theme below the agreed threshold rewritten."
                cadence: rolling
              tasks:
                - "Ask a colleague to act as second coder and walk them through the codebook"
                - "Double code fifty random comments and calculate agreement per theme @recurring(monthly:19)"
                - "Rewrite the definitions of the two weakest themes"
            - name: Model accuracy spot-checks against human labels
              description: |-
                ## Purpose
                Automated theme and sentiment labels drift as language, products and sources change, and the dashboard looks just as confident when accuracy has fallen. Labelling a fresh random 100 comments by hand each month and comparing them with the model's labels gives precision and recall per theme and catches silent decline. A model that is not checked is an opinion with a chart.

                ## Milestones
                1. A monthly random sample of 100 comments labelled by hand.
                2. Precision and recall recorded for sentiment and the top ten themes.
                3. A threshold written below which a theme is flagged as unreliable in reports.
                4. Six months of accuracy history kept in one log.

                ## Notes
                Start from the **Metrics log** template. Draw the sample at random, not from comments the model was unsure about, or the accuracy figure will be biased.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly accuracy checks recorded with precision and recall per top theme, and unreliable themes flagged in reports."
                cadence: rolling
              tasks:
                - "Set up an accuracy log from the metrics log template"
                - "Hand-label 100 random comments and compare them with model labels @recurring(monthly:24)"
                - "Flag any theme below the accuracy threshold in the next readout"
            - name: Emerging issue watch for new terms and spikes
              description: |-
                ## Purpose
                The most valuable thing text can do is warn early: a new error code, a courier's name appearing in complaints, a sudden cluster of 'charged twice'. A daily glance at the worst new reviews and a weekly check for terms whose frequency jumped against their own history catches these before they reach the monthly report. Pair it with a named person to tell, or the warning goes nowhere.

                ## Milestones
                1. A list of words and phrases whose weekly frequency rose sharply against the prior eight weeks.
                2. A short daily scan of one-star reviews and urgent tickets in place.
                3. A named contact for each product area to receive early warnings.
                4. At least one emerging issue raised before it appeared in the monthly figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly rising-terms list and a daily low-rating scan run for two months, with at least one early warning sent to a named owner."
                cadence: rolling
              tasks:
                - "Build a query that lists terms whose weekly count jumped against the last eight weeks"
                - "Scan the overnight one-star reviews and urgent tickets for anything new @recurring(daily)"
                - "Review the rising-terms list and alert the owning team on real issues @recurring(weekly:wed)"
                - "Write the named early-warning contact for each product area"
            - name: Routing themes to owners and closing the loop
              description: |-
                ## Purpose
                Theme reports fail when everyone reads them and nobody owns the problem. Assigning every top theme to a named team, logging the action they agreed and checking back monthly turns feedback from a mood report into a work queue. Reporting back to customers or frontline staff when something was fixed is what keeps them writing useful comments.

                ## Milestones
                1. Every top-twenty theme mapped to a named owning team.
                2. An action log recording each theme raised, the response and the date.
                3. A monthly follow-up on open actions with owners.
                4. Fixed issues reported back to support staff and, where possible, to customers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All top-twenty themes have named owners, and the action log shows monthly follow-ups for six months with closed items reported back."
                cadence: rolling
              tasks:
                - "Map each of the top twenty themes to an owning team and contact"
                - "Create an action log with theme, owner, agreed response and date"
                - "Chase open theme actions with their owners and update the log @recurring(monthly:8)"
                - "Tell frontline support staff which reported issues were fixed"
            - name: Verbatim quote bank
              description: |-
                ## Purpose
                A well-chosen customer sentence persuades a leadership team faster than any chart, but quotes grabbed in a hurry are often unrepresentative or still carry a name. A small, curated bank of redacted quotes per theme, tagged by source, date and sentiment and chosen to be typical rather than dramatic, means every report and presentation draws on vetted material.

                ## Milestones
                1. A quote bank with fields for theme, source, date, sentiment and redaction check.
                2. Three to five typical quotes per top theme.
                3. A rule that each quote is checked for personal details before entry.
                4. Quotes older than a year retired or marked as historic.

                ## Notes
                Pick quotes that sound like the median comment in the theme. One furious outlier quoted to the board can set the roadmap for a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A quote bank holds three to five redacted, typical quotes for each top theme, refreshed monthly, with stale quotes retired."
                cadence: rolling
              tasks:
                - "Set up the quote bank with theme, source, date and sentiment fields"
                - "Add three typical redacted quotes for each top theme"
                - "Refresh the quote bank and retire quotes older than a year @recurring(monthly:27)"
            - name: Quarterly theme trend report for leadership
              description: |-
                ## Purpose
                Weekly readouts are for the people fixing things; leadership needs a slower view that says which themes grew or shrank over the quarter, whether fixes moved the volume, and what is likely to matter next. A quarterly report with a consistent structure, honest caveats about coverage and three recommendations is the piece that earns text analytics a place in planning.

                ## Milestones
                1. A fixed report structure covering movers, fixes, outlook and caveats.
                2. Quarter-on-quarter theme volumes normalised by total feedback or customer count.
                3. Three recommendations, each tied to a theme and an owner.
                4. Four quarterly reports delivered in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly trend reports delivered in a year, each with normalised volumes, caveats and three owned recommendations."
                cadence: cyclic
              tasks:
                - "Agree the quarterly report structure with the leadership sponsor"
                - "Normalise theme volumes by total feedback or active customers"
                - "Write and present the quarterly theme trend report @recurring(quarterly)"
            - name: Volume and coverage checks on text feeds
              description: |-
                ## Purpose
                Text feeds fail quietly: an app store connector stops after a password change, a survey loses its comment box in a redesign, a helpdesk migration drops a language. Sentiment then appears to improve because fewer angry people are counted. A weekly look at volumes per source and language against their usual range catches a broken feed before it is reported as good news.

                ## Milestones
                1. Expected weekly volume ranges recorded per source and language.
                2. A weekly check comparing actual volumes with those ranges.
                3. A short note for each gap explaining cause and fix.
                4. Report footnotes added whenever a gap affected published figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly feed checks run for two months, every volume gap has a cause noted, and affected reports carry a footnote."
                cadence: rolling
              tasks:
                - "Write the usual weekly volume range for each source and language"
                - "Compare this week's text volumes per source against the usual range @recurring(weekly:thu)"
                - "Add a footnote to any report affected by a feed gap"
            - name: Annual review of sources, codebook and models
              description: |-
                ## Purpose
                Over a year, sources get added, the codebook gains dozens of patches and the model in use may be two versions behind what is now possible. A yearly review steps back to ask whether the decisions served are still the right ones, whether each source still earns its cleaning effort and whether the method should change. It is also the moment to retire reports nobody opens.

                ## Milestones
                1. Usage of each report and readout over the year checked.
                2. Each source rated on value against cleaning and access effort.
                3. Codebook structure reviewed for themes that should be merged or regrouped.
                4. A written plan for the coming year with one method change considered.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review note records report usage, source value ratings, codebook changes and the plan for the next year."
                cadence: cyclic
              tasks:
                - "Pull open and read counts for each text report from the last year"
                - "Hold the annual review of sources, codebook and models @recurring(yearly)"
                - "Write next year's plan and retire one report nobody uses"
            - name: Tokenisation, stop words and n-gram basics
              description: |-
                ## Purpose
                Most text methods start by splitting text into tokens, removing or keeping common words and counting phrases, and small choices here change results more than people expect. Removing 'not' as a stop word, for instance, flips sentiment, and splitting 'credit card' loses a theme. A few practice sessions on your own data make every later method easier to judge.

                ## Milestones
                1. Text tokenised in a notebook or tool, with lower-casing and punctuation choices noted.
                2. A custom stop word list that keeps negations and domain terms.
                3. The top bigrams and trigrams for one month listed and interpreted.
                4. Stemming and lemmatisation compared on fifty comments.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook shows tokenisation, a custom stop word list and top n-grams on your own data, with stemming and lemmatisation compared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Tokenise one month of comments and note each preprocessing choice"
                - "Build a stop word list that keeps negations and product terms"
                - "List the top bigrams and trigrams and explain the five most common"
                - "Compare stemmed and lemmatised versions of fifty comments"
            - name: Lexicon sentiment and where it breaks
              description: |-
                ## Purpose
                Word-list sentiment tools such as VADER or general-purpose lexicons are quick and transparent, which makes them a fair first step and a useful baseline. They also miss negation scope, sarcasm, domain words like 'sick' or 'killing it' and comments about other people's problems. Running one on your data and studying its failures teaches more about sentiment than any tutorial.

                ## Milestones
                1. A lexicon-based scorer run on a labelled sample of 300 comments.
                2. Accuracy against human labels recorded.
                3. Thirty misclassified comments grouped by cause.
                4. A short note on where lexicon scores are and are not acceptable for your data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lexicon scorer has been tested on 300 labelled comments, with accuracy and grouped failure causes written up."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run a lexicon sentiment scorer on 300 hand-labelled comments"
                - "Record its accuracy against the human labels"
                - "Group thirty misclassified comments by the reason they failed"
                - "Write when lexicon scores are good enough for your reports"
            - name: Topic modelling with LDA and embedding clusters
              description: |-
                ## Purpose
                Topic models find recurring groups of words or meanings without a codebook, which helps discover themes you did not know to look for. Classic LDA and newer approaches that cluster sentence embeddings, such as BERTopic, behave very differently on short comments. Trying both on the same month of data and judging the topics by hand shows when discovery methods help and when they produce plausible nonsense.

                ## Milestones
                1. An LDA model fitted on one month of comments with the number of topics varied.
                2. An embedding-and-clustering model fitted on the same data.
                3. Twenty topics from each judged by hand as coherent, mixed or junk.
                4. A note on which method suits your comment length and volume.

                ## Notes
                Topic counts are a choice, not a finding. Report the method and settings beside any discovered topic.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "LDA and embedding-cluster topics on the same month of data have been judged by hand, with a written method recommendation."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Fit an LDA model on one month of comments at three topic counts"
                - "Fit an embedding and clustering topic model on the same comments"
                - "Judge twenty topics from each method as coherent, mixed or junk"
                - "Write which method suits your data and why"
            - name: Supervised theme classification from labelled examples
              description: |-
                ## Purpose
                Once a codebook is stable, a classifier trained on hand-coded examples can label every new comment consistently. Starting with a simple, explainable model such as logistic regression on word features, then comparing a fine-tuned transformer, shows how much accuracy each step buys and what it costs in labelling and compute. The labelled set itself becomes one of the area's most valuable assets.

                ## Milestones
                1. At least 1,000 comments labelled for multi-theme classification.
                2. A baseline model trained and evaluated on a held-out test set.
                3. A transformer-based model compared on the same split.
                4. Per-theme precision and recall reported, with themes too rare to model listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Baseline and transformer theme classifiers are compared on the same held-out set, with per-theme precision and recall reported."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Export 1,000 hand-coded comments as a labelled training set"
                - "Split into training and held-out test sets by date, not at random"
                - "Train a logistic regression baseline and record per-theme scores"
                - "Fine-tune a small transformer on the same split and compare"
            - name: Aspect-based sentiment analysis
              description: |-
                ## Purpose
                A review that loves the food and hates the wait is neither positive nor negative overall, and averaging it away hides both facts. Aspect-based sentiment scores each aspect, such as price, delivery, staff or app speed, separately within a comment. Learning to do it, even roughly, makes sentiment actionable because each score points at something a team owns.

                ## Milestones
                1. A list of eight to twelve aspects tied to codebook themes.
                2. Two hundred comments labelled with aspect and sentiment pairs.
                3. An aspect sentiment method tested against those labels.
                4. One report view showing sentiment by aspect rather than overall.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An aspect sentiment method has been tested on 200 labelled comments, and one report view shows sentiment by aspect."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose eight to twelve aspects that map onto codebook themes"
                - "Label 200 comments with aspect and sentiment pairs"
                - "Test an aspect sentiment method against those labels"
                - "Build one report view of sentiment by aspect"
            - name: Using a language model as a coder, with checks
              description: |-
                ## Purpose
                Large language models can apply a codebook to thousands of comments in minutes, and they handle nuance and new phrasing better than keyword rules. They also invent themes, drift between runs and agree with whatever the prompt implies. Learning to prompt with the full codebook, fix the output format, set low randomness and validate against human labels lets you use them as a fast second coder rather than an oracle.

                ## Milestones
                1. A prompt containing codebook definitions, rules and a fixed output format.
                2. The prompt run on 200 hand-labelled comments with agreement measured.
                3. Repeat runs compared to check consistency.
                4. Written rules for when model labels may appear in reports unchecked.

                ## Notes
                Send only redacted text to any external model service, and confirm the service's data retention terms with your privacy lead first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A codebook prompt has been validated on 200 hand-labelled comments with agreement and run-to-run consistency recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a coding prompt from the codebook definitions and rules"
                - "Run the prompt on 200 hand-labelled comments and measure agreement"
                - "Run it twice more and compare how often labels change"
                - "Write the rule for when model labels need a human check"
            - name: Thematic analysis methods from qualitative research
              description: |-
                ## Purpose
                Qualitative researchers have decades of practice in coding text carefully, from reflexive thematic analysis to framework analysis, and much of it transfers directly to customer feedback. Learning how they move from codes to themes, keep memos and judge saturation gives analysts better habits than counting keywords. It also helps when presenting text findings to researchers who will ask how themes were built.

                ## Milestones
                1. One standard text on thematic analysis read and summarised.
                2. The six common phases of thematic analysis applied to 100 comments.
                3. Analytic memos kept while coding.
                4. A paragraph explaining how your codebook method relates to qualitative practice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thematic analysis phases have been applied to 100 comments with memos, and a written methods paragraph exists."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a standard guide to thematic analysis and summarise its phases"
                - "Code 100 comments following those phases and keep memos"
                - "Note where the qualitative approach differs from your codebook"
                - "Write a methods paragraph you can reuse in reports"
            - name: Text analytics reading habit
              description: |-
                ## Purpose
                Methods in this field change fast, from new embedding models to evaluation practices for language model coding, and a lot of what gets shared is vendor marketing. A steady habit of one paper, benchmark write-up or practitioner case study a month, logged with a line on whether it applies to your data, keeps your methods current without chasing every release.

                ## Milestones
                1. A reading list of at least ten sources, mixing papers and practitioner write-ups.
                2. One item read and summarised each month.
                3. Each summary tagged as applicable, maybe later or not relevant.
                4. One method change in a year traced to the reading.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twelve monthly reading summaries logged in a year, each tagged for relevance, with one method change traced to them."
                cadence: rolling
              tasks:
                - "Create a reading queue from the template with ten text analytics sources"
                - "Read one paper or case study and write a two-line summary @recurring(monthly:15)"
                - "Tag each summary as applicable, maybe later or not relevant"
            - name: Choosing a text analytics platform or building in-house
              description: |-
                ## Purpose
                Feedback platforms promise themes and sentiment out of the box, while building with open-source libraries or language model services gives control at the cost of upkeep. The right answer depends on volumes, languages, the need to export labels, data residency and who will maintain it. A scored comparison of two vendors against an in-house option, tested on your own data, avoids a multi-year contract chosen from a demo.

                ## Milestones
                1. Requirements written covering volume, languages, integrations, redaction and export.
                2. Two vendors and one in-house option tested on the same 500 labelled comments.
                3. Costs over three years estimated for each option.
                4. A recommendation with scores and risks signed off.

                ## Notes
                Start from the **Vendor** template. Insist on testing with your own redacted data; demo datasets are chosen to flatter the tool.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed-off recommendation compares two vendors and an in-house option on the same 500 labelled comments and three-year cost."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the requirements list for a text analytics platform"
                - "Create a vendor record for each shortlisted platform"
                - "Run each option on the same 500 labelled comments and score accuracy"
                - "Estimate three-year costs and write the recommendation"
            - name: Defining the sentiment metric used in reports
              description: |-
                ## Purpose
                'Sentiment is up' can mean the share of positive comments rose, negative fell, an average score moved or the mix of sources changed. Picking one headline metric, such as net sentiment or share negative, defining its formula and minimum volume, and showing counts alongside it stops different teams quoting different numbers from the same data. The definition should also say what it is not, for instance not a satisfaction score.

                ## Milestones
                1. Candidate metrics compared on a year of historical data.
                2. One headline metric chosen with formula, filters and minimum volume.
                3. Rules for comparing periods when source mix changes.
                4. The definition published where every report links to it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One headline sentiment metric is defined with formula, minimum volume and source-mix rules, and every report links to it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate net sentiment, share negative and mean score on last year's data"
                - "Choose one headline metric and write its exact formula"
                - "Set the minimum comment count below which the metric is not shown"
                - "Publish the definition and link it from every sentiment report"
            - name: Who writes comments and who stays silent
              description: |-
                ## Purpose
                People who leave reviews or comment boxes are not a random sample: the very pleased and the very annoyed write more, and some groups barely write at all. Comparing commenters with all customers on plan, tenure, region and rating shows how far theme shares can be generalised. A short bias note attached to every report prevents a vocal minority being presented as everyone.

                ## Milestones
                1. Commenters compared with the full customer base on four or five attributes.
                2. Rating distribution of commenters compared with non-commenters where ratings exist.
                3. Groups that are under-represented in text named.
                4. A standard bias note written for reports.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of commenters with the full customer base on at least four attributes is written up, with a standard bias note in use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Join comment records to customer attributes using the customer key"
                - "Compare commenters with all customers on plan, tenure and region"
                - "Name the groups that rarely leave comments"
                - "Write a two-sentence bias note for every text report"
            - name: Linking themes to refunds, churn and repeat contact
              description: |-
                ## Purpose
                Volume alone says how often a theme comes up, not how much it costs. Joining coded comments to outcomes such as refunds, cancellations within 90 days or repeat support contacts shows which themes go with real losses, so a quiet but expensive theme can outrank a loud, harmless one. Treat the result as association, not proof that the theme caused the loss.

                ## Milestones
                1. Coded comments joined to refund, cancellation and repeat-contact records.
                2. Outcome rates compared for customers mentioning each top theme against similar customers who did not.
                3. Themes ranked by volume and by outcome rate side by side.
                4. The ranking refreshed each quarter with caveats about causation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Top themes are ranked by both volume and associated refund, churn or repeat-contact rates, refreshed quarterly with causation caveats."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Join coded comments to refund, cancellation and repeat-contact records"
                - "Compare outcome rates for each top theme against a similar comparison group"
                - "Rank themes by volume and outcome rate side by side"
                - "Refresh the theme-to-outcome ranking with the new quarter's data @recurring(quarterly)"
            - name: Handling feedback in several languages
              description: |-
                ## Purpose
                Once comments arrive in Spanish, French, Portuguese or Dutch as well as English, analysts must choose between translating everything into one language, using multilingual models directly, or coding each language separately. Each choice changes cost, accuracy and which nuances survive. Testing the options on a labelled sample in each language turns a default into a decision.

                ## Milestones
                1. Language share per source measured with automatic language detection.
                2. Translate-then-analyse and multilingual-model options tested on 100 labelled comments per main language.
                3. Accuracy and cost per option recorded.
                4. A policy written for each language, including when a native speaker reviews.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written language policy, based on accuracy tests in each main language, states the method and native-speaker review rule for each."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Run language detection and record the share of each language per source"
                - "Label 100 comments in each main language with a native speaker's help"
                - "Test translation first against a multilingual model on those comments"
                - "Write the policy for each language"
            - name: Fixing the support ticket tagging scheme
              description: |-
                ## Purpose
                Most helpdesks carry a tag list that grew by accretion: 120 tags, half unused, several overlapping, applied inconsistently by agents in a hurry. Aligning ticket tags with the codebook, with fewer and clearer options and model suggestions where possible, gives support managers better data and gives text analysis a second, human-applied signal to check against.

                ## Milestones
                1. Current tag usage counted and overlapping or unused tags listed.
                2. A reduced tag list mapped to codebook themes, agreed with support leads.
                3. Agents briefed and the new list live in the helpdesk.
                4. Tag consistency against model labels checked after the first month.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A reduced ticket tag list mapped to the codebook is live, agents are briefed and tag consistency has been checked once."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Export tag usage counts for the last six months"
                - "Propose a reduced tag list mapped to codebook themes"
                - "Agree the list with support leads and brief the agents"
                - "Compare agent tags with model labels and note drifting tags @recurring(monthly:21)"
            - name: Shrinking the uncategorised share below ten percent
              description: |-
                ## Purpose
                Left to grow, an 'other' or 'unclassified' bucket hides new issues and makes every theme share look smaller than it is. Reading a sample of what lands there, then splitting out the real themes, fixing preprocessing for junk and documenting what is legitimately unclassifiable, usually brings the bucket under ten percent. Track it monthly, because it creeps back as the product changes.

                ## Milestones
                1. The current uncategorised share measured per source.
                2. Two hundred uncategorised comments read and grouped.
                3. New themes, cleaning fixes or exclusion rules added from the groups.
                4. Uncategorised share below ten percent for two consecutive months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The uncategorised share of coded comments has stayed below ten percent for two consecutive months, measured per source."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure the share of uncategorised comments per source"
                - "Read 200 uncategorised comments and group what they are about"
                - "Add themes or cleaning rules for the largest groups"
                - "Check the uncategorised share for each source @recurring(monthly:4)"
            - name: Feedback sprint for a product launch
              description: |-
                ## Purpose
                The two weeks after a release are when customers say most clearly what works and what broke, and when the team can still change course cheaply. A launch sprint with launch-specific themes added in advance, a daily summary for the release team and a closing report at day fourteen gives the launch a proper feedback loop instead of anecdotes in a chat channel.

                ## Milestones
                1. Launch-specific themes and keywords added to the codebook before release.
                2. A short daily summary sent to the release team for fourteen days.
                3. Bugs and confusion points passed to owners within a day of appearing.
                4. A day-fourteen report comparing launch feedback with the pre-launch baseline.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Fourteen daily launch summaries were sent and a day-fourteen report compared launch feedback with the pre-launch baseline."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Add launch-specific themes and feature names to the codebook before release"
                - "Agree the daily summary format and recipients with the release lead"
                - "Send each day's launch feedback summary for the first fourteen days"
                - "Write the day-fourteen comparison against the pre-launch baseline"
            - name: Comment analysis after an outage or incident
              description: |-
                ## Purpose
                After an outage, a delivery failure or a data incident, leadership wants to know how customers reacted and whether trust recovered. Analysing comments from the incident window against the weeks before, by theme, sentiment and customer segment, and following volume until it returns to baseline, gives the incident review evidence beyond the loudest social posts.

                ## Milestones
                1. The incident window and comparison period defined.
                2. Incident-related comments identified and coded.
                3. Sentiment and theme shifts reported by segment.
                4. Recovery tracked until volumes and sentiment return to baseline, with the date recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An incident feedback report shows theme and sentiment shifts by segment and records the date feedback returned to baseline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define the incident window and a comparison period of equal length"
                - "Find and code the comments that mention the incident"
                - "Report sentiment and theme shifts by customer segment"
                - "Record the date volumes and sentiment returned to baseline"
            - name: Annual voice of the customer report
              description: |-
                ## Purpose
                Once a year, a single report that says what customers praised, what frustrated them, what changed because of their feedback and what remains unresolved gives the organisation a shared memory. Written from a year of coded text, with consistent definitions and a clear method section, it is often the document new leaders read first. Plan it months ahead so the data is clean when it is needed.

                ## Milestones
                1. The report outline and publication date agreed with the sponsor.
                2. A year of coded text checked for coding and definition changes.
                3. Sections on top themes, fixes delivered, unresolved issues and method written.
                4. The report published and presented.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An annual voice of the customer report with themes, fixes, unresolved issues and a method section is published by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Agree the outline and publication date with the report sponsor"
                - "Check the year's coded data for codebook changes that affect trends"
                - "Ask the agent to draft the fixes-delivered section from the action log"
                - "Write the method section and publish the report"
            - name: Readout workshop with product and support teams
              description: |-
                ## Purpose
                Teams trust findings they have handled themselves. A quarterly workshop where product, design and support staff read a curated set of real comments, sort them against the themes and challenge the numbers turns the analysis into shared understanding, and regularly surfaces a theme the codebook missed. Two hours, one room, printed quotes.

                ## Milestones
                1. A set of 60 redacted comments chosen across the top themes.
                2. A two-hour workshop held with at least three teams represented.
                3. Disagreements with current themes recorded.
                4. Actions and codebook changes from the workshop logged.

                ## Notes
                Start from the **Meeting notes** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workshop with at least three teams has been held, and its theme challenges and actions are written in meeting notes."
                cadence: cyclic
              tasks:
                - "Pick 60 redacted comments spread across the top themes"
                - "Run the comment sorting workshop with product, design and support @recurring(quarterly)"
                - "Record theme challenges and actions in the meeting notes"
            - name: Tracking reaction to a price or policy change
              description: |-
                ## Purpose
                Price rises, new fees and policy changes provoke a burst of comments, and leaders want to know quickly whether the reaction is ordinary grumbling or a real threat. Setting up themes and a comparison period before the announcement, then tracking volume, sentiment and cancellation mentions for six weeks, gives a calm, evidence-based answer instead of a panic driven by the angriest posts.

                ## Milestones
                1. Change-specific themes and a pre-announcement baseline in place before the change.
                2. Weekly tracking of volume, sentiment and cancellation intent for six weeks.
                3. Segment differences, such as long-standing versus new customers, reported.
                4. A closing note on whether the reaction faded or persisted.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Six weeks of reaction tracking against a pre-announcement baseline is reported, with segment differences and a closing verdict."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Add change-specific themes and capture a baseline before the announcement"
                - "Track volume, sentiment and cancellation mentions each week for six weeks"
                - "Compare reactions of long-standing and new customers"
                - "Write a closing note on whether the reaction faded"
            - name: Ethics and terms check for public social media text
              description: |-
                ## Purpose
                Researchers studying public posts, forum threads or reviews still face platform terms of service, data protection rules and ethical questions about quoting people who never expected to be studied. Checking the terms, deciding what will be stored, how quotes will be disguised and whether an ethics board must review the work protects participants and the study. Do it before collecting, not after a reviewer asks.

                ## Milestones
                1. Platform terms and any data access rules for research read and summarised.
                2. A data management note covering what is collected, stored, retained and deleted.
                3. A rule for quoting that prevents posts being searched back to their authors.
                4. Ethics board or data protection review obtained where required.

                ## Notes
                Paraphrasing or lightly altering quotes is a common way to stop them being traced through a search engine. Agree the approach with your ethics reviewer.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written data management and quoting plan exists for the social media study, with ethics or data protection approval recorded where required."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the platform's terms on research use and data collection"
                - "Write what will be collected, stored, retained and deleted"
                - "Decide how quotes will be disguised so they cannot be searched back"
                - "Submit the plan to your ethics board or data protection lead"
            - name: Theme analysis in a spreadsheet without code
              description: |-
                ## Purpose
                Plenty of knowledge workers are handed 500 or 2,000 comments and a deadline, with only a spreadsheet and no data team. A sound manual method still works at that size: a coding column per theme, a filter-driven review, simple counts and a pivot by segment. Done carefully, it produces findings that stand up as well as a model's for that volume.

                ## Milestones
                1. Comments in one sheet with an id, the text and any segment fields.
                2. A short codebook tab and one column per theme with a 1 or blank.
                3. Every comment coded, with a second person checking fifty of them.
                4. A pivot of theme counts by segment and a one-page summary.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "All comments in the sheet are coded against a codebook tab, fifty are second-checked, and a pivot and summary are delivered."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Put every comment in one sheet with an id and segment fields"
                - "Add a codebook tab and a column per theme"
                - "Code every comment and ask a colleague to check fifty"
                - "Build a pivot of theme counts by segment and write the summary"
            - name: Ten thousand comments due by Friday
              description: |-
                ## Purpose
                The classic request arrives on a Monday: a big batch of open-text responses and a leadership meeting at the end of the week. A triage plan that reads a random sample first, builds a lean codebook, codes the sample by hand or with a checked model, and reports shares with honest margins of error delivers a credible answer in days without pretending every comment was read.

                ## Milestones
                1. A random sample of 400 to 600 comments drawn on day one.
                2. A lean codebook of ten to fifteen themes by day two.
                3. The sample coded and checked by day three.
                4. Theme shares reported with sample-based margins of error and a note on method.

                ## Notes
                A random sample of a few hundred, coded carefully, usually beats ten thousand comments coded carelessly. Say clearly in the readout that you sampled.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A theme summary with sample-based margins of error and a method note is delivered within the week the batch arrived."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draw a random sample of 500 comments from the batch"
                - "Build a lean codebook of ten to fifteen themes from the first 100"
                - "Code the rest of the sample and spot-check twenty"
                - "Report theme shares with margins of error and a sampling note"
            - name: Combining interview transcripts with large-scale comment themes
              description: |-
                ## Purpose
                Interviews explain why; thousands of comments say how often. Researchers who code a handful of user interview transcripts with the same codebook as tickets and reviews can show both the scale of a problem and the story behind it. The combination is far more persuasive than either alone, and it exposes themes that are common in interviews but rare in written feedback, or the reverse.

                ## Milestones
                1. Interview transcripts redacted and loaded beside the comment data.
                2. Transcripts coded with the shared codebook, with interview-only codes marked.
                3. Each top theme described with its comment volume and an interview explanation.
                4. Gaps between the two sources written up.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Interview transcripts are coded with the shared codebook, and each top theme is reported with both comment volume and interview evidence."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Redact the interview transcripts and load them beside the comments"
                - "Code the transcripts with the shared codebook"
                - "Pair each top theme's comment volume with an interview explanation"
                - "Write up themes that appear in one source but not the other"
            - name: Analysing public consultation responses
              description: |-
                ## Purpose
                Public bodies, charities and regulators running consultations may receive thousands of written responses and are expected to show that every one was considered. Combining automated grouping with a documented human reading of every response, a clear count of campaign or template submissions and a transparent coding frame gives a summary that withstands scrutiny from respondents and the press.

                ## Milestones
                1. Template and campaign responses identified and counted separately.
                2. A coding frame built from the consultation questions and early responses.
                3. Every response read by a person, with automated grouping used to organise the work.
                4. A published summary that explains the method and counts per theme.

                ## Notes
                Report campaign responses openly as a group rather than dropping them; respondents notice when they disappear.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A consultation summary is published with a method section, separate campaign counts and evidence that every response was read."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Detect identical and near-identical campaign responses and count them"
                - "Build the coding frame from the consultation questions"
                - "Assign responses to readers and track that each one is read"
                - "Write the summary with the method and counts per theme"
            - name: Fine-tuning a domain sentiment model
              description: |-
                ## Purpose
                General sentiment models stumble on domain language: 'cheap' is praise in budget travel and an insult in luxury goods, and 'unstable' means something specific in software. Fine-tuning a pretrained model on a few thousand of your own labelled comments can lift accuracy noticeably, but only if the evaluation set is held out properly and the gain is worth the upkeep.

                ## Milestones
                1. At least 3,000 comments labelled to the sentiment guide.
                2. A held-out test set split by time so the model is judged on future text.
                3. The fine-tuned model compared with the off-the-shelf model on that test set.
                4. A retraining schedule and owner set if the model goes into use.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fine-tuned sentiment model has been compared with an off-the-shelf model on a time-split test set, with a retraining owner named if adopted."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Assemble 3,000 comments labelled to the sentiment guide"
                - "Split a held-out test set by date"
                - "Fine-tune the model and compare it with the off-the-shelf baseline"
                - "Check whether the fine-tuned model needs retraining on recent text @recurring(quarterly)"
            - name: Semantic search across all feedback
              description: |-
                ## Purpose
                Keyword search misses 'the app keeps logging me out' when you search for 'session expired'. Indexing feedback with sentence embeddings lets product managers and researchers search by meaning, find every comment like a given one and pull evidence for a hunch in seconds. It also becomes the quickest way to check whether a new theme already has history.

                ## Milestones
                1. Embeddings computed for all redacted comments and refreshed with new data.
                2. A simple search interface returning the closest comments with source and date.
                3. Search quality checked on twenty test queries against keyword search.
                4. Access limited to people cleared to read redacted customer text.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A semantic search over redacted feedback beats keyword search on at least fourteen of twenty test queries and has controlled access."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Compute sentence embeddings for all redacted comments"
                - "Build a search page that returns the closest comments with source and date"
                - "Write twenty test queries and compare results with keyword search"
                - "Restrict access to people cleared to read customer text"
            - name: Sentiment accuracy across dialects and code-switching
              description: |-
                ## Purpose
                Sentiment models trained mostly on standard American English often misread Caribbean, West African, Indian or Scottish English, Creole and comments that switch languages mid-sentence. Measuring accuracy separately for the language varieties your customers actually use shows whether some groups' complaints are being under-counted. If they are, the fix may be more labelled examples, a different model or a human review rule.

                ## Milestones
                1. The main language varieties in your feedback identified with help from native speakers.
                2. At least 150 labelled comments per variety.
                3. Model accuracy reported per variety beside the overall figure.
                4. A fix chosen for any variety well below the overall accuracy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Sentiment accuracy is reported separately for each main language variety, with a recorded fix for any variety well below the average."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask native-speaker colleagues to help identify the varieties in your feedback"
                - "Label at least 150 comments for each main variety"
                - "Report model accuracy per variety beside the overall figure"
                - "Choose a fix for any variety that scores well below average"
            - name: Error analysis of sarcasm, negation and mixed sentiment
              description: |-
                ## Purpose
                Most sentiment errors cluster in a few patterns: sarcasm ('great, another update that breaks everything'), negation scope ('not bad at all'), contrast clauses and comments describing someone else's experience. Collecting a challenge set of these patterns from your own data and testing every model change against it shows whether accuracy gains are real or only on easy comments.

                ## Milestones
                1. A challenge set of at least 200 comments tagged by error pattern.
                2. Current model accuracy recorded per pattern.
                3. The challenge set run against every candidate model before adoption.
                4. The worst pattern addressed with rules, examples or a model change.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A challenge set of at least 200 tagged hard comments exists and is run on every candidate model, with accuracy per pattern recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect sarcastic, negated and mixed comments from past misclassifications"
                - "Tag each challenge comment by its error pattern"
                - "Record current model accuracy for each pattern"
                - "Add a challenge set run to the model change checklist"
            - name: Change-point detection on theme volumes
              description: |-
                ## Purpose
                Eyeballing weekly charts misses slow shifts and over-reacts to noisy weeks. Applying change-point methods to each theme's normalised volume, with seasonality and release dates marked, flags when a theme's level genuinely moved and when. Paired with release notes, it often pins an issue to the deployment that caused it.

                ## Milestones
                1. Weekly normalised volume series built for the top twenty themes.
                2. A change-point method tested on a year of history.
                3. Detected changes compared with known releases and events.
                4. Confirmed change points added as annotations in the trend report.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Change points detected in a year of theme history are checked against known releases, and confirmed ones annotate the trend report."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build weekly normalised volume series for the top twenty themes"
                - "Run a change-point method on a year of history"
                - "Match detected changes to release notes and known events"
                - "Annotate the trend report with confirmed change points"
            - name: Model card for the text analytics pipeline
              description: |-
                ## Purpose
                People reading a sentiment chart rarely know what model produced it, what data it was tested on or where it is weak. A short model card covering intended use, training and test data, accuracy by theme and language variety, known failure patterns and the redaction step lets readers judge the numbers and gives auditors and new team members one place to start.

                ## Milestones
                1. A model card drafted covering purpose, data, accuracy and limitations.
                2. Accuracy by theme and language variety included from the latest checks.
                3. Known failure patterns and uses to avoid stated plainly.
                4. The card linked from every dashboard that shows model output and updated yearly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model card with accuracy, limitations and uses to avoid is linked from every dashboard showing model output and dated within the last year."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the model card with purpose, data and accuracy sections"
                - "Add accuracy by theme and language variety from the latest checks"
                - "Link the card from every dashboard that shows model output"
                - "Update the model card with the year's accuracy and changes @recurring(yearly)"
---

# Text & Sentiment Analytics

This area is for researchers and knowledge workers who sit on thousands of reviews, support tickets, survey comments and chat logs and need to say what people are actually complaining about, praising and starting to notice. It starts with foundations (a source inventory, the decisions the analysis serves, one clean text table, redaction, a hand-read sample, a codebook and sentiment labels), moves through the routines that keep themes and models honest, the core methods from n-grams to aspect sentiment and language model coding, decisions about vendors, metrics and bias, dated events such as a launch or an outage, situations from a spreadsheet-only analyst to a public consultation, and ends with specialist work on fine-tuning, dialects, sarcasm and change points.

What repeats is a daily scan of the worst new reviews, a weekly readout, emerging-term watch and feed check, monthly codebook upkeep, double coding, accuracy spot-checks and owner follow-ups, a quarterly trend report and redaction audit, and a yearly review of the whole set-up. The Feedback themes, Metrics log, Reading queue, Vendor and Meeting notes templates pair with the codebook, the accuracy log, the reading habit, the platform choice and the readout workshop. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
