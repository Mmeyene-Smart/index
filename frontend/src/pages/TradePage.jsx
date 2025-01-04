import { useState } from 'react';
import TradeForm from '../components/trade/TradeForm';
import CandlestickChart from '../components/trade/CandlestickChart';

function TradePage() {
  const [selectedPair, setSelectedPair] = useState('BTC/USD');
  const [timeframe, setTimeframe] = useState('4H');

  const timeframes = [
    { label: '1m', value: '1m' },
    { label: '5m', value: '5m' },
    { label: '30m', value: '30m' },
    { label: '1H', value: '1H' },
    { label: '4H', value: '4H' },
    { label: '1D', value: '1D' },
    { label: '1W', value: '1W' },
  ];

  const pairs = [
    { label: 'BTC/USD', value: 'BTC/USD' },
    { label: 'ETH/USD', value: 'ETH/USD' },
    { label: 'CAIZ/USD', value: 'CAIZ/USD' },
  ];

  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-dark-light rounded-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="flex items-center gap-4">
              <select 
                value={selectedPair}
                onChange={(e) => setSelectedPair(e.target.value)}
                className="bg-dark text-white px-4 py-2 rounded-lg"
              >
                {pairs.map((pair) => (
                  <option key={pair.value} value={pair.value}>
                    {pair.label}
                  </option>
                ))}
              </select>
              <div className="text-2xl font-bold text-green-500">$45,123.45</div>
            </div>
            <div className="flex gap-2">
              {timeframes.map((tf) => (
                <button
                  key={tf.value}
                  onClick={() => setTimeframe(tf.value)}
                  className={`px-4 py-2 rounded-lg ${
                    timeframe === tf.value ? 'bg-green-600 text-white' : 'bg-dark text-gray-400 hover:text-white'
                  }`}
                >
                  {tf.label}
                </button>
              ))}
            </div>
          </div>
          
          <CandlestickChart symbol={selectedPair} />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">
            <div className="bg-dark p-4 rounded-lg">
              <div className="text-gray-400 mb-1">Open</div>
              <div className="font-medium">$48,234.12</div>
            </div>
            <div className="bg-dark p-4 rounded-lg">
              <div className="text-gray-400 mb-1">High</div>
              <div className="font-medium text-green-500">$48,546.21</div>
            </div>
            <div className="bg-dark p-4 rounded-lg">
              <div className="text-gray-400 mb-1">Low</div>
              <div className="font-medium text-red-500">$47,982.45</div>
            </div>
            <div className="bg-dark p-4 rounded-lg">
              <div className="text-gray-400 mb-1">Volume</div>
              <div className="font-medium">1,234.56 BTC</div>
            </div>
          </div>
        </div>
        
        <div className="bg-dark-light rounded-xl p-6">
          <TradeForm 
            asset={{ 
              name: selectedPair.split('/')[0],
              symbol: selectedPair.split('/')[0],
              price: '$45,123.45'
            }} 
          />
        </div>
      </div>
    </div>
  );
}

export default TradePage;