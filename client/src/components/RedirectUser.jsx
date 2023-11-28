import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function RedirectUser(){
    const navigate = useNavigate()
    useLayoutEffect(() => {
        navigate("/records/students")
    })
    return(<></>);
}

//specifically used for redirecting user only ahhahaha that was the only option i got