/** @format */
import avatar from "../../assets/images/user/avatar.png";
import test from "../../assets/images/user/test.jpg";

export const Comments = [
	{
		id: 1,
		text: "Швидко пояснює",
		rating: 8,
		owner: {
			id: 1,
			name: "Софія Тимечко",
			username: "sofiiatymechko",
			src: avatar,
		},
	},
	{
		id: 2,
		text: "Погано чути",
		rating: 3,
		owner: {
			id: 2,
			name: "Вадим Ляшок",
			username: "vadymliashok",
			src: test,
		},
	},
	{
		id: 3,
		text: "Незрозуміло пояснює",
		rating: 8,
		owner: {
			id: 3,
			name: "Ярослав Васьків",
			username: "yaroslavvaskiv",
			src: avatar,
		},
	},
];

export default Comments;
