<script lang="ts">

    import { onMount } from 'svelte';
    import Footer from '../../Footer.svelte';
    import Navbar from '../../Navbar.svelte';
    import { Nav } from '@sveltestrap/sveltestrap';

    type Point = {
        x: number,
        y: number
    };

    type Line = {
        p1: Point,
        p2: Point
    }

    // tree parameters
    let k = 8;
    let j = 5;
    
    const root : Point = {x: 100, y: 50};

    let treeLines = [
        { x1: root.x, y1: root.y, x2: 150, y2: 100 },
        { x1: root.x, y1: root.y, x2: 50, y2: 100 },
    ];
    // let root = {x1: };

    let lines : Line[] = [];
    let i = 0;
    let dfs_arr : number[] = [];

    const transform = (prevPoint: Point, length: number) : Point => {
        let thetaX = 1 / Math.random();
        let thetaY = 1 / Math.random();
        console.log(thetaX, thetaY);
        let newPoint: Point = {x: prevPoint.x + length * 25 * thetaX, y: prevPoint.y + length * 15 * thetaY};
        return newPoint;
    }

    const mapDfsToTree = () => {
        let currentPoint : Point = root;
        let newLines: Line[] = [];
        dfs_arr.map(el => {
            let newPoint: Point = transform(currentPoint, el);
            let line : Line = {p1: currentPoint, p2: newPoint};
            newLines.push(line);
        })

        lines = newLines;
    }

    const growTree = (n: number, h: number) => {
        // console.log(i, h, n); 
        dfs_arr.push(n);
        i++;
        if (n <= 3) {
            return n;
        }
        growTree((2*n)/7, h+1);
        growTree((2*n)/5, h+1);
        growTree((2*n)/9, h+1);
    }

    onMount(() => { 
        growTree(12, 0);
        mapDfsToTree();
        console.log(lines);
    });
</script>
<Navbar></Navbar>
<div>
    k <input type="range" min="12" max="30" bind:value={k} />
    j <input type="range" min="12" max="30" bind:value={j} />
    <div class="tree-container">
        <svg width="600" height="600">
        {#each lines as line}
            <line 
                x1={line.p1.x} y1={line.p1.y} 
                x2={line.p2.x} y2={line.p2.y} 
                stroke="black" />
        {/each}
        </svg>
    </div> 
</div>
<Footer></Footer>
<style>
    .tree-container {
        border: 1px solid black;
        width: min-content;
        height: min-content;
    }
</style>