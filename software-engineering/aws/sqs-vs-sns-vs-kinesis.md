---
description: >-
  https://campfirecode.medium.com/sqs-vs-sns-vs-kinesis-which-aws-messaging-service-to-use-1fa3aa6be97d
---

# SQS vs SNS vs Kinesis

## SQS vs SNS vs Kinesis which AWS messaging service to use <a href="#id-5c93" id="id-5c93"></a>

AWS offers a number of messaging services for transferring data between different applications. Among the most used are Amazon SQS, Amazon SNS, and Amazon Kinesis Streams. All three are built to communicate and exchange information between applications, and each have pros and cons that make them particularly suited for certain situations.

## Simple Queue Service (SQS) <a href="#id-6947" id="id-6947"></a>

**SQS** is distributed **queuing** system. Messages are sent into a queue and receivers have to **poll** messages from SQ&#x53;**.** Messages can only be received by a single receivers at a time, meaning that any one receiver can receive a message, process and delete it, but other receivers will not receive the same message later. A main use case for SQS is to decouple or integrate applications, allowing you to send data between the two with the guarantee that all messages get processed.

### When to use SQS: <a href="#id-4a43" id="id-4a43"></a>

* Your architecture requires asynchronous processing with guarantees that all tasks get processed
* You need a durable and reliable queuing solution that will scale at low cost and require no management on your part

### When not to use SQS: <a href="#id-4b17" id="id-4b17"></a>

* You need to send messages to multiple receivers

## Simple Notification Service (SNS) <a href="#c77c" id="c77c"></a>

**SNS** is a distributed **publish-subscribe** system. Unlike SQS where users have to **poll** messages from the queue, SNS messages are **pushed** to subscribers when they are sent by publishers to SNS. Amazon SNS delivers messages published to _topics_ to one or more destinations. Using SNS topics, your publisher systems can fan out messages to a large number of subscriber endpoints for parallel processing, including [Amazon SQS](https://aws.amazon.com/sqs/) queues, [AWS Lambda](https://aws.amazon.com/lambda/) functions, and HTTP/S webhooks. SNS can also be used to fan out notifications to end users using mobile push, SMS, and email.

### When to use SNS: <a href="#d808" id="d808"></a>

* Your application requires delivering messages asynchronously to multiple consumers at a time but does not require strong delivery guarantees (if you need delivery guarantees you should use SQS queues)
* You need to trigger asynchronous events across different parts of your application
* You need to send mobile push notifications or SMS text messages
* If you want unknown number and type of subscribers to receive messages

### When not to use SNS: <a href="#debc" id="debc"></a>

* You need strong delivery guarantees for messages
* Your application sensitive to the latency associated with using AWS APIs via HTTP protocol and you have no need for specialized functions like SMS or mobile push

## Amazon Kinesis Streams <a href="#id-6420" id="id-6420"></a>

[AWS Kinesis](https://docs.aws.amazon.com/streams/latest/dev/introduction.html) is a managed data streaming service. Producers put data on a _stream_ using Kinesis client library. Multiple different Kinesis data stream consumers can then process data from the stream concurrently. This is an important distinction from _queues_ where only one kind of a consumer can take messages off the same queue. For example, one consumer can archive product order data while another analyzes data for fraud in real-time, and yet another one uses the data to dynamically update pricing and inventory data.

Another distinction from SQS is the ability to replay data. Once a message has been successfully processed, it _remains_ on the stream. The message is not deleted.

Kinesis integrates well with other AWS services, including AWS Lambda. Kinesis can trigger Lambda functions in response to messages. Additionally, AWS services such as S3 or Dynamo can publish data to Kinesis streams.

### When to use Kinesis: <a href="#e2b1" id="e2b1"></a>

* Your architecture requires complex real-time processing of data streams
* You have complex real-time analytics requirements
* You need to trigger asynchronous events across different parts of your application

### When not to use Kinesis: <a href="#id-33ab" id="id-33ab"></a>

* You only need simple queues
* You only need simple topics

To summarize:

**SQS**: messaging queue, sends data to one consumer at a time\
**SNS**: notification service, think email and SMS push notifications to multiple consumers\
**Kinesis:** data streaming service, build for complex real-time processing of data streams accross multiple consumers

\
