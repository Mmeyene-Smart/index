export function generateInitialData(length = 100) {
    return Array.from({ length }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - length + i);
      
      const basePrice = 45000;
      const volatility = basePrice * 0.02;
      
      const open = basePrice + (Math.random() - 0.5) * volatility;
      const close = basePrice + (Math.random() - 0.5) * volatility;
      const high = Math.max(open, close) + Math.random() * volatility * 0.5;
      const low = Math.min(open, close) - Math.random() * volatility * 0.5;
  
      return {
        time: formatDateToUTC(date),
        open,
        high,
        low,
        close,
      };
    });
  }
  
  export function generateNextCandle(lastCandle) {
    const basePrice = lastCandle.close;
    const volatility = basePrice * 0.001;
    
    const newClose = basePrice + (Math.random() - 0.5) * volatility * 2;
    const newHigh = Math.max(basePrice, newClose) + Math.random() * volatility;
    const newLow = Math.min(basePrice, newClose) - Math.random() * volatility;
  
    const nextTime = new Date(lastCandle.time);
    nextTime.setMinutes(nextTime.getMinutes() + 1);
  
    return {
      time: formatDateToUTC(nextTime),
      open: basePrice,
      high: newHigh,
      low: newLow,
      close: newClose,
    };
  }
  
  function formatDateToUTC(date) {
    return date.toISOString().split('T')[0];
  }