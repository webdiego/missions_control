import LoginImage from '../components/svg/LoginSvg';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Login() {
  let userColor = '#1BD69D';
  return (
    <div className="layoutPage">
      <h1 className="text-5xl mb-6">Login</h1>
      <div className="w-2/3 md:w-full">
        <LoginImage userColor={userColor} />
      </div>

      <div>
        <form className="mt-12 flex items-center flex-col">
          <div className="flex items-center flex-col md:flex-row ">
            <div className="flex flex-col items-center ">
              <input
                style={{ borderColor: userColor }}
                className="bg-[#1a1a1a] border-2 mx-12 p-1"
              />
              <label className="text-xl ">Username</label>
            </div>

            <div className="flex flex-col items-center mt-4 md:mt-0">
              <input
                style={{ borderColor: userColor }}
                className="bg-[#1a1a1a] border-2 mx-12 p-1"
              />
              <label className="text-xl">Email</label>
            </div>
          </div>

          <div className="flex items-center mt-4 flex-col md:flex-row">
            {/* <div className="flex flex-col items-center">
              <input
                style={{ borderColor: userColor }}
                className="bg-[#1a1a1a] border-2 mx-12 p-1"
              />
              <label className="text-xl">Psw</label>
            </div> */}
          </div>
          <Link to="/welcome">
            <Button {...{ userColor }} text="Ready" />
          </Link>
        </form>
      </div>
    </div>
  );
}
