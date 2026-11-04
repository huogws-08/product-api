const request = require("supertest");

describe("Product API", () => {
  test("GET / should return API running message", async () => {
    const response = await request("http://localhost:3000")
      .get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Product API is running");
  });
});