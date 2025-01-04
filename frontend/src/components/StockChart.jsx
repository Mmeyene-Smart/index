import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

function StockChart({ data }) {
  return (
    <div className="bg-dark-light p-8 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Stock Volume</h2>
        <div className="flex gap-4">
          <button className="text-gray-400 hover:text-white">Hourly</button>
          <button className="text-green-500">Daily</button>
          <button className="text-gray-400 hover:text-white">Monthly</button>
          <button className="text-gray-400 hover:text-white">Yearly</button>
        </div>
      </div>
      
      <div className="text-4xl font-bold mb-6">$ 4,521.30</div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" stroke="#666" />
            <YAxis stroke="#666" />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#4CAF50" 
              strokeWidth={2} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StockChart;