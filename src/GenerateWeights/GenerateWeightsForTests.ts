import GenerateWeightsStrategy from "./GenerateWeightsStrategy";

export default class GenerateWeightsForTests
  implements GenerateWeightsStrategy
{
  execute(size: number): number[] {
    return [0.2, 0.4];
  }
}
