// tests/counter.test.js
import { fireEvent } from '@testing-library/dom';
import { describe, expect, it, beforeEach } from 'vitest';
import { setupCounter } from '../counter'; // Asegúrate de que la ruta sea correcta

describe('Counter Button', () => {
  let buttonElement;

  // Configuración antes de cada prueba
  beforeEach(() => {
    // Crear el botón en el DOM
    document.body.innerHTML = `<button id="counter" type="button"></button>`;
    buttonElement = document.getElementById('counter');
    setupCounter(buttonElement); // Configurar el contador
  });

  it('should initialize with count 0', () => {
    expect(buttonElement.innerHTML).toBe('count is 0');
  });

  it('should increment count on click', () => {
    // Simula un clic en el botón
    fireEvent.click(buttonElement);
    expect(buttonElement.innerHTML).toBe('count is 1');

    // Simula otro clic en el botón
    fireEvent.click(buttonElement);
    expect(buttonElement.innerHTML).toBe('count is 2');
  });
});
