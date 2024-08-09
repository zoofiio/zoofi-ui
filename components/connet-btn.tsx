import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useWindowSize } from 'react-use'

export default function ConnectBtn() {
  const size = useWindowSize(1024)
  return <ConnectButton chainStatus={size.width > 600 ? 'full' : 'icon'} showBalance={false} />
}
