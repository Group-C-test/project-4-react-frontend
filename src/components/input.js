function Input({ 
    artist, 
    title, 
    quote, 
    value, 
    placeholder, 
    handleChange }) {
      return (
        <>
          <label htmlFor={artist}>{title}</label>
          <input
            id={artist}
            artist={artist}
            quote={quote}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </>
      );
  }
  
  export default Input;
  