import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          navigate("/email");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </>
  );
}
