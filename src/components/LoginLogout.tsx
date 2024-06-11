'use client';
import styles from './Auth.module.scss';
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
    return (
        <div className={className + ' ' + styles['auth-btn']}>{children}</div>
    );
};

const LoginLogout = ({ className }: { className?: string }) => {
    const session = useSession();

    if (session.status === 'loading') {
        return <LogWrapper className="disabled">loading...</LogWrapper>;
    }

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
