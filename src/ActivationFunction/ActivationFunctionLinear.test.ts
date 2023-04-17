import ActivationFunctionLinear from "./ActivationFunctionLinear";

describe("ActivationFunctionStep", () => {
  test("should return same number as input", async () => {
    const activationFunction = new ActivationFunctionLinear();
    const result = activationFunction.execute(5);
    expect(result).toEqual(5);
  });
});
