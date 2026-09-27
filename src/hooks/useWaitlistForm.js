import { useState } from 'react';

export const useWaitlistForm = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [errorMessage, setErrorMessage] = useState('');

  // TODO: Implementar handleChange, validación y handleSubmit

  return { status, formData, errorMessage, setFormData };
};
