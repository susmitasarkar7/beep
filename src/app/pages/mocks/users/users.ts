import { User } from '../../models/users/user';

const userList: User[] = [
    {firstName: 'John', lastName: 'Doe', email: 'john@jhon.com', avatar: 'assets/.jpg', },
    {firstName: 'Paul', lastName: 'Holiday', email: 'paul@paul.com', avatar: 'assets/.jpg', },
    {firstName: 'Anna', lastName: 'Doe', email: 'anna@anna.com', avatar: 'assets/.jpg', },
    {firstName: 'Marry', lastName: 'Fred', email: 'marry@marry.com', avatar: 'assets/.jpg', }
];

export const USER_LIST = userList;