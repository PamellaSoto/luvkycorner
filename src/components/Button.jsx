import { Link } from "react-router-dom";

function Button({ icon, label, goTo }) {
  const Icon = icon;
  const isExternal = goTo.startsWith("http") || goTo.startsWith("mailto:");
  const classes = "w-full md:w-auto content-center flex gap-3 px-4 py-2 items-center cursor-pointer rounded-full bg-[#6D37BE] text-white transition-all trainsition-duration-200 text-md"

  if (isExternal) {
    return (
      <a
        href={goTo}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        <Icon /> {label}
      </a>
    );
  }

  return (
    <Link to={goTo} className={classes}>
      <Icon /> {label}
    </Link>
  )
}

export default Button