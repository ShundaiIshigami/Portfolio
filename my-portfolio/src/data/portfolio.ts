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
    bio: "私の強みは、課題に対して自ら考え、主体的に動く行動力です。学校でのチーム制作では、脱退したメンバーの担当箇所を引き継ぐ際、AI等を活用して未知のコードを自力で解読・理解し、制作を進めることができました。さらに、制作途中で「PlayerInputを1つのオブジェクトに集約する」という効率的な手法を学んだ際には、全体のクオリティ向上のため自発的に既存コードの再構築を行いました。このように、予期せぬトラブルにも自力で調べて対応する「解決力」と、より良い構造を目指して自発的に行動できる「探求心」が私の強みです。",
    motto: "何事も柔軟に適切に",
    avatar: "/images/icon.png",
    links: {
        github: "https://github.com/ShundaiIshigami",
        twitter: null,
        email: "25shun431@gmail.com"
    }
}
export const skills : Skill[]=[

    {
        name: "Unity",
        version: null,
        level: 60,
        category: "game",
        capabilities: ['3D/2Dゲーム開発','UI作成'],
        note: null
    },
    {
        name: "C#",
        version: null,
        level: 50,
        category: "game",
        capabilities: ['3D/2Dゲーム開発'],
        note: null
    }
]

export const works: Work[]=[
    {
        id: 1,
        title: "LostMemory",
        genre: "2Dアクション/ステージクリア型",
        category: "game",
        thumbnail: "/games/losttitle.png",
        screenshots: ['/games/lostmemory.png'],
        description: "学校の合同ゲーム制作で作成しました。",
        tags: ['Unity','C#'],
        platform: ['Windows'],
        period: "2025年5月~2026年2月",
        team: "プランナー１人プログラマー３人",
        role: "プログラマー",
        github: "https://github.com/rukarukahamada/LostMemory.git",
        link: null,
        venues: [
            {name:'学校の若きクリエーター展',date:'2026年2月'},
        ],
        techPoints: 'ＨＰゲージの灰色部分を実装するためにユニタスクのＡｗａｉｔを使ったこと。',
        designNotes:  '途中でプレイヤーインプットをシーン上の一つのオブジェクトにまとめたほうがいいと知りまとめるためにいろいろなコードを書き直したこと。',
        implementationTheme: null,
        troubleshooting: '他の人が途中でチームを抜けたときその人が担当していたところを引き継ぎＡＩなどでどのようなコードかを調べたこと　オーディオやＳＥが思ったようにしてならなかったのでシングルトンなどを利用したこと。',
        performance: null
    },//配列ごとに
    {
        id: 2,
        title: "Hole",
        genre: "2Dアクション/横スクロール",
        category: "game",
        thumbnail: "/games/holetitle.png",
        screenshots: ["/games/hole.png"],
        description: "学校の合同ゲーム制作で作成しました。",
        tags: ['Unity','C#'],
        platform: ['Windows'],
        period: "2024年10月~2025年2月",
        team: "プランナー１人プログラマー４人デザイナー２人",
        role: "プログラマー",
        github: "https://github.com/Yamahalu69/GodoGameMake.git",
        link: "https://drive.google.com/file/d/1-X65OEIN8X07Zs56emzbf40QG-OF9rWQ/view?usp=drive_link",
        venues: [
            {name:'学校の若きクリエーター展',date:'2025年2月'},
        ],
        techPoints: "敵が透明な時に輪郭だけを薄っすら出てきたり消えたりするようにしたこと,投げ物と敵が当たった時の判定",
        designNotes: null,
        implementationTheme: null,
        troubleshooting: "透明にしつつ当たり判定を残すところや敵にアイテムが当たった時の動きが変になることがあったこと",
        performance: "ナイフや透明化解除アイテムの投げにクールタイムがない点"
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
        name: "MOSPowerPoint2019",
        date: "2024年9月24日合格",
        category: "",
        score: "930点",
        status: '取得済み'
    },
    {
        name: "Microsoft Azure AIFundamentals",
        date: "2024年9月17日合格",
        category: "",
        score: "809点",
        status: '取得済み'
    }
]

export const timeline: TimelineItem[]=[
    {
        year: "2024年3月",
        event: "滋賀県立石部高等学校 卒業"
    },
    {
        year: "2024年4月",
        event: "京都デザイン&テクノロジー専門学校 入学"
    },
    {
        year: "2027年3月",
        event: "京都デザイン&テクノロジー専門学校 卒業見込み",
    }

]
