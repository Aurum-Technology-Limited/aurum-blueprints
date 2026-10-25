---
id: founding-startups.landing-page-smoke-tests
name: Landing Page Smoke Tests
description: "Demand tests you can trust before any product code: a written bet and pass mark, a tracked page with honest consent, paid and organic traffic, waitlists, deposits and pre-orders, and a go, iterate or kill call."
category: business
version: 1.0.0
tags: [founding-startups, landing-page-smoke-tests, founder, smoke-test, waitlist, pre-orders, demand-validation, conversion]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - marketing-campaign
    - reading-queue
    - meeting-notes
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Landing Page Smoke Tests
          description: "Measuring real demand with landing pages, waitlists and pre-orders before writing product code, and reading the results honestly."
          projects:
            - name: Riskiest demand assumption as a testable bet
              description: |-
                ## Purpose
                Most smoke tests fail before launch because nobody wrote down what they were testing, so any result can be read as encouraging. Turning the idea into one sentence of the form 'people in segment X will do Y when offered Z' gives the page, the traffic and the verdict a single job.

                ## Milestones
                1. Every assumption the idea depends on listed on one page.
                2. Each assumption scored for how likely it is wrong and how fatal that would be.
                3. The single riskiest demand assumption rewritten as one testable bet.
                4. The bet shared with a co-founder or adviser, who can restate it without help.

                ## Notes
                If the riskiest assumption is technical rather than about demand, a landing page will not answer it. Say so now and test the demand bet that comes second.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One written bet naming segment, offer and expected action, agreed by at least one other person before any page is built."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every assumption the idea needs to be true on one page"
                - "Score each assumption for likelihood of being wrong and impact"
                - "Write the riskiest demand assumption as a single testable sentence"
                - "Ask a co-founder or adviser to restate the bet back to you"
            - name: Pass and fail thresholds set before launch
              description: |-
                ## Purpose
                After a test runs, every founder finds a reason why 2 percent is actually good. Writing the conversion rate, sample size and action that count as a pass, a fail and a grey zone before the first visitor arrives is the only reliable defence against reading results to fit hope.

                ## Milestones
                1. A minimum number of visitors from the target segment agreed for a valid read.
                2. A pass threshold, a fail threshold and a grey zone written as numbers.
                3. The decision attached to each outcome written beside it.
                4. The thresholds dated and stored where they cannot be quietly edited.

                ## Notes
                Benchmarks from blog posts vary wildly by channel and offer. Set the bar from what the business needs to work, such as the signup rate that makes acquisition cost survivable, not from someone else's average.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated document stating sample size, pass, fail and grey-zone thresholds and the action for each, written before the test goes live."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the signup rate the business would need for acquisition to pay back"
                - "Write pass, fail and grey-zone thresholds as numbers"
                - "Set the minimum visitor count before any verdict is allowed"
                - "Save the thresholds as a dated, locked file shared with the team"
            - name: Target segment and first traffic source pairing
              description: |-
                ## Purpose
                A page shown to everyone measures nobody. Choosing one narrow segment and the one place you can reach them at a known cost, such as a subreddit, a trade newsletter or a job title on a professional network, makes the conversion rate mean something about a real market.

                ## Milestones
                1. One segment described by role, situation and the trigger that makes the problem urgent.
                2. Three possible traffic sources listed with rough reach and cost per visit.
                3. One source chosen for the first test, with the reason written down.
                4. The segment and source written at the top of the results log.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One segment and one traffic source chosen, each written in a sentence, with estimated reach and cost per visit recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe the segment by role, situation and urgent trigger"
                - "List three places the segment gathers with rough reach for each"
                - "Estimate cost per visit for each source from public rate cards"
                - "Pick one source for the first test and note why"
            - name: Value proposition headline and three variants
              description: |-
                ## Purpose
                Visitors decide in a few seconds whether a page is for them, so the headline carries most of the test. Writing one plain promise in the customer's own words, plus three variants that each stress a different outcome, gives you a page worth testing and a ready first experiment.

                ## Milestones
                1. Phrases lifted from interviews, reviews or forum posts collected in one list.
                2. A main headline and subheadline that name the customer, the pain and the outcome.
                3. Three variant headlines, each built around a different benefit.
                4. Five people from the segment asked what the product does after reading each headline for five seconds.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A main headline and three variants, with at least five five-second readings from the segment showing they understand what is offered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect twenty phrases customers use about the problem"
                - "Draft a headline naming the customer, the pain and the outcome"
                - "Write three variants that each lead with a different benefit"
                - "Run a five-second test of each headline with five people from the segment"
            - name: Landing page build and domain set-up
              description: |-
                ## Purpose
                A smoke test page needs to look credible, load fast on a phone and have one clear call to action; it does not need a designer or a codebase. Building it on a hosted page builder with its own domain, a working form and a thank-you page gets you live in a day.

                ## Milestones
                1. A domain or subdomain pointed at the page builder with a working certificate.
                2. A single-scroll page with headline, three benefits, one visual and one call to action.
                3. A thank-you page that confirms what happens next.
                4. The page checked on two phones and one laptop, loading in under three seconds.

                ## Notes
                Resist adding navigation, a blog or an about page. Every extra link is a leak in the funnel you are trying to measure.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live page on its own domain with one call to action and a thank-you page, loading in under three seconds on a phone."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a hosted page builder with forms and custom domains"
                - "Point a domain or subdomain at the page and confirm the certificate"
                - "Build the page with one headline, three benefits and one call to action"
                - "Test load time and the form on two phones and a laptop"
                - "Check the domain renewal date and payment card are current @recurring(yearly)"
            - name: Conversion tracking and analytics events
              description: |-
                ## Purpose
                Without tracking, a smoke test is just a page. Setting up visits, unique visitors, call-to-action clicks and completed signups as separate events, tagged by traffic source, means every number in the readout can be traced back to where it came from.

                ## Milestones
                1. An analytics tool installed and filtering out your own visits.
                2. Separate events for page view, call-to-action click and completed signup.
                3. Tagged links for each traffic source so visits arrive labelled.
                4. A test signup from each source showing up correctly in the reports.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Page view, click and signup events firing correctly for every planned traffic source, confirmed by a test signup from each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Install the analytics tool and exclude your own devices"
                - "Create events for page view, button click and completed signup"
                - "Build a tagged link for each planned traffic source"
                - "Submit a test signup through each link and confirm it is recorded"
            - name: Email capture consent and privacy notice
              description: |-
                ## Purpose
                Collecting email addresses makes you responsible for them under data protection law in most countries, even before the company is incorporated. A short privacy notice, a clear consent line and a record of when each person signed up protects the list you are building and the people on it.

                ## Milestones
                1. A plain-language privacy notice linked from the form.
                2. A consent line stating exactly what signups will receive and how often.
                3. Signup date, source and consent wording stored with each address.
                4. A working unsubscribe link in every email the list will receive.

                ## Notes
                Rules differ by country. Use a reputable privacy notice generator as a starting point and ask a lawyer if you collect data from several regions or anything beyond name and email.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A linked privacy notice, a consent line on the form and consent records stored for every signup before any traffic is bought."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a short privacy notice covering what you collect and why"
                - "Add a consent line to the form saying what signups will receive"
                - "Confirm the email tool stores signup date, source and consent"
                - "Reread the privacy notice against how the list is really used @recurring(yearly)"
            - name: Smoke test budget and time box
              description: |-
                ## Purpose
                Tests drift: a week becomes a month and a small ad budget quietly doubles. Fixing the total cash, the end date and the stop rule up front keeps the experiment cheap enough to repeat and stops a weak signal being kept alive with more spend.

                ## Milestones
                1. A total budget for ads, tools and incentives agreed and written down.
                2. A start date and a hard end date in the calendar.
                3. A stop rule for ending early if spend runs ahead of signups.
                4. A daily spend cap set inside every ad account used.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written budget, end date and early stop rule, with daily caps set in every ad account before launch."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Agree the total cash the test may spend, tools included"
                - "Put the start date and hard end date in the calendar"
                - "Write a stop rule for ending the test early"
                - "Set a daily spend cap in each ad account"
            - name: Smoke test results log
              description: |-
                ## Purpose
                Running several tests without a record means the third one is forgotten and the mistakes of the first are repeated. One log with the bet, thresholds, traffic, spend, conversions and verdict for every test builds a record investors and co-founders can check.

                ## Milestones
                1. A log with columns for bet, segment, source, visitors, signups, spend and verdict.
                2. The thresholds for each test entered before it goes live.
                3. Every finished test given a one-line verdict and the decision it led to.
                4. The log readable by someone who was not there.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A results log holding bet, thresholds, traffic, spend, conversions and verdict for every test run, with no blank verdicts."
                cadence: rolling
              tasks:
                - "Create the results log from the metrics log template"
                - "Add columns for bet, thresholds, source, spend and verdict"
                - "Enter the first test's thresholds before it goes live"
                - "Fill in the verdict row for any test that has finished @recurring(monthly:3)"
            - name: Daily readout while a test is live
              description: |-
                ## Purpose
                Ads can burn a week's budget in a day if a setting is wrong, and a broken form can silently drop every signup. A five-minute check each morning of visits, clicks, signups and spend against the stop rule catches problems while they are cheap.

                ## Milestones
                1. A single view showing visits, signups, spend and cost per signup by source.
                2. The check done each morning the test is live.
                3. Any broken link, form or spike noted with the date and the fix.
                4. No day of a live test without a recorded readout.

                ## Notes
                Look, record and fix breakages, but do not change copy or targeting mid-test unless the stop rule says so. Daily tinkering makes the final number meaningless.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A recorded readout for every day of each live test, with any breakage logged and fixed within one day."
                cadence: rolling
              tasks:
                - "Build one view of visits, signups and spend by source"
                - "Check visits, signups and spend against the stop rule @recurring(daily)"
                - "Submit a test signup to confirm the form still works"
                - "Note any breakage and its fix in the results log"
            - name: Weekly ad spend and cost per signup review
              description: |-
                ## Purpose
                Cost per signup is the number that tells you whether a channel could ever pay back, and it moves week to week as ads fatigue. A weekly look at spend, cost per click and cost per signup per ad set shows which audiences are worth more budget and which to switch off.

                ## Milestones
                1. Spend, cost per click and cost per signup recorded per ad set each week.
                2. Ad sets above the agreed cost ceiling paused.
                3. One sentence each week on what changed and why.
                4. Four weeks of figures that show the trend for each channel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly reviews recording cost per signup per ad set, with any set above the ceiling paused the same week."
                cadence: rolling
              tasks:
                - "Set a cost per signup ceiling from the budget and thresholds"
                - "Record spend and cost per signup per ad set @recurring(weekly:mon)"
                - "Pause any ad set above the ceiling for two weeks running"
                - "Write one line on what changed since last week"
            - name: Waitlist nurture emails
              description: |-
                ## Purpose
                A waitlist that hears nothing for three months forgets it signed up, and the launch email lands in spam. A short monthly update with real progress, one question and an easy reply keeps the list warm and tells you who is still interested.

                ## Milestones
                1. A welcome email sent automatically within minutes of signup.
                2. A monthly update template with progress, one question and a reply prompt.
                3. Open, click and reply rates recorded for each send.
                4. Replies tagged so the most engaged signups are easy to find.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A welcome email live and six monthly updates sent, each with open, click and reply rates recorded."
                cadence: rolling
              tasks:
                - "Write and switch on an automatic welcome email"
                - "Ask the agent to draft the monthly update from this month's notes"
                - "Send the monthly waitlist update and record opens and replies @recurring(monthly:12)"
                - "Tag every reply by interest level"
            - name: Signup follow-up calls
              description: |-
                ## Purpose
                An email address is the weakest signal of demand; a twenty-minute call reveals whether the person has the problem, has tried to solve it and would pay. Calling a few new signups every week turns the waitlist from a vanity number into a qualified list.

                ## Milestones
                1. A short invitation email offering a call to new signups.
                2. Three calls held each week while a test is running.
                3. Each call scored for pain, current workaround and willingness to pay.
                4. A tally of qualified versus casual signups added to the results log.

                ## Notes
                Keep these calls about whether they would use and pay for the offer on the page. Open-ended problem exploration belongs in customer discovery.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twelve signup calls held in a month, each scored on the same three questions, with the qualified share recorded."
                cadence: rolling
              tasks:
                - "Write a short call invitation for new signups"
                - "Invite this week's newest signups to a twenty-minute call @recurring(weekly:thu)"
                - "Score each call for pain, workaround and willingness to pay"
                - "Add the qualified share to the results log"
            - name: Experiment backlog and test queue
              description: |-
                ## Purpose
                Ideas for the next test arrive constantly and are lost in chat threads. A ranked backlog of experiments, each with its bet, cost and expected learning, means the next test starts the day the current one ends instead of a month later.

                ## Milestones
                1. A backlog with bet, cost, effort and expected learning for each idea.
                2. Each idea scored on how much it reduces the biggest risk per pound or dollar spent.
                3. The next test chosen and ready before the current one finishes.
                4. Ideas older than three months reviewed and either kept or dropped.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ranked backlog of at least five scored experiments, with the next one prepared before each live test ends."
                cadence: rolling
              tasks:
                - "Move test ideas from chats and notes into one backlog"
                - "Score each idea on risk reduced per unit of cost"
                - "Rerank the backlog and prepare the next test @recurring(monthly:9)"
            - name: Monthly smoke test retrospective
              description: |-
                ## Purpose
                Each test teaches something about the method as well as the market: an audience setting that leaked, a headline that confused, a form that was too long. Half an hour a month on what went wrong in the process makes the next test cheaper and its result more trustworthy.

                ## Milestones
                1. A monthly slot held with whoever ran the tests.
                2. What worked, what broke and what to change recorded for each test.
                3. One change to the test method adopted each month.
                4. Repeated mistakes spotted across three or more retrospectives.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly retrospectives recorded, each ending with one named change to how tests are run."
                cadence: rolling
              tasks:
                - "Book a recurring half-hour slot with whoever runs tests"
                - "Review this month's tests and agree one method change @recurring(monthly:23)"
                - "Note repeated mistakes at the top of the results log"
            - name: Waitlist list health and hygiene
              description: |-
                ## Purpose
                Bots, typos and disposable addresses inflate a waitlist and poison deliverability when launch day comes. Checking bounce rates, removing junk and suppressing people who never open keeps the number honest and the launch email out of spam folders.

                ## Milestones
                1. Bounced, disposable and obvious bot addresses removed.
                2. A bot check such as a honeypot field or challenge on the form.
                3. People who have not opened in six months moved to a separate segment.
                4. The honest list size recorded beside the raw signup count.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cleaned list with bounces and junk removed, a bot check on the form and the honest list size recorded each month."
                cadence: rolling
              tasks:
                - "Add a honeypot field or similar bot check to the form"
                - "Remove bounced and disposable addresses from the list @recurring(monthly:17)"
                - "Move six-month non-openers into a separate segment @recurring(quarterly)"
                - "Record the honest list size beside the raw count"
            - name: Competitor and adjacent landing page watch
              description: |-
                ## Purpose
                Rivals and adjacent tools run their own tests, and their pages show which promises, prices and calls to action they have settled on. A quarterly look at five relevant pages keeps your messaging sharp and warns you when someone starts promising your outcome.

                ## Milestones
                1. Five competitor or adjacent landing pages chosen and archived.
                2. Headline, price, call to action and proof points recorded for each.
                3. Changes since last quarter noted.
                4. One idea for your own next test drawn from each review.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarterly reviews of the same five pages, each recording headline, price and call to action changes and one test idea."
                cadence: rolling
              tasks:
                - "Choose five competitor or adjacent landing pages to follow"
                - "Save a dated copy of each page with a web archive tool"
                - "Compare each page with last quarter's copy and log changes @recurring(quarterly)"
                - "Add one resulting idea to the experiment backlog"
            - name: Pre-order and deposit ledger
              description: |-
                ## Purpose
                Once a page takes money, every payment is a promise you owe: a product, a date or a refund. A ledger of each pre-order, deposit and refund, reconciled with the payment processor, keeps you honest with customers and with the tax authority.

                ## Milestones
                1. A ledger with buyer, amount, date, promised delivery and refund status.
                2. Each entry matched to the payment processor's records.
                3. Refund requests handled within the time stated on the page.
                4. Pre-order money kept separate from operating spend until delivery or refund.

                ## Notes
                Ask an accountant how pre-order money should be treated in your country before you spend any of it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger reconciled with the payment processor every month, with every refund request closed within the promised window."
                cadence: rolling
              tasks:
                - "Create the ledger with buyer, amount, promise and refund columns"
                - "Handle any open refund requests @recurring(weekly:fri)"
                - "Reconcile the ledger with the payment processor @recurring(monthly:28)"
                - "Ask an accountant how pre-order money should be held"
            - name: Conversion copywriting for demand tests
              description: |-
                ## Purpose
                Weak copy can make real demand look absent, which kills good ideas for the wrong reason. Learning the basics of specific headlines, benefit-led bullets, objection handling and a single strong call to action means a failed test tells you about the market, not about your writing.

                ## Milestones
                1. One book or course on conversion copywriting finished.
                2. Ten high-converting landing pages annotated for structure.
                3. Your own page rewritten using what you learned.
                4. The rewrite reviewed by someone with copywriting experience.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One copywriting resource completed, ten pages annotated and your page rewritten and reviewed by an experienced copywriter."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one well-reviewed book or course on conversion copywriting"
                - "Annotate ten landing pages for headline, proof and call to action"
                - "Rewrite your page using the patterns you found"
                - "Ask an experienced copywriter to mark up the rewrite"
            - name: Reading funnel numbers without fooling yourself
              description: |-
                ## Purpose
                Thirty visitors and three signups is not a 10 percent conversion rate; it is noise. Learning sample size, confidence intervals and why peeking at results mid-test misleads you lets you tell a real difference from a lucky week.

                ## Milestones
                1. Sample size, confidence intervals and the peeking problem explained in your own words.
                2. A free sample size calculator bookmarked and used on a past test.
                3. A confidence interval worked out for your last conversion rate.
                4. A rule written down for the minimum sample before any comparison.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A confidence interval calculated for at least one real test and a minimum sample rule added to the thresholds document."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a beginner guide to sample size and confidence intervals"
                - "Calculate a confidence interval for your latest signup rate"
                - "Run a past test through a sample size calculator"
                - "Add a minimum sample rule to the thresholds document"
            - name: Paid social ads for smoke tests
              description: |-
                ## Purpose
                Social ad platforms can put a page in front of a narrow audience within hours, but default settings optimise for cheap clicks rather than the people you want. Learning audience targeting, conversion objectives and creative testing stops a test buying the wrong traffic.

                ## Milestones
                1. One platform's beginner course or help centre guide completed.
                2. A test campaign set up with a conversion objective and a narrow audience.
                3. Two creatives run side by side on the same audience.
                4. The difference between click-optimised and conversion-optimised results recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A small campaign run with a conversion objective and two creatives, with cost per signup recorded for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Complete one ad platform's free beginner course"
                - "Set up a campaign with a conversion objective and narrow audience"
                - "Run two creatives against the same audience for a week"
                - "Record cost per signup for each creative"
            - name: Search ads as an intent test
              description: |-
                ## Purpose
                People typing a problem into a search engine already want a solution, so search ads measure intent rather than curiosity. Learning keyword match types, negative keywords and how to read search volume tells you whether enough people are looking to support a business.

                ## Milestones
                1. Match types and negative keywords understood and explained in a note.
                2. A keyword list of twenty problem and solution phrases with estimated volumes.
                3. A small campaign run on the five strongest phrases.
                4. The search terms report reviewed and junk terms excluded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A search campaign run on five phrases, with the search terms report reviewed and cost per signup recorded by keyword."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the ad platform's guide to match types and negatives"
                - "Build a list of twenty problem and solution search phrases"
                - "Check estimated search volume for each phrase"
                - "Run a small campaign on the five strongest phrases"
                - "Exclude irrelevant terms from the search terms report"
            - name: Landing page layout essentials
              description: |-
                ## Purpose
                Layout decides whether visitors see the offer at all: a call to action below the fold on a phone, a slow hero image or a cluttered page can halve signups. Learning the basics of visual hierarchy, mobile layout and trust signals makes the page a fair test of the idea.

                ## Milestones
                1. The main principles of above-the-fold content and visual hierarchy noted.
                2. Your page reviewed on a phone against those principles.
                3. Trust signals such as a founder photo, logos or quotes added where honest.
                4. A heatmap or scroll map showing how far visitors get.

                ## Notes
                Only use logos, quotes and numbers you can stand behind. Invented social proof can breach consumer law and destroys trust if spotted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The page reviewed against written layout principles on a phone, with a scroll map showing where visitors stop."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read one guide on landing page hierarchy and mobile layout"
                - "Review your page on a phone against the guide"
                - "Add an honest trust signal such as a founder photo"
                - "Install a heatmap tool and check scroll depth after a week"
            - name: Smoke test case studies reading list
              description: |-
                ## Purpose
                Plenty of founders have published how they validated demand with a single page, from video explainers to pre-order campaigns, and how some of those tests misled them. Reading a handful of well-documented cases shows which signals held up after launch and which did not.

                ## Milestones
                1. A list of ten documented smoke test or pre-order stories.
                2. Each case summarised with the signal used and what happened after launch.
                3. Three lessons that apply to your test written down.
                4. One idea from the reading added to the experiment backlog.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten cases summarised with signal and outcome, and three applicable lessons recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create a reading queue from the reading queue template"
                - "List ten documented smoke test or pre-order stories"
                - "Summarise one case with its signal and post-launch outcome @recurring(monthly:5)"
                - "Write three lessons that apply to your test"
            - name: Fake door test ethics and honesty
              description: |-
                ## Purpose
                Fake doors show a feature or product that does not exist yet, and done carelessly they feel like a bait and switch. Learning how to disclose honestly on the next screen, never take payment for nothing and follow up with every person who clicked keeps the test fair and the brand intact.

                ## Milestones
                1. The difference between an honest fake door and a deceptive one written down.
                2. A disclosure message drafted for the screen after the click.
                3. A rule that no payment is taken without a clear refund promise.
                4. A follow-up plan for everyone who clicked.

                ## Notes
                Consumer protection law in many countries covers misleading offers. If in doubt about wording, ask a lawyer before going live.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written honesty policy for fake door tests, with an approved disclosure message and follow-up plan in place before the first one runs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read two accounts of fake door tests that drew complaints"
                - "Draft a disclosure message for the screen after the click"
                - "Write the rule on payments and refunds into the test policy"
                - "Plan a thank-you follow-up for everyone who clicks"
            - name: Headline A and B test on one traffic source
              description: |-
                ## Purpose
                The headline is the cheapest lever on a page and the one most likely to explain a weak result. Splitting the same traffic source between two headlines with nothing else changed shows whether the problem is the idea or the way it was described.

                ## Milestones
                1. Two headlines chosen from the variants, with nothing else on the page changed.
                2. A split test set up on a single traffic source.
                3. The minimum sample reached before the result is read.
                4. The winning headline kept and the result logged with its interval.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A split test that reached its minimum sample, with the result and confidence interval recorded and the winner live."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the two most different headline variants"
                - "Set up a split test on a single traffic source"
                - "Wait for the minimum sample before reading the result"
                - "Log the result with its interval and keep the winner"
            - name: Price on the page willingness to pay test
              description: |-
                ## Purpose
                Free signups say little about whether anyone will pay. Showing a real price on the page, and splitting traffic between two or three price points, measures how signups fall as price rises before you commit to a pricing model.

                ## Milestones
                1. Two or three price points chosen from interviews and comparable products.
                2. A version of the page for each price, identical otherwise.
                3. Signup rate recorded at each price after the minimum sample.
                4. A note on which price keeps the business viable and still converts.

                ## Notes
                This test reads demand at a price. Designing tiers, packaging and discounts with paying customers comes later, once you have them.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Signup rates at two or three price points recorded after the minimum sample, with a chosen launch price written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose two or three price points from interviews and rivals"
                - "Build an identical page version for each price"
                - "Split one traffic source evenly across the versions"
                - "Record signup rate at each price and choose a launch price"
            - name: Fake door button inside an existing product
              description: |-
                ## Purpose
                If you already have users, a button for the new feature or product inside the current one is the fastest smoke test there is. Counting how many people click, against how many saw it, measures interest from people who already trust you, with honest disclosure on the next screen.

                ## Milestones
                1. A button or menu item placed where the target users will see it.
                2. Impressions and clicks tracked as separate events.
                3. An honest message after the click offering a waitlist.
                4. Click rate and waitlist joins recorded against the threshold.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Impressions, clicks and waitlist joins recorded for the fake door after the minimum sample, compared with a threshold set in advance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose where in the product the target users will see the button"
                - "Track button impressions and clicks as separate events"
                - "Show an honest message and waitlist offer after the click"
                - "Compare the click rate with the threshold you set"
            - name: Waitlist to pre-order step-up
              description: |-
                ## Purpose
                An email costs nothing; a payment costs something, and the drop between the two is the most honest number a smoke test produces. Offering the existing waitlist a discounted pre-order, with a clear delivery window and refund promise, measures how much of the list is real demand.

                ## Milestones
                1. A pre-order offer with price, delivery window and refund terms written.
                2. A checkout set up with a payment processor in test and then live mode.
                3. The offer sent to the waitlist in two waves.
                4. The share of the list that paid recorded in the results log.

                ## Notes
                Only take pre-orders for something you are confident you can deliver, and state plainly what happens if you cannot.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-order offer sent to the whole waitlist, with the paid share recorded and every refund request honoured."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the pre-order price, delivery window and refund terms"
                - "Set up checkout and complete a test-mode payment"
                - "Send the offer to half the waitlist, then the other half"
                - "Record the share of the list that paid"
            - name: Refundable deposit reservation test
              description: |-
                ## Purpose
                When the full price is high or delivery is far off, a small refundable deposit is a middle rung between an email and a pre-order. It filters out casual interest while keeping the ask small, and the refund rate later shows how firm the intent was.

                ## Milestones
                1. A deposit amount chosen that is meaningful but easy to say yes to.
                2. Refund terms stated clearly on the page and at checkout.
                3. Deposits taken from the target segment for a fixed period.
                4. Deposit count and later refund rate recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A deposit test run for its fixed period, with deposit count and refund rate recorded against the threshold."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a deposit amount and check it with three signups"
                - "State the refund terms on the page and at checkout"
                - "Run the deposit offer for a fixed number of weeks"
                - "Record deposits and refund requests in the ledger"
            - name: Choosing traffic between ads, communities and outreach
              description: |-
                ## Purpose
                Each traffic source biases the result: ads bring strangers, communities bring enthusiasts, cold outreach brings people who were asked. Comparing cost, speed and bias for each before committing budget means the result reflects the market you will actually sell to.

                ## Milestones
                1. Ads, community posts and direct outreach compared on cost, speed and bias.
                2. The source closest to how you would really acquire customers identified.
                3. A primary source and a check source chosen.
                4. The reasoning written into the test plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary and a check traffic source chosen, with cost, speed and bias compared in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare ads, communities and outreach on cost, speed and bias"
                - "Name the source closest to how you would really sell"
                - "Choose a primary source and a smaller check source"
                - "Write the reasoning into the test plan"
            - name: Second page for an adjacent segment
              description: |-
                ## Purpose
                Weak results in one segment do not mean nobody wants the product; a neighbouring audience may feel the pain more. Running a second page with the same offer reworded for an adjacent segment shows where demand is strongest before you narrow down.

                ## Milestones
                1. An adjacent segment chosen with a reason it may feel the problem more.
                2. A duplicate page with headline and examples rewritten for that segment.
                3. Matched traffic and budget sent to both pages.
                4. Conversion compared between the two segments.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two segment pages run on matched traffic and budget, with conversion rates compared and a stronger segment named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name an adjacent segment and why it may need this more"
                - "Duplicate the page and rewrite it for that segment"
                - "Send matched traffic and budget to both pages"
                - "Compare conversion between the two pages"
            - name: Go, iterate or kill decision memo
              description: |-
                ## Purpose
                Tests only pay off when they change what you do next. A one-page memo comparing the result with the thresholds you set, stating plainly whether you will build, rerun with a change or stop, turns weeks of work into a decision the team can hold you to.

                ## Milestones
                1. The result set beside the pass, fail and grey-zone thresholds.
                2. Known weaknesses in the test listed honestly.
                3. A decision of go, iterate or kill written in one sentence.
                4. The memo shared with the team and any adviser who reviewed the bet.

                ## Notes
                If the result sits in the grey zone, the memo must say which single change the rerun will make. A rerun with no change is just hoping.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page memo stating the result against the thresholds and a go, iterate or kill decision, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the result beside the thresholds you set before launch"
                - "List the test's weaknesses honestly"
                - "Write the go, iterate or kill decision in one sentence"
                - "Share the memo with the team and the adviser who saw the bet"
            - name: Seven-day paid traffic sprint
              description: |-
                ## Purpose
                Short, intense bursts of paid traffic get a test to its minimum sample quickly, before your enthusiasm or the budget wanders. Planning the sprint like a small campaign, with creatives, audiences and a daily readout ready, means the seven days are spent reading results, not fixing set-up.

                ## Milestones
                1. Creatives, audiences and tagged links ready before day one.
                2. Seven consecutive days of spend within the daily cap.
                3. The minimum sample reached by the end of the week.
                4. A sprint summary added to the results log.

                ## Notes
                Start from the **Marketing campaign** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seven-day sprint completed within budget that reached the minimum sample, with a summary in the results log."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set up the sprint from the marketing campaign template"
                - "Prepare three creatives and two audiences before day one"
                - "Launch the sprint and hold the daily readout each morning"
                - "Write the sprint summary in the results log"
            - name: Community launch post for the page
              description: |-
                ## Purpose
                One well-judged post in a forum or group where the segment already gathers can bring hundreds of relevant visitors for free, and the comments are as useful as the signups. Reading each community's rules and writing a post that gives value first avoids being removed or resented.

                ## Milestones
                1. Three communities chosen where self-promotion is allowed or welcomed.
                2. Each community's rules read and moderators asked where needed.
                3. A post written that shares something useful before linking the page.
                4. Signups by community and the main comment themes recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Posts published in up to three communities within their rules, with signups by community and comment themes logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick three communities where the segment gathers"
                - "Read each community's rules on self-promotion"
                - "Write a post that gives something useful before the link"
                - "Log signups by community and the main comment themes"
            - name: Waitlist referral push week
              description: |-
                ## Purpose
                Referral mechanics, such as moving up the queue for each friend who joins, show whether early fans care enough to tell anyone. Running it for one focused week measures word-of-mouth pull, which matters more than raw list size.

                ## Milestones
                1. A referral link and simple reward set up for every signup.
                2. An email to the list explaining the reward, sent on day one.
                3. Referral signups tracked separately from direct ones.
                4. The share of signups who referred at least one person recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-week referral push run, with referral signups tracked separately and the referring share recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a waitlist tool or plug-in with referral links"
                - "Pick a reward that costs little, such as earlier access"
                - "Email the list about the referral reward on day one"
                - "Record what share of signups referred someone"
            - name: Live walkthrough session for the waitlist
              description: |-
                ## Purpose
                Inviting the waitlist to a thirty-minute live walkthrough of mock-ups or a clickable prototype shows who turns up, who asks to buy and which objections come up most. Attendance against invitations is a second, stronger signal of intent than the signup itself.

                ## Milestones
                1. A date chosen and the invitation sent to the whole list.
                2. A short walkthrough of mock-ups or a clickable prototype prepared.
                3. Attendance, questions and buying requests recorded.
                4. A replay and a pre-order or call link sent to everyone invited.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A live session held, with attendance as a share of invitations, the top three objections and any buying requests recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a date and send the invitation to the list"
                - "Prepare a fifteen-minute walkthrough of mock-ups"
                - "Record attendance, questions and buying requests"
                - "Send the replay with a pre-order or call link"
            - name: Smoke test readout with advisers
              description: |-
                ## Purpose
                Nobody judges a test result worse than the founder who ran it. Presenting the bet, the thresholds and the numbers to a co-founder, adviser or peer founder, and inviting them to attack the method, catches wishful reading before it turns into months of building.

                ## Milestones
                1. A short readout covering bet, thresholds, traffic, results and weaknesses.
                2. Two or three challengers invited, including one sceptic.
                3. Their challenges and suggestions recorded.
                4. The go, iterate or kill memo updated with anything that changed.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A readout held with at least two challengers, with their points recorded and the decision memo updated within a week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a five-slide readout from the results log"
                - "Invite two or three challengers, including a sceptic"
                - "Record challenges in a meeting notes page"
                - "Update the decision memo within a week"
            - name: Smoke testing around a day job
              description: |-
                ## Purpose
                Employed founders have only evenings and weekends, and a test that needs daily attention will fail on a busy week. Designing the test to run with a weekend set-up, scheduled ads and one weekly check makes it possible without risking your employment or your sleep.

                ## Milestones
                1. The employment contract checked for clauses on outside work and intellectual property.
                2. All set-up done in one weekend on your own equipment.
                3. Ads and emails scheduled so the test runs unattended in the week.
                4. One weekly check held at a fixed time.

                ## Notes
                Use your own laptop, accounts and time. Using an employer's equipment or hours can give them a claim on the idea.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A test run end to end on personal time and equipment, with contract clauses checked and a weekly check held every week."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Reread your employment contract for outside work clauses"
                - "Do all set-up in one weekend on your own laptop"
                - "Schedule ads and emails to run unattended"
                - "Hold the weekly test check at a fixed time @recurring(weekly:sat)"
            - name: B2B smoke test with a demo request page
              description: |-
                ## Purpose
                Business buyers rarely join waitlists, but they will book a call if the page speaks to a problem costing them money. Driving a defined list of job titles to a page that asks for a demo or a pilot measures demand in the form B2B sales really takes.

                ## Milestones
                1. A page with a demo or pilot request form asking for company and role.
                2. A target list of companies and job titles defined.
                3. Traffic from professional network ads or outbound messages to that list.
                4. Booked calls as a share of qualified visitors recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A demo request page run against a defined account list, with booked calls per qualified visitor recorded against the threshold."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rewrite the call to action as a demo or pilot request"
                - "Define the target company size and job titles"
                - "Send traffic from professional network ads or outbound messages"
                - "Record booked calls as a share of qualified visitors"
            - name: Hardware pre-order campaign page
              description: |-
                ## Purpose
                Physical products have long lead times and tooling costs, so proof of paid demand before committing to manufacture matters more than for software. A pre-order page with renders, a realistic ship date and honest risk wording tests whether the price and promise hold up.

                ## Milestones
                1. Renders or prototype photos that show the product honestly.
                2. A ship window and risks stated in plain words on the page.
                3. A pre-order or crowdfunding page live with a funding target.
                4. Paid orders recorded against the minimum batch the factory needs.

                ## Notes
                Never promise a ship date you have not checked with a manufacturer. Late hardware pre-orders are the most common source of angry backers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-order page live with honest renders, ship window and risks, with paid orders compared to the minimum production batch."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask a manufacturer for the minimum batch and lead time"
                - "Prepare honest renders or prototype photos"
                - "Write the ship window and risks plainly on the page"
                - "Compare paid orders with the minimum batch"
            - name: Consumer app waitlist and pre-registration
              description: |-
                ## Purpose
                Consumer apps live or die on cheap acquisition, so a smoke test should measure cost per signup as much as conversion. A waitlist page, plus pre-registration in an app store where that is offered, shows both interest and what each interested person costs.

                ## Milestones
                1. A waitlist page with mock-up screens of the app.
                2. App store pre-registration set up where the store allows it.
                3. Cost per signup recorded for each paid channel.
                4. Signups compared with the cost per user the business model can afford.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Cost per signup recorded for each channel and compared in writing with the affordable cost per user."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Mock up three app screens for the waitlist page"
                - "Check whether your target app store offers pre-registration"
                - "Record cost per signup for each paid channel"
                - "Compare it with the cost per user the model can afford"
            - name: No-code smoke test for non-technical founders
              description: |-
                ## Purpose
                Non-technical founders often wait for a developer before testing anything, losing months. A page builder, a form tool, an email tool and a payment link can run a complete smoke test, including pre-orders, without writing code or hiring anyone.

                ## Milestones
                1. A page builder, form tool, email tool and payment link chosen.
                2. The tools connected so a signup lands in the email list automatically.
                3. A full test signup and test payment completed end to end.
                4. The first test live without any custom code.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete smoke test running on no-code tools, with a test signup and payment passing end to end."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a page builder, form tool, email tool and payment link"
                - "Connect the form to the email list with a no-code automation"
                - "Complete a test signup and payment end to end"
                - "Write down every tool, login owner and monthly cost"
            - name: Student founder smoke test on a tiny budget
              description: |-
                ## Purpose
                Student founders have little cash but easy access to peers, societies and campus channels. A test built on free traffic, a free page builder and a budget under the cost of a textbook can still give a fair read, provided the audience is not just friends.

                ## Milestones
                1. A total budget set that you can afford to lose.
                2. Free traffic sources outside your friendship group identified.
                3. Signups from friends and classmates tagged and excluded from the verdict.
                4. The result logged with an honest note on audience bias.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A test run within a small fixed budget, with friend signups excluded and the verdict based on outside visitors only."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a budget you can afford to lose"
                - "List free channels that reach people outside your friends"
                - "Tag friend and classmate signups so they can be excluded"
                - "Log the result with a note on audience bias"
            - name: Three-concept comparison test
              description: |-
                ## Purpose
                Anyone juggling several ideas tends to test them one after another, months apart, against different audiences. Running three concept pages side by side on the same traffic, budget and offer type gives a fair comparison and a clear starting point.

                ## Milestones
                1. Three concepts written to the same page structure and call to action.
                2. Traffic split evenly from one source with one budget.
                3. Each concept's conversion and cost per signup recorded at the minimum sample.
                4. One concept chosen to go deeper, with the reason recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three concepts tested on matched traffic and budget, with conversion recorded for each and one chosen in writing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write three concepts to the same page structure"
                - "Split one traffic source evenly across the three pages"
                - "Record conversion and cost per signup for each"
                - "Choose one concept and write down why"
            - name: Manual fulfilment behind a pre-order page
              description: |-
                ## Purpose
                Taking a handful of real orders and fulfilling them by hand, before any product exists, tests whether people pay and come back. Delivering the outcome manually to five or ten buyers shows what they value and which parts later deserve automation.

                ## Milestones
                1. A cap on how many manual orders you will accept.
                2. Five to ten orders fulfilled by hand within the promised time.
                3. Time spent and cost per order recorded.
                4. Repeat purchases or renewals counted after the first delivery.

                ## Notes
                Keep this to the demand question: do they pay and come back. Deciding what the first product should include belongs to MVP scoping.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least five paid orders fulfilled by hand on time, with cost per order and repeat purchases recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set a cap on manual orders you will accept"
                - "Fulfil each order by hand within the promised time"
                - "Record hours and cost for every order"
                - "Count repeat purchases a month after delivery"
            - name: Waitlist to paid conversion tracking at launch
              description: |-
                ## Purpose
                The real test of a waitlist comes on launch day, when you learn how many signups actually pay. Tracking conversion by signup source and month shows which smoke test signals predicted buying, so future tests can be read with a known discount.

                ## Milestones
                1. Each waitlist address tagged with its source and signup month.
                2. Paid conversions at launch matched back to those tags.
                3. Conversion rate by source and cohort recorded.
                4. A rule of thumb for discounting future waitlist numbers written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Paid conversion by waitlist source and cohort recorded, with a written discount rule for reading future waitlists."
                cadence: rolling
              tasks:
                - "Check every waitlist address carries a source and month tag"
                - "Match launch payments back to waitlist tags"
                - "Update conversion by source and cohort @recurring(monthly:20)"
                - "Write a rule for discounting future waitlist numbers"
            - name: Bias audit of smoke test results
              description: |-
                ## Purpose
                Bot clicks, ad fraud, friends signing up to be kind and an audience setting that leaked can each inflate a result by more than the difference you are measuring. A structured audit of where the traffic and signups really came from protects the decision built on them.

                ## Milestones
                1. Traffic checked for bot patterns, odd locations and zero-second visits.
                2. Signups from friends, family and colleagues identified and excluded.
                3. Ad placements reviewed for low-quality apps and sites.
                4. An adjusted conversion rate recorded beside the raw one.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An audit note for each test showing raw and adjusted conversion, with the exclusions listed."
                cadence: rolling
              tasks:
                - "Check traffic for bot patterns and zero-second visits"
                - "Exclude friend, family and colleague signups"
                - "Review ad placement reports and block poor placements"
                - "Run the audit across all tests from the quarter @recurring(quarterly)"
            - name: Reusable smoke test kit
              description: |-
                ## Purpose
                Serial founders and studio teams test many ideas a year, and rebuilding the page, tracking and email set-up each time wastes days. A kit with a page template, tracking plan, consent wording, threshold sheet and readout format lets a new test go live in an afternoon.

                ## Milestones
                1. A page template with placeholders for headline, benefits and call to action.
                2. A tracking plan and tagged link format that work for any test.
                3. Standard consent, privacy and refund wording ready to adapt.
                4. A new test launched from the kit in under four hours.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented kit used to launch at least one new test in under four hours from start to live."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Save the best page so far as a reusable template"
                - "Write a one-page tracking plan any test can follow"
                - "Collect standard consent, privacy and refund wording"
                - "Review and refresh the whole kit @recurring(yearly)"
            - name: Intent ladder scoring across signals
              description: |-
                ## Purpose
                Experienced founders weigh signals differently: an email is cheap, a survey answer is cheaper still, a booked call or deposit costs the person something. Scoring each signup on a ladder of actions, from email to payment, turns a single list into a ranked view of who really wants the product.

                ## Milestones
                1. A ladder of signals defined, from email to payment, with a score for each.
                2. Every signup scored from the data already collected.
                3. The share of signups at each rung recorded.
                4. The ladder used as the main read in the next decision memo.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every signup scored on a defined intent ladder, with the share at each rung included in the next decision memo."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define five rungs from email to payment with a score each"
                - "Ask the agent to score each signup from the exported list"
                - "Record the share of signups at each rung"
                - "Use the ladder in the next decision memo"
---

# Landing Page Smoke Tests

This area is for founders who want proof that people will sign up, reserve or pay before a line of product code is written. It starts with the foundations (the riskiest assumption as a bet, pass and fail marks set in advance, a tracked page, honest consent and a fixed budget), then the routines that run a live test, the copy, ads and statistics skills behind a fair reading, the experiments that raise the bar from email to deposit, dated sprints and readouts, variants for day-job, B2B, hardware and no-code founders, and finally the specialist work of auditing results and reusing a test kit across ideas.

What repeats is a daily readout while a test is live, a weekly spend and signup-call rhythm, monthly backlog, nurture, list and ledger checks, a monthly retrospective and quarterly competitor and bias reviews. The **Metrics log**, **Marketing campaign**, **Reading queue** and **Meeting notes** templates pair with the results log, the paid sprint, the case study reading and the readout. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
