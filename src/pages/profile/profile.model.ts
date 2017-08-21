export class UserModel {
    public about: string;
    public email: string;
    public image: string;
    public location: string;
    public name: string;
    public phone: string;
    public website: string;
}

export class CollectionModel {
    public description:string;
    public image:string;
    public name:string;
}

export class PostModel {
    public image:string;
    public description:string;
    public likes:number;
    public comments:number;
    public liked:boolean;
    public date:string;
}