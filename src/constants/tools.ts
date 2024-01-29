import { ToolType } from '@/types/tools';

export const TOOLS_TITLE: Record<ToolType, string> = {
  transliteration: 'Транслитерация текста',
  textCounter: 'Подсчет длины текста и строки',
  htmlRedactor: 'HTML редактор онлайн',
  convertRegister: 'Конвертер регистров',
  deleteDuplicate: 'Удаление дубликатов',
  wordCombiner: 'Комбинатор ключевых слов и фраз',
  lineCounter: 'Посчитать количество строк онлайн',
  faqSchemaGenerator: 'Генератор FAQPage JSON-LD разметки',
  duplicateWordsCounter: 'Поиск повторяющихся слов',
  synonyms: 'Синонимы онлайн',
  openGraphGenerator: 'Open Graph Генератор',
};

export const TOOLS_META: Record<
  ToolType,
  { title: string; description: string }
> = {
  transliteration: {
    title: 'Транслит онлайн - сервис транслитерации с кириллицы в латиницу',
    description:
      'Онлайн сервис транслитерации текста с кириллицы в латиницу. Транслит слов с русского на английский в режиме реального времени по различным правилам перевода и ГОСТам.',
  },
  textCounter: {
    title: 'Подсчет количества символов и слов в тексте онлайн',
    description:
      'Посчитать количество символов в тексте онлайн с пробелами и без онлайн. Бесплатная программа для подсчета длины русских и англиийских слов, цифр, пробелов и прочих символов.',
  },
  htmlRedactor: {
    title: 'HTML Online Editor - редактор текста онлайн',
    description:
      'Визуальный HTML редактор онлайн с возможностью предварительного просмотра. Бесплатный ХТМЛ редактор с широким функционалом и удобным инструментом для создания и редактирования кода прямо в браузере ',
  },
  convertRegister: {
    title: 'Конвертер регистров онлайн - изменить регистр букв текста',
    description:
      'Конвертер в верхний и нижний регистр букв в тексте в пару кликов. Онлайн сервис для изменения регистра шрифта для перевода в прописные, строчные и инверсия регистра.',
  },
  deleteDuplicate: {
    title: 'Удаление дубликатов строк онлайн',
    description:
      'Онлайн инструмент для удаления дубикатов строк из списка, столбца, колонки в один клик. Удалеление дублей может быть полезен для предотвращения повторения содержимого из текста.',
  },
  wordCombiner: {
    title: 'Комбинатор ключевых фраз - онлайн перемножение ключевых слов',
    description:
      'Комбинатор ключевых слов и фраз онлайн для Яндекс Директ и Google AdWords. Простой и бесплатный способ перемножить слова для контекстной рекламы в пару кликов.',
  },
  lineCounter: {
    title: 'Посчитать количество строк онлайн - счетчик строк в тексте',
    description:
      'Инструмент для подсчета строк в тексте онлайн. Воспользуйтесь счетчиком строк для подсчета количества строк в указанном списке или столбце.',
  },
  faqSchemaGenerator: {
    title: 'FAQ Page JSON-LD Генератор',
    description:
      'Воспользуйтесь нашим генератором FAQPage JSON-LD для создания метаданных для страницы FAQ. Бесплатный инструмент разметки для расширенных результатов под Google в пару кликов.',
  },
  duplicateWordsCounter: {
    title: 'Поиск повторяющихся слов онлайн - подсчет одинаковых слов',
    description:
      'Поиск и подсчет повторяющихся слов в тексте для копирайтеров и маркетологов. Воспользуйтесь инструментом, чтобы подсчитать количество одинаковых слов за пару кликов.',
  },
  synonyms: {
    title: 'Словарь синонимов – подбор синонимов русского языка онлайн',
    description:
      'Словарь синонимов русского языка онлайн с поиском и подбором синонимов и сходных по смыслу выражений. Большая база ключевых слов и фраз. Заменяйте слова без потери смысла.',
  },
  openGraphGenerator: {
    title: 'Генератор мета-тегов Open Graph',
    description:
      'Онлайн инструмент для генерации микроразметки Open Graph для соцсетей и мессенджеров: ВКонтакте, Twitter, Pinterest, Одноклассниках, Telegram, Viber.',
  },
};
