export const messagessSelector = (roomId) => (state) =>
  state.messages.messages[roomId] ?state.messages.messages[roomId] :[];