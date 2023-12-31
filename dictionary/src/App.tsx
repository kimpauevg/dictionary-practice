import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initNodes = [
  {
    id: '1',
    data: { label: 'Микросервисная архитектура' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Микрофронтенды' },
    position: { x: 0, y: 100 },
  },
  {
    id: '4',
    data: { label: 'Интеграция во время сборки' },
    position: { x: -200, y: 200 },
  },
  {
    id: '5',
    data: { label: 'Интеграция на стороне клиента' },
    position: { x: 0, y: 200 },
  },
  {
    id: '6',
    data: { label: 'Периферийное включение' },
    position: { x: 200, y: 200 },
  },
  {
    id: '7',
    data: { label: 'Периферийный сервер' },
    position: { x: 200, y: 100 },
  },
  {
    id: '8',
    data: { label: 'Iframe' },
    position: { x: 200, y: 300 },
  },
  {
    id: '9',
    data: { label: 'Интеграция с помощью iframe' },
    position: { x: 150, y: 400 },
  },
  {
    id: '10',
    data: { label: 'Веб-компоненты' },
    position: { x: -200, y: 300 },
  },
  {
    id: '11',
    data: { label: 'Интеграция с помощью веб-компонентов' },
    position: { x: -150, y: 400 },
  },
];

const initEdges = [
  {
    id: '1-2',
    source: '1',
    target: '2',
  },
  {
    id: '7-6',
    source: '7',
    target: '6',
  },
  {
    id: '1-2',
    source: '1',
    target: '2',
  },
  {
    id: '2-6',
    source: '2',
    target: '6',
  },
  {
    id: '2-5',
    source: '2',
    target: '5',
  },
  {
    id: '2-4',
    source: '2',
    target: '4',
  },
  {
    id: '5-9',
    source: '5',
    target: '9',
  },
  {
    id: '5-11',
    source: '5',
    target: '11',
  },
  {
    id: '8-9',
    source: '8',
    target: '9',
  },
  {
    id: '10-11',
    source: '10',
    target: '11',
  },

];

function App() {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, , onEdgesChange] = useEdgesState(initEdges);

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      fitView
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default App;
