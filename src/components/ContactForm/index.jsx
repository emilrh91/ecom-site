import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.alert('Thank you! Your message has been sent.');
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input {...register('fullName', { required: true, minLength: 3 })} className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} />
        {errors.fullName && <div className="invalid-feedback">This field is required and must be at least 3 characters</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Subject</label>
        <input {...register('subject', { required: true, minLength: 3 })} className={`form-control ${errors.subject ? 'is-invalid' : ''}`} />
        {errors.subject && <div className="invalid-feedback">This field is required and must be at least 3 characters</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
        {errors.email && <div className="invalid-feedback">This field is required and must be a valid email address</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea {...register('body', { required: true, minLength: 3 })} className={`form-control ${errors.body ? 'is-invalid' : ''}`} />
        {errors.body && <div className="invalid-feedback">This field is required and must be at least 3 characters</div>}
      </div>

      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  );
};

export default ContactForm;