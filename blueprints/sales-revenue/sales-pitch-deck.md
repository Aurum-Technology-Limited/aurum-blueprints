---
id: sales-revenue.sales-pitch-deck
name: Sales Pitch Deck
description: "One core sales deck that opens on the buyer's problem, with cleared proof, a single master file, monthly releases, talk tracks and variants for each segment and buyer."
category: business
version: 1.0.0
tags: [sales-revenue, sales-pitch-deck, team, founder, small-business, sales-narrative, slide-design, messaging]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - purchase-decision
    - skills-matrix
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Pitch Deck
          description: "Building and maintaining the core sales deck and its variants for each segment, so every rep tells the same compelling story about the problem."
          projects:
            - name: Inventory of every sales deck in circulation
              description: |-
                ## Purpose
                Most teams believe they have one sales deck and actually have a dozen: the official one, three regional edits, a founder's favourite and whatever each rep saved to their desktop last year. Collecting every version in one folder shows how far the story has drifted and which slides reps actually trust, which is the raw material for everything else in this area.

                ## Milestones
                1. Every deck currently shown to prospects collected in one folder, with the name of the person who uses it.
                2. Each deck dated by its last edit and tagged as official, edited or home-made.
                3. A list of the slides that appear in most versions, and the ones only one rep uses.
                4. A one-page summary of how many versions exist and where they disagree on claims or numbers.

                ## Notes
                Ask for decks without judgement. Reps hide their own versions if the request sounds like an audit they can fail.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One folder holds every deck shown to prospects in the last six months, with a summary of the versions and where their claims differ."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask every rep to send the deck they used in their last three first meetings"
                - "Search shared drives and the CRM for files with deck or pitch in the name"
                - "Tag each deck as official, edited or home-made with its last edit date"
                - "Write a one-page summary of where the versions disagree"
            - name: Defining when the deck is used in the sales cycle
              description: |-
                ## Purpose
                A deck that tries to be the cold opener, the discovery guide, the demo and the proposal ends up doing none of them well. Deciding the exact moment it is shown, usually the first meeting after a short discovery, and what the buyer should believe when it ends, gives every later slide decision a test to pass.

                ## Milestones
                1. The stage or meeting where the core deck is shown written in one sentence.
                2. The one belief and the one next step the deck should produce stated in writing.
                3. A list of jobs the deck will not do, with the asset that does each one instead.
                4. The definition agreed with the sales lead and added to the deck's cover notes.

                ## Notes
                A useful default: the deck frames the problem and the approach, and discovery and the demo carry the detail.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written definition of when the deck is shown, the belief it creates and the next step it asks for, agreed by the sales lead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask five reps at which meeting they open the deck today"
                - "Write the one belief a buyer should hold when the deck ends"
                - "List the jobs the deck should hand to the demo, proposal or one-pagers"
                - "Agree the definition with the sales lead and note it on the cover slide notes"
            - name: Problem statement in the buyer's own words
              description: |-
                ## Purpose
                Buyers lean in when the opening slides describe their situation in language they would use themselves, and switch off at vendor phrases nobody says out loud. Pulling the exact words customers used on recorded calls and in win interviews gives the deck an opening that sounds like the buyer's week rather than your marketing page.

                ## Milestones
                1. At least twenty verbatim buyer phrases about the problem collected from calls, emails and interviews.
                2. The phrases grouped into three or four recurring pains.
                3. A two-sentence problem statement written using the buyer's words, not internal terms.
                4. The statement tested on two current customers, who confirm it describes their situation before they bought.

                ## Notes
                Keep the phrase list. It feeds headlines, talk tracks and segment variants for years.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A problem statement built from at least twenty verbatim buyer phrases, confirmed by two customers as an accurate description of their situation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull ten recorded discovery calls and note every phrase the buyer used about the problem"
                - "Group the phrases into three or four recurring pains"
                - "Draft a two-sentence problem statement using only the buyer's words"
                - "Read the statement to two customers and ask what is wrong with it"
                - "Add new buyer phrases from recent call recordings to the list @recurring(monthly:27)"
            - name: Narrative outline before any slides are built
              description: |-
                ## Purpose
                Slides built before the story is settled turn into a pile of facts in no particular order. Writing the argument first as a short outline, from the change in the buyer's world through the cost of standing still, the better way, how you deliver it and the proof, keeps the deck to one line of reasoning a rep can tell from memory.

                ## Milestones
                1. A one-page outline with five to seven beats, each written as a full sentence.
                2. Each beat linked to the evidence that supports it.
                3. Company history and team slides moved to the end or an appendix.
                4. The outline read aloud to a colleague who can retell it from memory afterwards.

                ## Notes
                If the outline only works with the slides on screen, the argument is not clear yet.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page narrative outline of five to seven beats exists, and a colleague who heard it once can retell it in their own words."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the change in the buyer's world as one opening sentence"
                - "Draft the remaining beats as full sentences on one page"
                - "Note the proof that supports each beat"
                - "Read the outline to a colleague and ask them to retell it"
            - name: One-sentence headline storyboard
              description: |-
                ## Purpose
                Writing every slide's headline as a full sentence, and reading only the headlines in order, shows whether the deck makes its case before any design time is spent. A storyboard of twelve to fifteen headlines on cards or a single page is the cheapest place to cut, reorder and argue.

                ## Milestones
                1. Twelve to fifteen slide headlines written as full sentences, one per card or line.
                2. The headlines read in order as a coherent argument without any slide bodies.
                3. Duplicate or weak headlines cut or merged.
                4. The final storyboard signed off by the deck owner before design starts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A storyboard of no more than fifteen sentence headlines, approved by the deck owner, exists before slide design begins."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn each outline beat into one or more sentence headlines"
                - "Lay the headlines out on cards or one page in order"
                - "Read only the headlines aloud and cut any that repeat"
                - "Get the deck owner to approve the storyboard before design"
            - name: Deck owner and change approval rights
              description: |-
                ## Purpose
                Without a named owner, the deck either never changes or changes every week depending on who complained last. Naming one person who decides what goes in, with clear rules for who can request a change and who can approve claims, pricing or customer names, keeps the story stable without freezing it.

                ## Milestones
                1. One named owner for the core deck, usually in sales enablement, product marketing or the founder.
                2. A short list of who approves claims, customer names and pricing slides.
                3. A simple rule for what reps may edit locally and what they may not.
                4. The ownership note pinned in the sales channel and on the deck's first page of notes.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written note names the deck owner, the approvers for claims and pricing, and what reps may edit, and it is pinned where the team will see it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Agree with the sales lead who owns the core deck"
                - "List who approves claims, customer names and pricing slides"
                - "Write the rule for which slides reps may edit for a single deal"
                - "Pin the ownership note in the team's sales channel"
            - name: Single master file and version naming
              description: |-
                ## Purpose
                Version chaos is the most common reason a buyer sees last year's customer count or a retired product. One master file in one shared location, with a plain naming rule and a visible version number on the cover, means any rep can confirm in five seconds that they are presenting the current story.

                ## Milestones
                1. One master file in a shared location, linked from the sales channel and the CRM.
                2. A naming rule such as product, segment, version and month.
                3. A version number and month visible on the cover slide.
                4. Old versions moved to an archive folder that reps cannot share from.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single master deck with a visible version number sits in one shared location, and every older official version is archived."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the one shared folder that holds the master deck"
                - "Write a naming rule and rename the current master to match it"
                - "Add a version number and month to the cover slide"
                - "Move every older official version to an archive folder"
            - name: Cleared customer proof for the deck
              description: |-
                ## Purpose
                Logos, quotes and outcome numbers are the slides buyers remember, and they are also the slides most often used without permission or with figures nobody can trace. Gathering a short set of cleared proof points, each with written consent and a source for every number, protects customer relationships and gives reps proof they can repeat with confidence.

                ## Milestones
                1. Every logo, quote and number in the current deck traced to a source or flagged.
                2. Written permission on file for each customer named.
                3. Three to five quantified outcomes, each with the customer, the measure and the period.
                4. Unsupported or unapproved proof removed from the master.

                ## Notes
                A number with a period and a baseline (for example, from four days to one day over six months) is believed. A bare percentage rarely is.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every customer logo, quote and outcome figure in the master deck has written permission and a recorded source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every logo, quote and figure in the current master deck"
                - "Find the written permission or source for each item"
                - "Ask account managers for three outcomes customers will let you name"
                - "Remove any proof without permission or a source"
                - "Check new case studies for numbers ready to use in the deck @recurring(quarterly)"
            - name: Slide template and visual standards
              description: |-
                ## Purpose
                Every rep who has ever squeezed a paragraph onto a slide was working without a template that made the right choice easy. A master layout with a few fixed slide types, a minimum font size that reads on a shared laptop screen, and a colour palette with enough contrast keeps the deck legible on a projector, a video call and a phone.

                ## Milestones
                1. Six to eight slide layouts: title, headline and visual, comparison, data, quote, section break.
                2. A minimum body font size and a contrast check for text on every background.
                3. The template tested on a shared screen in a video call and on a phone.
                4. The master deck rebuilt on the new template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The master deck uses a template of six to eight layouts with a stated minimum font size, and it was checked on a video call and a phone."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the six to eight slide layouts the deck really needs"
                - "Set a minimum body font size and check contrast on each background"
                - "Share the template on a video call and view it on a phone"
                - "Rebuild the master deck on the new template"
            - name: Baseline of how the current deck performs
              description: |-
                ## Purpose
                Before changing the deck, it helps to know how the current one is doing, or the rewrite will be judged on taste alone. Recording how many first meetings that use it reach an agreed next step, and how confident reps feel presenting it, gives a starting number to beat.

                ## Milestones
                1. The share of first meetings in the last quarter that ended with a booked next step.
                2. A five-question rep survey on confidence and the slides they skip.
                3. The three slides reps most often skip or apologise for listed.
                4. The baseline recorded in a log with the date and the deck version.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated log records the current next-step rate from first meetings and the rep confidence survey results for the current deck version."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull last quarter's first meetings from the CRM and count those with a next step"
                - "Send reps a five-question survey on the deck"
                - "List the three slides reps skip most often"
                - "Record the baseline in a metrics log with the deck version"
            - name: Monthly deck release and change log
              description: |-
                ## Purpose
                Small fixes made the moment someone asks for them leave reps never quite sure what changed. Bundling changes into one monthly release, with a short note listing what moved and why, gives the deck a rhythm the team can trust and a history you can check when a claim is questioned.

                ## Milestones
                1. A change log at the back of the master deck or alongside it, with date, version and changes.
                2. A fixed day each month when approved changes go live.
                3. A short release note posted to the team for every release.
                4. Urgent fixes, such as a wrong figure, allowed outside the cycle and logged the same way.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the deck has a dated version, a change log entry and a release note posted to the team."
                cadence: rolling
              tasks:
                - "Create a change log with columns for date, version, slide and reason"
                - "Gather approved change requests for the coming release @recurring(monthly:9)"
                - "Publish the new version and post the release note to the team @recurring(monthly:12)"
                - "Agree what counts as an urgent fix that skips the monthly cycle"
            - name: Slide feedback channel for reps
              description: |-
                ## Purpose
                Reps notice first when a slide confuses buyers or a competitor's claim has made one look weak, but the feedback usually dies in a call debrief. A single channel or form for slide feedback, triaged weekly, turns field experience into deck changes and shows reps their notes are read.

                ## Milestones
                1. One form or channel for slide feedback, asking for slide number, what happened and the deal.
                2. A weekly triage that sorts each item into fix now, next release or decline.
                3. Every rep who sent feedback told what happened to it.
                4. A running list of recurring themes kept for the quarterly review.

                ## Notes
                Start from the **Feedback themes** template to keep the recurring themes in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every slide feedback item submitted is triaged within a week and the sender is told the outcome."
                cadence: rolling
              tasks:
                - "Set up a short slide feedback form with slide number and deal fields"
                - "Announce the form in the next team meeting"
                - "Triage new slide feedback into fix now, next release or decline @recurring(weekly:fri)"
                - "Reply to each rep with what happened to their note"
            - name: Stale numbers and claims check
              description: |-
                ## Purpose
                Customer counts, funding figures, uptime claims and integration lists go out of date quietly, and a buyer who spots one wrong number starts doubting the rest. A short monthly pass over every figure and factual claim, checked against its source, catches the drift before a prospect does.

                ## Milestones
                1. A list of every number and factual claim in the master deck with its source.
                2. Each source checked and the figure updated or removed.
                3. Claims about competitors checked against their current public pages.
                4. The check recorded in the change log with the date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every figure and claim in the master deck has been checked against its source within the last month, with the check logged."
                cadence: rolling
              tasks:
                - "List every number and factual claim in the deck next to its source"
                - "Check each figure against its source and update the deck @recurring(monthly:5)"
                - "Compare competitor claims with their current public pages"
                - "Log the date of each check in the change log"
            - name: Customer logo and quote permission register
              description: |-
                ## Purpose
                Permission to name a customer is often given once by a contact who has since left, and some contracts limit publicity. A register showing which customers may appear, in which form and until when, lets the deck owner remove a logo the day a customer churns or withdraws consent.

                ## Milestones
                1. A register listing each named customer, what may be used, who agreed and when.
                2. Any contract publicity limits noted for each customer.
                3. Churned or withdrawn customers removed from the deck within a week.
                4. Permissions older than two years reconfirmed in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A permission register covers every customer named in any deck version, and no permission in use is older than two years without reconfirmation."
                cadence: rolling
              tasks:
                - "Build a register of named customers with consent date and contact"
                - "Ask legal or the account owner about publicity limits in each contract"
                - "Review the register for churned customers and old consents @recurring(quarterly)"
                - "Email customers whose consent is over two years old to reconfirm"
            - name: Retiring old deck versions from shared drives
              description: |-
                ## Purpose
                Old copies linger in shared drives, email attachments and the CRM's file tab, and search results surface them before the master. A quarterly sweep that finds and archives superseded versions, and leaves a pointer to the current one, stops a new rep from presenting a deck that was retired a year ago.

                ## Milestones
                1. The places old decks usually hide listed: drives, CRM attachments, team chat, enablement tools.
                2. Superseded versions archived or replaced with a link to the master.
                3. Reps' personal copies older than the current release flagged to their owners.
                4. The sweep date and number of files retired recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a sweep archives superseded deck versions and records how many were found, with none older than two releases left in shared folders."
                cadence: rolling
              tasks:
                - "List every place old deck files tend to be stored"
                - "Search shared drives and the CRM for superseded deck versions @recurring(quarterly)"
                - "Replace each old file with a short pointer to the master"
                - "Message reps whose personal copies are out of date"
            - name: Slide view analytics from shared decks
              description: |-
                ## Purpose
                Sharing tools that send decks as tracked links show which slides buyers open, how long they stay and where they stop. Reading that data monthly tells you which slides earn attention after the meeting and which ones every buyer skips, evidence that is far better than opinion in the next review.

                ## Milestones
                1. Decks sent after meetings shared as tracked links rather than attachments.
                2. A monthly export of views and time per slide for the core deck.
                3. The three most and least viewed slides listed each month.
                4. Findings added to the feedback themes for the quarterly review.

                ## Notes
                Tell buyers you share decks through a link that records views, in line with your privacy policy.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A monthly note lists the most and least viewed slides from tracked deck links, and it is used in each quarterly review."
                cadence: rolling
              tasks:
                - "Check whether your sharing tool records views per slide"
                - "Ask reps to send the deck as a tracked link after meetings"
                - "Export slide views and time per slide for the core deck @recurring(monthly:24)"
                - "Add the most and least viewed slides to the feedback themes"
            - name: Monthly listen to recorded deck walk-throughs
              description: |-
                ## Purpose
                How a slide is narrated matters as much as what is on it, and the only way to know is to listen. Hearing five recorded first meetings each month, with attention to where buyers interrupt, ask questions or go quiet, shows which slides work in the room and which ones reps rush past.

                ## Milestones
                1. Five recorded first meetings that used the deck chosen each month across different reps.
                2. Notes on the slides where buyers asked questions, pushed back or disengaged.
                3. Any slide that reps narrate in conflicting ways flagged.
                4. Findings fed into the talk track and the next release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes from five recorded deck walk-throughs are written each month, with at least one finding sent to the deck owner."
                cadence: rolling
              tasks:
                - "Pick five recorded first meetings from different reps that used the deck"
                - "Listen to five recorded deck walk-throughs and note buyer reactions per slide @recurring(monthly:16)"
                - "Flag slides that reps explain in different ways"
                - "Send the month's findings to the deck owner"
            - name: Quarterly deck review with sales and marketing
              description: |-
                ## Purpose
                Sales and marketing often own different halves of the story, and the deck is where they collide. A quarterly review that brings the feedback themes, slide analytics and call notes to both leads gives one place to settle disagreements and agree the bigger changes the monthly release cannot carry.

                ## Milestones
                1. A standing quarterly meeting with the sales lead, marketing lead and deck owner.
                2. A one-page pack of feedback themes, slide analytics and call findings sent beforehand.
                3. Decisions recorded on which slides to change, cut or test.
                4. Agreed changes scheduled into the next monthly release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter a review meeting records decisions on the deck, and every agreed change appears in a release within six weeks."
                cadence: cyclic
              tasks:
                - "Book the quarterly review with the sales and marketing leads"
                - "Hold the quarterly deck review and record the decisions @recurring(quarterly)"
                - "Ask the agent to summarise the quarter's feedback themes and analytics into one page"
                - "Schedule agreed changes into the next release"
            - name: Annual narrative rewrite
              description: |-
                ## Purpose
                Markets move, and a deck that has only had monthly edits slowly turns into last year's argument with new logos. Once a year, rewriting the narrative outline from scratch, starting from fresh buyer interviews and the year's win and loss reasons, keeps the opening relevant rather than merely tidy.

                ## Milestones
                1. Fresh buyer phrases and the year's top win and loss reasons gathered.
                2. A new narrative outline written without looking at the old slides.
                3. The new outline compared with the current deck and the differences listed.
                4. A rewritten deck released as a major version.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Once a year a new narrative outline is written from fresh buyer evidence and released as a new major version of the deck."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Start the annual rewrite by collecting fresh buyer interviews and win and loss reasons @recurring(yearly)"
                - "Write a new outline without opening the current deck"
                - "List the differences between the new outline and the current slides"
                - "Release the rewritten deck as a new major version"
            - name: Writing action titles that state the point
              description: |-
                ## Purpose
                A title like Our platform tells the buyer nothing, while Teams lose two days a month to manual reconciliation tells them exactly why the slide exists. Learning to write every slide title as the conclusion the buyer should draw makes the deck readable from titles alone and much easier to present.

                ## Milestones
                1. The difference between topic titles and action titles understood, with five examples of each.
                2. Every title in the master deck rewritten as a full-sentence conclusion.
                3. Each title kept to two lines or fewer at the template's font size.
                4. A colleague reads only the titles and can summarise the argument.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every slide in the master deck has a full-sentence action title of no more than two lines, and a colleague can summarise the deck from titles alone."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect five topic titles from the current deck and rewrite each as a conclusion"
                - "Rewrite every remaining title as a full sentence"
                - "Trim any title that runs past two lines"
                - "Ask a colleague to summarise the deck from the titles only"
            - name: Framing the shift from the old way to the new way
              description: |-
                ## Purpose
                The strongest sales narratives open on a change in the world that makes the buyer's current approach riskier, rather than on the product. Practising how to name that shift, show who wins and who loses from it, and only then introduce your approach, gives reps an opening that feels like insight instead of a pitch.

                ## Milestones
                1. The undeniable change affecting your buyers written in one sentence, with evidence.
                2. Winners and losers from the change described in buyer terms.
                3. The old way and the new way contrasted on one slide without naming your product.
                4. The opening rehearsed and tried in at least three real first meetings.

                ## Notes
                The shift must be something the buyer already half believes. If you have to argue it for five minutes, choose a different one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An opening that names a market shift and contrasts the old and new way has been used in at least three first meetings, with buyer reactions noted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the change in your buyers' world in one sentence with a source"
                - "Describe who wins and who loses if they ignore it"
                - "Draft one slide contrasting the old way and the new way"
                - "Try the opening in three first meetings and note the reactions"
            - name: Turning feature slides into problem and outcome slides
              description: |-
                ## Purpose
                Feature slides are the easiest to write and the quickest way to lose a buyer who has not yet agreed they have a problem. Learning to rebuild each one as the problem it solves, the outcome it produces and the proof it works keeps the product in the deck without letting it take over.

                ## Milestones
                1. Every feature slide in the deck listed.
                2. Each feature mapped to the buyer problem it solves and a measurable outcome.
                3. Feature slides rewritten in problem, outcome, proof order, or moved to the appendix.
                4. No more than a third of the core deck spent on product detail.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Each feature slide in the core deck is rewritten as problem, outcome and proof or moved to the appendix, and product detail takes no more than a third of the core."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every slide that describes a feature"
                - "Write the buyer problem and outcome for each feature"
                - "Rewrite or move each feature slide to the appendix"
                - "Count how many core slides are now about product detail"
            - name: Data slides that make one point
              description: |-
                ## Purpose
                Charts pasted from a spreadsheet usually show everything and prove nothing. Learning to choose one comparison per chart, label the number that matters directly, and grey out the rest turns data slides from something reps skip into the moment a buyer asks for a copy.

                ## Milestones
                1. Every chart in the deck listed with the single point it should make.
                2. Each chart redrawn to show only the data that supports that point.
                3. The key number labelled on the chart and repeated in the title.
                4. Legends, gridlines and decimals removed wherever they do not help.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every chart in the core deck makes one stated point, with the key figure labelled directly and repeated in the slide title."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the one point each chart in the deck should make"
                - "Redraw each chart with only the data that supports its point"
                - "Label the key number directly on the chart"
                - "Remove gridlines, legends and decimals that add nothing"
            - name: Talk track for every core slide
              description: |-
                ## Purpose
                Two reps presenting the same slides can tell completely different stories, and buyers notice when a second meeting contradicts the first. A short talk track in the speaker notes of each core slide, with the point, a sentence to open with and the question to ask, keeps the story consistent while leaving reps room to sound like themselves.

                ## Milestones
                1. Speaker notes on every core slide with the point, an opening line and a check-in question.
                2. Each talk track short enough to glance at mid-call, under sixty words.
                3. The talk track checked against two of the best recorded walk-throughs.
                4. Two reps who present it confirm it sounds natural spoken aloud.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every core slide carries a talk track of under sixty words in its notes, reviewed by two reps who present the deck."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Transcribe how your best presenter narrates the first five slides"
                - "Write the point, an opening line and a question in each slide's notes"
                - "Cut any talk track over sixty words"
                - "Ask two reps to present from the notes and mark what sounds stiff"
            - name: Building check-in questions into the pitch
              description: |-
                ## Purpose
                Monologue is the default failure of a sales deck: twenty minutes of slides, then a polite silence. Planting three or four questions at fixed points, such as after the problem and before the approach, turns the deck into a conversation and tells the rep whether to speed up, slow down or skip ahead.

                ## Milestones
                1. Three or four check-in points chosen in the core deck.
                2. An open question written for each, tied to the slide before it.
                3. A plan for what to do with a yes, a no or a surprise answer at each point.
                4. The questions used in five live meetings and the answers recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The core deck has three or four planned check-in questions, used in five live meetings with the buyer answers recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark three or four places in the deck where a buyer should be asked something"
                - "Write an open question for each check-in point"
                - "Note how to respond if the buyer disagrees at each point"
                - "Use the questions in five meetings and record the answers"
            - name: Simplifying a busy slide
              description: |-
                ## Purpose
                Most decks have a few slides that try to say everything at once: the architecture diagram, the full feature grid, the timeline with twenty boxes. Learning to split, cut or build these in stages, so the buyer sees one idea at a time, is a skill reps and deck owners use every time a slide request comes in.

                ## Milestones
                1. The five busiest slides in the deck identified by word count and element count.
                2. Each busy slide given one point it must make.
                3. Each rebuilt as a simpler slide, a staged build or two slides.
                4. Removed detail moved to the appendix rather than deleted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The five busiest slides in the core deck are rebuilt so each makes one point, with removed detail kept in the appendix."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count the words and elements on every slide and pick the five busiest"
                - "Write the one point each busy slide must make"
                - "Rebuild each as a simpler slide, a staged build or two slides"
                - "Move the removed detail into the appendix"
            - name: Choosing where the deck is built and shared
              description: |-
                ## Purpose
                Teams outgrow a presentation file passed around by email when they need locked master slides, tracked sharing and a library reps can search. Comparing two or three options, from the presentation software you already pay for to a dedicated sales content tool, against how the team really works stops you buying features nobody will use.

                ## Milestones
                1. Requirements written: locked slides, version control, tracked links, CRM link, cost per seat.
                2. Two or three options shortlisted, including staying with current tools.
                3. Each option tried with the real deck by two reps for a week.
                4. A decision recorded with cost, owner and a migration date.

                ## Notes
                Start from the **Purchase decision** template. Check what the CRM or presentation tools you already pay for can do before buying anything new.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on where the deck is built and shared, based on a one-week trial of each shortlisted option with real reps."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write five must-have requirements for building and sharing the deck"
                - "Shortlist two or three options including your current tools"
                - "Ask two reps to use each option with the real deck for a week"
                - "Record the decision with cost, owner and migration date"
            - name: Modular slide library with a locked core
              description: |-
                ## Purpose
                Reps need to tailor the deck, and if they cannot do it safely they will do it badly. Splitting the deck into a locked core story, a set of approved modules for industries, buyer roles and objections, and an appendix lets reps assemble a tailored deck in minutes without rewriting the claims.

                ## Milestones
                1. The core slides that must appear in every version marked and locked.
                2. Approved modules grouped by industry, buyer role, use case and objection.
                3. An appendix of backup slides for detailed questions.
                4. A one-page guide showing reps how to build a tailored deck in under ten minutes.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deck is split into a locked core, labelled modules and an appendix, and a rep can assemble a tailored version in under ten minutes."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Mark the slides that must appear in every version of the deck"
                - "Group the remaining slides into labelled modules and an appendix"
                - "Write a one-page guide to assembling a tailored deck"
                - "Time a rep building a tailored deck with the guide"
                - "Review which modules reps actually use and retire the unused ones @recurring(quarterly)"
            - name: Competitor slide decision
              description: |-
                ## Purpose
                A comparison slide can settle a buyer's doubts or start a fight about a checkbox you lose, and it ages faster than anything else in the deck. Deciding deliberately whether the core deck names competitors, compares approaches instead, or leaves the topic to a separate battle card stops reps improvising the most legally sensitive slide.

                ## Milestones
                1. Recorded meetings checked for how often buyers raise competitors unprompted.
                2. Three options compared: named comparison, approach comparison, no slide.
                3. A decision recorded with who keeps any comparison accurate.
                4. Any comparison claims checked by the person who approves claims.

                ## Notes
                Comparing approaches (spreadsheets versus a shared system, for example) dates far more slowly than naming vendors.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on how the core deck handles competitors, with any comparison claims checked by the claims approver."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count how often competitors come up unprompted in ten recorded first meetings"
                - "Draft a named comparison and an approach comparison slide"
                - "Decide with the sales lead which option the core deck uses"
                - "Ask the claims approver to check any comparison statements"
            - name: Send-ahead reading version of the deck
              description: |-
                ## Purpose
                Decks get forwarded to people who were not in the meeting, and slides built to be presented make no sense read cold. A separate reading version, with fuller titles, a short paragraph per slide and a clear next step at the end, lets your champion share the story internally without you in the room.

                ## Milestones
                1. A reading version of the core deck with fuller titles and short paragraphs.
                2. The reading version tested on someone outside sales who has never seen the pitch.
                3. A closing slide that names the next step and a contact.
                4. The reading version stored next to the master and released with it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reading version of the deck exists alongside the master, and a person outside sales who read it cold could explain the problem and the next step."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy the core deck and expand each title into a full statement"
                - "Add a short paragraph under each slide that replaces the talk track"
                - "Give the reading version to someone outside sales and ask what it says"
                - "Store the reading version next to the master and include it in releases"
            - name: Testing two openings against each other
              description: |-
                ## Purpose
                Arguments about the opening slides rarely end, because everyone has a favourite. Running two openings with half the team each for a month, and comparing how often first meetings reach a next step, replaces opinion with a result, even if the sample is small.

                ## Milestones
                1. Two openings built that differ in one thing, such as the shift or the problem statement.
                2. Reps split into two groups, each using one opening for a month.
                3. Next-step rates and rep notes compared at the end.
                4. The winning opening released, or the test extended if results are too close.

                ## Notes
                Twenty meetings per opening is a rough minimum before reading anything into the difference.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two openings have each been used in at least twenty first meetings, and the choice of opening is recorded with the next-step rates."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build two openings that differ in only one element"
                - "Split the team into two groups and assign one opening each"
                - "Tag each first meeting in the CRM with the opening used"
                - "Compare next-step rates after a month and record the decision"
            - name: Customer panel review of the deck
              description: |-
                ## Purpose
                Customers who bought recently remember what convinced them and what nearly put them off, and most will spend half an hour on a deck if asked well. Walking three or four friendly customers through the current pitch and asking where they would have stopped listening finds weak slides no internal review will.

                ## Milestones
                1. Three or four recent customers agree to a thirty-minute deck review.
                2. The pitch presented to each as it would be to a prospect.
                3. Notes taken on where each would have lost interest or doubted a claim.
                4. Changes agreed with the deck owner and a thank-you sent to each customer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three customers have reviewed the deck, and their comments led to at least two recorded changes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask account managers for four recent customers willing to review the deck"
                - "Present the pitch to each customer and note where they lose interest"
                - "Agree the resulting changes with the deck owner"
                - "Show the deck to one friendly customer for fresh comments @recurring(quarterly)"
            - name: Recorded five-minute video version of the pitch
              description: |-
                ## Purpose
                Buyers increasingly want to see the story before agreeing to a meeting, and champions want something to send their boss. A five-minute recorded walk-through of the core slides, by your best presenter, gives both of them a version that travels without a calendar invite.

                ## Milestones
                1. A script of the core story cut to five minutes.
                2. The video recorded with clear audio and the presenter visible.
                3. The video tested on two people outside the company for clarity.
                4. The video linked from the master deck and re-recorded after major releases.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recorded walk-through of the core deck of no more than five minutes is available to reps and matches the current major version."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Cut the talk track to a five-minute script"
                - "Record the walk-through with a good microphone and the presenter on camera"
                - "Ask two people outside the company what they understood"
                - "Link the video from the master deck folder"
            - name: Industry variants for each core segment
              description: |-
                ## Purpose
                Logistics and healthcare buyers can share the same underlying problem and still need to hear it in their own examples, terms and regulations. Building one variant per core segment, swapping the problem examples, proof and terms while keeping the core argument, makes the deck feel written for them without forking the story.

                ## Milestones
                1. The two to four segments that bring most revenue chosen for variants.
                2. For each segment, the problem examples, terms and proof that differ listed.
                3. A variant built for each segment from the locked core and segment modules.
                4. Each variant reviewed by a rep or customer from that segment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A segment variant exists for each of the top two to four revenue segments, each built on the locked core and reviewed by someone from that segment."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Rank segments by last year's revenue and pick the top two to four"
                - "List the examples, terms and proof that differ for each segment"
                - "Build each variant from the locked core and segment modules"
                - "Refresh one segment variant with new proof and examples @recurring(monthly:20)"
            - name: Small and large customer versions of the deck
              description: |-
                ## Purpose
                Company size changes what a buyer worries about: a twelve-person company wants speed and price certainty, while a five-thousand-person enterprise wants security, scale and a safe vendor. Two versions of the deck that reorder and swap slides for company size stop reps presenting compliance slides to a founder or a quick-start story to a procurement team.

                ## Milestones
                1. The size threshold that separates the two versions agreed with sales.
                2. The concerns of each size of buyer listed from won deals.
                3. Two versions built from the same core, with reordered and swapped slides.
                4. The CRM or rep guide telling reps which version to use.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two deck versions for smaller and larger buyers exist on the same core, with a written rule telling reps which to use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the company size that separates the two versions"
                - "List the top concerns of small and large buyers from won deals"
                - "Build both versions from the locked core"
                - "Add the rule for which version to use to the rep guide"
            - name: Buyer role slide swaps
              description: |-
                ## Purpose
                The operations lead, the finance director and the technical evaluator sit through the same pitch and each listen for something different. Preparing a few swap-in slides per role, such as a payback slide for finance or an integration slide for IT, lets reps adjust for who joined the call without rebuilding the deck.

                ## Milestones
                1. The three or four buyer roles that most often attend first meetings listed.
                2. The question each role is listening for written down.
                3. One or two swap-in slides built for each role.
                4. The swaps added to the module library with a note on when to use them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Swap-in slides exist for at least three buyer roles, filed in the module library with guidance on when to use each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the buyer roles that attend most first meetings from the CRM"
                - "Write the one question each role wants answered"
                - "Build one or two swap-in slides for each role"
                - "File the swaps in the module library with usage notes"
            - name: Founder's first sales deck before a repeatable sale
              description: |-
                ## Purpose
                Founders selling the first ten customers do not need a polished deck, they need one that tests which problem framing makes buyers lean in. A short deck of six to eight slides, rewritten after every few pitches based on what buyers said, turns early sales calls into learning and leaves a first sales hire a story that has been tested.

                ## Milestones
                1. A six to eight slide deck covering problem, why now, approach, early proof and ask.
                2. A note after every pitch on which slide sparked questions and which fell flat.
                3. The deck revised at least three times from those notes.
                4. The version that produced the most next steps saved as the base for a future hire.

                ## Notes
                Investor decks and sales decks answer different questions. Keep fundraising slides such as market size and the team out of the sales version.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A founder sales deck of no more than eight slides has been revised at least three times from written pitch notes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft six to eight slides covering problem, why now, approach, proof and ask"
                - "Write two lines after every pitch on what landed and what fell flat"
                - "Revise the deck after every third pitch"
                - "Save the best-performing version for your first sales hire"
            - name: Pitch deck for a local service business
              description: |-
                ## Purpose
                Builders, accountants, cleaning firms and agencies pitching local clients often win on trust and clarity rather than slides, but a short tidy deck still sets them apart from competitors who turn up with a price list. Eight slides covering the client's situation, how you work, recent local jobs, guarantees and the next step can be shown on a tablet or sent ahead as a file.

                ## Milestones
                1. An eight-slide deck: their situation, how you work, recent jobs, people, guarantees, prices or ranges, next step.
                2. Photos and permission from at least three recent local jobs or clients.
                3. A version that works on a tablet across a table and as a file by email.
                4. The deck used in three real pitches and adjusted after each.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An eight-slide deck with at least three permitted local examples has been used in three real pitches."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask three recent clients for permission to show their job or project"
                - "Draft eight slides from their situation through to the next step"
                - "Check the deck reads well on a tablet and as an emailed file"
                - "Use it in three pitches and note what clients asked about"
            - name: Co-branded partner and reseller deck
              description: |-
                ## Purpose
                Partners and resellers who pitch your product to their own clients will make their own slides if you do not give them good ones, usually with outdated claims. A co-branded version with space for the partner's logo and services, approved claims and clear rules on what they may change keeps your story intact when you are not in the room.

                ## Milestones
                1. A partner version of the core deck with space for the partner's logo and services.
                2. A short list of claims partners may and may not make.
                3. The deck given to each active partner with a short walk-through.
                4. Partners sent the current version after each release.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every active partner holds the current co-branded deck and a written list of permitted claims."
                cadence: rolling
              tasks:
                - "Build a partner version with a slot for the partner's logo and services"
                - "Write the list of claims partners may and may not make"
                - "Walk each active partner through the deck on a short call"
                - "Send partners the latest co-branded version after each release @recurring(quarterly)"
            - name: New rep's first week with the deck
              description: |-
                ## Purpose
                New reps usually learn the pitch by watching whoever they shadow first, and inherit that person's habits along with the story. A first-week plan built around the deck, covering the narrative, the talk track, three recorded examples and a practice run with feedback, gets every new seller telling the same story before they meet a prospect.

                ## Milestones
                1. A first-week plan with the outline, talk track and three recorded examples.
                2. The new rep presents the deck to their manager by the end of week one.
                3. Written feedback given on three strengths and three changes.
                4. The plan saved so the next hire starts from it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every rep hired in the last quarter presented the deck to their manager in their first week and received written feedback."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose three recorded walk-throughs that show the deck done well"
                - "Write a first-week plan around the outline and talk track"
                - "Book the new rep's practice presentation for the end of week one"
                - "Give written feedback with three strengths and three changes"
            - name: Relaunching the new deck to the sales team
              description: |-
                ## Purpose
                Dropped into a shared folder with an email, a rewritten deck is ignored by half the team within a month. A proper relaunch session, walking through why the story changed, demonstrating it live and having each rep present a section back, is what moves the team off their old copies.

                ## Milestones
                1. A sixty to ninety minute relaunch session booked with the whole team.
                2. The reasons for the change explained using the baseline and buyer evidence.
                3. The new deck presented live by the deck owner or best presenter.
                4. Each rep presents one section back and old versions are archived the same day.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A relaunch session was held, every rep presented one section, and old versions were archived the same day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a ninety-minute relaunch session with the whole sales team"
                - "Prepare five minutes on why the story changed, with the evidence"
                - "Assign each rep one section to present back in the session"
                - "Archive every old version on the day of the relaunch"
            - name: Product launch deck update
              description: |-
                ## Purpose
                Major product launches tend to get bolted on as three new slides at the end, which leaves the story they were meant to strengthen unchanged. Planning the deck update alongside the launch, deciding where the new capability fits in the narrative and what it replaces, means reps can present it on launch day.

                ## Milestones
                1. The launch's effect on the narrative written in two sentences.
                2. Slides to add, change and retire listed against the storyboard.
                3. The updated deck and talk track ready a week before launch.
                4. Reps briefed on the change before the launch date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The updated deck and talk track were released at least a week before the launch date, with reps briefed before launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask product marketing for the launch date and the customer problem it solves"
                - "Write where the new capability fits in the existing narrative"
                - "List slides to add, change and retire"
                - "Brief reps on the updated deck before launch day"
            - name: Rebrand migration of every deck version
              description: |-
                ## Purpose
                Rebrands change logos, colours, fonts and sometimes the company name, and the deck is where stray old branding is most visible to buyers. Migrating the master, every variant, the reading version and the partner deck to the new brand on one planned date avoids months of mixed slides in front of customers.

                ## Milestones
                1. Every deck version that needs migrating listed with an owner.
                2. The new brand template built and approved by marketing.
                3. All versions migrated and checked slide by slide before the brand launch.
                4. Old-brand versions archived on launch day.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every deck version is migrated to the new brand before the brand launch date, and no old-brand version is left in shared folders."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every deck version that carries the old brand"
                - "Get the new brand template approved by marketing"
                - "Migrate and check each version slide by slide"
                - "Archive the old-brand versions on launch day"
            - name: Price change update across deck versions
              description: |-
                ## Purpose
                When pricing or packaging changes, an old price slide in one variant can commit a rep to a number the business no longer offers. Finding every slide that mentions price, plan names or included features and updating them all before the change takes effect protects margin and avoids awkward retractions.

                ## Milestones
                1. Every slide in every version that mentions price, plans or included features found.
                2. Updated slides approved by the pricing approver.
                3. All versions updated before the new prices take effect.
                4. Reps told which slides changed and what to say to buyers already in a deal.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every deck version shows the new pricing and packaging before the effective date, with changed slides approved by the pricing approver."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search every deck version for price, plan names and feature lists"
                - "Update each slide and send them to the pricing approver"
                - "Release the updated versions before the effective date"
                - "Tell reps what to say to buyers already quoted at old prices"
            - name: Merging two companies' sales decks after an acquisition
              description: |-
                ## Purpose
                After an acquisition or merger, buyers meet reps from both sides telling two different stories about the same combined company. Agreeing one narrative, deciding which proof and products lead, and releasing a combined deck by a set date gives the joined sales teams one pitch from the first day they sell together.

                ## Milestones
                1. Both companies' decks compared and the overlaps and conflicts listed.
                2. One narrative outline agreed by both sales leads.
                3. A combined deck with merged proof and a clear product story released.
                4. Both teams trained on the combined deck in one joint session.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A combined deck with one agreed narrative is released by the target date and presented to both sales teams in a joint session."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect both companies' current decks and list where they conflict"
                - "Agree one narrative outline with both sales leads"
                - "Build the combined deck with merged proof"
                - "Run a joint session to present the combined deck to both teams"
            - name: Two, ten and thirty minute versions of the pitch
              description: |-
                ## Purpose
                Meetings get cut short, buyers arrive late and a chance hallway conversation is worth a pitch, so experienced presenters carry the same story at several lengths. Writing and rehearsing a two-minute spoken version, a ten-minute version on four slides and the full thirty-minute deck keeps the message the same whatever time is left.

                ## Milestones
                1. A two-minute spoken version with no slides.
                2. A ten-minute version on four core slides.
                3. Each length rehearsed and timed by at least two reps.
                4. All three versions stored and linked from the master deck.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two-minute, ten-minute and full versions of the pitch exist, each timed in rehearsal by at least two reps."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a two-minute spoken version of the core story"
                - "Choose the four slides that carry the ten-minute version"
                - "Time two reps rehearsing each length"
                - "Link all three versions from the master deck folder"
            - name: Linking slide usage to win rates
              description: |-
                ## Purpose
                Once tracked links and module usage are recorded, a team with enough deals can ask which slides and modules appear more often in deals that close. Joining slide data to CRM outcomes, while being honest about small samples and other causes, points the deck owner at the slides worth protecting and the ones worth testing.

                ## Milestones
                1. Deck links or modules used recorded against each opportunity in the CRM.
                2. Two quarters of slide data matched to won and lost outcomes.
                3. Slides and modules ranked by how often they appear in won versus lost deals.
                4. Findings framed as hypotheses and taken to the quarterly review.

                ## Notes
                Correlation is not cause: strong reps may simply use certain slides more. Treat findings as ideas to test, not proof.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An analysis covering at least two quarters ranks slides and modules by appearance in won and lost deals, presented at a quarterly review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add a CRM field recording the deck version and modules used"
                - "Export two quarters of slide data and deal outcomes"
                - "Ask the agent to rank slides by appearance in won versus lost deals"
                - "Compare slide usage with closed deal outcomes @recurring(quarterly)"
            - name: Localising the deck for a new country
              description: |-
                ## Purpose
                Translation alone rarely works: currency, date formats, local proof, regulation and even which problem leads can differ in a new market. Adapting the deck with a native-speaking seller, local customer examples and checked claims gives reps in the new country a pitch that does not sound imported.

                ## Milestones
                1. Differences in problems, regulation and buying habits listed with local reps or partners.
                2. The deck translated by a fluent speaker who knows the industry, not machine output alone.
                3. Local proof added or the absence of it handled honestly.
                4. Currency, units, dates and legal claims checked for the country.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A localised deck reviewed by a fluent speaker from the industry, with local currency, formats and claims checked, is in use in the new country."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Ask local reps or partners which problem leads in their market"
                - "Brief a fluent industry translator on the narrative and terms"
                - "Replace currency, units, dates and proof for the country"
                - "Ask the claims approver to check local legal and regulatory statements"
            - name: Claims substantiation file for regulated industries
              description: |-
                ## Purpose
                In health, finance and other regulated sectors, a performance or compliance claim on a slide can be treated like advertising, and buyers' compliance teams will ask for evidence. Keeping a substantiation file that links every claim to its evidence and the approval date makes those questions quick to answer and keeps risky wording out of the deck.

                ## Milestones
                1. Every performance, security and compliance claim in the deck listed.
                2. Each claim linked to evidence such as test results, certificates or customer data.
                3. Wording reviewed by your legal or compliance adviser.
                4. Unsupported claims softened or removed from all versions.

                ## Notes
                This organises evidence for review. Whether a claim is acceptable is a judgement for your legal or compliance adviser.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A substantiation file links every performance, security and compliance claim in the deck to evidence and a dated adviser review."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every performance, security and compliance claim in the deck"
                - "Attach the evidence for each claim in one file"
                - "Send the wording to your legal or compliance adviser for review"
                - "Re-check the substantiation file against current evidence @recurring(yearly)"
            - name: Pitch certification for everyone presenting the deck
              description: |-
                ## Purpose
                Once a team grows past a handful of sellers, the only reliable way to know everyone tells the story well is to watch each of them do it. A short certification, where each rep presents the core deck to a panel and is scored on the same few criteria, sets a clear bar and shows managers where coaching is needed.

                ## Milestones
                1. Five scoring criteria agreed, such as opening, problem framing, check-ins, proof and next step.
                2. Every rep presenting the deck scored by a panel of two.
                3. Reps below the bar given a retake date and coaching notes.
                4. Scores recorded so improvement can be seen at the next round.

                ## Notes
                Start from the **Skills matrix** template to record scores by rep and criterion.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every rep who presents the deck has been scored on five agreed criteria within the last year, with retakes booked for anyone below the bar."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Agree five scoring criteria with the sales lead"
                - "Schedule each rep to present the core deck to a two-person panel"
                - "Record each score in a skills matrix"
                - "Recertify every presenter after the annual rewrite @recurring(yearly)"
---

# Sales Pitch Deck

This area is for sales teams, founders and small business owners who need one deck that tells the buyer's problem better than the buyer can, and that every rep presents the same way. It starts with the foundations (finding every copy in circulation, agreeing when the deck is used, writing the narrative before the slides and putting one owner and one master file in charge), then the routines that keep it accurate, the slide writing and presenting skills, decisions about structure and format, variants for segments, founders and local businesses, the dated moments such as relaunches and rebrands, and the specialist work of linking slides to win rates.

What repeats is a Friday triage of rep feedback, a monthly release with a change log, monthly checks on stale numbers, slide analytics and recorded walk-throughs, quarterly reviews with sales and marketing, and a yearly narrative rewrite. The Metrics log, Feedback themes, Purchase decision and Skills matrix templates pair with the baseline, feedback channel, software choice and certification projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
