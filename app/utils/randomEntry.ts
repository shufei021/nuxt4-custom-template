// 将以 randomEntry() 的形式可用（文件名驼峰式，无扩展名）
export default function (arr: Array<any>) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  