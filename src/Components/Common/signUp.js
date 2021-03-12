import { Button, InputGroup, FormControl, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { customerSignUp } from "../../actions/authActions";
import { toast } from "react-toastify";

export default function SignUp({ onHide }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loadingReducer);
  const { register, handleSubmit, errors } = useForm();
  const signUp = async (data) => {
    try {
      dispatch(customerSignUp(data));
      setTimeout(() => {
        onHide();
        toast.success("Customer has been created successfully!");
      }, 900);
    } catch (error) {
      console.log({ errors });
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(signUp)}>
      <label htmlFor="email">Email Address</label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Email Address"
          aria-label="Email Address"
          aria-describedby="basic-addon1"
          id="email"
          name="email"
          ref={register({
            required: "Email Address required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={errors.email ? true : false}
        />
        <span>{errors?.email?.message}</span>
      </InputGroup>

      <label htmlFor="phoneNumber">Phone Number</label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Phone Number"
          aria-label="Phone Number"
          aria-describedby="basic-addon1"
          id="phoneNumber"
          name="phoneNumber"
          ref={register({
            required: "Phone number required",
          })}
          error={errors.phoneNumber ? true : false}
        />
        <span>{errors?.phoneNumber?.message}</span>
      </InputGroup>

      <label htmlFor="firstName">First Name</label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="First Name"
          aria-label="First Name"
          aria-describedby="basic-addon1"
          id="firstName"
          name="firstName"
          ref={register({
            required: "First Name required",
          })}
          error={errors.firstName ? true : false}
        />
        <span>{errors?.firstName?.message}</span>
      </InputGroup>

      <label htmlFor="lastName">Last Name</label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Last Name"
          aria-label="Last Name"
          aria-describedby="basic-addon1"
          id="lastName"
          name="lastName"
          ref={register({
            required: "Last Name required",
          })}
          error={errors.lastName ? true : false}
        />
        <span>{errors?.lastName?.message}</span>
      </InputGroup>

      <label htmlFor="address">Address</label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Address"
          aria-label="Address"
          aria-describedby="basic-addon1"
          id="address"
          name="address"
          ref={register({
            required: "Address required",
          })}
          error={errors.address ? true : false}
        />
        <span>{errors?.address?.message}</span>
      </InputGroup>

      <label htmlFor="password">Password</label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          id="password"
          name="password"
          ref={register({
            required: "Password required",
          })}
          error={errors.password ? true : false}
        />
        <span>{errors?.password?.message}</span>
      </InputGroup>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={onHide}>Cancel</Button>
        <Button type="submit">
          {loading && (
            <Spinner
              animation="border"
              size="sm"
              style={{ marginRight: "10px" }}
            />
          )}
          Sign Up
        </Button>
      </div>
    </form>
  );
}
