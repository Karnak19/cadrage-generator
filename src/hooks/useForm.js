import { useState } from 'react';

export default function useForm(initialState) {
  const [values, setValues] = useState(initialState || {});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return {
    values,
    handleSubmit,
    handleChange,
  };
}
