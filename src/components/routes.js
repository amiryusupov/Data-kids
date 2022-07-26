import PageNotFound from "../pages/PageNotFound";
import Main from "../pages/Main";
import Robot from "../pages/Robot";
import Scratch from "../pages/Scratch";
import Game from "../pages/Game";
import Web from "../pages/Web";
import Android from "../pages/Android";
import Foundation from "../pages/Foundation";

let routes = [
	{
		id: 1,
		path: "/",
		component: Main,
	},
	{
		id: 2,
		path: "/robototexnika",
		component: Robot,
	},
	{
		id: 3,
		path: "/scratch",
		component: Scratch,
	},
	{
		id: 4,
		path: "/mobileGame",
		component: Game,
	},
	{
		id: 5,
		path: "/web",
		component: Web,
	},
	{
		id: 6,
		path: "/android",
		component: Android,
	},
	{
		id: 7,
		path: "/foundation",
		component: Foundation,
	},
	{
		id: 8,
		path: "/404",
		component: PageNotFound,
	},
]

export default routes;