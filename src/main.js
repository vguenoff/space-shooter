import { Enemy } from './components/Enemy'

export class Game {
  #canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'))
  #millisecondsPreviousFrame = performance.now()

  ctx = /** @type {CanvasRenderingContext2D} */ (this.#canvas.getContext('2d'))

  enemy1 = new Enemy(this.ctx)

  constructor() {}

  run() {
    this.#resize()
    window.addEventListener('resize', () => this.#resize())

    this.#processInput()
    this.#render()
  }

  #resize() {
    this.#canvas.width = innerWidth
    this.#canvas.height = innerHeight
  }

  #processInput() {}

  #render = () => {
    const deltaTime =
      (performance.now() - this.#millisecondsPreviousFrame) * 0.12 // As close as possible to 1
    this.ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height)

    // console.log(deltaTime)
    /** Render start - pass context and deltaTime */

    // this.#posX += 1 * deltaTime
    // this.ctx.fillStyle = 'green'
    // this.ctx.fillRect(100, 100, 50, 50)
    // console.log(this.enemy1)
    this.enemy1.render()

    /** Render end */
    this.#millisecondsPreviousFrame = performance.now()
    requestAnimationFrame(this.#render)
  }
}

new Game().run()
