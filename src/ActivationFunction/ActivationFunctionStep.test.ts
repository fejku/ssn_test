import ActivationFunctionStep from "./ActivationFunctionStep";

describe("ActivationFunctionStep", () => {
  test("should return 0 for negative input", async () => {
    const activationFunction = new ActivationFunctionStep();
    const result = activationFunction.execute(-5);
    expect(result).toEqual(0);
  });

  test("should return 1 for 0 input", async () => {
    const activationFunction = new ActivationFunctionStep();
    const result = activationFunction.execute(0);
    expect(result).toEqual(1);
  });

  test("should return 1 for positive input", async () => {
    const activationFunction = new ActivationFunctionStep();
    const result = activationFunction.execute(1);
    expect(result).toEqual(1);
  });
});
