import WelcomeImage from '../components/svg/WelcomeSvg';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Welcome() {
  let userColor = '#1BD69D';
  //Todo:get userName and convert in binary
  let binaryName = '01100100 01101001 01100101 01100111 01101111 ';
  return (
    <div className="layoutPage">
      <h1 className="text-5xl mb-6">Welcome</h1>
      <div className="w-2/3 md:w-full items-center flex flex-col">
        <h1 className="my-10">{binaryName}</h1>
        <WelcomeImage userColor={userColor} />
      </div>

      <div className="mt-5">
        <Link to="/dashboard">
          <Button {...{ userColor }} text="Ready" />
        </Link>
      </div>
    </div>
  );
}
