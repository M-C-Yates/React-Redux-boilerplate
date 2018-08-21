

const getExpensesTotal = (arr = [{amount: 0}]) => {
  if(arr.length === 0) {
    return 0;
  } else {
    const total = arr.reduce((total, obj) => total + obj.amount, 0);
    return total;
  }
};

export default getExpensesTotal;