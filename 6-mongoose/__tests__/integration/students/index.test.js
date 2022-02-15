const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../src/app');
const Student = require('../../../src/models/student');
// const { generateToken } = require('../../../src/utils/jwt');

// axios, fetch
const request = supertest(app);

// browser => window

describe('/students', () => {
  // hooks => life cycle methods => middleware
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('Create', () => {
    beforeEach(async () => {
      await Student.deleteMany({});
    });
    it('should save the student if request is valid', async () => {
      const body = {
        firstName: 'xxx',
        lastName: 'yyy',
        email: 'xxx@example.com',
      };
      // const token = generateToken({});
      const response = await request.post('/v1/students').send(body);
      expect(response.statusCode).toBe(201);
      const student = await Student.findOne(body).exec();
      expect(student).toBeTruthy();
      // Student.findById(response.body._id);
      // check response contains student id
      // check response format
      /**
       * {
       *    data: {}
       * }
       */
    });

    // map
    // firstName  | lastName | email
    // value | value | value
    it.each`
      field          | value
      ${'firstName'} | ${undefined}
      ${'firstName'} | ${'a'}
      ${'lastName'}  | ${'123456789123'}
      ${'email'}     | ${'a'}
    `('should return 400 when $field is $value', async ({ field, value }) => {
      const body = {
        firstName: 'xxx',
        lastName: 'yyy',
        email: 'xxx@example.com',
      };
      const invalidBody = { ...body, [field]: value };
      const res = await request.post('/v1/students').send(invalidBody);
      expect(res.statusCode).toBe(400);
    });
  });
});
