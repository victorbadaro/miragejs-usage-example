import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';
import { Products } from '../pages/Products';
import { Users } from '../pages/Users';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Users />} />
                <Route path="/products" element={<Products />} />
            </Route>
        </Routes>
    );
}