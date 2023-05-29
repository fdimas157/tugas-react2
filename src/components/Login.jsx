import KotakTeks from "./KotakTeks";
import Tombol from "./Tombol";

function Login() {
  return (
    <div className="Login">
      <div className='email'>
        <label >Email </label>
        <KotakTeks />
      </div>
      <div className='password'>
        <label>Password </label>
        <KotakTeks />
      </div>
      <Tombol></Tombol>
    </div>
  );
}

export default Login;
