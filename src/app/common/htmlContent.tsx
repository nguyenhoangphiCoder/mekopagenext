import parseHTML from "html-react-parser";

export function HtmlContent({ content }: any) {
  try {
    return parseHTML(content);
  } catch {
    return null;
  }
}
