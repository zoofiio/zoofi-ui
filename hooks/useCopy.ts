//引入插件
import copy from 'copy-to-clipboard'
//引入usstate hook
import { useState } from 'react'
import { toast } from 'sonner'

//创建函数进行封装
const useCopy = () => {
  //声明状态
  const [isCopied, setIsCopied] = useState(false)
  //返回函数
  function copyTextToClipboard(text: string) {
    //拷贝
    copy(text)
    //设置成功状态
    setIsCopied(true)
    //0.5秒后返回状态
    setTimeout(() => setIsCopied(false), 500)
    toast.success('Copied!')
  }
  //返回状态和函数
  return { copyTextToClipboard, isCopied }
}

export default useCopy
