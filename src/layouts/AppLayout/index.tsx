import { Outlet } from 'react-router-dom';
import { Container } from './styles';

export function AppLayout() {
    return (
        <Container>
            <Outlet />
        </Container>
    );
}