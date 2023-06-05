import Projectile from './businessRules'
import inputDada from './inputDada'
import Terminal from './terminal'
import { alvo } from '../config'
import Log from './returnLogs'

/*
  Sempre pensa no eixo X como sendo a distância e no eixo Y como sendo a altura.
  O alvo está no ponto (0,0) e o tiro está no ponto (100, 100)
  Ele tem 25Metros
  
  [exemplo]
  Digite o ângulo: 74
  Digite a velocidade: 48
*/

class Game {
  async start() {
    console.log('\n')
    const trajectory = await Projectile.calculateTrajectory()
    Log.debugLog(trajectory, alvo)

    if (Projectile.verificarColisao(alvo, trajectory)) {
      console.log('Acertou!')
      const inputNextOption = await inputDada.keyboardInput()

      inputNextOption === '1' ? await this.start() : process.exit(1)
      console.log('whatafuck')
    } else {
      console.log('Errou!')
      console.log(
        trajectory.y < alvo.y
          ? 'Ajuste o ângulo de lançamento para cima.'
          : 'Ajuste o ângulo de lançamento para baixo.'
      )

      trajectory.x < alvo.x - 10
        ? console.log('Aumente a velocidade de lançamento.')
        : trajectory.x > alvo.x + 10 &&
          console.log('Diminua a velocidade de lançamento.')

      await this.start()
    }

    Terminal.close()
  }
}

Log.startLog()
new Game().start()
