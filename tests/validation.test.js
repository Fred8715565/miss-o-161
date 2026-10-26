// Importa a função 'normalizeTitle' do arquivo de validação original
const { normalizeTitle } = require('../src/validation');

// Agrupa o bloco de testes relacionado para manter a organização do código 
describe('Validação de tarefas', () => {

  test('Deve remover espaços desnecessários', () => {
    expect(normalizeTitle('  Tarefa de Unitario  '))
      .toBe('Tarefa de Unitario');
  });

  test('Retorna uma string vazia se o título não for uma string', () => {
    expect(normalizeTitle(15487)).toBe('');
  });

  test('Retorna uma string vazia se o título for nulo', () => {
    expect(normalizeTitle(null)).toBe('');
  });

  test('Retorna uma string vazia se o título for nulo', () => {
    expect(normalizeTitle(undefined)).toBe('');
  });


});
