/** @format */
import { Addtransactioncontext } from '../context/context';
import { useContext } from 'react';
import '../style/Balance.css';
export default function Balance() {
  const {income,expense}=useContext(Addtransactioncontext)
  return (
    <>
      <h4>your balance</h4>
      <h1>${income-expense}</h1>
    </>
  );
}
