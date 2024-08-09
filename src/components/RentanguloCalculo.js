import React, { useState } from 'react';

const RetanguloCalculo = () => {
  
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [perimeter, setPerimeter] = useState(null);

  
  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const w = parseFloat(width); 
    const h = parseFloat(height); 
    if (!isNaN(w) && !isNaN(h) && w >= 0 && h >= 0) {
      const calculatedPerimeter = 2 * (w + h); 
      setPerimeter(calculatedPerimeter);
    } else {
      setPerimeter('Por favor, insira valores válidos para a largura e altura.');
    }
  };

  return (
    <div>
      <h1>Calculadora de Perímetro do Retângulo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Largura:
            <input 
              type="number" 
              value={width} 
              onChange={handleWidthChange} 
              min="0" 
              step="any"
              placeholder="Digite a largura"
            />
          </label>
        </div>
        <div>
          <label>
            Altura:
            <input 
              type="number" 
              value={height} 
              onChange={handleHeightChange} 
              min="0" 
              step="any"
              placeholder="Digite a altura"
            />
          </label>
        </div>
        <button type="submit">Calcular Perímetro</button>
      </form>
      {perimeter !== null && (
        <div>
          <h2>Perímetro do Retângulo:</h2>
          <p>{perimeter}</p>
        </div>
      )}
    </div>
  );
};

export default RetanguloCalculo;
