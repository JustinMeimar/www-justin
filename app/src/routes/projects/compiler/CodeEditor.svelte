<script>
	// @ts-nocheck
    import { onMount, onDestroy } from 'svelte';
    export let code = '';
    let editor;
    let jar;

    onMount(async () => {
        if (typeof window !== 'undefined') {

            const { CodeJar } = await import('codejar');
            const Prism = await import('prismjs');

            jar = CodeJar(editor, (editor) => {
                const code = editor.textContent;
                editor.innerHTML = Prism.highlight(code, Prism.languages.js, 'javascript');
            });

            jar.updateCode(code);
        }
    });

    $: {
        if (code) {
            if (typeof window !== 'undefined') {
                jar.updateCode(code);
                editor.innerHTML = Prism.highlight(code, Prism.languages.js, 'javascript')
            }
        }
    }
    
    onDestroy(() => {
        if (jar) {
            jar.destroy();
        }
    });

</script>

<style>
    .editor {
		flex-grow: 1;
        border: 1px solid black;
        font-family: 'Fira Code', monospace;
        padding: 10px;
        margin: 10px 0;
        overflow: auto;
        background-color: #ebebeb;
        white-space: pre;
        outline: none;
    }
</style>

<div bind:this={editor} class="editor" contenteditable></div>