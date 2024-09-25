import { setupCounter } from './counter.js';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Counter Button', () => {
  let buttonElement;

  beforeEach(() => {
    // Configurar el HTML antes de cada prueba
    document.body.innerHTML = `<button id="counter" type="button"></button>`;
    buttonElement = document.getElementById('counter');
    setupCounter(buttonElement); // Configurar el contador
  });

  it('should initialize with count 0', () => {
    expect(buttonElement.innerHTML).toBe('count is 0');
  });

  it('should increment count on click', () => {
    fireEvent.click(buttonElement);
    expect(buttonElement.innerHTML).toBe('count is 1');
  });
});
