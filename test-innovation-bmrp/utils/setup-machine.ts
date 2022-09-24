import { AnnotationLevel, UiControlClient, UiController } from 'askui';
const say = require('say');

//Created as a part of Test Innovation Challenge by askui
//Created By: Rahul Parwal & Bharath M

  /* Idea:
  Setup Test Machine is a daily task and takes up almost 5-10 mins.
  this utility can be made configurable for the users where they can list there popular apps, urls, etc.
  Future:
  This can customized to internally check for host os (win, lin, mac) and automatically fire necessary commands.
  Currently only supported for Windows OS.
  */

export async function SetupMachine(aui:UiControlClient)
{
    say.speak("Setting up your machine for work");
    
    let applicationCommandList: string[] = ["start chrome https://www.ministryoftesting.com/feeds/blogs", 
    "start chrome https://discord.com/channels/912752657662349312/1001803566773710918",
    ,"msteams","code"];

    for (let applicationCommand of applicationCommandList) {
        await aui.execOnShell(applicationCommand).exec();
    }
   
   
    //Launch File Explorer
   await aui.pressTwoKeys('command','E').exec();

   //Minimize All Apps
   await aui.pressTwoKeys('command','M').exec();
   
   say.speak("Minimized all open applications. Your machine is ready now. Have a good day!");
}

