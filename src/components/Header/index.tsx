import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Header() {
    return (
        <Container>
            <div>
                <Link to="/">Users</Link>
                <Link to="/products">Products</Link>
            </div>
        </Container>
    );
}