import type ShellCommandPart from "./ShellCommandPart";
import type Directory from "./Directory";

export default interface CommandLine {
  writeLine(commandParts: ShellCommandPart[]): string;
  setActiveDirectory(fullPath: string): boolean;
  getActiveDirectory(): Directory | null;
  moveUp(): boolean;
  getFileContent(fullPath: string): Array<ShellCommandPart[]> | null;
  createDirectory(directoryName: string): boolean;
  getDirectoryFullPath(uid: string): string | null;
  removeDirectory(directoryName: string): boolean;
  createFile(fileName: string): boolean;
  removeFile(fileName: string): boolean;
  getDirectoryFromFullPath(fullPath: string): Directory | null;
  addLineToFile(fullPath: string, line: ShellCommandPart[]): boolean;
  replaceFileContent(fullPath: string, newLine: ShellCommandPart[]): boolean;
  saveChanges(): void;
  initializeDrive(): void;
  reset(): void;
  calculateFileSize(fileUid: string): number | null;
  calculateDirectorySize(fullPath: string): number | null;
}
