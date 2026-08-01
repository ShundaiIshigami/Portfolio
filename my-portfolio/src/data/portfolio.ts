//プロフィール情報定義


export interface Profile{
    name: string// 名前漢字表記.
    nameEn: string// 名前ローマ字表記.
    role: string// ロール.
    school: string// 学校名.
    department: string// 専攻名.
    graduationYear: string// 卒業年度.
    bio: string// 自己紹介文.
    motto: string// モットー、座右の銘.
    avatar: string// 顔写真の画像パス.
    links:{
        github: string
        twitter: string | null
        email: string
    }
}

export interface Skill{
    name: string
    version: string | null
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

export type CertStatus="取得済み" | "受験予定" | "取得予定" | "学習中";

export interface Certification {
    name: string
    date: string
    category: string
    score: string | null
    status: CertStatus
}

//年表
export interface TimelineItem{
    year: string
    event: string
}

export const profile: Profile ={
    name: "石上竣大",
    nameEn: "ShundaiIshigami",
    role: "プログラマー",
    school: "京都デザイン&テクノロジー専門学校",
    department: "ゲームプログラマー専攻",
    graduationYear: "2027年3月卒業見込み",
    bio: "",
    motto: "",
    avatar: "/images/profile.jpg",
    links: {
        github: "https://github.com/ShundaiIshigami",
        twitter: null,
        email: "ktc24a32a0001@edu.kyoto-tech.ac.jp"
    }
}
export const skills : Skill[]=[

    {
        name: "Unity",
        version: null,
        level: 40,
        category: "game",
        capabilities: ['3D/2Dゲーム開発','UI作成'],
        note: null
    }
]

export const works: Work[]=[
    {
        id: 1,
        title: "LostMemory",
        genre: "2Dアクション/ステージクリア型",
        category: "game",
        thumbnail: "/images//←ここに入れた画像のファイル名をここに書く",
        screenshots: ['/images/'],
        description: "説明",
        tags: ['Unity','C#'],
        platform: ['Windows'],
        period: "2025年5月~2026年2月",
        team: "プランナー１人プログラマー３人",
        role: "プログラマー",
        github: "https://github.com/rukarukahamada/LostMemory.git",
        link: null,
        venues: [
            {name:'どこで',date:'いつ'},
        ],
        techPoints: 'こだわった技術ポイント...',
        designNotes:  '設計上の工夫...',
        implementationTheme: '実装解説テーマ（1文）',
        troubleshooting: '詰まった問題と解決策...',
        performance: 'パフォーマンス改善の工夫...'
    },//配列ごとに
    {
        id: 0,
        title: "",
        genre: "",
        category: "",
        thumbnail: "/image/games/←ここに入れた画像のファイル名をここに書く",
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
    }
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


export const certifications: Certification[]=[
    {
        name: "",
        date: "",
        category: "",
        score: null,
        status: '取得予定'
    }
]

export const timeline: TimelineItem[]=[
    {
        year: "",
        event: ""
    }
]
