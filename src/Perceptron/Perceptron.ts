import ActivationFunctionStep from "../ActivationFunction/ActivationFunctionStep";
import ActivationFunctionStrategy from "../ActivationFunction/ActivationFunctionStrategy";
import GenerateWeightsRandom from "../GenerateWeights/GenerateWeightsRandom";
import GenerateWeightsStrategy from "../GenerateWeights/GenerateWeightsStrategy";

export default class Perceptron {
  private size: number;
  private bias = 0;
  private generateWeightsStrategy: GenerateWeightsStrategy;
  private weights: number[];
  private inputs: number[] = [];
  private activationFunction: ActivationFunctionStrategy;
  private output: number = 0;

  constructor(
    size: number,
    generateWeightsStrategy: GenerateWeightsStrategy,
    activationFunction: ActivationFunctionStrategy
  ) {
    this.size = size;
    this.generateWeightsStrategy =
      generateWeightsStrategy ?? new GenerateWeightsRandom();
    this.weights = this.generateWeightsStrategy.execute(size);
    this.activationFunction =
      activationFunction ?? new ActivationFunctionStep();
  }

  setInputs(inputs: number[]) {
    this.inputs = inputs;
  }

  private getSum() {
    let result = this.bias;
    for (let i = 0; i < this.size; i++) {
      result += this.weights[i] * this.inputs[i];
    }
    return result;
  }

  getOutput() {
    const sum = this.getSum();
    this.output = this.activationFunction.execute(sum);
    return this.output;
  }
}
