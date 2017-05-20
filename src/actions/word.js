export const types = {
  RESET: "WORD_RESET",
}

export const actions = {
  reset() {
    return {
      type: types.RESET,
    }
  }
}
