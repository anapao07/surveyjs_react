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

export {MyQuestion} from "./MyQuestion";

Survey.StylesManager.applyTheme("default");




class nav extends Component {
 
  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }

  render() {
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with SurveyJS</h2>
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          <h1>SurveyJS library in action:</h1>
          {/* <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          /> */}
          {/*If you do not want to show Survey Creator, comment the line below*/}
          <h1>ejemplo:</h1>
          <SurveyCreator />
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default nav;
