## Rode a aplicação com

<pre>yarn dev</pre>

## ou

<pre>./start.sh</pre>

## Relatório Técnico sobre o Projeto de Simulação de Lançamento de Projétil

<pre>
Introdução:
O objetivo deste projeto é simular o lançamento de um projétil e calcular sua trajetória até atingir um alvo. Para isso, foram utilizadas fórmulas matemáticas para calcular a distância percorrida pelo projétil e verificar se ele colidiu com o alvo.

Desenvolvimento:
O projeto foi desenvolvido em JavaScript e consiste em duas funções principais: calculateTrajectory e verificarColisao.

A função calculateTrajectory é responsável por calcular a trajetória do projétil com base no ângulo e na velocidade escolhidos pelo usuário. Para isso, ela utiliza as fórmulas matemáticas para converter o ângulo de graus para radianos, calcular o seno e o cosseno do ângulo em radianos e, por fim, calcular a distância e a altura máxima da trajetória. As fórmulas utilizadas são:

x = (2 * v^2 * sin(theta) * cos(theta)) / g
y = (v^2 * sin^2(theta)) / (2 * g)
onde:

x é a distância horizontal percorrida pelo projétil.
y é a altura máxima alcançada pelo projétil.
v é a velocidade inicial do projétil.
theta é o ângulo de lançamento do projétil.
g é a aceleração da gravidade.
Já a função verificarColisao é responsável por verificar se o projétil colidiu com o alvo. Para isso, ela calcula a distância entre o projétil e o alvo e verifica se essa distância é menor ou igual ao raio do alvo.

Conclusão:
O projeto de simulação de lançamento de projétil foi desenvolvido com sucesso utilizando fórmulas matemáticas para calcular a trajetória do projétil e verificar se ele colidiu com o alvo. As funções implementadas são simples e eficientes, permitindo que o usuário escolha o ângulo e a velocidade do projétil e visualize sua trajetória até atingir o alvo.
</pre>

## Descrição do forun sobre a lógica pensada antes de fazer o game em sala

<pre>
# Tiro ao alvo

Descrição teórica:
Esse jogo é composto por 3 objetos o alvo que é estático e o objeto principal que é um projétil que percorrer um ponto X onde está o jogador indo até o ponto Y com aceleração e velocidade média variável dependendo da velocidade e angulo de escolha do jogador a missão principal é acertar o alvo que também é o ultimo objeto que compõe o jogo.

Descrição de Regras:

1. O jogador tem direito a 5 tiros até conseguir acertar o alvo.
2. O jogo acaba ao completar 10 pontos
3. O alvo tem 3 níveis de pontuação, são 3 círculos o principal ao centro do alvo vale 10 pontos, o do meio vale 5 pontos e o ultimo vale 2 pontos

Descrição de lógica:

1. O jogo começa com a exibição do alvo e a posição inicial do objeto principal, que é controlado pelo jogador.
2. O jogador escolhe a velocidade e ângulo do objeto principal e dispara o objeto, que se move em uma trajetória balística.
3. O jogo calcula a trajetória do objeto principal com base na velocidade e ângulo escolhidos pelo jogador.
4. O objeto principal se move em direção ao alvo, com aceleração variável de acordo com a trajetória.
5. O jogo verifica se o objeto principal colidiu com o alvo e em qual nível do alvo ele acertou.
6. Se o jogador acertar o alvo, a pontuação correspondente é adicionada ao total de pontos e o jogo exibe uma mensagem de acerto. Caso contrário, o jogo exibe uma mensagem de erro.
7. O jogador tem direito a 5 tiros para acertar o alvo.
8. O jogo continua até que o jogador acerte o alvo 10 vezes ou utilize todos os 5 tiros sem acertar o alvo.
9. Ao final do jogo, o total de pontos é exibido e o jogo reinicia a partir do passo 1.

Descrição de regras de negocio:

1. O objeto principal só pode ser disparado uma vez por vez, até que ele colida com o alvo ou saia do campo de visão.
2. A trajetória do objeto principal deve seguir as leis da física, levando em consideração a gravidade e a resistência do ar.
3. O alvo deve ser atualizado a cada rodada, com novos círculos e posições aleatórias.
4. O jogador deve ter uma interface fácil de usar para escolher a velocidade e o ângulo do objeto principal.
5. A pontuação deve ser calculada corretamente, de acordo com o círculo do alvo em que o objeto principal colidiu.
6. O jogo deve ter um limite de tempo, para evitar que o jogador passe muito tempo em uma única rodada.
7. O jogo deve ter uma interface clara e atraente para manter o interesse do jogador.
8. O jogo deve ser seguro e proteger a privacidade do jogador.
9. O jogo deve ser compatível com diferentes dispositivos e navegadores.

Descrição técnica:

1. Função iniciarJogo(): responsável por exibir o alvo e a posição inicial do objeto principal.
2. Função escolherAngulo(angulo): recebe o ângulo escolhido pelo jogador e o aplica ao objeto principal.
3. Função escolherVelocidade(velocidade): recebe a velocidade escolhida pelo jogador e o aplica ao objeto principal.
4. Função calcularTrajetoria(): calcula a trajetória do objeto principal com base na velocidade e ângulo escolhidos pelo jogador.
5. Função moverObjetoPrincipal(): move o objeto principal ao longo da trajetória calculada.
6. Função verificarColisao(): verifica se o objeto principal colidiu com o alvo e em qual nível do alvo ele acertou.
7. Função exibirMensagemAcerto(pontuacao): exibe uma mensagem de acerto e adiciona a pontuação correspondente ao total de pontos.
8. Função exibirMensagemErro(): exibe uma mensagem de erro quando o jogador não acerta o alvo.
9. Função reiniciarJogo(): reinicia o jogo quando o jogador acerta o alvo 10 vezes ou utiliza todos os 5 tiros sem acertar o alvo.
10. Método main(): responsável por chamar as funções e métodos para executar o jogo.
</pre>
