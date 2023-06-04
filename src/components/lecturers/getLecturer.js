// TODO: Remove dummy data
const LECTURERS_LIST = [
  {
    id: '1',
    fullName: 'КУШНІР Олег Степанович',
    degree: 'завідувач',
    email: 'oleh.kushnir@lnu.edu.ua',
  },
  {
    id: '2',
    fullName: 'КРУПИЧ Олег Миколайович',
    degree: 'професор',
    email: 'oleh.krupych@lnu.edu.ua',
  },
  {
    id: '3',
    fullName: 'ПАНОЧКО Галина Іванівна',
    degree: 'доцент',
    email: 'galyna.panochko@lnu.edu.ua',
  },
  {
    id: '4',
    fullName: 'ОЛЕНИЧ Ігор Богданович',
    degree: 'завідувач',
    email: 'igor.olenych@lnu.edu.ua',
  },
  {
    id: '5',
    fullName: 'ПАВЛИК Михайло Романович',
    degree: 'асистент',
    email: 'mykhailo.pavlyk@lnu.edu.ua',
  },
  {
    id: '6',
    fullName: 'СІНЬКЕВИЧ Олег Олександрович',
    degree: 'асистент',
    email: 'oleh.sinkevych@lnu.edu.ua',
  },
  {
    id: '7',
    fullName: 'КАРБОВНИК Іван Дмитрович',
    degree: 'завідувач',
    email: 'Ivan.Karbovnyk@lnu.edu.ua',
  },
  {
    id: '8',
    fullName: 'XIO',
    degree: 'доцент',
    email: 'Ivan.Khvyshchun@lnu.edu.ua',
  },
  {
    id: '9',
    fullName: 'ШМИГЕЛЬСЬКИЙ Ярослав Антонович',
    degree: 'асистент',
    email: 'Yaroslav.Shmyhelskyy@lnu.edu.ua',
  },
  {
    id: '10',
    fullName: 'ПАВЛИК Богдан Васильович',
    degree: 'завідувач',
    email: 'bohdan.pavlyk@lnu.edu.ua',
  },
  {
    id: '11',
    fullName: 'ЛУЧЕЧКО Андрій Петрович',
    degree: 'професор',
    email: 'andriy.luchechko@lnu.edu.ua',
  },
  {
    id: '12',
    fullName: 'КУШЛИК Маркіян Олегович',
    degree: 'асистент',
    email: 'markiyan.kushlyk@lnu.edu.ua',
  },
  {
    id: '13',
    fullName: 'ШУВАР Роман Ярославович',
    degree: 'завідувач',
    email: 'roman.shuvar@lnu.edu.ua',
  },
  {
    id: '14',
    fullName: 'КОМАН Богдан Петрович',
    degree: 'професор',
    email: 'koman.bohdan@lnu.edu.ua',
  },
  {
    id: '15',
    fullName: 'ДЕМКІВ Лідія Степанівна',
    degree: 'доцент',
    email: 'lidiya.demkiv@lnu.edu.ua',
  },
];

export const getLecturer = (lecturerId) => {
  return LECTURERS_LIST.find((lecturer) => lecturer.id === lecturerId);
};
