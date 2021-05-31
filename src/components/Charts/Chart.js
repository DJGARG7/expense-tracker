import ChartBar from "./ChartBar";
import "./chart.css";
const Chart = (props) => {
  const nums = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxi = Math.max(...nums);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxi}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
