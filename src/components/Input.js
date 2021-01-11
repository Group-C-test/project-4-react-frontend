function Input({ 
    name, 
    title,
    quote, 
    // type, 
    // value, 
    placeholder, 
    handleChange }) {
      return (
        <>
          <label htmlFor={name}>{title}{quote}</label>
          <input
            id={name}
            name={name}
            // type={type}
            // value={value}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </>
      );
  }
  
  export default Input;