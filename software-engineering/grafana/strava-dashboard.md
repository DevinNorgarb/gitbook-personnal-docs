# Strava Dashboard

## The Grafana Principle: Doing Data Analytics for Sport Activities entirely in the Cloud (Part 1) <a href="#edb6" id="edb6"></a>

### Monitoring and Analysing the Training Activities for you and your Team is easy even without Programming Knowledge <a href="#161c" id="161c"></a>

![](https://miro.medium.com/max/700/0\*2FQ23LJelsBEIfOg)

Photo by [Carlos Muza](https://unsplash.com/@kmuza) on [Unsplash](https://unsplash.com)

### Introduction <a href="#2feb" id="2feb"></a>

[ Great article from Medium](https://squeezer44.medium.com/the-grafana-principle-doing-data-analytics-for-sport-activities-entirely-in-the-cloud-part-1-4d89ed9bbcb0)

Imagine the situation: you often train cycling and do it in a team, and want to evaluate and show your training activities and those of your teammates on a dashboard.\
And unfortunately, you neither have any programming skills nor a lot of money. So how can you solve the problem?

By reading this article and the next one, you’ll find out a way to escape this dilemma and create a dashboard without any programming skills.\
You can’t do all cool data science stuff, but you can present a remarkable dashboard for yourself and your teammates.

You need two things for it: A Strava account and a Grafana login.

### Goal <a href="#404b" id="404b"></a>

Let’s first have a look into the serverless approach, which is fully running in the cloud.\
This supports a better technical overview, is fun and gives us a functional process, which can be used for own purposes.

### A Graphic describes the process as it’s best <a href="#8731" id="8731"></a>

In general, the process chain can be divided into three different steps:

1. DataInput\
   Any device with a GPS and access to the internet can track your activity and upload the data afterwards to the cloud.\
   I’m currently using a mobile app at my cell phone for that.
2. DataProcessing\
   After the data were uploaded, they will be processed. This is done by Strava automatically and is a precondition for getting the results.\
   Strava presents the results on a dashboard, which is accessible either via cell phone (after the Strava app is opened) or with your personal computer via an internet browser.
3. Dashboarding\
   Dashboards, sometimes called IT dashboards, are single screens in which various critical pieces of information are placed in the form of panels.\
   Each panel contains a piece of information, all panels together are called as dashboard.\
   Strava is presenting a standardized dashboard, which I’m using only to check whether my data were properly uploaded and processed.\
   It is less suitable for visualizing an analysis of personal performance data.\
   In any case, it is unsuitable to visualize the data of a team on one and the same dashboard. And that is ultimately a prerequisite for being able to compare the performance data within a team.

Let’s have a look on the overview first:

![grafik.png](https://miro.medium.com/proxy/1\*YST0NZvT2Fp637lLuaC-5Q.png)

### Starting Position and optimized Result <a href="#79c7" id="79c7"></a>

My starting point is Strava: it is showing me this on my dashboard:

![grafik.png](https://miro.medium.com/proxy/1\*6j23cftX1qTgevNlprXGrw.png)

It is easy to understand that no analytical knowledge can be gained from this at a glance. It is just a tabular representation of my performance data — nothing else.

I believe this makes it clear that it could be far more optimal than what is shown on the standardized Strava dashboard.\
It is relatively easy to build a dashboard in just a few steps and does not require any programming knowledge. We will use the Grafana principle for our purposes and see how this works:

![grafik.png](https://miro.medium.com/proxy/1\*3\_frxx8F6aDRhGLoH-iizg.png)

I believe this makes it clear that it is far more optimal than what is shown on the standardized Strava dashboard.

### Used Tools <a href="#dc72" id="dc72"></a>

To achieve that, we need only three tools. All of them are available with no additional costs in a basic version:

* **Strava App on your mobile**: Could be an app on your mobile or another mobile device which has a GPS on board and is able to track your sport activity.
* **Strava Web Account**: Strava is a service that allows athletes to track and analyze their workouts and training sessions. It’s widely used for activities such as running and cycling (URL: [https://www.strava.com/dashboard).](https://www.strava.com/dashboard\).)
* **Grafana Account**: Grafana is open-source visualization and analytics software. It allows you to query, visualize, alert on, and explore your metrics no matter where they are stored (URL: [https://grafana.com/).](https://grafana.com/\).)

### Precondition: Create a Grafana Account and connect it with Strava <a href="#8841" id="8841"></a>

First things first: as a precondition, I need a Grafana account. This is easy to achieve by registering and login.\
In case you’re using the Free-plan as me you should see something like that at your Grafana home screen after login:

![grafik.png](https://miro.medium.com/proxy/1\*cbLIKfdOIwvCtlQfHd54mQ.png)

After that, we need to edit the configuration of our Grafana environment by adding our Strava API as an external data source.\
To do so, we click inside the left vertical navigation bar at Configuration/Data sources:

![grafik.png](https://miro.medium.com/proxy/1\*hy6BJG3IpjTMPq2Faxbzkg.png)

As next, we can see the configuration page at Grafana and press the button Add data source.\
We need to search for strava:

![grafik.png](https://miro.medium.com/proxy/1\*FbpsNLC9QkRm31yrC63Yqg.png)

A left mouse click at this entry will bring us one step ahead: we now can connect our Grafana environment with Strava. To get it done we need our Client ID and the Client Secret at Strava, paste it in and press the button Connect with Strava:

![grafik.png](https://miro.medium.com/proxy/1\*4bIwUWFxsZJoGf\_2b\_7gSw.png)

As next a new windows opens. Strava is asking me to authorize my Grafana App:

![grafik.png](https://miro.medium.com/proxy/1\*b46ldJqkxEnoQrLWejomqg.png)

After I pressed the button Authorize the process was completed, and I will be redirected into my Grafana environment and can test the connection by pressing Save & Test:

![grafik.png](https://miro.medium.com/proxy/1\*SAItSjdzttDeymlKvHapUA.png)

And that’s it!\
This finished the necessary authorization process for the Grafana environment. We are now able to read the data via the Strava API.

### Conclusion <a href="#416b" id="416b"></a>

With this article, we have laid the baseline for building a dashboard with Grafana.\
After we took a technical overview, have seen the starting position and our goal, we laid the baseline to go ahead:\
we created a Grafana account, connect it with Strava, authorize and test it.

### That’s next <a href="#f668" id="f668"></a>

So far everything has been hard work and not really exciting. But this will change with the next upcoming article.\
In this, we will see, how we can easily gather the data and build something meaningful and interesting of it with a Grafana dashboard.

\
