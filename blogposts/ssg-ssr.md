---
title: 'When to Use Static Generation vs Server-side Rendering'
date: '2023-09-14'
---

We reccommend using **Static Generation**(with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for may types of pages, including:
 
 - Marketing Pages
 - Blog Posts
 - E-commerce product listing
 - Help and Documentation

 You should ask yourself: "Can I render this page **ahead** of a user;s request?" If the answer is yes, then you should choose Static Generation.

 On the other hand Static Generation is **not** a good idea if you cannot pre-render a page  ahead of a user's request. Maybe your page showss frequently updated data and the page content changes on every request.

In That case you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date.Or you can skip pre-rendering and use client-side JavaScript to populate data