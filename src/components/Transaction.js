import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function Transaction(props){
	const { deleteTransaction} = useContext(GlobalContext);
	return (
		<li className={props.transaction.amount < 0 ? 'minus':'plus'}>
          {props.transaction.text} 
          <span>{props.transaction.amount < 0 ? '-':'+'}
          ${Math.abs(props.transaction.amount)}
          </span>
	          <button className="delete-btn" 
	          onClick={()=>deleteTransaction(props.transaction.id)}
	          >x
	          </button>
        </li>
	)
}

export default Transaction;