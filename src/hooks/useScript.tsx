import { useEffect } from 'react';

const useScript = (url: string , placement?: string) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;

        if (placement !== undefined) script.setAttribute('aw-placement', placement);

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;