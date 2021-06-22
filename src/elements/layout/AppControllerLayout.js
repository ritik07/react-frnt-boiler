import { BulbOutlined, FileOutlined, HeartOutlined, HomeOutlined, MenuOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

export const menuLayoutA = [
	{
		title: "Home",
		key: 1,
		type: "root",
		path: '/home',
		icon: <HomeOutlined />
	},
	{
		title: "Quote",
		key: 2,
		path: '/quote',
		type: "parent",
		icon: <FileOutlined />,
		children: [{
			title: "Quote",
			key: 3,
			path: '/quote',
			type: "child",
			icon: <MenuOutlined />
		},
		{
			title: "Order",
			key: 4,
			path: '/order',
			type: "child",
			icon: <SettingOutlined />
		},
		{
			title: "Favourite",
			key: 5,
			path: '/favourite',
			type: "child",
			icon: <HeartOutlined />
		}]
	},
	{
		title: "Inspire",
		key: 6,
		type: "parent",
		icon: <BulbOutlined />,
		children:[
		{
			title: "Blog",
			key: 7,
			path: '/blog',
			type: "child",
			icon: <FileOutlined />
		}
		]
	},
	{
		title: "Login",
		key: 8,
		type: "root",
		path: '/log-in',
		icon: <UserOutlined />
	},
	{
		title: "Sign Up",
		key: 9,
		type: "root",
		path: '/sign-up',
		icon: <UserOutlined />
	}
];
