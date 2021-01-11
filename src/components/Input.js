function Input({ 
    name, 
    img_url,
    quote, 
    type, 
    value, 
    placeholder, 
    handleChange }) {
      return (
        <>
          <label htmlFor={name}>{quote}</label>
          <input
            id={name}
            name={name}
            img_url={img_url}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </>
      );
  }
  
  export default Input;