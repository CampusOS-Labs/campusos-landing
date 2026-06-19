---
title: "Attendance and Announcements"
excerpt: "We went to Kidzee Mundhwa to listen. Announcements and fees came up, like every Kidzee branch, but what they really wanted fixed was teacher attendance."
date: "2026-06-16T10:00:00.000Z"
author:
  name: Amaan
  picture: ""
ogImage:
  url: ""
---

## What we heard on day one

We went to talk to the Kidzee Mundhwa branch, sat down with their (super sweet) principal and mostly just listened.

Three things kept coming up. **Announcements** are a mess: notices die in WhatsApp groups and teachers spend the next day answering the same questions parents already got an answer to. **Payments**, same story as every other Kidzee branch, slow to reconcile, awkward to chase. But the thing they kept coming back to was **teacher attendance**. No real record of who showed up, when they got in, or whether someone was actually on campus.

Announcements and payments matter. For Mundhwa, attendance was the main thing, so that's where we started.

## What we shipped (in less than a week)

We built teacher check-in around how the branch actually runs:

- QR code at the entrance → opens a simple check-in page on their phone. No app to install.
- Teacher picks their name, taps check in, GPS confirms they're at the school.
- Dashboard shows who's in, who's not, and what time they checked in. Refresh whenever. No paper register at the end of the day.

GPS isn't perfect. Sometimes it thinks you're outside the geofence when you're literally standing at the gate. In that case the teacher can confirm they're on campus and check in anyway. It shows up on the dashboard as a manual override, separate from a normal on-site check-in.

Announcements live on the same dashboard too: WhatsApp messages that land as direct DMs, not buried in a group chat. Fee workflows are next for this branch.

## Why it mattered

They didn't need another ERP. They needed one answer to a question someone asks every morning: *who's here?*

This gave them that, under twenty seconds per teacher, and a record they can actually trust without chasing people on WhatsApp.

## Still v1, figuring it out as we go

What we shipped is a first version. We're still iterating on it, watching analytics on how the school uses the dashboard, where they spend the most time, what they keep coming back to, and using that to decide what to fix next.

For support, we have a personal WhatsApp group with the branch. They message us, we reply, usually within minutes. I love how the Collison brothers think about support, and that's basically what we're going for: stay close, respond like a human, fix things while they're still small. No ticket queue.

We're already thinking about the next version. **Buddy punching**, one teacher checking in for another, is a thing. You can't fully avoid it with a simple QR flow, and we're not pretending otherwise. The hard part is keeping the workflow dead simple and easy to use while still making it harder to misuse. That's the line we're trying to walk right now. Please welcome, NFC tags. More on this soon ;)
