/** @format */

export const LoginService = (data) => {
  if (data.login === '310009' && data.password === '123456789') {
    return {
      role: 'student',
      name: 'ТИМЕЧКО Софія',
      id: '1',
    };
  }
  if (data.login === 'ivan.h@lnu.edu.ua' && data.password === '123456789') {
    return {
      role: 'lecturer',
      name: 'ХВИЩУН Іван',
      id: '2',
    };
  }
  if (data.login === 'admin' && data.password === '123456789') {
    return {
      role: 'admin',
      name: 'АДМІНІСТРАТОР',
      id: '9',
    };
  }
};
