function Button({text, icon, iconLeft, ...args}){
    return(
        <button {...args} className="bg-main shadow shadow-main flex items-center gap-1 text-white text-sm rounded-full font-semibold tracking-wide py-2 px-4">{iconLeft}{text}{icon}</button>
    );
}

export default Button