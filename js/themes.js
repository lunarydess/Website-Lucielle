import { hexToRgb } from "./util.js";

const constants = {
    palettes: {
        "Catppuccin": {
            "Latte": {
                "base": "#EFF1F5",
                "mantle": "#E6E9EF",
                "crust": "#DCE0E8",
    
                "text": "#4C4F69",
    
                "pink": "#EA76CB",
                "purple": "#8839EF",
                "red": "#D20F39",
                "light_red": "#E64553",
                "orange": "#FE640B",
                "yellow": "#DF8E1D",
                "green": "#40A02B",
                "light_green": "#179299",
                "blue": "#1E66F5",
                "light_blue": "#7287FD"
            },
            "Frappe": {
                "base": "#303446",
                "mantle": "#292C3C",
                "crust": "#232634",
    
                "text": "#C6D0F5",
    
                "pink": "#F4B8E4",
                "purple": "#CA9EE6",
                "red": "#E78284",
                "light_red": "#EA999C",
                "orange": "#EF9F76",
                "yellow": "#E5C890",
                "green": "#A6D189",
                "light_green": "#81C8BE",
                "blue": "#8CAAEE",
                "light_blue": "#85C1DC"
            },
            "Macchiato": {
                "base": "#24273A",
                "mantle": "#1E2030",
                "crust": "#181926",
    
                "text": "#CAD3F5",
    
                "pink": "#F5bDE6",
                "purple": "#C6A0F6",
                "red": "#ED8796",
                "light_red": "#EE99A0",
                "orange": "#F5A97F",
                "yellow": "#EED49F",
                "green": "#A6DA95",
                "light_green": "#8BD5CA",
                "blue": "#8AADF4",
                "light_blue": "#7DC4E4"
            },
            "Mocha": {
                "base": "#1E1E2E",
                "mantle": "#181825",
                "crust": "#11111b",
    
                "text": "#CDD6F4",
    
                "pink": "#F5C2E7",
                "purple": "#CBA6F7",
                "red": "#F38BA8",
                "light_red": "#EBA0AC",
                "orange": "#FAB387",
                "yellow": "#F9E2AF",
                "green": "#A6E3A1",
                "light_green": "#94E2D5",
                "blue": "#89B4FA",
                "light_blue": "#74C7EC"
            },
        },
        "Arc": {
            "Dark": {
                "base": "#282C34",
                "mantle": "#333842",
                "crust": "#2C313A",
    
                "text": "#ABB2BF",
    
                "pink": "#FF6AC1",
                "purple": "#D38AEA",
                "red": "#E06C75",
                "light_red": "#BE5046",
                "orange": "#DA8548",
                "yellow": "#E5D07b",
                "green": "#98C379",
                "light_green": "#87BF70",
                "blue": "#61AFEF",
                "light_blue": "#4DB5BD"
            },
    
            "Light": {
                "base": "#FAFAFA",
                "mantle": "#EFF0EB",
                "crust": "#F2F3F7",
    
                "text": "#545862",
    
                "pink": "#FF75A0",
                "purple": "#BF9EEE",
                "red": "#F47067",
                "light_red": "#F47067",
                "orange": "#FF9F50",
                "yellow": "#F7BB47",
                "green": "#6BC46D",
                "light_green": "#42B983",
                "blue": "#58A6FF",
                "light_blue": "#73D0FF"
            }
        },
        "Material": {
            "Oceanic": {
                "base": "#015970",
                "mantle": "#0a2540",
                "crust": "#0c3b62",
    
                "text": "#ECEFF4",
    
                "pink": "#FF3366",
                "purple": "#AD82EC",
                "red": "#FF5370",
                "light_red": "#F78C6C",
                "orange": "#FFCB6B",
                "yellow": "#FAB795",
                "green": "#C3E88D",
                "light_green": "#A3BE8C",
                "blue": "#82AAFF",
                "light_blue": "#80CBC4",
            },
            "Darker": {
                "base": "#1B262C",
                "mantle": "#0F4C75",
                "crust": "#3282B8",
    
                "text": "#F7F7FF",
    
                "pink": "#FEB236",
                "purple": "#6B5B95",
                "red": "#D81159",
                "light_red": "#DB504A",
                "orange": "#FFBC42",
                "yellow": "#F0F66E",
                "green": "#0EAD69",
                "light_green": "#07BEB8",
                "blue": "#0A9396",
                "light_blue": "#00B2CA",
            },
            "Lighter": {
                "base": "#EAEAEA",
                "mantle": "#DADADA",
                "crust": "#C4C4C4",
    
                "text": "#141414",
    
                "pink": "#FFB7C5",
                "purple": "#D7A9E3",
                "red": "#FF6363",
                "light_red": "#FF9A8B",
                "orange": "#FFD56D",
                "yellow": "#FAED26",
                "green": "#A8DF65",
                "light_green": "#5DD39E",
                "blue": "#7FD1B9",
                "light_blue": "#68E8A0",
            },
            "Palenight": {
                "base": "#292D3E",
                "mantle": "#444267",
                "crust": "#444267",
    
                "text": "#ECEFF4",
    
                "pink": "#FF5370",
                "purple": "#C792EA",
                "red": "#FF5370",
                "light_red": "#F07178",
                "orange": "#FFCB6B",
                "yellow": "#FFCB6B",
                "green": "#C3E88D",
                "light_green": "#AED581",
                "blue": "#82AAFF",
                "light_blue": "#80CBC4",
            },
            "Deep Ocean": {
                "base": "#0D2C54",
                "mantle": "#144668",
                "crust": "#1A5684",
    
                "text": "#CCE7E9",
    
                "pink": "#F77FBE",
                "purple": "#B041FF",
                "red": "#FF4E50",
                "light_red": "#FF6B6B",
                "orange": "#FFA07A",
                "yellow": "#FFD97D",
                "green": "#00CC99",
                "light_green": "#00E0B7",
                "blue": "#6D5DFC",
                "light_blue": "#1EAE98",
            },
            "Forest": {
                "base": "#0C351E",
                "mantle": "#1A512D",
                "crust": "#247035",
    
                "text": "#E6F1F2",
    
                "pink": "#FF80AB",
                "purple": "#8E44AD",
                "red": "#FF5252",
                "light_red": "#FF7F7F",
                "orange": "#FFB74D",
                "yellow": "#FFEE58",
                "green": "#2ECC71",
                "light_green": "#2BD6A6",
                "blue": "#3498DB",
                "light_blue": "#5BC0EB",
            },
            "Sky Blue": {
                "base": "#2C3E50",
                "mantle": "#3F5772",
                "crust": "#4D6E88",
    
                "text": "#EAECEE",
    
                "pink": "#FF6B6B",
                "purple": "#A37ACC",
                "red": "#FF7F50",
                "light_red": "#FF8C68",
                "orange": "#FFAB70",
                "yellow": "#FFD570",
                "green": "#1ABC9C",
                "light_green": "#20C9A6",
                "blue": "#3498DB",
                "light_blue": "#5BC0DE",
            },
            "Sandy Beach": {
                "base": "#FFF1E6",
                "mantle": "#FFD9B3",
                "crust": "#FFC196",
    
                "text": "#4A4A4A",
    
                "pink": "#FF7675",
                "purple": "#D6A2E8",
                "red": "#FDAC53",
                "light_red": "#FFC85B",
                "orange": "#F39C12",
                "yellow": "#FFD200",
                "green": "#91E763",
                "light_green": "#A2DE67",
                "blue": "#69C9D0",
                "light_blue": "#5ECCDD",
            },
            "Volcano": {
                "base": "#1C1116",
                "mantle": "#452B30",
                "crust": "#752F35",
    
                "text": "#ECEBE4",
    
                "pink": "#FF7582",
                "purple": "#D5A5D1",
                "red": "#FF3F34",
                "light_red": "#FF6F59",
                "orange": "#FF974F",
                "yellow": "#FFD166",
                "green": "#00818A",
                "light_green": "#00A69D",
                "blue": "#1B9AAA",
                "light_blue": "#6AB187",
            },
            "Space": {
                "base": "#2B2D42",
                "mantle": "#3C415C",
                "crust": "#495A75",
    
                "text": "#D9F0FF",
    
                "pink": "#FF6A88",
                "purple": "#D16DFF",
                "red": "#FF7171",
                "light_red": "#FF8E8E",
                "orange": "#FFAF7B",
                "yellow": "#FFD066",
                "green": "#76E3D6",
                "light_green": "#7EE8FA",
                "blue": "#3282B8",
                "light_blue": "#74B9FF",
            }
        }
    }
};

export let current = constants.palettes["Arc"]["Dark"];

export async function init() {
    // TODO: ... | add theme cookie
    set("Catppuccin", "Mocha");
    update();
};

export async function set(theme, variant) {
    current = constants.palettes[theme][variant];
};

export async function update() {
    document.documentElement.style.setProperty('--background-color', current.base);
    for (let key in current) {
        document.documentElement.style.setProperty(`--${key}`, hexToRgb(current[key]).rgb);
    }
};
