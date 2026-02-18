# Laravel app Shopify Webhooks Amazon EventBridge

Build scalable, reliable and robust Shopify Webhooks delivery system to your Laravel app using AWS EventBridge. Lower webhooks response times and failure rates. Increase app ratings!

_**Disclaimer: If your app currently receives webhooks on https endpoint, don’t worry. Setting up Amazon EventBridge is separate process from sending webhooks. In order to start receiving webhooks in EventBridge, you must register EventBridge ARN as webhook destination.**_

It is assumed that you already have AWS account and Shopify App.

### 1. Setting up Amazon EventBridge in Shopify app

First step of setting up Amazon EventBridge partner integration is done in Shopify. To do it, visit “App Setup” screen for your app in Shopify Partners dashboard _https://partners.shopify.com/PARTNER\_ID/apps/APP\_ID/edit_. Find “Event Subscriptions” section and click on “Create source” in Amazon EventBridge card.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-1024x651.png" alt="Event subscriptions section in Shopify Partners app edit screen" height="287" width="451"><figcaption><p>Event subscriptions section in Shopify Partners app edit screen</p></figcaption></figure>

You should be presented with “Create an EventBridge source” modal which lets you setup partner integration for Amazon EventBridge. Firstly, you will need Amazon account id which you can find by logging into your Amazon account and clicking on your account name on the top right. Next, you will need to select region from the dropdown. Lastly, provide “Source name” per your wish.

<div data-full-width="true"><figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-1-1024x754.png" alt="Create EventBridge source modal configured" height="244" width="332"><figcaption><p>Create EventBridge source modal configured</p></figcaption></figure></div>

When you click on create, new “Partner event source” will be configured in AWS account. Check it out by going to AWS -> EventBridge -> Select Integration/Partner event sources from the menu. Name will be in the format of _**aws.partner/shopify.com/SHOPIFY\_APP\_ID/NAME\_YOU\_PROVIDED\_IN\_MODAL**_

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-2-1024x405.png" alt="Newly created" height="183" width="463"><figcaption><p>Newly created “partner event source”</p></figcaption></figure>

### 2. Associating event bus

Next thing we need to do is to associate event bus to our Partner event source. You can do that by clicking newly created partner event source and then clicking on “Associate with event bus” button located on top right part of the page. Additionally, one more thing to notice is “Partner event source ARN” which we will be using later on to register the webhooks in Shopify.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-3-1024x287.png" alt="Partner event source details screen" height="182" width="651"><figcaption><p>Partner event source details screen</p></figcaption></figure>

After you click on “Associate with event bus” button new screen will open. Only thing you can select there are permission groups. For the sake of this tutorial, we won’t select any of it since we want event bus to stay exclusive only for current AWS account. Proceed by clicking on “Associate” button. That action will create new “Custom event bus” and associate it with partner event source.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-4-1024x572.png" alt="Associate with event bus page" height="275" width="493"><figcaption><p>Associate with event bus page</p></figcaption></figure>

You can check newly created Event bus by selecting “Event buses” menu item on the left and find your newly created event bus in “Custom event bus” card.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-5-1024x154.png" alt="Newly created &#x22;Custom event bus&#x22;" height="88" width="584"><figcaption><p>Newly created “Custom event bus”</p></figcaption></figure>

### 3. Creating Rule

This step can be done in multiple different ways per your app needs. Here’s the list of some cases that can work for your app:

1. Rule to match all events and push them to SQS queue
2. Rule to match all events and push them to Lambda
3. Rule to match all events and push them to different event bus
4. Rule to match some events (let’s say only orders related webhooks) and push them to SQS queue or Lambda
5. Rule to match specific event (let’s say GDPR data request) and push it to SNS (or some other AWS service)

We can achieve that by defining custom patterns as described in [https://shopify.dev/apps/webhooks/configuration/eventbridge#define-a-custom-event-pattern](https://shopify.dev/apps/webhooks/configuration/eventbridge#define-a-custom-event-pattern). Since we want to keep it as simple as possible for the sake of this tutorial, we will select first option – matching all events and pushing them to SQS queue.

#### 3.1. Defining rule details

In order to create a new rule, let's select Rules from the left menu, select our event bus and clicking on “Create rule” button.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-6-1024x682.png" alt="Creating new Rule" height="387" width="581"><figcaption><p>Creating new Rule</p></figcaption></figure>

Once new screen opens, first thing we need to define is rule name. Also, we need to select Event bus, but our event bus should already be preselected. Optionally, you can set description per your liking. Then, click on “Next”.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-7-1024x873.png" alt="Step 1 of defining rule completed" height="459" width="539"><figcaption><p>Step 1 of defining rule completed</p></figcaption></figure>

#### 3.2. Defining event pattern

On the next screen, we will be building event pattern. As already mentioned, we will keep it simple and match all events. In the Event pattern dropdown select “EventBridge partners” as Event source, select “Shopify” in Partner dropdown and select “All Events” in Event type dropdown. This will generate new Event pattern on the right side. Keep everything else on default values and click on button “Next”.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-8-1024x734.png" alt="Building &#x22;match all&#x22; event pattern" height="337" width="470"><figcaption><p>Building “match all” event pattern</p></figcaption></figure>

#### 3.3. Defining target

Lastly, we will define the target. Take note that you can define multiple targets for the same rule which can be useful in some situations. For example, when you receive uninstall webhook, you may want to process it in lambda and send notification with SNS. Again, to keep it simple, let’s just push all events to SQS queue.

Prerequisite is to create new SQS queue for these events so we can select it under AWS service target. Head over to SQS (you can do it in new tab) and create new queue. To keep it simple, we will just provide name for it, but you can always configure it per your requirements.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-9-1024x453.png" alt="Creating simple SQS queue" height="236" width="535"><figcaption><p>Creating simple SQS queue</p></figcaption></figure>

After you head back to rule creation step, proceed by selecting “AWS Service”, then selecting “SQS queue” as target and finally selecting newly created “webhooks” queue. Leave additional settings on default values, or play with it per requirements and then click button “Next”.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-10-1024x844.png" alt="Selecting SQS queue as target" height="370" width="449"><figcaption><p>Selecting SQS queue as target</p></figcaption></figure>

Optionally, on the next step, you can define tags, but we will skip it in this tutorial. Finally, review all the steps and click on “Create rule”.

Once the rule is done with creation, that effectively means that all events (webhooks) received in event bus will be sent directly to SQS queue.

### 4. Registering webhooks for Shopify app

Finally, to actually start receiving webhooks, we must register new webhook by using Shopify API – [https://shopify.dev/api/admin-rest/2022-07/resources/webhook#post-webhooks](https://shopify.dev/api/admin-rest/2022-07/resources/webhook#post-webhooks). In this example, we will register “orders/updated” topic with “address” pointing to partner event source ARN we got at step 2 of this tutorial. Here’s the example:

```php
POST https://{SHOP_DOMAIN}/admin/api/2022-07/webhooks.json

{
    "webhook":{
        "topic":"orders/updated",
        "address":"arn:aws:events:eu-west-2::event-source/aws.partner/shopify.com/881426433/webhooks",
        "format":"json"
    }
}

# Response 

{
    "webhook": {
        "id": 1154024800468,
        "address": "arn:aws:events:eu-west-2::event-source/aws.partner/shopify.com/881426433/webhooks",
        "topic": "orders/updated",
        "created_at": "2022-07-24T10:07:49-04:00",
        "updated_at": "2022-07-24T10:07:49-04:00",
        "format": "json",
        "fields": [],
        "metafield_namespaces": [],
        "api_version": "2022-04",
        "private_metafield_namespaces": []
    }
}
```

After updating and order, we will see new message received in SQS.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/Screenshot-2022-07-24-at-16.16.42.png" alt="Webhook delivery log in Shopify" height="364" width="299"><figcaption><p>Webhook delivery log in Shopify</p></figcaption></figure>

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-11-1024x592.png" alt="Message received in SQS" height="195" width="338"><figcaption><p>Message received in SQS</p></figcaption></figure>

The implementation part is now on you and your app requirements. We will now take a look at how to receive Shopify webhooks through EventBridge in your Laravel app.

### 5. Converting messages to Laravel queue jobs

#### 5.1 AWS side

In order to push messages to SQS queue in format of Laravel job, we will need to transform the message to proper format with Lambda and push it to another SQS queue. Finally, we will connect to that SQS queue and start queue worker with `php artisan queue:work`.

We will repeat the same process for queue creation as in 3.3. with the queue name “webhooks-laravel”.

Next, let’s create new Lambda function. Head over to Lambda and click on “Create function”. Make sure you select a role that has a full access to SQS (polling and pushing messages).

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-12-731x1024.png" alt="Creating Lambda function" height="573" width="409"><figcaption><p>Creating Lambda function</p></figcaption></figure>

After new function is created, let’s add our “webhooks” queue (the one we initially created which holds all events from event bus) as a trigger. Proceed by clicking on “Add trigger”.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-14-1024x369.png" alt="Adding lambda trigger" height="155" width="432"><figcaption><p>Adding lambda trigger</p></figcaption></figure>

On the next screen, select SQS, chose “webhooks” SQS queue as trigger and check “Enable trigger” checkbox. You can leave batch size as 10 (maximum). That will effectively take 10 by 10 records when there are multiple events in “webhooks” SQS queue. Finish by clicking on “Add” button. Now, all events that lands in “webhooks” SQS queue will trigger this lambda.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-16-1024x831.png" alt="Configuring trigger" height="402" width="496"><figcaption><p>Configuring trigger</p></figcaption></figure>

Finally, we will need to setup function code which loops through records and pushes them to newly created “webhooks-laravel’ SQS queue. You can take a look at example payload that Shopify sends here: [https://shopify.dev/apps/webhooks/configuration/eventbridge#eventbridge-payload-structure](https://shopify.dev/apps/webhooks/configuration/eventbridge#eventbridge-payload-structure). You can find lambda code here: [https://github.com/ksimenic/aws-shopfiy-webhooks-eventbridge-to-laravel](https://github.com/ksimenic/aws-shopfiy-webhooks-eventbridge-to-laravel).

```php
const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});
const sqs = new AWS.SQS();

const destinationQueueUrl = "https://sqs.eu-west-2.amazonaws.com/XXXXXXXXXXXX/webhooks-laravel";
const jobName = "App\\Jobs\\HandleShopifyWebhook";

exports.handler = async (event, context, callback) => {
    
    await Promise.all(event.Records.map(async (record) => {
        
        const { body, eventSourceARN } = record;
        
        const data = JSON.parse(body);
        
        const shop_domain = data.detail.metadata['X-Shopify-Shop-Domain'];
        const webhook_topic = data.detail.metadata['X-Shopify-Topic'];
        const detail_buffer = Buffer.from(JSON.stringify(data.detail), 'utf-8');
        var full_details = detail_buffer.toString('base64');
        
        const job_details = {
            displayName: jobName,
            job: "Illuminate\\Queue\\CallQueuedHandler@call",
            maxTries: null,
            timeout: null,
            timeoutAt: null,
            data: {
                commandName: jobName,
                command: "O:" + jobName.length + ":\"" + jobName + "\":10:{s:14:\"\u0000*\u0000shop_domain\";s:" + shop_domain.length + ":\"" + shop_domain + "\";s:16:\"\u0000*\u0000webhook_topic\";s:" + webhook_topic.length + ":\"" + webhook_topic + "\";s:15:\"\u0000*\u0000full_details\";s:" + full_details.length + ":\"" + full_details + "\";s:6:\"\u0000*\u0000job\";N;s:10:\"connection\";N;s:5:\"queue\";N;s:15:\"chainConnection\";N;s:10:\"chainQueue\";N;s:5:\"delay\";N;s:7:\"chained\";a:0:{}}"
            }
        };
        
        var sqsMessageParams = {
            MessageBody: JSON.stringify(job_details),
            QueueUrl: destinationQueueUrl
        };

        
        await sqs.sendMessage(sqsMessageParams).promise().catch(err => {
            console.log(`Webhook EB | ERROR: ${err}`);
        });
        
    }));
};
```

In short, we are looping through records (remember batch size 10) and, in the loop, we are parsing the body of each message, extracting shop domain, webhook topic and full details which we additionally JSON and base64 encode. After we extract and prepare all the data we need, we proceed by creating job\_details (this is how Laravel jobs look inside the queue), then we prepare SQS message with job details as MessageBoy and “webhook-laravel” QueueUrl (destination queue) and finally we send message to “webhooks-laravel” queue. Once this lambda finishes processing, we will have new “HandleShopifyWebhook” job in the queue.

#### 5.2. Laravel side

On the Laravel side, we need to define the “HandleShopifyWebhook” job. Here’s simple example of the job. Take note of `json_decode(base64_decode())` part which we need since we did the encoding in Lambda.

```php
<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Log;

class HandleShopifyWebhook implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected string $shop_domain;
    protected string $webhook_topic;
    protected string $full_details;

    public function __construct(
        string $shop_domain,
        string $webhook_topic,
        string $full_details
    ) {
        $this->shop_domain = $shop_domain;
        $this->webhook_topic = $webhook_topic;
        $this->full_details = $full_details;
    }

    public function handle(): void
    {
        Log::info('Data', [
            $this->shop_domain,
            $this->webhook_topic,
            json_decode(base64_decode($this->full_details), true),
        ]);
    }
}
```

Lastly, we need to configure Laravel to use SQS as queue connection. We will need to setup following .env vars. There’s extensive guide on how to setup SQS queue on following tutorial – [https://dev.to/ichtrojan/configuring-laravel-queues-with-aws-sqs-3f0n](https://dev.to/ichtrojan/configuring-laravel-queues-with-aws-sqs-3f0n).

```javascript
AWS_ACCESS_KEY_ID=AK****
AWS_SECRET_ACCESS_KEY=z5****
AWS_DEFAULT_REGION=eu-west-2
SQS_PREFIX=https://sqs.eu-west-2.amazonaws.com/XXXXXXXXXXXX
SQS_QUEUE=webhooks-laravel
QUEUE_CONNECTION=sqs
```

Only thing left to do is to run `php artisan queue:work`. After running it and updating the order, we can see the logs in telescope.

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/image-17-1024x80.png" alt="Processing queue locally" height="48" width="621"><figcaption><p>Processing queue locally</p></figcaption></figure>

<figure><img src="https://xdoo.hr/wp-content/uploads/2022/07/Screenshot-2022-07-24-at-20.30.49-1024x772.png" alt="Log in Telescope" height="313" width="416"><figcaption><p>Log in Telescope</p></figcaption></figure>

Congratulations, you have successfully processed Shopify webhooks using Amazon EventBridge in your Laravel app.

**If you want to level up your apps and your codebase, check out other posts on our blog** [**xdoo.hr**](https://xdoo.hr/)**.**\
\
&#xNAN;_**Do you need help with setting up Shopify webhooks using EventBridge in Laravel app?**_\
\
&#xNAN;_**For anything related to Shopify or Laravel development send us your inquiry to**_ [_**kristijan@xdoo.hr**_](mailto:kristijan@xdoo.hr?subject=I%20need%20help%20with%20Laravel%20Project)!

Tags: [AWS](https://xdoo.hr/tag/aws/), [EventBridge](https://xdoo.hr/tag/eventbridge/), [Laravel](https://xdoo.hr/tag/laravel/), [Shopify](https://xdoo.hr/tag/shopify/), [SQS](https://xdoo.hr/tag/sqs/), [Webhooks](https://xdoo.hr/tag/webhooks/)

#### Post navigation

**Previous**[‹ null coalescing operator – Code Refactoring School](https://xdoo.hr/null-coalescing-operator-code-refactoring-school/)**Next**[Constructor property promotion – Code Refactoring School ›](https://xdoo.hr/constructor-property-promotion-code-refactoring-school/)

***

#### Leave a Reply <a href="#reply-title" id="reply-title"></a>

Your email address will not be published. Required fields are marked \*

Comment \*

Name \*

Email \*

Website

&#x20;Save my name, email, and website in this browser for the next time I comment.

*
* &#x20;
*
* &#x20;
*
* &#x20;
*
