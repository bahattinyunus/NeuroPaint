import React, { useState, useRef } from 'react';
import { Stage, Layer, Line } from 'react-konva';

function App() {
    const [tool, setTool] = useState('pen');
    const [lines, setLines] = useState([]);
    const isDrawing = useRef(false);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing.current) {
            return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        // add point
        lastLine.points = lastLine.points.concat([point.x, point.y]);

        // replace last
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    return (
        <div className="flex h-screen flex-col">
            <header className="flex items-center justify-between border-b px-6 py-4">
                <h1 className="text-2xl font-bold">NeuroPaint</h1>
                <div className="flex gap-2">
                    <button
                        className={`rounded px-4 py-2 ${tool === 'pen' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                        onClick={() => setTool('pen')}
                    >
                        Pen
                    </button>
                    <button
                        className={`rounded px-4 py-2 ${tool === 'eraser' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
                        onClick={() => setTool('eraser')}
                    >
                        Eraser
                    </button>
                </div>
            </header>
            <main className="flex-1 bg-gray-50 dark:bg-gray-900">
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight - 80}
                    onMouseDown={handleMouseDown}
                    onMousemove={handleMouseMove}
                    onMouseup={handleMouseUp}
                    className="bg-white shadow-lg m-4 rounded-lg overflow-hidden"
                >
                    <Layer>
                        {lines.map((line, i) => (
                            <Line
                                key={i}
                                points={line.points}
                                stroke="#df4b26"
                                strokeWidth={5}
                                tension={0.5}
                                lineCap="round"
                                lineJoin="round"
                                globalCompositeOperation={
                                    line.tool === 'eraser' ? 'destination-out' : 'source-over'
                                }
                            />
                        ))}
                    </Layer>
                </Stage>
            </main>
        </div>
    );
}

export default App;
