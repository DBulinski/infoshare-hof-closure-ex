import { countCalls } from "../exercise3";

jest.spyOn(console, "log");

it("should log count of calls", () => {
  const counter = countCalls();
  counter();
  expect(console.log).toHaveBeenCalledWith(1);
  counter();
  expect(console.log).toHaveBeenCalledWith(2);
  counter();
  expect(console.log).toHaveBeenCalledWith(3);
});
