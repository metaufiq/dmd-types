/// <reference types="react" />
import { NextComponentType, NextPageContext } from "next";
export declare type UserFromAPI = {
    name: {
        first: string;
        last: string;
    };
    email: string;
    login: {
        username: string;
    };
    dob: {
        date: string;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
};
export declare type User = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    phone: string;
    picture: UserFromAPI['picture'];
};
export declare type Users = User[];
export declare type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export declare type SetUsers = SetState<Users>;
export declare type Component<Props> = NextComponentType<NextPageContext, {}, Props>;
