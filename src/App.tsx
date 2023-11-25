import { Routes, Route } from 'react-router-dom';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';

import './globals.css';

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/*public router*/}
                <Route element={<AuthLayout />}>
                    <Route path='/sing-in' element={<SigninForm />} />
                    <Route path='/sing-up' element={<SignupForm />} />
                </Route>

                {/*private router*/}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App