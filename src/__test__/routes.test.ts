import app from "../server";
import supertest from "supertest";

describe("test router handler", () => {
  it("should return hello", async () => {
    const res = await supertest(app).get("/");

    expect(res.body.message).toBe("hello");
  });
});
