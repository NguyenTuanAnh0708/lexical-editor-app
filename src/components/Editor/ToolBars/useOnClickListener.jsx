import { FORMAT_TEXT_COMMAND } from "lexical";
import { eventTypes } from "./toolbarIconsList";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
const useOnClickListener = () => {
    const [editor] = useLexicalComposerContext();
    const onClick = (event) => {
        console.log("event is ", event);
        switch (event) {
            case eventTypes.formatBold: {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
                break
            }
            case eventTypes.formatItalic: {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
                break
            }
            case eventTypes.formatUnderline: {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
                break
            }
        }
    };

    return { onClick };
};

export default useOnClickListener;