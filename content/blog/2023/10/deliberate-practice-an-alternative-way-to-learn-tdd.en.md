---
title: 'Deliberate Practice: An Alternative Way to Learn TDD'
description: 'Deliberate practice is a learning method used by elite athletes, actors, and musicians, which can also be applied in programming.'
author: pedropardal
date: 2023-10-31T00:00:00.000Z
layout: post
tags: [tdd, buenas-practicas]
images: [/images/blog/posts/practice-makes-perfect-cover.jpg]
featured_image: /images/blog/posts/practice-makes-perfect-cover.jpg
card_image: /images/blog/posts/practice-makes-perfect-cover.jpg
---

Have you ever **found yourself stuck** while practicing TDD, refactoring, software design, or any other programming-related skill?

Do you feel like you've run out of katas to solve, and the ones available are too simple?

Perhaps it's because **you're practicing with the wrong approach**.

To get the most out of practicing with katas, we need to employ a very specific practice technique: [deliberate practice](https://jamesclear.com/deliberate-practice-theory).

## What is deliberate practice?

Deliberate practice is a method for **practicing any skill**, especially those that require repetition to master a technique. It involves:

- **Breaking down** a skill into its most elementary components, or **sub-skills**.
- Practicing and improving each component **separately**, consciously.
- Identifying our weaknesses and **focusing on improving** them.

The idea is that instead of just practicing in a generic manner, what we're going to do is: focus on practicing a very specific sub-skill, we're going to **automate everything else**, and we're going to practice this specific sub-skill consciously and competently. The more precise we are, the better.

We do this to **avoid mindless repetition**, i.e., repeating a task over and over again without reflecting on our performance, only to realize that we're not improving and we're wasting time or, at best, progressing much slower.

The idea is to create a **virtuous cycle of feedback**: by being more specific about what we're practicing, we'll see more specific flaws and be able to identify more specific improvement actions more quickly.

![](/images/blog/posts/deliberate-practice-time.png)

## Identificar las sub-habilidades

The first step to employing deliberate practice is to **break down the skill we want to practice into sub-skills**.

For example, let's say we're paddle tennis players and we want to improve our forehand shot. Instead of just practicing forehand shots "however they come out" (and getting frustrated because they don't come out well), we can start by breaking down the skill "hitting a good forehand shot" into:

- Reading the ball
- Getting into position
- Angle of impact
- Footwork
- Proper bending
- Control and direction
- Adding power
- Tactics and positioning on the court
- etc. etc.

![](/images/blog/posts/padel.webp)

Now, in the next practice session, we'll focus solely on "reading the ball". This will free our mind to ask questions like: What happens when it comes from different angles? What if it comes with more or less power? What if it has spin? When should I step forward and meet it? When should I bend down? When should I give more space?

## Back to TDD
Returning to TDD, if we want to practice it in this way, the first step would be to identify: what sub-skills can we break down the skill of "developing using TDD" into?

I've done this exercise, and some of the ones that came to mind are:

- Identifying a good first test that serves as a basis for the rest of the problem.
- Writing the simplest test.
- Writing only the production code necessary to turn it green.
- Starting to write the test from the assertion / applying consume-first style.
- Refactoring in small steps.
- Fully characterizing an axis before proceeding.
- Committing at each iteration of the RGR loop.
- Naming tests with expressive names, using domain language and avoiding technical jargon.
- Spotting duplication three times before refactoring.
- Using triangulation to move towards the general solution.
- Formulating hypotheses about the code's functioning in the form of new tests.
- And I'm sure there are many more.

Now imagine that, in the next kata we do, we decide that we want to improve how we name tests with more expressive names. Our mind will be freed up to ask more specific questions, like: how can we describe this case with fewer words, without losing expressiveness? What alternatives do we have to avoid using technical jargon? When do we write specific names or more generic names? Are we using multiple words for the same concept? What is the most appropriate word to refer to each concept? Do all the test names follow a consistent structure that aids readability?

We could never have drilled down so finely without applying this approach.

## In conclusion

We can really apply the deliberate practice technique to any skill we want to learn, whether technical or not. For example, all [elite athletes](https://blog.innerdrive.co.uk/sports/deliberate-practice) improve their technique in this way, as do [musical performers](https://www.modacity.co/blog/deliberate-practice-helps-musicians-learn-faster), actors, speakers, even [poker players](https://www.pokernews.com/strategy/deliberate-practice-four-steps-to-improve-your-poker-game-20411.htm). Focusing on our sector, we could practice: public speaking, preparing a presentation, giving feedback. Or if we bring it down to a more technical level: learning a new language or framework, refactoring, designing quality software… the possibilities are endless.

As you can see, using this approach makes sense to solve the same kata repeatedly, as long as we're practicing different skills: every time we solve the same kata **it will feel like a completely different exercise**.

And let's not forget that when we're solving a kata, the goal is not to reach the solution, but to **take advantage of the process and extract as many learnings as we can**.

Just like life itself.
