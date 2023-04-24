import { useState } from 'react';
import './style.css';

function App() {

  const [result, setResult] = useState();
  const[doMath, setMath] = useState("");

  function handleClick(e){
    setMath(doMath.concat(e.target.value));
  }
  
  function allClear(e){
    setMath("");
    setResult("");
  }

  function deleteOne(e){
    setMath(doMath.slice(0,-1));
  }

  function calcPercentage() {
    const resultPercent=eval(doMath/100);
    setMath(resultPercent.toString().concat("*"));
  }
  
  function showResult() {
    try{
      setResult(eval(doMath));
    }
    catch(error) {
      setResult("Error");
    }

  }

  return(
    <>
      <div className="calculator">
      <h2>Calculator</h2>
        <div className="display1">
          <textarea  type="text" className="math" name="math" readOnly value={doMath}/>
        </div>
        <div className="display2">
          <input type="text" className="result" name="result" readOnly value={result}/>
        </div>
        <div className='firstrow'>
          <input type="button" name="clear" value="AC" onClick={allClear}/>
          <input type="button" name="delete" value="D" onClick={deleteOne}/>
          <input type="button" name="percentage" value="%" onClick={calcPercentage}/>
          <input type="button" name="division" value="/" onClick={handleClick}/>
        </div>
        <div className='secondrow'>
          <input type="button" name="7" value="7" onClick={handleClick}/>
          <input type="button" name="8" value="8" onClick={handleClick}/>
          <input type="button" name="9" value="9" onClick={handleClick}/>
          <input type="button" name="multiplication" value="*" onClick={handleClick}/>
        </div>
        <div className='thirdrow'>
          <input type="button" name="4" value="4" onClick={handleClick}/>
          <input type="button" name="5" value="5" onClick={handleClick}/>
          <input type="button" name="6" value="6" onClick={handleClick}/>
          <input type="button" name="addition" value="+" onClick={handleClick}/>
        </div>
        <div className='fourthrow'>
          <input type="button" name="1" value="1" onClick={handleClick}/>
          <input type="button" name="2" value="2" onClick={handleClick}/>
          <input type="button" name="3" value="3" onClick={handleClick}/>
          <input type="button" name="substraction" value="-" onClick={handleClick}/>
        </div>
        <div className='fifthrow'>
          <input type="button" name="0" value="0" onClick={handleClick}/>
          <input type="button" name="." value="." onClick={handleClick}/>
          <input type="button" name="equalto" value="=" onClick={showResult}/>
        </div>
      </div>
    </>
  )
}


export default App;
