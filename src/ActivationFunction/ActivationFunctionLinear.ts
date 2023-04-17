import ActivationFunctionStrategy from "./ActivationFunctionStrategy";

export default class ActivationFunctionLinear
  implements ActivationFunctionStrategy
{
  execute(sum: number): number {
    return sum;
  }
}
