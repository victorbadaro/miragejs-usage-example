import { Container } from './styles';

export function Header() {
    return (
        <Container>
            <div>
                <a href="/">Users</a>
                <a href="/products">Products</a>
            </div>
        </Container>
    );
}