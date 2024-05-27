import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  const handleSignOut = () => signOut();

  return (
    <button type="submit" onClick={handleSignOut}>
      Logout
    </button>
  );
};

export default LogoutButton;
