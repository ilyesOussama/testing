let count = 0;

export const counter = {
  get count() {
    return count;
  },

  increment() {
    count++;
  },

  decrement() {
    count--;
  },

  reset() {
    count = 0;
  },
};
