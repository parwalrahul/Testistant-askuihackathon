import { AnnotationLevel, UiControlClient, UiController } from "askui";
import * as readline from "readline";
import say from "say";

//Created as a part of Test Innovation Challenge by askui
//Created By: Rahul Parwal & Bharath M

let commonIdeas = "https://bbst.courses/wp-content/uploads/2022/08/Kaner_Common_Software_Errors.pdf";
let cheatSheet = "https://www.ministryoftesting.com/dojo/lessons/test-heuristics-cheat-sheet";
let ideaSources = "http://thetesteye.com/posters/TheTestEye_SourcesForTestIdeas.pdf";
let htsm = "https://www.satisfice.com/download/heuristic-test-strategy-model";
let testmneumonics = "http://www.qualityperspectives.ca/resources/#mnemonics";
let testingcontests = "https://enjoytesting.files.wordpress.com/2013/10/50tipstowintestingcontests.pdf";


  /* Idea:
  Add More test idea tools from a master list.
  Idea tools can be of different types: 
  Ex: Requirements, Bugs, Tests, Automation, Exploratory, General, Specialized Testing, etc.
  Future:
  This can alse be nested for fetching questions as per user need / situation / context / domain / type.  
  */
export async function AllTestIdeas(aui: UiControlClient) {
  console.log("Launching some cool test ideas for you");
  say.speak("Launching some cool test ideas for you");
  await aui
    .execOnShell(
      "start chrome "+ commonIdeas+ " "+cheatSheet+ " "+ideaSources+" "+htsm+ " "+testmneumonics+ " "+testingcontests
    )
    .exec();
}

export async function TestIdeaforBugs(aui: UiControlClient) {
  console.log("Opening test ideas for bugs");
  say.speak("Opening Common Software Errors by Dr. Cem Kaner");
  await aui
    .execOnShell(
      "start chrome "+commonIdeas
    )
    .exec();
}

export async function TestHeuristics(aui: UiControlClient) {
  console.log("Opening test ideas for heuristics");
  say.speak("Opening popular test heuristics by Ministry of Testing");
  await aui
    .execOnShell(
      "start chrome "+ cheatSheet
    )
    .exec();
}

export async function TestIdeaCommonSources(aui: UiControlClient) {
  console.log("Opening test ideas for source");
  say.speak("Opening 37 Sources of test ideas by Rikard Edgren");
  await aui
    .execOnShell(
      "start chrome "+ideaSources
    )
    .exec();
}

export async function GetTestStrategyTemplate(aui: UiControlClient) {
  console.log("Opening HTSM");
  say.speak("Opening HTSM Template by James Bach");
  await aui
    .execOnShell(
      "start chrome "+htsm
    )
    .exec();
}

export async function GetTestingMneumonics(aui: UiControlClient) {
  console.log("Opening Popular Test Mneumonics");
  say.speak("Opening Popular Test Mneumonics");
  await aui
    .execOnShell(
      "start chrome "+testmneumonics
    )
    .exec();
}