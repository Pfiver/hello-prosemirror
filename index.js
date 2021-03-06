// import {Schema, DOMParser} from "prosemirror-model"
// import {EditorState} from "prosemirror-state"
// import {EditorView} from "prosemirror-view"
// import {schema} from "prosemirror-schema-basic"
// import {addListNodes} from "prosemirror-schema-list"
// import {exampleSetup} from "prosemirror-example-setup"

import {Schema, DOMParser} from "https://unpkg.com/prosemirror-model?module"
import {EditorState} from "https://unpkg.com/prosemirror-state?module"
import {EditorView} from "https://unpkg.com/prosemirror-view?module"
import {schema} from "https://unpkg.com/prosemirror-schema-basic?module"
import {addListNodes} from "https://unpkg.com/prosemirror-schema-list?module"
import {exampleSetup} from "https://unpkg.com/prosemirror-example-setup?module"

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks
})

window.view = new EditorView(document.querySelector("#editor"), {
  state: EditorState.create({
    doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
    plugins: exampleSetup({schema: mySchema})
  })
})
