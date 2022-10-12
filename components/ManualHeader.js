import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    const { enableWeb3, account } = useMoralis()
    return (
        <div>
            {account ? (
                <div>
                    Connectedto {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                    }}
                >
                    Connect!
                </button>
            )}
        </div>
    )
}
