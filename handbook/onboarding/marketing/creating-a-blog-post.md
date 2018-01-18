## How-to: create you first blog post

 ### Cloning Rocket.Chat's GitHub repository to Visual Studio Code
 
Version control for blog posts takes the form of committing changes made in Visual Studio Code to the Rocket.Chat repository on GitHub. 

1. You will need to clone the Rocket.Chat repository to Visual Studio Code on your local device. Read [this guide](https://code.visualstudio.com/docs/editor/versioncontrol) to learn how. 

 ### Creating a new branch with GitHub

 We sync all changes made when writing or editing blog posts to GitHub. This means that the Rocket.Chat team and whoever is reviewing your work can easily view the file's history. 

1. Each time you create a new blog post you will need to create a new branch that derives from the Rocket.Chat master branch on GitHub. To create a branch:
 - Open GitHub for desktop
 - Click on 'Current branch' in the menu
 - Begin typing the title of your blog post and press enter to create your branch
    * Rocket.Chat's naming conventions for blog posts are **YYYY-MM-DD-text1-text2-text3**. For instance, a post about the release of Rocket.Chat iOS 1.8 would look like **2018-01-15-rocket-chat-iOS-1-8-released**.
    * Use lower case.

### Writing a blog post in Visual Studio Code

1. Click the Explorer tab on the left-hand side.

2. Open the ROCKETCHAT.GITHUB.IO repository.

3. Go to 'blog' and then the month you are publishing for.

4. Right-click on the month and type in your file name using the same naming convention as the corresponding branch in GitHub. Add an '.md' suffix so that the file is in markdown.  

5. Add the title, date, time and cover image (if appropriate) to the top of the document. You can copy and edit this information from a previous post. 

6. Add the main body of your post. 
    * Visual Studio Code formats text in markdown. This [tutorial for markdown](https://www.markdowntutorial.com) is useful for absolute beginners, as is this [markdown cheatsheet](http://markdown-guide.readthedocs.io/en/latest/basics.html).

7. Preview your post in markdown with Command + Shift + P and select 'Markdown: Open Preview to the Side.' 

### Optimizing and adding images to Visual Studio

1. Locate a suitable image either with Google search or take screenshots on your device if you are writing a post about our product. 
    * Please ensure you only use images that are labeled for resuse or reuse with modification, depending on whether you plan to make edits to your image. 

2.  You may need to edit the image you intend to use in your post - this is especially common for screenshots. We use GIMP to edit images. [Beginner's tutorials for GIMP](https://www.gimp.org/tutorials/).

3. Optimise your image for web using [Image.Optim](https://imageoptim.com/mac).

4. Open Visual Studio and open 'blog' > 'images.' Create a new folder with the same name as the folder you created for your post.

5. Add your images to the folder.
    * We use the same naming conventions for images as blog posts.

6. Right-click the image you want to insert into your post and click 'Copy file path.'

7. Paste the file path into the markdown formatting for images. 

### Committing changes, pushing to origin and creating a pull request with GitHub

1. Git does not automatically save any changes made to your post. You will need to **commit** them. To commit your changes:
    * Save your post.
    * Open GitHub for desktop and select the branch you are working on. 
    * Go to 'Changes.' 
    * You will be able to see the changes you have made.
    * Select the changes to commit to GitHub.
    * Add a comment on what changes you have made and then press 'Commit to [repo name].' 

2. Press 'Push to origin' in GitHub desktop to push your post to the Rocket.Chat repository. 

3. Once your post is finished, it may need reviewing. To request a review.
    * Go to [rockekchat.github.io](rocketchat.github.io), open your post's branch and click 'Create pull request.' You will be able to assign a reviewer for your post. This will usually be your manager.
4. Once the reviewer has accepted the pull request, they will merge the changes to create the final document. 