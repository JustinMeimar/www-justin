<script lang="ts">

    import { onMount } from 'svelte';
    import Footer from '../../Footer.svelte';
    import Navbar from '../../Navbar.svelte';
    import Katex from 'svelte-katex';

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
        point: Point | null
        parentPoint: Point | null
    };

    // tree parameters
    let n = 10;
    let k = 8;
    let j = 5; 
    
    // branch structures
    let lines : Line[] = [];
    let dfsNodeArr : Node[] = [];
    let i = 0;

    const transform = (attatchPoint: Point, node: Node) => {
        let thetaX = 1 / (Math.random() - 0.5);
        let thetaY = 1 / Math.random() - 0.1;

        let newPoint: Point = {
            x: attatchPoint.x + (node.dist + thetaX * 1), 
            y: attatchPoint.y - (node.dist + thetaY * 1), 
        };

        node.parentPoint = attatchPoint;
        node.point = newPoint;
    }
    
    const initializeNodeCoords = (nodeMap: Node[]) => {

        const root : Point = {x: 250, y: 400};
        let newNodes: Node[] = []; 
        let stack: Node[] = [];
        let prevNode: (Node | null) = null;
        let attatchNode: Node = {
            id: 0, dist: -1, height: -1, point: root, parentPoint: null
        };
        
        nodeMap.map(node => {

            if (prevNode && prevNode.height + 1 == node.height) {
                // go down a level of tree
                stack.push(attatchNode);
                attatchNode = prevNode; 
            } 
            if (prevNode && prevNode.height -1 == node.height) {
                // go back up a level tree
                attatchNode = stack[stack.length -1]; 
                stack.pop();
            }

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

    const growTree = (n: number, h: number = 0) => {
        dfsNodeArr.push({id: i+1, dist: n, height: h, point: null, parentPoint: null});
        i++;
        if (n <= 5) {
            return n;
        }
        growTree((2*n)/3, h+1);
        growTree((2*n)/3, h+1);
        growTree((2*n)/3, h+1);
    }

    $: {
        if (n) {
            dfsNodeArr = [];
            lines=[];
            i = 0;
            growTree(n);
            initializeNodeCoords(dfsNodeArr);
        }
    }
 
    let zoomLevel = 1;
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

    onMount(() => { 
        console.log("mounted");
    });

</script>
<Navbar></Navbar>
<div>
    k: {k}<input type="range" min="12" max="30" bind:value={k} />
    j: {j}<input type="range" min="12" max="30" bind:value={j} />
    n: {n} <input type="range" min="12" max="30" bind:value={n} />
    
    <div>
        Zoom: <input type="range" min="0.01" max="2" step="0.1" bind:value={zoomLevel} />
    </div>
    
    <Katex displayMode>T(n) = 3T(2n/3)</Katex> 
    
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
                    stroke={i % 2 === 0 ? "red" : "black"} />
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
</style>