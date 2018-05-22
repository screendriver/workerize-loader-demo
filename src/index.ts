import * as md5Worker from "./workers/md5.worker";

const { md5 } = (md5Worker as any)() as typeof md5Worker;

alert(md5);
