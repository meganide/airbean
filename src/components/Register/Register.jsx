import AuthForm from '../AuthForm/AuthForm';
import AuthLayout from '../AuthLayout/AuthLayout';

function Register() {
  return (
    <AuthLayout>
      <AuthForm formInfo={registerFormInfo} />
    </AuthLayout>
  );
}

export default Register;
