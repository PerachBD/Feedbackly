//SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formField from './formFields';
import * as actions from "../../actions"

const SurveyFormReview = ({onCancel, formValues, submitSurvey}) =>{
    const reviewFields = _.map(formField, ({name,label}) => {
        return(
            <div key = {name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });
    
    return(
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="red darken-3 white-text btn-flat"
                onClick={onCancel}
            >Back
            </button>
            <button 
                onClick={() => submitSurvey(formValues)}
                className="lime btn flat right"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateProps(state){
    return{ formValues: state.form.surveyForm.values };
}

export default connect(mapStateProps, actions)(SurveyFormReview);