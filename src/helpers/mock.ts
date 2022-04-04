import faker from "@faker-js/faker"

const mockQuestion = () => {
  const correct_answer = faker.random.arrayElement(['True', 'False']);

  return {
    question: faker.lorem.sentence(),
    correct_answer: correct_answer,
    incorrect_answers: [correct_answer === 'True' ? 'False' : 'True'],
    category: faker.lorem.word(),
  };
};

const mockAnswer = () => {
  return faker.random.arrayElement([true, false])
}

export { mockQuestion, mockAnswer };
