/** @format */

import { useContext} from 'react';
import { Addtransactioncontext } from '../context/context';
export default function IncomeExpense() {
  const { income, expense } = useContext(
    Addtransactioncontext,
  );

  return (
    <>
      <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p id='money-plus' className='money plus'>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id='money-minus' className='money minus'>
            -${expense}
          </p>
        </div>
      </div>
    </>
  );
}
