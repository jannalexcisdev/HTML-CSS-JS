import {formatCurrency} from '../scripts/utils/money.js';

describe('test suite: format currency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');//compares a value to another value
  }); //function that creates a test params are desc, testFunc, test

  it('works with zero', ()=> {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it ('rounds up to the nearest cent', ()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01')
  });

  it ('rounds down to the nearest cent', ()=> {
    expect(formatCurrency(2000.4)).toEqual('20.00')
  });
}) //test suite
