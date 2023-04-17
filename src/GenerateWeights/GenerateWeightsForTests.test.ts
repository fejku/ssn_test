import GenerateWeightsForTests from "./GenerateWeightsForTests";

describe("GenerateWeightsForTests", () => {
  test("should generate 2 items", async () => {
    const generator = new GenerateWeightsForTests();
    const result = generator.execute(2);
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual(0.2);
    expect(result[1]).toEqual(0.4);
  });
});
