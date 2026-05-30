//プロフィール情報定義
export interface Profile{
    name: string
    nameEn: string
    role: string
    school: string
    department: string
    graduationYear: string
    bio: string
    motto: string
    avater: string
    links:{
        github: string
        twitter: string | null
        email: string
    }
}

export interface Skill{
    name: string
    varsion: string | null
    level: number
    category: string
    capabilities : string[]
    note: string | null

}

export interface Venue{
    name: string
    date: string
}

export interface Work{
    id: number
    title: string
    genre: string
    category: string
    thumbnail :string
    screenshots: string[]
    description: string
    tags: string[]
    platform: string[]
    period: string
    team: string
    role: string
    github: string
    link: string | null
    venues: Venue[]
    techPoints: string | null
    designNotes: string | null
    implementationTheme: string | null
    troubleshooting: string | null
    performance: string | null
}

export interface GameJam{
    name: string
    date: string
    theme: string   
    description: string
    platform: string[]
    role: string
    team: string
    result: string | null
    url: string | null
    reflection: string
}

export type CerStatus="取得済み" | "受験予定" | "取得予定" | "学習中";

export interface Certification{
    name: string
    date: string
    category: string
    score: string | null
    status: string
}

//年表
export interface TimelineItem{
    year: string
    event: string
}

export const profile: Profile ={
    name: "",
    nameEn: "",
    role: "",
    school: "",
    department: "",
    graduationYear: "",
    bio: "",
    motto: "",
    avater: "",
    links: {
        github: "",
        twitter: null,
        email: ""
    }
}
export const skill : Skill[]=[

    {
        name: "",
        varsion: null,
        level: 0,
        category: "",
        capabilities: [],
        note: null
    }
]

export const works: Work[]=[
    {
        id: 0,
        title: "",
        genre: "",
        category: "",
        thumbnail: "",
        screenshots: [],
        description: "",
        tags: [],
        platform: [],
        period: "",
        team: "",
        role: "",
        github: "",
        link: null,
        venues: [],
        techPoints: null,
        designNotes: null,
        implementationTheme: null,
        troubleshooting: null,
        performance: null
    },//配列ごとに
]
export const gameJam: GameJam[]=[
    {
        name: "",
        date: "",
        theme: "",
        description: "",
        platform: [],
        role: "",
        team: "",
        result: null,
        url: null,
        reflection: ""
    }
]
    
export const certification: Certification[]=[
    {
        name: "",
        date: "",
        category: "",
        score: null,
        status: ""
    }
] 

export const timeline: TimelineItem[]=[
    {
        year: "",
        event: ""
    }
]
