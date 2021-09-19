import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../utils/config";

const ProfilePage = () => {
	const [user, setUser] = useState({});

	const [posts, setPost] = useState({ posts: [] });
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(`/posts/?key=${config.GHOST_API_KEY}`);
			setPost(data);
			setLoading(false);
			console.log(data);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		const authUser = JSON.parse(localStorage.getItem("itemsJson"));
		if (authUser) setUser(authUser);
	}, []);
	return (
		<div className="container">
			<h1 className="fw-bold">Hello {user?.email}</h1>
			<button
				disabled={loading}
				className="btn btn-secondary rounded-0 px-4"
				onClick={getData}
			>
				{loading ? "Fetching post...." : "Click to get all Post"}
			</button>

			<div className="mt-4">
				{posts?.posts?.map((post, i) => (
					<div key={i}>
						<h6 className="fw-bold my-3">{post?.title}</h6>
						<pre>{JSON.stringify(post, null, 4)}</pre>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfilePage;
