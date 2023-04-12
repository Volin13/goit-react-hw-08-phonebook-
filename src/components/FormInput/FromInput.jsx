import { forwardRef, useState } from 'react';
import css from './FromInput.module.css';
import { ReactComponent as ErorrIcon } from '../../assets/icons/erorr.svg';
import switchImages from './switchInputImages';

const FormInput = forwardRef(function FormInput(props, ref) {
  const { formik, name, placeholder, value, error, type, onChange, onBlur } =
    props;
  const switchColor = (error, value, name) => {
    if (
      !error &&
      value &&
      !warningValidation(value) &&
      (name === 'password' || name === 'confirm')
    ) {
      return `${css.formInput} ${css.formInputInsecure}`;
    } else if (error && value) {
      return `${css.formInput} ${css.formInputInvalid} `;
    } else if (!error && value) {
      return `${css.formInput} ${css.formInputValid} `;
    } else {
      return `${css.formInput}`;
    }
  };

  function warningValidation(value) {
    const regex = /[A-Z-А-Я-ЩЬЮЯЇІЄҐ]/;
    return regex.test(value);
  }
  const [visibility, setVisibility] = useState(true);
  const hendleClearClick = ref => {
    if (ref) return ref.current.focus(ref);
    else return;
  };
  const hendleButtonShown = () => {
    setVisibility(!visibility);
  };

  return (
    <div className={css.inputWrapper}>
      <input
        className={switchColor(error, value, name)}
        placeholder={placeholder}
        ref={ref}
        name={name}
        type={type}
        value={value}
        erorr={error}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={css.formIcon}>{switchImages(name)}</span>
      {value && (
        <button
          type="button"
          className={css.formClearButtonIcon}
          onMouseEnter={hendleButtonShown}
          onMouseLeave={hendleButtonShown}
          onClick={e => {
            formik.setFieldValue(`${name}`, '');
            hendleClearClick(ref);
            hendleButtonShown();
          }}
          style={{ opacity: visibility ? '0' : '1' }}
        >
          <ErorrIcon />
        </button>
      )}
    </div>
  );
});

export default FormInput;
