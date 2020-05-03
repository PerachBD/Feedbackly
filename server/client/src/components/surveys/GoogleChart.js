import Chart from "react-google-charts";
import React, {Component} from 'react';
import {connect} from 'react-redux';

class GoogleChart extends Component {
  renderChart(yes,no) {
      return (
        <Chart
          width={'60%'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['survey results', 'precents'],
            ['yes', yes],
            ['no', no],
          ]}
          
          options={{
            legend: 'none',
            pieSliceText: 'label',
            pieStartAngle: 100,
            backgroundColor: '#757575',
          }}
          rootProps={{ 'data-testid': '4' }}
        />
      );
  }

  render(){
    console.log(this.props)
    return(
        <div>
            {this.renderChart(this.props.yes,this.props.no)}
            
        </div>
    );
  }
}

function mapStateToProps({survey}){
  return{ survey };
}

export default connect(mapStateToProps)(GoogleChart);