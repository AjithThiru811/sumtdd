import sum from './sum';

describe('sum function', () => {
  test('adds 1 + 2 + 3 to equal 6', () => {
    expect(sum("1,2,3")).toBe(6);
  });

  test('adds -1 + 1 ahould throw negative numbers not allowed', () => {
    expect(sum("-1,1")).toBe("negative numbers not allowed");
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(sum("0,0")).toBe(0);
  });
});