import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Cupom } from '../pages/Cupom';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cupom' element={<Cupom />} />
        </Routes>
    )
}