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
