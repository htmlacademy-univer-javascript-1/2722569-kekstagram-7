import { getRandomInteger, getRandomArrayElement } from './util.js';

const DESCRIPTIONS = [
  'Отличный день для прогулки!',
  'Незабываемые моменты лета.',
  'Красота в простых вещах.',
  'Путешествие, которое запомнится надолго.',
  'Немного хорошего настроения.',
  'Мой любимый момент этого дня.',
  'Природа никогда не перестаёт удивлять.',
  'Прекрасный вечер в хорошей компании.',
  'Новые впечатления и эмоции.',
  'Маленькие радости большого дня.'
];

const NAMES = [
  'Артём',
  'Александр',
  'Максим',
  'Дмитрий',
  'Анастасия',
  'Мария',
  'Екатерина',
  'Ольга',
  'Иван',
  'Андрей',
  'Елена',
  'Дарья'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

// Генерация уникального идентификатора комментария
let commentId = 0;

// Создание одного комментария
const createComment = () => ({
  id: ++commentId,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: Array.from(
    { length: getRandomInteger(1, 2) },
    () => getRandomArrayElement(MESSAGES)
  ).join(' '),
  name: getRandomArrayElement(NAMES)
});

// Создание комментариев для фотографии
const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);

  return Array.from({ length: commentsCount }, createComment);
};

// Создание одной фотографии
const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

// Создание массива из 25 фотографий
const createPhotos = () =>
  Array.from({ length: 25 }, (_, index) =>
    createPhoto(index + 1)
  );

export { createPhotos };
