import { AnnotationLevel, UiControlClient, UiController } from 'askui';
const say = require('say');

//Created as a part of Test Innovation Challenge by askui
//Created By: Rahul Parwal & Bharath M

export async function SetupTestSession(aui:UiControlClient)
{
    say.speak("Setting up test machine for a fresh test session");

    await aui.waitFor(3000);
    //Local System Details -- Needs wait
    say.speak("Fetching System Configuration & Details");
    await aui.execOnShell('dxdiag').exec();
    await aui.waitFor(5000);

    say.speak("Fetching Test Browser Details");
    await aui.execOnShell('start chrome supportdetails.com').exec();
    await aui.click().text().containsText("Export").exec();
  
    //opening new doc for test notes
    say.speak("Opening new doc for test notes.");
    await aui.execOnShell('start chrome doc.new').exec();
    await aui.annotate();
    await aui.click().text().withText("Untitled document").exec();
    await aui.pressKey("delete").exec();
    await aui.type("Test Notes AskUi App Testing - " + new Date().toString()).exec();
    await aui.pressKey("enter").exec();
    await aui.annotate();
    await aui.click().text().containsText("insert").exec();
    
    say.speak("Creating section for test notes.");
    await aui.pressTwoKeys('control','B').exec();
    
    await aui.type('Bugs:').exec();
    await aui.pressKey("enter").exec();
    await aui.pressKey("enter").exec();
    await aui.type('Notes:').exec();
    await aui.pressKey("enter").exec();
    await aui.pressKey("enter").exec();
    await aui.type('Ideas:').exec();
    await aui.pressKey("enter").exec();
    await aui.pressKey("enter").exec();
    await aui.type('Questions:').exec();
    await aui.pressKey("enter").exec();
    await aui.pressKey("enter").exec();
    
    
    await aui.pressTwoKeys('control','s').exec();
    //opening new doc for test notes
    say.speak("Clearing Cache");
    await aui.pressThreeKeys('control','shift','delete').exec();
    await aui.click().text().withText("Clear data").exec();
    await aui.waitFor(3000);
    await aui.pressTwoKeys('control','w').exec();

    say.speak("Opening Application Under Test");
    await aui.execOnShell("start chrome askui.com").exec();

    say.speak("Initiating a new session recording");
    //Recording Start --> XBox Game Recorder Keyboard Shortcut for Windows Systems
    await aui.pressThreeKeys('command','alt',"r").exec();

    say.speak("Test Setup of Machine Completed Now.");
}

