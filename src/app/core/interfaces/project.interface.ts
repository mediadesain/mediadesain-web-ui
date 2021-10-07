export interface ProjectInterface {
    category?: string;
    datecreate?: number;
    dateupdate?: number;
    deadline?: number;
    idproject?: string;
    iduser?: string;
    keyword?: string;
    postcontent?: string;
    pricelow?: number;
    pricehight?: number;
    isShowprice?: boolean;
    postthumb?: string;
    posttitle?: string;
    status?: string; // rejected | review | published
    status_message?: string;
    type?: string;
    _category?: string[];
    _postthumb?: string;
}
