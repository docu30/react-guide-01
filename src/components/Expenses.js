import ExpenceItem from './ExpenceItem';

import './Expenses.css';

function Expenses(props) {
	// const expenses = [
	// 	{
	// 		id: 'e1',
	// 		title: 'Toilet Paper',
	// 		amount: 94.12,
	// 		date: new Date(2020, 7, 14),
	// 	},
	// 	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	// 	{
	// 		id: 'e3',
	// 		title: 'Car Insurance',
	// 		amount: 294.67,
	// 		date: new Date(2021, 2, 28),
	// 	},
	// 	{
	// 		id: 'e4',
	// 		title: 'New Desk (Wooden)',
	// 		amount: 450,
	// 		date: new Date(2021, 5, 12),
	// 	},
	// 	{
	// 		id: 'e5',
	// 		title: 'Car insurance',
	// 		amount: 294.67,
	// 		date: new Date(2021, 2, 28),
	// 	},
	// 	{
	// 		id: 'e6',
	// 		title: 'Boat insurance',
	// 		amount: 554.88,
	// 		date: new Date(2021, 3, 28),
	// 	},
	// 	{
	// 		id: 'e7',
	// 		title: 'House insurance',
	// 		amount: 864.25,
	// 		date: new Date(2021, 3, 15),
	// 	},
	// 	{
	// 		id: 'e8',
	// 		title: 'Life insurance',
	// 		amount: 450.48,
	// 		date: new Date(2021, 4, 18),
	// 	},
	// ];
	const expenses = props.items;
	return (
		<div className="expenses">
			{expenses.map((item, index) => (
				<ExpenceItem
					title={item.title}
					amount={item.amount}
					date={item.date}
				></ExpenceItem>
			))}
		</div>
	);
}

export default Expenses;
