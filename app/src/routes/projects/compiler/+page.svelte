<script lang="ts">
    import { onMount } from "svelte";
    import Footer from '../../Footer.svelte';
    import Navbar from '../../Navbar.svelte';
    import CodeEditor from './CodeEditor.svelte';
    import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav } from "@sveltestrap/sveltestrap";
    import { baseUrl } from '$lib/config';

    export let editorContent : string = '';
    export let llvmIRContent : string = '';
    export let outputContent : string = '';
    let dropdownOpen : boolean = false;
    let currentProgram : string = "helloworld";

    const programs : string[] = [
        "break_continue", "helloworld", "tuple",
        "control_flow", "iterator", "type_promotion",
        "fibonnaci", "matrix", "type_qualifier",
        "filter", "mergesort", "vector",
        "forward_decl", "pass_by_reference",
        "generator", "quicksort"
    ]; 

    const clearOutput = () => { outputContent = '';}

    async function selectProgram(program: string) {

        const response = await fetch(
            `/programs/input_compiler_${program}.txt`
        ); 
        if (response.ok) {
            currentProgram = program;
            editorContent = await response.text();
        } else {
            console.error('Failed to fetch program');
        }
    } 

    const runProgram = async () : Promise<any> => {
        const response = await fetch(`${baseUrl}/api/compiler/run`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "program": `
                    typedef integer int;

                    procedure main() returns integer {
                        string sayHello = "hello";
                        2-> std_output;
                        1-> std_output;
                        return 0;
                    }
                `
            })
        }).then(async response => {
            const responseData = await response.json();
            console.log(responseData);
        }).catch(error => {
            console.log("error:", error); 
        });
    }
    
    onMount(async () => {
        selectProgram(currentProgram);
    });

</script>

<div class="component-body">
    <Navbar></Navbar>
    <div class="header">
        <div class="title">
            Compiler Explorer 
        </div>
    </div>
    <div class="editor"></div>
    <div class="area-container">
        <div class="editor-container">
            Program
            <div class="utility-bar">
                <Button color="primary" on:click={runProgram}>Run</Button>
                <Dropdown isOpen={dropdownOpen} toggle={() => dropdownOpen = !dropdownOpen}>
                    <DropdownToggle caret>
                        {currentProgram}
                    </DropdownToggle>
                    <DropdownMenu>
                        {#each programs as program}
                            <DropdownItem on:click={() => selectProgram(program)}>
                                {program}
                            </DropdownItem>
                        {/each}
                    </DropdownMenu>
                </Dropdown>
            </div>
            <CodeEditor code={editorContent}/>
        </div>
        <div class="ir-container">
            LLVM IR
            <div class="utility-bar">
                <Button color="secondary">Optimize</Button>
            </div>
            <CodeEditor code={llvmIRContent}/>
        </div>
        <div class="output-container">
            Output
            <div class="utility-bar">
                <Button color="warning" on:click={clearOutput}>Clear</Button>
            </div>
            <CodeEditor code{outputContent}/>
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
        overflow: auto;
        margin-bottom: 80px;
        padding-left: 40px;
        padding-right: 40px;
    }
    .utility-bar {
        display: flex;
    }
    .editor-container, .ir-container, .output-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden; 
        padding: 10px;
    }
    .header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title {
        font-size: 40px;
        font-weight: 300;
        text-align: center;
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