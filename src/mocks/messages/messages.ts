import { Message } from "src/models/messages/messages";
import { User } from "src/models/users/user";

const userList: User[] = [
    {firstName: 'John', lastName: 'Doe', email: 'john@jhon.com', avatar: 'assets/.jpg', },
    {firstName: 'Paul', lastName: 'Holiday', email: 'paul@paul.com', avatar: 'assets/.jpg', },
    {firstName: 'Anna', lastName: 'Doe', email: 'anna@anna.com', avatar: 'assets/.jpg', },
    {firstName: 'Marry', lastName: 'Fred', email: 'marry@marry.com', avatar: 'assets/.jpg', }
]

const messageList: Message[] = [
    { user: userList[0], date: new Date() },
    { user: userList[1], date: new Date() },
    { user: userList[2], date: new Date() },
    { user: userList[3], date: new Date() }
]

export const MESSAGE_LIST = messageList;