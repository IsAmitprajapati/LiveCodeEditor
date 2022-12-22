import React, { useEffect, useRef, useState } from "react";
import { basicSetup, EditorView, minimalSetup } from "codemirror"
import { markdown } from "@codemirror/lang-markdown"
import { EditorState, Compartment } from "@codemirror/state"

import { javascript } from "@codemirror/lang-javascript"
import { python } from "@codemirror/lang-python"
import { html } from "@codemirror/lang-html"
import { json } from "@codemirror/lang-json"
import { php } from "@codemirror/lang-php"
import { rust } from "@codemirror/lang-rust"
import { sql } from "@codemirror/lang-sql"
import { xml } from "@codemirror/lang-xml"
import { css } from "@codemirror/lang-css"

import {CompletionContext} from "@codemirror/autocomplete"


import { oneDark, oneDarkTheme, oneDarkHighlightStyle } from "@codemirror/theme-one-dark"
import { dracula } from '@uiw/codemirror-theme-dracula';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { androidstudio } from '@uiw/codemirror-theme-androidstudio';
import { abcdef } from '@uiw/codemirror-themes-all';
import { materialDark, materialLight } from '@uiw/codemirror-theme-material';
import { githubLight, githubDark } from '@uiw/codemirror-theme-github';
import { bespin } from '@uiw/codemirror-theme-bespin';

const optionTheme = [
  oneDark,
  dracula,
  androidstudio,
  abcdef,
  materialDark,
  materialLight,
  githubLight,
  githubDark,
  bespin


]



const Editor = () => {
  const editorRef = useRef(null);
  const [editorValue,setEditorValue] = useState('')
  const [codemirrorCode,setCodemirrorCode] = useState()

  // console.log(editorRef.value)
  // useEffect(()=>{
  //   setEditorValue(editorRef.value)
  // },[editorValue])
  console.log(editorValue)

  useEffect(() => {
    let view = new EditorView({
      state: EditorState.create({
        doc : "console.log('Amit Prajapai')\n",
        extensions: [
          tokyoNight,
          basicSetup, 
          javascript({ jsx: true })
          ,python()
          ,html(),
          json(),
          php(),
          rust(),
          sql(),
          xml(),
          css(),
          EditorView.updateListener.of(function(e){
            setEditorValue(e.state.doc.toString())
          })
        ],

      }),
      parent: editorRef.current
    })

    return () => view.destroy();
  }, [])
  return (
    <div className="relative ">
      <div className="h-screen  overflow-y-auto">
        <div ref={editorRef} className=" border-none outline-none w-full h-screen "></div>
      </div>
    </div>
  )
}

export default Editor