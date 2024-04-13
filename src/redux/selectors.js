export const selectItems = (state) => state.items;
export const selectItem = (id) => (state) =>
  state.items.find((item) => item.id === id);
export const selectSelectedItem = (state) =>
  state.items.find((item) => item.id === state.selectedItemId);
export const selectSelectedItemId = (state) => state.selectedItemId;
export const selectHoveredItemId = (state) => state.hoveredItemId;
