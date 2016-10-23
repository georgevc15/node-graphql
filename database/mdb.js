module.exports = mPool => {
	return {
		getCounts(user, countsFields) {
			return mPool.collection('users')
			.findOne({ userId: user.id})
			.then(userCounts => userCounts[countsFields]);
		}
	};
};