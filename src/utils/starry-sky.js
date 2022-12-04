class Particle {
  x
  y
  vx
  w
  h
  ctx
  constructor(width, height, ctx) {
    this.w = width
    this.h = height
    this.ctx = ctx
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.vx = Math.random()
  }
  update(direction = 'around') {
    direction = 'around'
    switch (direction) {
      case 'right':
        this.x += this.vx * 3
        if (this.x > this.w) {
          this.x = 0
        }
        break
      case 'left':
        this.x -= this.vx * 3
        if (this.x < 0) {
          this.x = this.w
        }
        break
      case 'up':
        this.y -= this.vx * 3
        if (this.y < 0) {
          this.y = this.h
        }
        break
      case 'down':
        this.y += this.vx * 3
        if (this.y > this.h) {
          this.y = 0
        }
        break
      case 'around':
        let deg = Math.atan2(this.y - this.h / 2, this.x - this.w / 2)
        let r = Math.sqrt(
          Math.pow(this.x - this.w / 2, 2) + Math.pow(this.y - this.h / 2, 2)
        )
        this.x = r * Math.cos(deg + this.vx / 200) + this.w / 2
        this.y = r * Math.sin(deg + this.vx / 200) + this.h / 2
        break
    }
  }
  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, 1 + this.vx, 0, Math.PI * 2)
    this.ctx.fillStyle = `rgba(255, 255, 255, ${this.vx})`
    this.ctx.fill()
  }
}

export default class StarrySky {
  canvas
  ctx
  particles
  count
  actions
  action
  constructor() {
    this.canvas = document.createElement('canvas')
    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
    this.canvas.style.zIndex = '-1'
    this.ctx = this.canvas.getContext('2d')
    document.body.appendChild(this.canvas)

    this.particles = []
    this.count = 1000
    this.actions = ['right', 'left', 'up', 'down', 'around']
    this.action = 0

    this.animate()
    this.event()
  }

  event() {
    document.body.addEventListener('click', () => {
      this.action++
      this.action = this.action % this.actions.length
    })
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    if (this.particles.length < this.count) {
      this.particles.push(
        new Particle(this.canvas.width, this.canvas.height, this.ctx)
      )
    }
    for (let i in this.particles) {
      const p = this.particles[i]
      p.update(this.actions[this.action])
      p.draw()
    }
  }

  startTime = null
  stepInMs = 0
  drawCount = 0
  animate() {
    let timestamp = new Date().getTime()
    if (this.startTime === null) {
      this.startTime = timestamp
    }
    let progress = timestamp - this.startTime
    if (progress > this.stepInMs) {
      this.drawCount++
      if (this.drawCount <= 1000) {
        this.stepInMs = 0
      } else {
        return
      }
      this.startTime = timestamp
      this.draw()
    }

    requestAnimationFrame(() => this.animate())
  }
}
