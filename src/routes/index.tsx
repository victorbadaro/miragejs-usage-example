import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { Users } from '../pages/Users';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Users />} />
                <Route path="/products" element={<h1>Products</h1>} />
            </Route>
        </Routes>
    );
}