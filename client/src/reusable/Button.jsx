function Button({text, icon, iconLeft, className, children, ...args}){
    return(
        <button {...args} className={`shadow ${className ? `shadow-[${className}]` : "shadow-main"} flex items-center gap-1 text-white text-sm rounded-full font-semibold tracking-wide py-2 px-4 ${className}`}>{iconLeft}{text}{children}{icon}</button>
    );
}

export default Button