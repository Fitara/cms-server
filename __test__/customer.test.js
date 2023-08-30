const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { insertData } = require("../__seeds__/bulkInsert");
const cleanUp = require("../__seeds__/cleanUp");
const request = require("supertest");
const models = require("../models");
const app = require("../app");

beforeAll(async function () {
  await insertData();
});

afterAll(async function () {
  await cleanUp();
  models.sequelize.close();
});

describe("POST /register", function () {
  it("should send a respone 201 status code and data type is object", async function () {
    const res = await request(app).post("/pub/register").send({
      username: "fitra",
      email: "fitra@mail.com",
      password: "12345",
    });

    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("username");
    expect(res.body).toHaveProperty("email");
    expect(typeof res.body).toEqual("object");
    expect(typeof res.body.id).toEqual("number");
    expect(typeof res.body.username).toEqual("string");
    expect(typeof res.body.email).toEqual("string");
  });

  it("should send a response 400 status code and data type is object", async function () {
    const res = await request(app).post("/pub/register").send({
      username: "fitra",
      email: "",
      password: "12345",
    });

    expect(res.status).toEqual(400);
    expect(typeof res.body).toEqual("object");
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Email is required");
  });

  it("should send a response with 400 status code and the data type is object", async function () {
    const res = await request(app).post("/pub/register").send({
      username: "fitra",
      email: "fitra@mail.com",
      password: "",
    });

    expect(res.status).toEqual(400);
    expect(typeof res.body).toEqual("object");
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Password is required");
  });

  it("should send a res with 400 status code and the data type is object", async function () {
    const res = await request(app).post("/pub/register").send({
      username: "fitra",
      email: "customer@mail.com",
      password: "12345",
    });

    expect(res.status).toEqual(400);
    expect(typeof res.body).toEqual("object");
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Email must be unique");
  });

  it("should send a res with 400 status code and the data type is object", async function () {
    const res = await request(app).post("/pub/register").send({
      username: "fitra",
      email: "customer.com",
      password: "12345",
    });

    expect(res.status).toEqual(400);
    expect(typeof res.body).toEqual("object");
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Invalid email format");
  });
});

describe("POST /login", function () {
  it("should send a response with 200 status code and the data type is object", async function () {
    const res = await request(app).post("/pub/login").send({
      email: "customer@mail.com",
      password: "12345",
    });

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("access_token");
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("role");
    expect(typeof res.body).toEqual("object");
    expect(typeof res.body.access_token).toEqual("string");
    expect(typeof res.body.id).toEqual("number");
    expect(typeof res.body.name).toEqual("string");
    expect(typeof res.body.role).toEqual("string");
  });

  it("should send a response with 401 status code and the data type is object", async function () {
    const res = await request(app)
      .post("/pub/login")
      .send({ email: "customer@mail.com", password: "1234" });

    expect(res.status).toEqual(401);
    expect(typeof res.body).toEqual("object");
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Invalid email or password");
  });

  it("should send a response with 401 status code and the data type is object", async function () {
    const res = await request(app)
      .post("/pub/login")
      .send({ email: "sisalah@mail.com", password: "" });

    expect(res.status).toEqual(401);
    expect(typeof res.body).toEqual("object");
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual("Invalid email or password");
  });
});

describe("GET /posts", function () {
  it("should send a response with 200 status code and data type is array", async function () {
    const res = await request(app).get("/pub/posts");

    expect(res.status).toEqual(200);
    expect(typeof res.body).toEqual("object");

    expect(res.body).toHaveProperty("page");
    expect(res.body).toHaveProperty("posts");
    expect(Array.isArray(res.body.posts)).toEqual(true);
  });
});
