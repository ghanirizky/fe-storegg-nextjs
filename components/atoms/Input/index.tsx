interface InputProps {
  label: string;
  placeholder: string;
  value : string|number
}

const Input = (props: InputProps) => {
  const { label, value, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        value={value}
        // placeholder="Enter your name"
        {...nativeProps}
      />
    </>
  );
};

export default Input;
