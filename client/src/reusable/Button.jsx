function Button({text, icon, ...args}){
    return(
        <button {...args} className="bg-main flex items-center gap-1 text-white text-sm rounded-full font-semibold tracking-wide py-2 px-4">{text}{icon}</button>
    );
}

export default Button