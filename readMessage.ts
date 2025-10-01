import { client } from './utils/client'
import contractAbi from './abi.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!

export async function readSomething() {
  const data = await client.readContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'getMessage',
  })
  console.log("✨ Contract says:", data)
}