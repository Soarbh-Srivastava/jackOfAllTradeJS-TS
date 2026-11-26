import { useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
      <form
        className="items-center flex flex-col justify-center gap-2 width-1/2 mx-auto mt-20"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="  flex flex-col gap-2">
          <label>Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="border-2 border-gray-300 rounded-md p-1 min-w-xs"
          />
          <div className="">
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="  flex flex-col gap-2">
          <label>Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            className="border-2 min-w-xs border-gray-300 rounded-md p-1"
          />
          {errors.password && (
            <div className="min-h-6 max-w-xs">
              {errors.password && (
                <p className="text-red-400 text-sm break-words">
                  {errors.password.message}
                </p>
              )}
            </div>
          )}
        </div>
        <input
          type="submit"
          className="bg-slate-700 min-w-xs rounded-md py-2 border-2 border-slate-700 hover:bg-white hover:border-gray-300 hover:text-slate-700 text-white cursor-pointer mt-4"
        />
        <input
          type="button"
          onClick={() => {}}
          value="Login with Google"
          className="bg-slate-700 min-w-xs rounded-md py-2 border-2 border-slate-700 hover:bg-white hover:border-gray-300 hover:text-slate-700 text-white cursor-pointer mt-4"
        />

        <div className="flex items-center gap-2 mt-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <input
          type="button"
          onClick={() => {}}
          value="Create a new account"
          className="hover:bg-slate-700 min-w-xs rounded-md py-2 border-2 hover:border-slate-700 bg-white border-gray-300 text-slate-700 hover:text-white cursor-pointer mt-4"
        />
      </form>
    </>
  );
}
