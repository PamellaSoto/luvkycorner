function Button({ icon, label, goTo }) {
  const Icon = icon;
  return (
    <a 
      href={goTo}
      className={`w-full md:w-auto content-center flex gap-3 px-4 py-2 items-center 
      cursor-pointer rounded-full bg-[#6D37BE] text-amber-50
      transition-all trainsition-duration-200
      text-md`}>
      <Icon /> {label}
    </a>
  )
}

export default Button