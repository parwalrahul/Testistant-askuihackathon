import { AnnotationLevel, UiControlClient, UiController } from "askui";
const say = require('say');

//Created as a part of Test Innovation Challenge by askui
//Created By: Rahul Parwal & Bharath M

//Created as a part of Test Innovation Challenge by askui
//Created By: Rahul Parwal & Bharath M

  /* Idea:
  Add More test extensions here.
  Future:
  Capture this data from 
  another source (most likely a list) where we can list down community
  voted useful testing extensions.
  */
export async function installingChromeExtension(aui: UiControlClient) {
  
  
  let extensionlist: string[] = ["Bug Magnet", "Fake Filler", "Counterstring"];

  for (let extensionname of extensionlist) {
    say.speak("Installing Chrome extension "+ extensionname);
    console.log("Installing Chrome extension ", extensionname);
    await aui
      .execOnShell(
        "start chrome https://chrome.google.com/webstore/category/extensions?hl=en-US"
      )
      .exec();

    await aui.moveMouseTo().text().withText("Search the store").exec();
    await aui.click().text().withText("Search the store").exec();

    await aui.type(extensionname).exec();
    await aui.pressKey("enter").exec();

    await aui.click().text().withText(extensionname).exec();

    // if (await aui.expect().button().containsText("Remove")) {
    //   say.speak(extensionname + " extension is already installed");
    //   console.log(extensionname, "extension is already installed");
    // } else {
      await aui.click().button().withText("Add to Chrome").exec();

      await aui.click().button().withText("Add extension").exec();

      await aui.pressKey("enter").exec();
      say.speak("Installation complete for "+ extensionname);
      console.log("Installation complete for", extensionname);
   // }
  }
  //Minimize All Apps
  await aui.pressTwoKeys('command','M').exec();
}
