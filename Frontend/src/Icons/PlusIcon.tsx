interface PlusIconProp {
  size?: "sm" | "md" | "lg";
  variant?: "start" | "end";
}

const SizeStyle = {
  sm: "w-6 h-6",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

const VarientStyle = {
  start: "pr-2",
  end: "pl-2",
};

const PlusIcon = (props: PlusIconProp) => {
  const size = props.size || "md";
  const variant = props.variant || "start";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`${SizeStyle[size]} ${VarientStyle[variant]} text-white font-semibold`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default PlusIcon;
