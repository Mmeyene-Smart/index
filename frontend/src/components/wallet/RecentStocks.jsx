const stocks = [
    { name: 'SPOT', company: 'Spotify', price: '$310.40', change: '-1.10%', icon: '🎵' },
    { name: 'ABNB', company: 'Airbnb', price: '$152.72', change: '-10.29%', icon: '🏠' },
    { name: 'SHOP', company: 'Shopify', price: '$28.57', change: '-6.48%', icon: '🛍️' },
    { name: 'SONY', company: 'Playstation', price: '$71.86', change: '+0.98%', icon: '🎮' },
    { name: 'DBX', company: 'Dropbox Inc', price: '$20.44', change: '-3.08%', icon: '📦' },
    { name: 'PYPL', company: 'Paypal', price: '$87.66', change: '-3.86%', icon: '💳' }
  ];
  
  function RecentStocks() {
    return (
      <div className="bg-dark-light p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Recent Stocks</h2>
        <div className="space-y-4">
          {stocks.map((stock) => (
            <div key={stock.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark rounded-lg flex items-center justify-center">
                  {stock.icon}
                </div>
                <div>
                  <div className="font-medium sm:font-[12px]">{stock.name}</div>
                  <div className="text-sm text-gray-400">{stock.company}</div>
                </div>
              </div>
              <div className="text-right">
                <div>{stock.price}</div>
                <div className={stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 py-2 bg-dark hover:bg-gray-800 rounded-lg">
          View All
        </button>
      </div>
    );
  }
  
  export default RecentStocks;