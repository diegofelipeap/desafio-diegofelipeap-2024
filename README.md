# Desafio Zoológico - Recintos de Animais

## Descrição

Este projeto foi desenvolvido como parte do desafio proposto para identificar os recintos onde novos animais podem se sentir confortáveis no zoológico. O objetivo foi implementar a lógica que segue as regras estabelecidas para acomodar diferentes espécies de animais em recintos apropriados, considerando bioma, espaço e regras de convivência.

## Alterações e Soluções Implementadas

1. **Cálculo de Espaço Livre e Biomas**:
   - A lógica para calcular o espaço livre foi implementada para garantir que novos animais possam ser adicionados apenas se houver espaço suficiente no recinto.
   - Biomas foram verificados para garantir que os animais são alocados apenas em recintos que possuem o bioma adequado para eles.

2. **Regras de Convivência**:
   - **Carnívoros**: Apenas podem habitar com outros animais da mesma espécie.
   - **Hipopótamos**: Podem habitar com outras espécies apenas se o recinto tiver o bioma "savana e rio".
   - **Macacos**: Não se sentem confortáveis sozinhos e precisam estar em recintos com outros animais (mesmo que sejam da mesma espécie).

3. **Cálculo de Espaço Extra**:
   - Quando há mais de uma espécie no recinto, 1 espaço adicional é considerado como ocupado. Esta regra foi implementada para garantir que a convivência de diferentes espécies seja calculada corretamente.

4. **Validação de Erros**:
   - **Animal Inválido**: Se um animal que não pertence ao zoológico for informado, a mensagem de erro `"Animal inválido"` é retornada.
   - **Quantidade Inválida**: Se a quantidade informada for inválida (não numérica ou menor/igual a 0), a mensagem `"Quantidade inválida"` é retornada.
   - **Sem Recinto Viável**: Se não houver espaço suficiente ou o bioma for incompatível, a mensagem `"Não há recinto viável"` é retornada.

## Como Baixar e Testar o Projeto Localmente

### Pré-requisitos

- **Node.js** (v14 ou superior)
- **NPM** (Node Package Manager)

### Passos para rodar o projeto:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seuUsername/desafio-seuUsername-2024.git
   ```

2. **Entre no diretório do projeto**:
   ```bash
   cd desafio-seuUsername-2024
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Rode os testes**:
   Para validar a solução com os testes existentes e garantir que todas as regras estão sendo seguidas, execute o comando:
   ```bash
   npm test
   ```

### Estrutura do Projeto

O arquivo principal do projeto está localizado em `src/recintos-zoo.js`, onde a lógica para encontrar os recintos viáveis foi implementada. O arquivo de testes `src/recintos-zoo.test.js` contém os casos de teste para validar a solução.

### Funções Principais:

- `analisaRecintos(animal, quantidade)`:
  - Recebe como parâmetros o tipo de animal e a quantidade.
  - Retorna a lista de recintos viáveis ou uma mensagem de erro.
  - Exemplo de uso:
    ```js
    const recintosZoo = new RecintosZoo();
    const resultado = recintosZoo.analisaRecintos('MACACO', 2);
    console.log(resultado);
    ```

### Exemplos de Entrada e Saída:

1. **Entrada Válida**:
   ```js
   new RecintosZoo().analisaRecintos('MACACO', 2);
   ```
   **Saída**:
   ```json
   {
     "recintosViaveis": [
       "Recinto 1 (espaço livre: 5 total: 10)",
       "Recinto 2 (espaço livre: 3 total: 5)",
       "Recinto 3 (espaço livre: 3 total: 7)"
     ]
   }
   ```

2. **Entrada Inválida**:
   ```js
   new RecintosZoo().analisaRecintos('UNICORNIO', 1);
   ```
   **Saída**:
   ```json
   {
     "erro": "Animal inválido"
   }
   ```

## Estrutura de Pastas

```plaintext
.
├── src
│   ├── recintos-zoo.js        # Lógica principal do desafio
│   └── recintos-zoo.test.js    # Testes para validar a solução
├── package.json                # Dependências do projeto
└── README.md                   # Instruções do projeto
```

## Considerações Finais

A solução foi desenvolvida seguindo as especificações do desafio, garantindo que as regras para alocação de animais em recintos sejam respeitadas. A estrutura do código foi mantida conforme solicitado, permitindo que os testes automáticos possam validar a solução de maneira adequada.
