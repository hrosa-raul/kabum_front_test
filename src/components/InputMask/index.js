import React, { useRef, useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import { useField } from '@rocketseat/unform';

const InputMask = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [defValue, setDefValue] = useState(defaultValue || '');
  const [newValue, setNewValue] = useState('');
  
  useEffect(()=>{
    //if(defaultValue && newValue === ''){
      setDefValue(defaultValue)
      setNewValue(defaultValue)
    //}
    
  }, [defaultValue])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue();
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  function handleChange(e){
    const { value } = e.target;
    setNewValue(value)
  }

  return (
    <>
      <ReactInputMask 
        ref={inputRef} 
        onChange={handleChange} 
        value={newValue} 
        defaultValue={newValue}
        {...rest} />
      {error && <span>{error}</span>}
    </>
  );
};
export default InputMask;