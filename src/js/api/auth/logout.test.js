import { logout } from "./logout";

const mockStorage = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      store[key] = null;
    },
    clear() {
      store = {};
    },
  };
})();


Object.defineProperty(global, "localStorage", { value: mockStorage });

describe("logout function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("removes token from browser storage", () => {
    localStorage.setItem("token", "mockToken");

    logout();

    const token = localStorage.getItem("token");
    expect(token).toBeNull();
  });
});