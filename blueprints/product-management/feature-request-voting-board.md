---
id: product-management.feature-request-voting-board
name: Feature Request Voting Board
description: "A voting board customers trust: the right tool and visibility, honest status labels, weekly moderation and merging, closing the loop with voters, saying no well and reading votes without being fooled by them."
category: business
version: 1.0.0
tags: [product-management, feature-request-voting-board, team, founder, small-business, feature-requests, idea-voting, closing-the-loop]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - feedback-themes
    - meeting-notes
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Feature Request Voting Board
          description: "Running a public or customer-facing board where users suggest and vote on ideas, with honest status updates on what will and will not happen."
          projects:
            - name: Board purpose and scope statement
              description: |-
                ## Purpose
                Most voting boards fail because nobody decided what they were for, so customers read every vote as a promise and the team reads every post as noise. A short written statement of what the board is for, what it is not for (bugs, billing, urgent support) and how votes are used in decisions sets expectations before the first idea is posted.

                ## Milestones
                1. A half-page statement saying what kinds of ideas belong on the board and what goes elsewhere.
                2. One plain sentence explaining that votes inform decisions but do not decide them.
                3. Routes named for bugs, account questions and urgent problems, with links to each.
                4. The statement agreed by whoever owns the product and pinned at the top of the board.

                ## Notes
                Say early and plainly that the most voted idea is not automatically built. Customers accept this when they read it on day one and resent it when they discover it in month six.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pinned scope statement exists on the board, naming what belongs there, where bugs go and how votes are used."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three sentences on why you want a voting board at all"
                - "List the request types that should go to support instead"
                - "Draft the sentence explaining how votes feed into decisions"
                - "Pin the agreed statement at the top of the board"
            - name: Choosing a feature voting board tool
              description: |-
                ## Purpose
                Dedicated board tools, the voting module inside a help desk, a forum category or a plain form and spreadsheet all work at different sizes, and switching later means losing vote history. Choosing against a short list of real needs (sign-in, merging, status notifications, integrations, price per tracked user) avoids paying for features nobody uses or outgrowing a free tool in six months.

                ## Milestones
                1. A written list of six to eight must-have and nice-to-have requirements.
                2. Three options shortlisted, including at least one low-cost or built-in choice.
                3. Each option scored on merging, voter notifications, sign-in, data export and price at your expected voter count.
                4. A tool chosen, with the reason and the yearly cost recorded.

                ## Notes
                Start from the **Purchase decision** template. Check data export before anything else: a tool that cannot export ideas, votes and voter emails traps your history.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool is chosen from a scored shortlist of three, with its export format checked and annual cost written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the must-have requirements for the board in one list"
                - "Shortlist three tools, including one built into a tool you already pay for"
                - "Run a free trial export of ideas and votes from each shortlisted tool"
                - "Record the chosen tool, its cost and the reason"
            - name: Public, private or customer-only visibility decision
              description: |-
                ## Purpose
                Who can see the board changes everything: a public board doubles as marketing and lets competitors read your demand, a login-only board gives cleaner data from paying customers, and a private board for internal staff is really a request log. Deciding visibility deliberately, with the trade-offs written down, stops the setting being picked by whatever the tool defaults to.

                ## Milestones
                1. The three visibility options described with one benefit and one risk each.
                2. A view recorded on what a competitor could learn from a public board.
                3. A visibility setting chosen, with who can read, who can post and who can vote spelled out.
                4. The decision dated and shared with sales and support.

                ## Notes
                A common middle path is public to read and sign-in required to vote, which keeps the marketing value while tying votes to real accounts.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on who can read, post and vote on the board, shared with sales and support."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one benefit and one risk for public, customer-only and private boards"
                - "Ask sales whether prospects would value reading the board"
                - "Choose separate settings for reading, posting and voting"
                - "Tell support and sales which setting was chosen and why"
            - name: Idea categories and board structure
              description: |-
                ## Purpose
                Without categories, a board turns into one long list where a reporting request sits beside a mobile tweak and nobody can find anything. Five to eight categories that match how your product is organised, plus a rule for where cross-cutting ideas go, let voters find existing ideas and let the right person on the team see their slice.

                ## Milestones
                1. Five to eight categories named in words customers use, not internal team names.
                2. One owner on the team assigned to each category.
                3. A rule written for ideas that fit two categories.
                4. Categories set up in the tool and tested by posting three sample ideas.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The board has five to eight customer-facing categories, each with a named owner on the team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the main areas of the product as a customer would name them"
                - "Cut the list to no more than eight categories"
                - "Assign a team owner to each category"
                - "Post three test ideas to check the categories make sense"
            - name: Status labels with honest definitions
              description: |-
                ## Purpose
                Status labels are the board's real promise to customers, and vague ones like "Under consideration" left on an idea for two years do more damage than no label at all. A small set of statuses, each with a one-line definition and a rule for how long an idea may sit in it, makes every label mean something checkable.

                ## Milestones
                1. Five or six statuses chosen, including an explicit "Not planned" or "Closed" option.
                2. A public one-line definition for each status that a customer can understand.
                3. A maximum time an idea may sit in "Under review" before it moves.
                4. The labels configured in the tool and the definitions linked from the board header.

                ## Notes
                A typical set is New, Under review, Planned, In progress, Shipped and Not planned. Avoid a status called "Coming soon" unless you can say roughly when.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every status on the board has a published one-line definition and a maximum time an idea may stay in review."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the statuses the tool offers by default"
                - "Write a one-line public definition for each status you keep"
                - "Set a time limit for ideas waiting in review"
                - "Link the status definitions from the board header"
            - name: Posting guidelines and community rules
              description: |-
                ## Purpose
                People post support tickets, rants, competitor comparisons and personal data on boards unless someone tells them what good looks like. A short guidelines page with an example of a well-written idea, a list of what will be removed and how to report a problem sets the tone and gives moderators something to point to.

                ## Milestones
                1. A guidelines page under 300 words with one example of a well-written idea.
                2. A list of what will be removed: abuse, spam, personal data and support issues.
                3. A note on how to report a post and how quickly reports are reviewed.
                4. The guidelines linked from the new idea form.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A guidelines page under 300 words is linked from the new idea form and lists what will be removed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write an example idea that describes a problem rather than a button"
                - "List four kinds of posts that will be removed"
                - "Add a line on how to report a post"
                - "Link the guidelines from the new idea form"
                - "Reread the guidelines against the last year of posts @recurring(yearly)"
            - name: Seeding the board with existing requests
              description: |-
                ## Purpose
                An empty board invites nobody, and customers who see no activity assume nobody reads it. Moving the twenty to forty most common requests from support tickets, sales notes and old emails onto the board before launch, written as clear ideas with the original requesters noted, gives the first visitors something to vote on and shows them the team is listening.

                ## Milestones
                1. Twenty to forty existing requests collected from support, sales and email.
                2. Each rewritten as a clear idea with a problem statement and placed in a category.
                3. The customers behind each request recorded so they can be invited to vote.
                4. All seeded ideas set to an honest status, not left as New.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least twenty seeded ideas are live on the board, each in a category with an honest status and its original requesters noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search support tickets for the words feature, request and wish"
                - "Ask sales for the five requests they hear most often"
                - "Ask the agent to rewrite the collected requests as clear idea titles"
                - "Post each seeded idea with an honest status"
                - "List the customers to invite to each seeded idea"
            - name: Voter sign-in and personal data set-up
              description: |-
                ## Purpose
                Every vote carries an email address, a name and often a company, which makes the board a store of personal data with the same duties as any other customer system. Settling how voters sign in, what is shown publicly, how long data is kept and how someone can have their data removed avoids a privacy complaint and an awkward clean-up later.

                ## Milestones
                1. A sign-in method chosen: email link, single sign-on with your product or a social login.
                2. A decision on which voter details are visible publicly, if any.
                3. A retention period for inactive voter accounts agreed with whoever handles privacy.
                4. The board listed in your privacy notice and a removal request route tested.

                ## Notes
                Data protection rules differ by country. Agree the retention period and the privacy notice wording with whoever is responsible for privacy, or a qualified adviser.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The board appears in the privacy notice, voter names are shown or hidden by a recorded rule, and one data removal request has been tested end to end."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every voter detail the tool collects and displays"
                - "Decide whether voter names appear publicly beside votes"
                - "Ask whoever handles privacy to add the board to the privacy notice"
                - "Test deleting a test voter account and its votes"
                - "Check the board's privacy settings and retention still match the notice @recurring(yearly)"
            - name: Board ideas linked to the issue tracker and CRM
              description: |-
                ## Purpose
                A vote that never reaches the place where work is planned or where customer accounts live is a vote nobody acts on. Connecting board ideas to the tickets that deliver them, and voters to their account records, means engineers can see demand behind a ticket and account managers can see what their customers asked for.

                ## Milestones
                1. The tool's integrations with your issue tracker and CRM checked and switched on where they exist.
                2. A rule for when an idea gets a linked ticket, usually when it moves to Planned.
                3. Voter emails matching account records in the CRM for at least most active voters.
                4. One idea followed from post to ticket to shipped to confirm the links hold.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Planned ideas link to their tickets and most active voters are matched to CRM accounts, confirmed by one end-to-end test."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check which issue tracker and CRM integrations the board tool offers"
                - "Switch on the issue tracker link and test it with one idea"
                - "Match a sample of voter emails to CRM account records"
                - "Look for planned ideas with no linked ticket and fix them @recurring(monthly:12)"
            - name: Named board owner and response time promise
              description: |-
                ## Purpose
                Boards without a named owner decay within a quarter: ideas pile up unread, statuses go stale and customers stop posting. Naming one person who answers for the board, giving them protected time each week and publishing a response time promise (for example, every new idea gets a reply within five working days) makes the board somebody's job.

                ## Milestones
                1. One named owner and one named backup for the board.
                2. A weekly time allowance for board work agreed with the owner's manager or co-founder.
                3. A response time promise chosen and published on the board.
                4. The owner's board duties written as a short list in the team handbook.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A named owner and backup are recorded, with a weekly time allowance and a published reply promise for new ideas."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Name the owner and backup for the board"
                - "Agree a weekly time allowance for board work"
                - "Publish a response time promise on the board"
                - "Write the owner's duties as a five-line list"
            - name: Monday moderation and reply routine
              description: |-
                ## Purpose
                New ideas arrive unevenly, and a board that answers some within a day and others never feels random to the people posting. A fixed weekly pass on Monday to categorise, merge, tidy and reply to everything new, with a Thursday sweep for anything still unanswered, keeps the response promise without the owner living in the board.

                ## Milestones
                1. Every new idea categorised and given a status within a week of posting.
                2. Every new idea answered with at least one human comment.
                3. Obvious duplicates merged during the pass, not left for later.
                4. A short checklist for the pass that the backup owner can follow.

                ## Notes
                Start from the **Operational checklist** template. A first reply that asks one good question about the problem behind the idea is worth more than a thank-you.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over four consecutive weeks, no new idea waits longer than the published response time for a human reply."
                cadence: rolling
              tasks:
                - "Write the moderation checklist the backup can follow"
                - "Categorise, tag and reply to every idea posted in the last week @recurring(weekly:mon)"
                - "Reply to any new idea still without a human comment @recurring(weekly:thu)"
                - "Note how long the pass took to spot when the board outgrows it"
            - name: Monthly duplicate merge sweep
              description: |-
                ## Purpose
                Duplicates split votes, so an idea with eighty real supporters can look like four ideas with twenty each and lose to a single idea with forty. A monthly search for near-duplicates, merging them into the clearest version and keeping every voter and comment, gives a truer picture of demand than any amount of weekly tidying.

                ## Milestones
                1. A list of the twenty most voted ideas, each searched for near-duplicates.
                2. Duplicates merged into the best-written idea with all votes and comments carried over.
                3. Voters on merged ideas told where their vote now lives.
                4. A count of merges each month recorded to show whether duplication is rising.

                ## Notes
                Merge only when the problem is the same, not just the words. Two ideas both called "better reporting" may want different things.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top twenty ideas are checked for duplicates every month, with merges and merge counts recorded."
                cadence: rolling
              tasks:
                - "Search the board for duplicates of the top twenty ideas @recurring(monthly:8)"
                - "Merge duplicates into the clearest idea, keeping every vote"
                - "Comment on merged ideas to tell voters where to follow"
                - "Record the number of merges in the board log"
            - name: Status updates on the top-voted ideas
              description: |-
                ## Purpose
                Silence on a popular idea reads as either a secret yes or a quiet no, and both versions disappoint when the truth arrives. Writing a short, dated update each month on the twenty most voted ideas, even when the update is "no change, here is why", keeps the most invested customers informed and stops statuses from going stale.

                ## Milestones
                1. The twenty most voted ideas each carrying an update less than a month old.
                2. No idea sitting in Under review past the published time limit.
                3. Each update saying what is known, what is not and when the next update will come.
                4. A record of which ideas changed status that month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months running, each of the twenty most voted ideas has a dated update less than thirty days old."
                cadence: rolling
              tasks:
                - "Sort the board by votes and list the top twenty ideas"
                - "Write a dated update on each top idea with no update this month @recurring(monthly:15)"
                - "Move any idea that has outlived its review time limit"
                - "Note every status change in the board log"
            - name: Shipped idea notifications to voters
              description: |-
                ## Purpose
                The moment an idea ships is the board's best chance to prove it works, and it is often missed because the release went out on a Friday and nobody went back to the board. A weekly check of what shipped, followed by marking each matching idea Shipped and messaging its voters with what changed and how to use it, turns votes into visible results.

                ## Milestones
                1. A weekly list of shipped work matched against Planned and In progress ideas.
                2. Every matched idea marked Shipped with a short note on what was built.
                3. Voters on each shipped idea notified with a link to the release note or help article.
                4. Any partial delivery explained honestly, with the rest of the idea left open.

                ## Notes
                When only part of an idea ships, say so. Marking a large idea Shipped after building a small slice of it is the fastest way to lose voters' trust.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every idea matched to shipped work is marked Shipped and its voters notified within seven days of release."
                cadence: rolling
              tasks:
                - "Ask engineering where to find the weekly list of shipped work"
                - "Match shipped work against planned board ideas @recurring(weekly:fri)"
                - "Notify voters on each shipped idea with a link to the help article"
                - "Reopen or split ideas that only shipped in part"
            - name: Monthly vote trends report
              description: |-
                ## Purpose
                Raw vote totals favour old ideas that have had years to collect votes, which hides what customers want now. A short monthly report on new ideas, votes cast in the last thirty days, the fastest-rising ideas and the categories gaining attention gives the product team a current picture in a page.

                ## Milestones
                1. A one-page report layout with the same five measures each month.
                2. Votes in the last thirty days shown beside all-time totals for the top ideas.
                3. The three fastest-rising ideas named, with a line on why they might be rising.
                4. Six months of reports kept in one place so trends are visible.

                ## Notes
                Start from the **Metrics log** template. Track new ideas, votes cast, active voters, ideas answered within the promise and ideas closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page vote trends report with the same five measures is produced every month for six months."
                cadence: rolling
              tasks:
                - "Choose the five measures the monthly report will always show"
                - "Export last month's votes and ideas and fill in the report @recurring(monthly:3)"
                - "Name the three fastest-rising ideas in the report"
                - "Share the report with the product team"
            - name: Spam, abuse and off-topic post handling
              description: |-
                ## Purpose
                Public boards attract spam links, angry posts after an outage and support tickets dressed up as ideas, and each left in place tells visitors nobody is watching. A clear, weekly way of handling each type (delete, redirect to support, edit out personal data, reply calmly) keeps the board usable without moderators improvising each time.

                ## Milestones
                1. A short decision table for spam, abuse, support issues, personal data and off-topic posts.
                2. Spam protection switched on in the tool, such as sign-in to post or a review queue.
                3. Support issues redirected with a polite reply and a link to the right channel.
                4. Removed posts logged with the reason, so moderation is consistent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written decision table for five kinds of problem post exists and the review queue is cleared every week."
                cadence: rolling
              tasks:
                - "Write the five-row decision table for problem posts"
                - "Switch on the tool's spam protection or review queue"
                - "Clear the moderation queue and log every removal @recurring(weekly:wed)"
                - "Draft a calm reply for posts made in anger after an outage"
            - name: Quarterly stale idea review
              description: |-
                ## Purpose
                Ideas that have sat for a year with a handful of votes and no comments clutter search, push useful ideas down and keep alive hopes that will never be met. Reviewing low-activity ideas once a quarter and closing, merging or reworking them with a short explanation keeps the board honest without deleting anyone's contribution.

                ## Milestones
                1. A rule for what counts as stale, for example no new votes in six months.
                2. Every stale idea closed, merged or kept with a reason.
                3. A short closing comment on each closed idea that voters can read.
                4. The number of open ideas recorded before and after each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter every idea meeting the stale rule has been closed, merged or kept with a written reason."
                cadence: cyclic
              tasks:
                - "Write the rule for what counts as a stale idea"
                - "Filter the board for ideas meeting the stale rule @recurring(quarterly)"
                - "Close or merge each stale idea with a one-line explanation"
                - "Record open idea counts before and after the review"
            - name: Board signals into prioritisation reviews
              description: |-
                ## Purpose
                Votes only matter if they arrive at the meeting where the team decides what to build, in a form that sits beside revenue, strategy and effort. Bringing a short board summary to the monthly prioritisation review, with the top ideas, who voted and what problem sits behind each, makes the board one honest input among several rather than the loudest one.

                ## Milestones
                1. A standing slot for the board summary in the monthly prioritisation review.
                2. A one-page summary showing top ideas by recent votes and by voter segment.
                3. Each idea's underlying problem stated, not only its requested solution.
                4. Decisions from the review that affect board ideas recorded for status updates.

                ## Notes
                Start from the **Meeting notes** template. The board summary feeds the prioritisation method the team already uses. It does not replace it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A board summary is presented at each monthly prioritisation review and the resulting decisions are posted back to the ideas within a week."
                cadence: rolling
              tasks:
                - "Ask the review chair for a standing ten-minute board slot"
                - "Prepare the one-page board summary for the review @recurring(monthly:20)"
                - "Record decisions that change any board idea's status"
                - "Post those decisions back to the ideas within a week"
            - name: Logging requests on behalf of customers
              description: |-
                ## Purpose
                Customers rarely visit a board on their own, but they mention ideas to support staff and account managers every day. Letting those staff add a vote or idea on the customer's behalf, with the account attached, captures demand from people who will never sign in, as long as everyone logs it the same way and the customer hears back when something changes.

                ## Milestones
                1. Support and sales staff given access to vote on behalf of customers.
                2. A one-paragraph rule on when to add a new idea and when to add a vote to an existing one.
                3. Each proxy vote tagged with the customer's account and the conversation it came from.
                4. Customers who were logged by proxy included in shipped notifications.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Support and sales log customer requests as proxy votes with the account attached, and a monthly audit finds fewer than one in ten missing it."
                cadence: rolling
              tasks:
                - "Give support and sales staff access to vote on behalf of customers"
                - "Write the rule for new idea versus vote on an existing idea"
                - "Show the support team how to log a proxy vote in five minutes"
                - "Audit last month's proxy votes for a missing account @recurring(monthly:25)"
            - name: Quarterly board health review
              description: |-
                ## Purpose
                Once a quarter it is worth stepping back from individual ideas to ask whether the board is doing its job: are people still posting, are replies on time, are statuses honest and did anything the board surfaced actually ship. A one-hour review against a fixed set of health measures catches decline before customers notice it.

                ## Milestones
                1. A fixed list of health measures: ideas posted, active voters, reply time, stale share and ideas shipped.
                2. The quarter's numbers compared with the previous quarter.
                3. One or two changes chosen for the next quarter, with an owner each.
                4. A short health note shared with the product team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated health note comparing five measures with the previous quarter, naming one or two owned changes, is shared each quarter."
                cadence: cyclic
              tasks:
                - "Pick the five health measures to compare each quarter"
                - "Pull the numbers and compare with last quarter @recurring(quarterly)"
                - "Choose one or two changes and name an owner for each"
                - "Share the health note with the product team"
            - name: Writing a respectful not-planned response
              description: |-
                ## Purpose
                Saying no is the hardest and most valuable thing a board owner does, and a curt "Closed" label teaches customers that posting is pointless. Learning to write a short decline that thanks the voters, gives the real reason, suggests a workaround if one exists and says what would change the answer keeps trust even when the answer disappoints.

                ## Milestones
                1. Three real declines from other companies' boards studied for what works.
                2. A four-part structure for declines written down: thanks, reason, workaround, what would change it.
                3. Five practice declines written for real ideas on your board.
                4. The practice declines reviewed by a colleague or a trusted customer for tone.

                ## Notes
                Give the real reason in plain words: it does not fit the product's direction, it would help a few customers at the cost of many, or the cost is too high right now. Customers can tell when a reason is invented.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five practice declines written to a four-part structure have been reviewed for tone by someone outside the product team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find three declined ideas on other public boards and note what works"
                - "Write down the four-part structure for a decline"
                - "Draft five practice declines for ideas on your board"
                - "Ask a colleague in support to review the drafts for tone"
            - name: Reading vote counts without being misled
              description: |-
                ## Purpose
                Vote counts measure how many people visited the board and clicked, which skews towards vocal, technical and long-standing customers and away from new users, buyers who never log in and the people who quietly churn. Learning the common biases (selection, age of the idea, visibility on the board, campaigns) lets you treat votes as evidence that needs context rather than a ranking.

                ## Milestones
                1. The main biases in board data written as a one-page cheat sheet.
                2. The share of your customers who have ever voted worked out.
                3. The top ten ideas checked for how old they are and where their votes came from.
                4. Two ideas whose vote count overstates or understates real demand identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page bias cheat sheet exists and the share of customers who have ever voted is calculated and recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work out what share of active customers has ever voted"
                - "Check the age and vote source of the ten most voted ideas"
                - "Write a one-page cheat sheet of board data biases"
                - "Name two ideas whose votes over or understate demand"
            - name: Finding the problem behind a feature request
              description: |-
                ## Purpose
                Requests usually arrive as solutions ("add a dark mode", "export to spreadsheet") when the useful information is the problem underneath, which may have a better answer than the one requested. Practising a short set of follow-up questions in idea comments, and grouping ideas by the problem they share, turns a list of wishes into themes the team can design for.

                ## Milestones
                1. Three standard follow-up questions written for idea comments.
                2. The questions asked on the ten most voted ideas and replies collected.
                3. The ten ideas grouped into problem themes with a sentence describing each.
                4. At least one case where the underlying problem suggests a different solution noted.

                ## Notes
                Start from the **Feedback themes** template. Good questions are about the last time it happened: what were you trying to do, what did you do instead, what did it cost you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The ten most voted ideas are grouped into written problem themes based on voter replies to standard follow-up questions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write three follow-up questions about the last time the problem happened"
                - "Post the questions on the ten most voted ideas"
                - "Ask the agent to group the replies into problem themes"
                - "Note one theme where a different solution would serve better"
            - name: Weighting votes by customer segment and revenue
              description: |-
                ## Purpose
                Ten votes from customers on your largest plan and ten from free users who signed up last week are not the same signal, yet a plain count treats them identically. Learning to view votes by segment, plan and account value, without letting revenue alone decide, shows which ideas matter to the customers your strategy depends on.

                ## Milestones
                1. Votes for the top twenty ideas split by plan, segment and new versus long-standing customers.
                2. The account value behind each top idea calculated from CRM data.
                3. Ideas whose ranking changes most under weighting identified and discussed.
                4. A written view of when weighted votes should and should not influence a decision.

                ## Notes
                Weighting by revenue alone builds for today's biggest customers and can starve the segment you want to grow. Show both views side by side.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The top twenty ideas are ranked by raw votes and by account value side by side, with a written note on how the difference is used."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Export voters for the top twenty ideas with their account details"
                - "Rank the ideas by raw votes and by account value"
                - "List the ideas whose position moves most between the two rankings"
                - "Refresh the weighted ranking with current account data @recurring(quarterly)"
            - name: Editing idea titles so votes land correctly
              description: |-
                ## Purpose
                Titles decide where votes go: a vague title like "Improve reports" collects votes from people who want ten different things, while a precise one invites the right voters and makes duplicates obvious. Learning to edit titles and descriptions into clear problem statements, without changing what the poster meant, sharpens every number the board produces.

                ## Milestones
                1. A short title style rule: who, what problem, in under twelve words.
                2. The twenty most viewed ideas retitled where the title was vague.
                3. Posters told when their title was edited, with the original kept in the description.
                4. A before and after list kept as a reference for moderators.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The twenty most viewed ideas have titles that follow a written style rule, with posters notified of each edit."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the title style rule in one sentence"
                - "Rewrite vague titles among the twenty most viewed ideas"
                - "Comment on each edited idea to tell the poster what changed"
                - "Save the before and after list for moderators"
            - name: Status update style guide
              description: |-
                ## Purpose
                Status updates read very differently depending on who wrote them, and a mix of cheerful marketing, terse engineering notes and silence confuses voters. A one-page guide on voice, length, what may be promised and what may not, with three example updates, lets anyone on the team post an update that sounds like the same company.

                ## Milestones
                1. A one-page guide covering voice, length and words to avoid.
                2. A clear rule on dates: what may be promised publicly and who approves it.
                3. Three example updates for Planned, In progress and Not planned.
                4. The guide shared with everyone who can post updates.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page status update guide with a dates rule and three examples is shared with everyone who posts updates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect ten past status updates and mark the best three"
                - "Write the rule on what dates may be promised publicly"
                - "Draft example updates for three common statuses"
                - "Share the guide with everyone who posts on the board"
            - name: Studying how other companies run their boards
              description: |-
                ## Purpose
                Looking at five or six public boards run by companies of different sizes shows quickly what works: how they word statuses, how fast they reply, how they decline and how they show what shipped. A short comparison gives you tested patterns to borrow and mistakes to avoid before you set up your own.

                ## Milestones
                1. Five or six public boards chosen, including one from a company your size.
                2. Each board noted for statuses, reply speed, decline wording and shipped updates.
                3. Three practices to copy and two to avoid written down.
                4. The notes shared with whoever helps run the board.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of at least five public boards lists three practices to adopt and two to avoid."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find five public feature boards from software you use"
                - "Note each board's statuses, reply speed and decline wording"
                - "Write three practices to copy and two to avoid"
                - "Share the notes with the board owner and backup"
            - name: Moderation judgement calls practice set
              description: |-
                ## Purpose
                Moderation calls get hard at the edges: an idea that is really a complaint about pricing, a post naming a staff member, a request that would help one huge customer and annoy everyone else. Working through a set of ten realistic edge cases with whoever moderates, and agreeing the answer in advance, makes moderation consistent when two people share the job.

                ## Milestones
                1. Ten realistic edge cases written from your own board or similar ones.
                2. An agreed answer for each case with one sentence of reasoning.
                3. The cases and answers added to the moderation checklist.
                4. A new moderator walked through the set before their first shift.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten written edge cases with agreed answers are part of the moderation checklist and used to brief new moderators."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write ten edge cases drawn from real or likely posts"
                - "Agree an answer for each case with the other moderator"
                - "Add the cases to the moderation checklist"
                - "Walk the next new moderator through the set"
            - name: Unlimited votes or a vote budget
              description: |-
                ## Purpose
                Unlimited voting lets people support everything, which flattens the signal, while a fixed budget of votes per person forces choices but can discourage casual visitors. Deciding between unlimited votes, a budget, or importance levels (nice to have, important, critical) shapes the data for years and is awkward to change once people have voted.

                ## Milestones
                1. The three voting models described with what each does to the data.
                2. Your tool's options checked against the three models.
                3. A model chosen, with the reason recorded.
                4. The voting rule explained in one line on the board.

                ## Notes
                If you want both breadth and priority, an importance level on each vote often works better than a hard budget.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A voting model is chosen and recorded with its reason, and the rule is explained on the board."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which voting models the board tool supports"
                - "Write what unlimited, budgeted and weighted importance votes each do to the data"
                - "Choose a model and record why"
                - "Add a one-line voting rule to the board header"
            - name: Comments and anonymous posting decision
              description: |-
                ## Purpose
                Comments add the context that votes cannot, such as why someone needs an idea and how they work around its absence, but they also bring arguments and moderation load. Deciding whether comments are open, whether anonymous posts are allowed and who can see them sets the level of conversation the team can realistically keep up with.

                ## Milestones
                1. Options listed: comments open, comments by sign-in only, comments off.
                2. A decision on anonymous posts and votes, with the moderation cost estimated.
                3. The settings applied in the tool.
                4. A note on whether staff comments are labelled so customers can tell them apart.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Comment and anonymity settings are chosen, applied and recorded, with staff comments visibly labelled."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count how many comments a week the moderators could handle"
                - "Decide whether anonymous posts and votes are allowed"
                - "Apply the comment settings in the tool"
                - "Turn on a staff label for team comments"
            - name: In-app widget for posting and voting
              description: |-
                ## Purpose
                Asking users to leave the product, find the board and sign in again loses most of them, and the ones who make it are not typical. Embedding a small widget inside the product, signed in automatically, raises participation from ordinary users and lets them search existing ideas before posting a new one.

                ## Milestones
                1. The widget placement chosen, such as the help menu or a feedback button.
                2. Automatic sign-in working so users vote as their product account.
                3. Search of existing ideas shown before the new idea form.
                4. Participation compared for the month before and the month after the widget.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An in-app widget with automatic sign-in is live, and voter numbers for the month before and after are recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose where in the product the widget should sit"
                - "Ask engineering to estimate the widget and automatic sign-in work"
                - "Test the widget with three internal users before release"
                - "Compare voter numbers a month before and after launch"
            - name: Hiding or showing vote counts publicly
              description: |-
                ## Purpose
                Visible vote counts create a bandwagon effect, where popular ideas attract more votes simply for being on top, and they invite customers to treat the highest number as a queue. Deciding whether to show counts, hide them, or show them only to staff is a small setting with a large effect on both behaviour and expectations.

                ## Milestones
                1. The effects of visible, hidden and staff-only counts written down.
                2. A view gathered from support on how often customers cite vote counts in tickets.
                3. A setting chosen and applied.
                4. The change explained on the board if counts are being hidden after being shown.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on vote count visibility is applied, with a public explanation if counts were previously visible."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask support how often customers mention vote counts"
                - "Write one effect each of visible, hidden and staff-only counts"
                - "Apply the chosen vote count setting"
                - "Post a short explanation if counts are being hidden"
            - name: Migrating from a spreadsheet or old board tool
              description: |-
                ## Purpose
                Moving from a shared spreadsheet, an email inbox or an older tool is when vote history gets lost and customers find their ideas vanished. Planning the move, mapping every field, keeping voter links and telling customers before the switch protects years of demand data and the goodwill attached to it.

                ## Milestones
                1. A full export of ideas, votes, voters, comments and statuses from the old system.
                2. A field mapping from the old system to the new one, including statuses.
                3. A test import of fifty ideas checked for missing votes or broken voter links.
                4. Customers told about the move, with old links redirected where possible.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All ideas and votes are in the new tool with vote totals matching the old export, and customers were told before the switch."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Export everything from the old system and store a dated copy"
                - "Map old fields and statuses to the new tool"
                - "Run a test import of fifty ideas and compare vote totals"
                - "Email voters about the move a week before the switch"
            - name: Clean-up of a neglected board
              description: |-
                ## Purpose
                A neglected board, with hundreds of unanswered ideas and statuses unchanged for a year, is worse than none, because it is a public record of not listening. A focused clean-up over a few weeks (merging, closing with reasons, updating the top ideas and posting an honest note about what went wrong) resets the board before you ask anyone to use it again.

                ## Milestones
                1. A count of open ideas, unanswered ideas and stale statuses at the start.
                2. Duplicates merged and dead ideas closed with a one-line reason each.
                3. The top thirty ideas carrying a current status and update.
                4. A short public note acknowledging the gap and saying what changes now.

                ## Notes
                Do not mass-close ideas silently. Voters receive the notifications, and a wave of unexplained closures reads as a purge.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Open ideas are reduced with a reason on every closure, the top thirty are current and a public note explains the reset."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Record the open, unanswered and stale idea counts today"
                - "Block four two-hour sessions for the clean-up"
                - "Update the top thirty ideas before closing anything"
                - "Post an honest note about the gap and what changes now"
            - name: Duplicate prevention at the point of posting
              description: |-
                ## Purpose
                Duplicates are cheapest to stop before they are posted, when the person is typing a title and could be shown three similar ideas to vote on instead. Turning on similar-idea suggestions, improving the search box and requiring a search before the new idea form appears can cut the weekly merge workload sharply.

                ## Milestones
                1. The tool's similar-idea suggestion and search features checked and switched on.
                2. The new idea form changed so users see matching ideas before submitting.
                3. Duplicates per month measured before and after the change.
                4. Common words that confuse search, such as product nicknames, added as synonyms where the tool allows.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Similar-idea suggestions are live on the posting form, with monthly duplicate counts recorded for two months before and after."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether the tool can suggest similar ideas while typing"
                - "Switch on suggestions on the new idea form"
                - "List the product nicknames customers use for search synonyms"
                - "Compare duplicate counts for two months before and after"
            - name: Board statuses shown as a public roadmap view
              description: |-
                ## Purpose
                Customers who vote often ask for a simple view of what is planned and in progress, and many board tools can show statuses as columns. Deciding whether to show that view, which statuses appear in it and how it relates to the product team's own roadmap avoids publishing two versions of the truth.

                ## Milestones
                1. A decision on whether a public now, next and later view comes from board statuses.
                2. The statuses that appear in the view chosen, with Planned items limited to work genuinely committed.
                3. A check that the view agrees with the roadmap the product team publishes elsewhere.
                4. A rule for who updates the view and how often.

                ## Notes
                Leave dates off the public view unless the team is confident in them. A missed date on a public view is remembered far longer than the feature.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a public status view exists, and if live, it matches the team's roadmap with a named person keeping it current."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check what roadmap view the board tool can display"
                - "Compare board Planned ideas with the team's own roadmap"
                - "Decide which statuses appear in the public view"
                - "Name who keeps the public view current"
            - name: Board launch to existing customers
              description: |-
                ## Purpose
                Launching the board with a quiet link in the footer gets a trickle of posts from the most vocal users; a planned launch reaches the ordinary ones. Announcing it by email and in the product, inviting the customers whose old requests were seeded, and having the owner ready for the first fortnight's surge gets the board off to a representative start.

                ## Milestones
                1. A launch checklist covering scope statement, statuses, seeded ideas and moderation cover.
                2. An announcement email and in-product message written and scheduled.
                3. Customers behind seeded ideas invited personally to vote on them.
                4. The first two weeks' new ideas all answered within the promised time.

                ## Notes
                Start from the **Operational checklist** template. Expect a burst of old frustrations in the first week; answer them calmly and they become the board's best advertisement.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board is announced by email and in-product, seeded requesters are invited, and every idea from the first fortnight gets a reply on time."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the launch checklist and set a launch date"
                - "Draft the announcement email and in-product message"
                - "Invite each seeded requester to vote on their idea"
                - "Clear time in the owner's diary for the first two weeks"
            - name: Yearly round-up of shipped board ideas
              description: |-
                ## Purpose
                After a year of running the board, a public round-up of what customers asked for and what shipped as a result is the strongest proof that voting is worth the effort. Listing shipped ideas, the number of voters behind them and, honestly, the big ideas that were declined and why, brings lapsed voters back and shows new ones the board is real.

                ## Milestones
                1. A list of every idea marked Shipped in the year with its vote count.
                2. Three to five highlights with a sentence each on what changed for customers.
                3. A short, honest section on popular ideas declined and the reason.
                4. The round-up published and sent to everyone who voted in the year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A published yearly round-up lists every shipped idea with vote counts and is sent to all of the year's voters."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Export every idea marked Shipped in the last twelve months"
                - "Pick three to five highlights and write a sentence on each"
                - "Write the section on popular ideas that were declined"
                - "Publish and send the round-up to the year's voters @recurring(yearly)"
            - name: Declining a popular idea in public
              description: |-
                ## Purpose
                When a popular idea with hundreds of votes is not going to happen, the announcement is a small event of its own, and handling it badly can start a pile-on in comments and on social media. Preparing the reasoning, briefing support and sales first, posting a full explanation and staying in the comments for the first two days turns a disappointing answer into a respected one.

                ## Milestones
                1. The decision and its real reason confirmed by whoever owns the product.
                2. Support and sales briefed with the explanation before it is posted.
                3. A full public explanation posted on the idea, with any workaround or alternative.
                4. Comments answered for the first 48 hours and the main reactions summarised.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The decline is posted with a full reason, support and sales are briefed beforehand, and comments in the first 48 hours are all answered."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the decision and reason with the product owner"
                - "Brief support and sales a day before posting"
                - "Post the full explanation with any workaround"
                - "Answer comments for the first two days and summarise reactions"
            - name: Relaunching a board after a long silence
              description: |-
                ## Purpose
                A board left alone for six months or more needs more than a clean-up: past voters have stopped visiting and assume the team gave up. A planned relaunch, after the clean-up is done, with a message to past voters admitting the gap, showing what has changed and inviting them back, recovers the people most likely to give useful input.

                ## Milestones
                1. The board clean-up finished before any relaunch message goes out.
                2. A relaunch message written that admits the gap and names what changes.
                3. Past voters emailed, grouped by whether their ideas shipped, were declined or remain open.
                4. Active voters in the month after relaunch compared with the last active month.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Past voters receive a relaunch message grouped by idea outcome, and active voter numbers are recorded for the month after."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the clean-up is finished before setting a relaunch date"
                - "Write a relaunch message that admits the gap plainly"
                - "Group past voters by what happened to their ideas"
                - "Record active voters in the month after relaunch"
            - name: Board ideas session at a customer webinar
              description: |-
                ## Purpose
                Live events such as a customer webinar, user group or conference stand bring out people who would never post on a board, and they can react to ideas in real time. Running a short session where you show the top ideas, share recent updates and collect new ones live adds voices from customers who rarely sign in.

                ## Milestones
                1. A session slot booked at a webinar, user group or conference.
                2. Five top ideas and three recent shipped items prepared to show.
                3. New ideas and votes from attendees entered on the board within a week.
                4. Attendees who contributed sent a link to follow their ideas.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A live ideas session is held, and every idea or vote collected is on the board within a week with contributors notified."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask whoever runs customer events for a twenty-minute slot"
                - "Prepare five top ideas and three shipped items to show"
                - "Enter ideas collected at the session on the board"
                - "Send contributors a link to follow their ideas"
            - name: Solo founder board in twenty minutes a week
              description: |-
                ## Purpose
                Solo founders often skip a board because it looks like another job, yet early customers love seeing their ideas acknowledged. A minimal set-up, with a free or built-in tool, three statuses and one twenty-minute session each weekend, gives you the benefits without turning feedback into a second full-time role.

                ## Milestones
                1. A free or built-in board live with three statuses: Open, Planned, Done.
                2. A fixed twenty-minute weekly slot in the calendar for board replies.
                3. A rule that every idea gets one reply, even if it is a single sentence.
                4. Three months of weekly sessions kept, with ideas acted on noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A three-status board is live and a twenty-minute weekly reply session has been kept for twelve weeks."
                cadence: rolling
              tasks:
                - "Set up a free board with three statuses"
                - "Block twenty minutes each weekend for the board"
                - "Reply to every new idea in that weekly slot @recurring(weekly:sat)"
                - "Note each idea you acted on in a running list"
            - name: Simple ideas board for a small business
              description: |-
                ## Purpose
                For a business with a few hundred customers, such as a studio, a clinic booking app or a local software firm, a full board tool may be too much. A simple shared form and public list, or the ideas feature in a tool you already pay for, lets customers suggest and support ideas while you keep everything in one place you check monthly.

                ## Milestones
                1. A no-cost or already-paid option chosen for collecting and listing ideas.
                2. A public list showing each idea, a simple vote or count and its status.
                3. Staff told how to add ideas customers mention in person or by phone.
                4. A monthly half hour set aside to update statuses and reply.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A public ideas list with statuses exists and has been updated once a month for three months."
                cadence: rolling
              tasks:
                - "Check whether a tool you already pay for has an ideas feature"
                - "Set up a public list with a status for each idea"
                - "Show staff how to add ideas customers mention in person"
                - "Update statuses and reply to new ideas @recurring(monthly:28)"
            - name: Routing board ideas across several product squads
              description: |-
                ## Purpose
                Several squads sharing one board means ideas land in a common pile and each squad assumes another is answering. A routing rule that maps categories to squads, a weekly hand-off by the board owner and a shared reply standard mean every idea reaches the team that can act on it and gets answered in one voice.

                ## Milestones
                1. Every board category mapped to one owning squad.
                2. A weekly routing step where unassigned ideas get a squad.
                3. Each squad's product manager replying within the shared response time.
                4. A monthly count of ideas per squad and replies on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every category has an owning squad and no idea stays unassigned for more than a week over a two-month period."
                cadence: rolling
              tasks:
                - "Map every board category to one owning squad"
                - "Route unassigned ideas to the right squad @recurring(weekly:tue)"
                - "Agree one response standard across all squads"
                - "Report ideas per squad and on-time replies to product leads"
            - name: Buyer and end-user votes in business software
              description: |-
                ## Purpose
                In business software the people who vote are usually daily users, while the people who decide to renew or expand are administrators and budget holders who rarely visit the board. Tagging votes by role and asking administrators directly about the top ideas stops the board from representing only one side of the customer.

                ## Milestones
                1. A role captured for each voter: end user, administrator or budget holder.
                2. The top twenty ideas viewed by role, with gaps between roles noted.
                3. Administrators of five key accounts asked directly about the top ideas.
                4. The role view included in the monthly board summary.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Votes on the top twenty ideas are split by voter role and five key account administrators have given direct views."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Add a voter role field to sign-up or the CRM match"
                - "Split votes on the top twenty ideas by role"
                - "Ask five key account administrators about the top ideas"
                - "Add the role view to the monthly board summary"
            - name: Merging two boards after an acquisition
              description: |-
                ## Purpose
                Two products coming together, through an acquisition or a merger of product lines, usually means two boards with different statuses, overlapping ideas and customers worried their requests will be lost. Combining them carefully, with one status set, merged duplicates and a clear message to both customer bases, avoids the board becoming a place to air worries about the deal.

                ## Milestones
                1. Both boards exported and their status sets compared.
                2. One combined status set and category structure agreed.
                3. Overlapping ideas merged with votes from both boards kept.
                4. Both customer bases told what is happening to their ideas and when.

                ## Notes
                Do not promise in board updates that features from one product will come to the other unless that decision has been made and announced.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One combined board is live with a single status set, all overlapping ideas merged and both customer bases notified."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Export both boards and compare their statuses and categories"
                - "Agree one combined status set with both product owners"
                - "Merge overlapping ideas, keeping votes from both boards"
                - "Write a message to both customer bases about their ideas"
            - name: Vote data against churn and expansion
              description: |-
                ## Purpose
                Votes become far more useful when you can see whether customers who voted for an idea later left, downgraded or expanded. Joining vote data with account outcomes once a quarter shows which unmet ideas cluster among churned accounts and which shipped ideas were followed by expansion, evidence that is much stronger than vote counts alone.

                ## Milestones
                1. Voter records joined to account outcomes: retained, churned, downgraded, expanded.
                2. Open ideas ranked by votes from accounts that later churned.
                3. Shipped ideas checked for changes in their voters' retention or spend.
                4. Findings written up with the limits of the analysis stated plainly.

                ## Notes
                Correlation is not cause: customers who vote are often more engaged, and engaged customers churn less. Say so in the write-up.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly write-up ranks open ideas by churned-account votes and states the limits of the analysis."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask whoever owns customer data for account outcomes by email domain"
                - "Join voter records to account outcomes and churn dates"
                - "Rank open ideas by votes from churned accounts @recurring(quarterly)"
                - "Write up findings with the limits stated plainly"
            - name: Detecting vote manipulation and campaigns
              description: |-
                ## Purpose
                Coordinated vote campaigns, where a single customer rallies colleagues, a community forum links to one idea or a competitor's fans pile in, can push an idea to the top within days. Checking regularly for sudden spikes, clusters of votes from one domain and new accounts that vote once and leave keeps the data honest without punishing genuine enthusiasm.

                ## Milestones
                1. Simple warning signs written down: spikes, one-domain clusters, single-vote accounts.
                2. A monthly check for ideas whose votes rose sharply in a short window.
                3. A rule for handling a campaign: count it, label it or discount it, and say so publicly.
                4. Each investigated spike logged with what was found.

                ## Notes
                A campaign from one large customer is real demand from one customer, not from many. Count the account once in analysis, but do not delete the votes.
              priority: low
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "A written list of manipulation warning signs exists and every spike found in the monthly check is logged with an outcome."
                cadence: rolling
              tasks:
                - "Write the warning signs of a vote campaign"
                - "Check for ideas with sharp vote spikes in the last month @recurring(monthly:18)"
                - "Agree a public rule for how campaigns are counted"
                - "Log each investigated spike and what was found"
            - name: Board data exports into the analytics warehouse
              description: |-
                ## Purpose
                Exports let the board's ideas, votes and statuses sit beside product usage and revenue data, which is where the most useful questions get answered. Setting up a regular automated export, through the tool's interface for developers or a scheduled file, means analysts can join votes to usage without asking the board owner for a spreadsheet each time.

                ## Milestones
                1. The tool's export and developer interface options checked.
                2. A scheduled export of ideas, votes, voters and status changes set up.
                3. Board tables available in the analytics warehouse with a short data dictionary.
                4. One analysis run from the warehouse to confirm the data joins correctly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Board ideas, votes and status changes land in the analytics warehouse on a schedule, with a data dictionary and one test analysis."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check the export and developer options in the board tool"
                - "Agree the export schedule and tables with the data team"
                - "Write a short data dictionary for the board tables"
                - "Run one test analysis joining votes to product usage"
            - name: Yearly decision on keeping the board
              description: |-
                ## Purpose
                Every board should face an honest yearly question: is it still earning its cost in tool fees, moderation time and the expectations it sets? Weighing what it produced (ideas shipped, insight gained, customer goodwill) against what it cost, and choosing to keep, simplify, make private or close it, stops the board continuing just because it exists.

                ## Milestones
                1. The year's cost in tool fees and staff hours estimated.
                2. The year's results listed: ideas shipped, themes found, customer comments about the board.
                3. Four options weighed: keep, simplify, make private or close.
                4. A decision recorded and, if anything changes, a plan for telling voters.

                ## Notes
                Closing a board is a legitimate choice. If you do, export everything, tell voters why and where feedback goes now, and leave the board readable for a while.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated yearly decision to keep, simplify, make private or close the board is recorded with its cost and results."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Estimate the year's tool fees and staff hours on the board"
                - "List what the board produced this year"
                - "Weigh keep, simplify, make private and close"
                - "Record the yearly decision on the board's future @recurring(yearly)"
---

# Feature Request Voting Board

This area is for founders, small business owners and product teams who run a board where customers suggest ideas and vote on them, and who want that board to build trust rather than quietly collect resentment. It starts with the foundations (scope, tool, visibility, structure, status labels, rules, privacy and an owner), moves through the weekly and monthly machinery of moderation, merging, status updates and closing the loop, then the skills of saying no and reading votes honestly, the design decisions, dated launches and relaunches, situations from a solo founder to several squads, and finally vote analysis, manipulation checks and the question of whether the board is still worth running.

What repeats is a Monday moderation pass and Thursday reply sweep, a weekly spam check and shipped-idea notification run, monthly duplicate sweeps, status updates, trend reports and prioritisation hand-offs, and quarterly stale-idea and board health reviews. The Purchase decision, Operational checklist, Metrics log, Feedback themes and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
