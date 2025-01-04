import { useState } from 'react';
import StockChart from '../components/StockChart';
import AssetList from '../components/AssetList';

function MarketPage() {
  const [chartData] = useState([
    { time: '12:33', value: 4000 },
    { time: '14:33', value: 4200 },
    { time: '16:33', value: 4100 },
    { time: '18:33', value: 4400 },
    { time: '20:33', value: 4300 },
    { time: '22:33', value: 4500 },
  ]);

  return (
    <div className="space-y-6">
      <StockChart data={chartData} />
      <AssetList />
    </div>
  );
}
export default MarketPage;