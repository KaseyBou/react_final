export const Button = (props) => {
  return (
    <button className='btn' style={props.style}>
      {props.children}
    </button>
  );
};
