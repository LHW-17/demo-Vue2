import { v4 as uuidv4 } from "uuid";
//使用uuid生成一个随机的字符串作为游客身份的标识
export const getUUID = () => {
  //先从本地存储获取，若无则创建并存放到本地存储
  let uuid_token = localStorage.getItem("UUIDTOKEN");
  if (!uuid_token) {
    uuid_token = uuidv4();
    localStorage.setItem("UUIDTOKEN", uuid_token);
  }
  return uuid_token;
};
