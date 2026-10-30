---
id: data-analytics.data-storytelling-visualisation
name: Data Storytelling & Visualisation
description: "Charts people grasp in five seconds and narratives that lead to a decision: audience briefs, a style guide and accessible palette, action titles, honest axes and rehearsed readouts."
category: business
version: 1.0.0
tags: [data-analytics, data-storytelling-visualisation, knowledge-worker, researcher, charts, presentations, narrative, accessibility]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - feedback-themes
    - portfolio-piece
    - reading-queue
    - meeting-notes
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Storytelling & Visualisation
          description: "Turning analysis into clear charts and narratives that lead an audience to the insight and the decision it supports."
          projects:
            - name: Audience and decision brief before any analysis
              description: |-
                ## Purpose
                Before a single chart is drawn, write down who will see the work, what they already believe and which decision it should inform. Analysts who skip this step end up with twenty accurate charts and no point, because the material was organised around the data rather than the question. A half-page brief takes fifteen minutes and decides what to cut later.

                ## Milestones
                1. A brief template with fields for audience, decision, current belief, timing and format.
                2. The brief completed for your current piece of work and shared with the requester.
                3. The requester's confirmation of the decision recorded in the brief.
                4. Every chart in the finished piece traceable to a line in the brief.

                ## Notes
                If the requester cannot name a decision, ask what they would do differently if the number came back high or low. That answer is the decision.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written audience and decision brief exists for your current analysis and the requester has confirmed the decision it supports."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a half-page brief template with audience, decision, belief and deadline fields"
                - "Fill in the brief for the analysis you are working on now"
                - "Send the brief to the requester and ask them to correct it"
                - "Strike any planned chart that does not serve the confirmed decision"
            - name: One-sentence big idea for each piece of work
              description: |-
                ## Purpose
                Audiences remember one thing from a presentation, so it is worth choosing that thing deliberately. Writing the main message as a single complete sentence, with a subject, a verb and a so-what, forces you to commit to a point of view before you open the slide software. If the sentence will not come, the analysis is not finished yet.

                ## Milestones
                1. A big idea sentence of 25 words or fewer written for the current analysis.
                2. The sentence states a finding and what it means, not just a topic.
                3. A colleague able to repeat the sentence back after hearing it once.
                4. The sentence used as the opening slide title or the first line of the memo.

                ## Notes
                A topic is not a big idea. 'Q3 churn' is a topic; 'Churn rose in Q3 because annual plans renewed at the new price, so renewals need a retention offer' is a big idea.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The current analysis has a big idea sentence of 25 words or fewer that a colleague can repeat back unprompted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the main message of your current analysis as one sentence"
                - "Cut the sentence to 25 words or fewer without losing the so-what"
                - "Say the sentence to a colleague and ask them to repeat it back"
                - "Put the sentence at the top of the deck or memo"
            - name: Personal chart style guide
              description: |-
                ## Purpose
                Charts made on different days in different tools drift apart in font, colour and label style, and an audience reads that inconsistency as carelessness. A two-page style guide covering fonts, sizes, gridlines, label placement, number formats and when to use each colour makes every chart look like it came from the same careful hand. It also halves the time spent fiddling with formatting.

                ## Milestones
                1. Fonts and sizes fixed for titles, subtitles, axis labels, annotations and source lines.
                2. Rules written for gridlines, axis lines, legends and direct labels.
                3. Number, date and currency formats defined, including rounding.
                4. Three example charts rebuilt to the guide and pinned to its first page.

                ## Notes
                Keep it short enough to follow. A guide nobody opens is worse than five rules on a sticky note.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A style guide of two pages or fewer covers fonts, gridlines, labels and number formats, with three example charts built to it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect five recent charts you made and note every inconsistency"
                - "Write rules for fonts, gridlines, legends and number formats"
                - "Rebuild three of the charts to the new rules"
                - "Check the guide against your latest charts and update it @recurring(quarterly)"
            - name: Accessible colour palette for charts
              description: |-
                ## Purpose
                Roughly one man in twelve has some form of colour vision deficiency, and red against green is the pairing most often lost. Choosing a palette once, with a categorical set, a sequential ramp, a diverging ramp and one highlight colour, all checked in a colour blindness simulator and for contrast, means you stop picking colours under deadline. Grey becomes your default and colour becomes a signal.

                ## Milestones
                1. A categorical set of no more than six colours that stay distinct under common colour vision simulations.
                2. A sequential ramp and a diverging ramp with a neutral midpoint.
                3. One highlight colour and one neutral grey chosen for emphasis and context.
                4. Colour values stored in your charting tool as a theme or saved palette.
                5. Contrast against the background checked for every text colour.

                ## Notes
                Do not rely on colour alone to carry meaning. Pair it with direct labels, position or pattern so the chart still works printed in greyscale.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved palette with categorical, sequential, diverging and highlight colours, each checked in a colour blindness simulator, is loaded in your main charting tool."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Start from a published colour-blind-safe palette rather than inventing one"
                - "Run your candidate colours through a colour blindness simulator"
                - "Check text and line colours against the background for contrast"
                - "Save the palette as a theme in your main charting tool"
                - "Recheck the palette after any change to brand or house colours @recurring(yearly)"
            - name: Choosing a main charting tool
              description: |-
                ## Purpose
                Switching between a spreadsheet, a BI tool, slide software and a code library for every chart produces uneven work and slows you down. Picking one main tool for explanatory charts, based on the formats you deliver, who edits your files and what your organisation licenses, lets you build templates and skill in one place. The others stay for the jobs they suit.

                ## Milestones
                1. The last twenty charts you delivered listed by format and destination.
                2. Three candidate tools scored on output quality, editing speed, sharing and cost.
                3. One tool chosen for explanatory charts, with the reason written down.
                4. A list of the jobs each other tool still handles.

                ## Notes
                Start from the **Purchase decision** template. The best tool is often the one your colleagues can open and edit, not the most capable one.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names one main tool for explanatory charts, scored against at least two alternatives on the same criteria."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last twenty charts you delivered and where each ended up"
                - "Shortlist three tools that can produce those formats"
                - "Rebuild one typical chart in each shortlisted tool and time it"
                - "Record the chosen tool and the reason in your decision note"
            - name: Reusable chart templates in your main tool
              description: |-
                ## Purpose
                Once the style guide and palette exist, building them into saved templates is what makes them effortless. A small set of ready-styled starting files for a bar chart, a line chart, a slope chart and an annotated scatter means the first draft of any chart already looks finished, and you spend your time on the message instead of the margins.

                ## Milestones
                1. Template files saved for bar, line, slope and scatter charts with your fonts and palette applied.
                2. Each template including a placeholder action title, subtitle and source line.
                3. Templates stored in a shared folder with a one-line note on when to use each.
                4. One real chart built from each template to prove it works.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four styled chart templates with title, subtitle and source placeholders are saved in a shared folder and each has been used for a real chart."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build a styled bar chart template with title, subtitle and source placeholders"
                - "Create matching line, slope and scatter templates"
                - "Save the templates in a shared folder with usage notes"
                - "Use each template for a real chart and fix what gets in the way"
                - "Retire templates you have not opened in a year @recurring(yearly)"
            - name: Audit of your last five data presentations
              description: |-
                ## Purpose
                Your own recent work is the most honest baseline you have. Scoring the last five decks, memos or reports against a short checklist, whether each had a stated message, action titles, a clear ask and charts readable in five seconds, shows which habits to fix first. Most people find two or three faults that repeat across everything.

                ## Milestones
                1. Five recent presentations or reports gathered in one folder.
                2. Each scored against a checklist of eight questions.
                3. The three most frequent faults named and ranked.
                4. One fix chosen for each fault and applied to your next piece of work.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five past presentations are scored against the same eight-point checklist and the three most frequent faults are written down with a fix for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather your last five decks, memos or reports in one folder"
                - "Write an eight-question checklist covering message, titles, chart clarity and the ask"
                - "Score each piece and tally the faults"
                - "Ask the agent to summarise the repeating faults into three priorities"
                - "Repeat the audit on your five most recent pieces @recurring(yearly)"
            - name: Chart choice cheat sheet by question type
              description: |-
                ## Purpose
                Most chart mistakes start with the wrong chart type for the question being asked. A one-page sheet that maps common questions (change over time, ranking, part to whole, distribution, relationship and deviation from a target) to two or three suitable chart types, with a note on what to avoid, settles the choice in seconds. Keep it beside your desk.

                ## Milestones
                1. Six to eight question types listed with two or three chart options each.
                2. A short avoid note for each question type.
                3. A small example chart sketched beside each option.
                4. The sheet tested on three live analyses and corrected where it failed.

                ## Notes
                Published chart choosers from statistics offices and newsrooms are a good starting point. Adapt one to the charts your audiences actually see.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page chart chooser covering at least six question types, each with recommended and avoided chart types, has been used on three real analyses."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the questions your audiences most often bring to you"
                - "Map each question to two or three suitable chart types"
                - "Note the chart type to avoid for each question and why"
                - "Test the sheet on your next three charts and fix any gaps"
                - "Revise the cheat sheet with chart types you have started using @recurring(yearly)"
            - name: Source, date and caveat footnote standard
              description: |-
                ## Purpose
                Any chart forwarded without its source, date range or definitions is the start of an argument three meetings later. Setting a standard footer for every chart, naming the data source, the period, the definition of the metric and any important caveat, makes your work stand on its own when it is pasted into someone else's deck. It also protects you when the numbers are questioned.

                ## Milestones
                1. A footer format fixed with source, period, metric definition and caveat.
                2. The footer added to your chart templates.
                3. Rules written for when a caveat must move from the footer into the subtitle.
                4. Every chart in your next deliverable carrying the footer.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every chart in your next deliverable carries a footer naming source, period and metric definition, and the footer is built into your templates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line footer format with source, period and definition"
                - "Add the footer to every chart template you use"
                - "Decide which caveats are serious enough to go in the subtitle"
                - "Check the footers on your next deliverable before it is sent"
            - name: Weekly makeover of one existing chart
              description: |-
                ## Purpose
                Skill in visualisation comes from repetition, and the cheapest raw material is a chart that already exists. Taking one chart a week, from your own archive, a colleague's report or a newspaper, and redrawing it to make its point clearer builds judgement far faster than reading about it. Thirty minutes is enough.

                ## Milestones
                1. A folder for before and after pairs, each with a two-line note on what changed.
                2. Twelve makeovers completed over a quarter.
                3. A list of the five changes you make most often.
                4. At least two makeovers shared with a colleague or community for comment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twelve before and after chart pairs, each with a note on what changed, are saved in one folder within a quarter."
                cadence: rolling
              tasks:
                - "Create a folder for before and after chart pairs"
                - "Pick one existing chart and redraw it to make its point clearer @recurring(weekly:fri)"
                - "Write two lines on what you changed and why"
                - "List the changes you make most often after twelve makeovers"
            - name: Swipe file of charts worth copying
              description: |-
                ## Purpose
                Good ideas for layouts, annotations and colour use turn up in newsrooms, statistics offices and research papers every week, and are forgotten by the time you need them. Keeping a tagged swipe file, with a screenshot, the source and one line on what makes each chart work, gives you somewhere to look when a blank canvas stares back.

                ## Milestones
                1. A swipe file set up with tags for chart type, technique and subject.
                2. Thirty saved examples, each with source and a one-line note.
                3. Three techniques from the file used in your own work.
                4. Weak or dated examples removed during a periodic tidy.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tagged swipe file holds at least thirty chart examples with sources and notes, and three techniques from it appear in your own work."
                cadence: rolling
              tasks:
                - "Set up a swipe file with tags for chart type and technique"
                - "Save three charts you admired this month with a note on why @recurring(monthly:9)"
                - "Try one saved technique in your next piece of work"
                - "Prune examples that no longer teach you anything @recurring(yearly)"
            - name: Peer review checklist before a deck goes out
              description: |-
                ## Purpose
                Errors that a second pair of eyes catches in five minutes, a wrong axis label, a percentage that does not add up, a chart that contradicts the text, cost far more once a leadership team has seen them. A short checklist and a standing arrangement with one colleague to review each other's work before it ships turns review into a routine rather than a favour.

                ## Milestones
                1. A checklist of no more than twelve items covering numbers, labels, message and caveats.
                2. A review partner agreed, with a turnaround of one working day.
                3. Every external or leadership deliverable reviewed before sending.
                4. A running list of what reviews caught, used to update the checklist.

                ## Notes
                Start from the **Operational checklist** template. Ask the reviewer to state the main message back to you before they look at details; if they cannot, fix that first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every leadership or external deliverable for a quarter is checked against a written checklist by a named reviewer before it is sent."
                cadence: rolling
              tasks:
                - "Write a review checklist of no more than twelve items"
                - "Agree a one-day review swap with a colleague"
                - "Log what each review caught in a shared note"
                - "Update the checklist from the review log @recurring(quarterly)"
            - name: Feedback log after every presentation
              description: |-
                ## Purpose
                Presenters rarely learn what landed, because audiences are polite and meetings end abruptly. Asking two people after each presentation what they took away, and comparing it with the message you intended, is the most direct test of whether your storytelling works. Patterns appear within a few months.

                ## Milestones
                1. A log with columns for date, audience, intended message, actual takeaways and the decision made.
                2. Two takeaways recorded after each presentation.
                3. A monthly read of the log with recurring gaps noted.
                4. One change to your approach made from each monthly read.

                ## Notes
                Start from the **Feedback themes** template. Ask what they will do differently after the session rather than whether it was clear, which almost always gets a yes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A feedback log holds intended message and actual takeaways for at least six presentations, with one change made from each monthly review."
                cadence: rolling
              tasks:
                - "Set up a log comparing intended message with audience takeaways"
                - "Ask two attendees what they took away within a day of presenting"
                - "Read the log for repeating gaps and pick one change @recurring(monthly:18)"
                - "Note the decision each presentation led to, if any"
            - name: Portfolio of your best ten charts
              description: |-
                ## Purpose
                Knowledge workers and researchers are increasingly judged on how well they communicate, but good charts disappear into decks that nobody revisits. A portfolio of ten pieces, each with the question, the audience, the before version and what happened next, gives you material for appraisals, job applications and teaching. Updating it each quarter keeps it honest.

                ## Milestones
                1. Ten charts or short stories selected, with confidential data removed or replaced.
                2. Each piece written up with question, audience, design choices and outcome.
                3. The portfolio stored somewhere you can share as a link or a file.
                4. Weaker pieces swapped out as better work arrives.

                ## Notes
                Start from the **Portfolio piece** template. Check your employer's rules on sharing work outside the organisation, and recreate charts with public or synthetic data when in doubt.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A portfolio of ten write-ups, each with question, audience, design choices and outcome, is shareable and was updated within the last quarter."
                cadence: rolling
              tasks:
                - "Pick ten charts you are proud of from the past two years"
                - "Replace confidential data with public or synthetic figures"
                - "Write up each piece from the portfolio piece template"
                - "Swap in a stronger recent piece if you have one @recurring(quarterly)"
            - name: Insight log of findings and the decisions they drove
              description: |-
                ## Purpose
                Storytelling is judged by what happens afterwards, yet few analysts record whether their finding changed anything. Logging each significant insight, the audience, the recommended action and the decision taken, then checking back after a month, shows which kinds of story move people and gives you evidence of impact at review time.

                ## Milestones
                1. An insight log with columns for finding, audience, recommendation, decision and follow-up date.
                2. Every significant finding of the quarter entered.
                3. Each entry revisited a month later and the outcome recorded.
                4. A short note on which story formats led to action most often.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An insight log records at least eight findings with their recommended actions and the outcomes checked a month later."
                cadence: rolling
              tasks:
                - "Create an insight log with finding, recommendation and decision columns"
                - "Add each significant finding on the day you present it"
                - "Check back on last month's entries and record what happened @recurring(monthly:24)"
                - "Write a short note on which formats led to action"
            - name: Five-second test before sending any chart
              description: |-
                ## Purpose
                Busy readers give a chart about five seconds before deciding whether to engage. Showing each headline chart to someone unfamiliar with it for five seconds, then asking what it says, catches unclear titles, missing labels and buried points before they reach the real audience. It is the quickest quality check in this area.

                ## Milestones
                1. A habit of testing each headline chart on one person before it is sent.
                2. A record of charts that failed and what changed.
                3. The failure rate falling across a month of tests.
                4. The test added to your peer review checklist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For one month every headline chart is shown to an unfamiliar viewer for five seconds, with failures and fixes recorded."
                cadence: rolling
              tasks:
                - "Run the five-second test on the week's headline chart @recurring(weekly:wed)"
                - "Ask the viewer what the chart says and write down their answer"
                - "Fix the title or emphasis wherever their answer missed the point"
                - "Keep a tally of passes and failures for a month"
            - name: Monthly written commentary for a recurring report
              description: |-
                ## Purpose
                Recurring reports often arrive as charts with no words, leaving every reader to guess what changed and whether it matters. Writing three to five sentences of commentary each month, what moved, why, and what if anything should be done, turns a report people skim into one they read and quote. It also forces the analyst to understand the numbers before sending them.

                ## Milestones
                1. A commentary format of three to five sentences agreed with the report's main reader.
                2. Commentary written for each monthly edition, leading with the biggest change.
                3. Explanations checked with the team that owns each number before publishing.
                4. Readers' questions tracked and answered in the next edition.

                ## Notes
                Separate what the data shows from what you think caused it, and say how confident you are in the cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each monthly edition of the report for three months opens with three to five sentences of commentary checked with the owning teams."
                cadence: rolling
              tasks:
                - "Agree a three to five sentence commentary format with the main reader"
                - "Draft the commentary leading with the biggest change @recurring(monthly:5)"
                - "Check each explanation with the team that owns the number"
                - "Answer last edition's reader questions in the opening lines"
            - name: Reading and practice queue for visualisation
              description: |-
                ## Purpose
                The field has a small canon of excellent books, newsroom style guides and research on how people read charts, and most practitioners have read a fraction of it. A queue of books, papers and tutorials, worked through at one item a month with a practice exercise for each, builds knowledge steadily without a formal course.

                ## Milestones
                1. A queue of twelve books, guides or papers ordered by usefulness.
                2. One item finished each month with a one-paragraph summary.
                3. A practice exercise completed for each item.
                4. The queue refreshed with new titles as you go.

                ## Notes
                Start from the **Reading queue** template. Include at least one newsroom chart style guide; many are published openly and are full of practical rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve books, guides or papers are queued and at least six have been finished with a summary and a practice exercise each."
                cadence: rolling
              tasks:
                - "List twelve books, style guides or papers on charts and narrative"
                - "Finish one item and write a paragraph on what you will use @recurring(monthly:14)"
                - "Do a small practice exercise based on each item"
                - "Add new titles to the queue when colleagues recommend them"
            - name: Pre-attentive attributes and visual hierarchy
              description: |-
                ## Purpose
                Position, length, colour intensity, size and enclosure are noticed before conscious reading begins, which is why one dark bar among grey ones draws the eye instantly. Learning how these attributes rank for accuracy and attention lets you decide what the audience sees first, second and not at all. It is the theory behind every good highlight.

                ## Milestones
                1. The main pre-attentive attributes listed with an example of each.
                2. A ranking of encodings by how accurately people compare values, noted with its source.
                3. Three of your charts redrawn so the eye lands on the point first.
                4. A short explanation you could give a colleague in two minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three existing charts are redrawn so a viewer's eye lands first on the key point, with notes on which attribute was used."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a short introduction to pre-attentive attributes and graphical perception"
                - "Sketch one example of each attribute on paper"
                - "Redraw three of your charts so the key element stands out first"
                - "Explain the idea to a colleague using one of your redrawn charts"
            - name: Decluttering a chart step by step
              description: |-
                ## Purpose
                Default chart settings add borders, heavy gridlines, legends, tick marks and decimal places that compete with the data. Practising a fixed decluttering sequence, removing one element at a time and keeping only what helps the reader, trains the eye to spot noise and produces cleaner charts in minutes.

                ## Milestones
                1. A written decluttering sequence of eight to ten steps.
                2. Five charts taken through the sequence with a screenshot at each stage.
                3. Legends replaced by direct labels wherever the series count allows.
                4. The sequence folded into your style guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five charts are decluttered using a written sequence, with before and after versions saved and legends replaced by direct labels where possible."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write an eight to ten step decluttering sequence"
                - "Take one default chart through the sequence and screenshot each step"
                - "Repeat the sequence on four more charts from recent work"
                - "Add the sequence to your chart style guide"
            - name: Writing action titles that state the finding
              description: |-
                ## Purpose
                Titles like 'Revenue by region' make the reader do the analysis; titles like 'The north grew twice as fast as any other region' tell them what to see. Rewriting every chart and slide title as a full-sentence finding is the single change that most improves an analytical deck, and it exposes slides that have no point.

                ## Milestones
                1. Ten existing titles rewritten as full-sentence findings of under fifteen words.
                2. Slides whose title cannot be made into a finding cut or merged.
                3. A deck's titles read in sequence and found to tell the whole story alone.
                4. Subtitles used for the metric, unit and period.

                ## Notes
                Read only the titles of a finished deck, top to bottom. If they do not tell the story on their own, the deck is not ready.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full deck is produced in which every slide title is a sentence stating a finding, and the titles alone tell the story in order."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Rewrite ten topic titles from old decks as full-sentence findings"
                - "Cut or merge any slide whose title cannot state a finding"
                - "Read the titles of your next deck in order as a standalone story"
                - "Move units, periods and metric names into the subtitle"
            - name: Annotation and callout techniques
              description: |-
                ## Purpose
                Annotation is where a chart becomes a story: a label on the spike explaining the outage, a shaded band for the campaign weeks, a reference line at the target. Learning a handful of annotation patterns, and when each helps or clutters, lets you guide the reader through a chart instead of leaving them to find the point themselves.

                ## Milestones
                1. Six annotation patterns practised: text labels, reference lines, shaded periods, highlighted points, arrows and inline legends.
                2. A rule written on how many annotations a single chart can carry.
                3. Two charts rebuilt with annotations that explain the key movement.
                4. Annotation styles added to your templates.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two published charts carry annotations explaining their key movements, and six annotation patterns are documented with examples."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect examples of six annotation patterns from your swipe file"
                - "Rebuild one line chart with a reference line and an explanatory label"
                - "Add a shaded period and a highlighted point to a second chart"
                - "Write a rule for the maximum annotations per chart"
            - name: Showing uncertainty honestly in charts
              description: |-
                ## Purpose
                Estimates, forecasts and survey results all carry uncertainty, and charts that show a single crisp line invite the audience to treat it as fact. Learning to show ranges, intervals, fan charts and sample sizes in ways non-specialists understand protects both your credibility and the decisions made from your work. Researchers will know the statistics; the skill here is showing it.

                ## Milestones
                1. Four displays practised: error bars, shaded intervals, fan charts and dot plots of possible outcomes.
                2. Plain-language wording written for what an interval means.
                3. One real chart rebuilt to show its uncertainty and tested on a non-specialist.
                4. A rule for when uncertainty must appear in the headline chart.

                ## Notes
                Interval calculations belong to the analysis itself; this project is about display. Check that the interval shown matches what the analysis actually produced.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real chart shows its uncertainty with an interval or range and a non-specialist can correctly explain what the range means."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find three published charts that show uncertainty well"
                - "Practise error bars, shaded intervals and a fan chart on sample data"
                - "Write one plain-language sentence explaining an interval"
                - "Test a rebuilt chart on a non-specialist and note what they misread"
            - name: Narrative structures for data presentations
              description: |-
                ## Purpose
                Data presentations fail most often from structure, not charts: forty slides in the order the analysis was done, with the conclusion at the end. Learning two or three proven structures, such as situation, complication and resolution, or answer first followed by supporting points, gives you a shape to pour any analysis into and puts the recommendation where busy people will hear it.

                ## Milestones
                1. Three narrative structures summarised with when to use each.
                2. A storyboard on sticky notes or a slide outline made for the current analysis before any chart is built.
                3. The recommendation placed in the first two minutes of the presentation.
                4. An appendix holding the method and supporting detail.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A presentation is delivered from a storyboard built on a named structure, with the recommendation stated in its first two minutes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise three narrative structures on one page"
                - "Storyboard your current analysis on sticky notes before opening slides"
                - "Move the recommendation into the first two minutes"
                - "Push method and detail into an appendix"
            - name: Small multiples and comparison layouts
              description: |-
                ## Purpose
                Ten lines on one chart become spaghetti, but the same ten series as a grid of small charts on shared axes let the eye compare shapes at a glance. Learning when to use small multiples, slope charts, dumbbell charts and aligned bars gives you options for the many comparisons that a single busy chart handles badly.

                ## Milestones
                1. One spaghetti chart rebuilt as small multiples with shared axes.
                2. A slope chart and a dumbbell chart built for before and after comparisons.
                3. A note on when shared versus independent axes are appropriate.
                4. One comparison layout used in live work.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cluttered multi-series chart is rebuilt as small multiples on shared axes, and slope and dumbbell versions of a comparison are saved as examples."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a chart in your archive with more than five overlapping lines"
                - "Rebuild it as small multiples on shared axes"
                - "Build a slope chart and a dumbbell chart for one before and after comparison"
                - "Use one of the layouts in your next deliverable"
            - name: Writing the executive summary memo
              description: |-
                ## Purpose
                Many decisions are made from a page of text read on a phone between meetings, not from the deck. Learning to write a one-page memo that leads with the answer, gives three supporting points each with one number, states the risks and ends with the specific ask makes your analysis usable by people who will never open the attachment.

                ## Milestones
                1. A one-page memo format with answer, support, risks and ask.
                2. Two past analyses rewritten in the format.
                3. One memo sent ahead of a meeting in place of a deck.
                4. Reader feedback on what they used from it recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An executive summary memo of one page, leading with the answer and ending with a specific ask, is sent for a real decision."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page memo template with answer, support, risks and ask"
                - "Rewrite two past analyses in the memo format"
                - "Ask the agent to cut a draft memo to under 300 words without losing the ask"
                - "Send one memo ahead of a meeting instead of a deck"
            - name: Practising the spoken walk-through of a chart
              description: |-
                ## Purpose
                Putting a chart on screen and saying 'as you can see' leaves most of the room behind. A short, practised routine (say what the chart shows, how to read the axes, where to look and what it means) keeps everyone with you and is easy to rehearse aloud. Recording yourself once is uncomfortable and very effective.

                ## Milestones
                1. A four-step walk-through routine written down.
                2. Three charts walked through aloud and recorded.
                3. Filler phrases and rushed sections noted from the recordings.
                4. The routine used in a live presentation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recorded chart walk-throughs follow a four-step routine, and the routine is used in a live presentation."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a four-step routine for introducing a chart aloud"
                - "Record yourself walking through three charts"
                - "Note filler phrases and rushed moments from the recordings"
                - "Use the routine in your next live presentation"
            - name: Replacing pie and 3D charts in a standing report
              description: |-
                ## Purpose
                Standing reports collect pie charts with nine slices, 3D bars and stacked areas that nobody can read, and they persist because changing a familiar report feels risky. Replacing them one by one with sorted bars, line charts or simple tables, and showing readers the before and after, improves comprehension with little effort and builds trust for bigger changes.

                ## Milestones
                1. Every hard-to-read chart in one standing report listed with the question it answers.
                2. A replacement chart designed for each.
                3. Report readers shown the before and after and their objections noted.
                4. The revised report published and the old layout retired.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A standing report is republished with every pie, 3D or unreadable chart replaced, after its readers have seen the before and after."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every hard-to-read chart in one standing report"
                - "Design a sorted bar, line or table replacement for each"
                - "Show the before and after to three regular readers"
                - "Publish the revised report and retire the old layout"
            - name: Cutting a forty-slide deck to ten slides and an appendix
              description: |-
                ## Purpose
                Long decks are usually the analysis in the order it was done, not the argument. Taking one bloated deck and cutting it to ten slides, with the rest moved to an appendix, teaches more about editing than any course and usually produces a shorter, better meeting.

                ## Milestones
                1. The deck's big idea and decision restated in a sentence.
                2. Each slide tagged essential, appendix or cut.
                3. A main section of ten slides or fewer with action titles.
                4. An appendix holding the supporting detail in a logical order.
                5. The shorter deck presented and the meeting length compared with the old one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One long deck is reissued with a main section of ten slides or fewer and the remainder in an appendix, and presented to its audience."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick your longest recent deck and restate its big idea in one sentence"
                - "Tag every slide essential, appendix or cut"
                - "Rebuild the essential slides with action titles"
                - "Present the shorter version and note how the meeting went"
            - name: Choosing between static, interactive and animated formats
              description: |-
                ## Purpose
                Interactive charts are expensive to build and often unused; animation can explain change beautifully or simply distract. Deciding format by audience and setting, whether a printed board pack, a live talk, a self-serve link or a social post, saves days of build time on features nobody touches. The default should be static unless exploration is the point.

                ## Milestones
                1. Your main delivery settings listed with how the audience consumes each.
                2. A rule written for when interactivity or animation earns its cost.
                3. One planned interactive piece rescoped against the rule.
                4. The rule shared with anyone who commissions charts from you.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written format rule names when static, interactive or animated charts are used, and one planned piece has been scoped against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the settings where your charts are seen and how people view them"
                - "Write a rule for when interactivity or animation is worth building"
                - "Rescope one planned piece against the rule"
                - "Share the rule with the people who commission your charts"
            - name: Deciding when a table beats a chart
              description: |-
                ## Purpose
                Readers who need to look up exact values, or compare many measures for a few items, are better served by a well-designed table than a chart. Learning the cases where a table wins, and how to format one with aligned numbers, sensible rounding, light rules and highlighted cells, removes a lot of unnecessary charts from your work.

                ## Milestones
                1. A short list of situations where a table should replace a chart.
                2. Table formatting rules added to your style guide.
                3. Two charts in recent work replaced with clearer tables.
                4. One heavy table converted into a chart where the pattern mattered more than the values.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Table formatting rules are in your style guide and two recent charts have been replaced by tables, or the reverse, with reasons noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the situations where a table serves readers better"
                - "Add table rules for alignment, rounding and highlighting to your style guide"
                - "Replace two charts in recent work with formatted tables"
                - "Convert one dense table into a chart where the pattern matters most"
            - name: Zero baselines, log scales and dual-axis decisions
              description: |-
                ## Purpose
                Axis choices change what a chart appears to say. A bar chart that does not start at zero exaggerates differences, a linear scale hides the early phase of exponential growth, and two y-axes let the author make any two lines appear to move together. Writing your rules for these choices, and the exceptions, makes the decision once instead of every time.

                ## Milestones
                1. Rules written for baselines on bar, line and dot charts.
                2. A rule for when a log scale helps and how to label it for lay readers.
                3. A policy on dual axes with alternatives such as indexed lines or paired charts.
                4. Your last ten charts checked against the rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written axis rules covering baselines, log scales and dual axes are in your style guide and the last ten charts comply."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a baseline rule for bar, line and dot charts"
                - "Decide when you will use a log scale and how you will label it"
                - "Replace one dual-axis chart with an indexed or paired version"
                - "Check your last ten charts against the new rules"
            - name: Alt text and accessibility pass on published charts
              description: |-
                ## Purpose
                Screen reader users, people on small screens and anyone printing in greyscale all meet your charts in ways you did not design for. An accessibility pass (alt text stating the key finding, enough contrast, no meaning carried by colour alone, readable font sizes and a data table on request) opens your work to everyone and is often an expectation for public documents.

                ## Milestones
                1. An accessibility checklist for charts written from a published guideline.
                2. Alt text written for every chart in one published document, stating the finding rather than the chart type.
                3. Colour-only encodings replaced with labels or patterns.
                4. Underlying data tables offered alongside public charts.

                ## Notes
                Good alt text says what the chart shows, not what it looks like. 'Bar chart of sales' is weak; 'Sales in the east fell by a third in March, the only region to decline' is useful.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One published document has alt text stating the finding for every chart, no colour-only encodings and data tables available."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a chart accessibility checklist from a published accessibility guideline"
                - "Draft finding-led alt text for every chart in one published document"
                - "Replace any colour-only encodings with labels or patterns"
                - "Attach or link the underlying data tables"
                - "Check alt text on charts published since the last check @recurring(monthly:20)"
            - name: Honesty audit of your own charts
              description: |-
                ## Purpose
                Nobody sets out to mislead, but truncated axes, cherry-picked date ranges, cumulative totals that can only rise and percentages without base numbers creep into everyday work. Auditing your own recent charts against a list of common distortions, and fixing what you find, protects your reputation more than any design skill.

                ## Milestones
                1. A checklist of ten common chart distortions.
                2. Twenty recent charts checked against it.
                3. Every misleading chart corrected or annotated, including any already shared.
                4. The distortion checklist added to peer review.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twenty recent charts are checked against a ten-point distortion list and every problem found is corrected or annotated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a list of ten common ways charts mislead"
                - "Check twenty of your recent charts against the list"
                - "Correct or annotate every chart that fails, including shared ones"
                - "Re-run the distortion check on a sample of new charts @recurring(quarterly)"
            - name: Leadership readout of a key finding
              description: |-
                ## Purpose
                Leadership teams usually give a finding ten minutes and one chance. Preparing it as a dated event, with a pre-read sent two days ahead, three to five slides that carry the argument, a rehearsed walk-through, anticipated questions and a specific ask, makes it far more likely the meeting ends in a decision rather than a request for more analysis.

                ## Milestones
                1. A pre-read of one page sent two working days ahead.
                2. A main section of three to five slides with action titles and a final ask.
                3. Two rehearsals done, one with a colleague playing the toughest attendee.
                4. Ten likely questions listed with prepared answers or backup slides.
                5. The decision taken and next steps recorded within a day.

                ## Notes
                Start from the **Meeting notes** template for the decision record. Ask for the decision explicitly in the last two minutes; leaders rarely volunteer one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The readout is delivered with a pre-read sent two days ahead and the decision taken is recorded within one working day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the date, attendees and time slot for the readout"
                - "Send a one-page pre-read two working days before"
                - "Rehearse twice, once with a colleague playing the toughest attendee"
                - "List ten likely questions and prepare an answer or backup slide for each"
                - "Record the decision and next steps the same day"
            - name: Conference talk built around data
              description: |-
                ## Purpose
                Conference audiences are tired, distracted and watching from far away, so charts that work on a laptop fail on a projector. Preparing a talk as a dated project, with a submitted abstract, a storyboard, slides with large type and one idea each, and timed rehearsals, turns a piece of research or analysis into twenty memorable minutes.

                ## Milestones
                1. An abstract submitted and accepted.
                2. A storyboard with no more than one idea per slide.
                3. Slides checked from the back of a room or at reduced size.
                4. Three timed rehearsals finishing within the slot.
                5. Slides and a short data note shared with attendees afterwards.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A talk is delivered within its time slot, using slides checked for legibility at distance, after three timed rehearsals."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Shortlist two conferences or meetups and note their submission dates"
                - "Draft a 200-word abstract stating the finding, not just the topic"
                - "Check every slide at a quarter of its size for legibility"
                - "Run three timed rehearsals and cut until you finish early"
            - name: Charts for an annual or impact report
              description: |-
                ## Purpose
                Annual and impact reports are read by funders, boards and the public, often in print and often skimmed. Planning the charts as a set, a small number of headline figures, a consistent style, honest comparisons with last year and clear sources, gives the report credibility and saves the design scramble in the final fortnight.

                ## Milestones
                1. The report's headline messages agreed with the editor or communications lead.
                2. A chart list with one chart per message and its data source.
                3. Every chart built in the agreed style with sources and alt text.
                4. Figures checked against the source data by a second person.
                5. Final files delivered in the formats the designer needs.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every chart in the report is checked against source data by a second person and delivered in the designer's required formats by the agreed date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the headline messages and chart count with the report editor"
                - "Draft a chart list with one chart per message and its source"
                - "Ask a second person to check every figure against the source data"
                - "Deliver final files in the formats the designer needs"
            - name: Figures for a research paper submission
              description: |-
                ## Purpose
                Journals and preprint servers have specific figure requirements for size, resolution, fonts, colour and file format, and reviewers often judge a paper's care by its figures. Planning the figures early, scripting them so they can be regenerated after revisions and checking them against the author guidelines saves a painful round of resubmission.

                ## Milestones
                1. Author guidelines for figures noted: size, resolution, formats and colour rules.
                2. Each figure mapped to the claim in the paper it supports.
                3. Figures generated from scripts that can be rerun after revisions.
                4. Captions written to be understood without the main text.
                5. Final figures checked at print size and in greyscale.

                ## Notes
                Keep the code that produces each figure alongside the data it reads. Reviewers' requests nearly always mean regenerating figures, sometimes months later.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All figures meet the target journal's guidelines, regenerate from scripts and have captions that stand alone, before submission."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Note the target journal's figure size, resolution and format rules"
                - "Map each figure to the claim in the paper it supports"
                - "Write captions for every figure that make sense without the main text"
                - "Check every figure at print size and in greyscale"
            - name: Research poster for a conference session
              description: |-
                ## Purpose
                Posters are read in under a minute by people walking past, then discussed at length with the few who stop. Designing one around a single headline finding, a large central figure and minimal text, with a two-minute spoken version ready, is a different skill from writing the paper and pays off in conversations and contacts.

                ## Milestones
                1. The poster's headline finding written as a title of under fifteen words.
                2. A layout with one dominant figure and no more than 300 words of text.
                3. A full-size or proportional print checked from two metres away.
                4. A two-minute explanation rehearsed.
                5. A handout or link with the paper and contact details.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A poster with a finding-led title, one dominant figure and under 300 words is presented, with a rehearsed two-minute explanation."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check the session's poster size and printing deadline"
                - "Write the headline finding as a title under fifteen words"
                - "Print a proportional draft and read it from two metres away"
                - "Rehearse a two-minute explanation for visitors"
            - name: Entry for a community visualisation challenge
              description: |-
                ## Purpose
                Open community challenges, where everyone visualises the same public dataset in a week, are a low-stakes way to try new techniques and see how dozens of others solved the same problem. Entering one gives you a portfolio piece, honest feedback and a fixed deadline that forces you to finish.

                ## Milestones
                1. A challenge chosen and its dataset and deadline noted.
                2. One entry completed and submitted by the deadline.
                3. At least ten other entries reviewed for techniques worth borrowing.
                4. Feedback received and one lesson written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One entry is submitted to a public visualisation challenge by its deadline and at least ten other entries are reviewed for lessons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a current community challenge and note its dataset and deadline"
                - "Sketch three approaches on paper before building any chart"
                - "Submit your entry before the deadline"
                - "Review ten other entries and note two techniques to borrow"
            - name: Researcher presenting findings to non-specialists
              description: |-
                ## Purpose
                Researchers trained to present methods first, caveats throughout and conclusions last often lose a policy, business or public audience in the first five minutes. Reworking one study for a lay audience, leading with why it matters, replacing jargon, showing one or two simple charts and keeping limitations honest but brief, builds a skill most research careers now require.

                ## Milestones
                1. One study's key finding written in plain language of under 50 words.
                2. Technical terms listed with plain alternatives.
                3. One or two simple charts replacing the paper's technical figures.
                4. Limitations stated in two honest sentences.
                5. The talk or article tested on someone outside the field.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A plain-language version of one study, with no more than two simple charts, is tested on a non-specialist who can restate the finding correctly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the study's main finding in under 50 plain words"
                - "List the jargon in your current slides and find plain alternatives"
                - "Replace technical figures with one or two simple charts"
                - "Test the version on someone outside your field and note what confused them"
            - name: Analyst moving into a stakeholder-facing role
              description: |-
                ## Purpose
                Analysts promoted into roles where they present to senior people often find that technical accuracy, their strength so far, is now assumed, and they are judged on clarity and recommendation. Planning the first three months around a few visible pieces of storytelling, a mentor's feedback and a habit of stating a view makes the transition faster and less stressful.

                ## Milestones
                1. Three stakeholders named with what each needs from your work.
                2. A mentor or manager agreed to review your first three presentations.
                3. Each presentation ending with an explicit recommendation.
                4. A 90-day review of feedback with two development goals.

                ## Notes
                Stating a view is not overclaiming. Give the recommendation, then say how confident you are and what would change your mind.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three presentations in the first 90 days each end with a recommendation and have written feedback from a mentor or manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Name your three main stakeholders and what each needs from you"
                - "Ask a mentor to review your first three presentations"
                - "End every presentation with a clear recommendation"
                - "Hold a 90-day review of the feedback and set two goals"
            - name: Presenting bad news or a null result
              description: |-
                ## Purpose
                Findings that a project failed, a campaign did nothing or a forecast was wrong are the ones most likely to be softened, buried in an appendix or not presented at all. Preparing a clear, calm structure for unwelcome results, stating it early, showing the evidence plainly and moving to what to do next, keeps your credibility and helps the organisation stop wasting effort.

                ## Milestones
                1. The unwelcome finding stated in the first slide or paragraph.
                2. Evidence shown with the same care and charts as a positive result.
                3. Likely objections and the owner's position considered before the meeting.
                4. Options for what to do next offered alongside the finding.

                ## Notes
                Tell the person most affected privately before the group meeting. Nobody should hear that their project failed for the first time in front of their peers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An unwelcome finding is presented with the result stated first, evidence shown plainly and at least two next-step options offered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "State the unwelcome result in one plain sentence"
                - "Brief the most affected person privately before the meeting"
                - "Build the evidence charts with the same care as a positive result"
                - "Prepare at least two options for what to do next"
            - name: Storytelling for a sceptical audience
              description: |-
                ## Purpose
                Some audiences arrive already convinced the data is wrong, because it contradicts their experience, threatens their budget or comes from a team they distrust. Preparing for scepticism, by understanding their belief first, showing the data source and definitions upfront, and inviting them to test the numbers, works better than more charts or more confidence.

                ## Milestones
                1. The audience's current belief and its basis written down from conversations beforehand.
                2. Data sources and definitions shown before the main finding.
                3. One piece of evidence that matches their experience included alongside the challenge.
                4. An offer made to walk through the numbers with them afterwards.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A presentation to a sceptical audience is preceded by at least two conversations about their view, and sources are shown before the finding."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Talk to two sceptical attendees beforehand about what they believe"
                - "Put the data source and definitions before the main finding"
                - "Include one piece of evidence that matches their experience"
                - "Offer a follow-up session to walk through the numbers together"
            - name: Presenting data on video calls
              description: |-
                ## Purpose
                On a video call your charts are shown in a small window, often beside faces and a chat, and you cannot see who is confused. Adapting for remote presenting, with fewer elements per slide, larger labels, progressive reveal to direct attention and planned pauses for questions, keeps remote audiences following the argument.

                ## Milestones
                1. Slides checked at the size of a shared window on a laptop.
                2. Progressive reveal or highlighting used to direct attention on key charts.
                3. Planned pauses for questions at two or three points.
                4. Slides sent after the call with the speaker notes included.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A remote presentation is delivered with slides checked at shared-window size, progressive reveal on key charts and planned question pauses."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Share your slides on a test call and view them at window size"
                - "Add progressive reveal to the two most complex charts"
                - "Mark two or three planned pauses for questions"
                - "Send slides with speaker notes after the call"
            - name: Charts for a grant or funding proposal
              description: |-
                ## Purpose
                Grant and funding reviewers read dozens of proposals against a scoring rubric, and a clear chart of need, past results or projected impact can lift a section that text alone leaves flat. Building a few figures that map directly to the rubric criteria, with honest sources and modest claims, helps researchers and project leads make their case.

                ## Milestones
                1. The funder's scoring criteria listed with where a figure could help.
                2. Two or three figures built, each tied to a criterion.
                3. Sources and assumptions stated under each figure.
                4. Figures checked against the funder's formatting and page limits.

                ## Notes
                Projected impact figures should show a range and the assumptions behind it. Reviewers distrust single confident numbers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two or three proposal figures, each tied to a named scoring criterion with sources stated, meet the funder's format rules before submission."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the funder's scoring criteria and mark where a figure would help"
                - "Build one figure for each marked criterion"
                - "Write the source and assumptions under each figure"
                - "Check the figures against the funder's page and format limits"
            - name: Charts in code with a grammar of graphics library
              description: |-
                ## Purpose
                Point-and-click tools hit limits with repeated charts, custom layouts and reproducible figures. Learning a grammar of graphics library in R or Python, where a chart is built from data, mappings, marks and scales, lets you produce consistent, versioned charts at scale and apply your style guide as a reusable theme.

                ## Milestones
                1. One library chosen and installed with a working example.
                2. Your style guide encoded as a reusable theme.
                3. Five of your standard chart types reproduced in code.
                4. One recurring chart generated from a script instead of by hand.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your style guide exists as a code theme, and five standard chart types plus one recurring chart are generated from scripts."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick a grammar of graphics library for R or Python and install it"
                - "Encode your fonts, palette and gridline rules as a reusable theme"
                - "Reproduce five of your standard chart types in code"
                - "Move one recurring chart from manual building to a script"
            - name: House chart style for a team or publication
              description: |-
                ## Purpose
                When several people publish charts under one name, whether a team, a research group or a newsletter, inconsistency undermines all of them. Building a shared house style, with a guide, templates in the tools people actually use, a palette and a review owner, is the step from personal craft to a standard others follow. It needs agreement as much as design.

                ## Milestones
                1. Current charts from five or more contributors collected and their differences noted.
                2. A draft house style agreed with the contributors.
                3. Templates or themes released in each tool the team uses.
                4. A named owner for questions and updates.
                5. Adoption checked on the next batch of published charts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A house style guide with templates for each team tool is released, has a named owner, and the next ten published charts follow it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect recent charts from every contributor and list the differences"
                - "Draft a house style and review it with the contributors"
                - "Release templates or themes in each tool the team uses"
                - "Review newly published charts against the house style @recurring(monthly:11)"
            - name: Visual design of a long-form data report
              description: |-
                ## Purpose
                Multi-page reports need more than good individual charts: a grid, a typographic hierarchy, consistent figure numbering, summary pages and a reading path for people who only skim. Designing the layout of one long report from the ground up, or redesigning an existing one, is specialist work that makes the difference between a document people cite and one they file.

                ## Milestones
                1. A page grid and type hierarchy defined for headings, body, captions and figures.
                2. A one-page summary written for readers who stop there.
                3. Figures numbered and referenced consistently in the text.
                4. A skimming path tested by asking a reader to find three facts in two minutes.
                5. The report published in print-ready and accessible digital versions.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A long-form report is published with a defined grid, a one-page summary and consistent figure references, and passes a two-minute skim test."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Define a page grid and type sizes for headings, body and captions"
                - "Write a one-page summary for readers who go no further"
                - "Number every figure and check each is referenced in the text"
                - "Ask a reader to find three facts in two minutes and fix what slows them"
            - name: Scrollytelling or interactive data essay
              description: |-
                ## Purpose
                Scroll-driven essays, where charts change as the reader moves through the text, can explain a complex finding to a public or internal audience better than any deck. They are also a significant build, so they suit a finding important enough to justify a few weeks and an audience that will read on screen. Scope it tightly and test it on phones.

                ## Milestones
                1. A finding chosen that justifies the build, with its audience and success measure.
                2. A written script with each scroll step and the chart state it triggers.
                3. A working prototype tested on a phone and a laptop.
                4. An accessible static fallback for each step.
                5. The essay published and reading completion measured.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An interactive essay is published with a static fallback for each step, tested on phone and laptop, and reading completion is measured."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick one finding important enough to justify a scrollytelling build"
                - "Write a step-by-step script pairing text with chart states"
                - "Build a prototype with a scrollytelling library or tool"
                - "Test the prototype on a phone and a laptop"
                - "Create a static fallback image for every step"
---

# Data Storytelling & Visualisation

This area is for knowledge workers and researchers who already have the analysis and need people to understand it and act on it. It starts with the foundations (an audience and decision brief, a one-sentence big idea, a personal style guide, an accessible palette, a main tool, templates and a chart chooser), then the routines that build the craft week by week, the skills of visual hierarchy, decluttering, titles, annotation, uncertainty and narrative structure, the decisions about formats, axes, tables and honesty, the talks, reports, papers and posters that come with dates, the situations people find themselves in, and finally specialist work in code, interactive essays and house styles.

What repeats is a weekly chart makeover and five-second test, monthly report commentary with swipe file, reading, insight and feedback reviews, quarterly style guide, portfolio and honesty checks, and a yearly re-audit of your own presentations. The Purchase decision, Operational checklist, Feedback themes, Portfolio piece, Reading queue and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
