# 🚀 Smart Contract Deployment & Next.js Integration

## 📌 Overview
This project walks through deploying a smart contract on the **Ethereum Sepolia testnet** and building a **Next.js app** to interact with it using [Viem](https://viem.sh/). Learn by watching youtube videos, asking ai, and reading documentation.

Feel free to vibe code, but look at documentation and understand your code before you submit. This will help you in the future to debug when LLM aren't smart enough to fix bugs. 

This project will be due 10/3. If you do not submit this project, you may be removed from the club. If there is an emergency reach out to RuoHan who may give you an extension.

The metric for success is a deployed contract that is contains a string and a deployed website displaying the string.

Since this is a simple project, I will likely not provide office hours, but this may change depending on demand, but reach out for any questions.
---

## 🛠 Prerequisites
- [MetaMask](https://metamask.io/) wallet installed
- Node.js (v18+ recommended)
- GitHub account
- [Alchemy](https://alchemy.com/) or [Infura](https://infura.io/) account (for RPC key)
- **IDE**: Download [Cursor](https://cursor.sh/) or [VS Code](https://code.visualstudio.com/)

---

## ⚡ Steps

### 1. Clone Repo
Fork the repo and then clone this on your github
```bash
git clone git@github.com:<your-username>/<your-forked-repo>.git
cd <your-forked-repo>
````

### 2. Follow on X

REQUIRED Follow me on [X (@RuohanDeQuant)](https://x.com/RuohanDeQuant).

---

### 3. Deploy Smart Contract

1. Open [Remix IDE](https://remix.ethereum.org/).
2. Copy the smart contract from this repo.
3. Copy the smart contract from this repo.
3. Compile & deploy to **Sepolia** using MetaMask.
4. Save the **contract address** and **ABI**.
5. Leave a message about what merch we should get (Quarterzip, Hoodie, Polo)

---

### 4. Get Testnet ETH

* Add **Sepolia testnet** in MetaMask.
* Use a [Sepolia faucet](https://sepoliafaucet.com/).
* If needed, ask @ruohanchen on Telegram for funds. (You'll have to give me your public address)

---

### 5. Create Next.js App

```bash
npx create-next-app@latest my-dapp
cd my-dapp
```

Install dependencies:

```bash
npm install viem
```

Optional (wallet connection):

```bash
npm install wagmi
```

---

### 6. Get RPC API Key

* Sign up at [Alchemy](https://alchemy.com/) (or Infura).
* Create a Sepolia app.
* Copy your **HTTP RPC URL**.

Create a `.env.local` file:

```env
NEXT_PUBLIC_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/your-api-key"
NEXT_PUBLIC_CONTRACT_ADDRESS="0xYourContractAddress"
```

---

### 7. Integrate Viem

Here’s a lightweight setup:

```ts
// utils/client.ts
import { createPublicClient, http } from 'viem'
import { sepolia } from 'viem/chains'

export const client = createPublicClient({
  chain: sepolia,
  transport: http(process.env.NEXT_PUBLIC_RPC_URL!),
})
```

And a contract call:

```ts
import { client } from './utils/client'
import contractAbi from './abi.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!

export async function readSomething() {
  const data = await client.readContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'yourFunctionName',
  })
  console.log("✨ Contract says:", data)
}
```

---

### 8. Version Control

```bash
git checkout -b feature/contract-integration
git add .
git commit -m "Integrate contract with Viem ✨"
git push origin feature/contract-integration
```

Open a Pull Request → Review → Merge into **main**.

---

## 🚀 Deploy to Vercel

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/).
3. Click **New Project** → Import your repo.
4. Add environment variables (`NEXT_PUBLIC_RPC_URL`) in **Project Settings → Environment Variables**.
5. Deploy with one click.

Now your dApp is live on a free Vercel domain 🎉

---

## ✅ Milestones

* [ ] Repo cloned & environment ready
* [ ] Smart contract deployed on Sepolia
* [ ] Next.js app scaffolded
* [ ] RPC key integrated with Viem
* [ ] Smart contract interaction successful
* [ ] PR created & merged
* [ ] App deployed on Vercel 🚀

---

## 👨‍💻 Pro Tips

* Use **Cursor/VS Code Copilot vibes**: highlight, auto-complete, let the AI help.
* Don’t panic if it breaks — you learn more fixing errors than from perfect runs.
* Push early, push often — small commits > giant commits.
* Since this is a simple project, I will likely not provide office hours, but this may change depending on demand

---
