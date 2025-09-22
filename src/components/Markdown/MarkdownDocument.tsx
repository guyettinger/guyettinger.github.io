import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import 'github-markdown-css'
import { MarkdownDocumentProps } from "@/components/Markdown/MarkdownDocument.types";

export const MarkdownDocument = ({url, baseUrl}: MarkdownDocumentProps) => {
    const [mdText, setMdText] = useState('');

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) return response.text();
                else return Promise.reject("Didn't fetch text correctly");
            })
            .then((text) => {
                setMdText(text);
            })
            .catch((error) => console.error(error));
    });

    const urlTransform = (url: string, key: string, node: any) => {
        if (!url.startsWith("http")) {
            return baseUrl + decodeURI(url)
        }
        return url
    }

    return (
        <div className='markdown-body p-20'>
            <Markdown urlTransform={urlTransform} skipHtml={true}>{mdText}</Markdown>
        </div>
    )
}