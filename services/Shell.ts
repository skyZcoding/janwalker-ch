export function Shell(): any {
    const drive = [
        {
            name: "cv", active: true, subdirectories: [
                {
                    name: "contact", active: false, files: [
                        {
                            name: "info.txt", 
                            content: [
                                {
                                    line: "",
                                    color: ""
                            
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "projects", active: false, files: [
                        { name: "info.txt" }
                    ]
                },
                {
                    name: "education", active: false, files: [
                        { name: "info.txt" }
                    ]
                },
                {
                    name: "experience", active: false, files: [
                        { name: "info.txt" }
                    ]
                },
            ]
        },
    ]

    function setActiveDirectory(fullPath: string): boolean {
        const pathParts = fullPath.split('/').filter(part => part !== '');

        function setActive(directories: any[], parts: string[]): boolean {
            if (parts.length === 0) return false;

            const [currentPart, ...remainingParts] = parts;

            for (const dir of directories) {
                if (dir.name === currentPart) {
                    if (remainingParts.length === 0) {
                        dir.active = true;
                        return true;
                    }
                    if (dir.subdirectories && setActive(dir.subdirectories, remainingParts)) {
                        return true;
                    }
                }
            }
            return false;
        }

        // Reset all directories to inactive
        function resetActive(directories: any[]): void {
            for (const dir of directories) {
                dir.active = false;
                if (dir.subdirectories) {
                    resetActive(dir.subdirectories);
                }
            }
        }
        
        if (directoryExists(fullPath)) {
            resetActive(drive);
            return setActive(drive, pathParts);
        }

        return false;
    }

    function directoryExists(fullPath: string): boolean {
        const pathParts = fullPath.split('/').filter(part => part !== '');

        function checkExistence(directories: any[], parts: string[]): boolean {
            if (parts.length === 0) return true;

            const [currentPart, ...remainingParts] = parts;

            for (const dir of directories) {
                if (dir.name === currentPart) {
                    if (remainingParts.length === 0) {
                        return true;
                    }
                    if (dir.subdirectories) {
                        return checkExistence(dir.subdirectories, remainingParts);
                    }
                }
            }
            return false;
        }

        return checkExistence(drive, pathParts);
    }

    function getActiveDirectory(): any {
        function findActive(directories: any[]): any {
            for (const dir of directories) {
                if (dir.active) {
                    return dir;
                }
                if (dir.subdirectories) {
                    const activeSubdir = findActive(dir.subdirectories);
                    if (activeSubdir) {
                        return activeSubdir;
                    }
                }
            }

            return null;
        }

        return findActive(drive);
    }

    function moveUp(): boolean {
        const activeDir = getActiveDirectory();
        if (!activeDir) return false;

        function findParent(directories: any[], target: any): any {
            for (const dir of directories) {
                if (dir.subdirectories && dir.subdirectories.includes(target)) {
                    return dir;
                }
                if (dir.subdirectories) {
                    const parent = findParent(dir.subdirectories, target);
                    if (parent) {
                        return parent;
                    }
                }
            }
            return null;
        }

        const parentDir = findParent(drive, activeDir);
        if (parentDir) {
            setActiveDirectory(parentDir.name);
            return true;
        }

        return false;
    }

    function writeLine(commandParts: Array<ShellCommandPart>): string {
        let line = ''

        commandParts.forEach(function (part){
            line += `<p class="font-mono" style="color:${part.color  ? part.color : '#ffffff'}">${part.command.replace(/\s/g, '&nbsp;')}</p>`
        })

        return line;
    }  

    return {
        writeLine,
        setActiveDirectory,
        getActiveDirectory,
        moveUp
    };
}

interface ShellCommandPart {
    command: string;
    color: string;
}