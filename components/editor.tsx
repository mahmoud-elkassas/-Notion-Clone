"use client";

import { useTheme } from "next-themes";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";

import "@blocknote/mantine/style.css";



import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean; // Assuming this is used elsewhere
}

const Editor = ({
  onChange,
  initialContent,
  editable = true, // Default to true if not provided
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    try {
      const response = await edgestore.publicFiles.upload({ file });
      return response.url;
    } catch (error) {
      console.error("File upload failed:", error);
      throw error; // Propagate error if necessary
    }
  };

  // Use the correct options supported by useBlockNote
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
    // Ensure you replace with the correct callback for handling content changes
    // If a content change event is supported, use it here
  });

  // You might need to use an effect to handle editor content changes
  // Check if there is a way to subscribe to changes in the editor

  return (
    <div>
      <BlockNoteView

        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;



