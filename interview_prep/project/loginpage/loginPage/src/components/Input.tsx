type LoginFormProps = {
  label: string;
};

function Input({ label }: LoginFormProps) {
  return (
    <>
      <label htmlFor="input">{label}</label>
      <input />
    </>
  );
}

export default Input;
