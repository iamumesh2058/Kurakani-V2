import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from "./layout/Layout";
import {
	CreateRoom,
	Homepage,
	Login,
	PageNotFound,
	Register,
	Room,
	Topics,
	UpdateRoom
} from './pages';
import { UserProvider } from './context/UserContext';
import { TopicProvider } from './context/TopicContext';
import { RoomProvider } from './context/RoomContext';

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<TopicProvider>
					<RoomProvider>
						<Routes>
							<Route path='/' element={<Layout />}>
								<Route index element={<Homepage />} />
								<Route path='topics' element={<Topics />} />
								<Route path='create-room' element={<CreateRoom />} />
								<Route path='update-room/:id' element={<UpdateRoom />} />
								<Route path='room/:id' element={<Room />} />
							</Route>
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route path='*' element={<PageNotFound />} />
						</Routes>
					</RoomProvider>
				</TopicProvider>
			</UserProvider>
		</BrowserRouter>
	)
}

export default App;