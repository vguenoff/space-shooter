export class Enemy {
  #x = 150
  #y = 200
  #speedX = undefined
  #speedY = undefined
  #width = 50
  #height = 50

  /** @param {CanvasRenderingContext2D} ctx */
  constructor(ctx) {
    this.ctx = ctx
  }

  render() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.#x, this.#y, this.#width, this.#height)
  }
}
