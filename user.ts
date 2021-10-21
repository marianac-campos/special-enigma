type userInfo = {
    id: number,
    name: string,
    email: string,
    senha?: string
};

type avatarInfo = {
    nickname: string,
    class: string,
    level: number
};

// intersection 
type profile = userInfo & avatarInfo;

const Nidalee: profile = {
    id: 1,
    name: "Douglas Silva",
    email: "douglas@gmail.com",
    nickname: "douggkw",
    class: "mago",
    level: 16,
};