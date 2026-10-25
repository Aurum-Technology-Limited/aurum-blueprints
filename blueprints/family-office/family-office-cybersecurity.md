---
id: family-office.family-office-cybersecurity
name: Family Office Cybersecurity
description: "Cyber protection sized for a wealthy family and its office: locked-down accounts and devices, a payment verification rule fraudsters cannot talk past, trained staff and a rehearsed incident plan."
category: personal
version: 1.0.0
tags: [family-office, family-office-cybersecurity, parent, manager, payment-fraud, phishing, incident-response, device-security]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - compliance-control
    - vendor
    - purchase-decision
    - remediation-plan
    - operational-checklist
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Office Cybersecurity
          description: "Protecting the family and office from cyber threats: device security, email fraud and payment verification, staff access and incident response."
          projects:
            - name: Cyber risk picture for the family and office
              description: |-
                ## Purpose
                Wealthy families are targeted because money moves on instructions from a small number of people, often by email or phone, with few controls in between. A one-page risk picture names what attackers would want (wire transfers, account access, private photos, travel plans), who holds the keys, and which three or four weaknesses would hurt most, so every later project starts from the real exposure rather than a vendor's sales list.

                ## Milestones
                1. The assets an attacker would want listed: money movement, accounts, private information and reputation.
                2. Every person who can authorise payments or reach sensitive data named.
                3. The five most likely attack routes scored for likelihood and impact.
                4. A ranked list of the first four weaknesses to fix, agreed with the principal.

                ## Notes
                Start from the **Risk register** template. Keep the finished register in the office's restricted folder, not in shared email: it is a map for an attacker too.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated risk register naming target assets, key people and the top five attack routes, with four ranked fixes signed off by the principal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List who can approve or send money on the family's behalf"
                - "Write down the family data that would cause most harm if leaked"
                - "Ask the agent to draft likely attack scenarios from your list for review"
                - "Score each scenario for likelihood and impact in the register"
                - "Agree the first four fixes with the principal and head of office"
            - name: Inventory of devices, accounts and who holds them
              description: |-
                ## Purpose
                Nobody can protect a phone or an email account they do not know exists. Most families find more than they expect: an old tablet still signed into the principal's email, a house manager's laptop with the bank portal saved, a child's games console linked to a parent's card. A single inventory of devices and critical accounts, with an owner for each, is the list every other control is checked against.

                ## Milestones
                1. Every phone, laptop, tablet and shared computer used for family or office business listed with its owner.
                2. Critical accounts listed: email, banking, custody, cloud storage, domain registrar and social media.
                3. Each account marked with its recovery email and recovery phone number.
                4. Orphaned devices and accounts flagged for retirement or reassignment.

                ## Notes
                Record where an account lives, never its password. The inventory goes in the restricted folder.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory listing every device and critical account with owner and recovery details, reviewed by the office manager and the principal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the devices you personally use for family or office business"
                - "Ask each family member and staff member to list theirs"
                - "Record the recovery email and phone for each critical account"
                - "Flag devices nobody uses that are still signed into accounts"
            - name: Multi-factor authentication on every critical account
              description: |-
                ## Purpose
                Most account takeovers start with a stolen or guessed password, and a second factor stops the large majority of them. Turning it on for email, banking, custody portals, cloud storage and the domain registrar is the single cheapest protection in this area, and app-based or key-based factors resist SIM swap attacks far better than text messages.

                ## Milestones
                1. Multi-factor authentication switched on for every account marked critical in the inventory.
                2. Text message codes replaced by an authenticator app or security key wherever the service allows.
                3. Backup codes stored in the password manager or a sealed envelope in the safe.
                4. A short list of services that cannot do multi-factor authentication, with a compensating control for each.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every critical account in the inventory shows multi-factor authentication enabled, with text codes removed where an alternative exists."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Turn on an authenticator app for your own main email account today"
                - "Work through the inventory and enable a second factor on each critical account"
                - "Store backup codes in the password manager or the safe"
                - "List the services that only offer text codes and decide how to cover them"
            - name: Family and office password manager roll-out
              description: |-
                ## Purpose
                Reused passwords are how one breached shopping site becomes a breached bank account. A password manager with separate family and office vaults gives every account a unique password, lets staff share logins without sending them by message, and means a departing employee's access can be removed in one place.

                ## Milestones
                1. A password manager chosen with business and family plans, shared vaults and an emergency access feature.
                2. Separate vaults set up for the office, each household and each family member.
                3. Principals, finance staff and the house manager using it for every work login.
                4. Shared credentials moved out of spreadsheets, notes apps and message threads.
                5. Emergency access to the principal's vault arranged for a named trusted person.

                ## Notes
                Do not keep the password manager's own master password in the password manager. A written copy in a sealed envelope in the safe is a sensible default.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All principals and office staff log in through the password manager, no shared credentials remain in spreadsheets or messages, and emergency access is configured."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Compare two password managers that offer business and family plans"
                - "Set up the office vault and invite the finance staff first"
                - "Move shared logins out of spreadsheets and message threads"
                - "Configure emergency access to the principal's vault"
                - "Check the vault health report for weak or reused passwords @recurring(quarterly)"
            - name: Payment verification rule for every transfer
              description: |-
                ## Purpose
                Business email compromise is the costliest cyber crime most family offices face: a convincing email, apparently from the principal, a lawyer or a property seller, asks for a wire to new bank details. A written rule that every new payee and every change of bank details is confirmed by a call to a number already on file, never one in the email, stops nearly all of these losses.

                ## Milestones
                1. A one-page payment verification rule written: call-back to a known number, two approvers above a set amount, no exceptions for urgency.
                2. The rule signed by every principal and everyone who can initiate or approve payments.
                3. Banks and custodians told the rule exists and asked to call back on large or unusual instructions.
                4. A trusted contact number list for regular payees kept separately from email.

                ## Notes
                The principal must agree to be called back too. Fraudsters rely on staff being afraid to slow down the boss.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed payment verification rule is in force, acknowledged by every approver and lodged with each bank and custodian."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the call-back rule for new payees and changed bank details"
                - "Set the amount above which two approvers are required"
                - "Get the principal and every payment approver to sign the rule"
                - "Ask each bank to add a call-back on large or unusual instructions"
                - "Build the trusted phone number list for regular payees"
            - name: Email account hardening for principals
              description: |-
                ## Purpose
                Principals' inboxes hold the instructions, deal documents and travel plans that make fraud convincing, and an attacker who reads them quietly for a month can time a fake request perfectly. Hardening those few accounts, checking for hidden forwarding rules and unknown sessions, and moving principals off free personal addresses for family business closes the most valuable door.

                ## Milestones
                1. Each principal's email checked for forwarding rules, filters and connected apps they did not create.
                2. Active sessions and signed-in devices reviewed and unknown ones removed.
                3. Family business moved to an address on the family's own domain with advanced protection turned on.
                4. Login alerts switched on and sent to the principal and the office manager.

                ## Notes
                A hidden rule that forwards or deletes emails containing words like invoice or wire is a classic sign of compromise. If you find one, treat it as an incident, not a tidy-up.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every principal's mailbox has been checked for rules, sessions and apps, uses the family domain for family business and sends login alerts."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Open the principal's email settings and list every forwarding rule"
                - "Remove signed-in devices and connected apps nobody recognises"
                - "Turn on the provider's advanced protection or high-risk account setting"
                - "Send login alerts to both the principal and the office manager"
            - name: Domain and email authentication records
              description: |-
                ## Purpose
                Anyone can send an email that claims to come from the family office's domain unless the domain publishes SPF, DKIM and DMARC records telling receiving servers what is genuine. Setting these up, and registering lookalike domains, makes spoofed emails to banks, staff and advisers far more likely to be blocked or flagged.

                ## Milestones
                1. SPF, DKIM and DMARC records published for every domain the family uses for email.
                2. DMARC moved from monitoring to quarantine or reject once legitimate senders are confirmed.
                3. Domains that are never used for email given a policy that rejects all mail.
                4. The registrar account locked, with multi-factor authentication and auto-renewal on.
                5. The most obvious lookalike domains registered or watched.

                ## Notes
                Moving straight to a reject policy can block the accountant's billing system or the newsletter tool. Monitor reports for a few weeks first.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every family domain publishes SPF, DKIM and an enforcing DMARC policy, and the registrar account is locked with multi-factor authentication."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every domain the family owns and which ones send email"
                - "Ask the IT provider to publish SPF, DKIM and a monitoring DMARC record"
                - "Review DMARC reports for unknown senders before enforcing"
                - "Lock the registrar account and turn on auto-renewal"
            - name: Mobile phone and SIM swap protection
              description: |-
                ## Purpose
                Phone numbers are a weak point: a criminal who persuades a mobile carrier to move a principal's number to a new SIM receives every text code and can reset bank and email passwords within the hour. A port-out lock or account PIN with the carrier, plus removing the phone number as a recovery method where possible, takes that route away.

                ## Milestones
                1. A port-out lock, SIM PIN or account password set with the carrier for every principal's number.
                2. The phone number removed as a password recovery method on critical accounts where an alternative exists.
                3. Each principal's phone set with a strong passcode, automatic updates and remote wipe.
                4. A note of what to do within minutes if a phone suddenly loses signal for no reason.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every principal's mobile account has a port-out lock or PIN, and no critical account relies on that number alone for recovery."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Call the carrier and set a port-out lock or account PIN on your own number"
                - "Do the same for each principal and the finance lead"
                - "Swap phone-number recovery for an app or key on critical accounts"
                - "Turn on remote locate and wipe on every principal's phone"
            - name: Cyber incident contact sheet
              description: |-
                ## Purpose
                When a wire goes to a fraudster or a laptop is encrypted by ransomware, the first hour decides how much is recovered, and nobody should be searching email for the bank's fraud line. A one-page contact sheet, printed and kept offline, gives the numbers for banks, the IT provider, the insurer, the lawyer and the incident responder, and says who calls whom.

                ## Milestones
                1. Fraud and recall numbers for every bank and custodian listed.
                2. IT provider, cyber insurer, broker, lawyer and incident response firm listed with out-of-hours numbers.
                3. Who decides, who calls the bank and who speaks to the family written in three lines.
                4. Printed copies placed in the office safe and with each principal, away from any computer.

                ## Notes
                Speed matters most with wire fraud: banks can sometimes recall a transfer if they are told within hours, rarely after days.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A printed contact sheet with bank fraud lines, provider, insurer, lawyer and responder numbers is held offline by the office and each principal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the fraud and recall number for each bank and custodian"
                - "Add the insurer, lawyer and IT provider's out-of-hours numbers"
                - "Write who decides and who calls the bank in an incident"
                - "Print the sheet and give copies to each principal"
                - "Ring every number on the sheet to confirm it still works @recurring(yearly)"
            - name: Written cybersecurity policy for the office
              description: |-
                ## Purpose
                Staff cannot follow rules nobody wrote down, and insurers increasingly ask to see them. A short policy covering acceptable use, passwords and multi-factor authentication, payments, personal devices, travel, reporting suspicious messages and what happens when someone leaves gives everyone the same standard and gives the office something to point to after an incident.

                ## Milestones
                1. A policy of no more than six pages drafted and reviewed by the IT provider.
                2. Separate one-page rules written for household staff who use family devices or Wi-Fi.
                3. The policy approved by the principal and issued to every staff member.
                4. Signed acknowledgements collected and filed.

                ## Notes
                Start from the **Compliance control** template. A policy that is too long to read will not be followed; put the payment rule and the report-it rule on the first page.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved cybersecurity policy and a household staff one-pager are issued, with a signed acknowledgement on file for every staff member."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the six topics the policy must cover"
                - "Ask the agent to draft the policy from your list for the IT provider to review"
                - "Write the one-page version for household staff"
                - "Collect a signed acknowledgement from every staff member @recurring(yearly)"
            - name: Monthly security update and patch check
              description: |-
                ## Purpose
                Unpatched phones and laptops are how most commodity attacks get in, and family devices are often the worst offenders because nobody is responsible for them. A monthly check that every device in the inventory is on a supported operating system with current updates turns patching from an assumption into a fact.

                ## Milestones
                1. Automatic updates switched on for every device in the inventory.
                2. Devices on unsupported operating systems identified and scheduled for replacement.
                3. A monthly record showing each device's update status.
                4. Browsers and remote access tools included, not only operating systems.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly patch record exists for twelve consecutive months, showing every inventoried device updated or flagged for replacement."
                cadence: rolling
              tasks:
                - "Switch on automatic updates on every device you can reach this week"
                - "List devices too old to receive security updates"
                - "Check every device's update status and record it @recurring(monthly:9)"
                - "Replace or retire the oldest unsupported device"
            - name: Weekly payment fraud exception review
              description: |-
                ## Purpose
                Fraud attempts leave traces long before money is lost: a payee asking to change bank details, an invoice from a lookalike address, a call-back that went unanswered. Reviewing these exceptions every week with the finance lead catches patterns, shows whether the verification rule is actually being followed, and keeps the rule alive after the first enthusiasm fades.

                ## Milestones
                1. A simple log of bank detail change requests, failed call-backs and suspicious invoices.
                2. A weekly fifteen-minute review held between the office manager and the finance lead.
                3. Any payment released without a call-back recorded and followed up.
                4. A quarterly summary of attempts shared with the principal.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The exception log is reviewed weekly, every bank detail change has a recorded call-back, and a quarterly summary reaches the principal."
                cadence: rolling
              tasks:
                - "Set up the exception log with columns for date, payee, request and call-back"
                - "Review the exception log with the finance lead @recurring(weekly:wed)"
                - "Follow up any payment released without a call-back"
                - "Send the principal a summary of attempted frauds @recurring(quarterly)"
            - name: Quarterly phishing simulation and refresher
              description: |-
                ## Purpose
                Phishing training sticks only when it is repeated and realistic. A short simulated phishing email each quarter, written to look like the messages the office really receives (a custodian statement, a courier notice, a request from the principal), followed by a ten-minute refresher for anyone who clicked, keeps staff alert without turning it into a blame exercise.

                ## Milestones
                1. A simulation tool or the IT provider's service set up for office and household staff.
                2. Four simulations run in a year, each themed on a real lure the office has seen.
                3. Click and report rates recorded per quarter.
                4. A short refresher delivered to anyone who clicked, within a week.

                ## Notes
                Measure reports as well as clicks. A team that reports quickly is worth more than one that never clicks but never says anything.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four phishing simulations run in twelve months, with click and report rates recorded and a refresher delivered after each one."
                cadence: cyclic
              tasks:
                - "Ask the IT provider whether a simulation service is included"
                - "Choose a lure based on a real phishing email the office received"
                - "Run the simulation and record click and report rates @recurring(quarterly)"
                - "Give a ten-minute refresher to anyone who clicked"
            - name: Joiner, mover and leaver security routine
              description: |-
                ## Purpose
                A departing housekeeper who still knows the Wi-Fi password, a former assistant still in the principal's calendar, a driver with the gate code: leavers are a quiet, constant risk in a family with many staff. A checklist run on every start, role change and departure, covering accounts, devices, door codes and shared vaults, closes access on the day it should close.

                ## Milestones
                1. A joiner, mover and leaver checklist covering accounts, devices, shared vaults, Wi-Fi, alarm and gate codes.
                2. Every departure in the last year checked against the list and any leftover access removed.
                3. Device return and wipe confirmed for each leaver.
                4. A monthly check that the staff list and the account list still match.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The checklist is completed for every joiner, mover and leaver, and a monthly reconciliation shows no account for anyone who has left."
                cadence: rolling
              tasks:
                - "Write the leaver checklist, including Wi-Fi, alarm and gate codes"
                - "Check last year's leavers for access that was never removed"
                - "Compare the staff list with active accounts and vaults @recurring(monthly:14)"
                - "Change shared Wi-Fi and door codes after any household staff departure"
            - name: Ransomware-resistant backups for family and office data
              description: |-
                ## Purpose
                Ransomware encrypts everything a compromised computer can reach, including backups on a connected drive or a synced cloud folder. Keeping at least one copy offline or in immutable storage, and proving each month that it can be restored, means the office can recover without paying and the family's photographs and archives survive.

                ## Milestones
                1. The data that matters listed: office files, accounting data, email, family photographs and archives.
                2. At least one backup copy kept offline or in storage that cannot be altered or deleted for a set period.
                3. A monthly test restore of a real file recorded.
                4. Recovery time for the office's core files estimated and agreed with the principal.

                ## Notes
                Cloud sync is not a backup: if a file is encrypted on the laptop, the encrypted version syncs everywhere.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An offline or immutable backup exists for all listed data, and twelve monthly test restores are recorded in a year."
                cadence: rolling
              tasks:
                - "List the data the family and office could not bear to lose"
                - "Ask the IT provider whether any backup copy is offline or immutable"
                - "Restore one real file from backup and record the result @recurring(monthly:22)"
                - "Agree an acceptable recovery time for the office's core files"
            - name: Login and security alert triage
              description: |-
                ## Purpose
                Login alerts are only useful if someone reads them. Banks, email providers, the password manager and the domain registrar all send warnings about new devices, password resets and unusual sign-ins, and in most families they land unread in a principal's inbox. A single shared alert mailbox and a weekly triage, with urgent alerts phoned through at once, turns noise into early warning.

                ## Milestones
                1. Security alerts from critical services routed to a monitored shared mailbox as well as the account owner.
                2. A short guide to which alerts need a phone call now and which can wait for the weekly review.
                3. A weekly triage of the alert mailbox recorded.
                4. Any unexplained alert investigated with the account owner within a day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared alert mailbox is triaged weekly with a written record, and every unexplained alert has a recorded follow-up within one day."
                cadence: rolling
              tasks:
                - "Create a shared security alert mailbox for the office"
                - "Route alerts from email, banks and the password manager to it"
                - "Write the short list of alerts that need an immediate phone call"
                - "Triage the alert mailbox and record anything unexplained @recurring(weekly:mon)"
            - name: Annual cyber risk review with the family
              description: |-
                ## Purpose
                Once a year the family's exposure changes more than anyone notices: a new home, a child at university abroad, a business sale in the news, a new adviser. An annual review of the risk register with the principals, the office manager and the IT provider resets priorities, confirms the budget and records what was fixed, so security does not quietly decay after the first year's effort.

                ## Milestones
                1. The risk register updated for changes in homes, people, advisers and public profile.
                2. Last year's fixes confirmed done or carried forward with a reason.
                3. Incidents and near misses from the year summarised.
                4. Next year's top priorities and budget agreed and minuted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review meeting updates the risk register, records last year's fixes and minutes next year's priorities and budget."
                cadence: cyclic
              tasks:
                - "List what changed in the family's homes, people and profile this year"
                - "Summarise incidents and near misses for the meeting"
                - "Hold the annual cyber risk review and minute the priorities @recurring(yearly)"
                - "Update the risk register with the agreed changes"
            - name: Adviser and bank cyber due diligence cycle
              description: |-
                ## Purpose
                Advisers hold some of the family's most sensitive data: the lawyer's trust deeds, the accountant's tax files, the private bank's statements and the property agent's purchase documents. A yearly questionnaire on how each adviser protects that data, how they verify instructions and how they would tell the family about a breach exposes the weak link outside the office walls.

                ## Milestones
                1. Every adviser and institution holding sensitive family data listed.
                2. A short security questionnaire sent covering multi-factor authentication, encryption, payment verification and breach notification.
                3. Answers scored and the weakest two advisers raised with them directly.
                4. Secure file transfer agreed with each adviser in place of email attachments.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A yearly questionnaire is returned by every adviser holding sensitive data, answers are scored and secure file transfer is in place with each."
                cadence: cyclic
              tasks:
                - "List advisers and institutions that hold sensitive family data"
                - "Draft a ten-question security questionnaire for advisers"
                - "Send the questionnaire and score the replies @recurring(yearly)"
                - "Agree a secure file transfer method with each adviser"
            - name: Home network security check for each residence
              description: |-
                ## Purpose
                Every residence has its own router, cameras, alarm panel and guest Wi-Fi, usually installed by different contractors and rarely touched again. A quarterly check that each home's router firmware is current, the admin password has been changed from the default, and guests and staff are on a separate network from family devices keeps the homes from being the easy way in.

                ## Milestones
                1. Each residence's router, mesh system and network devices recorded with who installed them.
                2. Default admin passwords changed and remote administration turned off unless needed.
                3. Separate networks for family, staff and guests, and for cameras and smart devices.
                4. A quarterly firmware and settings check recorded for every home.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every residence has segmented family, staff and guest networks with changed admin passwords, and a quarterly firmware check is on record."
                cadence: cyclic
              tasks:
                - "Find out who installed the router and network at each home"
                - "Change default router admin passwords at each residence"
                - "Set up separate staff and guest networks away from family devices"
                - "Check router firmware and settings at every residence @recurring(quarterly)"
            - name: Breach exposure monitoring for family emails
              description: |-
                ## Purpose
                Credentials from old data breaches are bought and sold for years, and criminals try them against banks and email accounts long after the original site has been forgotten. Watching breach notification services for the family's and office's email addresses each month shows which accounts need a password change before anyone tries them.

                ## Milestones
                1. Every family and office email address registered with a breach notification service or the password manager's monitor.
                2. Accounts found in past breaches given new unique passwords.
                3. A monthly check of new breach notices recorded.
                4. Family members told in plain words when their address appears in a new breach.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All family and office email addresses are monitored, past breached passwords have been changed and a monthly check is recorded."
                cadence: rolling
              tasks:
                - "Check your own email address against a breach notification service"
                - "Register every family and office address for breach alerts"
                - "Change passwords on any account exposed in a past breach"
                - "Review new breach notices and tell affected family members @recurring(monthly:27)"
            - name: Recognising business email compromise and invoice fraud
              description: |-
                ## Purpose
                Invoice fraud works because the emails are usually genuine accounts that have been hijacked, sent at the right moment in a real transaction. Learning the common patterns (a changed bank account on a property deposit, a lawyer's urgent closing funds request, a supplier's new remittance details, a principal travelling and unreachable) lets the finance team recognise them in the moment rather than afterwards.

                ## Milestones
                1. Six common fraud patterns written up with a real or realistic example of each.
                2. Warning signs listed: urgency, secrecy, changed details, a slightly different address, a reply-to that does not match.
                3. Finance and personal assistant staff walked through the examples.
                4. Each person able to say what they would do on receiving one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Finance and assistant staff have worked through six written fraud patterns and can each state the response the payment rule requires."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect two suspicious emails the office has already received"
                - "Write up six common invoice and wire fraud patterns"
                - "Walk the finance staff through each example in a short session"
                - "Ask each person what they would do on receiving one"
            - name: Deepfake voice and video impersonation awareness
              description: |-
                ## Purpose
                Cloned voices and live video deepfakes of executives have already been used to authorise large transfers, and a principal with interviews or speeches online is easy to imitate. Knowing what these attacks look like, and agreeing a simple verification step such as a family code word or a call-back on a known number, means a convincing voice on the phone is never enough on its own.

                ## Milestones
                1. Principals and finance staff shown real examples of voice and video impersonation.
                2. A rule that no voice or video call alone can authorise a payment or a password reset.
                3. A private verification phrase or question agreed between principals and key staff.
                4. The rule added to the payment verification policy.

                ## Notes
                Keep the verification phrase out of email and messaging apps, and change it if anyone who knows it leaves.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Principals and finance staff have seen impersonation examples, and a written rule plus a private verification phrase are in force."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find two published examples of voice or video impersonation fraud"
                - "Show them to principals and finance staff in one short session"
                - "Agree a verification phrase in person, never in writing online"
                - "Add the no voice-only approval rule to the payment policy"
            - name: Social engineering risks for household staff
              description: |-
                ## Purpose
                Household staff are often the easiest people to approach: a caller posing as the alarm company asks for the code, a delivery driver photographs the gate, a friendly stranger asks a nanny about the family's travel dates. Short, respectful training for housekeepers, drivers, nannies and security staff on what not to share, and who to call when unsure, protects them as well as the family.

                ## Milestones
                1. The usual approaches listed: fake service calls, delivery pretexts, social media questions, requests for codes or schedules.
                2. A short session held with household staff in the language they are most comfortable in.
                3. One named person staff call when anything feels wrong, with no penalty for asking.
                4. Rules on photographs and posting about the family's homes and travel agreed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All household staff have attended a session, know the named person to call and have agreed the rules on sharing photographs and schedules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ways a stranger could approach staff at each home"
                - "Prepare a short session in plain language for household staff"
                - "Name one person staff can call when unsure, at any hour"
                - "Agree the rules on photographs and social media posts"
            - name: Safe devices and networks while travelling
              description: |-
                ## Purpose
                Travel concentrates risk: hotel and airport Wi-Fi, devices left in rooms, border inspections in some countries, and itineraries shared with many people. Learning a few habits, such as using a personal hotspot or a trusted VPN, carrying a travel laptop with minimal data, and never charging from unknown ports, means principals can work abroad without exposing the office.

                ## Milestones
                1. A one-page travel device guide written for principals and travelling staff.
                2. A travel laptop or tablet prepared with only the data and accounts needed for trips.
                3. Rules agreed on hotel Wi-Fi, public charging and leaving devices in rooms.
                4. A check after each trip for anything unusual on devices and accounts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written travel device guide exists, a minimal travel device is ready, and principals have read and agreed the rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the devices principals usually take abroad"
                - "Draft the one-page travel device guide"
                - "Prepare a travel laptop with only the accounts needed on trips"
                - "Agree a post-trip device check with the IT provider"
            - name: Reading a cyber insurance policy
              description: |-
                ## Purpose
                Cyber policies differ widely and the exclusions matter more than the limit: many exclude losses where the insured voluntarily sent a wire, require specific controls to be in place before cover applies, or only cover the office entity and not the family's personal accounts. Learning to read one, with the broker beside you, makes the insurance decision and any later claim far less painful.

                ## Milestones
                1. The main sections of a sample policy understood: insuring clauses, definitions, exclusions, conditions and the claims process.
                2. Social engineering and funds transfer fraud cover distinguished from computer fraud cover.
                3. Control conditions that could void cover listed, such as multi-factor authentication or backups.
                4. Questions for the broker written down.

                ## Notes
                Insurance terms vary by market and insurer. The broker and the family's lawyer, not this project, decide what a clause means for you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sample or existing policy has been read with notes on cover, exclusions and control conditions, and a list of broker questions is ready."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the broker for a sample cyber policy wording"
                - "Ask the agent to summarise the exclusions and conditions for you to check"
                - "Mark where funds transfer fraud and social engineering are covered"
                - "Write the questions to raise with the broker"
            - name: Incident response basics for non-technical principals
              description: |-
                ## Purpose
                Principals do not need to understand malware, but they do need to know what to do and what not to do in the first hour: call the bank before anything else on a fraudulent wire, do not switch off an infected computer, do not pay a ransom without advice, do not discuss it on the compromised email. A short briefing gives them a calm script instead of guesswork.

                ## Milestones
                1. The first-hour steps for wire fraud, ransomware, a lost phone and a hacked email written on one page.
                2. A thirty-minute briefing held with each principal.
                3. Each principal knows where the printed contact sheet is.
                4. The insurer's notification requirements noted, including any time limit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each principal has had a briefing on first-hour steps for four incident types and can locate the printed contact sheet."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the first-hour steps for four common incidents on one page"
                - "Check the insurer's rules on how fast a claim must be notified"
                - "Book a thirty-minute briefing with each principal"
                - "Confirm each principal knows where the contact sheet is kept"
            - name: How attackers research and target wealthy families
              description: |-
                ## Purpose
                Attackers start with what is public: company filings, property records, news of a business sale, children's social media, staff profiles listing the employer. Understanding how that open information is pieced together into a convincing phishing email or fake invoice shows the office which details matter, and feeds directly into the risk picture and the training.

                ## Milestones
                1. The main public sources an attacker would use listed for this family.
                2. A sample attacker's profile built from public information only, with the IT provider or a specialist.
                3. The three details that would most help a fraudster identified.
                4. Findings passed to whoever handles the family's privacy and public profile.

                ## Notes
                Keep this to understanding the fraud risk. Removing data from registries and the web is a separate privacy project.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A short written profile of what an attacker could learn publicly exists, with the three most useful details flagged and shared with the privacy lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search your own name and the office name as an attacker would"
                - "List public sources that mention the family, homes or staff"
                - "Note the three details a fraudster would find most useful"
                - "Share the findings with whoever manages the family's privacy"
            - name: Managed security provider selection
              description: |-
                ## Purpose
                Few family offices can employ their own security staff, so the realistic choice is a managed IT or security provider. The right one understands that the clients are a family as well as an office, covers homes and personal devices, answers out of hours and explains risk plainly; the wrong one installs tools and sends monthly reports nobody reads.

                ## Milestones
                1. Requirements written: office and home coverage, personal devices, out-of-hours response, travel support.
                2. Three providers compared on services, response times, references from similar clients and price.
                3. Contract terms checked for data handling, liability and exit.
                4. A provider chosen and a quarterly service review scheduled.

                ## Notes
                Start from the **Vendor** template. Ask each provider how they would handle a principal's lost phone at two in the morning in another time zone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three providers are scored against written requirements, one is chosen with contract terms reviewed, and quarterly service reviews are booked."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the requirements, including homes and personal devices"
                - "Ask three providers for proposals and two client references each"
                - "Score the proposals and check contract exit terms"
                - "Hold a service review with the chosen provider @recurring(quarterly)"
            - name: Cyber insurance cover decision
              description: |-
                ## Purpose
                Cyber insurance can pay for incident response, data recovery and some fraud losses, but only if the policy covers the right entities and people and the family meets its control conditions. Deciding with the broker whether to buy cover, at what limit and with which extensions, including personal cyber cover for the family's homes, is a decision to make before an incident, not after.

                ## Milestones
                1. The office's and the family's exposures summarised for the broker.
                2. Quotes or indications obtained for office cover and personal family cyber cover.
                3. Funds transfer fraud and social engineering sub-limits compared.
                4. The decision to buy, extend or decline recorded with reasons.

                ## Notes
                Answer the insurer's proposal questions accurately. Overstating controls can give the insurer grounds to refuse a claim.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on office and personal cyber cover, with limits, sub-limits and the broker's comparison attached, is filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the broker what cyber cover the office and family hold today"
                - "Prepare a summary of controls and exposures for the proposal form"
                - "Compare the funds transfer fraud sub-limits in each quote"
                - "Record the decision and the reasons in the office file"
            - name: Separating family and office devices and accounts
              description: |-
                ## Purpose
                Shared devices blur every control: a principal reads office email on a tablet the grandchildren play games on, the house manager pays invoices from a personal phone, everyone logs into the same family computer. Separating office work onto managed devices and accounts, and keeping personal use apart, means a child's downloaded game cannot reach the payment system.

                ## Milestones
                1. Shared devices identified where office and personal use mix.
                2. Office email, banking and payment approval moved to managed devices for each person who handles them.
                3. Personal devices allowed only within written rules, such as a work profile or app protection.
                4. The shared family computer removed from any office account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Payment approval and office email happen only on managed devices, and no shared family device is signed into an office account."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List devices where office and personal use are mixed"
                - "Decide which people need a managed office device"
                - "Move payment approval onto managed devices only"
                - "Sign the shared family computer out of all office accounts"
            - name: Encrypted messaging standard for sensitive conversations
              description: |-
                ## Purpose
                Sensitive conversations about deals, health, travel and family disputes often happen on whichever app each person prefers, some encrypted end to end and some not, and with chat backups stored unencrypted in the cloud. Agreeing one standard app and settings for sensitive matters, with disappearing messages where appropriate, cuts what a hacked account or lost phone gives away.

                ## Milestones
                1. The apps the family and office use for sensitive matters listed.
                2. One end-to-end encrypted app chosen as the standard for sensitive conversations.
                3. Settings agreed: registration lock, encrypted backups, disappearing messages for named groups.
                4. Family members and key staff set up and shown how to verify a contact.

                ## Notes
                Check whether the office has any duty to keep records of certain communications before turning on disappearing messages. Ask the family's lawyer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One encrypted messaging app is the recorded standard for sensitive matters, with agreed settings applied on every principal's and key staff member's phone."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the apps used today for sensitive family conversations"
                - "Choose one end-to-end encrypted app as the standard"
                - "Turn on registration lock and encrypted backups for each principal"
                - "Ask the lawyer whether any records must be kept before using disappearing messages"
            - name: Hardware security keys for principals and finance staff
              description: |-
                ## Purpose
                Hardware security keys are the strongest common protection against phishing, because they will not work on a fake login page however convincing it looks. Giving principals and anyone who approves payments two keys each, one carried and one in the safe, closes the gap that app codes and text messages still leave open.

                ## Milestones
                1. The people and accounts that most need keys identified.
                2. A key model chosen that works with their phones, laptops and critical services.
                3. Two keys registered for each person on every service that supports them.
                4. Backup keys stored securely and a lost-key procedure written.

                ## Notes
                Start from the **Purchase decision** template. Always register two keys per account; one lost key with no backup can lock a principal out for days.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every principal and payment approver has two registered hardware keys on all supporting critical accounts, with a written lost-key procedure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List which critical services support hardware security keys"
                - "Choose a key model that works with each person's phone and laptop"
                - "Register two keys per person on every supporting service"
                - "Write the procedure for a lost or stolen key"
            - name: Smart home and connected device lockdown
              description: |-
                ## Purpose
                Cameras, video doorbells, smart speakers, lighting systems and alarm apps fill wealthy homes, and each one is a small computer with a login, often still on the installer's default password or the installer's own account. Locking them down protects both the network and the family's privacy inside the house, since a compromised indoor camera is a serious personal breach.

                ## Milestones
                1. Every connected device in each home listed with its app, account owner and installer.
                2. Installer and default accounts replaced with family-owned accounts using unique passwords.
                3. Cameras and smart devices moved to their own network away from family laptops and phones.
                4. Indoor cameras reviewed for where they point and who can view them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every connected device in each home is on a family-owned account with a unique password and sits on a separate network."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Walk one home and list every connected device and its app"
                - "Ask installers to hand over any accounts they still control"
                - "Change default passwords and turn on multi-factor where offered"
                - "Review who can view each indoor camera"
            - name: Secure disposal of old devices and data
              description: |-
                ## Purpose
                Old laptops in a cupboard, phones handed down to staff and hard drives from a closed office still hold email, passwords and family documents. Wiping or destroying them properly, with a certificate for anything that held financial or personal data, removes a risk that grows quietly every time a device is replaced.

                ## Milestones
                1. Every retired device in each home and the office found and listed.
                2. Devices to be reused wiped to factory settings and removed from all accounts.
                3. Drives that held sensitive data destroyed by a certified service, with a certificate kept.
                4. A rule that no device leaves the family without this process.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All retired devices are wiped or destroyed with certificates on file, and a written disposal rule is part of the office policy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather retired phones, laptops and drives from the office and homes"
                - "Remove each device from cloud accounts before wiping it"
                - "Book a certified data destruction service for sensitive drives"
                - "Add the disposal rule to the office cybersecurity policy"
            - name: Laptop and phone protection standard
              description: |-
                ## Purpose
                Laptops and phones carrying office data need the same baseline whoever owns them: full-disk encryption, a screen lock, current endpoint protection and the ability to wipe remotely. Writing that standard down, and having the IT provider enforce it through device management, makes a lost bag at an airport an inconvenience rather than a breach.

                ## Milestones
                1. A device standard written: encryption, screen lock, endpoint protection, remote wipe and update settings.
                2. Every office-managed device enrolled in device management.
                3. Each device's compliance with the standard shown in a report.
                4. A lost-device procedure tested once with a spare device.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every office-managed device appears compliant with the written standard in the device management report, and a remote wipe has been tested."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the five settings every office device must have"
                - "Ask the IT provider to enrol every office device in device management"
                - "Review the compliance report and fix the failing devices"
                - "Test a remote lock and wipe on a spare device"
            - name: Tabletop exercise for a fraudulent wire request
              description: |-
                ## Purpose
                Rehearsing a realistic scenario is the fastest way to find out whether the payment rule and the contact sheet work. In a ninety-minute tabletop, the office walks through a fake but plausible case, such as a lawyer's hijacked email asking for closing funds while the principal is on a flight, and records every point where people hesitated or did not know who to call.

                ## Milestones
                1. A scenario written with three or four twists, such as an unreachable principal or a bank closing for the weekend.
                2. Principals, the office manager, finance staff and the IT provider booked for ninety minutes.
                3. The exercise run and every gap recorded.
                4. A short list of fixes with owners and dates agreed.

                ## Notes
                Ask the incident response firm or IT provider to facilitate so the office team can take part rather than run it.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop exercise has been held with principals and finance staff, and a dated list of fixes with owners has been agreed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a facilitator and agree a date with the principals"
                - "Write the scenario with three twists"
                - "Run the exercise and record every gap"
                - "Assign an owner and date to each fix"
            - name: First independent security assessment of the office
              description: |-
                ## Purpose
                An outside assessment against a recognised framework, such as the NIST Cybersecurity Framework or the CIS Controls, gives the family an honest score instead of the IT provider marking its own homework. Commissioning one after the foundations are in place shows what is genuinely covered and produces a prioritised plan the family can fund.

                ## Milestones
                1. Scope agreed: office, principals' devices and accounts, and at least the main residence.
                2. An independent firm chosen that does not also run the office's IT.
                3. The assessment report received with findings ranked by risk.
                4. A remediation plan with owners, costs and dates approved by the principal.

                ## Notes
                Start from the **Remediation plan** template. Ask for findings in plain language for the family, with technical detail in an appendix for the provider.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An independent assessment report has been received and a remediation plan with owners, costs and dates has been approved by the principal."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the scope covering the office, principals and main residence"
                - "Ask two independent firms for a proposal"
                - "Brief the chosen firm and give them access to the inventory"
                - "Turn the findings into a remediation plan with owners and dates"
            - name: Device and account preparation before a trip abroad
              description: |-
                ## Purpose
                Before a long trip, especially to a country with intrusive border checks or poor network security, a little preparation prevents most problems. Checking which devices travel, removing data not needed, confirming backups and making sure someone at home can lock accounts if a phone is lost turns the travel guide into action for a specific trip.

                ## Milestones
                1. The devices travelling and the data on them agreed with each traveller.
                2. Backups confirmed and unnecessary data or accounts removed from travel devices.
                3. Someone at home briefed to lock accounts or wipe devices if needed.
                4. A post-trip check of devices and accounts completed on return.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Travel devices were prepared and backed up before departure, a home contact was briefed, and a post-trip check is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each traveller which devices they plan to take"
                - "Back up and slim down the travel devices before departure"
                - "Brief someone at home on how to lock accounts remotely"
                - "Run the post-trip device check on return"
            - name: Security onboarding for a new office hire
              description: |-
                ## Purpose
                New hires in the first fortnight are prime phishing targets: their names appear on professional networking sites, they do not yet know who sends what, and they want to please. A short security induction on day one, covering the payment rule, the report-it rule, the password manager and who to ask, sets the habit before anyone tests it.

                ## Milestones
                1. A one-hour security induction agenda written.
                2. Accounts, password manager and hardware key issued before the first day ends.
                3. The policy acknowledgement signed in the first week.
                4. A check-in after thirty days to answer questions and confirm the habits.

                ## Notes
                Warn new starters that fraudsters often email new staff pretending to be the principal. Tell them the principal will never ask for gift cards or secret transfers.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each new hire completes the security induction on day one, signs the policy in week one and has a thirty-day check-in recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the one-hour security induction agenda"
                - "Issue accounts and the password manager before the first day ends"
                - "Collect the signed policy acknowledgement in week one"
                - "Book a thirty-day security check-in"
            - name: Live cyber incident response and post-incident review
              description: |-
                ## Purpose
                If an incident happens, the order of actions matters: contain it, call the bank or insurer, preserve evidence, then recover and tell the people who need to know. Running a real incident through this project keeps decisions recorded as they are made, and the review afterwards turns a bad week into lasting fixes rather than relief and forgetting.

                ## Milestones
                1. The bank, insurer and incident responder notified within the time limits that apply.
                2. A timeline of what happened and every decision kept as the incident unfolds.
                3. Affected accounts and devices contained and recovered.
                4. Legal and notification duties confirmed with the lawyer.
                5. A post-incident review held and its fixes added to the risk register.

                ## Notes
                Talk about the incident by phone or on a separate clean account, never on the compromised email. Do not pay any ransom or extortion demand without advice from the incident responder, lawyer and insurer.
              priority: high
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A recorded timeline, confirmed notifications and a post-incident review with fixes logged in the risk register exist for the incident."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Call the bank fraud line first if any money has moved"
                - "Start a timeline of events and decisions on paper or a clean device"
                - "Notify the insurer and incident responder using the contact sheet"
                - "Ask the agent to draft the post-incident review from the timeline"
                - "Add the agreed fixes to the risk register"
            - name: Security set-up for a new residence or office move
              description: |-
                ## Purpose
                Moving into a new home or office brings a new router, alarm, cameras and contractors, all set up in a rush with default passwords and the installer's accounts. Treating the move as a security project from the start, with the IT provider involved before the installers finish, avoids inheriting a previous owner's devices or a contractor's open remote access.

                ## Milestones
                1. The IT provider briefed before networks, cameras and alarms are installed.
                2. Any devices left by the previous owner reset or removed.
                3. Installer accounts handed over and default passwords changed before final payment.
                4. The new property added to the inventory and the quarterly home network check.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new property's network, cameras and alarm are on family-owned accounts with changed passwords and appear in the inventory before move-in."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Brief the IT provider on the move date and installers"
                - "Reset or remove smart devices left by the previous owner"
                - "Hold back final payment until installer accounts are handed over"
                - "Add the property to the inventory and home network check"
            - name: Children's devices and online safety rules
              description: |-
                ## Purpose
                Children in wealthy families face the ordinary online risks and some particular ones: posts that reveal homes, holidays and school routines, approaches from strangers who know who their parents are, and games or apps linked to a parent's card or account. Age-appropriate rules agreed as a family, with parental controls set properly, protect the child and close a route into the parents' accounts.

                ## Milestones
                1. Each child's devices, apps and accounts listed with a parent.
                2. Parental controls and privacy settings set to match each child's age.
                3. Children's devices and accounts separated from parents' payment and email accounts.
                4. Family rules agreed on location sharing, posting about homes and travel, and who to tell when something feels wrong.
                5. A monthly device check-in held in a relaxed way.

                ## Notes
                Rules work better when children help write them. Explain why travel and home photographs matter rather than simply banning them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Each child has age-appropriate controls, no link to parents' payment or email accounts, and the family rules are written and agreed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sit with each child and list their devices and apps"
                - "Set parental controls and privacy settings for each child's age"
                - "Remove parents' cards and accounts from children's devices"
                - "Hold a relaxed device check-in with each child @recurring(monthly:5)"
            - name: Cyber safety for older family members
              description: |-
                ## Purpose
                Older relatives are targeted with tech support scams, fake bank calls and messages pretending to be a grandchild in trouble, and in a wealthy family the amounts at stake can be very large. Setting up their devices simply and safely, agreeing a family verification habit and checking in regularly protects them without taking away their independence.

                ## Milestones
                1. Each older relative's devices updated, with automatic updates and a password manager or simple written system.
                2. Bank alerts and a call-back arrangement set up with their bank where they agree.
                3. A family rule that any urgent money request from a relative is checked by calling them back.
                4. A trusted family member named to call before acting on anything unusual.

                ## Notes
                Respect their choices. Arrangements such as shared access to accounts need their consent and, where relevant, advice from the family's lawyer.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each older relative's devices are updated, a call-back rule is agreed and a named family contact checks in weekly."
                cadence: rolling
              tasks:
                - "Ask each older relative what devices and banking apps they use"
                - "Help them turn on automatic updates and bank alerts"
                - "Agree the call-back rule for urgent money requests from family"
                - "Call to ask about any odd calls or messages @recurring(weekly:sun)"
            - name: Security for students leaving home
              description: |-
                ## Purpose
                University or a first job abroad means a young adult managing their own devices for the first time, often with access to family accounts, a credit card linked to a family entity, or trust distributions arriving in their bank account. A short preparation before they leave covers their own accounts, what they share publicly about the family and who to call if something goes wrong.

                ## Milestones
                1. The student's accounts set up with a password manager and multi-factor authentication.
                2. Any access to family or office accounts reviewed and reduced to what they need.
                3. A conversation held on public posts, shared accommodation and campus networks.
                4. The incident contact sheet adapted for them, including the office's number.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Before departure the student uses a password manager with multi-factor authentication, has reduced family account access and holds a personal contact sheet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the family accounts the student can currently reach"
                - "Set them up with the password manager and an authenticator app"
                - "Talk through what not to post about the family and homes"
                - "Give them a personal copy of the incident contact sheet"
            - name: Security in a one or two person office
              description: |-
                ## Purpose
                Small offices, where one manager does payments, IT, staff and travel, cannot run every routine in this area. A short checklist of the controls that matter most (multi-factor authentication, the payment call-back, backups, updates and a contact sheet) run monthly, with an outside provider for the rest, gives most of the protection at a fraction of the work.

                ## Milestones
                1. The ten controls that matter most chosen and written on one page.
                2. Tasks that need a second person, such as second payment approval, assigned to a principal or adviser.
                3. An outside provider engaged for monitoring and out-of-hours help.
                4. A monthly checklist run recorded.

                ## Notes
                Start from the **Operational checklist** template. The second payment approver can be a principal on a mobile app, but it must never be the same person who set up the payment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page checklist of ten controls is run and recorded monthly, with a second payment approver named outside the manager."
                cadence: rolling
              tasks:
                - "Choose the ten controls that matter most for your office"
                - "Name a second payment approver who is not you"
                - "Run the one-page security checklist @recurring(monthly:18)"
                - "Agree out-of-hours cover with an outside provider"
            - name: Digital access during separation or divorce
              description: |-
                ## Purpose
                Divorce and separation create sudden digital risks: shared passwords, a spouse's devices signed into family accounts, location sharing, joint cloud photo libraries and staff unsure whose instructions to follow. Handling access calmly and fairly, guided by the lawyers, protects family and office data without anyone acting in a way that later looks improper.

                ## Milestones
                1. Shared accounts, devices, location sharing and cloud libraries listed.
                2. The lawyers' guidance obtained on what can be changed and when.
                3. Office access changed in line with that guidance, with a record kept.
                4. Staff told clearly whose instructions they follow for payments and household matters.

                ## Notes
                Do not delete or alter shared data without legal advice; it may be needed as evidence. This project handles access, never the legal case.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Shared access is listed, changes are made only in line with recorded legal guidance, and staff have written instructions on authority."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List shared accounts, devices and location sharing in confidence"
                - "Ask the family's lawyer what access may be changed and when"
                - "Change office access as advised and record each change"
                - "Give staff written instructions on whose payment requests they act on"
            - name: Securing digital asset wallets and recovery phrases
              description: |-
                ## Purpose
                Digital assets held directly are irrecoverable if a recovery phrase is stolen or lost, and families are targeted with fake wallet apps, phishing and physical threats. Organising custody, recording who holds what, storing recovery phrases on durable media in separate secure locations and planning access for heirs reduces the chance of a total loss, without making any judgement about the holdings themselves.

                ## Milestones
                1. Every wallet, exchange account and custodian listed with its owner, without recording keys or phrases in the list.
                2. Exchange and custodian accounts protected with hardware security keys and withdrawal allow-lists where offered.
                3. Recovery phrases stored on durable media in at least two secure, separate locations.
                4. An access plan for heirs agreed with the estate lawyer.
                5. Backup locations checked once a year.

                ## Notes
                Never type a recovery phrase into a computer, photograph it or store it in the cloud. This project is about safekeeping only; tax, legal and investment questions go to the right professional.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All digital asset holdings are listed, recovery phrases are stored offline in two separate places and an heir access plan is agreed with the lawyer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each wallet, exchange and custodian without writing any keys"
                - "Add hardware security keys and withdrawal allow-lists on exchange accounts"
                - "Move recovery phrases to durable media in two secure locations"
                - "Agree an heir access plan with the estate lawyer"
                - "Check that each recovery phrase backup is intact @recurring(yearly)"
            - name: Penetration test and social engineering test
              description: |-
                ## Purpose
                Penetration tests show what an attacker could actually do rather than what a questionnaire says, and a social engineering test checks whether staff follow the payment and verification rules under pressure. Once the basics are mature, a scoped test of the office systems, a principal's home network and the payment process gives hard evidence of where defences hold and where they fail.

                ## Milestones
                1. Scope and rules of engagement agreed in writing, including which homes, systems and staff are in scope.
                2. A qualified independent tester engaged under a contract with clear limits.
                3. The report received with findings ranked and evidence attached.
                4. Findings fixed and the most serious ones retested.

                ## Notes
                Tell the bank and the IT provider in advance if the test touches payment processes, and never let a test include real money movement.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A scoped penetration and social engineering test report is received, every critical finding is fixed and retested, and the retest is recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the scope and rules of engagement with the IT provider"
                - "Ask two qualified testers for proposals"
                - "Tell the bank about any test touching payment processes"
                - "Fix and retest the critical findings"
            - name: Security monitoring and response service
              description: |-
                ## Purpose
                Logs from email, devices, the firewall and cloud accounts show an intrusion early, but only if someone watches them around the clock. A managed detection and response service, or monitoring from the IT provider, gives a family office the watch that only large firms could once afford, provided the alerts reach someone who can act and the reports are actually read.

                ## Milestones
                1. The sources to monitor chosen: email, managed devices, cloud storage and network.
                2. A monitoring or managed detection service contracted with written response times.
                3. An escalation path agreed, including out-of-hours calls to a named person.
                4. Monthly reports reviewed and any recurring issue raised with the provider.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monitoring service covers email, devices and cloud accounts with agreed response times, and twelve monthly reports are reviewed in a year."
                cadence: rolling
              tasks:
                - "Ask the IT provider what logs are collected today and who reads them"
                - "Compare two managed detection and response services"
                - "Agree the out-of-hours escalation path and named contacts"
                - "Review the monthly monitoring report @recurring(monthly:12)"
            - name: Incident response retainer and forensic readiness
              description: |-
                ## Purpose
                Retainers with an incident response firm mean that, when something serious happens, experienced people start within hours under terms already agreed, often engaged through the lawyer so their work is better protected. Preparing in advance, by agreeing the retainer, checking whether the insurer requires a panel firm and confirming logs are kept long enough, makes a real investigation possible.

                ## Milestones
                1. The insurer's panel requirements checked before choosing a firm.
                2. An incident response retainer agreed, engaged through the family's lawyer where advised.
                3. Log retention periods for email, devices and cloud accounts confirmed as long enough for an investigation.
                4. The firm's details added to the incident contact sheet.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed incident response retainer is in place, compatible with the insurer's panel, and log retention periods are confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the broker whether the insurer requires a panel response firm"
                - "Ask the lawyer whether the firm should be engaged through them"
                - "Confirm log retention periods with the IT provider"
                - "Confirm the retainer terms and contacts are still current @recurring(yearly)"
---

# Family Office Cybersecurity

This area is for the family principal and the office manager who know the family is a richer target than most companies its size, with far less protection. It starts with foundations (a risk picture, an inventory of devices and accounts, multi-factor authentication, a password manager, a payment verification rule and an incident contact sheet), then the routines that keep defences current, the knowledge needed to spot fraud and impersonation, decisions on providers, insurance and equipment, dated events from a tabletop exercise to a first assessment, situations such as children's devices, older relatives and a tiny office, and finally specialist work on digital assets, penetration testing, monitoring and forensic readiness.

What repeats is a weekly payment exception review and alert triage, a monthly patch check, restore test and breach scan, a quarterly phishing simulation and home network check, and a yearly family risk review with adviser due diligence. The Risk register, Compliance control, Vendor, Purchase decision, Remediation plan and Operational checklist templates pair with the risk picture, the written policy, provider selection, security keys, the assessment and the small-office checklist. Legal, regulatory and insurance questions after an incident belong with the family's lawyers, broker and a specialist incident responder. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
