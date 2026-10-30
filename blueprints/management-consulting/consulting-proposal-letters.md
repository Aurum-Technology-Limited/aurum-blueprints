---
id: management-consulting.consulting-proposal-letters
name: Consulting Proposal Letters
description: "A proposal system for independents and small firms: qualifying the opportunity, the problem in the client's words, clear phases, credentials, fees and terms, and a follow-up call that gets a decision."
category: business
version: 1.0.0
tags: [management-consulting, consulting-proposal-letters, freelancer, small-business, proposals, rfp-responses, credentials, win-rate]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - feedback-themes
    - risk-register
    - meeting-notes
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Consulting Proposal Letters
          description: "Writing consulting proposals that win: the problem in the client's words, approach and phases, team and credentials, fees and terms, and a short follow-up call."
          projects:
            - name: Go or no-go qualification check for new opportunities
              description: |-
                ## Purpose
                Writing a proposal for a client who has no budget, no decision date or a preferred supplier already chosen costs a solo consultant two or three unpaid days. A short qualification check, run before any drafting starts, lets you put effort only where the buyer, the money and the timing are real.

                ## Milestones
                1. A one-page checklist covering the decision maker, budget range, decision date, competing bidders and fit with your expertise.
                2. A simple scoring rule written down, such as needing at least four of six criteria to proceed.
                3. The checklist run on the next two live opportunities, with the go or no-go decision recorded for each.
                4. A short, polite decline message saved for opportunities that fail the check.

                ## Notes
                The question that saves most time is who signs the purchase order. If the person you are talking to cannot name them, you are not ready to write.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written qualification checklist with a scoring rule exists and has been applied to at least two real opportunities, with decisions recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the six questions you need answered before drafting any proposal"
                - "Set a minimum score an opportunity must reach before you write"
                - "Run the checklist on your two most recent enquiries"
                - "Write and save a short decline message for poor-fit requests"
            - name: Discovery call guide for scoping proposals
              description: |-
                ## Purpose
                Strong proposals are mostly written during the discovery call, when the client describes the problem, what has already been tried and what success looks like. A prepared guide of a dozen questions means you leave every call with the material for the situation, objectives and scope sections instead of guessing at them later.

                ## Milestones
                1. A question guide grouped under the situation, the cause, past attempts, success measures, constraints and the buying process.
                2. A note-taking layout that captures the client's exact phrases in a separate column.
                3. The guide used on at least one live discovery call and revised afterwards.
                4. A closing script that agrees when the proposal will arrive and when you will talk it through.

                ## Notes
                Ask what happens if they do nothing for six months. The answer usually becomes the strongest line in the proposal.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A discovery call guide with a client-phrases column has been used on a real call and revised, and the closing script agrees a proposal date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft twelve discovery questions under six headings"
                - "Add a column for the client's exact words to your notes layout"
                - "Write a closing line that fixes the proposal date and a follow-up call"
                - "Revise the guide after your next discovery call"
            - name: Problem statement written in the client's words
              description: |-
                ## Purpose
                Clients sign proposals that sound like they understand the business better than the client could explain it, and they skim the ones that open with the consultant's methods. Turning discovery notes into a half-page problem statement that reuses the client's own phrases, numbers and deadlines makes the opening section the reason they keep reading.

                ## Milestones
                1. A half-page situation section using at least three phrases the client said on the call.
                2. The cost of the problem stated in the client's numbers, such as lost margin, delays or staff turnover.
                3. The reason the problem matters now, tied to a date or event the client named.
                4. The statement checked with the client by email or phone before the full proposal is finished.

                ## Notes
                Sending only the problem statement first and asking whether you have it right is a quiet way to get the client invested before the fee appears.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A half-page problem statement in the client's language, including their numbers and timing, has been confirmed by the client before the proposal is sent."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Highlight the client's exact phrases in your discovery notes"
                - "Write the situation, the cost and the reason it matters now in half a page"
                - "Send the draft statement to the client and ask if it is right"
                - "Fold their corrections into the proposal opening"
            - name: Reusable proposal skeleton with nine sections
              description: |-
                ## Purpose
                Starting each proposal from a blank page leads to missing sections, inconsistent order and fees that appear before the value is clear. A fixed skeleton (situation, objectives, approach, phases and timeline, deliverables, team, credentials, fees and terms, next steps) lets you draft in hours rather than days and gives clients a familiar read.

                ## Milestones
                1. A master document with the nine sections in order and a one-line instruction under each.
                2. A target length for each section so a standard proposal stays within four to six pages.
                3. Placeholder text marked clearly so none can survive into a sent proposal.
                4. The skeleton used on one real proposal and adjusted where it felt forced.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master proposal document with nine ordered sections, length targets and marked placeholders has been used for at least one real proposal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a master proposal file with the nine section headings"
                - "Write a one-line instruction and a length target under each heading"
                - "Mark every placeholder in a colour you will search for before sending"
                - "Draft your next proposal from the skeleton and note what to change"
            - name: Proposal library folder and naming convention
              description: |-
                ## Purpose
                Six months in, most independents cannot find the proposal they sent to a similar client or the final version of their terms. A single library with a naming convention by year, client and status means past work becomes raw material and nothing goes out from an old draft.

                ## Milestones
                1. One folder for proposals with subfolders for drafts, sent, won, lost and withdrawn.
                2. A file naming convention such as year, client, short title and version.
                3. The last twelve months of proposals moved into the library and renamed.
                4. A rule that only the sent PDF, never the editable draft, sits in the sent folder.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All proposals from the last twelve months are filed by status under one naming convention, with final PDFs separated from drafts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the proposal library with five status subfolders"
                - "Write the file naming convention at the top of the library"
                - "Move and rename every proposal from the past twelve months"
                - "Save the final sent version of each as a PDF"
            - name: Credentials pack of five case summaries
              description: |-
                ## Purpose
                Clients buying from a small firm want evidence that you have solved this kind of problem before, and a list of past client logos does not show that. Five short case summaries, each with the situation, what you did and a measurable result, give every proposal a credentials section you can tailor in minutes.

                ## Milestones
                1. Five past engagements chosen to cover your main service lines and client sizes.
                2. Each written as a half-page summary with situation, approach and a quantified result.
                3. Written permission recorded for each named client, or the summary anonymised by sector and size.
                4. The summaries stored in the proposal library as separate, ready-to-paste blocks.

                ## Notes
                Never name a client or reveal figures without their permission. An anonymised summary such as a regional distributor with 200 staff is still persuasive.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five half-page case summaries with quantified results are filed, each either cleared by the client in writing or anonymised."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick five past engagements that cover your main services"
                - "Write each as situation, approach and result in half a page"
                - "Email each named client to ask permission to reference the work"
                - "Anonymise any summary where permission is not given"
            - name: Team bios in short and long versions
              description: |-
                ## Purpose
                A proposal team page with a different bio in every document looks careless, and a three-paragraph bio for every associate buries the person the client will actually work with. Writing each person a fifty-word and a two-hundred-word bio, both linked to the client's likely questions, keeps the team section tight and consistent.

                ## Milestones
                1. A fifty-word and a two-hundred-word bio for you and each regular associate.
                2. Each bio naming two or three directly relevant engagements or sectors rather than a career history.
                3. Current photographs and contact details agreed for proposal use.
                4. Written consent from each associate to be named in proposals.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every person who regularly appears in proposals has an approved short and long bio on file, with consent to be named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your own fifty-word and two-hundred-word bios"
                - "Ask each regular associate for a bio in both lengths"
                - "Collect consent from associates to be named in proposals"
                - "Store the approved bios in the proposal library"
            - name: Standard terms and assumptions schedule
              description: |-
                ## Purpose
                Small firms often send proposals with no stated assumptions, then absorb extra work when the client's data arrives late or the scope grows. A standard schedule covering payment terms, expenses, client responsibilities, change requests, confidentiality, liability and cancellation, checked once by a lawyer, protects every proposal you send.

                ## Milestones
                1. A draft terms schedule covering payment, expenses, client obligations, changes, confidentiality, liability and cancellation.
                2. A list of standard assumptions, such as named client contacts and data delivered by an agreed date.
                3. The schedule reviewed by a lawyer familiar with professional services contracts in your country.
                4. A final version attached to the proposal skeleton as an appendix.

                ## Notes
                This is a drafting and organising project, not legal advice. Have a qualified lawyer review the final wording, especially liability and intellectual property.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A terms and assumptions schedule reviewed by a lawyer is attached to the proposal skeleton and used in the next proposal sent."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather the terms from your last three signed proposals"
                - "Draft one schedule covering the seven standard headings"
                - "List the assumptions you rely on in nearly every engagement"
                - "Book a review of the schedule with a professional services lawyer"
            - name: Proposal voice and style sheet
              description: |-
                ## Purpose
                Proposals drafted at different times read in different voices, switch between we and I, and swing from formal to chatty. A one-page style sheet fixing person, spelling, how numbers and currencies appear, banned jargon and the tone you want lets you, or anyone helping you, write in one consistent voice.

                ## Milestones
                1. A decision recorded on first person singular or plural and on the spelling system.
                2. Rules for numbers, dates, currencies and units written down with examples.
                3. A list of fifteen jargon terms you will replace with plain words.
                4. The style sheet applied to one old proposal to check it reads better.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page style sheet with voice, number rules and a jargon list is stored in the proposal library and has been tested on a past proposal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether your proposals speak as I or we"
                - "Write the rules for numbers, dates and currencies with examples"
                - "List fifteen consulting terms and their plain replacements"
                - "Rewrite one page of an old proposal using the sheet"
            - name: Weekly proposal pipeline review
              description: |-
                ## Purpose
                With four or five proposals in play, it is easy to miss that one has gone silent for three weeks or that two decisions land in the same month. A fifteen-minute Monday review of every open proposal, its value, stage, decision date and next action keeps each one moving and makes capacity clashes visible early.

                ## Milestones
                1. A tracker listing every open proposal with client, value, stage, date sent, expected decision and next action.
                2. Stages defined plainly, such as qualifying, drafting, sent, in discussion, verbal yes, signed, lost.
                3. Twelve consecutive weekly reviews completed.
                4. Every open proposal carrying a dated next action at the end of each review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A proposal tracker exists and has been reviewed every Monday for twelve weeks, with no open proposal lacking a dated next action."
                cadence: rolling
              tasks:
                - "Set up a tracker with the seven stages and key columns"
                - "Enter every proposal currently open"
                - "Review each open proposal and set its next action @recurring(weekly:mon)"
                - "Check expected decision dates against delivery capacity @recurring(monthly:3)"
            - name: Follow-up call within three working days
              description: |-
                ## Purpose
                A proposal emailed without a booked conversation tends to sit in an inbox until the client has forgotten the discovery call. Agreeing a short call when you send, and holding it within three working days, lets you walk through the logic, hear objections while they are small and learn who else needs to approve.

                ## Milestones
                1. Every proposal sent with a twenty-minute call already in the client's calendar.
                2. A call outline: two-minute recap, questions, concerns, decision process and next step.
                3. Notes from each call filed with the proposal, including who else must approve.
                4. A follow-up email sent the same day confirming what was agreed.

                ## Notes
                Start from the **Meeting notes** template for each call. Ask what would stop them saying yes; it is the most useful question on the call.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each of the next five proposals has had a follow-up call within three working days of sending, with notes and a confirming email on file."
                cadence: rolling
              tasks:
                - "Write a twenty-minute follow-up call outline"
                - "Add a line to your proposal cover email proposing two call times"
                - "Hold the follow-up calls booked for this week and file the notes @recurring(weekly:thu)"
                - "Send a same-day email confirming next steps after each call"
            - name: Win and loss debrief after every decision
              description: |-
                ## Purpose
                Most independents never learn why they lost, so the same weak section or fee presentation costs them again. Asking every client, win or lose, for a ten-minute debrief and logging the reasons builds a record of what actually decides your proposals.

                ## Milestones
                1. A five-question debrief script for both won and lost proposals.
                2. Debriefs requested on every decided proposal for six months.
                3. Reasons logged under themes such as fit, fee, timing, credentials or relationship.
                4. A monthly tally showing the most common reasons for wins and for losses.

                ## Notes
                Start from the **Feedback themes** template to group the reasons. Clients are more candid about losses a week or two after the decision than on the day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Debriefs have been requested on every decided proposal for six months and a monthly tally of win and loss reasons is kept."
                cadence: rolling
              tasks:
                - "Write five debrief questions that work for wins and losses"
                - "Request a debrief from each client who decided in the last month"
                - "Log each debrief reason under a theme"
                - "Tally win and loss reasons for the month @recurring(monthly:20)"
            - name: Monthly credentials refresh
              description: |-
                ## Purpose
                Case summaries go stale fast: results get bigger as savings come through, new sectors appear and old examples stop sounding current. A monthly half hour to add finished engagements, update results and retire weak examples keeps the credentials pack ready for the next proposal.

                ## Milestones
                1. Every engagement completed in the month considered for a new case summary.
                2. Results in existing summaries updated where the client has shared new figures.
                3. Summaries older than three years reviewed and retired or refreshed.
                4. Client permission status checked for any summary used in the coming month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The credentials pack has been reviewed every month for six months, with at least two new summaries added in that time."
                cadence: rolling
              tasks:
                - "Review finished engagements and draft any new case summary @recurring(monthly:12)"
                - "Ask recent clients for updated results figures @recurring(quarterly)"
                - "Retire or refresh any summary older than three years"
                - "Ask clients for a short quote you may use alongside the case summary"
            - name: Friday proposal drafting block
              description: |-
                ## Purpose
                Proposals squeezed between delivery calls get written late at night and sent with mistakes. Protecting a weekly three-hour block for proposal work, with discovery notes ready before it starts, keeps turnaround to the date you promised without stealing time from paying clients.

                ## Milestones
                1. A recurring three-hour block in your calendar, protected from client meetings.
                2. A rule that discovery notes and the problem statement are ready before the block.
                3. Eight weeks of blocks used for drafting, credentials or template work.
                4. Average time from discovery call to sent proposal recorded before and after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A protected weekly drafting block has been kept for eight weeks and average discovery-to-sent time has been measured."
                cadence: rolling
              tasks:
                - "Block three hours on Friday mornings in your calendar"
                - "Prepare discovery notes and the problem statement before each block"
                - "Use the Friday block to draft or polish open proposals @recurring(weekly:fri)"
                - "Record the days from discovery call to sent proposal for each one"
            - name: Phrase bank of tested proposal sections
              description: |-
                ## Purpose
                The best paragraph you ever wrote about your approach to stakeholder interviews is buried in a proposal from last year. A phrase bank of tested sections, each tagged by service and the proposals it helped win, gives you strong building blocks without copying whole proposals that do not fit.

                ## Milestones
                1. A document of reusable sections tagged by service line and section type.
                2. Each block marked with the proposals it appeared in and their outcome.
                3. Weak or outdated blocks removed after each monthly update.
                4. A rule that every reused block is rewritten for the client before sending.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tagged phrase bank of at least twenty sections, each linked to outcomes, has been updated monthly for three months."
                cadence: rolling
              tasks:
                - "Copy your ten strongest paragraphs from past proposals into one document"
                - "Tag each by service, section type and outcome"
                - "Add new blocks from proposals sent this month @recurring(monthly:5)"
                - "Delete blocks that appear only in lost proposals"
            - name: Peer review swap with another independent
              description: |-
                ## Purpose
                Reading your own proposal for the third time, you no longer see the jargon, the buried fee or the missing next step. Swapping proposals with a trusted independent in an unrelated niche, once a month, gives each of you a cold reader who spots what the client will notice.

                ## Milestones
                1. One independent consultant in a non-competing niche agreed as a review partner.
                2. A confidentiality agreement between you, with client names removed from shared drafts.
                3. A short review checklist both of you use.
                4. Six monthly swaps completed with the main comments logged.

                ## Notes
                Strip client names and figures before sharing, unless the client has agreed otherwise.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly proposal review swaps have been completed with a peer under a confidentiality agreement, with comments logged."
                cadence: rolling
              tasks:
                - "Ask one independent in another niche to swap proposal reviews"
                - "Agree confidentiality and remove client names from drafts"
                - "Exchange one anonymised proposal and a review checklist @recurring(monthly:17)"
                - "Log the three most useful comments from each swap"
            - name: Quarterly proposal metrics review
              description: |-
                ## Purpose
                Gut feel about how proposals are going hides patterns such as a falling win rate on larger bids or clients taking twice as long to decide. Reviewing win rate, average value, days to decision and hours spent per proposal each quarter shows where your proposal effort pays and where it leaks.

                ## Milestones
                1. A metrics log with win rate by count and by value, average proposal value, days to decision and drafting hours.
                2. Figures split by client size or service line where you have enough proposals.
                3. One change chosen each quarter based on what the numbers show.
                4. Four quarterly reviews completed with the change and its effect noted.

                ## Notes
                Start from the **Metrics log** template. With fewer than ten proposals a quarter, look at a rolling twelve months rather than reading too much into one quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews of proposal metrics are logged, each with one change chosen and its effect noted the following quarter."
                cadence: cyclic
              tasks:
                - "Set up a metrics log with the five proposal measures"
                - "Fill in figures for the last twelve months from your tracker"
                - "Review the metrics and choose one change for next quarter @recurring(quarterly)"
                - "Note whether last quarter's change made a difference"
            - name: Quarterly refresh of the proposal template
              description: |-
                ## Purpose
                Templates drift: a fee table gets edited in one proposal, a better approach diagram appears in another, and the master never catches up. A quarterly pass that folds improvements back into the skeleton and terms keeps the master better than any single proposal.

                ## Milestones
                1. Improvements from the last quarter's sent proposals listed.
                2. The master skeleton, fee table and terms appendix updated to match.
                3. Old versions of the master archived with a date.
                4. A changelog noting what changed and why.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The master proposal template carries a dated changelog showing at least four quarterly refreshes."
                cadence: cyclic
              tasks:
                - "Compare last quarter's sent proposals with the master"
                - "Fold the best changes into the master and archive the old version @recurring(quarterly)"
                - "Record each change in a changelog at the front of the master"
                - "Check the terms appendix still matches what your lawyer approved"
            - name: Reviving proposals that have gone quiet
              description: |-
                ## Purpose
                Proposals that stall are rarely rejected; the sponsor got busy, a budget moved or a reorganisation took over. A monthly check of anything silent for more than thirty days, with a helpful, specific message rather than a chase, revives a share of them and closes the rest cleanly.

                ## Milestones
                1. A rule for when a proposal counts as quiet, such as thirty days without contact.
                2. Three message types written: a useful insight, a revised start date and a polite close-out.
                3. Every quiet proposal contacted or closed each month.
                4. Outcomes of revived proposals recorded in the tracker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No proposal in the tracker has been silent for more than sixty days without a revival message or a recorded close-out."
                cadence: rolling
              tasks:
                - "List every proposal with no client contact in thirty days"
                - "Write three message types for quiet proposals"
                - "Send a revival message or close out each quiet proposal @recurring(monthly:26)"
                - "Mark revived and closed proposals in the tracker"
            - name: Writing objectives the client can measure
              description: |-
                ## Purpose
                Objectives such as improve efficiency or support the strategy give the client nothing to judge you by and invite scope creep. Learning to write three to five objectives with a measure, a baseline and a date, agreed with the client, makes your proposal easier to approve and the engagement easier to close.

                ## Milestones
                1. Ten weak objectives from past proposals rewritten with a measure, baseline and date.
                2. A short guide to the difference between objectives, deliverables and activities.
                3. Objectives in the next live proposal reviewed by the client before sending.
                4. A rule that every proposal has no more than five objectives.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past objectives have been rewritten with measures, baselines and dates, and the next proposal's objectives were confirmed by the client."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Copy ten objectives from past proposals into one list"
                - "Rewrite each with a measure, a baseline and a date"
                - "Write a half-page note on objectives versus deliverables versus activities"
                - "Check the next proposal's objectives with the client before sending"
            - name: Describing approach and phases without jargon
              description: |-
                ## Purpose
                Clients rarely remember a methodology name, but they remember knowing what happens in week one and what they will hold at the end of week four. Practising approach sections that explain each phase in plain words, with its duration, activities and output, makes the proposal feel like a plan rather than a promise.

                ## Milestones
                1. A phase description format: name, duration, what happens, client involvement and output.
                2. Three past approach sections rewritten in that format.
                3. A simple timeline graphic that fits on half a page.
                4. One rewritten approach read by someone outside consulting who can explain it back.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three approach sections have been rewritten in a plain phase format with a timeline, and a non-consultant has explained one back correctly."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a five-part format for describing each phase"
                - "Rewrite the approach from three past proposals in that format"
                - "Draw a half-page timeline showing phases and outputs"
                - "Ask a friend outside consulting to explain one approach back to you"
            - name: Offering scope options in a proposal
              description: |-
                ## Purpose
                A single take-it-or-leave-it scope turns the client's decision into yes or no, and no is easier. Learning to offer two or three scope options, such as a diagnostic only, diagnostic plus design, or the full programme, moves the conversation to which one and shows you have thought about their budget.

                ## Milestones
                1. A table format comparing options by objectives covered, deliverables, duration and fee.
                2. A rule that the option you recommend is marked and the reason given.
                3. Options drafted for one past proposal to test whether they would have helped.
                4. Options used in at least two live proposals, with the client's choice recorded.

                ## Notes
                Two or three options is enough. Five options reads as indecision and slows the decision.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An options table format exists and has been used in two live proposals, with the chosen option and the reason recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Design a comparison table for two or three scope options"
                - "Rework one lost proposal into options to see how it reads"
                - "Mark the recommended option and write why in one sentence"
                - "Use options in your next two proposals and record which was chosen"
            - name: One-page cover letter and summary
              description: |-
                ## Purpose
                The sponsor may read only the first page before forwarding the proposal to a finance director who reads only the fee. A one-page letter that restates the problem, the recommended approach, the outcome, the fee and the next step means both readers get the decision they need from a single page.

                ## Milestones
                1. A cover letter structure of five short paragraphs fitting on one page.
                2. Two versions drafted for a recent proposal, one for the sponsor and one for a finance reader.
                3. The letter tested by asking someone to state the fee and next step after one read.
                4. The structure added to the proposal skeleton.

                ## Notes
                Keep it a summary of this proposal, not a sales letter about your firm. If the letter runs past one page, the proposal itself is probably unclear.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page cover letter structure is in the proposal skeleton, and a test reader could state the fee and next step after one read."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a five-paragraph cover letter for your most recent proposal"
                - "Rewrite it for a finance reader who cares about cost and risk"
                - "Ask a test reader to name the fee and the next step after one read"
                - "Add the final structure to the proposal skeleton"
            - name: Cutting a proposal by a third
              description: |-
                ## Purpose
                Long proposals feel thorough to the writer and tiring to the buyer, and the extra pages usually hold method descriptions nobody asked for. Practising cutting a past proposal by a third, without losing a single client fact, trains the habit of writing only what helps the decision.

                ## Milestones
                1. One past proposal cut by at least a third, with word counts before and after.
                2. A list of the kinds of text you cut most, such as method theory or firm history.
                3. A weekly practice of trimming one section from any open proposal for six weeks.
                4. A target length per proposal type written into the style sheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One proposal has been cut by a third with no client facts lost, and target lengths per proposal type are in the style sheet."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick your longest recent proposal and record its word count"
                - "Cut it by a third without removing any client fact or number"
                - "List the types of text you removed"
                - "Trim one section of an open proposal each week @recurring(weekly:wed)"
            - name: Presenting the fees section clearly
              description: |-
                ## Purpose
                Even a fair fee loses work when it appears as a single unexplained number, or when expenses and payment dates are left for the client to guess. Learning to lay out fees by phase, with what each covers, expenses, tax treatment and a payment schedule, removes the questions a finance reader would otherwise stall on.

                ## Milestones
                1. A fee table format by phase with deliverables, fee, expenses basis and payment date.
                2. Standard wording for expenses, applicable sales tax or VAT, currency and validity period.
                3. A payment schedule pattern, such as a deposit on signature and the rest by milestone.
                4. The format tested on a recent proposal and checked by your accountant for tax wording.

                ## Notes
                How you set the fee belongs to your pricing work; this project is about presenting it. Ask your accountant how tax should appear on proposals in your country.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A fee table and payment schedule format with expenses and tax wording checked by an accountant is in the proposal skeleton."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Draft a fee table laid out by phase"
                - "Write standard lines for expenses, tax, currency and validity"
                - "Choose a default payment schedule pattern"
                - "Ask your accountant to check the tax wording"
            - name: Teardown of winning proposals
              description: |-
                ## Purpose
                Few independents ever see a proposal written by someone else, so they copy their old firm's habits without knowing which ones matter. Collecting and taking apart a handful of winning proposals, from peers, public tenders that publish winners or your own wins, shows which sections and phrasing actually decide outcomes.

                ## Milestones
                1. Five winning proposals collected from peers, published tender results or your own wins.
                2. Each scored against the same checklist of sections and qualities.
                3. Three techniques identified that appear in most of them.
                4. Those techniques tried in your next proposal.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five winning proposals have been scored against one checklist and three recurring techniques used in a new proposal."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two peers whether they would share an anonymised winning proposal"
                - "Score each proposal against one checklist"
                - "Study one winning proposal against the checklist @recurring(monthly:8)"
                - "Use the three most common techniques in your next proposal"
            - name: Writing assumptions and client responsibilities
              description: |-
                ## Purpose
                Most overruns on fixed-fee work come from things the client was expected to do: provide data, make staff available, give feedback within a week. Learning to write specific, dated assumptions and client responsibilities for each proposal turns the standard schedule into protection that fits this engagement.

                ## Milestones
                1. A checklist of common assumption areas: data, access, staff time, review turnaround, decisions and locations.
                2. Assumptions for one past engagement written to show where they would have prevented an overrun.
                3. A rule that each assumption names an owner and a date or turnaround time.
                4. A change request clause linked to the assumptions in the next proposal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The next proposal sent contains specific assumptions, each with an owner and timing, linked to a change request clause."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the six common assumption areas"
                - "Write specific assumptions for a past engagement that overran"
                - "Give each assumption an owner and a turnaround time"
                - "Link the assumptions to a change request clause in your skeleton"
            - name: Choosing a proposal writing tool
              description: |-
                ## Purpose
                Word processing and a PDF export work for most independents, but small firms sending ten proposals a month may lose hours to formatting, version confusion and chasing signatures. Comparing staying with documents against a dedicated proposal tool, on cost, templates, e-signature and tracking, gives a decision based on your volume rather than a sales demo.

                ## Milestones
                1. Current monthly proposal volume and hours spent on formatting measured.
                2. Three options shortlisted, including keeping your current documents.
                3. Each option scored on cost, templates, e-signature, view tracking and client experience.
                4. A decision recorded with a review date in six months.

                ## Notes
                Start from the **Purchase decision** template. View tracking can feel intrusive to some clients; decide whether you will use it before you buy.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A proposal tool decision is recorded against scored criteria, with a review date six months out."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count proposals sent and hours spent formatting last month"
                - "Shortlist three options including staying as you are"
                - "Score each option on the same five criteria"
                - "Record the decision and a six-month review date"
            - name: Letter, document or slide deck format choice
              description: |-
                ## Purpose
                Family business owners may want a two-page letter they can read on a phone, while a corporate procurement team may expect slides they can forward. Setting a simple rule for which format suits which client and opportunity size stops you rebuilding the same content three ways.

                ## Milestones
                1. Three formats defined: short letter, full document and slide proposal.
                2. A rule linking each format to client type and opportunity size.
                3. A version of the skeleton in each format.
                4. The rule applied to the next three proposals and adjusted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule matches each of three proposal formats to client types and sizes, and a skeleton exists in each format."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your last five clients which format they preferred to receive"
                - "Write a rule linking format to client type and size"
                - "Adapt the skeleton into letter, document and slide versions"
                - "Apply the rule to the next three proposals"
            - name: Deciding when to decline or refer work
              description: |-
                ## Purpose
                Saying yes to every enquiry fills the calendar with proposals for work you are not best placed to do, and losing those bids hurts your reputation more than declining. A clear policy for when to decline, when to refer to a trusted peer and when to partner keeps your proposals focused on work you can win and deliver well.

                ## Milestones
                1. A list of the kinds of work you will not propose for, with reasons.
                2. Three trusted peers you can refer work to, each with their specialism.
                3. A referral message template that keeps the client relationship warm.
                4. Every declined or referred enquiry for six months recorded in the tracker.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decline and referral policy exists with three named referral partners, and declined enquiries are logged for six months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the work you will not propose for and why"
                - "Name three peers you would refer clients to"
                - "Draft a referral message that keeps the door open"
                - "Log every declined or referred enquiry in the tracker"
            - name: Acceptance and e-signature process
              description: |-
                ## Purpose
                Without a simple way to sign, a client who says yes on a call can take weeks to return the document. Setting up an acceptance block, an e-signature route and a purchase order checklist turns a verbal yes into a signed agreement within days.

                ## Milestones
                1. An acceptance block at the end of the proposal with signatory name, title and date.
                2. An e-signature tool or a simple signed PDF route chosen and tested.
                3. A checklist of what the client's finance team usually needs, such as supplier forms and tax details.
                4. Average time from verbal yes to signature measured on the next three wins.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An acceptance block, a tested e-signature route and a supplier onboarding checklist are in place, with signing times recorded for three wins."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add an acceptance block to the proposal skeleton"
                - "Choose and test an e-signature route with a colleague"
                - "Prepare your supplier details pack for client finance teams"
                - "Record days from verbal yes to signature on the next three wins"
            - name: Risks and mitigations section
              description: |-
                ## Purpose
                Buyers of consulting worry about the project going wrong more than they say: key staff unavailable, data not ready, the board changing direction. A short risks section naming the four or five real risks and how you will handle them shows experience and reassures a cautious finance or procurement reader.

                ## Milestones
                1. A list of the risks that have actually affected your past engagements.
                2. A half-page table format with risk, likelihood, effect and mitigation.
                3. The section drafted for one live proposal and kept to five risks.
                4. The client's response to the section noted in the follow-up call.

                ## Notes
                Start from the **Risk register** template for your master list, then show only the few that matter to this client.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master risk list exists and a five-risk table with mitigations has appeared in at least one live proposal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the risks that hit your last five engagements"
                - "Build a risk, likelihood, effect and mitigation table"
                - "Add a five-risk version to your next proposal"
                - "Ask in the follow-up call whether the risks section helped"
            - name: Paid diagnostic as a first-phase proposal
              description: |-
                ## Purpose
                When the problem is unclear, a full-programme proposal forces you to guess at scope and the client to commit to a large sum. Writing a short proposal for a paid diagnostic of two to four weeks, with a clear report and a recommendation on next steps, lowers the first decision and gives you the facts for a better second proposal.

                ## Milestones
                1. A two-page diagnostic proposal format with objectives, activities, report contents and duration.
                2. A clear statement of what the diagnostic will and will not decide.
                3. The format offered on one live opportunity where scope was unclear.
                4. A rule on how a diagnostic report leads into a follow-on proposal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page diagnostic proposal format exists and has been offered on at least one opportunity with unclear scope."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a two-page diagnostic proposal format"
                - "Write what the diagnostic will and will not answer"
                - "Offer the diagnostic on your next unclear opportunity"
                - "Describe how the diagnostic report hands over to a full proposal"
            - name: Responding to a formal request for proposal
              description: |-
                ## Purpose
                Corporate requests for proposal come with a deadline, mandatory forms, evaluation criteria and a submission portal, and small firms lose them on compliance before quality is read. Planning the response backwards from the deadline, with a compliance matrix, keeps every required item in and leaves time for the parts that score.

                ## Milestones
                1. The request read in full and every mandatory requirement listed in a compliance matrix.
                2. A response plan working back from the deadline, with drafting, review and submission dates.
                3. Each evaluation criterion mapped to the section that answers it.
                4. The response submitted at least a day early, with confirmation of receipt saved.

                ## Notes
                Read the submission instructions twice. File formats, page limits and naming rules can disqualify a strong response.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A compliant response is submitted at least a day before the deadline, with a completed compliance matrix and receipt confirmation on file."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Read the full request and list every mandatory requirement"
                - "Build a compliance matrix linking each requirement to a section"
                - "Set drafting, review and submission dates back from the deadline"
                - "Submit a day early and save the confirmation of receipt"
            - name: Clarification questions before the bid deadline
              description: |-
                ## Purpose
                Requests for proposal often leave scope, budget or evaluation unclear, and most set a date after which no questions are accepted. Sending a few sharp clarification questions on time can reveal what the buyer really values and shows the evaluators you have read closely.

                ## Milestones
                1. The clarification deadline and submission method noted in your calendar.
                2. Five or fewer questions drafted on the points that would change your response.
                3. Questions submitted by the stated route before the deadline.
                4. The buyer's answers, which may be shared with all bidders, folded into the response.

                ## Notes
                Assume every question and answer will be shared with competitors. Do not reveal your approach in how you phrase them.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Clarification questions were submitted before the buyer's deadline and the answers are reflected in the final response."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the clarification deadline in your calendar"
                - "Draft up to five questions that would change your response"
                - "Submit them through the route the buyer specifies"
                - "Update the response with the answers received"
            - name: Proposal presentation meeting
              description: |-
                ## Purpose
                Shortlisted firms are often invited to present the proposal to a panel, and the meeting can decide the work more than the document did. Preparing a fifteen-minute talk, the likely questions and who says what turns the meeting into a working session the panel remembers.

                ## Milestones
                1. A fifteen-minute talk focused on the client's problem, your approach and the first month.
                2. A list of the ten hardest questions the panel could ask, with short answers.
                3. Roles agreed if more than one person presents.
                4. A full rehearsal held, timed and recorded.
                5. A thank-you note sent within a day restating the next step.

                ## Notes
                Start from the **Meeting notes** template to record who asked what. Leave at least half the time for questions.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The presentation was rehearsed in full, delivered within time, and a thank-you note with the next step was sent within a day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the client who will be on the panel and how long you have"
                - "Draft a fifteen-minute talk and the ten hardest questions"
                - "Rehearse the full meeting with a timer"
                - "Send a thank-you note restating the next step within a day"
            - name: Negotiating requested changes to a proposal
              description: |-
                ## Purpose
                Late requests for a lower fee, a shorter timeline or tougher terms usually mean the client is close to signing, and panicked concessions at this point set the tone for the whole engagement. Preparing your acceptable trades in advance, such as reducing scope rather than rate, keeps the work profitable and the relationship good.

                ## Milestones
                1. The client's requested changes listed precisely in writing.
                2. A set of trades prepared, such as fewer deliverables, a longer timeline or an earlier payment.
                3. A walk-away point written down before the call.
                4. A revised proposal or a short letter of changes sent within two working days.

                ## Notes
                For changes to liability, indemnity or intellectual property, get your lawyer's view before agreeing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Requested changes were answered with a revised proposal or letter of changes within two working days, without going past the written walk-away point."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down exactly what the client has asked to change"
                - "Prepare three trades that protect your rate"
                - "Set a walk-away point before the call"
                - "Send the revised proposal within two working days"
            - name: Handover from signed proposal to delivery
              description: |-
                ## Purpose
                Promises made during the sale, a named workshop, a start date or a particular associate, are easily lost once the proposal is signed. A short handover note from the proposal to the delivery plan, even if you are both the seller and the deliverer, means the client gets exactly what they bought.

                ## Milestones
                1. The signed proposal filed in the won folder with the acceptance and purchase order.
                2. A one-page note listing every commitment, deliverable, date and named person in the proposal.
                3. Verbal promises from calls added to the note.
                4. The note shared with any associates before the engagement starts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "For each won proposal, a one-page handover note of every commitment is filed and shared with the delivery team before start."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "File the signed proposal and purchase order in the won folder"
                - "List every commitment, date and named person from the proposal"
                - "Add anything promised verbally during the sale"
                - "Share the note with associates before the start date"
            - name: First proposal as a new independent
              description: |-
                ## Purpose
                After years inside a firm, the first solo proposal often borrows the old firm's length, language and credentials, some of which you may not be allowed to use. Writing it as yourself, with your own case summaries and terms, and checking it against your old employment restrictions, starts your independent practice on firm ground.

                ## Milestones
                1. Your old contract's restrictions on clients, solicitation and use of materials reread.
                2. Credentials rewritten to describe your own role, without the old firm's confidential material.
                3. A proposal under four pages with your own terms schedule.
                4. The proposal reviewed by a trusted former colleague or peer before sending.

                ## Notes
                If you are unsure whether a client or an example is restricted, ask an employment lawyer before using it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first independent proposal under four pages, using only your own materials and checked against your old contract, has been sent."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Reread the restrictions in your former employment contract"
                - "Rewrite your credentials to describe your own role"
                - "Draft the proposal from your skeleton in under four pages"
                - "Ask a trusted peer to review it before you send it"
            - name: House style for a two-partner firm
              description: |-
                ## Purpose
                When two or three partners each write proposals their own way, clients receive documents that look like they came from different firms, with different terms and fee layouts. Agreeing a shared house style, a sign-off rule and a monthly joint review keeps a small firm looking like one practice.

                ## Milestones
                1. One shared skeleton, style sheet and terms schedule agreed by all partners.
                2. A rule that a second partner reads every proposal above an agreed value.
                3. A monthly joint review of proposals sent and decided.
                4. All partners' last proposals compared to check the style is actually used.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All partners use one skeleton and terms schedule, second reads happen above the agreed value, and a monthly joint review has run for three months."
                cadence: rolling
              tasks:
                - "Lay each partner's last proposal side by side"
                - "Agree one skeleton, style sheet and terms schedule"
                - "Set the proposal value above which a second partner reads it"
                - "Hold a joint review of proposals sent and decided @recurring(monthly:15)"
            - name: Proposals for owner-managed businesses
              description: |-
                ## Purpose
                The owner of a fifty-person business is spending their own money, reads on a phone between jobs and decides with a partner or spouse rather than a procurement team. A shorter proposal that leads with the effect on cash, time and staff, avoids corporate language and offers staged payment fits how they actually buy.

                ## Milestones
                1. A two-page letter format for owner-managed clients.
                2. The benefit stated in terms the owner tracks, such as cash, hours or staff retention.
                3. A staged payment pattern that fits a small firm's cash flow.
                4. The format used on one owner-managed client and the response recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A two-page owner-managed client proposal format with cash-focused benefits and staged payments has been used on at least one opportunity."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask an owner-managed client how they prefer to read proposals"
                - "Draft a two-page letter format in plain language"
                - "Restate the benefit in cash, hours or staff terms"
                - "Offer staged payments and record the client's response"
            - name: Cross-border proposals and currency terms
              description: |-
                ## Purpose
                Overseas clients raise questions a domestic proposal never has to answer: which currency, who pays bank charges, whether tax is withheld, which law governs and how time zones affect workshops. Settling these in a standard cross-border appendix avoids surprises after signature.

                ## Milestones
                1. A list of the cross-border questions: currency, exchange risk, bank charges, withholding tax, governing law and travel.
                2. Standard wording drafted for each, with notes on what to check per country.
                3. The appendix reviewed by your accountant and lawyer.
                4. The appendix used on the next proposal to an overseas client.

                ## Notes
                Withholding tax and governing law vary by country and treaty. Treat the wording as a prompt to check with your accountant and lawyer each time, not as a settled answer.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cross-border appendix reviewed by an accountant and lawyer exists and has been used in at least one overseas proposal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the six cross-border questions a foreign client raises"
                - "Draft standard wording for currency, bank charges and travel"
                - "Ask your accountant about withholding tax on foreign fees"
                - "Use the appendix in your next overseas proposal"
            - name: Proposing with a team of associates
              description: |-
                ## Purpose
                Bringing in associates for larger work means the proposal has to show a coherent team, not a list of freelancers, and you need their rates and availability fixed before you quote. Agreeing roles, availability and consent in writing before the proposal goes out avoids promising people who cannot start.

                ## Milestones
                1. Each associate's role, days, rate and availability confirmed in writing before the proposal is sent.
                2. A team section showing one lead, clear roles and how the team works together.
                3. Consent from each associate to be named and their bio used.
                4. A back-up associate identified for each key role.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every associate named in the next team proposal has confirmed role, rate, availability and consent in writing, with a back-up named for key roles."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm role, days, rate and availability with each associate"
                - "Draft a team section with one clear lead"
                - "Get written consent from each associate to be named"
                - "Identify a back-up for each key role"
            - name: Honest start dates when you are fully booked
              description: |-
                ## Purpose
                Fully booked independents are tempted to promise an immediate start to win the work, then squeeze two clients into the same weeks. Stating an honest start date, with what can happen before it, such as data requests or a kickoff call, protects current clients and often signals that you are in demand.

                ## Milestones
                1. A capacity view showing booked weeks for the next three months.
                2. Standard wording for a deferred start, with the pre-start activities you can offer.
                3. The wording used in at least one proposal while busy.
                4. No overlapping commitments created by proposals in the next quarter.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Proposals sent while fully booked carry an honest start date taken from a capacity view, and no overlapping commitments arise for a quarter."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Map your booked weeks for the next three months"
                - "Write standard wording for a deferred start"
                - "List three useful things that can happen before the start"
                - "Check each new proposal's start date against the capacity view"
            - name: Multi-phase programme proposal with stage gates
              description: |-
                ## Purpose
                Large pieces of work, a year-long change programme for example, are hard to approve in one go and risky to price as one block. A proposal built in phases, each with its own deliverables, decision point and fee, lets the client commit to the first phase with a clear view of the whole.

                ## Milestones
                1. The programme broken into three or four phases, each with outputs and a decision point.
                2. Stage gate criteria written, stating what must be true to move to the next phase.
                3. Fees and durations shown per phase, with later phases as estimates.
                4. Contract wording that lets either side stop at a gate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A phased programme proposal with written gate criteria, per-phase fees and stop rights has been prepared for at least one large opportunity."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Break the programme into three or four phases"
                - "Write the criteria for passing each stage gate"
                - "Show fees and durations per phase, marking later ones as estimates"
                - "Ask your lawyer to check the stop-at-gate wording"
            - name: Outcomes schedule with baselines and measures
              description: |-
                ## Purpose
                Experienced buyers increasingly ask what will be measurably different at the end, and some want part of the fee tied to it. An outcomes schedule naming each measure, its current baseline, the target, who measures it and when, makes that conversation possible without vague promises.

                ## Milestones
                1. Two or three outcome measures agreed with the client, each with a baseline.
                2. The data source and the person who will measure each outcome named.
                3. Factors outside your control listed so the measures are fair to both sides.
                4. The schedule attached to the proposal and referenced in the fees section where relevant.

                ## Notes
                Agree the baseline in writing before signature. A disputed baseline is the usual reason outcome-linked work goes sour.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An outcomes schedule with agreed baselines, named data sources and listed exclusions has been attached to at least one proposal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree two or three outcome measures with the client"
                - "Record the current baseline for each from the client's data"
                - "Name who measures each outcome and when"
                - "List factors outside your control that the measures exclude"
            - name: Standing out against large firms in a bake-off
              description: |-
                ## Purpose
                Shortlisted against a large brand, a small firm that competes on breadth of credentials or team size will lose. A differentiation section built on senior attention, specific experience, speed and flexibility, backed by evidence, gives the evaluators a reason to pick the smaller team.

                ## Milestones
                1. The large competitor's likely strengths and weaknesses listed honestly.
                2. Three differentiators chosen, each backed by a fact or client example.
                3. A half-page section stating who will actually do the work and how much of your own time is committed.
                4. The section tested in one competitive bid and the debrief recorded.

                ## Notes
                Never criticise a competitor by name. Show the contrast through what you commit to.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A half-page evidence-backed differentiation section has been used in one bid against a larger firm, with the debrief recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what a large competitor would offer on this bid"
                - "Pick three differentiators and the evidence behind each"
                - "Write how much of your own time you commit to the work"
                - "Record the debrief outcome after the bid"
            - name: Retainer and advisory proposal letter
              description: |-
                ## Purpose
                Ongoing advisory work, such as a monthly day with a leadership team, does not fit a phased project proposal, and vague retainers drift into unlimited availability. A short letter format that defines what the retainer includes, response times, a monthly review and how to end it gives both sides a clear arrangement.

                ## Milestones
                1. A two-page retainer letter format with inclusions, exclusions and response times.
                2. A rule for what happens to unused time each month.
                3. A notice period and review point written in.
                4. The format used for one advisory client and reviewed after three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page retainer letter with inclusions, response times, unused time rules and a notice period has been used and reviewed after three months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a retainer letter listing what is and is not included"
                - "Set response times and a rule for unused monthly time"
                - "Add a notice period and a three-month review point"
                - "Review the letter with the client after three months"
            - name: Annual audit of every proposal sent
              description: |-
                ## Purpose
                Once a year, looking across every proposal at once reveals what monthly reviews miss: a sector where you never win, a fee band where clients always ask for cuts, a section clients never mention. A structured yearly audit turns twelve months of proposals into a short list of changes for the year ahead.

                ## Milestones
                1. Every proposal from the year listed with outcome, value, sector, format and reasons.
                2. Patterns identified by sector, size, format and source of the enquiry.
                3. Three changes chosen for the next year's proposals.
                4. The audit summary filed in the proposal library.

                ## Notes
                Ask the agent to summarise the year's debrief notes into themes before you start, then check the summary against the originals.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly audit of all proposals with patterns and three chosen changes is filed in the proposal library."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Export the year's proposals and outcomes from your tracker"
                - "Ask the agent to group the year's debrief notes into themes"
                - "Choose three changes for next year's proposals"
                - "Run the full proposal audit and file the summary @recurring(yearly)"
            - name: Proposal writing guide for new consultants
              description: |-
                ## Purpose
                As a small firm grows, proposal quality depends on whether new consultants absorb how the founders write, and that rarely happens by watching. A short internal guide with the skeleton, style sheet, examples of good sections and the review rule lets new people draft proposals that sound like the firm from their first month.

                ## Milestones
                1. A guide of no more than ten pages covering the skeleton, style, terms and review rule.
                2. Three annotated examples of strong sections from past winning proposals.
                3. A practice exercise where a new consultant drafts from a sample discovery note.
                4. The guide used with one new hire and revised from their questions.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A ten-page proposal writing guide with annotated examples and a practice exercise has been used with at least one new consultant."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Outline the guide around the skeleton, style and review rule"
                - "Annotate three strong sections from past winning proposals"
                - "Write a practice discovery note for new consultants to draft from"
                - "Revise the guide after the next new hire uses it"
---

# Consulting Proposal Letters

This area is for independent consultants and small firms who win work through written proposals, from a two-page letter to a formal response to a request for proposal. It starts with foundations (a qualification check, a discovery call guide, the problem statement in the client's words, a reusable structure, credentials, bios and standard terms), then the operating routines that keep proposals moving and learning, the writing skills that make a proposal easy to say yes to, decisions about format, tools and which opportunities to decline, the dated events of a bid, variants for a first independent proposal, a two-partner firm, owner-managed clients and cross-border work, and finally specialist formats such as multi-phase programmes, outcome schedules and retainer letters.

What repeats is a Monday look at the proposal pipeline, a Friday drafting block, follow-up calls within three working days of sending, a debrief on every decision with a monthly win and loss tally, monthly credentials and phrase bank updates, a peer review swap, a quarterly look at proposal metrics and the template, and a yearly audit of every proposal sent. The Purchase decision, Metrics log, Feedback themes, Risk register and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
