---
layout: page
title: Frequently Asked Questions
header_title: FAQ
include_in_header: true
---

Thank you for your interest in the Away app ☺️ Hope you find your answers below. 
If you don't find what you're looking for, don't hesitate to reach out via email [awayfortwitter@hybridcattt.com](mailto:awayfortwitter@hybridcattt.com)!

## Is it safe to enter my Twitter credentials in the app?

The app uses a system web session component to authenticate with Twitter. This means that the app **doesn't have access to any data you enter** while you're authenticating, including your email and password. The authentication session is private, so any data you enter or cookies are destroyed once the auth UI is closed. 

The app receives a token after the auth process is done, and securely stores it in the iOS keychain. 

## Does any of my data ever leave the device?

All data fetched from Twitter services stays on device. 
The auth token is saved in the iOS keychain and is **not synced** between devices.

## Does the app use any third-party services?

Your private data will never be shared with any third-party service. The app communicates with Twitter servers, as well as makes a preflight call to check if the app needs to be updated. The app doesn't communicate with any third-party servers except Twitter’s.

## Why does the app request full access to my Twitter account?

Twitter API has very basic permission levels that don't allow for granular control, unfortunately. 
Accessing messages requires full permissions to the account, including write. I wish it were different! You can check Twitter's rules here: [App Permissions](https://developer.twitter.com/en/docs/apps/app-permissions). 

Soon you will be able to grant read-only access if you wish.

## Why is there no pull-to-refresh?

Some of the Twitter's endpoints have very strict rate limits, down to 15 requests per 15 minute window. Also, not all endpoints provide realtime data - for example, it can take a minute or two until a new message shows up in the API. 

Right now the app will refresh the data every couple of minutes, although a clean restart with always get you fresh data. 

If you feel that pull-to-refresh is a must for this app, I'd love to hear your thoughts!

## Why only most recent messages are shown?

The currently available DMs API is very limited. The rate limits are low, so the app can load only most recent messages. Additionally, the API doesn't return messages from group conversations and occasionally drops messages flagged as spam. All third-party apps for Twitter have the same issues.

Twitter API will be getting improvements to the DM endpoints according to [Twitter API roadmap](https://trello.com/c/TRkr2XsM/74-replacement-for-direct-message-functionality), and I’ll integrate the new endpoints as soon as they're available. I’m also planning improvements to the messages fetching logic.

*Why can other apps like Tweetbot show very old messages?* They have servers that load your data when possible, store it in their database and serve it to the app whenever requested. 
Away for Twitter app doesn't have a server, all data is stored 100% on device. The loading happens when you open the app, so we're limited in how far in history we can look. 

## How is time since tweeted calculated?

Currently the widget shows the time from your latest new tweet. It doesn’t look at any reply tweets. Some users asked if it’s possible to include replies as well, so I’ll be adding that in one of the upcoming updates.

## How can the app actually help me use Twitter less?

It really depends on what is your usage pattern with Twitter, but the app is the most helpful if you don't want to have a full Twitter app installed on your phone. 
In fact, the working title for the app was "Do I need to check Twitter?" 😄

**The messages widget** can help you, if it's important for you to keep response time low. If you don't have any messages to reply to, you don't have to open Twitter. 

**The tweet stats widget** can be helpful after you've tweeted something (f.ex. on the web), and want to know if there have been new replies to engage with.

**The followers widget** can indicate whether the number of followers has dropped or grown, if that's something you care about. 

**Days since last tweeted widget** helps you remember when was the last time you posted something. This is helpful if you want to appear somewhat active on the platform.

**Watch friends widget** (coming soon) can help you see if any of your selected friends (or people you're really curious about) have posted anything new. This helps you keep in touch with those who use Twitter as their main mode of sharing.

I have a ton of ideas on top of this, so if you'd like to see something specific in the app, let me know!

<br>

_The contents of this page are not binding._
<br>
_For current terms and conditions, check [Terms and Conditions](/terms) and [Privacy Policy](/privacypolicy)._