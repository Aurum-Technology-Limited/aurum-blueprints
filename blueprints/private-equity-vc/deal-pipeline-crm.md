---
id: private-equity-vc.deal-pipeline-crm
name: Deal Pipeline CRM
description: "Clear stages, clean intermediary and relationship records, a weekly partner pipeline pack and a hygiene routine, so the deal system you run in DealCloud, Affinity or a spreadsheet is one the team trusts."
category: business
version: 1.0.0
tags: [private-equity-vc, deal-pipeline-crm, knowledge-worker, team, dealcloud, affinity, pipeline-reporting, data-hygiene]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - meeting-notes
    - metrics-log
    - onboarding-plan
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Deal Pipeline CRM
          description: "Running a deal pipeline system such as DealCloud or Affinity: stages, intermediary records, relationship history, reports for partner meetings and data hygiene."
          projects:
            - name: Inventory of where deal data lives today
              description: |-
                ## Purpose
                Before changing anything, find out where the pipeline really is: a partner's spreadsheet, three inboxes, a shared drive of teasers and half a CRM nobody updates. A one-page inventory of every source, its owner and how current it is shows what the system has to replace and what it must never lose.

                ## Milestones
                1. Every place deal or intermediary information is kept listed, with its owner.
                2. Each source marked as current, partly current or abandoned.
                3. The fields each source holds that no other source has noted.
                4. A short list of the sources the pipeline system must absorb first.

                ## Notes
                Ask each deal team member to show you, not tell you, where they keep things. The private spreadsheet usually only appears when someone opens their laptop.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page inventory lists every deal data source with owner, currency and unique fields, and names the first sources to absorb."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the spreadsheets, inboxes and drives you know hold deal information"
                - "Ask each deal team member to walk you through where they keep deals"
                - "Mark each source as current, partly current or abandoned"
                - "Note the fields that exist in only one source"
            - name: Pipeline stage definitions with entry and exit rules
              description: |-
                ## Purpose
                When one partner's "live" is another's "looked at the teaser", every pipeline count is an argument. Writing each stage with a plain entry rule and exit rule, such as NDA signed, management meeting held or IOI submitted, makes the numbers mean the same thing to everyone who reads them.

                ## Milestones
                1. Between six and nine stages agreed, from received to closed or passed.
                2. An entry rule for each stage tied to an observable event.
                3. A rule for what happens to deals that pause or go on hold.
                4. The definitions signed off at a partner meeting and pinned in the system.

                ## Notes
                Fewer stages are easier to keep honest. A stage nobody can tell apart from its neighbour will be skipped or misused within a month.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written stage list with entry and exit rules for every stage is approved by the partners and visible inside the pipeline system."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the stages the team uses today in their own words"
                - "Draft an entry rule for each stage tied to a real event"
                - "Agree how on-hold and paused deals are shown"
                - "Take the stage list to a partner meeting for sign-off"
            - name: Minimum required fields for a deal record
              description: |-
                ## Purpose
                Records with forty optional fields end up with four filled in, and never the same four. Choosing the eight to twelve fields every deal must carry, such as source, sector, deal lead, stage, enterprise value band and next step, gives reports something to stand on and keeps entry under two minutes.

                ## Milestones
                1. A list of no more than twelve required fields, each with a one-line definition.
                2. Picklist values fixed for sector, deal type and size band.
                3. Every other field marked optional or scheduled for removal.
                4. The required fields enforced in the system or on the entry form.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A required field list of twelve or fewer fields, with definitions and picklists, is enforced on every new deal record."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the fields used in the last three partner meeting reports"
                - "Cut the list to the twelve fields every deal must have"
                - "Write a one-line definition and picklist for each field"
                - "Turn on required-field rules in the system"
            - name: Intermediary firm and banker record structure
              description: |-
                ## Purpose
                Bankers move firms, boutiques merge and the same advisory house appears under five spellings. A clear structure that separates the firm from the people, links each person to the deals they brought and keeps history when they move, means coverage reports still work after the next round of lateral hires.

                ## Milestones
                1. Firm records and person records kept separate and linked.
                2. Firm type, sector focus and deal size range captured on each firm.
                3. Every deal linked to both the sending firm and the individual banker.
                4. A rule written for updating a person who moves firms without losing history.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active intermediary has a firm record and linked person records, and each deal shows both the firm and the banker who sent it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the current list of intermediary firms and spot duplicate spellings"
                - "Agree which fields belong on the firm and which on the person"
                - "Link the last year of deals to firm and banker"
                - "Write the rule for handling a banker who changes firm"
            - name: Contact and relationship history model
              description: |-
                ## Purpose
                Relationships are more than a name and an email: they are who at your firm knows them, when you last spoke and what was said. Deciding how meetings, calls and emails attach to people, companies and deals stops history being scattered across personal inboxes and lost when someone leaves.

                ## Milestones
                1. Interaction types defined: meeting, call, email, event and note.
                2. A rule for which record each interaction attaches to.
                3. A relationship owner field on key contacts.
                4. Sample histories for three contacts checked by the deal team for usefulness.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written interaction model is configured in the system and three sample contact histories have been reviewed by the deal team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the kinds of interaction the team has with contacts each week"
                - "Decide which record each interaction type attaches to"
                - "Add a relationship owner field to key contacts"
                - "Show three sample histories to the deal team and collect fixes"
            - name: Deal naming and codename conventions
              description: |-
                ## Purpose
                Sell-side processes arrive with codenames, the same target turns up twice under different ones, and someone files "Project Blue" next to "Blue Holdings". A naming rule that keeps the codename, the real company and the process year together prevents duplicates and keeps confidential names where they belong.

                ## Milestones
                1. A naming pattern agreed for deal records, such as codename, year and sector.
                2. A rule for where the real company name is stored and who can see it.
                3. Existing deal names brought into line with the pattern.
                4. A check for repeat processes on the same company built into new deal entry.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All active deal records follow one naming pattern and new entries are checked against earlier processes for the same company."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the naming pattern on one line with two examples"
                - "Decide where the real company name lives on a codenamed deal"
                - "Rename active deals to match the pattern"
                - "Add a search for earlier processes to the new deal checklist"
            - name: Pass reasons and dead deal codes
              description: |-
                ## Purpose
                Most deals end in a pass, and a free-text "not for us" teaches the firm nothing. A short coded list of pass reasons, such as valuation, sector, size, quality of earnings or lost to another bidder, turns dead deals into a dataset the partners can read in a year.

                ## Milestones
                1. Eight to twelve pass and loss reasons agreed, each with a definition.
                2. Separate codes for passed by us and lost to another buyer.
                3. The code made required when a deal moves to passed or lost.
                4. The last six months of dead deals coded retrospectively.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every deal closed out in the last six months and every new pass or loss carries a coded reason from an agreed list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the last fifty pass notes and group the reasons"
                - "Draft a coded list with separate pass and loss codes"
                - "Make the reason required when a deal is closed out"
                - "Code the last six months of dead deals"
            - name: Deal ownership and coverage assignment rules
              description: |-
                ## Purpose
                Deals with no named owner sit in "reviewing" until the auction closes. Rules for who owns each deal record and each intermediary relationship, and what happens when two people claim the same one, keep every line of the pipeline answerable to a person.

                ## Milestones
                1. Every active deal has one named deal lead in the system.
                2. Key intermediaries each have a relationship owner.
                3. A written rule for resolving two people claiming the same deal or contact.
                4. Unowned records listed weekly until the list is empty.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No active deal or key intermediary record is without a named owner, and the ownership rule is written and shared with the team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Run a report of active deals with no deal lead @recurring(monthly:16)"
                - "Assign a relationship owner to each key intermediary"
                - "Write a one-paragraph rule for disputed ownership"
                - "Send unowned records to the partners for assignment"
            - name: Access permissions and confidential deal walls
              description: |-
                ## Purpose
                Some deals come with NDAs that restrict who may know the target, and some firms run funds or portfolio companies with conflicts. Setting permission groups and restricted deal walls in the system, with compliance, keeps sensitive names visible only to the people cleared to see them.

                ## Milestones
                1. Permission groups defined for partners, deal team, operations and guests.
                2. A restricted flag that hides company names on wall-crossed deals.
                3. The rules reviewed and approved by your compliance lead or counsel.
                4. A test showing a restricted deal is invisible to an unpermitted user.

                ## Notes
                This is configuration, not legal advice. What must be restricted depends on your NDAs and your firm's policies, so agree the rules with compliance before switching them on.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Permission groups and a restricted deal flag are live, approved by compliance, and tested with a user who should not see a restricted deal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List who needs to see what, by role"
                - "Ask compliance which deals and fields must be restricted"
                - "Configure permission groups and the restricted flag"
                - "Test a restricted deal with a non-permitted account"
            - name: Naming the CRM owner and admin role
              description: |-
                ## Purpose
                Systems everybody owns are systems nobody fixes. Naming one person as owner, with a backup, a few protected hours a week and authority to change fields and chase updates, is the difference between a pipeline tool that improves and one that decays after launch.

                ## Milestones
                1. One owner and one backup named and announced to the team.
                2. The owner's weekly hours for the system agreed with a partner.
                3. A short list of decisions the owner can make alone and those that need the partners.
                4. A channel or inbox set up for change requests.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named owner and backup are announced with agreed weekly hours, a written decision scope and a single route for change requests."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree with a partner who will own the pipeline system"
                - "Name a backup for holidays and busy deals"
                - "Write what the owner may change without asking"
                - "Open one route for change requests and announce it"
            - name: Friday deal record update by each deal lead
              description: |-
                ## Purpose
                Pipeline reports are only as fresh as the last update, and Monday morning is too late to collect it. Ten minutes on Friday for each deal lead to move stages, set next steps and log the week's meetings means the partner pack builds itself.

                ## Milestones
                1. A recurring Friday slot in every deal lead's diary.
                2. A five-point update checklist pinned in the system.
                3. Four weeks in a row with every active deal updated by Friday evening.
                4. Late updaters named privately, not in the partner meeting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over eight consecutive weeks, at least 90 percent of active deals show an update dated in the week before the Monday meeting."
                cadence: rolling
              tasks:
                - "Send the five-point update checklist to all deal leads"
                - "Update stages, next steps and meetings on your own deals @recurring(weekly:fri)"
                - "Check which active deals have no update this week"
                - "Message late updaters directly before the weekend"
            - name: Monday pipeline pack for the partner meeting
              description: |-
                ## Purpose
                Partners want a short view of what is new, what moved, what needs a decision and what died, not a forty-row export. A one-page pack built from saved reports every Monday makes the pipeline meeting about choices rather than reading the list aloud.

                ## Milestones
                1. A saved report for new, moved, needs decision and passed deals.
                2. A one-page layout the partners have approved.
                3. The pack sent at least two hours before the meeting for six weeks running.
                4. Actions from each meeting written back onto the deal records.

                ## Notes
                Start from the **Meeting notes** template for the actions list, then copy each action onto its deal record so it is not lost.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page pipeline pack is sent before every partner meeting for six consecutive weeks, with meeting actions recorded on the deals."
                cadence: rolling
              tasks:
                - "Build saved reports for new, moved, decision and passed deals"
                - "Mock up a one-page layout and get partner approval"
                - "Run the reports and send the pack before the meeting @recurring(weekly:mon)"
                - "Copy meeting actions onto the relevant deal records"
            - name: Monthly stale deal sweep
              description: |-
                ## Purpose
                Deals that sat in "diligence" for ninety days with no activity distort every count and hide real work. A monthly sweep of records with no update past a set number of days in their stage either revives them with a next step or closes them out with a code.

                ## Milestones
                1. A time-in-stage limit agreed for each stage.
                2. A saved view of deals over their limit.
                3. Each stale deal given a next step or closed with a pass code.
                4. The stale count tracked month on month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive months the stale deal view is cleared within a week of the sweep and the stale count is recorded."
                cadence: rolling
              tasks:
                - "Agree a time-in-stage limit for each stage"
                - "Build a saved view of deals past their limit"
                - "Send each deal lead their stale deals to revive or close @recurring(monthly:5)"
                - "Record the month's stale count"
            - name: Duplicate company and contact merge routine
              description: |-
                ## Purpose
                Every email sync, conference list import and data provider feed creates duplicates, and duplicates split relationship history in two. A monthly merge pass, using the system's duplicate finder and a rule for which record survives, keeps one record per company and per person.

                ## Milestones
                1. A rule for which record survives a merge and which fields win.
                2. The system's duplicate detection switched on or a matching report built.
                3. The duplicate count recorded before and after each pass.
                4. Merges that touched restricted deals checked by the owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly merge passes are logged for six months with duplicate counts falling or held below an agreed level."
                cadence: rolling
              tasks:
                - "Write the survivor rule for merging two records"
                - "Switch on duplicate detection or build a matching report"
                - "Review and merge flagged duplicates @recurring(monthly:22)"
                - "Log the duplicate count before and after the pass"
            - name: Missing field and data quality report
              description: |-
                ## Purpose
                Required fields get bypassed through imports, integrations and old records. A monthly report of active deals and key contacts missing the fields that matter, sent to each owner with the list, keeps the data good enough that partners stop keeping their own spreadsheets.

                ## Milestones
                1. A data quality report covering the required deal fields.
                2. A completeness percentage for active deals tracked each month.
                3. Each owner receiving only their own gaps.
                4. Completeness above an agreed level for three months running.

                ## Notes
                Start from the **Metrics log** template to track completeness month on month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly completeness of required fields on active deals is logged and stays above the agreed level for three consecutive months."
                cadence: rolling
              tasks:
                - "Build a report of active deals missing required fields"
                - "Agree a completeness target with the partners"
                - "Send each owner their own missing fields @recurring(monthly:12)"
                - "Log the month's completeness percentage"
            - name: Email and calendar capture check
              description: |-
                ## Purpose
                Relationship tools that read inboxes and calendars quietly stop capturing when a password changes, a new joiner is never connected or a filter blocks a domain. A monthly check that every team member's sync is live and that excluded domains are right keeps the relationship history complete.

                ## Milestones
                1. A list of every user and the status of their email and calendar sync.
                2. Excluded domains, such as personal and portfolio confidential ones, reviewed.
                3. Broken syncs fixed within a week of each check.
                4. New joiners connected in their first week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive months every active user's sync is confirmed live or fixed within a week, and the excluded domain list is reviewed."
                cadence: rolling
              tasks:
                - "Export each user's email and calendar sync status"
                - "Check sync status and fix broken connections @recurring(monthly:9)"
                - "Review the excluded domain list with compliance"
                - "Add sync set-up to the new joiner checklist"
            - name: Monthly adoption and usage check
              description: |-
                ## Purpose
                Low adoption hides behind a busy-looking dashboard: a few people update everything and others work from email. Looking monthly at logins, updates per user and records created shows where the system is being bypassed and who needs help, before the data quietly goes stale.

                ## Milestones
                1. A usage report by user covering logins, updates and records created.
                2. A baseline month recorded for comparison.
                3. A short conversation with anyone well below the team median.
                4. Two concrete fixes made from what low users say gets in the way.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Usage by user is reviewed monthly for six months and at least two changes are made from low users' feedback."
                cadence: rolling
              tasks:
                - "Build a usage report by user from the admin console"
                - "Review usage and note anyone well below the median @recurring(monthly:27)"
                - "Ask low users what makes updating hard"
                - "Make one change a quarter based on what they say"
            - name: Quarterly pipeline funnel and conversion report
              description: |-
                ## Purpose
                Partners sense whether the funnel is fuller or thinner, but rarely see it. A quarterly report of deals entering each stage, conversion between stages and median time in stage, built from the system's own history, shows where deals stall and whether changes are working.

                ## Milestones
                1. A funnel showing deals reaching each stage in the quarter.
                2. Stage-to-stage conversion and median time in stage.
                3. The same figures for the previous four quarters for comparison.
                4. Three observations written for the partners, not just charts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly funnel report with conversion, time in stage and four prior quarters is delivered to the partners for four consecutive quarters."
                cadence: cyclic
              tasks:
                - "Check that stage change dates are recorded in the system"
                - "Build the funnel and conversion report and send it to the partners @recurring(quarterly)"
                - "Add the previous four quarters for comparison"
                - "Write three observations to go with the charts"
            - name: Quarterly relationship coverage report
              description: |-
                ## Purpose
                Important bankers, lenders and advisers drift out of touch without anyone deciding to let them go. A quarterly report of key relationships by owner and days since last interaction, pulled from captured history, shows which ones have gone quiet so owners can decide what to do.

                ## Milestones
                1. Key relationships flagged in the system.
                2. A report of days since last interaction for each, by owner.
                3. Relationships past an agreed gap sent to their owners.
                4. Flags reviewed so the list stays current.

                ## Notes
                The report shows the gap; the sourcing plan decides who to call. Keep this to the data and leave the outreach to the people who own it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A coverage report showing last interaction for every flagged key relationship reaches each owner every quarter for a year."
                cadence: cyclic
              tasks:
                - "Flag key relationships on contact records"
                - "Build a report of days since last interaction by owner"
                - "Send each owner their quiet relationships @recurring(quarterly)"
                - "Remove flags that no longer apply"
            - name: Yearly configuration review of the pipeline system
              description: |-
                ## Purpose
                Fields, stages, reports and automations pile up over a year until the system reflects old habits. A yearly review of what is used, what is never filled in and what the team keeps asking for keeps the configuration lean and matched to how the firm now invests.

                ## Milestones
                1. Usage figures for every field, report and automation.
                2. A list of items to retire, change or add.
                3. Partner approval for changes that affect reporting.
                4. Changes made and announced with a short what changed note.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review produces a written list of retired, changed and added items, approved and announced to the team."
                cadence: cyclic
              tasks:
                - "Export field fill rates and report usage"
                - "Hold the yearly configuration review with the backup owner @recurring(yearly)"
                - "Get partner approval for reporting changes"
                - "Send a short what changed note to the team"
            - name: Writing useful interaction notes after calls
              description: |-
                ## Purpose
                Call notes that just say "good call, will follow up" are useless to the colleague who picks up the relationship in two years. Practising a short structure, covering who, what they said about deals, what they want from you and the next step, makes notes worth searching.

                ## Milestones
                1. A four-line note structure agreed with the team.
                2. Ten of your own notes written to the structure.
                3. Two colleagues' notes reviewed against it, with kind feedback.
                4. The structure saved as a note template in the system.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A four-line note structure is saved in the system and at least ten notes written to it are visible on contact records."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read five old call notes and mark what is missing"
                - "Draft a four-line note structure"
                - "Write your next ten call notes to the structure"
                - "Save the structure as a note template"
            - name: Building saved views and dashboards for your coverage
              description: |-
                ## Purpose
                Most users never get past the default list, then export to a spreadsheet to answer simple questions. Learning to build saved views and a personal dashboard, such as my active deals by stage or my intermediaries not seen in ninety days, makes the system faster than the workaround.

                ## Milestones
                1. Filters, grouping and column choices learned on a sandbox view.
                2. Three saved views built for your own coverage.
                3. A personal dashboard set as your landing page.
                4. One view shared with a colleague who asked for it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three saved views and a personal dashboard exist under your account and at least one view is in use by a colleague."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Work through the vendor's guide to filters and saved views"
                - "Build three views for questions you ask every week"
                - "Set a personal dashboard as your landing page"
                - "Share one view with a colleague who needs it"
            - name: Pipeline metrics that mean something in private equity
              description: |-
                ## Purpose
                Sales CRMs push weighted pipeline and win rates that make little sense when the firm closes three deals a year from three hundred looks. Learning which measures do help, such as stage conversion, time to decision, loss reasons and coverage of a market, keeps reports honest.

                ## Milestones
                1. A short list of measures suited to low-volume, high-value deal flow.
                2. A written note on why weighted pipeline value misleads here.
                3. Each measure defined so it can be calculated from the system.
                4. The list discussed with a partner and trimmed to what they will use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note defines the pipeline measures the firm will use, each calculable from the system, and is agreed with a partner."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the measures your current reports already show"
                - "Write down why each one helps or misleads for buyout deal flow"
                - "Define the keepers so they can be built from system fields"
                - "Review the list with a partner"
            - name: Relationship intelligence and introduction paths
              description: |-
                ## Purpose
                Tools that read the team's email can show who at the firm knows a target's chair or a banker's boss, and how strong that tie is. Learning how relationship scores are calculated, and where they mislead, lets you find warm introductions without trusting a number blindly.

                ## Milestones
                1. The vendor's method for relationship strength read and summarised.
                2. Three introduction path searches run on real targets.
                3. Cases noted where the score was clearly wrong and why.
                4. A short guide for the team on using and checking introduction paths.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page team guide explains how relationship scores work, with three tested examples and their known blind spots."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read how your system calculates relationship strength"
                - "Run introduction path searches on three current targets"
                - "Note where the score misread a relationship"
                - "Write a one-page guide for the team"
            - name: Consistent sector, deal type and size tagging
              description: |-
                ## Purpose
                If one person tags "healthcare services" and another "health tech", the sector report splits in two. Learning the firm's taxonomy and practising it on a batch of real deals, with a second person checking, makes tags reliable enough to answer questions about where deals come from.

                ## Milestones
                1. The sector, deal type and size band lists written with examples.
                2. Thirty recent deals tagged by two people independently.
                3. Disagreements discussed and the definitions tightened.
                4. Agreement between the two taggers above an agreed level.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two team members tag thirty deals independently with agreement above the agreed level after the definitions are tightened."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write each sector and deal type with two example companies"
                - "Tag thirty recent deals with a colleague, separately"
                - "Compare tags and tighten the definitions that split"
                - "Retag the thirty and measure agreement again"
            - name: Exporting and analysing pipeline data in a spreadsheet
              description: |-
                ## Purpose
                Some questions, such as how many software deals above a size band reached IOI in three years, are quicker in a spreadsheet than in the reporting module. Learning to export cleanly, keep stage history and build a pivot table answers them without creating a rogue copy of the pipeline.

                ## Milestones
                1. An export that includes stage history and coded fields.
                2. A pivot table answering one real partner question.
                3. A rule that exports are deleted or archived once the question is answered.
                4. The query written down so it can be rebuilt in the system later.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One partner question is answered from a clean export with a documented query, and the export is archived under the agreed rule."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find how to export deals with stage change history"
                - "Answer one real partner question with a pivot table"
                - "Write the query steps down for reuse"
                - "Archive the export once the question is answered"
            - name: Admin basics for fields, picklists and layouts
              description: |-
                ## Purpose
                Waiting weeks for the vendor or a consultant to add a picklist value stalls every small improvement. Learning the admin console well enough to add fields, edit picklists and change page layouts in a sandbox lets the owner make safe changes in an afternoon.

                ## Milestones
                1. Admin training from the vendor completed.
                2. A sandbox or test environment available and used.
                3. One field, one picklist change and one layout change made in the sandbox.
                4. The same changes promoted to live with a short change note.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The owner has completed vendor admin training and promoted at least three tested changes from sandbox to live with change notes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book the vendor's admin training"
                - "Ask the vendor for a sandbox or test environment"
                - "Make a field, picklist and layout change in the sandbox"
                - "Promote the tested changes and send a change note"
            - name: Choosing a deal pipeline platform
              description: |-
                ## Purpose
                Sales CRMs, private-capital platforms such as DealCloud, relationship tools such as Affinity and a well-built spreadsheet all have a place, depending on team size, budget and how much the firm runs on email. A scored comparison against your own requirements keeps the decision from resting on the best demo.

                ## Milestones
                1. Requirements written, split into must have and nice to have.
                2. Three platforms shortlisted, including staying as you are.
                3. Each scored on the same criteria after a demo with your own data.
                4. A recommendation with total yearly cost and set-up effort taken to the partners.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor for a reference customer of your size, not their largest client.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three options, with yearly cost and set-up effort, is presented and a platform decision is recorded by the partners."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write must-have and nice-to-have requirements on one page"
                - "Shortlist three options including staying as you are"
                - "Run each demo with a sample of your own deals"
                - "Call one reference customer of your size for each vendor"
            - name: Migrating from spreadsheets into the new system
              description: |-
                ## Purpose
                Most migrations fail on dirty source data rather than the software. Cleaning, mapping and loading the spreadsheets and old exports in stages, starting with active deals and key intermediaries, gets the team working in the new system quickly without importing years of duplicates.

                ## Milestones
                1. A field map from each source to the new system.
                2. Active deals and key intermediaries cleaned and loaded first.
                3. A sample of fifty loaded records checked against the source.
                4. Old spreadsheets set to read only with a date to archive them.

                ## Notes
                Load history in a second phase. Teams that wait for a perfect full import often never go live.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Active deals and key intermediaries are live in the new system, a fifty-record sample matches the source, and the old sheets are read only."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map each spreadsheet column to a field in the new system"
                - "Clean and load active deals and key intermediaries first"
                - "Check fifty loaded records against the source sheets"
                - "Set the old spreadsheets to read only with an archive date"
            - name: Email and calendar integration set-up
              description: |-
                ## Purpose
                Manual logging of every banker meeting will not survive a busy quarter. Connecting email and calendar so interactions are captured automatically, with the right exclusions for personal, portfolio and confidential correspondence, gives relationship history without asking people to type it.

                ## Milestones
                1. The integration approved by IT and compliance.
                2. Exclusion rules set for personal and confidential domains.
                3. A pilot group of three users connected and checked for two weeks.
                4. The whole team connected and the result announced.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All deal team users are connected to email and calendar capture with exclusions approved by compliance after a two-week pilot."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask IT and compliance to approve inbox and calendar capture"
                - "Write the domain exclusion list"
                - "Pilot the integration with three users for two weeks"
                - "Connect the rest of the team and announce it"
            - name: Linking a company data provider to records
              description: |-
                ## Purpose
                Typing revenue estimates, headcount and ownership into every company record wastes associate hours and goes out of date. Connecting a company data subscription to the pipeline system, with rules for which fields it may overwrite, keeps firmographics current while protecting what the team knows better.

                ## Milestones
                1. The provider's integration options and licence terms checked.
                2. A list of fields the feed may fill and fields it must never overwrite.
                3. A test on fifty company records reviewed for accuracy.
                4. The feed switched on with a monthly check of mismatches.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The data feed is live on company records with written overwrite rules, after a fifty-record test was reviewed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check what the provider's licence allows in a third-party system"
                - "List which fields the feed may fill and which it must not touch"
                - "Test the feed on fifty company records"
                - "Switch the feed on and note who checks mismatches"
            - name: Document and data room link policy
              description: |-
                ## Purpose
                Teasers, CIMs and data room exports attached to CRM records spread confidential material well beyond the people on the NDA. A policy that the system holds links and summaries, while documents stay in the controlled drive or data room, keeps the pipeline useful without becoming a leak.

                ## Milestones
                1. A written rule on what may be attached and what must be linked.
                2. The rule agreed with compliance.
                3. Existing attachments on records reviewed and moved where needed.
                4. Attachment settings changed in the system to match the rule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A compliance-approved attachment rule is in force and existing records have been reviewed and brought into line."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run a report of records with attached documents"
                - "Draft the attach versus link rule in one paragraph"
                - "Agree the rule with compliance"
                - "Move or remove attachments that break it"
            - name: Personal data retention policy for contacts
              description: |-
                ## Purpose
                Pipeline systems hold names, emails and notes about bankers, owners and executives, and privacy laws such as the GDPR give people rights over that data. Agreeing a retention period and a process for access and deletion requests with compliance keeps the firm's relationship data defensible.

                ## Milestones
                1. The categories of personal data held in the system listed.
                2. A retention period and review rule agreed with compliance or counsel.
                3. A process written for handling access and deletion requests.
                4. Contacts past the retention period flagged for review.

                ## Notes
                The rules differ by country and by how your firm collects data. Treat this as preparing the questions for compliance, not as a legal view.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A retention period and a written access and deletion request process are approved by compliance and applied in the system."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the kinds of personal data held on contact records"
                - "Ask compliance which retention rules apply to the firm"
                - "Write the steps for an access or deletion request"
                - "Review contacts past the retention period @recurring(quarterly)"
            - name: Retiring unused fields, stages and reports
              description: |-
                ## Purpose
                Every unused field makes the entry form longer and every dead report makes the right one harder to find. Retiring what nobody fills in or opens, after warning the people who asked for it, makes the system feel lighter without losing anything people need.

                ## Milestones
                1. Fields under a set fill rate and reports unopened for six months listed.
                2. Original requesters asked whether each item is still needed.
                3. Items hidden first, then removed after a month with no complaints.
                4. The entry form shortened and the change announced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A list of retired fields and reports is recorded, each hidden for a month before removal, and the shorter entry form is announced."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List fields under the fill rate and reports nobody opens"
                - "Ask each requester whether the item is still needed"
                - "Hide the items for a month before removing them"
                - "Announce the shorter form to the team"
            - name: Quick capture from a phone after meetings
              description: |-
                ## Purpose
                The best detail from a conference coffee is gone by the time the deal lead is back at a desk. Setting up the mobile app or a quick capture route, such as a forwarding address or a short form, lets notes and new deals land in the system within minutes.

                ## Milestones
                1. The mobile app or capture route chosen and tested.
                2. A three-field quick form for new contacts and deals.
                3. Every deal team member set up on their phone.
                4. Quick captures reviewed weekly by the owner for completeness.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every deal team member can capture a note or new deal from their phone and at least twenty captures appear in the first month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Test the mobile app and any forwarding address the vendor offers"
                - "Build a three-field quick form for new contacts and deals"
                - "Set up each team member's phone during a team meeting"
                - "Review quick captures for missing fields @recurring(weekly:thu)"
            - name: Platform contract renewal and vendor review
              description: |-
                ## Purpose
                Pipeline platforms are often priced per seat with yearly uplifts, and renewals arrive with ninety days' notice buried in the contract. Reviewing usage, seat count, support quality and price before the notice date gives the firm room to negotiate or move.

                ## Milestones
                1. The renewal date and notice period recorded with a reminder.
                2. Active seats compared with paid seats.
                3. Support tickets and unresolved issues summarised.
                4. A renewal position agreed with a partner before the notice date.

                ## Notes
                Start from the **Vendor** template to keep the contract, contacts and renewal history together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A renewal position covering seats, price and support is agreed with a partner before the contract notice date."
                cadence: cyclic
              tasks:
                - "Find the renewal date and notice period in the contract"
                - "Review seats, support tickets and price before renewal @recurring(yearly)"
                - "Compare active users with paid seats"
                - "Agree the renewal position with a partner"
            - name: Go-live day and team training session
              description: |-
                ## Purpose
                Announce a new system by email and the team will ignore it. A dated go-live with a ninety-minute training session on the team's own deals, a one-page cheat sheet and a week of drop-in help gets everyone using it from the first Monday.

                ## Milestones
                1. A go-live date agreed and in everyone's diary.
                2. A one-page cheat sheet for the five things people do daily.
                3. A training session run on the team's real deals.
                4. Drop-in help offered for the first week and questions logged.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The go-live training is held on the agreed date with every deal team member attending, and a cheat sheet is in everyone's hands."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the go-live date with the partners"
                - "Write a one-page cheat sheet for daily tasks"
                - "Run a ninety-minute session on the team's own deals"
                - "Hold drop-in help for the first week and log questions"
            - name: Annual pipeline retrospective for the partners
              description: |-
                ## Purpose
                Once a year the partners should see what the whole pipeline looked like: how many deals, from which sources, where they died and which ones the firm closed. A retrospective session built from the system's data turns a year of updates into a few decisions for the year ahead.

                ## Milestones
                1. A year's funnel, pass reasons and source breakdown prepared.
                2. Three or four questions for the partners to decide on.
                3. The session held and decisions recorded.
                4. Changes to stages, fields or reports agreed from the session.

                ## Notes
                Ask the agent to draft the pack from the yearly exports, then check every figure against the system before it reaches the partners.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A retrospective session is held with a data pack covering the full year, and the partners' decisions are written down."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Book the retrospective session with the partners @recurring(yearly)"
                - "Pull the year's funnel, pass reasons and source breakdown"
                - "Write three or four questions for the partners to decide"
                - "Record the decisions and the system changes they need"
            - name: Deal flow statistics for a fund raise
              description: |-
                ## Purpose
                Prospective LPs ask how many deals the team sees, how it chooses and how often it wins. Preparing pipeline statistics from the system, with definitions and the period covered, gives the investor relations team figures that survive due diligence instead of ones assembled the night before.

                ## Milestones
                1. The questions LPs typically ask about deal flow listed with investor relations.
                2. Figures pulled from the system with stated definitions and dates.
                3. Each figure checked against the underlying records.
                4. A short appendix explaining how the figures were produced.

                ## Notes
                Figures shown to investors must be accurate and fairly presented. Have them checked by compliance before they go into any marketing material.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A deal flow statistics pack with definitions and a method appendix is checked by compliance and handed to investor relations."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask investor relations which deal flow questions LPs ask"
                - "Pull the figures with definitions and date ranges"
                - "Check each figure against the underlying deal records"
                - "Send the pack to compliance for review"
            - name: Rolling out a major platform release
              description: |-
                ## Purpose
                Vendors ship releases that move menus, change reports and sometimes break integrations. Reading the release notes, testing in a sandbox and telling the team what changes before it lands avoids a Monday when the partner pack does not run.

                ## Milestones
                1. Release notes read and changes affecting your set-up listed.
                2. Saved reports and integrations tested in the sandbox.
                3. A short note to the team on what will look different.
                4. The partner pack checked on the first Monday after release.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The release goes live with reports and integrations tested beforehand, the team notified, and the next partner pack run without errors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the release notes and list changes that touch your set-up"
                - "Test saved reports and integrations in the sandbox"
                - "Send the team a short note on what will change"
                - "Run the partner pack on the first Monday after release"
            - name: Spreadsheet pipeline for a searcher or independent sponsor
              description: |-
                ## Purpose
                Solo searchers and independent sponsors rarely need an enterprise platform, but still lose deals in an inbox. A single well-structured spreadsheet or light CRM, with the same stages, required fields and pass codes as a larger firm, gives one person a pipeline investors can trust.

                ## Milestones
                1. A sheet or light tool with one row per deal and fixed column definitions.
                2. Stages and pass codes borrowed from a firm-style set-up.
                3. A separate tab for intermediaries and contacts linked by name.
                4. A monthly summary that can be shared with investors or capital partners.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-person pipeline with fixed stages, required columns, pass codes and a contacts tab is in daily use and produces a monthly summary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up one row per deal with fixed column definitions"
                - "Add stage and pass code dropdowns"
                - "Create a linked tab for intermediaries and contacts"
                - "Draft the monthly summary you would send a capital partner"
            - name: Learning an established CRM as a new associate
              description: |-
                ## Purpose
                Joining a firm with years of history in the system, a new associate can find every prior look at a company, every banker relationship and every pass note, if they know where to search. Spending the first fortnight learning the firm's set-up makes the associate useful in the first pipeline meeting.

                ## Milestones
                1. The stage definitions and required fields read and understood.
                2. The system owner shadowed for an hour.
                3. Prior history found for three companies on current deals.
                4. Own saved views built for assigned deals and coverage.

                ## Notes
                Start from the **Onboarding plan** template and put the system tasks in the first two weeks.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within two weeks the associate has found prior history on three current deals and built saved views for their own coverage."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the stage definitions and required field list"
                - "Book an hour shadowing the system owner"
                - "Search the history of three companies on current deals"
                - "Build saved views for your assigned deals"
            - name: Handing over records when a team member leaves
              description: |-
                ## Purpose
                When a vice president leaves, their deals, intermediary relationships and half-written notes go with them unless someone acts in the notice period. A handover checklist that reassigns ownership, completes open notes and preserves captured history keeps relationships with the firm.

                ## Milestones
                1. A list of every deal and contact owned by the leaver.
                2. Each record reassigned to a named colleague.
                3. Open notes and next steps completed before the last day.
                4. Account access ended and captured history kept under the firm's policy.

                ## Notes
                Check with compliance what happens to the leaver's captured email history. Some firms must keep it, others must restrict it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "On the leaver's last day no record is still owned by them, open notes are complete, and access is closed under the firm's policy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run a report of every record the leaver owns"
                - "Agree new owners for each with a partner"
                - "Ask the leaver to finish open notes and next steps"
                - "Close the account and keep history as policy requires"
            - name: Shared upkeep rota for a team without an admin
              description: |-
                ## Purpose
                Small funds and deal teams often cannot justify a full-time system owner, so the work falls to whoever complains first. A light rota that rotates the weekly pack, the monthly sweeps and change requests between two or three people spreads the load and keeps it done.

                ## Milestones
                1. The recurring upkeep jobs listed with time each takes.
                2. A rota naming who covers which job each month.
                3. A shared checklist so each person does it the same way.
                4. A quarterly check that no job has been skipped.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written rota covers every upkeep job for a year and a quarterly check shows no job skipped in the previous quarter."
                cadence: rolling
              tasks:
                - "List the weekly and monthly upkeep jobs and their time"
                - "Draw up a rota across two or three people"
                - "Write a shared checklist for each job"
                - "Check the rota for skipped jobs @recurring(quarterly)"
            - name: Merging two pipelines after teams combine
              description: |-
                ## Purpose
                When two firms merge or a new team joins with its own system, the same companies and bankers appear twice with different histories, stages and owners. Merging deliberately, with a mapping of stages, a rule for duplicate deals and partner sign-off on conflicts, gives one pipeline both teams trust.

                ## Milestones
                1. A stage and field mapping between the two systems.
                2. Overlapping companies and contacts identified before loading.
                3. Conflicting ownership and stage decisions settled by the partners.
                4. One combined pipeline live and the old one archived.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A single combined pipeline is live with mapped stages, resolved duplicates and partner-approved ownership, and the old system is archived."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map stages and fields between the two systems"
                - "Match overlapping companies and contacts before loading"
                - "Take ownership and stage conflicts to the partners"
                - "Load the combined data and archive the old system"
            - name: Add-on targets and platform deals in one system
              description: |-
                ## Purpose
                Buy-and-build firms track add-on targets for each portfolio company alongside new platform deals, and mixing them corrupts both funnels. Configuring a separate pipeline or record type for add-ons, linked to the right portfolio company, keeps both views clean.

                ## Milestones
                1. A separate pipeline or record type for add-on targets.
                2. Each add-on target linked to its portfolio company.
                3. Partner and portfolio company reports that show each separately.
                4. Portfolio company management given limited access if the firm agrees.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Add-on targets sit in their own pipeline linked to portfolio companies, and platform deal reports no longer include them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Decide between a separate pipeline or record type for add-ons"
                - "Link existing add-on targets to their portfolio company"
                - "Split the partner reports so each funnel is separate"
                - "Agree whether portfolio company teams get limited access"
            - name: Lenders, co-investors and advisers on deal records
              description: |-
                ## Purpose
                Each live deal involves debt providers, co-investors, lawyers and accountants, and partners ask who was on which deal and how they performed. Adding linked roles for these parties on deal records turns scattered memory into a record of who the firm worked with.

                ## Milestones
                1. Role types defined for lender, co-investor, legal, financial and commercial adviser.
                2. Roles added to deal records, linked to firm and contact records.
                3. Closed deals from the last two years back-filled.
                4. A report of each party's deals for the partners.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Live deals and closed deals from the last two years carry linked lender, co-investor and adviser roles, viewable in one report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define the role types to add to deal records"
                - "Add roles to all live deals"
                - "Back-fill roles for closed deals from the last two years"
                - "Build a report of deals by lender and adviser"
            - name: Stage change alerts and automated tasks
              description: |-
                ## Purpose
                Some steps should follow every stage change: an NDA logged when a deal enters review, a conflicts check before management meetings, a pass letter when a deal dies. Automating alerts and tasks for these handoffs means fewer things depend on memory during a busy fortnight.

                ## Milestones
                1. Three to five stage changes that should trigger a task or alert listed.
                2. Each automation built and tested in the sandbox.
                3. The automations live with an owner for each.
                4. A review after three months of which alerts helped and which were noise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three to five tested stage change automations are live with named owners, and a three-month review records which to keep."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the steps that should follow each stage change"
                - "Build each automation in the sandbox"
                - "Turn the tested automations on and name an owner"
                - "Review alert usefulness after three months"
            - name: Prior contact and conflicts check from records
              description: |-
                ## Purpose
                Before signing an NDA the team should know whether the firm has seen the company before, holds a competitor in the portfolio or is restricted. A standard search of the system for prior looks, portfolio overlaps and wall-crossed deals gives compliance a fast, consistent answer to start from.

                ## Milestones
                1. A saved search covering prior deals, contacts and portfolio companies.
                2. A one-page result format sent to the deal lead and compliance.
                3. The check made a step before any NDA is signed.
                4. Ten checks run and reviewed for gaps.

                ## Notes
                The system check informs compliance; it does not replace the firm's conflicts process.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard prior contact and conflicts search runs before every NDA, and ten completed checks have been reviewed with compliance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Build a saved search for prior looks and portfolio overlaps"
                - "Agree the result format with compliance"
                - "Add the check to the pre-NDA steps"
                - "Review the first ten checks with compliance"
            - name: Three-year analysis of time to decision
              description: |-
                ## Purpose
                How long the firm takes to say yes or no shapes how bankers treat it in auctions. Three years of stage history shows median days from teaser to first decision and from IOI to exit from the process, and where the delays sit, so partners can see whether the firm is slow when it matters.

                ## Milestones
                1. Three years of stage change dates exported and checked.
                2. Median and spread of days to each decision point calculated.
                3. Delays broken down by stage, sector and deal lead.
                4. Findings and one proposed change taken to the partners.

                ## Notes
                Ask the agent to summarise the exported history into a first table, then check the outliers by hand before drawing conclusions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis of three years of time to decision, with medians by stage and one proposed change, is presented to the partners."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export three years of stage change history"
                - "Calculate median days to each decision point"
                - "Break delays down by stage, sector and deal lead"
                - "Present findings and one change to the partners"
---

# Deal Pipeline CRM

This area is for whoever keeps a deal team's pipeline system working, whether that is a dedicated business development lead, the associate who inherited the CRM or a small team sharing the job, in DealCloud, Affinity, another platform or a well-kept spreadsheet. It starts with foundations (stage definitions, required fields, intermediary and contact records, permissions and an owner for the system), then the weekly and monthly machinery of updates, partner reports and hygiene, the skills of writing notes and building views, decisions about platforms, migrations and integrations, the dated moments such as go-live and the annual retrospective, team situations like handovers and mergers, and finally specialist work on analytics, automation and conflicts checks.

What repeats is a Friday record update by deal leads, a Monday pipeline pack for the partner meeting, monthly sweeps for stale deals, duplicates and missing fields, a monthly adoption check, quarterly funnel and relationship reports and a yearly configuration review. The Purchase decision, Vendor, Meeting notes, Metrics log and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
