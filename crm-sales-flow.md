# CRM & Sales Flow: GetAccept + Airtable + Zapier

## Context
Leads come from the website into GetAccept. Once signed, the booking flow works fine. The gap: no CRM to track lead status, follow-ups, and lost deals. Airtable fills that gap, with Zapier as the glue. Two-way sync on key statuses (especially "Lost").

---

## Airtable Setup

### Table: Leads

| Field | Type | Notes |
|---|---|---|
| GetAccept ID | Single line text | Primary key shared with GetAccept. Used for all sync lookups |
| Name | Single line text | |
| Email | Email (clickable mailto:) | |
| Phone | Phone (clickable tel:) | |
| Company | Single line text | |
| Service | Single select | Match to your service offerings |
| Requested Date | Date | |
| Message | Long text | |
| Status | Single select | See stages below |
| GetAccept Link | URL | Direct link to the proposal in GetAccept |
| Created | Created time | Auto-set |
| Last Modified | Last modified time | Auto-set |
| Last Contacted | Date | You update manually after each touchpoint |
| Notes | Long text | Free-form notes from calls/emails |
| Deal Value | Currency | Optional, fill in if known |
| Last Synced By | Single select | `Zapier` / `Manual` — hidden field for loop prevention |

### Status stages (Kanban columns)

1. **New Lead** — just came in, not yet contacted
2. **Contacted - Awaiting Reply** — you reached out, waiting
3. **Contacted - No Answer** — called/emailed, no response
4. **Follow-Up Needed** — they replied but need another touch
5. **Proposal Sent** — GetAccept proposal sent
6. **Proposal Viewed** — they opened it (synced from GetAccept)
7. **Signed / Won** — proposal signed
8. **Lost** — deal is dead (two-way synced)

### Views

- **Kanban view** grouped by Status — drag cards between stages
- **Grid view** as fallback for filtering/sorting

---

## Zapier Zaps

### Zap 1: New Lead → Airtable

**Trigger:** New GetAccept document created
**Action:** Create record in Airtable Leads table

- Map: name, email, phone, company, service, date, message
- Set Status = "New Lead"
- Set GetAccept ID = proposal/entity ID
- Set GetAccept Link = proposal URL

### Zap 2: GetAccept status → Airtable

**Trigger:** GetAccept document status changed
**Step 1:** Find Airtable record by GetAccept ID
**Step 2:** Use Zapier Paths:

| GetAccept status | Airtable update |
|---|---|
| `viewed` | Status → "Proposal Viewed" |
| `signed` | Status → "Signed / Won" |
| `rejected` / `expired` | Status → "Lost" |

**Step 3:** Set `Last Synced By = Zapier` on every update

### Zap 3: Airtable Lost → GetAccept

**Trigger:** Airtable record updated
**Filter:** Status = "Lost" AND Last Synced By ≠ "Zapier"
**Action:** GetAccept API — close/reject proposal by ID

---

## Loop Prevention (Critical)

The `Last Synced By` field prevents infinite sync loops:

- **Zap 2** (GetAccept → Airtable): sets `Last Synced By = Zapier`
- **Zap 3** (Airtable → GetAccept): only fires when `Last Synced By ≠ Zapier`
- Manual Airtable changes leave `Last Synced By` as blank/Manual, so Zap 3 fires correctly

---

## Implementation Order

### Step 1: Build the Airtable base
- Create "Leads" table with all fields
- Set up Kanban view grouped by Status
- Add the hidden `Last Synced By` field

### Step 2: Zap 1 — New leads into Airtable
- Connect GetAccept trigger
- Map all fields
- Test with a real lead

### Step 3: Zap 2 — GetAccept status → Airtable
- Trigger on document status change
- Use Zapier Paths for viewed/signed/lost
- Find record by GetAccept ID, update Status + Last Synced By
- Test: sign a test proposal, verify Airtable updates

### Step 4: Zap 3 — Airtable Lost → GetAccept
- Trigger on Airtable record update
- Filter: Status = "Lost" AND Last Synced By ≠ "Zapier"
- Action: GetAccept API to close/reject proposal
- Test: manually mark Lost in Airtable, verify GetAccept updates
- Test loop prevention: confirm it doesn't bounce back

### Step 5: End-to-end verification
- New lead from website → Airtable "New Lead"
- Prospect views proposal → Airtable "Proposal Viewed"
- Prospect signs → "Signed / Won"
- Mark lost in Airtable → GetAccept closes it
- Mark lost in GetAccept → Airtable shows "Lost", no loop

---

## Notes
- GetAccept API for closing proposals: likely `PUT /documents/{id}` with status field
- Zapier Professional needed for 2-min polling and multi-step zaps
- Clickable email/phone fields in Airtable give you the contact card UX natively
