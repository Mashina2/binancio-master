
const fetchP2PData = require("./utils/fetchP2PData.js");

const interview = async () => {
  let totalPrices = [];

  const firstPage = await fetchP2PData(1,"MMK","BUY","USDT",[]);
  
  if (firstPage && firstPage.success) {
    const totalPages = Math.ceil(firstPage.total / 20);
    const pagesToRun = new Array(totalPages - 1).fill(null);
    const totalElements = await pagesToRun.reduce(async (prev, _, idx) => {
      const accData = await prev;
      const pageResult = await fetchP2PData(2,"MMK","BUY","USDT",[]);
      if (pageResult && pageResult.success) {
        return [...accData, ...pageResult.data];
      }
      return accData;
    }, Promise.resolve(firstPage.data));
    totalElements.map((obj) => {
      totalPrices.push(parseFloat(obj.adv.price));
    });
  }
  return totalPrices;
};

module.exports = interview;
