<script>
    let editorContent = '';
    let llvmIRContent = '';
    let outputContent = '';

    let editorFontSize = 20;
    const fontSizes = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

    let defaultProgram = "hello-world";
    const programs = ["hello-world", "fibonacci", "merge-sort", "generator"];

    function clearOutput() {
        outputContent = '';
    }

</script>

Compiler Explorer
<div class="container">
    <div class="editor-container">
        Program
        <div class="utility-bar">
            <button> Run</button>
            <select bind:value={defaultProgram}>
                {#each programs as program}
                    <option value={program}>{program}</option>
                {/each}
            </select> 
            <input type="range" min="12" max="30" bind:value={editorFontSize} />
        </div>
        <textarea bind:value={editorContent} class="editor-textarea"></textarea>
    </div>
    <div class="ir-container">
        LLVM IR
        <div class="utility-bar">
            <button> Optimize</button>
        </div>
        <textarea bind:value={llvmIRContent} class="editor-textarea"></textarea>
    </div>
    <div class="output-container">
        Output
        <div class="utility-bar">
            <button on:click={clearOutput}>Clear</button>
        </div>
        <textarea bind:value={outputContent} class="editor-textarea"></textarea>
    </div>
</div>

<style>
    .container {
        display: flex;
        height: 100vh;
        width: 100vw;
    }

    .editor-container, .ir-container, .output-container {
        flex: 1;
        overflow: hidden;
        padding: 10px;
    }
    .utility-bar {
        min-height: 20px;
        border: 1px solid black;  
    }
    .editor-textarea {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        background-color: #1A1A1A;
        color: #E0E0E0;
        border: 4px solid #C084FC;
        padding: 10px;
        resize: none;
        font-family: 'Consolas', 'Monaco', monospace;
        font-size: 16px;
    }
</style>


<!--  Colors
    --deep-black: #0D0D0D;
    --muted-black: #1A1A1A;
    --hyper-purple: #C084FC;
    --soft-purple: #A267AC;
    --light-grey: #E0E0E0;
    --muted-grey: #BFBFBF;
    --bright-red: #FF5555;
    --bright-orange: #FFA500;
-->