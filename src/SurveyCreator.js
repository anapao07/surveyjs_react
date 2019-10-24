import React, { Component } from "react";
import * as SurveyJSCreator from "survey-creator";
import * as SurveyKo from "survey-knockout";
import "survey-creator/survey-creator.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import "icheck/skins/square/blue.css";

import * as widgets from "surveyjs-widgets";

SurveyJSCreator.StylesManager.applyTheme("default");

widgets.icheck(SurveyKo, $);
widgets.select2(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.signaturepad(SurveyKo);





class SurveyCreator extends Component {
  surveyCreator;
  componentDidMount() {
    let options = { 
      showEmbededSurveyTab: false,
      showTranslationTab: false,
      showLogicTab: false,
      showPropertyGrid: true,
      showJSONEditorTab: false,
      isAutoSave: true,
      showState :true
      
      
  };
   
    this.surveyCreator = new SurveyJSCreator.SurveyCreator(
      "surveyCreatorContainer",
      options,
     
      
      
    );
    this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
    
    
  }
  
  render() {
    return <div id="surveyCreatorContainer" />;
  }

  saveMySurvey = () => {
    //console.log(JSON.stringify(this.surveyCreator.text));
    //console.log(this.surveyCreator.text);
    
 
    const payload = {
      
      surveyId: 'Prueba',
      surveyText : this.surveyCreator.text
      
    };
   
    localStorage.setItem('Prueba', JSON.stringify(payload));
  };



  
}

export default SurveyCreator;
