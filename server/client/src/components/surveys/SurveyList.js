import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchSurveys, deleteSurvey} from '../../actions';
import GoogleChart from './GoogleChart';


class SurveyList extends Component {
    componentDidMount(){
        this.props.fetchSurveys();
    }

    renderSurveys(){
        return this.props.surveys.reverse().map(survey => {
            return(
                <div className = "card grey darken-1" key={survey._id}>
                    <div className="card-content white-text">
                        <span className="card-title ">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent On :{new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className = "card-action center">
                        <button 
                            className="pink-text right transparent"
                            onClick={() => deleteSurvey(survey)}
                        >
                            Delete survey
                            <i className="material-icons right">delete</i>
                        </button>
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                        <GoogleChart yes={survey.yes} no={survey.no}/>
                        
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({surveys}){
    return{ surveys };
}

export default connect(mapStateToProps, {fetchSurveys} )(SurveyList);

