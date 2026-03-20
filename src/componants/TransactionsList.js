/** @format */
import { useContext, useState } from 'react';
import { Addtransactioncontext } from '../context/context';
export default function TransactionsList() {
  const { list, setlist, income, Setincome, expense, setexpense } = useContext(
    Addtransactioncontext,
  );
  const [removingIndex, setRemovingIndex] = useState(null);
  function Delete(index) {
    setRemovingIndex(index);
    const removingprice = JSON.parse(localStorage.getItem('list'));
    if (Number(removingprice[index].price) < 0) {
      setexpense(expense + Number(removingprice[index].price));
    } else {
      Setincome(income - Number(removingprice[index].price));
    }
    setTimeout(() => {
      const updatedList = list.filter((_, i) => i !== index);
      setlist(updatedList);
      localStorage.setItem('list', JSON.stringify(updatedList));
      setRemovingIndex(null);
    }, 400);
  }
  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {list.map((item, index) => {
          const testprice = item.price > 0;
          return (
            <li
              key={index}
              className={`${testprice ? 'plus' : 'minus'} ${removingIndex === index ? 'removing' : ''}`}>
              {item.name}{' '}
              <span>{testprice ? '+$' + item.price : '-$' + item.price}</span>
              <button
                className='delete-btn'
                onClick={() => {
                  Delete(index);
                }}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
