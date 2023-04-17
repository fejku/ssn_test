import GenerateWeightsStrategy from "./GenerateWeightsStrategy";

export default class GenerateWeightsRandom implements GenerateWeightsStrategy {
  execute(size: number): number[] {
    const result = [];
    for (let i = 0; i < size; i++) {
      result.push(Math.random());
    }
    return result;
  }
}
