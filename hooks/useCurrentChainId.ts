import { getCurrentChainId, setCurrentChainId } from "@/config/network";
import { useChainId } from "wagmi";

export function useCurrentChainId(){
   const chainId = useChainId()
   setCurrentChainId(chainId)
   return getCurrentChainId()
}