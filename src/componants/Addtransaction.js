/** @format */

import { useContext, useState } from 'react';
import { Addtransactioncontext } from '../context/context';
/** @format */
export default function Addtransaction() {
  const [amout, Setamount] = useState(0);
  const [text, Settext] = useState('');
  const { income, Setincome, expense, setexpense ,setlist} = useContext(
    Addtransactioncontext,
  );
  function Add(e) {
    if (text.length !== 0 && Number(amout) !== 0) {
      e.preventDefault();
      console.log(e);
      if (Number(amout) < 0) setexpense(expense - +amout);
      else Setincome(income + +amout);
      setlist(prev=>[...prev, {name:text,price:amout}])
    } else {
      e.preventDefault();
      alert('errur text no valid or amount no valid');
    }
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            placeholder='Enter text...'
            value={text}
            onChange={(e) => Settext(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            placeholder='Enter amount...'
            value={amout}
            onChange={(e) => Setamount(e.target.value)}
          />
        </div>
        <button
          className='btn'
          onClick={(e) => {
            Add(e);
          }}>
          Add transaction
        </button>
      </form>
    </>
  );
}
