import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Shipment.css';

function Shipment() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm();
    
  const [logedInUser, setLogedInUser] = useContext(userContext)
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); 

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        placeholder="Your Name"
        {...register("exampleRequired", { required: true })}
      />
      {errors.exampleRequired && (
        <span className="error" style={{ margin: "0 auto" }}>
          Name is required
        </span>
      )}

      <input
        name="email"
        placeholder="Your Email"
        defaultValue={logedInUser.email}
        {...register("exampleRequired", { required: true })}
      />
      {errors.exampleRequired && (
        <span className="error">Email is required</span>
      )}

      <input
        name="address"
        placeholder="Your Address"
        {...register("exampleRequired", { required: true })}
      />
      {errors.exampleRequired && (
        <span className="error">Address is required</span>
      )}

      <input
        name="phone"
        placeholder="Your Phone no."
        {...register("exampleRequired", { required: true })}
      />
      {errors.exampleRequired && (
        <span className="error">Phone no. is required</span>
      )}

      <Link to="/received-your-product">
        <input className="btn btn-success" type="submit" value="Submit" />
      </Link>
    </form>
  );
}

export default Shipment
