export interface letter {
    thai: string;
    latin: string;
    word: string;
    meaning: string;
    class: "mid" | "high" | "low1" | "low2";
    sound: "k" | "kH" | "ng" | "dj" | "tch" | "n" | "d" | "tH" | "m" | "t" | "pH" | "y" | "b" | "f" | "r" | "p" | "s" | "l" | "" | "H" | "w";
}

const consonants: letter[] = [
    {
        thai: "ก",
        latin: "ko kai",
        word: "ไก",
        meaning: "chicken",
        class: "mid",
        sound: "k"
    },
    {
        thai: "ข",
        latin: "kho khai",
        word: "ไข่",
        meaning: "egg",
        class: "high",
        sound: "kH"
    },
    {
        thai: "ฃ",
        latin: "kho khuat",
        word: "ขวด",
        meaning: "bottle",
        class: "high",
        sound: "kH"
    },
    {
        thai: "ค",
        latin: "kho khwai",
        word: "ควาย",
        meaning: "buffalo",
        class: "low1",
        sound: "kH"
    },
    {
        thai: "ฅ",
        latin: "kho khon",
        word: "คน",
        meaning: "person",
        class: "low1",
        sound: "kH"
    },
    {
        thai: "ฆ",
        latin: "kho ra-khang",
        word: "ระฆัง",
        meaning: "bell",
        class: "low1",
        sound: "kH"
    },
    {
        thai: "ง",
        latin: "ngo ngu",
        word: "งู",
        meaning: "snake",
        class: "low2",
        sound: "ng"
    },
    {
        thai: "จ",
        latin: "cho chan",
        word: "จาน",
        meaning: "plate",
        class: "mid",
        sound: "dj"
    },
    {
        thai: "ฉ",
        latin: "cho ching",
        word: "ฉิ่ง",
        meaning: "cymbals",
        class: "high",
        sound: "tch"
    },
    {
        thai: "ช",
        latin: "cho chang",
        word: "ช้าง",
        meaning: "elephant",
        class: "low1",
        sound: "tch"
    },
    {
        thai: "ซ",
        latin: "so so",
        word: "โซ่",
        meaning: "chain",
        class: "mid",
        sound: "s"
    },
    {
        thai: "ฌ",
        latin: "cho choe",
        word: "เฌอ",
        meaning: "tree",
        class: "low1",
        sound: "tch"
    },
    {
        thai: "ญ",
        latin: "yo ying",
        word: "หญิง",
        meaning: "woman",
        class: "low2",
        sound: "y"
    },
    {
        thai: "ฎ",
        latin: "do chada",
        word: "ชฎา",
        meaning: "headdress",
        class: "low2",
        sound: "d"
    },
    {
        thai: "ฏ",
        latin: "to patak",
        word: "ปฏัก",
        meaning: "goad",
        class: "low2",
        sound: "t"
    },
    {
        thai: "ฐ",
        latin: "tho than",
        word: "ฐาน",
        meaning: "base",
        class: "high",
        sound: "tH"
    },
    {
        thai: "ฑ",
        latin: "tho montho",
        word: "มณโฑ",
        meaning: "name of a princess",
        class: "low1",
        sound: "tH"
    },
    {
        thai: "ฒ",
        latin: "tho phuthao",
        word: "ผู้เฒ่า",
        meaning: "elder",
        class: "high",
        sound: "tH"
    },
    {
        thai: "ณ",
        latin: "no neen",
        word: "เณร",
        meaning: "novice monk",
        class: "low2",
        sound: "n"
    },
    {
        thai: "ด",
        latin: "do dek",
        word: "เด็ก",
        meaning: "child",
        class: "mid",
        sound: "d"
    },
    {
        thai: "ต",
        latin: "to tao",
        word: "เต่า",
        meaning: "turtle",
        class: "mid",
        sound: "t"
    },
    {
        thai: "ถ",
        latin: "tho thung",
        word: "ถุง",
        meaning: "sack",
        class: "high",
        sound: "tH"
    },
    {
        thai: "ท",
        latin: "tho thaHaan",
        word: "ทหาร",
        meaning: "soldier",
        class: "low1",
        sound: "tH"
    },
    {
        thai: "ธ",
        latin: "tho thong",
        word: "ธง",
        meaning: "flag",
        class: "high",
        sound: "tH"
    },
    {
        thai: "น",
        latin: "no nu",
        word: "หนู",
        meaning: "mouse",
        class: "low2",
        sound: "n"
    },
    {
        thai: "บ",
        latin: "bo baimai",
        word: "ใบไม้",
        meaning: "leaf",
        class: "mid",
        sound: "b"
    },
    {
        thai: "ป",
        latin: "po pla",
        word: "ปลา",
        meaning: "fish",
        class: "mid",
        sound: "p"
    },
    {
        thai: "ผ",
        latin: "pho phung",
        word: "ผึ้ง",
        meaning: "bee",
        class: "high",
        sound: "pH"
    },
    {
        thai: "ฝ",
        latin: "fo fa",
        word: "ฝา",
        meaning: "lid",
        class: "high",
        sound: "f"
    },
    {
        thai: "พ",
        latin: "pho phaan",
        word: "พาน",
        meaning: "phan",
        class: "low1",
        sound: "p"
    },
    {
        thai: "ฟ",
        latin: "fo fan",
        word: "ฟัน",
        meaning: "tooth",
        class: "high",
        sound: "f"
    },
    {
        thai: "ภ",
        latin: "pho sam phao",
        word: "สำเภา",
        meaning: "sailboat",
        class: "high",
        sound: "pH"
    },
    {
        thai: "ม",
        latin: "mo ma",
        word: "ม้า",
        meaning: "horse",
        class: "low2",
        sound: "m"
    },
    {
        thai: "ย",
        latin: "yo yak",
        word: "ยักษ์",
        meaning: "giant",
        class: "low2",
        sound: "y"
    },
    {
        thai: "ร",
        latin: "ro ruea",
        word: "เรือ",
        meaning: "boat",
        class: "low2",
        sound: "r"
    },
    {
        thai: "ล",
        latin: "lo ling",
        word: "ลิง",
        meaning: "monkey",
        class: "low2",
        sound: "l"
    },
    {
        thai: "ว",
        latin: "wo waen",
        word: "แหวน",
        meaning: "ring",
        class: "low2",
        sound: "w"
    },
    {
        thai: "ศ",
        latin: "so sala",
        word: "ศาลา",
        meaning: "pavilion",
        class: "high",
        sound: "s"
    },
    {
        thai: "ษ",
        latin: "so rue-si",
        word: "ฤๅษี",
        meaning: "hermit",
        class: "high",
        sound: "s"
    },
    {
        thai: "ส",
        latin: "so suea",
        word: "เสือ",
        meaning: "tiger",
        class: "low1",
        sound: "s"
    },
    {
        thai: "ห",
        latin: "ho hip",
        word: "หีบ",
        meaning: "chest, box",
        class: "high",
        sound: "H"
    },
    {
        thai: "ฬ",
        latin: "lo chu-la",
        word: "จุฬา",
        meaning: "kite",
        class: "low2",
        sound: "l"
    },
    {
        thai: "อ",
        latin: "o ang",
        word: "อ่าง",
        meaning: "basin",
        class: "mid",
        sound: ""
    },
    {
        thai: "ฮ",
        latin: "ho nokhuk",
        word: "นกฮูก",
        meaning: "owl",
        class: "mid",
        sound: "H"
    }
]

export default consonants
