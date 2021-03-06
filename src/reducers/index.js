import { combineReducers } from "redux"
import user from "./user"
import newQuestion from "./newQuestion"
import questions from "./questions"
import students from "./students"
import generatecode from "./generatecode"
import categories from "./categories"

export default combineReducers({
	user,
	questions,
	students,
	newQuestion,
	generatecode,
	categories
})
