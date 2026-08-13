import { useForm } from "react-hook-form";

// export const ReactHookForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//     },
//   });

//   return (
//     <form onSubmit={handleSubmit((data) => console.log(data))}>
//       <input
//         {...register("lastname", {
//           required: "this required",
//           minLength: {
//             value: 10,
//             message: "minLength should less than 10",
//           },
//         })}
//       />
//       <p>{errors.firstName?.message}</p>
//       <input {...register("firstName")} />
//       <button>Submit</button>
//     </form>
//   );
// };

export const ReactHookForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fName: "",
      lName: "",
      category: "",
      checbox: [],
      radio: "",
    },
  });
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        {...register("fName", { required: true })}
        placeholder="First Name"
      />
      <input {...register("lName", { minLength: 5 })} placeholder="Last Name" />
      <select {...register("category")}>
        <option value=""></option>
        <option value="a"> option A</option>
        <option value="b">option B</option>
      </select>
      <input {...register("checbox")} type="checkbox" />
      <input {...register("checbox")} type="checkbox" />
      <input {...register("checkbox")} type="checkbox" />

      <input {...register("radio")} type="radio" value="A" />
      <input {...register("radio")} type="radio" value="B"></input>
      <input {...register("radio")} type="radio" value="C" />

      <input type="submit" />
    </form>
  );
};
