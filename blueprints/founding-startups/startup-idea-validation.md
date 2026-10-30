---
id: founding-startups.startup-idea-validation
name: Startup Idea Validation
description: "A written problem hypothesis, ranked assumptions and kill criteria, then the research, problem conversations and cheap experiments that tell you whether the idea deserves building."
category: business
version: 1.0.0
tags: [founding-startups, startup-idea-validation, founder, validation, problem-hypothesis, assumptions, experiments, evidence]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - meeting-notes
    - risk-register
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Startup Idea Validation
          description: "Testing whether a startup idea solves a real, painful problem before building, through research, interviews and cheap experiments."
          projects:
            - name: One-page problem hypothesis for the idea
              description: |-
                ## Purpose
                Most ideas arrive as a solution (an app that does X) rather than a problem someone has. Writing one page that names the person, the painful moment, how often it happens and what it costs them today turns a vague excitement into something you can actually test, and it is the page every later experiment refers back to.

                ## Milestones
                1. A single sentence naming who has the problem, when it bites and what it costs them.
                2. The current workaround described in the customer's terms, not yours.
                3. The solution idea parked in a separate box at the bottom of the page.
                4. Three people who fit the description named as the first to talk to.

                ## Notes
                If you cannot name a real person who has the problem, the hypothesis is not ready. Keep the solution box small: it will change, the problem statement should not drift without evidence.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page problem hypothesis exists with a named customer type, a frequency, a cost of the problem and three real people who fit it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the idea as one sentence about a problem, with no product in it"
                - "Describe how someone copes with the problem today, step by step"
                - "Estimate how often the problem happens and what it costs each time"
                - "List three real people who match the customer you described"
            - name: Assumption map ranked by risk and evidence
              description: |-
                ## Purpose
                Every idea rests on a stack of beliefs: that the problem is frequent, that people know they have it, that they would switch, that someone can pay. Listing them all and plotting each by how fatal it would be if wrong against how much evidence you have shows which two or three to test first, so the cheapest tests go at the riskiest beliefs.

                ## Milestones
                1. At least fifteen assumptions written down across desirability, viability and feasibility.
                2. Each assumption scored for impact if wrong and for current evidence.
                3. The three riskiest, least evidenced assumptions marked as the test queue.
                4. A test idea and a cost written beside each of those three.

                ## Notes
                Start from the **Risk register** template if you like a table. Founders reliably under-list viability assumptions (who pays, from which budget, how you reach them); force at least four of those.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scored assumption map of at least fifteen beliefs exists, with the top three riskiest each paired to a named test and cost."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Brainstorm every belief the idea needs to be true for twenty minutes"
                - "Sort the beliefs into desirability, viability and feasibility"
                - "Score each belief for impact if wrong and for evidence held"
                - "Pick the three riskiest beliefs and sketch a cheap test for each"
            - name: Kill criteria written before testing starts
              description: |-
                ## Purpose
                Once you have told friends about the idea and bought the domain, almost any result starts to look encouraging. Writing down in advance what evidence would make you stop, such as fewer than five of twenty people describing the problem unprompted, protects the decision from your own enthusiasm and saves months.

                ## Milestones
                1. Three to five kill criteria written as numbers or observable facts.
                2. A date by which each criterion will be checked.
                3. One trusted person given a copy and asked to hold you to it.
                4. The criteria pinned at the top of the evidence log.

                ## Notes
                Good kill criteria are specific enough that a stranger could read your evidence and say pass or fail. Changing them later is allowed, but only in writing with the reason.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least three numeric or observable kill criteria, each with a check date, are written down and shared with one named person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Finish the sentence I will stop if, three different ways"
                - "Turn each stop condition into a number or an observable fact"
                - "Set a check date for each criterion"
                - "Send the criteria to one person who will ask you about them"
            - name: Validation time and money budget
              description: |-
                ## Purpose
                Validation without a limit quietly turns into building, or into endless research that never reaches a decision. Setting a fixed window, such as eight weeks, a weekly hours figure and a cash ceiling for ads, prototypes and incentives gives the work a shape and makes the go or kill call arrive on a known date.

                ## Milestones
                1. A start date and an end date for the validation phase agreed.
                2. A weekly hours figure you can actually keep alongside other commitments.
                3. A cash ceiling split across experiments, incentives and tools.
                4. The end date booked in the calendar as the decision meeting.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A validation window with start and end dates, a weekly hours figure and a cash ceiling is written down, with the decision date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a validation window between four and twelve weeks"
                - "Work out how many hours a week you can protect for it"
                - "Set a cash ceiling and split it across experiments and incentives"
                - "Book the decision meeting on the last day of the window"
            - name: Founder and problem fit self check
              description: |-
                ## Purpose
                Investors and early customers both ask the same question: why are you the person to solve this? Writing an honest answer about your access to customers, your insight into the problem and how long you would happily work on it tells you whether the idea suits you, not just whether it is a good idea for someone.

                ## Milestones
                1. A paragraph on what you know about this problem that most people do not.
                2. A list of the customer communities you can reach without cold outreach.
                3. An honest answer on whether you would still care about this problem in five years.
                4. Any gap in skills or access named with an idea for closing it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written self check covers your insight, your customer access, your five-year interest and any named gap with a way to close it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the moment you first noticed this problem"
                - "List the groups of potential customers you can reach this week"
                - "Answer whether you would work on this problem for five years"
                - "Name the biggest gap in your skills or access for this idea"
            - name: Evidence log for every validation signal
              description: |-
                ## Purpose
                Memory edits evidence in your favour: the one enthusiastic call is remembered, the six lukewarm ones fade. A single log where every conversation, experiment and data point goes in on the day, tagged to the assumption it tests and marked as supporting or contradicting, makes the final decision a matter of reading, not recalling.

                ## Milestones
                1. One log created with columns for date, source, assumption, signal and strength.
                2. Every assumption from the map listed as a tag the log can use.
                3. The first five entries made from existing conversations or research.
                4. A rule agreed that nothing counts as evidence unless it is in the log.

                ## Notes
                Start from the **Metrics log** template. Grade strength honestly: a payment or a signed letter outranks a survey answer, which outranks a compliment.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared evidence log exists with assumption tags and at least five dated, graded entries, and every later test writes to it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the evidence log with date, source, assumption and strength columns"
                - "Add every assumption from the map as a tag"
                - "Enter five signals you already have from past conversations"
                - "Archive disproved assumptions with the evidence that disproved them @recurring(monthly:20)"
            - name: Desk research on how the problem shows up online
              description: |-
                ## Purpose
                People complain about real problems in public: in forum threads, app store reviews, competitor support pages and job adverts asking for someone to fix the mess by hand. Two focused days of reading these sources tells you whether the pain is common and how people describe it, before you ask anyone for an hour of their time.

                ## Milestones
                1. Ten or more sources searched, including forums, reviews and job adverts.
                2. At least thirty quotes captured in the customer's own words.
                3. The quotes grouped into recurring themes with a count for each.
                4. A short note on what the research supports and what it contradicts in the hypothesis.

                ## Notes
                One-star and three-star reviews of existing tools are the richest source: they show what people already pay for and still hate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least thirty verbatim quotes from ten sources are grouped into counted themes, with a written note comparing them to the hypothesis."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List ten places where your customers complain in public"
                - "Read the one-star and three-star reviews of the top three existing tools"
                - "Copy thirty quotes in the customers' exact words into the evidence log"
                - "Ask the agent to group the quotes into themes and count each one"
            - name: Map of current alternatives and workarounds
              description: |-
                ## Purpose
                Your real competitor is usually a spreadsheet, an email thread, a part-time assistant or simply putting up with it. Mapping every way people solve the problem today, with what each costs and where it hurts, shows whether there is room for something better and what better would have to mean to make someone switch.

                ## Milestones
                1. At least eight alternatives listed, including doing nothing and manual workarounds.
                2. The cost of each alternative estimated in money and time.
                3. The main complaint about each alternative recorded with a source.
                4. A sentence on what a new option must beat to win a switch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of at least eight alternatives with cost, main complaint and source exists, ending with a written switching bar."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down every way you have seen people cope with the problem"
                - "Add three paid tools and three manual workarounds to the list"
                - "Estimate what each option costs per month in money and hours"
                - "Write what a new option must do better to make someone switch"
            - name: Bottom-up count of reachable buyers
              description: |-
                ## Purpose
                Top-down market reports quote billions and tell you nothing about whether you can find a first hundred customers. Counting the actual number of people or firms with the problem that you could reach through named channels, and multiplying by a plausible price, gives a sanity check that is rough but honest.

                ## Milestones
                1. The buyer defined tightly enough to count, such as practices with two to ten staff.
                2. A count of those buyers in your first market from a public directory or register.
                3. Two or three channels named through which you could reach them.
                4. A rough yearly revenue ceiling at a plausible price, with the arithmetic shown.

                ## Notes
                Show every number and its source. The goal is not precision but spotting an idea whose whole reachable market is a few hundred buyers paying very little.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page bottom-up count shows the defined buyer, the source for the count, two reach channels and a revenue ceiling with visible arithmetic."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define your buyer in one line that someone could count"
                - "Find a public directory, register or association list that counts them"
                - "Name two channels that reach those buyers today"
                - "Multiply reachable buyers by a plausible price and note the sources"
            - name: Friday validation review
              description: |-
                ## Purpose
                Validation stalls when a week passes with no new evidence and nobody notices. A short Friday review of what was learned, which assumption moved and what the single most important test is next week keeps momentum, and the written notes become the record behind the final decision.

                ## Milestones
                1. A thirty-minute slot fixed every Friday.
                2. Each review ending with one sentence on what changed in your beliefs.
                3. Next week's single most important test named before you close the laptop.
                4. Four consecutive reviews completed without a skip.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive Friday reviews are recorded, each naming what changed and the next week's most important test."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute Friday slot in the calendar"
                - "Review the week's evidence and name next week's key test @recurring(weekly:fri)"
                - "Write one sentence on which belief moved and in which direction"
                - "Note any test that was planned but did not happen, and why"
            - name: Monthly assumption map refresh
              description: |-
                ## Purpose
                The riskiest assumption in week one is rarely the riskiest in week six: some get proved, some get killed and new ones appear. Rescoring the map each month keeps the testing aimed at whatever is now most likely to sink the idea, rather than at whatever was planned.

                ## Milestones
                1. Each assumption rescored against the evidence log once a month.
                2. Proved and disproved assumptions moved off the live map.
                3. New assumptions from recent conversations added.
                4. The top three test targets updated and dated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The assumption map carries a dated rescore for each month of validation, with a current top three test targets."
                cadence: rolling
              tasks:
                - "Rescore every live assumption against the evidence log @recurring(monthly:3)"
                - "Move proved and disproved assumptions to a closed list"
                - "Add any new assumptions raised in the last month"
                - "Write the date and the new top three at the head of the map"
            - name: Weekly pain signal sweep
              description: |-
                ## Purpose
                Fresh complaints keep appearing in the communities and review sites your customers use, and they show how the problem changes with seasons, regulation or a competitor's misstep. A short weekly sweep of the same sources keeps a running feed of real language and spots new segments who share the pain.

                ## Milestones
                1. A fixed list of five to eight sources to check each week.
                2. New quotes added to the evidence log with a source link.
                3. A running themes page updated with counts.
                4. Any new segment that shares the problem flagged for a conversation.

                ## Notes
                Start from the **Feedback themes** template for the running themes page. Saved searches and alerts cut the sweep to fifteen minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A themes page with counted themes is updated weekly from a fixed source list, with at least five new quotes added each month."
                cadence: rolling
              tasks:
                - "Set saved searches or alerts on your five best sources"
                - "Sweep the sources and log new quotes with links @recurring(weekly:tue)"
                - "Update the counts on the themes page"
                - "Flag any new type of person describing the same pain"
            - name: Monday target for problem conversations
              description: |-
                ## Purpose
                Validation depends on talking to people who have the problem, and it is the first thing to slip when other work presses. Setting a weekly number of conversations to book, and checking it every Monday, keeps the evidence flowing; five a week for six weeks gives thirty conversations, usually enough to see a pattern or its absence.

                ## Milestones
                1. A weekly target number of problem conversations agreed.
                2. A simple list of people to contact, with status, kept up to date.
                3. Each completed conversation summarised into the evidence log within a day.
                4. Thirty conversations completed within the validation window.

                ## Notes
                This project is about volume and record keeping. The craft of asking unbiased questions lives in its own area on customer discovery.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty problem conversations are completed within the validation window, each summarised into the evidence log within a day."
                cadence: rolling
              tasks:
                - "Set a weekly target for problem conversations you will book"
                - "Send enough invitations to hit this week's target @recurring(weekly:mon)"
                - "Summarise each conversation into the evidence log within a day"
                - "Count completed conversations against the thirty target"
            - name: Monthly kill criteria checkpoint
              description: |-
                ## Purpose
                Kill criteria only work if someone looks at them while there is still time to act. A monthly checkpoint compares the evidence log with each criterion, records pass, fail or not yet, and forces a written decision to continue, change course or stop, instead of letting a weak idea drift for a year.

                ## Milestones
                1. Each kill criterion checked against the log once a month.
                2. A pass, fail or not yet verdict recorded for each with the evidence cited.
                3. A one-line continue, change or stop decision written each month.
                4. The person holding you to the criteria sent the result.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly checkpoint records a verdict for every kill criterion and a one-line decision, shared with your named accountability person."
                cadence: rolling
              tasks:
                - "Compare the evidence log with each kill criterion @recurring(monthly:28)"
                - "Record a verdict for each criterion with the evidence cited"
                - "Write a one-line continue, change or stop decision"
                - "Send the result to the person holding you to the criteria"
            - name: Idea backlog with quarterly triage
              description: |-
                ## Purpose
                Founders collect ideas faster than they can test them, and the newest one always feels the best. Keeping a backlog where every idea gets the same short scorecard, and triaging it once a quarter, stops you abandoning a half-tested idea for a shiny one and makes switching a deliberate choice.

                ## Milestones
                1. One backlog holding every idea with a one-line problem statement.
                2. A shared scorecard of five criteria applied to each idea.
                3. A quarterly triage that keeps one active idea and parks the rest.
                4. A note on why any idea moved up or down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scored idea backlog exists and a dated quarterly triage names one active idea and the reasons for any changes in rank."
                cadence: rolling
              tasks:
                - "Move every stray idea from notes and messages into one backlog"
                - "Write a one-line problem statement for each idea"
                - "Score each idea on pain, reach, fit, money and speed to test"
                - "Triage the backlog and choose the one active idea @recurring(quarterly)"
            - name: Monthly watch on alternatives and new entrants
              description: |-
                ## Purpose
                During a validation window a competitor can launch, raise money or shut down, and each changes what your evidence means. A monthly look at the alternatives map, with new entrants added, keeps the switching bar current and sometimes hands you a list of their unhappy customers to talk to.

                ## Milestones
                1. Alerts set for the names of the main alternatives.
                2. The alternatives map updated each month with any launch, price change or closure.
                3. New entrants added with their positioning in one line.
                4. Any change to the switching bar written down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The alternatives map carries a dated monthly update listing launches, price changes, closures and any change to the switching bar."
                cadence: rolling
              tasks:
                - "Set news and search alerts for the five main alternatives"
                - "Update the alternatives map with this month's changes @recurring(monthly:17)"
                - "Add any new entrant with its positioning in one line"
                - "Rewrite the switching bar if the landscape has moved"
            - name: Experiment card for every test
              description: |-
                ## Purpose
                A test run without a written prediction cannot fail, so it cannot teach you anything. Filling in a short card before each experiment (the assumption, the test, the metric, the pass mark, the cost and the end date) and completing it afterwards turns a scatter of activity into a set of results you can compare.

                ## Milestones
                1. A card format agreed with assumption, test, metric, pass mark, cost and end date.
                2. A card written before every experiment starts.
                3. Each card closed with the actual result and the decision it led to.
                4. All cards kept in one place linked to the evidence log.

                ## Notes
                Set the pass mark before you see any data. If you catch yourself adjusting it afterwards, write that down too.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every experiment run during validation has a card with a pre-set pass mark, an actual result and a recorded decision."
                cadence: rolling
              tasks:
                - "Write a one-page experiment card format"
                - "Fill in the card for next week's test before it starts @recurring(weekly:wed)"
                - "Close each finished card with the result and the decision"
                - "Link every closed card to the entries it produced in the evidence log"
            - name: Monthly call with a friendly sceptic
              description: |-
                ## Purpose
                Everyone around a new founder wants to be encouraging, which is exactly the wrong input during validation. A standing monthly call with one experienced person whose job is to attack the evidence, ideally someone who has founded or invested before, catches self-deception early and sharpens the next test.

                ## Milestones
                1. One sceptic chosen who knows the market or has founded before.
                2. A monthly thirty-minute call agreed with a short pre-read.
                3. The sceptic's strongest objection written down after each call.
                4. Each objection turned into a test, an assumption or a closed question.

                ## Notes
                Start from the **Meeting notes** template. Send the evidence log summary, not the pitch: you want their view of the data, not the story.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly sceptic calls are held with notes recording the strongest objection and what was done with it."
                cadence: rolling
              tasks:
                - "Ask one experienced founder or investor to act as your sceptic"
                - "Send a one-page evidence summary before each call"
                - "Hold the monthly sceptic call and record their strongest objection @recurring(monthly:12)"
                - "Turn each objection into a test or a new assumption"
            - name: Spotting false positives in validation evidence
              description: |-
                ## Purpose
                Compliments, hypothetical promises and friends being kind feel like validation and predict almost nothing about behaviour. Learning to recognise these false positives, and to grade evidence by what it cost the person to give it, is the single skill that most separates founders who validate from those who just collect encouragement.

                ## Milestones
                1. A short list of false positive patterns written in your own words.
                2. Ten past conversation notes reread with false positives flagged.
                3. An evidence grading scale from compliment to payment agreed.
                4. Every entry in the evidence log graded on that scale.

                ## Notes
                A useful test: did they give up time, money, reputation or data? If not, treat it as a weak signal however warm it sounded.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written grading scale exists and every evidence log entry carries a grade, with false positives in past notes flagged."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read one well regarded book chapter or guide on biased customer evidence"
                - "Write the false positive patterns you recognise from your own calls"
                - "Agree a grading scale from compliment to payment"
                - "Reread recent notes and flag compliments and hypotheticals @recurring(monthly:24)"
            - name: Writing falsifiable hypotheses
              description: |-
                ## Purpose
                A hypothesis like people want an easier way to do X can never be proved wrong, so testing it is theatre. Practising a strict format, such as at least X percent of Y will do Z within a time limit, makes each belief testable and shows instantly whether an experiment actually answers it.

                ## Milestones
                1. The format learned and written at the top of the assumption map.
                2. The top ten assumptions rewritten in that format.
                3. Each rewritten hypothesis checked by someone else for whether it could fail.
                4. Weak hypotheses that could not be made falsifiable flagged for rethinking.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten top assumptions are rewritten as falsifiable hypotheses with a number, a group, a behaviour and a time limit, reviewed by a second person."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Learn one falsifiable hypothesis format and write it down"
                - "Rewrite your top ten assumptions in that format"
                - "Ask a friend to say how each one could be proved wrong"
                - "Flag any hypothesis that still cannot fail"
            - name: Reading search and social data as demand signals
              description: |-
                ## Purpose
                Search volumes, keyword trends and the size of relevant online groups are free, fast signals of how many people look for help with a problem. Learning what these numbers can and cannot tell you, and checking the same few phrases each month, adds a cheap quantitative layer to the conversations.

                ## Milestones
                1. Three to five problem phrases chosen in the words customers actually use.
                2. Search volume and trend recorded for each from a free keyword tool.
                3. Sizes of the relevant forums or groups noted with dates.
                4. A short note on the limits of these numbers for your idea.

                ## Notes
                Problem phrases beat solution phrases: people search for how to stop invoices going missing, not for invoice reconciliation platform.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Search volume, trend and group sizes for at least three customer problem phrases are recorded with dates and a note on their limits."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick three problem phrases from the quotes in your evidence log"
                - "Look up volume and trend for each in a free keyword tool"
                - "Record the size of the main online groups where the problem comes up"
                - "Check the trend for your three problem phrases @recurring(monthly:8)"
            - name: Short survey to size a problem already heard
              description: |-
                ## Purpose
                Surveys are poor at discovering problems but useful for counting how widespread one is once conversations have found it. Designing a short survey with behavioural questions (when did this last happen, what did you do, what did it cost) and sending it to the right list puts a rough number on how many people share the pain.

                ## Milestones
                1. The survey limited to eight questions or fewer, mostly about past behaviour.
                2. Leading and hypothetical questions removed after a test with two people.
                3. Responses gathered from a list that matches the target customer.
                4. Results summarised with the number of respondents shown beside each figure.

                ## Notes
                Never ask would you use or would you pay in a survey. Ask about the last time the problem happened.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A survey of eight questions or fewer, tested on two people, has gathered responses from the target group and a summary shows counts beside every figure."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft eight questions about the last time the problem happened"
                - "Test the survey on two people and remove leading questions"
                - "Send it to a list that matches your target customer"
                - "Summarise the results with respondent counts beside each figure"
            - name: Mapping who pays and from which budget
              description: |-
                ## Purpose
                The person with the problem is often not the person who pays, and in companies there may be no budget line for the fix at all. Learning to trace the buyer, the approver and the budget, and asking about them in conversations, catches ideas that users love but nobody can buy.

                ## Milestones
                1. User, buyer and approver identified for the target customer.
                2. The budget line, if any, that a solution would come from named.
                3. Five conversations that asked how something similar was last bought.
                4. A note on whether the buying path is short enough for a new company.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written buying map names the user, buyer, approver and budget line, supported by five conversations about a recent comparable purchase."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down who uses, who buys and who approves a fix for this problem"
                - "Ask in your next five conversations how something similar was last bought"
                - "Name the budget line a solution would come from"
                - "Judge whether a new company could get through that buying path"
            - name: Jobs to be done framing of the problem
              description: |-
                ## Purpose
                Customers do not want a product, they want progress in a situation: getting the month-end done before the school run, looking competent in front of a client. Learning to frame the problem as a job, with its functional, emotional and social sides, often reveals that the real competitor and the real pain are different from what you assumed.

                ## Milestones
                1. The main job written as a situation, a motivation and an expected outcome.
                2. Functional, emotional and social parts of the job listed.
                3. The moments where the job goes wrong mapped in order.
                4. The problem hypothesis updated if the job framing changes it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written job statement with functional, emotional and social parts and a map of failure moments exists, and the hypothesis page notes any change."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short introduction to jobs to be done"
                - "Write the job as when, I want to, so I can"
                - "List the functional, emotional and social parts of the job"
                - "Map the moments where the job currently goes wrong"
            - name: Reading small numbers honestly
              description: |-
                ## Purpose
                Early tests produce tiny samples: eight sign-ups, three replies, one payment. Learning the basics of what small numbers can support, such as why three of five is not sixty percent of the market and how a single channel can skew everything, stops you drawing confident conclusions from noise.

                ## Milestones
                1. The idea of a confidence range for a small sample understood in plain terms.
                2. A rule of thumb written for the smallest sample you will act on.
                3. Two past results reread with their sample sizes and sources noted.
                4. Every future result in the log written with its denominator.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule of thumb for minimum sample size exists and every result in the evidence log shows its denominator and source channel."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain language explanation of confidence ranges for small samples"
                - "Write the smallest sample size you will act on for each test type"
                - "Reread two past results and note their sample sizes and channels"
                - "Add a denominator column to the evidence log"
            - name: Concierge test delivering the outcome by hand
              description: |-
                ## Purpose
                Before writing code, you can often deliver the result the product would promise by doing it yourself for a few customers: compiling the report, matching the people, chasing the paperwork. A concierge test shows whether people value the outcome enough to keep using it, and teaches you exactly what the product would need to do.

                ## Milestones
                1. Three to five customers recruited to receive the outcome delivered manually.
                2. The service delivered for at least four weeks on a fixed rhythm.
                3. Usage, requests and drop-offs recorded each week.
                4. A clear answer on whether customers would pay to keep it, ideally by asking them to.

                ## Notes
                Charge something, even a token amount, by the second week. Free concierge services attract politeness, not evidence.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "A manual service ran for at least four weeks for three or more customers, with weekly usage recorded and a pay or not pay answer from each."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write a one-paragraph offer describing the outcome you will deliver by hand"
                - "Recruit three to five customers who match the hypothesis"
                - "Deliver the outcome and log usage and requests @recurring(weekly:thu)"
                - "Ask each customer whether they will pay to continue"
            - name: Wizard of Oz test with a manual back end
              description: |-
                ## Purpose
                Some ideas need the customer to experience a product, not a service, for the test to mean anything. A Wizard of Oz test puts a simple front end in front of users while you do the clever part by hand behind it, which measures real behaviour at a fraction of the cost of building the automation.

                ## Milestones
                1. The smallest front end that captures the request built from no-code tools.
                2. A manual process behind it that meets a stated response time.
                3. At least twenty real requests handled through it.
                4. Repeat use and the cost of handling each request recorded.

                ## Notes
                Be careful with what you promise: if users are sharing personal or financial data, tell them a person may handle it and keep it secure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A Wizard of Oz test has handled at least twenty real requests, with repeat use and the manual cost per request recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Sketch the smallest front end that captures a customer request"
                - "Build it with a form or no-code tool in under a day"
                - "Write the manual steps and target response time for each request"
                - "Record repeat use and handling cost after twenty requests"
            - name: Clickable mock walkthrough with target users
              description: |-
                ## Purpose
                Clickable mocks let you watch people try to solve their problem with your proposed approach before any engineering. Sitting with five or six target users while they think aloud shows whether the approach fits how they actually work, and where the idea itself, not the design, falls down.

                ## Milestones
                1. A clickable mock covering the one core task, built in a design tool.
                2. Five or six target users observed using it while thinking aloud.
                3. Points where users stalled or questioned the approach recorded.
                4. A verdict on whether the approach fits the job, separate from design polish.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least five target users have walked through a clickable mock of the core task, with stall points and an approach verdict recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sketch the single core task on paper in six screens or fewer"
                - "Turn the sketch into a clickable mock in a design tool"
                - "Watch five target users try it while thinking aloud"
                - "Separate design complaints from doubts about the approach"
            - name: Letters of intent from business buyers
              description: |-
                ## Purpose
                For a business-to-business idea, a signed letter of intent or a paid pilot agreement is far stronger evidence than any number of positive meetings. Asking for one tests whether the buyer has budget, authority and urgency, and a refusal tells you something just as useful.

                ## Milestones
                1. A one-page letter of intent drafted with scope, price range and timing.
                2. The ask made to every qualified buyer from the conversation list.
                3. Each response recorded as signed, conditional or declined, with the reason.
                4. A count of signed letters compared against the kill criteria.

                ## Notes
                A letter of intent is usually non-binding; ask a lawyer to check your wording if a buyer wants to make it binding or attach a payment.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every qualified buyer has been asked for a letter of intent and responses are logged as signed, conditional or declined with reasons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page letter of intent with scope, price range and timing"
                - "List the qualified buyers from your conversations"
                - "Ask each buyer to sign or tell you what stops them"
                - "Record every response and its reason in the evidence log"
            - name: Three idea variants on one scorecard
              description: |-
                ## Purpose
                The first framing of an idea is rarely the best one: the same insight might serve freelancers, small agencies or in-house teams, or work as software, a service or a marketplace. Writing three variants and scoring them on the same evidence shows whether a sideways step would be stronger before you commit testing time to one.

                ## Milestones
                1. Three variants written, differing in customer, model or delivery.
                2. Each variant scored on the same five criteria using existing evidence.
                3. The biggest unknown for each variant named.
                4. One variant chosen to test next, with the reason written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three written variants are scored on the same five criteria and one is chosen for testing with a written reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three variants that change the customer, model or delivery"
                - "Score each variant on the same five criteria"
                - "Name the biggest unknown for each variant"
                - "Choose one variant to test next and write why"
            - name: Choosing one beachhead segment to test
              description: |-
                ## Purpose
                Testing an idea on everyone produces muddy evidence, because a strong signal in one group is drowned by indifference in the rest. Choosing a single narrow segment, small enough to reach and with the sharpest pain, makes every test cleaner and every conversation more comparable.

                ## Milestones
                1. Candidate segments listed from the conversations and research so far.
                2. Each candidate scored on pain, reach, ability to pay and word of mouth.
                3. One beachhead segment chosen and described in a single line.
                4. The hypothesis page and conversation list updated to that segment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One beachhead segment is chosen after scoring at least three candidates, and the hypothesis and conversation list are updated to match."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every segment that has shown the problem so far"
                - "Score each on pain, reach, ability to pay and word of mouth"
                - "Choose one segment and describe it in a single line"
                - "Update the hypothesis page and conversation list to that segment"
            - name: Go, change or kill decision memo
              description: |-
                ## Purpose
                At the end of the validation window the evidence has to become a decision, written down, or the idea will drift on by default. A two-page memo that sets the kill criteria against the evidence log and ends in go, change or kill gives you, a co-founder or an early backer something concrete to agree or argue with.

                ## Milestones
                1. Each kill criterion shown with its final verdict and the evidence behind it.
                2. The strongest evidence for and against the idea summarised in a paragraph each.
                3. A go, change or kill decision written in one sentence.
                4. The memo shared with the person who held you to the criteria and their response noted.

                ## Notes
                Kill is a legitimate result. Record what you learned and park the idea in the backlog with its evidence; ideas sometimes come back when the market moves.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated memo sets every kill criterion against the evidence, ends in a one-sentence go, change or kill decision, and has been shared."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull every kill criterion and its verdict into one page"
                - "Ask the agent to summarise the evidence log for and against the idea"
                - "Write the go, change or kill decision in one sentence"
                - "Share the memo with your accountability person and note their response"
            - name: Pre-mortem on the idea
              description: |-
                ## Purpose
                Imagining that the company has failed two years from now, and writing the most likely reasons, surfaces risks that optimism hides. A pre-mortem done early in validation adds the uncomfortable assumptions to the map while there is still time and money to test them.

                ## Milestones
                1. A list of at least ten plausible reasons the company failed.
                2. Each reason linked to an assumption on the map, or added as a new one.
                3. The three most likely failure reasons ranked and given a test.
                4. One co-founder, advisor or sceptic asked to add reasons you missed.

                ## Notes
                Start from the **Risk register** template if you want to track the failure reasons with owners and dates.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least ten failure reasons are written, each linked to an assumption, with the top three ranked and paired to tests."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write as if the company failed two years from now and list why"
                - "Link each failure reason to an assumption on the map"
                - "Rank the three most likely reasons and pair each with a test"
                - "Ask one sceptic to add reasons you missed"
            - name: Five-day validation sprint
              description: |-
                ## Purpose
                Some founders make more progress in one focused week than in two months of evenings. A five-day sprint with a fixed plan (one day mapping, one recruiting, two testing, one deciding) compresses the early learning and ends with a clear next step, especially useful when taking leave from a job to give the idea a proper look.

                ## Milestones
                1. Five consecutive days cleared and protected in the calendar.
                2. Test participants booked for days three and four before the sprint starts.
                3. Each day's output saved, from the map on day one to the decision on day five.
                4. A written next step agreed on the final afternoon.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-day sprint has been completed with a saved output for each day and a written next step on day five."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Choose five consecutive days and clear them in the calendar"
                - "Write the plan for each day of the sprint"
                - "Book six test participants for days three and four"
                - "Save each day's output and write the next step on day five"
            - name: Problem hunting at an industry event
              description: |-
                ## Purpose
                Trade shows, conferences and association meetings put dozens of your target customers in one room, already in the mood to talk shop. Going with a clear goal (a set number of short problem conversations and contacts for follow-up) turns an expensive day out into a concentrated burst of evidence.

                ## Milestones
                1. One relevant event chosen where target customers attend in numbers.
                2. A target of conversations and three short opening questions prepared.
                3. Notes captured within an hour of each conversation.
                4. Follow-up messages sent to every new contact within two days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least fifteen problem conversations are logged from one industry event, with follow-ups sent to every contact within two days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find one industry event in the next four months that your customers attend"
                - "Set a target number of short problem conversations for the day"
                - "Prepare three opening questions about their recent experience"
                - "Send follow-up messages to every new contact within two days"
            - name: Evidence review with a founder panel
              description: |-
                ## Purpose
                Presenting your validation evidence to three or four founders or operators, rather than your pitch, is a fast way to find the weak spots in your reasoning. A dated session with a short deck of data, not slides of vision, gives you a deadline for tidying the evidence and a room of people who have seen ideas fail.

                ## Milestones
                1. Three or four experienced founders or operators invited for a set date.
                2. A short deck built from the evidence log, with sample sizes shown.
                3. The panel's questions and objections recorded during the session.
                4. A list of changes to the assumption map made within a week.
              priority: low
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An evidence review with at least three experienced founders has been held, objections recorded and the assumption map updated within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Invite three or four founders or operators to a one-hour evidence review"
                - "Build a short deck of evidence with sample sizes shown"
                - "Record every question and objection during the session"
                - "Update the assumption map with the changes within a week"
            - name: Startup weekend or validation workshop
              description: |-
                ## Purpose
                Local startup weekends, hackathons with a business track and university or accelerator workshops give a structured push to test an idea with strangers in forty-eight hours. Treated as a validation exercise rather than a pitch contest, they produce interviews, mentor challenges and sometimes a co-conspirator.

                ## Milestones
                1. One upcoming event in your city or online chosen and booked.
                2. The idea pitched as a problem, with the testing plan ready.
                3. At least five conversations with people outside the event held during it.
                4. The evidence gathered added to the log within three days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One startup weekend or workshop has been attended and at least five outside conversations from it are in the evidence log."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Search for startup weekends or validation workshops in the next three months"
                - "Book a place and prepare a problem-first one-minute pitch"
                - "Talk to at least five people outside the event during it"
                - "Look for the next local startup weekend or workshop @recurring(yearly)"
            - name: Expert call day with industry insiders
              description: |-
                ## Purpose
                People who have worked inside the industry for years, such as consultants, former managers and suppliers, can tell you in half an hour why an idea has failed before or which rule makes it hard. Booking a run of short calls on one day gives a fast reality check on regulation, buying habits and failed past attempts.

                ## Milestones
                1. Five insiders identified through your network or professional platforms.
                2. Calls booked into a single day or two half days.
                3. Each insider asked about past attempts, rules and who really decides.
                4. A summary of red flags and surprises added to the evidence log.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "At least five insider calls are completed and a written summary of red flags and surprises is in the evidence log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List five industry insiders you could reach through your network"
                - "Ask each for a twenty-minute call on the same day"
                - "Ask each why similar ideas have failed before"
                - "Summarise the red flags and surprises into the evidence log"
            - name: Validating while holding a full-time job
              description: |-
                ## Purpose
                Most founders validate in the margins of a salaried job, with five to ten hours a week and conversations squeezed into lunch breaks. A plan built for that reality, with a fixed weekly session, tests that run without you and a check on your employment contract, keeps progress steady without risking the job or the relationship with your employer.

                ## Milestones
                1. Your employment contract checked for clauses on side work and intellectual property.
                2. A fixed weekly validation session that survives busy weeks.
                3. Tests chosen that can run while you are at work, such as surveys and manual sign-ups.
                4. A rule agreed on never using employer time, equipment or data.

                ## Notes
                If the idea is close to your employer's business, get advice on the contract before you start talking to customers. The full move to founding lives in its own area.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your contract has been checked, a weekly validation session has been kept for six weeks and no work time or equipment has been used."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read your employment contract for side work and intellectual property clauses"
                - "Block a fixed weekly validation session outside work hours @recurring(weekly:sat)"
                - "Choose two tests that can run while you are at work"
                - "Move any idea work off employer laptops and accounts"
            - name: Technical founder resisting the urge to build
              description: |-
                ## Purpose
                For a founder who can code, building feels like progress and talking to strangers feels like a chore, so validation gets skipped and replaced with a prototype. Making a deliberate pact, tracking hours spent building against hours spent with customers, keeps the evidence ahead of the code.

                ## Milestones
                1. A written rule that no product code starts until a named assumption is tested.
                2. Hours spent building and hours spent with customers logged each week.
                3. Any prototype that does get built tied to a specific experiment card.
                4. The ratio reviewed after four weeks and the rule adjusted if needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of build and customer hours are logged, with every prototype tied to an experiment card and the ratio reviewed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the assumption that must be tested before any product code"
                - "Log hours spent building and hours with customers @recurring(weekly:thu)"
                - "Tie any prototype to a specific experiment card"
                - "Review the ratio after four weeks with a non-technical friend"
            - name: Validating an idea in a regulated market
              description: |-
                ## Purpose
                Ideas in health, finance, education, food or children's services face rules that can decide the business before any customer does. Finding out early who regulates the activity, what licence or approval might be needed and how long that takes stops you validating demand for something you cannot legally sell yet.

                ## Milestones
                1. The regulators and rules that could apply listed from official sources.
                2. A short call held with someone who works in compliance in the sector.
                3. Any licence, approval or certification with its typical timeline noted.
                4. The regulatory risk added to the assumption map and the kill criteria if serious.

                ## Notes
                This is about knowing which questions to ask, not reaching legal conclusions. Take anything that could stop the business to a lawyer or compliance specialist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of applicable regulators, approvals and timelines exists, informed by a sector compliance conversation and reflected in the assumption map."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the regulators whose rules might apply from their official websites"
                - "Book a call with someone who works in compliance in the sector"
                - "Note any licence or approval needed with its typical timeline"
                - "Check regulators' sites for consultations or rule changes @recurring(quarterly)"
            - name: Validating a low-price consumer idea
              description: |-
                ## Purpose
                Consumer ideas at a few pounds or dollars a month live or die on volume, habit and cheap reach, so a handful of enthusiastic interviews proves very little. Validation here leans on behaviour at small scale: how many strangers act on an offer, return a second time or tell a friend.

                ## Milestones
                1. The number of customers needed to make the idea worthwhile worked out roughly.
                2. A cheap reach channel tested with strangers, not friends.
                3. Repeat behaviour measured over at least two weeks.
                4. Referral or sharing behaviour recorded, even if it is zero.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A behaviour test with strangers has run for two weeks, recording reach cost, repeat behaviour and referrals against a rough customer target."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Work out roughly how many customers make the idea worthwhile"
                - "Pick one cheap channel that reaches strangers who fit the profile"
                - "Measure how many come back a second time over two weeks"
                - "Record how many shared it with someone else"
            - name: Validating for a small or island market
              description: |-
                ## Purpose
                In a small national market, such as a Caribbean island or a small European country, the whole addressable market may be a few thousand firms or households, and everyone knows everyone. Validation has to answer two extra questions early: is the home market big enough, and could the idea travel to neighbouring markets or the diaspora?

                ## Milestones
                1. A bottom-up count of buyers in the home market from public registers.
                2. Two or three nearby markets or diaspora communities named as expansion options.
                3. At least three conversations held with customers outside the home market.
                4. A note on currency, payment and shipping barriers that affect the idea.

                ## Notes
                Word of mouth travels fast in a small market, in both directions. A weak early test seen by the whole industry can cost more than it would elsewhere, so pick early testers with care.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A home market count, a named expansion option with three outside conversations and a note on cross-border barriers are written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count buyers in your home market from a public register or directory"
                - "Name two nearby markets or diaspora communities the idea could reach"
                - "Hold three conversations with customers outside your home market"
                - "Note currency, payment and shipping barriers for each market"
            - name: Validating an idea from your own industry
              description: |-
                ## Purpose
                Founders who spotted a problem in their own job have a real head start, and a real blind spot: they assume everyone shares their employer's habits. Testing the idea deliberately outside your old company and network shows whether the pain is industry wide or just a quirk of one place.

                ## Milestones
                1. The assumptions that come from your own employer's way of working listed.
                2. At least eight conversations held with people at other organisations.
                3. Differences between your old workplace and others recorded.
                4. The hypothesis adjusted for anything that was specific to one place.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Eight conversations outside your former employer are logged and the hypothesis notes any assumption that proved specific to one workplace."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the beliefs that come from your own employer's habits"
                - "Book eight conversations with people at other organisations"
                - "Call one former colleague now working somewhere else @recurring(monthly:9)"
                - "Adjust the hypothesis for anything specific to your old workplace"
            - name: Interviewing people who abandoned existing solutions
              description: |-
                ## Purpose
                People who tried a competitor or a workaround and gave up are the most honest source on why the problem is hard to solve, and whether it is worth solving at all. Seeking them out deliberately, rather than talking only to people still in pain, finds the reasons your idea could fail in the same way.

                ## Milestones
                1. A source of lapsed users found, such as cancelled-subscription reviews or community threads.
                2. At least six conversations held with people who stopped using an alternative.
                3. Their reasons for quitting grouped and counted.
                4. Each reason checked against your idea with a note on whether it would repeat.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six conversations with people who abandoned an alternative are logged, with counted reasons and a check of each against the idea."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search reviews and forums for people who cancelled an existing tool"
                - "Invite six of them to a short call about why they stopped"
                - "Group and count their reasons for quitting"
                - "Check whether each reason would apply to your idea too"
            - name: Testing both sides of a marketplace idea
              description: |-
                ## Purpose
                A marketplace idea is really two ideas: one side must have the problem badly enough to come, and the other must want the business enough to show up. Validating each side separately, with its own assumptions and kill criteria, prevents strong demand on one side from hiding a fatal gap on the other.

                ## Milestones
                1. Separate assumption maps written for supply and for demand.
                2. Kill criteria set for each side independently.
                3. At least ten conversations or test sign-ups gathered on each side.
                4. A note on which side is harder to attract and why.

                ## Notes
                Launching the marketplace itself lives in its own area. This project ends with evidence on both sides, not a live platform.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both sides of the marketplace have their own assumption map, kill criteria and at least ten logged signals, with the harder side named."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Split the assumption map into a supply side and a demand side"
                - "Write kill criteria for each side"
                - "Gather ten conversations or sign-ups on each side"
                - "Write which side will be harder to attract and why"
            - name: Technical feasibility spike beside demand tests
              description: |-
                ## Purpose
                For deep technology or AI-heavy ideas, the riskiest assumption may be whether the thing can be made to work at a usable quality or cost, not whether anyone wants it. A time-boxed feasibility spike run in parallel with demand tests answers that question with the least code possible and keeps the two kinds of risk visible side by side.

                ## Milestones
                1. The single technical question that could kill the idea written down.
                2. A spike of no more than two weeks planned with a pass mark for quality or cost.
                3. The spike result recorded beside the demand evidence.
                4. A note on whether demand or feasibility is now the larger risk.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A time-boxed spike of two weeks or less has answered one written technical question against a pre-set pass mark, recorded beside demand evidence."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the one technical question that could kill the idea"
                - "Set a pass mark for quality, speed or cost before starting"
                - "Update the feasibility risk list with progress @recurring(weekly:fri)"
                - "Record the result beside the demand evidence and compare the two risks"
            - name: Cost of the problem model for business buyers
              description: |-
                ## Purpose
                Experienced founders selling to businesses can quantify the problem in the buyer's own numbers: hours lost a month, error rates, fines, missed revenue. A simple model built from interview data, and checked with two buyers, tells you whether a solution can be priced well below the pain and gives later sales conversations a ready business case.

                ## Milestones
                1. The cost drivers of the problem listed from interviews.
                2. Each driver estimated with a range and its source.
                3. A yearly cost of the problem per customer worked out.
                4. The model checked with two buyers and adjusted.

                ## Notes
                Keep the inputs visible and conservative. A model a buyer can argue with is more useful than an impressive total they do not believe.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cost of the problem model with sourced ranges and a yearly cost per customer exists and has been checked with two real buyers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the cost drivers mentioned in your interviews"
                - "Estimate each driver as a range with its source"
                - "Work out the yearly cost of the problem for one typical customer"
                - "Walk two buyers through the model and adjust it"
            - name: Validation evidence pack for backers
              description: |-
                ## Purpose
                Accelerators, angels and grant programmes increasingly want to see evidence of a real problem rather than a polished vision. A short evidence pack (the hypothesis, the tests run, the numbers with sample sizes, quotes and what you decided) shows rigour and is quick to adapt for each application.

                ## Milestones
                1. A pack of no more than six pages drawn from the evidence log and experiment cards.
                2. Every number shown with its sample size and source.
                3. Disproved assumptions included alongside the ones that held.
                4. The pack reviewed by one person who has assessed applications before.

                ## Notes
                Include what you got wrong. Reviewers trust a founder who killed assumptions more than one whose every test passed.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pack of six pages or fewer, with sample sizes on every number and disproved assumptions included, has been reviewed by an experienced assessor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the six strongest pieces of evidence from the log"
                - "Ask the agent to draft the pack from the experiment cards"
                - "Add sample sizes and sources to every number"
                - "Ask one experienced assessor to review it"
            - name: Personal validation playbook from past ideas
              description: |-
                ## Purpose
                After validating two or three ideas, patterns appear: which tests gave reliable signals, which channels found customers fastest, which mistakes you keep repeating. Writing your own playbook turns that experience into a faster, cheaper process for the next idea and for anyone you advise.

                ## Milestones
                1. A retrospective written for each idea validated so far.
                2. The tests that predicted outcomes well, and those that did not, listed.
                3. A default sequence of tests and a default time budget written down.
                4. The playbook shared with one other founder for comment.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written playbook with retrospectives, a ranked list of reliable tests and a default sequence exists and has been commented on by another founder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page retrospective for each idea you have validated"
                - "List which tests predicted the outcome and which misled you"
                - "Write your default sequence of tests and time budget"
                - "Revisit and update the playbook with the year's ideas @recurring(yearly)"
---

# Startup Idea Validation

This area is for founders with an idea they cannot stop thinking about and a healthy fear of spending a year building something nobody needs. It starts with the foundations (a one-page problem hypothesis, a ranked assumption map, kill criteria and a budget written before any testing, and the desk research on how people cope today), then the weekly machinery that keeps evidence flowing, the skills of reading evidence honestly, the cheap experiments and decisions that settle the big questions, a handful of dated events, variants for founders in particular situations, and finally the work of someone who has validated ideas before.

What repeats is a Friday validation review, a Monday target for problem conversations, a weekly pain-signal sweep, a monthly refresh of the assumption map, a monthly kill-criteria checkpoint and a quarterly triage of the idea backlog. The Metrics log, Feedback themes, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
