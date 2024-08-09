import { USBSymbol } from "@/config/swap"

export function getAssetName(str: string) {
    if (str.toLowerCase() === 'eth') {
        return 'ETH'
    }
    else if (str.toLowerCase() === 'ethx') {
        return 'ETHx'
    }
    else if (str.toLowerCase() === 'wbtc') {
        return 'WBTC'
    }
    else if (str.toLowerCase() === 'wbtcx') {
        return 'WBTCx'
    }
    else if (str.toLowerCase() === 'steth') {
        return 'stETH'
    }
    else if (str.toLowerCase() === 'stethx') {
        return 'stETHx'
    }
    else if (str.toLowerCase() === USBSymbol.toLowerCase()) {
        return USBSymbol
    }
    else {
        return 'ETH'
    }
}