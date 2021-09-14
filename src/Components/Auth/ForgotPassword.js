import * as React from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import FieldError from 'Components/Common/FieldError';
import classes from "./Auth.module.css"

const styles = ({
  cancelBtn: {
    border: "1px solid #1a1b20",
    fontSize: "18px",
    color: "#1a1b20",
    padding: "8px",
    borderRadius: "5px",
    marginRight: "10px",
  },
  searchBtn: {
    background: "#1a1b20",
    color: '#b29051',
    fontSize: '18px',
    padding: "8px",
    borderRadius: "5px",
  }
})

export default function ForgotPassword() {

  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  return (
    <div className={classes.root}>
      <div className={classes.emailContainer}>
        <div style={{ textAlign: "start", marginBottom: "5px" }}>
          <h3>Find Your Account</h3>
          <hr className={classes.divider} />
          <h5>Please enter your email to find your account</h5>
        </div>
        <form onSubmit={handleSubmit(e => e.preventDefault())}>
          <input
            name="email"
            className={classes.authInput}
            type="text"
            placeholder="Email"
            ref={register({ required: "Email is required" })}
          />
          {errors?.email?.message && <FieldError message={errors?.email?.message} />}
          <hr className={classes.divider} />
          <div className="d-flex justify-content-end">
            <button style={styles.cancelBtn} onClick={() => history.goBack()}>Cancel</button>
            <button style={styles.searchBtn} type="submit">Search</button>
          </div>
        </form>

      </div>
    </div>
  );
}
