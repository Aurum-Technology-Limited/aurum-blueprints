---
id: sales-revenue.sales-playbook-development
name: Sales Playbook Development
description: "A written account of how your team really sells: segments, buyer roles, stage exit criteria, plays and handoffs, plus the routines that keep the playbook current, short and used."
category: business
version: 1.0.0
tags: [sales-revenue, sales-playbook-development, manager, founder, team, sales-process, playbook, stage-definitions]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - purchase-decision
    - feedback-themes
    - metrics-log
    - reading-queue
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Playbook Development
          description: "Writing down how the team sells, from target segments and stage definitions to scripts and exit criteria, so success is repeatable rather than heroic."
          projects:
            - name: Playbook scope, audience and owner
              description: |-
                ## Purpose
                Most playbooks stall because nobody decided who they are for, what version one must cover and who has the final say on wording. Settling the audience (new hires, the whole team, partners), a short scope for the first release and one named owner turns a vague wish into a project with an end date.

                ## Milestones
                1. The primary reader named, for example a seller in their first ninety days.
                2. A version one scope of no more than eight sections, agreed with the sales lead.
                3. One playbook owner and one backup named in writing.
                4. A target date for version one recorded and shared with the team.

                ## Notes
                Resist covering every motion in version one. A playbook that covers the main new-business motion well beats one that covers six motions thinly.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page scope note names the reader, up to eight version one sections, the owner, the backup and a release date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence describing who the playbook is for first"
                - "List the sections version one must have and cut the list to eight"
                - "Agree the owner and a backup with the sales lead"
                - "Put the version one release date in the team calendar"
                - "Confirm the playbook owner and backup are still the right people @recurring(yearly)"
            - name: Top performer interviews on how deals are won
              description: |-
                ## Purpose
                Your best sellers carry the real playbook in their heads: which first question opens a buyer up, when to bring in a senior sponsor, which deals to walk away from. Six structured interviews of an hour each capture that knowledge before it walks out of the door, and give the written playbook credibility with the rest of the team.

                ## Milestones
                1. Four to six sellers chosen for consistent results, not one lucky quarter.
                2. A fixed interview guide of ten questions used in every conversation.
                3. Notes from each interview saved in one folder.
                4. A list of practices mentioned by at least three interviewees, marked as playbook candidates.

                ## Notes
                Start from the **Meeting notes** template for each interview. Ask for the last deal they won and walk it step by step; general questions get general answers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least four top performer interviews are written up and a list of practices shared by three or more of them exists."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick four to six sellers with the most consistent win rates over a year"
                - "Write a ten-question interview guide built around one recent win"
                - "Book an hour with each seller and record the conversation with consent"
                - "Ask the agent to pull common practices from the interview notes"
                - "Mark practices named by three or more sellers as playbook candidates"
            - name: Pattern review of the last twenty won deals
              description: |-
                ## Purpose
                Twenty recent wins, read side by side, show what memory hides: how many meetings the deal took, who signed, which stage dragged and what triggered the buyer to start. Those patterns become the evidence behind the stage definitions and plays, instead of the founder's favourite story.

                ## Milestones
                1. Twenty closed-won deals from the last twelve months listed with value, segment and cycle length.
                2. For each deal, the trigger, the economic buyer's role and the number of meetings recorded.
                3. Median cycle length and the slowest stage noted per segment.
                4. Three to five patterns written as plain sentences for the playbook team.

                ## Notes
                Include a few smaller wins, not only the biggest logos. The playbook has to work for the deals most reps actually close.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of twenty won deals with trigger, buyer role, meeting count and cycle length, plus at least three written patterns."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export closed-won deals from the last twelve months from the CRM"
                - "Choose twenty that span segments and deal sizes"
                - "Record trigger, signer role, meeting count and days in each stage"
                - "Write three to five patterns as plain sentences"
            - name: Current sales motion map as it really runs
              description: |-
                ## Purpose
                Before writing how the team should sell, draw how it sells today, including the workarounds: deals that skip discovery, proposals sent before a budget conversation, handoffs done by a hurried message. An honest map shows where the playbook will need to change behaviour and where it only needs to write down what already works.

                ## Milestones
                1. A one-page map of the steps from first contact to signed contract.
                2. Each step marked with who does it today and what tool or document it uses.
                3. Known shortcuts and skipped steps marked in a different colour.
                4. The map checked with two sellers and one manager for accuracy.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page current-state map of the sales motion, checked by two sellers and a manager, with shortcuts marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch every step from first contact to signature on one page"
                - "Note who owns each step today and which tool they use"
                - "Mark the steps sellers commonly skip or shortcut"
                - "Walk two sellers and a manager through the map and correct it"
            - name: Playbook outline and section owners
              description: |-
                ## Purpose
                A clear outline stops the playbook becoming a pile of slides and documents nobody can navigate. Agreeing the sections, their order and one owner per section before anyone writes means the work can be split, and each page has someone who will keep it current.

                ## Milestones
                1. An outline of sections in the order a seller meets them in a deal.
                2. One owner named for each section, with no person owning more than three.
                3. A page template with fixed headings that every section follows.
                4. Draft dates for each section agreed with its owner.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written outline lists every version one section with a named owner and a draft date against each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Order the agreed sections the way a seller meets them in a deal"
                - "Name one owner per section and check nobody holds more than three"
                - "Create a page template with fixed headings for every section"
                - "Agree a draft date with each section owner"
            - name: Target segments and no-go customers page
              description: |-
                ## Purpose
                Reps waste weeks on deals the business never wins or never wants. A single playbook page that summarises the agreed target segments in a few lines each, and names the customer types to decline, lets a seller decide in minutes whether a lead deserves a first meeting.

                ## Milestones
                1. Up to four target segments described in three lines each: who they are, why they buy, typical deal size.
                2. A short list of no-go customer types with the reason for each.
                3. A link to the full customer profile work, rather than a copy of it.
                4. The page approved by the sales lead and the founder or head of sales.

                ## Notes
                Keep this page a summary. If the segment definitions themselves are unsettled, finish that work first and come back.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary of up to four target segments and a no-go list, approved by sales leadership, sits in the playbook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three lines for each target segment covering who, why and deal size"
                - "List customer types the team should decline and why"
                - "Link to the full customer profile document instead of copying it"
                - "Get sign-off on the page from sales leadership"
            - name: Buyer roles and their priorities page
              description: |-
                ## Purpose
                Every deal involves several people who want different things: a finance lead worried about payback, an operations lead worried about disruption, an end user worried about extra work. A playbook page describing each recurring buyer role, what they ask and what proof moves them helps sellers prepare for the right person rather than repeating one pitch.

                ## Milestones
                1. Four to six buyer roles listed that appear in most won deals.
                2. For each role: their usual priorities, typical questions and the proof that persuades them.
                3. One real, anonymised quote from a buyer under each role.
                4. The page reviewed by two sellers who face these roles weekly.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A buyer roles page covers at least four roles with priorities, questions, proof and a real quote, reviewed by two sellers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the job titles that appear in at least half of recent won deals"
                - "Group the titles into four to six buyer roles"
                - "Write priorities, common questions and persuasive proof for each role"
                - "Ask two sellers to correct the page from their own deals"
            - name: Deal stage definitions with exit criteria
              description: |-
                ## Purpose
                Stage names like Qualified or Proposal mean something different to every rep, which is why forecasts drift and pipeline reviews turn into arguments. Writing each stage as a set of buyer-verified exit criteria (what the buyer has said or done, not what the seller hopes) gives the whole team one definition to sell and report against.

                ## Milestones
                1. Five to seven stages named, each with a one-line purpose.
                2. Two to four exit criteria per stage, each something the buyer has confirmed.
                3. The evidence a manager can check for each criterion noted.
                4. The definitions matched to the stages configured in the CRM.
                5. Sign-off from the sales lead and whoever runs the forecast.

                ## Notes
                Write criteria as buyer actions, such as the buyer confirmed a budget range, rather than seller actions, such as sent pricing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every deal stage has two to four buyer-verified exit criteria in the playbook, matching the CRM stages and signed off by sales leadership."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the current stage names and what each is meant to achieve"
                - "Draft two to four buyer-verified exit criteria for each stage"
                - "Note the evidence a manager could check for every criterion"
                - "Compare the definitions with the CRM stage settings and list mismatches"
                - "Re-read the exit criteria against recent wins and the CRM stages @recurring(yearly)"
            - name: Shared sales glossary
              description: |-
                ## Purpose
                When one rep says a deal is committed and another means it is merely likely, every report built on those words is unreliable. A glossary of thirty or so terms the team actually uses, each with one agreed definition, removes the ambiguity from forecasts, handoffs and new-hire conversations.

                ## Milestones
                1. Terms collected from pipeline meetings, the CRM and recent emails.
                2. One definition per term, no longer than two sentences.
                3. Terms with competing meanings settled by the sales lead.
                4. The glossary linked from the top of every playbook page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of at least twenty-five sales terms, each with one agreed definition, is linked from every playbook page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect terms used in the last three pipeline meetings"
                - "Write a definition of two sentences or fewer for each"
                - "Settle disputed terms with the sales lead in one sitting"
                - "Check the glossary for retired or missing terms @recurring(yearly)"
            - name: Choosing the playbook format and tool
              description: |-
                ## Purpose
                The format decides whether the playbook is read: a long slide deck dies within a quarter, while short searchable pages linked from the CRM get opened mid-deal. Comparing a shared document, an internal wiki and guidance built into the CRM against the same criteria settles where the single source of truth lives.

                ## Milestones
                1. Three options compared on search, editing, version history, mobile access and cost.
                2. Two sellers asked where they would actually look during a live deal.
                3. One option chosen and the reasoning written down.
                4. Every older playbook copy archived or replaced with a link to the new home.

                ## Notes
                Start from the **Purchase decision** template. One home matters more than which home: duplicates in shared drives are what kill trust.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One playbook home is chosen against written criteria and all older copies point to it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List five criteria including search, version history and mobile access"
                - "Score a document, a wiki and in-CRM guidance against the criteria"
                - "Ask two sellers where they would look in the middle of a deal"
                - "Archive old playbook copies and replace them with a link"
            - name: Playbook gap inbox and weekly triage
              description: |-
                ## Purpose
                Gaps in a playbook show up in the field: a new objection, a stage that does not fit a partner deal, a template that is out of date. One place for sellers to report them, triaged weekly by the owner, keeps fixes flowing without waiting for a quarterly rewrite.

                ## Milestones
                1. A single form or channel where anyone can report a playbook gap in under a minute.
                2. Every report tagged as fix now, batch for release or decline.
                3. Reporters told what happened to their suggestion within a week.
                4. Recurring themes reviewed each quarter.

                ## Notes
                Start from the **Feedback themes** template to group reports so repeated complaints stand out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every gap report receives a tag and a reply within seven days, with themes summarised each quarter."
                cadence: rolling
              tasks:
                - "Set up one form or channel for reporting playbook gaps"
                - "Announce the reporting route at the next team meeting"
                - "Tag new gap reports and reply to each reporter @recurring(weekly:fri)"
                - "Group the quarter's reports into themes for the playbook review"
            - name: Monthly playbook release notes
              description: |-
                ## Purpose
                Changes made quietly are changes nobody follows. A short monthly note listing what changed, why and what sellers should do differently turns playbook edits into visible releases and builds the habit of checking the playbook.

                ## Milestones
                1. A change log recording date, section, change and reason for every edit.
                2. A release note template of no more than five bullet points.
                3. Notes sent on the same day each month and archived in the playbook.
                4. One change per note highlighted for discussion in the team meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A release note goes out every month listing each playbook change with its reason, and all notes are archived in one place."
                cadence: rolling
              tasks:
                - "Create a change log with date, section, change and reason columns"
                - "Write a five-bullet release note template"
                - "Send the monthly playbook release note to the team @recurring(monthly:3)"
                - "Pick one change from each note to discuss at the team meeting"
            - name: Quarterly playbook review with the sellers
              description: |-
                ## Purpose
                Sellers stop trusting a playbook written about them rather than with them. A ninety-minute review each quarter, where sellers bring deals the playbook helped and deals where it got in the way, keeps the document honest and gives the team a stake in it.

                ## Milestones
                1. A standing quarterly session booked with all sellers and the playbook owner.
                2. Each seller brings one deal where the playbook helped and one where it did not.
                3. Agreed changes listed with an owner and a target release.
                4. The session notes linked from the playbook change log.

                ## Notes
                Start from the **Meeting notes** template so actions and owners are captured the same way each time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly review is held with sellers and produces a dated list of agreed changes, each with an owner."
                cadence: cyclic
              tasks:
                - "Book a ninety-minute playbook review with the whole team @recurring(quarterly)"
                - "Ask each seller to bring one helped deal and one hindered deal"
                - "Record agreed changes with owners in the meeting notes"
                - "Link the notes from the playbook change log"
            - name: Stage criteria spot checks on live deals
              description: |-
                ## Purpose
                Definitions only work if deals are held to them. Sampling ten open deals a month and checking each against the exit criteria of its current stage shows whether the definitions are being used, which criteria are ignored, and which ones need rewording because nobody can evidence them.

                ## Milestones
                1. Ten open deals sampled each month across reps and segments.
                2. Each deal marked as meets criteria, partly meets or does not meet.
                3. Criteria that fail repeatedly flagged for rewording or coaching.
                4. A monthly percentage of deals meeting their stage criteria recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten deals are checked against stage exit criteria every month and the percentage that meet them is recorded."
                cadence: rolling
              tasks:
                - "Pick ten open deals across reps and segments"
                - "Check each deal against its stage exit criteria @recurring(monthly:12)"
                - "Flag criteria that fail in three or more deals"
                - "Record the monthly percentage of deals meeting their criteria"
            - name: Monthly won-deal story for the playbook
              description: |-
                ## Purpose
                One short, real story a month keeps the playbook grounded in deals the team recognises. A half-page write-up of a recent win, covering the trigger, the turning point and what the seller would repeat, gives new hires examples to copy and gives the playbook fresh evidence.

                ## Milestones
                1. A half-page story format with trigger, buyers, turning point and lessons.
                2. One story written each month with the winning seller.
                3. Stories filed under the stage or play they best illustrate.
                4. Twelve stories in the library after a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One won-deal story per month is added to the playbook, filed under the stage or play it illustrates."
                cadence: rolling
              tasks:
                - "Write a half-page story format with four headings"
                - "Interview a recent winner for twenty minutes and write the story @recurring(monthly:20)"
                - "File each story under the stage or play it illustrates"
                - "Ask the seller to check the story before it is published"
            - name: Section freshness audit and page owners
              description: |-
                ## Purpose
                Pages decay quietly: a pricing line from two years ago, a competitor that has been acquired, a template link that no longer works. A quarterly audit that shows each page's last review date and asks owners to confirm or fix stops stale advice reaching buyers.

                ## Milestones
                1. Every page shows its owner and last reviewed date.
                2. Pages older than six months listed each quarter.
                3. Owners confirm or update their pages within two weeks of the audit.
                4. Pages with no owner either reassigned or retired.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, no playbook page is older than six months without an owner's confirmation or update."
                cadence: cyclic
              tasks:
                - "Add owner and last reviewed date to the top of every page"
                - "List pages not reviewed in six months @recurring(quarterly)"
                - "Send each owner their stale pages with a two-week deadline"
                - "Reassign or retire pages that have no owner"
            - name: Product change to playbook update routine
              description: |-
                ## Purpose
                New features, retired packages and changed integrations break playbook pages without anyone noticing until a seller promises something that no longer exists. A monthly check of product release notes against the playbook catches the pages to update before a buyer does.

                ## Milestones
                1. The playbook owner added to product release communications.
                2. A short checklist of page types affected by product changes.
                3. Each month's releases checked and affected pages listed.
                4. Updates published in the next playbook release note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Product releases are checked against the playbook each month and every affected page is updated within the next release."
                cadence: rolling
              tasks:
                - "Ask product to add the playbook owner to release communications"
                - "List the page types usually affected by product changes"
                - "Check this month's product releases against the playbook @recurring(monthly:8)"
                - "Queue affected pages for the next release note"
            - name: Playbook usage and reader feedback tracking
              description: |-
                ## Purpose
                If sellers are not opening the playbook, rewriting it will not help. Tracking page views, the searches that return nothing and a two-question rating on each page shows which sections earn their place and which need work or removal.

                ## Milestones
                1. Page view and search data switched on in the playbook tool.
                2. A two-question rating at the foot of each page: was this useful, what was missing.
                3. Monthly views, failed searches and ratings logged in one table.
                4. The five least used pages reviewed each quarter.

                ## Notes
                Start from the **Metrics log** template to record the monthly numbers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly page views, failed searches and page ratings are logged for at least six consecutive months."
                cadence: rolling
              tasks:
                - "Turn on page view and search tracking in the playbook tool"
                - "Add a two-question rating to the foot of each page"
                - "Log views, failed searches and ratings in the metrics log @recurring(monthly:26)"
                - "Review the five least used pages with their owners"
            - name: Real email and call examples for each stage
              description: |-
                ## Purpose
                Real examples teach faster than rules. A curated set of anonymised emails and short call excerpts for each stage, showing what a good first reply, a good recap or a good next-step ask looks like, gives sellers something concrete to model without turning the playbook into a script.

                ## Milestones
                1. Two to three examples chosen for each stage, with buyer details removed.
                2. A one-line note on each explaining why it works.
                3. Examples refreshed monthly with one new addition.
                4. Out-of-date examples removed when pricing, packaging or messaging changes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every stage in the playbook has at least two anonymised real examples with a note on why each works."
                cadence: rolling
              tasks:
                - "Ask sellers for emails and call clips they are proud of"
                - "Remove buyer names and confidential details from each example"
                - "Write one line on why each example works"
                - "Add one new example and remove one stale one @recurring(monthly:16)"
            - name: Anatomy of a well-written sales play
              description: |-
                ## Purpose
                Good plays share a structure: a trigger that says when to run it, who it is for, the steps, the assets and how you know it worked. Studying a handful of examples and writing one play to that structure gives the whole team a standard to copy, so every play reads the same way.

                ## Milestones
                1. Five example plays studied from published sources or your own best deals.
                2. A play template with trigger, audience, steps, assets and success measure.
                3. One full play written using the template.
                4. The play reviewed by a seller who has never seen it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A play template with five fixed headings exists and one complete play written to it has been reviewed by a seller."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect five example plays from books, articles or your best deals"
                - "Note what each example has in common and what is missing"
                - "Write a play template with trigger, audience, steps, assets and measure"
                - "Write one complete play and have a seller test it cold"
            - name: Extracting tacit know-how from experienced sellers
              description: |-
                ## Purpose
                Experienced sellers often cannot explain what they do; they just do it. Learning a few interviewing techniques, such as walking a single deal step by step, asking what they noticed and listening for what they skip, turns vague advice into steps a new hire can follow.

                ## Milestones
                1. Two interviewing techniques studied and practised, such as critical incident and think-aloud.
                2. A set of follow-up prompts written for when answers stay general.
                3. One practice interview recorded and reviewed for missed follow-ups.
                4. A short guide for other managers who will interview sellers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page interviewing guide with follow-up prompts exists, tested in at least one recorded practice interview."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read about critical incident and think-aloud interviewing"
                - "Write ten follow-up prompts for when answers stay general"
                - "Run and record one practice interview with a willing seller"
                - "Write a one-page guide for other interviewers"
            - name: Swimlane mapping of the buying and selling process
              description: |-
                ## Purpose
                Drawing what the buyer does in one lane and what the seller does in another exposes the gaps a seller-only process hides: legal review that starts too late, a security questionnaire nobody planned for, a budget cycle that sets the real timeline. The skill pays back in every stage definition and play you write.

                ## Milestones
                1. The basics of swimlane diagrams learned from one short course or guide.
                2. One won deal drawn with buyer and seller lanes side by side.
                3. Points where the buyer waited on the seller, and the reverse, marked.
                4. A cleaned-up swimlane map added to the playbook.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A swimlane map showing buyer and seller steps for the main motion, with waiting points marked, is published in the playbook."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work through a short guide to swimlane process diagrams"
                - "Draw one recent won deal with buyer and seller lanes"
                - "Mark every point where one side waited on the other"
                - "Publish a cleaned-up swimlane map in the playbook"
            - name: Talk tracks written as guidance, not scripts
              description: |-
                ## Purpose
                Scripts read word for word sound robotic and fall apart at the first unexpected answer. Learning to write talk tracks as a goal, three key points and an example phrasing lets sellers keep their own voice while covering what matters, which is the version of scripting a playbook can actually enforce.

                ## Milestones
                1. The difference between scripts, talk tracks and guidance notes written in your own words.
                2. A talk track format agreed: goal, key points, example phrasing, what to listen for.
                3. Three existing scripts rewritten into that format.
                4. Two sellers' feedback on the rewritten versions recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three scripts are rewritten into a goal, key points and example phrasing format, with feedback from two sellers recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect the scripts the team currently uses"
                - "Agree a talk track format of goal, key points and example phrasing"
                - "Rewrite three scripts into the new format"
                - "Ask two sellers to try them and note what felt natural"
            - name: Reading list of sales process and playbook books
              description: |-
                ## Purpose
                Several well-known books and guides cover sales process design, stage definitions and how to write plays, and most playbook mistakes have been made and written about already. A short, deliberate reading list, with notes on what to borrow, saves you from reinventing what others have tested.

                ## Milestones
                1. Five books or long guides chosen on sales process design and playbooks.
                2. Notes kept for each with two or three ideas worth borrowing.
                3. Borrowed ideas tagged against the playbook section they affect.
                4. A shortlist of two recommended reads for future playbook owners.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five sources on sales process are read with notes, and at least five borrowed ideas are tagged to playbook sections."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose five books or guides on sales process and playbooks"
                - "Read one chapter a week and note ideas worth borrowing"
                - "Tag each borrowed idea to the playbook section it affects"
                - "Pick two titles to recommend to the next playbook owner"
            - name: Plain writing for pages reps read in a hurry
              description: |-
                ## Purpose
                Reps open the playbook five minutes before a call, so a page that needs ten minutes to read is a page that goes unread. Learning plain writing habits such as short sentences, the answer first, lists only where order matters and headings that say what the page tells you makes every section faster to use.

                ## Milestones
                1. A plain writing guide studied and ten rules written for the playbook.
                2. Three existing pages rewritten and their word counts compared.
                3. A readability check run on the rewritten pages.
                4. The ten rules added to the page template for every author.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten writing rules are added to the playbook page template and three pages are rewritten at least a third shorter."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a public plain language guide and note ten rules"
                - "Rewrite three playbook pages using the rules"
                - "Compare word counts before and after the rewrite"
                - "Add the ten rules to the page template"
            - name: Measuring whether the playbook changes results
              description: |-
                ## Purpose
                Without a way to tell whether the playbook helps, it competes with every other priority on opinion alone. Learning the difference between leading signs (stage criteria met, plays run) and lagging results (win rate, cycle length, ramp time) lets you pick three measures and report them honestly.

                ## Milestones
                1. A short list of leading and lagging measures relevant to the playbook.
                2. Three measures chosen with a baseline taken before launch.
                3. A note on what the measures cannot prove, such as market changes.
                4. A quarterly reporting format agreed with the sales lead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three playbook measures with pre-launch baselines are chosen and a quarterly reporting format is agreed with the sales lead."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List leading and lagging measures the playbook could affect"
                - "Pick three measures and record their current baseline"
                - "Write what the measures cannot prove on their own"
                - "Agree a one-page quarterly report format with the sales lead"
            - name: Stage guidance surfaced inside the CRM
              description: |-
                ## Purpose
                Guidance that lives one click away from the deal record gets used far more than a separate document. Adding a short prompt to each CRM stage, with the exit criteria and a link to the matching playbook page, puts the playbook in front of sellers at the moment they need it.

                ## Milestones
                1. The CRM's options for stage guidance or help text checked with the admin.
                2. A two-line prompt and a playbook link written for each stage.
                3. Prompts added in a test environment and checked by two sellers.
                4. Prompts live for the whole team and noted in a release note.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every CRM deal stage shows a short guidance prompt with its exit criteria and a link to the matching playbook page."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the CRM admin what stage guidance options exist"
                - "Write a two-line prompt and playbook link for each stage"
                - "Test the prompts with two sellers before switching them on"
                - "Announce the change in the next release note"
            - name: Cutting the playbook to what reps actually use
              description: |-
                ## Purpose
                Playbooks grow by accretion until the useful page is buried under ten that nobody reads. A deliberate cut, guided by usage data and seller input, removes duplicated, outdated and rarely opened material so the remaining pages are easy to find and trust.

                ## Milestones
                1. Every page listed with views, last review date and owner.
                2. Pages marked keep, merge or retire with a reason.
                3. Retired pages archived with a redirect or a note pointing to their replacement.
                4. Total page count and word count reduced, with before and after numbers recorded.

                ## Notes
                Archive rather than delete, so links in old emails still lead somewhere useful.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every page is marked keep, merge or retire, and the total page count is lower than before with the change recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export a list of pages with views, last review date and owner"
                - "Mark each page keep, merge or retire with a reason"
                - "Archive retired pages with a pointer to their replacement"
                - "Record page and word counts before and after the cut"
                - "Repeat the keep, merge or retire pass on the whole playbook @recurring(yearly)"
            - name: Two-rep pilot of a new play
              description: |-
                ## Purpose
                Rolling a new play out to the whole team before testing it wastes credibility if it does not work. Running it with two sellers for six weeks, against a simple comparison, shows whether it moves deals and what needs rewriting before everyone is asked to use it.

                ## Milestones
                1. A new play written to the standard template with a clear trigger.
                2. Two volunteer sellers briefed and a six-week pilot window set.
                3. The number of times the play was run and the outcome of each recorded.
                4. A go, change or drop decision written with the evidence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A six-week pilot of a new play with two sellers ends in a written go, change or drop decision based on recorded outcomes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one play to test and write it to the template"
                - "Brief two volunteer sellers and set a six-week window"
                - "Log every time the play is run and what happened"
                - "Write a go, change or drop decision with the evidence"
            - name: Rules of engagement for account ownership
              description: |-
                ## Purpose
                Arguments over who owns an account, an inbound lead from an existing customer or a deal two reps both touched waste time and damage trust. A short written set of rules covering ownership, handover, shared credit and how disputes are settled lets the playbook answer the question before it becomes a row.

                ## Milestones
                1. The five most common ownership disputes from the last year listed.
                2. A rule written for each, covering who owns, for how long and what happens on inactivity.
                3. A named person who settles disputes and a response time.
                4. The rules approved by sales leadership and published in the playbook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written rules of engagement covering at least five dispute types, with a named arbiter, are approved and published."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ownership disputes raised in the last year"
                - "Draft one rule for each dispute type"
                - "Name who settles disputes and how fast they reply"
                - "Review disputes settled under the rules and adjust wording @recurring(quarterly)"
            - name: Sales to customer success handoff page
              description: |-
                ## Purpose
                Deals often stumble in the first month after signature because promises made during the sale never reach the people delivering. A playbook page listing exactly what the seller must hand over, in what format and by when, protects the renewal the seller will one day want credit for.

                ## Milestones
                1. The customer success lead asked what information they most often lack.
                2. A handoff checklist of required items, such as goals, stakeholders and promises made.
                3. A handoff meeting format with the buyer's sponsor present where possible.
                4. The page added to the closed-won stage exit criteria.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A handoff page with a required checklist is published and completing it is part of the closed-won exit criteria."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask customer success what they most often discover too late"
                - "Write a handoff checklist of required items"
                - "Define a short handoff meeting format"
                - "Add the checklist to the closed-won exit criteria"
            - name: Deciding which sales motions need their own play
              description: |-
                ## Purpose
                Inbound leads, outbound prospecting, partner-sourced deals and expansion into existing customers start differently and move at different speeds. Deciding which motions are big enough to deserve their own section, and which can share the core stages with a short note, keeps the playbook focused on where revenue really comes from.

                ## Milestones
                1. Last year's revenue split by motion: inbound, outbound, partner and expansion.
                2. Win rate and cycle length compared across motions.
                3. A decision on which motions get their own play and which share the core.
                4. The playbook outline updated to match.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision, backed by revenue and win rate by motion, states which motions get their own playbook section."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Split last year's closed revenue by sales motion"
                - "Compare win rate and cycle length for each motion"
                - "Decide which motions earn a separate section"
                - "Update the playbook outline to reflect the decision"
            - name: Expected time in each stage by segment
              description: |-
                ## Purpose
                Knowing that a mid-sized deal usually spends about three weeks in evaluation tells a seller when a quiet deal is normal and when it is stuck. Publishing typical days per stage for each segment, from your own data, gives sellers and managers a shared yardstick for when to intervene.

                ## Milestones
                1. Days in each stage calculated from the last year's closed deals, by segment.
                2. Typical ranges written as a middle value and an upper limit.
                3. A short note on what to do when a deal passes the upper limit.
                4. The table added to the stage definitions page.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table of typical and upper-limit days per stage for each segment, based on closed deals, sits on the stage definitions page."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export stage history for last year's closed deals"
                - "Calculate median and upper days in each stage by segment"
                - "Write what to do when a deal passes the upper limit"
                - "Refresh the stage time table with the latest year of deals @recurring(yearly)"
            - name: Customer reference use rules
              description: |-
                ## Purpose
                Happy customers tire quickly when every seller asks them for a call in the same month. A playbook page setting out when a reference may be requested, how to ask, how often each customer can be used and who approves keeps your best advocates willing.

                ## Milestones
                1. The list of referenceable customers and their agreed limits confirmed.
                2. Rules for which stage a reference call may be offered.
                3. A request process with one owner who tracks usage.
                4. A thank-you step recorded after every reference call.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference rules page names the approved customers, usage limits, the stage at which references are allowed and the request owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm which customers agreed to be references and how often"
                - "Write the stage at which a reference call may be offered"
                - "Name one owner who approves and tracks reference requests"
                - "Add a thank-you step after every reference call"
            - name: Stalled deal play with clear restart steps
              description: |-
                ## Purpose
                Stalled deals are the most common situation sellers face without guidance, and the usual response is another checking-in email. A written play defining when a deal counts as stalled, three restart moves in order, and when to close it out turns drift into a decision.

                ## Milestones
                1. A stalled definition tied to the stage time table, such as past the upper limit with no buyer reply.
                2. Three restart moves in order, with an example message for each.
                3. A rule for when to mark the deal lost and what to record.
                4. The play tested on five stalled deals and adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stalled deal play with a definition, three ordered restart moves and a close-out rule is published and tested on five deals."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Define when a deal counts as stalled for each segment"
                - "Write three restart moves in order with an example message each"
                - "Set the rule for marking a stalled deal as lost"
                - "Run the play on five stalled deals and note what worked"
            - name: Version one playbook launch session
              description: |-
                ## Purpose
                A playbook emailed as a link is skimmed once and forgotten. A launch session of about two hours, where sellers work through a live deal using the new stages and plays, shows them where to find things and surfaces the first round of fixes while everyone is in the room.

                ## Milestones
                1. A two-hour session booked with every seller and manager.
                2. Each seller brings one open deal to map against the new stages.
                3. Questions and gaps captured during the session.
                4. A follow-up release within two weeks fixing the top issues raised.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The launch session is held with every seller, and a follow-up release fixing the top raised issues ships within two weeks."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a two-hour launch session with the whole sales team"
                - "Ask each seller to bring one open deal to map"
                - "Capture every question and gap raised in the session"
                - "Ship a follow-up release fixing the top issues within two weeks"
            - name: Playbook segment at the annual kickoff
              description: |-
                ## Purpose
                Kickoff is the one time each year the whole team is in the same room and paying attention. A forty-five-minute playbook segment covering what changed last year, what the data showed and the two plays to focus on this year anchors the playbook in the new sales year.

                ## Milestones
                1. A forty-five-minute slot agreed with the kickoff organiser.
                2. A summary of last year's playbook changes and measured results.
                3. Two focus plays for the year chosen and explained.
                4. A short exercise where teams practise one of the focus plays.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A playbook segment is delivered at kickoff covering last year's changes, results and two focus plays with a practice exercise."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Request a forty-five-minute playbook slot at kickoff @recurring(yearly)"
                - "Summarise last year's playbook changes and results"
                - "Choose two focus plays for the coming year"
                - "Design a fifteen-minute exercise to practise one play"
            - name: Whole-team playbook knowledge check
              description: |-
                ## Purpose
                Reading a playbook is not the same as knowing it. A short knowledge check for every seller, with scenario questions on stage criteria, rules of engagement and handoffs, shows which sections are understood and which need clearer writing or a refresher session.

                ## Milestones
                1. Fifteen scenario questions written from real deal situations.
                2. Every seller and manager completes the check within a set two-week window.
                3. Results analysed by question to find unclear sections.
                4. Unclear sections rewritten and a short refresher held.

                ## Notes
                Treat low scores as a writing problem first. If most of the team gets a question wrong, the page is unclear.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every seller completes a fifteen-question scenario check, and sections with the lowest scores are rewritten."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft fifteen scenario questions from the playbook"
                - "Edit the questions so each reflects a real deal situation"
                - "Open a two-week window for every seller to complete the check"
                - "Rewrite the three sections with the lowest scores"
            - name: Six-month playbook retrospective
              description: |-
                ## Purpose
                Six months after launch there is enough evidence to judge what the playbook changed and what it did not. A structured retrospective comparing the chosen measures to their baselines, together with seller views, sets the priorities for the second version.

                ## Milestones
                1. The three playbook measures compared with their pre-launch baselines.
                2. A short survey of sellers on which sections they use and trust.
                3. A retrospective meeting with sales leadership held.
                4. A ranked list of priorities for version two agreed.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A retrospective compares three measures to baseline, includes seller survey results and ends with a ranked version two priority list."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the three playbook measures and compare with baselines"
                - "Send a five-question survey to every seller"
                - "Hold a one-hour retrospective with sales leadership"
                - "Rank and record the priorities for version two"
            - name: Playbook update for a pricing or packaging change
              description: |-
                ## Purpose
                Pricing and packaging changes touch almost every page of a playbook: qualification questions, proposal guidance, examples and handoff notes. Treating the change as a dated release, with every affected page found and updated before the new prices go live, prevents sellers quoting from two price lists.

                ## Milestones
                1. Every page that mentions price, package names or discount levels listed.
                2. Updated wording drafted and checked with whoever owns pricing.
                3. All updates published on the day the new pricing takes effect.
                4. A short briefing for sellers on what to say to buyers mid-deal.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every playbook page mentioning price or packages is updated on the day new pricing takes effect, with a seller briefing held."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the playbook for every mention of price and package names"
                - "Draft updated wording and check it with the pricing owner"
                - "Publish all updates on the day new pricing takes effect"
                - "Brief sellers on handling deals already in progress"
            - name: Founder's how-we-sell notes before the first sales hire
              description: |-
                ## Purpose
                Founders close the first customers on instinct and goodwill, and the first sales hire often fails because none of it was written down. Ten to fifteen pages covering who buys, why they buy, how the founder runs a first call and what has never worked give a new seller a fair chance and save the founder months of shadowing.

                ## Milestones
                1. A list of every customer won so far, with how each one started.
                2. The founder's first call structure written step by step.
                3. Pages on who buys, why, common objections and things that did not work.
                4. The notes read by an outsider who can explain the sale back.

                ## Notes
                Write while you are still selling. Notes written from memory after the hire starts lose the detail that matters.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A how-we-sell document of ten to fifteen pages exists and an outsider can explain the sale back after reading it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every customer won so far and how each deal started"
                - "Write the steps of your first sales call as you actually run it"
                - "Add one note on what you learned after each sales call @recurring(weekly:mon)"
                - "Ask an outsider to read the notes and explain the sale back"
            - name: First sales manager building a playbook from scratch
              description: |-
                ## Purpose
                As the first sales manager, you inherit sellers who each do it their own way and a founder whose method was never written down. A ninety-day plan that captures the founder's approach, interviews the team and ships a short version one gives you a shared way of selling to manage against.

                ## Milestones
                1. The founder interviewed on how early customers were won.
                2. Every seller interviewed on their current approach.
                3. A version one playbook of no more than eight sections shipped by day ninety.
                4. Stage definitions used in the first pipeline review after launch.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A version one playbook is shipped within ninety days and its stage definitions are used in pipeline reviews."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book a two-hour session with the founder on how early deals were won"
                - "Interview each seller about their current approach"
                - "Write and ship a version one of no more than eight sections"
                - "Run the next pipeline review using the new stage definitions"
            - name: New manager inheriting an outdated playbook
              description: |-
                ## Purpose
                Inheriting a playbook you did not write is awkward: parts are stale, the team quietly ignores it and rewriting it all at once signals you have not listened. A thirty-day assessment that separates what still works from what is outdated lets you keep the team's trust while fixing what matters.

                ## Milestones
                1. The existing playbook read in full with notes on every section.
                2. Sellers asked which sections they use, ignore or disagree with.
                3. Sections sorted into keep, refresh and replace.
                4. A ninety-day update plan shared with the team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every section of the inherited playbook is marked keep, refresh or replace and a ninety-day update plan is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the existing playbook end to end and note each section"
                - "Ask every seller which sections they use or ignore"
                - "Sort sections into keep, refresh and replace"
                - "Share a ninety-day update plan at a team meeting"
            - name: Ten-page playbook for a team of three
              description: |-
                ## Purpose
                Small teams do not need a hundred pages; they need the five things everyone must do the same way. A ten-page playbook covering who to sell to, the stages, the first call, the proposal and the handoff is enough to keep three sellers consistent and can be written in two weeks.

                ## Milestones
                1. The five practices everyone must do the same way chosen by the team.
                2. Ten pages written, one or two per practice.
                3. All three sellers using the stages in the shared pipeline.
                4. A one-hour review after the first month.

                ## Notes
                Resist adding pages until the team asks for one. A short playbook that is followed beats a long one that is admired.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook of no more than ten pages covering five shared practices is in use by every seller within a month."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree with the team the five practices everyone must share"
                - "Write one or two pages for each practice"
                - "Move every open deal onto the shared stages"
                - "Hold a one-hour review after the first month"
            - name: Playbook chapter for a new product line
              description: |-
                ## Purpose
                Launching a second product usually means a different buyer, a different trigger and sometimes a different cycle, and sellers fall back on the old pitch. A dedicated chapter covering who buys this product, how it differs from the core sale and where the two meet keeps the new line from being sold as an afterthought.

                ## Milestones
                1. The new product's buyer roles and triggers compared with the core sale.
                2. Stage criteria that differ for the new product noted.
                3. A short play for introducing the product to existing customers.
                4. The chapter tested with two sellers on live opportunities.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new product chapter covers buyer roles, differing stage criteria and an introduction play, tested on two live opportunities."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare the new product's buyers and triggers with the core sale"
                - "Note which stage criteria differ for the new product"
                - "Write a short play for introducing it to existing customers"
                - "Test the chapter with two sellers on live opportunities"
            - name: Rep-written plays and a review process
              description: |-
                ## Purpose
                The people closing deals every day spot new plays first: a trigger event that works, a sequence that revives cold deals, a way to reach finance earlier. A simple submission and review process lets sellers write plays into the playbook, with the owner checking quality, so the playbook grows from the field rather than only from management.

                ## Milestones
                1. A submission form using the standard play template.
                2. Review criteria written: evidence, clarity and fit with stage definitions.
                3. Submitted plays reviewed monthly with a decision and feedback to the author.
                4. Published plays credited to the seller who wrote them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Seller-submitted plays are reviewed every month against written criteria, and each published play credits its author."
                cadence: rolling
              tasks:
                - "Create a play submission form from the standard template"
                - "Write three review criteria for submitted plays"
                - "Review submitted plays and reply to each author @recurring(monthly:22)"
                - "Credit the author on every published play"
            - name: Partner and reseller selling chapter
              description: |-
                ## Purpose
                Partners sell differently: they own the relationship, they need margin clarity and they will not follow internal stages they cannot see. A chapter explaining how deals with partners are registered, staged, supported and credited prevents channel conflict and helps partner managers coach to the same standard.

                ## Milestones
                1. The partner deal path drawn from registration to signature.
                2. Stage criteria adapted for partner-led deals.
                3. Rules for deal registration, conflict and credit written.
                4. The chapter reviewed by two active partners or the partner manager.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A partner chapter covering deal registration, adapted stage criteria and credit rules is reviewed by the partner manager or two partners."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw the partner deal path from registration to signature"
                - "Adapt each stage's exit criteria for partner-led deals"
                - "Write rules for deal registration, conflict and credit"
                - "Ask the partner manager or two partners to review the chapter"
            - name: Segment variants for SMB, mid-market and enterprise
              description: |-
                ## Purpose
                Enterprise deals add stakeholders, security reviews and procurement steps that would choke a small-business sale. Building segment variants that share core definitions but differ in stage criteria, plays and expected timing lets one playbook serve sellers working very different deal sizes.

                ## Milestones
                1. A core layer agreed that applies to every segment.
                2. Stage criteria, plays and timings that differ by segment documented.
                3. Each seller's view of the playbook filtered or tagged to their segment.
                4. Variants reviewed with one seller from each segment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The playbook has a shared core and documented variants for each segment, each reviewed by a seller from that segment."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree which definitions and pages apply to every segment"
                - "Document stage criteria and timings that differ by segment"
                - "Tag pages so each seller can filter to their segment"
                - "Review each variant with one seller from that segment"
            - name: Play adherence versus win-rate analysis
              description: |-
                ## Purpose
                Once the playbook has run for a few quarters, the hardest question becomes answerable: do deals that follow the plays win more often. Comparing win rate and cycle length for deals that met stage criteria against those that skipped them shows which parts of the playbook earn their keep and which are ritual.

                ## Milestones
                1. Deals from the last two quarters tagged for whether stage criteria were met.
                2. Win rate and cycle length compared for adherent and non-adherent deals.
                3. Results checked for segment and deal size differences.
                4. Findings shared with sales leadership with a recommendation per section.

                ## Notes
                Treat the comparison as a signal, not proof. Strong sellers may both follow the playbook and win more for other reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis compares win rate and cycle length for adherent and non-adherent deals over two quarters, with a recommendation per section."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Tag closed deals from the last two quarters by criteria met"
                - "Compare win rate and cycle length between the two groups"
                - "Check whether the gap holds within each segment"
                - "Share findings with leadership and repeat the analysis @recurring(quarterly)"
            - name: Playbook governance across several sales teams
              description: |-
                ## Purpose
                With several sales teams, regions or product groups, each starts editing its own copy and the shared definitions drift apart within a year. A small governance group with a clear split between global pages and team pages, and a quarterly meeting to approve changes to the core, keeps one playbook without blocking local improvements.

                ## Milestones
                1. Pages classified as global core or team-owned.
                2. A governance group of one representative per team and a chair named.
                3. A change process for core pages with a decision time limit.
                4. Quarterly governance meetings held with decisions logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Core and team-owned pages are classified, a governance group is named and quarterly decisions on core changes are logged."
                cadence: cyclic
              tasks:
                - "Classify every page as global core or team-owned"
                - "Invite one representative from each team to the governance group"
                - "Write a change process for core pages with a two-week decision limit"
                - "Hold the governance meeting and log every decision @recurring(quarterly)"
---

# Sales Playbook Development

This area is for the founder, sales manager or senior seller who wants the way the team wins written down, so the next hire can repeat it without sitting beside the best rep for six months. It starts with foundations (scope and owner, interviews with top performers, a review of recent wins, the motion as it really runs, stage exit criteria, a glossary and a home for it all), then the routines that keep it alive, the writing and mapping skills worth learning, improvements and decisions, dated launches and retrospectives, versions for a founder, a new manager or a tiny team, and finally specialist work on segment variants, adherence analysis and governance across several teams.

What repeats is a weekly triage of gaps reported from the field, monthly release notes, stage spot checks, won-deal stories, product change checks and usage numbers, quarterly reviews with the sellers and freshness audits, and a yearly look at stage criteria, the glossary and the kickoff segment. The Meeting notes, Purchase decision, Feedback themes, Metrics log and Reading queue templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
