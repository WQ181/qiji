var command = {
	/**
	 * 心跳
	 */
	HEARTBEAT:"00001"
}

const qiniuUploader = require("./qiniuUploader");

export default{
	command,
	qiniuUploader
}