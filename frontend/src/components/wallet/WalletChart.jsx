import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', value: 1000 },
  { date: 'Feb', value: 2000 },
  { date: 'Mar', value: 1500 },
  { date: 'Apr', value: 3000 },
  { date: 'May', value: 2500 },
  { date: 'Jun', value: 4000 },
];

const timeFilters = ['1W', '1M', '6M', '1Y', 'ALL'];

function WalletChart() {
  return (
    <div className="bg-dark-light p-6 rounded-xl">
      <div className="h-[300px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#666" />
            <YAxis stroke="#666" />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full bg-dark text-gray-400 hover:text-white"
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
            Deposit
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletChart;