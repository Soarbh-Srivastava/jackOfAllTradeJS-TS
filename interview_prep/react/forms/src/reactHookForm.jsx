import { useForm } from "react-hook-form";

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input
        {...register("lastname", {
          required: "this required",
          minLength: {
            value: 10,
            message: "minLength should less than 10",
          },
        })}
      />
      <p>{errors.firstName?.message}</p>
      <input {...register("firstName")} />
      <button>Submit</button>
    </form>
  );
};
