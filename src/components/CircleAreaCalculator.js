import React, { useState } from 'react';

const CircleAreaCalculator = () => {
 
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);

  
  const handleChange = (e) => {
    setRadius(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const r = parseFloat(radius); 
    if (!isNaN(r) && r >= 0) {
      const calculatedArea = Math.PI * r * r; 
      setArea(calculatedArea);
    } else {
      setArea('Por favor, insira um valor válido para o raio.');
    }
  };

  return (
    <div>
      <h1>Calculadora de Área do Círculo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Raio do Círculo:
          <input 
            type="number" 
            value={radius} 
            onChange={handleChange} 
            min="0" 
            step="any"
            placeholder="Digite o raio"
          />
        </label>
        <button type="submit">Calcular</button>
      </form>
      {area !== null && (
        <div>
          <h2>Área do Círculo:</h2>
          <p>{area}</p>
        </div>
      )}
    </div>
  );
};

export default CircleAreaCalculator;
