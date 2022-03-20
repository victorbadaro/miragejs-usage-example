import { ReactNode } from 'react';
import { Container } from './styles';

interface AppLayoutProps {
    children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <Container>
            {children}
        </Container>
    );
}