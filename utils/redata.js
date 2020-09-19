function cycle(){
	let re={
		options: [
			{
				id: '',
				value: '选项一', //选项文字描述
				src: '' //选项图片
			},
			{
				id: '',
				value: '选项二', //选项文字描述
				src: '' //选项图片
			},
			{
				id: '',
				value: '选项三', //选项文字描述
				src: '' //选项图片
			},
			{
				id: '',
				value: '选项四', //选项文字描述
				src: '' //选项图片
			}
		], //有几个选项,至少两个选项
		question_value: '', //题干
	}
	return re
}

export default{
	cycle
}