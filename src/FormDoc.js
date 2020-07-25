import React, { useState } from 'react';

const FormDoc = ({ handleData }) => {
  const initVal = {
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    dining: false,
    fitness: false,
    pool: false,
  };
  const [data, setData] = useState(initVal);

  const handleChange = (e) => {
    console.log(e.target.checked);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Saved');
    handleData(data);
    setData(initVal);
  };

  return (
    <div className='container'>
      <form className='form-main' onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='first-name' className='label'>
            First Name
          </label>
          <input
            type='text'
            id='first-name'
            name='firstName'
            className='input-field'
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='last-name' className='label'>
            Last Name
          </label>
          <input
            type='text'
            id='last-name'
            name='lastName'
            className='input-field'
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='age' className='label'>
            Age
          </label>
          <input
            type='number'
            id='age'
            name='age'
            className='input-field'
            value={data.age}
            onChange={handleChange}
          />
        </div>
        <fieldset>
          <legend>Gender: </legend>
          <div className='input-group'>
            <label htmlFor='gender-male' className='label'>
              <input
                type='radio'
                id='gender-male'
                name='gender'
                className='radio-btn'
                value='male'
                checked={data.gender === 'male'}
                onChange={handleChange}
              />
              male
            </label>
          </div>
          <div className='input-group'>
            <label htmlFor='gender-female' className='label'>
              <input
                type='radio'
                id='gender-female'
                name='gender'
                className='radio-btn'
                value='female'
                checked={data.gender === 'female'}
                onChange={handleChange}
              />
              female
            </label>
          </div>
          <div className='input-group'>
            <label htmlFor='gender-undecided' className='label'>
              <input
                type='radio'
                id='gender-undecided'
                name='gender'
                className='radio-btn'
                value='undecided'
                checked={data.gender === 'undecided'}
                onChange={handleChange}
              />
              undecided
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Privleges</legend>

          <div className='input-group'>
            <label htmlFor='dining' className='label'>
              <input
                type='checkbox'
                id='dining'
                name='dining'
                className='checkbox'
                //value={data.dining}
                checked={data.dining}
                onChange={handleCheck}
              />
              Dining Room
            </label>
          </div>
          <div className='input-group'>
            <label htmlFor='fitness' className='label'>
              <input
                type='checkbox'
                id='fitness'
                name='fitness'
                className='checkbox'
                //value={data.fitness}
                checked={data.fitness}
                onChange={handleCheck}
              />
              Fitness Center
            </label>
          </div>

          <div className='input-group'>
            <label htmlFor='pool' className='label'>
              <input
                type='checkbox'
                id='pool'
                name='pool'
                className='checkbox'
                //value={data.pool}
                checked={data.pool}
                onChange={handleCheck}
              />
              Swimming Pool
            </label>
          </div>
        </fieldset>
        <div className='input-group'>
          <button className='form-main__btn' type='submit'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDoc;
