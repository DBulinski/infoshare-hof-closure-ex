import { getResult } from "../exercise1";

it("should call a callback with result", () => {
  const callback = jest.fn();
  getResult(callback);
  expect(callback).toHaveBeenCalledWith(30);
});
