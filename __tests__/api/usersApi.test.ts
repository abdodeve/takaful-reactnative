// import usersApi from "./../../src/Api/usersApi";

function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// it("User fetched", async () => {
//   expect.assertions(1);
//   const data = await usersApi.fetchUser(4).then();
//   expect(data.id).toEqual(1);
// });
