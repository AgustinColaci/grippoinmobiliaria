import { create } from "zustand";

const useStore = create((set) => ({
  steps: 1,
  addStep: () => set((state) => ({ steps: state.steps + 1 })),
  substractStep: () => set((state) => ({steps: state.steps - 1}))
  // resetCount: () => set({ count: 0 }),
}));

export default useStore;