import { useEffect } from "react"

// hook for dynamic title 
const useTitle = title => {
    useEffect(() => {
        window.document.title = `${title} ~ T-Task`;
    }, [title])
}

export default useTitle;