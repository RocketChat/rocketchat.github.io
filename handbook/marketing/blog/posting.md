# Creating a blog post

## Install GitHub desktop

[Download and install](https://desktop.github.com/) the GitHub desktop client. This will allow you to login into your GitHub account and access your projects, orginizations and orginizations' projects.

Once installed, open GitHub Desktop and select **Install Command Line Tool..** to be able to access Git from your command prompt or terminal.

## Clone the website Git repository

From GitHub Desktop clone the website repo `https://github.com/RocketChat/rocketchat.github.io`

## Create a branch

Git branches allows us to seperate our changes from the master published version of the website. Think of it as making a copy of a folder of files. When you are done making changes, you can ask someone to review them, pull them into and merge them with the master version to be published on the website.

For every new blog post you need to create a new branch from the master branch. To create a branch:
 - Open GitHub Desktop
 - Click on `Current branch` in the menu
 - Swap to the `master` branch
 - Update your local copy of master by clicking on the `Fetch Origin` to pull changes from the GitHubn origin.
 - Click on `Current Branch` again and then `New` to create your new branch
 - Give your branch a name, branch names should be all lowercase and and only alphanumeric characers (a-z,0-9), any other characters should be replaced with a `-`.

## Writing the blog post

1. Open Visual Studio Code
1. Skip this step if you already have the website repository open
  1. either open the website repository by using the menu
  1. or drag-and-drop the folder from your file manager into Visual Studio Code
1. Navigate to the blog folder
  1. Either expand the folders until you get to the path `_posts/2018/xx/` or press `⌘ + P` and search for what you are looking for.
1. Right-click on the month and type in your file name using the same naming convention as other posts `yyyy-mm-dd-lowecase-post-slug-with-no-special-characters.md`. Make sure to add the `.md` file extension for the editor and Jekyll to recognize the post.
1. Add the title, date, time and cover image (if appropriate) to the top of the document. You can copy and edit this information from a previous post.
1. Add the main body of your post.
    - Visual Studio Code formats text in markdown. This [tutorial for markdown](https://www.markdowntutorial.com) is useful for absolute beginners, as is this [markdown cheatsheet](http://markdown-guide.readthedocs.io/en/latest/basics.html).
1. Preview your post in markdown with `⌘ + Shift+ P` and search for `Markdown: Open Preview to the Side`.

## Optimizing and adding images to Visual Studio

1. Locate a suitable image either with Google search or take screenshots on your device if you are writing a post about our product.
  - Please ensure you only use images that are labeled for resuse or reuse with modification, depending on whether you plan to make edits to your image.
  - Include the appropriate attribution in your post.
1. You may need to edit the image you intend to use in your post - this is especially common for screenshots. We use GIMP to edit images. [Beginner's tutorials for GIMP](https://www.gimp.org/tutorials/).
1. Optimize your image for web using [Image.Optim](https://imageoptim.com/mac).
1. Open Visual Studio and create or open `images/posts/yyyy/mm/slug/`. Use the same slug name of your post for the folder without the `.md` extension.
1. Add your images to the folder.
  * We use the same naming conventions for images as blog posts.
1. Right-click the image you want to insert into your post and click 'Copy file path.'
1. Paste the file path into the markdown formatting for images.

## Committing changes, pushing to origin and creating a pull request with GitHub

1. Git does not automatically save any changes made to your post. You will need to **commit** them. To commit your changes:
  - Save your post.
  - Open GitHub Desktop.
  - Go to **Changes**.
  - Review your changes.
  - Select the changes to commit to this branch.
  - Add a short commit summary and an optional longer description on what changes you have made and then press 'Commit to [repo name].'
1. Press the **Push to origin** or **Publish Branch** button to upload your commited changes to the GitHub origin.
1. Once your post is finished it needs to be reviewed. Open the [project on GitHub](https://github.com/RocketChat/rocketchat.github.io) and click **Create pull request**, assign a review for your post, this will be someone from Marketing and optionally your team leader.
1. Once the reviewer has accepted the pull request, your branch's changes will be merged into the master version (which may have had changes merged from other team members).
