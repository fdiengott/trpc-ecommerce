import { useSession } from 'next-auth/react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const LogWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

const LoginLogout = ({ className }: { className?: string }) => {
  const session = useSession();

  if (session.status === 'authenticated') {
    return (
      <LogWrapper className={className}>
        <LogoutButton />
      </LogWrapper>
    );
  }

  return (
    <LogWrapper className={className}>
      <LoginButton />
    </LogWrapper>
  );
};

export default LoginLogout;
