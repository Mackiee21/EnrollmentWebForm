function Button({text, icon, iconLeft, className, disabled, shadow, children, ...args}){
    return(
        <button disabled={disabled} {...args} className={`shadow ${shadow ? `shadow-${shadow}` : "shadow-main"} flex items-center gap-1 text-white text-sm rounded-full font-semibold tracking-wide py-2 px-4 ${className}`}>{iconLeft}{text}{children}{icon}</button>
    );
}

export default Button