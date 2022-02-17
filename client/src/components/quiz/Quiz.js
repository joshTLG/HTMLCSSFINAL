import React from "react";
import('../../quizes')

const Quiz = () => {
  return (
    <div>
      <h1 className="quizHeader">Take the Apprentice Quiz!</h1>
      <h2 className="subjectHeader">Java</h2>
      <div>
        <p className="JavaQuestion">
          1. A collection of data items, all of the same type, in which each
          item's position is uniquely designed by an integer?
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ1"
            defaultValue={1}
          />
          <label id="correctJavaString1">array</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ1"
            defaultValue={0}
          />
          <label>abstract</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ1"
            defaultValue={0}
          />
          <label>autoboxing</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ1"
            defaultValue={0}
          />
          <label>integer</label>
        </ul>
      </div>
      <div>
        <p className="JavaQuestion">
          2. A java keyword used in a class definition to specify that a class
          is not to be instantiated, but rather inherited.
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ2"
            defaultValue={0}
          />
          <label>array</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ2"
            defaultValue={1}
          />
          <label id="correctJavaString2">abstract</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ2"
            defaultValue={0}
          />
          <label>casting</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ2"
            defaultValue={0}
          />
          <label>double</label>
        </ul>
      </div>
      <div>
        <p className="JavaQuestion">
          3. An event during program execution that prevents the program from
          continuing normally; an error
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ3"
            defaultValue={0}
          />
          <label>extends</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ3"
            defaultValue={1}
          />
          <label id="correctJavaString3">exception</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ3"
            defaultValue={0}
          />
          <label>identifier</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ3"
            defaultValue={0}
          />
          <label>inheritance</label>
        </ul>
      </div>
      <div>
        <p className="JavaQuestion">
          4. A data item known within a block, but inaccessible to code outside
          the block.
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ4"
            defaultValue={0}
          />
          <label>instance variable</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ4"
            defaultValue={1}
          />
          <label id="correctJavaString4">local variable</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ4"
            defaultValue={0}
          />
          <label>The best variable</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ4"
            defaultValue={0}
          />
          <label>method</label>
        </ul>
      </div>
      <div>
        <p className="JavaQuestion">
          5. Using one identifier to refer to multiple items in the same scope.
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ5"
            defaultValue={1}
          />
          <label id="correctJavaString5">overloading</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ5"
            defaultValue={0}
          />
          <label>overriding</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ5"
            defaultValue={0}
          />
          <label>overdoingit</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ5"
            defaultValue={0}
          />
          <label>package</label>
        </ul>
      </div>
      <div>
        <p className="JavaQuestion">
          6. A variable data type in which the variable's value is of the
          appropriate size and format for its type.
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ6"
            defaultValue={1}
          />
          <label id="correctJavaString6">primitive type</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ6"
            defaultValue={0}
          />
          <label>secondary type</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ6"
            defaultValue={0}
          />
          <label>privilege</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ6"
            defaultValue={0}
          />
          <label>class</label>
        </ul>
      </div>
      <div>
        <p className="JavaQuestion">
          7. It signifies that the method or variable can be accessed by
          elements residing in other classes.
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ7"
            defaultValue={0}
          />
          <label>private</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ7"
            defaultValue={0}
          />
          <label>encrypted</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ7"
            defaultValue={0}
          />
          <label>protected</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ7"
            defaultValue={1}
          />
          <label id="correctJavaString7">public</label>
        </ul>
      </div>
      <div>
        <p className="JavaQuestion">
          8. A Java keyword used in method declarations to specify that the
          method does not return any value.
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ8"
            defaultValue={0}
          />
          <label>exit</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ8"
            defaultValue={0}
          />
          <label>while</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ8"
            defaultValue={1}
          />
          <label id="correctJavaString8">void</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ8"
            defaultValue={0}
          />
          <label>for</label>
        </ul>
      </div>
      <div>
        <p className="JavaQuestion">
          9. An object that encapsulates and delegates to another object to
          alter its interface or behavior in some way.
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ9"
            defaultValue={1}
          />
          <label id="correctJavaString9">wrapper</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ9"
            defaultValue={0}
          />
          <label>variable</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ9"
            defaultValue={0}
          />
          <label>throw</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ9"
            defaultValue={0}
          />
          <label>Unicode</label>
        </ul>
      </div>
      <div>
        <p className="JavaQuestion">
          10. Automatic conversion between reference and primitive types.
        </p>
        <ul>
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ10"
            defaultValue={1}
          />
          <label id="correctJavaString10">autoboxing</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ10"
            defaultValue={0}
          />
          <label>break</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ10"
            defaultValue={0}
          />
          <label>autobox</label>
          <br />
          <input
            className="JavaAnswer"
            type="radio"
            name="JavaQ10"
            defaultValue={0}
          />
          <label>autobots</label>
        </ul>
      </div>
      <br />
      <div className="JavaSubmitter">
        <input
          className="JavaQuizSubmit"
          id="submitJavaButton"
          onclick="submitJavaQuiz()"
          type="submit"
          defaultValue="Submit"
        />
      </div>
      {/*show only wrong answers on submit*/}
      <div className="JavaQuizAnswers" id="correctJavaAnswer1" />
      <div className="JavaQuizAnswers" id="correctJavaAnswer2" />
      <div className="JavaQuizAnswers" id="correctJavaAnswer3" />
      <div className="JavaQuizAnswers" id="correctJavaAnswer4" />
      <div className="JavaQuizAnswers" id="correctJavaAnswer5" />
      <div className="JavaQuizAnswers" id="correctJavaAnswer6" />
      <div className="JavaQuizAnswers" id="correctJavaAnswer7" />
      <div className="JavaQuizAnswers" id="correctJavaAnswer8" />
      <div className="JavaQuizAnswers" id="correctJavaAnswer9" />
      <div className="JavaQuizAnswers" id="correctJavaAnswer10" />
      {/*show score upon submit*/}
      <div>
        <h2 className="JavaQuizScore" id="userJavaScore" />
      </div>
      <h2 className="subjectHeader">CSS</h2>
      <div>
        <p className="CSSQuestion">1. What does CSS stand for?</p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ1"
            defaultValue={1}
          />
          <label id="correctCSSString1">Cascading Style Sheets</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ1"
            defaultValue={0}
          />
          <label>Computer Style Sheets</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ1"
            defaultValue={0}
          />
          <label>Coloful Style Sheets</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ1"
            defaultValue={0}
          />
          <label>Creative Style Sheets</label>
        </ul>
      </div>
      <div>
        <p className="CSSQuestion">
          2. How do you insert a comment in a CSS file?
        </p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ2"
            defaultValue={0}
          />
          <label>// this is a comment</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ2"
            defaultValue={1}
          />
          <label id="correctCSSString2">/* this is a comment */</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ2"
            defaultValue={0}
          />
          <label>// this is a comment //</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ2"
            defaultValue={0}
          />
          <label>'this is a comment</label>
        </ul>
      </div>
      <div>
        <p className="CSSQuestion">
          3. Where in an HTML document is the correct place to refer to an
          external style sheet?
        </p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ3"
            defaultValue={0}
          />
          <label>In the body section</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ3"
            defaultValue={1}
          />
          <label id="correctCSSString3">In the head section</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ3"
            defaultValue={0}
          />
          <label>At the end of the document</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ3"
            defaultValue={0}
          />
          <label>It doesn't matter</label>
        </ul>
      </div>
      <div>
        <p className="CSSQuestion">
          4. How do you add a background color for all h1 elements?
        </p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ4"
            defaultValue={0}
          />
          <label>
            select.all {"{"}background-color:#FFFFFF;{"}"}
          </label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ4"
            defaultValue={1}
          />
          <label id="correctCSSString4">
            h1 {"{"}background-color:#FFFFFF;{"}"}
          </label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ4"
            defaultValue={0}
          />
          <label>
            all.h1 {"{"}background-color:#FFFFFF;{"}"}
          </label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ4"
            defaultValue={0}
          />
          <label>
            h1.all {"{"}background-color:#FFFFFF;{"}"}
          </label>
        </ul>
      </div>
      <div>
        <p className="CSSQuestion">
          5. Which property is used to change the background color?
        </p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ5"
            defaultValue={1}
          />
          <label id="correctCSSString5">background-color</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ5"
            defaultValue={0}
          />
          <label>color</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ5"
            defaultValue={0}
          />
          <label>change: background color</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ5"
            defaultValue={0}
          />
          <label>bgcolor</label>
        </ul>
      </div>
      <div>
        <p className="CSSQuestion">
          6. Which property is used to change the font of an element?
        </p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ6"
            defaultValue={1}
          />
          <label id="correctCSSString6">font-family</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ6"
            defaultValue={0}
          />
          <label>font-style</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ6"
            defaultValue={0}
          />
          <label>font-change</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ6"
            defaultValue={0}
          />
          <label>font-weight</label>
        </ul>
      </div>
      <div>
        <p className="CSSQuestion">
          7. Which CSS property controls the text size?
        </p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ7"
            defaultValue={0}
          />
          <label>text-size</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ7"
            defaultValue={0}
          />
          <label>text-style</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ7"
            defaultValue={0}
          />
          <label>font-style</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ7"
            defaultValue={1}
          />
          <label id="correctCSSString7">font-size</label>
        </ul>
      </div>
      <div>
        <p className="CSSQuestion">
          8. Which property is used to change the left margin of an element?
        </p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ8"
            defaultValue={0}
          />
          <label>padding-left</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ8"
            defaultValue={0}
          />
          <label>left-margin</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ8"
            defaultValue={1}
          />
          <label id="correctCSSString8">margin-left</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ8"
            defaultValue={0}
          />
          <label>indent</label>
        </ul>
      </div>
      <div>
        <p className="CSSQuestion">
          9. How do you select an element with id 'practice?
        </p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ9"
            defaultValue={1}
          />
          <label id="correctCSSString9">#practice</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ9"
            defaultValue={0}
          />
          <label>practice</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ9"
            defaultValue={0}
          />
          <label>.practice</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ9"
            defaultValue={0}
          />
          <label>$practice</label>
        </ul>
      </div>
      <div>
        <p className="CSSQuestion">
          10. How do you select an element with the class 'practice'?
        </p>
        <ul>
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ10"
            defaultValue={1}
          />
          <label id="correctCSSString10">.practice</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ10"
            defaultValue={0}
          />
          <label>#practice</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ10"
            defaultValue={0}
          />
          <label>$practice</label>
          <br />
          <input
            className="CSSAnswer"
            type="radio"
            name="CSSQ10"
            defaultValue={0}
          />
          <label>c.practice</label>
        </ul>
      </div>
      <br />
      <div className="CSSSubmitter">
        <input
          className="CSSQuizSubmit"
          id="submitCSSButton"
          onclick="submitCSSQuiz()"
          type="submit"
          defaultValue="Submit"
        />
      </div>
      {/*show only wrong answers on submit*/}
      <div className="CSSQuizAnswers" id="correctCSSAnswer1" />
      <div className="CSSQuizAnswers" id="correctCSSAnswer2" />
      <div className="CSSQuizAnswers" id="correctCSSAnswer3" />
      <div className="CSSQuizAnswers" id="correctCSSAnswer4" />
      <div className="CSSQuizAnswers" id="correctCSSAnswer5" />
      <div className="CSSQuizAnswers" id="correctCSSAnswer6" />
      <div className="CSSQuizAnswers" id="correctCSSAnswer7" />
      <div className="CSSQuizAnswers" id="correctCSSAnswer8" />
      <div className="CSSQuizAnswers" id="correctCSSAnswer9" />
      <div className="CSSQuizAnswers" id="correctCSSAnswer10" />
      {/*show score upon submit*/}
      <div>
        <h2 className="CSSQuizScore" id="userCSSScore" />
      </div>
      <h2 className="subjectHeader">HTML</h2>
      <div>
        <p className="HTMLQuestion">1. What does HTML stand for?</p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ1"
            defaultValue={1}
          />
          <label id="correctHTMLString1">Hyper Text Markup Language</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ1"
            defaultValue={0}
          />
          <label>Home Tool Markup Language</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ1"
            defaultValue={0}
          />
          <label>Hyperlinks and Text Markup Language</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ1"
            defaultValue={0}
          />
          <label>Hyperlink Tool Markup Language</label>
        </ul>
      </div>
      <div>
        <p className="HTMLQuestion">
          2. Choose the correct HTML element for the largest heading.
        </p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ2"
            defaultValue={0}
          />
          <label>h6</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ2"
            defaultValue={1}
          />
          <label id="correctHTMLString2">h1</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ2"
            defaultValue={0}
          />
          <label>heading</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ2"
            defaultValue={0}
          />
          <label>head</label>
        </ul>
      </div>
      <div>
        <p className="HTMLQuestion">3. How can you make a numbered list?</p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ3"
            defaultValue={0}
          />
          <label>ul</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ3"
            defaultValue={1}
          />
          <label id="correctHTMLString3">ol</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ3"
            defaultValue={0}
          />
          <label>list</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ3"
            defaultValue={0}
          />
          <label>dl</label>
        </ul>
      </div>
      <div>
        <p className="HTMLQuestion">
          4. Which HTML element defines the title of a document?
        </p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ4"
            defaultValue={0}
          />
          <label>document</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ4"
            defaultValue={1}
          />
          <label id="correctHTMLString4">title</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ4"
            defaultValue={0}
          />
          <label>meta</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ4"
            defaultValue={0}
          />
          <label>head</label>
        </ul>
      </div>
      <div>
        <p className="HTMLQuestion">
          5. What is the correct HTML element for playing video files?
        </p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ5"
            defaultValue={1}
          />
          <label id="correctHTMLString5">video</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ5"
            defaultValue={0}
          />
          <label>mp3</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ5"
            defaultValue={0}
          />
          <label>media</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ5"
            defaultValue={0}
          />
          <label>movie</label>
        </ul>
      </div>
      <div>
        <p className="HTMLQuestion">6. In HTML, onblur and onfocus are:</p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ6"
            defaultValue={1}
          />
          <label id="correctHTMLString6">Event elements</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ6"
            defaultValue={0}
          />
          <label>Style attributes</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ6"
            defaultValue={0}
          />
          <label>Image attributes</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ6"
            defaultValue={0}
          />
          <label>HTML elements</label>
        </ul>
      </div>
      <div>
        <p className="HTMLQuestion">
          7. What is the correct HTML element for playing audio files?
        </p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ7"
            defaultValue={0}
          />
          <label>mp3</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ7"
            defaultValue={0}
          />
          <label>video</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ7"
            defaultValue={0}
          />
          <label>sound</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ7"
            defaultValue={1}
          />
          <label id="correctHTMLString7">audio</label>
        </ul>
      </div>
      <div>
        <p className="HTMLQuestion">
          8. In HTML, which attribute is used to specify that an input field
          must be filled out?
        </p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ8"
            defaultValue={0}
          />
          <label>validate</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ8"
            defaultValue={0}
          />
          <label>form</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ8"
            defaultValue={1}
          />
          <label id="correctHTMLString8">required</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ8"
            defaultValue={0}
          />
          <label>placeholder</label>
        </ul>
      </div>
      <div>
        <p className="HTMLQuestion">
          9. Which HTML element defines navigation links?
        </p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ9"
            defaultValue={1}
          />
          <label id="correctHTMLString9">nav</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ9"
            defaultValue={0}
          />
          <label>navigation</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ9"
            defaultValue={0}
          />
          <label>navigate</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ9"
            defaultValue={0}
          />
          <label>nav.link</label>
        </ul>
      </div>
      <div>
        <p className="HTMLQuestion">
          10. Choose the correct HTML element to define emphasized text.
        </p>
        <ul>
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ10"
            defaultValue={1}
          />
          <label id="correctHTMLString10">em</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ10"
            defaultValue={0}
          />
          <label>i</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ10"
            defaultValue={0}
          />
          <label>italic</label>
          <br />
          <input
            className="HTMLAnswer"
            type="radio"
            name="HTMLQ10"
            defaultValue={0}
          />
          <label>emp</label>
        </ul>
      </div>
      <br />
      <div className="HTMLSubmitter">
        <input
          className="HTMLQuizSubmit"
          id="submitHTMLButton"
          onclick="submitHTMLQuiz()"
          type="submit"
          defaultValue="Submit"
        />
      </div>
      {/*show only wrong answers on submit*/}
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer1" />
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer2" />
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer3" />
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer4" />
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer5" />
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer6" />
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer7" />
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer8" />
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer9" />
      <div className="HTMLQuizAnswers" id="correctHTMLAnswer10" />
      {/*show score upon submit*/}
      <div>
        <h2 className="HTMLQuizScore" id="userHTMLScore" />
      </div>
      <h2 className="subjectHeader">JavaScript</h2>
      <div>
        <p className="JavaScriptQuestion">
          1. Where is the correct place to insert a JavaScript?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ1"
            defaultValue={1}
          />
          <label id="correctJavaScriptString1">
            Both the body and head sections
          </label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ1"
            defaultValue={0}
          />
          <label>The div section</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ1"
            defaultValue={0}
          />
          <label>The head section</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ1"
            defaultValue={0}
          />
          <label>The body section</label>
        </ul>
      </div>
      <div>
        <p className="JavaScriptQuestion">
          2. Inside which HTML element do we put the JavaScript?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ2"
            defaultValue={0}
          />
          <label>scripting</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ2"
            defaultValue={1}
          />
          <label id="correctJavaScriptString2">script</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ2"
            defaultValue={0}
          />
          <label>javascript</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ2"
            defaultValue={0}
          />
          <label>js</label>
        </ul>
      </div>
      <div>
        <p className="JavaScriptQuestion">
          3. How do you create a function in JavaScript?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ3"
            defaultValue={0}
          />
          <label>function = myFunction()</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ3"
            defaultValue={1}
          />
          <label id="correctJavaScriptString3">function myFunction()</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ3"
            defaultValue={0}
          />
          <label>function:myFunction()</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ3"
            defaultValue={0}
          />
          <label>function = function()</label>
        </ul>
      </div>
      <div>
        <p className="JavaScriptQuestion">
          4. How do you write an IF statement in JavaScript?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ4"
            defaultValue={0}
          />
          <label>if i == 5 then</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ4"
            defaultValue={1}
          />
          <label id="correctJavaScriptString4">if (i == 5)</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ4"
            defaultValue={0}
          />
          <label>if i = 5</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ4"
            defaultValue={0}
          />
          <label>if i = 5 then</label>
        </ul>
      </div>
      <div>
        <p className="JavaScriptQuestion">
          5. How do you call a function named myFunction?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ5"
            defaultValue={1}
          />
          <label id="correctJavaScriptString5">myFunction()</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ5"
            defaultValue={0}
          />
          <label>call myFunction()</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ5"
            defaultValue={0}
          />
          <label>call function myFunction()</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ5"
            defaultValue={0}
          />
          <label>call = myFunction()</label>
        </ul>
      </div>
      <div>
        <p className="JavaScriptQuestion">
          6. How do you write an IF statement for executing code if i is NOT
          equal to 5?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ6"
            defaultValue={1}
          />
          <label id="correctJavaScriptString6">if (i!=5)</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ6"
            defaultValue={0}
          />
          <label>if i &lt;&gt; 5</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ6"
            defaultValue={0}
          />
          <label>if i=! 5 then</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ6"
            defaultValue={0}
          />
          <label>if (i&lt;&gt;5)</label>
        </ul>
      </div>
      <div>
        <p className="JavaScriptQuestion">
          7. How do you start a WHILE loop in JavaScript?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ7"
            defaultValue={0}
          />
          <label>WHILE ( == 10)</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ7"
            defaultValue={0}
          />
          <label>while i = 1 to 10</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ7"
            defaultValue={0}
          />
          <label>while (i &lt;= 10; i++)</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ7"
            defaultValue={1}
          />
          <label id="correctJavaScriptString7">while ( &lt;= 10)</label>
        </ul>
      </div>
      <div>
        <p className="JavaScriptQuestion">
          8. How do you add a comment in JavaScript?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ8"
            defaultValue={0}
          />
          <label>$This is a comment</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ8"
            defaultValue={0}
          />
          <label>'This is a comment</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ8"
            defaultValue={1}
          />
          <label id="correctJavaScriptString8">//This is a comment</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ8"
            defaultValue={0}
          />
          <label>!--This is comment</label>
        </ul>
      </div>
      <div>
        <p className="JavaScriptQuestion">
          9. How do you find the number with the highest value of x and y?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ9"
            defaultValue={1}
          />
          <label id="correctJavaScriptString9">Math.max(x,y)</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ9"
            defaultValue={0}
          />
          <label>ceil(x,y)</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ9"
            defaultValue={0}
          />
          <label>top(x,y)</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ9"
            defaultValue={0}
          />
          <label>Math.ceil(x,y)</label>
        </ul>
      </div>
      <div>
        <p className="JavaScriptQuestion">
          10. Which event occurs when the user clicks on an HTML element?
        </p>
        <ul>
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ10"
            defaultValue={1}
          />
          <label id="correctJavaScriptString10">onclick</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ10"
            defaultValue={0}
          />
          <label>onmouseclick</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ10"
            defaultValue={0}
          />
          <label>onchange</label>
          <br />
          <input
            className="JavaScriptAnswer"
            type="radio"
            name="JavaScriptQ10"
            defaultValue={0}
          />
          <label>onmouseover</label>
        </ul>
      </div>
      <br />
      <div className="JavaScriptSubmitter">
        <input
          className="JavaScriptQuizSubmit"
          id="submitJavaScriptButton"
          onclick="submitJavaScriptQuiz()"
          type="submit"
          defaultValue="Submit"
        />
      </div>
      {/*show only wrong answers on submit*/}
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer1" />
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer2" />
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer3" />
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer4" />
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer5" />
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer6" />
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer7" />
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer8" />
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer9" />
      <div className="JavaScriptQuizAnswers" id="correctJavaScriptAnswer10" />
      {/*show score upon submit*/}
      <div>
        <h2 className="JavaScriptQuizScore" id="userJavaScriptScore" />
      </div>
    </div>
  );
};

export default Quiz;
