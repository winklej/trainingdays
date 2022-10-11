(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{247:function(e,t,o){e.exports=o.p+"assets/img/repos.2f179321.svg"},522:function(e,t,o){e.exports=o.p+"assets/img/clone-adc-github.163b16dc.png"},523:function(e,t,o){e.exports=o.p+"assets/img/import-adc-repo.97131f3b.png"},524:function(e,t,o){e.exports=o.p+"assets/img/userstory-code-links.95401a28.png"},761:function(e,t,o){"use strict";o.r(t);var a=o(10),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"challenge-2-work-with-azure-repos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#challenge-2-work-with-azure-repos"}},[e._v("#")]),e._v(" Challenge 2: Work with Azure Repos")]),e._v(" "),t("p",[t("img",{attrs:{src:o(247),alt:"Azure Repos"}})]),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),t("ul",[t("li",[e._v("Create a Git repository for your code")]),e._v(" "),t("li",[e._v("Use an SSH key for authentication")]),e._v(" "),t("li",[e._v("Clone the Git repository to your local developer machine")]),e._v(" "),t("li",[e._v("Work with branches and Pull Requests")])]),e._v(" "),t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#import-the-azure-developer-college-github-repository-to-your-azure-repo"}},[e._v("Import the Azure Developer College GitHub repository to your Azure Repo")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#clone-the-repository-to-your-local-machine-use-ssh-key-authentication"}},[e._v("Clone the repository to your local machine, use SSH key authentication")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#working-with-branches-and-pull-requests"}},[e._v("Working with Branches and Pull Requests")])])]),e._v(" "),t("h2",{attrs:{id:"import-the-azure-developer-college-github-repository-to-your-azure-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-the-azure-developer-college-github-repository-to-your-azure-repo"}},[e._v("#")]),e._v(" Import the Azure Developer College GitHub repository to your Azure Repo")]),e._v(" "),t("p",[e._v("Open your browser and navigate to the "),t("a",{attrs:{href:"https://github.com/azuredevcollege/trainingdays",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Developer College Training Days on GitHub"),t("OutboundLink")],1),e._v(". Click the green "),t("strong",[e._v('"Code"')]),e._v(" button and copy the\n"),t("code",[e._v("https url")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:o(522),alt:"Clone GitHub"}})]),e._v(" "),t("p",[e._v("Go to your Azure DevOps project import the repository and name it "),t("em",[e._v("azuredevcollege")]),e._v(":")]),e._v(" "),t("p",[t("img",{attrs:{src:o(523),alt:"Import"}})]),e._v(" "),t("h2",{attrs:{id:"clone-the-repository-to-your-local-machine-use-ssh-key-authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-repository-to-your-local-machine-use-ssh-key-authentication"}},[e._v("#")]),e._v(" Clone the repository to your local machine, use SSH key authentication")]),e._v(" "),t("p",[e._v("SSH public key authentication works with an asymmetric pair of generated encryption keys. The public key is shared with Azure DevOps and used to verify the initial ssh connection. The private key is kept safe and secure on your system.")]),e._v(" "),t("p",[e._v("If you haven't already created an SSH key on your system, please follow these steps "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/repos/git/use-ssh-keys-to-authenticate?view=azure-devops&tabs=current-page#step-1-create-your-ssh-keys",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("After you have created the SSH key for your system, add the public key to Azure DevOps services.\nFollow these steps described "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/repos/git/use-ssh-keys-to-authenticate?view=azure-devops&tabs=current-page#step-2--add-the-public-key-to-azure-devops-servicestfs",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Now that you have added your SSH public key to Azure DevOps, you are ready to clone the Azure Developer College's repository to your local machine.")]),e._v(" "),t("p",[e._v("Open a shell and go to your project's folder and clone the repository as described "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/repos/git/use-ssh-keys-to-authenticate?view=azure-devops&tabs=current-page#step-3-clone-the-git-repository-with-ssh",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(' to your local machine. Go to Azure Boards and set the story "S1" to completed.')]),e._v(" "),t("p",[e._v("🥳 "),t("strong",[e._v("Congratulations")]),e._v(" - You have completed your first User Story. 🥳")]),e._v(" "),t("h2",{attrs:{id:"working-with-branches-and-pull-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#working-with-branches-and-pull-requests"}},[e._v("#")]),e._v(" Working with Branches and Pull Requests")]),e._v(" "),t("p",[e._v('Now it\'s time to start to work on User Story "S2". Go to Azure Boards and move the state of the User Story to "Active". We want to setup the master branch\'s policies to require a '),t("em",[e._v("Pull Request")]),e._v(" to merge changes from a feature branch into the master branch. Additionally, we would like to have each "),t("em",[e._v("Pull Request")]),e._v(" associated with a "),t("em",[e._v("Work Item")]),e._v(" (User Story in our case).")]),e._v(" "),t("h3",{attrs:{id:"setup-master-branch-s-policies-to-require-a-pull-request-and-work-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-master-branch-s-policies-to-require-a-pull-request-and-work-items"}},[e._v("#")]),e._v(" Setup Master Branch's Policies to require a Pull Request and Work Items")]),e._v(" "),t("p",[e._v("To protect your branch you need to configure "),t("em",[e._v("branch policies")]),e._v(". "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/repos/git/branch-policies?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),t("OutboundLink")],1),e._v(" you can find a description of how to setup policies for your master branch to require a "),t("em",[e._v("Pull Request")]),e._v(" and a link to a "),t("em",[e._v("Work Item")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"create-a-feature-branch-to-complete-user-story-s2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-feature-branch-to-complete-user-story-s2"}},[e._v("#")]),e._v(" Create a Feature Branch to complete User Story S2")]),e._v(" "),t("p",[e._v("There are several ways to create a feature branch. You can either use the command line and the git command or you can use VS Code. "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/repos/git/branches?view=azure-devops&tabs=command-line",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),t("OutboundLink")],1),e._v(" you can find a description to get more details about it.")]),e._v(" "),t("h4",{attrs:{id:"command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[e._v("#")]),e._v(" Command line")]),e._v(" "),t("p",[e._v("Open a shell and navigate to the root directory of your ADC's repository and use the command as follows to create a feature branch:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch features/changetitle\n")])])]),t("p",[e._v("Checkout the new branch:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout features/changetitle\n")])])]),t("p",[e._v("Open VS Code and have a look at the left bottom corner:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("code "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),t("p",[e._v("You see the information on which branch you are working on in the status bar of VS Codes.")]),e._v(" "),t("h4",{attrs:{id:"change-the-title-of-the-sample-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-the-title-of-the-sample-application"}},[e._v("#")]),e._v(" Change the title of the sample application")]),e._v(" "),t("p",[e._v("Open the file "),t("code",[e._v("day4-azdevops/apps/frontend/scmfe/src/components/home/Home.vue")]),e._v(", change the title and save the file.")]),e._v(" "),t("h4",{attrs:{id:"commit-the-changes-to-your-local-branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit-the-changes-to-your-local-branch"}},[e._v("#")]),e._v(" Commit the changes to your local branch")]),e._v(" "),t("p",[e._v("Now you can commit the changes you made to your local branch. You can either commit the changes by using the command line or VS Code.\nIn VS Code:")]),e._v(" "),t("ul",[t("li",[e._v("Click the Source Control icon (there is already a blue bubble which informs you that you have made changes to the repository)")]),e._v(" "),t("li",[e._v("Enter a comment and commit your changes.")])]),e._v(" "),t("p",[e._v("If you want to use the command line do the following:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-m")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Comment"')]),e._v("\n")])])]),t("h4",{attrs:{id:"push-your-local-branch-to-the-remote-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-your-local-branch-to-the-remote-repository"}},[e._v("#")]),e._v(" Push your local branch to the remote repository")]),e._v(" "),t("p",[e._v("Now your changes are only available in your local branch. To make the changes available for all your team members you have to push your changes to the remote repository. You can either use VS Code or the command line to push your changes.\nIn VS Code:")]),e._v(" "),t("ul",[t("li",[e._v("Go to Source Control")]),e._v(" "),t("li",[e._v("Click the button with the three "),t("code",[e._v('"..."')]),e._v(" dots")]),e._v(" "),t("li",[e._v("A context menu is displayed and you have to click "),t("em",[e._v("Push")]),e._v(" to upload your changes to the remote repository.")])]),e._v(" "),t("p",[e._v("If you want to use the command line, do the following:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push\n")])])]),t("p",[e._v("Navigate to your Azure Repo and have a look at the branches. Your branch is now available and can be cloned by your team members.")]),e._v(" "),t("h3",{attrs:{id:"create-a-pull-request-to-apply-your-changes-to-the-master-branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-pull-request-to-apply-your-changes-to-the-master-branch"}},[e._v("#")]),e._v(" Create a Pull Request to apply your changes to the master branch")]),e._v(" "),t("p",[e._v("To create a "),t("em",[e._v("Pull Request")]),e._v(" follow the instructions "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/repos/git/pullrequest?view=azure-devops#create-a-pull-request-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". Select the branch "),t("code",[e._v('"features/changetitle"')]),e._v(" to be merged into the master and link the User Story "),t("em",[e._v("S2")]),e._v(" to the Pull Request.")]),e._v(" "),t("p",[e._v("After you have completed the "),t("em",[e._v("Pull Request")]),e._v(' you have completed the User Story "S2". Go to Azure Boards and set the story to the state '),t("em",[e._v("completed")]),e._v(". Maybe it is already set to completed depending on the choice you made during the completion of the Pull Request. Have a look at the story. You will see that the User Story was linked to the code changes and to the Pull Request:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(524),alt:"UserStory Links"}})]),e._v(" "),t("p",[e._v("🥳 "),t("strong",[e._v("Congratulations")]),e._v(" - You have completed User Story S2! 🥳")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-1.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day4-azdevops/"}},[e._v("🔼 Day 4")]),e._v(" | "),t("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-3.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);