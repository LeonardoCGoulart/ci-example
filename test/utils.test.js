const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

//commit apenas para fins de estudos

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('inicio nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(-2, 5))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('um intervalo válido [200, 3000] é fornecido. ', () => {
            const resultado = gerarNumeroAleatorio(200,3000);
            if(resultado < 200 || resultado > 3000)
                throw new Error('Valor fora do intervalo');
        });
    });

    describe('acharCaracter b', () => {
        test('acharCaracter b', () => {
            expect(acharCaracter(3, 'abc', 'b'))
                .toBe(1);
        });
    });

    describe('acharCaracter c', () => {
        test('acharCaracter c', () => {
            expect(acharCaracter(3, 'abc', 'c'))
                .toBe(2);
        });
    });

    describe('acharCaracter d', () => {
        test('acharCaracter d', () => {
            expect(acharCaracter(3, 'abc', 'd'))
                .toBe('caracter nao encontrado');
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    });    
});