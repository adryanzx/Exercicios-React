import React, { useState } from 'react';

const PerimetroCalculo = () => {
  
  const [radius, setRadius] = useState('');
  const [perimeter, setPerimeter] = useState(null);

  
  const handleChange = (e) => {
    setRadius(e.target.value);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const r = parseFloat(radius);
    if (!isNaN(r) && r >= 0) {
      const calculatedPerimeter = 2 * Math.PI * r; 
      setPerimeter(calculatedPerimeter);
    } else {
      setPerimeter('Por favor, insira um valor válido para o raio.');
    }
  };

  return (
    <div>
      <h1>Calculadora de Perímetro do Círculo</h1>
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
        <button type="submit">Calcular Perímetro</button>
      </form>
      {perimeter !== null && (
        <div>
          <h2>Perímetro do Círculo:</h2>
          <p>{perimeter}</p>
        </div>
      )}
    </div>
  );
};

export default PerimetroCalculo;
