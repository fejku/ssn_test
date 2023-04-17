export default interface GenerateWeightsStrategy {
  execute(size: number): number[];
}
