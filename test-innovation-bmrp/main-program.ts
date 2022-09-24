import * as readline from 'readline';
import { AnnotationLevel, UiControlClient, UiController } from 'askui';
import {SetupTestSession} from "./utils/test-session";
import {GetQuestioningTools} from "./utils/questioning-tools";
import {SetupMachine} from "./utils/setup-machine";
import {GetTestData} from "./utils/test-data";
import { installingChromeExtension } from "./utils/setup-testmachine-extensions";
import {
  AllTestIdeas,
  GetTestStrategyTemplate,
  GetTestingMneumonics,
  TestHeuristics,
  TestIdeaCommonSources,
  TestIdeaforBugs,
} from "./utils/test-ideas";


//Created as a part of Test Innovation Challenge by askui
//Created By: Rahul Parwal & Bharath M

const say = require('say');

// Server for controlling the operating system
let uiController: UiController;
let aui: UiControlClient;

async function askuiLauncher() {
 
  uiController = new UiController({
    display: 0,
  });

  await uiController.start();
  aui = await UiControlClient.build({
  annotationLevel: AnnotationLevel.ON_FAILURE,
  credentials: {"token":"4Ovh3Rq47bC4F4QCoIXV0DCDJLNKabGA", 
  "workspaceId":"c215c446-2081-4594-84a4-149468564598"}
  }
  );
  await aui.connect();
};

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Start of Testistant
say.speak("Hello Awesome Human! I am your testistant, How may I help you?");
var millisecondsToWait = 4000;
setTimeout(function() {
  //Seek Inputs from the User.
  
  /*
  FUTURE PLAN: 
  Take Input as User Voice Instruction from the user and continously run it in 
  background waiting for any further instructions from the tester.
  */ 
  rl.question(`
    Welcome to Testistant!
  
    - Setup Machine at Startup (S)
    
    - Setup Test Session for Testing (T),
    
    - Questioning Tools to Get Better with your Context (Q),
    
    - Launch Test Data Tools (D),

    - Install Popular Testing Browser Extensions (I)

    - All Popular Test Ideas (A),

    - Common Software Bugs Mastersheet (B)

    - Master Test Cheatsheet (C)

    - Test Idea Sources Datasheet (Z)

    - Testing Mneumonics (E)

    - Test Strategy Template (H)
    
    Enter your choice here:`, async (answer) => {
    await askuiLauncher();
    switch(answer.toLowerCase()) {
      case 't':
        console.log("Starting Test Session Setup");
        await SetupTestSession(aui);
        break;
      case 'q':
        console.log("Fetching Questioning Tools");
        await GetQuestioningTools(aui);
        break;
      case 's':
        console.log("Setting up your Test Machine");
        await SetupMachine(aui);
        break;
      case 'd':
        console.log("Fetch Test Data Ideas");
        await GetTestData(aui);
        break;
      case "i":
        console.log("Starting Popular Test extension installation");
        await installingChromeExtension(aui);
        break;
      case "a":
        console.log("All Popular Test Ideas");
        await AllTestIdeas(aui);
        break;
      case "b":
        console.log("Common Software Bugs!");
        await TestIdeaforBugs(aui);
        break;
      case "c":
        console.log("Test Cheatsheet - MoT!");
        await TestHeuristics(aui);
        break;
      case "Z":
        console.log("Common Sources of Test Ideas!");
        await TestIdeaCommonSources(aui);
        break;
      case "h":
        console.log("Test Strategy Template");
        await GetTestStrategyTemplate(aui);
        break;
      case "e":
        console.log("Test Mneumonics");
        await GetTestingMneumonics(aui);
        break;
      default:
        console.log('Invalid Option, Please rerun the program with a valid input!');
    }
    rl.close();
    await uiController.stop();
    aui.close();
    say.speak("Bye from Testistant")
  });
}, millisecondsToWait);


  export {aui}