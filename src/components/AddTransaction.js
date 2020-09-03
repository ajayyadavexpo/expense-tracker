import React,{ useState,useContext } from 'react';
import {GlobalContext } from '../context/GlobalState';

function AddTransaction(){
	const [text,setText] = useState('');
	const [amount,setAmount] = useState('');
	const { addTransaction } = useContext(GlobalContext);

	const onSubmitForm = (e)=>{
		e.preventDefault();

		const transaction={
			id:Math.random(),
			text,
			amount: +amount
		}
		addTransaction(transaction);
		setText('');
		setAmount('');
	}
	return (
		<div>
			<h5>Add new transaction</h5>
		      <form onSubmit={onSubmitForm}>
		      	<div className="row">
		      		<div className="col-sm-6">
		      			<div className="form-group">
				          <label htmlFor="text">Text</label>
				          <input type="text" 
				          	className="form-control"
				          	value={text} 
				          	onChange={(e) => setText(e.target.value)} 
				          	placeholder="Enter text..." />
				        </div>
		      		</div>
		      		<div className="col-sm-6">
		      			<div className="form-group">
				          <label htmlFor="amount"
					            >Amount
					            (negative - expense, positive - income)</label
					          >
				          <input type="number"
				          		className="form-control"
					          	value={amount}
					          	onChange={(e)=> setAmount(e.target.value)}
					           placeholder="Enter amount..." />
				        </div>
		        		<button className="btn btn-info float-right">Add transaction</button>
		      		</div>
		      	</div>
		    </form>
	    </div>
	)
}


export default AddTransaction;

