import { Link, useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets"
const ResetPassword = () => {

  

  return (
    <div className="email-verify-container d-flex align-items-center justify-content-center vh-100 position-relative"
     style={{background: "linear-gradient(90deg,#6a5af9,#8268f9)" , border: "none"}}
    >
      <Link to="/" className="position-absolute top-0 start-0 p-4 d-flex align-items-center gap-2 text-decoration-none">
      <img src={assets.OIP} alt="logo" heigth={32} width={32}/>
       <span className="fs-4 fw-semibold text-light">SecureSphere</span>
     </Link>
    </div>
  )
}

export default ResetPassword