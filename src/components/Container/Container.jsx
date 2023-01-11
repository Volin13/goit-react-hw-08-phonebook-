const Container = ({ title, children, ...otherProps }) => {
  return (
    <div
      style={{
        margin: '30px auto',
        padding: '50px',
        width: '60vw',
        fontSize: 40,
        color: '#010101',
        border: '5px solid rgba(0, 0, 0, 0.2)',
      }}
      {...otherProps}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Container;
