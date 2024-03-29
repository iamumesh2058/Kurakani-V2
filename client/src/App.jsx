import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from "./layout/Layout";
import {
	Homepage,
	Login,
	PageNotFound,
	Register
} from './pages';
import { UserProvider } from './context/UserContext';
import { TopicProvider } from './context/TopicContext';

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<TopicProvider>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<Homepage />} />
						</Route>
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</TopicProvider>
			</UserProvider>
		</BrowserRouter>
	)
}

export default App;