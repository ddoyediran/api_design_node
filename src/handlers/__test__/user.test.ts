import * as user from "../user";
import supertest from "supertest";

describe("user handler", () => {
  it("should create a user", async () => {
    const req = { body: { username: "sam", password: "agent" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };

    await user.createNewUser(req, res, () => {});
  });
});
