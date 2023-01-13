import css from './Container.module.css';

const Container = ({ title, children, ...otherProps }) => {
  return (
    <div className={css.container} {...otherProps}>
      <div className={css.containerHeader}>
        <h2 className={css.containerTitle}>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Container;
