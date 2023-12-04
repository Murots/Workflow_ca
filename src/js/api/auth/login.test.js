import { login } from "./login";

const TEST_EMAIL = "test@example.com";
const TEST_PASSWORD = "password";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({ accessToken: "mockToken" }),
});

global.fetch = mockFetchSuccess;

const mockStorage = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(global, "localStorage", { value: mockStorage });

describe("login/save functions", () => {
  it("fetches and save token by localStorage ", async () => {
    await login(TEST_EMAIL, TEST_PASSWORD);
    
    const token = JSON.parse(localStorage.getItem("token"));
    expect(token).toEqual("mockToken"); 
  });
});