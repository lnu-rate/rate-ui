import avatar from '../../assets/images/user/avatar.png';

// TODO: Remove dummy data
const USERS = [
  {
    id: '1',
    login: '310009',
    password: '123456789',
    fullName: 'ТИМЕЧКО Софія',
    faculty: "Факультет електроніки та комп'ютерних технологій",
    email: 'tymechko.sofiia@lnu.edu.ua',
    role: 'student',
    course: 3,
    group: 34,
    image: avatar,
    stream: 'ФеІ',
    subjects: [],
  },
  {
    id: '2',
    login: 'ivan.h@lnu.edu.ua',
    password: '123456789',
    fullName: 'ХВИЩУН Іван',
    faculty: "Факультет електроніки та комп'ютерних технологій",
    email: 'ivan.h@lnu.edu.ua',
    role: 'lecturer',
    course: 3,
    image: null,
    degree: 'Доцент',
    department: 'Кафедра радіофізики і компютерних технологій',
    statistics: [],
    subjects: [],
  },
  {
    id: '2',
    login: 'admin',
    password: '123456789',
    role: 'admin',
    subjects: [],
  },
];

export const getUser = (userId) => {
  return USERS.find((user) => user.id === userId);
};
