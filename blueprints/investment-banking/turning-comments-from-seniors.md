---
id: investment-banking.turning-comments-from-seniors
name: Turning Comments from Seniors
description: "A system for markups from associates, VPs and MDs: a comment log for every turn, clarifying questions batched early, ripple checks on changed numbers and a tick-back so nothing is missed."
category: business
version: 1.0.0
tags: [investment-banking, turning-comments-from-seniors, knowledge-worker, analyst, associate, markups, comment-log, page-turns]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - person
    - operational-checklist
    - feedback-themes
    - one-on-one
    - development-plan
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Turning Comments from Seniors
          description: "Handling markups from associates, VPs and MDs: logging every comment, clarifying intent, turning pages fast and confirming nothing was missed."
          projects:
            - name: Decoding markup symbols and shorthand
              description: |-
                ## Purpose
                Most seniors still mark printed pages with proofreading symbols, arrows, circled numbers and private shorthand such as 'sp', 'conf', 'tie' or 'pls bkup', and a junior who guesses wrong loses an hour and some credibility. Building a one-page key from real markups in your group means the next scrawl reads as instructions rather than a puzzle.

                ## Milestones
                1. Five recent marked-up drafts from your group collected from the shared drive or the print room tray.
                2. A one-page key of every symbol and abbreviation found, with what each asks you to do.
                3. Any mark you could not decode confirmed with an associate.
                4. The key pinned at your desk and saved beside your comment log.

                ## Notes
                Common traps: a wavy underline usually means reword, not delete, and a tick beside a number often means 'checked, keep' rather than 'change'. Confirm house habits rather than assuming.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page markup key covering every symbol found in five real drafts, with unclear marks confirmed by an associate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull five marked-up drafts from the last month of group work"
                - "List every symbol, arrow and abbreviation you find on them"
                - "Ask an associate to confirm the marks you could not read"
                - "Print the finished key and keep it at your desk"
            - name: Comment log for every turn
              description: |-
                ## Purpose
                A markup with forty comments spread over twenty pages cannot be held in your head at two in the morning. Numbering every comment into a simple log, with page, request, status and any question, turns a messy markup into a checklist you can work down, hand over or prove complete when a senior asks 'did you get my note on page 14?'.

                ## Milestones
                1. A log format with columns for comment number, page, request, owner, status and open question.
                2. The log used on your next real turn from first comment to send.
                3. Every comment on that turn marked done, queried or deliberately not done with a reason.
                4. The format saved as your default and shared with one teammate.

                ## Notes
                Keep the log on firm systems only and use deal code names, never client names, in file titles. Start from the **Metrics log** template if you want counts and timings in the same place.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A comment log format used end to end on one real turn, with every comment closed out by status."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a log with number, page, request, owner, status and question columns"
                - "Number every comment on your current markup directly on the page"
                - "Enter each numbered comment into the log before editing anything"
                - "Close every row as done, queried or not done with a reason"
            - name: Style notes for each senior you work for
              description: |-
                ## Purpose
                One VP wants every footnote sourced to the screen, another hates more than two colours on a chart, and the MD only reads the headlines. Keeping a short profile per senior, built from what their markups actually say, lets you pre-empt the comments they always make and turn the ones they do make in the way they expect.

                ## Milestones
                1. A profile for each associate, VP and MD you regularly receive markups from.
                2. Each profile lists their top five recurring comments and formatting preferences.
                3. Each profile notes how they like to receive turns: printed, PDF, changed pages only or full book.
                4. Profiles updated after every markup that teaches you something new.

                ## Notes
                Start from the **Person** template. Keep notes factual and professional, as if the senior might read them.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written profile for every senior who regularly marks your work, each listing five recurring preferences and their preferred turn format."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every senior who has marked up your work in the last two months"
                - "Write five recurring comments for each from their past markups"
                - "Note each senior's preferred format for receiving a turned draft"
                - "Add one new line to a senior profile after each markup @recurring(monthly:20)"
            - name: Capturing paper and verbal markups the same hour
              description: |-
                ## Purpose
                Comments arrive in five forms: a printed page left on your chair, a PDF with annotations, an email, a walk-by remark and a call where three people talk at once. Capturing every one into the log within the hour, with a scan or photo of any paper, stops the classic miss where a comment on page 31 of a printout never reaches the draft.

                ## Milestones
                1. A habit of scanning every paper markup to the deal folder before starting work on it.
                2. Verbal and call comments written down and read back to the senior before they leave.
                3. Every comment source referenced in the log by date and format.
                4. No turn sent in the last month with a comment that only existed on paper.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every markup received over four weeks is scanned or written into the comment log within an hour of arrival."
                cadence: rolling
              tasks:
                - "Scan the printed markup currently on your desk into the deal folder"
                - "Read verbal comments back to the senior before they walk away"
                - "Note the source and time of each comment in the log"
                - "Check the print tray and your chair for paper markups before leaving each night"
            - name: Turn brief taken at the hand-off
              description: |-
                ## Purpose
                Half of all bad turns start with a misunderstanding at the hand-off: the analyst thought the book was going to the client, the VP meant only a check-in version, and nobody agreed when the next draft was due. Asking four questions when the markup lands, about deadline, audience, scope and who checks it next, sets up the turn correctly before any page is touched.

                ## Milestones
                1. A four-question hand-off script: when is it due, who sees it next, full book or changed pages, and who reviews before it goes.
                2. The script used on three consecutive markups.
                3. Each answer written at the top of the comment log for that turn.
                4. At least one misunderstanding caught at hand-off rather than at the next review.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written four-question hand-off script used on three consecutive turns, with answers recorded at the top of each comment log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the four hand-off questions on a card or note on your phone"
                - "Ask all four when your next markup is handed over"
                - "Record the due time, audience, scope and reviewer at the top of the log"
                - "Confirm the next checkpoint time by a one-line email to the senior"
            - name: Sorting comments into four kinds before starting
              description: |-
                ## Purpose
                A markup mixes typos, number changes, storyline rewrites and requests for new analysis, and they take wildly different times. Sorting comments before starting, so the new analysis and data pulls begin first and the formatting fixes fill the gaps, is usually the difference between a turn that lands on time and one that slips past midnight.

                ## Milestones
                1. Four comment categories agreed for your own use: format, number, wording or storyline, new work.
                2. Every comment in the next three logs tagged with a category and a rough time.
                3. New-work comments started first on each of those turns.
                4. A note on how the sorted turns compared with your usual turn time.

                ## Notes
                New-work comments often need data from someone else, so send those requests in the first ten minutes.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three consecutive comment logs with every comment tagged by category and time estimate, and new work started first each time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a category column and a minutes column to your comment log"
                - "Tag every comment in your current markup with one of the four kinds"
                - "Start the new analysis and data requests before any formatting fix"
                - "Compare the finish time with your last unsorted turn"
            - name: One batched list of clarifying questions
              description: |-
                ## Purpose
                Seniors would rather get one message with five precise questions at 7pm than five separate pings through the night, and far rather that than a wrong guess executed beautifully. Reading the whole markup first and sending one batched list, each question with your proposed answer, keeps the turn moving while you wait.

                ## Milestones
                1. The whole markup read end to end before any question is sent.
                2. Questions written as 'Page 12, comment 4: I read this as X, shall I proceed?' with a default.
                3. One batched message sent within thirty minutes of receiving the markup.
                4. Answers recorded in the comment log against each row.

                ## Notes
                Always attach your default. If no answer comes before the deadline, you execute the default and flag it in the cover note.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three turns in a row where all clarifying questions went in one message within thirty minutes, each with a proposed default."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your current markup end to end before changing anything"
                - "Draft every unclear comment as a question with your proposed default"
                - "Send the questions in one message within thirty minutes"
                - "Log each reply against its comment row"
            - name: Tick-back check before every send
              description: |-
                ## Purpose
                The comment a senior remembers is the one you missed, not the thirty-nine you turned. Going back through the original markup page by page, ticking each comment against the new draft rather than against your log, catches the misses that a log alone hides, such as a comment you logged wrongly or applied to the wrong version.

                ## Milestones
                1. A written tick-back routine: original markup in one hand, new draft in the other, every mark ticked or circled.
                2. The routine run on every turn for a month.
                3. Misses caught by the tick-back counted in the log.
                4. Zero comments reported missed by a senior over that month.

                ## Notes
                Start from the **Operational checklist** template. Tick against the original markup, not your own summary of it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A month of turns, each with a completed tick-back against the original markup and no misses reported by seniors."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the tick-back steps as a short checklist"
                - "Tick every mark on the original markup against the new draft before sending"
                - "Count how many misses the tick-back caught on this turn"
                - "Fix and re-check any page where a tick could not be placed"
            - name: Cover note that goes with every turn
              description: |-
                ## Purpose
                Sending a turned draft with no message forces the senior to hunt for what changed. A short cover note listing what was done, what was queried, what you chose not to do and why, and what is still open, lets them review in five minutes and builds the trust that gets you fewer checks later.

                ## Milestones
                1. A cover note format with four short sections: done, defaults taken, not done with reason, open items.
                2. The format used on every turn for a month.
                3. Changed pages listed by number in every note.
                4. At least one senior commenting that the note saved them time, or asking for it again.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every turned draft over one month carries a cover note listing changed pages, defaults taken and open items."
                cadence: rolling
              tasks:
                - "Save the four-section cover note format as an email draft"
                - "List the changed page numbers in the note for your current turn"
                - "Explain each comment you did not action in one sentence"
                - "Name the open items and who owes each one"
            - name: End-of-day sweep of open comments
              description: |-
                ## Purpose
                Across three live deals, comments pile up in logs, inboxes and printouts, and the ones that slip are usually small ones from a week ago. A ten-minute sweep at the end of each day, across every open log, means nothing ages quietly and you can tell your staffer exactly what is outstanding.

                ## Milestones
                1. A single list of open comments across all live deals, updated daily.
                2. Each open item with an owner and the next time it will be touched.
                3. Items older than three days escalated or closed.
                4. The sweep kept up on at least four days a week for a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An open-comments list across all live deals swept on at least four days a week for four weeks, with no item older than three days unexplained."
                cadence: rolling
              tasks:
                - "Sweep every open comment log and inbox thread for open items @recurring(daily)"
                - "Flag any comment older than three days to the senior who made it"
                - "Move closed items off the open list"
                - "Note tomorrow's first comment to work on"
            - name: Weekly review of repeat comments
              description: |-
                ## Purpose
                If the same comment comes back three times, such as 'source?', 'align decimals' or 'headline too long', it is a gap in your first draft, not in the senior's patience. Reviewing the week's logs every Friday for repeats, and turning each into a line on your pre-send checklist, is the fastest way to halve the comments on your drafts.

                ## Milestones
                1. A running list of comments received more than once.
                2. Each repeat turned into a pre-send check you run yourself.
                3. The repeat list reviewed every Friday for a quarter.
                4. At least three repeat comments that stopped appearing on your drafts.

                ## Notes
                Start from the **Feedback themes** template to group repeats by theme.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A repeat-comment list reviewed weekly for twelve weeks, with at least three former repeats absent from the last month of markups."
                cadence: rolling
              tasks:
                - "Scan the week's comment logs for comments you received more than once @recurring(weekly:fri)"
                - "Add each repeat to your pre-send checklist as a check"
                - "Mark repeats that did not appear this week"
                - "Share one repeat and its fix with the analyst beside you"
            - name: Turn timing log
              description: |-
                ## Purpose
                Juniors routinely promise a turn in two hours that takes five, and then the senior plans a client call around the wrong time. Logging how long each turn actually took by size and type gives you honest estimates to quote at hand-off and the evidence to ask for more time when a markup is genuinely large.

                ## Milestones
                1. Start time, send time, comment count and page count logged for every turn.
                2. Average minutes per comment worked out for each comment category.
                3. Estimates quoted at hand-off within thirty minutes of actual on most turns.
                4. The timing log reviewed monthly.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two months of turns logged with times and comment counts, and an average minutes-per-comment figure for each category."
                cadence: rolling
              tasks:
                - "Note the start time and comment count on your current turn"
                - "Record the send time when the turn goes out"
                - "Work out last month's average minutes per comment by category @recurring(monthly:3)"
                - "Use the averages to quote your next hand-off estimate"
            - name: Monthly comment count trend
              description: |-
                ## Purpose
                Comments per page on your first drafts is one of the clearest signals of how you are developing, and it is the number your reviewers are implicitly judging. Tracking it monthly, split by senior and by kind of comment, shows whether you are improving and gives you concrete evidence for your review.

                ## Milestones
                1. Comments per page calculated for each first draft you submitted this month.
                2. The figure split by category: format, number, wording, new work.
                3. Three months of figures on one chart.
                4. One target set for the category you most want to reduce.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of comments-per-page figures by category, with one written reduction target."
                cadence: rolling
              tasks:
                - "Count comments per page on each first draft you sent this month @recurring(monthly:12)"
                - "Split the counts by the four comment categories"
                - "Plot the monthly figures on one simple chart"
                - "Set a target for the category with the most comments"
            - name: Quarterly refresh of senior preferences
              description: |-
                ## Purpose
                Staffing changes every few months: a new VP joins, an MD you rarely saw takes over a deal, an associate gets promoted. Refreshing your senior profiles each quarter, retiring stale notes and starting new ones early, keeps your first drafts aimed at the people actually marking them.

                ## Milestones
                1. Each senior profile checked against their last three markups.
                2. Profiles started for any senior you have begun working with this quarter.
                3. Stale preferences removed or updated.
                4. One preference confirmed directly with a new senior at the start of a deal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every senior profile reviewed in the quarter, with new seniors added and at least one preference confirmed in person."
                cadence: rolling
              tasks:
                - "Check each senior profile against their latest markups @recurring(quarterly)"
                - "Start a profile for any senior new to your deals"
                - "Ask a new senior how they like turned drafts delivered"
                - "Delete preferences that no longer match what you see"
            - name: Pushing a comment through every linked page
              description: |-
                ## Purpose
                Say a senior changes the EBITDA figure on the executive summary, and the same number sits in the valuation page, two footnotes, the appendix and the backup model. Tracing every changed figure or phrase through all linked pages and documents is what separates a turn that is merely done from one that is consistent.

                ## Milestones
                1. A habit of searching the whole book for every changed number, name or phrase.
                2. A list of linked documents per deal: model, deck, memo, backup and any side analysis.
                3. Each number comment in the log marked with every place it was updated.
                4. No inconsistency reported by a senior on a changed figure over a month.

                ## Notes
                Search for the number in several formats: 12.4, 12.40, 12,4 and the rounded version on summary pages.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of turns where every number comment lists all locations updated, with no inconsistencies reported by seniors."
                cadence: rolling
              tasks:
                - "List every document linked to your current deal's book"
                - "Search the whole book for each changed number in all its formats"
                - "Record every location updated against the comment row"
                - "Ask a teammate to spot-check one changed figure across pages"
            - name: Re-reading the last markup before a new draft
              description: |-
                ## Purpose
                Seniors notice when a comment they made last week reappears in a new version or a sister document. Re-reading each senior's most recent markup on a live deal at the start of the week, before you build the next draft, carries their thinking forward so you are not corrected twice on the same point.

                ## Milestones
                1. The latest markup from each senior filed where it is easy to find for each live deal.
                2. A Monday re-read of those markups kept for a month.
                3. Points that apply to other pages or documents noted and applied proactively.
                4. No repeated comment from the same senior on the same point within a deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive Monday re-reads of each senior's latest markup, with no comment repeated by a senior within the same deal."
                cadence: rolling
              tasks:
                - "File the latest markup from each senior in one folder per deal"
                - "Re-read each senior's last markup on every live deal @recurring(weekly:mon)"
                - "Apply points that carry over to other pages before the next draft"
                - "Note any carried-over fix in the next cover note"
            - name: Comment hand-over note for a teammate
              description: |-
                ## Purpose
                When you are pulled onto another deal, leave for a flight or hand the night shift to an offshore colleague, a half-turned markup is a trap for whoever picks it up. A hand-over note with the log, the open questions, what you have done and where the files are lets someone else finish the turn without guessing.

                ## Milestones
                1. A hand-over note format with log link, done items, open items, questions pending and file locations.
                2. The note used on the next real hand-over.
                3. The receiver confirming they could finish without calling you.
                4. The format saved for the team to reuse.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hand-over note format used on one real turn, with the receiver confirming in writing that no follow-up call was needed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a hand-over format with log, done, open, questions and file paths"
                - "Fill it in for your current open turn as a test"
                - "Use it at your next real hand-over to a teammate"
                - "Ask the receiver what was missing and add it to the format"
            - name: Interpreting vague comments like make it punchier
              description: |-
                ## Purpose
                Comments such as 'punchier', 'too busy', 'so what?' or 'make this sing' are real instructions with specific meanings in most groups, and the skill is turning them into concrete edits. Building a phrase bank of vague comments and the edits that satisfied them, taken from your own past turns, turns guesswork into a repeatable move.

                ## Milestones
                1. Ten vague comments collected from past markups with the edit that resolved each.
                2. Two or three standard responses written for each, such as shortening the headline or cutting a chart series.
                3. The phrase bank used on the next three vague comments you receive.
                4. The bank updated monthly with new examples.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A phrase bank of at least ten vague comments, each paired with concrete edits, used on three live comments."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect ten vague comments from your past markups"
                - "Write down the edit that finally satisfied each one"
                - "Ask an associate what 'so what' means to the MDs in your group"
                - "Add new vague comments and their fixes to the bank @recurring(monthly:18)"
            - name: Rewriting headlines from a markup
              description: |-
                ## Purpose
                Headline comments are the most common storyline edits and the hardest for juniors, because 'this headline says nothing' gives no replacement. Practising the move from a descriptive headline to one that states the conclusion, using pages your seniors have already rewritten, builds the instinct for the next markup.

                ## Milestones
                1. Ten before-and-after headline pairs collected from past markups.
                2. The pattern behind each rewrite noted: conclusion first, number in, shorter, client's language.
                3. Five headlines on a current draft rewritten using those patterns before submission.
                4. A senior's response to those rewrites recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten before-and-after headline pairs annotated with the rewrite pattern, and five current headlines rewritten and reviewed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pull ten headlines a senior rewrote on past drafts"
                - "Write the pattern behind each rewrite next to the pair"
                - "Rewrite five headlines on your current draft using the patterns"
                - "Record which rewrites survived the next markup"
            - name: Tracing a changed number through the model
              description: |-
                ## Purpose
                Some comments look like a page fix but are really a model change: 'use adjusted EBITDA here', 'take out the one-off' or 'show it pre-IFRS 16'. Recognising those, making the change at source in the model rather than hard-typing the page, and rerunning the outputs avoids the worst kind of error, a page that no longer ties to the backup.

                ## Milestones
                1. A rule written down: any comment that changes a calculated number is made in the model first.
                2. Each such comment in the log tagged 'model' with the cell or tab changed.
                3. Outputs refreshed and pasted after every model change.
                4. A month with no hard-typed overrides on pages that should be linked.

                ## Notes
                Agree with your associate before changing a model that others are also editing, and note the version you changed.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A month of logs where every comment changing a calculated number is tagged with the model cell changed, with no hard-typed overrides found."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Tag the model-driven comments in your current markup"
                - "Make each one in the model and note the tab and cell"
                - "Refresh every output page that draws on the changed cells"
                - "Check that no page now carries a hard-typed version of the number"
            - name: Redrawing a chart from a sketched markup
              description: |-
                ## Purpose
                MDs often sketch the chart they want on the back of a page: a box, two lines and an arrow labelled 'show the gap'. Learning to read the sketch for its point, choose the right chart type and build it in the house style, then send a quick check before polishing, saves hours of rebuilding the wrong chart.

                ## Milestones
                1. Three past sketched chart comments matched to the final chart that was used.
                2. A short note for each on what the sketch was trying to show.
                3. The next sketched chart built as a rough version first and checked with the senior.
                4. The final chart accepted with no further structural comment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sketch-to-final chart pairs annotated, and one new sketched chart accepted after a single rough check."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find three past sketched charts and the versions that went to clients"
                - "Write the point each sketch was making in one sentence"
                - "Build the next sketched chart roughly and send a thumbnail for a check"
                - "Polish only after the senior confirms the shape"
            - name: Asking clarifying questions without sounding lost
              description: |-
                ## Purpose
                Juniors either ask too little and guess, or ask too much and seem unable to think. A good clarifying question shows your reading, proposes an answer and asks for a yes or no. Practising that phrasing on real comments makes it easy to ask early, which is when questions are cheapest.

                ## Milestones
                1. Five question patterns written down, each stating your reading and a proposed default.
                2. Five real questions from past turns rewritten in those patterns.
                3. The patterns used on the next two markups.
                4. Feedback on your questions asked for at your next check-in.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five written question patterns used on two real markups, with feedback on the questions recorded from a senior."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write five question patterns that state your reading and a default"
                - "Rewrite five past questions you sent using those patterns"
                - "Use the patterns on your next two markups"
                - "Ask your associate whether your questions are the right size"
            - name: Pushing back on a comment with evidence
              description: |-
                ## Purpose
                Sometimes a comment is wrong: the MD remembers last year's revenue, or the VP's suggested peer was acquired. Turning it blindly puts an error in front of the client. Raising it briefly, with the source and a proposed alternative, is part of the job, and doing it well earns more trust than silent compliance.

                ## Milestones
                1. A short rule for when to push back: factual errors, broken ties, compliance risk.
                2. A two-line pushback format: what the comment asks, why it may be wrong with the source, and what you propose.
                3. One real pushback raised using the format and the outcome noted.
                4. Comments you disagreed with on taste, not fact, turned without argument.

                ## Notes
                Disagreeing on style is rarely worth it at analyst level. Disagreeing on a fact always is, quietly and with the source attached.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written pushback rule and format, used on one real comment with the source cited and the outcome logged."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down when you will push back and when you will not"
                - "Draft the two-line pushback format with a source line"
                - "Use it the next time a comment conflicts with the source"
                - "Log the outcome and what you would phrase differently"
            - name: Taking comments live on a call
              description: |-
                ## Purpose
                Page-turn calls with an MD, sometimes with the client on the line, produce rapid comments that are gone the moment the call ends. Capturing them live against page numbers, reading the list back at the end and sending it round within the hour means everyone agrees what was asked before you start turning.

                ## Milestones
                1. A call template with page numbers down the side and space for each comment.
                2. Comments captured live on the next two page-turn calls.
                3. The list read back or confirmed at the end of each call.
                4. A written summary sent to the call attendees within an hour.

                ## Notes
                When the client is on the call, separate their comments from your seniors' comments in the summary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two page-turn calls with comments captured live by page and a summary sent to attendees within an hour of each."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Print or open a page list with space for comments before the call"
                - "Write each comment against its page number as it is said"
                - "Read the list back in the last two minutes of the call"
                - "Send the comment summary to attendees within the hour"
            - name: Batching similar edits across a book
              description: |-
                ## Purpose
                A markup that says 'all charts: remove gridlines' or 'use m not mn throughout' is twenty edits pretending to be one. Recognising book-wide comments and executing them once, through the master slide, a style, find and replace or a format painter pass, can take an hour off a turn and avoids the inconsistency of fixing some pages and not others.

                ## Milestones
                1. Book-wide comments flagged separately in the log.
                2. A list of the batch methods that work in your house template.
                3. Each book-wide comment executed by one batch method and spot-checked on five pages.
                4. Minutes saved compared with page-by-page editing noted in the timing log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Book-wide comments on three turns executed by a batch method, spot-checked on five pages and timed against past turns."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Flag every book-wide comment in your current markup"
                - "List the batch methods your house template supports"
                - "Execute each book-wide comment once and spot-check five pages"
                - "Review your batch methods against the month's turn times @recurring(monthly:8)"
            - name: What to turn first when time runs short
              description: |-
                ## Purpose
                Sometimes the markup is bigger than the time, and something will not be done before the meeting. Deciding in advance the order, client-facing numbers first, then storyline, then the pages that will be presented, then formatting, means you can tell the senior at the right moment what will and will not make it rather than discovering it at 6am.

                ## Milestones
                1. A written priority order for turns that cannot be finished.
                2. The order checked with your associate or VP.
                3. A one-line message format for telling a senior what will not make it.
                4. The order applied on one real time-squeezed turn with the message sent early.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A priority order for short-time turns agreed with an associate and used on one real turn, with the warning message sent before the deadline."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your priority order for turns that will not fit the time"
                - "Ask your associate whether they would change the order"
                - "Draft the message you send when items will not make the deadline"
                - "Send that message at the halfway point if the turn is behind"
            - name: Comment protocol agreed with your associate
              description: |-
                ## Purpose
                Associates mark up in their own way, and analysts lose time decoding colours, half-deleted notes and comments added in three places. Agreeing a simple protocol, how comments arrive, how you reply, what counts as done and how the next round is shown, cuts friction on every deal you share.

                ## Milestones
                1. A short protocol covering format, colour use, reply method and how a closed comment is shown.
                2. The protocol agreed in a short conversation with your main associate.
                3. Used on two full rounds of comments.
                4. Reviewed each quarter or when the associate changes.

                ## Notes
                Start from the **1:1** template to capture the agreement and later reviews.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written comment protocol agreed with your associate and used on two rounds, with a quarterly review date set."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Draft a half-page comment protocol for you and your associate"
                - "Book fifteen minutes to agree it with your associate"
                - "Use the protocol on the next two rounds of comments"
                - "Review the protocol with your associate @recurring(quarterly)"
            - name: Choosing a PDF annotation method for markups
              description: |-
                ## Purpose
                Paper markups are slow to share and easy to lose, but digital annotation varies by bank and by senior. Comparing what your firm allows, such as PDF comments, tracked changes, a tablet with a stylus or printed pages scanned back, and agreeing one default for your team makes logging and tick-backs faster.

                ## Milestones
                1. The annotation tools your firm's IT and compliance rules permit listed.
                2. Two or three methods tried on real markups.
                3. Each method scored on speed of logging, ease for seniors and searchability.
                4. One default recorded and suggested to the team, with paper kept for seniors who prefer it.

                ## Notes
                Never move deal documents to personal devices or unapproved apps. Use only firm-approved tools.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least two firm-approved annotation methods, with a recorded default for your team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which annotation tools the firm approves for deal documents"
                - "Try two approved methods on your next two markups"
                - "Score each on logging speed, senior ease and searchability"
                - "Suggest the winning method to your team in the next team catch-up"
            - name: Reconciling conflicting comments from two seniors
              description: |-
                ## Purpose
                Your VP wants three peers removed, the MD wants two added, and both markups arrived within an hour. Executing one silently undoes the other and leaves you exposed. A short method, putting the conflict side by side and asking the more junior of the two to resolve it, protects the turn and avoids putting you between them.

                ## Milestones
                1. Conflicting comments flagged with a 'conflict' status in the log.
                2. A side-by-side note for each conflict with both requests and the affected pages.
                3. Each conflict sent to the more junior senior for resolution, or to the deal lead if they are the same.
                4. The resolution recorded with who decided.

                ## Notes
                Never pick a winner yourself. If no answer comes, turn both versions of the affected page and flag them in the cover note.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every conflicting comment over a month logged with a side-by-side note and a recorded resolution naming who decided."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add a conflict status to your comment log"
                - "Write a side-by-side note for the next pair of conflicting comments"
                - "Send the conflict to the more junior senior for a decision"
                - "Record the decision and who made it against both comments"
            - name: Self-markup before the first submission
              description: |-
                ## Purpose
                Cheapest of all is the comment you made yourself. Printing your own draft, marking it up as your VP would using their profile and the repeat-comment list, and turning those marks before submitting, routinely removes a third of the comments on a first draft.

                ## Milestones
                1. A self-markup routine: print, read as the senior, mark, turn.
                2. The routine run on three consecutive first drafts.
                3. Comments per page on those drafts compared with your previous three.
                4. The routine added to your pre-send checklist.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three first drafts self-marked before submission, with comments per page compared against the previous three drafts."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Print your current draft before submitting it"
                - "Mark it up using the senior's profile and your repeat list"
                - "Turn your own marks before sending"
                - "Compare comment counts with your last three unmarked drafts"
            - name: Post-mortem on a missed comment
              description: |-
                ## Purpose
                One missed comment on a client-facing book, such as an old share price or a wrong client logo, can cost far more than the minutes it would have taken. Writing a short, blame-free post-mortem each time one slips, what was missed, where the process failed and what check would have caught it, turns every miss into a better routine.

                ## Milestones
                1. A post-mortem format: what was missed, how it was caught, where the process broke and the new check.
                2. A post-mortem written for each miss in the last month.
                3. Every new check added to your tick-back or pre-send list.
                4. Misses reviewed monthly for patterns.

                ## Notes
                Start from the **Feedback themes** template. Keep post-mortems about process, not people.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written post-mortem for every reported miss over two months, each producing a new check added to your lists."
                cadence: rolling
              tasks:
                - "Write a post-mortem for the last comment you missed"
                - "Name the step in your routine where the miss slipped through"
                - "Add one new check to your tick-back list"
                - "Review the month's post-mortems for patterns @recurring(monthly:27)"
            - name: The overnight turn before a client meeting
              description: |-
                ## Purpose
                The classic banking night: markup at 9pm, printing at 6am, meeting at 9. Planning the night as a sequence, questions out by 9.30, new work first, a checkpoint draft to the associate by 1am, tick-back and print order by 5, makes it survivable and keeps the errors out of the client's copy.

                ## Milestones
                1. A written overnight plan with fixed checkpoints and who gets what by when.
                2. Questions sent and data requests made within the first thirty minutes.
                3. A checkpoint draft sent to the associate before the final push.
                4. Tick-back finished and print order placed with time to spare.

                ## Notes
                Agree in advance who signs off at 5am and how to reach them. A turn with no reviewer at the end is a risk, not a saving.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One overnight turn run to a written plan, with all checkpoints met and the client book printed before the agreed time."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a template overnight plan with checkpoint times"
                - "Agree the checkpoint and sign-off times with your associate"
                - "Send questions and data requests in the first thirty minutes"
                - "Book the print or send slot before starting the tick-back"
            - name: Turning comments in a live drafting session
              description: |-
                ## Purpose
                Some turns happen in a room or on a screen-share with seniors, the client and sometimes lawyers, editing in real time. Turning comments live needs a different routine: one person driving the file, one logging comments, agreed save points and a clean version sent straight after, so nothing agreed in the room is lost.

                ## Milestones
                1. Roles agreed before the session: who drives the file, who logs.
                2. A save point named every thirty minutes during the session.
                3. Agreed changes logged and read back at the end.
                4. A clean version with the log sent to attendees the same day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One live drafting session run with agreed roles, logged changes read back, and a clean version circulated the same day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree with your associate who drives the file and who logs"
                - "Save and name a version every thirty minutes during the session"
                - "Read back the logged changes before people leave"
                - "Send the clean version and the log the same day"
            - name: Weekend turn with a travelling MD
              description: |-
                ## Purpose
                Markups from an MD in transit come by phone photo, one-line email or voice note, often between flights. Turning them well means confirming you have every page, matching your timing to their landing and sending a version they can read on a phone, with the cover note doing more of the work than usual.

                ## Milestones
                1. Every photo or voice note matched to its page in the log.
                2. The MD's availability windows confirmed with their assistant or the VP.
                3. A phone-readable PDF and a cover note sent before their next window.
                4. Open items flagged in the cover note with proposed defaults.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A weekend turn delivered as a phone-readable PDF with a cover note, sent before the MD's next confirmed availability window."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Match every photo and voice note to a page in the log"
                - "Confirm the MD's landing or availability times with the VP"
                - "Export a phone-readable PDF of the changed pages"
                - "Send the PDF and cover note before the next window"
            - name: Final turn before a client send
              description: |-
                ## Purpose
                Your last turn before a book, memo or model goes to the client deserves a different level of care from internal drafts: every number current, every page approved, the right client name and logo, no internal comments left in notes or hidden slides. A last-turn sign-off check is the final gate.

                ## Milestones
                1. A last-turn checklist covering numbers, names, logos, dates, hidden content and file metadata.
                2. Every open comment closed or explicitly accepted by the senior as open.
                3. Written sign-off from the senior who owns the client send.
                4. The sent version filed with its sign-off email.

                ## Notes
                Check speaker notes, hidden slides, comments in the file and the document properties. Old client names in the metadata are a classic embarrassment.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A last-turn checklist completed on a client send, with written senior sign-off filed beside the sent version."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the last-turn checklist including hidden content and metadata"
                - "Run it on the next document going to a client"
                - "Get written sign-off from the senior owning the send"
                - "File the sent version with the sign-off email"
            - name: Client comments relayed through seniors
              description: |-
                ## Purpose
                After a meeting, the VP forwards the client's comments mixed with their own reactions and the MD's view of what the client 'really meant'. Separating whose comment is whose, and confirming which client requests the team has agreed to make, prevents you either ignoring the client or overriding your seniors.

                ## Milestones
                1. Each relayed comment tagged in the log by source: client, VP or MD.
                2. Client requests the team will not action confirmed with the senior.
                3. The turned version showing the client's requests addressed in the cover note.
                4. The client-facing summary of changes approved by the senior before sending.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A turn on client comments where every comment is tagged by source and the client-facing change summary was approved by a senior."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Tag each relayed comment as client, VP or MD in the log"
                - "Ask the VP which client requests will not be actioned"
                - "Draft a client-facing summary of the changes made"
                - "Get the summary approved before it goes to the client"
            - name: Summer analyst's first markups
              description: |-
                ## Purpose
                Interns get markups without the context full-timers have, and a careful, fast turn is one of the clearest ways to stand out for a return offer. Learning the basics in the first two weeks, logging, asking batched questions, ticking back and thanking the reviewer, makes a visible difference by mid-summer.

                ## Milestones
                1. The comment log and tick-back used on every intern task.
                2. Questions batched and sent with defaults rather than asked piecemeal.
                3. Feedback asked for on turn quality at the mid-summer review.
                4. Three examples of clean turns noted for the final review conversation.

                ## Notes
                Say clearly when you have finished and what is left. Seniors remember interns who close the loop.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summer of turns logged and ticked back, with feedback recorded at the mid-point and three clean examples listed for the final review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up the comment log before your first intern task"
                - "Ask your buddy analyst how the group likes turns returned"
                - "Request feedback on your turns at the mid-summer review"
                - "List three clean turns to mention at the final review"
            - name: First-year analyst's first three months of turns
              description: |-
                ## Purpose
                The first months set your reputation in the group, and most of it comes from how you handle comments. A ninety-day plan covering accuracy first, then speed, then anticipating comments, with a weekly check-in with your associate, turns the early chaos into steady improvement you can show at your first review.

                ## Milestones
                1. A ninety-day plan with three phases: accuracy, speed, anticipation.
                2. A weekly check-in with your associate on turn quality.
                3. Comments per page tracked from the first month.
                4. A written summary of progress ready for your first formal review.

                ## Notes
                Start from the **Development plan** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ninety-day turn development plan completed, with weekly associate check-ins and a written progress summary for the first review."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a ninety-day plan with accuracy, speed and anticipation phases"
                - "Ask your associate for a short weekly check-in on your turns"
                - "Bring one recent turn to each check-in @recurring(weekly:thu)"
                - "Write a progress summary before your first formal review"
            - name: Consolidating VP and MD markups as an associate
              description: |-
                ## Purpose
                As an associate you sit between the seniors' markups and the analysts' turns, and passing comments down raw multiplies confusion. Consolidating markups into one clean list, resolving conflicts above, adding your own and splitting work between analysts makes each round faster and protects the juniors' evenings.

                ## Milestones
                1. One consolidated comment list per round, with conflicts already resolved.
                2. Comments assigned to named analysts with times.
                3. A check of the turned draft against the original senior markups, not just your list.
                4. Analysts asked monthly what would make your comments easier to turn.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Four consecutive comment rounds passed to analysts as a single consolidated list with owners, and checked against the original markups."
                cadence: rolling
              tasks:
                - "Merge the current VP and MD markups into one numbered list"
                - "Resolve any conflicts with the VP before passing comments down"
                - "Assign each comment to a named analyst with a time"
                - "Plan the week's comment rounds and analyst cover @recurring(weekly:mon)"
            - name: Giving comments that are easy to turn as a VP
              description: |-
                ## Purpose
                Every vague or scattered comment from a VP costs the team hours overnight. Giving comments that are numbered, specific about the change, clear about priority and sent at one time, with a stated deadline, gets better turns faster and is one of the most visible signs of a good deal leader.

                ## Milestones
                1. A personal markup standard: numbered, specific, prioritised, one batch, with a deadline.
                2. The standard used on two full rounds of comments.
                3. Junior feedback asked for on how easy the comments were to turn.
                4. The standard reviewed monthly against turn quality.

                ## Notes
                Mark the two or three comments that matter most for the client. Juniors cannot tell which comments are critical unless you say so.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Two rounds of comments given to a written markup standard, with junior feedback collected and recorded."
                cadence: rolling
              tasks:
                - "Write your markup standard in five lines"
                - "Number and prioritise your comments on the next draft you review"
                - "Ask the analyst what made your last markup hard to turn"
                - "Check your recent markups against the standard @recurring(monthly:15)"
            - name: Turns across time zones with an offshore team
              description: |-
                ## Purpose
                Many banks now hand turns to an offshore analyst or graphics team overnight, and a bad hand-off means waking to a draft that answered the wrong comments. Clear written comments, a cut-off time, a checked list of files and a morning tick-back make follow-the-sun turns work.

                ## Milestones
                1. A hand-off cut-off time agreed with the offshore team.
                2. Every comment sent written in full, with no shorthand or references to calls they were not on.
                3. A morning tick-back of the returned draft against the original markup.
                4. A weekly review with the offshore lead of what came back wrong.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of offshore turns with comments sent before the agreed cut-off and every returned draft ticked back before use."
                cadence: rolling
              tasks:
                - "Agree a daily hand-off cut-off with the offshore team lead"
                - "Rewrite shorthand comments in full before sending them offshore"
                - "Tick back the returned draft against the original markup each morning"
                - "Review mis-turned comments with the offshore lead @recurring(weekly:tue)"
            - name: Boutique turns straight from a partner
              description: |-
                ## Purpose
                At a boutique there is often no associate or VP layer: the partner marks the deck and you turn it, sometimes with the client copied. That means fewer filters, faster turns and more judgement on your part. A slimmer process, with a quick read-back call and a single tick-back, fits the pace without losing accuracy.

                ## Milestones
                1. A slim turn routine suited to direct partner markups.
                2. A five-minute read-back call with the partner on large markups.
                3. Your own second check standing in for the missing associate review.
                4. The routine reviewed after two months of deals.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written slim turn routine used for two months on partner markups, including a self-run second check on every turn."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a slim turn routine for markups that come straight from a partner"
                - "Book a five-minute read-back call for any markup over twenty comments"
                - "Run a second check yourself after a short break before sending"
                - "Review the routine with the partner after two months"
            - name: Turns with a fixed evening hard stop
              description: |-
                ## Purpose
                Bankers with young children, caring duties or a health need sometimes have a hard stop most evenings, which makes late markups especially stressful. Agreeing hand-off rules with the team, front-loading questions and setting up a cover arrangement lets you protect the stop without leaving turns half done.

                ## Milestones
                1. The hard stop and its reason discussed with your staffer or VP, to the extent you are comfortable.
                2. A cover arrangement with a named teammate for late markups.
                3. Your hand-off note used whenever a turn crosses the hard stop.
                4. A weekly look at whether the arrangement is holding.

                ## Notes
                Talk to your staffer or HR about formal flexible working arrangements if the stop is long-term.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cover arrangement agreed with a named teammate and used on every turn crossing your hard stop for a month."
                cadence: rolling
              tasks:
                - "Raise your hard stop with your staffer or VP"
                - "Agree a cover arrangement with one named teammate"
                - "Send your hand-off note before the hard stop on any open turn"
                - "Check how the arrangement held up over the week @recurring(weekly:sun)"
            - name: Turning internal committee comments
              description: |-
                ## Purpose
                Committee materials, such as commitment, underwriting or valuation committee memos, draw comments from people outside the deal team, often senior risk or credit staff with specific concerns. Turning them means answering the concern, not just editing the page, and recording how each point was resolved for the committee file.

                ## Milestones
                1. Committee comments logged with the name or function of each reviewer.
                2. Each comment answered with a change, an explanation or both.
                3. A response table prepared for the committee secretary or chair.
                4. The resolved comments filed with the final committee materials.

                ## Notes
                Committee procedures vary by bank. Follow your firm's committee rules and confirm the response format with the secretary.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A committee response table answering every reviewer comment, filed with the final committee materials."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the committee's response format with the secretary"
                - "Log each committee comment with the reviewer's function"
                - "Draft a change or explanation for every comment"
                - "File the response table with the final committee pack"
            - name: Turning tracked changes on long Word documents
              description: |-
                ## Purpose
                Information memoranda, board papers and offering document drafts come back as Word files carrying hundreds of tracked changes and margin bubbles from your VP, the client and counsel at once. Working through them in a fixed order, resolving bubbles as you go and running a compare against the version you sent, means no change is accepted blind and no bubble is left hanging when the draft goes out.

                ## Milestones
                1. A set order for long documents: read all bubbles, accept mechanical changes, then work the substantive ones.
                2. Each bubble answered or resolved, with queries kept as replies rather than deleted.
                3. A compare run between the version sent and the version returned, checked for changes made without tracking.
                4. A clean copy and a redline both saved under the agreed version name before sending.

                ## Notes
                Never accept all changes on a document that counsel or the client has touched until you have read each one. Check the document properties and hidden comments are cleared before anything leaves the bank.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three long documents turned using the fixed order, each sent with a clean copy, a redline and no unresolved bubbles."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Open the last long document you turned and count the unresolved bubbles left in it"
                - "Write the five-step order for working tracked changes on one page"
                - "Run a compare between your sent and returned versions on the next draft"
                - "Clear hidden comments and document properties before the next external send"
            - name: Turning compliance and legal review comments
              description: |-
                ## Purpose
                Before a book or memo leaves the bank, compliance, the control room or counsel may return comments of their own: a missing disclaimer, a forward-looking statement that needs a legend, a source that cannot be cited, a name that must come out. These are not style preferences and cannot be argued away at midnight, so they need their own lane in the comment log and a clear owner for each one.

                ## Milestones
                1. A separate tag in the comment log for compliance and legal comments, never merged with deal team comments.
                2. Each compliance or legal comment turned exactly as written, or queried through your associate rather than changed.
                3. A short list of the review comments your group receives most often, kept beside the tick-back.
                4. Every client-facing send on your deals cleared by the required review before it goes out.

                ## Notes
                Treat these comments as requirements. If a deal team comment conflicts with a compliance comment, stop and raise it with your associate; do not choose between them yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every compliance and legal review comment on your deals for one quarter logged under its own tag and turned or formally queried before the send."
                cadence: rolling
              tasks:
                - "Add a compliance and legal tag to your comment log"
                - "Ask your associate which reviews each client-facing send must clear"
                - "Note the review comments your group receives most often"
                - "Update the list of common review comments @recurring(monthly:19)"
            - name: Turn playbook handed on at promotion to associate
              description: |-
                ## Purpose
                Moving up to associate flips you from receiving markups to consolidating and giving them, and the system you built as an analyst is worth more written down than lost. A short playbook, your log format, cover note, tick-back, senior profiles with anything personal removed and the lessons from your post-mortems, helps the analyst who inherits your seat and sets the standard you will now expect.

                ## Milestones
                1. A playbook of no more than six pages covering log, questions, cover note, tick-back and the night-before plan.
                2. Senior style notes reviewed and stripped of anything personal or unfair before sharing.
                3. A walk-through held with the analyst taking over your deals.
                4. Your own markup habits as a new associate checked against the playbook after one month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook of six pages or fewer handed to your successor analyst in a walk-through, with your first month of associate markups checked against it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the five habits from your analyst years you would hand on first"
                - "Draft the playbook sections from your existing log and checklists"
                - "Book a walk-through with the analyst inheriting your deals"
                - "Compare your first month of associate markups with the playbook"
            - name: Comment pattern analysis across a full deal
              description: |-
                ## Purpose
                At the end of a deal you have months of comment logs, and they tell a story about where drafts kept going wrong: sourcing, storyline, late data, conflicting seniors. Analysing them once, by page type, senior and stage, gives the team concrete changes for the next deal and gives you material for your review.

                ## Milestones
                1. All comment logs from one finished deal combined.
                2. Comments grouped by page type, source and stage of the deal.
                3. The three biggest sources of comments identified with examples.
                4. A one-page summary shared with the deal team.

                ## Notes
                Ask the agent to draft a first summary from the combined log, then check the counts yourself before sharing.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page analysis of comments across one finished deal, naming the three biggest sources, shared with the deal team."
                cadence: rolling
              tasks:
                - "Combine every comment log from your most recent finished deal"
                - "Group the comments by page type, source and deal stage"
                - "Ask the agent to draft a summary from the combined log"
                - "Repeat the analysis for each finished deal @recurring(quarterly)"
            - name: Teaching new juniors to turn comments
              description: |-
                ## Purpose
                Most groups leave new analysts to learn comment handling by getting it wrong, which costs the whole team sleep. A short teach-in, using real anonymised markups, the log, the tick-back and the cover note, gives new joiners the routine on day one and makes you the person seniors trust with training.

                ## Milestones
                1. A thirty-minute teach-in outline using three real markups with client details removed.
                2. Exercises: log a markup, write the questions, tick back a turned draft.
                3. The teach-in delivered to the new analyst class or a new joiner.
                4. Feedback from attendees and one senior recorded.

                ## Notes
                Remove client names and numbers from any training material, and check with compliance if unsure.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A thirty-minute teach-in on turning comments delivered to new juniors, with attendee feedback recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose three past markups and strip out client details"
                - "Write a thirty-minute outline with three exercises"
                - "Offer the session to the new analyst class"
                - "Refresh the teach-in before each new class arrives @recurring(yearly)"
            - name: Group standard for comment turns
              description: |-
                ## Purpose
                When each analyst invents their own log, cover note and tick-back, seniors cannot tell what they are receiving. A light group standard, one log format, one cover note shape, one definition of done, agreed with the associates and kept short, makes every turn readable and hand-overs easy.

                ## Milestones
                1. Current practice gathered from five analysts and two associates.
                2. A one-page group standard drafted.
                3. The standard agreed with the associates and a VP sponsor.
                4. The standard reviewed every quarter with feedback from the analysts.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page group standard for comment turns agreed with associates and a VP sponsor, with a quarterly review scheduled."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask five analysts and two associates how they log and return turns"
                - "Draft a one-page group standard from what works best"
                - "Get the associates and a VP sponsor to agree it"
                - "Collect analyst feedback and update the standard @recurring(quarterly)"
---

# Turning Comments from Seniors

Turning comments is the part of banking nobody teaches properly: a VP's scrawl on a printed page, an MD's three-word email at midnight, a pile of sticky notes from a client call, and a draft due back before the morning meeting. This area starts with foundations (reading markup symbols, a comment log, a turn brief, batched questions and a tick-back before sending), then the operating routines that keep turns clean, the skills of interpreting and executing hard comments, improvements that cut turn time and repeat comments, the high-stakes turns themselves, variants for interns, first-years, associates, VPs, offshore teams and boutique bankers, and specialist work on committee comments and group standards.

What repeats is a daily end-of-day sweep of open comments, a Monday re-read of each senior's last markup, a Friday look at repeat comments, and monthly upkeep of turn timings, comment counts, a phrase bank and your miss post-mortems, with quarterly refreshes of senior preferences and team protocols. The **Metrics log**, **Person**, **Operational checklist**, **Feedback themes**, **1:1** and **Development plan** templates pair with the turn log, the senior profiles, the tick-back, the miss review, associate check-ins and the first-year plan. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
