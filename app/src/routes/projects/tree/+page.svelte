<script lang="ts">
    import Footer from '../../Footer.svelte';
    import Navbar from '../../Navbar.svelte';
	import Katex from "./Latex.svelte"
    
    type Point = {
        x: number,
        y: number,
    };
    type Line = {
        p1: Point,
        p2: Point
    };

    type Node = {
        id: number,
        dist: number,
        height: number,
        rowId: number,
        point: Point | null
        parentPoint: Point | null
    };

    // tree parameters
    let n : number = 27;
    let c : number = 3;
    let m : number = 0.5;
    var stochasticLevel = 1; 
    const SCALE_FACTOR = 1; 
    // branch structures
    let lines : Line[] = [];
    let dfsNodeArr : Node[] = [];

    const transform = (attatchPoint: Point, node: Node) => {
        var theta: number;
        var thetaUnit: number = Math.PI /(c+1);
        if (node.height == 0) {
            theta = Math.PI / 2;
        } else {
            theta = thetaUnit * (node.rowId % c + 1);
            if (stochasticLevel > 1) {
                theta += (Math.random() -0.5) * 1 / stochasticLevel;
            }
        } 

        let delta_x = node.dist * Math.cos(theta) * SCALE_FACTOR;
        let delta_y = node.dist * Math.sin(theta) * SCALE_FACTOR; 
        if (stochasticLevel > 1) {
            delta_x += (Math.random() - 0.5) * stochasticLevel;
            delta_y += (Math.random() - 0.5) * stochasticLevel;
        }
        let newPoint: Point = {
            x: attatchPoint.x + (delta_x), 
            y: attatchPoint.y - (delta_y), 
        };
        node.parentPoint = attatchPoint;
        node.point = newPoint;
    }
    
    const initializeNodeCoords = (nodeMap: Node[]) => {

        const root : Point = {x: 300, y: 350};
        let newNodes: Node[] = []; 
        let stack: Node[] = [];
        let rootNode: Node = {
            id: 0, dist: -1, 
            height: -1, rowId: 0, 
            point: root, parentPoint: null
        };

        let attatchNode: Node = rootNode;
        let prevNode: Node = rootNode;
        stack.push(rootNode); // push root
        nodeMap.map(node => {
        
            // manage stack 
            if (node.height > prevNode.height) {
                stack.push(prevNode);
            } else if (node.height < prevNode.height) {
                let diff = prevNode.height - node.height;
                for (i = 0; i < diff; i++) {
                    stack.pop();
                }
            }
            // assign attatch node
            attatchNode = stack[stack.length -1]; 
            if (attatchNode.point) {
                transform(attatchNode.point, node);
                newNodes.push(node);
            }
            prevNode = node;    
        });
        newNodes.map(node => {
            if (node.parentPoint && node.point) {
                let line: Line = {p1: node.parentPoint, p2: node.point};
                lines.push(line);
            }
        })
    }

    let i = 0;
    let rowMap: { [key: string]: number } = {};
    const growTree = (n: number, h: number = 0) => {
        const heightKey = h.toString();
        // base case 
        if (n <= 1) {
            return n;
        }  
        if (rowMap[heightKey]) {
            rowMap[heightKey]++;
        } else {
            rowMap[heightKey] = 1;
        } 
        
        let node: Node = {
            id: i+1, dist: n, 
            height: h, rowId: rowMap[heightKey],
            point: null, parentPoint: null 
        }
         
        dfsNodeArr.push(node);
        i++;

        // No Metaprogramming in Javascript, loops no good :(
        if (c == 1) {
            growTree(n*m, h+1);
        } else if (c == 2) {
            growTree(n*m, h+1);
            growTree(n*m, h+1);
        } else if (c == 3) {
            growTree(n*m, h+1);
            growTree(n*m, h+1);
            growTree(n*m, h+1);
        } else if (c == 4) {
            growTree(n*m, h+1);
            growTree(n*m, h+1);
            growTree(n*m, h+1);
            growTree(n*m, h+1);
        } else if (c == 5) {
            growTree(n*m, h+1);
            growTree(n*m, h+1);
            growTree(n*m, h+1);
            growTree(n*m, h+1);
            growTree(n*m, h+1);
        }
    }

    $: {
        if (n || c || m || stochasticLevel) {
            i = 0;
            dfsNodeArr = [];
            lines=[];
            growTree(n);
            initializeNodeCoords(dfsNodeArr);
        }
    }
 
    let zoomLevel = 3;
    let viewBox = {
        x: 0,
        y: 0,
        width: 600,
        height: 600
    };

    let isDragging = false;
    let startX: number, startY: number;

    function startDrag(event: MouseEvent) {
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
    }

    function onDrag(event: MouseEvent) {
        if (isDragging) {
            const dx = (event.clientX - startX) * 1/zoomLevel;
            const dy = (event.clientY - startY) * 1/zoomLevel;
            viewBox.x -= dx;
            viewBox.y -= dy;
            startX = event.clientX;
            startY = event.clientY;
        }
    }

    function endDrag() {
        isDragging = false;
    }

    $: {
        let midX = viewBox.width / 2 + viewBox.x;
        let midY = viewBox.height / 2 + viewBox.y;
        viewBox.width = 600 / zoomLevel;
        viewBox.height = 600 / zoomLevel;
        viewBox.x = midX - viewBox.width / 2;
        viewBox.y = midY - viewBox.height / 2;
    }
    
    $: latexString = `T(n) = ${c}T(${m}n)`;
    $: coefficientLatexString = `c: ${c}`;
    $: fractionLatexString = `m: ${m}`;
    $: nLatexString = `T(${n})`;

</script>
<Navbar></Navbar>
<div class="project-container">
    <div class="project-title">
        Recurrence Tree Generator
    </div> 
    <div class="project-latex">
        <Katex math={latexString}/>
    </div>
    <div class="project-controls">
        <Katex math={coefficientLatexString}></Katex><input type="range" min="1" max="5" bind:value={c} />
        <Katex math={fractionLatexString}></Katex><input type="range" min="0.125" max="0.5" step="0.125" bind:value={m} />
        <Katex math={nLatexString}></Katex><input type="range" min="2" max="256" bind:value={n} />
        <div>
            Zoom: <input type="range" min="0.01" max="5" step="0.1" bind:value={zoomLevel} />
            Stochasticity: <input type="range" min="1" max="10" step="0.1" bind:value={stochasticLevel} />
        </div> 
    </div> 
     
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="tree-container"
        on:mousedown={startDrag}
         on:mousemove={onDrag}
         on:mouseup={endDrag}
         on:mouseleave={endDrag}
    >
        <svg width="600" height="600" viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
            {#each lines as line, i}
                <line 
                    x1={line.p1.x} y1={line.p1.y} 
                    x2={line.p2.x} y2={line.p2.y} 
                    stroke={i % 2 === 0 ? "brown" : "green"} />
            {/each}
        </svg>
    </div> 
</div>
<Footer></Footer>
<style>
    .tree-container {
        margin: auto;
        border: 1px solid black;
        width: min-content;
        height: min-content;
        transform-origin: center;
    }
    .project-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .project-latex {
        margin-top: 30px;
    }
    .project-title {
        margin-top: 20px;
        font-size: 32px;
        font-weight: 300;
    }
    .project-controls {
        margin: auto;
        margin-top: 40px;
        text-align: center;
        font-size: 18px;
    } 
</style>