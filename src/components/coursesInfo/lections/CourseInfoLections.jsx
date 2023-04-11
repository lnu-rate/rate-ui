/** @format */

import LectionDialog from "../../dialogs/LectionDialog";

export const CourseInfoLections = [
	{
		id: 1,
		name: "Лекція 1",
		opensDialog: true,
		getDialog: (props) => <LectionDialog {...props} />,
	},
	{
		id: 2,
		name: "Лекція 2",
	},
	{
		id: 3,
		name: "Лекція 3",
	},
	{
		id: 3,
		name: "Лекція 4",
	},
	{
		id: 3,
		name: "Лекція 5",
	},
];
