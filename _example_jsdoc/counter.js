/** @typedef {import('../types').User} User */
/** @typedef {import('../types').SetupCounter} SetupCounter */

/** @param { User } user */
function foo(user) {
  return user.age
}

/** @param { SetupCounter } attr */
export function setupCounter({ element }) {
  let counter = 0

  const setCounter = (/** @type {number} */ count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }

  element.addEventListener('click', () => setCounter(counter + 1))

  setCounter(0)
}
