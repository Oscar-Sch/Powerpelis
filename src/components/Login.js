import axios from "axios";
import swal from "@sweetalert/with-react";
import {useNavigate, Navigate} from "react-router-dom"
import "../css/Login.css"

function Login(){
    
    const navigate=useNavigate() 
    let token=localStorage.getItem("token");

    const submitHandler=e=>{   
        e.preventDefault();
        const email= e.target.email.value;
        const pass= e.target.password.value;
        const regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (email===""||pass===""){
            swal(
                <h2>Debes rellenar los campos</h2>
            )
            return;
        }
        if (email!=="" && !regexEmail.test(email)){
            swal(
                <h2>El texto ingresado no es un correo electrónico</h2>
            )
            return
        }
        if (email!=="challenge@alkemy.org"||pass!=="react"){
            swal(
                <h2>Los datos no corresponden a un usuario autorizado</h2>
            )
            
            return;
        }
        
        axios.post("http://challenge-react.alkemy.org",{email,password:pass}).then(res=>{
            swal(<h2>Login Exitoso!</h2>)
            const token= res.data.token;
            localStorage.setItem("token",token);
            navigate("/listado")
        })
    }

    return(
        <>
        {token && <Navigate to="/listado"/>}
        <div className="container-border border">
            <div className="container col border">
                <h2 className="title">Login</h2>
                <form className="form col" onSubmit={submitHandler}>
                    <label className="label col">
                        <span className="label-title">Correo electrónico:</span>
            
                        <input className="input" type="email" name="email"
                        //  placeholder="challenge@alkemy.org"
                        />
            
                    </label>
                    <label className="label col">
                        <span className="label-title">Contraseña:</span>
            
                        <input className="input" type="password" name="password" 
                        // placeholder="react"
                        />
            
                    </label>
                        <button className="button" type="submit">Ingresar<span>!</span></button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;