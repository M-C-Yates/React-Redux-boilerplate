import getExpensesTotal from '../../selectors/expenses-total';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = getExpensesTotal();
  expect(result).toBe(0);
  
});

test('add up a single expense', () => {
  const expense = [{amount: 50}];
  const result = getExpensesTotal(expense);
  expect(result).toBe(50);
});

test('add up all expenses in a array', () => {
  const result = getExpensesTotal(expenses);
  expect(result).toBe(114195);
});
