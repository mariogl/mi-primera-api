const { notFoundError } = require(".");

describe("Given a notFoundError function", () => {
  describe("When it receives a response", () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };

    test("Then it should call the response's method status with 404", () => {
      const expectedStatus = 404;

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response's method json with a message object with 'Endpoint not found'", () => {
      const expectedJsonResponse = {
        msg: "Endpoint not found",
      };

      notFoundError(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedJsonResponse);
    });
  });
});
