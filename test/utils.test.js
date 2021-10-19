const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

//commit apenas para fins de estudos

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
    });

    describe('acharCaracter b', () => {
        test('acharCaracter b', () => {
            expect(acharCaracter(3, 'abc', 'b'))
                .toBe(2);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    });    
});