import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { useField } from '@rocketseat/unform';
import 'react-datepicker/dist/react-datepicker.css';
import {ptBR} from 'date-fns/locale';
registerLocale('ptBR', ptBR)

const DatePicker = ({ name, ...rest }) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <>
      <ReactDatePicker
        locale="ptBR"
        dateFormat="dd/MM/yyyy"
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
};
export default DatePicker;