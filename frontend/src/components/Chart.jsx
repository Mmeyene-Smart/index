import { LineChart, Line, XAxis } from 'recharts';

function Chart({ data }) {
  return (
    <LineChart width={800} height={300} data={data}>
      <XAxis dataKey="time" />
      <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={2} dot={false} />
    </LineChart>
  );
}

export default Chart;