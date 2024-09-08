import React, {useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { useDispatch, useSelector } from "react-redux";
import { fetchSnippet } from "../../lib/features/snippets/snippetsService";
import { atob } from "js-base64";

const SnippetPreview = ({ path }) => {
    const [previewCode,setPreviewCode]  =  useState(false);
  const [formattedCode, setFormattedCode] = React.useState("");
  const { code, isLoading, isError, errorMessage } = useSelector(
    (state) => state.snippets
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const formattedCode = atob(code?.content ?? "");
    setFormattedCode(formattedCode);
    console.log(formattedCode);
  }, [code]);

    const viewCode = () => {
        if(!previewCode){
            setPreviewCode(true);
            dispatch(fetchSnippet(path));
        }
    }

  if (isError) {
    return <div>{errorMessage}</div>;
  }
  return (
    <div className="container-md">
        <button className="btn btn-secondary" onClick={viewCode} > view code</button>
      {previewCode && formattedCode && (
        <Highlight theme={themes.dracula} code={formattedCode} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="my-4" style={{ ...style, padding: "20px", borderRadius:"5px" }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </div>
  );
};
export default SnippetPreview;
