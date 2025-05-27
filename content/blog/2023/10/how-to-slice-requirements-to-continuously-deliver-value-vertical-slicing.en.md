---
title: 'How to Slice Requirements to Continuously Deliver Value: Vertical Slicing'
description: 'Do you know how to divide the requirements of your software project to deliver value continuously?'
author: pedropardal
date: 2023-10-17T00:00:00.000Z
layout: post
tags: [equipos, agile, buenas-practicas]
images: [/images/blog/posts/elephant-slicing.jpg]
featured_image: /images/blog/posts/elephant-slicing.jpg
card_image: /images/blog/posts/elephant-slicing.jpg
---

When working on a software project of a certain size, we have to divide (slice, or "slice") larger requirements into smaller, more manageable tasks.

There are two ways to do this division: horizontal slicing and vertical slicing.

When we do horizontal slicing, we divide by a technical criterion (usually layers). We have one task for the front end, another for the back end, another for the database, etc.

This approach presents us with 2 problems

- First, we can't deliver the functionality until the very end. Therefore, until then, we won't be adding value to the user.

- Second, it's likely to be more difficult to integrate each part. Who hasn't suffered trying to integrate with the backend and seeing that the implemented endpoints don't match the API contract we agreed upon?

With **vertical slicing**, we define small increments that encompass all components of the application, but that individually provide value, even if it's just a little (a new use case, an error case, etc.).

This way, we deliver value to the user from the very beginning, and we minimize the risks associated with making a big delivery at the end because we are constantly delivering new functionality.

But adding value doesn't just mean delivering new functionality.

Learning about what the user needs or how we're going to build the solution (known as [validated learning](https://solvingadhoc.com/aprendizaje-validado-lean-startup-pilar-fundamental/) in the [Lean Startup](https://www.amazon.es/s?k=the+lean+startup&adgrpid=55178272774) method) is also adding value: we will incorporate this knowledge into our backlog, in the form of new stories, or changes in priority in existing stories, to ensure that the next thing we build is what adds the most value.

Part of this validated learning involves building a [Walking skeleton](https://wiki.c2.com/?WalkingSkeleton): a first iteration of our product, which doesn't even have to be deliverable, where we put together all the components of the application (frontend, backend, database...) in their simplest form. This allows us to tackle one of the riskiest parts of development first, which is integration, with the goal of reducing risk. Furthermore, from here we can start adding "flesh" to the skeleton in successive iterations.

If I haven't convinced you yet, let me tell you that working in this way, with a focus on one increment at a time, and delivering value frequently, is not only better for the user, but it's also more fun and rewarding for us as developers!
