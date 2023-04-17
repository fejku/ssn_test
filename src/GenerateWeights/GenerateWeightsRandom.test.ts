import GenerateWeightsRandom from "./GenerateWeightsRandom";

describe("GenerateWeightsRandom", () => {
  test("should generate 2 items", async () => {
    const generator = new GenerateWeightsRandom();
    const result = generator.execute(2);
    expect(result.length).toEqual(2);
  });

  test("should generate empty array", async () => {
    const generator = new GenerateWeightsRandom();
    const result = generator.execute(0);
    expect(result.length).toEqual(0);
  });

  test("should generate empty array when pass negative argument", async () => {
    const generator = new GenerateWeightsRandom();
    const result = generator.execute(-5);
    expect(result.length).toEqual(0);
  });
});
