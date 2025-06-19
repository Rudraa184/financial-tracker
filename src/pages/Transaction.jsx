import React from "react";
import TransactionForm from '../components/ui/TransactionForm'
import TransactionList from '../components/ui/TransactionList'

const Transaction = (transactions, addTransaction, editTransaction, deleteTransaction) => {
  return (
    <div>Transactions
        <TransactionForm addTransaction={addTransaction}/>
        <TransactionList transactions={transactions} editTransaction={editTransaction} deleteTransaction/>
    </div>
  )
}

export default Transaction