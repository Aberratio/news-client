import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  value: {
    code: string;
    language: string;
  };
}

export const CodeBlock = ({ value }: CodeBlockProps) => {
  const { code, language } = value;
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      showInlineLineNumbers={true}
      language={language}
      style={tomorrowNightBright}
      customStyle={{
        padding: "1em",
        marginBottom: "2em",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};
