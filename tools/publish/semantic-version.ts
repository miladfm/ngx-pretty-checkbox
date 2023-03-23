import { terminalConfirm, terminalInput, terminalListSelection } from "./terminal-interaction";

function stringVersionToNumber(version: string) {
    return version.split('.').map(v => parseInt(v));
}


function validateStringVersion(versionString: string) {
    const version = stringVersionToNumber(versionString);
    return version.length === 3 && version.every(v => !isNaN(v))
}


function getVersionFromSuggestions(currentStringVersion: string): Promise<string | 'Custom'> {

    const currentVersion = stringVersionToNumber(currentStringVersion);

    const newVersionSuggestions = {
        patch: `${currentVersion[0]}.${currentVersion[1]}.${currentVersion[2] + 1}`,
        minor: `${currentVersion[0]}.${currentVersion[1] + 1}.0`,
        major: `${currentVersion[0] + 1}.0.0`,
    }

    return terminalListSelection(
        `Select the new version (Current version is ${currentStringVersion})`,
        [
            { value: newVersionSuggestions.patch, text: newVersionSuggestions.patch },
            { value: newVersionSuggestions.minor, text: newVersionSuggestions.minor },
            { value: newVersionSuggestions.major, text: newVersionSuggestions.major },
            { value: 'Custom', text: 'Custom' },
        ]
    )
}

function getCustomVersion() {

    const validator = (newStringVersion: string) => {
        const isVersionValid = validateStringVersion(newStringVersion);
        return isVersionValid ? true : 'Version is invalid (Example: 1.2.4)'
    }

    return terminalInput(`Enter the new version`, validator);
}

function getConfirmation(newStringVersion: string) {
    return terminalConfirm(`Are you sure to publish version ${newStringVersion}?)`, false);
}

export async function getNewSemanticVersion(currentStringVersion: string): Promise<string | undefined> {

    let versionString: string | 'Custom' = await getVersionFromSuggestions(currentStringVersion);

    if (versionString === 'Custom') {
        versionString = await getCustomVersion();
    }

    return getConfirmation(versionString)
        .then(confirmation => {

            if (confirmation) {
                return versionString;
            }
        });
}