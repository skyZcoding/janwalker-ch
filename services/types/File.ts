import type ShellCommandPart from "./ShellCommandPart";

export default interface File {
  uid: string;
  name: string;
  content: Array<ShellCommandPart[]>;
  permissions: string;
  modifiedDate: Date;
}
