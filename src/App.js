import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyCreator from "./SurveyCreator";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
require("icheck");

export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("default");


widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.signaturepad(Survey);

// FIXME: Eliminar los comentarioss
// Survey.Serializer.addProperty("Prueba",{
//   "name": "question4",
//   "type": "picture",
//   "title": "Fotos de Daño",
//   "isRequired": true,
//   "maxPictures": 4,
//   "minPictures": 1
// });




class App extends Component {

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }


  render() {
    // var tempJson = JSON.parse(localStorage.getItem('Prueba')).surveyText;
    // console.log(tempJson)
    // var tempJson = JSON.parse(tempJson)
    // for (const key of Object.keys(tempJson.pages[0].elements)) {
    //   // console.log(key, tempJson.pages[0].elements[key].type);
    //   if (tempJson.pages[0].elements[key].type == "file") {
    //     tempJson.pages[0].elements[key].type = "picture";
    //   }
    // }

    // tempJson = JSON.stringify(tempJson)
    var tempJson = JSON.parse(localStorage.getItem('Prueba'));  
    var tempJson = JSON.parse(tempJson['surveyText']);
    for (const key of Object.keys(tempJson.pages[0].elements)) {
      // console.log(key, tempJson.pages[0].elements[key].type);
      if (tempJson.pages[0].elements[key].type == "file") {
        tempJson.pages[0].elements[key].type = "picture";
      }
    }
    console.log(tempJson);


    var model = new Survey.Model(tempJson);
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h2>Welcome to React with SurveyJS</h2> */}
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncommehhnt the line below*/}
          <h1>SurveyJS library in action:</h1>
          <div id="surveyElement"></div>
          <Survey.Survey

            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
          {/*If you do not want to show Survey Creator, comment the line below*/}
          {/* <h1>SurveyJS Creator in action:</h1>
          <SurveyCreator /> */}
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
