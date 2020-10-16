'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const path = require(`path`);
const {
  nanoid
} = require(`nanoid`);
const {
  getRandomInt,
  shuffle,
  getPictureFileName
} = require(`../utils`);

const {
  ExitCode,
  MAX_ID_LENGTH,
  MAX_COMMENTS
} = require(`../constants`);

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;

const FILE_SENTENCES_PATH = path.resolve(__dirname, `../../../data/sentences.txt`);
const FILE_TITLES_PATH = path.resolve(__dirname, `../../../data/titles.txt`);
const FILE_CATEGORIES_PATH = path.resolve(__dirname, `../../../data/categories.txt`);
const FILE_COMMENTS_PATH = path.resolve(__dirname, `../../../data/comments.txt`);
const OfferType = {
  offer: `offer`,
  sale: `sale`
};

const SumRestrict = {
  min: 1000,
  max: 100000
};

const PictureRestrict = {
  min: 1,
  max: 16
};

const generateComments = (count, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    text: shuffle(comments)
      .slice(0, getRandomInt(1, 3))
      .join(` `),
  }))
);

const generateOffers = (count, titles, categories, sentences, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    category: shuffle(categories).slice(1, getRandomInt(2, 10)),
    description: shuffle(sentences).slice(1, 5).join(` `),
    picture: getPictureFileName(getRandomInt(PictureRestrict.min, PictureRestrict.max)),
    title: titles[getRandomInt(0, titles.length - 1)],
    type: Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)],
    sum: getRandomInt(SumRestrict.min, SumRestrict.max),
    comments: generateComments(getRandomInt(1, MAX_COMMENTS), comments)
  }))
);

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (e) {
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(count) {
    try {
      if (count > 1000) {
        throw new Error(`Не больше 1000 объявлений`);
      }
      const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
      const sentences = await readContent(FILE_SENTENCES_PATH);
      const titles = await readContent(FILE_TITLES_PATH);
      const categories = await readContent(FILE_CATEGORIES_PATH);
      const comments = await readContent(FILE_COMMENTS_PATH);
      const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences, comments));
      await fs.writeFile(FILE_NAME, content);
      console.log(chalk.green(`Operation success. File created.`));
    } catch (e) {
      console.error(chalk.red(e));
      process.exit(ExitCode.fail);
    }
  }
};
