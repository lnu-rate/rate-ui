/** @format */
import avatar from '../../assets/images/user/avatar.png';
import test from '../../assets/images/user/test.jpg';

// TODO: Remove dummy component
export const Comments = [
  {
    id: 1,
    text: '«Нова українська школа» характеризує спільне викладання як ретельно сплановану роботу з асистентом вчителя, яка забезпечить не лише кращу якість викладання а й сприятиме професійному розвитку педагога. Діяльність асистента вчителя розглядає у площині командної взаємодії, наголошуючи на тому, що ефективність організації інклюзивного навчання значною мірою буде залежати від ступеню взаємодії асистента вчителя з вчителем класу та правильного розподілу обов’язків у межах їхньої компетенції.Спільне викладання – це така організація навчання у класі, коли спеціалісти (учитель та спеціальний педагог чи асистент учителя) разом здійснюють викладання в єдиному фізичному просторі (класі), у різноманітній за складом групі учнів, серед яких є діти з особливими освітніми потребами. Цей спосіб викладання використовується як для задоволення потреб окремих учнів, так і для покращення ефективності викладання в цілому для всіх школярів.',
    quality: 8,
    methodologicalSupport: 7,
    objectivity: 3,
    owner: {
      id: 1,
      name: 'Софія Тимечко',
      username: 'sofiiatymechko',
      src: avatar,
    },
  },
  {
    id: 2,
    text: '«Нова українська школа» наголошує на тому, що кожна школа за своєю філософією повинна бути інклюзивною. Це означає готовність у будь-який час прийняти кожну дитину, прагнучи створити максимально сприятливе середовище для розвитку її потенціалу.',
    quality: 0,
    methodologicalSupport: 7,
    objectivity: 0,
    owner: {
      id: 2,
      name: 'Вадим Ляшок',
      username: 'vadymliashok',
      src: test,
    },
  },
  {
    id: 3,
    text: 'Концепція інклюзивної освіти відображає одну з головних демократичних ідей – всі діти є цінними і активними членами суспільства. Навчання в інклюзивних освітніх закладах є корисним як для дітей з особливими освітніми потребами, так і для інших дітей, членів родин та суспільства в цілому. Інклюзія (від англ. іnclusion – включення) – одна з найбільш гуманістичних ідей сьогодення, водночас вона є найскладнішою для вирішення проблемою, з якою стикаються системи освіти в усьому світі, адже вона, вимагає від усіх учасників освітнього процесу суттєвого перегляду традиційних поглядів щодо мети, функцій, організації роботи закладу нового типу.',
    quality: 1,
    methodologicalSupport: 1,
    objectivity: 1,
    owner: {
      id: 3,
      name: 'Ярослав Васьків',
      username: 'yaroslavvaskiv',
      src: '',
    },
  },
];

export default Comments;
