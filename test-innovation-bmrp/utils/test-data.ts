import { AnnotationLevel, UiControlClient, UiController } from 'askui';
const say = require('say');

//Created as a part of Test Innovation Challenge by askui
//Created By: Rahul Parwal & Bharath M

  /* Idea:
  Add More test Data tools (Free as well as paid) from a master list.
  Test Data tools can be of different types: Web based, Desktop based, Browser Extension Based 
  Future:
  This can alse be nested for fetching data as per domain and application types and also save some data dumps in csv format
  */
export async function GetTestData(aui:UiControlClient)
{

    say.speak("Working on Test Data? Here are some tools to get Nasty Strings, Pairwise Test Data, and Localized Test Data!");
    
    let applicationCommandList: string[] = [
    "start chrome https://github.com/minimaxir/big-list-of-naughty-strings", 
    "start chrome https://pairwise.teremokgames.com/",
    "start chrome https://www.typeit.org/",
];

    for (let applicationCommand of applicationCommandList) {
        await aui.execOnShell(applicationCommand).exec();
    }

   say.speak("For more data related tools, please you use the Setup Test Machine Extensions Command");
}

