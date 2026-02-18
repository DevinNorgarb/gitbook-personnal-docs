---
description: How to add some life to your Github profile homepage
---

# GitHub README



<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

This is a [github action](https://docs.github.com/en/actions) for those who use [Wakatime](https://wakatime.com/dashboard) to track their coding activity. You can add the stats from wakatime in your github profile's [README](https://github.com/DevinNorgarb/) or any other repository.

**Here's an example of my coding activity over the last week**





#### Usage



1. Fetch your WakaTime API Key. Available from your [WakaTime](https://wakatime.com/) account settings.
2. Add WakaTime API Key to your repository secret with the name as **WAKATIME\_API\_KEY**. [How to add secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)
3.  Add the image tag in your README file. Also, you can use it anywhere you want to.

    ```
      <img src="https://github.com/<username>/<repository-name>/blob/master/images/codeStats.svg" alt="Alternative Text"/>
      Example: <img src="https://github.com/tariksahni/tariksahni/blob/master/codeStats.svg" alt="My Coding Activity/>
    ```
4. Click **Action** tab on the repo you want to add this and **choose set up a workflow yourself** option.
5.  Copy the following code.

    ```
    name: Update README with my latest coding stats

    on:
      schedule:
        - cron: '30 5 * * *'

    jobs:
      update-Readme:
        name: Automatically update my README
        runs-on: ubuntu-latest
        steps:
          - uses: tariksahni/coding-stats-wakatime@v1.0.0
            with:
              WAKATIME_API_KEY: ${{ secrets.WAKATIME_API_KEY }}
              SHOW_MONTHLY: true
              GITHUB_TOKEN: ${{ github.token }}
              GITHUB_ACTION: ${{ github.action }}
    ```

    Note: You can choose the duration of your activity from monthly(default) to weekly. For weekly set `SHOW_MONTHLY: false`.
6.  The workflow will run at 10 AM IST every day or you can force run it by going to Action tab. Or you can add following lines under `on:` to run with every push. Search for 12 AM UTC to find equivalent time in your time zone.

    ```
    on:
      push:
        branches: [ master ]
      schedule:
        - cron: '30 5 * * *'
    ```
