---
post_type: post
title: How to ask for help debugging the right way
short_description: >-
  We've all needed help from somebody else solving an issue, and theres nothing
  wrong with that. Helping each other is one of the great parts of being in a
  team, what we will look at here is how to do this effectively.
date: 2020-05-08T09:09:17.848Z
cover: ''
social_image: how-to-ask-for-help-debugging-the-right-way.jpg
slug: how-to-ask-for-help-debugging-the-right-way
---
If anyone was to tell me that they've never needed help debugging something in their career, I think a suspicious glare would be my only response. We've all needed to ask someone to help us at some time or other, this is healthy as it allows you to learn new approaches to problems and become a better developer. There are however good ways to ask for this help, and bad ways.

I think the foundations of what makes a good way to ask for help is the same as asking for help in life, understanding that it is a two-way relationship and having respect for each other.

## Respect for each other

In debugging I believe this mutual respect includes being aware of the other person's time. I've found people in the development community, specific to my team or the community as a whole, are a helpful bunch and will try to help where they can. 

People however are still busy and have their own projects, clients and a life outside coding. You can show respect for this in three key ways:

1. **Ask for their help** – don't assume that they are able to, preface this as a question where they are able to respond honestly if they can't currently help.
2. **Provide a time frame** – is this an urgent issue, or is it something that could be responded to in the next few days or weeks? Providing this information will help them know if they can help when required.
3. **Provide context of the issue** – by giving as much context of the issue as possible, this will allow time to be spent solving the problem at hand rather than gathering the information, making it more efficient for everyone involved.

## How to provide context of the issue

What do I mean by providing context of the issue? Sometimes I have been asked unspecific questions like 'This \[insert thing] isn't working - can you help?'. The questions I have to go back with is the context that I mean. Where possible, this should be provided upfront to help with efficiency and create less work for the person you're asking.

Obviously the range of things that you might need help debugging is near infinite, but here is my general guide to the type of information that you can give which will help both of you come to a solution as quickly as possible.

1. **What is the functionality you are having issues with?**\
   Is it a specific component? A particular function? Or even a singular line of code? Make sure that the person you are asking for help from knows the exact scope of what it is that you need help with.
2. **What is the expected behaviour?**\
   Try to give details of how you expect this to behave, whether that's in a script or responding to user behaviour. Sometimes its easy to forget what is obvious when you know something, but the other person will probably be coming into this completely cold, so I always go with the approach of being specific and cut out the chance of assumptions.
3. **What is the behaviour that you are currently experiencing?**\
   As much information as possible the better, console errors, debugging information, code snippets. Use your best judgement about what you can give to try to help them help you, more information won't hurt at this point. One that I always try to share if I'm looking at a function or component is also sharing what's passed into it as well.
4. **What have you tried to solve this so far?** \
   This will demonstrate your thought process and in my experience has been the question that has provided the most learning potential, as the person helping may be able to demonstrate why previous attempts didn't solve the issue. It also shows that you have tried to solve it yourself before asking for help.
5. **Where can I see the issue?**\
   Providing a staging link and link to a code repo etc, along with a pointer to the specific files or functions to start looking at, rather than having to trace the issue back themselves, will speed things up greatly.

## An example of asking for help, the right way

Using a recent real world issue where I was asked for help, I have turned it into an example that would have helped me speed up solving the issue.

I have purposefully chosen an example that isn't a very narrow issue. With specific debugging information, this could be fixed just from reading the message. I want to share an example of where when you are struggling with an approach even some base level information can really help.

> Hey Matt. 
>
> I was wondering if you had any time to help me debug an issue I was having with a carousel I am currently working on. It is scheduled to go into testing at the start of next week, so if there is any chance that you could take a look in the next couple of days it would be much appreciated, if this isn't possible then just let me know and I can reach out to other members of the team.
>
> It is supposed to skip to the specific slide when you click on the navigation item and reset the autoplay timer so that it doesn't progress automatically for another 8 seconds for just the carousel being navigated on, however currently when I click on the navigation the autoplay timer is being reset for all carousels on the page.
>
> I have tried moving the global variable with the setInterval within the each loop when I create it, however this stopped the clearInterval from working at all as I no longer had access to the global variable to clear it. This gave me the error: **Uncaught ReferenceError: globalTimer is not defined**
>
> I have also tried storing the setIntervals in an array but I couldn't figure out how to refer back to the corrosponding setInterval depending on the carousel being navigated.
>
> I know that I need a way of having a variable in scope to call this clearInterval against but I'm unsure of how to achieve this.
>
> You can see the current behaviour on the staging site <http://example.com/>, and you can see the carousel modules in the repo here <http://example.com/repo/assets/js/modules/carousel.js>. The example where I tried to move into an array is on the branch **feature/carousel-array-method**.
>
> I hope this is enough information but if there is anything else that you would need to know before being able to take a look then please just let me know and I will get it prepared.
>
> Thanks,\
> Erm... Matt?

If I had received this message without any additional information gathering, I would have known **what** the issue was, **what** we needed to achieve, **what** had previously been tried, **where** I could see the issue and **when** they needed a solution for.

In this real world example, I actually couldn't help the person immediately, but this initial ask and information provided would have allowed me to start looking at the issue without them needing to be available at the same time. Alternatively if the time frame had been immediate, I would have known that I couldn't help and they would have been able to approach an alternative person.

## Making time for understanding

The final step of any help that you have received debugging is to invest some of your time into understanding the solution. The problem you were having has (hopefully) now been solved, and you may have the urge to move onwards, however you must fight this and make sure that you take time for this step.

This is the part that makes sure that you use the opportunity to learn and take on the knowledge shared, otherwise you may well end up at the same issue in the future. Personally I also think this is the final way of showing appreciation to those who have invested time into helping you, making the most out of the time they invested. 

Whenever people help me I always make sure that I take time to do this, and wherever possible I will drop them a note after the fact to say thanks and let them know that it has helped and how. Whenever someone has told me that my help has made something make more sense to them, however big or small, it has been really rewarding to know that, so I always try to make sure I do the same for people who help me.

### Side note update

After showing this post to my girlfriend, who is an amazing writer and helps me by proofreading my writing, it became clear that this isn't just an approach that can be used with development. I sometimes think in a very specific development led mindset, but the foundations of this approach are also helpful when asking for assistance with any aspects of life. If this helps you with your debugging queries, try using it in other aspects of your life as well.