import ActivationFunctionStrategy from "./ActivationFunctionStrategy";

export default class ActivationFunctionStep
  implements ActivationFunctionStrategy
{
  execute(sum: number): number {
    return sum < 0 ? 0 : 1;
  }
}
