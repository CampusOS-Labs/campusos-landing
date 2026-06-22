---
title: "How we set up a billing infra in a week"
excerpt: "Kidzee Vadgaon Sheri needed a modern billing solution. CampusOS helped them streamline fee collection and daily billing operations."
date: "2026-06-15T10:00:00.000Z"
author:
  name: Amaan 
  picture: ""
ogImage:
  url: ""
---

## the snowball effect

Kidzee Vadgaon Sheri was one of the first schools that gave us a chance at this. When we first talked to the principal there, she was waiting for someone to hear out her problems, it felt like. It couldn't have been any better. The insights we got from her laid the foundation for understanding the market gap that existed.

She mentioned that Kidzee already has a dedicated system that works flawlessly, at what it can do. Which means student syllabus, attendance, and "announcements." But the most important thing, she said, and I quote: "but the most important thing is missing, which is a fee structure and the ability to collect and track everything." We knew this was a big gap, and we wanted to fill it.

The second thing she mentioned is how Meta now charges money for > 256 messages, and they do so with a per-message cost, damn you big evil corp. But it was good for us because now we had an idea of what the problem was.


## a far fetched statement
Calling it billing infra is a far-fetched statement, not because we didn't build it, but because we had a lot of help from our friends at Razorpay. I didn't have a clue what Razorpay was until I attended YC Startup School in Bangalore, and nothing is going to sell me more about a company that can solve real problems then it being backed by YC (though my beliefs have changed for a few)

Razorpay's API docs are decent. We decided to use those docs as building blocks for our billing infra, and within 16 hours and a sleepless night, we had a working billing infra system up and running. The funny part is the KYC took us longer than writing the actual code. If anyone wants to start helping people out with that, there's a free startup idea.

What we built was basically this: a parent would get a custom link based on their invoice information about the unpaid fee, and all they would have to do is click the link, use our Razorpay integration, and complete the payment—and voila, they're done. DB updated for the school, no more reconciliation calls, no more parents that forget or try to delay payments (c'mon guys), and the best part: NO MORE EXCEL SHEETS.

## did prod go down?
