---
title: 'How to write the first test using TDD'
description: 'The first test is one of the most important steps when we develop software using TDD.'
author: pedropardal
date: 2023-10-25T00:00:00.000Z
layout: post
tags: [tdd, agile, buenas-practicas]
images: [/assets/img/blog/posts/birthday-stock.jpg]
featured_image: /assets/img/blog/posts/birthday-stock.jpg
card_image: /assets/img/blog/posts/birthday-stock.jpg
---

The first test is one of the most important steps when we develop using TDD. It's the one that will determine whether we build our solution on solid foundations or unnecessarily complicate our lives.

There are three main things I ask of my first test:

1. Firstly, it should lay out the most important elements that will come into play, or the inputs and outputs of the system (a.k.a. the simplest "given").
2. Secondly, it should define how I will interact with the system, its facade, i.e., what is the public interface of my module or class (a.k.a. the simplest "when").
3. Thirdly, it should capture the behavior of the simplest case involving all elements, or the simplest inputs and outputs (a.k.a. the simplest "then").

The aim here is to define the interfaces of all the pieces that will come into play and make them work as soon as possible with a very simple case, making it easier to incrementally grow the solution by adding more tests later.

## An example: birthday greetings

For example, imagine we are implementing a daily cron job that scrapes our Facebook friends to send them a birthday greeting on their birthday.

To write our first test, we should:

1. **Identify the inputs and outputs**. In this case, the inputs would be the list of Facebook friends, each with their name and birthday date; today's date (to know who is having a birthday today), and the output would be the greetings to be sent today.
2. **Determine how we will interact with the system**. If we prefer a more functional approach, we could define a function `run(friends, currentTime): notifications`. If we opt for a more pipeline-oriented approach, we can define collaborators that provide each piece of information, e.g., `SystemClock`, `FacebookFriendScrapper`, and `BirthdayGreetingSender`. We would inject these collaborators into our SUT, the `GreeterJob`, which would have a single method `run()` that would interact with these collaborators. It depends on each person's style.
3. **Define the simplest behavior**. For example, if there are no friends, regardless of the date, no notifications are sent.

The code for the first test could look like this:
```csharp
[Fact] public void send_no_notifications() {
  var friends = new List<Friend>();
  var currentTime = fixture.Create<DateTime>();

  var greeterJob = new GreeterJob();
  var greetings = greeterJob.Run(friends, currentTime);

  greetings.Should().BeEmpty();
}
```

From here, **writing successive tests is very easy**. We simply play around with variations of the inputs and outputs. What happens when I have more than one friend? What if I have a friend but today is not their birthday? What if I have a friend and today is their birthday? What if I have two friends but today is only one of their birthdays?

This doesn't mean that the public interface of the system won't evolve; **we can always refactor** if we find a design that we prefer. But aiming for something functional from the outset gives us something to hold onto and allows us to progress.

## Many practices, one common philosophy

Notice how the philosophy is very similar to when we do product development on a larger scale. The first thing we do is a [Vertical Slicing](https://abrahamvallez.medium.com/vertical-slicing-i-desaprende-lo-que-sabes-sobre-user-stories-y-pon-el-foco-en-desarrollo-b859c5827326), to identify the minimal expression of each part of our system. Based on that, we set up a [Walking Skeleton](https://wiki.c2.com/?WalkingSkeleton) of our solution, containing all those parts in their minimal expression, but already working together, and then we gradually add flesh to the skeleton in successive iterations.

Working with the same philosophy at both macro and micro levels makes each phase of development fit together better and gives more sense to the process as a whole. Often, the answer to questions about how to do certain things lies in the rest of the practices we use at other levels.

--

You might be interested in:

- [Test-driven development course](https://www.exeal.com/cursos/test-driven-development/)
- [Software development best practices bootcamp](https://www.exeal.com/bootcamp-buenas-practicas/)
