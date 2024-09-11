import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { MarkdownDocumentProps } from "@/components/Markdown/MarkdownDocument.types";
import 'github-markdown-css'
import styled from "styled-components";

const MarkdownBody = styled.div`
    background: inherit;
`

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
        console.log("key", key, "url", url);
        if (!url.startsWith("http")) {
            return baseUrl + decodeURI(url)
        }
        return url
    }

    return (
        <MarkdownBody className='markdown-body'>
            <Markdown urlTransform={urlTransform} skipHtml={true}>{mdText}</Markdown>
        </MarkdownBody>
    )
}