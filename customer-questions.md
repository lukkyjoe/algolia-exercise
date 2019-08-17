Question 1: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

Answer 1: 
Hi George, 
Thanks for writing us. These are great questions! The concepts you're asking about are related, so I'll explain them in tandem. 
Indexing is a way of organizing a number of records with multiple fields. A record can be thought of as one data entry into the index. To give an example: you can consider 'Batman: The Dark Knight' as one record for a movie, and 'The Lego Movie' as another record, but they both belong in an index for movies. 

Indexing your data enables your database to look up results quickly. With regards to Algolia, we give you different ways to index your data (via our API or via the Dashboard). These are discussed in more detail in our documentation on indexing:
https://www.algolia.com/doc/guides/indexing/indexing-overview/. 

Regarding what metrics might be useful to include in 'Custom Ranking', I would first ask: what results are you searching for? 
The metrics that are most relevant will depend on your circumstance, but to give an example: sometimes you may want to use a business metric (such as number of views of sales or an item) to sort your results. 
It may be that serving popular results improves the search experience, so that can be a metric in your custom ranking formula. 

I hope this answers your questions. If I could clarify anything else please don't hesitate to ask.

Best, 
Joseph


Question 2: Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

Answer 2: 
Hi Matt, thanks for writing us. We are sorry to hear that you are not enjoying the new design. We strive to provide the best experience so I'll relay this to our design team. Also, please don't be sorry! We appreciate it and your feedback helps me make our product better. 

May I ask how frequently and systematically you have been clearing and deleting indexes? If your process is repetitive, you could consider leveraging our APIs to delete/clear indexes programmatically. Here is some API documentation that may help you with delete operations (https://www.algolia.com/doc/guides/indexing/synchronization/#delete-objects-by-query). 
I'm also happy to schedule a call at your convenience to go over your workflow pain points in more detail. That will help us iterate towards a smoother dashboard experience, and it might also help me generate ideas on how to help you more immediately. Would you like that?  


Question 3: Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

Answer 3: 
Hi Leo, 
Thanks for reaching out. We're really glad you are considering Algolia for your website. Depending on your needs, integrating Algolia can be very easy and be done in just a few steps!

At a high level, the implementation process follows 3 steps:
1. index your data with us
2. configure any necessary relevance or ranking settings
3. build a search user interface.

Here is a link to more documentation on how to get Algolia up and running: https://www.algolia.com/doc/guides/getting-started/the-implementation-process/. 

To save development time, we also have created a variety of JS libraries to help you assemble and customize your search user interface when you reach that stage. You can browse the libraries with the following link (https://www.algolia.com/doc/guides/search-ui/search-libraries/).

If you want to try out some tutorials on how to get started, you can also visit https://www.algolia.com/doc/tutorials/. We have a variety of tutorials that cater to different tech stacks. 

Does this answer your question? Please let me know if there's any part that is unclear. 

Have a great day!
Joseph