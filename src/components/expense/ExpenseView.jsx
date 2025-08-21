import React from "react";
import { RxCross2 } from "react-icons/rx";
function ExpenseView({ expense }) {
  return (
    <div className="p-3 relative bg-linear-to-r/decreasing from-indigo-500 to-teal-900 text-white rounded-xl m-2">
      <h1 className="text-2xl font-bold">Title : {expense.title}</h1>
      <p>Expense :- {expense.description}</p>
      <p>Date :- {expense.expDate}</p>
      <p className="font-extrabold ml-56 text-2xl text-blue-950">Category :- {expense.category}</p>
      <button className="absolute top-4 right-4 p-3 hover:bg-blue-400 hover:text-black text-black rounded-full cursor-pointer transition-all duration-100">
        <RxCross2 />
      </button>
    </div>
  );
}

export default ExpenseView;
