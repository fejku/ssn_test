import ActivationFunctionLinear from "../ActivationFunction/ActivationFunctionLinear";
import GenerateWeightsForTests from "../GenerateWeights/GenerateWeightsForTests";
import Perceptron from "./Perceptron";

describe("Perceptron", () => {
  test("should return output 1.6 for inputs [2, 3] and weights [0.2, 0.4]", async () => {
    const perceptron = new Perceptron(
      2,
      new GenerateWeightsForTests(),
      new ActivationFunctionLinear()
    );
    perceptron.setInputs([2, 3]);
    const output = perceptron.getOutput();
    expect(output).toEqual(1.6);
  });
});
