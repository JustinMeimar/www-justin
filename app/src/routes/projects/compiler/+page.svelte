<script>
    import Footer from '../../Footer.svelte';
    import Navbar from '../../Navbar.svelte';
    import Editor from './Editor.svelte';

    import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav } from "@sveltestrap/sveltestrap";
    let editorContent = '';
    let llvmIRContent = '';
    let outputContent = '';

    let editorFontSize = 20;
    const fontSizes = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

    let defaultProgram = "hello-world";
    const programs = ["hello-world", "fibonacci", "merge-sort", "generator"];
    let dropdownOpen = false;

    function clearOutput() {
        outputContent = '';
    }

    function selectProgram(program) {
        defaultProgram = program;
    }
</script>

<div class="component-body">
    <Navbar></Navbar>
    <div class="header">
        <div class="title">
            Compiler Explorer 
        </div>
    </div>
    <div class="area-container">
        <div class="editor-container">
            Program
            <div class="utility-bar">
                <Button color="primary">Run</Button>
                <Dropdown isOpen={dropdownOpen} toggle={() => dropdownOpen = !dropdownOpen}>
                    <DropdownToggle caret>
                        {defaultProgram}
                    </DropdownToggle>
                    <DropdownMenu>
                        {#each programs as program}
                            <DropdownItem on:click={() => selectProgram(program)}>
                                {program}
                            </DropdownItem>
                        {/each}
                    </DropdownMenu>
                </Dropdown>
                <input type="range" min="12" max="30" bind:value={editorFontSize} />
            </div>
            <textarea bind:value={editorContent} class="editor-textarea"></textarea>
        </div>
        <div class="ir-container">
            LLVM IR
            <div class="utility-bar">
                <Button color="secondary">Optimize</Button>
            </div>
            <!-- <Editor></Editor> -->
            <textarea bind:value={llvmIRContent} class="editor-textarea"></textarea>
        </div>
        <div class="output-container">
            Output
            <div class="utility-bar">
                <Button color="warning" on:click={clearOutput}>Clear</Button>
            </div>
            <textarea bind:value={outputContent} class="editor-textarea"></textarea>
        </div>
    </div>
    <Footer></Footer>
</div>

<style>
    .component-body {
        /* color: #E0E0E0; */
        display: flex;
        flex-direction: column;
        height: 100vh;
        min-width: 100%;
        margin: 0;
        padding: 0;
        /* border: 1px solid white; */
        /* background-color: #1A1A1A; */
    }
    .area-container {
        display: flex;
        flex: 1;
        min-width: 100%;
    }
    .utility-bar {
        display: flex;
    }
    .editor-container, .ir-container, .output-container {
        flex: 1;
        overflow: hidden; 
        border: 1px solid black;
        padding: 10px;
    }
    .title {
        font-size: 40px;
        font-weight: 200;
    } 
    .editor-textarea {
        width: 100%;
        color: #E0E0E0; 
        padding: 10px;
        resize: none;
        font-family: 'Consolas', 'Monaco', monospace;
        font-size: 16px;
        /* background-color: #1A1A1A; */
        /* border: 2px solid #C084FC; */
    } 
</style>

<!-- /* 
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
    */
 -->
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