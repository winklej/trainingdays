(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{777:function(e,t,a){"use strict";a.r(t);var n=a(10),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adopted-challenge-and-breakout-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adopted-challenge-and-breakout-instructions"}},[e._v("#")]),e._v(" Adopted challenge and breakout instructions")]),e._v(" "),t("p",[e._v("Challenge 3 and the breakout session will differ slightly if you've started\nwith the checkpoint for day5. The main difference is that you will only have\none environment named "),t("code",[e._v("restore")]),e._v(" to apply the changes to. Most of the time you\ncan stick to the original guide for day5.")]),e._v(" "),t("h1",{attrs:{id:"differences-in-challenge-3-protect-scm-contacts-api-with-azure-ad"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#differences-in-challenge-3-protect-scm-contacts-api-with-azure-ad"}},[e._v("#")]),e._v(" Differences in Challenge 3 - Protect SCM Contacts API with Azure AD")]),e._v(" "),t("p",[e._v("Now that we have created the needed applications in Azure AD it's time to\ndeploy the SCM Contacts API to Azure with Azure AD integration to protect the\nAPI.")]),e._v(" "),t("p",[e._v("After the deployment the API can only be accessed with a valid access\ntoken issued by Azure AD. Yesterday we have created CI/CD Builds for all\nservices. Today we want to continue with Azure Pipelines to deploy all\nservices with Azure AD integration.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create and checkout a new branch named "),t("em",[e._v("features/scmcontactsaad")]),e._v(" in your Azure Repo.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" Make sure that you create the branch in the Azure Repo where you imported the Azure Developer College's sources yesterday.")])]),e._v(" "),t("li",[t("p",[e._v("Open the build file "),t("code",[e._v("build-scm-api.yaml")]),e._v(" under "),t("code",[e._v("day5/apps/checkpoint/pipelines/jobs")]),e._v("\nand change everything from "),t("code",[e._v("day4")]),e._v(" to "),t("code",[e._v("day5")])])]),e._v(" "),t("li",[t("p",[e._v("Open the deploy file "),t("code",[e._v("deploy-scm-api.yaml")]),e._v(" under "),t("code",[e._v("day5/apps/checkpoint/pipelines/jobs")]),e._v("\nand uncomment the additional parameters passed to the deploy template.")])]),e._v(" "),t("li",[t("p",[e._v("Save the definition, commit the changes and push the branch to your remote repository")])]),e._v(" "),t("li",[t("p",[e._v("Navigate to your Azure DevOps Project and go to "),t("code",[e._v("Pipelines > Library > Day5RestoreAADVars")])])]),e._v(" "),t("li",[t("p",[e._v("Add the following variables and to pass them as ARM Template's parameters:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Value")]),e._v(" "),t("th",[e._v("ARM Template parameter")]),e._v(" "),t("th",[e._v("Stage")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("AadInstance")]),e._v(" "),t("td",[e._v("https://login.microsoftonline.com")]),e._v(" "),t("td",[e._v("aadInstance")]),e._v(" "),t("td",[e._v("Development")])]),e._v(" "),t("tr",[t("td",[e._v("AadClientId")]),e._v(" "),t("td",[e._v("API AppId, the value that you received from the output when you created the Azure AD application")]),e._v(" "),t("td",[e._v("aadClientId")]),e._v(" "),t("td",[e._v("Development")])]),e._v(" "),t("tr",[t("td",[e._v("AadTenantId")]),e._v(" "),t("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),t("td",[e._v("aadTenantId")]),e._v(" "),t("td",[e._v("Development")])]),e._v(" "),t("tr",[t("td",[e._v("AadDomain")]),e._v(" "),t("td",[e._v("The domain name of your Azure AD e.g. azuredevcollege.onmicrosoft.com")]),e._v(" "),t("td",[e._v("aadDomain")]),e._v(" "),t("td",[e._v("Development")])]),e._v(" "),t("tr",[t("td",[e._v("AadClientIdUri")]),e._v(" "),t("td",[e._v("http://scmapi-dev")]),e._v(" "),t("td",[e._v("aadClientIdUri")]),e._v(" "),t("td",[e._v("Development")])])])])]),e._v(" "),t("li",[t("p",[e._v("Run the pipeline for SCM-API and select the "),t("em",[e._v("features/scmcontactsaad")]),e._v(" branch to run the pipeline against.")])])]),e._v(" "),t("p",[e._v("You can continue with challenge 3 as to the regular guide.")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/day5/challenges/challenge-3.html#protect-scm-contacts-api-with-azure-ad"}},[e._v("Back to challenge 3")])],1),e._v(" "),t("h1",{attrs:{id:"modified-steps-for-break-out-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modified-steps-for-break-out-session"}},[e._v("#")]),e._v(" Modified steps for break-out session")]),e._v(" "),t("p",[e._v("As in "),t("RouterLink",{attrs:{to:"/day5/apps/checkpoint/ChallengeAndBreakout.html#differences-in-challenge-3-protect-scm-contacts-api-with-azure-ad"}},[e._v("challenge-3")]),e._v(" we always perform the following steps for each service:")],1),e._v(" "),t("ol",[t("li",[e._v("Create and checkout a new branch")]),e._v(" "),t("li",[e._v("Edit the the existing build definition and change everything from "),t("code",[e._v("day4")]),e._v(" to "),t("code",[e._v("day5")])]),e._v(" "),t("li",[e._v("Edit the the existing deploy definition and uncomment the lines indicated.")]),e._v(" "),t("li",[e._v("Save the definition, commit the changes and push the branch to the remote repository")]),e._v(" "),t("li",[e._v("Check and fill the required variables under "),t("code",[e._v("Pipelines > Library > Day5RestoreAADVars")])]),e._v(" "),t("li",[e._v("Run the build/deploy pipeline again")]),e._v(" "),t("li",[e._v("Merge the feature branch into the master branch")])]),e._v(" "),t("p",[e._v("We don't need to create additional Azure AD applications for the remaining\nservices. All APIs use the same Azure AD application that we already created\nin "),t("RouterLink",{attrs:{to:"/day5/challenges/challenge-3.html"}},[e._v("challenge-3")]),e._v(" for each stage (Development and\nProduction). The Frontend services uses the client application.")],1),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/day5/challenges/challenge-bo-1.html#scm-resource-api"}},[e._v("Back to breakout")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);