export interface filter{
    type:string;
    value:string;
    isChecked:boolean;
};

export interface filterState{
    color:string[];
    gender:string[];
    price:string[];
    type:string[];
}