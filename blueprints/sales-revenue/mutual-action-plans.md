---
id: sales-revenue.mutual-action-plans
name: Mutual Action Plans
description: "A shared, dated plan to signature for every serious deal: a team template, buyer-owned steps worked back from go-live, weekly champion updates, slip tracking and plans built for renewals, pilots and enterprise rollouts."
category: business
version: 1.0.0
tags: [sales-revenue, mutual-action-plans, team, enterprise, close-plans, buyer-enablement, deal-execution, go-live]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - metrics-log
    - risk-register
    - operational-checklist
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Mutual Action Plans
          description: "Agreeing a shared, dated plan with the buyer listing every step to signature, so both sides can see what is left and who owns it."
          projects:
            - name: Team mutual action plan template
              description: |-
                ## Purpose
                Every seller who writes a plan from scratch invents a different format, so buyers get a spreadsheet from one rep and a bulleted email from another, and managers cannot read either at a glance. One template with the same columns for step, buyer owner, seller owner, due date, status and definition of done makes plans quick to start and easy to compare across deals.

                ## Milestones
                1. A template with columns for step, buyer owner, seller owner, due date, status and definition of done.
                2. A header block holding the buyer's goal, the go-live date and the signature date.
                3. Two filled examples, one small deal and one enterprise deal, saved beside the template.
                4. The template stored where every seller on the team can copy it in one click.

                ## Notes
                Keep the buyer's language in the header. A plan that opens with their goal reads as their document, not your sales tool.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared plan template with six fixed columns, a goal and dates header and two worked examples is available to every seller."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect any plans sellers have already sent buyers and compare their columns"
                - "Draft the six-column template with a goal and dates header"
                - "Fill in one small and one enterprise example from recent deals"
                - "Review the template with two sellers and adjust it @recurring(yearly)"
            - name: Entry rules for which deals get a plan
              description: |-
                ## Purpose
                A plan for every small enquiry wastes the buyer's patience, while large deals with no plan drift for months. Writing down the trigger, such as a deal reaching solution validation or crossing a size threshold, means sellers know exactly when to propose a plan and managers know which deals should already have one.

                ## Milestones
                1. A written trigger for when a plan becomes expected, tied to a named deal stage.
                2. A deal size or complexity threshold below which a short version is enough.
                3. The rule added to the stage definitions sellers already use.
                4. A list of current open deals that meet the rule but have no plan yet.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-paragraph plan entry rule naming the stage and size threshold is written into the team's stage definitions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the deal stage at which a plan should be proposed"
                - "Set the deal size below which the short plan is enough"
                - "Add the rule to the written stage definitions"
                - "List open deals that meet the rule but have no plan"
                - "Re-check the trigger against last year's won deals @recurring(yearly)"
            - name: Compelling event and go-live date for each deal
              description: |-
                ## Purpose
                Without a date the buyer cares about, a plan is just a list of chores, and buyers do not hurry to finish chores. Finding the event behind the purchase, a contract expiry, a regulatory deadline, a product launch or a new financial year, gives the plan its anchor and gives your champion a reason to push internally.

                ## Milestones
                1. The buyer's compelling event written in their own words for each deal that qualifies for a plan.
                2. The date by which the buyer needs the solution live recorded beside it.
                3. The cost to the buyer of missing that date noted in one sentence.
                4. Deals with no compelling event flagged for a frank conversation with the champion.

                ## Notes
                A date you suggested is not a compelling event. If the champion cannot say what happens if the date passes, treat the date as soft.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every deal that meets the plan entry rule has a compelling event, a go-live date and a stated cost of delay recorded in the CRM."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what you believe drives the date on your largest open deal"
                - "Ask the champion what happens if the solution is not live by that date"
                - "Record the event, go-live date and cost of delay in the deal record"
                - "Flag deals with no real event for a direct conversation"
            - name: Reverse timeline from go-live to today
              description: |-
                ## Purpose
                Sellers plan forwards from today and buyers assume everything will fit, so the signature date is usually a guess. Counting backwards from the go-live date, through implementation, signature, legal, security and business approval, shows whether the timeline is even possible and which step has to start this week.

                ## Milestones
                1. Implementation and onboarding time subtracted from the go-live date to give a latest signature date.
                2. Typical durations for legal, security and approval steps subtracted to give their latest start dates.
                3. Any step whose latest start date has already passed identified.
                4. The reverse timeline shared with the champion and the signature date agreed or reset.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reverse timeline for at least one live deal shows a latest start date for every step and has been reviewed with the buyer's champion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your implementation team how long onboarding takes for a deal this size"
                - "Subtract implementation time from go-live to find the latest signature date"
                - "Work back through legal, security and approval steps to their latest starts"
                - "Walk the champion through the timeline and agree the signature date"
            - name: Standard buyer step library with typical durations
              description: |-
                ## Purpose
                Most deals pass through the same dozen buyer steps, yet sellers rediscover them one surprise at a time: the security questionnaire, the budget committee, the data processing agreement, the supplier set-up form. A library of those steps with the typical duration your won deals actually took lets any seller drop them into a plan on day one.

                ## Milestones
                1. Between ten and twenty buyer-side steps listed from recent won deals.
                2. A typical duration in working days recorded for each step.
                3. A note on who usually owns each step on the buyer's side, by role.
                4. The library attached to the plan template so steps can be copied in.

                ## Notes
                Use actual durations from closed deals, not what buyers promised. The gap between the two is the most useful number in the library.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A step library of at least ten buyer steps, each with an owner role and an actual typical duration, is attached to the plan template."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the last ten won deals and list every buyer step they went through"
                - "Work out the actual working days each step took"
                - "Note the usual buyer-side role that owned each step"
                - "Attach the step library to the team plan template"
            - name: One buyer owner and one seller owner per step
              description: |-
                ## Purpose
                Steps owned by "legal" or "the team" are owned by nobody, and they are the ones that slip. Naming a single person on each side for every line, with the buyer's name chosen by the buyer, turns the plan into a set of personal commitments rather than a wish list.

                ## Milestones
                1. Every step in each live plan carries one named buyer owner and one named seller owner.
                2. Buyer owners confirmed by the champion rather than assumed by the seller.
                3. Steps with unknown buyer owners marked as open questions for the next call.
                4. Seller-side owners from presales, legal and finance told which steps are theirs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No step in any live plan has a team or department as its owner, and every buyer owner has been confirmed by the champion."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Highlight every step in your live plans owned by a department, not a person"
                - "Ask each champion to name the buyer owner for those steps"
                - "Tell presales, legal and finance colleagues which steps they own"
                - "Mark steps with no known owner as questions for the next call"
            - name: First mutual action plan on a live deal
              description: |-
                ## Purpose
                Templates and rules mean little until a buyer has seen a plan and reacted to it. Choosing one live deal with a supportive champion, building the plan with them and running it to signature or a clear no teaches more about what buyers accept than any amount of internal debate.

                ## Milestones
                1. One deal chosen where the champion is engaged and the go-live date is real.
                2. A draft plan built from the template and the step library before the next call.
                3. The plan reviewed and edited with the champion, with their changes kept.
                4. The plan used in every call until signature or a decision not to proceed.
                5. Three lessons from the first plan written down for the team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One live deal has a plan edited by the buyer's champion and used in every call, with three written lessons shared with the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose the open deal with the most engaged champion and a real date"
                - "Draft the plan from the template and step library"
                - "Book thirty minutes with the champion to edit the plan together"
                - "Write three lessons from the first plan and share them with the team"
            - name: Shared plan workspace and buyer access settings
              description: |-
                ## Purpose
                Plans emailed as attachments fork into three versions within a week, and nobody knows which one the buyer's lawyer is reading. A shared workspace, with consistent file names, buyer edit rights where your security policy allows, and a rule for removing access when deals close, keeps one live version on both sides.

                ## Milestones
                1. A folder or workspace structure for plans with one naming convention.
                2. External sharing checked against your company's data and security policy.
                3. Buyer edit or comment rights set on a test plan and confirmed working from outside.
                4. A rule written for removing buyer access once a deal is won or lost.

                ## Notes
                Check with your IT or security team before giving outside editors access to anything. Some buyers cannot open certain sharing services at all, so ask the champion early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named plan workspace with external access tested from a buyer's account and a written access removal rule is in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask IT which external sharing settings are allowed for buyer documents"
                - "Create the plan folder structure and naming convention"
                - "Share a test plan with a colleague outside the company to confirm access"
                - "Remove buyer access from plans for closed deals @recurring(quarterly)"
            - name: Baseline audit of next steps in late-stage deals
              description: |-
                ## Purpose
                Before changing how the team plans deals, it helps to know how bad things are now. Checking every deal past discovery for a dated next step agreed with the buyer, and comparing that with how often those deals slipped last quarter, gives you a starting number to beat and a case to make to the team.

                ## Milestones
                1. Every open deal past discovery checked for a dated, buyer-agreed next step.
                2. The share of deals with such a step recorded as the baseline.
                3. Last quarter's close date slips counted for the same group of deals.
                4. A short note comparing the two numbers shared with the sales manager.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A recorded baseline shows the share of late-stage deals with a dated buyer-agreed next step and last quarter's slip count for the same deals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export open deals past discovery with their next step and next step date"
                - "Count how many have a dated step the buyer actually agreed"
                - "Count close date changes on the same deals last quarter"
                - "Share the two numbers with your manager in a short note"
            - name: Tuesday plan update with each champion
              description: |-
                ## Purpose
                Left alone, a plan goes stale in about ten days, and a stale plan is worse than none because both sides stop trusting it. A short weekly update with each champion, fifteen minutes or a written exchange, marks what moved, re-dates what did not and surfaces the step that is quietly stuck.

                ## Milestones
                1. A weekly slot agreed with each champion who has a live plan.
                2. Every step's status and date confirmed or changed in each update.
                3. Changes written into the plan during the update, not afterwards.
                4. Eight consecutive weekly updates kept on at least one deal.

                ## Notes
                If a champion keeps cancelling the update, treat it as information about the deal rather than a scheduling problem.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live plan has been updated with the buyer's champion at least once in each of the last eight weeks."
                cadence: rolling
              tasks:
                - "Ask each champion for a standing fifteen-minute weekly slot"
                - "Update every live plan with its champion @recurring(weekly:tue)"
                - "Re-date any step that missed its date in the same conversation"
            - name: Monday pass over plans for the week's buyer meetings
              description: |-
                ## Purpose
                Too many sellers walk into buyer calls having last opened the plan a fortnight ago, so the meeting drifts away from the steps that matter. Ten minutes each Monday looking at the plan for every buyer meeting that week means each call opens on the overdue step and ends with a dated commitment.

                ## Milestones
                1. Every buyer meeting in the week matched to its plan on Monday morning.
                2. The overdue or next step for each meeting written as the first agenda item.
                3. One question prepared for each meeting that moves a specific plan step.
                4. The Monday pass kept for six consecutive weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive weeks, every buyer meeting on a deal with a plan opened with that plan's next or overdue step on the agenda."
                cadence: rolling
              tasks:
                - "List this week's buyer meetings and the plan each belongs to @recurring(weekly:mon)"
                - "Put the next overdue step at the top of each meeting agenda"
                - "Write one question per meeting that moves a named step"
            - name: Slipped step log and monthly slip review
              description: |-
                ## Purpose
                Every plan slips somewhere, and the useful question is where and why. Logging each slipped step with the reason the buyer gave, then reviewing the log once a month, shows whether delays cluster around security reviews, budget sign-off or your own contract team, and points to the one fix that would save the most days.

                ## Milestones
                1. A slip log with columns for deal, step, days late, stated reason and real reason.
                2. Every slipped step from live plans entered within a week of the slip.
                3. A monthly review naming the step type that lost the most days.
                4. One change made to the template, step library or seller behaviour from each review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly slip reviews have each named the costliest step type and recorded one change made in response."
                cadence: rolling
              tasks:
                - "Create the slip log with deal, step, days late and reason columns"
                - "Enter every slipped step from this week's plan updates"
                - "Review the slip log and name the costliest step type @recurring(monthly:9)"
                - "Make one change to the template or step library from the review"
            - name: Friday plan health score across open deals
              description: |-
                ## Purpose
                Managers with twenty open plans cannot read them all, but a few signals predict trouble well: no buyer edit in two weeks, three or more overdue steps, a signature date that has not moved while earlier steps slipped. Scoring every plan on those signals each Friday shows which deals need attention next week before the forecast call finds them.

                ## Milestones
                1. Four or five health signals defined, each scored red, amber or green.
                2. Every open plan scored on Friday afternoon.
                3. Red plans assigned an owner and a recovery action for the following week.
                4. The score kept for eight weeks and compared with what actually slipped.

                ## Notes
                Keep the score crude. Five signals that everyone understands beat a weighted formula nobody trusts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of Friday health scores exist for every open plan, with each red plan carrying a named recovery action."
                cadence: rolling
              tasks:
                - "Write the five warning signals and what counts as red for each"
                - "Score every open plan red, amber or green @recurring(weekly:fri)"
                - "Give each red plan an owner and one recovery action for next week"
            - name: Plan adoption and win rate comparison
              description: |-
                ## Purpose
                Use of plans holds up when sellers can see plans help them win, and will quietly drop them if nobody checks. Tracking each month how many qualifying deals have a buyer-edited plan, and comparing win rates and cycle length for deals with and without one, gives the evidence in your own numbers rather than a vendor's.

                ## Milestones
                1. A monthly count of qualifying deals and how many have a buyer-edited plan.
                2. Win rate and average cycle length recorded for deals with and without a plan.
                3. Six months of figures collected before any firm conclusion is drawn.
                4. The comparison shared with the team at a monthly meeting.

                ## Notes
                Start from the **Metrics log** template. Deals with plans are often the healthier deals to begin with, so treat the comparison as a signal, not proof.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of adoption rate, win rate and cycle length figures, split by plan and no plan, are recorded and shared with the team."
                cadence: rolling
              tasks:
                - "Set up a metrics log with adoption, win rate and cycle length columns"
                - "Record the month's adoption and with-plan win rate @recurring(monthly:18)"
                - "Share the comparison with the team after six months of data"
            - name: Quarterly step library refresh
              description: |-
                ## Purpose
                Buyers change how they buy: a new security questionnaire, a procurement platform, an extra approval above a spending limit. Refreshing the step library each quarter with what recent deals ran into keeps new plans realistic and stops sellers relying on durations that were true two years ago.

                ## Milestones
                1. New buyer steps seen in the quarter's deals added to the library.
                2. Typical durations updated from the quarter's actual figures.
                3. Steps that no longer appear marked or removed.
                4. Sellers told what changed in two or three lines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The step library shows a refresh date within the last three months and its durations match the latest quarter's closed deals."
                cadence: cyclic
              tasks:
                - "Refresh the step library from the quarter's closed deals @recurring(quarterly)"
                - "Ask two sellers which buyer steps surprised them this quarter"
                - "Send the team a three-line note on what changed in the library"
            - name: Same-day plan recap after buyer meetings
              description: |-
                ## Purpose
                Commitments made on a call fade within a day, and buyers remember them differently from the seller. Sending a short recap the same day, listing what moved, what was added and who owns the next step, with the plan link, turns spoken agreement into written agreement before memories diverge.

                ## Milestones
                1. A three-part recap format: steps completed, steps changed, next step with owner and date.
                2. Recaps sent the same day for every meeting on a deal with a plan.
                3. The plan updated before the recap goes out, so the two match.
                4. Buyer corrections to recaps written straight into the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every buyer meeting on a deal with a plan in the last month has a same-day recap whose contents match the updated plan."
                cadence: rolling
              tasks:
                - "Save a three-part recap format as an email template"
                - "Ask the agent to draft a recap from your call notes and the plan changes"
                - "Check every plan touched this week has a matching recap @recurring(weekly:thu)"
            - name: Planned versus actual durations from closed plans
              description: |-
                ## Purpose
                Each closed plan, won or lost, holds the real answer to how long things take with buyers like this one. Recording planned and actual dates for every step when a deal closes builds the dataset that makes the step library and every future reverse timeline honest.

                ## Milestones
                1. A closing routine that copies each step's planned and actual dates into one sheet.
                2. The routine run for every deal closed in the month.
                3. Average overrun calculated per step type after twenty closed plans.
                4. The overrun figures fed into the quarterly step library refresh.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Planned and actual dates from at least twenty closed plans are in one sheet, with an average overrun per step type calculated."
                cadence: rolling
              tasks:
                - "Create a sheet for planned and actual dates by step type"
                - "Copy dates from this month's closed plans into the sheet @recurring(monthly:26)"
                - "Calculate the average overrun per step once twenty plans are in"
            - name: Quarter-end signature date reality check
              description: |-
                ## Purpose
                Signature dates cluster on the last week of the quarter because sellers want them there, not because the buyer's steps support it. Three weeks before quarter end, checking each plan whose signature falls in the quarter against its remaining steps and their real durations separates deals that can close from deals that need a frank reset.

                ## Milestones
                1. Every plan with a signature date in the quarter listed three weeks before quarter end.
                2. Remaining steps and their typical durations added up for each plan.
                3. Plans where remaining time is shorter than remaining work flagged.
                4. Flagged signature dates reset with the champion or a specific recovery agreed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every plan with an in-quarter signature date is checked three weeks out, and every flagged plan has a reset date or recovery step recorded."
                cadence: cyclic
              tasks:
                - "List plans with signature dates this quarter three weeks before it ends @recurring(quarterly)"
                - "Add up remaining steps and typical durations for each"
                - "Agree a reset date or recovery step with the champion on each flagged plan"
            - name: Proposing a plan without sounding scripted
              description: |-
                ## Purpose
                Buyers hear "mutual action plan" as sales jargon, and a clumsy ask can make the plan feel like pressure. Learning a plain, permission-based way to offer it, framed around the buyer's go-live date and the work their colleagues will need to do, gets far more buyers to say yes and to edit the plan themselves.

                ## Milestones
                1. Two or three ways of proposing the plan written in your own words.
                2. Each version practised aloud with a colleague playing a sceptical buyer.
                3. The proposal used on three real calls and the buyer reactions noted.
                4. The version that worked best kept as your default.

                ## Notes
                Many buyers respond better to "a shared timeline to your go-live" than to any named method. Use their words, not the methodology's.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The plan has been proposed on three real calls using a practised script, with buyer reactions recorded and a default version chosen."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write three ways to offer a shared timeline in plain words"
                - "Practise each with a colleague playing a sceptical buyer"
                - "Use the best version on your next three qualifying calls"
                - "Note how each buyer reacted and keep the version that worked"
            - name: Questions that reveal how the buyer approves purchases
              description: |-
                ## Purpose
                Champions often do not know their own company's approval path for a purchase this size, and the plan is only as good as what they can tell you. A set of tested questions about the last similar purchase, who signed it, what forms it needed and how long it took fills the plan with real steps instead of guesses.

                ## Milestones
                1. Eight to ten questions written about the buyer's last comparable purchase.
                2. The questions asked on at least three deals and answers recorded in the plans.
                3. Steps added to plans that the champion had not mentioned before being asked.
                4. The best questions added to the team plan template as prompts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The question set has been used on three deals, each producing at least one new plan step, and the best questions are in the template."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write eight questions about the buyer's last purchase of a similar size"
                - "Ask them on your next three plan conversations"
                - "Add any step the champion had not mentioned to that deal's plan"
                - "Put the three most useful questions into the plan template"
            - name: Writing plan steps a buyer will own
              description: |-
                ## Purpose
                Steps written as "legal review" or "technical sign-off" give the owner nothing to do and nothing to finish. Writing each step as a verb, an object and a definition of done, such as "Send redlined order form back to seller", makes ownership obvious and completion checkable by both sides.

                ## Milestones
                1. A short style rule: verb first, one deliverable, a clear definition of done.
                2. Every step in one live plan rewritten to the rule.
                3. The rewritten plan checked with the champion for clarity.
                4. The template's example steps rewritten to the same rule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One live plan and the team template have every step written verb first with a stated definition of done."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a three-line style rule for plan steps"
                - "Rewrite every step in one live plan to the rule"
                - "Ask the champion whether any rewritten step is unclear"
                - "Rewrite the example steps in the team template"
            - name: Handling a buyer who will not commit to dates
              description: |-
                ## Purpose
                Some buyers happily list steps but refuse to put dates on them, and an undated plan cannot slip, so it cannot warn you. Practising responses, such as offering a range, dating only the next two steps, or asking what would have to be true to give a date, keeps the plan useful without forcing a buyer into a promise they will resent.

                ## Milestones
                1. The common reasons buyers give for avoiding dates listed from your own deals.
                2. A response prepared for each reason.
                3. The responses role-played with a colleague.
                4. At least one previously undated plan given dates for its next two steps.

                ## Notes
                A buyer who will date nothing after several honest attempts may not have the authority or the intent to buy. Record that as a qualification signal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Prepared responses exist for each common reason buyers avoid dates, and at least one undated plan now has dated next steps."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the reasons buyers have given you for not dating steps"
                - "Write one response for each reason"
                - "Role-play the responses with a colleague for twenty minutes"
                - "Use one response to date the next two steps on a stuck plan"
            - name: Plan reset call when a deal stalls
              description: |-
                ## Purpose
                When several steps slip at once, the usual reflex is to chase each owner by email, which rarely works. A deliberate reset call, where you and the champion look at the whole plan, admit the original dates are gone and rebuild from the go-live date, often revives a deal that chasing would have finished off.

                ## Milestones
                1. A reset call agenda: what changed, is the go-live date still real, which steps remain, new dates.
                2. The agenda used on at least one stalled deal.
                3. A rebuilt plan with new dates agreed by the champion.
                4. The outcome recorded: deal revived, delayed with a new date, or closed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reset call has been held on a stalled deal using a written agenda, ending in a rebuilt plan or a recorded decision to close the deal."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a four-part reset call agenda"
                - "Pick the plan with the most overdue steps and book a reset call"
                - "Rebuild the plan from the go-live date during the call"
                - "Record whether the deal revived, moved or closed"
            - name: Reading a plan for early warning signs
              description: |-
                ## Purpose
                Plans tell you about a deal long before the buyer does: buyer-owned steps that never move, a champion who edits nothing, a new name appearing on legal steps, a go-live date that quietly vanishes. Learning to spot these patterns, and writing them up as a short list, helps sellers act a month earlier than they otherwise would.

                ## Milestones
                1. Five lost or slipped deals reviewed for what their plans showed beforehand.
                2. A list of eight to ten warning signs with an example of each.
                3. Each warning sign paired with a first response.
                4. The list kept in a shared risk register used in deal reviews.

                ## Notes
                Start from the **Risk register** template, with one row per warning sign and its first response.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of at least eight plan warning signs, each with a real example and a first response, is in the team's risk register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick five lost or slipped deals that had plans"
                - "Note what each plan showed in the month before the loss or slip"
                - "Write the warning signs with one example each"
                - "Add a first response for each sign to the risk register"
            - name: One-page plan summary for the executive sponsor
              description: |-
                ## Purpose
                Senior buyers will not read a forty-line plan, but they decide whether its dates hold. A one-page summary showing the goal, the go-live date, the four or five steps that need their attention and the one decision they owe gives the sponsor a reason to engage and a way to unblock their own people.

                ## Milestones
                1. A one-page summary format with goal, go-live date, key steps and the sponsor's decision.
                2. A summary written for the sponsor on one live enterprise deal.
                3. The champion's view on whether the sponsor should see it recorded.
                4. The summary sent or presented, and the sponsor's response noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page sponsor summary has been produced for a live deal and shared with the sponsor with the champion's agreement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page summary format with four sections"
                - "Ask the agent to condense one live plan into the summary format"
                - "Check with the champion that the sponsor should receive it"
                - "Send the summary and note the sponsor's response"
            - name: Studying won deals to learn your real buying timeline
              description: |-
                ## Purpose
                Every team has a story about how long deals take, and the story is usually shorter than reality. Rebuilding the actual sequence of buyer steps for a handful of recent wins, from first meeting to go-live, shows the true critical path and where your plans should start earlier.

                ## Milestones
                1. Five recent won deals chosen across different sizes or segments.
                2. Each deal's buyer steps rebuilt in order with actual dates from email and the CRM.
                3. The longest step and the most common surprise identified across the five.
                4. Findings written up in one page and added to the step library.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page analysis of five won deals names the longest step and most common surprise, with findings added to the step library."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose five recent wins of different sizes"
                - "Rebuild each deal's buyer steps with real dates"
                - "Name the longest step and most common surprise across them"
                - "Repeat the study with the year's newest wins @recurring(yearly)"
            - name: Choosing a digital sales room or plan tool
              description: |-
                ## Purpose
                Dedicated deal room tools promise shared plans, buyer engagement data and content in one place, but they add another login for the buyer and another bill for you. Comparing two or three options against a shared document you already own, on the criteria buyers and sellers actually care about, avoids paying for features nobody uses.

                ## Milestones
                1. Five or six criteria agreed, including buyer access without an account, CRM sync, security review and cost per seller.
                2. A shared document option and two or three tools scored against the criteria.
                3. A trial run on two live deals with buyer feedback collected.
                4. A decision recorded to buy, to stay with shared documents, or to revisit at a set date.

                ## Notes
                Start from the **Purchase decision** template. Ask your security team about the tool's data handling before any buyer is invited.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the plan tool, based on scored criteria and a two-deal trial with buyer feedback, is filed with the sales manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List what buyers and sellers need from a plan tool"
                - "Score a shared document and two tools against the criteria"
                - "Trial the leading option on two live deals"
                - "Ask both champions what they thought of the tool"
                - "Record the decision and the reasons in the purchase decision page"
            - name: Plan fields and links in the CRM
              description: |-
                ## Purpose
                If the plan lives only in a shared document, managers cannot report on it and the CRM close date drifts away from what the buyer agreed. Adding a few fields, a plan link, a plan status, the last buyer update date and the plan's signature date, joins the two without turning the CRM into a second plan.

                ## Milestones
                1. Four plan fields agreed with whoever runs the CRM.
                2. The fields added and visible on the deal record.
                3. Every live plan's link and dates entered in its deal record.
                4. A simple report listing deals with stale or missing plans.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four plan fields exist on the deal record, are filled for every live plan, and feed a report of stale or missing plans."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the four plan fields with your CRM administrator"
                - "Enter the link and dates for every live plan"
                - "Build a report of deals with no plan or no buyer update in two weeks"
                - "Show the report to the team at the next sales meeting"
            - name: Short and full plan versions by deal size
              description: |-
                ## Purpose
                A thirty-line plan for a modest deal annoys the buyer, while an eight-line plan for a regulated enterprise misses half the approvals. Deciding two versions, a short plan with the five steps every deal needs and a full plan with the step library, and when each applies, matches effort to deal size.

                ## Milestones
                1. A short plan of five to eight steps defined for smaller deals.
                2. A full plan defined that draws on the whole step library.
                3. The size or complexity line between them written into the entry rules.
                4. Both versions tried on at least one live deal each.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Short and full plan versions exist with a written rule for when each applies, and each has been used on at least one live deal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the five steps every deal needs regardless of size"
                - "Save them as the short plan alongside the full template"
                - "Write the line between short and full into the entry rules"
                - "Use each version on one live deal"
            - name: Post-signature steps in every plan
              description: |-
                ## Purpose
                Ending the plan at signature tells the buyer you care about the contract, not their result, and they leave onboarding to start cold. Adding the first steps after signature, the kickoff, data or system access, the first user live and the first value check, keeps the buyer focused on the go-live date and makes the handover far smoother.

                ## Milestones
                1. Four to six post-signature steps agreed with the implementation or onboarding team.
                2. Those steps added to both the short and full templates.
                3. Post-signature steps added to every live plan, with buyer owners where known.
                4. The onboarding team given access to plans for deals near signature.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both plan templates and every live plan include at least four post-signature steps agreed with the onboarding team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the onboarding team which first steps after signature matter most"
                - "Add four to six post-signature steps to both templates"
                - "Add them to every live plan with buyer owners where known"
                - "Give onboarding colleagues access to plans near signature"
            - name: Close date matches the plan's signature step
              description: |-
                ## Purpose
                Forecasts go wrong when the CRM close date reflects hope and the plan reflects the buyer, and the two disagree. A simple rule that the deal's close date always equals the signature step date in the plan, checked monthly, means a slip in the plan shows up in the forecast the same week.

                ## Milestones
                1. The rule written and agreed by the sales manager.
                2. Every live deal's close date aligned with its plan's signature date.
                3. A monthly check listing deals where the two dates differ.
                4. Mismatches fixed within a week of each check.

                ## Notes
                When the dates disagree, the plan wins unless the seller can name the buyer who agreed the other date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, the monthly check has found every mismatch between close date and plan signature date and each has been fixed within a week."
                cadence: rolling
              tasks:
                - "Agree the close date rule with your sales manager"
                - "Align every live deal's close date with its plan signature date"
                - "List deals whose close date differs from the plan @recurring(monthly:3)"
            - name: Buffer rules for the plan's riskiest steps
              description: |-
                ## Purpose
                Security reviews, contract redlines and budget committees almost always run long, and a plan that schedules them back to back has no room to absorb a single delay. Setting buffer rules, such as adding a week after any external review or never scheduling signature in the buyer's month-end close, makes signature dates more believable from the first draft.

                ## Milestones
                1. The three to five steps that most often overrun named from the slip log.
                2. A buffer in working days set for each of them.
                3. The buffers built into the templates and reverse timeline method.
                4. One quarter of plans compared with the buffers to see whether they were enough.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written buffer rules for at least three high-risk steps are built into the templates and checked against one quarter of plans."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Name the steps that overrun most often from the slip log"
                - "Set a buffer in working days for each"
                - "Build the buffers into both plan templates"
                - "Compare the next quarter's overruns with the buffers"
            - name: Retiring plans the buyer has abandoned
              description: |-
                ## Purpose
                A plan no buyer has touched in a month sits in the pipeline looking alive, wasting forecast attention and seller time. A clear rule for when an abandoned plan triggers a last direct question to the champion, and then a decision to close the deal or pause it with a dated restart, keeps the pipeline honest.

                ## Milestones
                1. A written threshold for an abandoned plan, such as four weeks with no buyer edit or reply.
                2. A short, polite message for asking the champion whether the project is still alive.
                3. Each abandoned plan closed, paused with a restart date, or revived.
                4. The monthly sweep kept for a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each month for a quarter, every plan past the abandonment threshold has been closed, paused with a restart date or revived, with the outcome recorded."
                cadence: rolling
              tasks:
                - "Set the number of quiet weeks that marks a plan as abandoned"
                - "Write a short message asking whether the project is still alive"
                - "Sweep plans past the threshold and decide each one @recurring(monthly:14)"
            - name: Buyer feedback on the planning process
              description: |-
                ## Purpose
                Buyers rarely say whether the plan helped them, yet they are the ones who decide whether to engage with the next one. A short question at go-live, asking what the plan made easier and what felt like a sales tactic, tells you which parts to keep and which to cut.

                ## Milestones
                1. Three feedback questions written about the plan itself.
                2. The questions asked of the champion on at least five won deals.
                3. Answers collected in one place.
                4. One change to the template or the way plans are proposed made from the answers.

                ## Notes
                Ask after signature, when the buyer has no reason to be polite about the deal itself.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Feedback on the plan from at least five champions has been collected and has led to one recorded change in the template or approach."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write three questions about how the plan worked for the buyer"
                - "Ask the champion on your next five won deals"
                - "Collect the answers in one shared page"
                - "Make one change to the template from the answers"
            - name: Plan kickoff meeting with the buyer's working group
              description: |-
                ## Purpose
                Plans built with the champion alone often miss what security, legal and finance on the buyer's side already know about their own processes. A forty-five minute kickoff with the buyer's working group, walking through the draft plan step by step, gets owners to accept their steps in front of colleagues, which is when commitments stick.

                ## Milestones
                1. The buyer's working group invited through the champion, with each step owner included.
                2. The draft plan sent two days before the meeting.
                3. Every step walked through, with owners confirming or changing their dates.
                4. The agreed plan sent the same day with the meeting notes.

                ## Notes
                Start from the **Meeting notes** template. Let the champion chair the meeting; your job is to keep the plan on screen and write changes in live.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kickoff with the buyer's step owners has been held on at least one deal and the plan they agreed has been sent the same day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the champion who on their side should attend a plan kickoff"
                - "Send the draft plan two days before the meeting"
                - "Walk every step with its owner and write changes in live"
                - "Send the agreed plan and notes the same day"
            - name: Final ten days before signature countdown
              description: |-
                ## Purpose
                The last ten days hold the steps that most often kill a deal at the line: a missing signatory, a purchase order number nobody requested, a supplier form sitting in someone's inbox. Running a short daily countdown against the plan's final steps, with a checklist both sides can see, catches these while there is still time to fix them.

                ## Milestones
                1. A countdown checklist of every step left before signature, with owners.
                2. Signatory names, purchase order process and supplier set-up confirmed in writing.
                3. A brief daily check of the checklist in the final ten days.
                4. Signature reached on the planned date or a new date agreed with a reason.

                ## Notes
                Start from the **Operational checklist** template, and reuse it for each deal that reaches its final ten days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A deal has reached signature with a completed ten-day countdown checklist showing every final step closed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a countdown checklist from the plan's last steps"
                - "Confirm the signatory names and purchase order process in writing"
                - "Check the countdown with the champion each morning of the final ten days"
                - "Record whether signature landed on the planned date"
            - name: Pilot or proof of concept plan with exit criteria
              description: |-
                ## Purpose
                Pilots without agreed success criteria and an end date drift on for months and end in "we need to test a bit more". A separate plan for the pilot, with three to five measurable criteria the buyer agrees in advance, a review meeting on a fixed date and the decision that follows a pass, turns the pilot into a step towards signature instead of a detour.

                ## Milestones
                1. Three to five success criteria written and agreed by the buyer before the pilot starts.
                2. A start date, an end date and a review meeting date fixed.
                3. The decision that follows a passed pilot written into the plan.
                4. The review held and the result recorded against each criterion.

                ## Notes
                If the buyer will not say what happens after a successful pilot, the pilot is research for them, not a step in a buying process.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot has run against buyer-agreed success criteria and ended in a review on its planned date, with the result and next decision recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft three to five measurable pilot success criteria"
                - "Agree the criteria, end date and review date with the champion"
                - "Write the post-pilot decision into the deal's plan"
                - "Score the pilot against each criterion at the review meeting"
            - name: Handover meeting from sales to implementation
              description: |-
                ## Purpose
                Customers lose patience when the implementation team asks questions the seller answered months ago. Walking the implementation lead through the plan, the buyer's goal, the go-live date, the people and every promise made, before the customer kickoff, means the buyer meets a team that already knows their story.

                ## Milestones
                1. The plan, notes and every written commitment gathered in one handover pack.
                2. An internal handover meeting held before the customer kickoff.
                3. The implementation lead's questions answered and gaps noted.
                4. The buyer introduced to the implementation lead with the plan's post-signature steps.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "An internal handover using the plan was held before the customer kickoff, and the buyer was introduced to the implementation lead with the post-signature steps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather the plan, notes and written commitments into a handover pack"
                - "Book an internal handover with the implementation lead"
                - "Answer the implementation lead's questions and note any gaps"
                - "Introduce the buyer to the implementation lead by email"
            - name: Team launch workshop for mutual action plans
              description: |-
                ## Purpose
                Sellers adopt plans when they see a peer win with one and practise the conversation themselves, not when a manager sends a template. A ninety-minute workshop with a real example, a role play of proposing the plan and every seller building one for a live deal gets the whole team started in the same week.

                ## Milestones
                1. A workshop agenda: why plans, one real example, role play, build your first plan.
                2. A seller who has used a plan invited to tell the story of that deal.
                3. Every seller leaves with a draft plan for one live deal.
                4. A follow-up check booked two weeks later to see which plans reached a buyer.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A team workshop has been held where every seller drafted a plan for a live deal, followed two weeks later by a count of plans shared with buyers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the ninety-minute workshop agenda"
                - "Ask a seller who used a plan to tell the story of that deal"
                - "Run the workshop with each seller drafting a plan for a live deal"
                - "Count which drafts reached a buyer two weeks later"
            - name: Your first plan as a new account executive
              description: |-
                ## Purpose
                New sellers inherit a pipeline they barely know and are often unsure whether a buyer will welcome a plan from someone new. Building a first plan on a deal where you have a good relationship, with a manager or experienced colleague reviewing it before it goes out, builds confidence and shows the team you run deals with discipline.

                ## Milestones
                1. One deal chosen where you have spoken to the champion at least twice.
                2. A draft plan reviewed by your manager or an experienced colleague.
                3. The plan proposed to the champion and edited together.
                4. Four weekly updates completed on the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new seller has proposed a reviewed plan to a champion and kept four weekly updates on it."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick the deal where you know the champion best"
                - "Draft the plan from the team template"
                - "Ask your manager to review the draft before you send it"
                - "Propose the plan to the champion and edit it together"
            - name: Coaching plans in sales one-to-ones
              description: |-
                ## Purpose
                Managers who only ask "is there a plan?" get plans that exist on paper and nowhere else. Looking at one seller's plan in each weekly one-to-one, asking which step is weakest and who on the buyer's side last touched it, builds the habit faster than any rule and shows the manager where each seller needs help.

                ## Milestones
                1. One plan reviewed in each seller's weekly one-to-one.
                2. Three standard coaching questions agreed for plan reviews.
                3. One specific action per review recorded in the one-to-one notes.
                4. A quarter of plan reviews completed for every seller.

                ## Notes
                Start from your usual one-to-one notes and keep plan feedback to one action, so it does not crowd out the rest of the conversation.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every seller has had one plan reviewed in their one-to-one each week for a quarter, with one recorded action per review."
                cadence: rolling
              tasks:
                - "Write three coaching questions for reviewing a plan"
                - "Review one seller's plan in their one-to-one @recurring(weekly:wed)"
                - "Record one specific action from each plan review"
            - name: Parallel workstreams in an enterprise plan
              description: |-
                ## Purpose
                Enterprise deals run security, legal, technical validation, commercial approval and procurement at the same time, each with its own leads on both sides. Organising the plan by workstream, with a lead per stream and one shared critical path to signature, stops a single linear list hiding which stream is actually holding up the date.

                ## Milestones
                1. The plan regrouped into four or five workstreams, each with a buyer and seller lead.
                2. Dependencies between workstreams marked, such as legal waiting on security.
                3. One critical path to signature drawn across the streams.
                4. A weekly check with workstream leads held for at least six weeks.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An enterprise deal plan is organised by workstream with named leads, marked dependencies and a critical path, reviewed weekly for six weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Group the plan's steps into four or five workstreams"
                - "Name a buyer and seller lead for each workstream"
                - "Mark which steps wait on other workstreams"
                - "Run a short check with the workstream leads @recurring(weekly:wed)"
            - name: Rebuilding the plan on an inherited deal
              description: |-
                ## Purpose
                Taking over a deal mid-cycle, after a colleague leaves or territories change, often means inheriting a plan that is out of date or one the buyer never really agreed. Treating the handover as a fresh start, confirming the goal, the go-live date and every owner with the champion, avoids building on promises nobody remembers making.

                ## Milestones
                1. The previous seller's plan, notes and commitments gathered and read.
                2. An introductory call held where the champion confirms the goal and the go-live date.
                3. Every step's owner and date re-confirmed or changed.
                4. A rebuilt plan sent to the champion under your name.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An inherited deal has a rebuilt plan, with goal, go-live date and every owner confirmed by the champion within three weeks of handover."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the previous seller's plan, notes and sent emails"
                - "Book an introductory call to confirm the goal and go-live date"
                - "Re-confirm every step's owner and date with the champion"
                - "Send the rebuilt plan under your name"
            - name: Renewal plans that start before the notice period
              description: |-
                ## Purpose
                Renewals of large contracts need the same approvals as the original purchase, and they arrive just as the customer's notice period is about to close. Starting a renewal plan well before the contract end date, with budget confirmation, any re-run security review and the signatory named, avoids last-minute discounts given only because time ran out.

                ## Milestones
                1. Contracts ending in the next four months listed with their notice periods.
                2. A renewal plan template with the approval steps renewals usually need.
                3. A renewal plan opened for each contract inside the window.
                4. Each renewal signed before its notice date, or the reason it was not recorded.

                ## Notes
                Check notice periods and auto-renewal clauses in the contract itself, not from memory. Ask your legal or finance team if the wording is unclear.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contract ending in the next four months has a renewal plan opened, and renewals are signed before notice dates or the reason recorded."
                cadence: rolling
              tasks:
                - "Build a short renewal plan template from the standard steps"
                - "List contracts ending in the next four months and open renewal plans @recurring(monthly:5)"
                - "Confirm the renewal signatory and budget owner for each"
            - name: Five-line plan for smaller team deals
              description: |-
                ## Purpose
                Sellers handling dozens of mid-sized deals cannot run a full plan on each, so they skip planning entirely. A five-line plan sent in the body of a follow-up email, covering decision meeting, paperwork, signature, kickoff and go-live with dates, gives smaller deals most of the benefit in five minutes.

                ## Milestones
                1. A five-line plan format written as an email snippet.
                2. The snippet used on ten smaller deals.
                3. Buyer replies confirming or changing dates logged in the CRM.
                4. Cycle length for those ten deals compared with similar deals without one.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten smaller deals have received a five-line dated plan by email, with buyer responses logged and cycle length compared."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the five-line plan as an email snippet"
                - "Send it in the follow-up on your next ten smaller deals"
                - "Log each buyer's confirmed or changed dates"
                - "Compare their cycle length with similar deals"
            - name: Three-way plan with a partner or reseller
              description: |-
                ## Purpose
                Deals sold with a reseller, systems integrator or consultancy have three parties making commitments, and the buyer often hears different dates from each. A single plan showing buyer, partner and vendor owners on every step, agreed with the partner first, stops the deal falling into the gaps between organisations.

                ## Milestones
                1. The partner's own process steps, such as their quote and order, added to the plan.
                2. Each step owned by a named person at the buyer, the partner or your company.
                3. The plan agreed with the partner before it goes to the buyer.
                4. A regular three-way plan check held until signature.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A partner-involved deal has one plan with named owners from all three parties, agreed by the partner and reviewed regularly to signature."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the partner which of their own steps belong in the plan"
                - "Assign every step to a named person at one of the three parties"
                - "Agree the plan with the partner before the buyer sees it"
                - "Hold a three-way plan check with partner and buyer @recurring(weekly:thu)"
            - name: Plans for buyers with fixed committee dates
              description: |-
                ## Purpose
                Hospitals, banks, universities and many large firms approve significant purchases only at committees that meet monthly or quarterly, and missing one can cost a whole cycle. Building the plan around those fixed dates, with paper deadlines for each committee pack, turns an invisible calendar into the plan's backbone.

                ## Milestones
                1. The buyer's approval committees and their meeting dates for the next two quarters listed.
                2. The paper or pack deadline before each committee confirmed.
                3. Plan steps dated backwards from the committee you are aiming for.
                4. A fallback committee date recorded in case the first is missed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A plan for a committee-driven buyer shows the target committee, its pack deadline and a fallback date, with earlier steps dated backwards from them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the champion which committee must approve the purchase and when it meets"
                - "Find out the deadline for submitting papers to that committee"
                - "Date the plan's earlier steps backwards from the pack deadline"
                - "Note the next committee date as the fallback"
            - name: Plan behaviour as a predictor of winning
              description: |-
                ## Purpose
                Once a year or two of plans exist, they become data: how quickly the buyer first edits, the share of buyer steps done on time, the number of resets. Analysing which plan behaviours separated won from lost deals gives the team evidence-based warning thresholds instead of instinct.

                ## Milestones
                1. At least forty closed plans gathered with their outcomes.
                2. Four or five plan behaviours measured for each, such as on-time buyer step rate.
                3. The behaviours compared between won and lost deals.
                4. Two or three thresholds written into the plan health score.

                ## Notes
                Treat small samples with caution. A pattern in forty deals is a hypothesis to watch, not a law.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An analysis of at least forty closed plans compares behaviours between won and lost deals and adds two or more thresholds to the health score."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Gather at least forty closed plans with their outcomes"
                - "Measure on-time buyer step rate and time to first buyer edit for each"
                - "Compare the measures between won and lost deals"
                - "Rerun the analysis with the quarter's closed plans @recurring(quarterly)"
            - name: Mutual plan during a competitive bake-off
              description: |-
                ## Purpose
                When a buyer runs a formal evaluation of several vendors, their timetable sets the pace and your plan can look presumptuous. Building a plan that mirrors the buyer's evaluation stages, then adds the steps from their decision to go-live, shows you respect their process while keeping the path after selection in view.

                ## Milestones
                1. The buyer's evaluation timetable and scoring stages written into the plan.
                2. Your own deliverables for each stage, such as a demo or reference call, dated.
                3. The steps from vendor selection to go-live added and shared with the champion.
                4. The plan updated after each evaluation stage.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A competitive evaluation has a plan that mirrors the buyer's stages, dates your deliverables and includes post-selection steps agreed with the champion."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the champion for the evaluation timetable and scoring stages"
                - "Date your deliverables for each evaluation stage"
                - "Add the steps from selection to go-live"
                - "Update the plan within a day of each evaluation stage"
            - name: Multi-country rollout plan for a global customer
              description: |-
                ## Purpose
                Global deals often sign a master agreement first and then roll out country by country, each with local approvals, data rules and a local champion. A plan that separates the master signature from each country's rollout, with its own owner and date, stops one slow country holding up revenue from the rest.

                ## Milestones
                1. The master agreement steps separated from country rollout steps in the plan.
                2. Each country given a local buyer owner, local approval steps and a target date.
                3. Local data and contracting requirements checked with your legal team for each country.
                4. A rollout sequence agreed with the global sponsor.

                ## Notes
                Data residency and local contracting rules vary widely. Confirm them with your legal team and the buyer's for each country rather than assuming one rule fits all.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A global deal has a plan with a separate master signature track and dated rollout steps for each country, agreed with the global sponsor."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Split the plan into a master agreement track and country tracks"
                - "Ask the global sponsor for a local owner in each country"
                - "Check local data and contracting needs with your legal team"
                - "Agree the rollout order with the global sponsor"
---

# Mutual Action Plans

This area is for account executives and enterprise sales teams who want every serious deal to have a plan the buyer helped write, with each step to signature dated and owned on both sides. It starts with the foundations (a team template, entry rules, the buyer's go-live date, a reverse timeline and a library of standard buyer steps), then the weekly and monthly machinery that keeps plans current, the skills of proposing and running a plan, decisions about tools, CRM rules and plan variants, the dated moments such as kickoff and handover, situations from a first plan to an inherited deal or a partner-led sale, and finally the specialist work of plan analytics, bake-offs and multi-country rollouts.

What repeats is a Tuesday plan update with each champion, a Monday pass over the week's buyer meetings, a Friday plan health check, monthly reviews of slipped steps, close date mismatches, abandoned plans and adoption numbers, and a quarterly refresh of the step library and its real durations. The Purchase decision, Meeting notes, Metrics log, Risk register and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
