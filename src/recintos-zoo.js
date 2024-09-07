class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanho: 10, animais: ['macaco', 'macaco', 'macaco'] },
            { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
            { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: ['gazela'] },
            { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
            { numero: 5, bioma: 'savana', tamanho: 9, animais: ['leão'] },
        ];

        this.animais = [
            { especie: 'LEAO', tamanho: 3, biomas: ['savana'] },
            { especie: 'LEOPARDO', tamanho: 2, biomas: ['savana'] },
            { especie: 'CROCODILO', tamanho: 3, biomas: ['rio'] },
            { especie: 'MACACO', tamanho: 1, biomas: ['savana', 'floresta'] },
            { especie: 'GAZELA', tamanho: 2, biomas: ['savana'] },
            { especie: 'HIPOPOTAMO', tamanho: 4, biomas: ['savana', 'rio'] },
        ];
    }

    analisaRecintos(animal, quantidade) {
        const especieEncontrada = this.animais.find(a => a.especie === animal);

        if (!especieEncontrada) {
            return { erro: 'Animal inválido' };
        }

        if (typeof quantidade !== 'number' || quantidade <= 0) {
            return { erro: 'Quantidade inválida' };
        }

        const { biomas, tamanho } = especieEncontrada;
        let recintosViaveis = [];

        this.recintos.forEach(recinto => {
            const especiesDiferentes = new Set(recinto.animais.map(a => a.toUpperCase()));
            const espacosOcupados = recinto.animais.reduce((acc, especie) => {
                const especieNoRecinto = this.animais.find(a => a.especie === especie.toUpperCase());
                return acc + (especieNoRecinto ? especieNoRecinto.tamanho : 0);
            }, 0);

            const espacoLivre = recinto.tamanho - espacosOcupados;
            const espacoExtra = especiesDiferentes.size > 1 ? 1 : 0;

            // Verifica bioma, espaço livre e regras específicas
            if (
                biomas.some(bioma => recinto.bioma.includes(bioma)) &&
                espacoLivre >= tamanho * quantidade + espacoExtra &&
                this.validarRegrasEspecificas(recinto, animal)
            ) {
                recintosViaveis.push({
                    numero: recinto.numero,
                    espacoLivre: espacoLivre - tamanho * quantidade - espacoExtra,
                    total: recinto.tamanho
                });
            }
        });

        recintosViaveis.sort((a, b) => a.numero - b.numero);

        if (recintosViaveis.length === 0) {
            return { erro: 'Não há recinto viável' };
        }

        const recintosFormatados = recintosViaveis.map(
            r => `Recinto ${r.numero} (espaço livre: ${r.espacoLivre} total: ${r.total})`
        );

        return { recintosViaveis: recintosFormatados };
    }

    validarRegrasEspecificas(recinto, animal) {
        const carnívoros = ['LEAO', 'LEOPARDO', 'CROCODILO'];
        const herbívoros = ['MACACO', 'GAZELA', 'HIPOPOTAMO'];

        if (carnívoros.includes(animal)) {
            return recinto.animais.every(a => a.toUpperCase() === animal);
        }

        if (herbívoros.includes(animal) && animal !== 'HIPOPOTAMO') {
            return recinto.animais.every(a => herbívoros.includes(a.toUpperCase()));
        }

        if (animal === 'HIPOPOTAMO') {
            if (recinto.bioma !== 'savana e rio' && recinto.animais.length > 0) {
                return false;
            }
        }

        if (animal === 'MACACO' && recinto.animais.length === 0) {
            return false;
        }

        return true;
    }
}

export { RecintosZoo as RecintosZoo };