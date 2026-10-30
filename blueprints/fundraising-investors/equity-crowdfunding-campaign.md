---
id: fundraising-investors.equity-crowdfunding-campaign
name: Equity Crowdfunding Campaign
description: "A founder's route through an equity crowdfunding raise: the rules and platform, terms the crowd can buy, the pitch page and video, a private round, launch, the daily campaign rhythm, the close and life with many shareholders."
category: business
version: 1.0.0
tags: [fundraising-investors, equity-crowdfunding-campaign, founder, small-business, crowdfunding, retail-investors, community-investment]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - meeting-notes
    - content-pipeline
    - risk-register
    - marketing-campaign
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Equity Crowdfunding Campaign
          description: "Running an equity crowdfunding raise on a regulated platform, from pitch page and video to community outreach and closing."
          projects:
            - name: Deciding whether equity crowdfunding fits the business
              description: |-
                ## Purpose
                Equity crowdfunding suits companies with a story ordinary people understand, a customer base or community that already cares, and founders willing to spend ten to twelve weeks selling in public. It is a poor fit for a business that cannot share its numbers openly, needs one strategic investor more than a thousand small ones, or has no audience to bring to the page. Testing the fit before talking to any platform saves months and a public failure.

                ## Milestones
                1. The size of your own audience written down: customers, email subscribers, social followers and personal network.
                2. A side-by-side note comparing crowdfunding with angels, a loan and a grant for this raise.
                3. The public disclosure the raise would require listed, with anything you are not willing to publish flagged.
                4. A go or no-go decision recorded with the date and the three reasons behind it.

                ## Notes
                Most of the money in a successful campaign usually comes from people who already know the company. If your list is small, the first job is building it, not launching.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go or no-go decision on equity crowdfunding, with audience numbers and the alternatives compared, is shared with every co-founder."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count your customers, email subscribers and social followers in one table"
                - "List the alternatives to crowdfunding and what each would cost you"
                - "Note what you would have to publish about the business and who would see it"
                - "Record the go or no-go decision with three reasons"
            - name: Mapping the crowdfunding rules where you raise
              description: |-
                ## Purpose
                Each country regulates equity crowdfunding differently: who may run a platform, how much a company may raise in a year, how much each retail investor may put in, what must be filed and what you may say in public before launch. Examples include Regulation Crowdfunding in the United States, the European crowdfunding service provider regime and platforms authorised by the financial regulator in the United Kingdom. A one-page summary of your own regime, checked with a lawyer, stops expensive mistakes such as promoting the raise too early.

                ## Milestones
                1. The regime that applies to your company and your investors identified.
                2. Annual raise limits, investor limits and filing duties noted from the regulator's or platform's own guidance.
                3. The rules on testing the waters and pre-launch communication written in plain words.
                4. The one-page summary reviewed by a lawyer who works on crowdfunding offers.

                ## Notes
                Figures such as raise caps and investor limits change. Copy them from the regulator's current pages, note the date you checked, and never rely on a blog post.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated one-page summary of the crowdfunding rules that apply to this raise, reviewed by a lawyer, is filed with the campaign documents."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the regulator's current guidance page on equity crowdfunding"
                - "Write down the raise limit, investor limits and filing duties with the date checked"
                - "List what you may and may not say before the offer goes live"
                - "Send the summary to a crowdfunding lawyer for review"
                - "Recheck the rules for changes before planning any new raise @recurring(yearly)"
            - name: Shortlisting and choosing a crowdfunding platform
              description: |-
                ## Purpose
                Platforms differ in fees, investor base, sector strengths, how they hold shareholders, the due diligence they run and how much marketing help they give. The right one already has investors who back companies like yours, so its audience adds to yours rather than replacing it. Choosing on evidence, after speaking to founders who raised there, beats choosing on the slickest sales call.

                ## Milestones
                1. Three to five regulated platforms shortlisted that list companies in your sector and stage.
                2. Fees, shareholding structure, due diligence and marketing support compared in one table.
                3. At least two founders from each finalist platform spoken to about their campaign.
                4. A platform chosen and the engagement terms read in full before signing.

                ## Notes
                Start from the **Vendor** template. Ask each platform what share of a typical campaign comes from its own investors, and what happens to fees if you miss the target.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform is chosen from a written comparison of at least three, with founder references taken and its engagement terms reviewed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List platforms that have funded companies in your sector in the last two years"
                - "Compare fees, shareholding model and marketing support in one table"
                - "Ask two founders from each finalist how their campaign really went"
                - "Read the engagement letter in full before you sign it"
            - name: Setting the target, minimum and maximum raise
              description: |-
                ## Purpose
                Most platforms run all or nothing: miss the minimum and every pledge is returned. Founders who set the minimum at what they truly need, then let a funded campaign overfund towards a maximum, tend to reach the threshold early and ride the momentum that follows. The figures should come from the plan for the money, not from what a similar company raised.

                ## Milestones
                1. A use-of-funds list showing what the minimum raise pays for and for how many months.
                2. A minimum target set that the warm network and private round can plausibly cover in large part.
                3. A maximum set, with what the extra money would add.
                4. Both figures agreed with the platform and recorded with the reasoning.

                ## Notes
                Overfunding beyond the original target is common on some platforms, but plan the business around the minimum, not the hope.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A minimum and maximum raise, each tied to a written use of funds, are agreed with the platform and recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what the minimum raise must pay for and how long it lasts"
                - "Estimate how much the warm network could commit before launch"
                - "Set a maximum and write what the extra funds would add"
                - "Agree both figures with the platform account manager"
            - name: Pre-money valuation the crowd will accept
              description: |-
                ## Purpose
                Crowd investors compare valuations across dozens of campaigns on the same platform, and comment threads are quick to call out a number that looks stretched. Setting a valuation you can defend in public, with comparables and traction to point at, protects the raise and the next round, since a crowd price that later looks high makes a down round more likely. The valuation is a judgement for founders and advisers, not a figure to copy from a neighbour's page.

                ## Milestones
                1. Five to ten recent campaigns in your sector collected with their valuations and traction.
                2. A short valuation rationale written in language a retail investor understands.
                3. The figure discussed with an adviser and with the platform's team.
                4. A final pre-money valuation recorded with the share price it implies.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-money valuation and share price are recorded with a written rationale and a list of at least five comparable campaigns."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect valuations and traction from recent campaigns in your sector"
                - "Write a five-sentence rationale for the valuation you propose"
                - "Ask your adviser and the platform to challenge the number"
                - "Record the final valuation and the share price it gives"
            - name: Choosing nominee or direct shareholding for crowd investors
              description: |-
                ## Purpose
                Hundreds of small shareholders on the register can make later rounds, votes and an exit slow, so many platforms hold crowd investors' shares through a nominee that acts for them. Others put every investor on the register directly. Understanding which model your platform uses, and what it means for consents, information and future investors, avoids surprises when a venture fund later asks how the crowd is held.

                ## Milestones
                1. The platform's shareholding model and its nominee terms read and summarised.
                2. What crowd investors can vote on, and who signs for them, written down.
                3. The effect on future rounds and a sale discussed with your lawyer.
                4. The chosen structure noted in the cap table and the company's records.

                ## Notes
                Ask how the nominee handles drag-along and tag-along rights at an exit. Later investors almost always will.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The crowd shareholding structure is chosen, with its voting and consent effects summarised on one page and reviewed by your lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request the platform's nominee terms or direct register model in writing"
                - "Summarise what crowd investors can vote on and who signs for them"
                - "Ask your lawyer how the structure affects a later round or sale"
                - "Note the structure in the company's share records"
            - name: Share class and rights for crowd backers
              description: |-
                ## Purpose
                Crowd investors usually receive ordinary shares, sometimes without votes, while earlier angels may hold different rights, and the choice shapes control, pre-emption and how clean the cap table looks to the next investor. Agreeing the class and rights with a lawyer before drafting the pitch page means the page, the articles and the investment agreement all say the same thing.

                ## Milestones
                1. The share classes already in issue and their rights listed.
                2. The class offered to the crowd agreed, with voting, pre-emption and information rights stated.
                3. Any difference between crowd shares and earlier investors' shares explained in plain words for the pitch page.
                4. The lawyer's sign-off on the offered rights recorded.

                ## Notes
                Rights must be described accurately on the offer page. If they differ from earlier investors', say so plainly rather than waiting for the comments to find it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The share class offered to crowd investors and its rights are agreed with the lawyer and described in a plain-words paragraph ready for the pitch page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the share classes in issue and the rights each carries"
                - "Agree with your lawyer which class and rights the crowd receives"
                - "Write a plain-words paragraph describing those rights"
                - "File the lawyer's sign-off with the campaign documents"
            - name: Shareholder consents and articles ready for the crowd
              description: |-
                ## Purpose
                Before new shares can be issued to hundreds of people, existing shareholders may need to waive pre-emption rights, approve new share authority or amend the articles, and earlier investors may hold consent rights over any new round. Chasing signatures after launch puts the whole raise at risk, so this sits early in the plan with a hard date.

                ## Milestones
                1. Every consent, waiver and resolution the raise needs listed by your lawyer.
                2. Earlier investors briefed on the crowd raise before being asked to sign.
                3. All signatures collected and resolutions passed.
                4. Updated articles and company registry filings completed where required.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every consent, waiver and resolution the lawyer lists for the raise is signed and filed before the platform's approval deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your lawyer to list every consent the crowd raise needs"
                - "Brief earlier investors on the raise before sending any documents"
                - "Collect signatures on each waiver and resolution"
                - "Confirm the registry filings are made where required"
            - name: Campaign budget and cost of raising
              description: |-
                ## Purpose
                A crowd raise costs more than the platform's success fee: legal work, accounts preparation, video, photography, advertising, PR and the founders' time all come out before a penny arrives. Writing the full budget, with the share payable only on success marked, shows the true cost of the money and stops campaign spending outrunning the cash in the bank.

                ## Milestones
                1. Every expected cost listed, split into upfront and success-only.
                2. The total cost expressed as a share of the minimum raise.
                3. A spending cap agreed for paid advertising and outside help.
                4. Actual spend tracked against the budget through the campaign.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A campaign budget with upfront and success-only costs, a spending cap and the total as a share of the minimum raise is approved by the founders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every cost of the raise from legal fees to advertising"
                - "Mark which costs are paid only if the campaign succeeds"
                - "Agree a spending cap for ads and outside help"
                - "Compare actual campaign spend with the budget @recurring(monthly:12)"
            - name: Campaign team and roles for the raise
              description: |-
                ## Purpose
                A ten-week campaign needs someone answering investor questions every day, someone running email and social, someone owning compliance sign-off and a founder free to call the largest prospects. In a small business those may be two people and a friend, so naming owners and protecting the essentials of the day job before launch stops both the campaign and the company sagging at once.

                ## Milestones
                1. Each campaign job named with one owner and a backup.
                2. The hours each person can give per week written down honestly.
                3. Day-to-day business tasks handed over or paused for the campaign weeks.
                4. Outside help hired only for the gaps left.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page roles sheet names an owner and backup for every campaign job, with weekly hours and business handovers agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every campaign job from replying to questions to compliance sign-off"
                - "Name an owner and a backup for each job"
                - "Agree which business tasks pause during the campaign"
                - "Brief any freelancer only on the gaps that remain"
            - name: Pre-registration list and waitlist growth
              description: |-
                ## Purpose
                Platforms often let a company collect pre-registrations, and the size of that list in the weeks before launch is one of the best predictors of how fast the first days go. Growing it steadily, from customers, newsletters, events and the product itself, turns launch day from a hope into a count of people already waiting.

                ## Milestones
                1. A pre-registration page live with a short, approved description of the coming raise.
                2. A link to it placed in the email footer, website, receipts or app.
                3. A weekly count of new sign-ups recorded.
                4. A pre-launch list size agreed with the platform as the launch trigger.

                ## Notes
                What you may say on a pre-registration page depends on your regime's rules on testing the waters. Have the wording approved before it goes live.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-registration list is live and counted weekly, with a written launch threshold agreed with the platform."
                cadence: rolling
              tasks:
                - "Ask the platform how its pre-registration page works"
                - "Place the sign-up link in your email footer, website and receipts"
                - "Ask customers in person or by email to register their interest"
                - "Record the week's new pre-registrations @recurring(weekly:sun)"
            - name: Campaign dashboard of pledges and sources
              description: |-
                ## Purpose
                During a live campaign the numbers move by the hour, and founders who watch only the total miss what is working. A dashboard showing pledges by day, by source and by ticket size, beside page views and pre-registrations converted, shows which emails, posts and calls bring money and where to put the next day's effort.

                ## Milestones
                1. A dashboard with daily totals, investor count, average ticket and source.
                2. Tracking links set for each email, social channel and partner.
                3. The platform's export or admin view checked against the dashboard.
                4. A short daily note of what moved the numbers.

                ## Notes
                Start from the **Metrics log** template. Keep it to one screen; a dashboard nobody reads in the morning is decoration.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard updated every campaign day shows pledges by source and ticket size, with a one-line note on what moved the numbers."
                cadence: rolling
              tasks:
                - "Set up the dashboard from the metrics log template"
                - "Create a tracking link for each email list and social channel"
                - "Check the dashboard total against the platform's admin view"
                - "Update the dashboard with yesterday's pledges by source @recurring(daily)"
            - name: Investor questions and comments response rota
              description: |-
                ## Purpose
                Public questions on the pitch page are read by every prospective investor, and an unanswered one looks like something to hide. A rota that guarantees a considered reply within a day, with difficult questions checked against the offer documents before posting, turns the comments section into the most persuasive part of the campaign.

                ## Milestones
                1. A named person on duty for questions each day, with a backup.
                2. A target reply time agreed by the team.
                3. A bank of approved answers built from the first questions.
                4. Answers that touch financial claims checked against the offer documents.

                ## Notes
                Never answer with a figure, forecast or promise that is not in the approved offer documents. If the honest answer is not yet known, say when it will be.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every public question on the pitch page receives a reply within one working day, checked against the offer documents where it touches numbers."
                cadence: rolling
              tasks:
                - "Agree who answers questions on each day of the campaign"
                - "Start an approved answers document from the first ten questions"
                - "Check any reply that mentions figures against the offer documents"
                - "Reply to every new question on the pitch page @recurring(daily)"
            - name: Weekly campaign stand-up
              description: |-
                ## Purpose
                Ten weeks is long enough for effort to drift, so a fixed thirty-minute meeting each Monday keeps the team on the numbers, the week's planned content and the prospects who need a call. Short notes from each stand-up also become the raw material for the retrospective.

                ## Milestones
                1. A thirty-minute stand-up in every team member's calendar.
                2. A fixed agenda: last week's numbers, this week's content, top prospects, blockers.
                3. Notes saved after each meeting with owners and dates.
                4. Actions from the previous week checked at the start of each meeting.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stand-up is held every campaign week, with notes recording the numbers, actions and owners."
                cadence: rolling
              tasks:
                - "Book a thirty-minute Monday slot with the whole campaign team"
                - "Write the four-item agenda at the top of the notes page"
                - "Run the weekly campaign stand-up and save the notes @recurring(weekly:mon)"
                - "Check last week's actions before anything else"
            - name: Financial promotion sign-off routine
              description: |-
                ## Purpose
                In most regimes every message that invites people to invest, from a social post to a podcast mention, counts as a regulated promotion and must be fair, clear and approved, usually by the platform. A routine that batches the week's content for approval stops a well-meant post from breaching the rules or contradicting the offer documents.

                ## Milestones
                1. The platform's promotion rules and approval process written into a one-page checklist.
                2. A single queue where every planned investor message waits for sign-off.
                3. Required risk wording saved as copy-ready snippets.
                4. A record of each approval kept with the date and approver.

                ## Notes
                Founders' personal accounts count too. Brief everyone in the team, including advisers who post about the raise.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every investor-facing message during the campaign has a dated approval record before it is published."
                cadence: rolling
              tasks:
                - "Write the platform's promotion rules into a one-page checklist"
                - "Save the required risk wording as snippets ready to paste"
                - "Tell team members and advisers that their posts need approval too"
                - "Send the week's planned posts and emails for approval @recurring(weekly:wed)"
            - name: Weekly campaign email to the investor list
              description: |-
                ## Purpose
                Email still converts better than social posts for most crowd raises, because the people on the list chose to hear from you. One well-made email a week during the campaign, with a single piece of news and a clear link, keeps interest warm without wearing the list out.

                ## Milestones
                1. An email plan for every campaign week agreed, each with one story.
                2. Segments set for pre-registered contacts, existing investors, customers and the wider list.
                3. Open and click rates recorded with the pledges each email drove.
                4. Unsubscribe rate checked weekly, with frequency eased if it climbs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One approved email goes to the investor list every campaign week, with clicks and resulting pledges recorded."
                cadence: rolling
              tasks:
                - "Plan one story per campaign week for the investor email"
                - "Split the list into pre-registered contacts, customers and everyone else"
                - "Send the weekly campaign email once it is approved @recurring(weekly:thu)"
                - "Record clicks and pledges from each email in the dashboard"
            - name: Social and community content calendar for the raise
              description: |-
                ## Purpose
                Many crowd investors need several touches before they commit: a founder video, a customer story, a tour of the workshop, a milestone reached during the campaign. A calendar planned two weeks ahead, with each piece approved before it is due, keeps the feed full on the days when the team is busiest answering questions.

                ## Milestones
                1. Content themes chosen for each campaign week.
                2. Two weeks of posts drafted and approved ahead of time.
                3. Owners named for filming, writing and posting.
                4. Engagement on each post recorded beside the pledges it drove.

                ## Notes
                Start from the **Content pipeline** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A content calendar holds at least two weeks of approved posts at every point of the campaign."
                cadence: rolling
              tasks:
                - "Set up the calendar from the content pipeline template"
                - "Choose a theme for each week of the campaign"
                - "Draft and queue the next fortnight of posts for approval @recurring(weekly:fri)"
                - "Note which posts drove clicks to the pitch page"
            - name: Larger-ticket prospect pipeline
              description: |-
                ## Purpose
                Often a handful of people investing five or ten times the average ticket decide whether a campaign reaches its minimum. Tracking them separately, from the angel in your network to the supplier who loves the brand, with a named founder owning each conversation, makes sure none of them is left waiting for a call that never comes.

                ## Milestones
                1. A list of prospects who might invest well above the average ticket.
                2. An owner and next step against every name.
                3. Each prospect offered a call or meeting before launch.
                4. Commitments and soft indications recorded and checked weekly.

                ## Notes
                Calls must stay within what the offer documents say. Point prospects to the pitch page to invest rather than taking money any other way.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every larger-ticket prospect has an owner, a dated next step and a recorded outcome before the campaign closes."
                cadence: rolling
              tasks:
                - "List people who might invest well above the average ticket"
                - "Assign a founder and a next step to each name"
                - "Offer each prospect a call before the public launch"
                - "Follow up every open larger-ticket conversation @recurring(weekly:tue)"
            - name: Updates to crowd shareholders after the raise
              description: |-
                ## Purpose
                Hundreds of new shareholders expect to hear how their money is being used, and those who hear nothing become the loudest critics when the next round comes. A short update through the platform every quarter, with the numbers promised on the pitch page, keeps the crowd as advocates and makes a follow-on raise far easier.

                ## Milestones
                1. A quarterly update format with headline numbers, use-of-funds progress, setbacks and asks.
                2. Updates posted through the platform or the shareholder email list.
                3. Questions from shareholders answered within a week.
                4. Four quarterly updates sent in the first year after the raise.

                ## Notes
                Report bad quarters as plainly as good ones. Crowd shareholders forgive setbacks far more readily than silence. Keep the format consistent with any updates sent to your other investors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly updates are sent to crowd shareholders in the year after the raise, each reporting progress on the use of funds."
                cadence: rolling
              tasks:
                - "Agree the quarterly update format with your co-founders"
                - "Write and send the quarterly crowd shareholder update @recurring(quarterly)"
                - "Post a short news item on the platform's company page @recurring(monthly:23)"
                - "Answer shareholder questions within a week of receiving them"
            - name: Ongoing reporting duties after a crowd raise
              description: |-
                ## Purpose
                Some regimes require crowdfunded companies to file annual reports or financial statements and publish them for investors until certain conditions end the duty, and platforms and nominees have their own reporting requests. Writing every duty into a calendar the day the raise closes avoids missed filings that can bar the company from raising this way again.

                ## Milestones
                1. Every post-raise reporting duty listed from the regulator, platform and nominee agreement.
                2. Each duty given a date, an owner and the accountant or lawyer involved.
                3. The first annual report or statement delivered on time.
                4. The conditions that end each duty written down.

                ## Notes
                Ask your accountant and lawyer to confirm the list. Duties and deadlines differ by country and by the amount raised.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reporting calendar lists every post-raise duty with dates and owners, and the first year's filings are made on time."
                cadence: cyclic
              tasks:
                - "List the reporting duties set by the regulator, platform and nominee"
                - "Put each duty in the calendar with an owner"
                - "Check upcoming reporting deadlines with the accountant @recurring(monthly:20)"
                - "Deliver the annual report to the regulator and investors @recurring(yearly)"
            - name: How crowd investors decide to invest
              description: |-
                ## Purpose
                Retail investors on a platform rarely read the whole offer; they skim the video, the headline numbers, the founding team and the comments, and many invest a small amount because they use the product. Learning what moves them, from published platform research and conversations with people who have invested, shapes every later choice on page, video and outreach.

                ## Milestones
                1. Platform research or reports on investor behaviour read and summarised.
                2. Five people who have invested through crowdfunding interviewed about why.
                3. The three things that most influence your likely investors written down.
                4. Those three things checked against the draft pitch page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on what drives your likely crowd investors, based on reading and at least five interviews, is shared with the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the platform's published guides or reports on investor behaviour"
                - "Interview five people who have invested through crowdfunding"
                - "Write down the three things that most sway your likely investors"
                - "Compare those three things with the draft pitch page"
            - name: Studying funded and failed campaigns
              description: |-
                ## Purpose
                Every platform keeps a public archive of campaigns, including those that missed their target, and the patterns repeat: a strong first forty-eight hours, an honest valuation, a founder visible in the comments. Studying ten closely, three of them failures, gives a calibrated picture of what your own campaign should look like week by week.

                ## Milestones
                1. Ten campaigns in your sector or size band chosen, at least three of which missed.
                2. For each, the first-week total, final total, investor count and valuation noted.
                3. Common traits of the funded and the failed listed side by side.
                4. Three lessons written into the campaign plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of ten campaigns, three of them unsuccessful, is complete and three lessons are written into the campaign plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose ten past campaigns, three of which missed their target"
                - "Note each campaign's first-week total, final total and investor count"
                - "List what the funded and failed campaigns did differently"
                - "Read one newly closed campaign in your sector on the platform @recurring(monthly:9)"
            - name: Writing the pitch page story
              description: |-
                ## Purpose
                The pitch page is the offer: investors read it on a phone, often in a few minutes, and the platform checks every claim on it. A page that leads with the problem and the customer, shows traction with evidence, explains the use of funds and states the risks honestly will outperform one stuffed with superlatives, and it passes due diligence faster.

                ## Milestones
                1. A page outline agreed in the platform's template and section order.
                2. A first draft written with every factual claim linked to a source document.
                3. The page read by three people outside the company on their phones.
                4. A final version submitted for platform review.

                ## Notes
                Keep a claims log beside the draft listing the evidence for each statement. The platform's due diligence team will ask for most of it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pitch page draft with a claims log evidencing every factual statement is submitted to the platform for review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Download the platform's pitch page template and section order"
                - "Write the first draft with a claims log beside it"
                - "Ask the agent to rewrite the hardest section for a reader on a phone"
                - "Have three outsiders read the draft on their phones and note confusion"
            - name: Risk warnings and key facts written honestly
              description: |-
                ## Purpose
                Investors in early-stage companies can lose everything, may wait years for any return and usually cannot sell their shares easily, and the offer must say so clearly alongside the risks specific to your business. Writing those specific risks yourself, rather than pasting generic ones, builds trust in the comments and protects the founders if things go wrong later.

                ## Milestones
                1. The platform's required risk statements included word for word.
                2. Five to ten risks specific to this business written in plain language.
                3. Each risk paired with what the company is doing about it.
                4. The risk section reviewed by your lawyer and the platform.

                ## Notes
                Start from the **Risk register** template. Keep the risks current: if something material changes during the campaign, the platform must be told and the page updated.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The offer's risk section includes the platform's required wording and at least five business-specific risks, reviewed by the lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy the platform's required risk wording into the draft"
                - "List the risks specific to this business in the risk register"
                - "Pair each risk with what the company is doing about it"
                - "Review the risk list against current facts and report changes @recurring(monthly:16)"
            - name: Producing the campaign video
              description: |-
                ## Purpose
                For many investors the video is the pitch: two to three minutes in which they decide whether they trust the founders. A clear script, real customers and the product in use matter far more than drone shots, and the video must make no claim that is not on the approved page.

                ## Milestones
                1. A script of under three minutes approved by the founders and the platform.
                2. A producer or crew chosen against a fixed budget.
                3. Filming completed with founders, product and at least one customer.
                4. The final cut approved and captioned for silent viewing.

                ## Notes
                Start from the **Vendor** template if hiring a producer. Most viewers watch on a phone with the sound off, so captions are not optional.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A captioned video under three minutes, approved by the platform, is uploaded to the pitch page before launch."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write a script of under three minutes around one customer story"
                - "Get quotes from two or three producers within the budget"
                - "Book filming days with the founders and a customer"
                - "Add captions and send the final cut for platform approval"
            - name: Handling hard questions in public
              description: |-
                ## Purpose
                Comment threads attract sharp questions on valuation, competition, the exit and what the founders pay themselves, and the way they are answered is watched by everyone deciding whether to invest. Practising answers to the twenty hardest questions before launch means calm, factual replies instead of defensive ones at eleven at night.

                ## Milestones
                1. Twenty hard questions collected from past campaigns and friendly critics.
                2. A draft answer for each, checked against the offer documents.
                3. A practice session held where a colleague fires the questions live.
                4. A rule agreed with the platform for handling hostile or misleading comments.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written answers to twenty hard questions, checked against the offer documents, are rehearsed at least once before launch."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect twenty hard questions from past campaign comment threads"
                - "Draft an answer to each and check it against the offer"
                - "Run a live practice session with a colleague asking the questions"
                - "Agree with the platform how to handle hostile or misleading comments"
            - name: Reading platform analytics and the conversion funnel
              description: |-
                ## Purpose
                Behind the total, platforms show page views, followers, pledges started and pledges completed, and the gap between started and completed often reveals a problem with the investor checks or payment step rather than the pitch. Knowing how to read the funnel lets the team fix the right thing, whether that is the headline, the video or a reminder to people who stalled.

                ## Milestones
                1. The platform's analytics and exports walked through with the account manager.
                2. A funnel from page view to completed investment measured for the first week.
                3. The weakest step identified and one change tested.
                4. A follow-up message to stalled investors agreed with the platform.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A weekly funnel from page view to completed investment is recorded, with at least one change tested on the weakest step."
                cadence: rolling
              tasks:
                - "Ask the account manager to walk you through the analytics"
                - "Measure the first week's funnel from view to completed investment"
                - "Test one change on the weakest step of the funnel"
                - "Review the funnel from page view to completed pledge @recurring(weekly:sat)"
            - name: Investor perks and rewards decision
              description: |-
                ## Purpose
                Some campaigns offer investors discounts, products or experiences by ticket size, which can lift small-ticket numbers for consumer brands but adds cost, delivery work and rules about how perks are described. Deciding deliberately, with the cost per investor worked out, avoids promising perks that eat into the money raised.

                ## Milestones
                1. The platform's rules on investor perks read.
                2. Perk tiers costed per investor and in total at the maximum raise.
                3. A decision on perks or no perks recorded with the reason.
                4. Delivery of any perks assigned an owner and a date.

                ## Notes
                Perks should never be the reason to invest. Keep them modest and make sure the offer page presents the shares, not the gifts, as the investment.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision on investor perks exists, with tiers costed in total at the maximum raise and a delivery owner named if perks are offered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the platform's rules on offering investor perks"
                - "Cost each perk tier per investor and at the maximum raise"
                - "Record the decision on perks with the reason"
                - "Assign an owner and a date for delivering any perks"
            - name: Minimum investment and ticket sizes
              description: |-
                ## Purpose
                A low minimum invites customers and fans to own a piece of the company but brings hundreds of tiny holdings, while a high one keeps the register shorter but shuts out the community that makes crowdfunding work. Looking at the likely spread of tickets, platform norms and the admin each shareholder brings settles the minimum on reasons rather than habit.

                ## Milestones
                1. Platform norms for minimum investment noted.
                2. The likely spread of tickets estimated from the pre-registration data.
                3. The admin and nominee cost per shareholder checked.
                4. A minimum investment agreed and recorded with the platform.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A minimum investment amount is agreed with the platform and recorded with the reasoning and the expected ticket spread."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the minimum investment typical on your platform"
                - "Estimate the spread of ticket sizes from pre-registrations"
                - "Ask the platform what each shareholder costs to administer"
                - "Record the agreed minimum investment and why"
            - name: Private round to the warm network before launch
              description: |-
                ## Purpose
                Many platforms recommend opening the offer privately to the pre-registered list, customers and existing investors before it goes public, aiming to show a meaningful share of the target already committed on day one. Strangers browsing the platform back campaigns that already look likely to succeed, so this phase often decides the outcome.

                ## Milestones
                1. A private phase start date and length agreed with the platform.
                2. A target share of the minimum to reach privately set.
                3. Personal invitations sent to every warm contact and larger-ticket prospect.
                4. The private target reached, or the public launch date moved.

                ## Notes
                If the private phase stalls well short of its target, delaying the public launch is usually wiser than going live with a thin total.
              priority: high
              deadlineOffsetDays: 80
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The private phase reaches its agreed share of the minimum target before the public launch, or the launch is formally postponed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the private phase dates and target with the platform"
                - "Write personal invitations for warm contacts and big prospects"
                - "Call every larger-ticket prospect in the first three days"
                - "Decide by the agreed date whether to launch or postpone"
            - name: Securing a lead or anchor investor
              description: |-
                ## Purpose
                One recognised angel, fund or industry figure investing a significant amount at the same price tells crowd investors that someone experienced has done the homework. Finding that anchor before launch, and agreeing how their name may appear on the page, can change how the whole campaign is received.

                ## Milestones
                1. Five to ten potential anchors listed with the reason each might invest.
                2. Approaches made with a short summary and an offer to meet.
                3. One anchor committed on the same terms as the crowd.
                4. Written permission recorded for how the anchor's name and any quote appear.

                ## Notes
                Be wary of anchors who want better terms than the crowd. Any difference must be disclosed, and it unsettles investors who notice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An anchor investor's commitment on crowd terms, and their written permission to be named, are in hand before the public launch."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List five to ten people or funds who could anchor the raise"
                - "Send each a short summary and an offer to meet"
                - "Confirm the anchor invests on the same terms as the crowd"
                - "Get written permission for how their name appears"
            - name: Paid advertising test for investor acquisition
              description: |-
                ## Purpose
                Paid ads can bring new investors to a campaign, but they are subject to the same promotion rules as everything else and the cost per completed investment can exceed the average ticket. A small, capped test in the first week, measured on completed investments rather than clicks, shows whether ads deserve more of the budget.

                ## Milestones
                1. The promotion rules and platform guidance for paid ads checked.
                2. A test budget and a maximum cost per completed investment set.
                3. Two or three approved ad variants run for one week.
                4. A decision to scale, change or stop ads recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A capped one-week ad test is measured on cost per completed investment and a scale, change or stop decision is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check what the platform allows in paid investor ads"
                - "Set a test budget and a maximum cost per investment"
                - "Run two approved ad variants for one week"
                - "Record the decision to scale, change or stop the ads"
            - name: Press and partner plan for the launch
              description: |-
                ## Purpose
                Local press, trade titles, podcasts and partner newsletters reach people who would never browse the platform, and a crowd raise by a known local or consumer brand is a story editors will run. Planning the outreach six weeks ahead, with approved wording and a launch-day embargo, means coverage lands while the offer is open.

                ## Milestones
                1. A list of twenty outlets, newsletters and partners with a contact for each.
                2. A press release and partner blurb approved under the promotion rules.
                3. Briefings or interviews booked for launch week.
                4. Coverage logged with the pledges each piece drove.

                ## Notes
                Start from the **Marketing campaign** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Twenty outlets and partners are approached with approved materials, and launch-week coverage is logged against the pledges it drove."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List twenty outlets, newsletters and partners with a contact"
                - "Ask the agent to draft a press release for platform approval"
                - "Book briefings or interviews for launch week"
                - "Log each piece of coverage and the pledges that followed"
            - name: Extending, closing early or overfunding
              description: |-
                ## Purpose
                Partway through, a campaign may hit its maximum early, crawl towards its minimum with days left, or sit comfortably above target with appetite for more. Agreeing in advance with the platform what triggers an extension, an early close or a higher maximum means the decision is made on numbers, not nerves, in the final week.

                ## Milestones
                1. The platform's rules on extensions, early closes and overfunding written down.
                2. Triggers agreed for each option based on the total and days remaining.
                3. The effect of each option on committed investors and the timeline understood.
                4. The decision taken against the triggers and announced to investors.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written triggers for extension, early close and overfunding are agreed with the platform before launch and applied in the final week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the platform how extensions, early closes and overfunding work"
                - "Write the trigger for each option against total and days left"
                - "Note how each option affects investors already committed"
                - "Apply the triggers and tell investors the decision"
            - name: Platform due diligence and offer approval
              description: |-
                ## Purpose
                Before a campaign goes live the platform checks the company, its founders and every claim on the page, often asking for accounts, contracts, IP records and evidence for each traction figure. Preparing the evidence pack before submission, rather than hunting for it under pressure, keeps the launch date intact.

                ## Milestones
                1. The platform's due diligence checklist and timeline received.
                2. Evidence collected for each claim in the pitch page's claims log.
                3. All founder and director checks completed.
                4. Written approval of the offer received from the platform.

                ## Notes
                This is the platform's check, not a substitute for your own advisers. Keep the evidence pack, as it doubles as the start of a data room for later investors.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The platform's written approval of the offer is received, with every due diligence request answered by the agreed date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the platform for its due diligence checklist and timeline"
                - "Match each pitch page claim to its evidence document"
                - "Complete the founder and director checks the platform needs"
                - "Answer every due diligence query within two working days"
            - name: Public launch day
              description: |-
                ## Purpose
                The first forty-eight hours set the tone of the campaign, because platform investors browse what is trending and a rising total pulls in more. A launch day planned to the hour, with the private round total visible, emails ready, founders free of other work and the team watching the comments, gives the campaign its best start.

                ## Milestones
                1. An hour-by-hour plan for launch day with owners.
                2. Launch emails, posts and partner messages approved and scheduled.
                3. Founders' calendars cleared for the first two days.
                4. The first forty-eight hours' total and investor count recorded.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The offer goes live on the planned date with every launch message approved and the first forty-eight hours' results recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the hour-by-hour launch day plan with owners"
                - "Schedule the approved launch emails and posts"
                - "Clear the founders' calendars for the first two days"
                - "Record the forty-eight hour total and investor count"
            - name: Live investor Q&A session
              description: |-
                ## Purpose
                Undecided investors often want to hear the founders answer questions live before committing. A short online session, ten minutes of presentation and forty of questions, held mid-campaign and recorded for the page, tends to produce a visible bump in pledges and a stock of answers for the comments.

                ## Milestones
                1. A date, video platform and moderator agreed.
                2. The session promoted with approved wording to the list and followers.
                3. The session held, recorded and posted to the pitch page.
                4. Pledges in the following forty-eight hours compared with the days before.

                ## Notes
                Have the platform confirm what may be said live. Anything new and material that comes up must also go on the pitch page.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A recorded live Q&A is held mid-campaign and posted to the page, with pledges before and after compared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a mid-campaign date and a moderator for the session"
                - "Promote the session with wording approved by the platform"
                - "Run, record and post the session on the pitch page"
                - "Compare pledges in the two days before and after"
            - name: Mid-campaign slump recovery plan
              description: |-
                ## Purpose
                Almost every campaign slows after the launch rush and before the closing push, and the slump is where teams lose heart and stop posting. Preparing news to release in the middle weeks, such as a new customer, a milestone or an anchor announcement, and a list of people still to ask, keeps the total moving.

                ## Milestones
                1. Three pieces of genuine news held back for the middle weeks.
                2. A list of contacts who followed the campaign but did not invest.
                3. A rule for when the slump plan starts, based on daily pledges.
                4. The daily pledge rate back above the trigger within a week of starting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three pieces of news and a list of undecided contacts are ready before launch, and the plan runs when daily pledges fall below the trigger."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Hold back three pieces of real news for the middle weeks"
                - "List people who followed the campaign but have not invested"
                - "Set the daily pledge level that starts the slump plan"
                - "Send personal messages to undecided followers once it starts"
            - name: Final seventy-two hours push
              description: |-
                ## Purpose
                The last days of a campaign often bring as many pledges as the first, as the deadline works on the undecided. A planned closing push, with countdown messages, a last founder video, personal calls to followers who have not invested and the team on duty for questions, captures that surge.

                ## Milestones
                1. Countdown emails and posts approved for the last three days.
                2. A short closing video from the founders recorded.
                3. Personal follow-ups made to every warm contact who has not invested.
                4. The final total, investor count and close time recorded.

                ## Notes
                Remind investors of any cancellation window the platform's rules give them, and avoid any pressure tactics the promotion rules forbid.
              priority: medium
              deadlineOffsetDays: 155
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The closing push runs as planned over the final seventy-two hours and the final total and investor count are recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Approve the countdown emails and posts for the final three days"
                - "Record a short closing video from the founders"
                - "Call or message every warm contact who has not yet invested"
                - "Record the final total, investor count and close time"
            - name: Cooling-off, close and release of funds
              description: |-
                ## Purpose
                After the clock stops, investors may still have a cancellation or cooling-off right, the platform runs its final checks, and money moves from the escrow or client account to the company only once conditions are met. Knowing the steps and dates, and what the company must sign and issue, avoids the awkward gap where the business has spent money it does not yet hold.

                ## Milestones
                1. The platform's post-close steps and expected dates written down.
                2. Cancellations during any cooling-off period recorded and the final total confirmed.
                3. Share issue documents signed and the register or nominee records updated.
                4. Funds received in the company's bank account and reconciled to the platform statement.

                ## Notes
                Do not commit spending against the raise until the money is in the company's account.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Funds are received and reconciled to the platform statement, with shares issued and records updated, by the date the platform gave."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the platform for the post-close timeline in writing"
                - "Record any cancellations and confirm the final total"
                - "Sign the share issue documents and update the register"
                - "Reconcile the funds received to the platform statement"
            - name: First crowd shareholder gathering
              description: |-
                ## Purpose
                Crowd shareholders are often customers who would gladly bring friends, try new products and tell others about the company, if asked. An open evening, a site tour or an online session in the first year turns a list of investors into a community and gives the founders direct feedback from the people who backed them.

                ## Milestones
                1. A format and date chosen that suit where shareholders live.
                2. Invitations sent through the platform or nominee.
                3. The event held with a short update and time for questions.
                4. Three suggestions from shareholders recorded and answered.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shareholder gathering is held within the first year after the raise and at least three shareholder suggestions are recorded with replies."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose an in-person or online format based on where shareholders live"
                - "Send invitations through the platform or nominee"
                - "Prepare a ten-minute update and an open question session"
                - "Hold a shareholder gathering each year after the raise @recurring(yearly)"
            - name: Customer-owned raise for a consumer brand
              description: |-
                ## Purpose
                Breweries, restaurant groups, food brands and shops with loyal customers can raise much of their target from the people who already buy from them, and those customers become ambassadors once they own shares. The campaign leans on the till, the packaging, the newsletter and events in the venue, and the same promotion rules apply in person as online.

                ## Milestones
                1. Every customer touchpoint listed where the raise could be mentioned within the rules.
                2. Staff briefed on what they may and may not say about the investment.
                3. In-venue or packaging messages approved and in place.
                4. The share of investors who are existing customers measured at close.

                ## Notes
                Staff at the counter must not give investment advice. A short approved card pointing to the pitch page is safer than a conversation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Approved raise messages are in place at every customer touchpoint and staff are briefed, with the share of customer investors measured at close."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every place customers meet the brand, in venue and online"
                - "Brief staff on what they may say about the raise"
                - "Place approved cards or packaging messages pointing to the page"
                - "Count how many investors were existing customers at close"
            - name: Local business raising from its neighbourhood
              description: |-
                ## Purpose
                Small businesses rooted in one town, such as a bakery, gym, bookshop or workshop, can find enough investors within a few miles if they show how the money keeps the business local and growing. Smaller targets, face-to-face events and local partners matter more here than national press, and the owner's own reputation does much of the selling.

                ## Milestones
                1. A realistic local target set from the size of the customer and supporter base.
                2. Two or three in-person information events planned with approved content.
                3. Local partners such as business groups and community newsletters approached.
                4. Investors' locations checked at close to see how local the raise was.

                ## Notes
                Check whether a community share or cooperative model would suit the business better than a company equity raise. A local adviser or small business support body can explain the options.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two local information events are held and local partners approached, with the local share of investors measured at close."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Estimate how many local customers and supporters might invest"
                - "Plan two in-person information evenings with approved slides"
                - "Approach the local business group and community newsletters"
                - "Map where investors live once the campaign closes"
            - name: Crowdfunding a B2B or deep tech company
              description: |-
                ## Purpose
                Business software, industrial technology and science-led companies lack the everyday product that makes consumers invest, so their campaigns depend on explaining the problem clearly and finding investors who know the industry. Engineers, customers' employees, alumni networks and sector communities often outperform the general platform audience for these raises.

                ## Milestones
                1. The problem explained in two sentences a non-specialist understands.
                2. Industry communities, alumni groups and customer contacts listed as outreach channels.
                3. A technical explainer or demo video approved for the page.
                4. The share of investors from industry channels measured.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A plain-language problem statement, a demo video and an industry outreach list are ready before launch, with industry-sourced investors measured."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the problem in two sentences for a non-specialist"
                - "List industry communities, alumni groups and customer contacts"
                - "Record a short demo or explainer video for the page"
                - "Track pledges from industry channels separately"
            - name: Adding a crowd round to existing angel or VC backing
              description: |-
                ## Purpose
                Companies with angels or a venture fund on the cap table increasingly add a crowd round to bring in customers or extend a round, but earlier investors may have consent rights, pro rata rights or strong views on hundreds of new shareholders. Agreeing the plan with them first, and showing how the nominee keeps the register clean, avoids a dispute that surfaces mid-campaign.

                ## Milestones
                1. Existing investors' consent and pro rata rights checked in the shareholder agreement.
                2. The crowd plan presented to existing investors with structure and timing.
                3. Existing investors' participation, if any, agreed and disclosed.
                4. Written support or consent from the required majority received.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Existing investors have consented in writing to the crowd round, with any participation agreed and disclosed on the page."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the shareholder agreement for consent and pro rata rights"
                - "Present the crowd round plan to your existing investors"
                - "Agree whether existing investors will join the round"
                - "Collect written consent from the required majority"
            - name: Follow-on crowd round from existing shareholders
              description: |-
                ## Purpose
                Second and third crowd raises usually start from the company's own shareholders, who already know the business and can be the first to commit. A follow-on works only if the first raise was followed by honest updates, so the plan begins by reviewing what investors were promised and what has been delivered.

                ## Milestones
                1. Promises from the first raise compared with what has been delivered.
                2. Existing crowd shareholders surveyed on their appetite to invest again.
                3. The follow-on price explained against the first round's price.
                4. Existing shareholders offered early access before the public phase.

                ## Notes
                If the new price is lower than the last round, say so plainly and explain why. Crowd shareholders will check.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A follow-on plan sets out promised versus delivered progress and gives existing shareholders early access before the public phase."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Compare the first raise's promises with what was delivered"
                - "Survey existing crowd shareholders on investing again"
                - "Explain the new price against the first round's price"
                - "Offer existing shareholders early access to the new round"
            - name: Cross-border crowd raise
              description: |-
                ## Purpose
                Diaspora communities, overseas customers and founders who moved abroad often want to back a company in another country, but crowdfunding permissions rarely travel. Some regimes let a platform offer to investors in several countries while others restrict promotion to local residents, so cross-border plans need confirmation from the platform and a lawyer before any overseas outreach.

                ## Milestones
                1. Countries where likely investors live listed with expected numbers.
                2. The platform's position on accepting investors from each country confirmed in writing.
                3. Currency, tax form and language needs for overseas investors noted.
                4. Outreach limited to the countries the platform and lawyer have cleared.

                ## Notes
                Tax treatment for overseas investors differs. Point them to their own tax adviser rather than answering yourself.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written confirmation from the platform and lawyer lists which countries may be approached, and outreach stays within that list."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the countries where your likely investors live"
                - "Ask the platform which countries' investors it accepts"
                - "Note currency, tax and language needs for overseas investors"
                - "Confirm the cleared country list with your lawyer before outreach"
            - name: Secondary market and liquidity for crowd shareholders
              description: |-
                ## Purpose
                Most crowd shareholders cannot sell until an exit, which may be many years away, and some platforms now run periodic secondary trading windows. Deciding whether to allow the company's shares on such a market, and how often, affects shareholder goodwill, the price signal it creates and the work it puts on the company.

                ## Milestones
                1. The platform's secondary market rules, costs and company duties read.
                2. The board's view recorded on allowing trading and how often.
                3. Shareholders told clearly whether and when they may be able to sell.
                4. Prices from any trading window noted and explained in the next update.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board decision on secondary trading is recorded and shareholders are told in writing whether and when they can sell."
                cadence: cyclic
              tasks:
                - "Read the platform's secondary market rules and company duties"
                - "Put the question of secondary trading to the board"
                - "Tell shareholders whether and when they may be able to sell"
                - "Check secondary trading prices and activity @recurring(quarterly)"
            - name: Campaign retrospective and crowd raise playbook
              description: |-
                ## Purpose
                Within a month of closing, memories of what worked fade and the numbers scatter across inboxes. A short retrospective using the dashboard, stand-up notes and investor feedback, turned into a playbook, makes the next raise faster and helps any founder in your network who asks how it went.

                ## Milestones
                1. Final numbers collected: total, investors, average ticket, cost of raising and sources.
                2. Three things that worked and three that did not agreed by the team.
                3. Five investors asked why they invested.
                4. A playbook of no more than five pages saved for the next raise.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook of up to five pages with final numbers, lessons and investor feedback is saved within a month of the close."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the final numbers from the dashboard and platform"
                - "Ask five investors why they chose to invest"
                - "Run a one-hour retrospective with the campaign team"
                - "Ask the agent to turn the notes into a five-page playbook"
            - name: Promoting a raise for a regulated product
              description: |-
                ## Purpose
                Companies selling alcohol, health products, financial services or anything aimed at children face product advertising rules on top of the financial promotion rules for the raise. A campaign video showing someone drinking, or a claim about health benefits, can breach one set of rules while passing the other, so every asset needs checking against both.

                ## Milestones
                1. The advertising codes that apply to the product listed.
                2. Every campaign asset checked against both the product rules and the promotion rules.
                3. Specialist sign-off obtained for any claim about health or safety.
                4. A note of rejected wording kept so the team does not reuse it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every campaign asset has been checked against both the product advertising codes and the promotion rules, with specialist sign-off recorded for health claims."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the advertising codes that apply to your product"
                - "Check each campaign asset against both sets of rules"
                - "Get specialist sign-off on any health or safety claim"
                - "Keep a list of rejected wording for the team"
---

# Equity Crowdfunding Campaign

This area walks a founder or small business owner through an equity crowdfunding raise on a regulated platform, from the first question of whether the crowd suits the business to life with hundreds of new shareholders. It starts with foundations (fit, the rules, the platform, the target, valuation, share structure and consents), then the campaign machinery, the skills of writing the page and answering in public, the key decisions, the dated moments from due diligence to the release of funds, variants for consumer brands, local businesses, B2B companies and venture-backed firms, and a few specialist cases.

What repeats is the campaign rhythm: daily dashboard updates and replies to investor questions, a Monday stand-up, Wednesday promotion approvals, a Thursday email and Friday content planning, then quarterly shareholder updates, monthly reporting checks and a yearly gathering after the close. The Vendor, Metrics log, Meeting notes, Content pipeline, Risk register and Marketing campaign templates pair with the platform choice, the dashboard, the stand-up, the content calendar, the risk warnings and the press plan. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
