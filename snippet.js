// snippet.js

class Snippet {
	constructor(fileName, code, tags) {
		this.name = fileName;
		this.code = code;
		this.tags = tags;
		let codeArr = code.split("\n");
		this.lines = codeArr.length - 1; //subtract by one to account for the first line of comments
	}

	hasTags(tagName) {
		if (this.tags.length === 0) {
			return false;
		}
		for (let index = 0; index < this.tags.length; index++) {
			if (this.tags[index] === tagName) {
				return true;
			}
		}
	}
	 
}

module.exports = {
	Snippet: Snippet
};