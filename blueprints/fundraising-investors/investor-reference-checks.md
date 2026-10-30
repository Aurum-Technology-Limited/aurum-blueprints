---
id: fundraising-investors.investor-reference-checks
name: Investor Reference Checks
description: "Investors checked before you take their money: a question bank, off-list calls with founders they backed through hard times, a red flag register, a scored decision and a reference network that stays honest."
category: business
version: 1.0.0
tags: [fundraising-investors, investor-reference-checks, founder, due-diligence, backchannel-references, venture-capital, board-investors]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - feedback-themes
    - risk-register
    - reading-queue
    - person
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Investor Reference Checks
          description: "Checking investors before taking their money by talking to founders they have backed, especially those whose companies struggled."
          projects:
            - name: Investor behaviours worth verifying before you sign
              description: |-
                ## Purpose
                Before any reference call is booked, decide what you actually need to learn, because a call without a question in mind turns into pleasant small talk. For most founders the list is short: how the partner behaves when numbers miss, whether they pick up the phone in a crisis, how they vote on a sale or a down round, and whether they keep confidences. Writing five to seven behaviours down gives every later call a purpose and every investor the same test.

                ## Milestones
                1. Five to seven investor behaviours written down, each as an observable action rather than a trait.
                2. Each behaviour ranked by how much it matters at your stage and board size.
                3. Co-founders agreed on the top three behaviours whose absence would make you walk away.
                4. The list pinned at the top of the reference tracker.

                ## Notes
                Good examples describe something a founder could have watched happen, such as backing a bridge after a missed plan. Weak ones are adjectives like founder friendly, which every reference will happily confirm.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of five to seven observable investor behaviours, ranked and agreed by all co-founders, sits at the top of the reference tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the three worst things an investor could do to your company"
                - "Turn each fear into a behaviour another founder could describe from experience"
                - "Rank the behaviours by how much they matter at your current stage"
                - "Agree the top three walk-away behaviours with your co-founders"
            - name: Reference check question bank
              description: |-
                ## Purpose
                Reference calls usually run 20 to 30 minutes, and founders who improvise spend most of that time on questions that invite polite answers. A bank of 25 to 30 questions, grouped under board behaviour, hard times, help given, conflicts and exits, lets you pick the eight that matter for each investor and ask every reference the same core set so answers can be compared.

                ## Milestones
                1. Twenty-five or more questions grouped under five headings.
                2. A core set of eight questions marked for every call.
                3. Each question phrased to ask about a specific event rather than an opinion.
                4. The bank reviewed by one founder who has run reference checks before.

                ## Notes
                Two closing questions earn their place on every call: would you take this investor's money again, and who else should I speak to. The second is how most off-list references are found.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A question bank of at least 25 questions under five headings, with a marked core set of eight, reviewed by an experienced founder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every question you wish you had asked an existing investor before they joined"
                - "Group the questions under board, hard times, help, conflicts and exits"
                - "Mark eight core questions to ask on every reference call"
                - "Send the bank to a founder who has run references and ask what is missing"
                - "Add the best new question from each round to the bank @recurring(yearly)"
            - name: Investor reference tracker
              description: |-
                ## Purpose
                Across a raise with six to ten serious investors, references scatter quickly across inboxes, call notes and memory. One tracker with a row per reference, linked to the investor, the partner, the source, whether they came from the investor's own list, the date called and the headline finding, shows at a glance which investors are properly checked and which are resting on one friendly voice.

                ## Milestones
                1. A tracker with columns for investor, partner, reference, relationship, source, on-list or off-list, date and headline finding.
                2. Every investor still in the process given a row with a target of at least three references.
                3. A coverage column showing how many off-list calls each investor has had.
                4. Access limited to the founders running the raise.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker listing every live investor, with a target of three references each and a visible count of off-list calls, shared only with the founders."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the tracker with columns for source, relationship and on-list status"
                - "Add a row for each investor who has asked for a second meeting"
                - "Set a target of three references per investor, at least two of them off-list"
                - "Restrict sharing to the founders running the raise"
                - "Close out rows for investors who have left the process @recurring(monthly:3)"
            - name: Full portfolio list with outcomes for each lead candidate
              description: |-
                ## Purpose
                Firms show their winners on the website and quietly drop the companies that shut down, sold for parts or replaced their founder. Rebuilding the full record for each partner who might join your board, from funding databases, old press releases and archived versions of the firm's site, gives you the population the best off-list references come from.

                ## Milestones
                1. A list of every company the lead partner has backed or sat on the board of, not only those on the current website.
                2. Each company marked as growing, acquired, shut down, recapitalised or unknown.
                3. Companies where the founder is no longer chief executive flagged.
                4. At least five struggling or closed companies identified as reference sources per lead candidate.

                ## Notes
                Archived snapshots of a firm's portfolio page from three to five years ago often show companies that have since disappeared from it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For each lead candidate, a portfolio list with every company's outcome marked and at least five struggling or closed companies flagged as reference sources."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the lead partner's board seats from a funding database or their public profile"
                - "Compare the firm's current portfolio page with an archived version from earlier years"
                - "Mark each company's outcome and whether the founder is still chief executive"
                - "Flag five companies that struggled as reference sources"
                - "Check funding news for new deals by each lead candidate @recurring(monthly:27)"
            - name: Public record review of the lead partner
              description: |-
                ## Purpose
                Partners leave a long public trail of podcasts, posts, conference talks, company filings and occasionally court or regulatory records. An hour or two reading that trail before reference calls tells you what they say they believe about founders, where their public story and their record disagree, and which questions are worth asking.

                ## Milestones
                1. The last two years of posts, talks and interviews skimmed and stated views on founders noted.
                2. Company registry filings checked for directorships held and resigned.
                3. A search of public court and regulatory records completed, with anything found passed to your lawyer to interpret.
                4. Three questions for reference calls drawn from the gaps.

                ## Notes
                Treat anything found in court or regulatory records as a question to explore, never a conclusion. Your lawyer can tell you what a filing actually means.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note per lead partner covering public views, directorships and any records found, ending with three questions for reference calls."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Listen to or read the partner's three most recent interviews or posts"
                - "Check the company registry for directorships the partner has held and resigned"
                - "Search public court and regulatory records under the partner's and the fund's names"
                - "Write three reference questions from where their public story and record differ"
            - name: Off-list founder references from struggling companies
              description: |-
                ## Purpose
                Founders whose companies grew will usually praise their investor, so the most useful calls are with founders who missed plan, raised a bridge, sold early or shut down. Finding three of these per lead candidate, without asking the investor to introduce you, is the habit that separates a real reference check from a formality.

                ## Milestones
                1. Three founders per lead candidate identified from struggling or closed companies.
                2. A short, honest outreach message written that explains why you are asking.
                3. At least two off-list calls completed per lead candidate.
                4. Each call logged in the tracker as off-list.

                ## Notes
                Most founders will take a 20 minute call from another founder if you keep it short and promise discretion. Former founders are often reachable through their current company or professional profile.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least two completed off-list calls per lead candidate with founders of companies that struggled, each logged in the tracker."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three struggling or closed companies from each lead candidate's portfolio list"
                - "Find each former founder's current role and a contact route"
                - "Write a three-line message asking for 20 minutes and promising discretion"
                - "Book at least two off-list calls per lead candidate"
            - name: Asking the investor for their own reference list
              description: |-
                ## Purpose
                Investors expect to be asked, and a request for references signals that you treat the decision seriously. Their list will be friendly, which is fine as long as you know it: ask for at least one founder from a company that did not work out, and notice how the investor responds to that request.

                ## Milestones
                1. A reference request sent to each investor who has reached partner meeting stage.
                2. At least one founder from a company that failed or struggled requested.
                3. The investor's response time and willingness noted in the tracker.
                4. Every investor-supplied reference marked on-list.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every investor at partner meeting stage has been asked for references, including one founder whose company struggled, with their response noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Draft a short request for three founder references, one from a hard period"
                - "Send the request once an investor moves to a partner meeting"
                - "Note how quickly and openly each investor responds"
                - "Mark every reference they supply as on-list in the tracker"
            - name: Reference call note template
              description: |-
                ## Purpose
                Notes written from memory a day later lose the exact phrasing, and the exact phrasing is often where the warning sits. A one-page template with the core questions, a box for direct quotes, a tone rating and a single line on whether they would take the money again keeps every call comparable and quick to write up.

                ## Milestones
                1. A one-page template with core questions, quote box, tone rating and final verdict line.
                2. The template tested on the first two calls and adjusted.
                3. Each completed note filed against the right investor in the tracker.
                4. Notes written within two hours of every call.

                ## Notes
                Start from the **Meeting notes** template. Ask permission before recording any call; most references speak more freely if you simply take notes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested one-page note template is in use, with every reference call written up on it within two hours."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a reference note page from the meeting notes template"
                - "Add the core questions, a quote box and a final verdict line"
                - "Use it on the next two calls and cut whatever you left blank"
                - "Link each finished note to its investor row in the tracker"
            - name: Reference check timeline against the raise calendar
              description: |-
                ## Purpose
                Most founders start references after the term sheet arrives, when only days remain and the pressure is to sign. Mapping when each kind of check happens, with desk research at the first meeting, on-list calls at the partner meeting and off-list calls before any term sheet, puts the slow work early enough to change a decision.

                ## Milestones
                1. Each stage of the raise mapped to the reference work that happens at it.
                2. Off-list calls scheduled to finish before the expected term sheet date.
                3. A minimum standard set: no signature without three references, two of them off-list.
                4. The timeline shared with co-founders and your lawyer.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written timeline links each raise stage to its reference work, including a minimum standard before signing, and is shared with co-founders and your lawyer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the stages of your raise from first meeting to signature"
                - "Attach the reference work that should happen at each stage"
                - "Write the minimum reference standard you will hold before signing"
                - "Share the timeline with your co-founders and lawyer"
            - name: Source confidentiality rules for reference calls
              description: |-
                ## Purpose
                Venture is a small world, and a founder who speaks candidly about an investor is taking a real risk. Agreeing in advance how notes are stored, who reads them and what is never repeated to the investor protects the people who help you, and keeps them willing to help the next founder.

                ## Milestones
                1. Written rules on where reference notes live and who can read them.
                2. A commitment never to name a source to an investor or attribute a quote.
                3. A plan for raising a concern with an investor without revealing who raised it.
                4. The rules read and agreed by every founder making calls.

                ## Notes
                Keep notes factual and avoid writing allegations as facts. If you hear something that could be serious, take advice from your lawyer before acting on it.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Confidentiality rules for storing and using reference notes are written down and agreed by every founder who makes reference calls."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write where reference notes will be stored and who may read them"
                - "Write the rule that no source is ever named to an investor"
                - "Agree how a concern will be raised without identifying who raised it"
                - "Get every founder making calls to confirm they have read the rules"
            - name: Weekly reference call block during a raise
              description: |-
                ## Purpose
                Reference calls get squeezed out by pitch meetings unless they have their own time. Two protected hours each week for booking and making calls keeps the checks moving at the same pace as the process, instead of piling up in the last few days before a signature.

                ## Milestones
                1. A recurring two-hour block in the calendar for the length of the raise.
                2. At least three reference calls made in a typical week.
                3. Each block ending with the tracker updated.
                4. No week passing without a reference call once second meetings begin.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Across the raise, a weekly two-hour reference block is held, with at least three calls made in most weeks once second meetings begin."
                cadence: rolling
              tasks:
                - "Book a two-hour reference block in your calendar for the length of the raise"
                - "Make and book reference calls in the protected block @recurring(weekly:tue)"
                - "Update the tracker before each block ends"
            - name: Friday reference findings summary
              description: |-
                ## Purpose
                Individual calls are anecdotes; the same story from four founders is evidence. A short Friday summary per investor, sorting what you heard into repeated themes, one-off comments and open questions, shows where the picture is firming up and where another call is needed.

                ## Milestones
                1. A summary per live investor updated each Friday of the raise.
                2. Findings sorted into repeated themes, single comments and open questions.
                3. Any theme heard from only one source marked as needing a second call.
                4. The summary used as the input to the investor scorecard.

                ## Notes
                Start from the **Feedback themes** template, one page per investor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly summary per live investor sorts reference findings into themes, single comments and open questions for the whole raise."
                cadence: rolling
              tasks:
                - "Create a findings page per investor from the feedback themes template"
                - "Sort the week's call notes into themes, one-offs and open questions @recurring(weekly:fri)"
                - "Flag any theme heard from only one source for a second call"
                - "Ask the agent to draft the summary from the call notes, then check every line against them"
            - name: Investor red flag register
              description: |-
                ## Purpose
                Warning signs tend to arrive in fragments: a slow reply, a hesitant reference, a founder who changes the subject. Logging each one in a single register with source type, date and severity stops the fragments being forgotten when the investor is charming at the next meeting.

                ## Milestones
                1. A register with columns for investor, signal, source type, date and severity.
                2. Positive signals logged alongside warnings so the picture stays balanced.
                3. Every high-severity entry discussed by the founders within a week.
                4. The register reviewed before every investor meeting in the raise.

                ## Notes
                Start from the **Risk register** template. Record the source type, such as off-list founder, rather than a name, in line with your confidentiality rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of warning and positive signals per investor is kept, with every high-severity entry discussed by the founders within a week."
                cadence: rolling
              tasks:
                - "Set up a red flag register from the risk register template"
                - "Log every warning and positive signal with its source type and severity"
                - "Re-read the register entries for investors you meet this week @recurring(weekly:mon)"
                - "Discuss any high-severity entry with your co-founders within a week"
            - name: Daily follow-up sweep in the exclusivity window
              description: |-
                ## Purpose
                Once a term sheet is signed and exclusivity starts, reference replies, call bookings and follow-up questions have days rather than weeks to land. A 15 minute daily sweep of who has replied, who needs a nudge and what is still unverified gets the checks finished before the closing documents are.

                ## Milestones
                1. A daily 15 minute slot set for the exclusivity window.
                2. Every unanswered reference request nudged within two working days.
                3. Open questions listed beside the call that should answer each.
                4. All planned references completed before the lawyers circulate final documents.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Throughout exclusivity a daily sweep runs, and every planned reference call is complete before final documents circulate."
                cadence: rolling
              tasks:
                - "Set a 15 minute daily slot for the exclusivity period"
                - "Check replies, nudge silent references and update open questions @recurring(daily)"
                - "List each unverified point beside the call that should answer it"
            - name: Co-founder reference debrief
              description: |-
                ## Purpose
                When two founders split the calls, each hears half the story and forms a separate view. A short weekly debrief, where each founder brings the strongest quote and the biggest worry from their calls, keeps judgement shared and stops one good pitch meeting outweighing everyone else's evidence.

                ## Milestones
                1. A 30 minute weekly debrief held for the length of the raise.
                2. Each founder bringing one strong quote and one worry from their calls.
                3. Disagreements about an investor written down with the evidence each side relies on.
                4. A shared view per investor recorded at the end of each debrief.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly co-founder debriefs are held through the raise, each ending with a recorded shared view per live investor."
                cadence: rolling
              tasks:
                - "Agree a weekly 30 minute debrief slot with your co-founders"
                - "Share one quote and one worry from each founder's calls @recurring(weekly:thu)"
                - "Write down any disagreement with the evidence behind each view"
            - name: Founder reference network kept warm between raises
              description: |-
                ## Purpose
                Finding candid founders under deadline is slow; asking people you already know is fast. A light monthly habit of staying in touch with founders across several firms' portfolios means that when the next raise starts, you can get an honest view of most investors within a day.

                ## Milestones
                1. A list of 20 founders across at least eight firms' portfolios.
                2. Each founder noted with the investors they can speak about.
                3. One genuine touch a month, such as a useful introduction or a quick catch-up.
                4. At least five founders you could call tomorrow for a candid view.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of 20 founders covering at least eight firms is kept, with monthly touches logged and five who would give a candid view at short notice."
                cadence: rolling
              tasks:
                - "List founders you know and the investors on their cap tables"
                - "Get in touch with one founder on the list with something useful @recurring(monthly:11)"
                - "Add founders you meet at events to the list with their investors"
                - "Note which firms your network still does not cover"
            - name: Partner and fund change watch
              description: |-
                ## Purpose
                The partner who championed you can leave the firm, and a fund near the end of its investing period can stop supporting follow-on rounds. A monthly check for partner moves, new fund closes and restructures among investors in your process or on your cap table catches the changes that make an old reference out of date.

                ## Milestones
                1. A watch list of every partner and firm in the raise or on the cap table.
                2. A monthly check of news, firm websites and partner profiles.
                3. Any partner departure or fund change noted in the tracker with the date.
                4. A fresh reference call booked for any investor whose key partner has changed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly checks are logged, with every partner move or fund change recorded and a fresh reference booked where the key partner changed."
                cadence: rolling
              tasks:
                - "List every partner and firm in the raise or on the cap table"
                - "Check news and partner profiles for moves and fund changes @recurring(monthly:19)"
                - "Book a fresh reference call when a key partner changes"
            - name: Quarterly check of investor behaviour against references
              description: |-
                ## Purpose
                References predict behaviour; the board meetings that follow show it. Once a quarter, comparing how each new investor actually behaved with what references said they would do sharpens your own judgement and tells you which kinds of source proved reliable for next time.

                ## Milestones
                1. The reference summary for each new investor kept beside the board calendar.
                2. A quarterly note per investor on responsiveness, help given and behaviour in disagreements.
                3. Each note compared with what references predicted.
                4. Reliable and unreliable reference sources marked for future raises.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly notes per new investor compare actual behaviour with reference predictions, with reliable sources marked."
                cadence: rolling
              tasks:
                - "File each new investor's reference summary with your board papers"
                - "Write a short note comparing each investor's behaviour with the predictions @recurring(quarterly)"
                - "Mark which reference sources proved accurate"
            - name: Annual investor reputation file refresh
              description: |-
                ## Purpose
                Between raises, reference notes drift out of date as partners move, funds age and founders tell new stories. A yearly refresh of your notes on the dozen investors you are most likely to meet again keeps a running view, so the next raise starts from evidence rather than reputation.

                ## Milestones
                1. A file on the twelve investors most likely to matter in the next raise.
                2. Each entry updated with partner, fund vintage and recent founder comments.
                3. Out-of-date or second-hand claims marked as unverified.
                4. The file stored under the same confidentiality rules as live notes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A yearly refreshed file on twelve likely investors, with each entry dated and unverified claims marked."
                cadence: cyclic
              tasks:
                - "Choose the twelve investors most likely to matter in your next raise"
                - "Refresh each entry with partner, fund and recent founder comments @recurring(yearly)"
                - "Mark any claim you have not checked yourself as unverified"
            - name: Asking for stories instead of opinions
              description: |-
                ## Purpose
                Ask a reference whether an investor is supportive and you will hear yes almost every time. Ask them to describe the board meeting after their worst quarter, or what the partner did the week a key hire quit, and you hear what actually happened. Learning to ask for specific events, then following up with what happened next, is the core skill of reference calls.

                ## Milestones
                1. Every core question rewritten to ask about a specific event.
                2. Two follow-up prompts learned by heart, such as what happened next and what would you do differently.
                3. Three calls completed using event questions and compared with an earlier call.
                4. One page of lessons on which questions produced real stories.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Core questions are rewritten as event questions, used on three calls, with a page of lessons on which ones produced specific stories."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Rewrite each core question so it asks about a specific moment"
                - "Practise two follow-up prompts until they come without thinking"
                - "Use the rewritten questions on your next three reference calls"
                - "Write down which questions produced real stories and which fell flat"
            - name: Reading faint praise and hesitation
              description: |-
                ## Purpose
                References rarely say anything negative outright, especially about someone who still sits on their board. A pause before answering, praise for the firm rather than the partner, or a quick move to another topic often carries the real message. Learning to notice these signals and probe them gently turns a polite call into a useful one.

                ## Milestones
                1. A short list of common hedging signals kept beside the call template.
                2. A gentle probing line ready for each, such as asking what they would warn a friend about.
                3. Tone and hesitation recorded in the notes alongside the words.
                4. Notes from recent calls re-read for signals missed at the time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of hedging signals with probing lines is in use, and tone is recorded on every call note for the rest of the raise."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a list of hedging signals you have heard or read about"
                - "Prepare one gentle probing question for each signal"
                - "Add a tone and hesitation line to the call template"
                - "Re-read last month's call notes for signals you missed @recurring(monthly:22)"
            - name: How investors behave when a company misses plan
              description: |-
                ## Purpose
                Investor character shows when a company misses its numbers, needs a bridge, faces a down round or weighs a sale below the preference stack. Reading founder accounts and talking to experienced founders about these moments teaches the patterns, from quiet withdrawal to pressure for a quick sale, so you know exactly what to ask references about.

                ## Milestones
                1. Five founder accounts of hard board periods read and summarised.
                2. A list of typical investor responses to missed plans, good and bad.
                3. Two experienced founders asked what they wish they had checked.
                4. Three new hard-times questions added to the question bank.

                ## Notes
                Start from the **Reading queue** template for the accounts you collect.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five founder accounts are summarised, two founder conversations held and three hard-times questions added to the bank."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect five founder accounts of hard board periods in a reading queue"
                - "Summarise how each investor behaved when the company missed plan"
                - "Ask two experienced founders what they wish they had checked"
                - "Add three hard-times questions to the question bank"
                - "Read one founder account of a difficult board period @recurring(monthly:6)"
            - name: Checking follow-on capacity through references
              description: |-
                ## Purpose
                An investor who supports you in theory may be unable to in practice if the fund is late in its life or short of reserves. Founders whose companies raised later rounds can tell you whether the firm took up its pro rata, led an insider bridge or went quiet, which is better evidence than any reserve policy in a pitch.

                ## Milestones
                1. The fund vintage and approximate investing period noted for each lead candidate.
                2. Two founders per lead asked how the firm behaved in later rounds.
                3. Examples of pro rata taken up or declined recorded.
                4. A view on follow-on reliability written for each lead candidate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each lead candidate has a written view on follow-on reliability, based on at least two founders' accounts of later rounds."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the vintage of the fund each lead candidate would invest from"
                - "Ask two portfolio founders whether the firm took up its pro rata"
                - "Record any insider bridge the firm led or declined"
                - "Write a one-paragraph view on follow-on reliability"
            - name: Talking to a founder who was replaced as CEO
              description: |-
                ## Purpose
                Founders who were moved aside by their board have the most informative view of an investor, and often the most painful one. These calls need care: a clear reason for asking, a promise of discretion, room to tell the story their way, and an awareness that one bitter account is a data point rather than a verdict.

                ## Milestones
                1. At least one replaced founder identified for each lead candidate where one exists.
                2. An outreach message written that acknowledges the sensitivity.
                3. The call held with listening first and questions second.
                4. The account checked against a second source before it changes your view.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A call is held with a replaced founder for each lead candidate where one exists, with the account cross-checked against a second source."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find any founder in the lead's portfolio who is no longer chief executive"
                - "Write an outreach note that acknowledges the subject is sensitive"
                - "Let the founder tell the story before asking your questions"
                - "Check the account against one other founder or board member"
            - name: Testing the investor's value-add claims
              description: |-
                ## Purpose
                Pitches from investors promise hiring help, customer introductions, a platform team and steady follow-on support. Turning each claim into a question for portfolio founders, such as how many hires came through the talent team last year, shows which promises are real, which apply only to the top performers and which live only on a slide.

                ## Milestones
                1. Every value-add claim from investor meetings listed per investor.
                2. Each claim turned into a question with a countable answer.
                3. At least two portfolio founders asked about the claims that matter most to you.
                4. Claims marked as confirmed, partly confirmed or not confirmed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each lead candidate's value-add claims are listed and marked confirmed, partly confirmed or not confirmed by at least two founders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every kind of help each investor promised in meetings"
                - "Turn each claim into a question with a countable answer"
                - "Ask two portfolio founders about the claims that matter most"
                - "Mark each claim as confirmed, partly confirmed or not confirmed"
            - name: Spotting conflicted or dependent references
              description: |-
                ## Purpose
                Some references cannot afford to be candid: a founder still raising from the same firm, a co-investor who shares deal flow, a former associate who hopes to return. Knowing each reference's relationship with the investor lets you weight what they say, and stops a cluster of friendly but dependent voices outweighing one candid call.

                ## Milestones
                1. A relationship field filled in for every reference in the tracker.
                2. Each reference marked independent, dependent or unclear.
                3. Findings weighted so dependent references count for less in the summary.
                4. At least one independent reference secured for every lead candidate.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every reference in the tracker is marked independent, dependent or unclear, with at least one independent reference per lead candidate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each reference how they currently work with the investor"
                - "Mark every reference independent, dependent or unclear in the tracker"
                - "Weight dependent references lower in the weekly summary"
                - "Find an independent reference for any investor who has none"
            - name: Mock reference call with a founder friend
              description: |-
                ## Purpose
                First reference calls are often awkward, too long, or too gentle to get past the polite answer. A 30 minute rehearsal with a founder friend playing a guarded reference with a hidden concern, followed by honest feedback, makes your first real call far more useful.

                ## Milestones
                1. A founder friend briefed to play a guarded reference with one hidden concern.
                2. A 20 minute mock call run with the real question bank.
                3. Feedback taken on tone, follow-ups and whether the hidden concern surfaced.
                4. Two changes made to your approach before the first real call.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mock reference call is held, the hidden concern found or missed, and two changes to your approach written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a founder friend to play a guarded reference for 30 minutes"
                - "Brief them to hide one concern about a fictional investor"
                - "Run the call using your core questions"
                - "Write down two changes to make before your first real call"
            - name: Investor scorecard built from reference evidence
              description: |-
                ## Purpose
                Without a common scale, the investor with the best pitch meeting tends to win regardless of what references said. Scoring each lead candidate against your agreed behaviours using only reference evidence, and noting how many sources back each score, puts the comparison on paper before enthusiasm takes over.

                ## Milestones
                1. A scorecard with your agreed behaviours as rows and lead candidates as columns.
                2. Each score backed by a note of the evidence and the number of sources.
                3. Scores from different founders compared and any large gaps discussed.
                4. A ranked view of the lead candidates on reference evidence alone.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A scorecard ranks every lead candidate on the agreed behaviours, with the evidence and source count recorded for each score."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a scorecard with your agreed behaviours as rows"
                - "Score each lead candidate using only reference evidence"
                - "Record the number of sources behind every score"
                - "Compare scores with your co-founders and discuss any gap of two points or more"
            - name: Go or no-go on a lead investor after references
              description: |-
                ## Purpose
                At some point the evidence has to become a decision, and founders under time pressure often skip that step and simply sign. A one-page go or no-go memo on the lead, covering what references confirmed, what worried them and what would change your mind, makes the choice explicit and gives the board a record of why.

                ## Milestones
                1. A one-page memo on the lead covering confirmed strengths, concerns and open questions.
                2. A clear go, no-go or go-with-conditions recommendation.
                3. Any conditions, such as a different partner on the board, written as specific asks.
                4. The decision agreed by co-founders and recorded with the date.

                ## Notes
                A go-with-conditions outcome is common. The conditions go to whoever is negotiating terms; this decision only records what references support.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated one-page go or no-go memo on the lead investor is agreed by all co-founders, with any conditions written as specific asks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page memo of what references confirmed and what worried them"
                - "Write down what new evidence would change your mind"
                - "Make a go, no-go or go-with-conditions call with your co-founders"
                - "Record the decision and its date in the tracker"
            - name: Choosing the partner, not just the firm
              description: |-
                ## Purpose
                A firm's reputation is an average; the partner who joins your board is one person with their own habits, availability and record. Checking references on that specific partner, and on whether the firm lets founders change partner when things go wrong, matters more than the brand name at the top of the term sheet.

                ## Milestones
                1. The partner who would take the board seat confirmed in writing.
                2. At least three references specific to that partner rather than the firm.
                3. The partner's current board load and recent new seats noted.
                4. A view written on whether you would choose this partner at any firm.

                ## Notes
                Start from the **Person** template for each partner you are seriously considering.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board partner is confirmed in writing, with three partner-specific references and their current board load recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the firm in writing which partner would join your board"
                - "Create a person page for that partner"
                - "Book three references who have worked with that partner directly"
                - "Count the partner's current board seats and new seats this year"
            - name: Raising a reference concern with the investor directly
              description: |-
                ## Purpose
                Sometimes the right move after a worrying reference is to ask the investor about it, framed as a general question rather than a source's story. How they answer, whether candid, defensive or dismissive, is often more telling than the original account, and it can clear up a misunderstanding before it costs you a good partner.

                ## Milestones
                1. The concern written as a neutral question with no detail that could identify a source.
                2. The question practised aloud with a co-founder.
                3. The conversation held and the investor's answer recorded as closely as possible.
                4. The red flag register updated with whether the answer resolved the concern.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A concern is raised with the investor without identifying any source, with their answer recorded and the register updated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the concern as a neutral question that names no company or person"
                - "Rehearse the question aloud with a co-founder"
                - "Ask it at your next meeting and note the answer as closely as you can"
                - "Update the red flag register with whether the concern is resolved"
            - name: Proportionate checks for angels and small cheques
              description: |-
                ## Purpose
                A full off-list process for every angel writing a small cheque would take weeks, yet some small investors still cause large problems through information demands, side deals or disputes at exit. A lighter standard of one founder reference and a quick public check for most angels, with the full process for anyone taking a board seat or special rights, keeps effort matched to risk.

                ## Milestones
                1. A written rule for which investors get a light check and which get a full one.
                2. One founder reference completed for every angel above your threshold.
                3. A quick public record check done for every new angel.
                4. Any angel asking for a board seat or special rights moved to the full process.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written light or full check rule is applied to every angel in the round, with at least one founder reference for each above the threshold."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the cheque size above which an angel gets a founder reference"
                - "Run a quick public check on each new angel"
                - "Ask each angel above the threshold for a founder they have backed"
                - "Move any angel asking for a board seat to the full process"
            - name: Asking your lawyer and advisers about deal behaviour
              description: |-
                ## Purpose
                Venture lawyers, accountants and seasoned advisers see how firms behave across many deals: who drags out closings, who reopens terms late, who stays reasonable in a dispute. They cannot share client confidences, but a general question about a firm's reputation for deal behaviour often gives a steer founders never hear otherwise.

                ## Milestones
                1. Your lawyer asked how each lead candidate typically behaves in deals and disputes.
                2. Two experienced advisers asked the same question.
                3. Their comments logged as adviser views, separate from founder references.
                4. Any concern followed up with a founder reference before it affects the decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your lawyer and two advisers have been asked about each lead candidate's deal behaviour, with their views logged separately and any concern followed up."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your lawyer how each lead candidate behaves in negotiations and disputes"
                - "Put the same question to two experienced advisers"
                - "Log their views separately from founder references"
                - "Follow up any concern with a founder who has worked with the firm"
            - name: Dropping an investor from the process after bad references
              description: |-
                ## Purpose
                Ending talks with an investor who seems keen is hard, especially when the round is not yet full. Setting the threshold in advance, and having a short, courteous message ready that gives no detail from references, lets you step away cleanly without burning the relationship or exposing anyone who spoke to you.

                ## Milestones
                1. A written threshold for when reference findings end talks with an investor.
                2. A short decline message that cites fit rather than references.
                3. The message sent and the investor closed in the tracker.
                4. No reference source named or hinted at in any message.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written threshold for ending talks exists, and any investor dropped received a courteous message that named no reference source."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the reference findings that would end talks with an investor"
                - "Draft a short decline that cites fit rather than references"
                - "Send the decline within two days of deciding"
                - "Close the investor's row in the tracker with the reason"
            - name: Checking the other investors joining the round
              description: |-
                ## Purpose
                The lead gets most of the scrutiny, but followers with pro rata rights, information rights or a board observer seat will be around for years too. A short check on every investor taking a larger share or any special right stops a difficult co-investor arriving unnoticed alongside a good lead.

                ## Milestones
                1. Every investor taking special rights or above your size threshold listed.
                2. At least one founder reference completed for each.
                3. Any investor with a poor reference flagged to your lawyer before allocations are final.
                4. A final list of round participants approved by the founders.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every follower above the threshold or taking special rights has at least one founder reference, and the founders have approved the final participant list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every follower taking special rights or above your size threshold"
                - "Book one founder reference for each listed investor"
                - "Flag any poor reference to your lawyer before allocations are final"
                - "Approve the final list of round participants with your co-founders"
            - name: 48-hour reference check on an exploding term sheet
              description: |-
                ## Purpose
                Some investors issue term sheets with a 24 or 48 hour deadline, which in practice cuts reference checks short. A fast plan agreed before any offer arrives, with three calls from your existing network, one off-list founder and a direct question to the partner, lets you check the essentials in time or ask for extra days with a clear reason.

                ## Milestones
                1. A two-day reference plan written before any term sheet arrives.
                2. Three founders in your network ready to give a fast view on likely leads.
                3. The essential checks completed, or an extension requested with a specific reason.
                4. The outcome recorded in the tracker.

                ## Notes
                A reasonable investor will usually allow a few extra days for references. One who refuses is giving you a reference of their own.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written two-day reference plan exists before any term sheet arrives, and any fast offer is either checked within the window or extended for references."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a two-day reference plan before any term sheet arrives"
                - "Identify three founders who could give a same-day view on each likely lead"
                - "Prepare a polite request for extra days to complete references"
                - "Record what was checked and what was not before deciding"
            - name: Ten-day reference sprint before the term sheet
              description: |-
                ## Purpose
                When two or three investors are heading towards a term sheet, a focused ten-day sprint finishes the work: the remaining off-list calls, the partner check, follow-on capacity and a final debrief. Running it as a planned event, with every call booked in advance, means you sign on evidence rather than instinct.

                ## Milestones
                1. Remaining calls for the top two or three candidates booked across ten days.
                2. At least three references per candidate completed, two of them off-list.
                3. A final debrief held and the scorecard updated.
                4. The go or no-go memo ready before the term sheet is signed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within ten days every top candidate has three references including two off-list, the scorecard is updated and the go or no-go memo is ready before signing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the reference gaps for each of the top candidates"
                - "Book every remaining call across the next ten days"
                - "Hold a final debrief with your co-founders on the last day"
                - "Finish the go or no-go memo before any signature"
            - name: Reference findings briefing for the board
              description: |-
                ## Purpose
                Existing investors and independent directors will live with the new lead too, and many hold their own views on the firm. A one-page briefing on what references found, shared before the board approves the round, invites their own back-channel knowledge and leaves a record of the diligence you did.

                ## Milestones
                1. A one-page summary of reference findings with every source anonymised.
                2. The summary sent to the board before the approval meeting.
                3. Each director asked for anything they know about the incoming investor.
                4. Their comments added to the investor's file.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An anonymised one-page reference summary is sent to the board before round approval, with directors' own comments added to the file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page anonymised summary of reference findings"
                - "Send it to the board ahead of the approval meeting"
                - "Ask each director what they know about the incoming investor"
                - "Add their comments to the investor's file"
            - name: Portfolio founder dinner with the investor's founders
              description: |-
                ## Purpose
                Many firms offer to introduce you to their founders as a group, and an informal dinner or portfolio event shows how founders talk about the partner among peers. Going with three prepared questions, and an eye on who goes quiet, gives a different picture from one-to-one calls.

                ## Milestones
                1. An invitation accepted to a portfolio dinner or event for at least one lead candidate.
                2. Three questions prepared for informal conversations.
                3. Notes written the same evening, including who avoided the topic.
                4. At least one founder from the event followed up for a private call.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A portfolio event is attended for at least one lead candidate, with same-evening notes and one private follow-up call booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each lead candidate whether a portfolio dinner or event is coming up"
                - "Prepare three informal questions about working with the partner"
                - "Write notes the same evening, including who changed the subject"
                - "Book a private follow-up call with one founder you met"
            - name: Thank-you round to every reference after close
              description: |-
                ## Purpose
                Every founder who gave you 20 honest minutes took a small risk to help, and most never hear how it turned out. A short thank-you once the round closes, saying who you chose and offering to return the favour, keeps those people in your network and makes them willing to help the next founder.

                ## Milestones
                1. A list of every reference drawn from the tracker.
                2. A short personal thank-you sent to each within two weeks of close.
                3. An offer to return the favour included in every message.
                4. Replies logged and the founder network list updated.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every reference in the tracker receives a personal thank-you within two weeks of closing, with the founder network list updated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Export the list of references from the tracker"
                - "Write a short thank-you saying who you chose and why"
                - "Offer each reference a call or an introduction in return"
                - "Add new contacts to your founder network list"
            - name: Being an honest reference for other founders
              description: |-
                ## Purpose
                The back-channel only works if founders who have been through it give candid views in turn. Deciding what you will and will not say about your own investors, and answering those calls promptly, builds goodwill and keeps the system honest for everyone, including you next time.

                ## Milestones
                1. Your own view of each investor on your cap table written as specific examples.
                2. A clear line drawn on what you will not share, such as confidential board matters.
                3. Every reference request from another founder answered within a week.
                4. A quarterly note kept of the reference calls you gave.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every reference request from another founder is answered within a week, with a written view of each of your investors kept up to date."
                cadence: rolling
              tasks:
                - "Write two specific examples of how each of your investors has behaved"
                - "Decide which board matters you will never share on a reference call"
                - "Reply to any founder asking for a reference within a week"
                - "Note the reference calls you gave this quarter @recurring(quarterly)"
            - name: First-time founder running references for the first time
              description: |-
                ## Purpose
                First-time founders often feel in no position to check an investor who might fund them, and worry the request will look ungrateful. Experienced investors expect it. A simple first-raise version of the process, with one question bank, three calls per lead and one mentor to sense-check findings, is enough to avoid the worst mistakes.

                ## Milestones
                1. A mentor or experienced founder agreed as the sense-check for your findings.
                2. Three references completed for each lead candidate, including one off-list.
                3. A short findings note reviewed with the mentor before signing.
                4. One thing you would do differently written down for the next round.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three references per lead candidate, one off-list, are completed and reviewed with a mentor before the first term sheet is signed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask one experienced founder to sense-check your reference findings"
                - "Pick the eight core questions from the question bank"
                - "Complete three calls per lead candidate, one of them off-list"
                - "Review your findings note with the mentor before signing"
            - name: Solo founder running references alone
              description: |-
                ## Purpose
                Without a co-founder to split calls or challenge your read, a solo founder carries the whole check on top of pitching and running the company. Narrowing the full process to the lead and the largest follower, using a trusted adviser as a second listener, and batching calls into two afternoons a week keeps it manageable without dropping the off-list calls.

                ## Milestones
                1. Full reference work narrowed to the lead and the largest follower.
                2. An adviser or board member agreed as a second listener on findings.
                3. Calls batched into two afternoons a week.
                4. A findings summary reviewed with the adviser before signing.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "References on the lead and largest follower are completed in batched sessions and reviewed with an adviser before signing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Limit full checks to the lead and the largest follower"
                - "Ask an adviser to act as your second listener on findings"
                - "Batch reference calls into two afternoons a week"
                - "Review the findings summary with the adviser before signing"
            - name: Founder outside a major hub checking distant investors
              description: |-
                ## Purpose
                Raising from a fund in another city or country means your own network may know nothing about it, and local reputation does not travel. Finding founders in the investor's home market, checking how the firm has treated companies far from its office, and asking how often the partner actually visits fills the gap that distance creates.

                ## Milestones
                1. Two founders in the investor's home market found and called.
                2. At least one founder of a company outside that market, backed by the same firm, consulted.
                3. The partner's real pattern of visits and calls for remote companies noted.
                4. Any differences in legal or market norms between the two markets flagged to your lawyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For each distant lead candidate, two home-market founders and one remote portfolio founder are consulted, with notes on support for distant companies."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find two founders in the investor's home market through communities or profiles"
                - "Find a company the firm backed outside its home market"
                - "Ask how often the partner visited or called when things were hard"
                - "Flag any differences in market or legal norms to your lawyer"
            - name: Underrepresented founder checking an investor's record on inclusion
              description: |-
                ## Purpose
                Founders from underrepresented groups sometimes meet investors whose public statements on inclusion do not match how they treat founders in the boardroom. Talking to founders with similar backgrounds in the firm's portfolio, and reading any published diversity data, shows whether the firm's support is consistent when it counts.

                ## Milestones
                1. Founders from similar backgrounds in the firm's portfolio identified.
                2. Two of them asked specifically about board behaviour and support in hard times.
                3. The firm's published diversity data or commitments, if any, read.
                4. A note written on whether public commitments matched founders' experience.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two founders from similar backgrounds are consulted per lead candidate, with a note comparing their experience with the firm's public commitments."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Identify founders from backgrounds like yours in each lead's portfolio"
                - "Ask two of them about board behaviour and support in hard periods"
                - "Read any diversity data or commitments the firm has published"
                - "Check each investor on your cap table for newly published diversity data @recurring(yearly)"
            - name: Founder with caring responsibilities checking investor expectations
              description: |-
                ## Purpose
                Parents and carers running companies need to know whether an investor expects late-night calls, frequent travel or visible hours, and how they responded when a founder took leave. Asking references about these specific moments, rather than about general support, surfaces expectations that never appear in a term sheet.

                ## Milestones
                1. Two questions on leave, family emergencies and working patterns added to your call script.
                2. At least one reference found who took parental or carer leave while backed by the firm.
                3. The partner's expectations on meeting times and travel noted.
                4. A view recorded on fit with your caring responsibilities.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least one reference per lead candidate is asked about leave and working patterns, with a recorded view on fit with your caring responsibilities."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add two questions on leave and family emergencies to your call script"
                - "Find a founder who took parental or carer leave while backed by the firm"
                - "Ask how the partner handled board timing and travel around it"
                - "Record whether the investor's expectations fit your life"
            - name: Second-time founder re-checking investors you know
              description: |-
                ## Purpose
                Investors who backed your last company, or whom you know socially, feel already checked, but firms change, partners move into new roles and funds shift stage. A fresh pair of calls on each familiar investor, with founders they worked with in the last two years, catches the changes your old relationship would hide.

                ## Milestones
                1. Familiar investors in the new raise listed with when you last worked together.
                2. Two recent founders asked about each one.
                3. Changes in partner, fund or strategy since you last worked together noted.
                4. Your old view and the new evidence compared in writing.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each familiar investor is checked with two founders from the last two years, with old and new views compared in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List familiar investors and when you last worked with each"
                - "Book two calls per investor with founders backed in the last two years"
                - "Note changes in partner, fund or strategy since your last company"
                - "Compare your old view of each investor with the new evidence"
            - name: Emerging manager and first-time fund checks
              description: |-
                ## Purpose
                A first-time fund or solo investor may be an excellent partner, but has few portfolio founders to call and no record of behaviour in a downturn. Checking their earlier roles, the founders they backed as an angel or at a previous firm, and how secure the fund's capital is replaces the missing portfolio record with the best evidence available.

                ## Milestones
                1. The manager's prior firms, angel deals and operating roles listed.
                2. Two founders from their earlier investing or operating career called.
                3. Questions on fund size, committed capital and reserves asked directly.
                4. A view recorded on whether the fund can support follow-on rounds.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two founders from the manager's earlier career are consulted and direct answers on committed capital and reserves are recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the manager's prior firms, angel investments and operating roles"
                - "Call two founders the manager backed or worked with before this fund"
                - "Ask the manager how much of the fund is committed and held for follow-ons"
                - "Record your view on their ability to support later rounds"
            - name: Back-channel references through co-investors and limited partners
              description: |-
                ## Purpose
                Experienced founders also hear from people who sit beside an investor: other funds that co-invested, independent directors on shared boards and occasionally limited partners. These sources see behaviour in syndicates, boardrooms and fund politics that founders never see, but they need careful handling and their own conflicts weighing.

                ## Milestones
                1. Two co-investors or independent directors who have shared boards with the partner identified.
                2. Calls held with clear discretion on both sides.
                3. Their views tagged as co-investor or director views and weighted for conflicts.
                4. At least one such contact kept up with each quarter between raises.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least two co-investor or independent director views on the lead partner are gathered, tagged and weighted, with a quarterly contact kept between raises."
                cadence: rolling
              tasks:
                - "Find two independent directors or co-investors who shared boards with the partner"
                - "Ask one of your existing investors for a discreet introduction to one of them"
                - "Tag their views as co-investor or director views in the tracker"
                - "Catch up with one co-investor or director contact @recurring(quarterly)"
            - name: How an investor behaved in exits, sales and shutdowns
              description: |-
                ## Purpose
                An investor's real interests show most clearly at the end: pushing for or blocking a sale, insisting on preference payouts, or helping wind a company down with dignity. Speaking to founders who sold or closed a company with this partner on the board tells you how they are likely to vote when the stakes are highest.

                ## Milestones
                1. Founders of at least two acquired or closed companies from the partner's record identified.
                2. Each asked how the investor voted and behaved in the sale or shutdown.
                3. Any pattern of blocking, pushing or supporting outcomes noted.
                4. Findings added to the scorecard under exit behaviour.

                ## Notes
                Do not ask a founder to share deal terms or confidential documents. Ask how the investor behaved, not what anyone was paid.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Founders from at least two acquired or closed companies are consulted on the partner's behaviour, with exit behaviour added to the scorecard."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick two acquired or closed companies from the partner's portfolio list"
                - "Ask each founder how the investor voted and behaved at the end"
                - "Note any pattern of blocking, pushing or supporting outcomes"
                - "Add exit behaviour to the investor scorecard"
---

# Investor Reference Checks

This area is for founders deciding whether to take money from a particular investor, who want to hear from the founders that investor has backed, especially the ones whose companies struggled. It starts with the foundations (the behaviours worth verifying, a question bank, a tracker, full portfolio lists and off-list references), then the weekly machinery of a raise, the skills of asking for stories and reading hesitation, the decisions on scoring, partners and walking away, the dated moments from an exploding term sheet to the thank-you round, variants for first-time, solo, distant, underrepresented, caring and repeat founders, and finally emerging managers, co-investor back-channels and exit behaviour.

What repeats during a raise is a Monday look at the red flag register, a Tuesday call block, a Thursday co-founder debrief, a Friday findings summary and a daily sweep once exclusivity starts, with monthly portfolio and partner checks, quarterly comparisons of how investors actually behaved and a yearly refresh of your reputation file. The Meeting notes, Feedback themes, Risk register, Reading queue and Person templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
