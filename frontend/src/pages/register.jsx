import RegisterSvg from '../components/svg/RegisterSvg';

export default function Register() {
  let userColor = '#1BD69D';



  return (
    <div className="layoutPage">
      <h1 className="text-5xl mb-6"> Register</h1>
      
      <RegisterSvg userColor={userColor} />
      <div>
        <form>
          <input></input>
          <label>Username</label>
        </form>
      </div>
    </div>
  );
}
