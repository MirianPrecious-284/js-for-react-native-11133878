function createUserProfiles(names, modifiedNames) {
    if (!Array.isArray(names) || !Array.isArray(modifiedNames)) {
        throw new Error("Both inputs must be arrays");
    }

    if (names.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }
    const userProfiles = [];
    for (let i = 0; i < names.length; i++) {
        if (typeof names[i] !== 'string' || typeof modifiedNames[i] !== 'string') {
            throw new Error("Both arrays must contain only strings");
        }
        const userProfile = {
            id: i + 1,
            originalName: names[i],
            modifiedName: modifiedNames[i]
        };
        userProfiles.push(userProfile);
    }
    return userProfiles;
}
