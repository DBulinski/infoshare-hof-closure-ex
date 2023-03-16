import { forEach } from "../exercise4";

it("should call callback on each element of array", () => {
  const callback = jest.fn();
  const arr = [1, 2, 3, 4];
  forEach(arr, callback);
  expect(callback).toHaveBeenCalledTimes(4);
  arr.forEach((item) => {
    expect(callback).toBeCalledWith(item);
  });
});
