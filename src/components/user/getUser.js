const USERS = [
  {
    id: '1',
    login: '123',
    password: '2132r830odUOASd',
    fullName: 'ЛЯШОК Вадим Олександрович',
    faculty: "Факультет електроніки та комп'ютерних технологій",
    email: 'vadym.liashol@lnu.edu.ua',
    role: 'student',
    course: 3,
    group: 34,
    stream: 'ФеІ',
    subjects: [],
  },
  {
    id: '2',
    login: '123',
    password: '2132r830odUOASd',
    fullName: 'ХВИЩУН Іван Олександрович',
    faculty: "Факультет електроніки та комп'ютерних технологій",
    email: 'ivan.khvvyshchun@lnu.edu.ua',
    role: 'lecturer',
    course: 3,
    degree: 'Доцент',
    department: 'Кафедра радіофізики і компютерних технологій',
    statistics: [],
  },
];

export const getUser = (userId) => {
  return USERS.find((user) => user.id === userId);
};
