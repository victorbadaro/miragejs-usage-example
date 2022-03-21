import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<h1>Users</h1>} />
                <Route path="/products" element={<h1>Products</h1>} />
            </Route>
        </Routes>
    );
}