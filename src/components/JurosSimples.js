import React, { useState } from 'react';



const JurosSimples = () => {
  
  const [capital, setCapital] = useState('');
  const [rate, setRate] = useState('');
  const [period, setPeriod] = useState('');
  const [simpleInterest, setSimpleInterest] = useState(null);

  
  const handleCapitalChange = (e) => {
    setCapital(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const c = parseFloat(capital); 
    const r = parseFloat(rate); 
    const p = parseFloat(period); 

    
    if (!isNaN(c) && !isNaN(r) && !isNaN(p) && c >= 0 && r >= 0 && p >= 0) {
      const calculatedInterest = c * r * p;
      setSimpleInterest(calculatedInterest);
    } else {
      setSimpleInterest('Por favor, insira valores válidos para o capital, taxa e período.');
    }
  };

  return (
    <div>
      <h1>Calculadora de Juros Simples</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Capital:
            <input 
              type="number" 
              value={capital} 
              onChange={handleCapitalChange} 
              min="0" 
              step="any"
              placeholder="Digite o capital"
            />
          </label>
        </div>
        <div>
          <label>
            Taxa de Juros (em decimal, por exemplo, 0.05 para 5%):
            <input 
              type="number" 
              value={rate} 
              onChange={handleRateChange} 
              min="0" 
              step="any"
              placeholder="Digite a taxa de juros"
            />
          </label>
        </div>
        <div>
          <label>
            Período:
            <input 
              type="number" 
              value={period} 
              onChange={handlePeriodChange} 
              min="0" 
              step="any"
              placeholder="Digite o período"
            />
          </label>
        </div>
        <button type="submit">Calcular Juros Simples</button>
      </form>
      {simpleInterest !== null && (
        <div>
          <h2>Juros Simples:</h2>
          <p>{simpleInterest}</p>
        </div>
      )}
    </div>
  );
};


export default JurosSimples;