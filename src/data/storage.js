export const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
};

export const saveFavorite = (character) => {
    const existing = getFavorites();
    if (!existing.find(c => c.id === character.id)) {
        localStorage.setItem('favorites', JSON.stringify([...existing, character]));
    }
};

export const removeFavorite = (id) => {
    const existing = getFavorites();
    const updated = existing.filter(char => char.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updated));
};