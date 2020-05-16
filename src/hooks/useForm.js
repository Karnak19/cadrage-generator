import { useState } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceEffect from './useDebouceEffect';

import { submit, handleChange as storeChange } from '../store/form/actions';

export default function useForm() {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  useDebounceEffect(
    () => {
      dispatch(storeChange(values));
    },
    [values],
    1000
  );

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submit());
  };

  return {
    values,
    handleSubmit,
    handleChange,
  };
}
