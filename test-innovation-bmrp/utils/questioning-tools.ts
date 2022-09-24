import { AnnotationLevel, UiControlClient, UiController } from 'askui';
const say = require('say');

//Created as a part of Test Innovation Challenge by askui
//Created By: Rahul Parwal & Bharath M

  /* Idea:
  Add More test questioning tools from a master list.
  Questioning tools can be of different types: 
  Ex: Question Banks, Checklists, Questions to Stakeholders, or Devs, etc.
  Future:
  This can alse be nested for fetching questions as per user need / situation.  
  */

export async function GetQuestioningTools(aui:UiControlClient)
{
    say.speak("Thinking of Questions to Ask for? I have some suggestions for you!");
    await aui.waitFor(5000).exec();
    say.speak("Check for existing bugs, release notes, developer time, testability, and customer expectations?");
    await aui.waitFor(7000).exec();
    say.speak("Here are some context free questions to help you with testing");
    await aui.execOnShell('start chrome https://www.developsense.com/blog/2010/11/context-free-questions-for-testing/').exec();
    await aui.waitFor(3000).exec();
    say.speak("If you need further assistance, check out the questioning toolkit");
    await aui.execOnShell('start chrome http://www.fno.org/nov97/toolkit.html').exec();
    say.speak("All the best!");
}
