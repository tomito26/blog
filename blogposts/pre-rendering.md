---
title: 'Two Forms of Pre-renderinng'
date: '2023-09-09'
---

Next.js has two forms of pre-rendering: **Static Generatin** and **Server-Side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the prer-rendering method that generates the HTMK at **build time**. The pre-rendered HTML  is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML  on **each request**

Importantly, NextJs lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others