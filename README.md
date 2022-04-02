# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/cpQQG5OH9s.gif)
![](http://g.recordit.co/LHREAOU1BY.gif)
![](http://g.recordit.co/AFVytVnecs.gif)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[1.https://www.w3schools.com/js/ </br>
 2.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration </br>
 3.https://www.w3schools.com/js/js_dates.asp]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) <br/><br/>
[The challenge that I have encountered while creating this project would be the debugging aspect of it after implementing the project. I came across this issue where the game would continue even though the pattern was complete. It would just keep replaying the entire pattern and not letting the player know that the game has ended. It was frustrating trying to figure out what the issue was to cause this to happen. I decided to read the code line by line to see what variables were passing around to see what causing the problem. I utilized console log and printed progress and guesscounter at certain points of the code by determining that they were likely to be the cause. I found that the reason was that the progress wasn't being properly tracked therefore the gamen ever knows when it has ended. Another challenge I found was when doing the optional tasks. When trying to speed up the button as the pattern continues, I found that once the pattern hit like the 5th or 6th pathern, the buttons would start clicking way too fast for the player to see rendering the game unplayable. I had to keep adjusting clueholdtime and found that a speed of 1000 would allow the player to still see the buttons being pressed at later patterns.   ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)  <br/><br/>
[After completing the project, I found that some concepts were difficult to understand or took awhile to grasp. But despite this I still want to be able to become a skilled web developer and create things that I visualize by better understanding core concepts of react. I've created small projects with react but lack the skills and path to be in that desirable position. My question is, what direction should I head to achieve this. In this path program, it includes understanding full stack projects and working with databaseS which I think would help me immensely. Another question I have is how do I better understand CSS? CSS is such an important part of web development, and isued to catch the user's eye. Ideally I'd love to create websites like this that are visually appealing such as websites like https://farfromhere.emmitfenn.com/. But I know I lack the skills and knowledge to get to that level and would love to get there. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) <br/><br/>
[While working on this project I had a few ideaas that I thought of while developing. Such as replacing the current buttons with piano keys and having them play piano notes instead just for a certain asthetic. Another idea that I had was after having added the speed change as the pattern goes on. Another possible feature could be creating different difficulty options, where the player selects between easy, normal or hard. Based on the difficulty the number of buttons and sounds to be played would be adjusted. Another possible feature is the repeat button that could only be used 3 times throughout the entire attempt, which would replay what the current pattern is at. 
 ]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=pfTzAO28w1Q)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
