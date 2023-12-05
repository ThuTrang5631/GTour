const Input = ({ placeholder, classNameWrap, className, children }) => {
  return (
    <div className={`wrapinput ${classNameWrap}`}>
      <input className={`input ${className}`} placeholder={placeholder}></input>
      {children}
    </div>
  );
};

export default Input;
