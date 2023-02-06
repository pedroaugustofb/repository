export const setLanguage = (language: string) => {
    localStorage.setItem('language', language);
    document.location.reload();
}

export const getLanguage = () => {
    return localStorage.getItem('language')
}

export const verifyPrefeerLanguage = () => {
    let language: string | null = localStorage.getItem('language')
    return language === null ? false : true;
}