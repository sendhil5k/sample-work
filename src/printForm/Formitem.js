import React from 'react';

function FormInput({handleChange,submitForm, inputVal}){
return(
    <form className="form-row row">
      <label>First name:</label>
      <br />
      <input 
       className='userFirstname' onChange={handleChange}
       name='userFirstname' value={inputVal.userFirstname}
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        className='userLastname' onChange={handleChange}
        name='userLastname' value={inputVal.userLastname}
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        className='userPhone' onChange={handleChange} 
        name='userPhone' value={inputVal.userPhone} 
        type='text'
      />
      <br/>
      <input 
        className='submitBtn' onClick={submitForm}
        type='submit' 
        value='Add User' 
      />
    </form>
)
}
export default FormInput;