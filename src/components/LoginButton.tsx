import { signIn } from 'next-auth/react';

const LoginButton = () => {
  const handleSignIn = () => signIn('google');

  return (
    <button type="submit" onClick={handleSignIn}>
      Login with Google
    </button>
  );
};

export default LoginButton;
