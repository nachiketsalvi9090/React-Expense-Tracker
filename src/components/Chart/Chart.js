import './Chart.css';

import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          label={dataPoints.label}
          maxValue={totalMaximum}
          value={dataPoints.value}
        />
      ))}
    </div>
  );
};

export default Chart;
