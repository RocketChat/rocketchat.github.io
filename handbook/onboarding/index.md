# Your first week at Rocket.Chat

## Important sites and platforms

All new Rocket.Chat employees are sent invitation links through their [@rocket.chat]() email address to the following platforms and websites by the COO (Chief Operations Officer):

- [Google Account](http://mail.google.com) - all Rocket.Chat receive a Google account for work purposes. Rocket.Chat email addresses take the form of [firstname.surname@rocket.chat]().

- [GitHub](https://github.com) - Git version control and project managemt tools for all Rocket.Chat project (server, apps, website and operations projects). For those completely new to GitHub, [this guide](https://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/) is useful.

- [Google Drive](https://www.google.com/drive/) - GitHub is used as the main respository for text based documents, source code and artwork, you can access a variety of Google Docs, Spreadsheets, textbooks and videos courses on Google Drive.

- [BambooHR](https://www.bamboohr.com) - HR software used to request time off, check who is off work and make asset requests. Once you join BambooHR, ensure that you verify your personal details, add your mobile phone number and include your t-shirt size to recieve your Rocket.Chat t-shirt.

## Joining the team's Rocket.Chat

The Rocket.Chat team uses Rocket.Chat to collaborate in real-time. You can access Rocket.Chat in several ways:

- [Browser client](https://open.rocket.chat/home)
- [Desktop client](https://rocket.chat/download)
- [Android app](https://play.google.com/store/apps/details?id=chat.rocket.android)
- [iPhone app](https://itunes.apple.com/app/rocket-chat/id1148741252)

You will be automatically added to the #sandbox and #general channels. These are public channels. You will also be invited to relevant private channels that are only accessible to the Rocket.Chat team:

- [documentation](https://open.rocket.chat/group/documentation)
- [important](https://open.rocket.chat/group/important)
- [random](https://open.rocket.chat/group/random)
- [rocket.marketing](https://open.rocket.chat/group/rocket.marketing)
- [rocket.chat-dev](https://open.rocket.chat/group/rocket.chat-dev)
- [rocket.chat-officevibe](https://open.rocket.chat/group/rocket.chat-officevibe)
- [rocket.chat-working-on](https://open.rocket.chat/group/rocket.chat-working-on)
- [support-backroom](https://open.rocket.chat/group/support-backroom)
- [security-reports](https://open.rocket.chat/group/security-reports)

## Rocket.Chat t-shirts

New team members should [indicate their t-shirt size and desired colors](https://docs.google.com/spreadsheets/d/1zjOnlscEeHy5F1a40dQ04ct96S49q9PJ-Y4pTNpBzrQ/edit?usp=sharing) when they join. The t-shirts will be shipped to you from Brazil if you work remotely.

## Meeting the team

If you are working remotely, we recommend you arrange meetings with Gabriel and nine other team members using the [team page](https://rocket.chat/blog/). Ensure that you speak to team members from a range of departments.

Refer to the [Meetings](link) section of the handbook for advice on scheduling these meetings.

# Meetings

## Scheduling meetings

1. If you want to schedule a meeting with a team member, first check their personal Google Calendar to ensure your proposed time and date does not clash with an existing commitment.
2. Send a calendar invite from and to the company address. This makes it easier for people to check availability.
3. Click 'Guests can modify event' so people can modify the time in the calendar instead of having to reach out.
4. We recommend either [Google Hangouts](https://hangouts.google.com/) or [Jitsi](https://jitsi.org/jitsi-videobridge/), which is already integrated with Rocket.Chat.
5. For meetings with external guests [appear.in](https://appear.in) is ideal as the other person will not need to register or download software.

## Regular Rocket.Chat group meetings

We have two types of regular meeting at Rocket.Chat, as described below:

## Weekly team call

Once a week the whole team joins a call to discuss what they have been working on that week. There is a Q&A session at the end where team members can ask about any area of the business.

Team call schedule:
- Begins at 16:00 (GMT)
- Duration is currently half an hour but this may be increased as the team grows

1. Attendance of the team call is compulsory.
2. Please come prepared to discuss what you have been working on that week.

## Roadmap discussion

On the first Friday of each month the team holds a high-level visual summary that maps out the direction of the product over the next few months.

Roadmap discussion schedule:
- Begins at 16:30 (GMT)
- Duration is one hour

1. Attendance is recommended but not compulsory.
2. The roadmap discussion follows on from the team call and is continued in the same Google Hangouts chatroom.

Both meetings take place in [Google Hangouts](https://hangouts.google.com). Team members will receive a link to the meeting both via email and in their Google Calendar as a recurring event.

Ensure your microphone is muted unless you are speaking.


# Rocket.Chat team page

The [Rocket.Chat team page](https://rocket.chat/team) shows the members of the core Rocket.Chat team.

Each team member is featured with their job title, professional photo and link to their GitHub profile (if appropriate).

The list is ordered by start date with the most recent members at the bottom.

It is each team member's responsibility to add their own information and photo to the page once they join. The below section shows you how to do this.

## Prerequisites

1. Open the Rocket.Chat repository, see the [creating a blog post](https://rocketchat.github.io/handbook/marketing/blog/posting/) guide to learn how to edit the website.
1. Create a branch with an appropriate name `add-firstname-lastname-to-team-page`.

## Add your profile

1. Open `_data/team.ym`.
1. Add a new record at the bottom of the file with the following fields:
  - `name`: full name
  - `title`: from your contract
  - `department`: from your contract
  - `username`: Rocket.Chat username in the format `firstname.lastname`
  - `github_username`: GitHub username to link your profiles
  - `github_uid`: GitHub user id, add if you want to use your GitHub profile photo
  - `photo`: **yes/no** If you've added your own photo to the website

## Add your photo

If you are using your GitHub profile photo instead of uploading a photo skip this section and create a pull request.

Photo requirements:

- If you are in the Porto Alegre office and need a photo speak to Arthur.
- Use a professional looking headshot.
- Dimensions of 300x300 px.
- Save as a JPEG with the `.jpg` extension.

Photo location and naming:

1. Add your photo to the `images/team/member/` folder.
1. Use the following naming format `firstname-lastname-01.jpg` all lowercase.

## Create a pull request

1. Commit your changes.
1. From GitHub create a pull request and assign it to a member of the Marketing team to review.
