import { useEffect, useState } from "react"
import { Quote } from "../model/Quote"
import { starWarsQuotesService } from "../services/swQuotesService"

export type QuotesLoadingData = { isLoading: boolean, quotes: Quote[] }

type ProviderFn = (d: QuotesLoadingData) => JSX.Element

export function QuotesProvider({ children }: { children: ProviderFn }) {

    const [isLoading, setLoading] = useState(false)
    const [quotes, setQuotes] = useState<Quote[]>([])

    useEffect(() => {
        setLoading(true)
        starWarsQuotesService.getAll()
            .then((quotes) => {
                setQuotes(quotes)
            })
            .finally(() => setLoading(false))
    }, [])


    return children({ isLoading, quotes })
}