import { DateTime } from "luxon";
import { LocaleType } from "src/locales/types";

export function clearAllStorage() {
    localStorage.clear();
    sessionStorage.clear();
}

export const isRequestSuccessful = (response: any) => {
    return (
        response &&
        response.status >= 200 &&
        response.status < 300 &&
        (!response?.data || response?.data?.status === "success")
    );
};

export function flagIcon(value: string) {
    if (["vietnamese", "vi"].includes(value)) return "🇻🇳";
    if (["english", "en"].includes(value)) return "🇬🇧";
    if (["japanese", "jp"].includes(value)) return "🇯🇵";

    return "🏳️";
}

export function getUserLocale() {
    return "en";
    // const userLang = navigator.language;

    // if (!userLang) return "vi";

    // if (["en", "en-US"].includes(userLang)) return "en";
    // if (["vi", "vi-VN"].includes(userLang)) return "vi";
    // // if (["ja", "ja-JP"].includes(userLang)) return "jp";

    // return "vi";
}

export const getLocale = (locales?: string): LocaleType => {
    const lang = locales || localStorage.getItem("language") || getUserLocale();
    if (lang && ["en", "vi"].includes(lang)) {
        return lang as LocaleType;
    }
    return "en";
};

export const randomColor = () => {
    let color;
    do {
        color = Math.floor(Math.random() * 16777215).toString(16);
    } while (calculateBrightness(color) > 200);
    return `#${color}`;
};

const calculateBrightness = (hexColor: string) => {
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
};

export const JSONtoFormData = (obj: any) => {
    const formData = new FormData();
    Object.keys(obj).forEach((key) => {
        formData.append(key, obj[key]);
    });
    return formData;
};

export const toArray = <T>(value: T | T[]): T[] => {
    if (value === undefined || value === null) return [];
    if (value instanceof Array) return value;
    return [value];
};

export const toCapitalize = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
};

export const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getEmptyFile = (fileName: string): File => {
    const blob = new Blob([fileName], { type: "text/plain" });
    const file = new File([blob], `${fileName}.txt`, { type: "text/plain" });
    return file;
};

export const createFileWithContent = (fileName: string, content: string): File => {
    const blob = new Blob([content], { type: "text/plain" });
    const file = new File([blob], `${fileName}.txt`, { type: "text/plain" });
    return file;
};

export const timeAgo = (dateString: string, locale = "en") => {
    const date = DateTime.fromFormat(dateString, "dd/MM/yyyy HH:mm:ss").toJSDate();
    const now = new Date();
    const timeDifference = now.getTime() - date.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) {
        return locale === "en" ? "just now" : "vừa xong";
    } else if (minutes === 1) {
        return locale === "en" ? "1 min ago" : "1 phút trước";
    } else if (minutes < 60) {
        return locale === "en" ? `${minutes} mins ago` : `${minutes} phút trước`;
    } else if (hours === 1) {
        return locale === "en" ? "1 hour ago" : "1 giờ trước";
    } else if (hours < 24) {
        return locale === "en" ? `${hours} hours ago` : `${hours} giờ trước`;
    } else {
        return date.toLocaleDateString();
    }
};

export const downloadDataAsCSV = (data: any[], fileName: string) => {
    const csvContent = "data:text/csv;charset=utf-8," + data.map((row) => row.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.style.opacity = "0";
    link.style.position = "absolute";
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const downloadLink = (url: string, fileName: string) => {
    const link = document.createElement("a");
    link.style.opacity = "0";
    link.style.position = "absolute";
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const dataToCSVFile = (
    data: {
        [key: string]: string | number | boolean;
    }[],
    fileName: string
): File => {
    const csvContent =
        "data:text/csv;charset=utf-8," + data.map((row) => Object.values(row).join(",")).join("\n");
    return new File([csvContent], fileName, { type: "text/csv" });
};

export const downloadFile = (file: File, fileName: string) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

export const getAttachmentNameFromURL = (url: string) => {
    const decodeURL = decodeURIComponent(url);
    const fileDetail = decodeURL.split("/").pop();
    const fileName = fileDetail?.includes("_") ? fileDetail?.split("_").shift() : "";
    const ext = fileDetail?.includes(".") ? fileDetail?.split(".").pop() : "";
    if (!fileName) return "";
    if (!ext) return `${fileName}`;
    return `${fileName}.${ext}`;
};

export const redirectToMobileApp = () => {
    const isAlertOpen = localStorage.getItem("redirectToMobileApp");
    if (isAlertOpen) return;
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIos = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /android/i.test(userAgent);

    if (!isIos && !isAndroid) return;

    localStorage.setItem("redirectToMobileApp", "true");
    window.location.href = "app://portfolio_web/";
};

export const downloadContent = ({ fileName, content }: { fileName: string; content: string }) => {
    const blob = new Blob([content]);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
};

export const repeatString = (str: string, times: number) => {
    return new Array(times).fill(str).join("");
};

export const objectToArr = (
    obj: Record<string, number>
): {
    title: string;
    value: number;
}[] => {
    return Object.entries(obj).map(([title, value]) => ({ title, value }));
};

export const paramsToURLSearchParams = (params: Record<string, any>) => {
    const urlParams = new URLSearchParams();
    for (const key in params) {
        if (params[key] instanceof Array) {
            for (const value of params[key]) {
                urlParams.append(key, value);
            }
        } else if (params[key]) {
            urlParams.append(key, params[key]);
        }
    }
    return urlParams.toString();
};
