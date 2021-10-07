

export interface LinkInterface {
    icon?: string;
    name?: string;
    url?: string;
}
export interface PriceInterface {
    tutor?: number;
}

export interface UserInterface {
    address?: string;
    avatar?: string;
    avatarurl?: string;
    bio?: string;
    city?: string;
    datecreate?: number;
    dateregister?: number;
    dateupdate?: number;
    email?: string;
    fullname?: string;
    gender?: string;
    iduser?: string;
    links?: { [k: string]: LinkInterface };
    password?: string;
    phoneno?: string;
    phonenoshow?: boolean;
    role?: string;
    price?: PriceInterface;
    skill?: string;
    skills?: string;
    software?: string;
    uid?: string;
    userid?: string;
    _avatar?: string;
    _links?: LinkInterface[];
    _role?: string[];
}
